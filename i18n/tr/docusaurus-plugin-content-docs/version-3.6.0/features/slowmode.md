---
title: Önleyici yavaş mod
description: "RaidProtect'in önleyici yavaş modu, okunabilir bir mesaj akışı sürdürmek için Discord sunucunuzdaki kanalların yavaş modunu otomatik olarak ayarlar."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

Yalnızca [Premium](/tr/premium) sunuculara ayrılmış olan RaidProtect'in **önleyici yavaş modu**, dakika başına **mesaj hızını** tutturmak için kanallarınızın [yavaş modunu](./moderation.mdx#slowmode) otomatik olarak ayarlar. Bir kanal hızlandığında (duyuru, canlı yayın, yeni üye akını, bir [baskın](/tr/learn/discord-raid) başlangıcı) yavaş modu yükseltiriz; sakinleştiğinde düşürürüz. Moderatörlerinizin elle ayarlamak için artık sohbeti izlemesi gerekmez.

## ❓ Nasıl çalışır? {#working}

- **Bir mesaj hızı**: düzenlenen her kanal için, dakikada kaç mesaj alabileceğini seçersiniz (varsayılan 30). Bunun üstünde yavaş mod kendiliğinden artar.
- **Sınırlar**: yavaş mod her zaman kanal için belirlediğiniz **minimum yavaş mod** ile **maksimum yavaş mod** arasında kalır.
- **Sürekli bir ayarlama**: yavaş modu gerçek akış hızına göre ayarlarız ve bir kanal hızlandığında hemen yükselir.
- **Kademeli bir düşüş**: kanal sakinleştiğinde yavaş mod yavaş yavaş minimuma döner.
- **Denetim günlüğü**: her değişiklik “Slowmode automatique” gerekçesini taşır.

## 🛠️ Önleyici yavaş modun yapılandırması {#config}

### Düzenlenen bir kanal ekleme {#add}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Koruma**” sekmesini açın.
3. “**Önleyici yavaş mod**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. Boş bir yuvanın yanındaki “**Ekle**”ye tıklayın.
5. Kanalı seçin (metin, duyuru, ses veya sahne kanalı: bir ses kanalının yavaş modu, onun yerleşik metin kanalını düzenler).

<Settings start="slowmode" />

**Sınırlar:** sunucu başına 6 düzenlenen kanal.

:::warning Gerekli izinler
RaidProtect'in düzenlenen her kanalda `Kanalları Yönet` iznine sahip olması gerekir.
:::

### Bir kanalı ayarlama {#channel}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Koruma**” sekmesini açın.
3. “**Önleyici yavaş mod**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. Kanalın yanındaki “**Düzenle**”ye tıklayın.
5. “**Mesaj hızı**”nı, “**Minimum yavaş mod**”u ve “**Maksimum yavaş mod**”u seçin.

<Settings start="slowmodeChannel" />

| Ayar | Önerilen değerler | Varsayılan |
|---|---|---|
| **Mesaj hızı** | dakikada 5 ila 120 mesaj | 30 mesaj / dk |
| **Minimum yavaş mod** | 0 ila 10 saniye | 0 saniye (minimum yok) |
| **Maksimum yavaş mod** | 5 saniye ila 10 dakika | 2 dakika |

Listede olmayan bir değer için “**Özelleştir**”e tıklayın ve kendi değerlerinizi girin (örneğin dakikada `40` mesaj, minimum `0s`, maksimum `2m 30s`). Yavaş mod, Discord'un sınırı olan 6 saati aşamaz.

<SettingsModal name="slowmodeCustom" />

Bir kanalın ekranından ayrıca şunları yapabilirsiniz:
- sağ üstteki anahtarla düzenlemeyi durdurmak veya yeniden başlatmak. Düzenlemeyi durdurmak kanalın yavaş modunu 0'a getirir;
- bu ayarları düzenlenen tüm kanallarınıza kopyalamak için “**Düzenlenen tüm kanallara uygula**”ya tıklamak;
- yuvayı serbest bırakmak için “**Sil**”e tıklamak.

## 🕒 Önleyici yavaş mod ve /slowmode komutu {#manual}

Bir moderatör düzenlenen bir kanalda [`/slowmode` komutunu](./moderation.mdx#slowmode) kullanırsa, elle girdiği değer uygulanır ve o kanal için **otomatik düzenleme devre dışı bırakılır**. Bir mesaj bunu bildirir. Düzenlemeyi yeniden başlatmak için `/settings` içinde kanalın ekranından yeniden etkinleştirin.

## Sık sorulan sorular {#faq}

### Önleyici yavaş mod ile anti-spam arasındaki fark nedir?

[Anti-spam](./anti-spam.mdx), spam yapan üyelere yaptırım uygular. Önleyici yavaş mod kimseye yaptırım uygulamaz: genel akış hızı çok yükseldiğinde okunabilir bir tartışmayı korumak için bütün bir kanalı yavaşlatır.

### Kaç kanal düzenlenebilir?

Sunucu başına en fazla 6 kanal; her birinin kendi mesaj hızı ve sınırları vardır.

### Önleyici yavaş mod ücretsiz mi?

Hayır, Premium sunuculara ayrılmıştır.

### Yavaş modu elle ayarlarsam ne olur?

/slowmode komutu değerinizi uygular ve o kanalın otomatik düzenlemesini devre dışı bırakır. /settings içinde Koruma sekmesi, Önleyici yavaş mod altından yeniden etkinleştirebilirsiniz.
