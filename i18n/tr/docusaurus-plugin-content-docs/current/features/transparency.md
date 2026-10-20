---
title: Şeffaflık
description: "RaidProtect'in Şeffaflık özelliği üyelerinize sunucunun nasıl yönetildiğini gösterir: periyodik özetler, herkese açık modlog ve /transparency komutu."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import TransparencyMockup from '@site/src/components/DiscordMessage/mockups/transparency';

<TransparencyMockup />

Şeffaflık, üyelerinize sunucunun nasıl yönetildiğini göstermeyi sağlar. Birbirini tamamlayan üç öğeye dayanır: **periyodik moderasyon özetleri**, bir **herkese açık modlog** ve **`/transparency` komutu**.

## 🛠️ Şeffaflığın yapılandırması {#config}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Moderasyon**” sekmesini açın.
3. “**Şeffaflık**” yanındaki “**Yapılandır**” düğmesine tıklayın.

Ekran size “**Periyodik özetler**”e, “**Herkese açık modlog**”a ve “**/transparency komutu**” anahtarına erişim verir.

<Settings start="transparency" />

## 📊 Periyodik özetler {#recaps}

Özet, moderasyon eylemlerinin toplu bir özetidir ve seçilen sıklığa göre bir kanalda otomatik olarak yayınlanır.

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Moderasyon**” sekmesini açın.
3. “**Şeffaflık**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Periyodik özetler**” yanındaki “**Yapılandır**” düğmesine tıklayın.
5. Boş bir yuvanın yanındaki “**Ekle**”ye tıklayın.
6. Yeni özetin ekranı açılır: **sıklığını**, yayınlanacağı **kanalı**, isteğe bağlı olarak **etiketlenecek** bir rolü ayarlayın, ardından başlığın sağındaki “**Etkinleştir**”e tıklayın.

Bir özete daha sonra dönmek için listede yanındaki “**Düzenle**”ye tıklayın.

<Settings start="recaps" />

Yeni bir özet devre dışı, haftalık olarak, yaklaşık 08:00'de, herkese açık modlog kanalında yayınlanacak şekilde oluşturulur. Kullanılabilir sıklıklar: **Haftalık** (varsayılan), **İki haftada bir**, **Aylık**, **Üç ayda bir** ve **Yıllık**. Aynı sıklıktaki iki özet aynı kanalda yayınlanamaz.

Bir özetin ekranından ayrıca şunları yapabilirsiniz:

- özeti “**Yeniden adlandır**” ile yeniden adlandırmak (sıklığın adını kullanmak için alanı boş bırakın);
- yayın “**Zaman**”ını ayarlamak (aşağıya bakın);
- [`/transparency` komutunun](#command) kaynağı yapmak için “**/transparency ile besle**”ye tıklamak;
- özeti silmek için “**Sil**” düğmesine tıklamak.

Özet şunları içerir:
- dönem boyunca **toplam moderasyon eylemi sayısı**;
- yaptırım türüne göre ayrıntı (yasaklamalar, softban'lar, atmalar, timeout'lar, mute'lar, jail'ler, uyarılar ve diğer eylemler);
- **[ScamLens](./scam-images.md) tarafından engellenen dolandırıcılıkların** sayısı;
- **otomatik** eylemler ile **ekibin** eylemleri arasındaki dağılım.

**Sınırlar:** ücretsiz sürümde 1 özet, [Premium](/tr/premium) sürümde 5 özet (örneğin ekip için haftalık ve herkese açık aylık bir özet).

### Yayın zamanı {#recap-schedule}

1. Bir özetin ekranında “**Zaman**”a tıklayın.
2. Pencerede “**Yayınlanma saati**”ni seçin (yerel saat, `00:00` ile `23:00` arası).

<SettingsModal name="recapSchedule" />

| Sürüm | Yayın zamanı |
|---|---|
| Ücretsiz | Seçilen saatten itibaren 12 saatlik bir aralıkta |
| [Premium](/tr/premium) | Seçilen saat civarında, 1 saat yaklaşıklıkla |

Seçilen saat, “**Zaman**” satırının altında hatırlatılan **sunucunun saat dilimini** izler. Bu, tüm sunucu için yalnızca bir kez, “**Genel**” sekmesinde ayarlanır:

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Genel**” sekmesini açın.
3. “**Saat dilimi**” yanındaki “**Düzenle**” düğmesine tıklayın.
4. “**Saat dilimi (UTC)**” içinde UTC farkınızı seçin ya da öncelikli olan ve yaz saatini otomatik yöneten `Europe/Paris` gibi bir “**Özel saat dilimi**” girin.

<SettingsModal name="timezone" />

## 📢 Herkese açık modlog {#modlog}

Herkese açık modlog, **her moderasyon eylemini** üyelerinizin görebildiği bir kanalda yalnızca göstermeyi seçtiğiniz bilgilerle yayınlar.

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Moderasyon**” sekmesini açın.
3. “**Şeffaflık**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Herkese açık modlog**” yanındaki “**Yapılandır**” düğmesine tıklayın.
5. Bir kanal seçin ya da “**Benim için bir tane oluştur**”a tıklayın (RaidProtect, @everyone için salt okunur `public-modlog` kanalını oluşturur).
6. “**Gösterilen bilgiler**” içinde şunları seçin: “**Sebep**”, “**Moderatör**”, “**Süre**”, “**Cezalandırılan üye**” (varsayılan: Sebep ve Süre).
7. “**Yayınlanan yaptırımlar**” içinde şunları seçin: “**Manuel (ekip)**” ve/veya “**Otomatik (RaidProtect)**” (varsayılan: ikisi de).
8. Ekran başlığının sağındaki “**Etkinleştir**”e tıklayın.

<Settings start="modlog" />

Eylem otomatikse ve moderatör gösterimi etkinse modlog, moderatörün adı yerine “RaidProtect” yazar.

## 📜 `/transparency` komutu {#command}

Şu komutu kullanın: ```/transparency```

Herhangi bir üyenin kapanmış dönemin **son şeffaflık raporunu** görüntülemesini sağlar (geçici yanıt, yalnızca üye tarafından görülebilir).

- Komutun, Şeffaflık ekranındaki “**/transparency komutu**” anahtarıyla etkinleştirilmesi gerekir.
- Birden fazla özetiniz varsa bir özetteki “**/transparency ile besle**” düğmesi, onu komutun kullandığı kaynak olarak belirler. Bu özet listede ⭐ ile işaretlenir.

## Sık sorulan sorular {#faq}

### Kaç özet programlayabilirim?

Ücretsiz sürümde yalnızca bir, [Premium](/tr/premium) ile en fazla beş.

### Özet saat kaçta yayınlanır?

Seçtiğiniz saatte, `/settings` komutunun “**Genel**” sekmesinde ayarlanan sunucu saat diliminde. Ücretsiz sürümde yayın bu saatten itibaren 12 saatlik bir aralıkta gerçekleşir; Premium ile bir saat yaklaşıklıkla.

### Üyelerim kimin kendilerine yaptırım uyguladığını görür mü?

Yalnızca herkese açık modlogun gösterilen bilgilerinde “**Moderatör**”ü işaretlerseniz. Otomatik bir eylemde modlog bu durumda RaidProtect'i gösterir.
