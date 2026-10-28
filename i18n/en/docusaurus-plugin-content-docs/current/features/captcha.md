---
title: Captcha (Verification)
description: "RaidProtect's captcha blocks selfbots and raids: every new member proves they're human before accessing your Discord server."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import CaptchaMockup from '@site/src/components/DiscordMessage/mockups/captcha';

{/* <CaptchaMockup /> : obsolete in 3.5.0 (shows Challenge mode with automatic kick) */}

RaidProtect's **captcha** asks every new member to type back a code before accessing your Discord server, which blocks [selfbots](/en/learn/self-bot) and [raids](/en/learn/discord-raid) by filtering out accounts that are not human.

It is one of RaidProtect's most popular features, and it remains entirely optional. You choose when to enforce it: on every arrival, only during a raid, or also for suspicious accounts.

## ❓ How the captcha works {#working}

The captcha relies on an **@Unverified** role and a channel named **#verification**. When a user joins your server:
- **Waiting:** we give them the **@Unverified** role, which limits their access to the **#verification** channel only.
- **Challenge:** in Panel mode, they solve a puzzle in the [RaidProtect Activity](#activity). In Challenge mode, they type back a code shown on an image. See the [display modes](#display-mode).
- **Success:** the **@Unverified** role is removed and the member gains access to the server. Their [auto roles](./onboarding.md#autorole) and the [welcome message](./onboarding.md#welcome-message) are sent at that moment.
- **Failure:** when they run out of attempts, they are kicked, put in jail or blocked for a few minutes before they can try again, depending on your setting. They can come back and try the captcha again after a kick.
- **Logs:** each arrival is noted in the logs channel with the account creation date, as well as successes, failures and expired time limits.
- **Diagnosis:** RaidProtect automatically spots permission problems, the channel's visibility in Discord's [Onboarding Process](../guides/onboarding.md) and leaks of the **@Unverified** role, and offers to fix them.

:::info
**No kick by default.** A new captcha no longer kicks members who do not solve it: they stay on the server, with no access, until they are verified. You can set a [delay before kick](#timeout).
:::
:::warning
**Permission management:** The permissions of the **@Unverified** role are automatically configured by RaidProtect. You can rename the role and the channel, but do not delete them. RaidProtect needs the `KICK_MEMBERS` and `MANAGE_ROLES` permissions, and must be placed above the **@Unverified** role.
:::

### Display modes {#display-mode}

| Mode | What the new member sees |
|---|---|
| **Panel (Interactive)**, default | A permanent "**Verification System**" message with a "**Verify**" button, which opens the [RaidProtect Activity](#activity). The member cannot write in **#verification**. |
| **Challenge (Classic)** | An image is posted in **#verification** when they arrive, and they type the code as a message in the channel. |

The panel has a "**Translate**" button to read it in one's own language, and each newcomer is mentioned in the verification channel, then the message is deleted: this way they find the channel.

Panel mode keeps the channel clean and allows extra settings: choice of the sanction when attempts are used up, [captcha frozen during a raid](./raid-mode.md#action), [hold at entry of accounts that are too new](./onboarding.md#minage). Challenge mode always kicks the member at the end of the allotted time or when their attempts are used up.

### Trigger {#trigger}

| Trigger | When the captcha applies |
|---|---|
| **Always**, default | On every arrival, unconditionally. |
| **Automatic** | Only during a raid or a high DISCON level. Other newcomers enter directly. |
| **Smart** | Like Automatic, plus accounts that look suspicious. |

With **Automatic**, the captcha applies during a raid only if [Auto RaidMode](./raid-mode.md#action) is set to "**Send to the captcha**" or "**Captcha frozen during the raid**", and during a [DISCON](./discon.md) alert from level 3.

The **Smart** trigger evaluates each newcomer's profile. A member approved by hand by your team is never considered suspicious.

## 🚪 How to configure the captcha? {#config}

Setting up the captcha is quick and easy.

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Arrivals**" tab.
3. Click "**Configure**" next to "**Captcha**".
4. Choose the channel where captchas will be completed or use the "**Create one for me**" button.
5. Click "**Enable**". The **@Unverified** role is created and its permissions are set in all channels.

The captcha starts in **Panel (Interactive)** mode, triggered **Always**, with 3 attempts and no delay before kick. You can then adjust each setting from the same screen.

<Settings start="captcha" />

### Display mode and trigger {#mode}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Arrivals**" tab.
3. Click "**Configure**" next to "**Captcha**".
4. In "**Display Mode**", choose "**Panel (Interactive)**" or "**Challenge (Classic)**".
5. In "**Trigger**", choose "**Always**", "**Automatic**" or "**Smart**".

### Verification in the Activity {#activity}

In **Panel** mode, the "**Verify**" button opens the **RaidProtect Activity**: the member solves a small puzzle right in Discord, in your server's colors and with the channel links from your [Onboarding Process](../guides/onboarding.md). Once verified, they discover their [welcome card](./onboarding.md#welcome-message) there.

- **Failed puzzle:** like a wrong code, it uses up an attempt, and the planned sanction applies when attempts run out. The Activity first announces the outcome to the member, then the sanction is applied.
- **Success:** the member is verified when they leave the success screen. If they click "**Verify**" in the meantime, their validation applies right away instead of relaunching the Activity.
- **Bot:** a captcha solved by an automated tool is sanctioned right away, as when attempts run out: kick, jail or block depending on your setting.
- **Review by your team:** when in doubt, the member stays blocked at the entrance, with no countdown running, and your team receives an automatic captcha report. It arrives in the [captcha logs](#logs), otherwise in the [reports](./reports.md) channel, otherwise in the server logs. Once the report is taken over, it offers "**Let in**", "**Link to another member**" (with the [Identity Update](#activity-alts)) and "**Refuse**", which applies your captcha failure action (kick, jail or block): the sanctions menu is not shown there.
- **Jail after attempts run out:** this jail has no duration and also opens a review report. "**Let in**" lifts the jail and verifies the member; otherwise, sanction them.
- **Device check refused:** the Activity asks the member for their consent before checking their device. If they refuse, they get the failure action as after attempts run out (kick, jail or block).
- **Activity that does not open:** the member can click "**Enter a code**". A correct code then goes to review by your team.
- **Data erasure:** a member can request the erasure of their verification data at [privacy@raidprotect.bot](mailto:privacy@raidprotect.bot). They then take the captcha again, and their sanctions remain.

#### Alt accounts spotted by the captcha <span className="badge-experiment">Experiment</span> {#activity-alts}

With the [Identity Update](./alt-accounts.md), the Activity also spots newcomers who are probably run by the same person as a member of your server:

- **Certain link:** the accounts are linked automatically in [`/alt`](./alt-accounts.md#alt). The captcha logs flag it, with an "**Unlink**" button.
- **Probable link:** if [One account per person](./alt-accounts.md#single-account) is on, the member goes to review. "**Link to another member**" links them in `/alt` and lets them in; if no account was spotted, a window asks you to choose the member ("**Account already on the server**"). Otherwise, the member gets in, and the captcha logs flag the probable link with a "**Link accounts**" button.
- **Certain link not applied:** nothing is linked automatically if an account in the group is on the server team, if the newcomer is linked to several `/alt` groups, or if both accounts already have their own group (two groups are never merged automatically). The link is then suggested to you in the same way.

Only accounts from your server are shown to you: nothing is said about other servers.

:::info Experiment: Identity Update
Alt account detection is part of the **Identity Update**, planned for version 3.7.0. Until its release, it is an experiment, in public beta for [Premium](/en/premium) servers.
:::

### Test mode {#test-mode}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Arrivals**" tab.
3. Click "**Configure**" next to "**Captcha**".
4. Click "**Enable**" next to "**Test mode**".

In Panel mode, an already verified team member (**Manage Server** permission, or the owner) can then click "**Verify**" to redo the captcha. Attempts and solving time apply as for a newcomer: the captcha log says what would have been done, nothing is applied.

### Difficulty {#difficulty}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Arrivals**" tab.
3. Click "**Configure**" next to "**Captcha**".
4. Click "**Edit**" next to "**Difficulty**".
5. Set the fields in the window, then confirm.

<SettingsModal name="captchaDifficulty" />

| Setting | Values | Default |
|---|---|---|
| "**Attempts**" | 1 to 10 attempts | 3 attempts |
| "**Action when attempts run out**" (Panel) | "**Attempts exhausted: Kick**", "**Attempts exhausted: Jail**" or "**Attempts exhausted: Block 10 min**" | Kick |
| "**Resolution Time**" (Panel) | Disabled, 15, 30 or 45 seconds, 1, 2, 3 or 5 minutes: the time given to solve the puzzle, counted from the first challenge (after the member's consent). An image code keeps at least 2 minutes | 30 seconds |
| "**Resolution time (before expulsion)**" (Challenge) | 3, 5, 10 or 15 minutes, or a value from 30 seconds to 15 minutes: after this time, the member is kicked | 5 minutes |

:::info
The "**Attempts exhausted: Jail**" choice puts the member in [jail](./sanctions.mdx#jail) instead of kicking them. This requires a Jail Role configured in the "**Moderation**" tab > "**Sanctions**". The "**Attempts exhausted: Block 10 min**" choice keeps the member on the server: they wait 10 minutes, then start over with fresh attempts.
:::

### Delay before kick {#timeout}

In Panel mode, this delay is counted from the member's arrival: if they are not verified in time, they get your failure action (kick, jail or block).

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Arrivals**" tab.
3. Click "**Configure**" next to "**Captcha**".
4. In "**Delay before kick**", choose "**Disabled**", 5, 15 or 30 minutes, or a "**Custom value**" from 30 seconds to 30 minutes.

:::warning
With the delay disabled, unverified accounts stay on the server and can DM your members. Set a delay, or close DMs with the [DM Lock](./dm-lock.mdx).
:::

### Captcha screen alerts {#alerts}

The captcha screen displays boxes when something prevents verification from working properly:
- **Channel invisible on arrival:** the verification channel is not in any default channel of Discord's Onboarding Process. Click "**Move into** _category_" or "**Create a new category**" so that we fix it, or follow the [Onboarding Process guide](../guides/onboarding.md).
- **@Unverified role leaks:** roles given by Discord's Onboarding Process at the same time as **@Unverified** bypass verification, the **@Unverified** role carries permissions, **@everyone** has the `ADMINISTRATOR` permission, or channels remain visible to members being verified (or in jail). The "**Fix**" button closes the channels concerned.
- **High verification level:** this Discord level makes members wait 10 minutes before they can write. The captcha already filters entry: the recommended level with the captcha is **Medium**.
- **Missing permissions:** RaidProtect needs `KICK_MEMBERS` and `MANAGE_ROLES`.

Once the problem is fixed, click "**Refresh**".

### Disable or delete the captcha {#disable}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Arrivals**" tab.
3. Click "**Configure**" next to "**Captcha**".
4. In "**Display Mode**", choose:
   - "**Disabled**" to suspend verification without losing any of your configuration;
   - "**Delete**" to erase the configuration and the verification role. RaidProtect asks you for confirmation.

:::tip
To make the captcha discreet outside raids, set its [trigger](#trigger) to **Automatic** rather than disabling it.
:::

## ✨ Additional features {#additional-features}

### Separate logs {#logs}

If your server is popular, captcha-related logs can clutter your main logs channel. You can move them to another channel.

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Arrivals**" tab.
3. Click "**Configure**" next to "**Captcha**".
4. Click "**Edit**" next to "**Logs**".
5. Choose the channel where captcha logs will be sent.

You can also find this setting in the "**Moderation**" tab > "**Logs**", on the "**Captcha**" line.

### Automatic role {#autorole}

The automatic role is no longer set in the captcha: it has joined the [Auto roles](./onboarding.md#autorole) of the "**Arrivals**" tab, which accept several roles. Your previous setting was carried over there automatically. When the captcha is active, these roles are given after the captcha is passed.

### Captcha bypass {#bypass}

Use the command: ```/bypass captcha [user]```

Replace `[user]` with the desired [identifier](../guides/id.mdx); that user will have 10 minutes to join the server without needing to solve the captcha. If the user is already present, the captcha will be resolved automatically. You can also use the command without specifying a user to see the current list of bypassed users.

## 🤝 Captcha and anti-raid, better together {#raid}

The captcha works with the other arrival protections:
- **[Auto RaidMode](./raid-mode.md#action):** with the "**Send to the captcha**" action, a wave's newcomers pass the captcha instead of being kicked. With "**Captcha frozen during the raid**", they wait behind the captcha and pass it after the wave.
- **[Minimum account age](./onboarding.md#minage):** the "**Hold at the gate**" action blocks an account that is too new on a captcha it can only solve once the age is reached.
- **[DISCON](./discon.md#captcha):** from level 4, the captcha is enabled if it is configured, even if you had disabled it. From level 3, it applies to all newcomers, whatever its trigger.

## Frequently asked questions {#faq}

### How long do members have to solve the captcha?

In Panel mode, the member has 3 attempts by default (1 to 10) and 30 seconds by default to solve the puzzle (can be disabled, up to 5 minutes), counted from the first challenge. No kick delay is applied by default, but you can set one of up to 30 minutes. In Challenge mode, they have 5 minutes by default (from 30 seconds to 15 minutes) before being kicked.

### What happens if a member fails the captcha?

When they use up their attempts, they are kicked from the server or, in Panel mode, put in jail or blocked for 10 minutes before they can try again if you chose that. After a kick, they can come back and try the captcha again.

### Are unverified members kicked automatically?

Not on a new captcha: in Panel mode, the delay before kick is disabled by default. Unverified members stay on the server without access to channels. Set a delay before kick, or close the server's DMs, to prevent them from writing privately to your members.

### Can the captcha be enabled only during a raid?

Yes. Set its trigger to **Automatic** and the Auto RaidMode action to "**Send to the captcha**" or "**Captcha frozen during the raid**". The rest of the time, newcomers enter directly.

### Does Discord Community need to be enabled to use the captcha?

No, the captcha works without Community. If it is enabled, check that the verification channel is among the default channels of the [Onboarding Process](../guides/onboarding.md).

### Can I exempt a member from the captcha?

Yes, with the `/bypass captcha [user]` command. The member has 10 minutes to join without solving the captcha, and if they are already present, the captcha is resolved automatically.

### Can I rename the @Unverified role and the #verification channel?

Yes, you can rename them freely. Do not delete them, as RaidProtect needs them to run the captcha and configures their permissions automatically.
