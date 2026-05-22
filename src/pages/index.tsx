import React, {type ReactNode, useEffect, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
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
  slug: string;
  to: string;
  icon: string;
  iconAlt: string;
  defaultTitle: string;
  defaultDescription: string;
};

const FEATURES: Feature[] = [
  {
    slug: 'anti-spam',
    to: '/docs/features/anti-spam',
    icon: '/img/landing/iconAntispamWhite.svg',
    iconAlt: 'RaidProtect icon Antispam',
    defaultTitle: 'Protection anti-spam',
    defaultDescription:
      'Sanctionnez instantanément les tentatives de spam, sans aucune intervention de votre part.',
  },
  {
    slug: 'raid',
    to: '/docs/features/raid-mode',
    icon: '/img/landing/iconAntiraidWhite.svg',
    iconAlt: 'RaidProtect icon Antiraid',
    defaultTitle: 'Blocage des raids',
    defaultDescription:
      "Vous craignez un raid ? Notre bot est capable de le détecter et de le bloquer avant même qu'il impacte votre serveur.",
  },
  {
    slug: 'captcha',
    to: '/docs/features/captcha',
    icon: '/img/landing/iconCaptchaWhite.svg',
    iconAlt: 'RaidProtect icon Captcha',
    defaultTitle: 'Protection contre les robots',
    defaultDescription:
      "Grâce au captcha, vos membres doivent prouver qu'ils sont humains. Dites adieu aux comptes automatisés.",
  },
  {
    slug: 'mod',
    to: '/docs/features/utilities',
    icon: '/img/landing/iconReportWhite.svg',
    iconAlt: 'RaidProtect icon Report',
    defaultTitle: 'Modération & administration',
    defaultDescription:
      "Gérez votre serveur comme un pro avec nos diverses fonctionalités de modération et d'administration.",
  },
  {
    slug: 'tag',
    to: '/docs/features/tag-role',
    icon: '/img/landing/iconTagWhite.svg',
    iconAlt: 'RaidProtect icon Tag',
    defaultTitle: 'Rôle de Tag',
    defaultDescription:
      'Le Rôle de Tag permet d’attribuer automatiquement un rôle aux membres qui ajoutent le tag de votre serveur.',
  },
  {
    slug: 'dm',
    to: '/docs/features/dm-lock',
    icon: '/img/landing/iconDmlockWhite.svg',
    iconAlt: 'RaidProtect icon DM Lock',
    defaultTitle: 'Fermeture des MP',
    defaultDescription:
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

  const layoutTitle = translate({
    id: 'landing.layout.title',
    message: 'RaidProtect • Sécurisez votre serveur Discord',
    description: 'Browser tab title for the landing page',
  });
  const layoutDescription = translate({
    id: 'landing.layout.description',
    message:
      'RaidProtect est un bot Discord français ayant pour mission de protéger simplement votre serveur des utilisateurs malintentionnés.',
    description: 'Meta description for the landing page',
  });
  const aboutCurveAriaLabel = translate({
    id: 'landing.about.curve.ariaLabel',
    message: 'Croissance du nombre de serveurs',
    description: 'ARIA label for the decorative SVG curve in the about section',
  });

  return (
    <Layout title={layoutTitle} description={layoutDescription}>
      <main>
        <Hero serverCount={counts?.servers} />
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
                <Translate
                  id="landing.about.title"
                  description="About section title; {highlight} renders the gradient-highlighted word"
                  values={{
                    highlight: (
                      <span className={shared.textGradient}>
                        <Translate
                          id="landing.about.title.highlight"
                          description="Highlighted word inside the about section title">
                          impact
                        </Translate>
                      </span>
                    ),
                  }}>
                  {'Nos résultats ont un {highlight}'}
                </Translate>
              </h2>
            </div>
            <div className={styles.counterGrid}>
              <div className={styles.imageWrap}>
                <svg
                  className={styles.curve}
                  viewBox="0 0 900 280"
                  role="img"
                  aria-label={aboutCurveAriaLabel}>
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
                  label={translate({
                    id: 'landing.about.counter.servers',
                    message: 'Serveurs sécurisés',
                    description: 'About stat label: number of secured servers',
                  })}
                  fallback="350k"
                />
                <StatCounter
                  rawValue={counts?.captcha}
                  label={translate({
                    id: 'landing.about.counter.captcha',
                    message: 'Captchas résolus',
                    description: 'About stat label: number of captchas solved',
                  })}
                  fallback="—"
                />
                <StatCounter
                  rawValue={counts?.antispam}
                  label={translate({
                    id: 'landing.about.counter.antispam',
                    message: 'Spams bloqués',
                    description: 'About stat label: number of spam messages blocked',
                  })}
                  fallback="—"
                />
                <StatCounter
                  rawValue={counts?.users}
                  label={translate({
                    id: 'landing.about.counter.users',
                    message: 'Utilisateurs protégés',
                    description: 'About stat label: number of protected users',
                  })}
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
                <Translate
                  id="landing.features.title"
                  description="Features section title; {highlight} renders the gradient-highlighted word"
                  values={{
                    highlight: (
                      <span className={shared.textGradient}>
                        <Translate
                          id="landing.features.title.highlight"
                          description="Highlighted word inside the features section title">
                          fonctionnalités
                        </Translate>
                      </span>
                    ),
                  }}>
                  {'Nos {highlight}'}
                </Translate>
              </h2>
              <p className={styles.featuresSubtitle}>
                <Translate
                  id="landing.features.subtitle"
                  description="Features section subtitle/description">
                  Découvrez ce qui fait de nous l'un des meilleurs bots pour
                  protéger votre serveur Discord des utilisateurs malintentionnés.
                </Translate>
              </p>
            </div>
            <div className={styles.featuresGrid}>
              <div className={styles.featuresDecoration} aria-hidden="true" />
              {FEATURES.map((feature) => {
                const title = translate({
                  id: `landing.features.${feature.slug}.title`,
                  message: feature.defaultTitle,
                  description: `Feature card title: ${feature.slug}`,
                });
                const description = translate({
                  id: `landing.features.${feature.slug}.description`,
                  message: feature.defaultDescription,
                  description: `Feature card description: ${feature.slug}`,
                });
                return (
                  <Link
                    key={feature.slug}
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
                      <h3 className={styles.featuresItemTitle}>{title}</h3>
                      <p className={styles.featuresItemDescription}>
                        {description}
                      </p>
                    </div>
                  </Link>
                );
              })}
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
                  <Translate
                    id="landing.pricing.title"
                    description="Pricing section title; {highlight} renders the gradient-highlighted word"
                    values={{
                      highlight: (
                        <span className={shared.textGradient}>
                          <Translate
                            id="landing.pricing.title.highlight"
                            description="Highlighted word inside the pricing section title">
                            d'avance
                          </Translate>
                        </span>
                      ),
                    }}>
                    {'Garder une longueur {highlight}'}
                  </Translate>
                </h2>
                <p className={styles.pricingDescription}>
                  <Translate
                    id="landing.pricing.description"
                    description="Pricing section description below the title">
                    Ajoutez RaidProtect et commencez à protéger votre serveur dès
                    aujourd'hui.
                  </Translate>
                </p>
              </div>
              <div className={styles.pricingDecoration} aria-hidden="true" />
            </div>
            <div className={styles.pricingGrid}>
              {/* Basic */}
              <div className={styles.pricingItem}>
                <div className={styles.preTitle}>
                  <Translate
                    id="landing.pricing.basic.preTitle"
                    description="Pricing card pre-title for the Basic tier">
                    Basic
                  </Translate>
                </div>
                <div className={styles.priceWrap}>
                  <h2 className={styles.price}>
                    <Translate
                      id="landing.pricing.basic.price"
                      description="Pricing card price label for the Basic tier (free)">
                      Gratuit
                    </Translate>
                  </h2>
                </div>
                <p className={styles.itemTagline}>
                  <Translate
                    id="landing.pricing.basic.tagline"
                    description="Pricing card tagline for the Basic tier">
                    La sécurité essentielle assurée pour toujours
                  </Translate>
                </p>
                <div className={styles.featureList}>
                  <FeatureItem>
                    <Translate
                      id="landing.pricing.basic.feature.1"
                      description="Basic tier feature 1">
                      Protections anti-spam
                    </Translate>
                  </FeatureItem>
                  <FeatureItem>
                    <Translate
                      id="landing.pricing.basic.feature.2"
                      description="Basic tier feature 2">
                      Blocage automatique des raids
                    </Translate>
                  </FeatureItem>
                  <FeatureItem>
                    <Translate
                      id="landing.pricing.basic.feature.3"
                      description="Basic tier feature 3">
                      Filtrage des bots malveillants
                    </Translate>
                  </FeatureItem>
                  <FeatureItem>
                    <Translate
                      id="landing.pricing.basic.feature.4"
                      description="Basic tier feature 4">
                      Modération & administration
                    </Translate>
                  </FeatureItem>
                  <FeatureItem>
                    <strong>
                      <Translate
                        id="landing.pricing.basic.feature.5"
                        description="Basic tier feature 5 (emphasis)">
                        Et bien plus encore...
                      </Translate>
                    </strong>
                  </FeatureItem>
                </div>
                <div className={styles.buttonList}>
                  <a
                    href="https://raidprotect.bot/invite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={shared.btnSecondary}>
                    <Translate
                      id="landing.pricing.basic.button"
                      description="Basic tier CTA button: invite the bot">
                      Ajouter à Discord
                    </Translate>
                  </a>
                </div>
              </div>

              {/* Founder */}
              <div className={clsx(styles.pricingItem, styles.pricingItemCenter)}>
                <div className={clsx(styles.preTitle, styles.preTitleFounder)}>
                  <Translate
                    id="landing.pricing.founder.preTitle"
                    description="Pricing card pre-title for the Founder tier">
                    Founder
                  </Translate>
                </div>
                <div className={styles.priceWrap}>
                  <h2 className={styles.price}>
                    <Translate
                      id="landing.pricing.founder.price.label"
                      description="Founder tier price label (subscription)">
                      Abonnement
                    </Translate>
                  </h2>
                  <h2 className={clsx(styles.price, styles.priceCenter)}>
                    <Translate
                      id="landing.pricing.founder.price.amount"
                      description="Founder tier price amount; stays the same across locales">
                      2,99 $
                    </Translate>
                  </h2>
                </div>
                <p className={styles.itemTagline}>
                  <Translate
                    id="landing.pricing.founder.tagline"
                    description="Pricing card tagline for the Founder tier">
                    Offre de lancement réservée aux premiers abonnés
                  </Translate>
                </p>
                <div className={styles.featureList}>
                  <FeatureItem>
                    <Translate
                      id="landing.pricing.founder.feature.1"
                      description="Founder tier feature 1">
                      Profil du bot personnalisable
                    </Translate>
                  </FeatureItem>
                  <FeatureItem>
                    <Translate
                      id="landing.pricing.founder.feature.2"
                      description="Founder tier feature 2">
                      Noms de sanctions custom
                    </Translate>
                  </FeatureItem>
                  <FeatureItem>
                    <Translate
                      id="landing.pricing.founder.feature.3"
                      description="Founder tier feature 3">
                      Accès avancé à l'Auth Manager
                    </Translate>
                  </FeatureItem>
                  <FeatureItem>
                    <Translate
                      id="landing.pricing.founder.feature.4"
                      description="Founder tier feature 4">
                      Accès étendu au Display Public
                    </Translate>
                  </FeatureItem>
                  <FeatureItem>
                    <Translate
                      id="landing.pricing.founder.feature.5"
                      description="Founder tier feature 5">
                      Accès à la Bêta publique
                    </Translate>
                  </FeatureItem>
                  <FeatureItem>
                    <Translate
                      id="landing.pricing.founder.feature.6"
                      description="Founder tier feature 6">
                      Rôle exclusif sur notre serveur
                    </Translate>
                  </FeatureItem>
                </div>
                <div className={styles.buttonList}>
                  <a
                    href="https://raidprotect.bot/founder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(shared.btnPrimary, shared.btnPrimaryFounder)}>
                    <Translate
                      id="landing.pricing.founder.button"
                      description="Founder tier CTA button: subscribe">
                      S'abonner via Discord
                    </Translate>
                  </a>
                </div>
              </div>

              {/* Business */}
              <div className={styles.pricingItem}>
                <div className={clsx(styles.preTitle, styles.preTitleEnterprise)}>
                  <Translate
                    id="landing.pricing.business.preTitle"
                    description="Pricing card pre-title for the Business tier">
                    Business
                  </Translate>
                </div>
                <div className={styles.priceWrap}>
                  <h2 className={styles.price}>
                    <Translate
                      id="landing.pricing.business.price"
                      description="Pricing card price label for the Business tier (on request)">
                      Sur demande
                    </Translate>
                  </h2>
                </div>
                <p className={styles.itemTagline}>
                  <Translate
                    id="landing.pricing.business.tagline"
                    description="Pricing card tagline for the Business tier">
                    Pour les projets aux exigences de sécurité élevées
                  </Translate>
                </p>
                <div className={styles.featureList}>
                  <FeatureItem>
                    <Translate
                      id="landing.pricing.business.feature.1"
                      description="Business tier feature 1">
                      Les fonctionnalités Founder
                    </Translate>
                  </FeatureItem>
                  <FeatureItem>
                    <Translate
                      id="landing.pricing.business.feature.2"
                      description="Business tier feature 2">
                      Instance dédiée et isolée
                    </Translate>
                  </FeatureItem>
                  <FeatureItem>
                    <Translate
                      id="landing.pricing.business.feature.3"
                      description="Business tier feature 3">
                      Audit initial de votre serveur
                    </Translate>
                  </FeatureItem>
                  <FeatureItem>
                    <Translate
                      id="landing.pricing.business.feature.4"
                      description="Business tier feature 4">
                      Intégration avec vos outils
                    </Translate>
                  </FeatureItem>
                  <FeatureItem>
                    <Translate
                      id="landing.pricing.business.feature.5"
                      description="Business tier feature 5">
                      Fonctionnalités sur mesure
                    </Translate>
                  </FeatureItem>
                  <FeatureItem>
                    <Translate
                      id="landing.pricing.business.feature.6"
                      description="Business tier feature 6">
                      Suivi régulier avec un expert
                    </Translate>
                  </FeatureItem>
                  <FeatureItem>
                    <Translate
                      id="landing.pricing.business.feature.7"
                      description="Business tier feature 7">
                      Support prioritaire
                    </Translate>
                  </FeatureItem>
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
                    <Translate
                      id="landing.pricing.business.button"
                      description="Business tier CTA button: book a meeting">
                      Prendre rendez-vous
                    </Translate>
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
