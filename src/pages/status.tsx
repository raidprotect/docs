import React, {useEffect, useMemo, useRef, useState, type ReactNode} from 'react'
import Layout from '@theme/Layout'
import Translate, {translate} from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import ClusterGrid, {type SearchHit} from '@site/src/components/status/ClusterGrid'
import GuildLookup from '@site/src/components/status/GuildLookup'
import {locate} from '@site/src/components/status/lookup'
import {deriveGlobalState, type GlobalState} from '@site/src/components/status/types'
import {useFleetStatus} from '@site/src/components/status/useFleetStatus'
import styles from './status.module.css'

function bannerTitle(state: GlobalState | 'loading' | 'unavailable'): string {
    switch (state) {
        case 'operational':
            return translate({id: 'status.banner.operational', message: 'Tout va bien', description: 'Status page: global banner, everything works'})
        case 'disruption':
            return translate({id: 'status.banner.disruption', message: 'Perturbation en cours', description: 'Status page: global banner, some clusters are degraded or down'})
        case 'unknown':
            return translate({id: 'status.banner.unknown', message: 'État inconnu', description: 'Status page: global banner when the API returns no cluster'})
        case 'outage':
            return translate({id: 'status.banner.outage', message: 'Panne', description: 'Status page: global banner, outage'})
        case 'loading':
            return translate({id: 'status.banner.loading', message: "Chargement de l'état…", description: 'Status page: global banner while loading'})
        default:
            return translate({id: 'status.banner.unavailable', message: 'Statut indisponible', description: 'Status page: global banner when the status cannot be fetched'})
    }
}

export default function StatusPage(): ReactNode {
    const {siteConfig, i18n} = useDocusaurusContext()
    const apiUrl = String(siteConfig.customFields?.statusApiUrl ?? '')
    const {data, problem, loading, lastOkAt} = useFleetStatus(apiUrl)
    const locale = i18n.currentLocale
    const number = new Intl.NumberFormat(locale)

    let banner: GlobalState | 'loading' | 'unavailable'
    if (data) banner = deriveGlobalState(data.clusters)
    else if (problem === 'outage') banner = 'outage'
    else if (problem === 'unavailable') banner = 'unavailable'
    else banner = loading ? 'loading' : 'unavailable'

    const tone = banner === 'operational' ? 'operational' : banner === 'disruption' ? 'degraded' : banner === 'outage' ? 'down' : 'neutral'
    const ageSeconds = data?.ageSeconds ?? 0
    // Force un rendu toutes les 5 s pour que l'âge reste à jour (onglet visible, données présentes).
    const [, setTick] = useState(0)
    useEffect(() => {
        if (lastOkAt === null) return undefined
        const timer = setInterval(() => {
            if (!document.hidden) setTick((t) => t + 1)
        }, 5000)
        return () => clearInterval(timer)
    }, [lastOkAt])
    // Dernier serveur cherché ; le shard est recalculé sur chaque nouvelle réponse (total de l'époque en cours).
    const [search, setSearch] = useState<{guildId: string; token: number} | null>(null)
    const searchCount = useRef(0)
    const located = useMemo(() => (search ? locate(search.guildId, data) : null), [search, data])
    const hit: SearchHit | null = search && located?.cluster ? {clusterId: located.cluster.id, shard: located.shard, token: search.token} : null
    const outdatedSeconds = lastOkAt !== null && Date.now() - lastOkAt > 90_000 ? Math.round((Date.now() - lastOkAt) / 1000) : null

    const totals: Array<[string, number]> = data
        ? [
              [translate({id: 'status.totals.shards', message: 'Shards', description: 'Status page: total shards'}), data.totals.shards],
              [translate({id: 'status.totals.shardsReady', message: 'Shards prêts', description: 'Status page: ready shards'}), data.totals.shardsReady],
              [translate({id: 'status.totals.guilds', message: 'Serveurs', description: 'Status page: total servers'}), data.totals.guilds],
              [translate({id: 'status.totals.members', message: 'Membres', description: 'Status page: total members'}), data.totals.members],
          ]
        : []

    const title = translate({id: 'status.head.title', message: 'Statut de RaidProtect', description: 'Status page: browser tab title'})
    const description = translate({id: 'status.head.description', message: "L'état en direct de RaidProtect : clusters, shards et recherche par serveur.", description: 'Status page: meta description'})

    return (
        <Layout title={title} description={description}>
            <main className={styles.page}>
                <header className={styles.header}>
                    <h1 className={styles.title}>
                        <Translate id="status.title" description="Status page: main heading">
                            État de RaidProtect
                        </Translate>
                    </h1>
                    <p className={styles.subtitle}>
                        <Translate id="status.subtitle" description="Status page: subtitle">
                            Suivi en direct. Mise à jour toutes les 30 secondes.
                        </Translate>
                    </p>
                </header>

                <div className={`${styles.banner} ${styles[`tone_${tone}`]}`} role="status">
                    <span className={styles.bannerDot} aria-hidden="true" />
                    <div>
                        <p className={styles.bannerTitle}>{bannerTitle(banner)}</p>
                        {!data && problem && (
                            <p className={styles.bannerText}>
                                {problem === 'outage'
                                    ? translate({id: 'status.outage.description', message: "Aucune donnée n'est disponible pour le moment.", description: 'Status page: text under the outage banner when the API answers 503'})
                                    : translate({id: 'status.unavailable.description', message: "Impossible de récupérer l'état pour le moment. Réessaie dans quelques instants.", description: 'Status page: text under the unavailable banner'})}
                            </p>
                        )}
                        {data && !data.complete && (
                            <p className={styles.bannerText}>
                                <Translate id="status.partial" description="Status page: discreet note when the data is incomplete">
                                    Données partielles
                                </Translate>
                            </p>
                        )}
                    </div>
                </div>

                {(data?.stale || outdatedSeconds !== null) && (
                    <div className={styles.freshness}>
                        {data?.stale && (
                            <p>
                                {translate({id: 'status.stale', message: "Données d'il y a {seconds} s", description: 'Status page: age of stale data in seconds'}, {seconds: ageSeconds})}
                            </p>
                        )}
                        {outdatedSeconds !== null && (
                            <p>
                                {translate({id: 'status.outdated', message: 'Dernière mise à jour il y a {seconds} s', description: 'Status page: shown when the last successful refresh is older than 90 seconds'}, {seconds: outdatedSeconds})}
                            </p>
                        )}
                    </div>
                )}

                {data && (
                    <>
                        <dl className={styles.totals}>
                            {totals.map(([label, value]) => (
                                <div key={label} className={styles.total}>
                                    <dt>{label}</dt>
                                    <dd>{number.format(value)}</dd>
                                </div>
                            ))}
                        </dl>
                        <section aria-labelledby="status-clusters-title">
                            <h2 id="status-clusters-title" className={styles.sectionTitle}>
                                <Translate id="status.clusters.title" description="Status page: heading of the clusters grid">
                                    Clusters
                                </Translate>
                            </h2>
                            <ClusterGrid clusters={data.clusters} locale={locale} hit={hit} />
                        </section>
                    </>
                )}

                <GuildLookup fleet={data} located={located} onReset={() => setSearch(null)} onFound={(guildId) => setSearch({guildId, token: ++searchCount.current})} />
            </main>
        </Layout>
    )
}
