---
title: Tag Role
description: "RaidProtect's Tag Role automatically grants a role to members who display your Discord server's tag, rewarding their engagement."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';
import TagRoleConceptMockup from '@site/src/components/DiscordMessage/mockups/tag-role-concept';

<TagRoleConceptMockup />

The Tag Role automatically assigns a role to members who add [your server's tag](https://support.discord.com/hc/en-us/articles/31444248479639-Server-Tags) to their Discord profile. By assigning a role to these members, you acknowledge their commitment and encourage them to actively represent your server. It's a simple yet effective way to strengthen collective identity while rewarding your community's most loyal ambassadors.

## ❓ How the Tag Role works {#working}

It's simple. As soon as a member adds the server tag to their Discord profile, RaidProtect automatically assigns them a specific role.
If the member removes the tag, the role is removed.

We detect the change at the member's next profile update (nickname, avatar, banner, roles, tag...).

:::info
If the Tag is not enabled or your server doesn't yet have the feature, the Tag Role will have no effect.
:::

## 🎖️ Configuring the Tag Role {#config}

Configuration takes just a few clicks:
1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Utilities**" tab.
3. Click "**Configure**" next to "**Tag Role**".
4. Select an existing role via the selector or click "**Create one for me**": we create a `Tag` role with no permissions at all.
5. You can disable the Tag Role at any time by clicking the "**Reset**" button.

Each change to the Tag Role configuration is recorded in your server logs.

<Settings start="tagrole" />

:::tip
Members will receive the role the next time they update their profile (Username, Avatar, Banner, Roles, Tag...).
:::

### /tagrole command {#command}

Use the command: ```/tagrole```

It directly opens the Tag Role configuration screen, without going through `/settings`. It is reserved for members who have the "**Manage Roles**" permission.

### Refused roles {#refused-roles}

The Tag Role is given automatically to any member: we therefore refuse roles that could cause problems.

- **A role already used by RaidProtect**: jail role, mute role, captcha verification role or auto role.
- **A role managed** by an application or by server boosts: Discord forbids assigning it manually. Create a normal role instead.
- **A role placed above RaidProtect's role**: drag RaidProtect's role above it in **Server Settings > Roles**.
- **A role placed above your highest role** (except for the server owner).
- **A role with sensitive permissions**: Administrator, Ban, Kick, Manage Server, Channels, Messages, Roles, Webhooks, Expressions, Events or Threads.

### Warning boxes {#warnings}

The configuration screen warns you when the Tag Role cannot work:

- **Missing permission**: RaidProtect needs the "**Manage Roles**" permission. A ⚠️ alert also appears next to "**Tag Role**" in the Utilities tab of `/settings`.
- **Server tag not enabled**: your server has not enabled the [Server Tags](https://support.discord.com/hc/en-us/articles/31444248479639-Server-Tags) feature, so the Tag Role has no effect for now.

After fixing it, click "**Refresh**" to check again.

## Frequently asked questions {#faq}

### Why doesn't a member with the tag have the role yet?

We detect the tag at the member's next profile update. As long as they change nothing (nickname, avatar, roles, tag...), the role is not assigned. Support can run a full sync if needed.

### Why is my role refused?

The Tag Role cannot be a role already used by RaidProtect, a role managed by an application, a role placed above RaidProtect or above you, or a role with sensitive permissions.

### Who can configure the Tag Role?

Administrators from `/settings`, and members who have the "Manage Roles" permission with the `/tagrole` command.
