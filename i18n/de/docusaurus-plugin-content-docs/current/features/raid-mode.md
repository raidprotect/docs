---
title: Anti-raid
---

## Raid Mode

Raid mode is an emergency feature designed to instantly block all new users trying to join your server, surpassing Discord’s native limitation which only allows this block for 24 hours via the "Pause Invites" security action.

### ❓ How Raid Mode Works {#working}

RaidProtect automatically enables raid mode if a large number of users join your server in a short time. By default, raid mode activates if more than 10 users join your server in less than 10 seconds. When raid mode is enabled, no users can join the server. They are blocked at the invite level.

:::warning
Discord’s Community features are essential for Raid Mode to work properly. [Follow our guide to ensure Community is enabled on your server.](../guides/community.md)
:::

#### Enabling {#enable}

- To manually enable this mode, a user with kick permissions must run the `/raidmode` command.
- A message will automatically be posted in the log channel to signal activation.

#### Disabling {#disable}

Raid mode does not disable itself automatically. Remember to turn it off with the same command once the threat has passed. 😇

:::info
The `raidmode` command is also [available with prefix](../guides/prefix.md).
:::

### 🚨 Auto Raid Mode Configuration {#config}

If your server often gets many new members at once, it’s wise to adjust this threshold to avoid false positives.

![Screenshot of auto raid mode settings](../assets/rp-settings-raid-mode.webp)

:::note
We recommend setting a value between 10 and 20 members in 10 seconds for optimal system performance.
:::

1. Run the [ `/settings` command](../setup.md#settings).
2. Click the “**Auto RaidMode**” button.
3. Select the number of members allowed to join within 10 seconds.

You can leave it at the default value (10) or adjust it to your desired value by clicking the “**Custom Value**” button.

:::warning
If raid mode is automatically triggered, don’t forget to disable it once the threat has passed. Remember, it does not turn off on its own. 😖
:::


## Minimum Account Age {#minage}

To improve security, you can require a minimum Discord account age for new members.

1. Run the [ `/settings` command](../setup.md#settings).
2. Click the “**Minimum Age**” button.
3. Select the desired value from the dropdown menu or choose a custom value in date format (m/h/d/y).

### 🎂 Minimum Account Age Bypass {#bypass-minage}

Use the command: ```/bypass minage [user]```

Replace `[user]` with the desired ID; they will have 10 minutes to join the server without being kicked for not meeting the age requirement.