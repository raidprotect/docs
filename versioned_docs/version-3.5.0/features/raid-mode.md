---
title: Anti-raid
description: "Le mode raid de RaidProtect bloque instantanément les arrivées massives sur votre serveur Discord, automatiquement dès qu'une vague suspecte est détectée."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

import RaidModeMockup from '@site/src/components/DiscordMessage/mockups/raid-mode';

{/* <RaidModeMockup /> : obsolète en 3.5.0 (montre l'expulsion comme seule action du mode raid) */}

## Mode raid {#raid-mode}

Le **mode raid** de RaidProtect est une fonctionnalité d'urgence qui traite les nouveaux utilisateurs tentant de rejoindre votre serveur pendant une [vague d'arrivées suspecte](/learn/discord-raid), pour une durée de 24 heures au maximum. Notre bot de protection l'active seul dès qu'il détecte une vague, et vous pouvez aussi le déclencher à la main. Vous choisissez ce que nous faisons des arrivants : bloquer les invitations, les expulser ou les envoyer au [captcha](./captcha.md). Pour fermer durablement le serveur aux nouveaux membres, utilisez la [commande `/joinlock`](./join-lock.mdx).

### ❓ Comment fonctionne le mode raid ? {#working}

- **Détection :** l'**Auto RaidMode** active le mode raid quand trop d'utilisateurs rejoignent votre serveur en même temps. Par défaut, il se déclenche à 10 arrivées en 10 secondes.
- **Réaction :** pendant le mode raid, les arrivants sont traités selon l'[action pendant le raid](#action) que vous avez choisie. Les comptes de la vague qui a déclenché le mode sont traités eux aussi : expulsés, ou renvoyés derrière le captcha avec les actions captcha.
- **Fin :** le mode raid se coupe tout seul après la [durée configurée](#duration), 5 minutes par défaut.
- **Logs :** un message est posté dans le salon de logs à chaque activation et désactivation.
- **Accueil :** le [message de bienvenue](./onboarding.md#welcome-message) se tait pendant la vague, pour ne pas inonder le salon d'accueil.

:::warning
Avec l'action “**Bloquer les invitations**” (par défaut), les fonctions communautaires de Discord sont indispensables au mode raid. [Suivez notre guide pour vérifier l'activation de la communauté sur votre serveur.](../guides/community.md) Les autres actions fonctionnent sans la communauté.
:::

#### Activation {#enable}

Un utilisateur disposant de la permission d'expulsion peut activer le mode raid à la main.

Utilisez la commande : ```/raidmode [status] [duration]```

- Sans option, la commande affiche l'état du mode raid avec un bouton pour l'activer ou le désactiver.
- Remplacez `[status]` par **True** pour l'activer, **False** pour le désactiver.
- Remplacez `[duration]` par la durée souhaitée (par exemple `30m` ou `2h`, 24 heures maximum). Sans durée, nous reprenons celle de l'Auto RaidMode.

Un message est automatiquement posté dans le salon de logs pour signaler l'activation. Le mode raid manuel applique la même [action](#action) que l'Auto RaidMode.

#### Désactivation {#disable}

Le mode raid se désactive tout seul à la fin de sa durée. Vous pouvez aussi l'arrêter plus tôt avec la commande `/raidmode`, une fois la menace écartée. 😇

:::info
La commande `raidmode` est [utilisable par préfixe](../guides/prefix.md).
:::

### 🚨 Configuration du mode raid automatique {#config}

Si votre serveur accueille souvent beaucoup de nouveaux membres simultanément, il est judicieux de modifier le seuil pour éviter les faux positifs. Tous les réglages se trouvent sur le même écran.

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Auto RaidMode**”.

L'interrupteur en haut à droite de l'écran active ou désactive l'Auto RaidMode. RaidProtect a besoin de la permission `MANAGE_GUILD`.

<Settings start="antiraid" />

#### Seuil de membres {#threshold}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Auto RaidMode**”.
4. Dans “**Nombre de membres / 10 secondes**”, choisissez 10, 15, 20 ou 30 membres, ou une “**Valeur personnalisée**”.

Le seuil se compte sur une fenêtre de 10 secondes. La valeur par défaut est de 10 membres.

:::note
Nous recommandons une valeur comprise entre 10 et 20 membres en 10 secondes pour une bonne efficacité du système.
:::

#### Durée du raidmode {#duration}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Auto RaidMode**”.
4. Dans “**Durée avant désactivation**”, choisissez 1, 2, 5 ou 10 minutes, ou une “**Valeur personnalisée**” de 10 secondes à 24 heures (par exemple `5m 30s`).

La durée par défaut est de 5 minutes.

#### Action pendant le raid {#action}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Auto RaidMode**”.
4. Dans “**Action pendant le raid**”, choisissez l'action à appliquer aux arrivants.

| Action | Effet sur les arrivants | Disponibilité |
|---|---|---|
| “**Bloquer les invitations**” (par défaut) | Discord ferme les invitations du serveur, personne de nouveau n'entre. | Gratuit, communauté requise |
| “**Expulser les arrivants**” | Chaque arrivant est expulsé et reçoit un message privé l'invitant à revenir une fois le mode raid désactivé. | [Premium](/premium) |
| “**Envoyer au captcha**” | Les arrivants passent le captcha au lieu d'être expulsés. | Gratuit, captcha actif requis |
| “**Captcha gelé pendant le raid**” | Les arrivants attendent derrière le captcha et le passent après la vague. | Gratuit, captcha actif en mode Panneau requis |

:::tip
Avec les actions captcha, réglez le [déclenchement du captcha](./captcha.md#trigger) sur **Automatique** : le captcha ne s'impose alors que pendant les raids, et vos arrivants entrent directement le reste du temps.
:::

#### Mode expulsion <span className="badge-premium">Premium</span> {#kick-mode}

L'ancien interrupteur “**Mode expulsion**” est devenu l'action “**Expulser les arrivants**” de l'[action pendant le raid](#action). Elle reste réservée aux serveurs [**Premium**](/premium) et fonctionne sans la communauté Discord.

#### Fermer les MP automatiquement {#close-dm}

Vous pouvez configurer l'**Auto RaidMode** pour qu'il **ferme automatiquement les MP du serveur** dès qu'il s'active. Cela ajoute une couche de protection pendant un raid : les nouveaux comptes ne peuvent plus contacter vos membres en privé pour les [phisher](/learn/token-grabber) ou les arnaquer.

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Auto RaidMode**”.
4. Cliquez sur “**Activer**” à côté de “**Fermer les MP**”.

Lorsque le mode raid se termine, les MP reprennent leur configuration précédente.

:::info
Cette option ne s'applique qu'avec l'action “**Bloquer les invitations**”, qui passe par les actions de sécurité de Discord. Elle est complémentaire de la [Fermeture des MP permanente](./dm-lock.mdx) : sans fermeture permanente, les MP ne sont fermés que pendant un raid actif.
:::

### 🎫 Bypass du mode raid {#bypass-raid}

Vous attendez un membre légitime pendant qu'un raid est en cours ? Autorisez-le à rejoindre malgré le mode raid :

Utilisez la commande : ```/bypass raid [utilisateur]```

Remplacez `[utilisateur]` par l'[identifiant](../guides/id.mdx) souhaité, ce dernier disposera de 10 minutes pour rejoindre le serveur sans être expulsé par le mode raid. Vous pouvez aussi utiliser la commande sans spécifier d'utilisateur pour connaître la liste actuelle des utilisateurs bypass (7 utilisateurs maximum simultanément).

:::warning
Le bypass du mode raid ne s'applique qu'avec l'action “**Expulser les arrivants**” : un utilisateur bloqué au niveau de l'invitation ne peut pas être bypass. Avec les actions captcha, utilisez plutôt le [bypass du captcha](./captcha.md#bypass).
:::

## Âge Minimum {#minage}

L'âge minimum du compte a sa propre section dans la page [Arrivées et accueil](./onboarding.md#minage) : réglage de l'ancienneté, choix de l'action (expulsion, jail jusqu'à l'âge requis, retenue à l'entrée) et bypass.

### 🎂 Bypass de l'âge de compte minimum {#bypass-minage}

Utilisez la commande ```/bypass minage [utilisateur]```, détaillée dans le [bypass de l'âge minimum](./onboarding.md#bypass-minage).

## Questions fréquentes {#faq}

### Le mode raid s'active-t-il automatiquement ?

Oui. Par défaut, nous activons le mode raid dès que 10 utilisateurs rejoignent votre serveur en 10 secondes. Ce seuil est configurable dans les réglages de l'Auto RaidMode.

### Que fait le mode raid aux nouveaux arrivants ?

Cela dépend de l'action choisie : bloquer les invitations (par défaut), expulser les arrivants ([Premium](/premium)), les envoyer au captcha, ou les faire attendre derrière un captcha gelé jusqu'à la fin de la vague.

### Comment activer le mode raid manuellement ?

Un utilisateur disposant de la permission d'expulsion exécute la commande `/raidmode`. Un message est alors publié dans le salon de logs pour signaler l'activation, et l'action choisie s'applique aux arrivants.

### Le mode raid se désactive-t-il tout seul ?

Oui. Il se coupe après la durée choisie dans `/raidmode`, ou à défaut après la durée de l'Auto RaidMode (5 minutes par défaut, 24 heures maximum). Vous pouvez l'arrêter plus tôt avec la même commande.

### Faut-il activer la communauté Discord ?

Seulement pour l'action “**Bloquer les invitations**”, qui utilise la fermeture des invitations de Discord. Les actions “**Expulser les arrivants**”, “**Envoyer au captcha**” et “**Captcha gelé pendant le raid**” fonctionnent sans.

### Peut-on laisser un membre légitime rejoindre pendant un raid ?

Oui, avec la commande `/bypass raid [utilisateur]` quand l'action est “**Expulser les arrivants**” : le membre dispose alors de 10 minutes pour rejoindre sans être expulsé (7 utilisateurs bypass maximum en même temps). Avec les actions captcha, utilisez `/bypass captcha [utilisateur]`.
