---
title: Langue
description: "Changez la langue de RaidProtect pour l'adapter à votre communauté : le bot parle 11 langues, du français au japonais, ou suit celle de votre serveur Discord."
---

import { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect vous permet de choisir la langue utilisée par le bot pour s'adapter au mieux à votre communauté Discord.

**Messages publics :** la langue configurée s'applique aux messages publics envoyés par RaidProtect sur votre serveur (logs, captcha, signalements, etc.).

**Messages éphémères :** les messages privés ou temporaires restent affichés dans la langue de l'utilisateur qui interagit avec le bot.

## 🌐 Liste des langues supportées {#supported}

- **Français**
- **Anglais**
- **Espagnol**
- **Allemand**
- **Portugais brésilien**
- **Italien**
- **Turc**
- **Vietnamien**
- **Japonais**
- **Chinois simplifié**
- **Chinois traditionnel**

Seules les langues traduites intégralement sont proposées. Les réponses éphémères adressées à un membre qui utilise Discord dans une autre langue s'affichent en anglais.

## ⚙️ Changer la langue du bot {#change}

1. Faites la [commande `/settings`](./setup.md#settings).
2. Dans l'onglet “**Général**”, cliquez sur “**Modifier**” à côté de “**Langue**”.
3. Choisissez la langue souhaitée dans la liste, puis validez.

<SettingsModal name="lang" />

Le changement est immédiat et apparaît dans les logs du serveur.

### Suivre la langue du serveur {#follow}

La première option, “**Suivre la langue du serveur**”, reprend la langue principale définie dans les paramètres Communauté de Discord. C'est le réglage par défaut. Si cette langue ne fait pas partie des langues supportées, RaidProtect parle anglais.

:::info
Le support linguistique de RaidProtect est en constante évolution ! [Suggérez](https://suggestions.raidprotect.bot) les langues que vous souhaitez voir sur le bot ou [votez](https://suggestions.raidprotect.bot) pour les langues proposées afin de les voir ajoutées.
:::
