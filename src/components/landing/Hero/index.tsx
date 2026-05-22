import React, {type ReactNode} from 'react';
import clsx from 'clsx';
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

export default function Hero({serverCount}: HeroProps): ReactNode {
  const formatted = roundedServerCount(serverCount).toLocaleString('fr-FR');
  return (
    <section className={clsx(shared.landing, styles.section)}>
      <div className={shared.container}>
        <div className={styles.content}>
          <div className={styles.preTitleWrap}>
            <div className={styles.preTitleText}>
              Utilisé par plus de {formatted} serveurs
            </div>
          </div>
          <h1 className={styles.title}>
            Le meilleur bot Discord de{' '}
            <span className={shared.textGradient}>sécurité</span>
          </h1>
          <p className={styles.description}>
            Empêchez les utilisateurs malintentionnés de nuire à votre serveur
            Discord.
          </p>
          <div className={styles.buttonList}>
            <a
              href="https://raidprotect.bot/invite"
              target="_blank"
              rel="noopener noreferrer"
              className={shared.btnPrimary}>
              Ajouter à Discord
            </a>
            <a
              href="#features"
              rel="noopener noreferrer"
              className={shared.btnSecondary}>
              Voir les fonctionnalités
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
