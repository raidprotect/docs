import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import shared from '../styles/shared.module.css';
import styles from './styles.module.css';

type Feature = {
  to: string;
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    to: '/docs/features/anti-spam',
    icon: '/img/landing/iconAntispamWhite.svg',
    iconAlt: 'RaidProtect icon Antispam',
    title: 'Protection anti-spam',
    description:
      'Sanctionnez instantanément les tentatives de spam, sans aucune intervention de votre part.',
  },
  {
    to: '/docs/features/raid-mode',
    icon: '/img/landing/iconAntiraidWhite.svg',
    iconAlt: 'RaidProtect icon Antiraid',
    title: 'Blocage des raids',
    description:
      "Vous craignez un raid ? Notre bot est capable de le détecter et de le bloquer avant même qu'il impacte votre serveur.",
  },
  {
    to: '/docs/features/captcha',
    icon: '/img/landing/iconCaptchaWhite.svg',
    iconAlt: 'RaidProtect icon Captcha',
    title: 'Protection contre les robots',
    description:
      "Grâce au captcha, vos membres doivent prouver qu'ils sont humains. Dites adieu aux comptes automatisés.",
  },
  {
    to: '/docs/features/utilities',
    icon: '/img/landing/iconReportWhite.svg',
    iconAlt: 'RaidProtect icon Report',
    title: 'Modération & administration',
    description:
      "Gérez votre serveur comme un pro avec nos diverses fonctionalités de modération et d'administration.",
  },
  {
    to: '/docs/features/tag-role',
    icon: '/img/landing/iconTagWhite.svg',
    iconAlt: 'RaidProtect icon Tag',
    title: 'Rôle de Tag',
    description:
      'Le Rôle de Tag permet d’attribuer automatiquement un rôle aux membres qui ajoutent le tag de votre serveur.',
  },
  {
    to: '/docs/features/dm-lock',
    icon: '/img/landing/iconDmlockWhite.svg',
    iconAlt: 'RaidProtect icon DM Lock',
    title: 'Fermeture des MP',
    description:
      'Un bouclier inédit contre le spam, le scam et les arnaques par message privé.',
  },
];

export default function Features(): ReactNode {
  return (
    <section
      id="features"
      className={clsx(shared.landing, shared.sectionSpacing, styles.section)}>
      <div className={shared.container}>
        <div className={styles.titleWrap}>
          <h2 className={styles.title}>
            Nos <span className={shared.textGradient}>fonctionnalités</span>
          </h2>
          <p className={styles.subtitle}>
            Découvrez ce qui fait de nous l'un des meilleurs bots pour protéger
            votre serveur Discord des utilisateurs malintentionnés.
          </p>
        </div>
        <div className={styles.grid}>
          <div className={styles.decoration} aria-hidden="true" />
          {FEATURES.map((feature) => (
            <Link key={feature.title} to={feature.to} className={styles.item}>
              <div className={styles.iconWrap}>
                <div className={styles.iconBg}>
                  <img
                    src={feature.icon}
                    alt={feature.iconAlt}
                    loading="eager"
                    className={styles.icon}
                  />
                </div>
              </div>
              <div>
                <h3 className={styles.itemTitle}>{feature.title}</h3>
                <p className={styles.itemDescription}>{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
