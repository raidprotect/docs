---
title: Etiket Rolü
description: "RaidProtect'in Etiket Rolü, Discord sunucunuzun etiketini taşıyan üyelere otomatik olarak bir rol verir ve katılımlarını ödüllendirir."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';
import TagRoleConceptMockup from '@site/src/components/DiscordMessage/mockups/tag-role-concept';

<TagRoleConceptMockup />

Etiket Rolü, [sunucunuzun etiketini](https://support.discord.com/hc/tr/articles/31444248479639-Sunucu-Etiketleri) Discord profillerine ekleyen üyelere otomatik olarak bir rol vermeyi sağlar. Bu üyelere bir rol vererek katılımlarını değerli kılar ve sunucunuzu aktif olarak temsil etmeye teşvik edersiniz. Topluluğunuzun en sadık elçilerini ödüllendirirken ortak kimliği güçlendirmenin basit ama etkili bir yoludur.

## ❓ Etiket Rolü nasıl çalışır {#working}

İşleyiş basittir. Bir üye sunucu etiketini Discord profiline eklediği anda RaidProtect ona otomatik olarak belirli bir rol verir.
Üye etiketi kaldırırsa rol de ondan alınır.

Değişikliği, üyenin profilinin bir sonraki güncellenişinde (takma ad, avatar, banner, roller, etiket…) algılarız.

:::info
Etiket etkin değilse veya sunucunuzda henüz bu özellik yoksa Etiket Rolünün hiçbir etkisi olmaz.
:::

## 🎖️ Etiket Rolünün yapılandırması {#config}

Yapılandırma birkaç tıkta yapılır:
1. [`/settings` komutunu](../setup.md#settings) çalıştırın.
2. “**Araçlar**” sekmesini açın.
3. “**Etiket Rolü**” yanındaki “**Yapılandır**” düğmesine tıklayın.
4. Seçiciyle mevcut bir rol seçin ya da “**Benim için bir tane oluştur**”a tıklayın: hiçbir izni olmayan bir `Tag` rolü oluştururuz.
5. “**Sıfırla**” düğmesine tıklayarak Etiket Rolünü istediğiniz zaman devre dışı bırakabilirsiniz.

Etiket Rolünün yapılandırmasındaki her değişiklik sunucu loglarınıza yazılır.

<Settings start="tagrole" />

:::tip
Üyeleriniz rolü bir sonraki profil değişikliklerinde (Takma ad, Avatar, Banner, Roller, Etiket…) alır.
:::

### /tagrole komutu {#command}

Şu komutu kullanın: ```/tagrole```

`/settings` üzerinden geçmeden doğrudan Etiket Rolünün yapılandırma ekranını açar. “**Rolleri Yönet**” iznine sahip üyelere ayrılmıştır.

### Reddedilen roller {#refused-roles}

Etiket Rolü herhangi bir üyeye otomatik olarak verilir: bu nedenle sorun çıkarabilecek rolleri reddederiz.

- **RaidProtect tarafından zaten kullanılan bir rol**: jail rolü, mute rolü, captcha doğrulama rolü veya otomatik rol.
- Bir uygulama veya sunucu boost'u tarafından **yönetilen bir rol**: Discord bunun elle verilmesini yasaklar. Bunun yerine normal bir rol oluşturun.
- **RaidProtect'in rolünün üstüne yerleştirilmiş bir rol**: **Sunucu Ayarları > Roller** içinde RaidProtect'in rolünü üste sürükleyin.
- **En yüksek rolünüzün üstüne yerleştirilmiş bir rol** (sunucu sahibi hariç).
- **Hassas izinleri olan bir rol**: Yönetici, Yasakla, At, Sunucuyu Yönet, kanalları, mesajları, rolleri, webhook'ları, ifadeleri, etkinlikleri veya alt başlıkları yönetme.

### Uyarı kutuları {#warnings}

Yapılandırma ekranı, Etiket Rolü çalışamadığında sizi uyarır:

- **Eksik izin**: RaidProtect'in “**Rolleri Yönet**” iznine ihtiyacı vardır. `/settings` komutunun Araçlar sekmesinde “**Etiket Rolü**” yanında da bir ⚠️ uyarısı görüntülenir.
- **Sunucu etiketi etkin değil**: sunucunuz [Sunucu Etiketi](https://support.discord.com/hc/tr/articles/31444248479639-Sunucu-Etiketleri) özelliğini etkinleştirmemiş, bu nedenle Etiket Rolünün şimdilik hiçbir etkisi yok.

Düzelttikten sonra yeniden kontrol etmek için “**Yenile**”ye tıklayın.

## Sık sorulan sorular {#faq}

### Etiketi olan bir üye rolü neden henüz almadı?

Etiketi, üyenin profilinin bir sonraki güncellenişinde algılarız. Hiçbir şeyi değiştirmediği sürece (takma ad, avatar, roller, etiket…) rol verilmez. Gerekirse destek ekibi tam bir senkronizasyon başlatabilir.

### Rolüm neden reddedildi?

Etiket Rolü, RaidProtect tarafından zaten kullanılan bir rol, bir uygulama tarafından yönetilen bir rol, RaidProtect'in veya sizin üstünüzde yer alan bir rol ya da hassas izinleri olan bir rol olamaz.

### Etiket Rolünü kim yapılandırabilir?

`/settings` üzerinden yöneticiler ve `/tagrole` komutuyla “Rolleri Yönet” iznine sahip üyeler.
