---
title: Dolandırıcılık görselleri
description: "RaidProtect'in dolandırıcılık karşıtı koruması ScamLens, Discord sunucunuzdaki dolandırıcılık görsellerini otomatik olarak algılar ve siler. Varsayılan olarak etkin, yapılandırma gerektirmez."
---

import AntiScamMockup from '@site/src/components/DiscordMessage/mockups/anti-scam';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect sunucunuzu **dolandırıcılık görsellerine** (kripto dolandırıcılıkları, sahte çekilişler, sahte kumarhane promosyonları) karşı otomatik olarak korur. Bu korumanın adı **ScamLens**'tir: gönderilen görselleri analiz eder, bilinen dolandırıcılıkları siler ve mesajın kaynağı olan hesaba (çoğunlukla bir [ele geçirilmiş hesap](/tr/learn/token-grabber)) yaptırım uygular.

<AntiScamMockup />

:::tip Yapılandırma gerekmez
ScamLens, **RaidProtect sunucunuza geldiği anda varsayılan olarak etkinleşir**. Hiçbir şey yapılandırmadan hemen korunursunuz.
:::

## ❓ Nasıl çalışır? {#working}

ScamLens, gönderilen her görseli bilinen dolandırıcılıklarla karşılaştırır. Mesajların metninden hiçbir şey okunmaz.

Bulunan eşleşmeye göre:

- **Kesin eşleşme**: mesaj hemen **silinir** ve yazarına **yaptırım uygulanır**. Yaptırım logu etkilenen kanalı belirtir.
- **Belirsiz eşleşme**: mesaj **önlem olarak** silinir, yaptırım uygulanmaz. Görselin sonradan dolandırıcılık olduğu doğrulanırsa yaptırım daha sonra gelebilir.

Yaptırım gerekçesi “Dolandırıcılık (Kripto Görselleri) tespit edildi” olur. [Premium](/tr/premium) bir sunucuda yaptırım uygulanan üye ayrıca özel mesaj alır.

ScamLens yalnızca **görsellerle** ilgilenir. Diğer spam türleri [Anti-spam](./anti-spam.mdx) ve [HoneyPot](./honeypot.md) tarafından yönetilir.

## 🔧 ScamLens'i yapılandırma {#config}

ScamLens, “**Koruma**” sekmesindeki **Automod** modülünde, “**Görsel filtresi**” ekranında ayarlanır.

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Koruma**” sekmesini açın.
3. “**Automod**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Görseller**” yanındaki “**Yapılandır**” düğmesine tıklayın.

<Settings start="imageFilter" />

### ScamLens'i etkinleştirme veya devre dışı bırakma {#toggle}

“**Görsel filtresi**” ekranında sağ üstteki “**Devre dışı bırak**”a (veya “**Etkinleştir**”e) tıklayın. Her değişiklik loglarınıza kaydedilir.

### Yaptırımı ve süresini seçme {#sanction}

