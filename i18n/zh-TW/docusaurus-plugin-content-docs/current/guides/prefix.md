---
title: 訊息指令
description: "在斜線指令之外啟用 RaidProtect 的訊息指令，選擇前綴，並套用 Discord 的權限。"
---

import { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

## 前綴已停用（預設） {#disabled}

預設情況下，RaidProtect 只使用斜線指令（`/`）。這能確保直覺的使用方式，並與 Discord 的標準一致。

## 訊息指令（選用） {#activated}

如果您偏好在訊息中輸入部分指令，請選擇一個前綴，例如 `?`。啟用後，以下指令就能搭配該前綴使用：

- [`?raidmode`](../features/raid-mode.md) 和 [`?joinlock`](../features/join-lock.mdx)
- [`?ban`](../features/moderation.mdx#ban)、[`?tempban`](../features/moderation.mdx#tempban)、[`?softban`](../features/moderation.mdx#softban) 和 [`?unban`](../features/moderation.mdx#unban)
- [`?kick`](../features/moderation.mdx#kick)
- [`?mute` | `?timeout` | `?tempmute`](../features/moderation.mdx#timeout) 和 [`?unmute` | `?untimeout` | `?untempmute`](../features/moderation.mdx#untimeout)
- [`?jail`](../features/moderation.mdx#jail)、[`?tempjail`](../features/moderation.mdx#tempjail) 和 [`?unjail`](../features/moderation.mdx#unjail)
- [`?warn`](../features/moderation.mdx#warn)
- [`?slowmode` | `?slow`](../features/moderation.mdx#slowmode)
- [`?lock`](../features/channel-lock.md#lock) 和 [`?unlock`](../features/channel-lock.md#unlock)
- [`?clear` | `?clean`](../features/moderation.mdx#clear)
- [`?nick` | `?nickname` | `?rename` | `?setnick`](../features/moderation.mdx#nick)
- [`?userinfo` | `?ui`](../features/utilities.mdx#userinfo)、[`?serverinfo` | `?ginfo`](../features/utilities.mdx#serverinfo) 和 [`?inviteinfo` | `?ii`](../features/utilities.mdx#inviteinfo)

## 💬 選擇前綴 {#config}

1. 使用 [`/settings` 指令](../setup.md#settings)。
2. 在「**一般**」分頁中，點擊「**訊息指令**」旁的「**編輯**」。
3. 從清單中選擇一個前綴（`?`、`!`、`>` 或 `$`），或在「**自訂前綴**」中輸入您自己的前綴（最多三個字元，優先於清單）。選擇「**停用**」即可關閉訊息指令。
4. 如果希望 RaidProtect 在讀取到含有指令的訊息後立即將其刪除，請勾選「**刪除指令訊息**」。

<SettingsModal name="prefix" />

:::note
即使設定了前綴，斜線指令（`/`）仍然可用。
請避免使用其他機器人已在使用的前綴，以免指令衝突。
:::

## 🔒 套用指令權限 {#permissions}

RaidProtect 指令的權限在 Discord 中設定：**伺服器設定 → 整合 → RaidProtect**。您可以在那裡依角色、成員或頻道允許或禁止每個指令。Discord 只會將這些權限套用於斜線指令。

若要讓它們同時套用於訊息指令，以及「**處罰使用者**」選單（在成員上按右鍵）所提供的處罰：

1. 使用 [`/settings` 指令](../setup.md#settings)。
2. 在「**一般**」分頁中，點擊「**權限**」旁的「**編輯**」。
3. 勾選「**套用整合設定的權限**」。

<SettingsModal name="permissions" />

如此一來，被允許使用 `/ban` 的成員就能從「**處罰使用者**」選單進行停權，而被禁止使用 `/ban` 的成員也無法再使用 `?ban`。此選項預設為停用。

:::warning
Discord 的**整合**選單僅在電腦版和網頁版應用程式中提供，手機版沒有。
:::
