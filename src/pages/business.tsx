import React, {type ReactNode, useEffect, useRef, useState} from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {localizedRedirectUrl} from '@site/src/utils/links';
import styles from './business.module.css';

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
  const label = translate({id: `business.badge.${type}`, message: b.label, description: 'Discord badge label'});
  return (
    <span className={`${styles.modBadge} ${styles[b.cls]}`} title={label} aria-label={label}>
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
            <span className={styles.modMetaLabel}>
              <Translate id="business.mods.created" description="Moderator card: account creation date label">
                Compte créé
              </Translate>
            </span>
            <span className={styles.modMetaValue}>{mod.created}</span>
          </div>
          <div className={styles.modMetaRow}>
            <MetaIcon name="shield" />
            <span className={styles.modMetaLabel}>
              <Translate id="business.mods.since" description="Moderator card: moderating-since label">
                Modère depuis
              </Translate>
            </span>
            <span className={styles.modMetaValue}>{mod.since}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// title/desc = messages par défaut (fr) ; la traduction se fait au rendu via
// translate({id: `business.offer.${id}.title`, ...}) pour lire la locale.
type Offer = {icon: IconName; id: string; title: string; desc: string};

const OFFERS: Offer[] = [
  {
    icon: 'audit',
    id: 'audit',
    title: 'Audit de sécurité avec un expert',
    desc: 'Un expert analyse votre serveur et définit avec vous la stratégie de protection adaptée.',
  },
  {
    icon: 'shield',
    id: 'instance',
    title: 'Instance dédiée et isolée',
    desc: 'Votre propre instance de RaidProtect, isolée et à votre image, pour la performance et la sécurité.',
  },
  {
    icon: 'wrench',
    id: 'custom',
    title: 'Protections sur-mesure',
    desc: 'Des modules et des règles développés à la demande, selon les menaces propres à votre serveur.',
  },
  {
    icon: 'code',
    id: 'bot',
    title: 'Bot entièrement personnalisé',
    desc: 'Nos développeurs conçoivent les fonctionnalités spécifiques à vos besoins.',
  },
  {
    icon: 'call',
    id: 'followup',
    title: 'Suivi humain',
    desc: 'Des points réguliers avec un expert, autant que nécessaire, pour ajuster votre protection.',
  },
  {
    icon: 'access',
    id: 'mods',
    title: 'Modérateurs professionnels',
    desc: 'Des modérateurs formés et certifiés par Discord, en renfort ou en prise en charge complète de votre modération.',
  },
];

const SECURITY: {icon: IconName; id: string; title: string; desc: string}[] = [
  {
    icon: 'lock',
    id: 'encrypted',
    title: 'Données chiffrées',
    desc: "Chiffrement au repos sur une machine dédiée et contrôle d'accès strict.",
  },
  {
    icon: 'eu',
    id: 'eu',
    title: 'Hébergement dans l’UE',
    desc: 'Infrastructure principale en Allemagne, sans transfert hors Union européenne.',
  },
  {
    icon: 'access',
    id: 'gdpr',
    title: 'Conformité RGPD assumée',
    desc: 'Responsabilité clairement définie et politique de confidentialité transparente.',
  },
  {
    icon: 'noAi',
    id: 'noai',
    title: 'Aucune exploitation détournée',
    desc: "Vos données ne servent ni à la publicité, ni à l'entraînement de modèles d'IA.",
  },
];

const STEPS: {id: string; title: string; desc: string}[] = [
  {id: 'audit', title: 'Audit', desc: 'On étudie votre serveur, vos risques et vos besoins avec un expert.'},
  {
    id: 'setup',
    title: 'Mise en place',
    desc: 'Instance dédiée, protections sur-mesure et développements spécifiques déployés pour vous.',
  },
  {id: 'followup', title: 'Suivi', desc: 'Des points réguliers pour ajuster, faire évoluer et anticiper les menaces.'},
];

const STATS: {id: string; value: string; unit: string; label: string}[] = [
  {id: 'servers', value: '380', unit: 'K+', label: 'serveurs protégés'},
  {id: 'users', value: '50', unit: 'M+', label: 'utilisateurs protégés'},
  {id: 'spam', value: '1.4', unit: 'M+', label: 'spams bloqués'},
];

export default function Business(): ReactNode {
  const {
    i18n: {currentLocale, defaultLocale},
    siteConfig: {url: siteUrl},
  } = useDocusaurusContext();
  const appointmentUrl = localizedRedirectUrl(siteUrl, currentLocale, defaultLocale, '/appointment');
  const brands = BRANDS.filter((b) => !b.frOnly || currentLocale === 'fr');
  // Libellé partagé par les trois boutons « Réserver un appel ».
  const callLabel = translate({
    id: 'business.cta.call',
    message: 'Réserver un appel',
    description: 'Business CTA: book a call',
  });

  return (
    <Layout
      title="RaidProtect Business"
      description={translate({
        id: 'business.meta.description',
        message:
          'RaidProtect Business : audit avec un expert, instance dédiée et isolée, protections sur-mesure et développement custom pour les organisations exigeantes.',
        description: 'Business page meta description',
      })}>
      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>RaidProtect Business</span>
            <h1 className={styles.title}>
              <Translate id="business.hero.title" description="Business hero title, first line">
                Bien plus qu’un bot :
              </Translate>
              <span className={styles.titleAccent}>
                <Translate id="business.hero.titleAccent" description="Business hero title, accented second line">
                  votre partenaire Discord
                </Translate>
              </span>
            </h1>
            <p className={styles.subtitle}>
              <Translate id="business.hero.subtitle" description="Business hero subtitle">
                La protection et la modération de votre serveur Discord, prises en charge de bout en
                bout par nos experts. Une offre sur-mesure, adaptée à votre organisation.
              </Translate>
            </p>
            <div className={styles.ctas}>
              <a
                href={appointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimary}>
                {callLabel}
              </a>
              <a href="#offre" className={styles.ctaSecondary}>
                <Translate id="business.hero.cta.offer" description="Business hero secondary CTA: see the offer">
                  Voir l’offre
                </Translate>
              </a>
            </div>
          </div>
        </section>

        {/* BANDEAU CONFIANCE */}
        <section className={styles.trust}>
          <div className={styles.container}>
            <p className={styles.trustLabel}>
              <Translate id="business.trust.label" description="Trust band label above brand logos">
                Ils nous font confiance
              </Translate>
            </p>
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
              <span className={styles.sectionEyebrow}>
                <Translate id="business.who.eyebrow" description="Who-is-it-for section eyebrow">
                  Pour qui ?
                </Translate>
              </span>
              <h2 className={styles.sectionTitle}>
                <Translate id="business.who.title" description="Who-is-it-for section title">
                  Quand le standard ne suffit plus
                </Translate>
              </h2>
              <p className={styles.sectionSub}>
                <Translate id="business.who.sub" description="Who-is-it-for section paragraph">
                  Grandes communautés, marques, médias, créateurs : à cette échelle, une faille de
                  sécurité ou un raid engage votre image. Il vous faut plus qu’un abonnement : un
                  interlocuteur, des garanties et une protection gérée par des humains.
                </Translate>
              </p>
            </div>
          </div>
        </section>

        {/* OFFRE */}
        <section id="offre" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionEyebrow}>
                <Translate id="business.offer.eyebrow" description="Offer section eyebrow">
                  L’offre Business
                </Translate>
              </span>
              <h2 className={styles.sectionTitle}>
                <Translate id="business.offer.title" description="Offer section title">
                  Protection et modération, sur-mesure
                </Translate>
              </h2>
              <p className={styles.sectionSub}>
                <Translate id="business.offer.sub" description="Offer section subtitle">
                  Tout est optionnel : vous composez votre offre à la carte, uniquement avec ce dont
                  vous avez besoin.
                </Translate>
              </p>
            </div>
            <div className={styles.offerGrid}>
              {OFFERS.map((o) => (
                <div key={o.id} className={styles.offerCard}>
                  <span className={styles.offerIcon}>
                    <Icon name={o.icon} />
                  </span>
                  <h3 className={styles.offerName}>
                    {translate({id: `business.offer.${o.id}.title`, message: o.title, description: 'Offer card title'})}
                  </h3>
                  <p className={styles.offerDesc}>
                    {translate({id: `business.offer.${o.id}.desc`, message: o.desc, description: 'Offer card description'})}
                  </p>
                </div>
              ))}
            </div>
            <div className={styles.sectionCta}>
              <a href="#contact" className={styles.ctaPrimary}>
                {callLabel}
              </a>
            </div>
          </div>
        </section>

        {/* MODÉRATEURS (masqué tant qu'aucun profil réel n'est renseigné) */}
        {MODERATORS.length > 0 && (
          <section className={styles.section}>
            <div className={styles.container}>
              <div className={styles.sectionHead}>
                <span className={styles.sectionEyebrow}>
                  <Translate id="business.mods.eyebrow" description="Moderators section eyebrow">
                    Modération humaine
                  </Translate>
                </span>
                <h2 className={styles.sectionTitle}>
                  <Translate id="business.mods.title" description="Moderators section title">
                    Une équipe certifiée par Discord
                  </Translate>
                </h2>
                <p className={styles.sectionSub}>
                  <Translate id="business.mods.sub" description="Moderators section subtitle">
                    Des modérateurs expérimentés et certifiés, en renfort ponctuel ou en prise en
                    charge complète de votre serveur.
                  </Translate>
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
              <span className={styles.sectionEyebrow}>
                <Translate id="business.security.eyebrow" description="Security section eyebrow">
                  Sécurité &amp; conformité
                </Translate>
              </span>
              <h2 className={styles.sectionTitle}>
                <Translate id="business.security.title" description="Security section title">
                  Une infrastructure conforme et maîtrisée
                </Translate>
              </h2>
            </div>
            <div className={styles.securityGrid}>
              {SECURITY.map((s) => (
                <div key={s.id} className={styles.securityCard}>
                  <span className={styles.securityIcon}>
                    <Icon name={s.icon} />
                  </span>
                  <div>
                    <h3 className={styles.securityName}>
                      {translate({id: `business.security.${s.id}.title`, message: s.title, description: 'Security card title'})}
                    </h3>
                    <p className={styles.securityDesc}>
                      {translate({id: `business.security.${s.id}.desc`, message: s.desc, description: 'Security card description'})}
                    </p>
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
              <span className={styles.sectionEyebrow}>
                <Translate id="business.steps.eyebrow" description="Steps section eyebrow">
                  Comment ça se passe
                </Translate>
              </span>
              <h2 className={styles.sectionTitle}>
                <Translate id="business.steps.title" description="Steps section title">
                  De l’audit au suivi
                </Translate>
              </h2>
            </div>
            <div className={styles.steps}>
              {STEPS.map((s, i) => (
                <div key={s.id} className={styles.step}>
                  <span className={styles.stepNum}>{i + 1}</span>
                  <h3 className={styles.stepName}>
                    {translate({id: `business.steps.${s.id}.title`, message: s.title, description: 'Step title'})}
                  </h3>
                  <p className={styles.stepDesc}>
                    {translate({id: `business.steps.${s.id}.desc`, message: s.desc, description: 'Step description'})}
                  </p>
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
                <div key={s.id} className={styles.statCard}>
                  <span className={styles.statValue}>
                    {s.value}
                    <span className={styles.statUnit}>{s.unit}</span>
                  </span>
                  <span className={styles.statLabel}>
                    {translate({id: `business.stats.${s.id}`, message: s.label, description: 'Stat label'})}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contact" className={styles.finalCta}>
          <div className={styles.container}>
            <h2 className={styles.finalTitle}>
              <Translate id="business.final.title" description="Final CTA title">
                Discutons de votre projet
              </Translate>
            </h2>
            <p className={styles.finalSub}>
              <Translate id="business.final.sub" description="Final CTA subtitle">
                Un appel de 30 minutes pour cerner vos besoins et définir la protection adaptée à
                votre serveur.
              </Translate>
            </p>
            <a
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaPrimary}>
              {callLabel}
            </a>
            <p className={styles.fcaNote}>
              <Translate
                id="business.final.fcaNote"
                description="Final note about the FCA agency; {link} renders the agency link"
                values={{
                  link: (
                    <a
                      href="https://fca.gg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.fcaLink}>
                      French Community Agency
                    </a>
                  ),
                }}>
                {'Besoin d’aller au-delà de la protection ? Animation, refonte de serveur, community management : c’est le métier de notre agence, {link}.'}
              </Translate>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
