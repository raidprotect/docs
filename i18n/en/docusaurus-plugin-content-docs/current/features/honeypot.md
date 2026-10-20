---
title: HoneyPot
description: "RaidProtect's HoneyPot is an anti-spam trap channel that automatically catches and sanctions hacked accounts and spam bots on your Discord server."
---

import HoneypotMockup from '@site/src/components/DiscordMessage/mockups/honeypot';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

<HoneypotMockup />

RaidProtect's **HoneyPot** (or trap channel) is an anti-spam feature: a channel where **[no one should write](/en/learn/honeypot-warming)**. Since real members know to stay away from it, the only ones who post there are **[hacked accounts](/en/learn/token-grabber)** or spam bots: RaidProtect sanctions them automatically.

:::info
**You already have ScamLens by default.** The [ScamLens](./scam-images.md) anti-scam is active on your server with no configuration at all: it specializes in **scam images**, detecting them, deleting them and sanctioning the compromised account with very high reliability. For image-based scams, ScamLens is more than enough on its own. The HoneyPot is mainly useful if you want maximum security and to block the **other types of spam**: link spam, text raids, bots.
:::

## ❓ How does it work? {#working}

When you enable the HoneyPot, RaidProtect creates a text channel **at the very top of your server**, with a clear, randomly picked name. This channel has three characteristics:
- **Anyone can write in it**, including members who have not yet passed the captcha and those who have the [Jail role](./sanctions.mdx#jail). This is intentional: a hacked account or a bot must not be able to avoid the trap.
- **A warning message** ("DO NOT SEND A MESSAGE HERE") is posted when the channel is created, with a "**Translate**" button so everyone can read it in their own language.
- **A flagged accounts counter** appears as a button next to "**Translate**" as soon as the first account is caught.

As soon as a member posts in this channel:
- RaidProtect applies the **sanction you have chosen** (ban, softban, kick, timeout, jail or mute), without sending them a private message.
- The **messages sent by this member in the past 10 minutes** are deleted across the whole server, to stop the spam if it has already spread to other channels.
- The action is added to the auto-moderation logs (reason: *Spam via compromised user account*).

If you chose a [delay before sanction](#grace), the member first gets a chance to say it was a mistake.

## 🛠️ Setting up the HoneyPot {#config}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Protection**" tab.
3. Click "**Configure**" next to "**HoneyPot**".
4. Click "**Enable**" at the top right: RaidProtect creates the channel, sets up the permissions and posts the warning message.

<Settings start="honeypot" />

Once the channel is created, you can:
- **Regenerate channel** (button next to "**HoneyPot channel**"): deletes the old channel and creates a new one, with a new name. Useful if you suspect a member has shared the trap channel's name to help other accounts avoid it.
- **Disable** (switch at the top right): deletes the channel and turns off the feature.

:::warning Required permissions
RaidProtect needs the `Manage Channels` and `Ban Members` permissions. Without them, an error box is displayed and the buttons stay grayed out.
:::

### Choose the sanction {#sanction}

By default, the HoneyPot applies a **Softban**. Several [sanctions](/en/learn/discord-sanctions) are available in the "**Applied sanction**" selector:

| Sanction | Effect | Availability |
|---|---|---|
| **Ban** | Removes the member from the server and deletes their recent messages. Temporary (1 day by default). | Free |
| **Softban** | Bans then unbans: deletes the messages, but the member can come back | Free |
| **Kick** | Removes the member, who can rejoin freely | Premium |
| **Timeout** | Prevents the member from speaking for a chosen time (max 28 days) | Premium |
| **Jail** | Assigns the [Jail role](./sanctions.mdx#jail) configured on your server | Premium |
| **Mute** | Assigns the [Mute role](./sanctions.mdx#mute) configured on your server | Premium |

For sanctions with a duration (Ban, Timeout, Jail, Mute), choose a duration in the "**Duration**" selector: 5 minutes, 1 hour, **1 day** (default) or 28 days, or "**Custom value**" to enter your own (for example `5m`, `1h`, `2d`; minimum 1 minute). The selector is grayed out for Softban and Kick, which have no duration.

:::tip
The **Softban** is a good compromise: it cleans up the messages and removes the hacked account, but the legitimate owner can come back once their account is secured.
:::

:::info
Only **Ban** and **Softban** let Discord natively delete the hacked account's messages **everywhere on the server** in one go.
For the other sanctions (Kick, Timeout, Jail, Mute), RaidProtect deletes the messages itself: they are reserved for [Premium](/en/premium) servers.
:::

:::info
- A **Jail** or a **Mute** without a configured role becomes a **Timeout**. The selector indicates it below the sanction.
- If your server loses Premium, a Premium sanction automatically goes back to **Softban** on the next trigger.
:::

### Delay before sanction <span className="badge-experiment">Experiment</span> {#grace}

A good-faith member may write in the HoneyPot by mistake. The **delay before sanction** gives them time to report it before being sanctioned.

:::info Experiment: Shield Update
The delay before sanction is part of the **Shield Update**, planned for version 3.6.0. Until its release, it is an experiment, in public beta for [Premium](/en/premium) servers.
:::

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Protection**" tab.
3. Click "**Configure**" next to "**HoneyPot**".
4. In "**Delay before sanction**", choose "**Immediate sanction**" (default) or "**Ask first, sanction after**" 30 seconds, 1 minute, 2 minutes or 5 minutes.

With a delay:
- the message is **removed** and the member is **mentioned** in the trap channel, with the "**It was a mistake**" button;
- only this member can click the button. If they click in time, no sanction is applied;
- without a click before the end of the delay, the sanction applies.

:::info
A spam bot generally posts the same text everywhere. An account that posts the **same message** elsewhere is sanctioned **right away**, without waiting.
:::

### Ignored members {#ignore}

You can choose **who is not sanctioned** when a message is posted in the HoneyPot, in the "**Ignored members**" selector:
- "**Nobody (except non-moderable members)**" *(default)*: everyone gets sanctioned, even staff. Only members the bot cannot moderate (role higher than RaidProtect's) are automatically spared.
- "**Staff (Admin / Manage Server / Manage Channels)**": members with the `Administrator`, `Manage Server` or `Manage Channels` permission are not sanctioned.
- "**Members ignored by Antispam**": RaidProtect reuses the ignored roles and members of the [Anti-spam](./anti-spam.mdx#ignore). If this list is empty, members with the `Administrator`, `Manage Server` or `Manage Messages` permission are ignored.

:::info
In every case, RaidProtect **never sanctions itself or other bots**. Bots do not trigger the HoneyPot.
:::

## ℹ️ The /honeypot command {#command}

The `/honeypot` command directly opens the HoneyPot configuration screen, without going through `/settings`. It requires the `Manage Server` permission.

Use the command: ```/honeypot```

## 🤝 HoneyPot and ScamLens, better together {#scamlens-combo}

RaidProtect already includes **[ScamLens](./scam-images.md)**, which analyzes images and deletes the ones that are known scams (crypto, fake giveaways, fake casino promotions).

The two work hand in hand:
- **ScamLens runs first.** If the image posted in the HoneyPot is already known, ScamLens is the one that deletes the message and sanctions the compromised account; the HoneyPot sanction is not applied on top.
- **The HoneyPot takes over** for everything else: new images not yet known, link spam, mass mentions, text raids, bots.
- **Every new image caught by a HoneyPot enriches ScamLens**, which can then block it across all protected servers.
- **ScamLens follows your HoneyPot**: as long as you give it no setting of its own, it applies your HoneyPot's [sanction and duration](./scam-images.md#config).

ScamLens is already active by default on your server. **Enabling the HoneyPot doesn't break anything**: it simply complements what is already there, and it helps RaidProtect protect the whole community better.

## Frequently asked questions {#faq}

### Is the HoneyPot useful if I already have ScamLens?

For image scams, ScamLens is more than enough: it is active by default and detects, deletes and sanctions them on its own. The HoneyPot is mainly useful for blocking the other types of spam, such as link spam, text raids and bots.

### Which sanction does the HoneyPot apply?

A Softban by default. You can choose another sanction: Ban and Softban are free, while Kick, Timeout, Jail and Mute are reserved for Premium servers. The HoneyPot's Ban lasts 1 day by default, a duration you can change.

### A member wrote in the HoneyPot by mistake, what can be done?

Enable the delay before sanction: the message is removed, the member is mentioned and has 30 seconds to 5 minutes to click "It was a mistake". If they click in time, they are not sanctioned. An account that posted the same message elsewhere, however, is sanctioned right away.

### Are staff members sanctioned if they write in the HoneyPot?

It depends on the "Ignored members" option. By default, everyone is sanctioned, even staff. RaidProtect never sanctions itself, and bots never trigger the trap.

### What happens to the messages of an account caught by the HoneyPot?

On top of the sanction, the messages sent by that member in the past 10 minutes are deleted across the whole server, to stop the spam if it has already spread to other channels.
