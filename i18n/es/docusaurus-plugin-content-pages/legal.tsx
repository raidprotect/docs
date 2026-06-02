import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/16+Esp.+du+Champ+de+Mars,+35000+Rennes/@48.1044838,-1.675702,17z/data=!3m1!4b1!4m6!3m5!1s0x480edfca43c9b53b:0xdea9cc38f95f9839!8m2!3d48.1044838!4d-1.675702!16s%2Fg%2F11csm9r096?sa=X&ved=2ahUKEwiZ0ICZyYSEAxWpUqQEHTq1BdcQ8gF6BAgdEAA&entry=tts';

export default function Legal(): ReactNode {
  return (
    <LegalLayout
      title="Aviso legal"
      lastUpdated="Última actualización: 1 de febrero de 2025"
      description="Encuentra los avisos legales del bot de Discord RaidProtect (RP), editor del sitio raidprotect.bot. Información general y marco legal de uso.">
      <section>
        <p>
          El sitio <strong>RaidProtect</strong>, accesible en las direcciones «raidprotect.bot» y
          «docs.raidprotect.bot» (en lo sucesivo, el «Sitio»), y la aplicación RaidProtect,
          accesible desde Discord con el ID «466578580449525760» (en lo sucesivo, la «Aplicación»),
          son editados por la <strong>SAS French Community Agency</strong>. La información
          facilitada en el Sitio se presenta con carácter meramente indicativo y general y no
          pretende ser exhaustiva. A pesar de todo el cuidado y rigor empleados en la elaboración
          del Sitio y en su actualización periódica, es posible que se hayan deslizado errores en
          la información presentada. Por consiguiente, los usuarios del Sitio realizarán todas las
          comprobaciones que consideren oportunas y serán los únicos responsables del uso que
          hagan de la información accesible.
        </p>
        <p>Responsable de la publicación: Arthur Battais</p>
      </section>
      <hr />
      <section>
        <h2>Empresa</h2>
        <p>
          <strong>SAS French Community Agency</strong>
          <br />
          <strong>Siglas: FCA</strong>
          <br />
          <strong>Con un capital social de 10 000 €</strong>
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
        <h2>Alojamiento</h2>
        <p>
          El alojamiento del Sitio corre a cargo de la empresa Hetzner (Hetzner Online GmbH), cuya
          sede social se encuentra en Industriestr. 25 - 91710 Gunzenhausen - Germany, correo
          electrónico: info@hetzner.com y teléfono: +49 (0)9831 505-0.
        </p>
      </section>
    </LegalLayout>
  );
}
