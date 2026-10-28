---
title: Katılımlar ve karşılama
description: "RaidProtect'in karşılaması Discord sunucunuzun yeni üyelerine hoş geldin der, onlara rollerini verir ve çok yeni hesapları filtreler."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect'in **karşılaması**, Discord sunucunuzun yeni üyeleriyle katıldıkları andan itibaren ilgilenir: adlarına hazırlanmış bir kartla bir **karşılama mesajı**, **otomatik roller** ve genellikle [baskınlar](/tr/learn/discord-raid) sırasında kullanılan, o iş için oluşturulmuş hesapları uzak tutan bir **minimum hesap yaşı**. Bu üç ayar, `/settings` komutunun “**Katılımlar**” sekmesinde, [captcha](./captcha.md) ve [Otomatik RaidMode](./raid-mode.md)'un yanında bulunur.

## ❓ Nasıl çalışır? {#working}

Bir kullanıcı sunucunuza katıldığında, kabul edilmeden önce [baskın modu](./raid-mode.md#action), [minimum hesap yaşı](#minage) ve ardından [captcha](./captcha.md) uygulanır. Kabul edildikten sonra [otomatik rollerini](#autorole) ve [karşılama mesajını](#welcome-message) alır.

## 👋 Karşılama mesajı {#welcome-message}

Karşılama mesajı, bir üye sunucuya kabul edildiğinde seçtiğiniz kanala gönderilir. Metninizi ve her üye için oluşturulan bir **karşılama kartı** içerir: avatarı, “Hoş geldiniz:” ve ardından sunucunun adı, ayrıca üye numarası.

<Settings start="welcome" />

### Karşılama mesajını etkinleştirme {#welcome-config}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Katılımlar**” sekmesini açın.
3. “**Karşılama mesajı**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Karşılama kanalı**” içinde mesajın gönderileceği metin kanalını seçin. Bir kanal seçmek mesajı etkinleştirir.

Ekranın sağ üstündeki anahtar, karşılama mesajını etkinleştirir veya devre dışı bırakır. Mesajın bir önizlemesi ekranın altında görüntülenir ve her değişiklikte güncellenir.

:::info
Karşılama kanalı; captcha, jail, HoneyPot veya DISCON kanalı olamaz. Kanal silinirse ayar boşaltılır.
:::

### Metin ve değişkenler {#welcome-text}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Katılımlar**” sekmesini açın.
3. “**Karşılama mesajı**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Mesaj içeriği**” içinde “**Metin**”e tıklayın.
5. Mesajınızı yazın (en fazla 1.200 karakter), ardından onaylayın. Varsayılan mesaja dönmek için alanı boş bırakın.

<SettingsModal name="welcomeText" />

Varsayılan metin, sunucunun dilinde “**`{server.name}`** sunucusuna hoş geldin `{user.mention}`! 🎉” şeklindedir. Şu değişkenleri kullanabilirsiniz:

| Değişken | Yerine geçen |
|---|---|
| `{user.mention}` | Üyenin etiketi |
| `{user.name}` | Kullanıcı adı |
| `{user.displayname}` | Görünen adı |
| `{user.id}` | [Kimliği](../guides/id.mdx) |
| `{server.name}` | Sunucunun adı |
| `{server.member_count}` | Sunucunun üye sayısı |
| `{server.id}` | Sunucunun kimliği |

### Üyeyi etiketleme {#welcome-mention}

Varsayılan olarak etkin olan “**Üyeyi etiketle**” seçeneği, karşılama mesajı gönderildiğinde yeni üyeyi bilgilendirir. Yalnızca gelenleri etiketler, asla @everyone'ı veya rolleri etiketlemez.

### Düğmeler {#welcome-buttons}

Mesajın altına, sunucunun bir kanalına götüren düğmeler ekleyebilirsiniz; örneğin “Kuralları oku”.

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Katılımlar**” sekmesini açın.
3. “**Karşılama mesajı**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Düğmeleri yönet**” içinde “**Düğme ekle**”yi seçin.
5. Düğmeye bir ad verin, bağlanacak kanalı ve dilerseniz bir **emoji** seçin: standart bir emoji ya da bu sunucunun bir emojisi (`<:ad:id>`, `:ad:` veya kimliği). Geçersiz bir emoji kaydı engellemez: düğme emojisiz oluşturulur.

Bir düğmeyi düzenlemek veya silmek için aynı listeden seçin.

**Sınırlar:** ücretsiz sürümde 2 düğme, [premium](/tr/premium) sürümde 4 düğme. Premium sona ererse yalnızca ilk 2 düğme görüntülenmeye devam eder.

### Renk <span className="badge-premium">Premium</span> {#welcome-color}

[Premium](/tr/premium) ile mesajın solundaki çubuğun rengini seçmek için “**Mesaj içeriği**” içinde “**Renk**”e tıklayın: listeden bir RaidProtect rengi ya da bir onaltılık kod (örneğin `#D35F5F`). Seçim yapılmazsa mesaj, [özelleştirdiyseniz](/tr/premium) botun takma ad rengini, aksi halde varsayılan rengi kullanır. Karşılama kartı aynı renkle tonlanır.

### Yoğun katılım ve baskınlar {#welcome-raid}

- **Gruplama:** çok sayıda üye aynı anda geldiğinde, kanalı doldurmamak için katılımlar gruplanır.
- **Baskın sırasında duraklatma:** RaidProtect'in [baskın modu](./raid-mode.md) veya [Join lock](./join-lock.mdx) etkin olduğu sürece hiçbir karşılama mesajı gönderilmez.

## 🏷️ Otomatik roller {#autorole}

Otomatik roller, her yeni üyeye katılır katılmaz ya da etkinse [captcha](./captcha.md)'nın başarıyla geçilmesinden sonra verilir. Ayarı otomatik olarak aktarılan eski captcha otomatik rolünün yerini alırlar.

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Katılımlar**” sekmesini açın.
3. “**Otomatik roller**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. Bir veya daha fazla rol seçin.

Tüm otomatik rolleri kaldırmak için “**Sıfırla**”ya tıklayın.

<Settings start="autorole" />

**Sınırlar:** ücretsiz sürümde 3 rol, [premium](/tr/premium) sürümde 10 rol.

:::warning
İzin taşıyan rollerden kaçının: otomatik olarak verilen bir rol hiçbir yetki vermemelidir. RaidProtect, bir entegrasyon tarafından yönetilen rolleri, kendi rolünün veya sizin rolünüzün üstündeki rolleri, moderasyon izni taşıyan rolleri ve captcha'nın doğrulanmamış rolünü (captcha'dan hemen sonra verildiğinde üyeyi yeniden engellerdi) reddeder: seçiminizdeki kabul edilebilir roller korunur ve diğerlerinin neden reddedildiğini açıklayan ayrı bir mesaj gösterilir (hepsi reddedilirse mevcut yapılandırma değişmez). Seçilen bir rol sonradan izin kazanırsa sizi uyarır.
:::
:::info
Sunucunuz otomatik rolü için başka bir bot kullanıyorsa rolü captcha'dan önce verebilir. Onu RaidProtect'in otomatik rolleriyle değiştirin.
:::

