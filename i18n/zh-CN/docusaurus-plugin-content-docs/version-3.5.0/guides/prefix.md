---
title: 消息命令
description: "启用 RaidProtect 的消息命令作为斜杠命令的补充，选择命令前缀，并为其应用 Discord 的权限设置。"
---

import { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

## 前缀已停用（默认） {#disabled}

默认情况下，RaidProtect 只使用斜杠命令（`/`），这样使用起来直观，也与 Discord 的标准保持一致。

## 消息命令（可选） {#activated}

如果您更习惯在消息中输入某些命令，请选择一个前缀，例如 `?`。设置后，以下命令即可通过该前缀使用：

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

## 💬 选择前缀 {#config}

1. 使用 [`/settings` 命令](../setup.md#settings)。
2. 在“**常规**”选项卡中，点击“**消息命令**”旁边的“**编辑**”。
3. 从列表中选择一个前缀（`?`、`!`、`>` 或 `$`），或在“**自定义前缀**”中输入您自己的前缀（最多三个字符，优先于列表中的选择）。选择“**已停用**”可关闭消息命令。
4. 如果希望 RaidProtect 在读取到包含命令的消息后立即将其删除，请勾选“**删除命令消息**”。

<SettingsModal name="prefix" />

:::note
即使设置了前缀，斜杠命令（`/`）仍然可用。
请避免使用其他机器人已在使用的前缀，以免命令冲突。
:::

## 🔒 应用命令权限 {#permissions}

RaidProtect 命令的权限在 Discord 中设置：**服务器设置 → 整合 → RaidProtect**。您可以在那里按角色、成员或频道允许或禁止每条命令。Discord 只会将这些权限应用于斜杠命令。

若要让它们同样适用于消息命令，以及“**处罚用户**”菜单（右键点击成员）提供的处罚：

1. 使用 [`/settings` 命令](../setup.md#settings)。
2. 在“**常规**”选项卡中，点击“**权限**”旁边的“**编辑**”。
3. 勾选“**应用整合中的权限设置**”。

<SettingsModal name="permissions" />

这样，被允许使用 `/ban` 的成员就可以通过“**处罚用户**”菜单执行封禁，而被禁止使用 `/ban` 的成员也将无法再使用 `?ban`。此选项默认关闭。

:::warning
Discord 的**整合**菜单仅在电脑端和网页端应用中提供，手机端没有。
:::
