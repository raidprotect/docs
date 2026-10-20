import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/16+Esp.+du+Champ+de+Mars,+35000+Rennes/@48.1044838,-1.675702,17z/data=!3m1!4b1!4m6!3m5!1s0x480edfca43c9b53b:0xdea9cc38f95f9839!8m2!3d48.1044838!4d-1.675702!16s%2Fg%2F11csm9r096?sa=X&ved=2ahUKEwiZ0ICZyYSEAxWpUqQEHTq1BdcQ8gF6BAgdEAA&entry=tts';

export default function Legal(): ReactNode {
  return (
    <LegalLayout
      title="Yasal bildirim"
      lastUpdated="Son güncelleme: 1 Şubat 2025"
      description="raidprotect.bot sitesinin yayıncısı olan Discord botu RaidProtect'in (RP) yasal bildirimini inceleyin. Genel bilgiler ve kullanıma ilişkin yasal çerçeve.">
      <section>
        <p>
          “raidprotect.bot” ve “docs.raidprotect.bot” adreslerinden erişilebilen{' '}
          <strong>RaidProtect</strong> web sitesi (bundan böyle “Site” olarak anılacaktır) ve
          Discord üzerinden “466578580449525760” kimliğiyle erişilebilen RaidProtect uygulaması
          (bundan böyle “Uygulama” olarak anılacaktır) <strong>SAS French Community Agency</strong>{' '}
          tarafından yayımlanmaktadır. Site'de sunulan bilgiler yalnızca genel ve bilgilendirme
          amaçlıdır ve hiçbir şekilde eksiksiz olma iddiası taşımaz. Site'nin hazırlanmasında ve
          düzenli olarak güncellenmesinde gösterilen tüm özen ve titizliğe rağmen sunulan bilgilerde
          hatalar bulunabilir. Bu nedenle Site kullanıcıları gerekli tüm kontrolleri yapmalıdır ve
          erişilebilen bilgileri kullanma biçimlerinden yalnızca kendileri sorumludur.
        </p>
        <p>Yayın sorumlusu: Arthur Battais</p>
      </section>
      <hr />
      <section>
        <h2>Şirket</h2>
        <p>
          <strong>SAS French Community Agency</strong>
          <br />
          <strong>Kısaltma: FCA</strong>
          <br />
          <strong>Sermayesi: 10.000 €</strong>
          <br />
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
            16 Esplanade du Champ de Mars, 35000 Rennes
          </a>
        </p>
        <p>
          +33 (0)9 72 14 95 51
          <br />
          <a href="mailto:hello@fca.gg">hello@fca.gg</a>
        </p>
        <p>
          SIRET:{' '}
          <a
            href="https://annuaire-entreprises.data.gouv.fr/etablissement/98385625300023"
            target="_blank"
            rel="noopener noreferrer">
            983 856 253 00023
          </a>
          <br />
          KDV:{' '}
          <a
            href="https://ec.europa.eu/taxation_customs/vies/#/vat-validation"
            target="_blank"
            rel="noopener noreferrer">
            FR03983856253
          </a>
        </p>
        <p>
          Ticari marka: <strong>RaidProtect</strong>
          <br />
          <a href="mailto:contact@raidprotect.bot">contact@raidprotect.bot</a>
        </p>
      </section>
      <hr />
      <section>
        <h2>Barındırma</h2>
        <p>
          Site'nin barındırma hizmeti sağlayıcısı, merkezi Industriestr. 25 - 91710 Gunzenhausen -
          Germany adresinde bulunan Hetzner (Hetzner Online GmbH) şirketidir. E-posta:
          info@hetzner.com, telefon: +49 (0)9831 505-0.
        </p>
      </section>
    </LegalLayout>
  );
}