“**Uygulanan ceza**” seçicisinde şunu seçin:
- “**Varsayılan**”: etkinse [HoneyPot](./honeypot.md#sanction)'unuzun yaptırımı, değilse geçici bir uzaklaştırma (Timeout);
- ya da belirli bir yaptırım: Yasaklama, Softban, Jail, Atma, Mute, Timeout veya Uyarı.

“**Yaptırım süresi**” seçicisinde 5 dakika, 1 saat, 1 gün veya “**Özel değer**” seçin (örneğin `30m`, `2h`, `7d`). “**Varsayılan**” seçeneği, etkinse HoneyPot'unuzun süresini, değilse **1 gün**ü izler. Buradan seçilen süre ScamLens'e özeldir, Anti-spam ve HoneyPot'tan bağımsızdır. Daha sonra gelen yaptırımlara da uygulanır.

:::info
- Rolü yapılandırılmamış bir **Jail** veya **Mute** bir **Timeout** olur.
- Yaptırımı duyuran herkese açık mesaj, Premium'da devre dışı bırakılabilen [Anti-spam](./anti-spam.mdx#public-message)'in “**Herkese açık ceza mesajı**” ayarını izler.
:::

## 🗂️ Görsel kataloğu <span className="badge-experiment">Deneme</span> <span className="badge-premium">Premium</span> {#catalog}

:::info Deneme: Shield Update
Görsel kataloğu, 3.6.0 sürümü için planlanan **Shield Update**'in parçasıdır ve çıkışına kadar deneme aşamasındadır.
:::

Bizim yönettiğimiz ve tüm sunucularda uygulanan “Crypto Scam” genel kataloğuna ek olarak, [Premium](/tr/premium) sunucular içeriği ne olursa olsun **kendi görsellerini** engelleyebilir: sahte Nitro ekran görüntüleri, topluluğunuzu hedefleyen bir dolandırıcılığın görselleri, sunucunuzda yasak görseller…

**Sınırlar:** sunucu başına 2 liste, gönderim başına 10 görsel.

### Bir liste oluşturma {#lists}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Koruma**” sekmesini açın.
3. “**Automod**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Görseller**” yanındaki “**Yapılandır**” düğmesine tıklayın.
5. “**Görsel kataloğu**” içinde “**Bir liste oluştur**”a tıklayın ve ona bir ad verin.
6. Listenin “**Doğrulama kanalı**”nı seçin.
7. “**Görsel ekle**”ye tıklayın ve en fazla 10 görsel gönderin. Sonuç; eklenen görselleri, bağlanan varyantları, yok sayılan kopyaları ve reddedilen görselleri belirtir.

Bir listedeki görseller sunucunuzda yeniden göründükleri anda silinir ve yazarları yukarıda seçilen yaptırımı alır. Yaptırımın sebebi listenin adını belirtir (“"_ad_" listesindeki görsel”). Yaptırım yoksa silme, kanal ve listeyle birlikte moderasyon loglarınıza kaydedilir.

:::warning Bir liste = tek bir görsel kaydı
Bir listede tek bir içerik türü tutun. İlgisiz görselleri aynı listede karıştırmak algılamayı bozar: bunun yerine ikinci bir liste oluşturun.
:::

### Doğrulama kanalı {#review}

Bir görsel, kesin eşleşme olmadan listenizdeki bir görsele benzediğinde, onu listenin **doğrulama kanalında** (“Doğrulama gerekli: … listesi”) iki düğmeyle bildiririz:
- “**Onayla, yasak**”: görsel kataloğa katılır, mesaj silinir ve yazarına yaptırım uygulanır;
- “**Reddet, temiz**”: bu görsel artık bir doğrulamayı tetiklemez.

Karar vermek için `Sunucuyu Yönet` izni gerekir. Doğrulama kanalı yoksa belirsiz eşleşmeler sessiz kalır.

## 📊 Şeffaflık {#reports}

ScamLens tarafından engellenen her dolandırıcılık:

- sunucunuzun [Şeffaflık özetlerinde](./transparency.md#recaps) görünür (“ScamLens tarafından X engellenen dolandırıcılık”);
- [HoneyPot](./honeypot.md)'ın bildirilen hesap sayacına sayılır;
- RaidProtect kullanan **tüm sunucuların** korumasını güçlendirir.

### Aylık raporlarımız {#recaps}

Her ay ScamLens'in etkinliğinin herkese açık bir değerlendirmesi olan **[Tehdit Havası](/tr/blog/tags/threats)**'nı yayınlıyoruz. [14 Şubat 2026'daki lansmandan](/tr/blog/scamlens-early-activation) itibaren, RaidProtect tarafından korunan tüm sunucularda kümülatif rakamlar:

| Rapor | Silinen dolandırıcılık görselleri | Tespit edilen ele geçirilmiş hesaplar |
|---|---|---|
| [1 aylık değerlendirme](/tr/blog/scamlens-1-month-recap) *(Mart 2026)* | 260.000 | 15.000 |
| [Nisan 2026](/tr/blog/threat-weather-april-2026) | 1.400.000 | 40.000 |
| [Mayıs 2026](/tr/blog/threat-weather-may-2026) | 2.300.000 | 80.000 |
| [Haziran 2026](/tr/blog/threat-weather-june-2026) | 4.000.000 | 160.000 |

## Sık sorulan sorular {#faq}

### ScamLens'i yapılandırmak gerekir mi?

Hayır. ScamLens, RaidProtect sunucunuza geldiği anda varsayılan olarak etkinleşir. Hiçbir şey yapılandırmadan hemen korunursunuz.

### ScamLens görsellerden başka bir şeyi engeller mi?

Hayır, ScamLens yalnızca görsellerle ilgilenir. Varsayılan olarak bilinen dolandırıcılık görsellerini engeller. Premium sunucular görsel kataloğu sayesinde kendi görsellerini de ekleyebilir. Diğer spam türleri [Anti-spam](./anti-spam.mdx) ve [HoneyPot](./honeypot.md) tarafından yönetilir.

### Bir dolandırıcılık görseline hangi yaptırım uygulanır?

Varsayılan olarak ScamLens, [HoneyPot](./honeypot.md#sanction)'unuzun yaptırımını ve süresini ya da HoneyPot etkin değilse bir günlük Timeout uygular. /settings içinde Koruma sekmesi, Automod modülü, Görsel filtresi ekranından başka bir yaptırım ve süre seçebilirsiniz.

### ScamLens nasıl devre dışı bırakılır?

/settings içinde Koruma sekmesinde Automod yanındaki “**Yapılandır**” düğmesine, ardından Görseller yanındakine tıklayın ve Görsel filtresi ekranının sağ üstündeki anahtarı kullanın.
