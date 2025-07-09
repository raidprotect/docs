---
title: Utilities
---

Extra features to simplify the management of your server. 🔧

In addition to core features like the captcha system and anti-raid protection, RaidProtect offers several secondary tools that can make managing your server even smoother.

:::info
Utility commands are [usable with a prefix](../guides/prefix.md).
:::

## 👤 User Information {#userinfo}

The `/userinfo` command lets you get detailed information about a user.

Use the command: ```/userinfo [@user]```

Replace `[@user]` with the desired mention or ID.

### 📋 Displayed Information

- **Discord account creation date**
- User's **profile picture**
- **Profile banner**
- **Profile badges**
  - The Nitro badge is shown only if the user has **an animated profile picture or a banner**.
  - The Booster badge is not displayed.


### 🎭 Information about a server member

If the target is a server member, additional info includes:

- **Date joined the server**
- **Server nickname**
- **Number of roles** and **list of the first 6 roles**
- **Permission category** (automatically determined based on roles):

<Tabs>
  <TabItem value="animator" label="🟦 Animator">

The **Animator** category is shown if the member has **at least one** of the following permissions:

- `MANAGE_EXPRESSIONS`
- `CREATE_GUILD_EXPRESSIONS`
- `MANAGE_EVENTS`

  </TabItem>
  <TabItem value="moderator" label="🟨 Moderator">

The **Moderator** category is shown if the member has **at least one** of the following permissions:

- `KICK_MEMBERS`
- `BAN_MEMBERS`
- `MODERATE_MEMBERS`
- `MANAGE_MESSAGES`
- `MUTE_MEMBERS`
- `DEAFEN_MEMBERS`
- `MOVE_MEMBERS`
- `MANAGE_THREADS`

  </TabItem>
  <TabItem value="manager" label="🟧 Manager">

The **Manager** category is shown if the member has **at least one** of the following permissions:

- `MANAGE_GUILD`
- `MANAGE_ROLES`
- `MANAGE_CHANNELS`
- `VIEW_AUDIT_LOG`
- `MANAGE_WEBHOOKS`
- `MANAGE_SERVER_EXPRESSIONS`

  </TabItem>
  <TabItem value="admin" label="🟥 Administrator">

The **Administrator** category is shown in **two possible cases**:

1️⃣ Has the permission:
- `ADMINISTRATOR`

2️⃣ Has **all three** of the following permissions at the same time:
- `MANAGE_GUILD`
- `MANAGE_ROLES`
- `MANAGE_CHANNELS`

  </TabItem>
  <TabItem value="owner" label="🟩 Owner" default>

**Condition**: The member is the **server owner**.

  </TabItem>
</Tabs>

- **Member flags**

Certain special indicators (flags) can be displayed for a member:

| Flag                                      | Emoji / Displayed Name       | Explanation                                                        |
| ----------------------------------------- | ---------------------------- | ------------------------------------------------------------------ |
| `DID_REJOIN`                             | MemberDidRejoin              | The user left and rejoined the server.                             |
| `IS_GUEST`                               | MemberIsGuest                | Guest member (temporary invite or guest access).                   |
| `COMPLETED_ONBOARDING`                   | OnboardingCompleted          | Has completed the server onboarding process.                        |
| `STARTED_ONBOARDING`                     | OnboardingStarted            | Started onboarding but hasn't finished it yet.                      |
| `COMPLETED_SERVER_GUIDE`                 | ServerGuideCompleted         | Completed the server guide if enabled.                              |
| `STARTED_SERVER_GUIDE`                   | ServerGuideStarted           | Started the server guide but hasn't finished it.                     |
| `AUTOMOD_QUARANTINED_NAME`               | MemberQuarantined            | Username quarantined by automoderation.                             |
| `AUTOMOD_QUARANTINED_GUILD_TAG`          | MemberQuarantined            | Server tag or nickname quarantined by automod.                      |
| `BYPASSES_VERIFICATION`                  | BypassVerification           | The user can bypass the server's verification.                       |
| `SPAMMER`                                | UnusualAccountActivity       | Account marked as spammer or unusual activity detected.             |