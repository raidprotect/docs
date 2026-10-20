---
title: Message Commands
description: "Enable RaidProtect's message commands alongside Slash commands, choose their prefix and apply Discord's permissions to them."
---

import { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

## Prefix disabled (default) {#disabled}

By default, RaidProtect only uses Slash commands (`/`). This ensures intuitive and consistent usage with Discord standards.

## Message commands (optional) {#activated}

If you prefer to type certain commands in a message, choose a prefix, for example `?`. These commands then become usable with it:

- [`?raidmode`](../features/raid-mode.md) and [`?joinlock`](../features/join-lock.mdx)
- [`?ban`](../features/moderation.mdx#ban), [`?tempban`](../features/moderation.mdx#tempban), [`?softban`](../features/moderation.mdx#softban) and [`?unban`](../features/moderation.mdx#unban)
- [`?kick`](../features/moderation.mdx#kick)
- [`?mute` | `?timeout` | `?tempmute`](../features/moderation.mdx#timeout) and [`?unmute` | `?untimeout` | `?untempmute`](../features/moderation.mdx#untimeout)
- [`?jail`](../features/moderation.mdx#jail), [`?tempjail`](../features/moderation.mdx#tempjail) and [`?unjail`](../features/moderation.mdx#unjail)
- [`?warn`](../features/moderation.mdx#warn)
- [`?slowmode` | `?slow`](../features/moderation.mdx#slowmode)
- [`?lock`](../features/channel-lock.md#lock) and [`?unlock`](../features/channel-lock.md#unlock)
- [`?clear` | `?clean`](../features/moderation.mdx#clear)
- [`?nick` | `?nickname` | `?rename` | `?setnick`](../features/moderation.mdx#nick)
- [`?userinfo` | `?ui`](../features/utilities.mdx#userinfo), [`?serverinfo` | `?ginfo`](../features/utilities.mdx#serverinfo) and [`?inviteinfo` | `?ii`](../features/utilities.mdx#inviteinfo)

## 💬 Choose the prefix {#config}

1. Run the [`/settings` command](../setup.md#settings).
2. In the "**General**" tab, click "**Edit**" next to "**Message commands**".
3. Choose a prefix from the list (`?`, `!`, `>` or `$`), or enter your own in "**Custom prefix**" (three characters at most, takes priority over the list). Choose "**Disabled**" to turn off message commands.
4. Check "**Delinvoke**" if you want RaidProtect to delete the message containing the command as soon as it has read it.

<SettingsModal name="prefix" />

:::note
Slash commands (`/`) remain available even with a prefix.
Avoid prefixes already used by other bots to prevent command conflicts.
:::

## 🔒 Apply command permissions {#permissions}

RaidProtect command permissions are set in Discord: **Server Settings → Integrations → RaidProtect**. You can allow or forbid each command there per role, member or channel. Discord only applies them to slash commands.

For them to also apply to message commands and to the sanctions offered by the "**Sanction User**" menu (right-click on a member):

1. Run the [`/settings` command](../setup.md#settings).
2. In the "**General**" tab, click "**Edit**" next to "**Permissions**".
3. Check "**Apply integration permissions**".

<SettingsModal name="permissions" />

A member allowed to use `/ban` will then be able to ban from the "**Sanction User**" menu, and a member who is forbidden `/ban` will no longer be able to use `?ban`. The option is off by default.

:::warning
Discord's **Integrations** menu is only available on the PC and Web app, not on mobile.
:::
