---
title: Arrivi e benvenuto
description: "Il benvenuto di RaidProtect dà il benvenuto ai nuovi membri del tuo server Discord, assegna loro i ruoli e filtra gli account troppo recenti."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

Il **benvenuto** di RaidProtect si occupa dei nuovi membri del tuo server Discord fin dal loro arrivo: un **messaggio di benvenuto** con una scheda a loro nome, dei **ruoli automatici**, e un'**età minima dell'account** che tiene lontani gli account creati per l'occasione, spesso usati durante i [raid](/it/learn/discord-raid). Queste tre impostazioni si trovano nella scheda “**Arrivi**” di `/settings`, accanto al [captcha](./captcha.md) e all'[Auto RaidMode](./raid-mode.md).

## ❓ Come funziona? {#working}

Quando un utente si unisce al tuo server, la [modalità raid](./raid-mode.md#action), l'[età minima dell'account](#minage) e poi il [captcha](./captcha.md) si applicano prima della sua ammissione. Una volta ammesso, riceve i suoi [ruoli automatici](#autorole) e il suo [messaggio di benvenuto](#welcome-message).

## 👋 Messaggio di benvenuto {#welcome-message}

Il messaggio di benvenuto viene inviato nel canale che preferisci quando un membro viene ammesso sul server. Contiene il tuo testo e una **scheda di benvenuto** generata per ogni membro: il suo avatar, “Benvenuto su” seguito dal nome del server, e il suo numero di membro.

<Settings start="welcome" />

### Attivare il messaggio di benvenuto {#welcome-config}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Arrivi**”.
3. Clicca su “**Configurare**” accanto a “**Messaggio di benvenuto**”.
4. In “**Canale di benvenuto**”, scegli il canale testuale in cui verrà inviato il messaggio. Scegliere un canale attiva il messaggio.

L'interruttore in alto a destra della schermata attiva o disattiva il messaggio di benvenuto. Un'anteprima del messaggio viene mostrata sotto la schermata e si aggiorna a ogni modifica.

:::info
Il canale di benvenuto non può essere quello del captcha, del jail, dell'HoneyPot o del DISCON. Se il canale viene eliminato, l'impostazione viene svuotata.
:::

### Testo e variabili {#welcome-text}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Arrivi**”.
3. Clicca su “**Configurare**” accanto a “**Messaggio di benvenuto**”.
4. In “**Contenuto del messaggio**”, clicca su “**Testo**”.
5. Scrivi il tuo messaggio (1 200 caratteri al massimo), poi conferma. Lascia vuoto il campo per tornare al messaggio predefinito.

<SettingsModal name="welcomeText" />

Il testo predefinito è “Benvenuto `{user.mention}` su **`{server.name}`**! 🎉”, nella lingua del server. Puoi usare queste variabili:

| Variabile | Sostituita da |
|---|---|
| `{user.mention}` | La menzione del membro |
| `{user.name}` | Il suo nome utente |
| `{user.displayname}` | Il suo nome visualizzato |
| `{user.id}` | Il suo [ID](../guides/id.mdx) |
| `{server.name}` | Il nome del server |
| `{server.member_count}` | Il numero di membri del server |
| `{server.id}` | L'ID del server |

### Menzionare il membro {#welcome-mention}

L'opzione “**Menziona il membro**”, attivata per impostazione predefinita, notifica il nuovo membro quando il suo messaggio di benvenuto viene pubblicato. Menziona solo chi arriva, mai @everyone né i ruoli.

### Pulsanti {#welcome-buttons}

Puoi aggiungere sotto il messaggio dei pulsanti che portano a un canale del server, per esempio “Leggi il regolamento”.

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Arrivi**”.
3. Clicca su “**Configurare**” accanto a “**Messaggio di benvenuto**”.
4. In “**Gestisci i pulsanti**”, scegli “**Aggiungi pulsante**”.
5. Dai un nome al pulsante, scegli il canale da collegare e, se lo desideri, un'**emoji**: un'emoji standard, o un'emoji di questo server (`<:nome:id>`, `:nome:` o il suo ID). Un'emoji non valida non impedisce il salvataggio: il pulsante viene creato senza emoji.

Per modificare o eliminare un pulsante, selezionalo nella stessa lista.

**Limiti:** 2 pulsanti nella versione gratuita, 4 pulsanti nella versione [premium](/it/premium). Se il Premium scade, restano visualizzati solo i primi 2 pulsanti.

### Colore <span className="badge-premium">Premium</span> {#welcome-color}

Con il [Premium](/it/premium), clicca su “**Colore**” in “**Contenuto del messaggio**” per scegliere il colore della barra a sinistra del messaggio: un colore RaidProtect dell'elenco, o un codice esadecimale (per esempio `#D35F5F`). Senza scelta, il messaggio riprende il colore del soprannome del bot se l'hai [personalizzato](/it/premium), altrimenti il colore predefinito. La scheda di benvenuto è tinta dello stesso colore.

### Afflussi e raid {#welcome-raid}

- **Raggruppamento:** quando molti membri arrivano contemporaneamente, gli arrivi vengono raggruppati per non inondare il canale.
- **Pausa durante un raid:** finché la [modalità raid](./raid-mode.md) di RaidProtect o il [Join Lock](./join-lock.mdx) è attivo, nessun messaggio di benvenuto viene inviato.

## 🏷️ Ruoli automatici {#autorole}

I ruoli automatici vengono assegnati a ogni nuovo membro fin dal suo arrivo, o dopo il superamento del [captcha](./captcha.md) se è attivo. Sostituiscono il vecchio ruolo automatico del captcha, la cui impostazione è stata ripresa automaticamente.

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Arrivi**”.
3. Clicca su “**Configurare**” accanto a “**Ruoli automatici**”.
4. Seleziona uno o più ruoli.

Per togliere tutti i ruoli automatici, clicca su “**Reimpostare**”.

<Settings start="autorole" />

**Limiti:** 3 ruoli nella versione gratuita, 10 ruoli nella versione [premium](/it/premium).

:::warning
Scegli ruoli senza permessi: un ruolo assegnato all'arrivo non dovrebbe concedere alcun potere. RaidProtect rifiuta i ruoli gestiti da un'integrazione, quelli sopra il suo o il tuo, quelli che danno un permesso di moderazione e il ruolo non verificato del captcha. Ti avvisa se un ruolo scelto acquisisce permessi più tardi.
:::
:::info
Se il tuo server usa un altro bot per il suo ruolo automatico, rischia di assegnare il ruolo prima del captcha. Sostituiscilo con i ruoli automatici di RaidProtect.
:::

## 🤖 Arrivo dei bot {#bots}

È l'**antibot** di RaidProtect: controlla i bot che entrano nel tuo server.

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Arrivi**”.
3. Clicca su “**Configurare**” accanto a “**Bot**”.

- **Ruoli dei bot**: assegnati a ogni bot appena arriva, **al posto** dei [ruoli automatici](#autorole). Senza un ruolo scelto, i bot ricevono i ruoli automatici. **Limiti:** 1 ruolo nella versione gratuita, 15 con il [Premium](/it/premium).
- **Espellere i bot non autorizzati**: ogni bot aggiunto viene espulso, a meno che il proprietario non lo abbia [autorizzato](#bypass-bot) prima. Disattivato per impostazione predefinita, **solo il proprietario del server** può attivarlo.

RaidProtect rifiuta i ruoli gestiti da un'integrazione, quelli sopra il suo o il tuo e quelli che danno il permesso **Amministratore**. Un ruolo con un permesso di moderazione viene accettato, con un avviso: riservalo ai bot di fiducia.

### Autorizzare un bot {#bypass-bot}

Usa il comando: ```/bypass bot [bot]```

Sostituisci `[bot]` con il bot da autorizzare: potrà unirsi al server **una volta**, entro i 10 minuti successivi, senza essere espulso. Senza bot, il comando elenca i bot attualmente autorizzati. Ogni autorizzazione viene registrata nei tuoi log.

:::info
RaidProtect ha bisogno del permesso “**Espellere i membri**” e di un ruolo sopra quello del bot per espellerlo. Altrimenti, il log lo indica e il bot resta.
:::

## 🎂 Età minima dell'account {#minage}

Per rafforzare la sicurezza, puoi esigere un'età minima per gli account Discord dei nuovi membri. Gli account creati poco prima di un raid non passano la porta. Il filtro si applica a ogni arrivo.

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Arrivi**”.
3. Clicca su “**Configurare**” accanto a “**Età minima dell'account**”.
4. In “**Età minima dell'account**”, scegli 2 ore, 12 ore, 1 giorno o 2 giorni, oppure un “**Valore personalizzato**” (per esempio `0a 3g 1h`, 10 anni al massimo).
5. In “**Azione**”, scegli cosa succede agli account troppo recenti.

Per disattivare il filtro, clicca su “**Reimpostare**”. RaidProtect ha bisogno del permesso `KICK_MEMBERS`.

<Settings start="minage" />

### Azioni {#minage-action}

| Azione | Effetto su un account troppo recente |
|---|---|
| “**Espellere**” (predefinita) | Viene espulso a ogni tentativo finché il suo account è troppo recente. |
| “**Quarantena fino all'età richiesta**” | Entra senza vedere nulla del server (tramite il [ruolo Jail](./sanctions.mdx#jail)), ed esce dalla sua quarantena non appena ha l'età richiesta, alla data indicata. |
| “**Trattenere all'ingresso**” | Viene bloccato su un [captcha](./captcha.md) che può risolvere solo una volta raggiunta l'età. |

L'account riceve un messaggio privato con la data in cui avrà accesso al server. Le espulsioni, le quarantene e i bandi sono registrati nel canale dei log.

:::info
- “**Quarantena fino all'età richiesta**” richiede un Ruolo Jail, configurato nella scheda “**Moderazione**” > “**Sanzioni**”. Senza di esso, RaidProtect ti propone di configurarlo o di ripiegare su “**Bannare fino all'età richiesta**”: l'account esce dal server e il suo bando viene revocato automaticamente alla data giusta.
- “**Trattenere all'ingresso**” richiede un captcha attivo in modalità **Pannello (Interattivo)**.
:::

### 🎫 Bypass dell'età minima {#bypass-minage}

Usa il comando: ```/bypass minage [utente]```

Sostituisci `[utente]` con l'[ID](../guides/id.mdx) desiderato: avrà 10 minuti per unirsi al server senza essere bloccato dall'età richiesta. Puoi anche usare il comando senza specificare un utente per conoscere l'elenco attuale degli utenti in bypass. Revoca anche la quarantena di un account troppo recente. `/unjail` non la revoca: indica il comando da usare.

## Domande frequenti {#faq}

### Quando viene inviato il messaggio di benvenuto?

Quando il membro viene ammesso: fin dal suo arrivo se il captcha non si applica, altrimenti dopo il superamento del captcha. Non viene inviato durante un raid o un Join Lock.

### Si può togliere la scheda di benvenuto?

No, la scheda di benvenuto è allegata a ogni messaggio di benvenuto. Con il Premium, puoi cambiarne il colore.

### Quanti ruoli automatici si possono assegnare?

3 ruoli nella versione gratuita e 10 con il Premium. I ruoli che portano un permesso di moderazione vengono rifiutati.

### I ruoli automatici vengono assegnati prima del captcha?

No. Quando il captcha si applica al membro, i suoi ruoli automatici gli vengono assegnati dopo il superamento del captcha.

### Quale età minima scegliere?

Un valore da alcune ore a 1 giorno basta a scartare la maggior parte degli account creati per un raid, senza disturbare i veri membri. Il [comando `/setup`](../setup.md) imposta 6 ore per impostazione predefinita.

### Un account troppo recente viene bannato?

No, non per impostazione predefinita: viene espulso a ogni tentativo. Puoi anche metterlo in quarantena fino all'età richiesta o trattenerlo dietro il captcha. Il bando temporaneo è solo un ripiego quando il ruolo Jail non è configurato.
