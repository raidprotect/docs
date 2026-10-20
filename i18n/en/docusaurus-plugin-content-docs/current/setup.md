---
title: Installation
description: "Install and set up RaidProtect on your Discord server in minutes, with the /setup wizard then the /settings dashboard."
---

import Head from '@docusaurus/Head';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

<Head>
  <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"Set up RaidProtect on a Discord server","description":"Install and configure the RaidProtect protection bot with the /setup and /settings commands.","step":[{"@type":"HowToStep","position":1,"name":"Run /setup","text":"Type /setup in a channel where the bot is active to open the setup wizard."},{"@type":"HowToStep","position":2,"name":"Choose the modules","text":"Select the features to install in the \"Choose the modules to install\" menu, then click \"Enable\"."},{"@type":"HowToStep","position":3,"name":"Confirm the summary","text":"The bot displays a summary of what it is going to create and enable. Click \"Enable\" again to apply it."},{"@type":"HowToStep","position":4,"name":"Adjust with /settings","text":"Use /settings at any time: the dashboard groups the settings into five tabs, General, Arrivals, Protection, Moderation and Utilities."}]}).replace(/</g, '\\u003c')}</script>
</Head>

RaidProtect is configured with two commands: [`/setup`](#install), a wizard that installs the essential protections in one go, and [`/settings`](#settings), the dashboard where you adjust everything else at any time. This guide explains how to use them.

## Where to start {#etapes}

For a server starting from scratch, here is the recommended order:

1. **Run [`/setup`](#install)** and choose the modules to install. RaidProtect creates the logs channel and the necessary channels and roles, then applies the changes after a summary.
2. **Open the "Arrivals" tab of [`/settings`](#settings)**: set up the [captcha](./features/captcha.md), [Auto RaidMode](./features/raid-mode.md) and the [welcome of new members](./features/onboarding.md).
3. **Open the "Moderation" tab**: check the logs channel and the [sanctions](./features/sanctions.mdx) (jail and mute roles).
4. **Set up the [anti-spam](./features/anti-spam.mdx)** in the "Protection" tab: a preset is enough to get started.

:::info Discord Community
Discord's [Community mode](./guides/community.md) is only required by a few settings, such as Auto RaidMode's invite blocking and the [DM Lock](./features/dm-lock.mdx). The captcha works without it.
:::

## Guided installation {#install}

The `/setup` command is reserved for administrators. It installs the modules you choose in one go, with proven default values that you will then adjust in `/settings`.

### 🔧 Choose the modules {#recommended}

1. Run the `/setup` command.
2. In the "**Choose the modules to install**" menu, select the desired features: Message commands, Auto RaidMode, Captcha, Minimum account age, Anti-spam, Reports, Tag Role, DM Lock and HoneyPot. Modules that are already active are pre-checked.
3. Click "**Enable**".
4. The bot summarizes what it will create or reuse. Click "**Enable**" again to apply, or "**Back**" to change the selection.

<Settings start="setup" />

On confirmation, RaidProtect:

- creates the `#raidprotect-logs` channel if it does not exist, visible to administrators and to the person who added the bot;
- removes dangerous permissions from `@everyone` (Administrator, Ban, Kick, Manage Server, Channels, Roles, Messages, Webhooks and Threads, Mention @everyone, Timeout Members);
- enables each chosen module with its default values: `?` prefix, Auto RaidMode at 10 members in 10 seconds, captcha in Panel mode with the `#verification` channel and the `@Unverified` role, minimum age of 6 hours, anti-spam and reports enabled, `@Tag` role, DM Lock, the [HoneyPot](./features/honeypot.md) trap channel.

:::tip Disabling a module
Unchecking a module in `/setup` does not disable it. To turn off a feature, go through [`/settings`](#settings).
:::

[Auto roles and the welcome message](./features/onboarding.md) are not part of the wizard: set them in the "**Arrivals**" tab of `/settings`.

### 🧭 New setup wizard <span className="badge-experiment">Experiment</span> {#wizard}

A new `/setup` wizard replaces the module list with a guided path:

- **Section by section**: General (with the server's language), Arrivals, Protection and Moderation, one step at a time. A **condensed view** gathers everything on a single screen, one click away.
- **Tailored suggestions**: depending on the server's size, whether it is public, community-enabled or has a tag, the wizard pre-checks the recommended protections and says why.
- **More modules**: the [welcome message](./features/onboarding.md#welcome-message) (with its channel), the [Other servers](./features/automod.md#servers) filter, which deletes invites to other servers, and [preventive slowmode](./features/slowmode.md) ([Premium](/en/premium)) on the channel of your choice. [DISCON](./features/discon.md) is explained there: it is always active, with nothing to install.
- **A check before starting**: it flags the permissions RaidProtect is missing and the roles placed above its own, with a "**Check again**" button.
- **A summary** of what will be created, changed or set. Nothing is applied before "**Install**".
- **An already configured server is checked, not redone**: the existing captcha panel and an already active DM Lock are kept.
- **And then**: a preview of the [security audit](./features/audit.md) ends the installation, with shortcuts to test the captcha, customize the welcome message or open all the settings. A failed step can be resumed by running `/setup` again.

:::info Experiment: Shield Update
The new setup wizard arrives with the **Shield Update**, planned for version 3.6.0. For now it is only offered to a small number of servers.
:::

## Modifying the configuration {#settings}

The `/settings` command opens the RaidProtect dashboard. It is reserved for administrators and appears as a temporary private message, visible only to you.

### 🔍 The dashboard {#menu}

Settings are organized into five tabs:

- **General**: [language](./language.md), [message commands](./guides/prefix.md), [permissions](./guides/prefix.md#permissions) and the server's time zone.
- **Arrivals**: [Auto RaidMode](./features/raid-mode.md), [captcha](./features/captcha.md), [minimum account age](./features/onboarding.md#minage), [auto roles](./features/onboarding.md#autorole) and [welcome message](./features/onboarding.md#welcome-message).
- **Protection**: [DISCON](./features/discon.md)\*, [anti-spam](./features/anti-spam.mdx), [Automod](./features/automod.md) ([image filter](./features/scam-images.md) and [other servers](./features/automod.md#servers)\*), [HoneyPot](./features/honeypot.md), [preventive slowmode](./features/slowmode.md)\*, [Authentification Manager](./features/authentication-manager.mdx) and [DM Lock](./features/dm-lock.mdx).
- **Moderation**: [sanctions](./features/sanctions.mdx), [alt accounts](./features/alt-accounts.md)\*, logs, [reports](./features/reports.md) and [transparency](./features/transparency.md).
- **Utilities**: [tag role](./features/tag-role.md), [channel lock](./features/channel-lock.md), [on-duty role](./features/moderation.mdx#onduty) and message caching.

\* Experiment: these rows only appear on servers that have access to the Shield Update (DISCON, other servers, preventive slowmode) or the Identity Update (alt accounts), in [Premium](/en/premium) public beta.

Each row shows the setting's current value and a button: "**Configure**" opens a dedicated screen, "**Edit**" opens an input window. Every change applies immediately.

After an update, a **New** badge flags for two weeks the settings that have just arrived, as well as their tab until you have opened it.

Explore the dashboard below, the buttons are clickable:

<Settings start="home:arrivals" />

:::info Premium features
Screens reserved for [Premium](/en/premium) remain viewable.
:::

### 🕒 Time zone {#timezone}

The time zone is used for everything RaidProtect publishes at a fixed time, such as [transparency recaps](./features/transparency.md#recaps).

1. Run the `/settings` command.
2. In the "**General**" tab, click "**Edit**" next to "**Timezone**".
3. Choose your UTC offset, or enter a time zone identifier like `Europe/Paris` so that daylight saving time is handled automatically.

Without a setting, the server is in UTC.

### 🔄 Resetting a setting {#reset}

1. Navigate to the desired setting.
2. Click "**Reset**".

The reset applies right away, without confirmation. Only destructive actions, such as deleting the captcha, ask you to confirm.

### 🎨 Customize the bot <span className="badge-premium">Premium</span> {#customize}

The "**Customize**" button, at the bottom of the dashboard, changes RaidProtect's appearance on your server: nickname, avatar, banner, font, effect and nickname colors.

<Settings start="customize" />

Accepted images are PNG, JPEG, GIF or WebP, up to 10 MB. If Premium ends, the avatar, banner and nickname style go back to RaidProtect's; the nickname is kept.

## Which setup for your server? {#quelle-config}

The `/setup` wizard already covers the essentials. If you are starting from scratch, or preparing your installation with an AI, spot what matches your server: each need points to the feature that answers it.

- **[Raids](/en/learn/discord-raid), waves of accounts arriving all at once**: [Auto RaidMode](./features/raid-mode.md) blocks or filters arrivals for the duration of the attack, and [DISCON](./features/discon.md) lets you harden the whole server in one click.
- **[Spam](/en/learn/spam-discord), advertising, scam links**: the [anti-spam](./features/anti-spam.mdx) sanctions automatically, and the [HoneyPot](./features/honeypot.md) traps spam accounts.
- **[Bots](/en/learn/self-bot) joining en masse**: the [captcha](./features/captcha.md) makes every newcomer prove they are human, and the [minimum account age](./features/onboarding.md#minage) keeps out accounts created the day before.
- **Image scams** (fake giveaways, phishing): the [image filter](./features/scam-images.md) detects and removes them.
- **A [nuke](/en/learn/discord-nuke) risk or hacked staff accounts**: apply [least privilege](/en/learn/least-privilege) and the [Authentification Manager](./features/authentication-manager.mdx).
- **A community that can help you moderate**: enable [reports](./features/reports.md).

Then adjust the [sanctions](./features/sanctions.mdx) (kick, timeout, ban, jail) to fit your server.

:::info Configuration issue?
If you encounter a problem, check the [Malfunctions](./guides/malfunctions.md) section or join our [support server](https://raidprotect.bot/discord) for assistance.
:::
