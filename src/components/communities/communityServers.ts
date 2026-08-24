import {
  SERVERS_FR,
  SERVERS_INTL,
  type Server,
} from '@site/src/components/landing/Servers';

/* Sélections de serveurs par verticale pour les marquees des pages communautés.
 * On réutilise la source unique des serveurs de l'accueil (aucune duplication de
 * données) : on pioche par nom, dans l'ordre d'affichage voulu. Seuls de vrais
 * serveurs de la verticale sont retenus. */

const POOL: Server[] = [...SERVERS_FR, ...SERVERS_INTL];

function pick(names: string[]): Server[] {
  const seen = new Set<string>();
  const out: Server[] = [];
  for (const name of names) {
    if (seen.has(name)) continue;
    const server = POOL.find((s) => s.name === name);
    if (server) {
      seen.add(name);
      out.push(server);
    }
  }
  return out;
}

/* Serveurs propres aux verticales, absents des listes de l'accueil : définis
 * ici pour n'apparaître que dans les marquees communautés. Icônes locales dans
 * static/img/communities/. `href` omis quand aucune invitation publique connue
 * (la carte est alors une simple vignette). */
const EXTRA_GAMING: Server[] = [
  {
    name: 'Call of Duty: Mobile',
    icon: '/img/communities/cod-mobile.gif',
    alt: 'Call of Duty: Mobile Discord server icon',
    href: 'https://discord.com/invite/bUrgsncQ',
    members: 515000,
    badge: 'partner',
  },
  {
    name: 'BattleBit Remastered Official',
    icon: '/img/communities/battlebit.gif',
    alt: 'BattleBit Remastered Discord server icon',
    href: 'https://discord.com/invite/R5VWpdS2',
    members: 142000,
    badge: 'verified',
  },
  {
    name: 'Darktide',
    icon: '/img/communities/darktide.gif',
    alt: 'Darktide Discord server icon',
    href: 'https://discord.com/invite/grTDpAEE',
    members: 138000,
    badge: 'verified',
  },
  {
    name: 'Drive Beyond Horizons',
    icon: '/img/communities/drive-beyond.gif',
    alt: 'Drive Beyond Horizons Discord server icon',
    members: 44000,
    badge: 'verified',
  },
];

const EXTRA_CREATORS: Server[] = [
  {
    name: 'Unchained',
    icon: '/img/communities/unchained.png',
    alt: 'Unchained Discord server icon',
    members: 460000,
    badge: 'verified',
  },
  {
    name: "BeOne Family's",
    icon: '/img/communities/beone.png',
    alt: "BeOne Family's Discord server icon",
    href: 'https://discord.com/invite/KjTgs8h9',
    members: 146000,
    badge: null,
  },
  {
    name: 'WaZz',
    icon: '/img/communities/wazz.png',
    alt: 'WaZz Discord server icon',
    members: 110000,
    badge: 'verified',
  },
  {
    name: 'Julien Song',
    icon: '/img/communities/julien-song.png',
    alt: 'Julien Song Discord server icon',
    members: 22000,
    badge: null,
  },
];

/** Serveurs de jeu / gaming réellement protégés par RaidProtect. */
export const GAMING_SERVERS: Server[] = [
  ...pick([
    'Whiteout Survival',
    'The Forge',
    'Blox Fruits FR',
    'Fortnite House',
    'Genshin Impact FR',
    'NationsGlory',
    'Clash Royale FR',
    'Clash.GG',
    'META LOCK',
    'PUBG MOBILE FRANCE',
    'TEAM VITALITY',
    'Art of War 3',
    'Ligue 1 McDonald’s',
  ]),
  ...EXTRA_GAMING,
];

/** Serveurs de créateurs de contenu / streamers. */
export const CREATOR_SERVERS: Server[] = [
  ...pick(['Wankil Studio', "ZetFar's Family", 'CYRILmp4', 'MASTU', 'Jobless']),
  ...EXTRA_CREATORS,
];
