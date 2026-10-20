---
title: Preventive Slowmode
description: "RaidProtect's preventive slowmode automatically adjusts the slowmode of your Discord server's channels to keep a readable message rate."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect's **preventive slowmode** automatically adjusts your channels' [slowmode](./moderation.mdx#slowmode) to hold a **message rate** per minute. When a channel runs away (announcement, live stream, influx of new members, start of a [raid](/en/learn/discord-raid)), we raise the slowmode; when it calms down, we lower it again. Your moderators no longer have to watch the chat to set it by hand.

:::info Experiment: Shield Update
Preventive slowmode is reserved for [Premium](/en/premium) servers. It is part of the **Shield Update**, planned for version 3.6.0, and is an experiment until its release.
:::

## ❓ How does it work? {#working}

- **A message rate**: for each regulated channel, you choose how many messages per minute it can receive (30 by default). Beyond that, the slowmode goes up on its own.
- **Bounds**: the slowmode always stays between the **minimum slowmode** and the **maximum slowmode** you set for the channel.
- **Continuous adjustment**: we adjust the slowmode to the actual rate, and it goes up immediately when a channel runs away.
- **A gradual descent**: when the channel calms down, the slowmode gradually returns toward the minimum.
- **Audit log**: each change carries the reason "Automatic slowmode".

## 🛠️ Preventive slowmode configuration {#config}

### Add a regulated channel {#add}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Protection**" tab.
3. Click "**Configure**" next to "**Preventive slowmode**".
4. Click "**Add**" next to a free slot.
5. Choose the channel (text channel or announcement channel).

<Settings start="slowmode" />

**Limits:** 6 regulated channels per server.

:::warning Required permissions
RaidProtect must have the `Manage Channels` permission in each regulated channel.
:::

### Adjust a channel {#channel}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Protection**" tab.
3. Click "**Configure**" next to "**Preventive slowmode**".
4. Click "**Edit**" next to the channel.
5. Choose the "**Message rate**", the "**Minimum slowmode**" and the "**Maximum slowmode**".

<Settings start="slowmodeChannel" />

| Setting | Proposed values | Default |
|---|---|---|
| **Message rate** | from 5 to 120 messages per minute | 30 messages / min |
| **Minimum slowmode** | from 0 to 10 seconds | 0 seconds (no minimum) |
| **Maximum slowmode** | from 5 seconds to 10 minutes | 2 minutes |

For a value that is not in the list, click "**Customize**" and enter your own values (for example `40` messages per minute, a minimum of `0s`, a maximum of `2m 30s`). The slowmode cannot exceed 6 hours, Discord's limit.

<SettingsModal name="slowmodeCustom" />

From a channel's screen, you can also:
- stop or restart regulation with the switch at the top right. Stopping regulation resets the channel's slowmode to 0;
- click "**Apply to all regulated channels**" to copy these settings to all your regulated channels;
- click "**Delete**" to free the slot.

## 🕒 Preventive slowmode and the /slowmode command {#manual}

If a moderator uses the [`/slowmode` command](./moderation.mdx#slowmode) on a regulated channel, their manual value is applied and **automatic regulation is disabled** for that channel. A message points it out. To restart regulation, re-enable it from the channel's screen in `/settings`.

## Frequently asked questions {#faq}

### What is the difference between preventive slowmode and anti-spam?

[Anti-spam](./anti-spam.mdx) sanctions members who spam. Preventive slowmode sanctions no one: it slows down a whole channel when the overall rate becomes too high, to keep a discussion readable.

### How many channels can be regulated?

Up to 6 channels per server, each with its own message rate and bounds.

### Is preventive slowmode free?

No, it is reserved for Premium servers. It is also part of the Shield Update, still an experiment.

### What happens if I set the slowmode by hand?

The /slowmode command applies your value and disables automatic regulation for that channel. You can re-enable it in /settings, Protection tab, Preventive slowmode.
