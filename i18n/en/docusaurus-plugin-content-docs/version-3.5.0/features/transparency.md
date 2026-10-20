---
title: Transparency
description: "RaidProtect's Transparency shows your members how the server is moderated: periodic recaps, a public modlog and the /transparency command."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import TransparencyMockup from '@site/src/components/DiscordMessage/mockups/transparency';

<TransparencyMockup />

Transparency lets you show your members how the server is moderated. It relies on three complementary elements: **periodic moderation recaps**, a **public modlog** and the **`/transparency` command**.

## 🛠️ Transparency configuration {#config}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Moderation**" tab.
3. Click "**Configure**" next to "**Transparency**".

The screen gives you access to the "**Periodic recaps**", the "**Public modlog**" and the "**/transparency command**" toggle.

<Settings start="transparency" />

## 📊 Periodic recaps {#recaps}

A recap is an aggregated summary of moderation actions, automatically published in a channel at the frequency of your choice.

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Moderation**" tab.
3. Click "**Configure**" next to "**Transparency**".
4. Click "**Configure**" next to "**Periodic recaps**".
5. Click "**Add**" next to a free slot.
6. The new recap's screen opens: set its **frequency**, its publication **channel**, optionally a role to **mention**, then click "**Enable**" to the right of the title.

To come back to a recap later, click "**Edit**" next to it in the list.

<Settings start="recaps" />

A new recap is created disabled, weekly, published around 08:00, in the public modlog's channel. The available frequencies are: **Weekly** (default), **Every two weeks**, **Monthly**, **Quarterly** and **Yearly**. Two recaps with the same frequency cannot be published in the same channel.

From a recap's screen, you can also:

- "**Rename**" the recap (leave the field empty to go back to the frequency's name);
- set its publication "**Schedule**" (see below);
- click "**Feed /transparency**" to make it the source of the [`/transparency` command](#command);
- "**Delete**" it.

The recap contains:
- the **total number of moderation actions** over the period;
- the breakdown by sanction type (bans, softbans, kicks, timeouts, mutes, jails, warns and other actions);
- the number of **scams blocked by [ScamLens](./scam-images.md)**;
- the split between **automatic** actions and **team** actions.

**Limits:** 1 recap in the free version, 5 recaps in the [Premium](/en/premium) version (for example a weekly recap for the team and a public monthly recap).

### Publication schedule {#recap-schedule}

1. On a recap's screen, click "**Schedule**".
2. In the window, choose the "**Publication time**" (local time, from `00:00` to `23:00`).

<SettingsModal name="recapSchedule" />

| Version | Publication time |
|---|---|
| Free | Within a 12-hour window starting from the chosen time |
| [Premium](/en/premium) | Around the chosen time, within 1 hour |

The chosen time follows the **server's time zone**, recalled below the "**Schedule**" row. It is set once for the whole server, in the "**General**" tab:

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**General**" tab.
3. Click "**Edit**" next to "**Timezone**".
4. Choose your offset in "**Timezone (UTC)**", or enter a "**Custom timezone (optional)**" like `Europe/Paris`, which takes priority and handles daylight saving time automatically.

<SettingsModal name="timezone" />

## 📢 Public modlog {#modlog}

The public modlog publishes **every moderation action** in a channel visible to your members, with only the information you choose to display.

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Moderation**" tab.
3. Click "**Configure**" next to "**Transparency**".
4. Click "**Configure**" next to "**Public modlog**".
5. Select a channel, or click "**Create one for me**" (RaidProtect creates the `public-modlog` channel, read-only for @everyone).
6. In "**Displayed information**", choose: "**Reason**", "**Moderator**", "**Duration**", "**Sanctioned member**" (default: Reason and Duration).
7. In "**Published sanctions**", choose: "**Manual (team)**" and/or "**Automated (RaidProtect)**" (default: both).
8. Click "**Enable**" to the right of the screen's title.

<Settings start="modlog" />

When the action is automatic and moderator display is enabled, the modlog shows "RaidProtect" instead of the moderator's name.

## 📜 The `/transparency` command {#command}

Use the command: ```/transparency```

It allows any member to view the **latest transparency report** for the closed period (ephemeral response, visible only to that member).

- The command must be enabled with the "**/transparency command**" toggle on the Transparency screen.
- If you have several recaps, the "**Feed /transparency**" button on a recap designates it as the source used by the command. This recap is marked with a ⭐ in the list.

## Frequently asked questions {#faq}

### How many recaps can I schedule?

Just one in the free version, up to five with [Premium](/en/premium).

### At what time is the recap published?

At the time you choose, in the server's time zone set in the "**General**" tab of `/settings`. In the free version, publication happens within a 12-hour window starting from that time; with Premium, within one hour.

### Do my members see who sanctioned them?

Only if you check "**Moderator**" in the public modlog's displayed information. For an automatic action, the modlog then shows RaidProtect.
