---
title: Sanctions History
---

RaidProtect's sanctions history allows you to track and manage all sanctions applied on your server. This system centralizes all moderation actions in a searchable and editable database, making it easier for your moderation team to work.

## ❓ How the history works {#working}

The sanctions history automatically records all moderation actions performed on your server:

- **Manual sanctions**: All moderation commands (`/ban`, `/tempban`, `/kick`, `/timeout`, `/warn`) are automatically recorded in the history.
- **Automatic sanctions**: Sanctions applied by anti-spam are also added to the sanctions history.
- **Bans, kicks and timeouts**: Sanctions applied without using RaidProtect are added to the history.
- **Discord's Automod**: Sanctions applied by Discord's automod are also added.
- **Sanction notifications**: Sanctioned members receive a private message informing them of the sanction and its reason. The bot also sends an acknowledgment receipt confirming the sending of this notification.

:::info
All recorded sanctions contain: the sanctioned user, the responsible moderator, the reason (up to 512 characters), the date and time, as well as the type of sanction and whether the user was notified.
:::

## 🔍 Search for sanctions {#search}

The `/sanctions search` command allows you to search for sanctions in the history according to different criteria.

Use the command: ```/sanctions search [user] [moderator] [type] [date] [status]```

- `[user]`: Search for all sanctions of a specific user.
- `[moderator]`: Search for all sanctions applied by a specific moderator.
- `[type]`: Filter by sanction type (Ban, Softban, Unban, Kick, Timeout, Untimeout, Warn).
- `[date]`: Filter by sanction date.
- `[status]`: Filter by sanction status (Active, Expired, Canceled).

![Screenshot of sanctions search](../assets/rp-sanctions-search.webp)

:::tip
You can combine multiple criteria to refine your search. For example, search for all bans performed by a specific moderator.
:::

## ℹ️ View a sanction {#info}

The `/sanctions info` command allows you to get detailed information about a specific sanction.

Use the command: ```/sanctions info (id)```

Replace `(id)` with the identifier of the sanction you want to view.

![Screenshot of sanction information](../assets/rp-sanctions-info.webp)

## ✏️ Edit a sanction {#edit}

The `/sanctions edit` command allows you to modify the reason of an existing sanction, useful for correcting an error or adding details.

Use the command: ```/sanctions edit (id) (new_reason)```

Replace `(id)` with the identifier of the sanction to modify and `(new_reason)` with the new reason (maximum 512 characters).

![Screenshot of sanction editing](../assets/rp-sanctions-edit.webp)

:::warning
Editing a sanction updates the record in the history but does not change the sanction applied on Discord (for example, a banned user will remain banned).
:::

## 🗑️ Delete a sanction {#delete}

The `/sanctions delete` command allows you to delete a sanction from the history. This action is irreversible.

Use the command: ```/sanctions delete (id)```

Replace `(id)` with the identifier of the sanction to delete.

![Screenshot of sanction deletion](../assets/rp-sanctions-delete.webp)


## 📊 Sanctions logs {#logs}

For better organization, you can configure a log channel dedicated specifically to sanctions, separate from your general logs.

![Screenshot of sanctions logs configuration](../assets/rp-sanctions-logs.webp)

### Configure the sanctions log channel {#config-logs}

![Screenshot of sanctions logs configuration](../assets/rp-settings-sanctions-logs.webp)

1. Use the [command `/settings`](../setup.md#settings).
2. Click on the "**Logs**" button.
3. Select "**Moderation**".
4. Choose the channel in which sanctions logs will be sent or use the "**Create one for me**" button.

:::note
You can also choose whether RaidProtect logs actions performed by users without going through the bot.
:::
