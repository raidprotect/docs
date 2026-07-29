---
title: Installation
description: "Installez et configurez RaidProtect sur votre serveur Discord en quelques minutes, grâce à la commande /settings et au menu de configuration."
---

RaidProtect simplifie la gestion de votre serveur grâce à deux outils puissants ; la commande [`/setup`](#install) pour une configuration guidée étape par étape et la commande [`/settings`](#settings) pour modifier vos paramètres à tout moment via un menu centralisé. Ce guide d’installation vous explique comment les utiliser efficacement.

## Installation guidée {#install}

La commande `/setup` est conçue pour vous aider à configurer RaidProtect rapidement ou à travers une approche détaillée selon vos besoins.
<!--
Elle vous propose deux modes de configuration, [recommandée](#recommended) ou [avancée](#advanced). 
-->

### 🔧 Configuration recommandée {#recommended}

Permet d’activer ou de désactiver les fonctionnalités principales en un clin d’œil grâce à un menu de sélection interactif.

1. Faites la commande `/setup`.
2. Sélectionnez le bouton “**Configuration recommandée**”.
3. Activez ou désactivez les fonctionnalités souhaitées en utilisant le menu de sélection.

Le bot vous enverra ensuite un récapitulatif des fonctionnalités activées et des changements qu’il va apporter au serveur.

![Capture d'écran configuration recommandée](./assets/rp-setup.webp)

<!--
### 🛠️ Configuration avancée {#advanced}

Si vous souhaitez configurer le bot d'une manière plus approfondie, optez pour la configuration avancée. Le bot vous guide étape par étape avec des explications claires.

1. Faites la commande `/setup`.
2. Sélectionnez le bouton “**Configuration avancée”**.
3. Chaque étape présente une fonctionnalité, son utilité, et une configuration minimale recommandée.
4. Utilisez les boutons “**Précédent**” et “**Suivant**” pour avancer ou revenir en arrière.

À la fin, un récapitulatif des paramètres est affiché pour confirmer vos choix.
-->
## Modifier la configuration {#settings}

La commande `/settings` est la commande de gestion de vos paramètres une fois l’installation effectuée. Elle vous permet de visualiser, ajuster ou personnaliser les fonctionnalités de RaidProtect à tout moment, de manière simple et rapide.

### 🔍 Menu des paramètres {#menu}

1. Tapez `/settings` dans un salon où le bot est actif.
2. Naviguez facilement entre les différentes sections pour trouver les paramètres que vous souhaitez modifier.
3. Ajustez les options : Chaque catégorie présente une liste d’options modifiables sous forme de boutons ou menus déroulants.

import SettingsMockup from '@site/src/components/DiscordMessage/mockups/settings';

<SettingsMockup />

### 🔄 Réinitialiser un paramètre {#reset}

1. Naviguez vers le paramètre souhaité.
2. Cliquez sur “**Réinitialiser**”.

![Capture d'écran bouton réinitialiser](./assets/rp-button-reset.webp)

Le bot confirmera la réinitialisation avant d’appliquer les changements.

:::info Un problème de configuration ?
Si vous rencontrez un problème, consultez la section [Dysfonctionnements](./guides/malfunctions) ou rejoignez notre [serveur de support](https://raidprotect.bot/discord) pour obtenir de l’aide.
:::