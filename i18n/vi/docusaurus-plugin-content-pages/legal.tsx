import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/16+Esp.+du+Champ+de+Mars,+35000+Rennes/@48.1044838,-1.675702,17z/data=!3m1!4b1!4m6!3m5!1s0x480edfca43c9b53b:0xdea9cc38f95f9839!8m2!3d48.1044838!4d-1.675702!16s%2Fg%2F11csm9r096?sa=X&ved=2ahUKEwiZ0ICZyYSEAxWpUqQEHTq1BdcQ8gF6BAgdEAA&entry=tts';

export default function Legal(): ReactNode {
  return (
    <LegalLayout
      title="Thông báo pháp lý"
      lastUpdated="Cập nhật lần cuối: ngày 1 tháng 2 năm 2025"
      description="Thông báo pháp lý của bot Discord RaidProtect (RP), đơn vị phát hành trang web raidprotect.bot. Thông tin chung và khuôn khổ pháp lý về việc sử dụng.">
      <section>
        <p>
          Trang web <strong>RaidProtect</strong> có thể truy cập tại các địa chỉ “raidprotect.bot”
          và “docs.raidprotect.bot” (sau đây gọi là “Trang web”) và ứng dụng RaidProtect có thể
          truy cập từ Discord “466578580449525760” (sau đây gọi là “Ứng dụng”) được phát hành bởi{' '}
          <strong>SAS French Community Agency</strong>. Thông tin được cung cấp trên Trang web chỉ
          mang tính chất tham khảo và tổng quát, không nhằm mục đích đầy đủ toàn diện. Mặc dù đã
          hết sức cẩn trọng và nghiêm túc trong việc xây dựng Trang web và cập nhật thường xuyên,
          thông tin được trình bày vẫn có thể có sai sót. Do đó, người dùng Trang web cần tự thực
          hiện mọi kiểm tra cần thiết và tự chịu trách nhiệm hoàn toàn về việc sử dụng các thông
          tin có thể truy cập.
        </p>
        <p>Người chịu trách nhiệm xuất bản: Arthur Battais</p>
      </section>
      <hr />
      <section>
        <h2>Công ty</h2>
        <p>
          <strong>SAS French Community Agency</strong>
          <br />
          <strong>Tên viết tắt: FCA</strong>
          <br />
          <strong>Vốn điều lệ: 10.000 €</strong>
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
          Mã số thuế VAT:{' '}
          <a
            href="https://ec.europa.eu/taxation_customs/vies/#/vat-validation"
            target="_blank"
            rel="noopener noreferrer">
            FR03983856253
          </a>
        </p>
        <p>
          Nhãn hiệu thương mại: <strong>RaidProtect</strong>
          <br />
          <a href="mailto:contact@raidprotect.bot">contact@raidprotect.bot</a>
        </p>
      </section>
      <hr />
      <section>
        <h2>Lưu trữ</h2>
        <p>
          Đơn vị lưu trữ Trang web là công ty Hetzner (Hetzner Online GmbH), có trụ sở chính tại
          Industriestr. 25 - 91710 Gunzenhausen - Germany, email: info@hetzner.com, điện thoại:
          +49 (0)9831 505-0.
        </p>
      </section>
    </LegalLayout>
  );
}
