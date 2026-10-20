---
title: Reports
description: "RaidProtect's report system lets your community flag suspicious content and members, with a clear handling flow for your moderators."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import ReportsMockup from '@site/src/components/DiscordMessage/mockups/reports';

<ReportsMockup />

The RaidProtect reporting system lets your community flag any suspicious message or member to your moderators in a few clicks, through a right-click, a dedicated button or the `/report` command. It can be configured to streamline how your team handles reports.

## ❓ How do reports work? {#working}
Members can report content through 4 main methods.

1. **Right-click on a message**
A member can right-click on a message they believe violates the rules, select **`Apps`**, then click **`Report Message`**. A window opens, in which they state the reason for the report.

2. **Right-click on a profile**
Similarly, a member can right-click on a profile they find problematic, choose **`Apps`**, then click **`Report User`**. A window then opens, allowing them to specify what they are reporting (profile picture, username, bio, voice activity, DM activity) and the reason.

3. **Button on an information panel**
If the "Reports" feature is enabled on an [information panel (`/display public`)](./display.mdx), a "**Report a member**" button is available directly below the panel, allowing members to quickly report a user.

4. **Slash command**
Members can also report a user via the **`/report`** command in any server channel.

Use the command: ```/report (member)```

Replace `(member)` with the desired user. The reason is then entered in a window, as with the right-click on a profile.

