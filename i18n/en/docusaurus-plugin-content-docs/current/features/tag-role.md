---
title: Tag Role
description: "RaidProtect's Tag Role automatically grants a role to members who display your Discord server's tag, rewarding their engagement."
---

import TagRoleMockup from '@site/src/components/DiscordMessage/mockups/tag-role';
import TagRoleConceptMockup from '@site/src/components/DiscordMessage/mockups/tag-role-concept';

<TagRoleConceptMockup />

The Tag Role automatically assigns a role to members who add [your server's tag](https://support.discord.com/hc/en-us/articles/31444248479639-Server-Tags) to their Discord profile. By assigning a role to these members, you acknowledge their commitment and [encourage them to actively represent your server](https://dfr.gg/blog/2025/05/09/revolution-boosts-tags-serveur-publics#tags). It's a simple yet effective way to strengthen collective identity while rewarding your community's most loyal ambassadors.

## ❓ How the Tag Role works {#working}

It's simple. As soon as a member adds the server tag to their Discord profile, RaidProtect automatically assigns them a specific role.
If the member removes the tag, the role is removed.

:::info
If the Tag is not enabled or your server doesn't yet have the feature, the Tag Role will have no effect.
:::

## 🎖️ Configuring the Tag Role {#config}

Configuration takes just a few clicks:
1. Use the [`/settings` command](../setup.md#settings).
2. Click the "**Tag Role**" button.
3. Select an existing role via the selector or click "**Create one for me**".
4. You can deselect the role at any time by clicking the "**Reset**" button.

<TagRoleMockup />

:::tip
Members will receive the role the next time they update their profile (Username, Avatar, Banner, Roles, Tag...).
:::

## 🔄 Role synchronization {#sync}

To immediately assign the role to all members who already have the tag (and remove it from those who no longer have it), use the "**Sync**" button in the Tag Role configuration:

- **Free**: one sync included, once per server.
- **Premium**: one sync per week.

The sync runs in the background and continues even if the bot restarts. Only one sync can be running at a time on a server.

:::note
The "Sync" button is being rolled out gradually. If it is not yet available on your server, you can [ask support](https://raidprotect.bot/discord) for a full role sync.
:::
