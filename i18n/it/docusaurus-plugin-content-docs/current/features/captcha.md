---
title: Captcha (Verifica)
description: "Il captcha di RaidProtect blocca i selfbot e i raid: ogni nuovo membro deve dimostrare di essere umano prima di accedere al tuo server Discord."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import CaptchaMockup from '@site/src/components/DiscordMessage/mockups/captcha';

{/* <CaptchaMockup /> : obsolète en 3.5.0 (montre le mode Challenge avec expulsion automatique) */}

Il **captcha** di RaidProtect chiede a ogni nuovo membro di ricopiare un codice prima di accedere al tuo server Discord, il che blocca i [selfbot](/it/learn/self-bot) e i [raid](/it/learn/discord-raid) filtrando gli account che non sono umani.

È una delle funzionalità più popolari di RaidProtect, e resta del tutto facoltativa. Scegli tu quando imporlo: a ogni arrivo, solo durante un raid, o anche per gli account sospetti.

## ❓ Funzionamento del captcha {#working}

Il captcha si basa su un ruolo **@Non verificato** e un canale **#verifica**. Quando un utente si unisce al tuo server:
- **Messa in attesa:** gli diamo il ruolo **@Non verificato**, che limita il suo accesso al solo canale **#verifica**.
- **Prova:** in modalità Pannello, risolve un puzzle nell'[Activity RaidProtect](#activity). In modalità Sfida, ricopia un codice mostrato su un'immagine. Vedi le [modalità di visualizzazione](#display-mode).
- **Superata:** il ruolo **@Non verificato** viene rimosso e il membro accede al server. I suoi [ruoli automatici](./onboarding.md#autorole) e il [messaggio di benvenuto](./onboarding.md#welcome-message) partono in quel momento.
- **Fallita:** quando esaurisce i tentativi, viene espulso, messo in jail o bloccato per qualche minuto prima di poter riprovare, secondo la tua impostazione. Può tornare e ritentare il captcha dopo un'espulsione.
- **Log:** ogni arrivo viene registrato nel canale dei log con la data di creazione dell'account, così come i successi, i fallimenti e i tempi scaduti.
- **Diagnosi:** RaidProtect individua da solo i problemi di permessi, di visibilità del canale nel [Processo di benvenuto](../guides/onboarding.md) di Discord e le falle del ruolo **@Non verificato**, e propone di correggerli.

:::info
**Nessuna espulsione per impostazione predefinita.** Un captcha nuovo non espelle più i membri che non lo risolvono: restano sul server, senza accesso, fino alla loro verifica. Puoi impostare un [ritardo prima dell'espulsione](#timeout).
:::
:::warning
**Gestione dei permessi:** i permessi del ruolo **@Non verificato** sono configurati automaticamente da RaidProtect. Puoi rinominare il ruolo e il canale, ma non eliminarli. RaidProtect ha bisogno dei permessi `KICK_MEMBERS` e `MANAGE_ROLES`, e deve essere posizionato sopra il ruolo **@Non verificato**.
:::

### Modalità di visualizzazione {#display-mode}

| Modalità | Cosa vede il nuovo membro |
|---|---|
| **Pannello (Interattivo)**, predefinita | Un messaggio permanente “**Sistema di verifica**” con un pulsante “**Verifica**”, che apre l'[Activity RaidProtect](#activity). Il membro non può scrivere in **#verifica**. |
| **Sfida (Classica)** | Un'immagine viene pubblicata in **#verifica** al suo arrivo, e lui digita il codice in un messaggio nel canale. |

La modalità Pannello mantiene il canale pulito e permette impostazioni aggiuntive: scelta della sanzione quando i tentativi sono esauriti, [captcha congelato durante un raid](./raid-mode.md#action), [trattenere all'ingresso gli account troppo recenti](./onboarding.md#minage). La modalità Sfida espelle sempre il membro allo scadere del tempo concesso o quando i suoi tentativi sono esauriti.

### Attivazione {#trigger}

| Attivazione | Quando si applica il captcha |
|---|---|
| **Permanente**, predefinita | A ogni arrivo, senza condizioni. |
| **Automatica** | Solo durante un raid o un livello DISCON elevato. Gli altri nuovi arrivati entrano direttamente. |
| **Intelligente** <span className="badge-experiment">Sperimentazione</span> | Come Automatica, più gli account che sembrano sospetti. |

Con **Automatica**, il captcha si impone durante un raid solo se l'[Auto RaidMode](./raid-mode.md#action) è impostato su “**Mandare al captcha**” o “**Captcha congelato durante il raid**”, e durante un'allerta [DISCON](./discon.md) a partire dal livello 3 (in sperimentazione con la Shield Update).

L'attivazione **Intelligente** valuta il profilo di ogni nuovo arrivato. Un membro approvato a mano dal tuo team non è mai considerato sospetto.

:::info Sperimentazione: Shield Update
L'attivazione Intelligente fa parte della **Shield Update**, prevista per la versione 3.6.0. In attesa della sua uscita, è in sperimentazione, in beta pubblica per i server [Premium](/it/premium). Senza la sperimentazione, non viene proposta.
:::

## 🚪 Come configurare il captcha? {#config}

L'attivazione del captcha è semplice e rapida.

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Arrivi**”.
3. Clicca su “**Configurare**” accanto a “**Captcha**”.
4. Scegli il canale in cui verranno svolti i captcha, oppure usa il pulsante “**Crearne uno per me**”.
5. Clicca su “**Attivare**”. Il ruolo **@Non verificato** viene creato e i suoi permessi vengono impostati in tutti i canali.

Il captcha parte in modalità **Pannello (Interattivo)**, con attivazione **Permanente**, con 3 tentativi e senza ritardo prima dell'espulsione. Puoi poi regolare ogni impostazione dalla stessa schermata.

<Settings start="captcha" />

### Modalità di visualizzazione e attivazione {#mode}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Arrivi**”.
3. Clicca su “**Configurare**” accanto a “**Captcha**”.
4. In “**Modalità di visualizzazione**”, scegli “**Pannello (Interattivo)**” o “**Sfida (Classica)**”.
5. In “**Attivazione**”, scegli “**Permanente**”, “**Automatica**” o “**Intelligente**” (Shield Update).

### Verifica nell'Activity {#activity}

In modalità **Pannello**, il pulsante “**Verifica**” apre l'**Activity RaidProtect**: il membro risolve un piccolo puzzle direttamente in Discord, nei colori del tuo server e con i link dei canali del tuo [Processo di benvenuto](../guides/onboarding.md). Una volta verificato, vi scopre la sua [scheda di benvenuto](./onboarding.md#welcome-message).

- **Puzzle fallito:** come un codice sbagliato, consuma un tentativo, e la sanzione prevista scatta quando i tentativi sono esauriti. L'Activity comunica prima l'esito al membro, poi la sanzione viene applicata.
- **Successo:** il membro viene verificato quando lascia la schermata di successo. Se clicca su “**Verifica**” nel frattempo, la sua convalida si applica subito invece di rilanciare l'Activity.
- **Robot:** un captcha risolto da un automa viene sanzionato subito, come all'esaurimento dei tentativi: espulsione, jail o blocco secondo la tua impostazione.
- **Revisione da parte del tuo team:** in caso di dubbio, il membro resta bloccato all'ingresso, senza un tempo che scorre, e il tuo team riceve un rapporto automatico del captcha. Arriva nei [log del captcha](#logs), in mancanza nel canale delle [segnalazioni](./reports.md), in mancanza nei log del server. Una volta preso in carico, il rapporto propone “**Lascia entrare**”, “**Collega a un altro membro**” (con l'[Identity Update](#activity-alts)) e “**Rifiuta**”, che applica la tua azione di fallimento del captcha (espulsione, jail o blocco): il menu delle sanzioni non compare.
- **Jail dopo tentativi esauriti:** questo jail non ha durata e apre anche un rapporto di revisione. “**Lascia entrare**” toglie il jail e convalida il membro; altrimenti sanzionalo.
- **Verifica del dispositivo rifiutata:** l'Activity chiede al membro il consenso prima di verificare il suo dispositivo. Se rifiuta, subisce l'azione di fallimento come dopo dei tentativi esauriti (espulsione, jail o blocco).
- **Activity che non si apre:** il membro può cliccare su “**Inserisci un codice**”. Un codice corretto passa allora in revisione dal tuo team.
- **Cancellazione dei dati:** un membro può chiedere la cancellazione dei suoi dati di verifica a [privacy@raidprotect.bot](mailto:privacy@raidprotect.bot). Rifà allora il captcha, e le sue sanzioni restano.

#### Doppi account individuati dal captcha <span className="badge-experiment">Sperimentazione</span> {#activity-alts}

Con l'[Identity Update](./alt-accounts.md), l'Activity individua anche i nuovi arrivati probabilmente gestiti dalla stessa persona di un membro del tuo server:

- **Collegamento sicuro:** gli account vengono collegati automaticamente in [`/alt`](./alt-accounts.md#alt). I log del captcha lo segnalano, con un pulsante “**Scollega**”.
- **Collegamento probabile:** se [Un solo account per persona](./alt-accounts.md#single-account) è attivo, il membro passa in revisione. “**Collega a un altro membro**” li collega in `/alt` e lo lascia entrare; se non è stato individuato nessun account, una finestra ti chiede di scegliere il membro (“**Account già sul server**”). Altrimenti il membro entra, e i log del captcha segnalano il collegamento probabile con un pulsante “**Collega gli account**”.
- **Collegamento sicuro non applicato:** nulla viene collegato automaticamente se un account del gruppo fa parte del team del server, se il nuovo arrivato è collegato a più gruppi `/alt`, o se i due account hanno già ciascuno il proprio gruppo (due gruppi non vengono mai uniti automaticamente). Il collegamento ti viene allora proposto allo stesso modo.

Ti vengono mostrati solo gli account del tuo server: non viene detto nulla degli altri server.

:::info Sperimentazione: Identity Update
L'individuazione dei doppi account fa parte dell'**Identity Update**, prevista per la versione 3.7.0. In attesa della sua uscita, è in sperimentazione, in beta pubblica per i server [Premium](/it/premium).
:::

### Modalità test {#test-mode}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Arrivi**”.
3. Clicca su “**Configurare**” accanto a “**Captcha**”.
4. Clicca su “**Attivare**” accanto a “**Modalità test**”.

In modalità Pannello, un membro del tuo team già verificato (permesso **Gestire il server**, oppure il proprietario) può allora cliccare su “**Verifica**” per rifare il captcha. I tentativi e il tempo di risoluzione si applicano come per un nuovo arrivato: il log del captcha dice cosa sarebbe stato fatto, nulla viene applicato.

### Difficoltà {#difficulty}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Arrivi**”.
3. Clicca su “**Configurare**” accanto a “**Captcha**”.
4. Clicca su “**Modifica**” accanto a “**Difficoltà**”.
5. Regola i campi della finestra, poi conferma.

<SettingsModal name="captchaDifficulty" />

| Impostazione | Valori | Predefinito |
|---|---|---|
| “**Tentativi**” | da 1 a 10 tentativi | 3 tentativi |
| “**Azione quando i tentativi sono esauriti**” (Pannello) | “**Tentativi esauriti: Espellere**”, “**Tentativi esauriti: Jail**” o “**Tentativi esauriti: Blocca 10 min**” | Espellere |
| “**Tempo di risoluzione**” (Pannello) | Disattivato, 15, 30 o 45 secondi, 1, 2, 3 o 5 minuti: il tempo concesso per risolvere il puzzle, conteggiato dalla prima prova (dopo l'accettazione del membro). Un codice in immagine mantiene almeno 2 minuti | 30 secondi |
| “**Tempo di risoluzione (prima dell'espulsione)**” (Sfida) | 3, 5, 10 o 15 minuti, o un valore da 30 secondi a 15 minuti: trascorso questo tempo, il membro viene espulso | 5 minuti |

:::info
La scelta “**Tentativi esauriti: Jail**” mette il membro in [jail](./sanctions.mdx#jail) invece di espellerlo. Serve per questo un Ruolo Jail configurato nella scheda “**Moderazione**” > “**Sanzioni**”. La scelta “**Tentativi esauriti: Blocca 10 min**” mantiene il membro sul server: attende 10 minuti, poi ricomincia con tentativi nuovi.
:::

### Ritardo prima dell'espulsione {#timeout}

In modalità Pannello, questo ritardo viene contato dall'arrivo del membro: se non è verificato in tempo, subisce la tua azione di fallimento (espulsione, jail o blocco).

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Arrivi**”.
3. Clicca su “**Configurare**” accanto a “**Captcha**”.
4. In “**Ritardo prima dell'espulsione**”, scegli “**Disattivato**”, 5, 15 o 30 minuti, oppure un “**Valore personalizzato**” da 30 secondi a 30 minuti.

:::warning
Con il ritardo disattivato, gli account non verificati restano sul server e possono scrivere nei MP ai tuoi membri. Imposta un ritardo, oppure chiudi i MP con la [Chiusura dei MP](./dm-lock.mdx).
:::

### Avvisi della schermata Captcha {#alerts}

La schermata del captcha mostra dei riquadri quando qualcosa impedisce alla verifica di funzionare bene:
- **Canale invisibile all'arrivo:** il canale di verifica non è in nessun canale predefinito del Processo di benvenuto Discord. Clicca su “**Sposta in** _categoria_” o “**Crea una nuova categoria**” perché lo correggiamo, oppure segui la [guida al Processo di benvenuto](../guides/onboarding.md).
- **Falle del ruolo @Non verificato:** ruoli assegnati dal Processo di benvenuto Discord insieme a **@Non verificato** aggirano la verifica, il ruolo **@Non verificato** porta dei permessi, **@everyone** ha il permesso `ADMINISTRATOR`, oppure dei canali restano visibili ai membri in verifica (o in jail). Il pulsante “**Correggi**” chiude i canali interessati.
- **Livello di verifica Alto:** questo livello Discord fa attendere 10 minuti prima di poter scrivere. Il captcha filtra già l'ingresso: il livello consigliato con il captcha è **Medio**.
- **Permessi mancanti:** RaidProtect ha bisogno di `KICK_MEMBERS` e `MANAGE_ROLES`.

Una volta risolto il problema, clicca su “**Aggiornare**”.

### Disattivare o eliminare il captcha {#disable}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Arrivi**”.
3. Clicca su “**Configurare**” accanto a “**Captcha**”.
4. In “**Modalità di visualizzazione**”, scegli:
   - “**Disattivato**” per sospendere la verifica senza perdere nulla della tua configurazione;
   - “**Elimina**” per cancellare la configurazione e il ruolo di verifica. RaidProtect ti chiede una conferma.

:::tip
Perché il captcha sia discreto fuori dai raid, imposta piuttosto la sua [attivazione](#trigger) su **Automatica** anziché disattivarlo.
:::

## ✨ Funzionalità aggiuntive {#additional-features}

### Log separati {#logs}

Se il tuo server è popolare, i log legati al captcha possono ingombrare il tuo canale di log principale. Puoi spostarli in un altro canale.

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Arrivi**”.
3. Clicca su “**Configurare**” accanto a “**Captcha**”.
4. Clicca su “**Modifica**” accanto a “**Log**”.
5. Scegli il canale in cui verranno inviati i log del captcha.

Ritrovi questa impostazione anche nella scheda “**Moderazione**” > “**Log**”, alla riga “**Captcha**”.

### Ruolo automatico {#autorole}

Il ruolo automatico non si regola più nel captcha: è passato ai [Ruoli automatici](./onboarding.md#autorole) della scheda “**Arrivi**”, che accettano più ruoli. La tua vecchia impostazione vi è stata ripresa automaticamente. Quando il captcha è attivo, questi ruoli vengono assegnati dopo il superamento del captcha.

### Bypass del captcha {#bypass}

Usa il comando: ```/bypass captcha [utente]```

Sostituisci `[utente]` con l'[ID](../guides/id.mdx) desiderato: avrà 10 minuti per unirsi al server senza dover risolvere il captcha. Se l'utente è già presente, il captcha verrà risolto automaticamente. Puoi anche usare il comando senza specificare un utente per conoscere l'elenco attuale degli utenti in bypass.

## 🤝 Captcha e anti-raid, meglio insieme {#raid}

Il captcha lavora con le altre protezioni degli arrivi:
- **[Auto RaidMode](./raid-mode.md#action):** con l'azione “**Mandare al captcha**”, i nuovi arrivati di un'ondata passano il captcha invece di essere espulsi. Con “**Captcha congelato durante il raid**”, aspettano dietro il captcha e lo superano dopo l'ondata.
- **[Età minima dell'account](./onboarding.md#minage):** l'azione “**Trattenere all'ingresso**” blocca un account troppo recente su un captcha che potrà risolvere solo una volta raggiunta l'età.
- **[DISCON](./discon.md#captcha):** dal livello 4, il captcha viene attivato se è configurato, anche se lo avevi disattivato. A partire dal livello 3, si impone a tutti i nuovi arrivati, qualunque sia la sua attivazione (in sperimentazione con la Shield Update).

## Domande frequenti {#faq}

### Quanto tempo si ha per risolvere il captcha?

In modalità Pannello, il membro ha 3 tentativi per impostazione predefinita (da 1 a 10) e 30 secondi per risolvere il puzzle (disattivabile, fino a 5 minuti), conteggiati dalla prima prova. Nessun ritardo di espulsione viene applicato per impostazione predefinita, ma puoi impostarne uno fino a 30 minuti. In modalità Sfida, ha 5 minuti per impostazione predefinita (da 30 secondi a 15 minuti) prima di essere espulso.

### Cosa succede se un membro fallisce il captcha?

Quando esaurisce i tentativi, viene espulso dal server o, in modalità Pannello, messo in jail o bloccato per 10 minuti prima di poter riprovare se lo hai scelto. Dopo un'espulsione, può tornare e ritentare il captcha.

### I membri non verificati vengono espulsi automaticamente?

Non su un captcha nuovo: in modalità Pannello, il ritardo prima dell'espulsione è disattivato per impostazione predefinita. I membri non verificati restano sul server senza accesso ai canali. Imposta un ritardo prima dell'espulsione, oppure chiudi i MP del server, per evitare che scrivano in privato ai tuoi membri.

### Si può attivare il captcha solo durante un raid?

Sì. Imposta la sua attivazione su **Automatica** e l'azione dell'Auto RaidMode su “**Mandare al captcha**” o “**Captcha congelato durante il raid**”. Il resto del tempo, chi arriva entra direttamente.

### Serve attivare la community Discord per usare il captcha?

No, il captcha funziona senza la community. Se è attivata, verifica che il canale di verifica faccia parte dei canali predefiniti del [Processo di benvenuto](../guides/onboarding.md).

### Si può esentare un membro dal captcha?

Sì, con il comando `/bypass captcha [utente]`. Il membro ha 10 minuti per unirsi senza risolvere il captcha, e se è già presente, il captcha viene risolto automaticamente.

### Si può rinominare il ruolo @Non verificato e il canale #verifica?

Sì, puoi rinominarli liberamente. Non eliminarli, perché RaidProtect ne ha bisogno per far funzionare il captcha e ne configura automaticamente i permessi.
