---
title: Captcha (Verification)
---

Prevent selfbots from accessing your Discord server and block raids with the captcha system from RaidProtect.

Captcha is one of the most popular features of RaidProtect, although it remains entirely optional. It requires each new user to complete a challenge by entering a code to verify that they are not a bot (selfbot).

## ❓ How Captcha Works {#working}

The captcha relies on a role "**@Unverified**" and a channel named **#verification**. When a user joins your server:
- The bot automatically assigns the **@Unverified** role to the user, limiting their access only to the **#verification** channel.
- In this channel, an image containing 6 letters is sent by the bot. The user must transcribe the letters in the channel to prove they are human. One letter error is tolerated.
- If the response is correct, the "**@Unverified**" role is removed, and the user gains normal access to the server. Otherwise, they are automatically kicked.
- When captcha is enabled, RaidProtect automatically posts a message in the logs channel, indicating the account creation date of each new user.

:::info
**Time Limit:** Users have **5 minutes** to complete the captcha. After this time, they are automatically kicked.
:::
:::warning
**Permission Management:** The permissions of the **@Unverified** role are configured automatically by RaidProtect. You can rename the role and channel, but do not delete them.
:::

## 🚪 Setting Up Captcha {#config}

Setting up captcha is simple and quick.

1. Use the [command `/settings`](../setup.md#settings).
2. Click the “**Captcha**” button.
3. Choose the channel in which the captchas will be conducted or use the “**Create one for me**” button.
4. The **@Unverified** role is automatically created and configured.

[Captcha settings screenshot](../assets/rpBeta-settings-anti-captcha.webp)

## ✨ Additional Features {#additional-features}

To adapt to your server's needs, RaidProtect's captcha offers customizable options.

### Separate Logs {#logs}

If your server is popular, captcha-related logs can clutter your main logs channel. You can move them to another channel.

1. Use the [command `/settings`](../setup.md#settings).
2. Click the “**Logs**” button.
3. Select “**Captcha**”.
4. Choose the channel where the captcha logs will be indexed or use the “**Create one for me**” button.

### Automatic Role {#autorole}

If you are using an automatic role system (autorole) other than RaidProtect, it may interfere with captcha. Replace your existing autorole with RaidProtect's.

1. Use the [command `/settings`](../setup.md#settings).
2. Click the “**Captcha**” button.
3. Select “**Automatic Role**”.
4. Choose the role that will be given to members who have validated the captcha.

### Minimum Account Age {#minage}

To enhance security, you can require a minimum age for the Discord accounts of new members.

1. Use the [command `/settings`](../setup.md#settings).
2. Click the “**Captcha**” button.
3. Press the “**Minimum Age**” button.
4. Select the desired value from the dropdown menu or choose a custom value expressed in date format (m/h/d/y).