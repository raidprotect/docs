---
title: Scam images
description: "ScamLens, RaidProtect's anti-scam, automatically detects and removes scam images on your Discord server. Active by default, no setup required."
---

import AntiScamMockup from '@site/src/components/DiscordMessage/mockups/anti-scam';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect automatically protects your server against **scam images** (crypto scams, fake giveaways, fake casino promotions). This protection is called **ScamLens**: it analyzes posted images, deletes the ones that are known scams and sanctions the account behind the message (often a [compromised account](/en/learn/token-grabber)).

<AntiScamMockup />

:::tip No setup required
ScamLens is **enabled by default the moment RaidProtect joins your server**. You are protected right away, with nothing to configure.
:::

## ❓ How does it work? {#working}

ScamLens compares every posted image with known scams. Nothing is read from the messages' text.

Depending on the match found:

- **Certain match**: the message is **deleted** immediately and its author is **sanctioned**. The sanction log specifies the channel affected.
- **Uncertain match**: the message is deleted **as a precaution**, without a sanction. If the image is later confirmed as a scam, the sanction may come afterwards.

The sanction reason is "Scam (Crypto Images) detected". On a [Premium](/en/premium) server, the sanctioned member also receives a private message.

ScamLens only handles **images**. Other types of spam are handled by the [Anti-spam](./anti-spam.mdx) and the [HoneyPot](./honeypot.md).

## 🔧 Configure ScamLens {#config}

ScamLens is set in the **Automod** module of the "**Protection**" tab, on the "**Image filter**" screen.

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Protection**" tab.
3. Click "**Configure**" next to "**Automod**".
4. Click "**Configure**" next to "**Images**".

<Settings start="imageFilter" />

### Enable or disable ScamLens {#toggle}

On the "**Image filter**" screen, click "**Disable**" (or "**Enable**") at the top right. Each change is recorded in your logs.

### Choose the sanction and its duration {#sanction}

In the "**Applied sanction**" selector, choose:
- "**Default**": your [HoneyPot](./honeypot.md#sanction)'s sanction if it is active, otherwise a Timeout;
- or a specific sanction: Ban, Softban, Jail, Kick, Mute, Timeout or Warn.

In the "**Sanction duration**" selector, choose 5 minutes, 1 hour, 1 day or "**Custom value**" (for example `30m`, `2h`, `7d`). The "**Default**" option follows your HoneyPot's duration if it is active, otherwise **1 day**. A duration chosen here is specific to ScamLens, independent of the Anti-spam and the HoneyPot. It also applies to sanctions that arrive later.

:::info
- A **Jail** or a **Mute** without a configured role becomes a **Timeout**.
- The public message announcing the sanction follows the "**Public sanction message**" setting of the [Anti-spam](./anti-spam.mdx#public-message), which can be disabled with Premium.
:::

## 🗂️ Image catalog <span className="badge-experiment">Experiment</span> <span className="badge-premium">Premium</span> {#catalog}

:::info Experiment: Shield Update
The image catalog is part of the **Shield Update**, planned for version 3.6.0, and is an experiment until its release.
:::

On top of the global "Crypto Scam" catalog, managed by us and applied on all servers, [Premium](/en/premium) servers can block **their own images**, whatever their content: fake Nitro screenshots, visuals of a scam targeting your community, images forbidden on your server...

**Limits:** 2 lists per server, 10 images per upload.

### Create a list {#lists}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Protection**" tab.
3. Click "**Configure**" next to "**Automod**".
4. Click "**Configure**" next to "**Images**".
5. In "**Image catalog**", click "**Create a list**" and give it a name.
6. Choose the list's "**Verification channel**".
7. Click "**Add images**" and upload up to 10 images. The result shows the images added, the variants attached, the duplicates ignored and the images refused.

The images of a list are deleted as soon as they reappear on your server, and their author receives the sanction chosen above. The sanction's reason names the list ("Image from the "_name_" list"). Without a sanction, the deletion is noted in your moderation logs, with the channel and the list.

:::warning One list = a single image registry
Put only one type of content in a list. Mixing unrelated images in the same list corrupts detection: create a second list instead.
:::

### Verification channel {#review}

When an image looks like an image in your list without a certain match, we flag it in the list's **verification channel** ("Verification required: list ..."), with two buttons:
- "**Confirm, it's forbidden**": the image joins the catalog, the message is deleted and its author sanctioned;
- "**Dismiss, it's clean**": this image will no longer trigger a verification.

The `Manage Server` permission is needed to decide. Without a verification channel, uncertain matches stay silent.

## 📊 Transparency {#reports}

Every scam blocked by ScamLens:

- shows up in your server's [Transparency recaps](./transparency.md#recaps) ("X scams blocked by ScamLens");
- is counted in the [HoneyPot](./honeypot.md) flagged-accounts counter;
- strengthens protection across **every server** using RaidProtect.

### Our monthly reports {#recaps}

Every month, we publish the **[Threat Watch](/blog/tags/threats)**, a public review of ScamLens activity. Cumulative figures since the [launch on February 14, 2026](/blog/scamlens-early-activation), across all servers protected by RaidProtect:

| Report | Scam images deleted | Compromised accounts identified |
|---|---|---|
| [1-month review](/blog/scamlens-1-month-recap) *(Mar 2026)* | 260,000 | 15,000 |
| [April 2026](/blog/threat-weather-april-2026) | 1,400,000 | 40,000 |
| [May 2026](/blog/threat-weather-may-2026) | 2,300,000 | 80,000 |
| [June 2026](/blog/threat-weather-june-2026) | 4,000,000 | 160,000 |

## Frequently asked questions {#faq}

### Do I need to configure ScamLens?

No. ScamLens is enabled by default the moment RaidProtect joins your server. You are protected right away, with nothing to configure.

### Does ScamLens block anything other than images?

No, ScamLens only handles images. By default, it blocks known scam images. Premium servers can also add their own images to it with the image catalog. Other types of spam are handled by the [Anti-spam](./anti-spam.mdx) and the [HoneyPot](./honeypot.md).

### Which sanction is applied to a scam image?

By default, ScamLens applies your [HoneyPot](./honeypot.md#sanction)'s sanction and duration, or a one-day Timeout if the HoneyPot is not enabled. You can choose another sanction and another duration in /settings, Protection tab, Automod module, Image filter screen.

### How do I disable ScamLens?

In /settings, Protection tab, click "Configure" next to Automod, then next to Images, and use the switch at the top right of the Image filter screen.