## 🤖 Botların gelişi {#bots}

Bu, RaidProtect'in **antibot** özelliğidir: sunucunuza katılan botları denetler. Varsayılan olarak sunucuya eklenen bir bot, bir üye gibi [otomatik rolleri](#autorole) alır. “**Katılımlar**” sekmesinin “**Botlar**” bölümü bunu değiştirir.

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Katılımlar**” sekmesini açın.
3. “**Botlar**” yanındaki “**Yapılandır**” düğmesine tıklayın.

- **Botların rolleri**: gelen her bota otomatik rollerin **yerine** verilir. Rol seçilmezse botlar otomatik rolleri alır. **Sınırlar:** ücretsiz sürümde 1 rol, [Premium](/tr/premium) ile 15 rol. RaidProtect, bir entegrasyon tarafından yönetilen rolleri, sizin rolünüzün veya kendi rolünün üstündeki rolleri ve **Yönetici** iznini veren rolleri reddeder. Moderasyon izni veren bir rol bir uyarıyla kabul edilir: onu güvendiğiniz botlara ayırın. Botlar captcha'dan geçmez ve rollerini gelir gelmez alır.
- **İzin verilmeyen botları at**: eklenen her bot, sahibi daha önce `/bypass bot` komutuyla izin vermediyse hemen atılır. Varsayılan olarak devre dışıdır. Bu seçeneği etkinleştirebilen veya devre dışı bırakabilen ve bir bota izin verebilen **yalnızca sunucu sahibidir**.

### Bir bota izin verme {#bypass-bot}

Şu komutu kullanın: ```/bypass bot [bot]```

`[bot]` yerine izin verilecek botu yazın: bot, sonraki 10 dakika içinde sunucuya atılmadan **bir kez** katılabilir. Bot belirtilmezse komut, şu anda izin verilen botları listeler. Her izin loglarınıza kaydedilir.

