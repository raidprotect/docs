---
title: Kurulum
description: "RaidProtect'i Discord sunucunuza birkaç dakikada kurun ve yapılandırın: /setup sihirbazı, ardından /settings paneli."
---

import Head from '@docusaurus/Head';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

<Head>
  <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"RaidProtect'i bir Discord sunucusunda yapılandırma","description":"RaidProtect koruma botunu /setup ve /settings komutlarıyla kurun ve yapılandırın.","step":[{"@type":"HowToStep","position":1,"name":"/setup komutunu çalıştırma","text":"Kurulum sihirbazını açmak için botun etkin olduğu bir kanala /setup yazın."},{"@type":"HowToStep","position":2,"name":"Modülleri seçme","text":"“Kurulacak modülleri seç” menüsünden kurulacak özellikleri seçin, ardından “Etkinleştir”e tıklayın."},{"@type":"HowToStep","position":3,"name":"Özeti onaylama","text":"Bot, oluşturacağı ve etkinleştireceği şeylerin bir özetini gösterir. Uygulamak için “Etkinleştir”e yeniden tıklayın."},{"@type":"HowToStep","position":4,"name":"/settings ile ayarlama","text":"/settings komutunu istediğiniz zaman kullanın: panel, ayarları beş sekmede toplar: Genel, Katılımlar, Koruma, Moderasyon ve Araçlar."}]}).replace(/</g, '\\u003c')}</script>
</Head>

