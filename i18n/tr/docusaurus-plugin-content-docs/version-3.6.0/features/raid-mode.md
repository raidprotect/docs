---
title: Anti-raid
description: "RaidProtect'in baskın modu, şüpheli bir dalga algılanır algılanmaz otomatik olarak Discord sunucunuza yönelik toplu katılımları anında engeller."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

import RaidModeMockup from '@site/src/components/DiscordMessage/mockups/raid-mode';

{/* <RaidModeMockup /> : 3.5.0'dan itibaren kullanım dışı (baskın modunun tek eylemi olarak atmayı gösteriyor) */}

## Baskın modu {#raid-mode}

RaidProtect'in **baskın modu**, bir [şüpheli katılım dalgası](/tr/learn/discord-raid) sırasında sunucunuza katılmaya çalışan yeni kullanıcıları en fazla 24 saat boyunca ele alan bir acil durum özelliğidir. Koruma botumuz bir dalga algıladığında onu kendiliğinden etkinleştirir, ayrıca elle de başlatabilirsiniz. Gelenlere ne yapacağımızı siz seçersiniz: davetleri engellemek, onları atmak ya da [captcha](./captcha.md)'ya göndermek. Sunucuyu yeni üyelere kalıcı olarak kapatmak için [`/joinlock` komutunu](./join-lock.mdx) kullanın.

### ❓ Baskın modu nasıl çalışır? {#working}

