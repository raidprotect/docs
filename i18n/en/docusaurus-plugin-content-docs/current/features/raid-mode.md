---
title: Anti-raid
description: "RaidProtect's raid mode instantly blocks mass joins on your Discord server, triggered automatically as soon as a suspicious wave is detected."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

import RaidModeMockup from '@site/src/components/DiscordMessage/mockups/raid-mode';

{/* <RaidModeMockup /> : obsolete in 3.5.0 (shows kicking as the only raid mode action) */}

## Raid mode {#raid-mode}

RaidProtect's **raid mode** is an emergency feature that handles new users attempting to join your server during a [suspicious wave of joins](/en/learn/discord-raid), for a maximum duration of 24 hours. Our protection bot turns it on by itself as soon as it detects a wave, and you can also trigger it manually. You choose what we do with newcomers: block invites, kick them or send them to the [captcha](./captcha.md). To durably close the server to new members, use the [`/joinlock` command](./join-lock.mdx).

### ❓ How does raid mode work? {#working}

- **Detection:** **Auto RaidMode** activates raid mode when too many users join your server at the same time. By default, it triggers at 10 joins in 10 seconds.
- **Reaction:** during raid mode, newcomers are handled according to the [action during the raid](#action) you chose. The accounts of the wave that triggered the mode are handled too: kicked, or sent back behind the captcha with the captcha actions.
- **End:** raid mode turns itself off after the [configured duration](#duration), 5 minutes by default.
- **Logs:** a message is posted in the logs channel on every activation and deactivation.
- **Welcome:** the [welcome message](./onboarding.md#welcome-message) stays silent during the wave, so as not to flood the welcome channel.

:::warning
With the "**Lock invites**" action (default), Discord's community features are essential for raid mode. [Follow our guide to verify that community is enabled on your server.](../guides/community.md) The other actions work without the community.
:::

#### Activation {#enable}

A user with kick permission can activate raid mode by hand.

Use the command: ```/raidmode [status] [duration]```

- Without options, the command displays raid mode's status with a button to enable or disable it.
- Replace `[status]` with **True** to enable it, **False** to disable it.
- Replace `[duration]` with the desired duration (for example `30m` or `2h`, 24 hours maximum). Without a duration, we use the Auto RaidMode one.

A message is automatically posted in the logs channel to signal the activation. Manual raid mode applies the same [action](#action) as Auto RaidMode.

#### Deactivation {#disable}

Raid mode turns itself off at the end of its duration. You can also stop it earlier with the `/raidmode` command, once the threat has passed. 😇

:::info
The `raidmode` command is [usable via prefix](../guides/prefix.md).
:::

### 🚨 Auto RaidMode configuration {#config}

If your server often welcomes many new members at the same time, it is wise to change the threshold to avoid false positives. All settings are on the same screen.

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Arrivals**" tab.
3. Click "**Configure**" next to "**Auto RaidMode**".

The switch at the top right of the screen enables or disables Auto RaidMode. RaidProtect needs the `MANAGE_GUILD` permission.

<Settings start="antiraid" />

#### Member threshold {#threshold}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Arrivals**" tab.
3. Click "**Configure**" next to "**Auto RaidMode**".
4. In "**Number of members / 10 seconds**", choose 10, 15, 20 or 30 members, or a "**Custom value**".

The threshold is counted over a 10-second window. The default value is 10 members.

:::note
We recommend a value between 10 and 20 members in 10 seconds for good system efficiency.
:::

#### Raid mode duration {#duration}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Arrivals**" tab.
3. Click "**Configure**" next to "**Auto RaidMode**".
4. In "**Duration**", choose 1, 2, 5 or 10 minutes, or a "**Custom value**" from 10 seconds to 24 hours (for example `5m 30s`).

The default duration is 5 minutes.

#### Action during the raid {#action}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Arrivals**" tab.
3. Click "**Configure**" next to "**Auto RaidMode**".
4. In "**Action during the raid**", choose the action to apply to newcomers.

| Action | Effect on newcomers | Availability |
|---|---|---|
| "**Lock invites**" (default) | Discord closes the server's invites, no one new gets in. | Free, community required |
| "**Kick everyone arriving**" | Each newcomer is kicked and receives a private message inviting them to come back once raid mode is disabled. | [Premium](/en/premium) |
| "**Send to the captcha**" | Newcomers pass the captcha instead of being kicked. | Free, active captcha required |
| "**Captcha frozen during the raid**" | Newcomers wait behind the captcha and pass it after the wave. | Free, active captcha in Panel mode required |

:::tip
With the captcha actions, set the [captcha trigger](./captcha.md#trigger) to **Automatic**: the captcha then only applies during raids, and your newcomers enter directly the rest of the time.
:::

#### Kick mode <span className="badge-premium">Premium</span> {#kick-mode}

The former "**Kick mode**" switch has become the "**Kick everyone arriving**" action of the [action during the raid](#action). It remains reserved for [**Premium**](/en/premium) servers and works without Discord's community. If Premium expires, the action goes back to "**Lock invites**". Likewise, a captcha action whose captcha is not usable falls back to normal mode (wave kicked, then invites locked), never to kicking.

#### Close DMs automatically {#close-dm}

You can configure **Auto RaidMode** to **automatically close the server's DMs** as soon as it activates. This adds a layer of protection during a raid: new accounts can no longer contact your members privately to [phish](/en/learn/token-grabber) or scam them.

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Arrivals**" tab.
3. Click "**Configure**" next to "**Auto RaidMode**".
4. Click "**Enable**" next to "**Close DMs**".

When raid mode ends, DMs go back to their previous configuration.

:::info
This option only applies with the "**Lock invites**" action, which goes through Discord's security actions. It complements the [permanent DM Lock](./dm-lock.mdx): without the permanent lock, DMs are only closed during an active raid.
:::

### 🎫 Raid mode bypass {#bypass-raid}

Expecting a legitimate member while a raid is in progress? Allow them to join despite raid mode:

Use the command: ```/bypass raid [user]```

Replace `[user]` with the desired [identifier](../guides/id.mdx); they will have 10 minutes to join the server without being kicked by raid mode. You can also use the command without specifying a user to see the current list of bypassed users (7 users maximum at the same time).

:::warning
The raid mode bypass only applies with the "**Kick everyone arriving**" action: a user blocked at the invite level cannot be bypassed. With the captcha actions, use the [captcha bypass](./captcha.md#bypass) instead.
:::

## Minimum age {#minage}

The minimum account age has its own section in the [Arrivals and Welcome](./onboarding.md#minage) page: age setting, choice of action (kick, jail until the required age, hold at entry) and bypass.

### 🎂 Minimum account age bypass {#bypass-minage}

Use the command ```/bypass minage [user]```, detailed in the [minimum age bypass](./onboarding.md#bypass-minage).

## Frequently asked questions {#faq}

### Does raid mode activate automatically?

Yes. By default, we activate raid mode as soon as 10 users join your server in 10 seconds. This threshold is configurable in the Auto RaidMode settings.

### What does raid mode do to newcomers?

It depends on the chosen action: block invites (default), kick newcomers ([Premium](/en/premium)), send them to the captcha, or make them wait behind a frozen captcha until the end of the wave.

### How do I activate raid mode manually?

A user with kick permission runs the `/raidmode` command. A message is then posted in the logs channel to signal the activation, and the chosen action applies to newcomers.

### Does raid mode turn off on its own?

Yes. It turns off after the duration chosen in `/raidmode`, or failing that after the Auto RaidMode duration (5 minutes by default, 24 hours maximum). You can stop it earlier with the same command.

### Does Discord Community need to be enabled?

Only for the "**Lock invites**" action, which uses Discord's invite closing. The "**Kick everyone arriving**", "**Send to the captcha**" and "**Captcha frozen during the raid**" actions work without it.

### Can I let a legitimate member join during a raid?

Yes, with the `/bypass raid [user]` command when the action is "**Kick everyone arriving**": the member then has 10 minutes to join without being kicked (7 bypassed users maximum at the same time). With the captcha actions, use `/bypass captcha [user]`.
