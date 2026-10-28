---
title: HoneyPot
description: "L'HoneyPot di RaidProtect è un canale trappola antispam che individua e sanziona automaticamente gli account hackerati e i robot di spam sul tuo server Discord."
---

import HoneypotMockup from '@site/src/components/DiscordMessage/mockups/honeypot';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

<HoneypotMockup />

L'**HoneyPot** (o canale trappola) di RaidProtect è una funzionalità antispam: un canale dove **[nessuno deve scrivere](/it/learn/honeypot-warming)**. Poiché i veri membri sanno che bisogna evitare questo canale, gli unici che vi scrivono sono gli **[account hackerati](/it/learn/token-grabber)** o i robot di spam: RaidProtect li sanziona automaticamente.

:::info
**Hai già ScamLens per impostazione predefinita.** L'anti-truffa [ScamLens](./scam-images.md) è attivo sul tuo server senza alcuna configurazione: specializzato nelle **immagini di truffa**, le rileva, le elimina e sanziona l'account compromesso con un'affidabilità molto alta. Per le truffe tramite immagini, ScamLens basta quindi ampiamente. L'HoneyPot è soprattutto utile se vuoi una sicurezza massima e bloccare gli **altri tipi di spam**: spam di link, raid testuali, robot.
:::

## ❓ Come funziona? {#working}

