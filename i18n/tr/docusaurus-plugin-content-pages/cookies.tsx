import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Cookies(): ReactNode {
  return (
    <LegalLayout
      title="Çerez Kullanım Politikası"
      lastUpdated="Son güncelleme: 1 Şubat 2025"
      description="RaidProtect'in, güvenli ve gizli bir gezinme için çerez kullanmayarak gizliliğinizi nasıl koruduğunu öğrenin. Politikamızı inceleyin.">
      <section>
        <p>
          RaidProtect olarak kullanıcılarımızın gizliliğini ve verilerini korumayı taahhüt
          ediyoruz. Bu taahhüt kapsamında, web sitemizde çerez kullanımına ilişkin politikamız
          hakkında sizi bilgilendiriyoruz.
        </p>
      </section>
      <section>
        <h2>1. Çerez kullanımı</h2>
        <p>
          Kullandığımız teknolojiler konusunda şeffaf olmayı önemsiyoruz. Bu amaçla, web sitemizin{' '}
          <strong>çerez kullanmadığını</strong> bildiririz. Çerezler, web sitelerinin kullanıcı
          deneyimini daha verimli hale getirmek için kullanabileceği küçük metin dosyalarıdır.
          Ancak kullanıcılarımızın gizliliğini en üst düzeyde korumak amacıyla platformumuzda
          çerez kullanmamayı tercih ettik.
        </p>
      </section>
      <section>
        <h2>2. Bu sizin için ne anlama geliyor?</h2>
        <p>
          Çerez kullanılmaması, ziyaretinize ilişkin hiçbir bilgi kaydedilmeden veya analiz
          edilmeden web sitemizde gezinebileceğiniz anlamına gelir. Bu yaklaşım, tüm
          kullanıcılarımıza gizli ve güvenli bir gezinme deneyimi sunmayı amaçlar.
        </p>
      </section>
      <section>
        <h2>3. Gizliliğinizi nasıl koruyoruz?</h2>
        <p>
          Çerez kullanmama politikamızın yanı sıra gizliliğinizi ve kişisel verilerinizi korumak
          için başka önlemler de alıyoruz. Veri korumaya ilişkin yürürlükteki yasalara ve
          düzenlemelere sıkı bir şekilde uyuyor, kişisel bilgilerinize yetkisiz erişimi,
          bilgilerinizin değiştirilmesini, ifşa edilmesini veya yok edilmesini önlemek için ileri
          düzey bilgi güvenliği uygulamaları hayata geçiriyoruz.
        </p>
      </section>
      <section>
        <h2>4. Çerez kullanım politikasındaki değişiklikler</h2>
        <p>
          Bu çerez kullanım politikasını her an değiştirme hakkımızı saklı tutarız. Her değişiklik,
          web sitemizde yayımlanmasının hemen ardından yürürlüğe girer. Çerezlere ilişkin
          politikamızdan haberdar olmak için bu sayfayı düzenli olarak ziyaret etmenizi öneririz.
        </p>
      </section>
      <section>
        <h2>5. İletişim</h2>
        <p>
          Çerez kullanım politikamız veya kişisel verilerinizi nasıl koruduğumuz hakkında soru ya
          da endişeleriniz varsa bizimle{' '}
          <a href="mailto:dpo@raidprotect.bot">dpo@raidprotect.bot</a> adresinden iletişime
          geçmekten çekinmeyin.
        </p>
      </section>
    </LegalLayout>
  );
}
