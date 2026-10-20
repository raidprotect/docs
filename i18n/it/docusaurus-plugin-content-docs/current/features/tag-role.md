---
title: Ruolo del Tag
description: "Il Ruolo del Tag di RaidProtect assegna automaticamente un ruolo ai membri che mostrano il tag del tuo server Discord, e premia il loro impegno."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';
import TagRoleConceptMockup from '@site/src/components/DiscordMessage/mockups/tag-role-concept';

<TagRoleConceptMockup />

Il Ruolo del Tag permette di assegnare automaticamente un ruolo ai membri che aggiungono [il tag del tuo server](https://support.discord.com/hc/it/articles/31444248479639-Tag-del-server) al loro profilo Discord. Assegnando un ruolo a questi membri, valorizzi il loro impegno e li incoraggi a rappresentare attivamente il tuo server. È un modo semplice ma efficace per rafforzare l'identità collettiva, premiando al tempo stesso gli ambasciatori più fedeli della tua community.

## ❓ Funzionamento del Ruolo del Tag {#working}

Il funzionamento è semplice. Non appena un membro aggiunge il tag del server al suo profilo Discord, RaidProtect gli assegna automaticamente un ruolo specifico.
Se il membro toglie il tag, il ruolo gli viene tolto.

Rileviamo il cambiamento al prossimo aggiornamento del profilo del membro (soprannome, avatar, banner, ruoli, tag…).

:::info
Se il Tag non è attivato o il tuo server non dispone ancora della funzionalità, il Ruolo del Tag non avrà alcun effetto.
:::

## 🎖️ Configurazione del Ruolo del Tag {#config}

La configurazione si fa in pochi clic:
1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Utilità**”.
3. Clicca su “**Configurare**” accanto a “**Ruolo del Tag**”.
4. Seleziona un ruolo esistente tramite il selettore oppure clicca su “**Crearne uno per me**”: creiamo un ruolo `Tag` senza alcun permesso.
5. Puoi in qualsiasi momento disattivare il Ruolo del Tag cliccando sul pulsante “**Reimpostare**”.

Ogni cambiamento di configurazione del Ruolo del Tag viene registrato nei log del tuo server.

<Settings start="tagrole" />

:::tip
I tuoi membri avranno il ruolo alla loro prossima modifica del profilo (Soprannome, Avatar, Banner, Ruoli, Tag…).
:::

### Comando /tagrole {#command}

Usa il comando: ```/tagrole```

Apre direttamente la schermata di configurazione del Ruolo del Tag, senza passare da `/settings`. È riservato ai membri che hanno il permesso “**Gestire i ruoli**”.

### Ruoli rifiutati {#refused-roles}

Il Ruolo del Tag viene dato automaticamente a qualsiasi membro: rifiutiamo quindi i ruoli che potrebbero creare problemi.

- **Un ruolo già usato da RaidProtect**: ruolo di jail, ruolo di mute, ruolo di verifica del captcha o ruolo automatico.
- **Un ruolo gestito** da un'applicazione o dal boost del server: Discord vieta di assegnarlo manualmente. Crea invece un ruolo normale.
- **Un ruolo posizionato sopra il ruolo di RaidProtect**: trascina il ruolo di RaidProtect più in alto in **Impostazioni del server > Ruoli**.
- **Un ruolo posizionato sopra il tuo ruolo più alto** (tranne per il proprietario del server).
- **Un ruolo con permessi sensibili**: Amministratore, Bannare, Espellere, Gestire il server, i canali, i messaggi, i ruoli, i webhook, le espressioni, gli eventi o i thread.

### Riquadri di avviso {#warnings}

La schermata di configurazione ti avvisa quando il Ruolo del Tag non può funzionare:

- **Permesso mancante**: RaidProtect ha bisogno del permesso “**Gestire i ruoli**”. Un avviso ⚠️ compare anche accanto a “**Ruolo del Tag**” nella scheda Utilità di `/settings`.
- **Tag del server non attivato**: il tuo server non ha attivato la funzionalità [Tag del Server](https://support.discord.com/hc/it/articles/31444248479639-Tag-del-server), il Ruolo del Tag non ha quindi alcun effetto per il momento.

Dopo la correzione, clicca su “**Aggiornare**” per verificare di nuovo.

## Domande frequenti {#faq}

### Perché un membro con il tag non ha ancora il ruolo?

Rileviamo il tag al prossimo aggiornamento del profilo del membro. Finché non modifica nulla (soprannome, avatar, ruoli, tag…), il ruolo non viene assegnato. Il supporto può avviare una sincronizzazione completa se serve.

### Perché il mio ruolo è rifiutato?

Il Ruolo del Tag non può essere un ruolo già usato da RaidProtect, un ruolo gestito da un'applicazione, un ruolo posizionato sopra RaidProtect o sopra di te, né un ruolo con permessi sensibili.

### Chi può configurare il Ruolo del Tag?

Gli amministratori da `/settings`, e i membri che hanno il permesso “Gestire i ruoli” con il comando `/tagrole`.
