---
title: HoneyPot
---

import HoneypotMockup from '@site/src/components/DiscordMessage/mockups/honeypot';

<HoneypotMockup />

RaidProtect's **HoneyPot** (or trap channel) is a channel where **no one should write**. Since real members know to stay away from it, the only ones who post there are **hacked accounts** or spam bots: RaidProtect sanctions them automatically.

:::info
**You already have ScamLens by default.** The [ScamLens](./scam-images.md) anti-scam is active on your server with no configuration at all: it specializes in **scam images**, detecting them, deleting them, and sanctioning the compromised account with very high reliability. For image-based scams, ScamLens is more than enough on its own. The HoneyPot is mainly useful if you want maximum security and to block the **other types of spam**: link spam, text raids, bots.
:::

## ❓ How does it work? {#working}

When you enable the HoneyPot, RaidProtect creates a text channel **at the very top of your server**, with a clear, randomly picked name. This channel has three characteristics:
- **Anyone can write in it**, including members who have not yet passed the captcha. This is intentional: a hacked account or a bot must not be able to avoid the trap.
- **A warning message** is posted when the channel is created, with a "Translate" button so everyone can read it in their own language.
- **A public counter** displays the number of accounts already caught by the trap, updated automatically.

As soon as a member posts in this channel:
- RaidProtect applies the **sanction you have chosen** (ban, softban, kick, timeout, jail, or mute).
- The **messages sent by this member in the past 10 minutes** are deleted across the whole server, to stop the spam if it has already spread to other channels.
- The action is added to the auto-moderation logs (reason: *Spam via compromised user account*).

## 🛠️ Setting up the HoneyPot {#config}

1. Run the [`/settings` command](../setup.md#settings).
2. Click the "**HoneyPot**" button.
3. Click "**Create the channel**": RaidProtect creates the channel, sets up the permissions, and posts the warning message.

Once the channel is created, you can:
- **Regenerate the channel**: deletes the old one and creates a new one (with a new name). Useful if you suspect a member has shared the trap channel's name to help other accounts avoid it.
- **Disable**: deletes the channel and turns off the feature.

### Choose the sanction {#sanction}

Several sanctions are available:

| Sanction | Effect | Availability |
|---|---|---|
| **Ban** | Removes the member from the server and deletes their recent messages | Free |
| **Softban** | Bans then unbans: deletes the messages, but the member can come back | Free |
| **Kick** | Removes the member, who can rejoin freely | Premium |
| **Timeout** | Prevents the member from speaking for a chosen time (max 28 days) | Premium |
| **Jail** | Assigns the Jail role configured on your server | Premium |
| **Mute** | Assigns the Mute role configured on your server | Premium |

For sanctions with a duration (Ban, Timeout, Jail, Mute), you can pick a **ready-to-use duration** (from 5 minutes to 28 days) or a **custom duration** via the dedicated button (for example `5m`, `1h`, `2d`; minimum 1 minute).

:::tip
The **Softban** is a good compromise: it cleans up the messages and removes the hacked account, but the legitimate owner can come back once their account is secured.
:::

:::info
Only **Ban** and **Softban** let Discord natively delete the hacked account's messages **everywhere on the server** in one go.
For the other sanctions (Kick, Timeout, Jail, Mute), RaidProtect has to perform a manual cross-channel deletion, which is much more costly on the bot side, so they are reserved for [Premium](/en/premium) servers.
:::

### Ignored members {#ignore}

You can choose **who is not sanctioned** when a message is posted in the HoneyPot:
- **No one** *(default)*: everyone gets sanctioned, even staff. Only members the bot cannot moderate (role higher than RaidProtect's) are automatically spared.
- **Staff**: members with the `Administrator`, `Manage Server`, or `Manage Channels` permission are not sanctioned.
- **Members ignored by Anti-spam**: RaidProtect reuses the [Anti-spam](./anti-spam.mdx) list. If the list is empty, it falls back to "Staff" mode.

:::info
In every case, RaidProtect **never sanctions itself or other bots**. Bots do not trigger the HoneyPot.
:::

## 🤝 HoneyPot and ScamLens, better together {#scamlens-combo}

RaidProtect already includes **[ScamLens](./scam-images.md)**, which analyzes images and deletes the ones that are known scams (crypto, fake giveaways, fake casino promotions).

The two work hand in hand:
- **ScamLens runs first.** If the image posted in the HoneyPot is already known, ScamLens is the one that deletes the message and sanctions the compromised account; the HoneyPot sanction is not applied on top.
- **The HoneyPot takes over** for everything else: new images not yet known, link spam, mass mentions, text raids, bots.
- **Every new image caught by a HoneyPot enriches ScamLens**, which can then block it across all protected servers.

ScamLens is already active by default on your server. **Enabling the HoneyPot doesn't break anything**: it simply complements what is already there, and it helps RaidProtect protect the whole community better.