Quando attivi l'HoneyPot, RaidProtect crea un canale testuale **in cima al tuo server**, con un nome chiaro estratto a caso. Questo canale ha tre caratteristiche:
- **Tutti possono scriverci**, compresi i membri che non hanno ancora superato il captcha e quelli che hanno il [ruolo Jail](./sanctions.mdx#jail). È voluto: un account hackerato o un robot non deve poter evitare la trappola.
- **Un messaggio di avviso** (“NON INVIARE ALCUN MESSAGGIO QUI”) viene pubblicato alla creazione del canale, con un pulsante “**Translate**” perché ciascuno possa leggerlo nella propria lingua.
- **Un contatore di account segnalati** compare sotto forma di pulsante accanto a “**Translate**” fin dal primo account catturato.

Non appena un membro scrive in questo canale:
- RaidProtect applica la **sanzione che hai scelto** (bando, softban, kick, timeout, jail o mute), senza inviargli un messaggio privato.
- I **messaggi inviati da questo membro negli ultimi 10 minuti** vengono eliminati su tutto il server, per fermare lo spam se si è già diffuso in altri canali.
- L'azione viene aggiunta ai log di moderazione automatica (motivo: *Spam tramite account utente compromesso*).

Se hai scelto un [ritardo prima della sanzione](#grace), il membro ha prima la possibilità di dire che era un errore.

## 🛠️ Configurare l'HoneyPot {#config}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Protezione**”.
3. Clicca su “**Configurare**” accanto a “**HoneyPot**”.
4. Clicca su “**Attivare**” in alto a destra: RaidProtect crea il canale, imposta i permessi e pubblica il messaggio di avviso.

<Settings start="honeypot" />

Una volta creato il canale, puoi:
- **Rigenerare il canale** (pulsante accanto a “**Canale HoneyPot**”): elimina il vecchio canale e ne crea uno nuovo, con un nuovo nome. Utile se pensi che un membro abbia condiviso il nome del canale trappola per aiutare altri account a evitarlo.
- **Disattivare** (interruttore in alto a destra): elimina il canale e ferma la funzionalità.

:::warning Permessi richiesti
RaidProtect ha bisogno dei permessi `Gestire i canali` e `Bannare i membri`. Senza di essi, compare un riquadro di errore e i pulsanti restano disattivati.
:::

### Scegliere la sanzione {#sanction}

Per impostazione predefinita, l'HoneyPot applica un **Softban**. Sono disponibili diverse [sanzioni](/it/learn/discord-sanctions) nel selettore “**Sanzione applicata**”:

| Sanzione | Effetto | Disponibilità |
|---|---|---|
| **Bando** | Esclude il membro dal server ed elimina i suoi messaggi recenti. Temporaneo (1 giorno per impostazione predefinita). | Gratuita |
| **Softban** | Banna e poi sbanna: elimina i messaggi, ma il membro può tornare | Gratuita |
| **Espulsione (Kick)** | Esclude il membro, che può tornare liberamente | Premium |
| **Timeout** | Impedisce al membro di parlare per un tempo scelto (max 28 giorni) | Premium |
| **Jail** | Assegna il [ruolo Jail](./sanctions.mdx#jail) configurato sul tuo server | Premium |
| **Mute** | Assegna il [ruolo Mute](./sanctions.mdx#mute) configurato sul tuo server | Premium |

Per le sanzioni a durata (Bando, Timeout, Jail, Mute), scegli una durata nel selettore “**Durata**” (1 giorno per impostazione predefinita), oppure “**Valore personalizzato**” per inserire la tua (per esempio `5m`, `1h`, `2d`; minimo 1 minuto). Il selettore è disattivato per il Softban e l'Espulsione, che non hanno una durata.

I riferimenti del selettore seguono la sanzione:

| Sanzione | Riferimenti proposti |
|---|---|
| **Bando** | Permanente, 1 giorno, 7 giorni, 30 giorni |
| **Jail** | Permanente, 1 ora, 1 giorno, 7 giorni |
| **Mute** | 5 minuti, 1 ora, 1 giorno, 7 giorni |
| **Timeout** | 5 minuti, 1 ora, 1 giorno, 28 giorni |

Il Bando e il Jail possono essere **permanenti**: la sanzione non si revoca da sola. Cambiando sanzione, la durata scelta viene mantenuta se resta possibile (un permanente non passa a un Timeout o a un Mute, e un Timeout resta sotto i 28 giorni).

:::tip
Il **Softban** è un buon compromesso: ripulisce i messaggi ed espelle l'account hackerato, ma il legittimo proprietario può tornare una volta messo in sicurezza il suo account.
:::

:::info
Solo il **Bando** e il **Softban** permettono a Discord di eliminare nativamente i messaggi dell'account hackerato **ovunque sul server** in un colpo solo.  
Per le altre sanzioni (Kick, Timeout, Jail, Mute), RaidProtect elimina da sé i messaggi: sono riservate ai server [Premium](/it/premium).
:::

:::info
- Un **Jail** o un **Mute** senza ruolo configurato diventa un **Timeout**. Il selettore lo indica sotto la sanzione.
- Se il tuo server perde il Premium, una sanzione Premium torna automaticamente a **Softban** al prossimo scatto.
:::

### Ritardo prima della sanzione {#grace}

Un membro in buona fede può scrivere per errore nell'HoneyPot. Il **ritardo prima della sanzione** gli lascia il tempo di segnalarlo prima di essere sanzionato.

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Protezione**”.
3. Clicca su “**Configurare**” accanto a “**HoneyPot**”.
4. In “**Ritardo prima della sanzione**”, scegli “**Sanzione immediata**” (predefinito) oppure “**Chiedi prima, sanzione dopo**” 30 secondi, 1 minuto, 2 minuti o 5 minuti.

Con un ritardo:
- il messaggio viene **rimosso** e il membro viene **menzionato** nel canale trappola, con il pulsante “**Era un errore**”;
- solo questo membro può cliccare sul pulsante. Se clicca in tempo, nessuna sanzione viene applicata;
- senza clic prima della fine del ritardo, la sanzione scatta.

:::info
Un robot di spam pubblica in genere lo stesso testo ovunque. Un account che pubblica lo **stesso messaggio** altrove viene sanzionato **subito**, senza attendere.
:::

### Membri ignorati {#ignore}

Puoi scegliere **chi non viene sanzionato** in caso di messaggio nell'HoneyPot, nel selettore “**Membri ignorati**”:
- “**Nessuno (tranne i membri non moderabili)**” *(predefinito)*: tutti vengono sanzionati, anche lo staff. Solo i membri che il bot non può moderare (ruolo più alto di quello di RaidProtect) vengono automaticamente risparmiati.
- “**Staff (Admin / Gestire il server / Gestire i canali)**”: i membri con il permesso `Amministratore`, `Gestire il server` o `Gestire i canali` non vengono sanzionati.
- “**Membri ignorati dall'Antispam**”: RaidProtect riutilizza i ruoli e i membri ignorati dell'[Anti-spam](./anti-spam.mdx#ignore). Se questo elenco è vuoto, vengono ignorati i membri con il permesso `Amministratore`, `Gestire il server` o `Gestire i messaggi`.

:::info
In ogni caso, RaidProtect **non sanziona mai se stesso né gli altri bot**. I bot non fanno scattare l'HoneyPot.
:::

## ℹ️ Comando /honeypot {#command}

Il comando `/honeypot` apre direttamente la schermata di configurazione dell'HoneyPot, senza passare da `/settings`. Richiede il permesso `Gestire il server`.

Usa il comando: ```/honeypot```

## 🤝 HoneyPot e ScamLens, meglio insieme {#scamlens-combo}

RaidProtect integra già **[ScamLens](./scam-images.md)**, che analizza le immagini ed elimina quelle che sono truffe note (crypto, finti giveaway, false promo di casinò).

I due lavorano mano nella mano:
- **ScamLens passa per primo.** Se l'immagine pubblicata nell'HoneyPot è già nota, è ScamLens a eliminare il messaggio e a sanzionare l'account compromesso; la sanzione dell'HoneyPot non si applica in aggiunta.
- **L'HoneyPot prende il testimone** su tutto il resto: nuove immagini non ancora note, spam di link, menzioni di massa, raid testuali, robot.
- **Ogni nuova immagine catturata da un HoneyPot arricchisce ScamLens**, che potrà poi bloccarla su tutti i server protetti.
- **ScamLens segue il tuo HoneyPot**: finché non gli dai un'impostazione propria, applica la [sanzione e la durata](./scam-images.md#config) del tuo HoneyPot.

ScamLens è già attivo per impostazione predefinita sul tuo server. **Attivare l'HoneyPot non rompe nulla**: viene solo a completare ciò che esiste già, e aiuta RaidProtect a proteggere meglio tutta la community.

## Domande frequenti {#faq}

### L'HoneyPot è utile se ho già ScamLens?

Per le truffe tramite immagini, ScamLens basta ampiamente: è attivo per impostazione predefinita e le rileva, elimina e sanziona da solo. L'HoneyPot è soprattutto utile per bloccare gli altri tipi di spam, come lo spam di link, i raid testuali e i robot.

### Quale sanzione applica l'HoneyPot?

Per impostazione predefinita, un Softban. Puoi scegliere un'altra sanzione: Bando e Softban sono gratuiti, mentre Kick, Timeout, Jail e Mute sono riservati ai server Premium. Il Bando dell'HoneyPot dura 1 giorno per impostazione predefinita, una durata che puoi modificare.

### Un membro ha scritto per errore nell'HoneyPot, cosa fare?

Attiva il ritardo prima della sanzione: il messaggio viene rimosso, il membro viene menzionato e ha da 30 secondi a 5 minuti per cliccare su “Era un errore”. Se clicca in tempo, non viene sanzionato. Un account che ha pubblicato lo stesso messaggio altrove viene invece sanzionato subito.

### I membri dello staff vengono sanzionati se scrivono nell'HoneyPot?

Dipende dall'opzione “Membri ignorati”. Per impostazione predefinita, tutti vengono sanzionati, anche lo staff. RaidProtect non sanziona mai se stesso, e i bot non fanno mai scattare la trappola.

### Che fine fanno i messaggi di un account catturato dall'HoneyPot?

Oltre alla sanzione, i messaggi inviati da questo membro negli ultimi 10 minuti vengono eliminati su tutto il server, per fermare lo spam se si è già diffuso in altri canali.
