import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Terms(): ReactNode {
  return (
    <LegalLayout
      title="Condizioni generali di utilizzo"
      lastUpdated="Ultimo aggiornamento: 1° febbraio 2025"
      description="Consulta le nostre condizioni di utilizzo per conoscere i diritti di proprietà intellettuale, i collegamenti ipertestuali, la gestione dei dati personali e la nostra responsabilità relativa al sito e al bot RaidProtect.">
      <section>
        <p>
          Aggiungendo RaidProtect al tuo server Discord, dichiari di aver letto e accettato le
          Condizioni di utilizzo. Se non accetti una qualsiasi di queste condizioni, devi smettere
          di utilizzare i nostri servizi.
        </p>
      </section>
      <section>
        <h2>1. Proprietà intellettuale</h2>
        <p>
          Il presente sito internet, la sua struttura generale, il marchio commerciale
          RaidProtect, nonché i testi, le immagini, le animazioni, i loghi e qualsiasi altro
          elemento che lo compone sono di proprietà esclusiva di SAS French Community Agency o dei
          suoi partner e sono protetti dalle leggi francesi e internazionali in materia di
          proprietà intellettuale. Qualsiasi riproduzione, rappresentazione, utilizzo o
          adattamento, in qualsiasi forma, di tutti o parte di questi elementi, compresi i
          software, senza la previa autorizzazione scritta di SAS French Community Agency, è
          severamente vietato e costituirebbe una contraffazione.
        </p>
        <p>
          Le stesse disposizioni si applicano alle funzionalità e al codice sorgente
          dell’Applicazione, anch’essi tutelati dai diritti di proprietà intellettuale. Qualsiasi
          tentativo di riproduzione, modifica o utilizzo non autorizzato delle funzionalità
          dell’Applicazione è vietato e può dare luogo ad azioni legali.
        </p>
      </section>
      <section>
        <h2>2. Collegamenti ipertestuali</h2>
        <p>
          Qualsiasi collegamento al Sito deve essere oggetto di una previa autorizzazione scritta
          di <strong>SAS French Community Agency</strong>. In ogni caso,{' '}
          <strong>SAS French Community Agency</strong> si riserva il diritto di revocare tale
          autorizzazione in qualsiasi momento qualora ritenga che il collegamento stabilito con il
          Sito sia tale da ledere gli interessi di quest’ultimo.
        </p>
        <p>
          Si precisa inoltre che i siti che presentano un collegamento ipertestuale con il presente
          Sito (collegamenti ipertestuali verso il Sito o a partire da esso) non sono sotto il
          controllo di <strong>SAS French Community Agency</strong>, <strong>RaidProtect</strong>{' '}
          e delle sue società affiliate, che declinano ogni responsabilità in merito al loro
          contenuto.
        </p>
      </section>
      <section>
        <h2>3. Utilizzo del servizio</h2>
        <p>
          I nostri servizi, compresa l’Applicazione, sono di libero utilizzo per scopi personali o
          commerciali. Ci riserviamo il diritto di vietare l’utilizzo dei nostri servizi in caso di
          uso da noi ritenuto inappropriato o che possa danneggiare gli altri Utenti.
        </p>
      </section>
      <section>
        <h2>4. Responsabilità</h2>
        <h3>4.1. Sito internet</h3>
        <p>
          <strong>SAS French Community Agency</strong>, <strong>RaidProtect</strong> e le sue
          società affiliate non potranno essere ritenute responsabili di alcun danno diretto o
          indiretto derivante dall’utilizzo del Sito internet o delle informazioni in esso
          contenute. <strong>SAS French Community Agency</strong> non garantisce l’esattezza o la
          completezza delle informazioni presentate sul Sito e si riserva il diritto di
          modificarle o eliminarle in qualsiasi momento, senza preavviso.
        </p>
        <h3>4.2. Applicazione</h3>
        <p>
          L’Applicazione <strong>RaidProtect</strong> è fornita così com’è, senza garanzie di alcun
          tipo, esplicite o implicite. <strong>SAS French Community Agency</strong> non può essere
          ritenuta responsabile delle conseguenze di un utilizzo scorretto o abusivo
          dell’Applicazione, né di eventuali danni derivanti da un malfunzionamento temporaneo o
          permanente.
        </p>
        <p>
          Gli amministratori dei server Discord che utilizzano <strong>RaidProtect</strong> sono
          gli unici responsabili delle configurazioni effettuate e delle decisioni prese a seguito
          delle azioni automatizzate dell’Applicazione (ad esempio, ban o eliminazione di
          messaggi). In caso di violazione delle condizioni d’uso di Discord o delle leggi vigenti,
          gli amministratori del server interessato ne portano l’intera responsabilità.
        </p>
      </section>
      <section>
        <h2>5. Modifica delle CGU</h2>
        <p>
          Le presenti Condizioni generali di utilizzo possono essere modificate in qualsiasi
          momento per riflettere cambiamenti nei servizi o nella normativa applicabile. Qualsiasi
          modifica sarà pubblicata sul sito web e, se necessario, comunicata tramite
          l’Applicazione. Continuando a utilizzare i servizi dopo l’aggiornamento delle CGU, gli
          utenti accettano le modifiche apportate.
        </p>
      </section>
      <section>
        <h2>6. Legge applicabile e foro competente</h2>
        <p>
          Le presenti CGU sono disciplinate dal diritto francese. In caso di controversia, e dopo
          un tentativo di risoluzione amichevole, la competenza è attribuita ai tribunali
          competenti del foro di Parigi, salvo diversa disposizione di legge.
        </p>
      </section>
    </LegalLayout>
  );
}
