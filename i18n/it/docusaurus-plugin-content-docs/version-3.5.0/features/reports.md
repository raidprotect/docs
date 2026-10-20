---
title: Segnalazioni
description: "Il sistema di segnalazione di RaidProtect permette alla tua community di far emergere contenuti e membri sospetti, con una gestione chiara per i tuoi moderatori."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import ReportsMockup from '@site/src/components/DiscordMessage/mockups/reports';

<ReportsMockup />

Il sistema di segnalazione di RaidProtect permette alla tua community di far arrivare in pochi clic ai tuoi moderatori qualsiasi messaggio o membro sospetto, tramite un clic destro, un pulsante dedicato o il comando `/report`. Si configura per ottimizzare la gestione delle segnalazioni da parte del tuo team.

## ❓ Come funzionano le segnalazioni? {#working}
I membri possono segnalare un contenuto con 4 metodi principali.

1. **Clic destro su un messaggio**
Un membro può fare clic destro su un messaggio che ritiene infranga il regolamento, selezionare **`App`**, poi cliccare su **`Segnala questo messaggio`**. Si apre una finestra, in cui precisa il motivo della segnalazione.

2. **Clic destro su un profilo**
Allo stesso modo, un membro può fare clic destro su un profilo che giudica problematico, scegliere **`App`**, poi cliccare su **`Segnala l'utente`**. Si apre allora una finestra che gli permette di precisare cosa segnala (immagine del profilo, nome utente, bio, attività in vocale, attività nei messaggi privati) e il motivo.

3. **Pulsante su un pannello informativo**
Se la funzionalità “**Segnalazione**” è attivata su un [pannello informativo (`/display public`)](./display.mdx), un pulsante “**Segnalare un membro**” è disponibile direttamente sotto il pannello, permettendo ai membri di segnalare rapidamente un utente.

4. **Slash Command**
I membri possono anche segnalare un utente tramite il comando **`/report`** in qualsiasi canale del server.

Usa il comando: ```/report (membro)```

Sostituisci `(membro)` con l'utente desiderato. Il motivo si inserisce poi in una finestra, come per il clic destro su un profilo.

