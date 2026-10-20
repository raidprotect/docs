---
title: DISCON
description: "Il DISCON di RaidProtect regola il livello di pericolo del tuo server Discord con un clic: 5 livelli che irrigidiscono le protezioni durante un raid."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

Il **DISCON** è il livello di pericolo del tuo server, sul modello del DEFCON. Durante un [raid](/it/learn/discord-raid), il tuo team non deve più aprire `/settings` per cambiare la verifica Discord, attivare il captcha e chiudere i MP uno per uno: un clic sul pannello DISCON, e applichiamo in un colpo solo tutte le protezioni del livello scelto. Un secondo clic, e disfiamo ciò che avevamo attivato.

## ❓ Come funziona? {#working}

- **Cinque livelli**: dal livello 5 (calma) al livello 1 (catastrofe). Più il livello è basso, più la protezione è rigida.
- **Un pannello per il team**: un messaggio pubblicato in un canale riservato allo staff, con un pulsante per livello. Un clic basta per cambiare livello.
- **Effetti calcolati per il tuo server**: ciò che fa un livello dipende dalla tua configurazione (captcha configurato o meno, modalità Community, azione dell'Auto RaidMode). La scala mostrata nella configurazione e sul pannello descrive esattamente cosa succederà da te.
- **Un ritorno pulito**: quando scende, disattiviamo solo ciò che il DISCON stesso ha attivato. Un captcha, una Chiusura dei MP o una modalità raid che avevi attivato a mano restano al loro posto.
- **Un cambio manuale**: il livello non cambia mai da solo, è il tuo team a decidere.

:::info Sperimentazione: Shield Update
Il DISCON fa parte della **Shield Update**, prevista per la versione 3.6.0. In attesa della sua uscita, è in sperimentazione, in beta pubblica per i server [Premium](/it/premium). Il [canale vocale di stato](#voice) richiede il Premium.
:::

## 🚦 I cinque livelli {#levels}

| Livello | Nome | Cosa applichiamo |
|---|---|---|
| 🔵 **DISCON 5** | Tutto tranquillo | Verifica Discord media, nient'altro. È il livello predefinito. |
| 🟢 **DISCON 4** | Vigilanza | [Captcha](./captcha.md) attivato se è configurato (canale e ruolo). Senza captcha, verifica Discord alta al suo posto. |
| 🟡 **DISCON 3** | Allerta | Verifica Discord massima, captcha attivato se è configurato, [Chiusura dei MP](./dm-lock.mdx). Il captcha si applica a **tutti** i nuovi arrivati. |
| 🔴 **DISCON 2** | Critico | Tutto il livello 3, più il **captcha congelato**: nessuno entra. Senza captcha, attiviamo al suo posto la [modalità raid](./raid-mode.md). |
| ⚪ **DISCON 1** | Catastrofe | Tutto il livello 2, più il **blocco**: @everyone non può più scrivere, reagire, parlare in vocale né usare comandi. |

### Verifica Discord {#verification}

Ogni livello fissa il livello di verifica Discord del tuo server: media ai livelli 5 e 4 (alta al livello 4 se il captcha non è configurato), massima dal livello 3 al livello 1.

### Captcha all'ingresso e captcha congelato {#captcha}

- **Livello 4**: attiviamo il captcha se è configurato, anche se lo avevi disattivato, senza toccare il suo canale né il suo ruolo. Segue allora la tua impostazione di [attivazione](./captcha.md#trigger): in **Automatica**, non si impone ancora a nessuno al di fuori di un raid.
- **Livello 3**: il captcha si impone a tutti i nuovi arrivati, qualunque sia la sua attivazione (vedi [priorità sui trigger](#priority)).
- **Livelli 2 e 1**: portiamo il captcha in modalità **Pannello** e lo **congeliamo**. I nuovi arrivati ricevono il ruolo di verifica e aspettano dietro la porta: non possono risolvere la prova finché il livello regge. Una volta risalito il livello, superano il captcha normalmente, senza dover entrare di nuovo. Quando scende, restituiamo al captcha la modalità di visualizzazione che aveva prima.

### Chiusura dei MP {#dm-lock}

A partire dal livello 3, attiviamo la [Chiusura dei MP](./dm-lock.mdx): è dai MP che passano le truffe quando il server si chiude. Richiede la [modalità Community](../guides/community.md) e il permesso “**Gestire il server**” per RaidProtect. Senza questi prerequisiti, il livello si applica comunque e un avviso ti indica che il blocco dei MP non ha potuto essere attivato.

### Blocco del livello 1 {#lockdown}

Al livello 1, togliamo al ruolo **@everyone** i permessi di espressione: inviare messaggi (anche nei thread), aggiungere reazioni, creare thread, inviare messaggi vocali, allegare file, parlare in vocale e usare i comandi dell'applicazione. Vengono ripristinati identici quando scende.

## 🧩 Prerequisiti dei livelli 2 e 1 {#requirements}

Perché i livelli 2 e 1 trattengano davvero i nuovi arrivati all'ingresso, una di queste due condizioni deve essere soddisfatta:

- **Un captcha configurato** (canale e ruolo di verifica): è la soluzione consigliata. Il captcha congelato trattiene tutti, poi lascia entrare i membri legittimi una volta tornata la calma. [Configura il captcha](./captcha.md#config).
- **Altrimenti, l'azione dell'Auto RaidMode su “Espellere chi arriva”**: senza captcha, attiviamo la modalità raid, ed è la sua azione a decidere la sorte dei nuovi arrivati. Con l'azione “**Bloccare gli inviti**” (impostazione predefinita), la modalità raid aperta dal DISCON non espelle nessuno. Impostala nella [configurazione dell'Auto RaidMode](./raid-mode.md#config).

Il blocco del livello 1 richiede anche che RaidProtect possa modificare il ruolo @everyone (permesso “**Gestire i ruoli**”). Se non ci riesce, un avviso te lo segnala.

## 🔓 Cosa il livello 1 non blocca {#lockdown-leaks}

Il blocco riguarda solo il ruolo **@everyone**. Un membro mantiene quindi la parola se un'altra fonte gliela dà:

- **Un ruolo ottenuto senza moderatore** che porta lui stesso questi permessi: ruoli delle domande del Processo di benvenuto di Discord, [ruoli automatici](./onboarding.md#autorole) di RaidProtect.
- **Un permesso di canale** concesso per uno di questi ruoli.
- **Un permesso @everyone concesso su un canale** (per esempio “Inviare messaggi” consentito in `#generale`).

La configurazione DISCON ti elenca questi accessi in un riquadro arancione. Per neutralizzarli, togli questi permessi ai ruoli interessati e lasciali a @everyone a livello di server: il permesso del server basta, il permesso sul canale diventa inutile.

:::tip
I ruoli del tuo team possono mantenere i propri permessi di canale: è ciò che permette loro di continuare a moderare durante il blocco.
:::

## ⚖️ Priorità sui trigger automatici {#priority}

Il [captcha](./captcha.md#trigger) ha un'impostazione di attivazione (Automatica, Intelligente, Permanente). A partire dal **livello 3**, il DISCON passa davanti a questa impostazione: il captcha si applica a **tutti** i nuovi arrivati, senza valutazione caso per caso. Il DISCON è una decisione del tuo team, un trigger automatico non la discute.

Per questo, il captcha deve essere [configurato](./captcha.md#config), con il suo canale e il suo ruolo. Se è semplicemente disattivato, lo attiviamo per la durata dell'allerta. Se non è mai stato configurato, il DISCON non può imporlo: la verifica Discord viene rafforzata e, ai livelli 2 e 1, la [modalità raid](./raid-mode.md) prende il testimone.

## 🛠️ Configurazione del DISCON {#config}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Protezione**”.
3. Clicca su “**Configurare**” accanto a “**DISCON**”.
4. Scegli il canale del pannello nel selettore, oppure clicca su “**Creare il canale del pannello**”.
5. Facoltativamente ([Premium](/it/premium)), scegli un canale vocale di stato, oppure clicca su “**Creare il canale di stato**”.

Sotto la configurazione, ritrovi il livello attuale, i cinque pulsanti di livello e la **scala dei livelli**, che descrive cosa farà ogni livello sul tuo server.

<Settings start="discon" />

### Canale del pannello {#panel-channel}

I pulsanti del pannello non richiedono alcun permesso: **è l'accesso al canale a fare da controllo**. Scegli quindi un canale riservato al tuo team.

- Un canale visibile a tutto il server viene rifiutato: qualsiasi membro potrebbe cambiarvi il livello.
- “**Creare il canale del pannello**” crea un canale `#discon` invisibile a @everyone. Aprilo poi ai ruoli del tuo team.

### Canale vocale di stato <span className="badge-premium">Premium</span> {#voice}

Un canale vocale il cui nome mostra il livello in corso, visibile a colpo d'occhio nell'elenco dei canali: `🔵 DISCON 5`, `🟢 DISCON 4`, `🟡 DISCON 3`, `🔴 DISCON 2`, `⚪ DISCON 1`. Nessuno può connettersi. “**Creare il canale di stato**” lo crea accanto al canale del pannello, con gli stessi permessi.

:::info
Discord limita la ridenominazione di un canale a circa 2 volte ogni 10 minuti. Se cambi livello più in fretta, il nome del canale vocale può restare indietro: il pannello resta il riferimento.
:::

## 📟 Il pannello DISCON {#panel}

Il pannello è un messaggio pubblicato nel canale scelto. Mostra il livello attuale, la legenda dei cinque livelli con i loro effetti sul tuo server, e cinque pulsanti di livello. Il suo colore segue il livello in corso.

Per cambiare livello, clicca semplicemente sul pulsante corrispondente. Se il livello può essere applicato solo in parte (captcha non configurato, modalità Community assente, permesso mancante), un avviso effimero te lo indica.

Il pannello DISCON è anche lo [slot riservato di `/display staff`](./display.mdx#staff): puoi aggiungervi dei blocchi da `/display staff`, ma il suo canale si regola solo dalla configurazione DISCON.

## 📑 Log del DISCON {#logs}

Ogni cambio di livello viene registrato nei tuoi [log del server](./moderation.mdx#logs), con il membro che l'ha fatto:

- “Il **livello di pericolo** è stato alzato da 5 a 3 da @Moderatore.”
- “Il **livello di pericolo** è stato abbassato da 3 a 5 da @Moderatore.”

## Domande frequenti {#faq}

### Chi può cambiare il livello DISCON?

Chiunque veda il canale del pannello. I pulsanti non verificano alcun permesso: è il canale, riservato al team, a fare da filtro. Gli amministratori possono anche cambiare livello da `/settings`.

### Il livello DISCON cambia automaticamente durante un raid?

No. Il DISCON è sempre guidato dal tuo team. L'[Auto RaidMode](./raid-mode.md) resta la protezione automatica contro le ondate di arrivi.

### Cosa succede quando si scende al livello 5?

Rimettiamo la verifica media e disfiamo ciò che il DISCON aveva attivato: captcha, modalità del captcha, Chiusura dei MP, modalità raid e blocco. Ciò che avevi attivato tu stesso prima di salire resta al suo posto.

### Il livello 2 funziona senza captcha?

Sì, ma attiva allora la modalità raid, che espelle i nuovi arrivati solo se l'azione dell'Auto RaidMode è “Espellere chi arriva”. Perché il livello 2 trattenga tutti, configura il captcha.

### Perché alcuni membri possono ancora scrivere al livello 1?

Il blocco toglie la parola solo al ruolo @everyone. Un ruolo di arrivo o un permesso di canale che dà il permesso di scrivere lo rende comunque possibile. La configurazione DISCON elenca questi accessi perché tu possa toglierli.

### Il canale vocale di stato è obbligatorio?

No, è facoltativo e riservato al Premium. Il pannello basta per guidare e mostrare il livello.
