import React, {type ReactNode, useEffect, useRef, useState} from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {localizedRedirectUrl} from '@site/src/utils/links';
import styles from './business.module.css';

type Brand = {name: string; logo?: string; url?: string};

// Bandeau de confiance : logos "full" (wordmarks SVG) façon fca.gg, sans
// distinction de formule. Déposer les fichiers dans static/img/business/logos/ ;
// tant qu'ils manquent, un placeholder texte s'affiche (fallback onError).
// url : lien vers le site de la marque (à confirmer/ajuster).
const BRANDS: Brand[] = [
  {name: 'Ligue 1 McDonald’s', logo: '/img/business/logos/ligue1.svg', url: 'https://www.ligue1.com'},
  {name: 'Game One', logo: '/img/business/logos/gameone.svg', url: 'https://www.gameone.fr'},
  {name: 'CYRILmp4', logo: '/img/business/logos/cyrilmp4.svg', url: 'https://www.youtube.com/@CYRILmp4'},
  {name: 'HugoDécrypte', logo: '/img/business/logos/hugodecrypte.svg', url: 'https://hugodecrypte.com'},
  // Masqué pour l'instant : {name: 'Century Games', logo: '/img/business/logos/centurygames.svg', url: 'https://www.centurygames.com'},
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

type ModBadgeType = 'mod' | 'hse' | 'botdev' | 'bug' | 'buggold';

// Vrais badges Discord (SVG officiels récupérés depuis dfr.gg/team). On ne
// garde que ceux qui distinguent un modérateur pro : pas les badges de maison.
// desc = explication montrée dans le tooltip au survol.
const BADGES: Record<ModBadgeType, {file: string; label: string; desc: string}> = {
  mod: {
    file: 'mod',
    label: 'Modérateur certifié',
    desc: 'A suivi et validé le programme de modération de Discord : formation et examen officiels.',
  },
  hse: {
    file: 'hse',
    label: 'HypeSquad Events',
    desc: 'Ambassadeur de Discord, engagé de longue date dans les évènements officiels de la plateforme.',
  },
  botdev: {
    file: 'botdev',
    label: 'Développeur de bot vérifié',
    desc: 'Contribution à un bot Discord vérifié et approuvé par la plateforme.',
  },
  bug: {
    file: 'bug-hunter',
    label: 'Bug Hunter',
    desc: 'Bonne connaissance de la plateforme et contribution active à l’amélioration de Discord.',
  },
  buggold: {
    file: 'bug-hunter-gold',
    label: 'Bug Hunter Gold',
    desc: 'Contribution majeure à la détection de bugs : expertise reconnue de Discord.',
  },
};

function BadgeChip({type}: {type: ModBadgeType}): ReactNode {
  const b = BADGES[type];
  const label = translate({id: `business.badge.${type}`, message: b.label, description: 'Discord badge label'});
  const desc = translate({id: `business.badge.${type}.desc`, message: b.desc, description: 'Discord badge explanation'});
  return (
    <span className={styles.modBadge} aria-label={`${label} : ${desc}`}>
      <img src={`/img/business/badges/${b.file}.svg`} alt="" loading="lazy" />
      <span className={styles.badgeTip} aria-hidden="true">
        <strong className={styles.badgeTipTitle}>{label}</strong>
        <span className={styles.badgeTipDesc}>{desc}</span>
      </span>
    </span>
  );
}

type LangCode = 'fr' | 'en' | 'es' | 'de' | 'pt';

// Autonymes (secours si Intl.DisplayNames indisponible).
const LANG_NAMES: Record<LangCode, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  pt: 'Português',
};

// Nom d'une langue dans la langue courante du site (ex. site en → « French »),
// pour l'infobulle des drapeaux. Repli sur l'autonyme si indisponible.
function langLabel(code: LangCode, locale: string): string {
  try {
    const name = new Intl.DisplayNames([locale], {type: 'language'}).of(code);
    if (name) return name.charAt(0).toUpperCase() + name.slice(1);
  } catch {
    /* Intl.DisplayNames indisponible */
  }
  return LANG_NAMES[code];
}

type Moderator = {
  avatar: string;
  name: string;
  handle: string;
  badges: ModBadgeType[];
  langs: LangCode[];
  created: string;
  since: string;
};

// Modérateurs professionnels. Badges = vrais badges Discord (voir BADGES).
// created/since au format « YYYY-MM » : formatés selon la locale au rendu (voir
// formatMonthYear). created = création du compte (déduite de l'ID Discord).
// since (Modère depuis) laissé vide pour l'instant : ce segment n'est alors pas
// rendu. langs = langues parlées (TODO : à confirmer par personne, défaut fr).
const MODERATORS: Moderator[] = [
  {avatar: '/img/avatar/derrios.webp', name: 'Arthur', handle: 'derrios', badges: ['mod', 'hse', 'botdev', 'buggold'], langs: ['fr'], created: '2016-12', since: ''},
  {avatar: '/img/business/mods/grifgrif.webp', name: 'Varyn', handle: 'grifgrif', badges: ['mod', 'hse', 'botdev'], langs: ['fr', 'en'], created: '2018-01', since: ''},
  {avatar: '/img/avatar/ichii.webp', name: 'Ethan', handle: 'ichiidev', badges: ['mod', 'hse', 'botdev'], langs: ['fr', 'en'], created: '2019-01', since: ''},
  {avatar: '/img/business/mods/chancesphere.webp', name: 'Dillan', handle: 'chancesphere574', badges: ['mod'], langs: ['fr', 'en'], created: '2016-09', since: ''},
  {avatar: '/img/business/mods/mapidae.webp', name: 'Mattéo', handle: 'mapidae', badges: ['mod'], langs: ['fr'], created: '2018-05', since: ''},
  {avatar: '/img/business/mods/syfor.webp', name: 'Pierre', handle: 'syfor', badges: ['mod', 'buggold'], langs: ['fr', 'en'], created: '2018-01', since: ''},
];

