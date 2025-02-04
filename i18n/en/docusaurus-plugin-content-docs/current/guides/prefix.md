---
title: Using a prefix
---

## Disabled Prefix (Default) {#disabled}

By default, RaidProtect uses only Slash commands (`/`) to interact with the bot. This ensures intuitive and consistent usage with Discord standards.

## Activated Prefix (Optional) {#activated}

If you prefer to use certain commands with a custom prefix, you can enable this option. The default prefix when activated is `?`, but it can be modified to suit your needs. Once enabled, these commands can also be used with the configured prefix: 
- [`/raidmode`](../features/raid-mode.md)
- [`/ban`](../features/moderation.md#ban)
- [`/kick`](../features/moderation.md#kick)
- [`/lock`](../features/channel-lock.md#lock)
- [`/unlock`](../features/channel-lock.md#unlock)
- [`/userinfo`](../features/utilities#userinfo)

## 💬 How to Enable or Disable the Prefix {#config}

1. Open the configuration menu by typing [`/settings`](../setup.md#settings).
2. Access the "**Prefix**" option for commands.
3. Enable or disable the prefix according to your preferences.  
If enabled, customize the prefix by entering the desired character or string.

:::note
Slash commands (`/`) remain available even if the prefix is activated.  
It is recommended to avoid prefixes already used by other bots to prevent command conflicts.
:::