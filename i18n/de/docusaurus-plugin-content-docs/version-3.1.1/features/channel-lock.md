---
title: Channel locking
---

Sometimes it is necessary to temporarily lock a channel to prevent users from sending messages. With the lock command, this becomes a breeze!

## 🔒 Lock a Channel {#lock}

Use the command: ```/lock```

This will remove the speaking permission from the **@everyone** role in the channel, preventing all users from posting in that channel.

## 🔓 Unlock a Channel {#unlock}

Use the command: ```/unlock```

This will add the speaking permission back to the **@everyone** role in the channel, allowing all users to post in that channel.

:::warning
For the lock command to work properly, you must ensure that no roles have explicit permission to speak in that channel. Otherwise, members with those roles will still be able to chat.
:::
:::info
The `lock` and `unlock` commands are [usable by prefix](../guides/prefix.md).
:::

## ✏️ Configuring the Lock Icon {#config}

By default, this feature is disabled. However, you can choose whether locked channels should be renamed with a lock emoji (🔒) added in front of their name.

To enable/disable the lock icon in front of the names of locked channels:  
1. Use the [command `/settings`](../setup.md#settings).
2. Click on the **Lock Icon on Locked Channels** button. This button acts as a toggle; a simple click is enough to enable or disable the option.