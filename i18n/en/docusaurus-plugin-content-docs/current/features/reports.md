---
title: Reports
---

The RaidProtect reporting system allows your community to quickly report any problematic content or suspicious users. It operates in two different ways and can be configured to optimize the reporting management process.

## ❓ How Reporting Works {#working}
Members can report content through 3 main methods.

1. **Right-click on a message**  
A member can right-click on a message they believe violates the rules, select **`Applications`**, and then click on **`Report Message`**. A popup will appear, allowing the user to add an explanation.

2. **Right-click on a profile**  
Similarly, a member can right-click on a profile they find problematic, choose **`Applications`**, and then click on **`Report Member`**. A popup will then open to allow the user to provide additional details about the situation.

3. **Slash Command**  
Members can also report a message or user via the **`/report`** command in any server channel.

Use the command: ```/report [@user] [reason]```

Replace `[@user]` with the desired user and `[reason]` with the reason for the infraction.

## 🚩 Configuring Reports {#config}

Before the reporting system is fully operational, it is imperative to configure a **report channel** where all reports will be sent. You need to set up a log or notification channel to receive alerts regarding reports.

### Setting Up the Channel {#config-channel}

1. Use the [command `/settings`](../setup.md#settings).
2. Select the **Reports** button.
3. Click on the **Channel** button.
4. Choose the desired channel (_e.g., #reports or #signalements_).  
If you do not have a suitable channel, you can opt to create one automatically using the **Create one for me** button.

[Screenshot report settings](../assets/rpBeta-settings-reports.webp)

### Configuring the Notification Role {#config-role}

1. Use the [command `/settings`](../setup.md#settings).
2. Select the **Reports** button.
3. Click on the **Role** button.
4. Choose the desired role (_e.g., @Moderator or @Report Notifs_).  
If you do not have a suitable role, you can opt to create one automatically with the **Create one for me** button.

:::warning
The channel should be restricted to moderators and administrators to ensure proper management of reports.
:::

## Managing Reports {#manage}

As a community moderator, you can choose to accept or reject a report.

- **✅ Accept a report:** If the report is valid, click the “Accept” button under the alert. This button does not trigger any specific action but indicates to other moderators that you consider this report to be handled, fostering coordination and organization.

- **👁️ View Context:** To view the reported message and see the context, click “View Message” under the alert.

- **❌ Reject a report:** If the report is not legitimate, click the “Reject” button under the alert. Similar to the “Accept” button, no specific action is associated with this button; it merely informs other moderators of your decision.

:::note
Ensure that your moderators are well-trained in using this feature and encourage your active members to use it responsibly!
:::