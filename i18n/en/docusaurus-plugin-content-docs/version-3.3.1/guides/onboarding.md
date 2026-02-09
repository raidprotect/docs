---
title: Onboarding Process and Captcha
---

If the `#verification` channel is not visible by default to new members, this can prevent the Captcha system from functioning properly. Here is how to fix this issue step by step.

![Captcha alert screenshot](../assets/rp-settings-captcha-alert.webp)

## 1. Check channel permissions {#permissions}

1. Open the `#verification` channel settings (right-click > **Edit Channel**).
2. In the **Permissions** tab:
   - Make sure `@everyone` **does not** have permission to view the channel.
   - Verify that the `@Unverified` role **has** permission to **view the channel**, **read message history**, and **send messages**.

![Channel permissions verification screenshot](../assets/rp-verification-channel-permissions.webp)

## 2. Check the onboarding category {#default-category}

1. Go to **Server Settings** > **Onboarding Process**.
2. In the **Default Channels** section, verify that the category containing `#verification` is checked as visible for new members.
3. If necessary, move `#verification` to a checked category.
4. Save the changes.

![Onboarding category verification screenshot](../assets/rp-welcome-category.webp)

## 3. Refresh the configuration in RaidProtect {#refresh-config}

1. Use the [`/settings`](../setup.md#settings) command, then go to the **Captcha** tab.
2. Click **Refresh** to force the configuration update.
3. If the channel is now visible, the Captcha system will work correctly.

## 4. Test with a test account {#test-account}

To confirm everything is properly configured:

1. Join the server with another Discord account.
2. Verify that the `#verification` channel is visible upon arrival.
3. Enter the Captcha code sent by RaidProtect.
4. Once verified, the account should have access to the other channels.

## Common issues and solutions {#common-issues}

| Issue | Solution |
|---------|----------|
| The `#verification` channel remains invisible | Check that it is in a **checked category** in Discord onboarding. |
| The `@Unverified` role cannot write | Grant it **send messages permission** in `#verification`. |
| The Captcha does not work after modification | Click **"Refresh"** in `/settings > Captcha`. |

---

By following these steps, your verification system will be fully operational to welcome members securely and effectively block bots or raids.
