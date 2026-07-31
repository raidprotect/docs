import React, {type ReactNode, useEffect, useRef, useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {localizedRedirectUrl} from '@site/src/utils/links';
import styles from './business.module.css';

/* Page V1 en français : contenu encore mouvant (marques, détail de l'offre),
   i18n à faire une fois la structure validée. */

type Brand = {name: string; logo?: string; url?: string; frOnly?: boolean};

// Bandeau de confiance : logos "full" (wordmarks SVG) façon fca.gg, sans
// distinction de formule. Déposer les fichiers dans static/img/business/logos/ ;
// tant qu'ils manquent, un placeholder texte s'affiche (fallback onError).
// url : lien vers le site de la marque (à confirmer/ajuster).
const BRANDS: Brand[] = [
  {name: 'Ligue 1 McDonald’s', logo: '/img/business/logos/ligue1.svg', url: 'https://www.ligue1.com'},
  {name: 'Game One', logo: '/img/business/logos/gameone.svg', url: 'https://www.gameone.fr'},
  {name: 'CYRILmp4', logo: '/img/business/logos/cyrilmp4.svg', url: 'https://www.youtube.com/@CYRILmp4', frOnly: true},
  {name: 'HugoDécrypte', logo: '/img/business/logos/hugodecrypte.svg', url: 'https://hugodecrypte.com', frOnly: true},
  {name: 'Century Games', logo: '/img/business/logos/centurygames.svg', url: 'https://www.centurygames.com'},
];

function BrandLogo({brand}: {brand: Brand}): ReactNode {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  // Un <img> peut échouer avant l'hydratation : l'événement onError est alors
  // manqué. On revérifie au montage (image « complète » mais largeur nulle).
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);
  const content =
    brand.logo && !failed ? (
      <img
        ref={ref}
        className={styles.brandLogo}
        src={brand.logo}
        alt={brand.name}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    ) : (
      <span className={styles.brandWordmark}>{brand.name}</span>
    );
  if (brand.url) {
    return (
      <a
        href={brand.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.brandLink}
        aria-label={brand.name}>
        {content}
      </a>
    );
  }
  return content;
}

type IconName =
  | 'audit'
  | 'shield'
  | 'wrench'
  | 'code'
  | 'call'
  | 'spark'
  | 'lock'
  | 'eu'
  | 'noAi'
  | 'access';

