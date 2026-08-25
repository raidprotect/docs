import {
  SERVERS_FR,
  SERVERS_INTL,
  type Server,
} from '@site/src/components/landing/Servers';

/* Sélections de serveurs par verticale pour les marquees des pages communautés.
 * On réutilise la source unique des serveurs de l'accueil (aucune duplication de
 * données) et on y ajoute quelques serveurs propres aux verticales. L'ordre est
 * pensé pour qu'un gros serveur / serveur vérifié soit toujours visible à
 * l'écran (ils sont répartis, pas regroupés). */

/* Serveurs propres aux verticales, absents des listes de l'accueil. Icônes
 * locales (webp statique) dans static/img/communities/. `href` omis quand aucune
 * invitation publique n'est connue (la carte est alors une simple vignette). */
const EXTRA_GAMING: Server[] = [
  {
    name: 'Call of Duty: Mobile',
    icon: '/img/communities/cod-mobile.webp',
    alt: 'Call of Duty: Mobile Discord server icon',
    href: 'https://discord.com/invite/bUrgsncQ',
    members: 515000,
    badge: 'partner',
  },
  {
    name: 'BattleBit Remastered Official',
    icon: '/img/communities/battlebit.webp',
    alt: 'BattleBit Remastered Discord server icon',
    href: 'https://discord.com/invite/R5VWpdS2',
    members: 142000,
    badge: 'verified',
  },
  {
    name: 'Darktide',
    icon: '/img/communities/darktide.webp',
    alt: 'Darktide Discord server icon',
    href: 'https://discord.com/invite/grTDpAEE',
    members: 138000,
    badge: 'verified',
  },
  {
    name: 'Drive Beyond Horizons',
    icon: '/img/communities/drive-beyond.webp',
    alt: 'Drive Beyond Horizons Discord server icon',
    href: 'https://discord.com/invite/drivebeyondhorizons',
    members: 44000,
    badge: 'verified',
  },
];

const EXTRA_CREATORS: Server[] = [
  {
    name: 'Unchained',
    icon: '/img/communities/unchained.webp',
    alt: 'Unchained Discord server icon',
    href: 'https://discord.com/invite/unchained',
    members: 460000,
    badge: 'verified',
  },
  {
    name: "BeOne Family's",
    icon: '/img/communities/beone.webp',
    alt: "BeOne Family's Discord server icon",
    href: 'https://discord.com/invite/BeOnePourcent',
    members: 146000,
    badge: null,
  },
  {
    name: 'WaZz',
    icon: '/img/communities/wazz.webp',
    alt: 'WaZz Discord server icon',
    href: 'https://discord.com/invite/wazz',
    members: 110000,
    badge: 'verified',
  },
  {
    name: 'Julien Song',
    icon: '/img/communities/julien-song.webp',
    alt: 'Julien Song Discord server icon',
    href: 'https://discord.com/invite/juliensong',
    members: 22000,
    badge: null,
  },
];

const POOL: Server[] = [
  ...SERVERS_FR,
  ...SERVERS_INTL,
  ...EXTRA_GAMING,
  ...EXTRA_CREATORS,
];

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

/** Serveurs de jeu / gaming réellement protégés par RaidProtect. Ordre alterné
 *  (gros / vérifié réparti) pour qu'un serveur marquant soit toujours à l'écran. */
export const GAMING_SERVERS: Server[] = pick([
  'Whiteout Survival', // 1,56 M
  'Fortnite House',
  'Call of Duty: Mobile', // 515 k, partenaire
  'Genshin Impact FR',
  'The Forge', // 285 k
  'NationsGlory',
  'BattleBit Remastered Official', // 142 k, vérifié
  'Clash Royale FR',
  'Darktide', // 138 k, vérifié
  'Drive Beyond Horizons',
  'Blox Fruits FR', // 124 k
  'Art of War 3',
  'Clash.GG', // 110 k
  'TEAM VITALITY',
  'META LOCK', // 108,5 k
  'PUBG MOBILE FRANCE',
  'Ligue 1 McDonald’s',
]);

/** Serveurs de créateurs de contenu / streamers, même logique d'alternance. */
export const CREATOR_SERVERS: Server[] = pick([
  'Unchained', // 460 k, vérifié
  'Jobless',
  "BeOne Family's", // 146 k
  'Wankil Studio',
  "ZetFar's Family", // 135 k, vérifié
  'CYRILmp4',
  'WaZz', // 110 k, vérifié
  'Julien Song',
  'MASTU',
]);
