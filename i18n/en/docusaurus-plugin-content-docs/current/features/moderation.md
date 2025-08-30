---
title: Moderation
---

To facilitate the work of your moderators, RaidProtect integrates very useful moderation commands that allow you to interact directly with Discord's native features, such as **banning** and **kicking** users.

In addition to these actions, RaidProtect sends direct messages to the sanctioned user to explain the reason for their sanction, and this is also recorded in the server logs for your reference.

:::info
Moderation commands are [usable by prefix](../guides/prefix.md).
:::

## 🔨 Ban a User {#ban}

Use the command: ```/ban [@user] [reason]```

Replace `[@user]` with the desired mention or ID and `[reason]` with the reason for the sanction.

:::tip
You can ban a user using their [Discord ID](https://dfr.gg/wiki/interface/mode-developpeur), even if they are not currently online or present on your server.
:::

### Unban a user {#unban}

Use the command: ```/unban [ID] (reason)```

Replace `[ID]` with the desired identifier and `(reason)` with the reason for the unban.

## 👢 Kick a User {#kick}

Use the command: ```/kick [@user] [reason]```

Replace `[@user]` with the desired mention or ID and `[reason]` with the reason for the sanction.

## ⏳ Timeout a User {#timeout}

Use the command: ```/timeout [@user] [duration] [reason]```

Replace `[@user]` with the desired mention or ID, `[duration]` with the timeout length, up to a maximum of 28 days (e.g. `10m`, `1h`, `1d`), and `[reason]` with the reason for the sanction.

## 🧹 Clear a Group of Messages {#clear}

The command `/clear` allows you to quickly delete a certain number of messages in a text channel. You can specify a user to delete only their messages.

Use the command: ```/clear [number] (@user)```

Replace `[number]` with the number of messages you wish to delete (maximum 100). Add `(@user)` using the mention or ID to target only their messages in the channel.