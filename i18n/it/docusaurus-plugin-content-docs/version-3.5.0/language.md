---
title: Lingua
description: "Cambia la lingua di RaidProtect per adattarla alla tua community: il bot parla 11 lingue, dal francese al giapponese, oppure segue quella del tuo server Discord."
---

import { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect ti permette di scegliere la lingua usata dal bot per adattarsi al meglio alla tua community Discord.

**Messaggi pubblici:** la lingua configurata si applica ai messaggi pubblici inviati da RaidProtect sul tuo server (log, captcha, segnalazioni, ecc.).

**Messaggi effimeri:** i messaggi privati o temporanei restano mostrati nella lingua dell'utente che interagisce con il bot.

## 🌐 Elenco delle lingue supportate {#supported}

- **Francese**
- **Inglese**
- **Spagnolo**
- **Tedesco**
- **Portoghese brasiliano**
- **Italiano**
- **Turco**
- **Vietnamita**
- **Giapponese**
- **Cinese semplificato**
- **Cinese tradizionale**

Vengono proposte solo le lingue tradotte integralmente. Le risposte effimere rivolte a un membro che usa Discord in un'altra lingua vengono mostrate in inglese.

## ⚙️ Cambiare la lingua del bot {#change}

1. Esegui il [comando `/settings`](./setup.md#settings).
2. Nella scheda “**Generale**”, clicca su “**Modifica**” accanto a “**Lingua**”.
3. Scegli la lingua desiderata dall'elenco, poi conferma.

<SettingsModal name="lang" />

La modifica è immediata e compare nei log del server.

### Seguire la lingua del server {#follow}

La prima opzione, “**Segui la lingua del server**”, riprende la lingua principale definita nelle impostazioni Community di Discord. È l'impostazione predefinita. Se questa lingua non fa parte delle lingue supportate, RaidProtect parla inglese.

:::info
Il supporto linguistico di RaidProtect è in costante evoluzione! [Suggerisci](https://suggestions.raidprotect.bot) le lingue che vorresti vedere sul bot o [vota](https://suggestions.raidprotect.bot) le lingue proposte per vederle aggiunte.
:::
