---
title: Sunucu logları
description: "RaidProtect logları Discord sunucunuzda olan her şeyi takip eder: kanallar, roller, üyeler, mesajlar, ses, emojiler ve tepkiler, her eylemin yapanıyla birlikte."
---

**Sunucu logları**, sunucunuzda olanların kaydını tutar: kimin bir kanal oluşturduğu, bir rolü değiştirdiği, bir mesajı sildiği veya bir üyenin ses kanalıyla bağlantısını kestiği. Her log, yapanıyla başlar (“@modo #genel kanalını oluşturdu.”) ve bir değişikliğin öncesini ve sonrasını gösterir.

:::info Deneme: Logging Update
Sunucu logları, 3.8.0 sürümü için planlanan **Logging Update**'in bir parçasıdır. Çıkışına kadar deneme aşamasındadır ve [Premium](/tr/premium) sunucular için herkese açık betadır.
:::

## ⚙️ Logları yapılandırma {#config}

1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Moderasyon**” sekmesini açın.
3. “**Loglar**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. “**Sunucu logları**” bölümünü açın, ardından her aile için bir kanal seçin.

Her ailede iki liste bulunur:

- **Gönderilen türler**: bir türün işaretini kaldırarak onu hiçbir yere göndermeyin.
- **Başka kanaldaki türler**: bir türe ayrı bir kanal verin. Ayrı kanalı olmayan bir tür, ailesinin kanalını izler.

**Sınırlar:** ücretsiz sürümde 3 farklı log kanalı, [Premium](/tr/premium) ile 15. Premium olmadan logları yalnızca ilk 3 kanal alır: diğerleri duraklatılır ve ayarları korunur.

[Moderasyon loglarının](./moderation.mdx#logs) “**Genel**”, “**Moderasyon**” ve “**Captcha**” kanalları değişmez.

## 📚 Log aileleri {#families}

| Aile | Kaydedilenler |
| --- | --- |
| **Kanallar, roller ve davetler** | Oluşturulan, düzenlenen veya silinen kategoriler, kanallar, ses kanalları ve alt başlıklar, izinler dahil. Roller (ve yeni sıralamaları), davetler, webhook'lar, entegrasyonlar ve rolleriyle birlikte eklenen veya çıkarılan botlar. Eklenen veya çıkarılan kelime ve ifadeleriyle Discord AutoMod kuralları ve planlanmış etkinlikler. Bir etkinlikle ilgilenen üyeler [Premium](/tr/premium)'a ayrılmıştır. |
| **Üyeler** | Katılımlar (hesap yaşıyla) ve ayrılmalar (katılma tarihi ve rollerle), kabul edilen kurallar, eklenen veya kaldırılan roller, takma adlar, sunucu avatarları, çıkarılan etkin olmayan üyeler ve takviyeler. |
| **Mesajlar** | Kimin sildiğiyle birlikte silinen mesajlar, düzenlenen mesajlar, toplu silmeler, sabitlenen veya sabitlemesi kaldırılan mesajlar. |
| **Ses** <span className="badge-premium">Premium</span> | Katılımlar, oturum süresiyle ayrılmalar, kanal değişiklikleri, mikrofon, ses, kamera ve ekran paylaşımı. Ekibin eylemleri (susturma, sağırlaştırma, taşıma, bağlantıyı kesme) yapanıyla birlikte ayrı tutulur. Başlatılan, düzenlenen veya sona eren sahne etkinlikleri ve söz alan ya da el kaldıran üyeler. |
| **Emojiler ve tepkiler** | Oluşturulan, düzenlenen veya silinen emojiler, çıkartmalar ve soundboard sesleri. Eklenen veya kaldırılan tepkiler [Premium](/tr/premium)'a ayrılmıştır ve varsayılan olarak işaretsizdir. |

Düzenlenen bir mesaj öncesini ve sonrasını gösterir. Uzun bir mesajda yalnızca değişen satırlar görüntülenir.

Bir eylemin yapanı bir **sebep** verdiğinde (Discord denetim kaydında görünür), bu sebep logda yer alır. Bir role bağlı logların, o rolün [`/roleinfo`](./utilities.mdx#roleinfo) kartını açan bir “**Rol**” düğmesi vardır.

RaidProtect'in kendisinin sildiği mesajlar (anti-spam, HoneyPot, anti-scam, `/clear`) ilgili modülün loglarında kalır, tekrar edilmez.

## 🎨 Log biçimi {#format}

Biçimi aynı ekrandaki “**Log biçimi**” bölümünden seçin.

| Biçim | Görünüm |
| --- | --- |
| **Varsayılan** | Saat, simge, adlarıyla birlikte etiketler, ardından ayrıntı. |
| **Çerçeveli** | Log başına başlığı ve ayrıntısıyla renkli bir kutu. |
| **Kompakt** <span className="badge-premium">Premium</span> | Log başına tek satır: saat, simge ve etiketler. |

Premium'u kaybeden bir sunucu Varsayılan biçime döner. Seçimi, geri dönüşü için saklanır.

## 💾 Bellekteki mesajlar {#cache}

Silinen bir mesajın içeriğini bulabilmek için RaidProtect son mesajları bellekte tutar: ücretsiz sürümde **15 dakika**, [Premium](/tr/premium) ile **6 saat**. Bu sürenin ötesinde log, içeriğin saklanmadığını belirtir.

Premium ile silinen mesajların ekleri de loga kopyalanır (dosya başına 10 MB, sunucu başına 100 MB, en eskiler önce değiştirilir).
