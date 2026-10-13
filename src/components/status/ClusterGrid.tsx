import React, {useEffect, useId, useState, type ReactNode} from 'react'
import {translate} from '@docusaurus/Translate'
import {usePluralForm} from '@docusaurus/theme-common'
import {clusterName, clusterStateLabel, shardStateLabel} from './labels'
import type {ClusterInfo} from './types'
import styles from '@site/src/pages/status.module.css'

function ClusterCell({cluster, locale}: {cluster: ClusterInfo; locale: string}): ReactNode {
    const detailId = useId()
    const [pinned, setPinned] = useState(false)
    // Échap masque le détail même si le survol ou le focus le gardent ouvert (WCAG 1.4.13).
    const [dismissed, setDismissed] = useState(false)
    const [hovered, setHovered] = useState(false)
    const [focused, setFocused] = useState(false)
    const visible = !dismissed && (pinned || hovered || focused)
    const {selectMessage} = usePluralForm()
    const name = clusterName(cluster.id)
    const stateLabel = clusterStateLabel(cluster.state)
    const ready = cluster.shards.filter((s) => s.state === 'ready').length
    const number = new Intl.NumberFormat(locale)

    const dismiss = () => {
        setPinned(false)
        setDismissed(true)
    }

    // Échap doit fermer le détail même si le focus est ailleurs (survol seul).
    useEffect(() => {
        if (!visible) return undefined
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setPinned(false)
                setDismissed(true)
            }
        }
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [visible])

    return (
        <li
            className={`${styles.cell} ${pinned ? styles.cellPinned : ''} ${dismissed ? styles.cellDismissed : ''}`}
            onKeyDown={(e) => {
                if (e.key === 'Escape') dismiss()
            }}
            onFocus={() => setFocused(true)}
            onBlur={(e) => {
                if (e.currentTarget.contains(e.relatedTarget as Node | null)) return
                setFocused(false)
                if (!hovered) setDismissed(false)
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={(e) => {
                setHovered(false)
                if (!e.currentTarget.contains(document.activeElement)) setDismissed(false)
            }}>
            <button
                type="button"
                className={`${styles.cellButton} ${styles[`tone_${cluster.state}`]}`}
                aria-describedby={detailId}
                aria-expanded={visible}
                onClick={() => {
                    setDismissed(false)
                    setPinned((p) => !p)
                }}>
                <span className={styles.dot} aria-hidden="true" />
                <span className={styles.cellName}>{name}</span>
                <span className={styles.cellState}>{stateLabel}</span>
                <span className={styles.cellMeta}>
                    {translate(
                        {id: 'status.cluster.ready', message: '{ready}/{total} prêts', description: 'Status page: ready shards over total shards in a cluster'},
                        {ready, total: cluster.shards.length},
                    )}
                </span>
            </button>
            <div id={detailId} role="tooltip" className={styles.detail}>
                <div className={styles.detailBox} tabIndex={cluster.shards.length > 8 ? 0 : undefined}>
                    <strong>{name}</strong>
                    <ul className={styles.shardList}>
                        {cluster.shards.map((shard) => (
                            <li key={shard.id} className={styles.shardRow}>
                                <span>{translate({id: 'status.shard.label', message: 'Shard {id}', description: 'Status page: shard name'}, {id: shard.id})}</span>
                                <span className={`${styles.shardState} ${styles[`tone_${shard.state === 'ready' ? 'operational' : shard.state === 'down' ? 'down' : 'degraded'}`]}`}>
                                    {shardStateLabel(shard.state)}
                                </span>
                                <span className={styles.shardGuilds}>
                                    {selectMessage(
                                        shard.guilds,
                                        translate({id: 'status.shard.guilds', message: '{count} serveur|{count} serveurs', description: 'Status page: number of servers on a shard (singular|plural)'}),
                                    ).replace('{count}', number.format(shard.guilds))}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    )
}

export default function ClusterGrid({clusters, locale}: {clusters: ClusterInfo[]; locale: string}): ReactNode {
    return (
        <ul className={styles.grid}>
            {clusters.map((cluster) => (
                <ClusterCell key={String(cluster.id)} cluster={cluster} locale={locale} />
            ))}
        </ul>
    )
}
