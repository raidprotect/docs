---
title: Malfunzionamenti
description: "Un problema con RaidProtect? Trova qui le soluzioni ai malfunzionamenti più comuni per rimettere in sesto il tuo bot."
---

Un problema con RaidProtect? La soluzione si trova sicuramente qui.

A volte capita che non tutto funzioni come previsto. Ecco i **problemi più comuni** che puoi incontrare, e come risolverli. 🤗 

Se questa pagina non risponde a un problema che incontri, [**non esitare a contattare il nostro supporto**](https://raidprotect.bot/discord), che sarà felice di aiutarti!

## Il bot mostra un errore quando eseguo un comando {#commands}

Se il comando non viene eseguito con successo, **RaidProtect può mostrare un errore** al posto del risultato atteso. Nella maggior parte dei casi nel messaggio è data un'indicazione, ma può trattarsi di un messaggio più generico. Ecco come risolvere questo problema nella maggior parte dei casi. 🧐 

- **Fai ciò che è indicato.** Alcuni errori spiegano chiaramente il problema. Se il bot ti chiede di fare qualcosa, fallo.

- **Verifica i parametri del comando.** Può darsi che il comando sia semplicemente scritto male, guarda nell'aiuto come si usa. Non dimenticare che le parentesi quadre ([]) non vanno incluse.

- **Verifica i permessi del bot.** Deve avere il permesso **Amministratore** ed essere allo stesso livello degli amministratori nell'ordine dei ruoli.

- **Riprova il comando.** A volte il problema si risolve senza che si sappia perché.

Se continui ad avere un errore nonostante questi consigli, [contatta il nostro supporto](https://raidprotect.bot/discord) così potremo aiutarti. 🤝 

## Il canale dei log del bot non si è creato da solo {#logs}

Per avvisarti delle azioni che compie, RaidProtect ha bisogno di un canale dei log. Questo canale viene creato automaticamente quando il bot entra per la prima volta, ma a volte non viene creato alcun canale. Ecco come rimediare a questo problema. ⚙️ 

- **Assicurati che il bot sia davvero Amministratore.** Per il corretto funzionamento del bot, è necessario dargli il permesso Amministratore. Se non è stato fatto, vai nelle impostazioni dei ruoli e concedi questo permesso al ruolo RaidProtect. Non ti resta che inizializzare manualmente il bot perché tutto funzioni (vedi subito dopo)!

- **Verifica che il bot sia inizializzato correttamente.** Normalmente avviene in automatico, ma puoi forzare questa inizializzazione con il [comando `/setup`](../setup.md#install). Il canale dei log dovrebbe crearsi automaticamente.

- **Definisci manualmente un canale.** Se nulla funziona, niente panico, puoi scegliere tu stesso il canale dei log! Esegui il [comando `/settings`](../setup.md#settings), apri la scheda “**Moderazione**” poi clicca su “**Configurare**” accanto a “**Log**”. Puoi sceglierci un canale generale e, se vuoi, un canale dedicato alla moderazione e un altro al captcha: lasciati vuoti, questi due ricadono sul canale generale.

## Un utente ha fatto spam, ma il bot non l'ha sanzionato {#anti-spam}

L'[anti-spam](../features/anti-spam.mdx) è una delle funzionalità principali di RaidProtect, e può essere fastidioso se non funziona. Ma tranquillo, la maggior parte delle volte non è nulla di grave. 😇 

- **Se l'anti-spam chiede di smettere di fare spam**, ma non sanziona, è probabilmente dovuto a una mancanza di permessi. Ricorda, il bot deve avere il permesso Amministratore e trovarsi allo stesso livello di quello degli amministratori nell'ordine dei ruoli.

- **Verifica la configurazione dell'anti-spam.** È banale, ma qualcuno dimentica di aver ignorato un canale. Anche un canale il cui nome contiene “spam” è sempre ignorato.

- **Avvia una simulazione.** Nella schermata dell'anti-spam, il pulsante “**Simula**” ti dice, per un membro, un canale e un tipo di spam dati, se l'anti-spam scatterebbe e, in caso contrario, perché (modulo spento, canale o ruolo ignorato, membro sopra il bot…). Anche il [comando `/feedback`](../features/utilities.mdx#feedback) propone questa diagnosi quando segnali un bug dell'anti-spam.

- **Verifica i permessi di chi ha fatto spam.** I membri dello staff (Amministratore, Gestire il server, Gestire i messaggi) vengono ignorati finché non hai ignorato tu stesso alcun ruolo né membro. Se provi l'anti-spam sul tuo server, rischia quindi di non rilevarti.

- **Lo spam è abbastanza lungo?** L'anti-spam reagisce a un volume di messaggi, non a un messaggio isolato. Non avere troppa fretta, e verifica che la sanzione del [trigger](../features/anti-spam.mdx#triggers) interessato non sia disattivata.

Se nonostante questo uno spam non viene ancora rilevato, [contattaci sul nostro server di supporto](https://raidprotect.bot/discord) allegando uno **screenshot del problema**.

## Gli utenti accedono al server senza superare il captcha {#captcha}

Questo problema è relativamente comune, ma dipende dalla **configurazione del tuo server**. Vediamo come rimediare. 🏥 

- **Hai un ruolo automatico?** Se hai configurato un bot (diverso da RaidProtect) per dare un ruolo ai nuovi arrivati sul tuo server, può interferire con il captcha. Sostituiscilo con i [ruoli automatici di RaidProtect](../features/onboarding.md#autorole), assegnati una volta superato il captcha.

- **Hai attivato il captcha?** È una funzionalità facoltativa: attivala nella scheda “**Arrivi**” di [`/settings`](../setup.md#settings). Consulta la [pagina dedicata al captcha](../features/captcha.md#config) per saperne di più.

- **Qual è la sua attivazione?** In “**Automatica**”, il captcha si applica solo durante un raid o un livello [DISCON](../features/discon.md) elevato: il resto del tempo, chi arriva entra direttamente. Scegli “**Permanente**” perché ogni nuovo arrivato superi il captcha.

- **Un ruolo o un canale lo aggira?** La schermata del captcha segnala i canali ancora visibili al ruolo di verifica e i ruoli che danno accesso al server senza superarlo, con un pulsante per correggere.

## Il comando /snipe non trova alcun messaggio {#snipe}

Il [comando `/snipe`](../features/moderation.mdx#snipe) legge i messaggi che RaidProtect tiene in memoria per un'ora. Senza anti-spam né segnalazioni attivi, questa memorizzazione è spenta per impostazione predefinita: attiva “**Memorizzazione dei messaggi**” nella scheda “**Utilità**” di [`/settings`](../setup.md#settings). Possono essere ritrovati solo i messaggi eliminati dopo la sua attivazione.

## Gli utenti possono ancora scrivere quando blocco un canale {#lock}

Il comando di blocco sembra magico, ma ha anche i suoi punti deboli. Come [indicato in questa documentazione](../features/channel-lock.md#lock), il comando **agisce solo sul ruolo @everyone**. Questo significa che se nel canale che vuoi bloccare un ruolo ha esplicitamente il permesso di scrivere, potrà farlo comunque. Poiché un'immagine vale più di mille parole, ecco come appare concretamente. 🔍 

![Screenshot della configurazione del blocco canale](../../../../en/docusaurus-plugin-content-docs/current/assets/lock-channel-messages-raidprotect.png)
