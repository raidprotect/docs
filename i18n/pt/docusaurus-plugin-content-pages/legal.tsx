import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/16+Esp.+du+Champ+de+Mars,+35000+Rennes/@48.1044838,-1.675702,17z/data=!3m1!4b1!4m6!3m5!1s0x480edfca43c9b53b:0xdea9cc38f95f9839!8m2!3d48.1044838!4d-1.675702!16s%2Fg%2F11csm9r096?sa=X&ved=2ahUKEwiZ0ICZyYSEAxWpUqQEHTq1BdcQ8gF6BAgdEAA&entry=tts';

export default function Legal(): ReactNode {
  return (
    <LegalLayout
      title="Aviso legal"
      lastUpdated="Última atualização: 1 de fevereiro de 2025"
      description="Consulte o aviso legal do bot de Discord RaidProtect (RP), editor do site raidprotect.bot. Informações gerais e enquadramento legal de utilização.">
      <section>
        <p>
          O site <strong>RaidProtect</strong>, acessível através dos endereços «raidprotect.bot» e
          «docs.raidprotect.bot» (doravante designado por «Site»), e a aplicação RaidProtect,
          acessível a partir do Discord «466578580449525760» (doravante designada por «Aplicação»),
          são editados pela <strong>SAS French Community Agency</strong>. As informações
          disponibilizadas no Site são apresentadas a título indicativo e geral e não pretendem
          ser exaustivas. Apesar de todo o cuidado e rigor empregues na elaboração do Site e na
          sua atualização regular, podem ter-se introduzido erros nas informações apresentadas. Os
          utilizadores do Site deverão, por isso, efetuar todas as verificações necessárias e são
          os únicos responsáveis pela utilização que fazem das informações acessíveis.
        </p>
        <p>Responsável pela publicação: Arthur Battais</p>
      </section>
      <hr />
      <section>
        <h2>Sociedade</h2>
        <p>
          <strong>SAS French Community Agency</strong>
          <br />
          <strong>Sigla: FCA</strong>
          <br />
          <strong>Com um capital social de 10 000 €</strong>
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
          IVA:{' '}
          <a
            href="https://ec.europa.eu/taxation_customs/vies/#/vat-validation"
            target="_blank"
            rel="noopener noreferrer">
            FR03983856253
          </a>
        </p>
        <p>
          Marca comercial: <strong>RaidProtect</strong>
          <br />
          <a href="mailto:contact@raidprotect.bot">contact@raidprotect.bot</a>
        </p>
      </section>
      <hr />
      <section>
        <h2>Alojamento</h2>
        <p>
          O Site é alojado pela empresa Hetzner (Hetzner Online GmbH), com sede em Industriestr.
          25 - 91710 Gunzenhausen - Germany, e-mail: info@hetzner.com e telefone: +49 (0)9831
          505-0.
        </p>
      </section>
    </LegalLayout>
  );
}
