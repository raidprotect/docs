---
title: HoneyPot
description: "RaidProtect'in HoneyPot'u, Discord sunucunuzdaki ele geçirilmiş hesapları ve spam botlarını otomatik olarak tespit edip cezalandıran bir antispam tuzak kanalıdır."
---

import HoneypotMockup from '@site/src/components/DiscordMessage/mockups/honeypot';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

<HoneypotMockup />

RaidProtect'in **HoneyPot**'u (veya tuzak kanalı) bir antispam özelliğidir: **[kimsenin yazmaması gereken](/tr/learn/honeypot-warming)** bir kanal. Gerçek üyeler bu kanaldan uzak durmaları gerektiğini bildiği için orada mesaj gönderenler yalnızca **[ele geçirilmiş hesaplar](/tr/learn/token-grabber)** veya spam botlarıdır: RaidProtect onları otomatik olarak cezalandırır.

:::info
**ScamLens zaten varsayılan olarak sizde.** [ScamLens](./scam-images.md) dolandırıcılık koruması sunucunuzda hiçbir yapılandırma olmadan etkindir: **dolandırıcılık görselleri** konusunda uzmanlaşmış olarak bunları çok yüksek güvenilirlikle algılar, siler ve ele geçirilmiş hesaba yaptırım uygular. Görsel dolandırıcılıkları için ScamLens bu nedenle fazlasıyla yeterlidir. HoneyPot ise en çok maksimum güvenlik istiyorsanız ve **diğer spam türlerini** engellemek istiyorsanız yararlıdır: bağlantı spam'i, metin baskınları, botlar.
:::

## ❓ Nasıl çalışır? {#working}

HoneyPot'u etkinleştirdiğinizde RaidProtect, sunucunuzun **en üstünde** rastgele seçilmiş net bir adla bir metin kanalı oluşturur. Bu kanalın üç özelliği vardır:
- **Herkes buraya yazabilir**, captcha'yı henüz doğrulamamış üyeler ve [Jail rolüne](./sanctions.mdx#jail) sahip olanlar dahil. Bu bilerek yapılmıştır: ele geçirilmiş bir hesap veya bir bot tuzaktan kaçamamalıdır.
- Kanal oluşturulduğunda herkesin kendi dilinde okuyabilmesi için bir “**Translate**” düğmesiyle birlikte **bir uyarı mesajı** (“BURAYA HİÇBİR MESAJ GÖNDERMEYİN”) gönderilir.
- İlk hesap yakalanır yakalanmaz “**Translate**”in yanında bir düğme olarak **bildirilen hesapların sayacı** görünür.

Bir üye bu kanala mesaj gönderdiği anda:
- RaidProtect, ona özel mesaj göndermeden **seçtiğiniz yaptırımı** uygular (yasaklama, softban, kick, timeout, jail veya mute).
- Bu üyenin **son 10 dakikada gönderdiği mesajlar**, spam başka kanallara zaten yayılmışsa durdurmak için tüm sunucuda silinir.
- Eylem otomatik moderasyon loglarına eklenir (gerekçe: *Ele geçirilmiş kullanıcı hesabı üzerinden spam*).

