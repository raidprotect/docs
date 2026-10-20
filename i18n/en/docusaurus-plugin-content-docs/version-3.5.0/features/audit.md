---
title: Security audit
description: "RaidProtect's /audit command analyzes your Discord server's security, spots configuration weaknesses and offers to fix them in one click."
---

import AuditMockup from '@site/src/components/DiscordMessage/mockups/audit';

<AuditMockup />

The `/audit` command analyzes your Discord server's configuration and identifies security flaws: overly permissive permissions, insufficient verification level, [unprotected administrator roles](/en/learn/least-privilege), etc. It then offers to fix most issues in one click.

Use the command: ```/audit```

:::info
The command is restricted to members with the `Administrator` permission. The report is only visible to you (ephemeral response).
:::

## ❓ How the audit works {#working}

RaidProtect gives your server an **overall score out of 100**, along with a grade (from **S** to **E**) and a rating: **Excellent** (90 and above), **Good** (70 and above), **Needs improvement** (40 and above) or **Critical** (below 40).

The report is split into three categories, each with its own score:

- **Server configuration**
- **Roles**
- **Channels**

Click a category's "**Details**" button to see the result of each check, then "**Back**" to return to the report. The "**Refresh**" button re-runs the analysis after your changes.

### Checks performed {#checks}

| Category | Check |
|---|---|
| Server configuration | **Verification level** |
| Server configuration | **Explicit content filter** |
| Server configuration | **Two-factor authentication for moderation** |
| Server configuration | **Default notifications** |
| Server configuration | **Raid alerts** |
| Server configuration | **DM Lock (public server)** * |
| Server configuration | **Number of bots** * |
| Roles | **@everyone permissions** |
| Roles | **Self-assignable roles** |
| Roles | **Roles granted by invites** |
| Roles | **Administrator roles** |
| Roles | **Administrator bots** * |
| Channels | **Channel permissions for @everyone** |
| Channels | **Redundant channel permissions** |
| Channels | **Team role speaking allows** * |
| Channels | **Old webhooks** * |

Checks marked with a `*` are **advisory**: they appear in the report but do not affect the score. **DM Lock (public server)** only appears on community or public servers.

A few details on these checks:

- **Self-assignable roles**: these are roles a member obtains without a moderator, with their source: Discord's Onboarding Process, RaidProtect's [auto role](./onboarding.md#autorole), boost, subscription, integration or linked role.
- **Team role speaking allows**: a role that carries a moderation permission and that has, on some channels, speaking overrides (write, speak...) already covered elsewhere. We keep them, because they let the team keep speaking during a [`/lock`](./channel-lock.md) or at level 1 of [DISCON](./discon.md). Just check that each listed role really is a team role: otherwise, it escapes lockdowns.

If RaidProtect is missing permissions it needs to work properly, a dedicated warning is displayed in addition to the score. A check that requires a missing permission (for example Manage Webhooks) is flagged as not evaluated.

:::info
If RaidProtect cannot see some channels of your server, the report displays an "**Incomplete analysis**" box: these channels are not analyzed and the score only covers the rest.
:::

## 🔧 Fix flaws in one click {#fix}

Checks that can be fixed automatically display a "**Fix**" button:

| Check | Fix applied |
|---|---|
| Verification level | Sets the server's verification level to **Medium** ("Medium" or higher passes, "Low" gives a warning, "None" a failure) |
| Explicit content filter | Enables the filter for **all members** |
| Default notifications | Sets default notifications to **@mentions only** |
| @everyone permissions | Removes sensitive permissions from the @everyone role |
| Redundant channel permissions | Opens the list of channels to clean up, then "**Fix all**" |

For **administrator roles**, there is no automatic fix: the audit offers to protect them with the "**Integrate**" or "**Integrate all**" buttons, which add them to the [Authentification Manager](./authentication-manager.mdx).

:::warning
To apply the fixes, RaidProtect must have the `Manage Server` and `Manage Roles` permissions.
:::

### Redundant channel permissions {#redundant}

A channel permission is **redundant** when it changes nothing: it is already granted at the server level, already granted by the channel's @everyone permission, or it is a denial with no effect. It then has to be changed in several places to really take effect, which creates blind spots.

The list details, channel by channel, each permission and the reason why it is redundant:

- A channel's "**Ignore**" button removes it from the list, from the score and from "**Fix all**". You can restore it from the "**Ignored items**".
- Fixing a category also fixes the channels synced to it.
- The permissions of an **Administrator** role are listed separately, under "**No effect on an Administrator role**": Discord ignores them, and we never remove them, because they will apply if that role loses Administrator.

The analysis takes into account lockdowns in progress, by [`/lock`](./channel-lock.md) or by [DISCON](./discon.md).

## ✅ Dismiss a deliberate alert {#ignore}

Some alerts reflect deliberate choices: a trusted administrator role, a permission knowingly left to `@everyone`, and so on. The "**Mark as OK**" button, available in a category's details, lets you choose an item and then "**Ignore**" it.

A dismissed alert disappears from the report and no longer counts against your score. You can review the list of dismissed items at any time (the "**Ignored items**" button) and restore any of them with "**Restore**" or "**Restore all**".

## Frequently asked questions {#faq}

### Why is the "Medium" verification level enough?

The "Medium" level already rules out accounts created less than 5 minutes ago, which blocks most throwaway accounts. It is therefore the level the "**Fix**" button applies.

### Why doesn't the audit remove channel permissions from my administrator roles?

Discord ignores the channel permissions of a role that has Administrator. We list them separately without removing them: they will take effect again if that role loses Administrator.

### Can I exclude a channel from the redundant permissions analysis?

Yes: click "**Ignore**" next to the channel in the list of redundant permissions. It no longer counts in the score and you can restore it from the ignored items.
