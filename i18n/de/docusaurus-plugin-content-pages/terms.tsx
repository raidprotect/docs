import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Terms(): ReactNode {
  return (
    <LegalLayout
      title="Nutzungsbedingungen"
      lastUpdated="Letzte Aktualisierung: 1. Februar 2025"
      description="Lesen Sie unsere Nutzungsbedingungen, um mehr über unsere Rechte am geistigen Eigentum, Hyperlinks, den Umgang mit personenbezogenen Daten sowie unsere Haftung für die Website und den Bot von RaidProtect zu erfahren.">
      <section>
        <p>
          Indem Sie RaidProtect zu Ihrem Discord-Server hinzufügen, bestätigen Sie, dass Sie die
          Nutzungsbedingungen gelesen und akzeptiert haben. Wenn Sie eine dieser Bedingungen nicht
          akzeptieren, müssen Sie die Nutzung unserer Dienste einstellen.
        </p>
      </section>
      <section>
        <h2>1. Geistiges Eigentum</h2>
        <p>
          Diese Website, ihre allgemeine Struktur, die Marke RaidProtect sowie die Texte, Bilder,
          Animationen, Logos und alle weiteren sie ausmachenden Elemente sind ausschließliches
          Eigentum der SAS French Community Agency oder ihrer Partner und durch die französischen
          und internationalen Gesetze zum Schutz des geistigen Eigentums geschützt. Jede
          Vervielfältigung, Darstellung, Nutzung oder Anpassung in welcher Form auch immer, ganz
          oder teilweise, dieser Elemente, einschließlich der Software, ohne die vorherige
          schriftliche Genehmigung der SAS French Community Agency ist strengstens untersagt und
          stellt eine Urheberrechtsverletzung dar.
        </p>
        <p>
          Dieselben Bestimmungen gelten für die Funktionen und den Quellcode der Anwendung, die
          ebenfalls durch Rechte am geistigen Eigentum geschützt sind. Jeder Versuch der
          Vervielfältigung, Veränderung oder unbefugten Nutzung der Funktionen der Anwendung ist
          untersagt und kann rechtlich verfolgt werden.
        </p>
      </section>
      <section>
        <h2>2. Hyperlinks</h2>
        <p>
          Jede Verlinkung zur Website bedarf der vorherigen schriftlichen Genehmigung der{' '}
          <strong>SAS French Community Agency</strong>. In jedem Fall behält sich die{' '}
          <strong>SAS French Community Agency</strong> das Recht vor, diese Genehmigung jederzeit
          zu widerrufen, wenn ihr der zur Website hergestellte Link geeignet erscheint, die
          Interessen der Website zu beeinträchtigen.
        </p>
        <p>
          Es wird darüber hinaus darauf hingewiesen, dass Websites, die einen Hyperlink zur
          vorliegenden Website aufweisen (Hyperlinks, die auf die Website verweisen oder von dieser
          ausgehen), nicht der Kontrolle der <strong>SAS French Community Agency</strong>, von{' '}
          <strong>RaidProtect</strong> und ihrer verbundenen Gesellschaften unterliegen, die jede
          Verantwortung für deren Inhalt ablehnen.
        </p>
      </section>
      <section>
        <h2>3. Nutzung des Dienstes</h2>
        <p>
          Unsere Dienste, einschließlich der Anwendung, können kostenlos für persönliche oder
          gewerbliche Zwecke genutzt werden. Wir behalten uns das Recht vor, die Nutzung unserer
          Dienste zu untersagen, sofern wir die Nutzung als unangemessen einstufen oder wenn sie
          anderen Nutzern schaden könnte.
        </p>
      </section>
      <section>
        <h2>4. Haftung</h2>
        <h3>4.1. Website</h3>
        <p>
          Die <strong>SAS French Community Agency</strong>, <strong>RaidProtect</strong> und ihre
          verbundenen Gesellschaften können nicht für direkte oder indirekte Schäden haftbar
          gemacht werden, die sich aus der Nutzung der Website oder der darin enthaltenen
          Informationen ergeben. Die <strong>SAS French Community Agency</strong> garantiert nicht
          die Richtigkeit oder Vollständigkeit der auf der Website dargestellten Informationen und
          behält sich das Recht vor, diese jederzeit und ohne Vorankündigung zu ändern oder zu
          löschen.
        </p>
        <h3>4.2. Anwendung</h3>
        <p>
          Die Anwendung <strong>RaidProtect</strong> wird ohne ausdrückliche oder stillschweigende
          Gewährleistung jeglicher Art bereitgestellt. Die{' '}
          <strong>SAS French Community Agency</strong> kann nicht für die Folgen einer fehlerhaften
          oder missbräuchlichen Nutzung der Anwendung verantwortlich gemacht werden, ebenso wenig
          für etwaige Schäden, die aus einer vorübergehenden oder dauerhaften Funktionsstörung
          resultieren.
        </p>
        <p>
          Die Administratoren von Discord-Servern, die <strong>RaidProtect</strong> verwenden, sind
          allein verantwortlich für die vorgenommenen Konfigurationen und die Entscheidungen, die
          infolge der automatisierten Aktionen der Anwendung getroffen werden (zum Beispiel
          Sperren oder Löschen von Nachrichten). Im Falle eines Verstoßes gegen die
          Nutzungsbedingungen von Discord oder das geltende Recht tragen die Administratoren des
          betroffenen Servers die volle Verantwortung.
        </p>
      </section>
      <section>
        <h2>5. Änderung der Nutzungsbedingungen</h2>
        <p>
          Die vorliegenden Allgemeinen Nutzungsbedingungen können jederzeit geändert werden, um
          Änderungen der Dienste oder der geltenden Vorschriften widerzuspiegeln. Jede Änderung
          wird auf der Website veröffentlicht und, falls erforderlich, über die Anwendung
          mitgeteilt. Durch die fortgesetzte Nutzung der Dienste nach einer Aktualisierung der
          Nutzungsbedingungen akzeptieren die Nutzer die vorgenommenen Änderungen.
        </p>
      </section>
      <section>
        <h2>6. Anwendbares Recht und Gerichtsstand</h2>
        <p>
          Die vorliegenden Nutzungsbedingungen unterliegen dem französischen Recht. Im Streitfall
          und nach einem Versuch der gütlichen Einigung sind, sofern gesetzliche Vorschriften nicht
          entgegenstehen, ausschließlich die zuständigen Gerichte von Paris zuständig.
        </p>
      </section>
    </LegalLayout>
  );
}
