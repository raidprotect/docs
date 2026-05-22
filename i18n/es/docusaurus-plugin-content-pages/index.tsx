import React, {type ReactNode, useEffect, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Hero from '@site/src/components/landing/Hero';
import Servers from '@site/src/components/landing/Servers';
import shared from '@site/src/components/landing/styles/shared.module.css';
import styles from '@site/src/pages/index.module.css';

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
    title: 'Protección antispam',
    description:
      'Sanciona al instante los intentos de spam, sin necesidad de intervención por tu parte.',
  },
  {
    to: '/docs/features/raid-mode',
    icon: '/img/landing/iconAntiraidWhite.svg',
    iconAlt: 'RaidProtect icon Antiraid',
    title: 'Bloqueo de raids',
    description:
      '¿Temes un raid? Nuestro bot puede detectarlo y bloquearlo antes de que afecte a tu servidor.',
  },
  {
    to: '/docs/features/captcha',
    icon: '/img/landing/iconCaptchaWhite.svg',
    iconAlt: 'RaidProtect icon Captcha',
    title: 'Protección contra bots',
    description:
      'Gracias al captcha, tus miembros deben demostrar que son humanos. Di adiós a las cuentas automatizadas.',
  },
  {
    to: '/docs/features/utilities',
    icon: '/img/landing/iconReportWhite.svg',
    iconAlt: 'RaidProtect icon Report',
    title: 'Moderación y administración',
    description:
      'Administra tu servidor como un profesional con nuestras diversas funciones de moderación y administración.',
  },
  {
    to: '/docs/features/tag-role',
    icon: '/img/landing/iconTagWhite.svg',
    iconAlt: 'RaidProtect icon Tag',
    title: 'Rol por etiqueta',
    description:
      'El Rol por etiqueta asigna automáticamente un rol a los miembros que añaden la etiqueta de tu servidor.',
  },
  {
    to: '/docs/features/dm-lock',
    icon: '/img/landing/iconDmlockWhite.svg',
    iconAlt: 'RaidProtect icon DM Lock',
    title: 'Bloqueo de MP',
    description:
      'Un escudo único contra el spam, el scam y las estafas por mensaje privado.',
  },
];

export default function Home(): ReactNode {
  const [counts, setCounts] = useState<Counts | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('https://docs.raidprotect.bot/counts.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch counts');
        return res.json();
      })
      .then((data: Counts) => {
        if (!cancelled) setCounts(data);
      })
      .catch((err) => {
        // Stats are best-effort; failure is non-blocking
        // eslint-disable-next-line no-console
        console.error('Stats update error:', err);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Layout
      title="RaidProtect • Protege tu servidor de Discord"
      description="RaidProtect es un bot de Discord francés cuya misión es proteger fácilmente tu servidor de usuarios malintencionados.">
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
                Nuestros resultados tienen un{' '}
                <span className={shared.textGradient}>impacto</span>
              </h2>
            </div>
            <div className={styles.counterGrid}>
              <div className={styles.imageWrap}>
                <svg
                  className={styles.curve}
                  viewBox="0 0 900 280"
                  role="img"
                  aria-label="Crecimiento en el número de servidores">
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
                  label="Servidores protegidos"
                  fallback="350k"
                />
                <StatCounter
                  rawValue={counts?.captcha}
                  label="Captchas resueltos"
                  fallback="—"
                />
                <StatCounter
                  rawValue={counts?.antispam}
                  label="Spams bloqueados"
                  fallback="—"
                />
                <StatCounter
                  rawValue={counts?.users}
                  label="Usuarios protegidos"
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
                Nuestras <span className={shared.textGradient}>funciones</span>
              </h2>
              <p className={styles.featuresSubtitle}>
                Descubre por qué somos uno de los mejores bots para proteger tu
                servidor de Discord contra usuarios malintencionados.
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
                  Mantente a la{' '}
                  <span className={shared.textGradient}>vanguardia</span>
                </h2>
                <p className={styles.pricingDescription}>
                  Añade RaidProtect y empieza a proteger tu servidor hoy mismo.
                </p>
              </div>
              <div className={styles.pricingDecoration} aria-hidden="true" />
            </div>
            <div className={styles.pricingGrid}>
              {/* Basic */}
              <div className={styles.pricingItem}>
                <div className={styles.preTitle}>Basic</div>
                <div className={styles.priceWrap}>
                  <h2 className={styles.price}>Gratis</h2>
                </div>
                <p className={styles.itemTagline}>
                  La seguridad esencial garantizada para siempre
                </p>
                <div className={styles.featureList}>
                  <FeatureItem>Protecciones antispam</FeatureItem>
                  <FeatureItem>Bloqueo automático de raids</FeatureItem>
                  <FeatureItem>Filtrado de bots maliciosos</FeatureItem>
                  <FeatureItem>Moderación y administración</FeatureItem>
                  <FeatureItem>
                    <strong>Y mucho más...</strong>
                  </FeatureItem>
                </div>
                <div className={styles.buttonList}>
                  <a
                    href="https://raidprotect.bot/invite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={shared.btnSecondary}>
                    Añadir a Discord
                  </a>
                </div>
              </div>

              {/* Founder */}
              <div className={clsx(styles.pricingItem, styles.pricingItemCenter)}>
                <div className={clsx(styles.preTitle, styles.preTitleFounder)}>
                  Founder
                </div>
                <div className={styles.priceWrap}>
                  <h2 className={styles.price}>Suscripción</h2>
                  <h2 className={clsx(styles.price, styles.priceCenter)}>
                    2,99 $
                  </h2>
                </div>
                <p className={styles.itemTagline}>
                  Oferta de lanzamiento reservada a los primeros suscriptores
                </p>
                <div className={styles.featureList}>
                  <FeatureItem>Perfil del bot personalizable</FeatureItem>
                  <FeatureItem>Nombres de sanciones personalizados</FeatureItem>
                  <FeatureItem>Acceso avanzado al Auth Manager</FeatureItem>
                  <FeatureItem>Acceso ampliado al Display Public</FeatureItem>
                  <FeatureItem>Acceso a la Beta pública</FeatureItem>
                  <FeatureItem>Rol exclusivo en nuestro servidor</FeatureItem>
                </div>
                <div className={styles.buttonList}>
                  <a
                    href="https://raidprotect.bot/founder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(shared.btnPrimary, shared.btnPrimaryFounder)}>
                    Suscribirse vía Discord
                  </a>
                </div>
              </div>

              {/* Business */}
              <div className={styles.pricingItem}>
                <div className={clsx(styles.preTitle, styles.preTitleEnterprise)}>
                  Business
                </div>
                <div className={styles.priceWrap}>
                  <h2 className={styles.price}>Bajo solicitud</h2>
                </div>
                <p className={styles.itemTagline}>
                  Para proyectos con altos requisitos de seguridad
                </p>
                <div className={styles.featureList}>
                  <FeatureItem>Todas las funciones Founder</FeatureItem>
                  <FeatureItem>Instancia dedicada y aislada</FeatureItem>
                  <FeatureItem>Auditoría inicial de tu servidor</FeatureItem>
                  <FeatureItem>Integración con tus herramientas</FeatureItem>
                  <FeatureItem>Funciones a medida</FeatureItem>
                  <FeatureItem>Seguimiento regular con un experto</FeatureItem>
                  <FeatureItem>Soporte prioritario</FeatureItem>
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
                    Pedir una cita
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
