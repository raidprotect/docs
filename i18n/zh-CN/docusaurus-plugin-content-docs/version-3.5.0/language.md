---
title: 语言
description: "更改 RaidProtect 的语言以适应您的社区：机器人支持 11 种语言，从法语到日语，也可以跟随 Discord 服务器的语言。"
---

import { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect 允许您选择机器人使用的语言，以便更好地适应您的 Discord 社区。

**公开消息：** 所设置的语言适用于 RaidProtect 在您服务器上发送的公开消息（日志、验证码、举报等）。

**临时消息：** 私密或临时消息仍以与机器人互动的用户的语言显示。

## 🌐 支持的语言列表 {#supported}

- **法语**
- **英语**
- **西班牙语**
- **德语**
- **巴西葡萄牙语**
- **意大利语**
- **土耳其语**
- **越南语**
- **日语**
- **简体中文**
- **繁体中文**

仅提供已完整翻译的语言。对于使用其他语言的 Discord 的成员，发给他们的临时回复会以英语显示。

## ⚙️ 更改机器人语言 {#change}

1. 使用 [`/settings` 命令](./setup.md#settings)。
2. 在“**常规**”选项卡中，点击“**语言**”旁边的“**编辑**”。
3. 在列表中选择所需的语言，然后确认。

<SettingsModal name="lang" />

更改会立即生效，并显示在服务器日志中。

### 跟随服务器语言 {#follow}

第一个选项“**跟随服务器语言**”会采用 Discord 社区设置中定义的主要语言。这是默认设置。如果该语言不在支持的语言之列，RaidProtect 将使用英语。

:::info
RaidProtect 的语言支持在不断完善！欢迎[提出建议](https://suggestions.raidprotect.bot)，告诉我们您希望机器人支持哪些语言；也可以为已提议的语言[投票](https://suggestions.raidprotect.bot)，促成它们的加入。
:::
