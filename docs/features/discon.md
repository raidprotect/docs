---
title: DISCON
description: "Le DISCON de RaidProtect règle le niveau de danger de votre serveur Discord en un clic : 5 niveaux qui durcissent les protections pendant un raid."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

Le **DISCON** est le niveau de danger de votre serveur, sur le modèle du DEFCON. Pendant un [raid](/learn/discord-raid), votre équipe n'a plus à ouvrir `/settings` pour changer la vérification Discord, activer le captcha et fermer les MP un par un : un clic sur le panneau DISCON, et nous appliquons d'un coup toutes les protections du niveau choisi. Un second clic, et nous défaisons ce que nous avions activé.

## ❓ Comment ça marche ? {#working}

- **Cinq niveaux** : du niveau 5 (calme) au niveau 1 (catastrophe). Plus le niveau est bas, plus la protection est stricte.
- **Un panneau pour l'équipe** : un message posté dans un salon réservé au staff, avec un bouton par niveau. Un clic suffit pour changer de niveau.
- **Des effets calculés pour votre serveur** : ce que fait un niveau dépend de votre configuration (captcha configuré ou non, mode Communauté, action de l'Auto RaidMode). Le barème affiché dans `/discon` et sur le panneau décrit exactement ce qui se passera chez vous.
- **Un retour propre** : en redescendant, nous ne coupons que ce que le DISCON a lui-même activé. Un captcha, une Fermeture des MP ou un mode raid que vous aviez activés à la main restent en place.
- **Un changement manuel** : le niveau ne change jamais tout seul, c'est votre équipe qui décide.

:::info
Le DISCON est gratuit. Seul le [salon vocal de statut](#voice) demande le [Premium](/premium).
:::

## 🚦 Les cinq niveaux {#levels}

| Niveau | Nom | Ce que nous appliquons |
|---|---|---|
| 🔵 **DISCON 5** | Tout va bien | Vérification Discord moyenne, rien d'autre. C'est le niveau par défaut. |
| 🟢 **DISCON 4** | Vigilance | [Captcha](./captcha.md) activé s'il est configuré (salon et rôle). Sans captcha, vérification Discord élevée à la place. |
| 🟡 **DISCON 3** | Alerte | Vérification Discord maximale, captcha activé s'il est configuré, [Fermeture des MP](./dm-lock.mdx). Le captcha et l'âge minimum s'appliquent à **tous** les arrivants. |
| 🔴 **DISCON 2** | Critique | Tout le niveau 3, plus le **captcha gelé** : personne n'entre. Sans captcha, nous activons le [mode raid](./raid-mode.md) à la place. |
| ⚪ **DISCON 1** | Catastrophe | Tout le niveau 2, plus le **verrouillage** : @everyone ne peut plus écrire, réagir, parler en vocal ni utiliser de commandes. |

### Vérification Discord {#verification}

Chaque niveau fixe le niveau de vérification Discord de votre serveur : moyenne aux niveaux 5 et 4 (élevée au niveau 4 si le captcha n'est pas configuré), maximale du niveau 3 au niveau 1. Nous ne la modifions que si elle diffère de la valeur attendue.

### Captcha à l'entrée et captcha gelé {#captcha}

- **Niveau 4** : nous activons le captcha s'il est configuré, sans toucher à son salon ni à son rôle. Il suit alors votre réglage de [déclenchement](./captcha.md#config).
- **Niveau 3** : le captcha s'impose à tous les arrivants, quel que soit son déclenchement (voir [priorité sur les déclencheurs](#priority)).
- **Niveaux 2 et 1** : nous passons le captcha en mode **Panneau** et le **gelons**. Les arrivants reçoivent le rôle de vérification et attendent derrière la porte : ils ne peuvent pas résoudre l'épreuve tant que le niveau tient. Une fois le niveau remonté, ils passent le captcha normalement, sans avoir à rejoindre de nouveau. En redescendant, nous rendons au captcha le mode d'affichage qu'il avait avant.

### Fermeture des MP {#dm-lock}

À partir du niveau 3, nous activons la [Fermeture des MP](./dm-lock.mdx) : c'est par les MP que passent les arnaques quand le serveur se ferme. Elle demande le [mode Communauté](../guides/community.md) et la permission “**Gérer le serveur**” pour RaidProtect. Sans ces prérequis, le niveau s'applique quand même et un avertissement vous indique que le blocage des MP n'a pas pu être activé.

### Verrouillage du niveau 1 {#lockdown}

Au niveau 1, nous retirons au rôle **@everyone** les permissions d'expression : envoyer des messages (y compris dans les fils), ajouter des réactions, créer des fils, envoyer des messages vocaux, joindre des fichiers, parler en vocal et utiliser les commandes d'application. Nous gardons une copie des permissions d'origine et les rétablissons à l'identique en redescendant.

## 🧩 Prérequis des niveaux 2 et 1 {#requirements}

Pour que les niveaux 2 et 1 retiennent vraiment les arrivants à l'entrée, l'une de ces deux conditions doit être remplie :

- **Un captcha configuré** (salon et rôle de vérification) : c'est la solution recommandée. Le captcha gelé retient tout le monde, puis laisse entrer les membres légitimes une fois le calme revenu. [Configurez le captcha](./captcha.md#config).
- **Sinon, l'action de l'Auto RaidMode sur “Expulser les arrivants”** : sans captcha, nous activons le mode raid, et c'est son action qui décide du sort des arrivants. Avec l'action “**Bloquer les invitations**” (réglage par défaut), le mode raid ouvert par le DISCON n'expulse personne. Réglez-la dans la [configuration de l'Auto RaidMode](./raid-mode.md#config).

Le barème de `/discon` en tient compte : la mention « mode raid, les arrivants sont expulsés » n'apparaît que si votre Auto RaidMode expulse.

Le verrouillage du niveau 1 demande aussi que RaidProtect puisse modifier le rôle @everyone (permission “**Gérer les rôles**”). S'il n'y parvient pas, un avertissement vous le signale.

## 🔓 Ce que le niveau 1 ne verrouille pas {#lockdown-leaks}

Le verrouillage ne touche que le rôle **@everyone**. Un membre garde donc la parole si une autre source la lui donne :

- **Un rôle obtenu sans modérateur** qui porte lui-même ces permissions : rôles des questions du Processus d'accueil de Discord, [rôles automatiques](./onboarding.md#autorole) de RaidProtect.
- **Un accord de salon** posé pour l'un de ces rôles.
- **Un accord @everyone posé sur un salon** (par exemple “Envoyer des messages” autorisé dans `#général`).

La configuration DISCON vous liste ces accès dans un encart orange. Pour les neutraliser, retirez ces permissions aux rôles concernés et laissez-les à @everyone au niveau du serveur : la permission du serveur suffit, l'accord sur le salon devient inutile.

:::tip
Les rôles de votre équipe peuvent garder leurs propres accords de salon : c'est ce qui leur permet de continuer à modérer pendant le verrouillage.
:::

## ⚖️ Priorité sur les déclencheurs automatiques {#priority}

Le [captcha](./captcha.md#config) et l'[âge minimum du compte](./raid-mode.md#minage) ont un réglage de déclenchement (Automatique, Intelligent, En permanence). À partir du **niveau 3**, le DISCON passe avant ce réglage : les deux filtres s'appliquent à **tous** les arrivants, sans évaluation au cas par cas. Le DISCON est une décision de votre équipe, un déclencheur automatique ne la discute pas.

## 🛠️ Configuration du DISCON {#config}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Protection**”.
3. Cliquez sur “**Configurer**” à côté de “**DISCON**”.
4. Choisissez le salon du panneau dans le sélecteur, ou cliquez sur “**Créer le salon du panneau**”.
5. En option ([Premium](/premium)), choisissez un salon vocal de statut, ou cliquez sur “**Créer le salon de statut**”.

Sous la configuration, vous retrouvez le niveau actuel, les cinq boutons de niveau et le **barème des niveaux**, qui décrit ce que chaque niveau fera sur votre serveur.

<Settings start="discon" />

### Salon du panneau {#panel-channel}

Les boutons du panneau ne demandent aucune permission : **c'est l'accès au salon qui fait office de contrôle**. Choisissez donc un salon réservé à votre équipe.

- Si vous choisissez un salon visible par tout le serveur, nous le refusons et vous l'indiquons, car n'importe quel membre pourrait y changer le niveau.
- “**Créer le salon du panneau**” crée un salon `#discon` invisible pour @everyone. Ouvrez-le ensuite aux rôles de votre équipe.

### Salon vocal de statut (Premium) {#voice}

Un salon vocal dont le nom affiche le niveau en cours, visible d'un coup d'œil dans la liste des salons : `🔵 DISCON 5`, `🟢 DISCON 4`, `🟡 DISCON 3`, `🔴 DISCON 2`, `⚪ DISCON 1`. Personne ne peut s'y connecter. “**Créer le salon de statut**” le crée à côté du salon du panneau, avec les mêmes permissions.

:::info
Discord limite le renommage d'un salon à environ 2 fois toutes les 10 minutes. Si vous changez de niveau plus vite, le nom du salon vocal peut prendre du retard : le panneau reste la référence.
:::

Sans Premium, l'écran reste accessible et le prompt Premium s'affiche au moment de choisir ou de créer le salon. Un salon vocal choisi pendant une période Premium n'est pas supprimé à son expiration, il n'est simplement plus renommé.

## 📟 Le panneau DISCON {#panel}

Le panneau est un message posté dans le salon choisi. Il affiche le niveau actuel, la légende des cinq niveaux avec leurs effets sur votre serveur, et cinq boutons de niveau. Sa couleur suit le niveau en cours.

Pour changer de niveau, cliquez simplement sur le bouton correspondant. Si le niveau ne peut être appliqué qu'en partie (captcha non configuré, mode Communauté absent, permission manquante), un avertissement éphémère vous l'indique.

Le panneau DISCON est aussi l'[emplacement réservé du `/display staff`](./display.mdx#staff) : vous pouvez y ajouter des blocs depuis `/display staff`, mais son salon se règle uniquement depuis la configuration DISCON.

## 📑 Logs du DISCON {#logs}

Chaque changement de niveau est inscrit dans vos [logs serveur](./moderation.mdx#logs), avec le membre qui l'a fait :

- « Le **niveau de danger** est monté de 5 à 3 par @Modérateur. »
- « Le **niveau de danger** est redescendu de 3 à 5 par @Modérateur. »

## ℹ️ Commande /discon {#command}

Utilisez la commande : ```/discon```

Elle ouvre directement l'écran de configuration du DISCON, sans passer par `/settings`. Elle est réservée aux administrateurs. RaidProtect a besoin des permissions “**Gérer le serveur**” et “**Gérer les salons**”.

<Settings start="disconCommand" />

## Questions fréquentes {#faq}

### Qui peut changer le niveau DISCON ?

Toute personne qui voit le salon du panneau. Les boutons ne vérifient aucune permission : c'est le salon, réservé à l'équipe, qui sert de filtre. Les administrateurs peuvent aussi changer de niveau depuis `/discon` ou `/settings`.

### Le niveau DISCON change-t-il automatiquement pendant un raid ?

Non. Le DISCON est toujours piloté par votre équipe. L'[Auto RaidMode](./raid-mode.md) reste la protection automatique contre les vagues d'arrivées.

### Que se passe-t-il quand on redescend au niveau 5 ?

Nous remettons la vérification moyenne et défaisons ce que le DISCON avait activé : captcha, mode du captcha, Fermeture des MP, mode raid et verrouillage. Ce que vous aviez activé vous-même avant de monter reste en place.

### Le niveau 2 fonctionne-t-il sans captcha ?

Oui, mais il active alors le mode raid, qui n'expulse les arrivants que si l'action de l'Auto RaidMode est “Expulser les arrivants”. Pour que le niveau 2 retienne tout le monde, configurez le captcha.

### Pourquoi certains membres peuvent encore écrire au niveau 1 ?

Le verrouillage ne retire la parole qu'au rôle @everyone. Un rôle d'arrivée ou un accord de salon qui donne la permission d'écrire la rend malgré tout. La configuration DISCON liste ces accès pour que vous puissiez les retirer.

### Le salon vocal de statut est-il obligatoire ?

Non, il est optionnel et réservé au Premium. Le panneau suffit à piloter et à afficher le niveau.
