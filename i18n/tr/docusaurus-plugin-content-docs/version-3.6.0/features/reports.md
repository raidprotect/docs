---
title: Bildirimler
description: "RaidProtect'in bildirim sistemi, topluluğunuzun şüpheli içerikleri ve üyeleri bildirmesini sağlar; moderatörleriniz için net bir yönetim sunar."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import ReportsMockup from '@site/src/components/DiscordMessage/mockups/reports';

<ReportsMockup />

RaidProtect'in bildirim sistemi, topluluğunuzun herhangi bir şüpheli mesajı veya üyeyi sağ tıkla, özel bir düğmeyle ya da `/report` komutuyla birkaç tıkta moderatörlerinize iletmesini sağlar. Ekibinizin bildirimleri işlemesini en iyi hale getirmek için yapılandırılır.

## ❓ Bildirimler nasıl çalışır? {#working}
Üyeler bir içeriği 4 ana yöntemle bildirebilir.

1. **Bir mesaja sağ tık**
Bir üye, kuralları ihlal ettiğini düşündüğü bir mesaja sağ tıklayabilir, **`Uygulamalar`**'ı seçebilir, ardından **`Bu mesajı bildir`**'e tıklayabilir. Bildirimin sebebini belirttiği bir pencere açılır.

2. **Bir profile sağ tık**
Aynı şekilde bir üye, sorunlu bulduğu bir profile sağ tıklayabilir, **`Uygulamalar`**'ı seçebilir, ardından **`Kullanıcıyı bildir`**'e tıklayabilir. Ardından neyi bildirdiğini (profil fotoğrafı, kullanıcı adı, biyografi, sesli kanaldaki etkinlik, özel mesajlardaki etkinlik) ve sebebi belirtmesini sağlayan bir pencere açılır.

3. **Bir bilgi panelindeki düğme**
“**Şikayet**” özelliği bir [bilgi panelinde (`/display public`)](./display.mdx) etkinse, panelin hemen altında bir “**Üye şikayet et**” düğmesi bulunur; üyelerin bir kullanıcıyı hızlıca bildirmesini sağlar.

4. **Slash komutu**
Üyeler ayrıca sunucunun herhangi bir kanalında **`/report`** komutuyla da bir kullanıcıyı bildirebilir.

Şu komutu kullanın: ```/report (üye)```

`(üye)` yerine istediğiniz kullanıcıyı yazın. Sebep, bir profile sağ tıklamada olduğu gibi ardından bir pencerede girilir.

