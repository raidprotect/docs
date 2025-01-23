---
title: Raid Mode
---

Raid Mode is an emergency feature designed to block all new users attempting to join your server. It’s a radical but effective way to prevent raid attempts. 💣  

## ❓ How Raid Mode Works

Once Raid Mode is activated, all new users will be **instantly kicked**, and RaidProtect will notify them that the server is in Raid Mode.

**To activate Raid Mode,** a user with the permission to kick members must run the `?raidmode` command. A message will be posted in the logs to indicate its activation. Be aware that **Raid Mode does not deactivate automatically**, so remember to turn it off using the same command. 😇  

![Raid Mode Activated Screenshot](../assets/raidmode-active-raidprotect.png)

## 📡 Automatic Raid Mode

If a large number of users join your server within a very short period, RaidProtect can **automatically activate Raid Mode**.

### ⛽ Configuration

By default, Raid Mode is triggered if **more than 10 users join your server within 10 seconds.** If your server frequently receives a large influx of members simultaneously, it might be wise to adjust this setting to avoid false positives.

![Automatic Raid Mode Screenshot](../assets/raidmode-auto-raidprotect.png)

The adjustable parameter is **the number of users allowed to join** within a 10-second timeframe before triggering Raid Mode. For example, by running the command:  
`?settings autoraidmode 20`, Raid Mode will activate if more than 20 users join your server within 10 seconds. 🍃  

:::warning
Don’t forget to **turn off Raid Mode** if it activates automatically. Remember, it does not deactivate on its own. 😖  
:::