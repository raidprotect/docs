import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {localizedRedirectUrl} from '@site/src/utils/links';
import styles from './styles.module.css';

/* Ligne « pro » discrète sous les CTAs du hero : deux liens condensés vers
 * l'offre Business (page interne) et la réservation d'appel (redirection de
 * domaine). Partagée entre l'accueil et les pages communautés. */

function Arrow(): ReactNode {
  return (
    <span className={styles.arrow} aria-hidden="true">
      →
    </span>
  );
}

export default function ProLinks({className}: {className?: string}): ReactNode {
  const {
    siteConfig: {url: siteUrl},
    i18n: {currentLocale, defaultLocale},
  } = useDocusaurusContext();
  const appointmentUrl = localizedRedirectUrl(
    siteUrl,
    currentLocale,
    defaultLocale,
    '/appointment',
  );

  return (
    <div className={clsx(styles.pro, className)}>
      <span className={styles.label}>
        <Translate
          id="cta.pro.label"
          description="Prefix of the professional links line under the hero buttons">
          Professionnel ?
        </Translate>
      </span>
      <Link to="/business" className={styles.link}>
        <Translate
          id="cta.pro.offer"
          description="Pro line: link to the Business offer page">
          Découvrir notre offre
        </Translate>
        <Arrow />
      </Link>
      <span className={styles.sep} aria-hidden="true" />
      <a
        href={appointmentUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}>
        <Translate
          id="cta.pro.call"
          description="Pro line: link to book a call">
          Réserver un appel
        </Translate>
        <Arrow />
      </a>
    </div>
  );
}