:::info
Bildirimleri etkinleştirmek [mesaj önbelleğini](./moderation.mdx#snipe) de etkinleştirir: RaidProtect, bildirilen içeriği uyarıya ekleyebilmek için bir saatlik mesajı bellekte tutar.
:::

## 🚩 Bildirimlerin yapılandırması {#config}

Bildirimler bir **bildirim kanalına** gelir. Hiçbirini seçmezseniz genel log kanalınıza gönderilir. Tüm ayarlar tek bir ekranda bulunur:

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Moderasyon**” sekmesini açın.
3. “**Bildirimler**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. Bildirim sistemini açmak için ekran başlığının sağındaki “**Etkinleştir**”e tıklayın.

<Settings start="reports" />

### Kanalı yapılandırma {#config-channel}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Moderasyon**” sekmesini açın.
3. “**Bildirimler**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Bildirimlerin alınması**” yanındaki “**Düzenle**” düğmesine tıklayın.
5. Pencerede istediğiniz kanalı seçin (_örn: #bildirimler veya #reports_) ya da RaidProtect'in `bildirimler` adlı özel bir kanal oluşturması için “**Benim için bir kanal oluştur**”u işaretleyin.

Hiçbir kanal seçmezseniz veya log kanalını seçerseniz bildirimler genel log kanalınızı izler.

<SettingsModal name="reportChannel" />

### Bildirim rolünü yapılandırma {#config-role}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Moderasyon**” sekmesini açın.
3. “**Bildirimler**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Bildirim rolü**” yanındaki “**Düzenle**” düğmesine tıklayın.
5. Pencerede istediğiniz rolü seçin (_örn: @Moderatör veya @Notifs reports_) ya da bir “**Diğer bahsetme**”yi işaretleyin: `@everyone`, `@here` veya “**Benim için bir rol oluştur**” (RaidProtect `Yeni bildirim` rolünü oluşturur).

Hiçbir rol yapılandırılmazsa `@here` etiketlenir.

<SettingsModal name="reportRole" />

:::warning
Bildirimlerin doğru yönetilmesi için kanal moderatörlere ve yöneticilere ayrılmalıdır.
:::

### Bildirimlerin gruplanması {#group}

“**Gruplama**” anahtarı, aynı üyeyi hedefleyen birden fazla bildirimin nasıl sunulacağını belirler:

- **Etkin** *(varsayılan)*: aynı üyeyi hedefleyen bildirimler tek bir uyarıda gruplanır.
- **Devre dışı**: her bildirim kendi ayrı uyarısını oluşturur.

Bildirimler ekranında “**Gruplama**” yanındaki “**Etkinleştir**” veya “**Devre dışı bırak**”a tıklayın.

<a id="config-notify"></a>

### Bildirenin bilgilendirilmesi {#notify}

“**Bildirenin bilgilendirilmesi**” yanındaki “**Düzenle**” düğmesi, bildirimi yapan üyenin bildirimi işlendikten sonra DM ile ne alacağını seçtiğiniz bir pencere açar:

| Seviye | Etki |
|---|---|
| **Devre dışı** | Bildirenler hiçbir bildirim almaz. |
| **Yalnızca işlem** *(varsayılan)* | Bildirene bildiriminin işlendiği söylenir. |
| **Sonuçla birlikte** | Bildirimin kabul edilip edilmediği belirtilir. |
| **Moderatörle birlikte** | Bildirimi hangi moderatörün işlediği de belirtilir. |

Bildiren, başka bildirimlerle gruplanmış olsa bile bildirim başına yalnızca tek bir mesaj alır.

<SettingsModal name="reportNotify" />

<a id="config-trusted-role"></a>

### Güven rolü <span className="badge-premium">Premium</span> {#trusted-role}

“**Güven rolü**”, en güvenilir üyelerinizin acil durumlarda hemen harekete geçmesini sağlar: bu role sahip bir üye bildirim yaptığında, bir moderatör bildirimi işleyene kadar bildirilen kullanıcıya **24 saatlik önleyici bir timeout** uygulamak için “**Önleyici işlem**” seçeneğini işaretleyebilir.

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Moderasyon**” sekmesini açın.
3. “**Bildirimler**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Güven rolü**” yanındaki “**Düzenle**” düğmesine tıklayın.
5. Pencerede rolü seçin ya da “**Benim için bir rol oluştur**”u işaretleyin (RaidProtect `Güvenilir bildirici` rolünü oluşturur). Güven rolünü devre dışı bırakmak için alanı boş bırakın.

Önleyici timeout'un işleyişi:

- Önleyici timeout **sessizdir**: bir moderatör yaptırımı onaylamadıkça bildirilen kullanıcı DM almaz.
- Sebebi, bildirimin sebebinin ardından gelen “**Önleyici yaptırım:**”dır.
- Bildirim bir mesajla ilgiliyse o mesaj silinir.
- Uyarı acil olarak işaretlenir: etiketin öncesinde “**🛑 Acil bildirim**” yer alır.
- Yaptırım bildirime bağlıdır: onu işleyen moderatör onaylayabilir veya iptal edebilir.

:::info
Bu özellik yalnızca [**Premium**](/tr/premium) sunuculara ayrılmıştır.
:::

### Bildirenlerin itibarı {#bad-reporters}

“**Sahte bildiriciler**” yanındaki “**Düzenle**” düğmesi, bildirimleri düzenli olarak reddedilen üyeler üzerinde işlem yapılmasını sağlayan “**Bildiricilerin itibarı**” penceresini açar:

- **Eşik**: işlem öncesindeki reddedilen bildirim sayısı (3, 5, 6, 10 veya 15; varsayılan “**Devre dışı**”).
- **Pencere**: hesaplama dönemi (7, 14, 30, 60 veya 90 gün; varsayılan 30 gün).
- Eşiğe ulaşıldığında **eylem**:
  - “**Moderatörleri bilgilendir**” *(varsayılan)*: “**Bildirimleri engelle**” düğmesi ve bir yaptırım düğmesiyle (örn.: “**Bildireni uyar**”) bir uyarı gönderilir.
  - “**Otomatik engelle**”: üye artık bildirim gönderemez.
  - “**Otomatik cezalandır**”: yapılandırılan yaptırım uygulanır.
  - “**Engelle ve cezalandır**”: önceki iki eylemi birleştirir.
- **Yaptırım**: sahte bildiriciye uygulanan yaptırım (varsayılan Uyarı, Timeout, Mute, Atma veya Yasaklama).

<SettingsModal name="reportBad" />

:::info
[Mute rolü](./sanctions.mdx#mute) yapılandırılmamışsa Mute yaptırımı bir timeout'a döner.
:::

:::tip
Bir üyeyi bildirimlerden istediğiniz zaman elle de [`/block` komutuyla](./utilities.mdx#block) engelleyebilirsiniz.
:::

## Bildirimleri yönetme {#manage}

Her bildirim, yapılandırılan kanala birkaç eylemi olan bir uyarı olarak gelir:

- **🙋 Üstlen:** Bu bildirimle ilgilendiğinizi diğer moderatörlere belirtmek için “**Üstlen**”e tıklayın. Düğme ardından “**Üstlenildi**” olur.

- **✅ Çözüldü:** Bildirim geçerli ama hiçbir yaptırım gerekmiyorsa (durum başka şekilde çözüldü: uyarı, yazarı tarafından silinen mesaj…) “**Çözüldü**”ye tıklayın. Bildirim, bildirilen kullanıcıya yaptırım uygulanmadan kabul edilmiş olarak işaretlenir. Yaptırım uygulamak için bunun yerine aşağıdaki “**Bu üyeye yaptırım uygula…**” menüsünü kullanın.

- **❌ Reddet:** Bildirim meşru değilse “**Reddet**”e tıklayın. Reddedilenler [bildirenlerin itibarı](#bad-reporters) için sayılır.

- **⚖️ Yaptırım uygula:** Bildirim üstlenildikten sonra kullanılabilen “**Bu üyeye yaptırım uygula…**” menüsü, bildirim kanalından ayrılmadan bildirilen kullanıcıya doğrudan bir yaptırım uygulamanızı sağlar.

[Gruplama](#group) etkin olduğunda, aynı üyeyi hedefleyen sonraki bildirimler yeni bir uyarı oluşturmak yerine mevcut uyarıya eklenir (örneğin “**2 kullanıcı tarafından bildirilen 3 mesaj ve 1 profil**”).

:::note
Moderatörlerinizin bu özelliğin kullanımı konusunda iyi eğitildiğinden emin olun ve aktif üyelerinizi sorumlu biçimde kullanmaya teşvik edin!
:::

## Sık sorulan sorular {#faq}

### Bir üye veya mesaj nasıl bildirilir?

Bir üye bir mesaja veya profile sağ tıklayabilir, “**Uygulamalar**” menüsünü, ardından “**Bu mesajı bildir**” veya “**Kullanıcıyı bildir**” seçeneğini seçebilir. Ayrıca bir bilgi panelinin düğmesinden ya da herhangi bir kanalda `/report (üye)` komutuyla da yapabilir: sebep ardından bir pencerede girilir.

### Bildirimler nereye gelir?

Yapılandırdığınız bildirim kanalına, yoksa genel log kanalınıza gönderilir. Bu kanal, bildirimlerin doğru işlenmesi için moderatörlere ve yöneticilere ayrılmalıdır.

### Her bildirimde hangi rol etiketlenir?

Yapılandırdığınız bildirim rolü veya `@everyone`. Ayar yoksa RaidProtect `@here` etiketler.

### Sahte bildirimler nasıl sınırlanır?

“**Sahte bildiriciler**” ayarı, bildirimleri düzenli olarak reddedilen üyeler üzerinde işlem yapar. Bir eşik ve bir hesaplama penceresi, ardından bir eylem belirlersiniz: moderatörleri bilgilendirmek, bildirimleri engellemek, cezalandırmak veya ikisi birden. Bir üyeyi ayrıca [`/block` komutuyla](./utilities.mdx#block) elle de engelleyebilirsiniz.
