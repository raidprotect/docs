---
title: インストール
description: "/setup ウィザードと /settings ダッシュボードを使って、数分で Discord サーバーに RaidProtect をインストールし、設定します。"
---

import Head from '@docusaurus/Head';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

<Head>
  <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"Discord サーバーで RaidProtect を設定する","description":"/setup コマンドと /settings コマンドで、保護ボット RaidProtect をインストールして設定します。","step":[{"@type":"HowToStep","position":1,"name":"/setup を実行する","text":"ボットが有効なチャンネルで /setup と入力し、インストールウィザードを開きます。"},{"@type":"HowToStep","position":2,"name":"モジュールを選ぶ","text":"「インストールするモジュールを選択」メニューでインストールしたい機能を選び、「有効化」をクリックします。"},{"@type":"HowToStep","position":3,"name":"概要を確認する","text":"ボットが作成・有効化する内容の概要を表示します。もう一度「有効化」をクリックして適用します。"},{"@type":"HowToStep","position":4,"name":"/settings で調整する","text":"/settings はいつでも使えます。ダッシュボードでは設定が 5 つのタブ（全般、参加、保護、モデレーション、ユーティリティ）にまとめられています。"}]}).replace(/</g, '\\u003c')}</script>
</Head>

RaidProtect は 2 つのコマンドで設定します。基本的な保護をまとめてインストールするウィザード [`/setup`](#install) と、それ以外のすべてをいつでも調整できるダッシュボード [`/settings`](#settings) です。このガイドでは、その使い方を説明します。

## どこから始めるか {#etapes}

ゼロから始めるサーバーには、次の順序をおすすめします。

1. **[`/setup`](#install) を実行**して、インストールするモジュールを選びます。RaidProtect がログチャンネルと必要なチャンネル・ロールを作成し、概要を確認したうえで変更を適用します。
2. **[`/settings`](#settings) の「参加」タブを開き**、[キャプチャ](./features/captcha.md)、[オート RaidMode](./features/raid-mode.md)、[新規メンバーのウェルカム](./features/onboarding.md)を設定します。
3. **「モデレーション」タブを開き**、ログチャンネルと[処罰](./features/sanctions.mdx)（Jail とミュートのロール）を確認します。
4. 「保護」タブで**[スパム対策](./features/anti-spam.mdx)を設定**します。始めるにはプリセットで十分です。

:::info Discord コミュニティ
Discord の[コミュニティモード](./guides/community.md)が必要なのは、オート RaidMode の招待ブロックや [DM の遮断](./features/dm-lock.mdx)など、一部の設定だけです。キャプチャはコミュニティなしでも動作します。
:::

## ガイド付きインストール {#install}

`/setup` コマンドは管理者専用です。選んだモジュールを、実績のある既定値でまとめてインストールします。その後 `/settings` で調整できます。

### 🔧 モジュールを選ぶ {#recommended}

1. `/setup` コマンドを実行します。
2. 「**インストールするモジュールを選択**」メニューで、希望する機能（メッセージコマンド、オート RaidMode、キャプチャ、アカウントの最低作成日数、スパム対策、通報、タグロール、DM の遮断、ハニーポット）を選びます。すでに有効なモジュールには、あらかじめチェックが入っています。
3. 「**有効化**」をクリックします。
4. ボットが、作成または再利用する内容をまとめて表示します。適用するにはもう一度「**有効化**」を、選択を変更するには「**戻る**」をクリックします。

<Settings start="setup" />

確定すると、RaidProtect は次のことを行います。

- `#raidprotect-logs` チャンネルが存在しなければ作成します。管理者とボットを追加した人にだけ表示されます。
- `@everyone` から危険な権限（管理者、BAN、キック、サーバー管理、チャンネル・ロール・メッセージ・ウェブフック・スレッドの管理、@everyone のメンション、メンバーのタイムアウト）を外します。
- 選んだ各モジュールを既定値で有効にします。プレフィックス `?`、オート RaidMode は 10 秒間に 10 人、キャプチャはパネルモードで `#認証` チャンネルと `@未認証` ロール、アカウントの最低作成日数は 6 時間、スパム対策と通報を有効化、`@Tag` ロール、DM の遮断、[ハニーポット](./features/honeypot.md)の罠チャンネル。

:::tip モジュールを無効にする
`/setup` でモジュールのチェックを外しても、無効にはなりません。機能を停止するには、[`/settings`](#settings) を使ってください。
:::

[自動ロールとようこそメッセージ](./features/onboarding.md)はウィザードに含まれていません。`/settings` の「**参加**」タブで設定してください。

### 🧭 新しいインストールウィザード {#wizard}

新しい `/setup` ウィザードでは、モジュール一覧に代わって、ガイド付きの流れでインストールを進めます。

- **セクションごと**：全般（サーバーの言語を含む）、参加、保護、モデレーションを、1 ステップずつ進めます。**コンパクト表示**では、すべてを 1 つの画面にまとめて、ワンクリックで進められます。
- **状況に合わせた提案**：サーバーの規模、公開サーバーかどうか、コミュニティサーバーかどうか、タグがあるかどうかに応じて、おすすめの保護機能にあらかじめチェックを入れ、その理由も表示します。
- **より多くのモジュール**：[ようこそメッセージ](./features/onboarding.md#welcome-message)（チャンネルを含む）、他サーバーへの招待を削除する[他のサーバー](./features/automod.md#servers)フィルター、選んだチャンネルへの[予防スローモード](./features/slowmode.md)（[Premium](/ja/premium)）。[DISCON](./features/discon.md) についてもここで説明されます。何もインストールしなくても常に有効です。
- **開始前のチェック**：RaidProtect に不足している権限や、RaidProtect より上に配置されているロールを通知し、「**再チェック**」ボタンを表示します。
- 作成、変更、設定される内容の**概要**。「**インストール**」を押すまで、何も適用されません。
- **設定済みのサーバーは、やり直さずに確認だけ**：すでにあるキャプチャのパネルや、有効な DM の遮断はそのまま維持されます。
- **その後**：[セキュリティ監査](./features/audit.md)のプレビューでインストールが終わり、キャプチャのテスト、ようこそメッセージのカスタマイズ、すべての設定を開くためのショートカットが表示されます。失敗したステップは、`/setup` を再実行すればやり直せます。

## 設定を変更する {#settings}

`/settings` コマンドは、RaidProtect のダッシュボードを開きます。管理者専用で、あなたにだけ見える一時的なプライベートメッセージとして表示されます。

### 🔍 ダッシュボード {#menu}

設定は 5 つのタブに整理されています。

- **全般**：[言語](./language.md)、[メッセージコマンド](./guides/prefix.md)、[権限](./guides/prefix.md#permissions)、サーバーのタイムゾーン。
- **参加**：[オート RaidMode](./features/raid-mode.md)、[キャプチャ](./features/captcha.md)、[アカウントの最低作成日数](./features/onboarding.md#minage)、[自動ロール](./features/onboarding.md#autorole)、[ようこそメッセージ](./features/onboarding.md#welcome-message)。
- **保護**：[DISCON](./features/discon.md)、[スパム対策](./features/anti-spam.mdx)、[Automod](./features/automod.md)（[画像フィルター](./features/scam-images.md)、[他のサーバー](./features/automod.md#servers)、[ファイルの拡張子](./features/automod.md#files)）、[ハニーポット](./features/honeypot.md)、[予防スローモード](./features/slowmode.md)、[Authentification Manager](./features/authentication-manager.mdx)、[DM の遮断](./features/dm-lock.mdx)。
- **モデレーション**：[処罰](./features/sanctions.mdx)、[複数アカウント](./features/alt-accounts.md)\*、ログ、[通報](./features/reports.md)、[透明性](./features/transparency.md)。
- **ユーティリティ**：[タグロール](./features/tag-role.md)、[チャンネルロック](./features/channel-lock.md)、[勤務中ロール](./features/moderation.mdx#onduty)、メッセージのキャッシュ。

\* 実験中：この項目は、Identity Update（複数アカウント）を利用できるサーバー、つまり [Premium](/ja/premium) の公開ベータでのみ表示されます。

各行には、設定の現在の値とボタンが表示されます。「**設定**」は専用の画面を開き、「**編集**」は入力ウィンドウを開きます。変更はすべて即座に反映されます。

アップデート後の 2 週間は、追加されたばかりの設定に**新着**バッジが表示されます。そのタブも、開くまでバッジが付きます。

下のダッシュボードを試してみてください。ボタンはクリックできます。

<Settings start="home:arrivals" />

:::info Premium 機能
[Premium](/ja/premium) 専用の画面も、閲覧はできます。
:::

### 🕒 タイムゾーン {#timezone}

タイムゾーンは、[透明性のまとめ](./features/transparency.md#recaps)など、RaidProtect が決まった時刻に投稿するあらゆるものに使われます。

1. `/settings` コマンドを実行します。
2. 「**全般**」タブで、「**タイムゾーン**」の横にある「**編集**」をクリックします。
3. UTC オフセットを選ぶか、`Europe/Paris` のようなタイムゾーン識別子を入力すると、夏時間が自動で処理されます。

設定しない場合、サーバーは UTC になります。

### 🔄 設定をリセットする {#reset}

1. 目的の設定に移動します。
2. 「**リセット**」をクリックします。

リセットは確認なしで即座に適用されます。キャプチャの削除など、破壊的な操作だけが確認を求めます。

### 🎨 ボットをカスタマイズする <span className="badge-premium">Premium</span> {#customize}

ダッシュボード下部の「**カスタマイズ**」ボタンで、サーバー上での RaidProtect の見た目（ニックネーム、アバター、バナー、フォント、ニックネームの効果と色）を変更できます。

<Settings start="customize" />

使える画像は PNG、JPEG、GIF、WebP で、10 MB までです。Premium が終了すると、アバター、バナー、ニックネームのスタイルは RaidProtect のものに戻ります。ニックネームは維持されます。

## サーバーに合う設定は？ {#quelle-config}

`/setup` ウィザードで基本的な部分はすでにカバーされます。ゼロから始める場合や、AI を使ってインストールを準備する場合は、ご自身のサーバーに当てはまるものを探してください。それぞれの必要性に対応する機能を紹介しています。

- **[レイド](/ja/learn/discord-raid)、大量のアカウントが一気に押し寄せる**：[オート RaidMode](./features/raid-mode.md) が攻撃の間、参加をブロックまたはフィルターし、[DISCON](./features/discon.md) ならワンクリックでサーバー全体を強化できます。
- **[スパム](/ja/learn/spam-discord)、宣伝、詐欺リンク**：[スパム対策](./features/anti-spam.mdx)が自動で処罰し、[ハニーポット](./features/honeypot.md)がスパムアカウントを罠にかけます。
- **[ボット](/ja/learn/self-bot)の大量参加**：[キャプチャ](./features/captcha.md)で新規参加者全員に人間であることを証明させ、[アカウントの最低作成日数](./features/onboarding.md#minage)で前日に作られたアカウントを排除します。
- **画像による詐欺**（偽のプレゼント企画、フィッシング）：[画像フィルター](./features/scam-images.md)が検出して削除します。
- **[ヌーク](/ja/learn/discord-nuke)のリスクや、運営アカウントの乗っ取り**：[最小権限](/ja/learn/least-privilege)と[Authentification Manager](./features/authentication-manager.mdx)を適用してください。
- **モデレーションを手伝ってくれるコミュニティ**：[通報](./features/reports.md)を有効にしてください。

その後、[処罰](./features/sanctions.mdx)（キック、タイムアウト、BAN、Jail）をサーバーに合わせて調整します。

:::info 設定に問題がありますか？
問題が発生した場合は、[不具合](./guides/malfunctions.md)のセクションをご覧になるか、[サポートサーバー](https://raidprotect.bot/discord)に参加してサポートを受けてください。
:::
