---
title: Onboarding Process and RaidProtect
---

If the `#verification` channel is not visible by default to new members, this can prevent the Captcha system from working properly. Here's how to fix this step by step.

## 1️⃣ Check the channel permissions {#permissions}

1. Open the `#verification` channel settings (right click > **Edit Channel**).
2. In the **Permissions** tab:
   - Make sure `@everyone` **does not have** permission to view or send messages.
   - Ensure the `@Unverified` role **has** permission to **view** and **send messages** in this channel.

## 2️⃣ Check the welcome category {#default-category}

1. Go to **Server Settings** > **Welcome Screen**.
2. In the **Default Channels** section, make sure the category containing `#verification` is checked as visible to new members.
3. If needed, move `#verification` into a checked category.
4. Save the changes.

## 3️⃣ Refresh the configuration in RaidProtect {#refresh-config}

1. Use the [`/settings`](../setup.md#settings) command and go to the **Captcha** tab.
2. Click **Refresh** to force the configuration update.
3. If the channel is now visible, the Captcha system will work properly.

## 4️⃣ Test with a test account {#test-account}

To confirm everything is set up correctly:

1. Join the server with another Discord account.
2. Check that the `#verification` channel is visible upon arrival.
3. Enter the Captcha code sent by RaidProtect.
4. Once verified, the account should have access to the other channels.

## 🛠️ Common issues and solutions {#common-issues}

| Issue | Solution |
|-------|----------|
| 🔴 The `#verification` channel remains invisible | Make sure it is in a **checked category** in the Discord Welcome Screen. |
| 🚫 The `@Unverified` role cannot write | Grant it **permission to send messages** in `#verification`. |
| ❌ Captcha does not work after changes | Click **“Refresh”** in `/settings > Captcha`. |

---

✅ By following these steps, your verification system will be fully operational to welcome members securely and effectively block bots or raids.