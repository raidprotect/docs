import React, {type CSSProperties, type ReactNode} from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {localizedRedirectUrl} from '@site/src/utils/links';
import CommunityTabs from '@site/src/components/communities/CommunityTabs';
import Servers, {type Server} from '@site/src/components/landing/Servers';
import FeatureRows, {
  type CommunityFeatureRowData,
} from '@site/src/components/communities/FeatureRows';
import StatBand, {
  type CommunityStat,
} from '@site/src/components/communities/StatBand';
import BusinessBubble from '@site/src/components/landing/BusinessBubble';
import ProLinks from '@site/src/components/landing/ProLinks';
import shared from '@site/src/components/landing/styles/shared.module.css';
import styles from './styles.module.css';

/** Accent couleur d'une verticale, posé en variables CSS sur la racine et
 *  superposé aux tokens de marque (`shared.landing`). On reste dans la palette
 *  RaidProtect pour garder la page "dans le thème". */
export type CommunityAccent = {
  /** Couleur d'accent pleine (pastilles, bordures, puces). */
  accent: string;
  /** Couleur translucide pour les halos floutés d'arrière-plan. */
  glow: string;
  /** Dégradé appliqué aux mots surlignés et aux bordures de pastille. */
  gradient: string;
  /** Couleur du texte posé SUR l'accent (lisibilité) : sombre pour un accent
   *  clair (or), blanche pour un accent sombre (bleu, violet). */
  onAccent: string;
};

export type CommunityItem = {
  icon: string;
  iconAlt: string;
  title: ReactNode;
  description: ReactNode;
};

export type CommunityContent = {
  slug: string;
  /** Titre d'onglet + balise title. */
  metaTitle: string;
  metaDescription: string;
  accent: CommunityAccent;
  eyebrow?: ReactNode;
  /** Titre H1 du hero (peut contenir un mot surligné via <Highlight>). */
  title: ReactNode;
  description: ReactNode;
  secondaryCta: {label: ReactNode; to: string};
  /** Marquee de serveurs de la verticale (preuve sociale ciblée). */
  socialProof?: {title: ReactNode; servers: Server[]};
  threatsTitle: ReactNode;
  threatsSubtitle: ReactNode;
  threats: CommunityItem[];
  featuresTitle: ReactNode;
  featuresSubtitle: ReactNode;
  featureRows: CommunityFeatureRowData[];
  stats: CommunityStat[];
  /** Appel au premium personnalisé à la verticale (perks réels). */
  premium?: {
    title: ReactNode;
    description: ReactNode;
    perks: ReactNode[];
    ctaLabel: ReactNode;
  };
  ctaTitle: ReactNode;
  ctaDescription: ReactNode;
};

/** Mot surligné avec le dégradé d'accent de la verticale. À utiliser dans les
 *  titres passés au template. */
export function Highlight({children}: {children: ReactNode}): ReactNode {
  return <span className={styles.highlight}>{children}</span>;
}

function AddToDiscordButton({
  href,
  label,
}: {
  href: string;
  label: ReactNode;
}): ReactNode {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(shared.btnPrimary, styles.accentButton)}>
      {label}
    </a>
  );
}

