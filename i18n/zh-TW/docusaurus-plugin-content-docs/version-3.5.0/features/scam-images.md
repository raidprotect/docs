---
title: 詐騙圖片
description: "ScamLens 是 RaidProtect 的反詐騙功能，能自動偵測並刪除您 Discord 伺服器上的詐騙圖片。預設啟用，無需任何設定。"
---

import AntiScamMockup from '@site/src/components/DiscordMessage/mockups/anti-scam';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect 會自動保護您的伺服器免受**詐騙圖片**（加密貨幣詐騙、假贈品活動、假賭場促銷）的侵害。這項防護稱為 **ScamLens**：它會分析所發布的圖片，刪除已知的詐騙圖片，並處罰發出訊息的帳號（通常是[被盜帳號](/zh-TW/learn/token-grabber)）。

<AntiScamMockup />

:::tip 無需任何設定
ScamLens **在 RaidProtect 加入您的伺服器時就預設啟用**。您無需設定任何項目就能立即受到保護。
:::

## ❓ 運作方式 {#working}

ScamLens 會將每張發布的圖片與已知的詐騙圖片比對。完全不會讀取訊息的文字內容。

依比對結果：

- **確定相符**：訊息會立即被**刪除**，其作者會受到**處罰**。處罰紀錄會註明受影響的頻道。
- **不確定相符**：訊息會**為求謹慎**而被刪除，但不處罰。如果之後確認該圖片為詐騙，處罰可能會稍後才生效。

處罰原因為「偵測到詐騙（加密貨幣圖片）」。在 [Premium](/zh-TW/premium) 伺服器上，被處罰的成員還會收到一則私訊。

ScamLens 只處理**圖片**。其他類型的垃圾訊息由 [Antispam](./anti-spam.mdx) 和 [HoneyPot](./honeypot.md) 處理。

## 🔧 設定 ScamLens {#config}

ScamLens 在「**防護**」分頁的 **Automod** 模組中、於「**圖片過濾器**」畫面進行設定。

