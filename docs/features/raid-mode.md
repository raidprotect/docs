---
title: Anti-raid
description: "Le mode raid de RaidProtect bloque instantanément les arrivées massives sur votre serveur Discord, automatiquement dès qu'une vague suspecte est détectée."
---

import { RaidModeSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

import RaidModeMockup from '@site/src/components/DiscordMessage/mockups/raid-mode';

<RaidModeMockup />

## Mode raid {#raid-mode}

Le mode raid de RaidProtect est une fonctionnalité d'urgence qui bloque instantanément tous les nouveaux utilisateurs tentant de rejoindre votre serveur, pendant une durée maximale de 24 heures. Notre bot de protection l'active seul dès qu'il détecte une vague d'arrivées suspecte, et vous pouvez aussi le déclencher à la main. Pour bloquer définitivement les nouveaux membres, utilisez la [commande `/joinlock`](./join-lock.mdx).

### ❓ Comment fonctionne le mode raid ? {#working}

RaidProtect active automatiquement le mode raid si un grand nombre d’utilisateurs rejoint votre serveur en un court laps de temps. Par défaut, le mode raid s'active si plus de 10 utilisateurs rejoignent votre serveur en moins de 10 secondes. Lorsque le mode raid est activé, aucun utilisateur ne peut rejoindre le serveur. Ils sont bloqués au niveau de l’invitation.

:::warning
Les fonctions communautaires de Discord sont indispensables au bon fonctionnement du Mode raid. [Suivez notre guide pour vérifier l'activation de la communauté sur votre serveur.](../guides/community.md)
:::

#### Activation {#enable}

- Pour activer manuellement ce mode, un utilisateur disposant des permissions d'expulsion doit exécuter la commande `/raidmode`.
- Un message sera automatiquement posté dans le salon de logs pour signaler l'activation.

#### Désactivation {#disable}

Le mode raid ne se désactive pas automatiquement. Pensez à l’arrêter avec la même commande lorsque la menace est écartée. 😇

:::info
La commande `raidmode` est [utilisable par préfixe](../guides/prefix.md).
:::

### 🚨 Configuration du mode raid automatique {#config}

Si votre serveur accueille souvent beaucoup de nouveaux membres simultanément, il est judicieux de modifier ce seuil pour éviter les faux-positifs.

<RaidModeSettingsMockup />

#### Seuil de membres {#threshold}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Cliquez sur le bouton “**Auto RaidMode**”.
3. Sélectionnez “**Nombre de membres**”.
4. Choisissez le nombre de membres pouvant rejoindre sous 10 secondes.

Vous pouvez laisser à la valeur par défaut (10) ou ajuster selon la valeur souhaitée en cliquant sur le bouton “**Valeur personnalisée**”.

:::note
Nous recommandons d’entrer une valeur comprise entre 10 et 20 membres en 10 secondes pour une bonne efficacité du système.
:::

#### Durée du raidmode {#duration}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Cliquez sur le bouton “**Auto RaidMode**”.
3. Sélectionnez “**Durée**”.
4. Choisissez la durée du raidmode (24h maximum).

Vous pouvez laisser à la valeur par défaut (5 minutes) ou ajuster selon la valeur souhaitée en cliquant sur le bouton “**Valeur personnalisée**”.

#### Fermer les MP automatiquement {#close-dm}

Vous pouvez configurer l'**auto raid mode** pour qu'il **ferme automatiquement les MP du serveur** dès qu'il s'active. Cela ajoute une couche de protection supplémentaire pendant un raid : les nouveaux comptes ne peuvent plus contacter vos membres en privé pour les phisher ou les arnaquer.

1. Faites la [commande `/settings`](../setup.md#settings).
2. Cliquez sur le bouton “**Auto RaidMode**”.
3. Activez l'option “**Fermer les MP**”.

Lorsque l'auto raid mode se désactive (manuellement ou automatiquement après la durée configurée), les MP reprennent leur configuration précédente.

:::info
Cette option est complémentaire de la [Fermeture des MP permanente](./dm-lock.mdx) : si vous l'activez sans avoir la fermeture permanente, les MP ne sont fermés que pendant un raid actif.
:::

#### Mode expulsion (Premium) {#kick-mode}

Par défaut, le mode raid bloque les nouveaux arrivants au niveau de l'invitation. Avec le **mode expulsion**, les utilisateurs qui rejoignent pendant un raid sont expulsés par RaidProtect au lieu d'être bloqués à l'invitation.

1. Faites la [commande `/settings`](../setup.md#settings).
2. Cliquez sur le bouton "**Auto RaidMode**".
3. Activez l'option "**Mode expulsion**".

:::info
Cette option est réservée aux serveurs [**Premium**](/premium). Elle est nécessaire pour utiliser le [bypass du mode raid](#bypass-raid).
:::

### 🎫 Bypass du mode raid {#bypass-raid}

Vous attendez un membre légitime pendant qu'un raid est en cours ? Autorisez-le à rejoindre malgré le mode raid :

Utilisez la commande : ```/bypass raid [utilisateur]```

Remplacez `[utilisateur]` par l'identifiant souhaité, ce dernier disposera de 10 minutes pour rejoindre le serveur sans être expulsé par le mode raid. Vous pouvez aussi utiliser la commande sans spécifier d'utilisateur pour connaître la liste actuelle des utilisateurs bypass (7 utilisateurs maximum simultanément).

:::warning
Le bypass du mode raid nécessite le [mode expulsion](#kick-mode) : un utilisateur bloqué au niveau de l'invitation ne peut pas être bypass.
:::

## Âge Minimum {#minage}

Pour renforcer la sécurité, vous pouvez exiger un âge minimum pour les comptes Discord des nouveaux membres.

1. Faites la [commande `/settings`](../setup.md#settings).
2. Cliquez sur le bouton “**Âge Minimum**”.
3. Sélectionnez la valeur souhaitée dans le menu de sélection ou choisissez une valeur personnalisée exprimée en format date (m/h/d/y).

### 🎂 Bypass de l'âge de compte minimum {#bypass-minage}

Utilisez la commande : ```/bypass minage [utilisateur]```

Remplacez `[utilisateur]` par l’identifiant souhaité, ce dernier disposera de 10 minutes pour rejoindre le serveur sans être expulsé par l'âge requis. Vous pouvez aussi utiliser la commande sans spécifier d'utilisateur pour connaître la liste actuelle des utilisateurs bypass.

## Questions fréquentes {#faq}

### Le mode raid s'active-t-il automatiquement ?

Oui. Par défaut, nous activons le mode raid dès que plus de 10 utilisateurs rejoignent votre serveur en moins de 10 secondes. Ce seuil est configurable dans les paramètres de l'auto raid mode.

### Comment activer le mode raid manuellement ?

Un utilisateur disposant de la permission d'expulsion exécute la commande `/raidmode`. Un message est alors publié dans le salon de logs pour signaler l'activation, et plus aucun membre ne peut rejoindre le serveur.

### Le mode raid se désactive-t-il tout seul ?

Le mode raid activé manuellement ne s'arrête pas automatiquement : pensez à le désactiver avec la même commande une fois la menace écartée. L'auto raid mode, lui, se coupe après la durée que vous avez configurée (5 minutes par défaut, 24 heures maximum).

### Peut-on laisser un membre légitime rejoindre pendant un raid ?

Oui, avec la commande `/bypass raid [utilisateur]` : le membre dispose alors de 10 minutes pour rejoindre sans être expulsé (7 utilisateurs bypass maximum en même temps). Le bypass nécessite le mode expulsion, réservé aux serveurs Premium.