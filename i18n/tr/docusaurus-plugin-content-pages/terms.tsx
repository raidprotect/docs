import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Terms(): ReactNode {
  return (
    <LegalLayout
      title="Genel Kullanım Koşulları"
      lastUpdated="Son güncelleme: 1 Şubat 2025"
      description="Fikri mülkiyet haklarını, köprü bağlantıları, kişisel verilerin yönetimini ve RaidProtect sitesi ile botu üzerindeki sorumluluğumuzu anlamak için kullanım koşullarımızı inceleyin.">
      <section>
        <p>
          RaidProtect'i Discord sunucunuza ekleyerek Kullanım Koşulları'nı okuduğunuzu ve kabul
          ettiğinizi beyan etmiş olursunuz. Bu koşullardan herhangi birini kabul etmiyorsanız
          hizmetlerimizi kullanmayı bırakmanız gerekir.
        </p>
      </section>
      <section>
        <h2>1. Fikri mülkiyet</h2>
        <p>
          Bu web sitesi, genel yapısı, RaidProtect ticari markası ile onu oluşturan metinler,
          görseller, animasyonlar, logolar ve diğer tüm unsurlar SAS French Community Agency'nin
          veya iş ortaklarının münhasır mülkiyetindedir ve fikri mülkiyete ilişkin Fransız ve
          uluslararası yasalarla korunmaktadır. Yazılımlar dahil olmak üzere bu unsurların tamamının
          veya bir kısmının, SAS French Community Agency'nin önceden yazılı izni olmaksızın,
          herhangi bir biçimde çoğaltılması, temsil edilmesi, kullanılması veya uyarlanması
          kesinlikle yasaktır ve hak ihlali teşkil eder.
        </p>
        <p>
          Aynı hükümler, yine fikri mülkiyet haklarıyla korunan Uygulama'nın işlevleri ve kaynak
          kodu için de geçerlidir. Uygulama'nın işlevlerini çoğaltma, değiştirme veya izinsiz
          kullanma yönündeki her girişim yasaktır ve yasal takibata konu olabilir.
        </p>
      </section>
      <section>
        <h2>2. Köprü bağlantılar</h2>
        <p>
          Site'ye verilecek her bağlantı, <strong>SAS French Community Agency</strong>'nin önceden
          yazılı iznine tabidir. Her durumda <strong>SAS French Community Agency</strong>, Site'ye
          verilen bağlantının Site'nin çıkarlarına zarar verecek nitelikte olduğunu düşünmesi
          halinde bu izni her an sona erdirme hakkını saklı tutar.
        </p>
        <p>
          Ayrıca, bu Site ile köprü bağlantısı bulunan sitelerin (Site'yi hedefleyen veya Site'den
          verilen köprü bağlantılar) <strong>SAS French Community Agency</strong>,{' '}
          <strong>RaidProtect</strong> ve bağlı şirketlerinin denetiminde olmadığı ve bunların söz
          konusu sitelerin içeriğine ilişkin her türlü sorumluluğu reddettiği belirtilir.
        </p>
      </section>
      <section>
        <h2>3. Hizmetin kullanımı</h2>
        <p>
          Uygulama dahil hizmetlerimiz kişisel veya ticari amaçlarla serbestçe kullanılabilir.
          Uygunsuz bulduğumuz veya diğer Kullanıcılara zarar verebilecek bir kullanım durumunda
          hizmetlerimizin kullanımını yasaklama hakkımızı saklı tutarız.
        </p>
      </section>
      <section>
        <h2>4. Sorumluluk</h2>
        <h3>4.1. Web sitesi</h3>
        <p>
          <strong>SAS French Community Agency</strong>, <strong>RaidProtect</strong> ve bağlı
          şirketleri, web sitesinin veya içerdiği bilgilerin kullanımından kaynaklanan doğrudan ya
          da dolaylı hiçbir zarardan sorumlu tutulamaz.{' '}
          <strong>SAS French Community Agency</strong>, Site'de sunulan bilgilerin doğruluğunu veya
          eksiksizliğini garanti etmez ve bunları önceden bildirimde bulunmaksızın her an
          değiştirme veya silme hakkını saklı tutar.
        </p>
        <h3>4.2. Uygulama</h3>
        <p>
          <strong>RaidProtect</strong> Uygulaması, açık veya örtülü hiçbir garanti verilmeksizin
          olduğu gibi sunulmaktadır. <strong>SAS French Community Agency</strong>, Uygulama'nın
          hatalı veya kötüye kullanılmasının sonuçlarından ya da geçici veya kalıcı bir arızadan
          doğabilecek zararlardan sorumlu tutulamaz.
        </p>
        <p>
          <strong>RaidProtect</strong> kullanan Discord sunucularının yöneticileri, yaptıkları
          yapılandırmalardan ve Uygulama'nın otomatik eylemleri (örneğin yasaklamalar veya mesaj
          silmeleri) sonrasında aldıkları kararlardan yalnızca kendileri sorumludur. Discord'un
          kullanım koşullarının veya yürürlükteki yasaların ihlali halinde tüm sorumluluk ilgili
          sunucunun yöneticilerine aittir.
        </p>
      </section>
      <section>
        <h2>5. GKK'nin değiştirilmesi</h2>
        <p>
          Bu Genel Kullanım Koşulları, hizmetlerdeki veya yürürlükteki mevzuattaki değişiklikleri
          yansıtmak amacıyla her an değiştirilebilir. Her değişiklik web sitesinde yayımlanır ve
          gerekirse Uygulama aracılığıyla duyurulur. GKK güncellendikten sonra hizmetleri
          kullanmaya devam eden kullanıcılar yapılan değişiklikleri kabul etmiş sayılır.
        </p>
      </section>
      <section>
        <h2>6. Uygulanacak hukuk ve yetkili mahkeme</h2>
        <p>
          Bu GKK Fransız hukukuna tabidir. Bir uyuşmazlık durumunda ve dostane çözüm girişiminin
          ardından, aksine bir yasal hüküm bulunmadıkça Paris yargı çevresindeki yetkili mahkemeler
          yetkilidir.
        </p>
      </section>
    </LegalLayout>
  );
}
