---
title: Kanal kilitleme
description: "RaidProtect'in /lock komutu, bir kanalı anında kilitleyerek mesaj gönderilmesini geçici olarak veya kilit açılana kadar engeller."
---

import ChannelLockMockup from '@site/src/components/DiscordMessage/mockups/channel-lock';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

{/* <ChannelLockMockup /> : şimdilik gizli */}

Bazen kullanıcıların mesaj göndermesini engellemek için bir kanalı geçici olarak kilitlemek gerekir. Kilitleme komutu sayesinde bu çocuk oyuncağı haline gelir!

## 🔒 Bir kanalı kilitleme {#lock}

Şu komutu kullanın: ```/lock [#channel] [duration] [reason] [--silent]```

Bu komut, hedeflenen kanalda **@everyone** rolünden mesaj gönderme ve alt başlıklarda mesaj gönderme izinlerini kaldırır; böylece tüm kullanıcıların orada yazmasını engeller.

- `[#channel]` yerine kilitlenecek kanalın etiketini veya [kimliğini](../guides/id.mdx) yazın. Kanal belirtilmezse komutu verdiğiniz kanalı kilitleriz. Metin, duyuru, ses, forum, medya, sahne kanalları ve kategoriler kabul edilir; alt başlıklar kabul edilmez.
- Kanalın neden kilitlendiğini belirtmek için `[reason]` yerine bir sebep yazın (örn.: *sohbet temizliği*, *önemli duyuru* vb.).
- Kanalda hiçbir şey duyurulmaması için `--silent` ekleyin: onayı yalnızca siz alırsınız.

:::info
Aynı kanal 10 dakikada yalnızca bir kez kilitlenebilir.
:::

### Bir kategoriyi kilitleme {#lock-category}

Bir kategoriyi kilitlemek, görünür tüm kanallarını da (alt başlıklar hariç) tek seferde kilitler; kategori üzerinde `/unlock` ise hepsinin kilidini birlikte açar. Yazmaya zaten kapalı bir kanal (kurallar, duyurular) kilitlemede de kilidi açmada da olduğu gibi bırakılır. Bir kategorinin geçici kilidi sona erdiğinde, tek bir log satırı kategoriyi ve kilidi açılan kanal sayısını belirtir.

### Geçici kilitleme {#lock-duration}

`[duration]` parametresi, belirtilen süreden sonra **kanalın kilidini otomatik olarak açmayı** sağlar (örn. `15m`, `1h`, `2d`). Kanalın kilidini elle açmayı düşünmeden hızlıca sakinleştirme için yararlıdır. Süre, bir yaptırımın azami süresiyle sınırlıdır.

## 🔓 Bir kanalın kilidini açma {#unlock}

Şu komutu kullanın: ```/unlock [#channel] [reason] [--silent]```

Bu komut, **@everyone** rolünün mesaj gönderme izinlerini kilitlemeden önceki haline geri yükler ve kullanıcıların yeniden orada yazmasına olanak tanır. Kanalın neden açıldığını belirtmek için `[reason]` yerine bir sebep yazın (örn.: *tartışma yeniden açıldı*, *duyuru bitti* vb.). `--silent` ile kanalda hiçbir şey duyurulmaz.

:::warning
Kilitlemenin düzgün çalışması için herkese açık hiçbir rolün bu kanalda açıkça yazma izni olmamalıdır. Aksi halde bu rollere sahip üyeler yine konuşabilir. Ekibinizin rolleri için konmuş izinler ise yararlıdır: bir `/lock` sırasında söz hakkını ekipte tutarlar ve [denetim](./audit.md) bunları artık gereksiz olarak bildirmez.
:::
:::info
`lock` ve `unlock` komutları [ön ekle kullanılabilir](../guides/prefix.md). “**Mesajları Yönet**” iznini gerektirirler. RaidProtect'in kanalın izinlerini değiştirmek için “**Kanalları Yönet**” ve “**Rolleri Yönet**” izinlerine ihtiyacı vardır.
:::

## ✏️ Asma kilit yapılandırması {#config}

Kilitli kanalların bir asma kilitle yeniden adlandırılıp adlandırılmayacağını seçebilirsiniz: `/lock` bu durumda kanalı `🔒-kanal-adi` olarak yeniden adlandırır, `/unlock` ise ön eki kaldırır. Böylece kanalın durumu doğrudan kanal listesinde görülür. Bu seçenek **varsayılan olarak devre dışıdır**.

Asma kilidi etkinleştirmek veya devre dışı bırakmak için:
1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Araçlar**” sekmesini açın.
3. “**Salon kilidi**” yanındaki “**Etkinleştir**”e (veya “**Devre dışı bırak**”a) tıklayın. Düğme bir anahtar gibi çalışır, tek bir tık yeter.

<Settings start="home:utilities" />

:::info
Yeniden adlandırma “**Kanalları Yönet**” iznini gerektirir.
:::

## Sık sorulan sorular {#faq}

### Bulunduğumuz kanaldan başka bir kanal kilitlenebilir mi?

Evet, kanalı ilk argüman olarak belirtin: `/lock #genel 30m Baskın sürüyor`.

### Bazı üyeler kilitli bir kanalda neden hâlâ yazabiliyor?

Kilitleme söz hakkını yalnızca @everyone rolünden kaldırır. Bu kanalda yazmak için açık izni olan bir rol bunu korur.

### Kilitli kanalların adına nasıl asma kilit eklenir?

`/settings` içinde Araçlar sekmesinde “**Salon kilidi**” seçeneğini etkinleştirin. Seçenek varsayılan olarak devre dışıdır.
