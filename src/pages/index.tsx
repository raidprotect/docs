import React, {type ReactNode, useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HeroCarousel from '@site/src/components/landing/HeroCarousel';
import Servers from '@site/src/components/landing/Servers';
import Features from '@site/src/components/landing/Features';
import BusinessBubble from '@site/src/components/landing/BusinessBubble';
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

const COUNT_UP_DURATION_MS = 2000;

function StatCounter({
  rawValue,
  label,
  fallback,
}: {
  rawValue?: number;
  label: string;
  fallback: string;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);
  const [displayValue, setDisplayValue] = useState<string | null>(null);
  const [unit, setUnit] = useState<string>('');

  useEffect(() => {
    if (rawValue == null) return undefined;
    const formatted = formatValue(rawValue);
    const finalNumeric = parseFloat(formatted.value);

    const node = itemRef.current;
    if (!node || typeof window === 'undefined') {
      // SSR / no DOM — render the final value statically.
      setDisplayValue(formatted.value);
      setUnit(formatted.unit);
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const startAnimation = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;
      setUnit(formatted.unit);

      if (prefersReducedMotion) {
        setDisplayValue(formatted.value);
        return;
      }

      let rafId = 0;
      let startTime: number | null = null;
      const tick = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / COUNT_UP_DURATION_MS, 1);
        // cubic ease-out, identique à l'animation Webflow source
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = (eased * finalNumeric).toFixed(1);
        setDisplayValue(current);
        if (progress < 1) {
          rafId = window.requestAnimationFrame(tick);
        } else {
          setDisplayValue(formatted.value);
        }
      };
      rafId = window.requestAnimationFrame(tick);

      return () => {
        if (rafId) window.cancelAnimationFrame(rafId);
      };
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
            break;
          }
        }
      },
      {threshold: 0.1},
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, [rawValue]);

  if (rawValue == null) {
    // Fallback (counts.json indisponible) : on sépare le nombre de son unité
    // (« 380k » -> « 380 » + « k ») pour colorer l'unité comme en mode live.
    const fbMatch = /^([\d.,\s]+)(.*)$/.exec(fallback);
    const fbNumber = fbMatch ? fbMatch[1] : fallback;
    const fbUnit = fbMatch ? fbMatch[2] : '';
    return (
      <div ref={itemRef} className={styles.counterItem}>
        <div className={styles.counterTitle}>
          <span>{fbNumber}</span>
          {fbUnit && <span className={styles.counterUnit}>{fbUnit}</span>}
        </div>
        <div className={styles.counterLabel}>{label}</div>
      </div>
    );
  }

  return (
    <div ref={itemRef} className={styles.counterItem}>
      <div className={styles.counterTitle}>
        <span>{displayValue ?? '0'}</span>
        <span className={styles.counterUnit}>{unit}</span>
      </div>
      <div className={styles.counterLabel}>{label}</div>
    </div>
  );
}

export default function Home(): ReactNode {
  const [counts, setCounts] = useState<Counts | null>(null);
  const {
    i18n: {currentLocale, defaultLocale},
    siteConfig: {url: siteUrl},
  } = useDocusaurusContext();

  // Sur la landing, on remet le sélecteur de version sur "stable" (lastVersion)
  // en effaçant la préférence mémorisée. Accès direct au localStorage car le
  // hook useDocsPreferredVersion ne fonctionne que sur les pages docs (provider
  // non monté sur la landing).
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.removeItem('docs-preferred-version-default');
    } catch {
      /* localStorage indisponible (Safari privé, etc.), tant pis */
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch('/counts.json')
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

  const landingUrl =
    currentLocale === defaultLocale
      ? `${siteUrl}/`
      : `${siteUrl}/${currentLocale}/`;
  const softwareApplicationLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${siteUrl}/#software`,
    name: 'RaidProtect',
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Discord',
    url: landingUrl,
    description: layoutDescription,
    inLanguage: currentLocale,
    publisher: {'@id': `${siteUrl}/#organization`},
    isPartOf: {'@id': `${siteUrl}/#website`},
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
  };
  // Évite qu'un éventuel </script> dans la chaîne casse le parsing du HTML.
  const softwareApplicationLdJson = JSON.stringify(
    softwareApplicationLd,
  ).replace(/</g, '\\u003c');

  return (
    <Layout title={layoutTitle} description={layoutDescription}>
      <Head>
        {/* Pas de suffixe « | RaidProtect » sur la home. */}
        <title>{layoutTitle}</title>
        <script type="application/ld+json">
          {softwareApplicationLdJson}
        </script>
      </Head>
      <main>
        <HeroCarousel serverCount={counts?.servers} />
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
                  fallback="380k"
                />
                <StatCounter
                  rawValue={counts?.captcha}
                  label={translate({
                    id: 'landing.about.counter.captcha',
                    message: 'Captchas résolus',
                    description: 'About stat label: number of captchas solved',
                  })}
                  fallback="14.5M"
                />
                <StatCounter
                  rawValue={counts?.antispam}
                  label={translate({
                    id: 'landing.about.counter.antispam',
                    message: 'Spams bloqués',
                    description: 'About stat label: number of spam messages blocked',
                  })}
                  fallback="1.4M"
                />
                <StatCounter
                  rawValue={counts?.users}
                  label={translate({
                    id: 'landing.about.counter.users',
                    message: 'Utilisateurs protégés',
                    description: 'About stat label: number of protected users',
                  })}
                  fallback="50M"
                />
              </div>
            </div>
          </div>
        </section>

        <Features />
      </main>
      <BusinessBubble />
    </Layout>
  );
}