function Icon({name}: {name: IconName}): ReactNode {
  const paths: Record<IconName, ReactNode> = {
    audit: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
        <path d="M8.5 11.2l1.8 1.8 3.4-3.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3l7 3v5c0 4.3-2.9 7.7-7 9-4.1-1.3-7-4.7-7-9V6l7-3z" strokeLinejoin="round" />
      </>
    ),
    wrench: (
      <path
        d="M14.7 6.3a4 4 0 00-5.4 5.1l-5 5a1.8 1.8 0 002.6 2.6l5-5a4 4 0 005.1-5.4l-2.4 2.4-2.3-.6-.6-2.3 2.4-2.4z"
        strokeLinejoin="round"
      />
    ),
    code: (
      <>
        <path d="M9 8l-4 4 4 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    call: (
      <path
        d="M6 4h3l1.5 4-2 1.5a11 11 0 004.9 4.9l1.5-2 4 1.5V21a1 1 0 01-1 1A16 16 0 015 6a1 1 0 011-1z"
        strokeLinejoin="round"
      />
    ),
    spark: (
      <path
        d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"
        strokeLinejoin="round"
      />
    ),
    lock: (
      <>
        <rect x="5" y="11" width="14" height="9" rx="2" />
        <path d="M8 11V8a4 4 0 018 0v3" />
      </>
    ),
    eu: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v12M6 12h12" opacity="0.35" />
      </>
    ),
    noAi: (
      <>
        <rect x="5" y="6" width="14" height="12" rx="2" />
        <path d="M5 5l14 14" strokeLinecap="round" />
      </>
    ),
    access: (
      <>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5.5 19a6.5 6.5 0 0113 0" strokeLinecap="round" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

/* === Modérateurs : mini-cartes façon « haut de profil » Discord === */

type ModBadgeType = 'mod' | 'hypesquad' | 'nitro' | 'boost' | 'activedev';

// Badges Discord redessinés en SVG (glyphe blanc sur pastille colorée).
const BADGES: Record<ModBadgeType, {label: string; cls: string; glyph: ReactNode}> = {
  mod: {
    label: 'Programme de modération Discord',
    cls: 'badgeMod',
    glyph: (
      <>
        <path d="M12 3.4l6.3 2.2v4.2c0 3.7-2.6 6.7-6.3 7.7-3.7-1-6.3-4-6.3-7.7V5.6L12 3.4z" />
        <path d="M9.2 11.2l1.9 1.9 3.6-3.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  hypesquad: {
    label: 'HypeSquad',
    cls: 'badgeHype',
    glyph: (
      <>
        <path d="M12 3.4l6 2.1-.9 7-5.1 4.1-5.1-4.1-.9-7 6-2.1z" strokeLinejoin="round" />
        <path d="M12 8v4.5" strokeLinecap="round" />
      </>
    ),
  },
  nitro: {
    label: 'Nitro',
    cls: 'badgeNitro',
    glyph: <path d="M12 3.4l5 4.4-5 12.4-5-12.4 5-4.4z" strokeLinejoin="round" />,
  },
  boost: {
    label: 'Booster de serveur',
    cls: 'badgeBoost',
    glyph: (
      <>
        <path d="M12 3.4l6.4 4.5v5.7L12 20.6l-6.4-6.6V7.9L12 3.4z" strokeLinejoin="round" />
        <path d="M9.4 12L12 9.4l2.6 2.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  activedev: {
    label: 'Développeur actif',
    cls: 'badgeDev',
    glyph: (
      <path
        d="M9 8.4l-3.4 3.6L9 15.6M15 8.4l3.4 3.6L15 15.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
};

function BadgeChip({type}: {type: ModBadgeType}): ReactNode {
  const b = BADGES[type];
  return (
    <span className={`${styles.modBadge} ${styles[b.cls]}`} title={b.label} aria-label={b.label}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} aria-hidden="true">
        {b.glyph}
      </svg>
    </span>
  );
}

type Moderator = {
  avatar: string;
  name: string;
  handle: string;
  badges: ModBadgeType[];
  created: string;
  since: string;
};

// À remplir avec les vrais profils des modérateurs professionnels (avatar,
// pseudo, @handle, badges, date de création du compte, année de début). Tant
// que la liste est vide, la section n'est pas rendue (garde plus bas).
// Exemples de structure (placeholders, à remplacer) :
// {avatar: '/img/avatar/dawoox.webp', name: 'Dawoox', handle: 'dawoox', badges: ['mod', 'hypesquad', 'nitro'], created: 'mars 2016', since: '2020'},
// {avatar: '/img/avatar/ichii.webp', name: 'Ichii', handle: 'ichii', badges: ['mod', 'boost'], created: 'juin 2017', since: '2021'},
// {avatar: '/img/avatar/furymob.webp', name: 'FuryMob', handle: 'furymob', badges: ['mod', 'activedev', 'nitro'], created: 'févr. 2015', since: '2019'},
const MODERATORS: Moderator[] = [];

function MetaIcon({name}: {name: 'calendar' | 'shield'}): ReactNode {
  return (
    <svg
      className={styles.modMetaIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      aria-hidden="true">
      {name === 'calendar' ? (
        <>
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M4 9h16M8 3v4M16 3v4" strokeLinecap="round" />
        </>
      ) : (
        <path d="M12 3l7 3v5c0 4.3-2.9 7.7-7 9-4.1-1.3-7-4.7-7-9V6l7-3z" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function ModeratorCard({mod}: {mod: Moderator}): ReactNode {
  return (
    <div className={styles.modCard}>
      <div className={styles.modBanner} />
      <div className={styles.modAvatarWrap}>
        <img className={styles.modAvatar} src={mod.avatar} alt="" loading="lazy" />
      </div>
      <div className={styles.modBody}>
        <div className={styles.modIdentity}>
          <span className={styles.modName}>{mod.name}</span>
          <span className={styles.modHandle}>@{mod.handle}</span>
        </div>
        {mod.badges.length > 0 && (
          <div className={styles.modBadges}>
            {mod.badges.map((b) => (
              <BadgeChip key={b} type={b} />
            ))}
          </div>
        )}
        <div className={styles.modMeta}>
          <div className={styles.modMetaRow}>
            <MetaIcon name="calendar" />
            <span className={styles.modMetaLabel}>Compte créé</span>
            <span className={styles.modMetaValue}>{mod.created}</span>
          </div>
          <div className={styles.modMetaRow}>
            <MetaIcon name="shield" />
            <span className={styles.modMetaLabel}>Modère depuis</span>
            <span className={styles.modMetaValue}>{mod.since}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

type Offer = {icon: IconName; title: string; desc: string};

const OFFERS: Offer[] = [
  {
    icon: 'audit',
    title: 'Audit de sécurité avec un expert',
    desc: 'Un expert analyse votre serveur et définit avec vous la stratégie de protection adaptée.',
  },
  {
    icon: 'shield',
    title: 'Instance dédiée et isolée',
    desc: 'Votre propre instance de RaidProtect, isolée et à votre image, pour la performance et la sécurité.',
  },
  {
    icon: 'wrench',
    title: 'Protections sur-mesure',
    desc: 'Des modules et des règles développés à la demande, selon les menaces propres à votre serveur.',
  },
  {
    icon: 'code',
    title: 'Bot entièrement personnalisé',
    desc: 'Nos développeurs conçoivent les fonctionnalités spécifiques à vos besoins.',
  },
  {
    icon: 'call',
    title: 'Suivi humain',
    desc: 'Des points réguliers avec un expert, autant que nécessaire, pour ajuster votre protection.',
  },
  {
    icon: 'access',
    title: 'Modérateurs professionnels',
    desc: 'Des modérateurs formés et certifiés par Discord, en renfort ou en prise en charge complète de votre modération.',
  },
];

const SECURITY: {icon: IconName; title: string; desc: string}[] = [
  {
    icon: 'lock',
    title: 'Données chiffrées',
    desc: "Chiffrement au repos sur une machine dédiée et contrôle d'accès strict.",
  },
  {
    icon: 'eu',
    title: 'Hébergement dans l’UE',
    desc: 'Infrastructure principale en Allemagne, sans transfert hors Union européenne.',
  },
  {
    icon: 'access',
    title: 'Conformité RGPD assumée',
    desc: 'Responsabilité clairement définie et politique de confidentialité transparente.',
  },
  {
    icon: 'noAi',
    title: 'Aucune exploitation détournée',
    desc: "Vos données ne servent ni à la publicité, ni à l'entraînement de modèles d'IA.",
  },
];

const STEPS: {title: string; desc: string}[] = [
  {title: 'Audit', desc: 'On étudie votre serveur, vos risques et vos besoins avec un expert.'},
  {
    title: 'Mise en place',
    desc: 'Instance dédiée, protections sur-mesure et développements spécifiques déployés pour vous.',
  },
  {title: 'Suivi', desc: 'Des points réguliers pour ajuster, faire évoluer et anticiper les menaces.'},
];

const STATS: {value: string; unit: string; label: string}[] = [
  {value: '380', unit: 'K+', label: 'serveurs protégés'},
  {value: '50', unit: 'M+', label: 'utilisateurs protégés'},
  {value: '1.4', unit: 'M+', label: 'spams bloqués'},
];

export default function Business(): ReactNode {
  const {
    i18n: {currentLocale, defaultLocale},
    siteConfig: {url: siteUrl},
  } = useDocusaurusContext();
  const appointmentUrl = localizedRedirectUrl(siteUrl, currentLocale, defaultLocale, '/appointment');
  const brands = BRANDS.filter((b) => !b.frOnly || currentLocale === 'fr');

  return (
    <Layout
      title="RaidProtect Business"
      description="RaidProtect Business : audit avec un expert, instance dédiée et isolée, protections sur-mesure et développement custom pour les organisations exigeantes.">
      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>RaidProtect Business</span>
            <h1 className={styles.title}>
              Bien plus qu’un bot :
              <span className={styles.titleAccent}>votre partenaire Discord</span>
            </h1>
            <p className={styles.subtitle}>
              La protection et la modération de votre serveur Discord, prises en charge de bout en
              bout par nos experts. Une offre sur-mesure, adaptée à votre organisation.
            </p>
            <div className={styles.ctas}>
              <a
                href={appointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimary}>
                Réserver un appel
              </a>
              <a href="#offre" className={styles.ctaSecondary}>
                Voir l’offre
              </a>
            </div>
          </div>
        </section>

        {/* BANDEAU CONFIANCE */}
        <section className={styles.trust}>
          <div className={styles.container}>
            <p className={styles.trustLabel}>Ils nous font confiance</p>
            <div className={styles.trustBar}>
              {brands.map((b) => (
                <BrandLogo key={b.name} brand={b} />
              ))}
            </div>
          </div>
        </section>

        {/* POUR QUI */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionEyebrow}>Pour qui ?</span>
              <h2 className={styles.sectionTitle}>Quand le standard ne suffit plus</h2>
              <p className={styles.sectionSub}>
                Grandes communautés, marques, médias, créateurs : à cette échelle, une faille de
                sécurité ou un raid engage votre image. Il vous faut plus qu’un abonnement — un
                interlocuteur, des garanties, et une protection gérée par des humains.
              </p>
            </div>
          </div>
        </section>

        {/* OFFRE */}
        <section id="offre" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionEyebrow}>L’offre Business</span>
              <h2 className={styles.sectionTitle}>Protection et modération, sur-mesure</h2>
              <p className={styles.sectionSub}>
                Tout est optionnel : vous composez votre offre à la carte, uniquement avec ce dont
                vous avez besoin.
              </p>
            </div>
            <div className={styles.offerGrid}>
              {OFFERS.map((o) => (
                <div key={o.title} className={styles.offerCard}>
                  <span className={styles.offerIcon}>
                    <Icon name={o.icon} />
                  </span>
                  <h3 className={styles.offerName}>{o.title}</h3>
                  <p className={styles.offerDesc}>{o.desc}</p>
                </div>
              ))}
            </div>
            <div className={styles.sectionCta}>
              <a href="#contact" className={styles.ctaPrimary}>
                Réserver un appel
              </a>
            </div>
          </div>
        </section>

        {/* MODÉRATEURS (masqué tant qu'aucun profil réel n'est renseigné) */}
        {MODERATORS.length > 0 && (
          <section className={styles.section}>
            <div className={styles.container}>
              <div className={styles.sectionHead}>
                <span className={styles.sectionEyebrow}>Modération humaine</span>
                <h2 className={styles.sectionTitle}>Une équipe certifiée par Discord</h2>
                <p className={styles.sectionSub}>
                  Des modérateurs expérimentés et certifiés, en renfort ponctuel ou en prise en
                  charge complète de votre serveur.
                </p>
              </div>
              <div className={styles.modGrid}>
                {MODERATORS.map((m) => (
                  <ModeratorCard key={m.handle} mod={m} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SÉCURITÉ & CONFORMITÉ */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionEyebrow}>Sécurité &amp; conformité</span>
              <h2 className={styles.sectionTitle}>Une infrastructure conforme et maîtrisée</h2>
            </div>
            <div className={styles.securityGrid}>
              {SECURITY.map((s) => (
                <div key={s.title} className={styles.securityCard}>
                  <span className={styles.securityIcon}>
                    <Icon name={s.icon} />
                  </span>
                  <div>
                    <h3 className={styles.securityName}>{s.title}</h3>
                    <p className={styles.securityDesc}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMMENT ÇA SE PASSE */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionEyebrow}>Comment ça se passe</span>
              <h2 className={styles.sectionTitle}>De l’audit au suivi</h2>
            </div>
            <div className={styles.steps}>
              {STEPS.map((s, i) => (
                <div key={s.title} className={styles.step}>
                  <span className={styles.stepNum}>{i + 1}</span>
                  <h3 className={styles.stepName}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CHIFFRES */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              {STATS.map((s) => (
                <div key={s.label} className={styles.statCard}>
                  <span className={styles.statValue}>
                    {s.value}
                    <span className={styles.statUnit}>{s.unit}</span>
                  </span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contact" className={styles.finalCta}>
          <div className={styles.container}>
            <h2 className={styles.finalTitle}>Discutons de votre projet</h2>
            <p className={styles.finalSub}>
              Un appel de 30 minutes pour cerner vos besoins et définir la protection adaptée à
              votre serveur.
            </p>
            <a
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaPrimary}>
              Réserver un appel
            </a>
            <p className={styles.fcaNote}>
              Besoin d’aller au-delà de la protection ? Animation, refonte de serveur, community
              management : c’est le métier de notre agence,{' '}
              <a
                href="https://fca.gg"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.fcaLink}>
                French Community Agency
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
