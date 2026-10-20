import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/16+Esp.+du+Champ+de+Mars,+35000+Rennes/@48.1044838,-1.675702,17z/data=!3m1!4b1!4m6!3m5!1s0x480edfca43c9b53b:0xdea9cc38f95f9839!8m2!3d48.1044838!4d-1.675702!16s%2Fg%2F11csm9r096?sa=X&ved=2ahUKEwiZ0ICZyYSEAxWpUqQEHTq1BdcQ8gF6BAgdEAA&entry=tts';

export default function Legal(): ReactNode {
  return (
    <LegalLayout
      title="法律声明"
      lastUpdated="最后更新：2025年2月1日"
      description="查看 Discord 机器人 RaidProtect（RP）及 raidprotect.bot 网站发布者的法律声明：基本信息与使用的法律框架。">
      <section>
        <p>
          可通过“raidprotect.bot”和“docs.raidprotect.bot”访问的 RaidProtect
          网站（以下简称“本网站”）以及可在 Discord 上通过“466578580449525760”访问的 RaidProtect
          应用（以下简称“本应用”）由 SAS French Community Agency
          发布。本网站所提供的信息仅供一般参考，并不声称详尽无遗。尽管我们在建设本网站及定期更新时已尽一切注意与严谨，所呈现的信息中仍可能存在错误。因此，本网站用户应自行进行一切必要的核实，并对其使用所获取信息的行为承担全部责任。
        </p>
        <p>出版负责人：Arthur Battais</p>
      </section>
      <hr />
      <section>
        <h2>公司</h2>
        <p>
          <strong>SAS French Community Agency</strong>
          <br />
          <strong>简称：FCA</strong>
          <br />
          <strong>注册资本：10 000 欧元</strong>
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
          增值税号：
          <a
            href="https://ec.europa.eu/taxation_customs/vies/#/vat-validation"
            target="_blank"
            rel="noopener noreferrer">
            FR03983856253
          </a>
        </p>
        <p>
          商标：<strong>RaidProtect</strong>
          <br />
          <a href="mailto:contact@raidprotect.bot">contact@raidprotect.bot</a>
        </p>
      </section>
      <hr />
      <section>
        <h2>托管</h2>
        <p>
          本网站由 Hetzner 公司（Hetzner Online GmbH）托管，其注册地址为 Industriestr. 25 - 91710
          Gunzenhausen - Germany，电子邮箱：info@hetzner.com，电话：+49 (0)9831 505-0。
        </p>
      </section>
    </LegalLayout>
  );
}