// Formate « YYYY-MM » selon la locale (« déc. 2016 », « Dec 2016 », « Dez. 2016 »…).
// Toute autre valeur (année seule, etc.) est renvoyée telle quelle.
function formatMonthYear(value: string, locale: string): string {
  const m = /^(\d{4})-(\d{2})$/.exec(value);
  if (!m) return value;
  const date = new Date(Date.UTC(Number(m[1]), Number(m[2]) - 1, 1));
  return new Intl.DateTimeFormat(locale, {month: 'short', year: 'numeric', timeZone: 'UTC'}).format(date);
}

function MetaGlyph({name}: {name: 'discord' | 'mod'}): ReactNode {
  if (name === 'discord') {
    return (
      <svg className={styles.modMetaIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.27 5.33A16.6 16.6 0 0 0 15.2 4a.06.06 0 0 0-.07.03c-.18.31-.37.72-.5 1.04a15.3 15.3 0 0 0-4.27 0A9.5 9.5 0 0 0 9.85 4a.06.06 0 0 0-.06-.03 16.6 16.6 0 0 0-4.08 1.33.05.05 0 0 0-.03.02C3.06 9.05 2.33 12.66 2.7 16.22a.07.07 0 0 0 .03.05 16.7 16.7 0 0 0 5.02 2.53.06.06 0 0 0 .07-.02c.39-.53.73-1.08 1.03-1.67a.06.06 0 0 0-.04-.09c-.55-.2-1.07-.46-1.57-.75a.06.06 0 0 1 0-.11l.31-.24a.06.06 0 0 1 .06 0 11.9 11.9 0 0 0 10.11 0 .06.06 0 0 1 .07 0l.31.24a.06.06 0 0 1 0 .11c-.5.3-1.02.55-1.58.75a.06.06 0 0 0-.03.09c.3.58.65 1.14 1.03 1.67a.06.06 0 0 0 .07.02 16.6 16.6 0 0 0 5.03-2.53.06.06 0 0 0 .02-.05c.44-4.12-.73-7.7-3.1-10.87a.05.05 0 0 0-.02-.02ZM8.68 14.05c-.99 0-1.8-.9-1.8-2.02s.8-2.02 1.8-2.02 1.82.91 1.8 2.02c0 1.11-.8 2.02-1.8 2.02Zm6.65 0c-.99 0-1.8-.9-1.8-2.02s.8-2.02 1.8-2.02 1.82.91 1.8 2.02c0 1.11-.8 2.02-1.8 2.02Z" />
      </svg>
    );
  }
  return (
    <svg className={styles.modMetaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.3-2.9 7.7-7 9-4.1-1.3-7-4.7-7-9V6l7-3z" strokeLinejoin="round" />
      <path d="M9.2 11.4l1.9 1.9 3.6-3.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ModeratorCard({mod}: {mod: Moderator}): ReactNode {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const createdLabel = translate({
    id: 'business.mods.created',
    message: 'Compte créé',
    description: 'Moderator card: account creation date label',
  });
  const sinceLabel = translate({
    id: 'business.mods.since',
    message: 'Modère depuis',
    description: 'Moderator card: moderating-since label',
  });
  return (
    <div className={styles.modCard}>
      <img className={styles.modAvatar} src={mod.avatar} alt="" loading="lazy" />
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
        {(mod.created || mod.since || mod.langs.length > 0) && (
          <div className={styles.modMeta}>
            {mod.created && (
              <span className={styles.modMetaItem} aria-label={createdLabel} data-label={createdLabel}>
                <MetaGlyph name="discord" />
                {formatMonthYear(mod.created, currentLocale)}
              </span>
            )}
            {mod.created && mod.since && (
              <span className={styles.modMetaSep} aria-hidden="true">
                ·
              </span>
            )}
            {mod.since && (
              <span className={styles.modMetaItem} aria-label={sinceLabel} data-label={sinceLabel}>
                <MetaGlyph name="mod" />
                {formatMonthYear(mod.since, currentLocale)}
              </span>
            )}
            {mod.langs.length > 0 && (
              <span className={styles.modLangs}>
                {mod.langs.map((l) => (
                  <img
                    key={l}
                    className={styles.modLang}
                    src={`/img/lang/${l}.png`}
                    alt={langLabel(l, currentLocale)}
                    title={langLabel(l, currentLocale)}
                    loading="lazy"
                  />
                ))}
              </span>
            )}
          </div>
        )}
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
    desc: 'Votre serveur tourne sur sa propre instance, à l’écart des milliers d’autres : aucun ralentissement ni risque partagé, et une protection taillée précisément pour vous.',
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
  // Le site FCA n'est en français que sur son domaine racine ; les autres
  // langues sont servies sous /en.
  const fcaUrl = currentLocale === 'fr' ? 'https://fca.gg' : 'https://fca.gg/en';
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
              {BRANDS.map((b) => (
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
                    Formés et certifiés par le programme de modération officiel de Discord, en
                    français comme en anglais. En renfort ponctuel ou en prise en charge complète
                    de votre serveur.
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
                      href={fcaUrl}
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
