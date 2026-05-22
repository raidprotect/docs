import React, {type ReactNode} from 'react';
import Head from '@docusaurus/Head';
import clsx from 'clsx';
import shared from '@site/src/components/landing/styles/shared.module.css';
import frame from './frame.module.css';
import styles from './cta.module.css';

export default function FrameCta(): ReactNode {
  return (
    <>
      <Head>
        <title>CTA Section</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="designed for iframe" />
      </Head>
      <main className={frame.frame}>
        <section className={clsx(shared.landing, styles.section)}>
          <div className={shared.container}>
            <div className={styles.wrap}>
              <div className={styles.contentWrap}>
                <h2 className={styles.title}>
                  Garder une longueur{' '}
                  <span className={shared.textGradient}>d'avance</span>
                </h2>
                <p className={styles.description}>
                  Ajoutez RaidProtect et commencez à protéger votre serveur dès
                  aujourd'hui.
                </p>
                <div className={styles.buttonList}>
                  <a
                    href="https://raidprotect.bot/invite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={shared.btnPrimary}>
                    Ajouter le bot
                  </a>
                  <a
                    href="https://raidprotect.bot/discord"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={shared.btnSecondary}>
                    Rejoindre le serveur
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
