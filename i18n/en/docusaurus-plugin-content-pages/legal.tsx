import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/16+Esp.+du+Champ+de+Mars,+35000+Rennes/@48.1044838,-1.675702,17z/data=!3m1!4b1!4m6!3m5!1s0x480edfca43c9b53b:0xdea9cc38f95f9839!8m2!3d48.1044838!4d-1.675702!16s%2Fg%2F11csm9r096?sa=X&ved=2ahUKEwiZ0ICZyYSEAxWpUqQEHTq1BdcQ8gF6BAgdEAA&entry=tts';

export default function Legal(): ReactNode {
  return (
    <LegalLayout
      title="Legal notice"
      lastUpdated="Last update: February 1, 2025"
      description="Find the legal notice of the bot Discord RaidProtect (RP), editor of the site raidprotect.bot. General information and legal terms of use.">
      <section>
        <p>
          The RaidProtect website accessible at "raidprotect.bot" and "docs.raidprotect.bot"
          (hereinafter referred to as the "Site") and the RaidProtect application accessible from
          the Discord "466578580449525760" (hereinafter referred to as the "Application") are
          published by SAS French Community Agency. The information provided on the Site is
          presented for general information purposes only and does not claim to be exhaustive.
          Despite all the care and rigor taken in creating the Site and updating it regularly,
          errors may have crept into the information presented. Users of the Site should therefore
          make all necessary checks and are solely responsible for their use of the information
          provided.
        </p>
        <p>Publishing manager: Arthur Battais</p>
      </section>
      <hr />
      <section>
        <h2>Company</h2>
        <p>
          <strong>SAS French Community Agency</strong>
          <br />
          <strong>Acronym: FCA</strong>
          <br />
          <strong>With a share capital of €10,000</strong>
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
          VAT:{' '}
          <a
            href="https://ec.europa.eu/taxation_customs/vies/#/vat-validation"
            target="_blank"
            rel="noopener noreferrer">
            FR03983856253
          </a>
        </p>
        <p>
          Trademark: <strong>RaidProtect</strong>
          <br />
          <a href="mailto:contact@raidprotect.bot">contact@raidprotect.bot</a>
        </p>
      </section>
      <hr />
      <section>
        <h2>Hosting</h2>
        <p>
          The Site is hosted by Hetzner (Hetzner Online GmbH), headquartered at Industriestr. 25 -
          91710 Gunzenhausen - Germany, e-mail: info@hetzner.com and phone: +49 (0)9831 505-0.
        </p>
      </section>
    </LegalLayout>
  );
}
