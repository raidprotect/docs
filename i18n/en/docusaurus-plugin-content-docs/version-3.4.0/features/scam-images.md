---
title: Scam images
---

import { AntiSpamSanctionsSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

RaidProtect automatically protects your server against **scam images** (crypto scams, fake giveaways, fake casino promotions). This protection is called **ScamLens**: it analyzes posted images, deletes the ones that are known scams and sanctions the account behind the message (often a compromised account).

:::tip No setup required
ScamLens is **enabled by default the moment RaidProtect joins your server**. You are protected right away, with nothing to configure.
:::

## ❓ How it works {#working}

As soon as an image is posted, ScamLens analyzes it. If it is a known scam:

1. The incident is **recorded in the moderation logs** (with the image involved) before anything is deleted.
2. The message is **deleted**.
3. The account behind it is **sanctioned**.

ScamLens only handles **images**. Other types of spam are handled by the [Anti-spam](./anti-spam.mdx) and the [HoneyPot](./honeypot.md).

## 🔧 Disable or re-enable {#config}

The sanction applied to scam images **follows your [HoneyPot](./honeypot.md#sanction) sanction by default** (or a Timeout if the HoneyPot is not enabled). You can change it, disable it or re-enable it from the same menu:

1. Run the [`/settings`](../setup.md#settings) command.
2. Open the **Anti-spam** module, then the **Sanctions** menu.
3. In the trigger list, select **"Scam images (Crypto Scam)"** and choose the sanction you want. To turn the protection off, reset this trigger's sanction.

<AntiSpamSanctionsSettingsMockup />

## 📊 Transparency {#reports}

Every scam blocked by ScamLens:

- shows up in your server's [Transparency recaps](./transparency.md#recaps) ("X scams blocked by ScamLens");
- is counted in the [HoneyPot](./honeypot.md) public caught-accounts counter;
- strengthens protection across **every server** using RaidProtect.

### Our monthly reports {#recaps}

Every month we publish the **[Threat weather](/blog/tags/threats)**, a public review of ScamLens activity. Cumulative figures since the [launch on 14 February 2026](/blog/scamlens-early-activation), across all servers protected by RaidProtect:

| Report | Scam images deleted | Compromised accounts identified |
|---|---|---|
| [1-month review](/blog/scamlens-1-month-recap) *(Mar 2026)* | 260,000 | 15,000 |
| [April 2026](/blog/threat-weather-april-2026) | 1,400,000 | 40,000 |
| [May 2026](/blog/threat-weather-may-2026) | 2,300,000 | 80,000 |
| [June 2026](/blog/threat-weather-june-2026) | 4,000,000 | 160,000 |
