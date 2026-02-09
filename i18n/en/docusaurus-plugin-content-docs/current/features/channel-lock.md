---
title: Channel Lock
---

Sometimes it is necessary to temporarily lock a channel to prevent users from sending messages. Thanks to the lock command, this becomes a breeze!

## 🔒 Lock a channel {#lock}

Use the command: ```/lock [reason]```

This command removes the permission to send messages from the **@everyone** role in the channel, thereby preventing all users from posting. Replace **[reason]** to indicate why the channel is locked (e.g., *chat cleanup*, *important announcement*, etc.).

## 🔓 Unlock a channel {#unlock}

Use the command: ```/unlock [reason]```

This command restores the send message permissions to the state before the lock for the **@everyone** role in the channel, allowing users to post again. Replace **[reason]** to indicate why the channel is unlocked (e.g., *discussion reopened*, *announcement finished*, etc.).

:::warning
For the lock command to work correctly, you must ensure that no role has explicit permission to speak in that channel. Otherwise, members with those roles will still be able to chat.
:::
:::info
The `lock` and `unlock` commands are [usable via prefix](../guides/prefix.md).
:::

## ✏️ Lock icon configuration {#config}

By default, this feature is disabled. However, you have the option to choose whether locked channels should be renamed with a lock emoji (🔒) added before their name.

To enable/disable the lock icon before locked channel names:
1. Run the [`/settings` command](../setup.md#settings).
2. Click the "**Lock icon on locked channels**" button. This button works as a toggle; a single click is enough to enable or disable the option.
