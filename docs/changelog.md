---
title: Nouveautés
---

Découvrez la liste détaillée des modifications qui ont été apportées à RaidProtect.

## 3.1.0 (08/02/2025) {#3-1-0}

- Ajout des Slash Commands.
- [Internationalisation](./language.md) (Ajout de l'anglais).
- Nouvelle [commande `/settings`](./setup.md#settings) sous forme de pannel dans Discord.
- Nouvelle [commande `/setup`](./setup.md#install) sous forme d'Onboarding.
- Uniformisation des messages.
- Possibilité de choisir le nombre d’essais et le temps alloué à la résolution du [captcha](./features/captcha#config).
- Possibilité d'[ignorer des utilisateurs et des rôles](./features/anti-spam.md#ignore) dans l'[antispam](./features/anti-spam.md).
- Ajout de la [commande `/report`](./features/reports.md).
- Possibilité de choisir si la [commande `/lock`](./features/channel-lock.md) renomme le salon verrouillé avec `🔒`.
- Possibilité de [choisir le prefix](./guides/prefix.md) des commandes hybrides.
- Détection automatique des problèmes de permissions liés aux salons et aux rôles pour éviter les erreurs de configuration.
- Vérification automatique de la visibilité du salon de vérification dans le processus d’accueil de Discord.
- Amélioration des performances et de la stabilité du bot.

## 3.0.0 (14/01/2023) {#3-0-0}

- Réécriture complète visant à préparer les futures mises à jour et à stabiliser le bot.
- Correction de tous les bugs connus à ce jour.
- La [commande `?raidmode`](./features/raid-mode.md) utilise désormais la fonctionnalité "Désactiver les invitations".
- Envoi automatique d’un message privé au membre concerné lors de l’application d’une sanction.

## 2.2.0 (13/04/2020) {#2-2-0}

- Amélioration des performances du bot.
- Importantes modifications dans l'architecture interne du projet.

## 2.1.3 (13/10/2019) {#2-1-3}

- Suppression de la liste noire et des commandes associées.
- Possibilité de bannir n'importe quel utilisateur avec son identifiant, même s'il n'est pas dans le serveur concerné.
- Affichage de la raison du bannissement dans la réponse de la [commande `?ban`](./features/moderation.md#ban).
- La [commande `?raidmode`](./features/raid-mode.md) nécessite désormais la permission d'expulser des membres.
- Modification du temps d'expulsion si le captcha n'est pas complété (5 min).
- Améliorations internes diverses.

## 2.1.2 (17/04/2019) {#2-1-2}

- Ajout de la [commande `?userinfo`](./features/utilities.md#userinfo).
- ~~Ajout des commandes `?lockall` et `?unlockall`~~ (Fonctionnalité supprimée).
- Ajout des commandes [`?kick`](./features/moderation.md#kick) et [`?ban`](./features/moderation.md#ban).
- Ajout du [min-age sur le captcha](./features/captcha.md#minage) (possibilité de définir un âge minimum de compte pour accéder au serveur).
- Possibilité de configurer la suppression automatique des messages d'invocation de commandes.
- Le salon logs se recrée automatiquement s’il a été supprimé.
- Refonte de la connexion à la base de données.
- Correction de bugs et améliorations diverses.

## 2.1.1 (21/02/2019) {#2-1-1}

- Suppression du `?settings captcha` (remplacement par `?captcha`).
- Ajout de la possibilité de définir un [salon de logs](./features/captcha.md#logs) pour le captcha.
- Ajout d'un [autorole](./features/captcha.md#autorole) compatible avec le captcha.
- Simplification du [captcha](./features/captcha.md) (5/6 lettres bonnes nécessaires).
- Autres modifications mineures.

## 2.1.0 (16/02/2019) {#2-1-0}

- Ajout du captcha (`?settings captcha`).
- Ajout du niveau de sécurité de l'anti-spam (`?settings spamlevel`).
- Ajout des commandes `?about` et `?invite`.
- Ajout de la [commande `?clear`](./features/utilities.md#clear).
- Diverses modifications et corrections de bugs.

## 2.0.1 (04/02/2019) {#2-0-1}

- Réécriture de l'aide (`?help`).
- Suppression de bugs dans [`?lock`](./features/channel-lock.md#lock) et [`?unlock`](./features/channel-lock.md#unlock).

## 2.0.0 (26/01/2019) {#2-0-0}

- Ajout de l'[anti-spam](./features/anti-spam.md).
- Ajout du [mode raid automatique](./features/raid-mode.md#config).
- Ajout du salon de logs.
- Ajout de la configuration du bot.
- Ajout du [verrouillage de salons](./features/channel-lock.md).
- Nombreuses modifications diverses.