import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/16+Esp.+du+Champ+de+Mars,+35000+Rennes/@48.1044838,-1.675702,17z/data=!3m1!4b1!4m6!3m5!1s0x480edfca43c9b53b:0xdea9cc38f95f9839!8m2!3d48.1044838!4d-1.675702!16s%2Fg%2F11csm9r096?sa=X&ved=2ahUKEwiZ0ICZyYSEAxWpUqQEHTq1BdcQ8gF6BAgdEAA&entry=tts';

export default function Legal(): ReactNode {
  return (
    <LegalLayout
      title="法的表示"
      lastUpdated="最終更新日：2025年2月1日"
      description="Discord ボット RaidProtect（RP）およびサイト raidprotect.bot の運営者に関する法的表示です。一般情報と利用にあたっての法的枠組みを掲載しています。">
      <section>
        <p>
          「raidprotect.bot」および「docs.raidprotect.bot」でアクセスできる RaidProtect
          のウェブサイト（以下「本サイト」）と、Discord 上の「466578580449525760」からアクセスできる
          RaidProtect アプリケーション（以下「本アプリケーション」）は、SAS French Community Agency
          が運営・発行しています。本サイトで提供される情報は、一般的な参考情報として掲載しているものであり、網羅性を保証するものではありません。本サイトの制作と定期的な更新には細心の注意を払っていますが、掲載情報に誤りが含まれている可能性があります。そのため、本サイトの利用者は必要な確認をすべて自ら行うものとし、アクセスした情報の利用について単独で責任を負うものとします。
        </p>
        <p>発行責任者：Arthur Battais</p>
      </section>
      <hr />
      <section>
        <h2>会社情報</h2>
        <p>
          <strong>SAS French Community Agency</strong>
          <br />
          <strong>略称：FCA</strong>
          <br />
          <strong>資本金：10,000 ユーロ</strong>
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
          VAT 番号：
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
        <h2>ホスティング</h2>
        <p>
          本サイトのホスティング事業者は Hetzner（Hetzner Online GmbH）です。本社所在地は
          Industriestr. 25 - 91710 Gunzenhausen - Germany、メールアドレスは info@hetzner.com、電話番号は
          +49 (0)9831 505-0 です。
        </p>
      </section>
    </LegalLayout>
  );
}
