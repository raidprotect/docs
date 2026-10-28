---
title: Dil
description: "RaidProtect'in dilini topluluğunuza uyacak şekilde değiştirin: bot Fransızcadan Japoncaya 11 dil konuşur ya da Discord sunucunuzun dilini takip eder."
---

import { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect, botun kullandığı dili seçmenize olanak tanır; böylece Discord topluluğunuza en iyi şekilde uyum sağlar.

**Herkese açık mesajlar:** yapılandırılan dil, RaidProtect'in sunucunuzda gönderdiği herkese açık mesajlara (loglar, captcha, bildirimler vb.) uygulanır.

**Geçici mesajlar:** özel veya geçici mesajlar, botla etkileşime giren kullanıcının dilinde görüntülenmeye devam eder.

## 🌐 Desteklenen dillerin listesi {#supported}

- **Fransızca**
- **İngilizce**
- **İspanyolca**
- **Almanca**
- **Brezilya Portekizcesi**
- **İtalyanca**
- **Türkçe**
- **Vietnamca**
- **Japonca**
- **Basitleştirilmiş Çince**
- **Geleneksel Çince**

Yalnızca tamamen çevrilmiş diller sunulur. Discord'u başka bir dilde kullanan bir üyeye verilen geçici yanıtlar İngilizce görüntülenir.

## ⚙️ Botun dilini değiştirme {#change}

1. [`/settings` komutunu](./setup.md#settings) çalıştırın.
2. “**Genel**” sekmesinde, “**Dil**” yanındaki “**Düzenle**” düğmesine tıklayın.
3. Listeden istediğiniz dili seçin, ardından onaylayın.

<SettingsModal name="lang" />

Değişiklik anında uygulanır ve sunucunun loglarında görünür.

### Sunucunun dilini takip etme {#follow}

İlk seçenek olan “**Sunucunun dilini takip et**”, Discord'un Topluluk ayarlarında tanımlanan ana dili kullanır. Bu, varsayılan ayardır. Bu dil desteklenen diller arasında değilse RaidProtect İngilizce konuşur.

:::info
RaidProtect'in dil desteği sürekli gelişiyor! Botta görmek istediğiniz dilleri [önerin](https://suggestions.raidprotect.bot) ya da önerilen dillere [oy verin](https://suggestions.raidprotect.bot); böylece eklenmelerini sağlayabilirsiniz.
:::
