import React, {useEffect, useRef, useState, type FormEvent, type ReactNode} from 'react'
import Translate, {translate} from '@docusaurus/Translate'
import {clusterStateLabel} from './labels'
import {fetchInviteGuildId, fleetUsable, LookupError, parseQuery, type Located, type LookupFailure} from './lookup'
import type {FleetStatus} from './types'
import styles from '@site/src/pages/status.module.css'

function errorMessage(error: LookupFailure): string {
    switch (error) {
        case 'invalid_query':
            return translate({id: 'status.lookup.error.invalidQuery', message: "Entre l'identifiant de ton serveur (une suite de chiffres) ou un lien d'invitation valide.", description: 'Status page: lookup error, query is not a snowflake or an invite'})
        case 'invite_not_found':
            return translate({id: 'status.lookup.error.inviteNotFound', message: 'Invitation inconnue ou expirée', description: 'Status page: lookup error, invite unknown or expired'})
        case 'rate_limited':
            return translate({id: 'status.lookup.error.rateLimited', message: 'Trop de recherches, réessaie dans un instant', description: 'Status page: lookup error, Discord rate limited the invite lookup'})
        case 'fleet_unavailable':
            return translate({id: 'status.lookup.error.fleetUnavailable', message: "État de la flotte indisponible, réessaie dans un instant", description: 'Status page: lookup error, no fleet data to compute the shard'})
        default:
            return translate({id: 'status.lookup.error.network', message: 'La recherche a échoué, réessaie dans un instant', description: 'Status page: lookup error, the invite lookup failed on the network'})
    }
}

type Props = {
    /** Dernière réponse de /public/status ; sert au calcul du shard. */
    fleet: FleetStatus | null
    /** Emplacement du dernier identifiant cherché, recalculé à chaque rafraîchissement ; null sans recherche. */
    located: Located | null
    /** Reçoit l'identifiant de serveur trouvé par la recherche. */
    onFound: (guildId: string) => void
    /** Efface le résultat précédent dès qu'une nouvelle recherche démarre. */
    onReset: () => void
}

export default function GuildLookup({fleet, located, onFound, onReset}: Props): ReactNode {
    const [query, setQuery] = useState('')
    const [busy, setBusy] = useState(false)
    const [error, setError] = useState<LookupFailure | null>(null)
    const controllerRef = useRef<AbortController | null>(null)

    useEffect(() => () => controllerRef.current?.abort(), [])

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault()
        controllerRef.current?.abort()
        controllerRef.current = null
        setBusy(false)
        onReset()
        const parsed = parseQuery(query)
        if (!query.trim()) return
        if (!parsed) {
            setError('invalid_query')
            return
        }
        if (!fleetUsable(fleet)) {
            setError('fleet_unavailable')
            return
        }
        setError(null)
        if (parsed.kind === 'id') {
            onFound(parsed.id)
            return
        }
        const controller = new AbortController()
        controllerRef.current = controller
        setBusy(true)
        try {
            onFound(await fetchInviteGuildId(parsed.code, controller.signal))
        } catch (e) {
            if (controller.signal.aborted) return
            setError(e instanceof LookupError ? e.failure : 'network')
        } finally {
            if (controllerRef.current === controller) {
                controllerRef.current = null
                setBusy(false)
            }
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
                    <button type="submit" className={styles.lookupButton} disabled={!query.trim()}>
                        {busy
                            ? translate({id: 'status.lookup.searching', message: 'Recherche…', description: 'Status page: lookup button while searching'})
                            : translate({id: 'status.lookup.submit', message: 'Rechercher', description: 'Status page: lookup button'})}
                    </button>
                </div>
            </form>
            <div className={styles.lookupOutput} aria-live="polite">
                {error && <p className={styles.lookupError}>{errorMessage(error)}</p>}
                {!error && located && (
                    <p className={styles.lookupResult}>
                        {located.cluster === null
                            ? translate({id: 'status.lookup.unassigned', message: 'Shard {shard} : non assigné pour le moment', description: 'Status page: lookup result when the shard is unassigned or absent from the grid'}, {shard: located.shard})
                            : translate(
                                  {id: 'status.lookup.result', message: 'Ce serveur serait servi par le shard {shard}, cluster {cluster} ({state})', description: 'Status page: lookup result, wording must not claim the bot is on the server'},
                                  {shard: located.shard, cluster: String(located.cluster.id), state: clusterStateLabel(located.cluster.state)},
                              )}
                    </p>
                )}
            </div>
        </section>
    )
}
