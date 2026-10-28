---
title: Captcha (Doğrulama)
description: "RaidProtect'in captcha'sı selfbotları ve baskınları engeller: her yeni üye, Discord sunucunuza erişmeden önce insan olduğunu kanıtlamak zorundadır."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import CaptchaMockup from '@site/src/components/DiscordMessage/mockups/captcha';

{/* <CaptchaMockup /> : 3.5.0'dan itibaren kullanım dışı (otomatik atmalı Meydan okuma modunu gösteriyor) */}

RaidProtect'in **captcha**'sı, her yeni üyeden Discord sunucunuza erişmeden önce bir kodu yeniden yazmasını ister; böylece insan olmayan hesapları eleyerek [selfbotları](/tr/learn/self-bot) ve [baskınları](/tr/learn/discord-raid) engeller.

RaidProtect'in en popüler özelliklerinden biridir ve tamamen isteğe bağlı kalır. Ne zaman uygulanacağını siz seçersiniz: her katılımda, yalnızca bir baskın sırasında veya şüpheli hesaplar için de.

## ❓ Captcha nasıl çalışır {#working}

Captcha, bir **@Doğrulanmamış** rolüne ve bir **#doğrulama** kanalına dayanır. Bir kullanıcı sunucunuza katıldığında:
- **Beklemeye alma:** ona, erişimini yalnızca **#doğrulama** kanalıyla sınırlayan **@Doğrulanmamış** rolünü veririz.
- **Sınav:** Panel modunda [RaidProtect Activity](#activity) içinde bir bulmaca çözer. Meydan okuma modunda bir görselde gösterilen kodu yeniden yazar. [Görüntüleme modlarına](#display-mode) bakın.
- **Başarı:** **@Doğrulanmamış** rolü kaldırılır ve üye sunucuya erişir. [Otomatik rolleri](./onboarding.md#autorole) ve [karşılama mesajı](./onboarding.md#welcome-message) o anda gönderilir.
- **Başarısızlık:** denemelerini tükettiğinde, ayarınıza göre atılır, jail'e alınır veya yeniden denemeden önce birkaç dakika engellenir. Atıldıktan sonra geri dönüp captcha'yı yeniden deneyebilir.
- **Loglar:** her katılım, hesabın oluşturulma tarihiyle birlikte log kanalına kaydedilir; ayrıca başarılar, başarısızlıklar ve süresi dolan zaman aşımları da kaydedilir.
- **Tanı:** RaidProtect izin sorunlarını, kanalın Discord [Karşılama Sürecindeki](../guides/onboarding.md) görünürlüğü sorunlarını ve **@Doğrulanmamış** rolünün sızıntılarını kendiliğinden tespit eder ve bunları düzeltmeyi önerir.

:::info
**Varsayılan olarak atma yok.** Yeni bir captcha, onu çözmeyen üyeleri artık atmaz: doğrulanana kadar sunucuda erişimsiz kalırlar. Bir [atmadan önceki süre](#timeout) ayarlayabilirsiniz.
:::
:::warning
**İzinlerin yönetimi:** **@Doğrulanmamış** rolünün izinleri RaidProtect tarafından otomatik olarak yapılandırılır. Rolü ve kanalı yeniden adlandırabilirsiniz ama silmeyin. RaidProtect'in `KICK_MEMBERS` ve `MANAGE_ROLES` izinlerine ihtiyacı vardır ve **@Doğrulanmamış** rolünün üstünde yer almalıdır.
:::

### Görüntüleme modları {#display-mode}

| Mod | Yeni üyenin gördüğü |
|---|---|
| **Panel (Etkileşimli)**, varsayılan | “**Doğrulama sistemi**” başlıklı, [RaidProtect Activity](#activity)'yi açan bir “**Doğrula**” düğmesi içeren kalıcı bir mesaj. Üye **#doğrulama** kanalına yazamaz. |
| **Meydan okuma (Klasik)** | Katıldığında **#doğrulama** kanalına bir görsel gönderilir ve üye kodu kanala mesaj olarak yazar. |

Panelde kendi dilinde okumak için bir “**Translate**” düğmesi bulunur ve her gelen doğrulama kanalında etiketlenir, ardından bu mesaj silinir: böylece kanalı bulur.

Panel modu kanalı temiz tutar ve ek ayarlara olanak tanır: denemeler tükendiğinde yaptırım seçimi, [baskın sırasında dondurulan captcha](./raid-mode.md#action), [çok yeni hesapların girişte tutulması](./onboarding.md#minage). Meydan okuma modu, verilen süre dolduğunda veya denemeleri tükendiğinde üyeyi her zaman atar.

### Tetikleme {#trigger}

| Tetikleme | Captcha ne zaman uygulanır |
|---|---|
| **Sürekli**, varsayılan | Her katılımda, koşulsuz. |
| **Otomatik** | Yalnızca bir baskın sırasında veya yüksek bir DISCON seviyesinde. Diğer gelenler doğrudan girer. |
| **Akıllı** | Otomatik gibi, ayrıca şüpheli görünen hesaplar. |

**Otomatik** ile captcha, bir baskın sırasında yalnızca [Otomatik RaidMode](./raid-mode.md#action) “**Captcha'ya gönder**” veya “**Baskın boyunca captcha dondurulur**” olarak ayarlıysa uygulanır; ayrıca 3. seviyeden itibaren bir [DISCON](./discon.md) uyarısı sırasında uygulanır.

**Akıllı** tetikleme, her gelenin profilini değerlendirir. Ekibiniz tarafından elle onaylanan bir üye asla şüpheli sayılmaz.

## 🚪 Captcha nasıl yapılandırılır? {#config}

Captcha'nın kurulumu basit ve hızlıdır.

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Katılımlar**” sekmesini açın.
3. “**Captcha**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. Captcha'ların yapılacağı kanalı seçin ya da “**Benim için bir tane oluştur**” düğmesini kullanın.
5. “**Etkinleştir**”e tıklayın. **@Doğrulanmamış** rolü oluşturulur ve izinleri tüm kanallara uygulanır.

Captcha, **Panel (Etkileşimli)** modunda, **Sürekli** tetiklemeyle, 3 denemeyle ve atmadan önce süre olmadan başlar. Ardından her ayarı aynı ekrandan düzenleyebilirsiniz.

<Settings start="captcha" />

### Görüntüleme modu ve tetikleme {#mode}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Katılımlar**” sekmesini açın.
3. “**Captcha**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Görüntüleme modu**” içinde “**Panel (Etkileşimli)**” veya “**Meydan okuma (Klasik)**” seçin.
5. “**Tetikleme**” içinde “**Sürekli**”, “**Otomatik**” veya “**Akıllı**” seçin.

### Activity içinde doğrulama {#activity}

**Panel** modunda “**Doğrula**” düğmesi **RaidProtect Activity**'yi açar: üye, sunucunuzun renklerinde ve [Karşılama Sürecinizdeki](../guides/onboarding.md) kanal bağlantılarıyla küçük bir bulmacayı doğrudan Discord içinde çözer. Simgesi olan bir [Premium](/tr/premium) sunucuda, RaidProtect logosunun yerine bu simge gösterilir. Doğrulandıktan sonra orada [karşılama kartını](./onboarding.md#welcome-message) keşfeder.

- **Bulmaca başarısız:** yanlış bir kod gibi bir deneme harcar ve denemeler tükendiğinde öngörülen yaptırım uygulanır. Activity önce sonucu üyeye bildirir, ardından yaptırım uygulanır.
- **Başarı:** üye, başarı ekranından çıktığında doğrulanır. Bu arada “**Doğrula**”ya tıklarsa, doğrulaması Activity'yi yeniden başlatmak yerine hemen uygulanır.
- **Robot:** bir otomat tarafından çözülen captcha, denemelerin tükenmesinde olduğu gibi hemen cezalandırılır: ayarınıza göre atma, jail veya engelleme.
- **Ekibiniz tarafından inceleme:** şüphe durumunda üye, işleyen bir süre olmaksızın girişte bloke kalır ve ekibiniz otomatik bir captcha raporu alır. Rapor [captcha loglarına](#logs), yoksa [bildirimlerin](./reports.md) kanalına, o da yoksa sunucu loglarına gelir. Rapor ele alındığında “**İçeri al**”, “**Başka bir üyeye bağla**” ([Identity Update](#activity-alts) ile) ve “**Reddet**” seçenekleri sunulur; “**Reddet**”, captcha başarısızlık eyleminizi (atma, jail veya engelleme) uygular: yaptırım menüsü burada yer almaz.
- **Denemeler tükendikten sonra jail:** bu jail'in süresi yoktur ve ayrıca bir inceleme raporu açar. “**İçeri al**” jail'i kaldırır ve üyeyi doğrular; aksi halde ona yaptırım uygulayın.
- **Cihaz doğrulaması reddedildi:** Activity, üyeden cihazını doğrulamadan önce onay ister. Reddederse, denemeleri tükenmiş gibi başarısızlık eylemine tabi olur (atma, jail veya engelleme).
- **Activity açılmıyor:** üye “**Kod gir**”e tıklayabilir. Doğru bir kod bu durumda ekibiniz tarafından incelemeye geçer.
- **Verilerin silinmesi:** bir üye, doğrulama verilerinin silinmesini [privacy@raidprotect.bot](mailto:privacy@raidprotect.bot) adresinden isteyebilir. Bu durumda captcha'yı yeniden geçer; yaptırımları kalır.

#### Captcha tarafından tespit edilen çift hesaplar <span className="badge-experiment">Deneme</span> {#activity-alts}

[Identity Update](./alt-accounts.md) ile Activity, sunucunuzdaki bir üyeyle büyük olasılıkla aynı kişi tarafından yönetilen gelenleri de tespit eder:

- **Kesin bağlantı:** hesaplar [`/alt`](./alt-accounts.md#alt) içinde otomatik olarak bağlanır. Captcha logları bunu, “**Bağlantıyı kaldır**” düğmesiyle birlikte bildirir. Grup bir yaptırım altındaysa veya [Kişi başına tek hesap](./alt-accounts.md#single-account) ikincil hesaplarını tutuyorsa, gelen üye grubun yaptırımını alır veya karantinaya geçer.
- **Olası bağlantı:** [Kişi başına tek hesap](./alt-accounts.md#single-account) etkinse üye incelemeye geçer. “**Başka bir üyeye bağla**” onları `/alt` içinde bağlar ve üyeyi içeri alır; hiçbir hesap tespit edilmediyse bir pencere sizden üyeyi seçmenizi ister (“**Sunucuda zaten olan hesap**”). Aksi halde üye içeri girer ve captcha logları olası bağlantıyı bir “**Bağla**” düğmesiyle bildirir.
- **Uygulanmayan kesin bağlantı:** gruptaki bir hesap sunucu ekibindeyse, gelen üye birden fazla `/alt` grubuna bağlıysa ya da iki hesabın da zaten kendi grubu varsa (iki grup asla kendiliğinden birleştirilmez) hiçbir şey kendiliğinden bağlanmaz. Bağlantı bu durumda size aynı şekilde önerilir.

Size yalnızca sunucunuzun hesapları gösterilir: diğer sunucular hakkında hiçbir şey söylenmez.

:::info Deneme: Identity Update
Çift hesapların tespiti, 3.7.0 sürümü için planlanan **Identity Update**'in parçasıdır. Çıkışına kadar deneme aşamasındadır; [Premium](/tr/premium) sunucular için herkese açık beta olarak sunulur.
:::

### Test modu {#test-mode}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Katılımlar**” sekmesini açın.
3. “**Captcha**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Test modu**” yanındaki “**Etkinleştir**”e tıklayın.

Panel modunda, ekibinizin zaten doğrulanmış bir üyesi (**Sunucuyu Yönet** izni veya sunucu sahibi) o zaman captcha'yı yeniden yapmak için “**Doğrula**”ya tıklayabilir. Denemeler ve çözüm süresi bir yeni gelenle aynı şekilde uygulanır: captcha logu ne yapılacağını söyler, hiçbir şey uygulanmaz.

### Zorluk {#difficulty}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Katılımlar**” sekmesini açın.
3. “**Captcha**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Zorluk**” yanındaki “**Düzenle**” düğmesine tıklayın.
5. Pencerenin alanlarını ayarlayın, ardından onaylayın.

<SettingsModal name="captchaDifficulty" />

| Ayar | Değerler | Varsayılan |
|---|---|---|
| “**Denemeler**” | 1 ile 10 arası deneme | 3 deneme |
| “**Denemeler tükendiğinde eylem**” (Panel) | “**Denemeler tükendi: At**”, “**Denemeler tükendi: Jail**” veya “**Denemeler tükendi: 10 dk engelle**” | At |
| “**Çözüm süresi**” (Panel) | Devre dışı, 15, 30 veya 45 saniye, 1, 2, 3 veya 5 dakika: bulmacayı çözmek için tanınan süre, ilk testten (üyenin onayından sonra) itibaren sayılır. Görüntülü kod en az 2 dakika korunur | 30 saniye |
| “**Çözüm süresi (atmadan önce)**” (Meydan okuma) | 3, 5, 10 veya 15 dakika ya da 30 saniye ile 15 dakika arasında bir değer: bu süre dolduktan sonra üye atılır | 5 dakika |

:::info
“**Denemeler tükendi: Jail**” seçimi, üyeyi atmak yerine [jail](./sanctions.mdx#jail)'e yerleştirir. Bunun için “**Moderasyon**” > “**Cezalar**” sekmesinde yapılandırılmış bir Jail rolü gerekir. “**Denemeler tükendi: 10 dk engelle**” seçimi üyeyi sunucuda tutar: 10 dakika bekler, ardından yeni denemelerle yeniden başlar.
:::

### Atmadan önceki süre {#timeout}

Panel modunda bu süre, üyenin katıldığı andan itibaren sayılır: zamanında doğrulanmazsa başarısızlık eylemine tabi olur (atma, jail veya engelleme).

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Katılımlar**” sekmesini açın.
3. “**Captcha**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Atmadan önceki süre**” içinde “**Devre dışı**”, 5, 15 veya 30 dakikayı ya da 30 saniye ile 30 dakika arasında bir “**Özel değer**” seçin.

:::warning
Süre devre dışıyken doğrulanmamış hesaplar sunucuda kalır ve üyelerinize DM ile yazabilir. Bir süre koyun ya da [DM Kapatma](./dm-lock.mdx) ile DM'leri kapatın.
:::

### Captcha ekranının uyarıları {#alerts}

Captcha ekranı, doğrulamanın düzgün çalışmasını engelleyen bir şey olduğunda kutular gösterir:
- **Katılımda görünmeyen kanal:** doğrulama kanalı, Discord Karşılama Sürecinin hiçbir varsayılan kanalında yer almıyor. Bizim düzeltmemiz için “**Şuraya taşı:** _kategori_” veya “**Yeni kategori oluştur**”a tıklayın ya da [Karşılama Süreci rehberini](../guides/onboarding.md) izleyin.
- **@Doğrulanmamış rolünün sızıntıları:** Discord Karşılama Sürecinin **@Doğrulanmamış** ile aynı anda verdiği roller doğrulamayı atlatıyor, **@Doğrulanmamış** rolü izinler taşıyor, **@everyone** rolünde `ADMINISTRATOR` izni var ya da kanallar doğrulamadaki üyelere (veya jail'dekilere) hâlâ görünür. “**Düzelt**” düğmesi ilgili kanalları kapatır.
- **Yüksek doğrulama düzeyi:** bu Discord düzeyi, yazabilmek için 10 dakika beklettirir. Captcha girişi zaten filtreler: captcha ile önerilen düzey **Orta**'dır.
- **Eksik izinler:** RaidProtect'in `KICK_MEMBERS` ve `MANAGE_ROLES` izinlerine ihtiyacı vardır.

Sorun giderildikten sonra “**Yenile**”ye tıklayın.

### Captcha'yı devre dışı bırakma veya silme {#disable}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Katılımlar**” sekmesini açın.
3. “**Captcha**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Görüntüleme modu**” içinde şunu seçin:
   - Yapılandırmanızdan hiçbir şey kaybetmeden doğrulamayı askıya almak için “**Devre dışı**”;
   - Yapılandırmayı ve doğrulama rolünü silmek için “**Sil**”. RaidProtect sizden onay ister.

:::tip
Captcha'nın baskınlar dışında sessiz kalması için, onu devre dışı bırakmak yerine [tetiklemesini](#trigger) **Otomatik** olarak ayarlayın.
:::

## ✨ Ek özellikler {#additional-features}

### Ayrı loglar {#logs}

Sunucunuz popülerse captcha ile ilgili loglar ana log kanalınızı doldurabilir. Bunları başka bir kanala taşıyabilirsiniz.

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Katılımlar**” sekmesini açın.
3. “**Captcha**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Loglar**” yanındaki “**Düzenle**” düğmesine tıklayın.
5. Captcha loglarının gönderileceği kanalı seçin.

Bu ayarı ayrıca “**Moderasyon**” > “**Loglar**” sekmesinde, “**Captcha**” satırında da bulursunuz.

### Otomatik rol {#autorole}

Otomatik rol artık captcha içinde ayarlanmaz: “**Katılımlar**” sekmesindeki, birden fazla rol kabul eden [Otomatik rollere](./onboarding.md#autorole) katıldı. Eski ayarınız oraya otomatik olarak aktarıldı. Captcha etkin olduğunda bu roller, captcha başarıyla geçildikten sonra verilir.

### Captcha bypass'ı {#bypass}

Şu komutu kullanın: ```/bypass captcha [kullanıcı]```

`[kullanıcı]` yerine istediğiniz [kimliği](../guides/id.mdx) yazın; bu kullanıcı captcha'yı çözmesine gerek kalmadan sunucuya katılmak için 10 dakikaya sahip olur. Kullanıcı zaten sunucudaysa captcha otomatik olarak çözülmüş sayılır. Komutu kullanıcı belirtmeden de kullanarak geçerli bypass kullanıcıları listesini öğrenebilirsiniz.

## 🤝 Captcha ve anti-raid birlikte daha iyidir {#raid}

Captcha, katılımların diğer korumalarıyla birlikte çalışır:
- **[Otomatik RaidMode](./raid-mode.md#action):** “**Captcha'ya gönder**” eylemiyle, bir dalganın gelenleri atılmak yerine captcha'yı geçer. “**Baskın boyunca captcha dondurulur**” ile captcha'nın arkasında beklerler ve dalgadan sonra onu geçerler.
- **[Minimum hesap yaşı](./onboarding.md#minage):** “**Girişte tut**” eylemi, çok yeni bir hesabı yalnızca gerekli yaşa ulaştıktan sonra çözebileceği bir captcha'da bloke eder.
- **[DISCON](./discon.md#captcha):** 4. seviyeden itibaren, devre dışı bırakmış olsanız bile, yapılandırılmışsa captcha etkinleştirilir. 3. seviyeden itibaren, tetiklemesi ne olursa olsun tüm gelenlere uygulanır.

## Sık sorulan sorular {#faq}

### Captcha'yı çözmek için ne kadar süre var?

Panel modunda üyenin varsayılan olarak 3 denemesi (1 ila 10) ve bulmacayı çözmek için varsayılan olarak 30 saniyesi vardır (devre dışı bırakılabilir, en fazla 5 dakika); süre ilk testten itibaren sayılır. Varsayılan olarak atma süresi uygulanmaz ama 30 dakikaya kadar bir süre ayarlayabilirsiniz. Meydan okuma modunda atılmadan önce varsayılan olarak 5 dakikası (30 saniyeden 15 dakikaya) vardır.

### Bir üye captcha'yı geçemezse ne olur?

Denemelerini tükettiğinde sunucudan atılır veya Panel modunda, seçtiyseniz jail'e alınır ya da yeniden denemeden önce 10 dakika engellenir. Atıldıktan sonra geri dönüp captcha'yı yeniden deneyebilir.

### Doğrulanmamış üyeler otomatik olarak atılır mı?

Yeni bir captcha'da hayır: Panel modunda atmadan önceki süre varsayılan olarak devre dışıdır. Doğrulanmamış üyeler kanallara erişimleri olmadan sunucuda kalır. Üyelerinize özelden yazmalarını önlemek için bir atma süresi ayarlayın veya sunucunun DM'lerini kapatın.

### Captcha yalnızca bir baskın sırasında etkinleştirilebilir mi?

Evet. Tetiklemesini **Otomatik**, Otomatik RaidMode'un eylemini ise “**Captcha'ya gönder**” veya “**Baskın boyunca captcha dondurulur**” olarak ayarlayın. Geri kalan zamanlarda gelenler doğrudan girer.

### Captcha'yı kullanmak için Discord topluluğunu etkinleştirmek gerekir mi?

Hayır, captcha topluluk olmadan çalışır. Etkinse doğrulama kanalının [Karşılama Sürecinin](../guides/onboarding.md) varsayılan kanalları arasında olduğunu kontrol edin.

### Bir üye captcha'dan muaf tutulabilir mi?

Evet, `/bypass captcha [kullanıcı]` komutuyla. Üyenin captcha'yı çözmeden katılmak için 10 dakikası vardır ve zaten sunucudaysa captcha otomatik olarak çözülmüş sayılır.

### @Doğrulanmamış rolü ve #doğrulama kanalı yeniden adlandırılabilir mi?

Evet, onları serbestçe yeniden adlandırabilirsiniz. Silmeyin, çünkü RaidProtect'in captcha'yı çalıştırmak için bunlara ihtiyacı vardır ve izinlerini otomatik olarak yapılandırır.
