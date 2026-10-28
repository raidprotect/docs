import React, {type ReactNode} from 'react';
import Link from '@theme-original/DocSidebarItem/Link';
import type LinkType from '@theme/DocSidebarItem/Link';
import type {WrapperProps} from '@docusaurus/types';
import FeatureBadges, {type FeatureBadge} from '@site/src/components/FeatureBadges';

type Props = WrapperProps<typeof LinkType>;

// Les badges déclarés dans customProps.badges du sidebar s'affichent après le titre.
// customProps.anchor fait pointer le lien vers une section de la page.
export default function DocSidebarItemLinkWrapper(rawProps: Props): ReactNode {
  const props = withAnchor(rawProps);
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

function withAnchor(props: Props): Props {
  const anchor = props.item.customProps?.anchor as string | undefined;
  if (!anchor) return props;
  const href = `${props.item.href}#${anchor}`;
  return {
    ...props,
    item: {...props.item, href},
    activePath: props.activePath === props.item.href ? href : props.activePath,
  };
}