:::info
Enabling reports also enables [message caching](./moderation.mdx#snipe): RaidProtect keeps an hour of messages in memory to attach the reported content to the alert.
:::

## 🚩 Configuring reports {#config}

Reports arrive in a **report channel**. If you do not choose one, they are sent to your general logs channel. All settings are on a single screen:

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Moderation**" tab.
3. Click "**Configure**" next to "**Reports**".
4. Click "**Enable**" to the right of the screen's title to turn on the reporting system.

<Settings start="reports" />

### Setting up the channel {#config-channel}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Moderation**" tab.
3. Click "**Configure**" next to "**Reports**".
4. Click "**Edit**" next to "**Receiving reports**".
5. In the window, select the desired channel (_e.g., #reports_), or check "**Create a channel for me**" so that RaidProtect creates a private `reports` channel.

If you select no channel, or the logs channel, reports follow your general logs channel.

<SettingsModal name="reportChannel" />

### Configuring the notification role {#config-role}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Moderation**" tab.
3. Click "**Configure**" next to "**Reports**".
4. Click "**Edit**" next to "**Notification role**".
5. In the window, select the desired role (_e.g., @Moderator or @Report Ping_), or check an "**Other mention**": `@everyone`, `@here` or "**Create a role for me**" (RaidProtect creates the `New report` role).

Without a configured role, `@here` is mentioned.

<SettingsModal name="reportRole" />

:::warning
The channel should be restricted to moderators and administrators to ensure proper handling of reports.
:::

### Report grouping {#group}

The "**Grouping**" toggle determines how multiple reports targeting the same member are presented:

- **Enabled** *(default)*: reports targeting the same member are grouped into a single alert.
- **Disabled**: each report creates its own separate alert.

Click "**Enable**" or "**Disable**" next to "**Grouping**" in the Reports screen.

<a id="config-notify"></a>

### Reporter notification {#notify}

The "**Edit**" button next to "**Reporter notification**" opens a window in which you choose what the member who submitted the report receives by DM once their report is handled:

| Level | Effect |
|---|---|
| **Disabled** | Reporters do not receive any notification. |
| **Handled only** *(default)* | The reporter is told that their report has been handled. |
| **With outcome** | The reporter is told whether the report was accepted or rejected. |
| **With moderator** | The reporter is also told which moderator handled the report. |

The reporter only receives one message per report, even if it was grouped with others.

<SettingsModal name="reportNotify" />

<a id="config-trusted-role"></a>

### Trusted role <span className="badge-premium">Premium</span> {#trusted-role}

The "**Trusted role**" allows your most reliable members to act immediately in an emergency: when a member with this role submits a report, they can check the "**Preventive action**" option to apply a **preventive 24-hour timeout** to the reported user, until a moderator handles the report.

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Moderation**" tab.
3. Click "**Configure**" next to "**Reports**".
4. Click "**Edit**" next to "**Trusted role**".
5. In the window, select the role, or check "**Create a role for me**" (RaidProtect creates the `Trusted reporter` role). Leave the field empty to disable the trusted role.

How the preventive timeout works:

- The preventive timeout is **silent**: the reported user does not receive a DM until a moderator has confirmed the sanction.
- Its reason is "**Preventive sanction:**" followed by the report's reason.
- If the report targets a message, that message is deleted.
- The alert is marked as urgent: the mention is preceded by "**🛑 Urgent report**".
- The sanction is tied to the report: the moderator who handles it can confirm or cancel it.

:::info
This feature is reserved for [**Premium**](/en/premium) servers.
:::

### Reporter reputation {#bad-reporters}

The "**Edit**" button next to "**False reporters**" opens the "**Reporter reputation**" window, which lets you act on members whose reports are regularly rejected:

- **Threshold**: number of rejected reports before action (3, 5, 6, 10 or 15; "**Disabled**" by default).
- **Window**: calculation period (7, 14, 30, 60 or 90 days; 30 days by default).
- **Action** once the threshold is reached:
  - "**Notify moderators**" *(default)*: an alert is sent with a "**Block reports**" button and a sanction button (e.g., "**Warn the reporter**").
  - "**Auto-block**": the member can no longer submit reports.
  - "**Auto-sanction**": the configured sanction is applied.
  - "**Block and sanction**": combines the two previous actions.
- **Sanction**: the sanction applied to the false reporter (Warn by default, Timeout, Mute, Kick or Ban).

<SettingsModal name="reportBad" />

:::info
Without a configured [Mute role](./sanctions.mdx#mute), the Mute sanction falls back to a timeout.
:::

:::tip
You can also manually block a member from reporting at any time with the [`/block` command](./utilities.mdx#block).
:::

## Managing reports {#manage}

Each report arrives in the configured channel as an alert with several actions:

- **🙋 Take charge:** Click "**Take charge**" to let other moderators know you are handling this report. The button then becomes "**Taken charge of**".

- **✅ Resolved:** If the report is valid but no sanction is needed (the situation was settled another way: a verbal warning, the message was deleted by its author...), click "**Resolved**". The report is marked as accepted, without sanctioning the reported user. To apply a sanction, use the "**Sanction this member…**" menu below instead.

- **❌ Reject:** If the report is not legitimate, click "**Reject**". Rejections are counted toward the [reporter reputation](#bad-reporters).

- **⚖️ Sanction:** The "**Sanction this member…**" menu, available once someone has taken charge of the report, lets you directly apply a sanction to the reported user, without leaving the report channel.

When [grouping](#group) is enabled, later reports targeting the same member are added to the existing alert (for example "**3 messages & 1 profile reported by 2 users**") instead of creating a new one.

:::note
Make sure your moderators are well trained in using this feature and encourage your active members to use it responsibly!
:::

## Frequently asked questions {#faq}

### How do I report a member or a message?

A member can right-click on a message or a profile, choose "Apps" then "Report Message" or "Report User". They can also use the button on an information panel, or the `/report (member)` command in any channel: the reason is then entered in a window.

### Where do reports go?

They are sent to the report channel you configure, or failing that to your general logs channel. This channel should be restricted to moderators and administrators to ensure reports are handled properly.

### Which role is mentioned on each report?

The notification role you configure, or `@everyone`. Without a setting, RaidProtect mentions `@here`.

### How do I limit false reports?

The "False reporters" setting acts on members whose reports are regularly rejected. You set a threshold and a calculation window, then an action: notify moderators, block reports, sanction or both. You can also block a member manually with the [`/block` command](./utilities.mdx#block).
