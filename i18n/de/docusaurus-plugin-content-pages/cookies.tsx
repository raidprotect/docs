import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Cookies(): ReactNode {
  return (
    <LegalLayout
      title="Cookie-Richtlinie"
      lastUpdated="Letzte Aktualisierung: 1. Februar 2025"
      description="Erfahren Sie, wie RaidProtect Ihre Privatsphäre schützt, indem keine Cookies verwendet werden – für ein sicheres und privates Surferlebnis. Lesen Sie unsere Richtlinie.">
      <section>
        <p>
          Bei RaidProtect setzen wir uns dafür ein, die Privatsphäre und die Daten unserer Nutzer
          zu schützen. Im Rahmen dieses Engagements informieren wir Sie über unsere Richtlinie zur
          Verwendung von Cookies auf unserer Website.
        </p>
      </section>
      <section>
        <h2>1. Verwendung von Cookies</h2>
        <p>
          Wir möchten transparent über die von uns eingesetzten Technologien informieren. Daher
          teilen wir Ihnen mit, dass unsere Website <strong>keine Cookies verwendet</strong>.
          Cookies sind kleine Textdateien, die von Websites verwendet werden können, um das
          Nutzererlebnis effizienter zu gestalten. Um jedoch die Vertraulichkeit unserer Nutzer
          bestmöglich zu wahren, haben wir uns entschieden, sie auf unserer Plattform nicht
          einzusetzen.
        </p>
      </section>
      <section>
        <h2>2. Was bedeutet das für Sie?</h2>
        <p>
          Die Nichtverwendung von Cookies bedeutet, dass Sie auf unserer Website surfen können,
          ohne dass Informationen über Ihren Besuch aufgezeichnet oder analysiert werden. Dieses
          Vorgehen soll allen unseren Nutzern ein privates und sicheres Surferlebnis
          gewährleisten.
        </p>
      </section>
      <section>
        <h2>3. Wie schützen wir Ihre Privatsphäre?</h2>
        <p>
          Neben unserer Richtlinie der Nichtverwendung von Cookies ergreifen wir weitere Maßnahmen,
          um Ihre Privatsphäre und Ihre personenbezogenen Daten zu schützen. Wir halten die
          geltenden Datenschutzgesetze und -vorschriften strikt ein und setzen modernste
          Informationssicherheitspraktiken um, um jeden unbefugten Zugriff, jede Änderung,
          Offenlegung oder Zerstörung Ihrer personenbezogenen Daten zu verhindern.
        </p>
      </section>
      <section>
        <h2>4. Änderungen der Cookie-Richtlinie</h2>
        <p>
          Wir behalten uns das Recht vor, diese Cookie-Richtlinie jederzeit zu ändern. Jede
          Änderung tritt unmittelbar nach ihrer Veröffentlichung auf unserer Website in Kraft. Wir
          empfehlen Ihnen, diese Seite regelmäßig zu besuchen, um über unsere Cookie-Richtlinie auf
          dem Laufenden zu bleiben.
        </p>
      </section>
      <section>
        <h2>5. Kontakt</h2>
        <p>
          Wenn Sie Fragen oder Bedenken zu unserer Cookie-Richtlinie oder zur Art und Weise haben,
          wie wir Ihre personenbezogenen Daten schützen, kontaktieren Sie uns gerne unter{' '}
          <a href="mailto:dpo@raidprotect.bot">dpo@raidprotect.bot</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
