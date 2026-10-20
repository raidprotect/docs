---
title: Enable Community
description: "Enable your server's Discord community to unlock the safety settings RaidProtect relies on: DM Lock, raid mode and more."
---

Enabling the community feature makes several advanced Discord security settings available, which some RaidProtect features need:
- the [DM Lock](../features/dm-lock.mdx);
- [raid mode](../features/raid-mode.md) and the [Join Lock](../features/join-lock.mdx), **only** with the "**Lock invites**" action during the raid (the default setting).

The [captcha](../features/captcha.md) and the other raid mode actions ("**Kick everyone arriving**", "**Send to the captcha**", "**Captcha frozen during the raid**") work without the community.

## 🚦 Prerequisites {#requirement}

- Be an administrator of the Discord server.

## 🚩 Enable community features {#steps}

1. **Open your server settings**
   - Click on the server name in the top left > "Server Settings".

2. **Go to the "Community" section**
   - In the sidebar, navigate to the **Enable Community** tab, then click **Get Started**.

:::note
If community is already enabled on your server, the section will be called **Community Overview**.
:::

3. **Follow the setup wizard**
   - Enable email verification for all members.
   - Enable the explicit content filter.
   - Set up a rules channel and an announcements channel.
   - Accept the community server usage guidelines.

4. **Complete the setup**
   - Click "Finish Setup". The "Community" badge will appear on your server once activation is finalized.

![Discord community activation screenshot](../assets/rp-enable-community.webp)

## 💡 Using the DM Lock and raid mode modules after activation {#use}

1. Run the [`/settings` command](../setup.md#settings).
2. For the [DM Lock](../features/dm-lock.mdx), open the "**Protection**" tab and click "**Edit**" next to "**DM Lock**".
3. For [raid mode](../features/raid-mode.md#config), open the "**Arrivals**" tab and click "**Configure**" next to "**Auto RaidMode**".

If a box asked you to enable the community, click "**Refresh**": it disappears once the community is enabled.
