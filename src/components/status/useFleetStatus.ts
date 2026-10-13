import {useCallback, useEffect, useRef, useState} from 'react'
import {parseRetryAfter, type FleetStatus} from './types'

const REFRESH_MS = 30_000
// Fenêtre de limitation du kit : Retry-After n'est pas exposé par le CORS, d'où ce repli.
const DEFAULT_RETRY_MS = 60_000

export type FleetState = {
    /** Dernière réponse valide, conservée si un rafraîchissement échoue. */
    data: FleetStatus | null
    /** `outage` : réponse 503. `unavailable` : URL absente, réseau ou réponse illisible. */
    problem: 'outage' | 'unavailable' | null
    loading: boolean
    /** Horodatage (ms) du dernier succès, null tant qu'aucune réponse valide n'est arrivée. */
    lastOkAt: number | null
}

/**
 * Interroge GET {apiUrl}/public/status toutes les 30 s.
 * Pause quand l'onglet est caché, appel immédiat au retour. Une seule requête
 * à la fois ; sur 429 le prochain appel attend Retry-After.
 */
export function useFleetStatus(apiUrl: string): FleetState {
    const [state, setState] = useState<FleetState>({
        data: null,
        problem: apiUrl ? null : 'unavailable',
        loading: Boolean(apiUrl),
        lastOkAt: null,
    })
    const inflight = useRef<AbortController | null>(null)
    const retryUntil = useRef(0)

    const load = useCallback(async () => {
        if (!apiUrl || inflight.current || Date.now() < retryUntil.current) return
        const controller = new AbortController()
        inflight.current = controller
        try {
            const response = await fetch(`${apiUrl}/public/status`, {
                signal: controller.signal,
                headers: {Accept: 'application/json'},
            })
            if (response.status === 429) {
                const seconds = parseRetryAfter(response.headers.get('Retry-After'))
                retryUntil.current = Date.now() + (seconds === null ? DEFAULT_RETRY_MS : seconds * 1000)
                setState((s) => ({...s, loading: false, problem: s.data ? s.problem : 'unavailable'}))
            } else if (response.status === 503) {
                setState((s) => ({...s, data: null, problem: 'outage', loading: false}))
            } else if (!response.ok) {
                throw new Error(`status ${response.status}`)
            } else {
                const data = (await response.json()) as FleetStatus
                if (!Array.isArray(data.clusters) || !data.totals) throw new Error('bad payload')
                setState({data, problem: null, loading: false, lastOkAt: Date.now()})
            }
        } catch (error) {
            if (controller.signal.aborted) return
            setState((s) => ({...s, loading: false, problem: s.data ? null : 'unavailable'}))
        } finally {
            if (inflight.current === controller) inflight.current = null
        }
    }, [apiUrl])

    useEffect(() => {
        if (!apiUrl) return undefined
        let timer: ReturnType<typeof setInterval> | null = null

        const start = () => {
            if (timer === null) timer = setInterval(load, REFRESH_MS)
        }
        const stop = () => {
            if (timer !== null) {
                clearInterval(timer)
                timer = null
            }
        }
        const onVisibility = () => {
            if (document.hidden) {
                stop()
            } else {
                void load()
                start()
            }
        }

        if (!document.hidden) {
            void load()
            start()
        }
        document.addEventListener('visibilitychange', onVisibility)
        return () => {
            stop()
            document.removeEventListener('visibilitychange', onVisibility)
            inflight.current?.abort()
            inflight.current = null
        }
    }, [apiUrl, load])

    return state
}
