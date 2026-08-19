import {useEffect, useState} from 'react';

/* Données du serveur support RaidProtect, partagées entre l'encart de fin de
 * page et la carte du sommaire. Récupérées en direct via l'API d'invitation
 * Discord, avec un repli statique pour un rendu immédiat et hors-ligne. */

export const SUPPORT_INVITE_CODE = 'raidprotect';
export const SUPPORT_INVITE_URL = 'https://discord.com/invite/raidprotect';
export const SUPPORT_INVITE_LABEL = 'discord.gg/raidprotect';
export const SUPPORT_GUILD_ID = '464727714566242305';

export type ServerBadge = 'partner' | 'verified' | null;

export type SupportServer = {
  name: string;
  iconUrl: string;
  bannerUrl: string | null;
  members: number | null;
  online: number | null;
  badge: ServerBadge;
};

export const BADGE_SRC: Record<Exclude<ServerBadge, null>, string> = {
  partner: '/img/icons/serverBadgePartner.svg',
  verified: '/img/icons/serverBadgeVerified.svg',
};

/* Repli statique (valeurs récentes). */
export const FALLBACK: SupportServer = {
  name: 'RaidProtect',
  iconUrl: `https://cdn.discordapp.com/icons/${SUPPORT_GUILD_ID}/a_e5a554904d731ddf2f3793053ba6f58f.png?size=128`,
  bannerUrl: `https://cdn.discordapp.com/banners/${SUPPORT_GUILD_ID}/d1df71eb486512e8b30f8a723787a582.png?size=512`,
  members: 24000,
  online: 5000,
  badge: null,
};

async function fetchSupportServer(): Promise<SupportServer | null> {
  try {
    const response = await fetch(
      `https://discord.com/api/v10/invites/${SUPPORT_INVITE_CODE}?with_counts=true`,
    );
    if (!response.ok) return null;
    const data = await response.json();
    const guild = data.guild ?? {};

    let badge: ServerBadge = null;
    if (Array.isArray(guild.features)) {
      if (guild.features.includes('PARTNERED')) badge = 'partner';
      else if (guild.features.includes('VERIFIED')) badge = 'verified';
    }

    const iconUrl =
      guild.id && guild.icon
        ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=128`
        : FALLBACK.iconUrl;
    const bannerUrl =
      guild.id && guild.banner
        ? `https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.png?size=512`
        : FALLBACK.bannerUrl;

    return {
      name: guild.name || FALLBACK.name,
      iconUrl,
      bannerUrl,
      members:
        typeof data.approximate_member_count === 'number'
          ? data.approximate_member_count
          : null,
      online:
        typeof data.approximate_presence_count === 'number'
          ? data.approximate_presence_count
          : null,
      badge,
    };
  } catch {
    return null;
  }
}

/** Renvoie les infos du serveur support, initialisées au repli puis mises à
 *  jour avec les données live dès qu'elles arrivent. */
export function useSupportServer(): SupportServer {
  const [server, setServer] = useState<SupportServer>(FALLBACK);

  useEffect(() => {
    let cancelled = false;
    fetchSupportServer().then((info) => {
      if (!cancelled && info) setServer(info);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return server;
}
