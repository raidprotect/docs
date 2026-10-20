---
title: DISCON
description: "RaidProtect'in DISCON'u, Discord sunucunuzun tehlike seviyesini tek tıkla ayarlar: bir baskın sırasında korumaları sıkılaştıran 5 seviye."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

**DISCON**, DEFCON örnek alınarak sunucunuzun tehlike seviyesidir. Bir [baskın](/tr/learn/discord-raid) sırasında ekibinizin Discord doğrulamasını değiştirmek, captcha'yı etkinleştirmek ve DM'leri tek tek kapatmak için artık `/settings` komutunu açması gerekmez: DISCON panelinde bir tık yeter, seçilen seviyenin tüm korumalarını tek seferde uygularız. İkinci bir tıkta, etkinleştirdiğimiz her şeyi geri alırız.

## ❓ Nasıl çalışır? {#working}

- **Beş seviye**: 5. seviyeden (sakin) 1. seviyeye (felaket). Seviye ne kadar düşükse koruma o kadar sıkıdır.
- **Ekip için bir panel**: yalnızca ekibe ayrılmış bir kanalda gönderilen, her seviye için bir düğmesi olan bir mesaj. Seviye değiştirmek için tek bir tık yeter.
- **Sunucunuz için hesaplanan etkiler**: bir seviyenin ne yaptığı yapılandırmanıza bağlıdır (captcha yapılandırılmış mı, Topluluk modu, Otomatik RaidMode'un eylemi). Yapılandırmada ve panelde görüntülenen ölçek, sizde tam olarak ne olacağını açıklar.
- **Temiz bir geri dönüş**: seviye düşürülürken yalnızca DISCON'un kendisinin etkinleştirdiği şeyleri kapatırız. Elle etkinleştirdiğiniz bir captcha, bir DM Kapatma veya bir baskın modu yerinde kalır.
- **Elle değişiklik**: seviye asla kendiliğinden değişmez, karar ekibinizindir.

:::info Deneme: Shield Update
DISCON, 3.6.0 sürümü için planlanan **Shield Update**'in parçasıdır. Çıkışına kadar deneme aşamasındadır; [Premium](/tr/premium) sunucular için herkese açık beta olarak sunulur. [Durum ses kanalı](#voice) Premium gerektirir.
:::

## 🚦 Beş seviye {#levels}

| Seviye | Ad | Uyguladığımız |
|---|---|---|
| 🔵 **DISCON 5** | Her şey yolunda | Orta Discord doğrulaması, başka bir şey yok. Varsayılan seviyedir. |
| 🟢 **DISCON 4** | Tetikte | [Captcha](./captcha.md) yapılandırılmışsa (kanal ve rol) etkinleştirilir. Captcha yoksa bunun yerine Discord doğrulaması yükseltilir. |
| 🟡 **DISCON 3** | Alarm | Maksimum Discord doğrulaması, yapılandırılmışsa captcha etkinleştirilir, [DM Kapatma](./dm-lock.mdx). Captcha **tüm** gelenlere uygulanır. |
| 🔴 **DISCON 2** | Kritik | 3. seviyenin tamamı, ayrıca **dondurulmuş captcha**: kimse giremez. Captcha yoksa bunun yerine [baskın modunu](./raid-mode.md) etkinleştiririz. |
| ⚪ **DISCON 1** | Felaket | 2. seviyenin tamamı, ayrıca **kilitleme**: @everyone artık yazamaz, tepki veremez, sesli kanalda konuşamaz ve komut kullanamaz. |

### Discord doğrulaması {#verification}

Her seviye, sunucunuzun Discord doğrulama düzeyini belirler: 5. ve 4. seviyelerde orta (captcha yapılandırılmamışsa 4. seviyede yüksek), 3. seviyeden 1. seviyeye maksimum.

### Girişte captcha ve dondurulmuş captcha {#captcha}

- **Seviye 4**: yapılandırılmışsa, devre dışı bırakmış olsanız bile, kanalına ve rolüne dokunmadan captcha'yı etkinleştiririz. Ardından [tetikleme](./captcha.md#trigger) ayarınızı izler: **Otomatik** modda bir baskın dışında hâlâ kimseye uygulanmaz.
- **Seviye 3**: captcha, tetiklemesi ne olursa olsun tüm gelenlere uygulanır ([tetikleyicilerdeki önceliğe](#priority) bakın).
- **Seviye 2 ve 1**: captcha'yı **Panel** moduna alır ve **dondururuz**. Gelenler doğrulama rolünü alır ve kapının arkasında bekler: seviye sürdüğü sürece sınavı çözemezler. Seviye yükseldiğinde, yeniden katılmak zorunda kalmadan captcha'yı normal şekilde geçerler. Seviye düşürülürken captcha'ya önceki görüntüleme modunu geri veririz.

### DM Kapatma {#dm-lock}

3. seviyeden itibaren [DM Kapatma](./dm-lock.mdx)'yı etkinleştiririz: sunucu kapanırken dolandırıcılıklar DM'ler üzerinden geçer. RaidProtect için [Topluluk modunu](../guides/community.md) ve “**Sunucuyu Yönet**” iznini gerektirir. Bu ön koşullar olmadan seviye yine de uygulanır ve DM engellemesinin etkinleştirilemediğini belirten bir uyarı gösterilir.

### Seviye 1 kilitlemesi {#lockdown}

1. seviyede **@everyone** rolünden konuşma izinlerini kaldırırız: mesaj gönderme (alt başlıklar dahil), tepki ekleme, alt başlık oluşturma, sesli mesaj gönderme, dosya ekleme, sesli kanalda konuşma ve uygulama komutlarını kullanma. Seviye düşürülürken birebir geri yüklenirler.

## 🧩 Seviye 2 ve 1'in ön koşulları {#requirements}

2. ve 1. seviyelerin gelenleri girişte gerçekten tutması için şu iki koşuldan biri sağlanmalıdır:

- **Yapılandırılmış bir captcha** (doğrulama kanalı ve rolü): önerilen çözümdür. Dondurulmuş captcha herkesi tutar, sakinlik dönünce meşru üyeleri içeri alır. [Captcha'yı yapılandırın](./captcha.md#config).
- **Aksi halde Otomatik RaidMode'un eylemi “Gelenleri at”**: captcha olmadan baskın modunu etkinleştiririz ve gelenlerin akıbetine onun eylemi karar verir. “**Davetleri kilitle**” eylemiyle (varsayılan ayar), DISCON'un açtığı baskın modu kimseyi atmaz. Bunu [Otomatik RaidMode yapılandırmasında](./raid-mode.md#config) ayarlayın.

Seviye 1 kilitlemesi ayrıca RaidProtect'in @everyone rolünü değiştirebilmesini gerektirir (“**Rolleri Yönet**” izni). Başarılı olamazsa bir uyarı bunu size bildirir.

## 🔓 Seviye 1'in kilitlemediği şeyler {#lockdown-leaks}

Kilitleme yalnızca **@everyone** rolüne dokunur. Bu nedenle bir üye, başka bir kaynak ona söz hakkı veriyorsa konuşma hakkını korur:

- Bu izinleri kendisi taşıyan, **moderatör olmadan edinilen bir rol**: Discord Karşılama Sürecinin sorularının rolleri, RaidProtect'in [otomatik rolleri](./onboarding.md#autorole).
- Bu rollerden biri için konmuş **bir kanal izni**.
- **Bir kanalda konmuş bir @everyone izni** (örneğin `#genel` kanalında izinli “Mesaj Gönder”).

DISCON yapılandırması bu erişimleri turuncu bir kutuda listeler. Bunları etkisiz hale getirmek için ilgili rollerden bu izinleri kaldırın ve @everyone için sunucu düzeyinde bırakın: sunucu izni yeter, kanaldaki izin gereksiz hale gelir.

:::tip
Ekibinizin rolleri kendi kanal izinlerini koruyabilir: kilitleme sırasında moderasyona devam etmelerini sağlayan budur.
:::

## ⚖️ Otomatik tetikleyicilere öncelik {#priority}

[Captcha](./captcha.md#trigger)'nın bir tetikleme ayarı vardır (Otomatik, Akıllı, Sürekli). **3. seviyeden** itibaren DISCON bu ayarın önüne geçer: captcha, tek tek değerlendirme yapılmadan **tüm** gelenlere uygulanır. DISCON ekibinizin bir kararıdır, otomatik bir tetikleyici onu tartışmaz.

Bunun için captcha'nın kanalı ve rolüyle [yapılandırılmış](./captcha.md#config) olması gerekir. Yalnızca devre dışıysa uyarı süresince etkinleştiririz. Hiç yapılandırılmadıysa DISCON onu zorunlu kılamaz: Discord doğrulaması güçlendirilir ve 2. ve 1. seviyelerde [baskın modu](./raid-mode.md) devralır.

## 🛠️ DISCON yapılandırması {#config}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Koruma**” sekmesini açın.
3. “**DISCON**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. Seçicide panel kanalını seçin ya da “**Panel kanalını oluştur**”a tıklayın.
5. İsteğe bağlı olarak ([Premium](/tr/premium)) bir durum ses kanalı seçin ya da “**Durum kanalını oluştur**”a tıklayın.

Yapılandırmanın altında geçerli seviyeyi, beş seviye düğmesini ve her seviyenin sunucunuzda ne yapacağını açıklayan **seviye ölçeğini** bulursunuz.

<Settings start="discon" />

### Panel kanalı {#panel-channel}

Panelin düğmeleri hiçbir izin gerektirmez: **kontrol görevini kanala erişim üstlenir**. Bu nedenle ekibinize ayrılmış bir kanal seçin.

- Tüm sunucunun görebildiği bir kanal reddedilir: herhangi bir üye orada seviyeyi değiştirebilirdi.
- “**Panel kanalını oluştur**”, @everyone için görünmez bir `#discon` kanalı oluşturur. Ardından onu ekibinizin rollerine açın.

### Durum ses kanalı <span className="badge-premium">Premium</span> {#voice}

Adı geçerli seviyeyi gösteren, kanal listesinde bir bakışta görülebilen bir ses kanalı: `🔵 DISCON 5`, `🟢 DISCON 4`, `🟡 DISCON 3`, `🔴 DISCON 2`, `⚪ DISCON 1`. Kimse ona bağlanamaz. “**Durum kanalını oluştur**” onu panel kanalının yanında, aynı izinlerle oluşturur.

:::info
Discord, bir kanalın yeniden adlandırılmasını her 10 dakikada yaklaşık 2 ile sınırlar. Seviyeyi bundan hızlı değiştirirseniz ses kanalının adı geride kalabilir: referans panel olarak kalır.
:::

## 📟 DISCON paneli {#panel}

Panel, seçilen kanalda gönderilen bir mesajdır. Geçerli seviyeyi, beş seviyenin sunucunuzdaki etkileriyle birlikte açıklamasını ve beş seviye düğmesini gösterir. Rengi geçerli seviyeyi izler.

Seviye değiştirmek için ilgili düğmeye tıklamanız yeterlidir. Seviye yalnızca kısmen uygulanabiliyorsa (captcha yapılandırılmamış, Topluluk modu yok, eksik izin) geçici bir uyarı bunu size bildirir.

DISCON paneli aynı zamanda [`/display staff` için ayrılmış yerdir](./display.mdx#staff): oraya `/display staff` üzerinden bloklar ekleyebilirsiniz, ancak kanalı yalnızca DISCON yapılandırmasından ayarlanır.

## 📑 DISCON logları {#logs}

Her seviye değişikliği, yapan üyeyle birlikte [sunucu loglarınıza](./moderation.mdx#logs) yazılır:

- “**Tehlike seviyesi** @Moderatör tarafından 5 seviyesinden 3 seviyesine yükseltildi.”
- “**Tehlike seviyesi** @Moderatör tarafından 3 seviyesinden 5 seviyesine düşürüldü.”

## Sık sorulan sorular {#faq}

### DISCON seviyesini kim değiştirebilir?

Panel kanalını gören herkes. Düğmeler hiçbir izin denetlemez: filtre görevini ekibe ayrılmış kanal görür. Yöneticiler ayrıca `/settings` üzerinden de seviye değiştirebilir.

### DISCON seviyesi bir baskın sırasında otomatik olarak değişir mi?

Hayır. DISCON her zaman ekibiniz tarafından yönetilir. [Otomatik RaidMode](./raid-mode.md), katılım dalgalarına karşı otomatik koruma olarak kalır.

### 5. seviyeye düşürüldüğünde ne olur?

Orta doğrulamayı geri koyar ve DISCON'un etkinleştirdiği şeyleri geri alırız: captcha, captcha modu, DM Kapatma, baskın modu ve kilitleme. Yükselmeden önce kendinizin etkinleştirdiği şeyler yerinde kalır.

### 2. seviye captcha olmadan çalışır mı?

Evet, ancak bu durumda baskın modunu etkinleştirir; bu mod gelenleri yalnızca Otomatik RaidMode'un eylemi “**Gelenleri at**” ise atar. 2. seviyenin herkesi tutması için captcha'yı yapılandırın.

### Bazı üyeler neden 1. seviyede hâlâ yazabiliyor?

Kilitleme söz hakkını yalnızca @everyone rolünden kaldırır. Yazma iznini veren bir katılım rolü veya kanal izni, buna rağmen yazma hakkı tanır. DISCON yapılandırması, bunları kaldırabilmeniz için bu erişimleri listeler.

### Durum ses kanalı zorunlu mu?

Hayır, isteğe bağlıdır ve Premium'a ayrılmıştır. Seviyeyi yönetmek ve göstermek için panel yeterlidir.
