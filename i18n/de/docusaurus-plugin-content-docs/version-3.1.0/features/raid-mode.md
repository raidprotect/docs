---
title: Raid mode
---

Raid mode is an emergency feature designed to instantly block all new users attempting to join your server. It is radical but effective in preventing mass raids. With RaidProtect's raid mode, you have an effective shield against massive attacks on your server. 🌟

## ❓ How Raid Mode Works {#working}

RaidProtect automatically activates raid mode if a large number of users join your server in a short period. By default, raid mode activates if more than 10 users join your server in less than 10 seconds. When raid mode is activated, no users can join the server. They are blocked at the invitation level.

:::warning
Discord’s Community features are essential for Raid mode to function properly. [Follow our guide to verify that Community is enabled on your server.](../guides/community.md)
:::

### Activation {#enable}

- To manually activate this mode, a user with kick permissions must execute the command `/raidmode`.
- A message will be automatically posted in the logs channel to indicate activation.

### Deactivation {#disable}

Raid mode does not deactivate automatically. Be sure to turn it off with the same command when the threat has passed. 😇

:::info
The `raidmode` command is [usable with a prefix](../guides/prefix.md).
:::

## 🚨 Configuring Automatic Raid Mode {#config}

If your server frequently hosts many new members simultaneously, it is wise to adjust this threshold to avoid false positives.

[Screenshot of automatic raid mode](../../../../en/docusaurus-plugin-content-docs/version-3.1.0/assets/rpBeta-settings-raid-mode.webp)

:::note
We recommend entering a value between 10 and 20 members in 10 seconds for good system efficiency.
:::

1. Use the [command `/settings`](../setup.md#settings).
2. Click the “**Auto RaidMode**” button.
3. Select the number of members who can join within 10 seconds.

You can leave the default value (10) or adjust it to the desired value by clicking the “**Custom Value**” button.

:::warning
If raid mode activates automatically, remember to disable it once the threat has passed. Keep in mind, it does not turn off by itself. 😖
:::