Bir [cezadan önceki gecikme](#grace) seçtiyseniz, üyenin önce bunun bir hata olduğunu söyleme şansı olur.

## 🛠️ HoneyPot'u kurma {#config}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Koruma**” sekmesini açın.
3. “**HoneyPot**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. Sağ üstteki “**Etkinleştir**”e tıklayın: RaidProtect kanalı oluşturur, izinleri ayarlar ve uyarı mesajını gönderir.

<Settings start="honeypot" />

Kanal oluşturulduktan sonra şunları yapabilirsiniz:
- **Kanalı yeniden oluştur** (“**HoneyPot kanalı**” yanındaki düğme): eski kanalı siler ve yeni bir adla yenisini oluşturur. Bir üyenin, diğer hesapların kaçınmasına yardımcı olmak için tuzak kanalın adını paylaştığını düşünüyorsanız yararlıdır.
- **Devre dışı bırak** (sağ üstteki anahtar): kanalı siler ve özelliği durdurur.

:::warning Gerekli izinler
RaidProtect'in `Kanalları Yönet` ve `Üyeleri Yasakla` izinlerine ihtiyacı vardır. Onlar olmadan bir hata kutusu görüntülenir ve düğmeler gri kalır.
:::

### Yaptırımı seçme {#sanction}

Varsayılan olarak HoneyPot bir **Softban** uygular. “**Uygulanan ceza**” seçicisinde birkaç [yaptırım](/tr/learn/discord-sanctions) bulunur:

| Yaptırım | Etki | Kullanılabilirlik |
|---|---|---|
| **Yasaklama** | Üyeyi sunucudan çıkarır ve son mesajlarını siler. Geçici (varsayılan 1 gün). | Ücretsiz |
| **Softban** | Yasaklar sonra yasağı kaldırır: mesajları siler ama üye geri dönebilir | Ücretsiz |
| **Atma (Kick)** | Üyeyi çıkarır, serbestçe geri dönebilir | Premium |
| **Timeout** | Üyenin seçilen bir süre boyunca konuşmasını engeller (en fazla 28 gün) | Premium |
| **Jail** | Sunucunuzda yapılandırılmış [Jail rolünü](./sanctions.mdx#jail) verir | Premium |
| **Mute** | Sunucunuzda yapılandırılmış [Mute rolünü](./sanctions.mdx#mute) verir | Premium |

Süreli yaptırımlar için (Yasaklama, Timeout, Jail, Mute) “**Süre**” seçicisinden bir süre seçin: 5 dakika, 1 saat, **1 gün** (varsayılan) veya 28 gün ya da kendi süreniz için “**Özel değer**” (örneğin `5m`, `1h`, `2d`; en az 1 dakika). Seçici, süresi olmayan Softban ve Atma için gri kalır.

:::tip
**Softban** iyi bir uzlaşmadır: mesajları temizler ve ele geçirilmiş hesabı atar, ancak meşru sahip hesabını güvene aldıktan sonra geri dönebilir.
:::

:::info
Yalnızca **Yasaklama** ve **Softban**, Discord'un ele geçirilmiş hesabın mesajlarını **sunucunun her yerinde** tek seferde yerel olarak silmesine olanak tanır.  
Diğer yaptırımlarda (Kick, Timeout, Jail, Mute) mesajları RaidProtect kendisi siler: bunlar [Premium](/tr/premium) sunuculara ayrılmıştır.
:::

:::info
- Rolü yapılandırılmamış bir **Jail** veya **Mute** bir **Timeout** olur. Seçici bunu yaptırımın altında belirtir.
- Sunucunuz Premium'u kaybederse bir Premium yaptırım, bir sonraki tetiklenmede otomatik olarak **Softban**'a döner.
:::

### Cezadan önceki gecikme <span className="badge-experiment">Deneme</span> {#grace}

İyi niyetli bir üye HoneyPot'a yanlışlıkla yazabilir. **Cezadan önceki gecikme**, ona cezalandırılmadan önce bunu bildirmesi için zaman tanır.

:::info Deneme: Shield Update
Cezadan önceki gecikme, 3.6.0 sürümü için planlanan **Shield Update**'in parçasıdır. Çıkışına kadar deneme aşamasındadır; [Premium](/tr/premium) sunucular için herkese açık beta olarak sunulur.
:::

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Koruma**” sekmesini açın.
3. “**HoneyPot**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Cezadan önceki gecikme**” içinde “**Anında ceza**” (varsayılan) veya 30 saniye, 1 dakika, 2 dakika ya da 5 dakikalık “**Önce sor, sonra cezalandır**” seçin.

Bir gecikmeyle:
- mesaj **silinir** ve üye tuzak kanalda “**Bu bir hataydı**” düğmesiyle **etiketlenir**;
- düğmeye yalnızca bu üye tıklayabilir. Zamanında tıklarsa hiçbir yaptırım uygulanmaz;
- gecikme bitmeden tıklanmazsa yaptırım uygulanır.

:::info
Bir spam botu genellikle her yere aynı metni gönderir. Başka bir yerde **aynı mesajı** gönderen bir hesap, beklemeden **hemen** cezalandırılır.
:::

### Yok sayılan üyeler {#ignore}

HoneyPot'a mesaj gönderildiğinde **kimin cezalandırılmayacağını** “**Yok sayılan üyeler**” seçicisinden seçebilirsiniz:
- “**Hiç kimse (modere edilemeyen üyeler hariç)**” *(varsayılan)*: ekip dahil herkes cezalandırılır. Yalnızca botun modere edemediği üyeler (RaidProtect'inkinden daha yüksek rol) otomatik olarak korunur.
- “**Ekip (Admin / Sunucuyu Yönet / Kanalları Yönet)**”: `Yönetici`, `Sunucuyu Yönet` veya `Kanalları Yönet` iznine sahip üyeler cezalandırılmaz.
- “**Antispam tarafından yok sayılan üyeler**”: RaidProtect, [Anti-spam](./anti-spam.mdx#ignore)'in yok saydığı rolleri ve üyeleri yeniden kullanır. Bu liste boşsa `Yönetici`, `Sunucuyu Yönet` veya `Mesajları Yönet` iznine sahip üyeler yok sayılır.

:::info
RaidProtect her durumda **kendisini ve diğer botları asla cezalandırmaz**. Botlar HoneyPot'u tetiklemez.
:::

## ℹ️ /honeypot komutu {#command}

`/honeypot` komutu, `/settings` üzerinden geçmeden doğrudan HoneyPot yapılandırma ekranını açar. `Sunucuyu Yönet` iznini gerektirir.

Şu komutu kullanın: ```/honeypot```

## 🤝 HoneyPot ve ScamLens birlikte daha iyidir {#scamlens-combo}

RaidProtect, görselleri analiz eden ve bilinen dolandırıcılıkları (kripto, sahte çekilişler, sahte kumarhane promosyonları) silen **[ScamLens](./scam-images.md)**'i zaten içerir.

İkisi el ele çalışır:
- **ScamLens önce devreye girer.** HoneyPot'a gönderilen görsel zaten biliniyorsa mesajı silen ve ele geçirilmiş hesaba yaptırım uygulayan ScamLens'tir; HoneyPot'un yaptırımı ayrıca uygulanmaz.
- **HoneyPot geri kalan her şeyde devralır**: henüz bilinmeyen yeni görseller, bağlantı spam'i, toplu etiketlemeler, metin baskınları, botlar.
- **Bir HoneyPot'un yakaladığı her yeni görsel ScamLens'i zenginleştirir**; ScamLens sonra onu korunan tüm sunucularda engelleyebilir.
- **ScamLens HoneyPot'unuzu izler**: ona kendi ayarını vermediğiniz sürece HoneyPot'unuzun [yaptırımını ve süresini](./scam-images.md#config) uygular.

ScamLens sunucunuzda varsayılan olarak zaten etkindir. **HoneyPot'u etkinleştirmek hiçbir şeyi bozmaz**: yalnızca mevcut olanı tamamlar ve RaidProtect'in tüm topluluğu daha iyi korumasına yardımcı olur.

## Sık sorulan sorular {#faq}

### Zaten ScamLens varsa HoneyPot yararlı mı?

Görsel dolandırıcılıkları için ScamLens fazlasıyla yeterlidir: varsayılan olarak etkindir ve bunları kendi başına algılar, siler ve cezalandırır. HoneyPot en çok bağlantı spam'i, metin baskınları ve botlar gibi diğer spam türlerini engellemek için yararlıdır.

### HoneyPot hangi yaptırımı uygular?

Varsayılan olarak bir Softban. Başka bir yaptırım seçebilirsiniz: Yasaklama ve Softban ücretsizdir, Kick, Timeout, Jail ve Mute ise Premium sunuculara ayrılmıştır. HoneyPot'un Yasaklaması varsayılan olarak 1 gün sürer; bu süreyi değiştirebilirsiniz.

### Bir üye HoneyPot'a yanlışlıkla yazdı, ne yapmalı?

Cezadan önceki gecikmeyi etkinleştirin: mesaj silinir, üye etiketlenir ve “**Bu bir hataydı**” düğmesine tıklamak için 30 saniye ile 5 dakika arasında süresi olur. Zamanında tıklarsa cezalandırılmaz. Aynı mesajı başka yerde göndermiş bir hesap ise hemen cezalandırılır.

### HoneyPot'a yazarlarsa ekip üyeleri cezalandırılır mı?

“**Yok sayılan üyeler**” seçeneğine bağlıdır. Varsayılan olarak ekip dahil herkes cezalandırılır. RaidProtect kendisini asla cezalandırmaz ve botlar tuzağı asla tetiklemez.

### HoneyPot'un yakaladığı bir hesabın mesajlarına ne olur?

Yaptırıma ek olarak, bu üyenin son 10 dakikada gönderdiği mesajlar, spam başka kanallara zaten yayılmışsa durdurmak için tüm sunucuda silinir.
