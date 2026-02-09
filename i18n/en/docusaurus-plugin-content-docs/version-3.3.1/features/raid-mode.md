---
title: Anti-raid
---

## Raid mode {#raid-mode}

Raid mode is an emergency feature designed to instantly block all new users attempting to join your server, with a maximum duration of 24 hours. To permanently block new members, use the [`/joinlock` command](./join-lock.mdx).

### ❓ How raid mode works {#working}

RaidProtect automatically activates raid mode if a large number of users join your server in a short period of time. By default, raid mode activates if more than 10 users join your server in less than 10 seconds. When raid mode is activated, no user can join the server. They are blocked at the invitation level.

:::warning
Discord's community features are essential for raid mode to work properly. [Follow our guide to verify that community is enabled on your server.](../guides/community.md)
:::

#### Activation {#enable}

- To manually activate this mode, a user with kick permissions must execute the `/raidmode` command.
- A message will be automatically posted in the logs channel to signal the activation.

#### Deactivation {#disable}

Raid mode does not deactivate automatically. Remember to stop it with the same command once the threat has passed. 😇

:::info
The `raidmode` command is [usable via prefix](../guides/prefix.md).
:::

### 🚨 Automatic raid mode configuration {#config}

If your server often welcomes many new members simultaneously, it is wise to modify this threshold to avoid false positives.

![Automatic raid mode screenshot](../assets/rp-settings-raid-mode.webp)

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

## Minimum Age {#minage}

To strengthen security, you can require a minimum age for Discord accounts of new members.

1. Run the [`/settings` command](../setup.md#settings).
2. Click the "**Minimum Age**" button.
3. Select the desired value from the selection menu or choose a custom value expressed in date format (m/h/d/y).

### 🎂 Minimum account age bypass {#bypass-minage}

Use the command: ```/bypass minage [user]```

Replace `[user]` with the desired identifier; they will have 10 minutes to join the server without being kicked due to the age requirement. You can also use the command without specifying a user to see the current list of bypassed users.
