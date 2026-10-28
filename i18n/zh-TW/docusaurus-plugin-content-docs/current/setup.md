---
title: 安裝
description: "透過 /setup 精靈與 /settings 儀表板，幾分鐘內在您的 Discord 伺服器上安裝並設定 RaidProtect。"
---

import Head from '@docusaurus/Head';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

<Head>
  <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"在 Discord 伺服器上設定 RaidProtect","description":"使用 /setup 與 /settings 指令安裝並設定 RaidProtect 防護機器人。","step":[{"@type":"HowToStep","position":1,"name":"執行 /setup","text":"在機器人可用的頻道中輸入 /setup，開啟安裝精靈。"},{"@type":"HowToStep","position":2,"name":"選擇模組","text":"在「選擇要安裝的模組」選單中選擇要安裝的功能，然後點擊「啟用」。"},{"@type":"HowToStep","position":3,"name":"確認摘要","text":"機器人會顯示它將建立並啟用的項目摘要。再次點擊「啟用」即可套用。"},{"@type":"HowToStep","position":4,"name":"使用 /settings 調整","text":"隨時使用 /settings：儀表板將設定整理為五個分頁，一般、新成員加入、防護、管理與工具。"}]}).replace(/</g, '\\u003c')}</script>
</Head>

RaidProtect 透過兩個指令進行設定：[`/setup`](#install)，一個能一次安裝基本防護的精靈；以及 [`/settings`](#settings)，讓您隨時調整其餘所有設定的儀表板。本指南將說明如何使用它們。

## 從哪裡開始 {#etapes}

對於從零開始的伺服器，建議依下列順序進行：

1. **執行 [`/setup`](#install)** 並選擇要安裝的模組。RaidProtect 會建立紀錄頻道、所需的頻道與角色，並在摘要確認後套用變更。
2. **開啟 [`/settings`](#settings) 的「新成員加入」分頁**：設定[驗證碼](./features/captcha.md)、[Auto RaidMode](./features/raid-mode.md) 與[新成員歡迎](./features/onboarding.md)。
3. **開啟「管理」分頁**：檢查紀錄頻道與[處罰](./features/sanctions.mdx)（監禁與禁言角色）。
4. **在「防護」分頁中設定 [Antispam](./features/anti-spam.mdx)**：只需一個預設組合就能開始。

:::info Discord 社群
Discord 的[社群模式](./guides/community.md)只有少數設定才需要，例如 Auto RaidMode 的封鎖邀請以及[私訊鎖定](./features/dm-lock.mdx)。驗證碼無需社群即可運作。
:::

## 引導式安裝 {#install}

`/setup` 指令僅限管理員使用。它會一次安裝您選擇的模組，並採用經過驗證的預設值，之後您可以在 `/settings` 中再調整。

### 🔧 選擇模組 {#recommended}

1. 執行 `/setup` 指令。
2. 在「**選擇要安裝的模組**」選單中，選擇想要的功能：訊息指令、Auto RaidMode、驗證碼、帳號最短註冊時長、Antispam、檢舉、標籤角色、私訊鎖定與 HoneyPot。已啟用的模組會預先勾選。
3. 點擊「**啟用**」。
4. 機器人會彙整它將建立或重複使用的項目。再次點擊「**啟用**」即可套用，或點擊「**返回**」修改選擇。

<Settings start="setup" />

確認後，RaidProtect 會：

- 若 `#raidprotect-logs` 頻道不存在就建立它，僅管理員以及新增機器人的人可見；
- 移除 `@everyone` 的危險權限（管理員、停權成員、踢出成員、管理伺服器、頻道、角色、訊息、Webhook 與討論串、提及 @everyone、使成員暫時禁言）；
- 以預設值啟用您選擇的每個模組：前綴 `?`、Auto RaidMode 為 10 秒內 10 位成員、驗證碼採面板模式搭配 `#驗證` 頻道與 `@未驗證` 角色、帳號最短註冊時長 6 小時、啟用 Antispam 與檢舉、`@標籤` 角色、私訊鎖定，以及 [HoneyPot](./features/honeypot.md) 的陷阱頻道。

:::tip 停用模組
在 `/setup` 中取消勾選模組並不會停用它。若要關閉某項功能，請透過 [`/settings`](#settings)。
:::

[自動身分組與歡迎訊息](./features/onboarding.md)不屬於精靈的一部分：請在 `/settings` 的「**新成員加入**」分頁中設定。

### 🧭 新的安裝精靈 {#wizard}

新的 `/setup` 精靈以引導式流程取代模組清單：

- **逐區段進行**：一般（含伺服器語言）、新成員加入、防護與管理，一次一個步驟。**精簡檢視**可將所有內容集中在單一畫面，一鍵即達。
- **量身提議**：依伺服器的規模、是否公開、是否為社群伺服器或是否有標籤，精靈會預先勾選建議的防護並說明原因。
- **更多模組**：[歡迎訊息](./features/onboarding.md#welcome-message)（含其頻道）、會刪除其他伺服器邀請的[其他伺服器](./features/automod.md#servers)過濾器，以及設於您所選頻道的[預防性慢速模式](./features/slowmode.md)（[Premium](/zh-TW/premium)）。[DISCON](./features/discon.md) 也會在其中說明：它始終啟用，無需安裝任何東西。
- **開始前的檢查**：它會提示 RaidProtect 缺少的權限，以及位階高於它的角色，並附有「**重新檢查**」按鈕。
- **摘要**：列出將被建立、修改或設定的項目。在「**安裝**」之前不會套用任何變更。
- **已設定的伺服器會被檢查，而非重做**：現有的驗證碼面板與已啟用的私訊鎖定都會被保留。
- **接下來**：安裝以[安全稽核](./features/audit.md)的預覽作結，並提供捷徑，可測試驗證碼、自訂歡迎訊息或開啟所有設定。失敗的步驟可重新執行 `/setup` 來繼續。

## 修改設定 {#settings}

`/settings` 指令會開啟 RaidProtect 的儀表板。它僅限管理員使用，並以臨時私人訊息顯示，只有您自己看得到。

### 🔍 儀表板 {#menu}

設定被整理成五個分頁：

- **一般**：[語言](./language.md)、[訊息指令](./guides/prefix.md)、[權限](./guides/prefix.md#permissions)以及伺服器時區。
- **新成員加入**：[Auto RaidMode](./features/raid-mode.md)、[驗證碼](./features/captcha.md)、[帳號最短註冊時長](./features/onboarding.md#minage)、[自動身分組](./features/onboarding.md#autorole)與[歡迎訊息](./features/onboarding.md#welcome-message)。
- **防護**：[DISCON](./features/discon.md)、[Antispam](./features/anti-spam.mdx)、[Automod](./features/automod.md)（[圖片過濾器](./features/scam-images.md)、[其他伺服器](./features/automod.md#servers)與[副檔名](./features/automod.md#files)）、[HoneyPot](./features/honeypot.md)、[預防性慢速模式](./features/slowmode.md)、[Authentification Manager](./features/authentication-manager.mdx) 與[私訊鎖定](./features/dm-lock.mdx)。
- **管理**：[處罰](./features/sanctions.mdx)、[多帳號](./features/alt-accounts.md)\*、紀錄、[檢舉](./features/reports.md)與[透明度](./features/transparency.md)。
- **工具**：[標籤角色](./features/tag-role.md)、[頻道鎖定](./features/channel-lock.md)、[在勤角色](./features/moderation.mdx#onduty)與訊息快取。

\* 實驗中：此項目只會出現在可使用 Identity Update（多帳號）的伺服器上，為 [Premium](/zh-TW/premium) 公開測試版。

每一行都會顯示該設定的目前值和一個按鈕：「**設定**」會開啟專屬畫面，「**編輯**」會開啟輸入視窗。任何變更都會立即生效。

更新後，**新**標記會在兩週內提示剛推出的設定，以及在您尚未開啟之前提示其所屬的分頁。

在下方探索儀表板，按鈕都可以點擊：

<Settings start="home:arrivals" />

:::info Premium 功能
僅限 [Premium](/zh-TW/premium) 的畫面仍然可以查看。
:::

### 🕒 時區 {#timezone}

時區用於 RaidProtect 在固定時間發布的所有內容，例如[透明度彙總](./features/transparency.md#recaps)。

1. 執行 `/settings` 指令。
2. 在「**一般**」分頁中，點擊「**時區**」旁的「**編輯**」。
3. 選擇您的 UTC 時差，或輸入如 `Europe/Paris` 的時區識別碼，讓夏令時間自動處理。

若未設定，伺服器採用 UTC。

### 🔄 重置設定 {#reset}

1. 前往想要的設定。
2. 點擊「**重置**」。

重置會立即生效，不需確認。只有像刪除驗證碼這類具破壞性的動作，才會要求您確認。

### 🎨 自訂機器人 <span className="badge-premium">Premium</span> {#customize}

儀表板底部的「**自訂**」按鈕可以改變 RaidProtect 在您伺服器上的外觀：暱稱、頭像、橫幅、字型、暱稱的效果與顏色。

<Settings start="customize" />

接受的圖片格式為 PNG、JPEG、GIF 或 WebP，最大 10 MB。如果 Premium 結束，頭像、橫幅與暱稱樣式會恢復為 RaidProtect 的預設值；暱稱則會保留。

## 您的伺服器適合什麼設定？ {#quelle-config}

`/setup` 精靈已涵蓋了基本需求。如果您從零開始，或是正在用 AI 協助準備安裝，請找出符合您伺服器的情況：每個需求都指向能解決它的功能。

- **[突襲](/zh-TW/learn/discord-raid)、一次湧入的大批帳號**：[Auto RaidMode](./features/raid-mode.md) 會在攻擊期間封鎖或過濾新成員，而 [DISCON](./features/discon.md) 讓您一鍵強化整個伺服器。
- **[垃圾訊息](/zh-TW/learn/spam-discord)、廣告、詐騙連結**：[Antispam](./features/anti-spam.mdx) 會自動處罰，而 [HoneyPot](./features/honeypot.md) 則誘捕垃圾訊息帳號。
- **大量加入的[機器人](/zh-TW/learn/self-bot)**：[驗證碼](./features/captcha.md)讓每位新成員證明自己是人類，而[帳號最短註冊時長](./features/onboarding.md#minage)則擋下前一天才建立的帳號。
- **圖片詐騙**（假贈品活動、網路釣魚）：[圖片過濾器](./features/scam-images.md)會偵測並刪除它們。
- **[nuke](/zh-TW/learn/discord-nuke) 的風險或被盜的工作人員帳號**：套用[最小權限](/zh-TW/learn/least-privilege)原則與 [Authentification Manager](./features/authentication-manager.mdx)。
- **能協助您管理的社群**：啟用[檢舉](./features/reports.md)。

接著再依您的伺服器調整[處罰](./features/sanctions.mdx)（踢出、超時、停權、監禁）。

:::info 設定上有問題？
如果您遇到問題，請參閱[故障排除](./guides/malfunctions.md)一節，或加入我們的[支援伺服器](https://raidprotect.bot/discord)尋求協助。
:::
