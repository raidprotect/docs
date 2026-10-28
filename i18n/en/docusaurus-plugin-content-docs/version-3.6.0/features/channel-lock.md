---
title: Channel Lock
description: "RaidProtect's /lock command locks a channel in an instant to stop new messages, temporarily or until you unlock it."
---

import ChannelLockMockup from '@site/src/components/DiscordMessage/mockups/channel-lock';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

{/* <ChannelLockMockup /> : hidden for now */}

Sometimes it is necessary to temporarily lock a channel to prevent users from sending messages. Thanks to the lock command, this becomes a breeze!

## 🔒 Lock a channel {#lock}

Use the command: ```/lock [#channel] [duration] [reason] [--silent]```

This command removes the permissions to send messages and to send messages in threads from the **@everyone** role in the targeted channel, preventing all users from posting.

- Replace `[#channel]` with the mention or [ID](../guides/id.mdx) of the channel to lock. Without a channel, we lock the one where you run the command. Text, announcement, voice, forum, media and stage channels and categories are accepted; threads are not.
- Replace `[reason]` to indicate why the channel is locked (e.g., *chat cleanup*, *important announcement*, etc.).
- Add `--silent` to announce nothing in the channel: only you receive the confirmation.

:::info
A given channel can only be locked once every 10 minutes.
:::

### Lock a category {#lock-category}

Locking a category also locks all its visible channels (excluding threads) in one go, and `/unlock` on the category unlocks them together. A channel already closed to writing (rules, announcements) is left as is, when locking as when unlocking. When a temporary category lock expires, a single log line names the category and the number of unlocked channels.

### Temporary lock {#lock-duration}

The `[duration]` parameter lets you **automatically unlock the channel** after the specified duration (e.g., `15m`, `1h`, `2d`). Useful for a quick cool-down without having to remember to unlock the channel manually. The duration is capped at the maximum duration of a sanction.

## 🔓 Unlock a channel {#unlock}

Use the command: ```/unlock [#channel] [reason] [--silent]```

This command restores the send message permissions for the **@everyone** role to their state before the lock, allowing users to post again. Replace `[reason]` to indicate why the channel is unlocked (e.g., *discussion reopened*, *announcement finished*, etc.). With `--silent`, nothing is announced in the channel.

:::warning
For the lock command to work correctly, no role open to everyone should have an explicit permission to write in that channel. Otherwise, members with those roles will still be able to chat. Overrides set for your team's roles, on the other hand, are useful: they keep staff able to speak during a `/lock`, and the [audit](./audit.md) no longer flags them as redundant.
:::
:::info
The `lock` and `unlock` commands are [usable via prefix](../guides/prefix.md). They require the "**Manage Messages**" permission. RaidProtect needs the "**Manage Channels**" and "**Manage Roles**" permissions to change the channel's permissions.
:::

## ✏️ Lock icon configuration {#config}

You can choose whether locked channels are renamed with a padlock: `/lock` then renames the channel to `🔒-channel-name`, and `/unlock` removes the prefix. This way you can see the channel's state directly in the channel list. This option is **disabled by default**.

To enable or disable the padlock:
1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Utilities**" tab.
3. Click "**Enable**" (or "**Disable**") next to "**Channel lock**". The button works as a toggle; a single click is enough.

<Settings start="home:utilities" />

:::info
Renaming requires the "**Manage Channels**" permission.
:::

## Frequently asked questions {#faq}

### Can I lock a channel other than the one I am in?

Yes, give the channel as the first argument: `/lock #general 30m Raid in progress`.

### Why can some members still write in a locked channel?

The lock only removes speaking from the @everyone role. A role that has an explicit permission to write in that channel keeps it.

### How do I add a padlock to the names of locked channels?

In `/settings`, Utilities tab, enable "Channel lock". The option is disabled by default.
