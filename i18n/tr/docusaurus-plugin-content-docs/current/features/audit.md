---
title: Güvenlik denetimi
description: "RaidProtect'in /audit komutu Discord sunucunuzun güvenliğini analiz eder, yapılandırma açıklarını tespit eder ve bunları tek tıkla düzeltmeyi önerir."
---

import AuditMockup from '@site/src/components/DiscordMessage/mockups/audit';

<AuditMockup />

`/audit` komutu Discord sunucunuzun yapılandırmasını analiz eder ve güvenlik açıklarını tespit eder: fazla müsamahakâr izinler, yetersiz doğrulama düzeyi, [korunmayan yönetici rolleri](/tr/learn/least-privilege) vb. Ardından sorunların çoğunu tek tıkla düzeltmeyi önerir.

Şu komutu kullanın: ```/audit```

:::info
Komut, `Yönetici` iznine sahip üyelere ayrılmıştır. Rapor yalnızca sizin tarafınızdan görülebilir (geçici yanıt).
:::

## ❓ Denetim nasıl çalışır {#working}

RaidProtect sunucunuza **100 üzerinden genel bir puan**, bir derece (**S**'den **E**'ye) ve bir değerlendirme verir: **Mükemmel** (90 ve üzeri), **İyi** (70 ve üzeri), **Geliştirilmeli** (40 ve üzeri) veya **Kritik** (40'ın altı).

Rapor, her biri kendi puanına sahip üç kategoriye ayrılır:

- **Sunucu yapılandırması**
- **Roller**
- **Kanallar**

Her denetimin sonucunu görmek için bir kategorinin “**Ayrıntılar**” düğmesine, rapora dönmek için ise “**Geri**”ye tıklayın. “**Yenile**” düğmesi, değişikliklerinizden sonra analizi yeniden başlatır.

### Yapılan denetimler {#checks}

| Kategori | Denetim |
|---|---|
| Sunucu yapılandırması | **Doğrulama düzeyi** |
| Sunucu yapılandırması | **Müstehcen içerik filtresi** |
| Sunucu yapılandırması | **Moderasyon için iki adımlı doğrulama (2FA)** |
| Sunucu yapılandırması | **Varsayılan bildirimler** |
| Sunucu yapılandırması | **Baskın uyarıları** |
| Sunucu yapılandırması | **DM Lock (herkese açık sunucu)** * |
| Sunucu yapılandırması | **Bot sayısı** * |
| Roller | **@everyone izinleri** |
| Roller | **Otomatik atanabilir roller** |
| Roller | **Davetlerin verdiği roller** |
| Roller | **Yönetici rolleri** |
| Roller | **Yönetici botlar** * |
| Kanallar | **@everyone için kanal izinleri** |
| Kanallar | **Gereksiz kanal izinleri** |
| Kanallar | **Ekip rollerinin konuşma izinleri** * |
| Kanallar | **Eski webhook'lar** * |

`*` ile işaretli denetimler **bilgilendiricidir**: raporda görünür ama puanı etkilemez. **DM Lock (herkese açık sunucu)** yalnızca topluluk veya herkese açık sunucularda görünür.

Bu denetimler hakkında bazı açıklamalar:

- **Otomatik atanabilir roller**: bir üyenin moderatör olmadan edindiği roller kaynaklarıyla birlikte ilgilidir: Discord karşılaması, RaidProtect'in [otomatik rolü](./onboarding.md#autorole), boost, abonelik, entegrasyon veya bağlı rol.
- **Ekip rollerinin konuşma izinleri**: bir moderasyon izni taşıyan ve bazı kanallarda başka yerlerde zaten karşılanmış konuşma izinleri (yazma, konuşma…) bulunan rol. Bunları koruruz, çünkü bir [`/lock`](./channel-lock.md) sırasında veya [DISCON](./discon.md)'un 1. seviyesinde söz hakkını ekibe bırakırlar. Listelenen her rolün gerçekten bir ekip rolü olduğunu kontrol etmeniz yeterlidir: aksi takdirde kilitlemelerden kaçar.

RaidProtect'in düzgün çalışması için izinler eksikse, puana ek olarak özel bir uyarı gösterilir. Eksik bir izin gerektiren bir denetim (örneğin Webhook'ları Yönet) değerlendirilmedi olarak bildirilir.

:::info
RaidProtect sunucunuzdaki bazı kanalları göremiyorsa rapor bir “**Eksik analiz**” kutusu gösterir: bu kanallar analiz edilmez ve puan yalnızca geri kalanı kapsar.
:::