export default function CommunityLanding({
  content,
  addToDiscordLabel,
}: {
  content: CommunityContent;
  /** Libellé du CTA principal, fourni par la page pour rester traduisible. */
  addToDiscordLabel: ReactNode;
}): ReactNode {
  const {
    siteConfig: {url: siteUrl},
    i18n: {currentLocale, defaultLocale},
  } = useDocusaurusContext();

  const path = `/communities/${content.slug}`;
  const pageUrl =
    currentLocale === defaultLocale
      ? `${siteUrl}${path}`
      : `${siteUrl}/${currentLocale}${path}`;
  const inviteUrl = localizedRedirectUrl(
    siteUrl,
    currentLocale,
    defaultLocale,
    '/invite',
  );

  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: pageUrl,
    name: content.metaTitle,
    description: content.metaDescription,
    inLanguage: currentLocale,
    isPartOf: {'@id': `${siteUrl}/#website`},
    about: {'@id': `${siteUrl}/#software`},
  };
  const webPageLdJson = JSON.stringify(webPageLd).replace(/</g, '\\u003c');

  const accentStyle = {
    '--cv-accent': content.accent.accent,
    '--cv-glow': content.accent.glow,
    '--cv-gradient': content.accent.gradient,
    '--cv-on-accent': content.accent.onAccent,
  } as CSSProperties;

  return (
    <Layout title={content.metaTitle} description={content.metaDescription}>
      <Head>
        <script type="application/ld+json">{webPageLdJson}</script>
      </Head>
      <main className={clsx(shared.landing, styles.root)} style={accentStyle}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={shared.container}>
            <div className={styles.heroContent}>
              <CommunityTabs activeId={content.slug} className={styles.heroTabs} />
              {content.eyebrow && (
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowDot} aria-hidden="true" />
                  {content.eyebrow}
                </div>
              )}
              <h1 className={styles.heroTitle}>{content.title}</h1>
              <p className={styles.heroDescription}>{content.description}</p>
              <div className={styles.heroButtons}>
                <AddToDiscordButton href={inviteUrl} label={addToDiscordLabel} />
                <Link
                  to={content.secondaryCta.to}
                  className={clsx(shared.btnSecondary, styles.accentButtonGhost)}>
                  {content.secondaryCta.label}
                </Link>
              </div>
              <ProLinks />
            </div>
          </div>
        </section>

        {/* Preuve sociale : serveurs de la verticale */}
        {content.socialProof && (
          <Servers
            transparent
            title={content.socialProof.title}
            servers={content.socialProof.servers}
          />
        )}

        {/* Menaces propres à la verticale */}
        <section className={clsx(styles.section, styles.threatsSection)}>
          <div className={shared.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>{content.threatsTitle}</h2>
              <p className={styles.sectionSubtitle}>{content.threatsSubtitle}</p>
            </div>
            <div className={styles.threatsGrid}>
              {content.threats.map((threat, i) => (
                <div key={i} className={styles.threatCard}>
                  <div className={styles.threatIconWrap}>
                    <img
                      src={threat.icon}
                      alt={threat.iconAlt}
                      loading="lazy"
                      className={styles.threatIcon}
                    />
                  </div>
                  <h3 className={styles.threatTitle}>{threat.title}</h3>
                  <p className={styles.threatDescription}>{threat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fonctionnalités, cadrées pour la verticale */}
        <section className={clsx(styles.section, styles.featuresSection)}>
          <div className={styles.featuresGlow} aria-hidden="true" />
          <div className={shared.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>{content.featuresTitle}</h2>
              <p className={styles.sectionSubtitle}>{content.featuresSubtitle}</p>
            </div>
            <FeatureRows
              rows={content.featureRows}
              inviteUrl={inviteUrl}
              addBotLabel={addToDiscordLabel}
            />
          </div>
        </section>

        {/* Preuve sociale : chiffres réels et globaux (count-up animé) */}
        <section className={clsx(styles.section, styles.statsSection)}>
          <div className={shared.container}>
            <StatBand stats={content.stats} />
          </div>
        </section>

        {/* Appel au premium personnalisé */}
        {content.premium && (
          <section className={clsx(styles.section, styles.premiumSection)}>
            <div className={shared.container}>
              <div className={styles.premiumBand}>
                <div className={styles.premiumGlow} aria-hidden="true" />
                <div className={styles.premiumBody}>
                  <span className={styles.premiumEyebrow}>Premium</span>
                  <h2 className={styles.premiumTitle}>{content.premium.title}</h2>
                  <p className={styles.premiumDescription}>
                    {content.premium.description}
                  </p>
                  <div className={styles.premiumActions}>
                    <Link
                      to="/premium"
                      className={clsx(shared.btnPrimary, shared.btnPrimaryFounder)}>
                      {content.premium.ctaLabel}
                    </Link>
                    <Link
                      to="/business"
                      className={clsx(
                        shared.btnSecondary,
                        shared.btnSecondaryEnterprise,
                      )}>
                      Offre Business
                    </Link>
                  </div>
                </div>
                <ul className={styles.premiumPerks}>
                  {content.premium.perks.map((perk, i) => (
                    <li key={i} className={styles.premiumPerk}>
                      <svg
                        className={styles.premiumCheck}
                        viewBox="0 0 20 20"
                        aria-hidden="true">
                        <path
                          d="M8.2 13.4 4.8 10l-1.3 1.3 4.7 4.7L18 6.2 16.7 5z"
                          fill="currentColor"
                        />
                      </svg>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* CTA final */}
        <section className={clsx(styles.section, styles.ctaSection)}>
          <div className={shared.container}>
            <div className={styles.ctaBand}>
              <div className={styles.ctaGlow} aria-hidden="true" />
              <h2 className={styles.ctaTitle}>{content.ctaTitle}</h2>
              <p className={styles.ctaDescription}>{content.ctaDescription}</p>
              <div className={styles.heroButtons}>
                <AddToDiscordButton href={inviteUrl} label={addToDiscordLabel} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <BusinessBubble />
    </Layout>
  );
}
