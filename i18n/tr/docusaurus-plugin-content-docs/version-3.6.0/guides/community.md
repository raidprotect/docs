---
title: Topluluğu etkinleştirme
description: "RaidProtect'in ihtiyaç duyduğu güvenlik ayarlarının kilidini açmak için sunucunuzun Discord topluluğunu etkinleştirin: DM Kapatma, baskın modu ve daha fazlası."
---

Topluluğu etkinleştirmek, RaidProtect'in bazı özelliklerinin ihtiyaç duyduğu çeşitli gelişmiş Discord güvenlik ayarlarını kullanılabilir hale getirir:
- [DM Kapatma](../features/dm-lock.mdx) (**DM Lock**);
- [baskın modu](../features/raid-mode.md) ve [Join lock](../features/join-lock.mdx), **yalnızca** baskın sırasındaki eylem “**Davetleri kilitle**” ise (varsayılan ayar).

[Captcha](../features/captcha.md) ve baskın modunun diğer eylemleri (“**Gelenleri at**”, “**Captcha'ya gönder**”, “**Baskın boyunca captcha dondurulur**”) topluluk olmadan çalışır.

## 🚦 Ön koşullar {#requirement}

- Discord sunucusunun yöneticisi olmak.

## 🚩 Topluluk özelliklerini etkinleştirme {#steps}

1. **Sunucunuzun ayarlarını açın**
   - Sol üstteki sunucu adına tıklayın > “**Sunucu Ayarları**”.

2. **“Topluluk” bölümüne gidin**
   - Kenar çubuğunda **Topluluğu Etkinleştir** sekmesine gidin, ardından **Başla**'ya tıklayın.

:::note
Topluluk sunucunuzda zaten etkinse bölümün adı **Topluluk Genel Bakışı** olacaktır.
:::

3. **Etkinleştirme sihirbazını izleyin**
   - Tüm üyeler için e-posta doğrulamasını etkinleştirin.
   - Müstehcen içerik filtresini etkinleştirin.
   - Bir kurallar kanalı ve bir duyurular kanalı yapılandırın.
   - Topluluk sunucuları kullanım şartlarını kabul edin.

4. **Yapılandırmayı tamamlayın**
   - “**Kurulumu tamamla**” düğmesine tıklayın. Etkinleştirme tamamlandığında “**Topluluk**” rozeti sunucunuzda görünür.

![Discord topluluğunu etkinleştirme ekran görüntüsü](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-enable-community.webp)

## 💡 Etkinleştirmeden sonra DM Lock ve Baskın modu modüllerini kullanma {#use}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. [DM Kapatma](../features/dm-lock.mdx) için “**Koruma**” sekmesini açın ve “**DM Kapatma**” yanındaki “**Düzenle**” düğmesine tıklayın.
3. [Baskın modu](../features/raid-mode.md#config) için “**Katılımlar**” sekmesini açın ve “**Otomatik RaidMode**” yanındaki “**Yapılandır**” düğmesine tıklayın.

Bir bilgi kutusu sizden topluluğu etkinleştirmenizi istiyorsa “**Yenile**”ye tıklayın: topluluk etkinleştirildiğinde kutu kaybolur.
