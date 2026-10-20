---
title: 安装
description: "几分钟内通过 /setup 向导和 /settings 控制面板，在您的 Discord 服务器上安装并配置 RaidProtect。"
---

import Head from '@docusaurus/Head';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

<Head>
  <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"在 Discord 服务器上配置 RaidProtect","description":"使用 /setup 和 /settings 命令安装并配置 RaidProtect 防护机器人。","step":[{"@type":"HowToStep","position":1,"name":"运行 /setup","text":"在机器人可用的频道中输入 /setup，打开安装向导。"},{"@type":"HowToStep","position":2,"name":"选择模块","text":"在“选择要安装的模块”菜单中选择要安装的功能，然后点击“启用”。"},{"@type":"HowToStep","position":3,"name":"确认汇总","text":"机器人会显示它将创建和启用的内容汇总。再次点击“启用”即可应用。"},{"@type":"HowToStep","position":4,"name":"使用 /settings 调整","text":"随时可以使用 /settings：控制面板将设置分为五个选项卡：常规、新成员、防护、管理和实用工具。"}]}).replace(/</g, '\\u003c')}</script>
</Head>

RaidProtect 通过两个命令进行配置：[`/setup`](#install) 是一次性安装基本防护的向导；[`/settings`](#settings) 是控制面板，您可以随时在其中调整其余所有设置。本指南将介绍如何使用它们。

## 从哪里开始 {#etapes}

对于从零开始的服务器，建议按以下顺序操作：

1. **运行 [`/setup`](#install)**，选择要安装的模块。RaidProtect 会创建日志频道以及所需的频道和角色，并在汇总确认后应用更改。
2. **打开 [`/settings`](#settings) 的“新成员”选项卡**：设置[验证码](./features/captcha.md)、[Auto RaidMode](./features/raid-mode.md) 和[新成员欢迎](./features/onboarding.md)。
3. **打开“管理”选项卡**：检查日志频道和[处罚](./features/sanctions.mdx)（监禁角色和禁言角色）。
4. **在“防护”选项卡中设置 [Antispam](./features/anti-spam.mdx)**：使用预设即可快速上手。

:::info Discord 社区
只有少数设置需要 Discord 的[社区模式](./guides/community.md)，例如 Auto RaidMode 的邀请封锁和[私信锁定](./features/dm-lock.mdx)。验证码无需社区模式即可使用。
:::

## 引导式安装 {#install}

`/setup` 命令仅限管理员使用。它会一次性安装您选择的模块，并使用经过验证的默认值，之后您可以在 `/settings` 中再做调整。

### 🔧 选择模块 {#recommended}

1. 使用 `/setup` 命令。
2. 在“**选择要安装的模块**”菜单中，选择所需的功能：消息命令、Auto RaidMode、验证码、账号最短注册时长、Antispam、举报、标签角色、私信锁定和 HoneyPot。已启用的模块会预先勾选。
3. 点击“**启用**”。
4. 机器人会汇总它将创建或复用的内容。再次点击“**启用**”即可应用，或点击“**返回**”修改所选内容。

<Settings start="setup" />

确认后，RaidProtect 将：

- 创建 `#raidprotect-logs` 频道（若不存在），仅对管理员和添加机器人的人可见；
- 移除 `@everyone` 的危险权限（管理员、封禁、踢出、管理服务器、频道、角色、消息、Webhook 和子区、提及 @everyone、禁言成员）；
- 以默认值启用所选的每个模块：前缀 `?`、Auto RaidMode 为 10 秒内 10 名成员、面板模式的验证码（使用 `#验证` 频道和 `@未验证` 角色）、账号最短注册时长 6 小时、启用 Antispam 和举报、`@标签` 角色、私信锁定，以及 [HoneyPot](./features/honeypot.md) 的陷阱频道。

:::tip 停用模块
在 `/setup` 中取消勾选模块并不会停用它。若要关闭某项功能，请通过 [`/settings`](#settings) 操作。
:::

[自动角色和欢迎消息](./features/onboarding.md)不属于该向导：请在 `/settings` 的“**新成员**”选项卡中设置。

### 🧭 新安装向导 <span className="badge-experiment">试验中</span> {#wizard}

新的 `/setup` 向导用引导式流程取代了模块列表：

- **逐部分设置**：常规（含服务器语言）、新成员、防护和管理，一次一步。**精简视图**可在一个屏幕上汇总全部内容，只需点击一下。
- **贴合实际的建议**：根据服务器的规模、是否公开、是否为社区服务器或是否有标签，向导会预先勾选推荐的防护并说明原因。
- **更多模块**：[欢迎消息](./features/onboarding.md#welcome-message)（含其频道）、会删除指向其他服务器的邀请的[其他服务器](./features/automod.md#servers)过滤器，以及您所选频道上的[预防性慢速模式](./features/slowmode.md)（[Premium](/zh-CN/premium)）。向导中还会介绍 [DISCON](./features/discon.md)：它始终处于启用状态，无需安装任何内容。
- **开始前的检查**：它会提示 RaidProtect 缺少的权限以及位于其角色之上的角色，并提供“**重新检查**”按钮。
- **汇总**将要创建、修改或设置的内容。在点击“**安装**”之前不会应用任何更改。
- **已配置的服务器只会被检查，不会被重做**：已有的验证码面板和已启用的私信锁定都会保留。
- **之后**：安装的最后会显示[安全审计](./features/audit.md)的预览，并提供快捷方式，可测试验证码、自定义欢迎消息或打开全部设置。失败的步骤可通过重新运行 `/setup` 来继续。

:::info 试验中：Shield Update
新的安装向导将随 **Shield Update** 推出，计划在 3.6.0 版本发布。目前仅向少数服务器开放。
:::

## 修改配置 {#settings}

`/settings` 命令会打开 RaidProtect 的控制面板。它仅限管理员使用，并以仅您自己可见的临时私密消息形式显示。

### 🔍 控制面板 {#menu}

设置分布在五个选项卡中：

- **常规**：[语言](./language.md)、[消息命令](./guides/prefix.md)、[权限](./guides/prefix.md#permissions)和服务器时区。
- **新成员**：[Auto RaidMode](./features/raid-mode.md)、[验证码](./features/captcha.md)、[账号最短注册时长](./features/onboarding.md#minage)、[自动角色](./features/onboarding.md#autorole)和[欢迎消息](./features/onboarding.md#welcome-message)。
- **防护**：[DISCON](./features/discon.md)\*、[Antispam](./features/anti-spam.mdx)、[Automod](./features/automod.md)（[图片过滤器](./features/scam-images.md)和[其他服务器](./features/automod.md#servers)\*）、[HoneyPot](./features/honeypot.md)、[预防性慢速模式](./features/slowmode.md)\*、[Authentification Manager](./features/authentication-manager.mdx) 和[私信锁定](./features/dm-lock.mdx)。
- **管理**：[处罚](./features/sanctions.mdx)、[多账号](./features/alt-accounts.md)\*、日志、[举报](./features/reports.md)和[透明度](./features/transparency.md)。
- **实用工具**：[标签角色](./features/tag-role.md)、[频道锁定重命名](./features/channel-lock.md)、[在勤角色](./features/moderation.mdx#onduty)和消息缓存。

\* 试验中：这些行仅出现在可使用 Shield Update（DISCON、其他服务器、预防性慢速模式）或 Identity Update（多账号）的服务器上，属于 [Premium](/zh-CN/premium) 公开测试版。

每一行都会显示该设置的当前值和一个按钮：“**配置**”会打开专属界面，“**编辑**”会打开输入窗口。所有更改都会立即生效。

更新之后的两周内，**新**标记会标出刚刚加入的设置，在您打开其所在选项卡之前，该选项卡上也会有此标记。

请在下方探索控制面板，按钮均可点击：

<Settings start="home:arrivals" />

:::info Premium 功能
仅限 [Premium](/zh-CN/premium) 的界面仍可查看。
:::

### 🕒 时区 {#timezone}

时区用于 RaidProtect 在固定时间发布的所有内容，例如[透明度汇总](./features/transparency.md#recaps)。

1. 使用 `/settings` 命令。
2. 在“**常规**”选项卡中，点击“**时区**”旁边的“**编辑**”。
3. 选择您的 UTC 偏移，或输入时区标识（如 `Europe/Paris`），以便自动处理夏令时。

若未设置，服务器使用 UTC。

### 🔄 重置设置 {#reset}

1. 进入所需的设置项。
2. 点击“**重置**”。

重置会立即生效，无需确认。只有删除验证码等破坏性操作才会要求您确认。

### 🎨 自定义机器人 <span className="badge-premium">Premium</span> {#customize}

控制面板底部的“**自定义**”按钮可更改 RaidProtect 在您服务器上的外观：昵称、头像、横幅、字体、昵称特效和颜色。

<Settings start="customize" />

支持的图片格式为 PNG、JPEG、GIF 或 WebP，大小不超过 10 MB。如果 Premium 到期，头像、横幅和昵称样式将恢复为 RaidProtect 的默认样式；昵称会保留。

## 适合您服务器的配置 {#quelle-config}

`/setup` 向导已涵盖了基本需求。如果您从零开始，或正借助 AI 筹备安装，请对照适合您服务器的情形：每种需求都指向能解决它的功能。

- **[突袭](/zh-CN/learn/discord-raid)，大量账号一下子涌入**：[Auto RaidMode](./features/raid-mode.md) 会在攻击期间封锁或过滤新成员，[DISCON](./features/discon.md) 则让您一键加固整个服务器。
- **[垃圾信息](/zh-CN/learn/spam-discord)、广告、诈骗链接**：[Antispam](./features/anti-spam.mdx) 会自动处罚，[HoneyPot](./features/honeypot.md) 则诱捕垃圾信息账号。
- **大批[机器人](/zh-CN/learn/self-bot)加入**：[验证码](./features/captcha.md)让每位新成员证明自己是真人，[账号最短注册时长](./features/onboarding.md#minage)则排除前一天刚创建的账号。
- **图片诈骗**（虚假抽奖、网络钓鱼）：[图片过滤器](./features/scam-images.md)会检测并删除它们。
- **存在 [Nuke](/zh-CN/learn/discord-nuke) 风险，或工作人员账号被盗**：应用[最小权限](/zh-CN/learn/least-privilege)原则和 [Authentification Manager](./features/authentication-manager.mdx)。
- **社区可以协助您进行管理**：启用[举报](./features/reports.md)。

然后根据您的服务器调整[处罚](./features/sanctions.mdx)（踢出、超时、封禁、监禁）。

:::info 遇到配置问题？
如果遇到问题，请查阅[故障排查](./guides/malfunctions.md)部分，或加入我们的[支持服务器](https://raidprotect.bot/discord)获取帮助。
:::
