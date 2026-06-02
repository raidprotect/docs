import React, {type ReactNode, useEffect, useState} from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
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
// Tuple: [translation id, default FR label, bitmask].
const PERMISSION_MESSAGES: Array<[string, string, bigint]> = [
  ['permission.administrator', 'Administrateur', ADMIN_PERMISSION],
  ['permission.manageServer', 'Gérer le serveur', 32n],
  ['permission.manageRoles', 'Gérer les rôles', 268435456n],
  ['permission.manageChannels', 'Gérer les salons', 16n],
  ['permission.kickMembers', 'Expulser des membres', 2n],
  ['permission.banMembers', 'Bannir des membres', 4n],
  ['permission.manageNicknames', 'Gérer les pseudos', 134217728n],
  ['permission.manageWebhooks', 'Gérer les webhooks', 536870912n],
  ['permission.viewAuditLog', 'Voir les logs du serveur', 524288n],
  ['permission.viewChannels', 'Voir les salons', 1024n],
  ['permission.moderateMembers', 'Modérer les membres', 1099511627776n],
  ['permission.sendMessages', 'Envoyer des messages', 2048n],
  ['permission.manageMessages', 'Gérer les messages', 8192n],
  ['permission.manageThreads', 'Gérer les fils', 17179869184n],
  ['permission.embedLinks', 'Intégrer des liens', 16384n],
  ['permission.attachFiles', 'Joindre des fichiers', 32768n],
  ['permission.readMessageHistory', 'Voir les anciens messages', 65536n],
  ['permission.addReactions', 'Ajouter des réactions', 64n],
  ['permission.useExternalEmojis', 'Utiliser des émojis externes', 262144n],
  ['permission.muteMembers', 'Rendre les membres muets', 4194304n],
  ['permission.deafenMembers', 'Mettre en sourdine des membres', 8388608n],
  ['permission.moveMembers', 'Déplacer des membres', 16777216n],
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

    const unknownServerLabel = translate({
      id: 'thankYou.server.unknown',
      message: 'Serveur inconnu',
      description: 'Fallback name shown when the Discord widget returns no server name',
    });
    const memberCountUnknownLabel = translate({
      id: 'thankYou.server.memberCountUnknown',
      message: 'Nombre de membres inconnu',
      description: 'Fallback shown when the Discord widget returns no member count',
    });

    const name: string = widgetData.name || unknownServerLabel;
    const members: string =
      typeof widgetData.presence_count === 'number'
        ? translate(
            {
              id: 'thankYou.server.membersOnline',
              message: '{count} membres en ligne',
              description: 'Number of members currently online on the invited server',
            },
            {count: widgetData.presence_count},
          )
        : memberCountUnknownLabel;
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
  const localized = PERMISSION_MESSAGES.map(
    ([id, defaultMessage, value]) =>
      [
        id,
        translate({id, message: defaultMessage}),
        value,
      ] as [string, string, bigint],
  );
  const missingEntries = localized.filter(
    ([, , value]) =>
      (REQUIRED_PERMISSIONS & value) === value &&
      (currentPermissions & value) !== value,
  );
  const missingPermissions = missingEntries.map(([, name]) => name);

  if (hasAdminPermission || missingPermissions.length === 0) {
    return null;
  }

  if (
    missingEntries.length === 1 &&
    missingEntries[0][0] === 'permission.administrator'
  ) {
    return {
      tone: 'admin',
      message: translate({
        id: 'thankYou.permissions.adminOnlyWarning',
        message:
          '⚠️ Toutes les permissions spécifiques sont accordées, mais sans la permission Administrateur, le bot pourrait ne pas accéder à tous les salons.',
        description:
          'Warning shown when the only missing permission is Administrator',
      }),
      missing: [],
    };
  }

  return {
    tone: 'missing',
    message: translate({
      id: 'thankYou.permissions.missingWarning',
      message:
        "⚠️ Afin d'assurer le bon fonctionnement du bot, nous vous recommandons d'ajouter les permissions suivantes :",
      description: 'Warning shown when some required permissions are missing',
    }),
    missing: missingPermissions,
  };
}

const LANGUAGES: Array<{locale: string; label: string; href: string}> = [
  {locale: 'fr', label: 'Français', href: '/thank-you'},
  {locale: 'en', label: 'English', href: '/en/thank-you'},
  {locale: 'de', label: 'Deutsch', href: '/de/thank-you'},
  {locale: 'es', label: 'Español', href: '/es/thank-you'},
  {locale: 'pt', label: 'Português', href: '/pt/thank-you'},
];

export default function ThankYou(): ReactNode {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const currentLanguage =
    LANGUAGES.find((lang) => lang.locale === currentLocale) ?? LANGUAGES[0];
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

  const pageTitle = translate({
    id: 'thankYou.head.title',
    message: 'Merci | RaidProtect',
    description: 'Browser tab title for the thank-you page',
  });
  const pageDescription = translate({
    id: 'thankYou.head.description',
    message:
      "Merci d'avoir invité RaidProtect ! Pour bien débuter, nous vous recommandons de consulter notre documentation et de rejoindre notre serveur Discord.",
    description: 'Meta description for the thank-you page',
  });
  const discordAriaLabel = translate({
    id: 'thankYou.social.discord.ariaLabel',
    message: 'Discord',
    description: 'ARIA label for the Discord social link',
  });
  const xAriaLabel = translate({
    id: 'thankYou.social.x.ariaLabel',
    message: 'X',
    description: 'ARIA label for the X (Twitter) social link',
  });
  const youtubeAriaLabel = translate({
    id: 'thankYou.social.youtube.ariaLabel',
    message: 'YouTube',
    description: 'ARIA label for the YouTube social link',
  });
  const githubAriaLabel = translate({
    id: 'thankYou.social.github.ariaLabel',
    message: 'GitHub',
    description: 'ARIA label for the GitHub social link',
  });

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="noindex, nofollow" />
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

          <p className={styles.title}>
            <Translate
              id="thankYou.title"
              description="Main heading of the thank-you page">
              Merci d'avoir invité RaidProtect !
            </Translate>
          </p>

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
            <Translate
              id="thankYou.description"
              description="Body description of the thank-you page">
              Pour bien débuter, nous vous recommandons de consulter notre
              documentation et de rejoindre notre serveur.
            </Translate>
          </p>

          <div className={styles.buttonRow}>
            <a
              href="https://discord.com/invite/zcC8th6r8N"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}>
              <Translate
                id="thankYou.cta.joinDiscord"
                description="Primary CTA on the thank-you page: join the Discord server">
                Rejoindre notre serveur Discord
              </Translate>
            </a>
            <Link to="/docs" className={styles.btnSecondary}>
              <Translate
                id="thankYou.cta.viewDocs"
                description="Secondary CTA on the thank-you page: open the documentation">
                Consulter la documentation
              </Translate>
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
                <span className={styles.currentLanguage}>
                  {currentLanguage.label}
                </span>
              </div>
              <nav className={styles.langDropdownList}>
                {LANGUAGES.map((lang) => (
                  <a
                    key={lang.locale}
                    href={lang.href}
                    className={
                      lang.locale === currentLanguage.locale
                        ? `${styles.langDropdownItem} ${styles.langDropdownItemCurrent}`
                        : styles.langDropdownItem
                    }>
                    {lang.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className={styles.socialWrap}>
              <a
                href="https://discord.com/invite/raidprotect"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={discordAriaLabel}>
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
                aria-label={xAriaLabel}>
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
                aria-label={youtubeAriaLabel}>
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
                aria-label={githubAriaLabel}>
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
