---
title: Captcha (Verification)
---

Prevent selfbots from accessing your Discord server and block raids with RaidProtect's captcha system.

The captcha is one of the most popular features of RaidProtect, although it remains entirely optional. It allows you to require each new user to complete a challenge consisting of entering a code, in order to verify that they are not a bot (selfbot).

## ❓ How the captcha works {#working}

The captcha relies on an **@Unverified** role and a channel named **#verification**. When a user joins your server:
- The bot automatically assigns the **@Unverified** role to this user, limiting their access to only the **#verification** channel.
- In this channel, an image containing 6 uppercase letters is sent by the bot. The user must type the letters in the channel to prove they are human.
- If the answer is correct, the **@Unverified** role is removed and the user gains normal access to the server. Otherwise, they are automatically kicked.
- When the captcha is enabled, RaidProtect automatically posts a message in the logs channel, indicating the account creation date of each new user.
- RaidProtect automatically detects permission issues (channel and role) as well as the default visibility of the channel during the Discord onboarding process.

:::info
**Time limit and attempts:** Users have **1 to 10 minutes** to complete the captcha (**5 minutes by default**) and **1 to 3 attempts** (**2 attempts by default**). Beyond that, they are automatically kicked from the server.
:::
:::warning
**Permission management:** The permissions of the **@Unverified** role are automatically configured by RaidProtect. You can rename the role and the channel, but do not delete them.
:::

## 🚪 Captcha configuration {#config}

Setting up the captcha is quick and easy.

1. Run the [`/settings` command](../setup.md#settings).
2. Click the "**Captcha**" button.
3. Choose the channel where captchas will be performed or use the "**Create one for me**" button.
4. The **@Unverified** role is automatically created and configured.
5. Configure the number of allowed attempts (between 1 and 3) and the maximum solving time (between 1 and 10 minutes).

![Captcha settings screenshot](../assets/rp-settings-captcha.webp)

## ✨ Additional features {#additional-features}

To adapt to your server's needs, RaidProtect's captcha offers customizable options.

### Separate logs {#logs}

If your server is popular, captcha-related logs can clutter your main logs channel. You can move them to another channel.

1. Run the [`/settings` command](../setup.md#settings).
2. Click the "**Logs**" button.
3. Select "**Captcha**".
4. Choose the channel where captcha logs will be stored or use the "**Create one for me**" button.

### Automatic role {#autorole}

If you use an automatic role (autorole) system other than RaidProtect, it may interfere with the captcha. Replace your existing autorole with RaidProtect's.

1. Run the [`/settings` command](../setup.md#settings).
2. Click the "**Captcha**" button.
3. Select "**Automatic role**".
4. Choose the role that will be given to members who have completed the captcha.

### Captcha bypass {#bypass}

Use the command: ```/bypass captcha [user]```

Replace `[user]` with the desired identifier; they will have 10 minutes to join the server without needing to solve the captcha. If the user is already present, the captcha will be automatically resolved. You can also use the command without specifying a user to see the current list of bypassed users.
