import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Cookies(): ReactNode {
  return (
    <LegalLayout
      title="Informativa sui cookie"
      lastUpdated="Ultimo aggiornamento: 1° febbraio 2025"
      description="Scopri come RaidProtect tutela la tua privacy non utilizzando cookie, per una navigazione sicura e riservata. Consulta la nostra informativa.">
      <section>
        <p>
          In RaidProtect ci impegniamo a tutelare la privacy e i dati dei nostri utenti.
          Nell’ambito di questo impegno, ti informiamo sulla nostra politica relativa all’uso dei
          cookie sul nostro sito web.
        </p>
      </section>
      <section>
        <h2>1. Uso dei cookie</h2>
        <p>
          Teniamo a essere trasparenti sulle tecnologie che utilizziamo. A tal fine, ti informiamo
          che il nostro sito web <strong>non utilizza cookie</strong>. I cookie sono piccoli file
          di testo che i siti web possono utilizzare per rendere più efficiente l’esperienza
          dell’utente. Tuttavia, per preservare il più possibile la riservatezza dei nostri
          utenti, abbiamo scelto di non impiegarli sulla nostra piattaforma.
        </p>
      </section>
      <section>
        <h2>2. Che cosa significa per te?</h2>
        <p>
          L’assenza di cookie significa che puoi navigare sul nostro sito web senza che alcuna
          informazione sulla tua visita venga registrata o analizzata. Questo approccio mira a
          garantire un’esperienza di navigazione privata e sicura a tutti i nostri utenti.
        </p>
      </section>
      <section>
        <h2>3. Come tuteliamo la tua privacy?</h2>
        <p>
          Oltre alla nostra politica di non utilizzo dei cookie, adottiamo altre misure per
          tutelare la tua privacy e i tuoi dati personali. Rispettiamo rigorosamente le leggi e i
          regolamenti vigenti in materia di protezione dei dati e applichiamo pratiche
          all’avanguardia di sicurezza delle informazioni per prevenire qualsiasi accesso,
          modifica, divulgazione o distruzione non autorizzati delle tue informazioni personali.
        </p>
      </section>
      <section>
        <h2>4. Modifiche all’informativa sui cookie</h2>
        <p>
          Ci riserviamo il diritto di modificare la presente informativa sui cookie in qualsiasi
          momento. Qualsiasi modifica entrerà in vigore immediatamente dopo la sua pubblicazione
          sul nostro sito web. Ti invitiamo a consultare regolarmente questa pagina per restare
          informato sulla nostra politica in materia di cookie.
        </p>
      </section>
      <section>
        <h2>5. Contatti</h2>
        <p>
          Per qualsiasi domanda o dubbio sulla nostra informativa sui cookie o sul modo in cui
          proteggiamo i tuoi dati personali, non esitare a contattarci all’indirizzo{' '}
          <a href="mailto:dpo@raidprotect.bot">dpo@raidprotect.bot</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