:::info
Attivare le segnalazioni attiva anche la [memorizzazione dei messaggi](./moderation.mdx#snipe): RaidProtect tiene in memoria un'ora di messaggi per allegare il contenuto segnalato all'avviso.
:::

## 🚩 Configurazione delle segnalazioni {#config}

Le segnalazioni arrivano in un **canale di segnalazione**. Se non ne scegli uno, vengono inviate nel tuo canale di log generale. Tutte le impostazioni si trovano in un'unica schermata:

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Moderazione**”.
3. Clicca su “**Configurare**” accanto a “**Segnalazioni**”.
4. Clicca su “**Attivare**” a destra del titolo della schermata per accendere il sistema di segnalazione.

<Settings start="reports" />

### Configurare il canale {#config-channel}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Moderazione**”.
3. Clicca su “**Configurare**” accanto a “**Segnalazioni**”.
4. Clicca su “**Modifica**” accanto a “**Ricezione delle segnalazioni**”.
5. Nella finestra, seleziona il canale desiderato (_es.: #segnalazioni o #reports_), oppure spunta “**Crea un canale per me**” perché RaidProtect crei un canale privato `segnalazioni`.

Se non selezioni alcun canale, o il canale dei log, le segnalazioni seguono il tuo canale di log generale.

<SettingsModal name="reportChannel" />

### Configurare il ruolo di notifica {#config-role}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Moderazione**”.
3. Clicca su “**Configurare**” accanto a “**Segnalazioni**”.
4. Clicca su “**Modifica**” accanto a “**Ruolo di notifica**”.
5. Nella finestra, seleziona il ruolo desiderato (_es.: @Moderatore o @Notifiche report_), oppure spunta un'“**Altra menzione**”: `@everyone`, `@here` o “**Crea un ruolo per me**” (RaidProtect crea il ruolo `Nuova segnalazione`).

Senza ruolo configurato, viene menzionato `@here`.

<SettingsModal name="reportRole" />

:::warning
Il canale deve essere riservato ai moderatori e agli amministratori per garantire una corretta gestione delle segnalazioni.
:::

### Raggruppamento delle segnalazioni {#group}

L'interruttore “**Raggruppamento**” determina come vengono presentate più segnalazioni che riguardano lo stesso membro:

- **Attivato** *(predefinito)*: le segnalazioni che riguardano lo stesso membro vengono raggruppate in un unico avviso.
- **Disattivato**: ogni segnalazione crea il proprio avviso separato.

Clicca su “**Attivare**” o “**Disattivare**” accanto a “**Raggruppamento**” nella schermata Segnalazioni.

<a id="config-notify"></a>

### Notifica del segnalante {#notify}

Il pulsante “**Modifica**” accanto a “**Notifica del segnalante**” apre una finestra in cui scegli cosa riceve nei MP il membro all'origine della segnalazione una volta gestita:

| Livello | Effetto |
|---|---|
| **Disattivato** | I segnalanti non ricevono alcuna notifica. |
| **Solo trattamento** *(predefinito)* | Si indica al segnalante che la sua segnalazione è stata gestita. |
| **Con l'esito** | Si indica se la segnalazione è stata accettata o rifiutata. |
| **Con il moderatore** | Si indica anche quale moderatore ha gestito la segnalazione. |

Il segnalante riceve un solo messaggio per segnalazione, anche se è stata raggruppata con altre.

<SettingsModal name="reportNotify" />

<a id="config-trusted-role"></a>

### Ruolo di fiducia <span className="badge-premium">Premium</span> {#trusted-role}

Il “**Ruolo di fiducia**” permette ai tuoi membri più affidabili di agire immediatamente in caso di urgenza: quando un membro che dispone di questo ruolo effettua una segnalazione, può spuntare l'opzione “**Azione preventiva**” per applicare un **timeout preventivo di 24 ore** all'utente segnalato, in attesa che un moderatore gestisca la segnalazione.

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Moderazione**”.
3. Clicca su “**Configurare**” accanto a “**Segnalazioni**”.
4. Clicca su “**Modifica**” accanto a “**Ruolo di fiducia**”.
5. Nella finestra, seleziona il ruolo, oppure spunta “**Crea un ruolo per me**” (RaidProtect crea il ruolo `Segnalante di fiducia`). Lascia vuoto il campo per disattivare il ruolo di fiducia.

Funzionamento del timeout preventivo:

- Il timeout preventivo è **silenzioso**: l'utente segnalato non riceve un MP finché un moderatore non ha confermato la sanzione.
- Il suo motivo è “**Sanzione preventiva:**” seguito dal motivo della segnalazione.
- Se la segnalazione riguarda un messaggio, questo viene eliminato.
- L'avviso è contrassegnato come urgente: la menzione è preceduta da “**🛑 Segnalazione urgente**”.
- La sanzione è legata alla segnalazione: il moderatore che la gestisce può confermarla o annullarla.

:::info
Questa funzionalità è riservata ai server [**Premium**](/it/premium).
:::

### Reputazione dei segnalanti {#bad-reporters}

Il pulsante “**Modifica**” accanto a “**Falsi segnalanti**” apre la finestra “**Reputazione dei segnalanti**”, che permette di agire sui membri le cui segnalazioni vengono regolarmente rifiutate:

- **Soglia**: numero di segnalazioni rifiutate prima dell'azione (3, 5, 6, 10 o 15; “**Disattivato**” per impostazione predefinita).
- **Finestra**: periodo di calcolo (7, 14, 30, 60 o 90 giorni; 30 giorni per impostazione predefinita).
- **Azione** una volta raggiunta la soglia:
  - “**Notificare i moderatori**” *(predefinita)*: viene inviato un avviso con il pulsante “**Bloccare le segnalazioni**” e un pulsante di sanzione (es.: “**Avvertire il segnalante**”).
  - “**Bloccare automaticamente**”: il membro non può più inviare segnalazioni.
  - “**Sanzionare automaticamente**”: viene applicata la sanzione configurata.
  - “**Bloccare e sanzionare**”: combina le due azioni precedenti.
- **Sanzione**: la sanzione applicata al falso segnalante (Avvertimento per impostazione predefinita, Timeout, Mute, Espulsione o Bando).

<SettingsModal name="reportBad" />

:::info
Senza [ruolo Mute](./sanctions.mdx#mute) configurato, la sanzione Mute ricade su un timeout.
:::

:::tip
Puoi anche bloccare manualmente un membro dalle segnalazioni in qualsiasi momento con il [comando `/block`](./utilities.mdx#block).
:::

## Gestire le segnalazioni {#manage}

Ogni segnalazione arriva nel canale configurato sotto forma di un avviso con diverse azioni:

- **🙋 Prendere in carico:** Clicca su “**Prendere in carico**” per indicare agli altri moderatori che ti occupi di questa segnalazione. Il pulsante diventa allora “**Preso in carico**”.

- **✅ Risolto:** Se la segnalazione è valida ma non è necessaria alcuna sanzione (situazione risolta in altro modo: richiamo all'ordine, messaggio eliminato dal suo autore…), clicca su “**Risolto**”. La segnalazione viene contrassegnata come accettata, senza sanzionare l'utente segnalato. Per sanzionare, usa piuttosto il menu “**Sanzionare questo membro…**” qui sotto.

- **❌ Rifiutare:** Se la segnalazione non è legittima, clicca su “**Rifiutare**”. I rifiuti vengono conteggiati per la [reputazione dei segnalanti](#bad-reporters).

- **⚖️ Sanzionare:** Il menu “**Sanzionare questo membro…**”, disponibile una volta presa in carico la segnalazione, permette di applicare direttamente una sanzione all'utente segnalato, senza lasciare il canale delle segnalazioni.

Quando il [raggruppamento](#group) è attivato, le segnalazioni successive che riguardano lo stesso membro si aggiungono all'avviso esistente (per esempio “**3 messaggi e 1 profilo segnalati da 2 utenti**”) invece di crearne uno nuovo.

:::note
Assicurati che i tuoi moderatori siano ben formati all'uso di questa funzionalità e incoraggia i tuoi membri attivi a usarla in modo responsabile!
:::

## Domande frequenti {#faq}

### Come segnalare un membro o un messaggio?

Un membro può fare clic destro su un messaggio o un profilo, scegliere “App” poi “Segnala questo messaggio” o “Segnala l'utente”. Può anche passare dal pulsante di un pannello informativo, o dal comando `/report (membro)` in qualsiasi canale: il motivo si inserisce poi in una finestra.

### Dove arrivano le segnalazioni?

Vengono inviate nel canale di segnalazione che configuri, o in mancanza nel tuo canale di log generale. Questo canale deve essere riservato ai moderatori e agli amministratori per garantire una gestione corretta delle segnalazioni.

### Quale ruolo viene menzionato a ogni segnalazione?

Il ruolo di notifica che configuri, o `@everyone`. Senza impostazione, RaidProtect menziona `@here`.

### Come limitare le false segnalazioni?

L'impostazione “Falsi segnalanti” agisce sui membri le cui segnalazioni vengono regolarmente rifiutate. Definisci una soglia e una finestra di calcolo, poi un'azione: notificare i moderatori, bloccare le segnalazioni, sanzionare, o entrambe. Puoi anche bloccare un membro manualmente con il [comando `/block`](./utilities.mdx#block).
