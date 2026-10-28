---
title: Trasparenza
description: "La Trasparenza di RaidProtect mostra ai tuoi membri come viene moderato il server: riepiloghi periodici, modlog pubblico e comando /transparency."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import TransparencyMockup from '@site/src/components/DiscordMessage/mockups/transparency';

<TransparencyMockup />

La Trasparenza permette di mostrare ai tuoi membri come viene moderato il server. Si basa su tre elementi complementari: dei **riepiloghi di moderazione periodici**, un **modlog pubblico** e il **comando `/transparency`**.

## 🛠️ Configurazione della Trasparenza {#config}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Moderazione**”.
3. Clicca su “**Configurare**” accanto a “**Trasparenza**”.

La schermata ti dà accesso ai “**Riepiloghi periodici**”, al “**Modlog pubblico**” e all'interruttore del “**Comando /transparency**”.

<Settings start="transparency" />

## 📊 Riepiloghi periodici {#recaps}

Un riepilogo è un sommario aggregato delle azioni di moderazione, pubblicato automaticamente in un canale secondo la frequenza scelta.

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Moderazione**”.
3. Clicca su “**Configurare**” accanto a “**Trasparenza**”.
4. Clicca su “**Configurare**” accanto a “**Riepiloghi periodici**”.
5. Clicca su “**Aggiungi**” accanto a uno slot libero.
6. Si apre la schermata del nuovo riepilogo: regola la sua **frequenza**, il suo **canale** di pubblicazione, eventualmente un ruolo da **menzionare**, poi clicca su “**Attivare**” a destra del titolo.

Per tornare più tardi su un riepilogo, clicca su “**Modifica**” accanto a esso nell'elenco.

<Settings start="recaps" />

Un nuovo riepilogo viene creato disattivato, settimanale, pubblicato verso le 08:00, nel canale del modlog pubblico. Le frequenze disponibili sono: **Settimanale** (predefinita), **Ogni due settimane**, **Mensile**, **Trimestrale** e **Annuale**. Due riepiloghi con la stessa frequenza non possono essere pubblicati nello stesso canale.

Dalla schermata di un riepilogo, puoi anche:

- “**Rinomina**” il riepilogo (lascia vuoto il campo per riprendere il nome della frequenza);
- regolare il suo “**Orario**” di pubblicazione (vedi sotto);
- cliccare su “**Alimentare /transparency**” per renderlo la fonte del [comando `/transparency`](#command);
- eliminarlo con “**Elimina**”.

Il riepilogo contiene:
- il **numero totale di azioni di moderazione** nel periodo;
- il dettaglio per tipo di sanzione (bandi, softban, espulsioni, timeout, mute, imprigionamenti, avvertimenti e altre azioni);
- il numero di **truffe bloccate da [ScamLens](./scam-images.md)**;
- la ripartizione tra azioni **automatiche** e azioni **del team**.

**Limiti:** 1 riepilogo nella versione gratuita, 5 riepiloghi nella versione [Premium](/it/premium) (per esempio un riepilogo settimanale per il team e un riepilogo mensile pubblico).

### Orario di pubblicazione {#recap-schedule}

1. Nella schermata di un riepilogo, clicca su “**Orario**”.
2. Nella finestra, scegli l'“**Ora di pubblicazione**” (ora locale, da `00:00` a `23:00`).

<SettingsModal name="recapSchedule" />

| Versione | Momento di pubblicazione |
|---|---|
| Gratuita | In una fascia di 12 ore a partire dall'ora scelta |
| [Premium](/it/premium) | Verso l'ora scelta, con un'approssimazione di 1 ora |

L'ora scelta segue il **fuso orario del server**, ricordato sotto la riga “**Orario**”. Si regola una sola volta per tutto il server, nella scheda “**Generale**”:

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Generale**”.
3. Clicca su “**Modifica**” accanto a “**Fuso orario**”.
4. Scegli il tuo scostamento in “**Fuso (UTC)**”, oppure inserisci un “**Fuso orario personalizzato**” come `Europe/Rome`, che ha la precedenza e gestisce automaticamente l'ora legale.

<SettingsModal name="timezone" />

## 📢 Modlog pubblico {#modlog}

Il modlog pubblico pubblica **ogni azione di moderazione** in un canale visibile ai tuoi membri, con solo le informazioni che scegli di mostrare.

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Moderazione**”.
3. Clicca su “**Configurare**” accanto a “**Trasparenza**”.
4. Clicca su “**Configurare**” accanto a “**Modlog pubblico**”.
5. Seleziona un canale, oppure clicca su “**Crearne uno per me**” (RaidProtect crea il canale `public-modlog`, in sola lettura per @everyone).
6. In “**Informazioni mostrate**”, scegli: “**Motivo**”, “**Moderatore**”, “**Durata**”, “**Membro sanzionato**” (predefinito: Motivo e Durata).
7. In “**Sanzioni pubblicate**”, scegli: “**Manuali (team)**” e/o “**Automatiche (RaidProtect)**” (predefinito: entrambe).
8. Clicca su “**Attivare**” a destra del titolo della schermata.

<Settings start="modlog" />

Quando l'azione è automatica e la visualizzazione del moderatore è attivata, il modlog indica “RaidProtect” al posto del nome del moderatore.

## 📜 Il comando `/transparency` {#command}

Usa il comando: ```/transparency```

Permette a qualsiasi membro di consultare l'**ultimo rapporto di trasparenza** del periodo concluso (risposta effimera, visibile solo al membro).

- Il comando deve essere attivato con l'interruttore “**Comando /transparency**” della schermata Trasparenza.
- Se hai più riepiloghi, il pulsante “**Alimentare /transparency**” su un riepilogo lo designa come la fonte usata dal comando. Questo riepilogo è contrassegnato da una ⭐ nell'elenco.

## Domande frequenti {#faq}

### Quanti riepiloghi posso programmare?

Uno solo nella versione gratuita, fino a cinque con il [Premium](/it/premium).

### A che ora viene pubblicato il riepilogo?

All'ora che scegli, nel fuso orario del server impostato nella scheda “**Generale**” di `/settings`. Nella versione gratuita, la pubblicazione avviene in una fascia di 12 ore a partire da quell'ora; con il Premium, con un'ora di approssimazione.

### I miei membri vedono chi li ha sanzionati?

Solo se spunti “**Moderatore**” nelle informazioni mostrate del modlog pubblico. Per un'azione automatica, il modlog indica allora RaidProtect.
