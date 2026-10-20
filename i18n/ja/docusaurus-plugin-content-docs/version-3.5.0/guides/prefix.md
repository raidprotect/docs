---
title: メッセージコマンド
description: "スラッシュコマンドに加えて RaidProtect のメッセージコマンドを有効にし、プレフィックスを選んで、Discord の権限を適用します。"
---

import { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

## プレフィックスは無効（既定） {#disabled}

既定では、RaidProtect はスラッシュコマンド（`/`）のみを使用します。これにより、Discord の標準に沿った直感的で一貫した操作が保証されます。

## メッセージコマンド（任意） {#activated}

一部のコマンドをメッセージとして入力したい場合は、`?` などのプレフィックスを選んでください。次のコマンドがプレフィックス付きで使えるようになります。

- [`?raidmode`](../features/raid-mode.md) と [`?joinlock`](../features/join-lock.mdx)
- [`?ban`](../features/moderation.mdx#ban)、[`?tempban`](../features/moderation.mdx#tempban)、[`?softban`](../features/moderation.mdx#softban)、[`?unban`](../features/moderation.mdx#unban)
- [`?kick`](../features/moderation.mdx#kick)
- [`?mute` | `?timeout` | `?tempmute`](../features/moderation.mdx#timeout) と [`?unmute` | `?untimeout` | `?untempmute`](../features/moderation.mdx#untimeout)
- [`?jail`](../features/moderation.mdx#jail)、[`?tempjail`](../features/moderation.mdx#tempjail)、[`?unjail`](../features/moderation.mdx#unjail)
- [`?warn`](../features/moderation.mdx#warn)
- [`?slowmode` | `?slow`](../features/moderation.mdx#slowmode)
- [`?lock`](../features/channel-lock.md#lock) と [`?unlock`](../features/channel-lock.md#unlock)
- [`?clear` | `?clean`](../features/moderation.mdx#clear)
- [`?nick` | `?nickname` | `?rename` | `?setnick`](../features/moderation.mdx#nick)
- [`?userinfo` | `?ui`](../features/utilities.mdx#userinfo)、[`?serverinfo` | `?ginfo`](../features/utilities.mdx#serverinfo)、[`?inviteinfo` | `?ii`](../features/utilities.mdx#inviteinfo)

## 💬 プレフィックスを選ぶ {#config}

1. [`/settings` コマンド](../setup.md#settings)を実行します。
2. 「**全般**」タブで、「**メッセージコマンド**」の横にある「**編集**」をクリックします。
3. 一覧（`?`、`!`、`>`、`$`）からプレフィックスを選ぶか、「**カスタムプレフィックス**」に好きなものを入力します（3 文字まで。一覧より優先されます）。メッセージコマンドを無効にするには「**無効**」を選びます。
4. コマンドを含むメッセージを RaidProtect が読み取った時点で削除するようにしたい場合は、「**実行時に削除**」にチェックを入れます。

<SettingsModal name="prefix" />

:::note
プレフィックスを設定しても、スラッシュコマンド（`/`）は引き続き使えます。
コマンドの競合を避けるため、他のボットがすでに使っているプレフィックスは避けてください。
:::

## 🔒 コマンドの権限を適用する {#permissions}

RaidProtect のコマンドの権限は、Discord 側で設定します：**サーバー設定 → 連携サービス → RaidProtect**。ここで、ロール、メンバー、チャンネルごとにコマンドを許可または禁止できます。ただし、Discord が適用するのはスラッシュコマンドのみです。

メッセージコマンドや、「**ユーザーを処罰**」メニュー（メンバーを右クリック）から行える処罰にも権限を適用するには、次の手順を行います。

1. [`/settings` コマンド](../setup.md#settings)を実行します。
2. 「**全般**」タブで、「**権限**」の横にある「**編集**」をクリックします。
3. 「**連携サービスの権限を適用する**」にチェックを入れます。

<SettingsModal name="permissions" />

これで、`/ban` の使用を許可されたメンバーは「**ユーザーを処罰**」メニューから BAN できるようになり、`/ban` の使用を禁止されたメンバーは `?ban` も使えなくなります。このオプションは既定では無効です。

:::warning
Discord の**連携サービス**メニューは、PC アプリと Web 版でのみ利用でき、モバイルでは利用できません。
:::
