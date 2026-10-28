---
title: Arrivées et accueil
description: "L'accueil de RaidProtect souhaite la bienvenue aux nouveaux membres de votre serveur Discord, leur donne leurs rôles et filtre les comptes trop récents."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

L'**accueil** de RaidProtect s'occupe des nouveaux membres de votre serveur Discord dès leur arrivée : un **message de bienvenue** avec une carte à leur nom, des **rôles automatiques**, et un **âge minimum du compte** qui tient à distance les comptes créés pour l'occasion, souvent utilisés lors des [raids](/learn/discord-raid). Ces trois réglages se trouvent dans l'onglet “**Arrivées**” de `/settings`, à côté du [captcha](./captcha.md) et de l'[Auto RaidMode](./raid-mode.md).

## ❓ Comment ça marche ? {#working}

Quand un utilisateur rejoint votre serveur, le [mode raid](./raid-mode.md#action), l'[âge minimum du compte](#minage) puis le [captcha](./captcha.md) s'appliquent avant son admission. Une fois admis, il reçoit ses [rôles automatiques](#autorole) et son [message de bienvenue](#welcome-message).

## 👋 Message de bienvenue {#welcome-message}

Le message de bienvenue est envoyé dans le salon de votre choix quand un membre est admis sur le serveur. Il contient votre texte et une **carte de bienvenue** générée pour chaque membre : son avatar, « Bienvenue sur » suivi du nom du serveur, et son numéro de membre.

<Settings start="welcome" />

### Activer le message de bienvenue {#welcome-config}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Message de bienvenue**”.
4. Dans “**Salon de bienvenue**”, choisissez le salon textuel où le message sera envoyé. Choisir un salon active le message.

L'interrupteur en haut à droite de l'écran active ou désactive le message de bienvenue. Un aperçu du message s'affiche sous l'écran et se met à jour à chaque modification.

:::info
Le salon de bienvenue ne peut pas être celui du captcha, du jail, du HoneyPot ou du DISCON. Si le salon est supprimé, le réglage est vidé.
:::

### Texte et variables {#welcome-text}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Message de bienvenue**”.
4. Dans “**Contenu du message**”, cliquez sur “**Texte**”.
5. Écrivez votre message (1 200 caractères maximum), puis validez. Laissez le champ vide pour revenir au message par défaut.

<SettingsModal name="welcomeText" />

Le texte par défaut est « Bienvenue `{user.mention}` sur **`{server.name}`** ! 🎉 », dans la langue du serveur. Vous pouvez utiliser ces variables :

| Variable | Remplacée par |
|---|---|
| `{user.mention}` | La mention du membre |
| `{user.name}` | Son nom d'utilisateur |
| `{user.displayname}` | Son nom affiché |
| `{user.id}` | Son [identifiant](../guides/id.mdx) |
| `{server.name}` | Le nom du serveur |
| `{server.member_count}` | Le nombre de membres du serveur |
| `{server.id}` | L'identifiant du serveur |

### Mentionner le membre {#welcome-mention}

L'option “**Mentionner le membre**”, activée par défaut, notifie le nouveau membre quand son message de bienvenue est posté. Elle ne mentionne que les arrivants, jamais @everyone ni les rôles.

### Boutons {#welcome-buttons}

Vous pouvez ajouter sous le message des boutons qui mènent vers un salon du serveur, par exemple “Lire le règlement”.

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Message de bienvenue**”.
4. Dans “**Gérer les boutons**”, choisissez “**Ajouter un bouton**”.
5. Donnez un nom au bouton, choisissez le salon à lier et, si vous le souhaitez, un **emoji** : un emoji standard, ou un emoji de ce serveur (`<:nom:id>`, `:nom:` ou son identifiant). Un emoji invalide n'empêche pas l'enregistrement : le bouton est créé sans emoji.

Pour modifier ou supprimer un bouton, sélectionnez-le dans la même liste.

**Limites :** 2 boutons en version gratuite, 4 boutons en version [premium](/premium). Si le Premium expire, seuls les 2 premiers boutons restent affichés.

### Couleur <span className="badge-premium">Premium</span> {#welcome-color}

Avec le [Premium](/premium), cliquez sur “**Couleur**” dans “**Contenu du message**” pour choisir la couleur de la barre à gauche du message : une couleur RaidProtect de la liste, ou un code hexadécimal (par exemple `#D35F5F`). Sans choix, le message reprend la couleur du pseudo du bot si vous l'avez [personnalisé](/premium), sinon la couleur par défaut. La carte de bienvenue est teintée de la même couleur.

### Afflux et raids {#welcome-raid}

- **Regroupement :** quand beaucoup de membres arrivent en même temps, les arrivées sont regroupées pour ne pas inonder le salon.
- **Pause pendant un raid :** tant que le [mode raid](./raid-mode.md) de RaidProtect ou la [Fermeture des Jointures](./join-lock.mdx) est actif, aucun message de bienvenue n'est envoyé.

## 🏷️ Rôles automatiques {#autorole}

Les rôles automatiques sont donnés à chaque nouveau membre dès son arrivée, ou après la réussite du [captcha](./captcha.md) s'il est actif. Ils remplacent l'ancien rôle automatique du captcha, dont le réglage a été repris automatiquement.

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Rôles automatiques**”.
4. Sélectionnez un ou plusieurs rôles.

Pour retirer tous les rôles automatiques, cliquez sur “**Réinitialiser**”.

<Settings start="autorole" />

**Limites :** 3 rôles en version gratuite, 10 rôles en version [premium](/premium).

:::warning
Évitez les rôles qui portent des permissions : un rôle donné automatiquement ne devrait accorder aucun pouvoir. RaidProtect refuse les rôles gérés par une intégration, les rôles au-dessus du sien ou du vôtre, ceux qui portent une permission de modération et le rôle non vérifié du captcha (donné juste après le captcha, il bloquerait de nouveau le membre) : les rôles acceptables de votre sélection sont gardés, et un message à part explique pourquoi les autres sont refusés (si tous le sont, la configuration en place reste inchangée). Il vous alerte si un rôle choisi gagne des permissions plus tard.
:::
:::info
Si votre serveur utilise un autre bot pour son rôle automatique, il risque de donner le rôle avant le captcha. Remplacez-le par les rôles automatiques de RaidProtect.
:::

## 🤖 Arrivée des bots {#bots}

Par défaut, un bot ajouté au serveur reçoit les [rôles automatiques](#autorole) comme un membre. La section “**Bots**” de l'onglet “**Arrivées**” change cela.

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Bots**”.

- **Rôles des bots** : donnés à chaque bot qui arrive, **à la place** des rôles automatiques. Sans rôle choisi, les bots reçoivent les rôles automatiques. **Limites :** 1 rôle en version gratuite, 15 rôles avec le [Premium](/premium). RaidProtect refuse les rôles gérés par une intégration, ceux au-dessus du vôtre ou du sien et ceux qui donnent la permission **Administrateur**. Un rôle qui donne une permission de modération est accepté, avec un avertissement : gardez-le pour des bots de confiance. Les bots ne passent pas le captcha et reçoivent leurs rôles dès leur arrivée.
- **Expulser les bots non autorisés** : tout bot ajouté est expulsé aussitôt, sauf si le propriétaire l'a autorisé avant avec la commande `/bypass bot`. Désactivé par défaut. **Seul le propriétaire du serveur** peut activer ou désactiver cette option et autoriser un bot.

### Autoriser un bot {#bypass-bot}

Utilisez la commande : ```/bypass bot [bot]```

Remplacez `[bot]` par le bot à autoriser : il pourra rejoindre le serveur **une fois**, dans les 10 minutes qui suivent, sans être expulsé. Sans bot, la commande liste les bots actuellement autorisés. Chaque autorisation est notée dans vos logs.

:::info
RaidProtect a besoin de la permission “**Expulser des membres**” et d'un rôle au-dessus de celui du bot pour l'expulser. Sinon, le log l'indique et le bot reste.
:::

## 🎂 Âge minimum du compte {#minage}

Pour renforcer la sécurité, vous pouvez exiger un âge minimum pour les comptes Discord des nouveaux membres. Les comptes créés juste avant un raid ne passent pas la porte. Le filtre s'applique à chaque arrivée.

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Âge minimum du compte**”.
4. Dans “**Âge minimum du compte**”, choisissez 2 heures, 12 heures, 1 jour ou 2 jours, ou une “**Valeur personnalisée**” (par exemple `0a 3j 1h`, 10 ans maximum).
5. Dans “**Action**”, choisissez ce qui arrive aux comptes trop récents.

Pour désactiver le filtre, cliquez sur “**Réinitialiser**”. RaidProtect a besoin de la permission `KICK_MEMBERS`.

<Settings start="minage" />

### Actions {#minage-action}

| Action | Effet sur un compte trop récent |
|---|---|
| “**Expulser**” (par défaut) | Il est expulsé à chaque tentative tant que son compte est trop récent. |
| “**Quarantaine jusqu'à l'âge requis**” | Il entre sans rien voir du serveur (via le [rôle Jail](./sanctions.mdx#jail)), et sort de sa quarantaine dès qu'il a l'âge requis, à la date indiquée. |
| “**Retenir à l'entrée**” | Il est bloqué sur un [captcha](./captcha.md) qu'il ne peut résoudre qu'une fois l'âge atteint. |

Le compte reçoit un message privé avec la date à laquelle il aura accès au serveur. Les expulsions, quarantaines et bannissements sont notés dans le salon de logs.

:::info
- “**Quarantaine jusqu'à l'âge requis**” demande un Rôle de Jail, configuré dans l'onglet “**Modération**” > “**Sanctions**”. Sans lui, RaidProtect vous propose de le configurer ou de vous replier sur “**Bannir jusqu'à l'âge requis**” : le compte sort du serveur et son bannissement est levé automatiquement à la bonne date.
- “**Retenir à l'entrée**” demande un captcha actif en mode **Panneau (Interactif)**.
:::

### 🎫 Bypass de l'âge minimum {#bypass-minage}

Utilisez la commande : ```/bypass minage [utilisateur]```

Remplacez `[utilisateur]` par l'[identifiant](../guides/id.mdx) souhaité, ce dernier disposera de 10 minutes pour rejoindre le serveur sans être bloqué par l'âge requis. Vous pouvez aussi utiliser la commande sans spécifier d'utilisateur pour connaître la liste actuelle des utilisateurs bypass. Elle lève aussi la quarantaine d'un compte trop récent. `/unjail` ne la lève pas : il indique la commande à utiliser.

## Questions fréquentes {#faq}

### Quand le message de bienvenue est-il envoyé ?

Quand le membre est admis : dès son arrivée si le captcha ne s'applique pas, sinon après la réussite du captcha. Il n'est pas envoyé pendant un raid ou une Fermeture des Jointures.

### Peut-on retirer la carte de bienvenue ?

Non, la carte de bienvenue est jointe à chaque message de bienvenue. Avec le Premium, vous pouvez changer sa couleur.

### Combien de rôles automatiques peut-on donner ?

3 rôles en version gratuite et 10 avec le Premium. Les rôles qui portent une permission de modération sont refusés.

### Les rôles automatiques sont-ils donnés avant le captcha ?

Non. Quand le captcha s'applique au membre, ses rôles automatiques lui sont donnés après la réussite du captcha.

### Quel âge minimum choisir ?

Une valeur de quelques heures à 1 jour suffit à écarter la plupart des comptes créés pour un raid, sans gêner les vrais membres. La [commande `/setup`](../setup.md) pose 6 heures par défaut.

### Un compte trop récent est-il banni ?

Non, pas par défaut : il est expulsé à chaque tentative. Vous pouvez aussi le mettre en quarantaine jusqu'à l'âge requis ou le retenir derrière le captcha. Le bannissement temporaire n'est qu'un repli quand le rôle Jail n'est pas configuré.
