---
title: Anti-raid
---

## Raid Mode {#raid-mode}

Raid mode is an emergency feature designed to instantly block all new users trying to join your server.

### ❓ How Raid Mode Works {#working}

RaidProtect automatically enables raid mode if a large number of users join your server in a short period of time. By default, raid mode is triggered if more than 10 users join your server in under 10 seconds. When raid mode is active, no new users can join the server. They are blocked at the invitation level.

:::warning
Discord’s community features are essential for Raid Mode to work properly. [Follow our guide to verify community activation on your server.](../guides/community.md)
:::

#### Enabling {#enable}

- To manually enable this mode, a user with kick permissions must run the `/raidmode` command.
- A message will automatically be posted in the logs channel to indicate activation.

#### Disabling {#disable}

Raid mode does not disable itself automatically. Be sure to turn it off with the same command once the threat has passed. 😇

:::info
The `raidmode` command is [usable with a prefix](../guides/prefix.md).
:::

### 🚨 Automatic Raid Mode Configuration {#config}

If your server frequently gets many new members at once, it's wise to adjust this threshold to avoid false positives.

![Screenshot of automatic raid mode settings](../assets/rp-settings-raid-mode.webp)

:::note
We recommend setting a value between 10 and 20 members in 10 seconds for best system effectiveness.
:::

1. Run the [ `/settings` command](../setup.md#settings).
2. Click the “**Auto RaidMode**” button.
3. Choose the number of members allowed to join within 10 seconds.

You can leave it at the default (10) or adjust to your desired value by clicking the “**Custom Value**” button.

:::warning
If raid mode activates automatically, remember to disable it once the threat is over. It does not turn off on its own. 😖
:::


## Required Age {#minage}

To strengthen security, you can require a minimum Discord account age for new members.

1. Run the [ `/settings` command](../setup.md#settings).
2. Click the “**Required Age**” button.
3. Select your desired value from the dropdown menu or choose a custom value expressed in date format (m/h/d/y).

### 🎂 Minimum Account Age Bypass {#bypass-minage}

Use the command: ```/bypass minage [user]```

Replace `[user]` with the desired ID. They will then have 10 minutes to join the server without being kicked for not meeting the minimum age requirement.