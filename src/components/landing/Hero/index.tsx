import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import shared from '../styles/shared.module.css';
import styles from './styles.module.css';

export default function Hero(): ReactNode {
  return (
    <section className={clsx(shared.landing, styles.section)}>
      <div className={shared.container}>
        <div className={styles.content}>
          <div className={styles.preTitleWrap}>
            <div className={styles.preTitleText}>
              Utilisé par plus de 350 000 serveurs
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
