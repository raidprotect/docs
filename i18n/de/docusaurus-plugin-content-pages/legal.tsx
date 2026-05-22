import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/16+Esp.+du+Champ+de+Mars,+35000+Rennes/@48.1044838,-1.675702,17z/data=!3m1!4b1!4m6!3m5!1s0x480edfca43c9b53b:0xdea9cc38f95f9839!8m2!3d48.1044838!4d-1.675702!16s%2Fg%2F11csm9r096?sa=X&ved=2ahUKEwiZ0ICZyYSEAxWpUqQEHTq1BdcQ8gF6BAgdEAA&entry=tts';

export default function Legal(): ReactNode {
  return (
    <LegalLayout
      title="Impressum"
      lastUpdated="Letzte Aktualisierung: 1. Februar 2025"
      description="Finden Sie das Impressum des Discord-Bots RaidProtect (RP), Herausgeber der Website raidprotect.bot. Allgemeine Informationen und rechtliche Nutzungsbedingungen.">
      <section>
        <p>
          Die unter den Adressen <strong>„raidprotect.bot"</strong> und{' '}
          <strong>„docs.raidprotect.bot"</strong> erreichbare Website von RaidProtect (im Folgenden
          als die <strong>„Website"</strong> bezeichnet) sowie die über Discord unter der ID{' '}
          <strong>„466578580449525760"</strong> zugängliche RaidProtect-Anwendung (im Folgenden als
          die <strong>„Anwendung"</strong> bezeichnet) werden von der{' '}
          <strong>SAS French Community Agency</strong> veröffentlicht. Die auf der Website
          bereitgestellten Informationen dienen ausschließlich allgemeinen Informationszwecken und
          erheben keinen Anspruch auf Vollständigkeit. Trotz aller Sorgfalt und regelmäßiger
          Aktualisierung der Website können sich Fehler in den präsentierten Informationen
          eingeschlichen haben. Die Nutzer der Website sind daher angehalten, alle notwendigen
          Überprüfungen selbst vorzunehmen und tragen die alleinige Verantwortung für die
          Verwendung der bereitgestellten Informationen.
        </p>
        <p>
          <strong>Verantwortlicher Herausgeber:</strong> Arthur Battais
        </p>
      </section>
      <hr />
      <section>
        <h2>Unternehmen</h2>
        <p>
          <strong>SAS French Community Agency</strong>
          <br />
          <strong>Abkürzung: FCA</strong>
          <br />
          <strong>Mit einem Stammkapital von 10.000 €</strong>
          <br />
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
            16 Esplanade du Champ de Mars, 35000 Rennes, Frankreich
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
          USt-IdNr.:{' '}
          <a
            href="https://ec.europa.eu/taxation_customs/vies/#/vat-validation"
            target="_blank"
            rel="noopener noreferrer">
            FR03983856253
          </a>
        </p>
        <p>
          <strong>Eingetragene Marke</strong>: RaidProtect
          <br />
          <a href="mailto:contact@raidprotect.bot">contact@raidprotect.bot</a>
        </p>
      </section>
      <hr />
      <section>
        <h2>Hosting</h2>
        <p>
          Die Website wird gehostet von Hetzner (Hetzner Online GmbH), mit Sitz in Industriestr. 25
          - 91710 Gunzenhausen - Germany, E-Mail: info@hetzner.com und Telefon: +49 (0)9831 505-0.
        </p>
      </section>
    </LegalLayout>
  );
}
