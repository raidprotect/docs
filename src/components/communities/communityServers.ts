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

/** Serveurs de jeu / gaming réellement protégés par RaidProtect. */
export const GAMING_SERVERS = pick([
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
]);

/** Serveurs de créateurs de contenu / streamers. */
export const CREATOR_SERVERS = pick([
  'Wankil Studio',
  "ZetFar's Family",
  'CYRILmp4',
  'MASTU',
  'Jobless',
]);
