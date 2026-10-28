---
title: Çift hesaplar
description: "RaidProtect'in çift hesapları, Discord sunucunuzda aynı kişiye ait hesapları bağlar: birini yasaklamak diğerlerini de yasaklar, atlatma olmaz."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

**Çift hesaplar**, ekibinizin birden fazla Discord hesabının aynı kişiye ait olduğunu bildirmesini sağlar. Birinin [yaptırımları](./sanctions.mdx) böylece diğerlerine de yayılır: yasaklanan bir üye, yaptırımını atlatmak için ikinci bir hesapla geri dönemez.

:::info Deneme: Identity Update
Çift hesaplar, 3.7.0 sürümü için planlanan **Identity Update**'in parçasıdır. Çıkışına kadar deneme aşamasındadır; [Premium](/tr/premium) sunucular için herkese açık beta olarak sunulur.
:::

## ❓ Nasıl çalışır? {#working}

- **Kişi başına bir grup**: bir grup, ekibinizin aynı kişi olarak kabul ettiği hesapları bir araya getirir. Gruplar sunucunuza özeldir: diğer sunucularla hiçbir şey paylaşılmaz.
- **Paylaşılan yaptırımlar** ([Premium](/tr/premium)): yasaklama, atma, mute, jail ve timeout, her yaptırım için seçtiğiniz [moda](#modes) göre grubun diğer hesaplarına yayılır. Yaptırım hedeflenen hesabın adına kalır, diğerleri onun durumunu alır. Yaptırım, sunucuyu yöneten hesaplara (Yönetici, Sunucuyu Yönet, Üyeleri Yasakla, Üyeleri At veya Üyelere Zaman Aşımı Uygula izinleri), sunucu sahibine ve botlara asla yayılmaz. Premium olmadan hesaplar bağlanır ve görüntülenir ama hiçbir yaptırım yayılmaz: yaptırımın logu bu durumda üyenin diğer hesaplarını belirtir.
- **Ortak kaldırma**: hesaplardan herhangi birinin yaptırımını kaldırmak, Premium'lu veya Premium'suz, yaptırımı hepsi için kaldırır.
- **Gruplu arama**: bir hesabın [yaptırımlarını aramak](./sanctions.mdx#search), grubun diğer hesaplarının yaptırımlarını da gösterir.
- **Discord'un AutoMod'u**: Discord'un AutoMod'unun uyguladığı timeout ve mute'lar da bağlı hesaplara yayılır.
- **Captcha tarafından tespit edilenler**: [captcha Activity'si](./captcha.md#activity-alts), aynı kişi olduğundan emin olduğu iki hesabı kendiliğinden bağlayabilir ya da bağlantıyı ekibinize önerebilir.
- **Loglar**: bağlantılar, çıkarmalar ve ana hesap değişiklikleri [moderasyon loglarına](./moderation.mdx#logs) kaydedilir. Bir yaptırımın logu bağlı hesapları kullanıcı adlarıyla belirtir ve embed biçiminde, yaptırım alan üyenin `/alt` panelini açan bir “**Bağlı hesaplar**” düğmesi taşır.

**Sınırlar:** ne grup başına hesap sayısında ne de grup sayısında sınır yok. Bir yaptırım tek seferde **10 bağlı hesaba** yayılır: sonrakiler bir sonraki mesajlarında veya geldiklerinde yaptırım alır, yaptırımın altındaki düğme ise onlara hemen yaptırım uygular.

## 🔗 /alt ile hesapları bağlama {#alt}

Şu komutu kullanın: ```/alt [user] [other]```

- Seçenek olmadan: sunucunun bağlı hesap gruplarının listesini gösterir. “**Hesap bağla**” düğmesi buradan sunucunun iki üyesini ya da sunucuda olmayan iki hesabı kimlikleriyle bağlar.
- `[user]` ile: bu hesabın grubunu veya başka hiçbir hesaba bağlı değilse yalnızca bu hesabı gösterir. Her hesap durumuyla birlikte görünür (sunucudan yasaklı, sunucuda, sunucuda değil, karantinada), ana hesap en başta.
- `[user]` ve `[other]` ile: aynı kişi olarak bildirilen iki hesabı doğrudan bağlar.

Grubun hesaplarından biri zaten yasaklıysa ([Premium](/tr/premium)), bağlı hesaplar aynı yasağı paylaşır: RaidProtect size diğer hesapları da yasaklamak için “**Onları da yasakla**”, yasaklı hesabın yasağını herkes için kaldırmak için “**Yasağı kaldır**” ya da kararı ertelemek için “**Daha sonra**” seçeneklerini sunar.

`[user]` ve `[other]` yerine istediğiniz hesapların etiketini veya [kimliğini](../guides/id.mdx) yazın. Botlar bağlanamaz.

Bir grubun panelinden:

- “**Üye bağla**” gruba bir hesap ekler: sunucunun bir üyesi ya da sunucuda olmayan bir hesabın Discord kimliği.
- “**Gruptaki bir hesabı düzenle**” seçicisi, onu “**Grubun ana hesabı**” yapmak veya “**Bu hesabı gruptan çıkar**” için bir pencere açar. Çıkarılan bir hesap artık aynı kişi olarak değerlendirilmez, ancak grupla birlikte yasaklandıysa yasaklı kalır.

Bir üyenin bağlı hesaplarını ayrıca [`/modview` moderasyon görünümünde](./moderation.mdx#modview), “**Yönet**” düğmesiyle de bulursunuz.

:::info
`/alt` komutu ve düğmeleri **Üyeleri Yasakla** iznini gerektirir.
:::

## 🛠️ Çift hesapların yapılandırması {#config}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Moderasyon**” sekmesini açın.
3. “**Çift hesaplar**” yanındaki “**Yapılandır**” düğmesine tıklayın.

<Settings start="alts" />

### Bağlı hesapların yaptırımları <span className="badge-premium">Premium</span> {#modes}

Her yaptırım için, gruba nasıl yayılacağını seçin:

1. Çift hesaplar ekranında “**Bağlı hesapların yaptırımları**” yanındaki “**Düzenle**”ye tıklayın.
2. Pencerede her yaptırım için bir mod seçin.

Ekrandaki “**Hepsini şuna ayarla…**” seçicisi, aynı modu tüm yaptırımlara birden uygular.

<SettingsModal name="altsModes" />

| Mod | Etki | İlgili yaptırımlar |
|---|---|---|
| “**Hemen**” *(varsayılan)* | Yasaklama: tüm bağlı hesaplar, sunucuda olsun olmasın hemen yasaklanır. Atma: sunucudaki bağlı hesaplar da atılır. Mute, jail ve timeout: sunucudaki hesaplara hemen, diğerlerine geldiklerinde yaptırım uygulanır. | Hepsi |
| “**Olanlara hemen, diğerlerine geldiklerinde**” | Sunucudaki hesaplar hemen yasaklanır, sunucuda olmayan hesaplar yasak sürerken sunucuya katılırlarsa yasaklanır. | Yasaklama |
| “**Tuzak**” | Yalnızca hedeflenen hesaba yaptırım uygulanır. Yaptırım sürerken gelen veya yazan grubun başka bir hesabı atlatma yapıyor sayılır ve [atlatma yaptırımını](#evasion) alır. | Atma hariç hepsi |
| “**Devre dışı**” | Yaptırım yalnızca seçilen hesabı hedefler. | Hepsi |

### Grup yaptırımı {#group-sanction}

Bir yaptırım birkaç hesaba yayıldığında, geçmişte ([`/sanctions`](./sanctions.mdx#search), `/modview`) **tek bir grup yaptırımı** olarak görünür (örneğin “**Grup yasaklaması**”); ilgili hesaplar (“**Hesaplar**”) her birinin durumuyla birlikte listelenir. Her hesap, “`id` grup yaptırımının parçası” ibaresiyle işaretlenmiş kendi satırını korur. Grup yaptırımını iptal etmek, silmek veya düzenlemek (sebep, süre) tüm hesapları aynı anda etkiler. Bir hesap `/yaptirimlarim` içinde yalnızca kendi satırını görür.

### Atlatma yaptırımı {#evasion}

Atlatma yaptırımı, “**Tuzak**” modunda yakalanan bir bağlı hesaba uygulanır: grubunun yaptırımı sürerken sunucuya gelir veya yazar.

1. Çift hesaplar ekranında “**Atlatma yaptırımı**” yanındaki “**Düzenle**”ye tıklayın.
2. Pencerede “**Yaptırım**”ı ve gerekirse “**Süre**”yi seçin.

<SettingsModal name="altsEvasion" />

- “**Yaptırımın kalanı**” *(varsayılan)*: hesap, kendi adına bir yaptırım uygulanmadan, grubun yaptırımını bitimine kadar paylaşır.
- **Bir yaptırım** (Yasaklama, Atma, Susturma, Hapsetme veya Timeout): hesabın adına, kendi süresiyle uygulanır ve ardından tüm grup için geçerli olur. Hesap sunucudan ayrılıp yeniden katılırsa mute veya jail geri gelir. Kalıcı bir yaptırım için süreyi boş bırakın (örn.: `1h`, `3d`, `2w`).

:::info
Timeout her zaman bir süre gerektirir, en fazla 28 gün. Mute ve jail, [rollerinin](./sanctions.mdx#config) yapılandırılmış olmasını gerektirir.
:::

### Kişi başına tek hesap {#single-account}

Captcha ile tespit gibi ücretsiz olan bu ayarla sunucuda yalnızca her grubun **ana hesabı** dolaşır. Diğer hesaplar [jail rolüyle](./sanctions.mdx#jail) **karantinaya** alınır (geçmişte “**Karantina**” yaptırımı). Ana hesap olurlarsa veya gruptan çıkarılırlarsa karantinadan kendiliğinden çıkarlar.

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Moderasyon**” sekmesini açın.
3. “**Çift hesaplar**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Kişi başına tek hesap**” yanındaki “**Etkinleştir**”e tıklayın.

:::info
Bu ayar bir [Jail rolü](./sanctions.mdx#jail) gerektirir. Rol yoksa bir pencere size “**Etkinleştir ve jail'i ayarla**” seçeneğini sunar: ayar etkinleştirilir ve rol oluşturulur oluşturulmaz ikincil hesaplar karantinaya alınır.
:::

Bir grubun ana hesabını değiştirmek için hesaplardan biriyle `/alt` komutunu, ardından “**Gruptaki bir hesabı düzenle**” seçicisini kullanın.

## Sık sorulan sorular {#faq}

### Çift hesaplar sunucular arasında paylaşılır mı?

Hayır. Gruplar sunucunuza özeldir ve diğer sunucularla hiçbir şey paylaşılmaz.

### Hesaplardan birinin yasağını kaldırdığımda ne olur?

Hesaplardan birinin yaptırımını kaldırmak, onu grubun tüm hesapları için kaldırır.

### Sunucumda olmayan bir hesabı bağlayabilir miyim?

Evet. `/alt` panelinde “**Üye bağla**”ya tıklayın ve Discord kimliğini girin.

### /alt komutunu kim kullanabilir?

**Üyeleri Yasakla** iznine sahip üyeler; Identity Update deneme aşamasında olduğu sürece [Premium](/tr/premium) bir sunucuda.
