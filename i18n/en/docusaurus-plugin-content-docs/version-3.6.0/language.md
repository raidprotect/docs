---
title: Language
description: "Change RaidProtect's language to match your community: the bot speaks 11 languages, from French to Japanese, or follows your Discord server's."
---

import { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect allows you to choose the language used by the bot to best suit your Discord community.

**Public Messages:** The configured language applies to public messages sent by RaidProtect in your server (logs, captcha, reports, etc.).

**Ephemeral Messages:** These private or temporary messages remain displayed in the language of the user interacting with the bot.

## 🌐 List of supported languages {#supported}

- **French**
- **English**
- **Spanish**
- **German**
- **Brazilian Portuguese**
- **Italian**
- **Turkish**
- **Vietnamese**
- **Japanese**
- **Simplified Chinese**
- **Traditional Chinese**

Only fully translated languages are offered. Ephemeral replies to a member who uses Discord in another language are displayed in English.

## ⚙️ Changing the bot's language {#change}

1. Run the [`/settings` command](./setup.md#settings).
2. In the "**General**" tab, click "**Edit**" next to "**Language**".
3. Choose the desired language from the list, then confirm.

<SettingsModal name="lang" />

The change is immediate and appears in the server's logs.

### Follow the server's language {#follow}

The first option, "**Follow the server language**", uses the main language set in Discord's Community settings. This is the default setting. If that language is not among the supported languages, RaidProtect speaks English.

:::info
RaidProtect's language support is constantly evolving! [Suggest](https://suggestions.raidprotect.bot) languages you'd like to see on the bot or [vote](https://suggestions.raidprotect.bot) for proposed languages to have them added.
:::
