import React, {type ReactNode, useEffect, useState} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

/* Encart de fin de page de documentation : « Besoin d'aide ? » avec la carte
 * du serveur support reproduite à l'identique de dfr.gg (bannière, icône,
 * présence en direct et champ d'invitation copiable). Les données live sont
 * récupérées via l'API d'invitation Discord, avec un repli statique pour que
 * la carte reste toujours affichée. */

const SUPPORT_INVITE_CODE = 'raidprotect';
const SUPPORT_INVITE_URL = 'https://discord.com/invite/raidprotect';
const SUPPORT_INVITE_LABEL = 'discord.gg/raidprotect';
const SUPPORT_GUILD_ID = '464727714566242305';

type ServerBadge = 'partner' | 'verified' | null;

type SupportServer = {
  name: string;
  iconUrl: string;
  bannerUrl: string | null;
  members: number | null;
  online: number | null;
  badge: ServerBadge;
};

const BADGE_SRC: Record<Exclude<ServerBadge, null>, string> = {
  partner: '/img/icons/serverBadgePartner.svg',
  verified: '/img/icons/serverBadgeVerified.svg',
};

/* Repli statique (valeurs récentes) pour un rendu immédiat et hors-ligne. */
const FALLBACK: SupportServer = {
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

function CopyIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <rect
        x="9"
        y="9"
        width="11"
        height="11"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M5 12.5 10 17.5 19.5 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SupportCta(): ReactNode {
  const [server, setServer] = useState<SupportServer>(FALLBACK);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchSupportServer().then((info) => {
      if (!cancelled && info) setServer(info);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleCopy = () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return;
    navigator.clipboard.writeText(SUPPORT_INVITE_URL).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  };

  const nf = new Intl.NumberFormat();
  const membersLabel =
    server.members != null
      ? translate(
          {
            id: 'docs.support.members',
            message: '{count} membres',
            description: 'Support server total member count',
          },
          {count: nf.format(server.members)},
        )
      : null;
  const onlineLabel =
    server.online != null
      ? translate(
          {
            id: 'docs.support.online',
            message: '{count} en ligne',
            description: 'Support server online (present) member count',
          },
          {count: nf.format(server.online)},
        )
      : null;
  const copyAriaLabel = translate({
    id: 'docs.support.copy',
    message: "Copier le lien d'invitation",
    description: 'Aria label for the copy-invite button',
  });

  return (
    <aside className={styles.wrap} aria-labelledby="docs-support-title">
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.text}>
        <h2 id="docs-support-title" className={styles.title}>
          <Translate
            id="docs.support.title"
            description="Heading of the end-of-doc support CTA">
            Besoin d'aide ?
          </Translate>
        </h2>
        <p className={styles.subtitle}>
          <Translate
            id="docs.support.subtitle"
            description="Body text of the end-of-doc support CTA">
            Une question, un bug ou un doute sur la configuration ? Notre équipe
            et notre communauté vous répondent directement sur Discord.
          </Translate>
        </p>
        <a
          href={SUPPORT_INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}>
          <Translate
            id="docs.support.cta"
            description="Button label of the end-of-doc support CTA">
            Rejoindre le support
          </Translate>
        </a>
      </div>

      {/* Carte serveur, calquée sur la carte d'invitation Discord */}
      <div className={styles.card}>
        <a
          href={SUPPORT_INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.banner}
          aria-label={server.name}>
          {server.bannerUrl && (
            <img
              src={server.bannerUrl}
              alt=""
              loading="lazy"
              className={styles.bannerImg}
            />
          )}
        </a>

        <div className={styles.cardBody}>
          <div className={styles.cardHead}>
            <a
              href={SUPPORT_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.plainLink}
              aria-label={server.name}>
              <img
                src={server.iconUrl}
                alt=""
                width={48}
                height={48}
                loading="lazy"
                className={styles.icon}
              />
            </a>
            <div className={styles.meta}>
              <div className={styles.nameRow}>
                <a
                  href={SUPPORT_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.name} ${styles.plainLink}`}>
                  {server.name}
                </a>
                {server.badge && (
                  <img
                    src={BADGE_SRC[server.badge]}
                    alt=""
                    width={18}
                    height={18}
                    loading="lazy"
                    className={styles.badge}
                  />
                )}
              </div>
              <div className={styles.stats}>
                {onlineLabel && (
                  <span className={styles.online}>
                    <span className={styles.onlineDot} aria-hidden="true" />
                    {onlineLabel}
                  </span>
                )}
                {membersLabel && (
                  <span className={styles.members}>{membersLabel}</span>
                )}
              </div>
            </div>
          </div>

          <div className={styles.invite}>
            <span className={styles.inviteCode}>{SUPPORT_INVITE_LABEL}</span>
            <button
              type="button"
              onClick={handleCopy}
              className={styles.copyBtn}
              aria-label={copyAriaLabel}>
              {copied ? <CheckIcon /> : <CopyIcon />}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
