import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import shared from '../styles/shared.module.css';
import styles from './styles.module.css';

const CHECK_ICON = '/img/landing/icon-02.svg';

function FeatureItem({children}: {children: ReactNode}) {
  return (
    <div className={styles.featureItem}>
      <img
        src={CHECK_ICON}
        alt=""
        loading="lazy"
        className={styles.featureIcon}
      />
      <div>{children}</div>
    </div>
  );
}

export default function Pricing(): ReactNode {
  return (
    <section
      id="pricing"
      className={clsx(shared.landing, styles.section)}>
      <div className={shared.container}>
        <div className={styles.titleWrap}>
          <div className={styles.titleInner}>
            <h2 className={styles.title}>
              Garder une longueur{' '}
              <span className={shared.textGradient}>d'avance</span>
            </h2>
            <p className={styles.description}>
              Ajoutez RaidProtect et commencez à protéger votre serveur dès
              aujourd'hui.
            </p>
          </div>
          <div className={styles.decoration} aria-hidden="true" />
        </div>
        <div className={styles.grid}>
          {/* Basic */}
          <div className={styles.item}>
            <div className={styles.preTitle}>Basic</div>
            <div className={styles.priceWrap}>
              <h2 className={styles.price}>Gratuit</h2>
            </div>
            <p className={styles.itemTagline}>
              La sécurité essentielle assurée pour toujours
            </p>
            <div className={styles.featureList}>
              <FeatureItem>Protections anti-spam</FeatureItem>
              <FeatureItem>Blocage automatique des raids</FeatureItem>
              <FeatureItem>Filtrage des bots malveillants</FeatureItem>
              <FeatureItem>Modération &amp; administration</FeatureItem>
              <FeatureItem>
                <strong>Et bien plus encore...</strong>
              </FeatureItem>
            </div>
            <div className={styles.buttonList}>
              <a
                href="https://raidprotect.bot/invite"
                target="_blank"
                rel="noopener noreferrer"
                className={shared.btnSecondary}>
                Ajouter à Discord
              </a>
            </div>
          </div>

          {/* Founder */}
          <div className={clsx(styles.item, styles.itemCenter)}>
            <div className={clsx(styles.preTitle, styles.preTitleFounder)}>
              Founder
            </div>
            <div className={styles.priceWrap}>
              <h2 className={styles.price}>Abonnement</h2>
              <h2 className={clsx(styles.price, styles.priceCenter)}>2,99 $</h2>
            </div>
            <p className={styles.itemTagline}>
              Offre de lancement réservée aux premiers abonnés
            </p>
            <div className={styles.featureList}>
              <FeatureItem>Profil du bot personnalisable</FeatureItem>
              <FeatureItem>Noms de sanctions custom</FeatureItem>
              <FeatureItem>Accès avancé à l'Auth Manager</FeatureItem>
              <FeatureItem>Accès étendu au Display Public</FeatureItem>
              <FeatureItem>Accès à la Bêta publique</FeatureItem>
              <FeatureItem>Rôle exclusif sur notre serveur</FeatureItem>
            </div>
            <div className={styles.buttonList}>
              <a
                href="https://raidprotect.bot/founder"
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(shared.btnPrimary, shared.btnPrimaryFounder)}>
                S'abonner via Discord
              </a>
            </div>
          </div>

          {/* Business */}
          <div className={styles.item}>
            <div className={clsx(styles.preTitle, styles.preTitleEnterprise)}>
              Business
            </div>
            <div className={styles.priceWrap}>
              <h2 className={styles.price}>Sur demande</h2>
            </div>
            <p className={styles.itemTagline}>
              Pour les projets aux exigences de sécurité élevées
            </p>
            <div className={styles.featureList}>
              <FeatureItem>Les fonctionnalités Founder</FeatureItem>
              <FeatureItem>Instance dédiée et isolée</FeatureItem>
              <FeatureItem>Audit initial de votre serveur</FeatureItem>
              <FeatureItem>Intégration avec vos outils</FeatureItem>
              <FeatureItem>Fonctionnalités sur mesure</FeatureItem>
              <FeatureItem>Suivi régulier avec un expert</FeatureItem>
              <FeatureItem>Support prioritaire</FeatureItem>
            </div>
            <div className={styles.buttonList}>
              <a
                href="https://raidprotect.bot/appointment"
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(shared.btnSecondary, shared.btnSecondaryEnterprise)}>
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
