---
title: Using a Prefix
---

## Prefix disabled (default) {#disabled}

By default, RaidProtect only uses Slash commands (`/`) to interact with the bot. This ensures intuitive and consistent usage with Discord standards.

## Prefix enabled (optional) {#activated}

If you prefer to use certain commands with a custom prefix, you can enable this option. The default prefix when enabled is `?`, but it can be changed to suit your needs. Once enabled, the following commands can be used with the configured prefix:
- [`?raidmode`](../features/raid-mode.md)
- [`?ban`](../features/moderation.mdx#ban)
- [`?tempban`](../features/moderation.mdx#tempban)
- [`?unban`](../features/moderation.mdx#unban)
- [`?kick`](../features/moderation.mdx#kick)
- [`?mute` | `?timeout`](../features/moderation.mdx#timeout)
- [`?unmute` | `?untimeout`](../features/moderation.mdx#untimeout)
- [`?jail`](../features/moderation.mdx#jail)
- [`?tempjail`](../features/moderation.mdx#tempjail)
- [`?unjail`](../features/moderation.mdx#unjail)
- [`?warn`](../features/moderation.mdx#warn)
- [`?slowmode`](../features/moderation.mdx#slowmode)
- [`?lock`](../features/channel-lock.md#lock)
- [`?unlock`](../features/channel-lock.md#unlock)
- [`?userinfo` | `?ui`](../features/utilities#userinfo)
- [`?clear`](../features/moderation#clear)

## How to enable or disable the prefix {#config}

1. Open the settings menu by typing [`/settings`](../setup.md#settings).
2. Navigate to the "**Prefix**" command option.
3. Enable or disable the prefix according to your preferences.
If enabled, customize the prefix by entering the desired character or string.

![Prefix setting screenshot](../assets/rp-settings-prefix.webp)

:::note
Slash commands (`/`) remain available even if the prefix is enabled.
It is recommended to avoid prefixes already used by other bots to prevent command conflicts.
:::
