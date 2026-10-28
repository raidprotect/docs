---
title: 启用社区
description: "启用服务器的 Discord 社区功能，解锁 RaidProtect 所需的安全设置：私信锁定、突袭模式等。"
---

启用社区后，会开放 Discord 的多项高级安全设置，RaidProtect 的部分功能依赖这些设置：
- [私信锁定](../features/dm-lock.mdx)（**DM Lock**）；
- [突袭模式](../features/raid-mode.md)和[加入锁定](../features/join-lock.mdx)，**仅限**突袭期间的处理方式为“**封锁邀请**”时（默认设置）。

[验证码](../features/captcha.md)以及突袭模式的其他处理方式（“**踢出新加入的成员**”、“**发送验证码**”、“**突袭期间冻结验证码**”）无需启用社区即可使用。

## 🚦 前提条件 {#requirement}

- 是 Discord 服务器的管理员。

## 🚩 启用社区功能 {#steps}

1. **打开服务器设置**
   - 点击左上角的服务器名称 > “服务器设置”。

2. **进入“社区”部分**
   - 在侧边栏中打开**启用社区**选项卡，然后点击**开始使用**。

:::note
如果服务器已启用社区，该部分的名称将是**社区概览**。
:::

3. **按照启用向导操作**
   - 为所有成员启用邮箱验证。
   - 启用不当内容过滤器。
   - 设置规则频道和公告频道。
   - 接受社区服务器使用准则。

4. **完成设置**
   - 点击“完成设置”。启用完成后，您的服务器上会显示“社区”徽章。

![启用 Discord 社区的截图](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-enable-community.webp)

## 💡 启用后使用 DM Lock 和突袭模式模块 {#use}

1. 使用 [`/settings` 命令](../setup.md#settings)。
2. 对于[私信锁定](../features/dm-lock.mdx)，打开“**防护**”选项卡，点击“**私信锁定**”旁边的“**编辑**”。
3. 对于[突袭模式](../features/raid-mode.md#config)，打开“**新成员**”选项卡，点击“**Auto RaidMode**”旁边的“**配置**”。

如果出现提示您启用社区的提示框，请点击“**刷新**”：社区启用后，它就会消失。
