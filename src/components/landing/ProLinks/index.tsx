import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

/* Lien « pro » sous les CTAs du hero : une seule accroche mise en avant vers
 * l'offre Business. Partagé entre l'accueil et les pages communautés. */

export default function ProLinks({className}: {className?: string}): ReactNode {
  return (
    <div className={clsx(styles.pro, className)}>
      <span className={styles.label}>
        <Translate
          id="cta.pro.label"
          description="Prefix of the professional link under the hero buttons">
          Professionnel ?
        </Translate>
      </span>
      <Link to="/business" className={styles.link}>
        <Translate
          id="cta.pro.offer"
          description="Pro line: link to the Business offer page">
          Découvrir notre offre
        </Translate>
      </Link>
    </div>
  );
}
