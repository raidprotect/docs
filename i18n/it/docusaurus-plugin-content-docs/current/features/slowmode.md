---
title: Slowmode preventivo
description: "Lo slowmode preventivo di RaidProtect regola automaticamente la modalità lenta dei canali del tuo server Discord per mantenere un flusso di messaggi leggibile."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

Lo **slowmode preventivo** di RaidProtect regola automaticamente la [modalità lenta](./moderation.mdx#slowmode) dei tuoi canali per mantenere un **ritmo dei messaggi** al minuto. Quando un canale si surriscalda (annuncio, live, afflusso di nuovi membri, inizio di un [raid](/it/learn/discord-raid)), alziamo la modalità lenta; quando si calma, la riabbassiamo. I tuoi moderatori non devono più sorvegliare la chat per regolarla a mano.

:::info Sperimentazione: Shield Update
Lo slowmode preventivo è riservato ai server [Premium](/it/premium). Fa parte della **Shield Update**, prevista per la versione 3.6.0, in sperimentazione fino alla sua uscita.
:::

## ❓ Come funziona? {#working}

- **Un ritmo dei messaggi**: per ogni canale regolato, scegli quanti messaggi al minuto può ricevere (30 per impostazione predefinita). Oltre, la modalità lenta sale da sola.
- **Dei limiti**: la modalità lenta resta sempre tra lo **slowmode minimo** e lo **slowmode massimo** che hai fissato per il canale.
- **Una regolazione continua**: regoliamo la modalità lenta in base al flusso reale, e sale subito quando un canale si surriscalda.
- **Una discesa progressiva**: quando il canale si calma, la modalità lenta torna a poco a poco verso il minimo.
- **Registro di controllo**: ogni modifica riporta il motivo “Slowmode automatico”.

## 🛠️ Configurazione dello slowmode preventivo {#config}

### Aggiungere un canale regolato {#add}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Protezione**”.
3. Clicca su “**Configurare**” accanto a “**Slowmode preventivo**”.
4. Clicca su “**Aggiungi**” accanto a uno slot libero.
5. Scegli il canale (canale testuale o canale di annunci).

<Settings start="slowmode" />

**Limiti:** 6 canali regolati per server.

:::warning Permessi richiesti
RaidProtect deve avere il permesso `Gestire i canali` in ogni canale regolato.
:::

### Regolare un canale {#channel}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Protezione**”.
3. Clicca su “**Configurare**” accanto a “**Slowmode preventivo**”.
4. Clicca su “**Modifica**” accanto al canale.
5. Scegli il “**Ritmo dei messaggi**”, lo “**Slowmode minimo**” e lo “**Slowmode massimo**”.

<Settings start="slowmodeChannel" />

| Impostazione | Valori proposti | Predefinito |
|---|---|---|
| **Ritmo dei messaggi** | da 5 a 120 messaggi al minuto | 30 messaggi / min |
| **Slowmode minimo** | da 0 a 10 secondi | 0 secondi (nessun minimo) |
| **Slowmode massimo** | da 5 secondi a 10 minuti | 2 minuti |

Per un valore che non è nell'elenco, clicca su “**Personalizza**” e inserisci i tuoi valori (per esempio `40` messaggi al minuto, un minimo di `0s`, un massimo di `2m 30s`). La modalità lenta non può superare le 6 ore, il limite di Discord.

<SettingsModal name="slowmodeCustom" />

Dalla schermata di un canale, puoi anche:
- spegnere o riavviare la regolazione con l'interruttore in alto a destra. Spegnere la regolazione riporta a 0 la modalità lenta del canale;
- cliccare su “**Applica a tutti i canali regolati**” per copiare queste impostazioni su tutti i tuoi canali regolati;
- cliccare su “**Elimina**” per liberare lo slot.

## 🕒 Slowmode preventivo e comando /slowmode {#manual}

Se un moderatore usa il [comando `/slowmode`](./moderation.mdx#slowmode) su un canale regolato, il suo valore manuale viene applicato e la **regolazione automatica viene disattivata** per quel canale. Un messaggio lo segnala. Per riavviare la regolazione, riattivala dalla schermata del canale in `/settings`.

## Domande frequenti {#faq}

### Qual è la differenza tra lo slowmode preventivo e l'anti-spam?

L'[anti-spam](./anti-spam.mdx) sanziona i membri che fanno spam. Lo slowmode preventivo non sanziona nessuno: rallenta un intero canale quando il flusso globale diventa troppo alto, per mantenere una discussione leggibile.

### Quanti canali si possono regolare?

Fino a 6 canali per server, ciascuno con il proprio ritmo dei messaggi e i propri limiti.

### Lo slowmode preventivo è gratuito?

No, è riservato ai server Premium. Fa anche parte della Shield Update, ancora in sperimentazione.

### Cosa succede se regolo la modalità lenta a mano?

Il comando /slowmode applica il tuo valore e disattiva la regolazione automatica di quel canale. Puoi riattivarla in /settings, scheda Protezione, Slowmode preventivo.
