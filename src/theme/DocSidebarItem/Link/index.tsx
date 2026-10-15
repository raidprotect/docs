import React, {type ReactNode} from 'react';
import Link from '@theme-original/DocSidebarItem/Link';
import type LinkType from '@theme/DocSidebarItem/Link';
import type {WrapperProps} from '@docusaurus/types';
import FeatureBadges, {type FeatureBadge} from '@site/src/components/FeatureBadges';

type Props = WrapperProps<typeof LinkType>;

// Les badges déclarés dans customProps.badges du sidebar s'affichent après le titre.
export default function DocSidebarItemLinkWrapper(props: Props): ReactNode {
  const badges = (props.item.customProps?.badges ?? []) as FeatureBadge[];
  if (!badges.length) return <Link {...props} />;

  const label = (
    <span className="sidebar-badged">
      {props.item.label}
      <FeatureBadges badges={badges} />
    </span>
  );

  return <Link {...props} item={{...props.item, label: label as unknown as string}} />;
}
