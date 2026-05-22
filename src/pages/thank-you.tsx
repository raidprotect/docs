import React, {type ReactNode, useEffect, useState} from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import styles from './thank-you.module.css';

type ServerBadge = 'partner' | 'verified' | null;

type ServerInfo = {
  name: string;
  members: string;
  inviteUrl: string;
  iconUrl: string;
  badge: ServerBadge;
};

type PermissionWarning = {
  tone: 'admin' | 'missing';
  message: string;
  missing: string[];
};

const DEFAULT_ICON_URL =
  'https://cdn.prod.website-files.com/677fbd67c3c9318f7fb56659/67c33922eb3265808c183c50_411d8a698dd15ddf.webp';

const BADGE_SRC: Record<Exclude<ServerBadge, null>, string> = {
  partner: '/img/landing/serverBadgePartner.svg',
  verified: '/img/landing/serverBadgeVerified.svg',
};

const REQUIRED_PERMISSIONS = 1117660769534n;
const ADMIN_PERMISSION = 8n;

// Order matches the Webflow source so the missing-permissions list reads the same.
const PERMISSION_MESSAGES: Array<[string, bigint]> = [
  ['Administrateur', ADMIN_PERMISSION],
  ['Gérer le serveur', 32n],
  ['Gérer les rôles', 268435456n],
  ['Gérer les salons', 16n],
  ['Expulser des membres', 2n],
  ['Bannir des membres', 4n],
  ['Gérer les pseudos', 134217728n],
  ['Gérer les webhooks', 536870912n],
  ['Voir les logs du serveur', 524288n],
  ['Voir les salons', 1024n],
  ['Modérer les membres', 1099511627776n],
  ['Envoyer des messages', 2048n],
  ['Gérer les messages', 8192n],
  ['Gérer les fils', 17179869184n],
  ['Intégrer des liens', 16384n],
  ['Joindre des fichiers', 32768n],
  ['Voir les anciens messages', 65536n],
  ['Ajouter des réactions', 64n],
  ['Utiliser des émojis externes', 262144n],
  ['Rendre les membres muets', 4194304n],
  ['Mettre en sourdine des membres', 8388608n],
  ['Déplacer des membres', 16777216n],
];

async function fetchServerInfo(guildId: string): Promise<ServerInfo | null> {
  try {
    const widgetResponse = await fetch(
      `https://discord.com/api/guilds/${guildId}/widget.json`,
    );
    if (!widgetResponse.ok) {
      throw new Error('Widget désactivé.');
    }
    const widgetData = await widgetResponse.json();

    const name: string = widgetData.name || 'Serveur inconnu';
    const members: string =
      typeof widgetData.presence_count === 'number'
        ? `${widgetData.presence_count} membres en ligne`
        : 'Nombre de membres inconnu';
    const inviteUrl: string = widgetData.instant_invite || '#';

    let iconUrl = DEFAULT_ICON_URL;
    let badge: ServerBadge = null;

    const inviteCode: string | null = widgetData.instant_invite
      ? widgetData.instant_invite.split('/').pop() || null
      : null;

    if (inviteCode) {
      const inviteResponse = await fetch(
        `https://discord.com/api/invites/${inviteCode}?with_counts=true&with_expiration=true`,
      );
      if (inviteResponse.ok) {
        const inviteData = await inviteResponse.json();
        const server = inviteData.guild;
        if (server?.icon) {
          iconUrl = `https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png`;
        }
        if (Array.isArray(server?.features)) {
          if (server.features.includes('PARTNERED')) {
            badge = 'partner';
          } else if (server.features.includes('VERIFIED')) {
            badge = 'verified';
          }
        }
      }
    }

    return {name, members, inviteUrl, iconUrl, badge};
  } catch (error) {
    // Discord widget may be disabled or network may be unreachable.
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  }
}

function computePermissionWarning(
  permissionsParam: string,
): PermissionWarning | null {
  let currentPermissions: bigint;
  try {
    currentPermissions = BigInt(permissionsParam);
  } catch {
    return null;
  }

  const hasAdminPermission =
    (currentPermissions & ADMIN_PERMISSION) === ADMIN_PERMISSION;
  const missingPermissions = PERMISSION_MESSAGES.filter(
    ([, value]) =>
      (REQUIRED_PERMISSIONS & value) === value &&
      (currentPermissions & value) !== value,
  ).map(([name]) => name);

  if (hasAdminPermission || missingPermissions.length === 0) {
    return null;
  }

  if (
    missingPermissions.length === 1 &&
    missingPermissions[0] === 'Administrateur'
  ) {
    return {
      tone: 'admin',
      message:
        '⚠️ Toutes les permissions spécifiques sont accordées, mais sans la permission Administrateur, le bot pourrait ne pas accéder à tous les salons.',
      missing: [],
    };
  }

  return {
    tone: 'missing',
    message:
      "⚠️ Afin d'assurer le bon fonctionnement du bot, nous vous recommandons d'ajouter les permissions suivantes :",
    missing: missingPermissions,
  };
}

