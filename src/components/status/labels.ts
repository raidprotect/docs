import {translate} from '@docusaurus/Translate'
import type {ClusterState, ShardState} from './types'

export function clusterStateLabel(state: ClusterState): string {
    switch (state) {
        case 'operational':
            return translate({id: 'status.state.operational', message: 'Opérationnel', description: 'Status page: cluster state operational'})
        case 'degraded':
            return translate({id: 'status.state.degraded', message: 'Dégradé', description: 'Status page: cluster state degraded'})
        default:
            return translate({id: 'status.state.down', message: 'Hors service', description: 'Status page: cluster state down'})
    }
}

export function shardStateLabel(state: ShardState): string {
    switch (state) {
        case 'ready':
            return translate({id: 'status.shardState.ready', message: 'Prêt', description: 'Status page: shard state ready'})
        case 'starting':
            return translate({id: 'status.shardState.starting', message: 'Démarrage', description: 'Status page: shard state starting'})
        case 'reconnecting':
            return translate({id: 'status.shardState.reconnecting', message: 'Reconnexion', description: 'Status page: shard state reconnecting'})
        default:
            return translate({id: 'status.shardState.down', message: 'Hors service', description: 'Status page: shard state down'})
    }
}

export function clusterName(id: number | 'unassigned'): string {
    if (id === 'unassigned') {
        return translate({id: 'status.cluster.unassigned', message: 'Non assigné', description: 'Status page: pseudo-cluster holding shards without an owner'})
    }
    return translate({id: 'status.cluster.label', message: 'Cluster {id}', description: 'Status page: cluster name'}, {id})
}
