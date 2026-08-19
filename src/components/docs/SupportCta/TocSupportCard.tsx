import React, {type ReactNode} from 'react';
import Translate from '@docusaurus/Translate';
import {SUPPORT_INVITE_URL, useSupportServer} from './supportServer';
import styles from './tocCard.module.css';

/* Petite carte support affichée sous le sommaire de droite (desktop uniquement,
 * masquée sur mobile). Version condensée de l'encart de fin de page. */

export default function TocSupportCard(): ReactNode {
  const server = useSupportServer();

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <a
          href={SUPPORT_INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.plainLink}
          aria-label={server.name}>
          <img
            src={server.iconUrl}
            alt=""
            width={36}
            height={36}
            loading="lazy"
            className={styles.icon}
          />
        </a>
        <a
          href={SUPPORT_INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.name} ${styles.plainLink}`}>
          {server.name}
        </a>
      </div>

      <a
        href={SUPPORT_INVITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.join}>
        <Translate
          id="docs.support.cta"
          description="Button label of the end-of-doc support CTA">
          Rejoindre le support
        </Translate>
      </a>
    </div>
  );
}