## 🔧 Açıkları tek tıkla düzeltme {#fix}

Otomatik olarak düzeltilebilen denetimlerde bir “**Düzelt**” düğmesi görünür:

| Denetim | Uygulanan düzeltme |
|---|---|
| Doğrulama düzeyi | Sunucunun doğrulama düzeyini **Orta**'ya getirir (“Orta” veya üzeri geçer, “Düşük” uyarı, “Yok” başarısızlık verir) |
| Müstehcen içerik filtresi | Filtreyi **tüm üyeler** için etkinleştirir |
| Varsayılan bildirimler | Varsayılan bildirimleri **yalnızca @bahsetmeler** olarak ayarlar |
| @everyone izinleri | @everyone rolünden hassas izinleri kaldırır |
| Gereksiz kanal izinleri | Temizlenecek kanalların listesini açar, ardından “**Tümünü düzelt**” |

**Yönetici rolleri** için otomatik düzeltme yoktur: denetim, bunları Authentification Manager'a ekleyen “**Ekle**” veya “**Tümünü ekle**” düğmeleriyle korumanızı önerir ([Authentification Manager](./authentication-manager.mdx)).

:::warning
Düzeltmeleri uygulamak için RaidProtect'in `Sunucuyu Yönet` ve `Rolleri Yönet` izinlerine sahip olması gerekir.
:::

### Gereksiz kanal izinleri {#redundant}

Bir kanal izni, hiçbir şeyi değiştirmediğinde **gereksizdir**: sunucu düzeyinde zaten verilmiştir, kanalın @everyone iznince zaten verilmiştir ya da etkisiz bir reddetmedir. Gerçekten etkili olması için birden fazla yerde değiştirilmesi gerekir, bu da kör noktalar yaratır.

Liste, kanal kanal her izni ve neden gereksiz olduğunu ayrıntılandırır:

- Bir kanalın “**Yok say**” düğmesi, onu listeden, puandan ve “**Tümünü düzelt**”ten çıkarır. “**Yok sayılan öğeler**” üzerinden geri yükleyebilirsiniz.
- Bir kategoriyi düzeltmek, ona senkronize kanalları da düzeltir.
- **Yönetici** rolünün izinleri ayrı olarak, “**Yönetici rolü üzerinde etkisi yok**” altında listelenir: Discord bunları yok sayar ve biz asla kaldırmayız, çünkü bu rol Yönetici iznini kaybederse uygulanacaktır.

Analiz, [`/lock`](./channel-lock.md) veya [DISCON](./discon.md) ile devam eden kilitlemeleri hesaba katar.

## ✅ Bilinçli bir uyarıyı geçersiz kılma {#ignore}

Bazı uyarılar bilinçli tercihlere karşılık gelir: güvenilir bir yönetici rolü, bilerek `@everyone`'da bırakılmış bir izin vb. Bir kategorinin ayrıntılarında bulunan “**TAMAM olarak işaretle**” düğmesi, bir öğeyi seçip “**Yok say**” olarak işaretlemenize olanak tanır.

Yok sayılan bir uyarı raporda görünmez olur ve artık puanınızı etkilemez. Yok sayılan öğelerin listesini (“**Yok sayılan öğeler**” düğmesi) istediğiniz zaman görüntüleyebilir ve herhangi birini “**Geri yükle**” veya “**Tümünü geri yükle**” ile geri alabilirsiniz.

## Sık sorulan sorular {#faq}

### “Orta” doğrulama düzeyi neden yeterli?

“Orta” düzey, 5 dakikadan kısa süre önce oluşturulmuş hesapları zaten eler; bu da çoğu tek kullanımlık hesabı engeller. “**Düzelt**” düğmesinin uyguladığı düzey bu yüzden budur.

### Denetim neden yönetici rollerimin kanal izinlerini kaldırmıyor?

Discord, Yönetici iznine sahip bir rolün kanal izinlerini yok sayar. Bunları kaldırmadan ayrı olarak listeleriz: rol Yönetici iznini kaybederse yeniden etkili olurlar.

### Bir kanalı gereksiz izinlerin analizinden hariç tutabilir miyim?

Evet: gereksiz izinler listesinde kanalın yanındaki “**Yok say**”a tıklayın. Artık puana sayılmaz ve yok sayılan öğelerden geri yükleyebilirsiniz.
