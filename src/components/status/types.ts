export type ClusterState = 'operational' | 'degraded' | 'down'
export type ShardState = 'ready' | 'starting' | 'reconnecting' | 'down'

export type ShardInfo = {
    id: number
    state: ShardState
    guilds: number
}

export type ClusterInfo = {
    id: number | 'unassigned'
    state: ClusterState
    shards: ShardInfo[]
}

export type FleetStatus = {
    product: string
    collectedAt: string
    stale: boolean
    ageSeconds?: number
    complete: boolean
    totals: {shards: number; shardsReady: number; guilds: number; members: number}
    clusters: ClusterInfo[]
}

export type GlobalState = 'operational' | 'disruption' | 'outage' | 'unknown'

/** Déduit le bandeau global des états de clusters. */
export function deriveGlobalState(clusters: ClusterInfo[]): GlobalState {
    if (clusters.length === 0) return 'unknown'
    if (clusters.every((c) => c.state === 'down')) return 'outage'
    if (clusters.some((c) => c.state !== 'operational')) return 'disruption'
    return 'operational'
}

/** Lit l'en-tête Retry-After (secondes) ; null si absent ou illisible. */
export function parseRetryAfter(value: string | null): number | null {
    if (!value) return null
    const seconds = Number(value)
    if (!Number.isFinite(seconds) || seconds < 0) return null
    return Math.ceil(seconds)
}