1. 使用 [`/settings` 指令](../setup.md#settings)。
2. 開啟「**防護**」分頁。
3. 點擊「**Automod**」旁的「**設定**」。
4. 點擊「**圖片**」旁的「**設定**」。

<Settings start="imageFilter" />

### 啟用或停用 ScamLens {#toggle}

在「**圖片過濾器**」畫面中，點擊右上角的「**停用**」（或「**啟用**」）。每次變更都會記錄在您的紀錄中。

### 選擇處罰及其時長 {#sanction}

在「**套用的處罰**」選單中選擇：
- 「**預設**」：若 [HoneyPot](./honeypot.md#sanction) 已啟用，則採用其處罰，否則為超時；
- 或指定的處罰：停權、軟停權、監禁、踢出、禁言、超時或警告。

在「**處罰時長**」選單中，選擇 5 分鐘、1 小時、1 天或「**自訂值**」（例如 `30m`、`2h`、`7d`）。「**預設**」選項會在 HoneyPot 已啟用時沿用其時長，否則為 **1 天**。在此選擇的時長專屬於 ScamLens，獨立於 Antispam 和 HoneyPot。它也適用於稍後才生效的處罰。

:::info
- 未設定角色的**監禁**或**禁言**會變成**超時**。
- 公告處罰的公開訊息遵循 [Antispam](./anti-spam.mdx#public-message) 的「**公開處罰訊息**」設定，Premium 版可停用。
:::

## 🗂️ 圖片目錄 <span className="badge-experiment">實驗</span> <span className="badge-premium">Premium</span> {#catalog}

:::info 實驗：Shield Update
圖片目錄屬於預計於 3.6.0 版推出的 **Shield Update**，在正式推出前處於實驗階段。
:::

除了由我們管理、套用於所有伺服器的全域「Crypto Scam」目錄之外，[Premium](/zh-TW/premium) 伺服器還可以封鎖**自己的圖片**，不論內容為何：假 Nitro 的截圖、針對您社群的詐騙視覺素材、您伺服器禁止的圖片……

**限制**：每個伺服器 2 份清單，每次上傳 10 張圖片。

### 建立清單 {#lists}

1. 使用 [`/settings` 指令](../setup.md#settings)。
2. 開啟「**防護**」分頁。
3. 點擊「**Automod**」旁的「**設定**」。
4. 點擊「**圖片**」旁的「**設定**」。
5. 在「**圖片目錄**」中，點擊「**建立清單**」並為它命名。
6. 選擇該清單的「**驗證頻道**」。
7. 點擊「**新增圖片**」並上傳最多 10 張圖片。結果會顯示已新增的圖片、關聯的變體、被忽略的重複項目，以及被拒絕的圖片。

清單中的圖片只要再次出現在您的伺服器上就會被刪除，其作者會受到上面所選的處罰。處罰的原因會註明清單名稱（「清單『_名稱_』中的圖片」）。若未設定處罰，刪除動作會記錄在您的管理紀錄中，並註明頻道和清單。

:::warning 一份清單 = 一種圖片登記類別
請在一份清單中只放同一種類型的內容。把互不相干的圖片混在同一份清單中會破壞偵測：請改為建立第二份清單。
:::

### 驗證頻道 {#review}

當某張圖片與您清單中的圖片相似但沒有確定相符時，我們會在該清單的**驗證頻道**中提示（「需要驗證，清單……」），並附上兩個按鈕：
- 「**確認，這是禁止內容**」：該圖片加入目錄，訊息被刪除，其作者受到處罰；
- 「**排除，這是正常內容**」：此圖片之後不會再觸發驗證。

需要 `管理伺服器` 權限才能做出裁決。若沒有驗證頻道，不確定的相符結果就不會有任何提示。

## 📊 透明度 {#reports}

ScamLens 攔截的每個詐騙：

- 都會出現在您伺服器的[透明度彙總](./transparency.md#recaps)中（「X 次詐騙被 ScamLens 攔截」）；
- 會計入 [HoneyPot](./honeypot.md) 的被檢舉帳號計數器；
- 並強化**所有使用 RaidProtect 的伺服器**的防護。

### 我們的月報 {#recaps}

每個月，我們都會發布[**威脅氣象**](/blog/tags/threats)，這是關於 ScamLens 活動的公開報告。以下為自 [2026 年 2 月 14 日上線](/blog/scamlens-early-activation)以來，所有受 RaidProtect 保護的伺服器的累計數字：

| 報告 | 已刪除的詐騙圖片 | 已識別的被盜帳號 |
|---|---|---|
| [一個月總結](/blog/scamlens-1-month-recap) *（2026 年 3 月）* | 260,000 | 15,000 |
| [2026 年 4 月](/blog/threat-weather-april-2026) | 1,400,000 | 40,000 |
| [2026 年 5 月](/blog/threat-weather-may-2026) | 2,300,000 | 80,000 |
| [2026 年 6 月](/blog/threat-weather-june-2026) | 4,000,000 | 160,000 |

## 常見問題 {#faq}

### 需要設定 ScamLens 嗎？

不需要。ScamLens 在 RaidProtect 加入您的伺服器時就預設啟用。您無需設定任何項目就能立即受到保護。

### ScamLens 會封鎖圖片以外的東西嗎？

不會，ScamLens 只處理圖片。預設會封鎖已知的詐騙圖片。Premium 伺服器還可以透過圖片目錄加入自己的圖片。其他類型的垃圾訊息由 [Antispam](./anti-spam.mdx) 和 [HoneyPot](./honeypot.md) 處理。

### 詐騙圖片會受到什麼處罰？

預設情況下，ScamLens 會套用您 [HoneyPot](./honeypot.md#sanction) 的處罰與時長；若 HoneyPot 未啟用，則為一天的超時。您可以在 /settings 的「防護」分頁、Automod 模組、「圖片過濾器」畫面中選擇其他處罰和時長。

### 如何停用 ScamLens？

在 /settings 的「防護」分頁中，點擊 Automod 旁的「設定」，再點擊「圖片」旁的「設定」，然後使用「圖片過濾器」畫面右上角的開關。
