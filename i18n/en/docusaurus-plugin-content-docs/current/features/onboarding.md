---
title: Arrivals and Welcome
description: "RaidProtect's welcome feature greets new members of your Discord server, gives them their roles and filters out accounts that are too new."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect's **welcome** feature takes care of your Discord server's new members as soon as they arrive: a **welcome message** with a card in their name, **auto roles** and a **minimum account age** that keeps out accounts created for the occasion, often used in [raids](/en/learn/discord-raid). These three settings are in the "**Arrivals**" tab of `/settings`, next to the [captcha](./captcha.md) and [Auto RaidMode](./raid-mode.md).

## ❓ How does it work? {#working}

When a user joins your server, [raid mode](./raid-mode.md#action), the [minimum account age](#minage) and then the [captcha](./captcha.md) apply before they are admitted. Once admitted, they receive their [auto roles](#autorole) and their [welcome message](#welcome-message).

## 👋 Welcome message {#welcome-message}

The welcome message is sent to the channel of your choice when a member is admitted to the server. It contains your text and a **welcome card** generated for each member: their avatar, "Welcome to" followed by the server name, and their member number.

<Settings start="welcome" />

### Enable the welcome message {#welcome-config}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Arrivals**" tab.
3. Click "**Configure**" next to "**Welcome message**".
4. In "**Welcome channel**", choose the text channel where the message will be sent. Choosing a channel enables the message.

The switch at the top right of the screen enables or disables the welcome message. A preview of the message is shown below the screen and updates with every change.

:::info
The welcome channel cannot be the captcha, jail, HoneyPot or DISCON channel. If the channel is deleted, the setting is cleared.
:::

### Text and variables {#welcome-text}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Arrivals**" tab.
3. Click "**Configure**" next to "**Welcome message**".
4. In "**Message content**", click "**Text**".
5. Write your message (1,200 characters maximum), then confirm. Leave the field empty to go back to the default message.

<SettingsModal name="welcomeText" />

The default text is "Welcome `{user.mention}` to **`{server.name}`**! 🎉", in the server's language. You can use these variables:

| Variable | Replaced by |
|---|---|
| `{user.mention}` | The member's mention |
| `{user.name}` | Their username |
| `{user.displayname}` | Their display name |
| `{user.id}` | Their [ID](../guides/id.mdx) |
| `{server.name}` | The server's name |
| `{server.member_count}` | The server's member count |
| `{server.id}` | The server's ID |

### Mention member {#welcome-mention}

The "**Mention member**" option, enabled by default, notifies the new member when their welcome message is posted. It only mentions newcomers, never @everyone or roles.

### Buttons {#welcome-buttons}

You can add buttons below the message that lead to a channel of the server, for example "Read the rules".

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Arrivals**" tab.
3. Click "**Configure**" next to "**Welcome message**".
4. In "**Manage buttons**", choose "**Add a button**".
5. Give the button a name, choose the channel to link and, if you wish, an **emoji**: a standard emoji, or an emoji from this server (`<:name:id>`, `:name:` or its ID). An invalid emoji does not prevent saving: the button is created without an emoji.

To edit or delete a button, select it in the same list.

**Limits:** 2 buttons in the free version, 4 buttons in the [premium](/en/premium) version. If Premium expires, only the first 2 buttons remain displayed.

### Color <span className="badge-premium">Premium</span> {#welcome-color}

With [Premium](/en/premium), click "**Color**" in "**Message content**" to choose the color of the bar on the left of the message: a RaidProtect color from the list, or a hexadecimal code (for example `#D35F5F`). Without a choice, the message uses the color of the bot's nickname if you have [customized](/en/premium) it, otherwise the default color. The welcome card is tinted with the same color.

### Influxes and raids {#welcome-raid}

- **Grouping:** when many members arrive at the same time, arrivals are grouped so as not to flood the channel.
- **Paused during a raid:** as long as RaidProtect's [raid mode](./raid-mode.md) or the [Join Lock](./join-lock.mdx) is active, no welcome message is sent.

## 🏷️ Auto roles {#autorole}

Auto roles are given to each new member as soon as they arrive, or after passing the [captcha](./captcha.md) if it is active. They replace the former captcha auto role, whose setting was carried over automatically.

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Arrivals**" tab.
3. Click "**Configure**" next to "**Auto roles**".
4. Select one or more roles.

To remove all auto roles, click "**Reset**".

<Settings start="autorole" />

**Limits:** 3 roles in the free version, 10 roles in the [premium](/en/premium) version.

:::warning
Avoid roles that carry permissions: a role given automatically should grant no power. RaidProtect refuses roles managed by an integration, roles above its own or yours, and those that carry a moderation permission: the acceptable roles in your selection are kept, and a separate message explains why the others are refused (if all of them are, the current configuration stays unchanged). It alerts you if a chosen role later gains permissions.
:::
:::info
If your server uses another bot for its auto role, it may give the role before the captcha. Replace it with RaidProtect's auto roles.
:::

## 🤖 Bot arrival {#bots}

By default, a bot added to the server receives the [auto roles](#autorole) like a member. The "**Bots**" section of the "**Arrivals**" tab changes this.

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Arrivals**" tab.
3. Click "**Configure**" next to "**Bots**".

- **Bot roles**: given to each bot that arrives, **instead of** the auto roles. With no role chosen, bots receive the auto roles. **Limits:** 1 role in the free version, 15 roles with [Premium](/en/premium). The same restrictions as for auto roles apply (roles managed by an integration, above yours or RaidProtect's, or carrying a moderation permission).
- **Kick unauthorized bots**: any added bot is kicked immediately, unless the owner allowed it beforehand with the `/bypass bot` command. Disabled by default. **Only the server owner** can enable or disable this option and allow a bot.

### Allow a bot {#bypass-bot}

Use the command: ```/bypass bot [bot]```

Replace `[bot]` with the bot to allow: it can join the server **once**, within the next 10 minutes, without being kicked. Without a bot, the command lists the currently allowed bots. Each authorization is noted in your logs.

:::info
RaidProtect needs the "**Kick Members**" permission and a role above the bot's to kick it. Otherwise, the log says so and the bot stays.
:::

## 🎂 Minimum account age {#minage}

To strengthen security, you can require a minimum age for new members' Discord accounts. Accounts created just before a raid do not get through the door. The filter applies to every arrival.

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Arrivals**" tab.
3. Click "**Configure**" next to "**Minimum account age**".
4. In "**Minimum account age**", choose 2 hours, 12 hours, 1 day or 2 days, or a "**Custom value**" (for example `0y 3d 1h`, 10 years maximum).
5. In "**Action**", choose what happens to accounts that are too new.

To disable the filter, click "**Reset**". RaidProtect needs the `KICK_MEMBERS` permission.

<Settings start="minage" />

### Actions {#minage-action}

| Action | Effect on an account that is too new |
|---|---|
| "**Kick**" (default) | It is kicked on every attempt as long as its account is too new. |
| "**Quarantine until the required age**" | It enters without seeing anything of the server (via the [Jail role](./sanctions.mdx#jail)), and leaves its quarantine as soon as it reaches the required age, on the date indicated. |
| "**Hold at the gate**" | It is blocked on a [captcha](./captcha.md) that it can only solve once the age is reached. |

The account receives a private message with the date on which it will have access to the server. Kicks, quarantines and bans are noted in the logs channel.

:::info
- "**Quarantine until the required age**" requires a Jail Role, configured in the "**Moderation**" tab > "**Sanctions**". Without it, RaidProtect offers to configure it or to fall back to "**Ban until the required age**": the account leaves the server and its ban is lifted automatically on the right date.
- "**Hold at the gate**" requires an active captcha in **Panel (Interactive)** mode.
:::

### 🎫 Minimum age bypass {#bypass-minage}

Use the command: ```/bypass minage [user]```

Replace `[user]` with the desired [ID](../guides/id.mdx); they will have 10 minutes to join the server without being blocked by the required age. You can also use the command without specifying a user to see the current list of bypassed users. It also lifts the quarantine of an account that is too new. `/unjail` does not lift it: it indicates the command to use.

## Frequently asked questions {#faq}

### When is the welcome message sent?

When the member is admitted: as soon as they arrive if the captcha does not apply, otherwise after they pass the captcha. It is not sent during a raid or a Join Lock.

### Can the welcome card be removed?

No, the welcome card is attached to every welcome message. With Premium, you can change its color.

### How many auto roles can be given?

3 roles in the free version and 10 with Premium. Roles that carry a moderation permission are refused.

### Are auto roles given before the captcha?

No. When the captcha applies to the member, their auto roles are given to them after they pass the captcha.

### What minimum age should I choose?

A value of a few hours to 1 day is enough to keep out most accounts created for a raid, without bothering real members. The [`/setup` command](../setup.md) sets 6 hours by default.

### Is an account that is too new banned?

No, not by default: it is kicked on every attempt. You can also put it in quarantine until the required age or hold it behind the captcha. The temporary ban is only a fallback when the Jail role is not configured.
