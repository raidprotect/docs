---
title: Audit di sicurezza
description: "Il comando /audit di RaidProtect analizza la sicurezza del tuo server Discord, individua le falle di configurazione e ti propone di correggerle con un clic."
---

import AuditMockup from '@site/src/components/DiscordMessage/mockups/audit';

<AuditMockup />

Il comando `/audit` analizza la configurazione del tuo server Discord e identifica le falle di sicurezza: permessi troppo permissivi, livello di verifica insufficiente, [ruoli amministratori non protetti](/it/learn/least-privilege), ecc. Ti propone poi di correggere la maggior parte dei problemi con un clic.

Usa il comando: ```/audit```

:::info
Il comando è riservato ai membri che dispongono del permesso `Amministratore`. Il rapporto è visibile solo a te (risposta effimera).
:::

## ❓ Funzionamento dell'audit {#working}

RaidProtect assegna al tuo server un **punteggio globale su 100**, accompagnato da un grado (da **S** a **E**) e da una valutazione: **Eccellente** (90 e oltre), **Buono** (70 e oltre), **Da migliorare** (40 e oltre) o **Critico** (meno di 40).

Il rapporto è suddiviso in tre categorie, ciascuna con il proprio punteggio:

- **Configurazione del server**
- **Ruoli**
- **Canali**

Clicca sul pulsante “**Dettagli**” di una categoria per vedere il risultato di ogni verifica, poi su “**Indietro**” per tornare al rapporto. Il pulsante “**Aggiornare**” rilancia l'analisi dopo le tue modifiche.

### Verifiche effettuate {#checks}

| Categoria | Verifica |
|---|---|
| Configurazione del server | **Livello di verifica** |
| Configurazione del server | **Filtro dei contenuti espliciti** |
| Configurazione del server | **Autenticazione a due fattori (2FA) per la moderazione** |
| Configurazione del server | **Notifiche predefinite** |
| Configurazione del server | **Avvisi di raid** |
| Configurazione del server | **DM Lock (server pubblico)** * |
| Configurazione del server | **Numero di bot** * |
| Ruoli | **Permessi di @everyone** |
| Ruoli | **Ruoli auto-assegnabili** |
| Ruoli | **Ruoli concessi da inviti** |
| Ruoli | **Ruoli amministratori** |
| Ruoli | **Bot amministratori** * |
| Canali | **Permessi di canale per @everyone** |
| Canali | **Permessi di canale ridondanti** |
| Canali | **Permessi di espressione dei ruoli del team** * |
| Canali | **Webhook vecchi** * |

Le verifiche contrassegnate da un `*` sono **indicative**: compaiono nel rapporto ma non influenzano il punteggio. **DM Lock (server pubblico)** compare solo sui server community o pubblici.

Alcune precisazioni su queste verifiche:

- **Ruoli auto-assegnabili**: sono interessati i ruoli che un membro ottiene senza moderatore, con la loro fonte: benvenuto di Discord, [ruolo automatico](./onboarding.md#autorole) di RaidProtect, boost, abbonamento, integrazione o ruolo collegato.
- **Permessi di espressione dei ruoli del team**: un ruolo che porta un permesso di moderazione e che ha, su alcuni canali, dei permessi di espressione (scrivere, parlare…) già coperti altrove. Li manteniamo, perché lasciano la parola al team durante un [`/lock`](./channel-lock.md) o al livello 1 di [DISCON](./discon.md). Verifica semplicemente che ogni ruolo elencato sia davvero un ruolo del team: altrimenti sfugge ai blocchi.

Se a RaidProtect mancano dei permessi per funzionare correttamente, viene mostrato un avviso dedicato oltre al punteggio. Una verifica che richiede un permesso assente (per esempio Gestire i webhook) viene segnalata come non valutata.

:::info
Se RaidProtect non vede alcuni canali del tuo server, il rapporto mostra un riquadro “**Analisi incompleta**”: questi canali non vengono analizzati e il punteggio riguarda solo il resto.
:::

## 🔧 Correggere le falle con un clic {#fix}

Le verifiche che possono essere corrette automaticamente mostrano un pulsante “**Correggi**”:

| Verifica | Correzione applicata |
|---|---|
| Livello di verifica | Porta il livello di verifica del server a **Medio** (“Medio” o superiore è convalidato, “Basso” dà un avvertimento, “Nessuno” un fallimento) |
| Filtro dei contenuti espliciti | Attiva il filtro per **tutti i membri** |
| Notifiche predefinite | Porta le notifiche predefinite a **solo @menzioni** |
| Permessi di @everyone | Toglie i permessi sensibili dal ruolo @everyone |
| Permessi di canale ridondanti | Apre l'elenco dei canali da ripulire, poi “**Correggi tutto**” |

Per i **ruoli amministratori**, non esiste una correzione automatica: l'audit ti propone di proteggerli con i pulsanti “**Integra**” o “**Integra tutto**”, che li aggiungono all'[Authentification Manager](./authentication-manager.mdx).

:::warning
Per applicare le correzioni, RaidProtect deve disporre dei permessi `Gestire il server` e `Gestire i ruoli`.
:::

### Permessi di canale ridondanti {#redundant}

Un permesso di canale è **ridondante** quando non cambia nulla: è già concesso a livello di server, già concesso dal permesso @everyone del canale, oppure è un divieto senza effetto. Occorre allora modificarlo in più punti perché agisca davvero, il che crea dei punti ciechi.

L'elenco dettaglia, canale per canale, ogni permesso e la ragione per cui è ridondante:

- Il pulsante “**Ignora**” di un canale lo toglie dall'elenco, dal punteggio e da “**Correggi tutto**”. Puoi ripristinarlo dagli “**Elementi ignorati**”.
- Correggere una categoria corregge anche i canali sincronizzati con essa.
- I permessi di un ruolo **Amministratore** sono elencati a parte, in “**Nessun effetto su un ruolo Amministratore**”: Discord li ignora, e non li rimuoviamo mai, perché si applicheranno se quel ruolo perde Amministratore.

L'analisi tiene conto dei blocchi in corso, tramite [`/lock`](./channel-lock.md) o tramite il [DISCON](./discon.md).

## ✅ Scartare un avviso volontario {#ignore}

Alcuni avvisi corrispondono a scelte consapevoli: un ruolo amministratore di fiducia, un permesso lasciato a `@everyone` con cognizione di causa, ecc. Il pulsante “**Segna come OK**”, disponibile nel dettaglio di una categoria, permette di scegliere un elemento e poi di premere “**Ignora**”.

Un avviso ignorato scompare dal rapporto e non pesa più sul tuo punteggio. Puoi in qualsiasi momento consultare l'elenco degli elementi ignorati (pulsante “**Elementi ignorati**”) e ripristinarne uno qualsiasi con “**Ripristina**” o “**Ripristina tutto**”.

## Domande frequenti {#faq}

### Perché il livello di verifica “Medio” basta?

Il livello “Medio” scarta già gli account creati meno di 5 minuti fa, il che blocca la maggior parte degli account usa e getta. È quindi il livello che il pulsante “**Correggi**” applica.

### Perché l'audit non toglie i permessi di canale dei miei ruoli amministratori?

Discord ignora i permessi di canale di un ruolo che ha Amministratore. Li elenchiamo a parte senza toglierli: riprenderanno effetto se quel ruolo perde Amministratore.

### Posso escludere un canale dall'analisi dei permessi ridondanti?

Sì: clicca su “**Ignora**” accanto al canale nell'elenco dei permessi ridondanti. Non conta più nel punteggio e puoi ripristinarlo dagli elementi ignorati.
