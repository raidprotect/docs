---
title: Automod
description: "RaidProtect'in Automod'u dolandırıcılık görsellerini ve diğer Discord sunucularına yapılan göndermeleri otomatik olarak kaldırır: davetler, iletilen mesajlar, kanal bağlantıları ve sunucu etiketleri."
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

## 🔗 Diğer sunucular <span className="badge-experiment">Deneme</span> {#servers}

**Diğer sunucular** filtresi, başka Discord sunucularına yönlendiren her şeyi denetler: **davetler**, **iletilen mesajlar** ve **kanal bağlantıları**, ayrıca üyelerinizin gösterdiği **sunucu etiketleri**. Ortaklarınıza dokunmadan başıboş reklamı ve rakip ya da kötü niyetli sunucuları engeller.

:::info Deneme: Shield Update
Diğer sunucular filtresi, 3.6.0 sürümü için planlanan **Shield Update**'in parçasıdır. Çıkışına kadar deneme aşamasındadır; [Premium](/tr/premium) sunucular için herkese açık beta olarak sunulur.
:::

### Nasıl çalışır? {#servers-working}

Üç davranış ayrı ayrı ayarlanır ve her biri şu modlardan birinde olur:

- “**Devre dışı**”: hiçbir şey filtrelenmez.
- “**Kara liste**”: listedeki sunucular reddedilir, diğerleri geçer.
- “**Beyaz liste**”: yalnızca listedeki sunucular geçer, diğerlerinin hepsi reddedilir.

| Davranış | Reddedilirse ne olur |
|---|---|
| **Davet** | Daveti içeren mesaj silinir. `ptb.` ve `canary.` bağlantıları da sayılır; bir embed, bileşen veya iletilen mesaj içine gizlenmiş davetler ile sonradan düzenlenen mesajlar da okunur. |
| **İletilen mesaj veya kanal bağlantısı** | O sunucudan iletilen veya kanallarından birine bağlantı içeren mesaj silinir. |
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

## Sık sorulan sorular {#faq}

### Ortaklarım davetlerini hâlâ paylaşabilir mi?

Evet. Onları Diğer sunucular filtresinin beyaz listesine ekleyin ya da kara liste dışında bırakın.

### Bir üye reddedilen etiketi kaldırırsa ne olur?

Karantinası otomatik olarak kalkar.

### Moderatörler filtrelenir mi?

Hayır. Sunucuyu Yönet veya Mesajları Yönet iznine sahip üyeler Diğer sunucular filtresinin hedefi olmaz.
