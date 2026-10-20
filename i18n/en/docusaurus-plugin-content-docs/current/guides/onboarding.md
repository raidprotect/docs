---
title: Onboarding Process and Captcha
description: "Set up Discord's Onboarding Process so RaidProtect's captcha works: make the verification channel visible to new members."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

If the `#verification` channel is not visible by default to new members, they cannot pass the [captcha](../features/captcha.md) and stay stuck. This guide is about **Discord's Onboarding Process** (Server Settings > Onboarding Process). For RaidProtect's welcome message and auto roles, see the [Arrivals and Welcome](../features/onboarding.md) page.

In most cases, RaidProtect fixes the problem for you: start with step 1.

## 1️⃣ Let RaidProtect fix it {#auto-fix}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Arrivals**" tab.
3. Click "**Configure**" next to "**Captcha**".
4. If a box says the verification channel **is not visible by default**, click:
   - "**Move into** _category_" to place the channel in a category already visible to new members;
   - or "**Create a new category**" so that we create a "Welcome" category added to the default channels.

The channel's permissions are kept when it is moved.

<Settings start="captcha" />

:::tip
The same screen flags **leaks** of the `@Unverified` role: roles given by Discord's Onboarding Process that bypass verification, channels still visible to members being verified. The "**Fix**" button closes the channels concerned. See the [captcha screen alerts](../features/captcha.md#alerts).
:::

## 2️⃣ Check channel permissions {#permissions}

RaidProtect sets the permissions of the `#verification` channel and of the `@Unverified` role itself. If you changed them, check them:

1. Open the `#verification` channel settings (right-click > **Edit Channel**).
2. In the **Permissions** tab:
   - Make sure `@everyone` **does not** have permission to view the channel.
   - Verify that the `@Unverified` role **has** permission to **view the channel** and **read message history**.
   - In **Panel (Interactive)** mode, the default mode, `@Unverified` **must not** be able to send messages: the code is entered in a window. In **Challenge (Classic)** mode, it must be able to **send messages** to type the code.

{/* ![Channel permissions verification screenshot](../assets/rp-verification-channel-permissions.webp) : shows "Send messages" allowed, only true in Challenge mode */}

## 3️⃣ Check the onboarding category {#default-category}

If you prefer to fix it by hand:

1. Go to **Server Settings** > **Onboarding Process**.
2. In the **Default Channels** section, verify that the category containing `#verification` is checked as visible for new members.
3. If necessary, move `#verification` to a checked category.
4. Save the changes.

![Onboarding category verification screenshot](../assets/rp-welcome-category.webp)

## 4️⃣ Refresh the configuration in RaidProtect {#refresh-config}

1. Run the [`/settings` command](../setup.md#settings).
2. Open the "**Arrivals**" tab.
3. Click "**Configure**" next to "**Captcha**".
4. If a box is still displayed, click "**Refresh**" to run the check again. When the box disappears, the captcha works correctly.

## 5️⃣ Test with a test account {#test-account}

To confirm everything is properly configured:

1. Join the server with another Discord account.
2. Verify that the `#verification` channel is visible upon arrival.
3. Click "**Verify**" and enter the code (Panel mode), or type the code in the channel (Challenge mode).
4. Once verified, the account should have access to the other channels.

## 🛠️ Common issues and solutions {#common-issues}

| Issue | Solution |
|---------|----------|
| 🔴 The `#verification` channel remains invisible | Click "**Move into** _category_" on the Captcha screen, or put the channel in a **checked category** of Discord's Onboarding Process. |
| 🚫 The `@Unverified` role cannot write | Normal in Panel mode: the member clicks "**Verify**". In Challenge mode, grant it **send messages permission** in `#verification`. |
| 🔓 An unverified member sees other channels | Click "**Fix**" in the leak box of the Captcha screen, and remove the roles that Discord's Onboarding Process gives on arrival. |
| ❌ The captcha does not work after a change | Click "**Refresh**" on the Captcha screen ("**Arrivals**" tab of `/settings`). |

---

✅ By following these steps, your verification system will be fully operational to welcome members securely and effectively block bots or raids.
