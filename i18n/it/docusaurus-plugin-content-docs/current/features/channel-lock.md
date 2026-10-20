---
title: Blocco dei canali
description: "Il comando /lock di RaidProtect blocca un canale in un istante per impedire l'invio di messaggi, temporaneamente o fino allo sblocco."
---

import ChannelLockMockup from '@site/src/components/DiscordMessage/mockups/channel-lock';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

{/* <ChannelLockMockup /> : masquée pour le moment */}

A volte è necessario bloccare temporaneamente un canale per impedire agli utenti di inviarvi messaggi. Grazie al comando di blocco, diventa un gioco da ragazzi!

## 🔒 Bloccare un canale {#lock}

Usa il comando: ```/lock [#channel] [duration] [reason]```

Questo comando toglie al ruolo **@everyone** i permessi di inviare messaggi e di inviare messaggi nei thread, nel canale interessato, impedendo così a tutti gli utenti di scriverci.

- Sostituisci `[#channel]` con la menzione o l'[ID](../guides/id.mdx) del canale da bloccare. Senza canale, blocchiamo quello in cui esegui il comando. Sono accettati i canali testuali, di annunci, vocali, forum, media, conferenza e le categorie; i thread no.
- Sostituisci `[reason]` per indicare perché il canale è bloccato (es.: *pulizia della chat*, *annuncio importante*, ecc.).

:::info
Uno stesso canale può essere bloccato solo una volta ogni 10 minuti.
:::

### Blocco temporaneo {#lock-duration}

Il parametro `[duration]` permette di **sbloccare automaticamente il canale** dopo la durata indicata (per es. `15m`, `1h`, `2d`). Utile per una rapida messa in quiete senza dover pensare a sbloccare il canale manualmente. La durata è limitata alla durata massima di una sanzione.

## 🔓 Sbloccare un canale {#unlock}

Usa il comando: ```/unlock [#channel] [reason]```

Questo comando ripristina al ruolo **@everyone** i permessi di inviare messaggi così com'erano prima del blocco, permettendo di nuovo agli utenti di scriverci. Sostituisci `[reason]` per indicare perché il canale è sbloccato (es.: *discussione riaperta*, *annuncio terminato*, ecc.).

:::warning
Perché il blocco funzioni correttamente, nessun ruolo aperto a tutti deve avere un permesso esplicito di scrivere in quel canale. Altrimenti, i membri con quei ruoli potranno comunque discutere. I permessi concessi ai ruoli del tuo team, invece, sono utili: mantengono la parola allo staff durante un `/lock`, e l'[audit](./audit.md) non li segnala più come ridondanti.
:::
:::info
I comandi `lock` e `unlock` sono [utilizzabili tramite prefisso](../guides/prefix.md). Richiedono il permesso “**Gestire i messaggi**”. RaidProtect ha bisogno dei permessi “**Gestire i canali**” e “**Gestire i ruoli**” per modificare i permessi del canale.
:::

## ✏️ Configurazione del lucchetto {#config}

Puoi scegliere se i canali bloccati vengono rinominati con un lucchetto: `/lock` rinomina allora il canale in `🔒-nome-del-canale`, e `/unlock` toglie il prefisso. Si vede così lo stato del canale direttamente nell'elenco dei canali. Questa opzione è **disattivata per impostazione predefinita**.

Per attivare o disattivare il lucchetto:
1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Utilità**”.
3. Clicca su “**Attivare**” (o “**Disattivare**”) accanto a “**Blocco canale**”. Il pulsante funziona come un interruttore, basta un semplice clic.

<Settings start="home:utilities" />

:::info
La ridenominazione richiede il permesso “**Gestire i canali**”.
:::

## Domande frequenti {#faq}

### Si può bloccare un canale diverso da quello in cui ci si trova?

Sì, indica il canale come primo argomento: `/lock #generale 30m Raid in corso`.

### Perché alcuni membri possono ancora scrivere in un canale bloccato?

Il blocco toglie la parola solo al ruolo @everyone. Un ruolo che ha un permesso esplicito di scrivere in quel canale lo mantiene.

### Come aggiungere un lucchetto al nome dei canali bloccati?

In `/settings`, scheda Utilità, attiva “Blocco canale”. L'opzione è disattivata per impostazione predefinita.
