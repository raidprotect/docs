import React, {useEffect, useRef, useState, type FormEvent, type ReactNode} from 'react'
import Translate, {translate} from '@docusaurus/Translate'
import {clusterName, clusterStateLabel, shardStateLabel} from './labels'
import {parseRetryAfter, type GuildLookupResult} from './types'
import styles from '@site/src/pages/status.module.css'

type LookupError = 'invalid_query' | 'invite_not_found' | 'rate_limited' | 'unavailable'

type Outcome =
    | {kind: 'result'; result: GuildLookupResult}
    | {kind: 'error'; error: LookupError; retryAfter: number | null}

function errorMessage(error: LookupError, retryAfter: number | null): string {
    switch (error) {
        case 'invalid_query':
            return translate({id: 'status.lookup.error.invalidQuery', message: "Entre l'identifiant de ton serveur (une suite de chiffres) ou un lien d'invitation valide.", description: 'Status page: lookup error, query is not a snowflake or an invite'})
        case 'invite_not_found':
            return translate({id: 'status.lookup.error.inviteNotFound', message: "Cette invitation est introuvable ou a expiré.", description: 'Status page: lookup error, invite unknown or expired'})
        case 'rate_limited':
            return retryAfter === null
                ? translate({id: 'status.lookup.error.rateLimitedNoDelay', message: 'Trop de recherches. Réessaie dans un instant.', description: 'Status page: lookup error, rate limited without delay'})
                : translate({id: 'status.lookup.error.rateLimited', message: 'Trop de recherches. Réessaie dans {seconds} s.', description: 'Status page: lookup error, rate limited with delay in seconds'}, {seconds: retryAfter})
        default:
            return translate({id: 'status.lookup.error.unavailable', message: 'La recherche est indisponible pour le moment.', description: 'Status page: lookup error, service unavailable'})
    }
}

const KNOWN_ERRORS: LookupError[] = ['invalid_query', 'invite_not_found', 'rate_limited', 'unavailable']

export default function GuildLookup({apiUrl}: {apiUrl: string}): ReactNode {
    const [query, setQuery] = useState('')
    const [busy, setBusy] = useState(false)
    const [outcome, setOutcome] = useState<Outcome | null>(null)
    const controllerRef = useRef<AbortController | null>(null)

    useEffect(() => () => controllerRef.current?.abort(), [])

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault()
        const q = query.trim()
        if (!q || busy) return
        if (!apiUrl) {
            setOutcome({kind: 'error', error: 'unavailable', retryAfter: null})
            return
        }
        const controller = new AbortController()
        controllerRef.current = controller
        setBusy(true)
        try {
            const response = await fetch(`${apiUrl}/public/status/guild?q=${encodeURIComponent(q)}`, {
                signal: controller.signal,
                headers: {Accept: 'application/json'},
            })
            if (response.ok) {
                setOutcome({kind: 'result', result: (await response.json()) as GuildLookupResult})
            } else {
                let error: LookupError = 'unavailable'
                try {
                    const body = (await response.json()) as {error?: string}
                    if (KNOWN_ERRORS.includes(body.error as LookupError)) error = body.error as LookupError
                } catch {
                    // Corps illisible : on retombe sur « indisponible ».
                }
                setOutcome({kind: 'error', error, retryAfter: parseRetryAfter(response.headers.get('Retry-After'))})
            }
        } catch {
            if (controller.signal.aborted) return
            setOutcome({kind: 'error', error: 'unavailable', retryAfter: null})
        } finally {
            if (controllerRef.current === controller) controllerRef.current = null
            setBusy(false)
        }
    }

    const inputId = 'status-lookup-input'

    return (
        <section className={styles.lookup} aria-labelledby="status-lookup-title">
            <h2 id="status-lookup-title" className={styles.sectionTitle}>
                <Translate id="status.lookup.title" description="Status page: heading of the server lookup section">
                    Trouver le shard de ton serveur
                </Translate>
            </h2>
            <form className={styles.lookupForm} onSubmit={onSubmit}>
                <label htmlFor={inputId} className={styles.lookupLabel}>
                    <Translate id="status.lookup.label" description="Status page: label of the server lookup field">
                        Identifiant ou invitation de ton serveur
                    </Translate>
                </label>
                <div className={styles.lookupRow}>
                    <input
                        id={inputId}
                        className={styles.lookupInput}
                        type="text"
                        value={query}
                        maxLength={200}
                        autoComplete="off"
                        spellCheck={false}
                        placeholder={translate({id: 'status.lookup.placeholder', message: '123456789012345678 ou discord.gg/abc', description: 'Status page: placeholder of the server lookup field'})}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit" className={styles.lookupButton} disabled={busy || !query.trim()}>
                        {busy
                            ? translate({id: 'status.lookup.searching', message: 'Recherche…', description: 'Status page: lookup button while searching'})
                            : translate({id: 'status.lookup.submit', message: 'Rechercher', description: 'Status page: lookup button'})}
                    </button>
                </div>
            </form>
            <div className={styles.lookupOutput} aria-live="polite">
                {outcome?.kind === 'error' && (
                    <p className={styles.lookupError}>{errorMessage(outcome.error, outcome.retryAfter)}</p>
                )}
                {outcome?.kind === 'result' && (
                    <div className={styles.lookupResult}>
                        <p className={styles.lookupIntro}>
                            {translate({id: 'status.lookup.intro', message: 'Ce serveur serait servi par le shard {shard}.', description: 'Status page: lookup result, wording must not claim the bot is on the server'}, {shard: outcome.result.shard})}
                        </p>
                        <ul className={styles.lookupFacts}>
                            <li>
                                {translate({id: 'status.lookup.shard', message: 'Shard {shard} : {state}', description: 'Status page: lookup result shard line'}, {shard: outcome.result.shard, state: shardStateLabel(outcome.result.shardState)})}
                            </li>
                            <li>
                                {outcome.result.cluster === null
                                    ? translate({id: 'status.lookup.noCluster', message: 'Aucun cluster ne porte ce shard pour le moment.', description: 'Status page: lookup result when no cluster holds the shard'})
                                    : translate({id: 'status.lookup.cluster', message: '{cluster} : {state}', description: 'Status page: lookup result cluster line'}, {cluster: clusterName(outcome.result.cluster), state: clusterStateLabel(outcome.result.clusterState)})}
                            </li>
                        </ul>
                        <p className={styles.lookupNote}>
                            <Translate id="status.lookup.disclaimer" description="Status page: lookup disclaimer, the search does not tell whether the bot is on the server">
                                Cette recherche indique seulement où le serveur serait servi. Elle ne dit pas si RaidProtect est présent sur ce serveur.
                            </Translate>
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}
