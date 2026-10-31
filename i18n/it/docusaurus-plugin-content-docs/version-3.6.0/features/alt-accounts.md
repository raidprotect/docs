---
title: Doppi account
description: "I doppi account di RaidProtect collegano gli account di una stessa persona sul tuo server Discord: bannarne uno banna gli altri, senza elusioni."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

I **doppi account** permettono al tuo team di dichiarare che più account Discord appartengono a una stessa persona. Le [sanzioni](./sanctions.mdx) di uno si estendono allora agli altri: un membro bannato non torna più con un secondo account per eludere la sua sanzione.

:::info Sperimentazione: Identity Update
I doppi account fanno parte dell'**Identity Update**, prevista per la versione 3.7.0. In attesa della sua uscita, sono in sperimentazione, in beta pubblica per i server [Premium](/it/premium).
:::

## ❓ Come funziona? {#working}

- **Un gruppo per persona**: un gruppo raccoglie gli account che il tuo team considera una stessa persona. I gruppi sono propri del tuo server: nulla viene condiviso con altri server.
- **Sanzioni condivise** ([Premium](/it/premium)): bando, espulsione, mute, imprigionamento e timeout si estendono agli altri account del gruppo, secondo la [modalità](#modes) che scegli per ogni sanzione. La sanzione resta a nome dell'account preso di mira, gli altri ne ricevono lo stato. Non si estende mai agli account che moderano il server (amministrazione, gestione del server, bando, espulsione o isolamento dei membri), al proprietario né ai bot. Senza Premium, gli account si collegano e si consultano, ma nessuna sanzione si estende: il log della sanzione cita allora gli altri account del membro.
- **Revoca comune**: revocare la sanzione di uno qualsiasi degli account la revoca per tutti, con o senza Premium.
- **Ricerca raggruppata**: [cercare le sanzioni](./sanctions.mdx#search) di un account mostra anche quelle degli altri account del gruppo.
- **AutoMod di Discord**: anche i timeout e i mute applicati dall'AutoMod di Discord si estendono agli account collegati.
- **Individuati dal captcha**: l'[Activity del captcha](./captcha.md#activity-alts) può collegare da sola due account certamente della stessa persona, oppure proporre il collegamento al tuo team. Si basa sul dispositivo, [mai sull'indirizzo IP](#ip).
- **Log**: i collegamenti, le rimozioni e i cambi di account principale sono registrati nei [log di moderazione](./moderation.mdx#logs). Il log di una sanzione cita gli account collegati con il loro nome utente e, nel formato embed, riporta un pulsante “**Account collegati**” che apre il pannello `/alt` del membro sanzionato.

**Limiti:** nessuno sul numero di account per gruppo né sul numero di gruppi. Una sanzione si estende a **10 account collegati** alla volta: i successivi vengono sanzionati al loro prossimo messaggio o al loro arrivo, e il pulsante sotto la sanzione li sanziona subito.

## 🔗 Collegare degli account con /alt {#alt}

Usa il comando: ```/alt [membro] [altro]```

- Senza opzioni: mostra l'elenco dei gruppi di account collegati del server. Il pulsante “**Collega account**” vi collega due membri del server, oppure due account assenti tramite i loro ID.
- Con `[membro]`: mostra il gruppo di quell'account, oppure quell'account da solo se non è collegato a nessun altro. Ogni account vi compare con il suo stato (bannato dal server, sul server, non sul server, in quarantena), con l'account principale in testa.
- Con `[membro]` e `[altro]`: collega direttamente i due account, dichiarati come la stessa persona.

Se uno degli account del gruppo è già bannato ([Premium](/it/premium)), gli account collegati condividono uno stesso ban: RaidProtect ti propone “**Banna anche**” per gli altri account, “**Revoca il ban**” dell'account bannato per tutti, oppure “**Più tardi**” per decidere dopo.

Sostituisci `[membro]` e `[altro]` con la menzione o l'[ID](../guides/id.mdx) degli account desiderati. I bot non possono essere collegati.

Dal pannello di un gruppo:

- “**Collega un membro**” aggiunge un account al gruppo: un membro del server, oppure l'ID Discord di un account assente dal server.
- Il selettore “**Modifica un account del gruppo**” apre una finestra per renderlo “**Account principale del gruppo**” oppure “**Rimuovi questo account dal gruppo**”. Un account rimosso non è più trattato come la stessa persona, ma se è stato bannato con il gruppo, resta bannato.

Ritrovi anche gli account collegati di un membro nella [vista di moderazione `/modview`](./moderation.mdx#modview), con il pulsante “**Gestisci**”.

:::info
Il comando `/alt` e i suoi pulsanti richiedono il permesso **Bannare i membri**.
:::

## 🛠️ Configurazione dei doppi account {#config}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Moderazione**”.
3. Clicca su “**Configurare**” accanto a “**Doppi account**”.

<Settings start="alts" />

### Sanzioni degli account collegati <span className="badge-premium">Premium</span> {#modes}

Per ogni sanzione, scegli come si estende al gruppo:

1. Nella schermata Doppi account, clicca su “**Modifica**” accanto a “**Sanzioni degli account collegati**”.
2. Nella finestra, scegli una modalità per ogni sanzione.

Il selettore “**Imposta tutto su…**” della schermata applica la stessa modalità a tutte le sanzioni in una volta.

<SettingsModal name="altsModes" />

| Modalità | Effetto | Sanzioni interessate |
|---|---|---|
| “**Subito**” *(predefinita)* | Bando: tutti gli account collegati vengono bannati subito, presenti o meno. Espulsione: vengono espulsi anche gli account collegati presenti sul server. Mute, imprigionamento e timeout: gli account presenti vengono sanzionati subito, gli altri al loro arrivo. | Tutte |
| “**Presenti subito, gli altri all'arrivo**” | Gli account presenti vengono bannati subito, gli account assenti lo sono se si uniscono al server durante il ban. | Bando |
| “**Trappola**” | Solo l'account preso di mira viene sanzionato. Un altro account del gruppo che arriva o scrive durante la sanzione viene scambiato per elusione e riceve la [sanzione di elusione](#evasion). | Tutte tranne l'espulsione |
| “**Disattivato**” | La sanzione riguarda solo l'account scelto. | Tutte |

### Sanzione di gruppo {#group-sanction}

Quando una sanzione si estende a più account, compare nella cronologia ([`/sanctions`](./sanctions.mdx#search), `/modview`) come **una sola sanzione di gruppo** (ad esempio “**Bando di gruppo**”), che elenca gli account interessati (“**Account**”) con lo stato di ciascuno. Ogni account mantiene la propria riga, contrassegnata da “Fa parte della sanzione di gruppo”. Annullare, eliminare o modificare (motivo, durata) la sanzione di gruppo agisce su tutti gli account contemporaneamente. Un account consulta solo la propria riga in `/mie-sanzioni`.

### Sanzione di elusione {#evasion}

La sanzione di elusione si applica a un account collegato colto in modalità “**Trappola**”: arriva sul server o vi scrive durante la sanzione del suo gruppo.

1. Nella schermata Doppi account, clicca su “**Modifica**” accanto a “**Sanzione di elusione**”.
2. Nella finestra, scegli la “**Sanzione**” e, se serve, la sua “**Durata**”.

<SettingsModal name="altsEvasion" />

- “**Resto della sanzione**” *(predefinita)*: l'account condivide la sanzione del gruppo fino alla fine, senza una sanzione a suo nome.
- **Una sanzione** (Bando, Espulsione, Mute, Imprigionamento o Timeout): viene applicata a suo nome, con la propria durata, e poi vale per tutto il gruppo. Un mute o un imprigionamento ritorna se l'account lascia il server e poi vi rientra. Lascia vuota la durata per una sanzione definitiva (es.: `1h`, `3d`, `2w`).

:::info
Un timeout richiede sempre una durata, di 28 giorni al massimo. Il mute e l'imprigionamento richiedono che il loro [ruolo](./sanctions.mdx#config) sia configurato.
:::

### Un solo account per persona {#single-account}

Con questa impostazione, gratuita come l'individuazione da parte del captcha, solo l'**account principale** di ogni gruppo circola sul server. Gli altri account vengono messi in **quarantena** con il [ruolo di jail](./sanctions.mdx#jail) (sanzione “**Quarantena**” nella cronologia). Ne escono da soli se diventano l'account principale o se vengono rimossi dal gruppo.

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Moderazione**”.
3. Clicca su “**Configurare**” accanto a “**Doppi account**”.
4. Clicca su “**Attivare**” accanto a “**Un solo account per persona**”.

:::info
Questa impostazione richiede un [ruolo Jail](./sanctions.mdx#jail). Se manca, una finestra ti propone “**Attiva e configura il jail**”: l'impostazione viene attivata, e gli account secondari vengono messi in quarantena non appena il ruolo esiste.
:::

Per cambiare l'account principale di un gruppo, usa `/alt` con uno degli account, poi il selettore “**Modifica un account del gruppo**”.

## Domande frequenti {#faq}

### I doppi account sono condivisi tra server?

No. I gruppi sono propri del tuo server e nulla viene condiviso con altri server.

### RaidProtect usa l'indirizzo IP per individuare i doppi account? {#ip}

No. Non recuperiamo mai l'indirizzo IP: il bot non lo riceve da Discord, e l'[Activity del captcha](./captcha.md#privacy) passa dal proxy di Discord, che non lo trasmette. I doppi account vengono collegati dal tuo team con `/alt`, oppure individuati dalla verifica del dispositivo, fatta con il consenso del membro. Un collegamento che si basa solo sul dispositivo non viene mai applicato d'ufficio: viene proposto al tuo team. Per saperne di più, leggi il nostro articolo su [il captcha e la verifica su Discord](/it/learn/captcha-discord#alts).

### Cosa succede quando sbanno uno degli account?

Revocare la sanzione di uno degli account la revoca per tutti gli account del gruppo.

### Posso collegare un account che non è sul mio server?

Sì. Nel pannello `/alt`, clicca su “**Collega un membro**” e inserisci il suo ID Discord.

### Chi può usare /alt?

I membri che hanno il permesso **Bannare i membri**, su un server [Premium](/it/premium) finché l'Identity Update è in sperimentazione.
