---
title: Mesaj komutları
description: "RaidProtect'in mesaj komutlarını Slash komutlarına ek olarak etkinleştirin, ön eklerini seçin ve onlara Discord'un izinlerini uygulayın."
---

import { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

## Ön ek devre dışı (varsayılan) {#disabled}

Varsayılan olarak RaidProtect yalnızca Slash komutlarını (`/`) kullanır. Bu, Discord standartlarıyla uyumlu, sezgisel ve tutarlı bir kullanım sağlar.

## Mesaj komutları (isteğe bağlı) {#activated}

Bazı komutları bir mesajın içine yazmayı tercih ediyorsanız bir ön ek seçin, örneğin `?`. Bu komutlar o zaman bu ön ekle kullanılabilir hale gelir:

- [`?raidmode`](../features/raid-mode.md) ve [`?joinlock`](../features/join-lock.mdx)
- [`?ban`](../features/moderation.mdx#ban), [`?tempban`](../features/moderation.mdx#tempban), [`?softban`](../features/moderation.mdx#softban) ve [`?unban`](../features/moderation.mdx#unban)
- [`?kick`](../features/moderation.mdx#kick)
- [`?mute` | `?timeout` | `?tempmute`](../features/moderation.mdx#timeout) ve [`?unmute` | `?untimeout` | `?untempmute`](../features/moderation.mdx#untimeout)
- [`?jail`](../features/moderation.mdx#jail), [`?tempjail`](../features/moderation.mdx#tempjail) ve [`?unjail`](../features/moderation.mdx#unjail)
- [`?warn`](../features/moderation.mdx#warn)
- [`?slowmode` | `?slow`](../features/moderation.mdx#slowmode)
- [`?lock`](../features/channel-lock.md#lock) ve [`?unlock`](../features/channel-lock.md#unlock)
- [`?clear` | `?clean`](../features/moderation.mdx#clear)
- [`?nick` | `?nickname` | `?rename` | `?setnick`](../features/moderation.mdx#nick)
- [`?userinfo` | `?ui`](../features/utilities.mdx#userinfo), [`?serverinfo` | `?ginfo`](../features/utilities.mdx#serverinfo) ve [`?inviteinfo` | `?ii`](../features/utilities.mdx#inviteinfo)

## 💬 Ön eki seçme {#config}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Genel**” sekmesinde, “**Mesaj komutları**” yanındaki “**Düzenle**” düğmesine tıklayın.
3. Listeden bir ön ek seçin (`?`, `!`, `>` veya `$`) ya da “**Özel ön ek**” alanına kendi ön ekinizi girin (en fazla üç karakter, listeye göre önceliklidir). Mesaj komutlarını kapatmak için “**Devre dışı**” seçeneğini seçin.
4. RaidProtect'in komutu içeren mesajı okur okumaz silmesini istiyorsanız “**Çağrıldığında silme**” kutusunu işaretleyin.

<SettingsModal name="prefix" />

:::note
Slash komutları (`/`) bir ön ek olsa bile kullanılabilir kalır.
Komut çakışmalarını önlemek için başka botların zaten kullandığı ön eklerden kaçının.
:::

## 🔒 Komut izinlerini uygulama {#permissions}

RaidProtect komutlarının izinleri Discord'da ayarlanır: **Sunucu Ayarları → Entegrasyonlar → RaidProtect**. Her komutu rol, üye veya kanal bazında orada izinli veya yasaklı yapabilirsiniz. Discord bunları yalnızca Slash komutlarına uygular.

Bunların mesaj komutlarına ve “**Yaptırım uygula**” menüsünün (bir üyeye sağ tık) önerdiği yaptırımlara da uygulanması için:

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Genel**” sekmesinde, “**İzinler**” yanındaki “**Düzenle**” düğmesine tıklayın.
3. “**Entegrasyon izinlerini uygula**” kutusunu işaretleyin.

<SettingsModal name="permissions" />

`/ban` komutunu kullanma izni olan bir üye o zaman “**Yaptırım uygula**” menüsünden yasaklama yapabilir; `/ban` komutu kendisine yasaklanmış bir üye ise artık `?ban` komutunu kullanamaz. Seçenek varsayılan olarak devre dışıdır.

:::warning
Discord'un **Entegrasyonlar** menüsü yalnızca PC ve Web uygulamasında kullanılabilir, mobilde kullanılamaz.
:::
