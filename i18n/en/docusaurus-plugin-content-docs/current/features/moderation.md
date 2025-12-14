---
title: Moderation
---

To facilitate the work of your moderators, RaidProtect integrates very useful moderation commands that allow you to interact directly with Discord's native features, such as **banning** and **kicking** users.

In addition to these actions, RaidProtect sends direct messages to the sanctioned user to explain the reason for their sanction, and this is also recorded in the server logs for your reference.

:::info
Moderation commands are [usable by prefix](../guides/prefix).
:::

## 🔨 Ban a User {#ban}

The `/ban` command allows you to permanently prohibit a user from accessing your server.

Use the command: ```/ban (user) [reason]```

Replace `(user)` with the desired mention or ID and `[reason]` with the reason for the sanction.

:::tip
You can ban a user using their [Discord ID](../guides/id), even if they are not currently online or present on your server.
:::

### Unban a user {#unban}

The `/unban` command allows you to remove the ban from a previously banned user, thus allowing them to join your server again.

Use the command: ```/unban (user) [reason]```

Replace `(user)` with the desired identifier and `[reason]` with the reason for the unban.

## 👢 Kick a User {#kick}

The `/kick` command allows you to remove a member from your server without banning them. The user will be able to rejoin the server if they have a valid invitation.

Use the command: ```/kick (member) [reason]```

Replace `(member)` with the desired mention or ID and `[reason]` with the reason for the sanction.

## ⏳ Timeout a User {#timeout}

Use the command: ```/timeout (member) (duration) [reason]```

Replace `(member)` with the desired mention or ID, `(duration)` with the timeout length, up to a maximum of 28 days (e.g. `10m`, `1h`, `1d`), and `[reason]` with the reason for the sanction.

### Stop excluding a user {#untimeout}

The `/untimeout` command allows you to immediately remove the restrictions from a timed-out member, allowing them to regain all their interaction capabilities on the server.

Use the command: ```/untimeout (member) [reason]```

Replace `(member)` with the desired mention or ID and `[reason]` with the reason for removing the timeout.

## ⚠️ Warn a user {#warn}

The `/warn` command allows you to formally warn a member via a private message sent by the bot.

Use the command: ```/warn (member) [reason]```

Replace `(member)` with the desired mention or ID and `[reason]` with the reason for the warning.

## 🧹 Clear a Group of Messages {#clear}

The `/clear` command allows you to quickly delete a certain number of messages in a text channel. You can specify a user to delete only their messages.

Use the command: ```/clear (number) [user]```

Replace `(number)` with the number of messages you wish to delete (maximum 100). Add `[user]` using the mention or ID to target only their messages in the channel.

## 🕒 Enable slowmode in a channel {#slowmode}

The `/slowmode` command allows you to enable or modify the slowmode of a text channel, in order to limit how frequently users can send messages.

Use the command: ```/slowmode (duration) [channel] [reason]```

- Replace `(duration)` with the desired time between each message (e.g.: `5s`, `1m`, `10m`, `1h`).
- Add `[channel]` if you want to apply slowmode to a different channel than the one where you type the command.
- Add `[reason]` to specify the motive, which will be recorded in the server logs.