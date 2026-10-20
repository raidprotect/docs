---
title: Alt Accounts
description: "RaidProtect's alt accounts link the accounts of a single person on your Discord server: banning one bans the others, with no way around it."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

**Alt accounts** let your team declare that several Discord accounts belong to the same person. The [sanctions](./sanctions.mdx) of one then extend to the others: a banned member can no longer come back with a second account to get around their sanction.

:::info Experiment: Identity Update
Alt accounts are part of the **Identity Update**, planned for version 3.7.0. Until its release, they are an experiment, in public beta for [Premium](/en/premium) servers.
:::

## ❓ How does it work? {#working}

- **One group per person**: a group gathers the accounts your team considers to be the same person. Groups are specific to your server: nothing is shared with other servers.
- **Shared sanctions** ([Premium](/en/premium)): ban, kick, mute, jail and timeout extend to the other accounts of the group, according to the [mode](#modes) you choose for each sanction. The sanction stays in the name of the targeted account, the others receive its status. Without Premium, accounts can be linked and viewed, but no sanction extends: the sanction log then mentions the member's other accounts.
- **Shared removal**: removing the sanction of any one of the accounts removes it for all of them, with or without Premium.
- **Grouped search**: [searching the sanctions](./sanctions.mdx#search) of an account also shows those of the other accounts in the group.
- **Discord's AutoMod**: timeouts and mutes applied by Discord's AutoMod also extend to linked accounts.
- **Spotted by the captcha**: the [captcha Activity](./captcha.md#activity-alts) can link two accounts it is sure are the same person by itself, or suggest the link to your team.
- **Logs**: links, removals and changes of main account are recorded in the [moderation logs](./moderation.mdx#logs).

**Limits:** none, neither on the number of accounts per group nor on the number of groups.

## 🔗 Link accounts with /alt {#alt}

Use the command: ```/alt [user] [other]```

- Without options: displays the list of linked account groups on the server. The "**Link accounts**" button links two server members, or two accounts that are not on the server by their IDs.
- With `[user]`: displays the group of this account, or this account alone if it is not linked to any other. Each account appears there with its status (banned from the server, on the server, not on the server, quarantined), the main account first.
- With `[user]` and `[other]`: directly links the two accounts, declared as the same person.

Replace `[user]` and `[other]` with the mention or [ID](../guides/id.mdx) of the desired accounts. Bots cannot be linked.

From a group's panel:

- "**Link a member**" adds an account to the group: a server member, or the Discord ID of an account that is not on the server.
- The "**Edit an account in the group**" selector opens a window to make it the "**Main account of the group**" or to "**Remove this account from the group**". A removed account is no longer treated as the same person, but if it was banned along with the group, it stays banned.

You can also find a member's linked accounts in the [`/modview` moderation view](./moderation.mdx#modview), with the "**Manage**" button.

:::info
The `/alt` command and its buttons require the **Ban Members** permission.
:::

## 🛠️ Alt accounts configuration {#config}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Moderation**" tab.
3. Click "**Configure**" next to "**Duplicate accounts**".

<Settings start="alts" />

### Linked account sanctions <span className="badge-premium">Premium</span> {#modes}

For each sanction, choose how it extends to the group:

1. On the Duplicate accounts screen, click "**Edit**" next to "**Linked account sanctions**".
2. In the window, choose a mode for each sanction.

The "**Set everything to…**" selector on the screen applies the same mode to all sanctions at once.

<SettingsModal name="altsModes" />

| Mode | Effect | Sanctions concerned |
|---|---|---|
| "**Immediately**" *(default)* | Ban: all linked accounts are banned right away, present or not. Kick: linked accounts present on the server are kicked too. Mute, jail and timeout: present accounts are sanctioned right away, the others when they arrive. | All |
| "**Present now, the others on arrival**" | Present accounts are banned right away, absent accounts are banned if they join the server during the ban. | Ban |
| "**Trap**" | Only the targeted account is sanctioned. Another account of the group that arrives or writes during the sanction is taken for evasion and receives the [evasion sanction](#evasion). | All except kick |
| "**Disabled**" | The sanction only targets the chosen account. | All |

### Group sanction {#group-sanction}

When a sanction extends to several accounts, it appears in the history ([`/sanctions`](./sanctions.mdx#search), `/modview`) as **a single group sanction** (for example "**Group ban**"), which lists the accounts concerned ("**Accounts**") with the status of each. Each account keeps its own line, marked "Part of group sanction". Canceling, deleting or editing (reason, duration) the group sanction acts on all accounts at once. An account only sees its own line in `/my-sanctions`.

### Evasion sanction {#evasion}

The evasion sanction applies to a linked account caught in "**Trap**" mode: it arrives on the server or writes there during its group's sanction.

1. On the Duplicate accounts screen, click "**Edit**" next to "**Evasion sanction**".
2. In the window, choose the "**Sanction**" and, if needed, its "**Duration**".

<SettingsModal name="altsEvasion" />

- "**Rest of the sanction**" *(default)*: the account shares the group's sanction until it ends, with no sanction in its own name.
- **A sanction** (Ban, Kick, Mute, Jail or Timeout): it is applied in its name, with its own duration, and is not removed with the group. Leave the duration empty for a permanent sanction (e.g., `1h`, `3d`, `2w`).

:::info
A timeout always requires a duration, of 28 days at most. Mute and jail require their [role](./sanctions.mdx#config) to be configured.
:::

### One account per person {#single-account}

With this setting, only the **main account** of each group moves around the server. The other accounts are put in **quarantine** with the [jail role](./sanctions.mdx#jail) ("**Quarantine**" sanction in the history). They leave it on their own if they become the main account or if they are removed from the group.

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Moderation**" tab.
3. Click "**Configure**" next to "**Duplicate accounts**".
4. Click "**Enable**" next to "**One account per person**".

:::warning
This setting requires a [Jail role](./sanctions.mdx#jail). Without it, RaidProtect refuses to enable it.
:::

To change a group's main account, use `/alt` with one of the accounts, then the "**Edit an account in the group**" selector.

## Frequently asked questions {#faq}

### Are alt accounts shared between servers?

No. Groups are specific to your server and nothing is shared with other servers.

### What happens when I unban one of the accounts?

Removing the sanction of one of the accounts removes it for all accounts in the group.

### Can I link an account that is not on my server?

Yes. In the `/alt` panel, click "**Link a member**" and enter its Discord ID.

### Who can use /alt?

Members who have the **Ban Members** permission, on a [Premium](/en/premium) server while the Identity Update is an experiment.
