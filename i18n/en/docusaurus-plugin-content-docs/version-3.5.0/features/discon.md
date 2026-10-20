---
title: DISCON
description: "RaidProtect's DISCON sets your Discord server's danger level in one click: 5 levels that tighten protections during a raid."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

**DISCON** is your server's danger level, modeled on DEFCON. During a [raid](/en/learn/discord-raid), your team no longer has to open `/settings` to change Discord's verification, enable the captcha and close DMs one by one: one click on the DISCON panel, and we apply all the protections of the chosen level at once. A second click, and we undo what we had enabled.

## ❓ How does it work? {#working}

- **Five levels**: from level 5 (calm) to level 1 (catastrophe). The lower the level, the stricter the protection.
- **A panel for the team**: a message posted in a staff-only channel, with one button per level. One click is enough to change level.
- **Effects calculated for your server**: what a level does depends on your configuration (captcha configured or not, Community mode, Auto RaidMode action). The scale shown in the configuration and on the panel describes exactly what will happen on your server.
- **A clean return**: when going back down, we only turn off what DISCON itself enabled. A captcha, a DM Lock or a raid mode that you enabled by hand stay in place.
- **A manual change**: the level never changes by itself, your team decides.

:::info Experiment: Shield Update
DISCON is part of the **Shield Update**, planned for version 3.6.0. Until its release, it is an experiment, in public beta for [Premium](/en/premium) servers. The [status voice channel](#voice) requires Premium.
:::

## 🚦 The five levels {#levels}

| Level | Name | What we apply |
|---|---|---|
| 🔵 **DISCON 5** | All is well | Medium Discord verification, nothing else. This is the default level. |
| 🟢 **DISCON 4** | Vigilance | [Captcha](./captcha.md) enabled if configured (channel and role). Without a captcha, high Discord verification instead. |
| 🟡 **DISCON 3** | Alert | Highest Discord verification, captcha enabled if configured, [DM Lock](./dm-lock.mdx). The captcha applies to **all** newcomers. |
| 🔴 **DISCON 2** | Critical | Everything from level 3, plus the **frozen captcha**: no one gets in. Without a captcha, we enable [raid mode](./raid-mode.md) instead. |
| ⚪ **DISCON 1** | Catastrophe | Everything from level 2, plus the **lockdown**: @everyone can no longer write, react, speak in voice or use commands. |

### Discord verification {#verification}

Each level sets your server's Discord verification level: medium at levels 5 and 4 (high at level 4 if the captcha is not configured), highest from level 3 to level 1.

### Entry captcha and frozen captcha {#captcha}

- **Level 4**: we enable the captcha if it is configured, even if you had disabled it, without touching its channel or role. It then follows your [trigger](./captcha.md#trigger) setting: on **Automatic**, it still applies to no one outside a raid.
- **Level 3**: the captcha applies to all newcomers, whatever its trigger (see [priority over triggers](#priority)).
- **Levels 2 and 1**: we switch the captcha to **Panel** mode and **freeze** it. Newcomers receive the verification role and wait behind the door: they cannot solve the challenge while the level holds. Once the level goes back up, they pass the captcha normally, without having to join again. When going back down, we give the captcha back the display mode it had before.

### DM Lock {#dm-lock}

From level 3, we enable the [DM Lock](./dm-lock.mdx): DMs are how scams get through when the server closes. It requires [Community mode](../guides/community.md) and the "**Manage Server**" permission for RaidProtect. Without these prerequisites, the level still applies and a warning tells you DM blocking could not be enabled.

### Level 1 lockdown {#lockdown}

At level 1, we remove the speaking permissions from the **@everyone** role: send messages (including in threads), add reactions, create threads, send voice messages, attach files, speak in voice and use application commands. They are restored exactly as they were when going back down.

## 🧩 Prerequisites for levels 2 and 1 {#requirements}

For levels 2 and 1 to really hold newcomers at the door, one of these two conditions must be met:

- **A configured captcha** (verification channel and role): this is the recommended solution. The frozen captcha holds everyone, then lets legitimate members in once calm returns. [Configure the captcha](./captcha.md#config).
- **Otherwise, the Auto RaidMode action set to "Kick everyone arriving"**: without a captcha, we enable raid mode, and its action decides the fate of newcomers. With the "**Lock invites**" action (default setting), the raid mode opened by DISCON kicks no one. Set it in the [Auto RaidMode configuration](./raid-mode.md#config).

The level 1 lockdown also requires that RaidProtect can edit the @everyone role ("**Manage Roles**" permission). If it cannot, a warning tells you.

## 🔓 What level 1 does not lock {#lockdown-leaks}

The lockdown only affects the **@everyone** role. A member therefore keeps the ability to speak if another source gives it to them:

- **A role obtained without a moderator** that itself carries these permissions: roles from Discord's Onboarding Process questions, RaidProtect's [auto roles](./onboarding.md#autorole).
- **A channel override** set for one of these roles.
- **An @everyone override set on a channel** (for example "Send Messages" allowed in `#general`).

The DISCON configuration lists these accesses for you in an orange box. To neutralize them, remove these permissions from the roles concerned and leave them to @everyone at the server level: the server permission is enough, the channel override becomes unnecessary.

:::tip
Your team's roles can keep their own channel overrides: that is what allows them to keep moderating during the lockdown.
:::

## ⚖️ Priority over automatic triggers {#priority}

The [captcha](./captcha.md#trigger) has a trigger setting (Automatic, Smart, Always). From **level 3**, DISCON takes precedence over this setting: the captcha applies to **all** newcomers, with no case-by-case evaluation. DISCON is a decision by your team, an automatic trigger does not argue with it.

For this, the captcha must be [configured](./captcha.md#config), with its channel and role. If it is simply disabled, we enable it for the duration of the alert. If it has never been configured, DISCON cannot enforce it: Discord verification is strengthened and, at levels 2 and 1, [raid mode](./raid-mode.md) takes over.

## 🛠️ DISCON configuration {#config}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Protection**" tab.
3. Click "**Configure**" next to "**DISCON**".
4. Choose the panel channel in the selector, or click "**Create panel channel**".
5. Optionally ([Premium](/en/premium)), choose a status voice channel, or click "**Create status channel**".

Below the configuration, you will find the current level, the five level buttons and the **level scale**, which describes what each level will do on your server.

<Settings start="discon" />

### Panel channel {#panel-channel}

The panel buttons require no permission: **access to the channel acts as the control**. So choose a channel reserved for your team.

- A channel visible to the whole server is refused: any member could change the level there.
- "**Create panel channel**" creates a `#discon` channel invisible to @everyone. Then open it to your team's roles.

### Status voice channel <span className="badge-premium">Premium</span> {#voice}

A voice channel whose name shows the current level, visible at a glance in the channel list: `🔵 DISCON 5`, `🟢 DISCON 4`, `🟡 DISCON 3`, `🔴 DISCON 2`, `⚪ DISCON 1`. No one can connect to it. "**Create status channel**" creates it next to the panel channel, with the same permissions.

:::info
Discord limits renaming a channel to about 2 times every 10 minutes. If you change level faster, the voice channel's name may lag behind: the panel remains the reference.
:::

## 📟 The DISCON panel {#panel}

The panel is a message posted in the chosen channel. It shows the current level, the legend of the five levels with their effects on your server, and five level buttons. Its color follows the current level.

To change level, simply click the corresponding button. If the level can only be partly applied (captcha not configured, Community mode missing, missing permission), an ephemeral warning tells you.

The DISCON panel is also the [reserved spot for `/display staff`](./display.mdx#staff): you can add blocks to it from `/display staff`, but its channel is only set from the DISCON configuration.

## 📑 DISCON logs {#logs}

Each level change is recorded in your [server logs](./moderation.mdx#logs), with the member who made it:

- "The **danger level** went up from 5 to 3 by @Moderator."
- "The **danger level** went down from 3 to 5 by @Moderator."

## Frequently asked questions {#faq}

### Who can change the DISCON level?

Anyone who sees the panel channel. The buttons check no permission: the channel, reserved for the team, acts as the filter. Administrators can also change level from `/settings`.

### Does the DISCON level change automatically during a raid?

No. DISCON is always driven by your team. [Auto RaidMode](./raid-mode.md) remains the automatic protection against waves of arrivals.

### What happens when we go back down to level 5?

We put medium verification back and undo what DISCON had enabled: captcha, captcha mode, DM Lock, raid mode and lockdown. What you had enabled yourself before going up stays in place.

### Does level 2 work without a captcha?

Yes, but it then enables raid mode, which only kicks newcomers if the Auto RaidMode action is "Kick everyone arriving". For level 2 to hold everyone, configure the captcha.

### Why can some members still write at level 1?

The lockdown only removes speaking from the @everyone role. An arrival role or a channel override that gives the permission to write grants it anyway. The DISCON configuration lists these accesses so you can remove them.

### Is the status voice channel required?

No, it is optional and reserved for Premium. The panel is enough to control and display the level.
