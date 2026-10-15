import React, {type ReactNode} from 'react';
import Link from '@theme-original/DocSidebarItem/Link';
import type LinkType from '@theme/DocSidebarItem/Link';
import type {WrapperProps} from '@docusaurus/types';
import {translate} from '@docusaurus/Translate';

type Props = WrapperProps<typeof LinkType>;

const BADGES = {
  experiment: () => translate({id: 'sidebar.badge.experiment', message: 'Expérimentation'}),
  premium: () => translate({id: 'sidebar.badge.premium', message: 'Premium'}),
};

// Les badges déclarés dans customProps.badges du sidebar s'affichent après le titre.
export default function DocSidebarItemLinkWrapper(props: Props): ReactNode {
  const badges = (props.item.customProps?.badges ?? []) as (keyof typeof BADGES)[];
  if (!badges.length) return <Link {...props} />;

  const label = (
    <span className="sidebar-badged">
      {props.item.label}
      {badges.map((badge) => (
        <span key={badge} className={`badge-${badge}`}>{BADGES[badge]()}</span>
      ))}
    </span>
  );

  return <Link {...props} item={{...props.item, label: label as unknown as string}} />;
}