export default function ThankYou(): ReactNode {
  const [serverInfo, setServerInfo] = useState<ServerInfo | null>(null);
  const [permissionWarning, setPermissionWarning] =
    useState<PermissionWarning | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);

    const guildId = urlParams.get('guild_id');
    let cancelled = false;
    if (guildId) {
      fetchServerInfo(guildId).then((info) => {
        if (!cancelled && info) {
          setServerInfo(info);
        }
      });
    }

    const permissionsParam = urlParams.get('permissions');
    if (permissionsParam) {
      setPermissionWarning(computePermissionWarning(permissionsParam));
    }

    // Redirection auto vers l'invite Discord après 60s, comme la page Webflow.
    const redirectTimer = window.setTimeout(() => {
      window.location.href = 'https://discord.com/invite/HfMYDHbgqc';
    }, 60000);

    return () => {
      cancelled = true;
      window.clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Merci | RaidProtect</title>
        <meta
          name="description"
          content="Merci d'avoir invité RaidProtect ! Pour bien débuter, nous vous recommandons de consulter notre documentation et de rejoindre notre serveur Discord."
        />
      </Head>
      <main className={styles.page}>
        <div className={styles.card}>
          <Link to="/" className={styles.logoWrap}>
            <img
              src="/img/landing/logoRaidProtect.svg"
              alt="RaidProtect title logo"
              width={528}
              height={70}
              loading="eager"
              fetchPriority="high"
              className={styles.logo}
            />
          </Link>

          <p className={styles.title}>Merci d'avoir invité RaidProtect !</p>

          {serverInfo && (
            <div className={styles.centerServer}>
              <a
                href={serverInfo.inviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.clientServer}>
                <div className={styles.avatarInfo}>
                  <img
                    src={serverInfo.iconUrl}
                    alt="Discord server icon"
                    loading="lazy"
                    className={styles.avatar}
                  />
                  <div className={styles.serverInfos}>
                    <div className={styles.serverNameRow}>
                      <div className={styles.serverName}>{serverInfo.name}</div>
                      {serverInfo.badge && (
                        <img
                          src={BADGE_SRC[serverInfo.badge]}
                          alt="Discord server badge"
                          loading="lazy"
                          width={20}
                          height={20}
                          className={styles.serverBadge}
                        />
                      )}
                    </div>
                    <div className={styles.serverMembers}>
                      {serverInfo.members}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          )}

          {permissionWarning && (
            <div
              className={`${styles.permissionWarning} ${
                permissionWarning.tone === 'admin'
                  ? styles.adminWarning
                  : styles.missingPermissions
              }`}>
              <strong>{permissionWarning.message}</strong>
              {permissionWarning.missing.length > 0 && (
                <ul className={styles.permissionList}>
                  {permissionWarning.missing.map((perm) => (
                    <li key={perm}>
                      <code>{perm}</code>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <p className={styles.description}>
            Pour bien débuter, nous vous recommandons de consulter notre
            documentation et de rejoindre notre serveur.
          </p>

          <div className={styles.buttonRow}>
            <a
              href="https://discord.com/invite/zcC8th6r8N"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}>
              Rejoindre notre serveur Discord
            </a>
            <Link to="/docs" className={styles.btnSecondary}>
              Consulter la documentation
            </Link>
          </div>

          <div className={styles.footerThank}>
            <div className={styles.langDropdown}>
              <div className={styles.langTrigger}>
                <span className={styles.iconLanguage} aria-hidden="true">
                  <svg
                    viewBox="0 0 20 20"
                    width="20"
                    height="20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.7247 11.5584L8.60801 9.46669L8.63301 9.44169C10.083 7.82502 11.1163 5.96669 11.7247 4.00002H14.1663V2.33335H8.33301V0.666687H6.66634V2.33335H0.833008V3.99169H10.1413C9.58301 5.60002 8.69967 7.12502 7.49967 8.45835C6.72467 7.60002 6.08301 6.65835 5.57467 5.66669H3.90801C4.51634 7.02502 5.34967 8.30835 6.39134 9.46669L2.14967 13.65L3.33301 14.8334L7.49967 10.6667L10.0913 13.2584L10.7247 11.5584ZM15.4163 7.33335H13.7497L9.99967 17.3334H11.6663L12.5997 14.8334H16.558L17.4997 17.3334H19.1663L15.4163 7.33335ZM13.233 13.1667L14.583 9.55835L15.933 13.1667H13.233Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className={styles.currentLanguage}>Français</span>
              </div>
              <nav className={styles.langDropdownList}>
                <Link
                  to="/thank-you"
                  className={`${styles.langDropdownItem} ${styles.langDropdownItemCurrent}`}>
                  Français
                </Link>
                <Link to="/en/thank-you" className={styles.langDropdownItem}>
                  English
                </Link>
                <Link to="/de/thank-you" className={styles.langDropdownItem}>
                  Deutsch
                </Link>
                <Link to="/es/thank-you" className={styles.langDropdownItem}>
                  Español
                </Link>
                <Link to="/pt/thank-you" className={styles.langDropdownItem}>
                  Português
                </Link>
              </nav>
            </div>

            <div className={styles.socialWrap}>
              <a
                href="https://discord.com/invite/raidprotect"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Discord">
                <img
                  src="/img/landing/iconDiscord.svg"
                  alt=""
                  width={18}
                  height={18}
                  loading="eager"
                  className={styles.socialIcon}
                />
              </a>
              <a
                href="https://x.com/raidprotect"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="X">
                <img
                  src="/img/landing/iconX.svg"
                  alt=""
                  width={18}
                  height={18}
                  loading="eager"
                  className={styles.socialIcon}
                />
              </a>
              <a
                href="https://www.youtube.com/@RaidProtect"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="YouTube">
                <img
                  src="/img/landing/iconYouTube.svg"
                  alt=""
                  width={18}
                  height={18}
                  loading="lazy"
                  className={styles.socialIcon}
                />
              </a>
              <a
                href="https://github.com/raidprotect"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub">
                <img
                  src="/img/landing/iconGitHub.svg"
                  alt=""
                  width={18}
                  height={18}
                  loading="eager"
                  className={styles.socialIcon}
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.decoration} aria-hidden="true" />
      </main>
    </>
  );
}
