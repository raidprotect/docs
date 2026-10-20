---
title: Automod
description: "RaidProtect's Automod automatically removes scam images and references to other Discord servers: invites, forwarded messages, channel links and server tags."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect's **Automod** brings together the filters that automatically remove unwanted content as soon as it is posted. Each filter has its own sanction for the message's author.

To open it:

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Protection**" tab.
3. Click "**Configure**" next to "**Automod**".

<Settings start="automod" />

## 🖼️ Scam images {#images}

The **Images** filter deletes known scam images (crypto scams, fake giveaways, fake casino promotions) and sanctions their author. It is **enabled by default**, with nothing to configure.

All the details, the sanction and the image catalog are on the [Scam images](./scam-images.md) page.

## 🔗 Other servers <span className="badge-experiment">Experiment</span> {#servers}

The **Other servers** filter controls what points to other Discord servers: **invites**, **forwarded messages** and **channel links**, as well as the **server tags** displayed by your members. It blocks wild advertising and competing or malicious servers, without affecting your partners.

:::info Experiment: Shield Update
The Other servers filter is part of the **Shield Update**, planned for version 3.6.0. Until its release, it is an experiment, in public beta for [Premium](/en/premium) servers.
:::

### How does it work? {#servers-working}

Three behaviors are set separately, each on one of these modes:

- "**Disabled**": nothing is filtered.
- "**Blocklist**": the servers on the list are refused, the others get through.
- "**Allowlist**": only the servers on the list get through, all the others are refused.

| Behavior | What happens if it is refused |
|---|---|
| **Invite** | The message containing the invite is deleted. `ptb.` and `canary.` links count too, and invites hidden in an embed, a component or a forwarded message are read, as are messages edited afterward. |
| **Forwarded message or channel link** | The message forwarded from that server, or containing a link to one of its channels, is deleted. |
| **Displayed server tag** | The member is put in **quarantine** with the [Jail role](./sanctions.mdx#jail). It is lifted as soon as they remove the tag. |

Your own server always gets through, by any of its invites, and your team (**Manage Server** or **Manage Messages** permissions) is never targeted.

### Configuration {#servers-config}

1. In Automod, click "**Configure**" next to "**Other servers**".
2. Enable the filter with the switch at the top right, then choose a mode for each behavior.

<Settings start="serverRefs" />

#### Friend and group invites <span className="badge-premium">Premium</span> {#servers-private}

A friend or private group invite leads to no server. Under the "**Invite**" mode (as soon as it is not on "**Disabled**"), the "**Friend and group invites**" selector sets their fate separately:

- "**Follow the list**" *(default)*: they get through with a blocklist and are deleted with an allowlist.
- "**Always allowed**": accepted, whatever the list.
- "**Always removed**": deleted, whatever the list.

Without Premium, they always follow the list.

### Sanction {#servers-sanction}

Each refused message is deleted. In "**Sanction for deleted messages**", also choose a sanction for its author, or "**Message deleted only**". For a timeout, a mute, a jail or a ban, also choose its duration.

The sanction applies at most once per minute and per member: a member who pastes several invites in a row is only sanctioned once.

### Server lists {#servers-lists}

1. Click "**Add a server**".
2. Paste a still-valid invite to the server (e.g., `discord.gg/example`): its name and ID are read from it. An ID alone is no longer accepted.
3. Choose the list: blocklist or allowlist.

A server that is already present simply changes list. "**Remove**" takes one or more servers off the lists.

**Limits:** 25 servers in total across both lists.

:::tip
To only allow your partners' invites, set "**Invite**" to "**Allowlist**" and add your partners to the allowlist. An empty allowlist refuses all invites to other servers.
:::

### Logs {#servers-logs}

Each sanction and each quarantine is noted in your [moderation logs](./moderation.mdx#logs), with the server and channel concerned. A message deleted without a sanction ("**Message deleted only**") is also noted. Sanctions appear in the [sanctions history](./sanctions.mdx), with the reasons "Invite to a refused server", "Friend or group invite refused" (Premium), "Forwarded message or channel link from a refused server" or "Tag of a refused server".

## Frequently asked questions {#faq}

### Can my partners still share their invite?

Yes. Add them to the Other servers filter's allowlist, or leave them off the blocklist.

### What happens when a member removes the refused tag?

Their quarantine is lifted automatically.

### Are moderators filtered?

No. Members who have the Manage Server or Manage Messages permission are never targeted by the Other servers filter.
