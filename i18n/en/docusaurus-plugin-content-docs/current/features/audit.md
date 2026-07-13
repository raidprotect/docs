---
title: Security audit
---

import AuditMockup from '@site/src/components/DiscordMessage/mockups/audit';

<AuditMockup />

The `/audit` command analyzes your Discord server's configuration and identifies security flaws: overly permissive permissions, insufficient verification level, unprotected administrator roles, etc. It then offers to fix most issues in one click.

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
| Server configuration | **Two-factor authentication (2FA) for moderation** |
| Server configuration | **Default notifications** |
| Server configuration | **Raid alerts** |
| Roles | **@everyone permissions** |
| Roles | **Self-assignable roles** |
| Roles | **Administrator roles** |
| Roles | **Administrator bots** |
| Channels | **Channel permissions for @everyone** |
| Channels | **Redundant channel permissions** |

If RaidProtect is missing permissions it needs to work properly, a dedicated warning is displayed in addition to the score. The audit ends with a "**Tips**" section that suggests enabling the RaidProtect protections that are still disabled ([HoneyPot](./honeypot.md), [Anti-spam](./anti-spam.mdx), [Auto RaidMode](./raid-mode.md), [DM Lock](./dm-lock.mdx)).

## 🔧 Fix flaws in one click {#fix}

Checks that can be fixed automatically display a "**Fix**" button:

| Check | Fix applied |
|---|---|
| Verification level | Sets the server's verification level to **High** |
| Explicit content filter | Enables the filter for **all members** |
| Default notifications | Sets default notifications to **@mentions only** |
| @everyone permissions | Removes sensitive permissions from the @everyone role |
| Redundant channel permissions | Cleans up unnecessary channel permissions ("**Fix all**") |

For **administrator roles** (and administrator bots), there is no automatic fix: the audit offers to protect them with the "**Integrate**" or "**Integrate all**" buttons, which add them to the [Authentication Manager](./authentication-manager.mdx).

:::warning
To apply the fixes, RaidProtect must have the `Manage Server` and `Manage Roles` permissions.
:::
