import React, {type ReactNode} from 'react';
import {translate} from '@docusaurus/Translate';

export type FeatureBadge = 'experiment' | 'premium';

const LABELS: Record<FeatureBadge, () => string> = {
  experiment: () => translate({id: 'sidebar.badge.experiment', message: 'Expérimentation'}),
  premium: () => translate({id: 'sidebar.badge.premium', message: 'Premium'}),
};

export default function FeatureBadges({badges}: {badges: FeatureBadge[]}): ReactNode {
  return badges.map((badge) => (
    <span key={badge} className={`badge-${badge}`}>{LABELS[badge]()}</span>
  ));
}
