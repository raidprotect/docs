import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import shared from '../styles/shared.module.css';
import styles from './styles.module.css';

type Badge = 'verified' | 'partner' | null;

type Server = {
  name: string;
  icon: string;
  alt: string;
  href: string;
  members: string;
  badge: Badge;
};

const SERVERS: Server[] = [
  {
    name: 'Wankil Studio',
    icon: '/img/landing/iconWankilStudio.webp',
    alt: 'Wankil Studio Discord server icon',
    href: 'https://discord.com/invite/wankilstudio',
    members: '40 000 membres',
    badge: 'verified',
  },
  {
    name: 'Rocket League France',
    icon: '/img/landing/iconRocketLeagueFrance.webp',
    alt: 'Rocket League France Discord server icon',
    href: 'https://discord.com/invite/rlfr',
    members: '196 500 membres',
    badge: 'partner',
  },
  {
    name: 'Slash FR',
    icon: '/img/landing/iconSlashFR.webp',
    alt: 'Slash FR Discord server icon',
    href: 'https://discord.com/invite/fr',
    members: '48 500 membres',
    badge: null,
  },
  {
    name: "ZetFar's Family",
    icon: '/img/landing/iconZetFar.webp',
    alt: 'ZetFar Discord server icon',
    href: 'https://discord.com/invite/zetfar',
    members: '135 000 membres',
    badge: 'verified',
  },
  {
    name: 'Ligue 1 McDonald’s',
    icon: '/img/landing/iconLigue1.webp',
    alt: 'Ligue 1 Discord server icon',
    href: 'https://discord.com/invite/ligue1',
    members: '15 000 membres',
    badge: 'verified',
  },
  {
    name: 'Jobless',
    icon: '/img/landing/iconJobless.webp',
    alt: 'Jobless Discord server icon',
    href: 'https://discord.com/invite/jobless',
    members: '56 500 membres',
    badge: 'partner',
  },
  {
    name: 'Blox Fruits FR',
    icon: '/img/landing/iconBloxFruitsFR.webp',
    alt: 'Blox Fruits FR Discord server icon',
    href: 'https://discord.com/invite/bloxfruitsfr',
    members: '124 000 membres',
    badge: null,
  },
  {
    name: 'CYRILmp4',
    icon: '/img/landing/iconCyrilmp4.webp',
    alt: 'CYRILmp4 Discord server icon',
    href: 'https://discord.com/invite/cyrilmp4',
    members: '22 500 membres',
    badge: 'partner',
  },
  {
    name: 'Fortnite House',
    icon: '/img/landing/iconFortniteHouse.webp',
    alt: 'Fortnite House Discord server icon',
    href: 'https://discord.com/invite/officiel',
    members: '66 500 membres',
    badge: 'partner',
  },
  {
    name: 'PUBG MOBILE FRANCE',
    icon: '/img/landing/iconPUBGMobileFrance.webp',
    alt: 'PUBG MOBILE FRANCE Discord server icon',
    href: 'https://discord.com/invite/pubgmfr',
    members: '18 000 membres',
    badge: 'verified',
  },
  {
    name: 'NationGlory',
    icon: '/img/landing/iconNationsGlory.webp',
    alt: 'NationsGlory server icon',
    href: 'https://discord.com/invite/nationsglory',
    members: '51 000 membres',
    badge: 'partner',
  },
  {
    name: 'MASTU',
    icon: '/img/landing/iconMastu.webp',
    alt: 'MASTU Discord server icon',
    href: 'https://discord.com/invite/mastu',
    members: '17 000 membres',
    badge: 'partner',
  },
  {
    name: 'Clash Royale FR',
    icon: '/img/landing/iconClashRoyaleFR.webp',
    alt: 'Clash Royale FR Discord server icon',
    href: 'https://discord.com/invite/clashfr',
    members: '34 000 membres',
    badge: 'partner',
  },
  {
    name: 'TEAM VITALITY',
    icon: '/img/landing/iconTeamVitality.webp',
    alt: 'TEAM VITALITY Discord server icon',
    href: 'https://discord.com/invite/teamvitality',
    members: '19 500 membres',
    badge: null,
  },
  {
    name: 'Genshin Impact FR',
    icon: '/img/landing/iconGenshinImpactFR.webp',
    alt: 'Genshin Impact FR Discord server icon',
    href: 'https://discord.com/invite/genshinimpactfr',
    members: '55 000 membres',
    badge: 'partner',
  },
];

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

function ServerCard({server}: {server: Server}) {
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
          <div className={styles.memberCount}>{server.members}</div>
        </div>
      </div>
    </a>
  );
}

export default function Servers(): ReactNode {
  return (
    <section className={clsx(shared.landing, styles.section)}>
      <div className={shared.container}>
        <p className={styles.title}>Nous protégeons les plus grands</p>
        <div className={styles.marqueeWrap} aria-hidden={false}>
          <div className={styles.track}>
            <div className={styles.group}>
              {SERVERS.map((server) => (
                <ServerCard key={`a-${server.name}`} server={server} />
              ))}
            </div>
            <div className={styles.group} aria-hidden="true">
              {SERVERS.map((server) => (
                <ServerCard key={`b-${server.name}`} server={server} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
