import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import shared from '../styles/shared.module.css';
import styles from './styles.module.css';

type Badge = 'verified' | 'partner' | null;

type Server = {
  name: string;
  icon: string;
  alt: string;
  href: string;
  /** Raw member count (rounded). Localised at render time. */
  members: number;
  badge: Badge;
};

const SERVERS: Server[] = [
  {
    name: 'Wankil Studio',
    icon: '/img/landing/iconWankilStudio.webp',
    alt: 'Wankil Studio Discord server icon',
    href: 'https://discord.com/invite/wankilstudio',
    members: 40000,
    badge: 'verified',
  },
  {
    name: 'Rocket League France',
    icon: '/img/landing/iconRocketLeagueFrance.webp',
    alt: 'Rocket League France Discord server icon',
    href: 'https://discord.com/invite/rlfr',
    members: 196500,
    badge: 'partner',
  },
  {
    name: 'Slash FR',
    icon: '/img/landing/iconSlashFR.webp',
    alt: 'Slash FR Discord server icon',
    href: 'https://discord.com/invite/fr',
    members: 48500,
    badge: null,
  },
  {
    name: "ZetFar's Family",
    icon: '/img/landing/iconZetFar.webp',
    alt: 'ZetFar Discord server icon',
    href: 'https://discord.com/invite/zetfar',
    members: 135000,
    badge: 'verified',
  },
  {
    name: 'Ligue 1 McDonald’s',
    icon: '/img/landing/iconLigue1.webp',
    alt: 'Ligue 1 Discord server icon',
    href: 'https://discord.com/invite/ligue1',
    members: 15000,
    badge: 'verified',
  },
  {
    name: 'Jobless',
    icon: '/img/landing/iconJobless.webp',
    alt: 'Jobless Discord server icon',
    href: 'https://discord.com/invite/jobless',
    members: 56500,
    badge: 'partner',
  },
  {
    name: 'Blox Fruits FR',
    icon: '/img/landing/iconBloxFruitsFR.webp',
    alt: 'Blox Fruits FR Discord server icon',
    href: 'https://discord.com/invite/bloxfruitsfr',
    members: 124000,
    badge: null,
  },
  {
    name: 'CYRILmp4',
    icon: '/img/landing/iconCyrilmp4.webp',
    alt: 'CYRILmp4 Discord server icon',
    href: 'https://discord.com/invite/cyrilmp4',
    members: 22500,
    badge: 'partner',
  },
  {
    name: 'Fortnite House',
    icon: '/img/landing/iconFortniteHouse.webp',
    alt: 'Fortnite House Discord server icon',
    href: 'https://discord.com/invite/officiel',
    members: 66500,
    badge: 'partner',
  },
  {
    name: 'PUBG MOBILE FRANCE',
    icon: '/img/landing/iconPUBGMobileFrance.webp',
    alt: 'PUBG MOBILE FRANCE Discord server icon',
    href: 'https://discord.com/invite/pubgmfr',
    members: 18000,
    badge: 'verified',
  },
  {
    name: 'NationGlory',
    icon: '/img/landing/iconNationsGlory.webp',
    alt: 'NationsGlory server icon',
    href: 'https://discord.com/invite/nationsglory',
    members: 51000,
    badge: 'partner',
  },
  {
    name: 'MASTU',
    icon: '/img/landing/iconMastu.webp',
    alt: 'MASTU Discord server icon',
    href: 'https://discord.com/invite/mastu',
    members: 17000,
    badge: 'partner',
  },
  {
    name: 'Clash Royale FR',
    icon: '/img/landing/iconClashRoyaleFR.webp',
    alt: 'Clash Royale FR Discord server icon',
    href: 'https://discord.com/invite/clashfr',
    members: 34000,
    badge: 'partner',
  },
  {
    name: 'TEAM VITALITY',
    icon: '/img/landing/iconTeamVitality.webp',
    alt: 'TEAM VITALITY Discord server icon',
    href: 'https://discord.com/invite/teamvitality',
    members: 19500,
    badge: null,
  },
  {
    name: 'Genshin Impact FR',
    icon: '/img/landing/iconGenshinImpactFR.webp',
    alt: 'Genshin Impact FR Discord server icon',
    href: 'https://discord.com/invite/genshinimpactfr',
    members: 55000,
    badge: 'partner',
  },
];

const LOCALE_TO_BCP47: Record<string, string> = {
  fr: 'fr-FR',
  en: 'en-US',
  de: 'de-DE',
  es: 'es-ES',
  pt: 'pt-PT',
};

function BadgeImg({badge}: {badge: Badge}) {
  if (!badge) return null;
  const src =
    badge === 'verified'
      ? '/img/landing/serverBadgeVerified.svg'
      : '/img/landing/serverBadgePartner.svg';
  const alt =
    badge === 'verified'
      ? 'Discord server badge verified'
      : 'Discord server badge partner';
  return (
    <img
      src={src}
      width={20}
      height={20}
      alt={alt}
      loading="lazy"
      className={styles.badge}
    />
  );
}

function ServerCard({server, locale}: {server: Server; locale: string}) {
  const formatted = server.members.toLocaleString(
    LOCALE_TO_BCP47[locale] ?? locale,
  );
  return (
    <a
      href={server.href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.server}>
      <div className={styles.avatarInfo}>
        <img
          src={server.icon}
          alt={server.alt}
          loading="lazy"
          className={styles.avatar}
        />
        <div className={styles.infos}>
          <div className={styles.nameRow}>
            <div className={styles.name}>{server.name}</div>
            <BadgeImg badge={server.badge} />
          </div>
          <div className={styles.memberCount}>
            <Translate
              id="servers.memberCount"
              description="Server card: number of members (e.g. '40 000 members'); {count} is locale-formatted"
              values={{count: formatted}}>
              {'{count} membres'}
            </Translate>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function Servers(): ReactNode {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  return (
    <section className={clsx(shared.landing, styles.section)}>
      <div className={shared.container}>
        <p className={styles.title}>
          <Translate
            id="servers.title"
            description="Servers marquee title: 'We protect the biggest'">
            Nous protégeons les plus grands
          </Translate>
        </p>
        <div className={styles.marqueeWrap} aria-hidden={false}>
          <div className={styles.track}>
            <div className={styles.group}>
              {SERVERS.map((server) => (
                <ServerCard
                  key={`a-${server.name}`}
                  server={server}
                  locale={currentLocale}
                />
              ))}
            </div>
            <div className={styles.group} aria-hidden="true">
              {SERVERS.map((server) => (
                <ServerCard
                  key={`b-${server.name}`}
                  server={server}
                  locale={currentLocale}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
