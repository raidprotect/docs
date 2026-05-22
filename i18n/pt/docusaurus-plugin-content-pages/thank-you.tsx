import React, {type ReactNode, useEffect, useState} from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/thank-you.module.css';

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

// Discord-style permission names (Portuguese).
const PERMISSION_MESSAGES: Array<[string, bigint]> = [
  ['Administrador', ADMIN_PERMISSION],
  ['Gerir servidor', 32n],
  ['Gerir cargos', 268435456n],
  ['Gerir canais', 16n],
  ['Expulsar membros', 2n],
  ['Banir membros', 4n],
  ['Gerir alcunhas', 134217728n],
  ['Gerir webhooks', 536870912n],
  ['Ver registo de auditoria', 524288n],
  ['Ver canais', 1024n],
  ['Moderar membros', 1099511627776n],
  ['Enviar mensagens', 2048n],
  ['Gerir mensagens', 8192n],
  ['Gerir tópicos', 17179869184n],
  ['Incorporar ligações', 16384n],
  ['Anexar ficheiros', 32768n],
  ['Ler histórico de mensagens', 65536n],
  ['Adicionar reações', 64n],
  ['Usar emojis externos', 262144n],
  ['Silenciar membros', 4194304n],
  ['Ensurdecer membros', 8388608n],
  ['Mover membros', 16777216n],
];

async function fetchServerInfo(guildId: string): Promise<ServerInfo | null> {
  try {
    const widgetResponse = await fetch(
      `https://discord.com/api/guilds/${guildId}/widget.json`,
    );
    if (!widgetResponse.ok) {
      throw new Error('Widget desativado.');
    }
    const widgetData = await widgetResponse.json();

    const name: string = widgetData.name || 'Servidor desconhecido';
    const members: string =
      typeof widgetData.presence_count === 'number'
        ? `${widgetData.presence_count} membros online`
        : 'Número de membros desconhecido';
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
    missingPermissions[0] === 'Administrador'
  ) {
    return {
      tone: 'admin',
      message:
        '⚠️ Todas as permissões específicas estão concedidas, mas sem a permissão de Administrador o bot pode não conseguir aceder a todos os canais.',
      missing: [],
    };
  }

  return {
    tone: 'missing',
    message:
      '⚠️ Para garantir o bom funcionamento do bot, recomendamos adicionar as seguintes permissões:',
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

    // Auto-redirect to Discord invite after 60s, matching the Webflow page.
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
        <title>Obrigado | RaidProtect</title>
        <meta
          name="description"
          content="Obrigado por convidar o RaidProtect! Para começar, recomendamos consultar a nossa documentação e entrar no nosso servidor Discord."
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

          <p className={styles.title}>Obrigado por convidar o RaidProtect!</p>

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
            Para começar com o pé direito, recomendamos consultar a nossa
            documentação e entrar no nosso servidor.
          </p>

          <div className={styles.buttonRow}>
            <a
              href="https://discord.com/invite/zcC8th6r8N"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}>
              Entrar no nosso servidor Discord
            </a>
            <Link to="/docs" className={styles.btnSecondary}>
              Consultar a documentação
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
                <span className={styles.currentLanguage}>Português</span>
              </div>
              <nav className={styles.langDropdownList}>
                <a href="/thank-you" className={styles.langDropdownItem}>
                  Français
                </a>
                <a href="/en/thank-you" className={styles.langDropdownItem}>
                  English
                </a>
                <a href="/de/thank-you" className={styles.langDropdownItem}>
                  Deutsch
                </a>
                <a href="/es/thank-you" className={styles.langDropdownItem}>
                  Español
                </a>
                <a
                  href="/pt/thank-you"
                  className={`${styles.langDropdownItem} ${styles.langDropdownItemCurrent}`}>
                  Português
                </a>
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
