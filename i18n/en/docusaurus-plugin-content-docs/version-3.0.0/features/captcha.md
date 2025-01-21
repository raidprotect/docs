---
title: Captcha (Verification)
---

Prevent selfbots from accessing your Discord server and block raids with RaidProtect's captcha verification system.

The captcha is one of the most popular features of RaidProtect, yet it is **entirely optional**. If needed, the captcha allows you to require each user to complete a challenge by entering a code to confirm they are not a bot (_selfbot_).

While this enhances your server's security, **some users may not understand the process**, which could result in losing a few members. It’s up to you to decide if it’s worth implementing! 😉  

## ❓ How the Captcha Works {#working}

**The captcha uses an "Unverified" role and a #verification channel.** When a user joins, the bot assigns them the "Unverified" role, restricting their access to only the #verification channel. In this channel, **the bot sends an image containing six letters**, and the user must type what they see to prove they are not a bot. If the input is correct—allowing for one incorrect letter—the bot removes the "Unverified" role, granting the user normal access to the server. 👾  

Users have five minutes to complete the captcha. After this time, they are kicked from the server to prevent cluttering the verification channel with orphaned messages.

:::warning
**The permissions for the "Unverified" role are managed automatically by RaidProtect.** While you can rename the role and channel, they must not be deleted.
:::

![How the Captcha Works](../assets/captcha-raidprotect.gif)

When a user joins your server with the captcha enabled, RaidProtect automatically posts **a message with the account creation date** of the new user in the logs channel.

![Join Log Screenshot](../assets/log-join-captcha-raidprotect.png)

## ⛽ Setting Up the Captcha {#setup}

**Setting up the captcha is effortless!** Simply use the command `?captcha enable`, and everything will be configured automatically. 🎩  

To disable it, use the command `?captcha disable`. The captcha role and channel will be removed without further intervention.

## ✨ Additional Features {#additional-features}

To make the captcha system more flexible, we’ve added **several additional options.** 🦸‍♂️  

### Separate Logs {#logs}

By default, captcha logs are posted in the RaidProtect logs channel. If your server is popular, these messages may overwhelm the other logs. **You can move them to another channel!**

After creating a new logs channel, use the command `?captcha logs #logs-channel`. All captcha logs will now appear in the new channel.

### Automatic Role Assignment {#autorole}

:::warning
If you use an automatic role assignment (_autorole_) system other than RaidProtect, **the captcha may no longer work.** Replace it with RaidProtect’s autorole feature to resolve this issue. 👷  
:::

By default, users do not receive any role after passing the captcha. However, you can **assign a role automatically**. To do so, run the command:  
`?captcha autorole @role`.  

The role can either be a mention or the exact name of a role.

### Minimum Account Age {#minage}

You can enforce a **minimum account age requirement to access your server.** Any user with an account younger than this will be automatically kicked. 👶  

To enable this feature, use the command: `?captcha min-age [minimum age]`. The minimum age must be specified in days.