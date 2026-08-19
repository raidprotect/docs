import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {localizedRedirectUrl} from '@site/src/utils/links';
import CommunityTabs from '@site/src/components/communities/CommunityTabs';
import {ENTRY_BY_ID} from '@site/src/components/communities/registry';
import shared from '../styles/shared.module.css';
import styles from './styles.module.css';

/* Hero de l'accueil : univers « sécurité » de base, surmonté de la barre
 * d'onglets des univers. Un clic sur un onglet mène directement à la page
 * communauté correspondante (crypto, gaming, créateurs) ; l'accueil reste
 * l'onglet « Sécurité ». */

type HeroCarouselProps = {
  /** Nombre brut de serveurs, arrondi à la dizaine de milliers inférieure
   *  (pallier 50 000) pour produire un chiffre stable façon checkpoint. */
  serverCount?: number;
};

const PRE_TITLE_FALLBACK = 380_000;
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

const BASE = ENTRY_BY_ID.security;

export default function HeroCarousel({serverCount}: HeroCarouselProps): ReactNode {
  const {
    i18n: {currentLocale, defaultLocale},
    siteConfig: {url: siteUrl},
  } = useDocusaurusContext();
  const bcp47 = LOCALE_TO_BCP47[currentLocale] ?? currentLocale;
  const formatted = roundedServerCount(serverCount).toLocaleString(bcp47);
  const inviteUrl = localizedRedirectUrl(
    siteUrl,
    currentLocale,
    defaultLocale,
    '/invite',
  );
  const appointmentUrl = localizedRedirectUrl(
    siteUrl,
    currentLocale,
    defaultLocale,
    '/appointment',
  );

  return (
    <section className={clsx(shared.landing, styles.section)}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={shared.container}>
        <div className={styles.content}>
          <CommunityTabs activeId="security" />

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

          <div className={styles.slide}>
            <h1 className={styles.title}>{BASE.title}</h1>
            <p className={styles.description}>{BASE.description}</p>
            <div className={styles.buttonList}>
              <a
                href={inviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={shared.btnPrimary}>
                <Translate
                  id="hero.cta.primary"
                  description="Primary CTA: invite the bot to Discord">
                  Ajouter à Discord
                </Translate>
              </a>
              <a href="#features" className={shared.btnSecondary}>
                <Translate
                  id="hero.cta.secondary"
                  description="Secondary CTA: scroll to the features section">
                  Voir les fonctionnalités
                </Translate>
              </a>
            </div>
            <a
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.proLink}>
              <Translate
                id="hero.cta.appointment"
                description="Tertiary CTA below the hero buttons: professionals can book a call">
                Professionnel ? Réservez un appel
              </Translate>
              <span className={styles.proArrow} aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
