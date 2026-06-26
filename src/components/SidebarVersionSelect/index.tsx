import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  useVersions,
  useActiveDocContext,
  useDocsPreferredVersion,
} from '@docusaurus/plugin-content-docs/client';
import {translate} from '@docusaurus/Translate';
import type {GlobalVersion} from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

/**
 * Sélecteur de version dans la sidebar de la doc, sous forme de switch segmenté
 * (un seul rectangle avec séparation entre les segments) : Stable / Bêta. Le
 * dropdown de version a été retiré de la navbar ; la langue, elle, y reste.
 */
export default function SidebarVersionSelect(): ReactNode {
  const versions = useVersions(undefined);
  const {activeVersion, alternateDocVersions} = useActiveDocContext(undefined);
  const {savePreferredVersionName} = useDocsPreferredVersion(undefined);

  // Rien à proposer s'il n'y a pas au moins deux versions.
  if (versions.length < 2) {
    return null;
  }

  // Stable (lastVersion) en premier, Bêta ensuite.
  const ordered = [...versions].sort(
    (a, b) => Number(b.isLast) - Number(a.isLast),
  );

  // Même doc dans la version cible si dispo, sinon le doc principal / la racine.
  const targetPath = (version: GlobalVersion): string => {
    const alternate = alternateDocVersions[version.name];
    const main = version.docs.find((doc) => doc.id === version.mainDocId);
    return (alternate ?? main)?.path ?? version.path;
  };

  const groupLabel = translate({
    id: 'theme.docs.sidebar.versionLabel',
    message: 'Version',
    description: 'Label of the version selector in the docs sidebar',
  });

  return (
    <div className={styles.wrap}>
      <span className={styles.label}>{groupLabel}</span>
      <div className={styles.switch} role="group" aria-label={groupLabel}>
        {ordered.map((version) => {
          const isActive = version.name === activeVersion?.name;
          return (
            <Link
              key={version.name}
              to={targetPath(version)}
              className={clsx(
                styles.segment,
                isActive && styles.segmentActive,
              )}
              aria-current={isActive ? 'true' : undefined}
              onClick={() => savePreferredVersionName(version.name)}>
              {version.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
