---
title: 語言
description: "變更 RaidProtect 的語言以配合您的社群：機器人支援 11 種語言，從法文到日文，也可以跟隨您 Discord 伺服器的語言。"
---

import { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect 讓您選擇機器人使用的語言，以最貼近您的 Discord 社群。

**公開訊息**：所設定的語言會套用於 RaidProtect 在您伺服器上發送的公開訊息（紀錄、驗證碼、檢舉等）。

**臨時訊息**：私人或臨時訊息仍以與機器人互動的使用者的語言顯示。

## 🌐 支援的語言清單 {#supported}

- **法文**
- **英文**
- **西班牙文**
- **德文**
- **巴西葡萄牙文**
- **義大利文**
- **土耳其文**
- **越南文**
- **日文**
- **簡體中文**
- **繁體中文**

僅提供已完整翻譯的語言。對於使用其他語言版 Discord 的成員，發送給他們的臨時回覆將以英文顯示。

## ⚙️ 變更機器人語言 {#change}

1. 使用 [`/settings` 指令](./setup.md#settings)。
2. 在「**一般**」分頁中，點擊「**語言**」旁的「**編輯**」。
3. 從清單中選擇想要的語言，然後確認。

<SettingsModal name="lang" />

變更會立即生效，並會顯示在伺服器的紀錄中。

### 跟隨伺服器語言 {#follow}

第一個選項「**跟隨伺服器語言**」會沿用 Discord 社群設定中所定義的主要語言。這是預設值。若該語言不在支援的語言之列，RaidProtect 會使用英文。

:::info
RaidProtect 的語言支援持續進化中！歡迎[建議](https://suggestions.raidprotect.bot)您希望機器人新增的語言，或為已提出的語言[投票](https://suggestions.raidprotect.bot)，讓它們早日加入。
:::
