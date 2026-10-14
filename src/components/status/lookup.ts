import type {ClusterInfo, FleetStatus} from './types'

export type ParsedQuery = {kind: 'id'; id: string} | {kind: 'invite'; code: string}

export type LookupFailure = 'invalid_query' | 'invite_not_found' | 'rate_limited' | 'network' | 'fleet_unavailable'

export class LookupError extends Error {
    constructor(readonly failure: LookupFailure) {
        super(failure)
    }
}

const SNOWFLAKE = /^\d{17,20}$/
const INVITE_URL = /^(?:https?:\/\/)?(?:www\.)?(?:discord\.gg|discord(?:app)?\.com\/invite)\/([A-Za-z0-9-]{2,64})\/?(?:[?#].*)?$/i
const INVITE_CODE = /^[A-Za-z0-9-]{2,64}$/

/** Distingue un identifiant Discord d'une invitation ; null si l'entrée n'est ni l'un ni l'autre. */
export function parseQuery(raw: string): ParsedQuery | null {
    const q = raw.trim()
    if (SNOWFLAKE.test(q)) return {kind: 'id', id: q}
    // Une suite de chiffres de mauvaise longueur est plus probablement un identifiant mal recopié qu'un code.
    if (/^\d+$/.test(q)) return null
    const url = INVITE_URL.exec(q)
    if (url) return {kind: 'invite', code: url[1]}
    if (INVITE_CODE.test(q)) return {kind: 'invite', code: q}
    return null
}

/** Shard d'un identifiant : (id >> 22) % total. BigInt, jamais Number avant le décalage. */
export function shardOf(id: string, totalShards: number): number {
    return Number((BigInt(id) >> 22n) % BigInt(totalShards))
}

/** True quand la dernière réponse permet de calculer un shard. */
export function fleetUsable(fleet: FleetStatus | null): fleet is FleetStatus {
    return fleet !== null && Number.isInteger(fleet.totals.shards) && fleet.totals.shards > 0
}

export type Located = {shard: number; cluster: ClusterInfo | null}

/** Place un identifiant sur la grille de la réponse donnée ; cluster null si non assigné ou absent. */
export function locate(guildId: string, fleet: FleetStatus | null): Located | null {
    if (!fleetUsable(fleet)) return null
    const shard = shardOf(guildId, fleet.totals.shards)
    const cluster = fleet.clusters.find((c) => c.id !== 'unassigned' && c.shards.some((s) => s.id === shard)) ?? null
    return {shard, cluster}
}

/** Résout une invitation en identifiant de serveur, depuis le navigateur, sans jeton ni cookie. */
export async function fetchInviteGuildId(code: string, signal: AbortSignal): Promise<string> {
    let response: Response
    try {
        response = await fetch(`https://discord.com/api/v10/invites/${encodeURIComponent(code)}`, {
            signal,
            credentials: 'omit',
            headers: {Accept: 'application/json'},
        })
    } catch {
        throw signal.aborted ? new DOMException('aborted', 'AbortError') : new LookupError('network')
    }
    if (response.status === 404) throw new LookupError('invite_not_found')
    if (response.status === 429) throw new LookupError('rate_limited')
    if (!response.ok) throw new LookupError('network')
    let id: unknown
    try {
        id = ((await response.json()) as {guild?: {id?: unknown}}).guild?.id
    } catch {
        if (signal.aborted) throw new DOMException('aborted', 'AbortError')
        throw new LookupError('network')
    }
    if (typeof id !== 'string' || !SNOWFLAKE.test(id)) throw new LookupError('invite_not_found')
    return id
}
