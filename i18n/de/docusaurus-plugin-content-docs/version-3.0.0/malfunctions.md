---
title: Malfunctions
---

Encountering an issue with RaidProtect? The solution is likely here.

Sometimes, things don’t go as expected. Here are the **most common problems** you might encounter and how to resolve them. 🤗  

If this page doesn’t address the issue you’re facing, **don’t hesitate to contact our support team**, who will gladly assist you!

## The bot shows an error when I use a command {#commands}

If a command doesn’t execute successfully, **RaidProtect might display an error** instead of the expected result. In most cases, the message will explain the issue, but sometimes it might be more generic. Here’s how to resolve the issue in most cases. 🧐  

- **Follow the instructions.** Some errors clearly explain the problem. If the bot asks you to do something, follow the instructions provided.  

- **Check the command parameters.** Ensure the command is correctly written. Refer to the help documentation if needed. Remember, brackets (`[]`) are not meant to be included in your command.  

- **Verify the bot’s permissions.** The bot must have Administrator permissions and be ranked at the same level as administrators in the role hierarchy.  

- **Retry the command.** Occasionally, the issue resolves itself without any apparent reason.  

If the error persists despite following these steps, reach out to our support team for further assistance. 🤝  

## The bot’s logs channel wasn’t created automatically {#logs}

To notify you of its actions, RaidProtect requires a logs channel. This channel is automatically created when the bot first joins the server, but sometimes, it doesn’t appear. Here’s how to fix this! ⚙️  

- **Ensure the bot has Administrator permissions.** The bot requires Administrator access to function correctly. If it doesn’t have this, go to your server's role settings and grant this permission to RaidProtect’s role. Once permissions are configured, manually initialize the bot as described below.  

- **Check the bot’s initialization.** This process is typically automatic, but you can manually initialize the bot by running the `?setup` command. The logs channel should then be created.  

- **Set a logs channel manually.** If nothing works, don’t worry! You can manually assign a channel for the logs. Create a dedicated channel, then run the command `?settings logs #channel`, replacing `#channel` with your new logs channel.  

## A user spammed, but the bot didn’t take action {#anti-spam}

Anti-spam is one of RaidProtect’s core features, and it can be frustrating if it doesn’t work as expected. Fortunately, the issue is usually easy to fix. 😇  

- **If the anti-spam detects spam but doesn’t act,** it’s likely due to insufficient permissions. Ensure the bot has Administrator permissions and is ranked at the same level as administrators in the role hierarchy.  

- **Check the anti-spam configuration.** It might seem trivial, but some users forget they’ve excluded certain channels from detection.  

- **Verify the spammer’s permissions.** Administrators are ignored by the anti-spam system. If you’re testing on your own server, the bot might not detect your spam.  

- **Is the spam significant enough?** The bot usually detects spam after more than five messages. Be patient when testing.  

If the anti-spam still doesn’t respond to spam, contact us on our support server with a **screenshot of the issue**.  

## Users bypass the captcha {#captcha}

This issue is relatively common and often relates to **your server’s configuration**. Here’s how to fix it. 🏥  

- **Do you have an autorole?** If another bot is assigning a role to new users, it might interfere with the captcha. Replace it with [RaidProtect’s autorole](./features/captcha.md#autorole).  

- **Is the captcha enabled?** This feature is optional and requires a command to activate. Refer to the captcha documentation for more details.  

## Users can still chat when I lock a channel {#lock}

The lock command is useful but has limitations. As noted in [this documentation](./features/others.md#lock), the command **only affects the @everyone role**. This means if another role explicitly has permission to chat in the locked channel, members with that role will still be able to speak.  

As a picture is worth a thousand words, here’s a visual example of what this looks like. 🔍  

![Screenshot of channel lock configuration](../../../en/docusaurus-plugin-content-docs/version-3.0.0/assets/lock-channel-messages-raidprotect.png)
