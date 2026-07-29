---
title: Reports
description: "RaidProtect's report system lets your community flag suspicious content and members, with a clear handling flow for your moderators."
---

import { ReportsSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

import ReportsMockup from '@site/src/components/DiscordMessage/mockups/reports';

<ReportsMockup />

The RaidProtect reporting system allows your community to quickly report any problematic content or suspicious user. It operates in two different ways and can be configured to optimize the report management process.

## ❓ How reports work {#working}
Members can report content through 4 main methods.

1. **Right-click on a message** 
A member can right-click on a message they believe violates the rules, select **`Apps`**, then click **`Report Message`**. A popup will open, allowing the user to add an explanation.

2. **Right-click on a profile** 
Similarly, a member can right-click on a profile they find problematic, choose **`Apps`**, then click **`Report Member`**. A popup will then open, allowing the user to specify what they are reporting (profile picture, username, bio, voice activity, DM activity) and provide additional details.

3. **Button on an information panel**
If the "Reports" feature is enabled on an [information panel (`/display public`)](./display.mdx), a "Report" button is available directly below the panel, allowing members to quickly report a user.

4. **Slash command**
Members can also report a message or a user via the **`/report`** command in any server channel.

Use the command: ```/report (member) (reason)```

Replace `(member)` with the desired user and `(reason)` with the reason for the infraction.

## 🚩 Configuring reports {#config}

Before the reporting system is fully operational, you must configure a **report channel** where all reports will be sent. You need to set up a log or notification channel to receive alerts about reports.

<ReportsSettingsMockup />

### Setting up the channel {#config-channel}

1. Use the [`/settings` command](../setup.md#settings).
2. Select the "**Reports**" button.
3. Click the "**Channel**" button.
4. Select the desired channel (_e.g. #reports_). 
If you do not have a suitable channel, you can create one automatically using the "**Create one for me**" button.

### Configuring the notification role {#config-role}

1. Use the [`/settings` command](../setup.md#settings).
2. Select the "**Reports**" button.
3. Click the "**Role**" button.
4. Select the desired role (_e.g. @Moderator or @Report Ping_). 
If you do not have a suitable role, you can create one automatically using the "**Create one for me**" button.

:::warning
The channel should be restricted to moderators and administrators to ensure proper handling of reports.
:::

### Report grouping {#group}

The "**Grouping**" button determines how multiple reports targeting the same member are presented:

- **Enabled**: reports targeting the same member are grouped into a single alert.
- **Disabled**: each report creates its own separate alert.

### Reporter notification {#notify}

Using the "**Reporter notification**" button, you choose what feedback the member who submitted the report receives:

| Level | Effect |
|---|---|
| **Disabled** | Reporters do not receive any notification. |
| **Handling only** | The reporter is told that their report has been handled. |
| **With the outcome** | The reporter is told whether the report was accepted or rejected. |
| **With the moderator** | The reporter is also told which moderator handled the report. |

### Trusted role (Premium) {#trusted-role}

The "**Trusted role**" allows your most reliable members to act immediately in an emergency: when a member with this role submits a report, they can check the "**Preventive action**" option to apply a **preventive 24-hour timeout** to the reported user, until a moderator handles the report.

- The preventive timeout is **silent**: the reported user does not receive a DM until a moderator has confirmed the sanction.
- If the report targets a message, that message is deleted.
- The sanction is tied to the report: the moderator who handles it can confirm or cancel it.

:::info
This feature is reserved for [**Premium**](/en/premium) servers.
:::

### Reporter reputation {#bad-reporters}

The "**Bad reporters**" button lets you act on members whose reports are regularly rejected:

- **Threshold**: number of rejected reports before action (3, 5, 6, 10 or 15; 0 to disable).
- **Window**: calculation period (7, 14, 30, 60 or 90 days).
- **Action** once the threshold is reached:
  - **Notify moderators**: an alert is sent with a "**Block reports**" button and sanction buttons.
  - **Block automatically**: the member can no longer submit reports.
  - **Sanction automatically**: the configured sanction is applied.
  - **Block and sanction**: combines the two previous actions.
- **Sanction**: the sanction applied in automatic mode (Warn, Timeout, Mute, Kick or Ban).

:::tip
You can also manually block a member from reporting at any time with the [`/block` command](./utilities.mdx#block).
:::

## Managing reports {#manage}

Each report arrives in the configured channel as an alert with several actions:

- **🙋 Take charge:** Click "**Take charge**" to let other moderators know you are handling this report. The button then becomes "**Taken charge of**".

- **✅ Resolved:** If the report is valid but no sanction is needed (the situation was settled another way: a verbal warning, the message was deleted by its author...), click "**Resolved**". The report is marked as accepted, without sanctioning the reported user. To apply a sanction, use the "**Sanction this member…**" menu below instead.

- **❌ Reject:** If the report is not legitimate, click "**Reject**". Rejections are counted towards the [reporter reputation](#bad-reporters).

- **⚖️ Sanction:** The "**Sanction this member…**" menu below the alert lets you directly apply a sanction to the reported user, without leaving the report channel.

:::note
Make sure your moderators are well trained in using this feature and encourage your active members to use it responsibly! 
:::
