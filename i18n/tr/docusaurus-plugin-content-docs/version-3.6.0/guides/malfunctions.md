---
title: Aksaklıklar
description: "RaidProtect'le ilgili bir sorun mu var? Botunuzu yeniden düzene sokmak için en yaygın aksaklıkların çözümlerini burada bulun."
---

RaidProtect'le ilgili bir sorun mu var? Çözüm büyük olasılıkla burada.

Bazen her şey beklendiği gibi çalışmayabilir. İşte karşılaşabileceğiniz **en yaygın sorunlar** ve bunları nasıl çözeceğiniz. 🤗 

Bu sayfa karşılaştığınız bir soruna yanıt vermiyorsa [**destek ekibimizle iletişime geçmekten çekinmeyin**](https://raidprotect.bot/discord); size yardımcı olmaktan memnuniyet duyacaktır!

## Bir komut verdiğimde bot hata gösteriyor {#commands}

Komut başarıyla çalışmazsa **RaidProtect**, beklenen sonucun yerine **bir hata gösterebilir**. Çoğu durumda mesajda bir ipucu verilir, ancak daha genel bir mesaj olabilir. İşte bu sorunu çoğu durumda nasıl çözeceğiniz. 🧐 

- **Belirtileni yapın.** Bazı hatalar sorunu açıkça anlatır. Bot sizden bir şey yapmanızı istiyorsa yapın.

- **Komutun parametrelerini kontrol edin.** Komut basitçe yanlış yazılmış olabilir; nasıl kullanılacağına yardımdan bakın. Köşeli parantezlerin ([]) dahil edilmemesi gerektiğini unutmayın.

- **Botun izinlerini kontrol edin.** Botun **Yönetici** iznine sahip olması ve rol sıralamasında yöneticilerle aynı seviyede olması gerekir.

- **Komutu yeniden deneyin.** Bazen sorun nedeni bilinmeden kendiliğinden çözülür.

Bu önerileri uygulamanıza rağmen hata almaya devam ediyorsanız size yardımcı olabilmemiz için [destek ekibimizle iletişime geçin](https://raidprotect.bot/discord). 🤝 

## Botun log kanalı kendiliğinden oluşmadı {#logs}

Gerçekleştirdiği eylemler hakkında sizi bilgilendirmek için RaidProtect'in bir log kanalına ihtiyacı vardır. Bu kanal, bot sunucuya ilk kez katıldığında otomatik olarak oluşturulur, ancak bazen hiçbir kanal oluşturulmaz. İşte bu sorunu nasıl gidereceğiniz. ⚙️ 

- **Botun gerçekten Yönetici olduğundan emin olun.** Botun düzgün çalışması için ona Yönetici izni vermek gerekir. Bu yapılmadıysa rol ayarlarına gidin ve bu izni RaidProtect rolüne verin. Geriye, her şeyin çalışması için botu elle başlatmak kalıyor (hemen aşağıya bakın)!

- **Botun doğru şekilde başlatıldığını kontrol edin.** Bu normalde otomatik yapılır, ancak [`/setup` komutuyla](../setup.md#install) başlatmayı zorlayabilirsiniz. Log kanalı otomatik olarak oluşmalıdır.

- **Bir kanalı elle tanımlayın.** Hiçbir şey işe yaramazsa panik yapmayın, log kanalını kendiniz de seçebilirsiniz! [`/settings` komutunu](../setup.md#settings) çalıştırın, “**Moderasyon**” sekmesini açın, ardından “**Loglar**” yanındaki “**Yapılandır**” düğmesine tıklayın. Orada genel bir kanal ve isterseniz moderasyona ayrılmış bir kanal ile captcha'ya ayrılmış bir kanal seçebilirsiniz: boş bırakılırsa bu ikisi genel kanala döner.

## Bir kullanıcı spam yaptı ama bot ona yaptırım uygulamadı {#anti-spam}

[Anti-spam](../features/anti-spam.mdx), RaidProtect'in ana özelliklerinden biridir ve çalışmaması can sıkıcı olabilir. Ama içiniz rahat olsun, çoğu zaman ciddi bir şey değildir. 😇 

- **Anti-spam spam'i durdurmayı isteyip yaptırım uygulamıyorsa** bu büyük olasılıkla izin eksikliğinden kaynaklanır. Unutmayın, botun Yönetici iznine sahip olması ve rol sıralamasında yöneticilerin seviyesinde olması gerekir.

- **Anti-spam yapılandırmasını kontrol edin.** Çok basit bir şey ama bazıları bir kanalı yok saydıklarını unutur. Adında “spam” geçen bir kanal da her zaman yok sayılır.

- **Bir simülasyon başlatın.** Anti-spam ekranındaki “**Simüle et**” düğmesi, verilen bir üye, bir kanal ve bir spam türü için anti-spam'in tetiklenip tetiklenmeyeceğini, tetiklenmeyecekse nedenini söyler (modül kapalı, kanal veya rol yok sayılıyor, üye botun üstünde…). [`/feedback` komutu](../features/utilities.mdx#feedback) da bir anti-spam hatası bildirdiğinizde bu tanıyı sunar.

- **Spam yapanın izinlerini kontrol edin.** Ekip üyeleri (Yönetici, Sunucuyu Yönet, Mesajları Yönet), siz kendiniz hiçbir rolü ya da üyeyi yok saymadığınız sürece yok sayılır. Anti-spam'i kendi sunucunuzda test ediyorsanız sizi algılamayabilir.

- **Spam yeterince uzun mu?** Anti-spam, tek bir mesaja değil bir mesaj hacmine tepki verir. Fazla acele etmeyin ve ilgili [tetikleyicinin](../features/anti-spam.mdx#triggers) yaptırımının devre dışı bırakılmadığını kontrol edin.

Buna rağmen bir spam hâlâ algılanmıyorsa **sorunun ekran görüntüsünü** ekleyerek [destek sunucumuzdan bize ulaşın](https://raidprotect.bot/discord).

## Kullanıcılar captcha'yı geçmeden sunucuya erişiyor {#captcha}

Bu sorun nispeten yaygındır, ancak **sunucunuzun yapılandırmasına** bağlıdır. Nasıl giderileceğine bakalım. 🏥 

- **Otomatik bir rolünüz var mı?** Sunucunuzdaki yeni gelenlere rol vermesi için bir bot (RaidProtect dışında) yapılandırdıysanız bu, captcha ile çakışabilir. Onu, captcha başarıyla geçildikten sonra verilen [RaidProtect'in otomatik rolleriyle](../features/onboarding.md#autorole) değiştirin.

- **Captcha'yı etkinleştirdiniz mi?** İsteğe bağlı bir özelliktir: [`/settings`](../setup.md#settings) komutunun “**Katılımlar**” sekmesinden etkinleştirin. Daha fazla bilgi için [captcha sayfasına](../features/captcha.md#config) bakın.

- **Tetiklemesi nedir?** “**Otomatik**” seçeneğinde captcha yalnızca bir baskın sırasında veya yüksek bir [DISCON](../features/discon.md) seviyesinde uygulanır: geri kalan zamanlarda gelenler doğrudan girer. Her gelenin captcha'yı geçmesi için “**Sürekli**”yi seçin.

- **Bir rol veya kanal onu atlatıyor mu?** Captcha ekranı, doğrulama rolünün hâlâ görebildiği kanalları ve captcha'yı geçmeden sunucuya erişim veren rolleri, düzeltmek için bir düğmeyle birlikte bildirir.

## /snipe komutu hiçbir mesaj bulamıyor {#snipe}

[`/snipe` komutu](../features/moderation.mdx#snipe), RaidProtect'in bellekte bir saat boyunca tuttuğu mesajları okur. Etkin anti-spam veya bildirim yoksa bu önbellekleme varsayılan olarak kapalıdır: [`/settings`](../setup.md#settings) komutunun “**Araçlar**” sekmesinde “**Mesaj önbelleği**”ni etkinleştirin. Yalnızca etkinleştirildikten sonra silinen mesajlar bulunabilir.

## Bir kanalı kilitlediğimde kullanıcılar hâlâ konuşabiliyor {#lock}

Kilitleme komutu sihirli gibi görünür, ancak onun da zayıf yanları vardır. [Bu dokümantasyonda belirtildiği gibi](../features/channel-lock.md#lock), komut **yalnızca @everyone rolü üzerinde etki eder**. Bu, kilitlemek istediğiniz kanalda bir rolün konuşma izni açıkça verilmişse yine de konuşabileceği anlamına gelir. Bir resim bin kelimeye bedel olduğundan, somut olarak şöyle görünür. 🔍 

![Kanal kilitleme yapılandırması ekran görüntüsü](../../../../en/docusaurus-plugin-content-docs/current/assets/lock-channel-messages-raidprotect.png)
