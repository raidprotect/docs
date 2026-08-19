import React, {type CSSProperties, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {CAROUSEL_ENTRIES} from '../registry';
import styles from './styles.module.css';

/* Barre d'onglets des univers (Sécurité · Crypto · Gaming · Créateurs),
 * partagée entre le hero de l'accueil et l'en-tête des pages communautés.
 * Chaque onglet est un lien direct vers la page de son univers ; l'onglet de
 * la page courante est marqué actif (pastille à l'accent + fond appuyé). */

type CommunityTabsProps = {
  /** Id de l'entrée active (pastille + style appuyé). */
  activeId: string;
  className?: string;
};

export default function CommunityTabs({
  activeId,
  className,
}: CommunityTabsProps): ReactNode {
  return (
    <nav className={clsx(styles.tabs, className)} aria-label="Univers RaidProtect">
      {CAROUSEL_ENTRIES.map((entry) => {
        const active = entry.id === activeId;
        const tabStyle = {'--tab-accent': entry.accent.accent} as CSSProperties;
        return (
          <Link
            key={entry.id}
            to={entry.path}
            style={tabStyle}
            className={clsx(styles.tab, active && styles.tabActive)}
            aria-current={active ? 'page' : undefined}>
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.label}>{entry.tabLabel}</span>
          </Link>
        );
      })}
    </nav>
  );
}
