---
title: Automod
description: "RaidProtect'in Automod'u dolandırıcılık görsellerini, reddedilen uzantılardaki dosyaları ve diğer Discord sunucularına yapılan göndermeleri otomatik olarak kaldırır: davetler, iletilen mesajlar, kanal veya etkinlik bağlantıları ve sunucu etiketleri."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect'in **Automod**'u, istenmeyen bir içerik gönderilir gönderilmez onu otomatik olarak kaldıran filtreleri bir araya getirir. Her filtrenin, mesajın yazarı için kendi yaptırımı vardır.

Açmak için:

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Koruma**” sekmesini açın.
3. “**Automod**” yanındaki “**Yapılandır**” düğmesine tıklayın.

<Settings start="automod" />

## 🖼️ Dolandırıcılık görselleri {#images}

**Görseller** filtresi bilinen dolandırıcılık görsellerini (kripto dolandırıcılıkları, sahte çekilişler, sahte kumarhane promosyonları) siler ve yazarlarına yaptırım uygular. Hiçbir şey yapılandırmadan **varsayılan olarak etkindir**.

Tüm ayrıntılar, yaptırım ve görsel kataloğu [Dolandırıcılık görselleri](./scam-images.md) sayfasındadır.

## 🔗 Diğer sunucular {#servers}

**Diğer sunucular** filtresi, başka Discord sunucularına yönlendiren her şeyi denetler: **davetler**, **iletilen mesajlar**, **kanal bağlantıları** ve **etkinlik bağlantıları**, ayrıca üyelerinizin gösterdiği **sunucu etiketleri**. Ortaklarınıza dokunmadan başıboş reklamı ve rakip ya da kötü niyetli sunucuları engeller.

### Nasıl çalışır? {#servers-working}

Üç davranış ayrı ayrı ayarlanır ve her biri şu modlardan birinde olur:

- “**Devre dışı**”: hiçbir şey filtrelenmez.
- “**Kara liste**”: listedeki sunucular reddedilir, diğerleri geçer.
- “**Beyaz liste**”: yalnızca listedeki sunucular geçer, diğerlerinin hepsi reddedilir.

