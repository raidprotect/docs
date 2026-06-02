import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import shared from '../styles/shared.module.css';
import styles from './styles.module.css';

type HeroProps = {
  /** Nombre brut de serveurs, arrondi à la dizaine de milliers inférieure
   *  (pallier 50 000) pour produire un chiffre stable façon checkpoint. */
  serverCount?: number;
};

const PRE_TITLE_FALLBACK = 350_000;
const PRE_TITLE_STEP = 50_000;

function roundedServerCount(raw: number | undefined): number {
  if (raw == null || !Number.isFinite(raw)) return PRE_TITLE_FALLBACK;
  return Math.floor(raw / PRE_TITLE_STEP) * PRE_TITLE_STEP;
}

const LOCALE_TO_BCP47: Record<string, string> = {
  fr: 'fr-FR',
  en: 'en-US',
  de: 'de-DE',
  es: 'es-ES',
  pt: 'pt-PT',
};

export default function Hero({serverCount}: HeroProps): ReactNode {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const bcp47 = LOCALE_TO_BCP47[currentLocale] ?? currentLocale;
  const formatted = roundedServerCount(serverCount).toLocaleString(bcp47);
  return (
    <section className={clsx(shared.landing, styles.section)}>
      <div className={shared.container}>
        <div className={styles.content}>
          <div className={styles.preTitleWrap}>
            <div className={styles.preTitleText}>
              <Translate
                id="hero.preTitle"
                description="Hero pre-title displayed above the main title; {count} is a locale-formatted number of servers"
                values={{count: formatted}}>
                {'Utilisé par plus de {count} serveurs'}
              </Translate>
            </div>
          </div>
          <h1 className={styles.title}>
            <Translate
              id="hero.title"
              description="Hero main title; {highlight} renders the gradient-highlighted word"
              values={{
                highlight: (
                  <span className={shared.textGradient}>
                    <Translate
                      id="hero.title.highlight"
                      description="The highlighted word inside the hero title (security)">
                      sécurité
                    </Translate>
                  </span>
                ),
              }}>
              {'Le meilleur bot Discord de {highlight}'}
            </Translate>
          </h1>
          <p className={styles.description}>
            <Translate
              id="hero.description"
              description="Hero description below the title">
              Empêchez les utilisateurs malintentionnés de nuire à votre serveur
              Discord.
            </Translate>
          </p>
          <div className={styles.buttonList}>
            <a
              href="https://raidprotect.bot/invite"
              target="_blank"
              rel="noopener noreferrer"
              className={shared.btnPrimary}>
              <Translate
                id="hero.cta.primary"
                description="Primary CTA: invite the bot to Discord">
                Ajouter à Discord
              </Translate>
            </a>
            <a
              href="#features"
              rel="noopener noreferrer"
              className={shared.btnSecondary}>
              <Translate
                id="hero.cta.secondary"
                description="Secondary CTA: scroll to the features section">
                Voir les fonctionnalités
              </Translate>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
