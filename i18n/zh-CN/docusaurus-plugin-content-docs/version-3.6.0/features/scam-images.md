---
title: 诈骗图片
description: "RaidProtect 的反诈骗功能 ScamLens 会自动检测并删除您 Discord 服务器上的诈骗图片。默认启用，无需配置。"
---

import AntiScamMockup from '@site/src/components/DiscordMessage/mockups/anti-scam';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect 会自动保护您的服务器免受**诈骗图片**（加密货币诈骗、虚假抽奖、虚假赌场推广）的侵害。这项防护名为 **ScamLens**：它会分析发布的图片，删除其中已知的诈骗图片，并处罚发布该消息的账号（通常是[被盗账号](/zh-CN/learn/token-grabber)）。

<AntiScamMockup />

:::tip 无需任何配置
ScamLens **在 RaidProtect 加入您的服务器后便默认启用**。您会立即获得保护，无需任何配置。
:::

## ❓ 工作原理 {#working}

ScamLens 会将发布的每张图片与已知的诈骗图片进行比对。不会读取消息的任何文字内容。

根据比对结果：

- **确定匹配**：消息会被立即**删除**，其发送者会受到**处罚**。处罚日志会注明涉及的频道。
- **不确定的匹配**：消息会**出于谨慎**被删除，但不执行处罚。如果该图片之后被确认为诈骗，处罚可能会稍后到来。

处罚原因为“检测到诈骗（加密货币图片）”。在 [Premium](/zh-CN/premium) 服务器上，被处罚的成员还会收到一条私信。

ScamLens 只负责处理**图片**。其他类型的垃圾信息由 [Antispam](./anti-spam.mdx) 和 [HoneyPot](./honeypot.md) 负责。

## 🔧 配置 ScamLens {#config}

ScamLens 在“**防护**”选项卡的 **Automod** 模块中，于“**图片过滤器**”界面设置。

1. 使用 [`/settings` 命令](../setup.md#settings)。
2. 打开“**防护**”选项卡。
3. 点击“**Automod**”旁边的“**配置**”。
4. 点击“**图片**”旁边的“**配置**”。

<Settings start="imageFilter" />

### 启用或停用 ScamLens {#toggle}

在“**图片过滤器**”界面中，点击右上角的“**停用**”（或“**启用**”）。每次更改都会记录在您的日志中。

### 选择处罚及其时长 {#sanction}

在“**应用的处罚**”选择器中，选择：
- “**默认**”：若 [HoneyPot](./honeypot.md#sanction) 已启用，则采用其处罚，否则为临时禁言（超时）；
- 或某个具体的处罚：封禁、软封禁、监禁、踢出、禁言、超时或警告。

在“**处罚时长**”选择器中，选择 5 分钟、1 小时、1 天，或“**自定义值**”（例如 `30m`、`2h`、`7d`）。“**默认**”选项会沿用 HoneyPot 的时长（若已启用），否则为 **1 天**。在此处选择的时长为 ScamLens 独有，与 Antispam 和 HoneyPot 无关。它也适用于稍后到来的处罚。

:::info
- 未配置角色的**监禁**或**禁言**会变成**超时**。
- 公布处罚的公开消息遵循 [Antispam](./anti-spam.mdx#public-message) 的“**公开处罚消息**”设置，Premium 版可将其停用。
:::

## 🗂️ 图片目录 <span className="badge-premium">Premium</span> {#catalog}

除了由我们管理、应用于所有服务器的全局“加密货币诈骗”目录外，[Premium](/zh-CN/premium) 服务器还可以拦截**自己的图片**，无论其内容是什么：虚假 Nitro 的截图、针对您社区的诈骗素材、您服务器禁止的图片……

**上限：** 每个服务器 2 个列表，每次上传 10 张图片。

### 创建列表 {#lists}

1. 使用 [`/settings` 命令](../setup.md#settings)。
2. 打开“**防护**”选项卡。
3. 点击“**Automod**”旁边的“**配置**”。
4. 点击“**图片**”旁边的“**配置**”。
5. 在“**图片目录**”中，点击“**创建列表**”并为其命名。
6. 选择该列表的“**验证频道**”。
7. 点击“**添加图片**”并上传最多 10 张图片。结果会显示已添加的图片、已关联的变体、被忽略的重复项以及被拒绝的图片。

列表中的图片一旦再次出现在您的服务器上就会被删除，其发送者会受到上文所选的处罚。处罚原因会注明列表名称（“列表“_名称_”中的图片”）。未处罚时，删除操作会记录在您的管理日志中，并注明频道和列表。

:::warning 一份列表 = 一个图片登记库
请在一个列表中只放一种类型的内容。把毫无关联的图片混在同一个列表中会破坏检测：请改为创建第二个列表。
:::

### 验证频道 {#review}

当某张图片与您列表中的图片相似但没有确定匹配时，我们会在该列表的**验证频道**中提示（“需要确认，列表……”），并附带两个按钮：
- “**确认，属于违规**”：该图片加入目录，消息被删除，其发送者受到处罚；
- “**排除，属于正常内容**”：该图片不会再触发确认。

需要 `管理服务器` 权限才能做出裁决。没有验证频道时，不确定的匹配将保持静默。

## 📊 透明度 {#reports}

ScamLens 拦截的每一次诈骗：

- 会出现在您服务器的[透明度汇总](./transparency.md#recaps)中（“ScamLens 拦截了 X 次诈骗”）；
- 会计入 [HoneyPot](./honeypot.md) 的被举报账号计数；
- 会强化**所有使用 RaidProtect 的服务器**的防护。

### 我们的月度报告 {#recaps}

我们每个月都会发布 **[威胁天气](/blog/tags/threats)**，这是对 ScamLens 活动的公开总结。数据为自 [2026 年 2 月 14 日上线](/blog/scamlens-early-activation)以来，在所有受 RaidProtect 保护的服务器上的累计值：

| 报告 | 已删除的诈骗图片 | 已识别的被盗账号 |
|---|---|---|
| [1 个月总结](/blog/scamlens-1-month-recap) *（2026 年 3 月）* | 260,000 | 15,000 |
| [2026 年 4 月](/blog/threat-weather-april-2026) | 1,400,000 | 40,000 |
| [2026 年 5 月](/blog/threat-weather-may-2026) | 2,300,000 | 80,000 |
| [2026 年 6 月](/blog/threat-weather-june-2026) | 4,000,000 | 160,000 |

## 常见问题 {#faq}

### 需要配置 ScamLens 吗？

不需要。ScamLens 在 RaidProtect 加入您的服务器后便默认启用。您会立即获得保护，无需任何配置。

### ScamLens 只会拦截图片吗？

是的，ScamLens 只处理图片。默认情况下，它会拦截已知的诈骗图片。Premium 服务器还可以通过图片目录加入自己的图片。其他类型的垃圾信息由 [Antispam](./anti-spam.mdx) 和 [HoneyPot](./honeypot.md) 负责。

### 对诈骗图片会执行什么处罚？

默认情况下，ScamLens 采用您的 [HoneyPot](./honeypot.md#sanction) 的处罚和时长；如果未启用 HoneyPot，则为一天的超时。您可以在 /settings 的“防护”选项卡中，进入 Automod 模块的“图片过滤器”界面，选择其他处罚和时长。

### 如何停用 ScamLens？

在 /settings 的“防护”选项卡中，点击 Automod 旁边的“配置”，再点击图片旁边的“配置”，然后使用“图片过滤器”界面右上角的开关。