| Davranış | Reddedilirse ne olur |
|---|---|
| **Davet** | Daveti içeren mesaj silinir. `ptb.` ve `canary.` bağlantıları da sayılır; bir embed, bileşen veya iletilen mesaj içine gizlenmiş davetler ile sonradan düzenlenen mesajlar da okunur. |
| **İletilen mesaj veya kanal bağlantısı** | O sunucudan iletilen veya kanallarından ya da etkinliklerinden birine bağlantı içeren mesaj silinir. |
| **Görüntülenen sunucu etiketi** | Üye, [Jail rolüyle](./sanctions.mdx#jail) **karantinaya** alınır. Etiketi kaldırdığı anda karantina kalkar. |

Kendi sunucunuz, davetlerinden herhangi biriyle her zaman geçer ve ekibiniz (**Sunucuyu Yönet** veya **Mesajları Yönet** izinleri) asla hedef alınmaz.

### Yapılandırma {#servers-config}

1. Automod içinde “**Diğer sunucular**” yanındaki “**Yapılandır**”a tıklayın.
2. Filtreyi sağ üstteki anahtarla etkinleştirin, ardından her davranış için bir mod seçin.

<Settings start="serverRefs" />

#### Arkadaş ve grup davetleri <span className="badge-premium">Premium</span> {#servers-private}

Bir arkadaş veya özel grup daveti hiçbir sunucuya çıkmaz. “**Davet**” modunda (“**Devre dışı**” dışında herhangi bir durumda), “**Arkadaş ve grup davetleri**” seçicisi bunların akıbetini ayrıca belirler:

- “**Listeye uy**” *(varsayılan)*: kara listede geçer, beyaz listede silinir.
- “**Her zaman izinli**”: liste ne olursa olsun kabul edilir.
- “**Her zaman silinir**”: liste ne olursa olsun silinir.

Premium olmadan her zaman listeye uyarlar.

:::tip
Değiştirdiğiniz ama etkinleştirmediğiniz bir filtrenin ekranından çıkarsanız RaidProtect, ayrılmadan önce onu etkinleştirmeyi önerir (“**Devre dışı kalsın**” önceden seçilidir).
:::

### Yaptırım {#servers-sanction}

Reddedilen her mesaj silinir. “**Silinen mesajların yaptırımı**” içinde ayrıca yazarı için bir yaptırım ya da “**Yalnızca mesaj silinir**” seçin. Timeout, mute, jail veya yasaklama için süresini de seçin.

Yaptırım, üye başına dakikada en fazla bir kez uygulanır: art arda birkaç davet yapıştıran bir üyeye yalnızca bir kez yaptırım uygulanır.

### Sunucu listeleri {#servers-lists}

1. “**Sunucu ekle**”ye tıklayın.
2. Sunucunun hâlâ geçerli bir davetini yapıştırın (örn. `discord.gg/ornek`): adı ve kimliği ondan okunur. Yalnızca kimlik artık kabul edilmez.
3. Listeyi seçin: kara veya beyaz.

Zaten listede olan bir sunucu yalnızca liste değiştirir. “**Kaldır**”, bir veya birden fazla sunucuyu listelerden çıkarır.

**Sınırlar:** iki listede toplam 25 sunucu.

:::tip
Yalnızca ortaklarınızın davetlerine izin vermek için “**Davet**”i “**Beyaz liste**” olarak ayarlayın ve ortaklarınızı beyaz listeye ekleyin. Boş bir beyaz liste, diğer sunuculara giden tüm davetleri reddeder.
:::

### Loglar {#servers-logs}

Her yaptırım ve her karantina, ilgili sunucu ve kanalla birlikte [moderasyon loglarınıza](./moderation.mdx#logs) yazılır. Yaptırımsız silinen bir mesaj (“**Yalnızca mesaj silinir**”) da kaydedilir. Yaptırımlar, “Reddedilen sunucuya davet”, “Reddedilen arkadaş veya grup daveti” (Premium), “Reddedilen sunucudan iletilen mesaj veya kanal bağlantısı” veya “Reddedilen sunucunun etiketi” gerekçeleriyle [yaptırım geçmişinde](./sanctions.mdx) görünür.

## 📎 Dosya uzantıları {#files}

**Dosya uzantıları** filtresi, uzantısı reddedilen dosyaları siler. Bazı uzantıları engelleyebilir (kara liste) veya yalnızca bazılarına izin verebilirsiniz (beyaz liste); tüm sunucuda ya da kanal kanal. Ekibiniz (**Sunucuyu Yönet** veya **Mesajları Yönet** izinleri) asla hedef alınmaz.

İletilen bir mesajın dosyaları da sayılır ve bir alt başlık kendi kanalının kurallarına uyar.

### Yapılandırma {#files-config}

1. Automod içinde “**Dosya uzantıları**” yanındaki “**Yapılandır**”a tıklayın.
2. Filtreyi sağ üstteki anahtarla etkinleştirin.
3. “**Tüm sunucu**” altında bir mod seçin: “**Devre dışı**”, “**Kara liste**” veya “**Beyaz liste**”.
4. **Grupları** (Yürütülebilir dosyalar, Görseller, Videolar, Ses, Arşivler, Belgeler) işaretleyin ve/veya virgülle ayrılmış başka uzantılar girin, örneğin `exe, msi`. Nokta isteğe bağlıdır. Bir kural, gruplara ek olarak en fazla 50 serbest uzantı kabul eder.

:::warning
Uzantısız bir beyaz liste hiçbir dosyayı kabul etmez: gönderilen her dosya silinir.
:::

### Kanal ve kategori kuralları {#files-channels}

Bir kanala, alt başlığa veya kategoriye kural vermek için “**Kanal ekle**”ye tıklayın. Bir kategori kuralı tüm kanalları için geçerlidir.

Kurallar toplanır; birden fazla kuralın adını verdiği bir uzantı hariç: bu durumda **en belirgin** kural karar verir (kanal, sonra kategori, sonra sunucu). Örneğin bir kanalda izin verilen bir `.exe`, sunucunun kara listesine rağmen geçer. Hiçbir kuralın adını vermediği bir uzantı tüm kurallardan geçer.

| | Ücretsiz | <span className="badge-premium">Premium</span> |
|---|---|---|
| **Kanal kuralları** | 1 (ayarlanan ilk kanal) | 20 kanal veya kategori |
| **Kategori kuralı** | Hayır | Evet |

Premium olmadan fazla kurallar korunur ama etkin değildir.

### Bozuk dosyalar {#files-disguised}

Görsel veya video gibi görünmek için yeniden adlandırılmış bir dosya (`.png` olarak yeniden adlandırılmış bir `.exe`) tanınır: Discord onu gerçek bir görsel olarak okuyamaz. Bir beyaz liste onu her zaman reddeder. “**Bozuk dosyaları her zaman reddet**” seçeneği, beyaz liste olmasa bile onu tüm kanallarda siler.

### Yaptırım {#files-sanction}

Reddedilen her dosya mesajıyla birlikte silinir. “**Silinen mesajların yaptırımı**” içinde ayrıca yazarı için bir yaptırım ya da “**Yalnızca mesaj silinir**” seçin. Yaptırım, üye başına dakikada en fazla bir kez uygulanır.

Silinen her mesaj; ilgili dosya, kanal ve uzantıyla birlikte [moderasyon loglarınıza](./moderation.mdx#logs) yazılır. Yaptırımlar “Reddedilen uzantıda dosya” gerekçesiyle [yaptırım geçmişinde](./sanctions.mdx) görünür.

## Sık sorulan sorular {#faq}

### Ortaklarım davetlerini hâlâ paylaşabilir mi?

Evet. Onları Diğer sunucular filtresinin beyaz listesine ekleyin ya da kara liste dışında bırakın.

### Bir üye reddedilen etiketi kaldırırsa ne olur?

Karantinası otomatik olarak kalkar.

### Moderatörler filtrelenir mi?

Hayır. Sunucuyu Yönet veya Mesajları Yönet iznine sahip üyeler Diğer sunucular filtresinin hedefi olmaz.