- **Algılama:** **Otomatik RaidMode**, aynı anda çok fazla kullanıcı sunucunuza katıldığında baskın modunu etkinleştirir. Varsayılan olarak 10 saniyede 10 katılımda tetiklenir.
- **Tepki:** baskın modu sırasında gelenler, seçtiğiniz [baskın sırasındaki eyleme](#action) göre ele alınır. Modu tetikleyen dalganın hesapları da ele alınır: atılır ya da captcha eylemleriyle captcha'nın arkasına geri gönderilir.
- **Bitiş:** baskın modu, [yapılandırılan süre](#duration) sonunda, varsayılan olarak 5 dakika sonra kendiliğinden kapanır.
- **Loglar:** her etkinleştirme ve devre dışı bırakmada log kanalına bir mesaj gönderilir.
- **Karşılama:** [karşılama mesajı](./onboarding.md#welcome-message), karşılama kanalını doldurmamak için dalga boyunca susar.

:::warning
“**Davetleri kilitle**” eylemiyle (varsayılan), Discord'un topluluk özellikleri baskın modu için vazgeçilmezdir. [Sunucunuzda topluluğun etkinleştirildiğini kontrol etmek için rehberimizi izleyin.](../guides/community.md) Diğer eylemler topluluk olmadan çalışır.
:::

#### Etkinleştirme {#enable}

Atma iznine sahip bir kullanıcı baskın modunu elle etkinleştirebilir.

Şu komutu kullanın: ```/raidmode [status] [duration]```

- Seçenek olmadan komut, baskın modunun durumunu etkinleştirmek veya devre dışı bırakmak için bir düğmeyle birlikte gösterir.
- `[status]` yerine etkinleştirmek için **True**, devre dışı bırakmak için **False** yazın.
- `[duration]` yerine istediğiniz süreyi yazın (örneğin `30m` veya `2h`, en fazla 24 saat). Süre yoksa Otomatik RaidMode'unkini kullanırız.

Etkinleştirmeyi bildirmek için log kanalına otomatik olarak bir mesaj gönderilir. Elle başlatılan baskın modu, Otomatik RaidMode ile aynı [eylemi](#action) uygular.

#### Devre dışı bırakma {#disable}

Baskın modu, süresi sonunda kendiliğinden devre dışı kalır. Tehdit ortadan kalktıktan sonra `/raidmode` komutuyla daha erken de durdurabilirsiniz. 😇

:::info
`raidmode` komutu [ön ekle kullanılabilir](../guides/prefix.md).
:::

### 🚨 Otomatik baskın modunun yapılandırması {#config}

Sunucunuz sıklıkla aynı anda çok sayıda yeni üye alıyorsa yanlış pozitifleri önlemek için eşiği değiştirmek akıllıca olur. Tüm ayarlar aynı ekranda bulunur.

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Katılımlar**” sekmesini açın.
3. “**Otomatik RaidMode**” yanındaki “**Yapılandır**” düğmesine tıklayın.

Ekranın sağ üstündeki anahtar, Otomatik RaidMode'u etkinleştirir veya devre dışı bırakır. RaidProtect'in `MANAGE_GUILD` iznine ihtiyacı vardır.

<Settings start="antiraid" />

#### Üye eşiği {#threshold}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Katılımlar**” sekmesini açın.
3. “**Otomatik RaidMode**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Üye sayısı / 10 saniye**” içinde 10, 15, 20 veya 30 üyeyi ya da bir “**Özel değer**” seçin.

Eşik, 10 saniyelik bir pencerede sayılır. Varsayılan değer 10 üyedir.

:::note
Sistemin iyi çalışması için 10 saniyede 10 ile 20 üye arasında bir değer öneriyoruz.
:::

#### Baskın modunun süresi {#duration}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Katılımlar**” sekmesini açın.
3. “**Otomatik RaidMode**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Devre dışı kalma öncesi süre**” içinde 1, 2, 5 veya 10 dakikayı ya da 10 saniye ile 24 saat arasında bir “**Özel değer**” seçin (örneğin `5m 30s`).

Varsayılan süre 5 dakikadır.

#### Baskın sırasındaki eylem {#action}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Katılımlar**” sekmesini açın.
3. “**Otomatik RaidMode**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Baskın sırasındaki eylem**” içinde gelenlere uygulanacak eylemi seçin.

| Eylem | Gelenler üzerindeki etki | Kullanılabilirlik |
|---|---|---|
| “**Davetleri kilitle**” (varsayılan) | Discord sunucunun davetlerini kapatır, yeni kimse giremez. | Ücretsiz, topluluk gerekli |
| “**Gelenleri at**” | Her gelen atılır ve baskın modu devre dışı kaldıktan sonra geri dönmeye davet eden bir özel mesaj alır. | [Premium](/tr/premium) |
| “**Captcha'ya gönder**” | Gelenler atılmak yerine captcha'yı geçer. | Ücretsiz, etkin captcha gerekli |
| “**Baskın boyunca captcha dondurulur**” | Gelenler captcha'nın arkasında bekler ve dalgadan sonra onu geçer. | Ücretsiz, Panel modunda etkin captcha gerekli |

:::tip
Captcha eylemleriyle [captcha tetiklemesini](./captcha.md#trigger) **Otomatik** olarak ayarlayın: böylece captcha yalnızca baskınlar sırasında uygulanır ve gelenleriniz geri kalan zamanlarda doğrudan girer.
:::

#### Atma modu <span className="badge-premium">Premium</span> {#kick-mode}

Eski “**Atma modu**” anahtarı, [baskın sırasındaki eylemin](#action) “**Gelenleri at**” eylemi haline geldi. Yalnızca [**Premium**](/tr/premium) sunuculara ayrılmıştır ve Discord topluluğu olmadan çalışır. Premium sona ererse eylem “**Davetleri kilitle**”ye döner. Aynı şekilde, captcha'sı kullanılamayan bir captcha eylemi normal moda döner (dalga atılır, ardından davetler kilitlenir), asla atmaya dönmez.

#### DM'leri otomatik kapatma {#close-dm}

**Otomatik RaidMode**'u, etkinleştiği anda **sunucunun DM'lerini otomatik olarak kapatacak** şekilde yapılandırabilirsiniz. Bu, bir baskın sırasında ek bir koruma katmanı sağlar: yeni hesaplar üyelerinize özelden ulaşarak onları [phishing](/tr/learn/token-grabber) veya dolandırıcılıkla kandıramaz.

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Katılımlar**” sekmesini açın.
3. “**Otomatik RaidMode**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**DM'leri kapat**” yanındaki “**Etkinleştir**”e tıklayın.

Baskın modu sona erdiğinde DM'ler önceki yapılandırmalarına döner.

:::info
Bu seçenek yalnızca Discord'un güvenlik eylemlerinden geçen “**Davetleri kilitle**” eylemiyle uygulanır. [Kalıcı DM Kapatma](./dm-lock.mdx)'yı tamamlar: kalıcı kapatma olmadan DM'ler yalnızca etkin bir baskın sırasında kapalıdır.
:::

### 🎫 Baskın modu bypass'ı {#bypass-raid}

Bir baskın sürerken meşru bir üye mi bekliyorsunuz? Baskın moduna rağmen katılmasına izin verin:

Şu komutu kullanın: ```/bypass raid [kullanıcı]```

`[kullanıcı]` yerine istediğiniz [kimliği](../guides/id.mdx) yazın; bu kullanıcı baskın modu tarafından atılmadan sunucuya katılmak için 10 dakikaya sahip olur. Komutu kullanıcı belirtmeden de kullanarak geçerli bypass kullanıcıları listesini öğrenebilirsiniz (aynı anda en fazla 7 kullanıcı).

:::warning
Baskın modu bypass'ı yalnızca “**Gelenleri at**” eylemiyle uygulanır: davet düzeyinde engellenen bir kullanıcı bypass edilemez. Captcha eylemleriyle bunun yerine [captcha bypass'ını](./captcha.md#bypass) kullanın.
:::

## Minimum yaş {#minage}

Minimum hesap yaşının, [Katılımlar ve karşılama](./onboarding.md#minage) sayfasında kendi bölümü vardır: kıdem ayarı, eylem seçimi (atma, gerekli yaşa kadar jail, girişte tutma) ve bypass.

### 🎂 Minimum hesap yaşı bypass'ı {#bypass-minage}

`/bypass minage [kullanıcı]` komutunu kullanın; [minimum yaş bypass'ında](./onboarding.md#bypass-minage) ayrıntılıdır.

## Sık sorulan sorular {#faq}

### Baskın modu otomatik olarak etkinleşir mi?

Evet. Varsayılan olarak 10 kullanıcı sunucunuza 10 saniyede katıldığında baskın modunu etkinleştiririz. Bu eşik, Otomatik RaidMode ayarlarında yapılandırılabilir.

### Baskın modu yeni gelenlere ne yapar?

Seçilen eyleme bağlıdır: davetleri engellemek (varsayılan), gelenleri atmak ([Premium](/tr/premium)), onları captcha'ya göndermek veya dalga bitene kadar dondurulmuş bir captcha'nın arkasında bekletmek.

### Baskın modu elle nasıl etkinleştirilir?

Atma iznine sahip bir kullanıcı `/raidmode` komutunu çalıştırır. Ardından etkinleştirmeyi bildirmek için log kanalında bir mesaj yayınlanır ve seçilen eylem gelenlere uygulanır.

### Baskın modu kendiliğinden devre dışı kalır mı?

Evet. `/raidmode` içinde seçilen süreden sonra, yoksa Otomatik RaidMode'un süresinden sonra (varsayılan 5 dakika, en fazla 24 saat) kapanır. Aynı komutla daha erken de durdurabilirsiniz.

### Discord topluluğunu etkinleştirmek gerekir mi?

Yalnızca Discord'un davet kapatmasını kullanan “**Davetleri kilitle**” eylemi için. “**Gelenleri at**”, “**Captcha'ya gönder**” ve “**Baskın boyunca captcha dondurulur**” eylemleri topluluk olmadan çalışır.

### Bir baskın sırasında meşru bir üyenin katılmasına izin verilebilir mi?

Evet, eylem “**Gelenleri at**” olduğunda `/bypass raid [kullanıcı]` komutuyla: üyenin atılmadan katılmak için 10 dakikası vardır (aynı anda en fazla 7 bypass kullanıcısı). Captcha eylemleriyle `/bypass captcha [kullanıcı]` komutunu kullanın.