:::info
RaidProtect'in bir botu atabilmesi için “**Üyeleri At**” iznine ve o botun rolünün üstünde bir role ihtiyacı vardır. Aksi halde log bunu belirtir ve bot kalır.
:::

## 🎂 Minimum hesap yaşı {#minage}

Güvenliği artırmak için yeni üyelerin Discord hesapları için bir minimum yaş isteyebilirsiniz. Bir baskından hemen önce oluşturulan hesaplar kapıdan geçemez. Filtre her katılımda uygulanır.

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Katılımlar**” sekmesini açın.
3. “**Minimum hesap yaşı**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Minimum hesap yaşı**” içinde 2 saat, 12 saat, 1 gün veya 2 günü ya da bir “**Özel değer**” seçin (örneğin `0y 3d 1h`, en fazla 10 yıl).
5. “**Eylem**” içinde çok yeni hesaplara ne olacağını seçin.

Filtreyi devre dışı bırakmak için “**Sıfırla**”ya tıklayın. RaidProtect'in `KICK_MEMBERS` iznine ihtiyacı vardır.

<Settings start="minage" />

### Eylemler {#minage-action}

| Eylem | Çok yeni bir hesap üzerindeki etki |
|---|---|
| “**At**” (varsayılan) | Hesabı çok yeni olduğu sürece her denemede atılır. |
| “**Gerekli yaşa kadar karantina**” | Sunucudan hiçbir şey görmeden girer ([Jail rolü](./sanctions.mdx#jail) aracılığıyla) ve gerekli yaşa ulaşır ulaşmaz, belirtilen tarihte karantinadan çıkar. |
| “**Girişte tut**” | Yalnızca yaşa ulaştığında çözebileceği bir [captcha](./captcha.md)'da bloke edilir. |

Hesap, sunucuya erişim kazanacağı tarihi içeren bir özel mesaj alır. Atmalar, karantinalar ve yasaklamalar log kanalına kaydedilir.

:::info
- “**Gerekli yaşa kadar karantina**”, “**Moderasyon**” > “**Cezalar**” sekmesinde yapılandırılan bir Jail rolü gerektirir. Onsuz RaidProtect, onu yapılandırmanızı ya da “**Gerekli yaşa kadar yasakla**”ya geçmenizi önerir: hesap sunucudan çıkar ve yasağı doğru tarihte otomatik olarak kaldırılır.
- “**Girişte tut**”, **Panel (Etkileşimli)** modunda etkin bir captcha gerektirir.
:::

### 🎫 Minimum yaş bypass'ı {#bypass-minage}

Şu komutu kullanın: ```/bypass minage [kullanıcı]```

`[kullanıcı]` yerine istediğiniz [kimliği](../guides/id.mdx) yazın; bu kullanıcı gerekli yaşa takılmadan sunucuya katılmak için 10 dakikaya sahip olur. Komutu kullanıcı belirtmeden de kullanarak geçerli bypass kullanıcıları listesini öğrenebilirsiniz. Komut, çok yeni bir hesabın karantinasını da kaldırır. `/unjail` onu kaldırmaz: kullanılacak komutu belirtir.

## Sık sorulan sorular {#faq}

### Karşılama mesajı ne zaman gönderilir?

Üye kabul edildiğinde: captcha uygulanmıyorsa katıldığı anda, aksi halde captcha'nın başarıyla geçilmesinden sonra. Bir baskın veya Join lock sırasında gönderilmez.

### Karşılama kartı kaldırılabilir mi?

Hayır, karşılama kartı her karşılama mesajına eklenir. Premium ile rengini değiştirebilirsiniz.

### Kaç otomatik rol verilebilir?

Ücretsiz sürümde 3, Premium ile 10 rol. Moderasyon izni taşıyan roller reddedilir.

### Otomatik roller captcha'dan önce mi verilir?

Hayır. Captcha üyeye uygulandığında otomatik rolleri, captcha'nın başarıyla geçilmesinden sonra verilir.

### Hangi minimum yaş seçilmeli?

Birkaç saatten 1 güne kadar bir değer, gerçek üyeleri rahatsız etmeden bir baskın için oluşturulmuş hesapların çoğunu elemeye yeter. [`/setup` komutu](../setup.md) varsayılan olarak 6 saat ayarlar.

### Çok yeni bir hesap yasaklanır mı?

Hayır, varsayılan olarak değil: her denemede atılır. Ayrıca gerekli yaşa kadar karantinaya alabilir veya captcha'nın arkasında tutabilirsiniz. Geçici yasaklama, yalnızca Jail rolü yapılandırılmadığında bir geri çekilme yoludur.
