---
title: Server logs
description: "RaidProtect logs track everything that happens on your Discord server: channels, roles, members, messages, voice, emojis and reactions, with the author of each action."
---

**Server logs** keep track of what happens on your server: who created a channel, changed a role, deleted a message or disconnected a member from a voice channel. Each log starts with its author ("@mod created the channel #general.") and shows the before and after of a change.

:::info Experiment: Logging Update
Server logs are part of the **Logging Update**, planned for version 3.8.0. Until its release, they are an experiment, in public beta for [Premium](/en/premium) servers.
:::

## ⚙️ Configure the logs {#config}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Moderation**" tab.
3. Click "**Configure**" next to "**Logs**".
4. Open "**Server logs**", then choose a channel for each family.

In each family, two lists:

- **Sent types**: uncheck a type to stop sending it anywhere.
- **Types in another channel**: give a type its own channel. A type without its own channel follows its family's channel.

**Limits:** 3 different logs channels in the free version, 15 with [Premium](/en/premium). Without Premium, only the first 3 channels receive logs: the others are paused and their settings are kept.

The "**General**", "**Moderation**" and "**Captcha**" channels of the [moderation logs](./moderation.mdx#logs) do not change.

## 📚 Log families {#families}

| Family | What is recorded |
| --- | --- |
| **Channels, roles and invites** | Categories, channels, voice channels and threads created, edited or deleted, permissions included. Roles (and their new order), invites, webhooks, integrations, and bots added or removed with their role. Discord AutoMod rules, with the words and phrases added or removed, and scheduled events. Members interested in an event are reserved for [Premium](/en/premium). |
| **Members** | Arrivals (with the account age) and departures (with the join date and roles), rules accepted, roles added or removed, nicknames, server avatars, inactive members pruned and boosts. |
| **Messages** | Deleted messages, with who deleted them, edited messages, bulk deletions, pinned or unpinned messages. |
| **Voice** <span className="badge-premium">Premium</span> | Arrivals, departures with the session duration, channel changes, microphone, sound, camera and screen sharing. Staff actions (mute, deafen, move, disconnect) are separate, with their author. Stages started, edited or ended, and members who become speakers or raise their hand. |
| **Emojis and reactions** | Emojis, stickers and soundboard sounds created, edited or deleted. Reactions added or removed are reserved for [Premium](/en/premium) and unchecked by default. |

An edited message shows the before and after. For a long message, only the changed lines are displayed.

When the author of an action gave a **reason** (visible in Discord's audit log), it appears in the log. Role-related logs have a "**Role**" button that opens its [`/roleinfo`](./utilities.mdx#roleinfo) profile.

Messages deleted by RaidProtect itself (anti-spam, HoneyPot, anti-scam, `/clear`) stay in the logs of the module concerned, without duplicates.

## 🎨 Log format {#format}

Choose the format in "**Log format**", on the same screen.

| Format | Display |
| --- | --- |
| **Default** | The time, the icon, the mentions with their name, then the details. |
| **Boxed** | A colored box per log, with its title and the details. |
| **Compact** <span className="badge-premium">Premium</span> | One line per log: the time, the icon and the mentions. |

A server that loses Premium goes back to the Default format. Its choice is kept for when it returns.

## 💾 Messages in memory {#cache}

To recover the content of a deleted message, RaidProtect keeps recent messages in memory: **15 minutes** in the free version, **6 hours** with [Premium](/en/premium). Beyond that, the log indicates that the content was not kept.

With Premium, attachments of deleted messages are also copied into the log (10 MB per file, 100 MB per server, the oldest are replaced first).
