import React, {type ReactNode} from 'react';
import Head from '@docusaurus/Head';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import {localizedRedirectUrl} from '@site/src/utils/links';
import shared from '@site/src/components/landing/styles/shared.module.css';
import frame from './frame.module.css';
import styles from './cta.module.css';

export default function FrameCta(): ReactNode {
  const {
    i18n: {currentLocale, defaultLocale},
    siteConfig: {url: siteUrl},
  } = useDocusaurusContext();
  const inviteUrl = localizedRedirectUrl(
    siteUrl,
    currentLocale,
    defaultLocale,
    '/invite',
  );
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
                  <Translate
                    id="frame.cta.title"
                    description="Frame CTA title; {highlight} renders the gradient-highlighted word"
                    values={{
                      highlight: (
                        <span className={shared.textGradient}>
                          <Translate
                            id="frame.cta.title.highlight"
                            description="Highlighted word inside the frame CTA title">
                            d'avance
                          </Translate>
                        </span>
                      ),
                    }}>
                    {'Garder une longueur {highlight}'}
                  </Translate>
                </h2>
                <p className={styles.description}>
                  <Translate
                    id="frame.cta.description"
                    description="Frame CTA description">
                    Ajoutez RaidProtect et commencez à protéger votre serveur
                    dès aujourd'hui.
                  </Translate>
                </p>
                <div className={styles.buttonList}>
                  <a
                    href={inviteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={shared.btnPrimary}>
                    <Translate
                      id="frame.cta.primary"
                      description="Frame CTA primary button: add the bot to Discord">
                      Ajouter le bot
                    </Translate>
                  </a>
                  <a
                    href="https://raidprotect.bot/discord"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={shared.btnSecondary}>
                    <Translate
                      id="frame.cta.secondary"
                      description="Frame CTA secondary button: join the Discord server">
                      Rejoindre le serveur
                    </Translate>
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
