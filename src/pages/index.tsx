import React, {type ReactNode, useEffect, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Hero from '@site/src/components/landing/Hero';
import Servers from '@site/src/components/landing/Servers';
import shared from '@site/src/components/landing/styles/shared.module.css';
import styles from './index.module.css';

type Counts = {
  servers: number;
  users: number;
  captcha: number;
  antispam: number;
};

type FormattedValue = {
  value: string;
  unit: string;
};

function formatValue(value: number): FormattedValue {
  if (value >= 1_000_000) {
    return {value: (value / 1_000_000).toFixed(1), unit: 'M'};
  }
  return {value: (value / 1_000).toFixed(1), unit: 'k'};
}

function StatCounter({
  rawValue,
  label,
  fallback,
}: {
  rawValue?: number;
  label: string;
  fallback: string;
}) {
  if (rawValue == null) {
    return (
      <div className={styles.counterItem}>
        <div className={styles.counterTitle}>
          <span>{fallback}</span>
        </div>
        <div className={styles.counterLabel}>{label}</div>
      </div>
    );
  }
  const formatted = formatValue(rawValue);
  return (
    <div className={styles.counterItem}>
      <div className={styles.counterTitle}>
        <span>{formatted.value}</span>
        <span>{formatted.unit}</span>
      </div>
      <div className={styles.counterLabel}>{label}</div>
    </div>
  );
}

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

export default function Home(): ReactNode {
  const [counts, setCounts] = useState<Counts | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('https://docs.raidprotect.bot/counts.json')
      .then((res) => {
        if (!res.ok) throw new Error('Erreur lors de la récupération des données');
        return res.json();
      })
      .then((data: Counts) => {
        if (!cancelled) setCounts(data);
      })
      .catch((err) => {
        // Stats are best-effort; failure is non-blocking
        // eslint-disable-next-line no-console
        console.error('Erreur de mise à jour des statistiques :', err);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Layout
      title="RaidProtect • Sécurisez votre serveur Discord"
      description="RaidProtect est un bot Discord français ayant pour mission de protéger simplement votre serveur des utilisateurs malintentionnés.">
      <main>
        <Hero />
        <Servers />

        {/* About */}
        <section
          className={clsx(
            shared.landing,
            shared.sectionSpacing,
            styles.aboutSection,
          )}>
          <div className={shared.container}>
            <div className={styles.aboutTitleGrid}>
              <h2 className={styles.aboutTitle}>
                Nos résultats ont un{' '}
                <span className={shared.textGradient}>impact</span>
              </h2>
            </div>
            <div className={styles.counterGrid}>
              <div className={styles.imageWrap}>
                <svg
                  className={styles.curve}
                  viewBox="0 0 900 280"
                  role="img"
                  aria-label="Croissance du nombre de serveurs">
                  <defs>
                    <linearGradient id="rpStroke" x1="0" y1="1" x2="1" y2="0">
                      <stop offset="0%" stopColor="#a561a3" />
                      <stop offset="45%" stopColor="#726cb3" />
                      <stop offset="100%" stopColor="#d35f5f" />
                    </linearGradient>
                    <linearGradient id="rpFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#726cb3" stopOpacity="0.35" />
                      <stop offset="70%" stopColor="#d35f5f" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#d35f5f" stopOpacity="0" />
                    </linearGradient>
                    <filter id="rpGlow" x="-40%" y="-60%" width="180%" height="220%">
                      <feGaussianBlur stdDeviation="10" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <pattern id="rpGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                      <path
                        d="M80 0H0V80"
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect x="0" y="0" width="900" height="280" fill="url(#rpGrid)" opacity="0.5" />
                  <path
                    d="M 40 230 C 160 225, 220 215, 300 200 S 420 150, 520 140 S 640 110, 720 70 S 820 20, 860 28 L 860 260 L 40 260 Z"
                    fill="url(#rpFill)"
                  />
                  <path
                    className={styles.curveLine}
                    d="M 40 230 C 160 225, 220 215, 300 200 S 420 150, 520 140 S 640 110, 720 70 S 820 30, 860 28"
                    fill="none"
                    stroke="url(#rpStroke)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#rpGlow)"
                  />
                  <circle cx="860" cy="28" r="7" fill="#d35f5f" />
                  <circle
                    className={styles.curvePulse}
                    cx="860"
                    cy="28"
                    r="7"
                    fill="none"
                    stroke="#726cb3"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className={styles.stats}>
                <StatCounter
                  rawValue={counts?.servers}
                  label="Serveurs sécurisés"
                  fallback="350k"
                />
                <StatCounter
                  rawValue={counts?.captcha}
                  label="Captchas résolus"
                  fallback="—"
                />
                <StatCounter
                  rawValue={counts?.antispam}
                  label="Spams bloqués"
                  fallback="—"
                />
                <StatCounter
                  rawValue={counts?.users}
                  label="Utilisateurs protégés"
                  fallback="—"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className={clsx(
            shared.landing,
            shared.sectionSpacing,
            styles.featuresSection,
          )}>
          <div className={shared.container}>
            <div className={styles.featuresTitleWrap}>
              <h2 className={styles.featuresTitle}>
                Nos <span className={shared.textGradient}>fonctionnalités</span>
              </h2>
              <p className={styles.featuresSubtitle}>
                Découvrez ce qui fait de nous l'un des meilleurs bots pour protéger
                votre serveur Discord des utilisateurs malintentionnés.
              </p>
            </div>
            <div className={styles.featuresGrid}>
              <div className={styles.featuresDecoration} aria-hidden="true" />
              {FEATURES.map((feature) => (
                <Link
                  key={feature.title}
                  to={feature.to}
                  className={styles.featuresItem}>
                  <div className={styles.featuresIconWrap}>
                    <div className={styles.featuresIconBg}>
                      <img
                        src={feature.icon}
                        alt={feature.iconAlt}
                        loading="eager"
                        className={styles.featuresIcon}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className={styles.featuresItemTitle}>{feature.title}</h3>
                    <p className={styles.featuresItemDescription}>
                      {feature.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className={clsx(shared.landing, styles.pricingSection)}>
          <div className={shared.container}>
            <div className={styles.pricingTitleWrap}>
              <div className={styles.pricingTitleInner}>
                <h2 className={styles.pricingTitle}>
                  Garder une longueur{' '}
                  <span className={shared.textGradient}>d'avance</span>
                </h2>
                <p className={styles.pricingDescription}>
                  Ajoutez RaidProtect et commencez à protéger votre serveur dès
                  aujourd'hui.
                </p>
              </div>
              <div className={styles.pricingDecoration} aria-hidden="true" />
            </div>
            <div className={styles.pricingGrid}>
              {/* Basic */}
              <div className={styles.pricingItem}>
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
              <div className={clsx(styles.pricingItem, styles.pricingItemCenter)}>
                <div className={clsx(styles.preTitle, styles.preTitleFounder)}>
                  Founder
                </div>
                <div className={styles.priceWrap}>
                  <h2 className={styles.price}>Abonnement</h2>
                  <h2 className={clsx(styles.price, styles.priceCenter)}>
                    2,99 $
                  </h2>
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
              <div className={styles.pricingItem}>
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
                    className={clsx(
                      shared.btnSecondary,
                      shared.btnSecondaryEnterprise,
                    )}>
                    Prendre rendez-vous
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
