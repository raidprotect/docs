import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/16+Esp.+du+Champ+de+Mars,+35000+Rennes/@48.1044838,-1.675702,17z/data=!3m1!4b1!4m6!3m5!1s0x480edfca43c9b53b:0xdea9cc38f95f9839!8m2!3d48.1044838!4d-1.675702!16s%2Fg%2F11csm9r096?sa=X&ved=2ahUKEwiZ0ICZyYSEAxWpUqQEHTq1BdcQ8gF6BAgdEAA&entry=tts';

export default function Legal(): ReactNode {
  return (
    <LegalLayout
      title="法律聲明"
      lastUpdated="最後更新：2025 年 2 月 1 日"
      description="查看 Discord 機器人 RaidProtect（RP）及其網站 raidprotect.bot 發行者的法律聲明。一般資訊與使用的法律框架。">
      <section>
        <p>
          可透過「raidprotect.bot」與「docs.raidprotect.bot」存取的 RaidProtect 網站（以下稱「本網站」），以及可透過
          Discord「466578580449525760」存取的 RaidProtect 應用程式（以下稱「本應用程式」），均由 SAS French
          Community Agency 發行。本網站所提供的資訊僅供一般參考，並不保證完整無遺。儘管我們在建置本網站及定期更新時已盡一切謹慎與嚴謹，所呈現的資訊仍可能存在錯誤。因此，本網站的使用者應自行進行一切必要的查證，並對其使用所取得資訊的方式自負全責。
        </p>
        <p>發行負責人：Arthur Battais</p>
      </section>
      <hr />
      <section>
        <h2>公司</h2>
        <p>
          <strong>SAS French Community Agency</strong>
          <br />
          <strong>簡稱：FCA</strong>
          <br />
          <strong>資本額 10,000 歐元</strong>
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
          SIRET：
          <a
            href="https://annuaire-entreprises.data.gouv.fr/etablissement/98385625300023"
            target="_blank"
            rel="noopener noreferrer">
            983 856 253 00023
          </a>
          <br />
          增值稅號（VAT）：
          <a
            href="https://ec.europa.eu/taxation_customs/vies/#/vat-validation"
            target="_blank"
            rel="noopener noreferrer">
            FR03983856253
          </a>
        </p>
        <p>
          商標：<strong>RaidProtect</strong>
          <br />
          <a href="mailto:contact@raidprotect.bot">contact@raidprotect.bot</a>
        </p>
      </section>
      <hr />
      <section>
        <h2>主機代管</h2>
        <p>
          本網站由 Hetzner（Hetzner Online GmbH）代管，其總部位於 Industriestr. 25 - 91710 Gunzenhausen -
          Germany，電子郵件：info@hetzner.com，電話：+49 (0)9831 505-0。
        </p>
      </section>
    </LegalLayout>
  );
}
