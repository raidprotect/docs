import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {useLocation} from '@docusaurus/router';
import styles from './styles.module.css';

type LegalLayoutProps = {
  /** Title shown in the hero H1 and used as the page <title>. */
  title: string;
  /**
   * Already-localized "last updated" string (e.g. "1 février 2025").
   * Rendered verbatim under the H1.
   */
  lastUpdated: string;
  /** Optional meta description for the page. */
  description?: string;
  children: ReactNode;
};

type MenuItem = {
  to: string;
  id: string;
  defaultMessage: string;
};

const MENU: readonly MenuItem[] = [
  {to: '/legal', id: 'legal.menu.legal', defaultMessage: 'Mentions légales'},
  {to: '/terms', id: 'legal.menu.terms', defaultMessage: "Conditions générales d'utilisation"},
  {to: '/privacy', id: 'legal.menu.privacy', defaultMessage: 'Politique de confidentialité'},
  {to: '/cookies', id: 'legal.menu.cookies', defaultMessage: 'Politique des cookies'},
];

function stripLocale(pathname: string): string {
  // Remove any locale prefix like /en, /de, /es, /pt (default fr has no prefix).
  return pathname.replace(/^\/(en|de|es|pt)(?=\/|$)/, '') || '/';
}

export default function LegalLayout({
  title,
  lastUpdated,
  description,
  children,
}: LegalLayoutProps): ReactNode {
  const {pathname} = useLocation();
  const currentPath = stripLocale(pathname).replace(/\/$/, '') || '/';

  return (
    <Layout title={title} description={description}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.lastUpdated}>{lastUpdated}</p>
          <nav className={styles.menu} aria-label={title}>
            {MENU.map((item) => {
              const isActive = currentPath === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={clsx(styles.menuLink, isActive && styles.menuLinkActive)}
                  aria-current={isActive ? 'page' : undefined}>
                  <Translate id={item.id}>{item.defaultMessage}</Translate>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main className={styles.container}>{children}</main>
    </Layout>
  );
}