RaidProtect iki komutla yapılandırılır: temel korumaları tek seferde kuran bir sihirbaz olan [`/setup`](#install) ve diğer her şeyi istediğiniz zaman ayarladığınız panel olan [`/settings`](#settings). Bu rehber bunları nasıl kullanacağınızı açıklar.

## Nereden başlamalı {#etapes}

Sıfırdan başlayan bir sunucu için önerilen sıra şöyledir:

1. **[`/setup`](#install) komutunu çalıştırın** ve kurulacak modülleri seçin. RaidProtect log kanalını, gerekli kanalları ve rolleri oluşturur, ardından bir özetin ardından değişiklikleri uygular.
2. **[`/settings`](#settings) komutunun “Katılımlar” sekmesini açın**: [captcha](./features/captcha.md), [Otomatik RaidMode](./features/raid-mode.md) ve [yeni üyelerin karşılanmasını](./features/onboarding.md) ayarlayın.
3. **“Moderasyon” sekmesini açın**: log kanalını ve [yaptırımları](./features/sanctions.mdx) (jail ve mute rolleri) kontrol edin.
4. **[Anti-spam](./features/anti-spam.mdx) ayarını** “Koruma” sekmesinde yapın: başlamak için bir hazır ayar yeterlidir.

:::info Discord Topluluğu
Discord'un [Topluluk modu](./guides/community.md), yalnızca Otomatik RaidMode'un davet engellemesi ve [DM kapatma](./features/dm-lock.mdx) gibi birkaç ayar için gereklidir. Captcha, bu olmadan çalışır.
:::

## Yönlendirmeli kurulum {#install}

`/setup` komutu yöneticilere ayrılmıştır. Seçtiğiniz modülleri, ardından `/settings` içinde ayarlayacağınız denenmiş varsayılan değerlerle tek seferde kurar.

### 🔧 Modülleri seçme {#recommended}

1. `/setup` komutunu çalıştırın.
2. “**Kurulacak modülleri seç**” menüsünde istediğiniz özellikleri seçin: Mesaj komutları, Otomatik RaidMode, Captcha, Minimum hesap yaşı, Anti-spam, Bildirimler, Etiket Rolü, DM Kapatma ve HoneyPot. Zaten etkin olan modüller önceden işaretlidir.
3. “**Etkinleştir**”e tıklayın.
4. Bot, oluşturacağı veya yeniden kullanacağı şeyleri özetler. Uygulamak için “**Etkinleştir**”e yeniden tıklayın ya da seçimi değiştirmek için “**Geri**”ye tıklayın.

<Settings start="setup" />

Onaylandığında RaidProtect:

- yoksa `#raidprotect-logs` kanalını oluşturur; kanal yöneticilere ve botu ekleyen kişiye görünür olur;
- `@everyone` rolünden tehlikeli izinleri kaldırır (Yönetici, Yasakla, At, Sunucuyu Yönet, kanalları, rolleri, mesajları, webhook'ları ve alt başlıkları yönetme, @everyone etiketleme, Geçici olarak uzaklaştırma);
- seçilen her modülü varsayılan değerleriyle etkinleştirir: `?` ön eki, 10 saniyede 10 üye eşiğiyle Otomatik RaidMode, `#doğrulama` kanalı ve `@Doğrulanmamış` rolüyle Panel modunda captcha, 6 saatlik minimum yaş, etkin anti-spam ve bildirimler, `@Tag` rolü, DM kapatma, [HoneyPot](./features/honeypot.md)'ın tuzak kanalı.

:::tip Bir modülü devre dışı bırakma
`/setup` içinde bir modülün işaretini kaldırmak onu devre dışı bırakmaz. Bir özelliği kapatmak için [`/settings`](#settings) üzerinden gidin.
:::

[Otomatik roller ve karşılama mesajı](./features/onboarding.md) sihirbazın parçası değildir: bunları `/settings` komutunun “**Katılımlar**” sekmesinde ayarlayın.

### 🧭 Yeni kurulum sihirbazı <span className="badge-experiment">Deneme</span> {#wizard}

Yeni bir `/setup` sihirbazı, modül listesinin yerine yönlendirmeli bir akış sunar:

- **Bölüm bölüm**: Genel (sunucunun diliyle), Katılımlar, Koruma ve Moderasyon, her seferinde bir adım. Bir **özet görünüm** her şeyi tek ekranda, bir tık uzaklıkta toplar.
- **Uyarlanmış öneriler**: sunucunun boyutuna, herkese açık, topluluk sunucusu olup olmadığına veya bir etiketi olup olmadığına göre sihirbaz, önerilen korumaları önceden işaretler ve nedenini söyler.
- **Daha fazla modül**: [karşılama mesajı](./features/onboarding.md#welcome-message) (kanalıyla birlikte), başka sunuculara giden davetleri silen [Diğer sunucular](./features/automod.md#servers) filtresi ve seçtiğiniz kanalda [önleyici yavaş mod](./features/slowmode.md) ([Premium](/tr/premium)). [DISCON](./features/discon.md) orada açıklanır: hiçbir şey kurmadan her zaman etkindir.
- **Başlamadan önce bir kontrol**: RaidProtect'te eksik olan izinleri ve rolünün üstüne yerleştirilmiş rolleri, bir “**Yeniden kontrol et**” düğmesiyle bildirir.
- Oluşturulacak, değiştirilecek veya ayarlanacak şeylerin **bir özeti**. “**Kur**”a basılmadan hiçbir şey uygulanmaz.
- **Zaten yapılandırılmış bir sunucu yeniden yapılmaz, kontrol edilir**: mevcut captcha paneli ve zaten etkin olan DM kapatma korunur.
- **Ve sonrası**: bir [güvenlik denetimi](./features/audit.md) önizlemesi kurulumu tamamlar; captcha'yı test etmek, karşılama mesajını özelleştirmek veya tüm ayarları açmak için kısayollar sunar. Başarısız olan bir adıma `/setup` komutu yeniden çalıştırılarak devam edilir.

:::info Deneme: Shield Update
Yeni kurulum sihirbazı, 3.6.0 sürümü için planlanan **Shield Update** ile geliyor. Şimdilik yalnızca az sayıda sunucuya sunuluyor.
:::

## Yapılandırmayı değiştirme {#settings}

`/settings` komutu RaidProtect panelini açar. Yöneticilere ayrılmıştır ve yalnızca sizin görebildiğiniz geçici bir özel mesaj olarak görüntülenir.

### 🔍 Panel {#menu}

Ayarlar beş sekmede düzenlenmiştir:

- **Genel**: [dil](./language.md), [mesaj komutları](./guides/prefix.md), [izinler](./guides/prefix.md#permissions) ve sunucunun saat dilimi.
- **Katılımlar**: [Otomatik RaidMode](./features/raid-mode.md), [captcha](./features/captcha.md), [minimum hesap yaşı](./features/onboarding.md#minage), [otomatik roller](./features/onboarding.md#autorole) ve [karşılama mesajı](./features/onboarding.md#welcome-message).
- **Koruma**: [DISCON](./features/discon.md)\*, [anti-spam](./features/anti-spam.mdx), [Automod](./features/automod.md) ([görsel filtresi](./features/scam-images.md) ve [diğer sunucular](./features/automod.md#servers)\*), [HoneyPot](./features/honeypot.md), [önleyici yavaş mod](./features/slowmode.md)\*, [Authentification Manager](./features/authentication-manager.mdx) ve [DM kapatma](./features/dm-lock.mdx).
- **Moderasyon**: [yaptırımlar](./features/sanctions.mdx), [çift hesaplar](./features/alt-accounts.md)\*, loglar, [bildirimler](./features/reports.md) ve [şeffaflık](./features/transparency.md).
- **Araçlar**: [etiket rolü](./features/tag-role.md), [kanal kilitleme](./features/channel-lock.md), [görevde rolü](./features/moderation.mdx#onduty) ve mesaj önbelleği.

\* Deneme aşamasında: bu satırlar yalnızca Shield Update'e (DISCON, diğer sunucular, önleyici yavaş mod) veya Identity Update'e (çift hesaplar) erişimi olan sunucularda görünür; [Premium](/tr/premium) herkese açık beta.

Her satır ayarın geçerli değerini ve bir düğme gösterir: “**Yapılandır**” özel bir ekran açar, “**Düzenle**” bir giriş penceresi açar. Her değişiklik anında uygulanır.

Bir güncellemeden sonra, yeni gelen ayarları ve (siz açana kadar) sekmelerini iki hafta boyunca bir **Yeni** rozeti belirtir.

Aşağıdaki paneli keşfedin, düğmeler tıklanabilir:

<Settings start="home:arrivals" />

:::info Premium özellikler
[Premium](/tr/premium)'a ayrılmış ekranlar görüntülenebilir kalır.
:::

### 🕒 Saat dilimi {#timezone}

Saat dilimi, RaidProtect'in belirli bir saatte yayınladığı her şey için kullanılır; örneğin [şeffaflık özetleri](./features/transparency.md#recaps).

1. `/settings` komutunu çalıştırın.
2. “**Genel**” sekmesinde, “**Saat dilimi**” yanındaki “**Düzenle**” düğmesine tıklayın.
3. UTC farkınızı seçin ya da yaz saati uygulamasının otomatik yönetilmesi için `Europe/Paris` gibi bir saat dilimi tanımlayıcısı girin.

Ayar yapılmazsa sunucu UTC'dedir.

### 🔄 Bir ayarı sıfırlama {#reset}

1. İstediğiniz ayara gidin.
2. “**Sıfırla**”ya tıklayın.

Sıfırlama, onay istemeden hemen uygulanır. Yalnızca captcha'nın silinmesi gibi yıkıcı eylemler sizden onay ister.

### 🎨 Botu özelleştirme <span className="badge-premium">Premium</span> {#customize}

Panelin altındaki “**Özelleştir**” düğmesi, RaidProtect'in sunucunuzdaki görünümünü değiştirir: takma ad, avatar, banner, yazı tipi, efekt ve takma ad renkleri.

<Settings start="customize" />

Kabul edilen görseller PNG, JPEG, GIF veya WebP biçimindedir ve en fazla 10 MB olabilir. Premium sona ererse avatar, banner ve takma ad stili RaidProtect'inkilere döner; takma ad korunur.

## Sunucunuz için hangi yapılandırma? {#quelle-config}

`/setup` sihirbazı zaten esas kısmı kapsar. Sıfırdan başlıyorsanız veya kurulumunuzu bir yapay zekayla hazırlıyorsanız sunucunuza uyan durumu bulun: her ihtiyaç, onu karşılayan özelliğe yönlendirir.

- **[Baskınlar](/tr/learn/discord-raid), bir anda gelen hesap dalgaları**: [Otomatik RaidMode](./features/raid-mode.md) saldırı süresince katılımları engeller veya filtreler, [DISCON](./features/discon.md) ise tüm sunucuyu tek tıkla sıkılaştırmanıza olanak tanır.
- **[Spam](/tr/learn/spam-discord), reklam, dolandırıcılık bağlantıları**: [anti-spam](./features/anti-spam.mdx) otomatik olarak yaptırım uygular, [HoneyPot](./features/honeypot.md) ise spam hesaplarını tuzağa düşürür.
- **Toplu olarak katılan [botlar](/tr/learn/self-bot)**: [captcha](./features/captcha.md) her gelene insan olduğunu kanıtlatır, [minimum hesap yaşı](./features/onboarding.md#minage) ise bir gün önce oluşturulan hesapları eler.
- **Görsel dolandırıcılıkları** (sahte çekilişler, phishing): [görsel filtresi](./features/scam-images.md) bunları algılar ve siler.
- **Bir [nuke](/tr/learn/discord-nuke) riski veya ele geçirilmiş ekip hesapları**: [en az ayrıcalık](/tr/learn/least-privilege) ilkesini ve [Authentification Manager](./features/authentication-manager.mdx)'ı uygulayın.
- **Moderasyonda size yardımcı olabilecek bir topluluk**: [bildirimleri](./features/reports.md) etkinleştirin.

Ardından [yaptırımları](./features/sanctions.mdx) (atma, timeout, yasaklama, jail) sunucunuza göre ayarlayın.

:::info Bir yapılandırma sorunu mu var?
Bir sorunla karşılaşırsanız [Aksaklıklar](./guides/malfunctions.md) bölümüne bakın ya da yardım almak için [destek sunucumuza](https://raidprotect.bot/discord) katılın.
:::
