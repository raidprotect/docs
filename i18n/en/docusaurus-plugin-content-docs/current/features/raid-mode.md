---
title: Anti-raid
description: "RaidProtect's raid mode instantly blocks mass joins on your Discord server, triggered automatically as soon as a suspicious wave is detected."
---

import { RaidModeSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

import RaidModeMockup from '@site/src/components/DiscordMessage/mockups/raid-mode';

<RaidModeMockup />

## Raid mode {#raid-mode}

Raid mode is an emergency feature designed to instantly block all new users attempting to join your server, with a maximum duration of 24 hours. To permanently block new members, use the [`/joinlock` command](./join-lock.mdx).

### ❓ How raid mode works {#working}

RaidProtect automatically activates raid mode if a large number of users join your server in a short period of time. By default, raid mode activates if more than 10 users join your server in less than 10 seconds. When raid mode is enabled, no user can join the server. They are blocked at the invite level.

:::warning
Discord's community features are essential for raid mode to work properly. [Follow our guide to verify that community is enabled on your server.](../guides/community.md)
:::

#### Activation {#enable}

- To manually activate this mode, a user with kick permissions must run the `/raidmode` command.
- A message will be automatically posted in the logs channel to signal the activation.

#### Deactivation {#disable}

Raid mode does not deactivate automatically. Remember to stop it with the same command once the threat has passed. 😇

:::info
The `raidmode` command is [usable via prefix](../guides/prefix.md).
:::

### 🚨 Automatic RaidMode configuration {#config}

If your server often welcomes many new members simultaneously, it is wise to adjust this threshold to avoid false positives.

<RaidModeSettingsMockup />

#### Member threshold {#threshold}

1. Run the [`/settings` command](../setup.md#settings).
2. Click the "**Auto RaidMode**" button.
3. Select "**Number of members**".
4. Choose the number of members that can join within 10 seconds.

You can leave it at the default value (10) or adjust it to the desired value by clicking the "**Custom value**" button.

:::note
We recommend entering a value between 10 and 20 members per 10 seconds for good system effectiveness.
:::

#### Raid mode duration {#duration}

1. Run the [`/settings` command](../setup.md#settings).
2. Click the "**Auto RaidMode**" button.
3. Select "**Duration**".
4. Choose the raid mode duration (24h maximum).

You can leave it at the default value (5 minutes) or adjust it to the desired value by clicking the "**Custom value**" button.

#### Close DMs automatically {#close-dm}

You can configure the **automatic RaidMode** to **automatically close the server's DMs** as soon as it activates. This adds an extra layer of protection during a raid: new accounts can no longer contact your members privately to phish or scam them.

1. Run the [`/settings` command](../setup.md#settings).
2. Click the "**Auto RaidMode**" button.
3. Enable the "**Close DMs**" option.

When the automatic RaidMode is disabled (manually or automatically after the configured duration), the DMs return to their previous configuration.

:::info
This option complements the [permanent DM closure](./dm-lock.mdx): if you enable it without the permanent closure, DMs are only closed during an active raid.
:::

#### Kick mode (Premium) {#kick-mode}

By default, raid mode blocks newcomers at the invite level. With **kick mode**, users who join during a raid are kicked by RaidProtect instead of being blocked at the invite.

1. Run the [`/settings` command](../setup.md#settings).
2. Click the "**Auto RaidMode**" button.
3. Enable the "**Kick mode**" option.

:::info
This option is reserved for [**Premium**](/en/premium) servers. It is required to use the [raid mode bypass](#bypass-raid).
:::

### 🎫 Raid mode bypass {#bypass-raid}

Expecting a legitimate member while a raid is in progress? Allow them to join despite raid mode:

Use the command: ```/bypass raid [user]```

Replace `[user]` with the desired identifier; they will have 10 minutes to join the server without being kicked by raid mode. You can also use the command without specifying a user to see the current list of bypassed users (7 users maximum at the same time).

:::warning
The raid mode bypass requires [kick mode](#kick-mode): a user blocked at the invite level cannot be bypassed.
:::

## Minimum Age {#minage}

To strengthen security, you can require a minimum age for new members' Discord accounts.

1. Run the [`/settings` command](../setup.md#settings).
2. Click the "**Minimum Age**" button.
3. Select the desired value from the selection menu or choose a custom value expressed in date format (m/h/d/y).

### 🎂 Minimum account age bypass {#bypass-minage}

Use the command: ```/bypass minage [user]```

Replace `[user]` with the desired identifier; they will have 10 minutes to join the server without being kicked due to the age requirement. You can also use the command without specifying a user to see the current list of bypassed users.
