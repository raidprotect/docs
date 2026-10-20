/**
 * Swizzle (eject) : les badges du sidebar (customProps.badges) suivent aussi le titre de la page.
 */
import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc, useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import type {PropSidebarItem} from '@docusaurus/plugin-content-docs';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import type {Props} from '@theme/DocItem/Content';
import FeatureBadges, {type FeatureBadge} from '@site/src/components/FeatureBadges';

function useSyntheticTitle() {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const shouldRender = !frontMatter.hide_title && typeof contentTitle === 'undefined';
  return shouldRender ? metadata.title : null;
}

function findBadges(items: PropSidebarItem[], docId: string): FeatureBadge[] {
  for (const item of items) {
    if (item.type === 'link' && item.docId === docId) return (item.customProps?.badges ?? []) as FeatureBadge[];
    if (item.type === 'category') {
      const found = findBadges(item.items, docId);
      if (found.length) return found;
    }
  }
  return [];
}

export default function DocItemContent({children}: Props): ReactNode {
  const syntheticTitle = useSyntheticTitle();
  const {metadata} = useDoc();
  const sidebar = useDocsSidebar();
  const badges = sidebar ? findBadges(sidebar.items, metadata.id) : [];

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {syntheticTitle && (
        <header>
          <Heading as="h1">
            {syntheticTitle}
            {badges.length > 0 && (
              <>
                {' '}
                <FeatureBadges badges={badges} />
              </>
            )}
          </Heading>
        </header>
      )}
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
