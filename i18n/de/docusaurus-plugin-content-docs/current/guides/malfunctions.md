---
title: Malfunctions
---

Having an issue with RaidProtect? The solution is likely here.

Sometimes things don't work as expected. Here are the **most common problems** you may encounter, along with how to solve them. 🤗 

If this page does not answer a problem you're experiencing, [**feel free to contact our support**](https://raidprotect.bot/discord) who will be happy to help you!

## The bot shows an error when I run a command {#commands}

If the command does not execute successfully, **RaidProtect may display an error** instead of the expected result. In most cases, there will be an indication in the message, but it may be a more generic message. Here’s how to resolve this issue in most cases. 🧐 

- **Do what is indicated.** Some errors clearly explain the problem. If the bot asks you to do something, please do it.

- **Check the command parameters.** The command might simply be misspelled; check the help on how to use it. Remember that brackets ([]) are not to be included.

- **Check the bot's permissions.** The bot must have **Administrator** permission and be at the administrator level in the role hierarchy.

- **Retry the command.** Sometimes the issue resolves itself for unknown reasons.

If you continue to receive an error despite following these tips, [contact our support](https://raidprotect.bot/discord) so we can assist you. 🤝 

## The bot's log channel didn't create itself {#logs}

To notify you of the actions it takes, RaidProtect needs a log channel. This channel is created automatically when the bot first joins, but sometimes no channel is created. Here’s how to remedy this issue. ⚙️ 

- **Ensure the bot is an Administrator.** For the bot to function properly, it must be given Administrator permission. If this is not done, go to the role settings and grant this permission to the RaidProtect role. You then just need to manually initialize the bot for everything to work (see below)!

- **Check that the bot is properly initialized.** This is usually done automatically, but you can force this initialization with the [command `/setup`](../setup.md#install). The log channel should be created automatically.

- **Manually set a channel.** If nothing works, don’t panic; you can manually choose the channel the bot will use for logs! Once a dedicated channel is created, execute the [command /settings](../setup.md#settings) and then select Logs.

## A user spammed, but the bot did not sanction them {#anti-spam}

The [anti-spam](../features/anti-spam.mdx) feature is one of RaidProtect's main functionalities, and it can be frustrating if it’s not working. But rest assured, most of the time it’s nothing serious. 😇 

- **If the anti-spam asks to stop the spam but does not sanction,** this is likely due to a lack of permissions. Remember, the bot must have Administrator permission and must be at the administrator level in the role hierarchy.

- **Check the anti-spam configuration.** It’s quite simple, but some forget that they have ignored a channel.

- **Check the spammer's permissions.** Administrators are ignored, so if you’re testing the anti-spam on your own server, it may not detect you.

- **Is the spam long enough?** The bot generally only detects spam if it’s more than 5 messages. Don’t be too hasty.

If spam is still not detected, [contact us on our support server](https://raidprotect.bot/discord) with a **screenshot of the issue**.

## Users have access to the server without completing the captcha {#captcha}

This problem is relatively common, but it depends on **your server configuration**. Let’s see how to fix it. 🏥 

- **Do you have an auto role?** If you have set up a bot (other than RaidProtect) to give a role to newcomers on your server, this may interfere with the captcha. Replace it with the [RaidProtect autorole](../features/captcha.md#autorole). 

- **Have you activated the captcha?** This is a completely optional feature that requires you to execute a command to enable it. Check the [dedicated captcha documentation page](../features/captcha.md#config) for more information.

## Users can still talk when I lock a channel {#lock}

The lock command seems magical, but it has its weaknesses. As [noted in this documentation](../features/channel-lock.md#lock), the command **only affects the @everyone role**. This means that if there is a role in the channel you want to lock that explicitly has permission to speak, they will still be able to do so. A picture is worth a thousand words, so here’s what that looks like in practice. 🔍 

[Screenshot of channel lock configuration](../assets/lock-channel-messages-raidprotect.png)
