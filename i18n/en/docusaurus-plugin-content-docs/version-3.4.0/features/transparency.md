---
title: Transparency
description: "RaidProtect's Transparency shows your members how the server is moderated: periodic recaps, a public modlog and the /transparency command."
---

import TransparencyMockup from '@site/src/components/DiscordMessage/mockups/transparency';

<TransparencyMockup />

Transparency lets you show your members how the server is moderated. It relies on three complementary elements: **periodic moderation recaps**, a **public modlog** and the **`/transparency` command**.

## 🛠️ Transparency configuration {#config}

1. Run the [`/settings` command](../setup.md#settings).
2. Click the "**Transparency**" button.

The menu gives you access to the "**Periodic recaps**", the "**Public modlog**" and the "**Transparency command**" toggle button.

## 📊 Periodic recaps {#recaps}

A recap is an aggregated summary of moderation actions, automatically published in a channel at the frequency of your choice.

1. In the Transparency menu, click "**Periodic recaps**".
2. Click "**Add a recap**".
3. Configure the recap: the **frequency**, the publication **channel** and optionally a role to **mention**.

The available frequencies are: **Weekly** (default), **Every two weeks**, **Monthly**, **Quarterly** and **Yearly**. A preview of the recap is posted in the channel as soon as you set it up.

The recap contains:
- the **total number of moderation actions** over the period;
- the breakdown by sanction type (bans, softbans, kicks, timeouts, mutes, jails, warns and other actions);
- the number of **scams blocked by [ScamLens](./scam-images.md)**;
- the split between **automatic** actions and **team** actions.

:::info
On the free plan, you can configure **a single recap**. **Premium** servers can create several at the same time (for example a weekly recap for the team and a public monthly recap).
:::

## 📢 Public modlog {#modlog}

The public modlog publishes **every moderation action** in a channel visible to your members, with only the information you choose to display.

1. In the Transparency menu, click "**Public modlog**".
2. Select a channel, or let RaidProtect create one for you (named "**public-modlog**", read-only for @everyone).
3. Choose the **displayed elements**: "**Reason**", "**Moderator**", "**Duration**", "**Sanctioned member**".
4. Choose the included **sources**: "**Manual (team)**" and/or "**Automatic (RaidProtect)**".

When the action is automatic and moderator display is enabled, the modlog shows "RaidProtect" instead of the moderator's name.

:::note
Publishing is deliberately rate-limited to avoid flooding the channel during a raid: messages are sent gradually.
:::

## 📜 The `/transparency` command {#command}

Use the command: ```/transparency```

It allows any member to view the **latest transparency report** for the closed period (ephemeral response, visible only to that member).

- The command must be enabled via the "**Transparency command**" button in the Transparency menu.
- If you have several recaps, the "**Feed /transparency**" button on a recap designates it as the source used by the command.
