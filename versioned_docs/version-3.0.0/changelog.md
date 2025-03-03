# Nouveautés

Découvrez la liste détaillée des modifications qui ont été apportées à RaidProtect.

:::note Une nouvelle version majeure est en cours de préparation
Cela explique le faible nombre de mises à jour récentes. Mais ne vous inquiétez pas, notre équipe technique est toujours active en cas de dysfonctionnement sur les versions actuelles! ️

Pour être informé des dernières actualités sur la prochaine version majeure, [rejoignez notre serveur Discord](https://discord.com/invite/rWEGrNXXzQ).
:::

## 3.0.0 (14/01/2023)

- Réécriture complète visant à préparer les futures mises à jour et à stabiliser le bot.
- Correction de tous les bugs connus à ce jour.
- La commande `?raidmode` utilise désormais la fonctionnalité "Désactiver les invitations".
- Envoi automatique d’un message privé au membre concerné lors de l’application d’une sanction.

## 2.2.0 (13/04/2020)

- Amélioration des performances du bot.
- Importantes modifications dans l'architecture interne du projet.

## 2.1.3 (13/10/2019)

- Suppression de la liste noire et des commandes associées.
- Possibilité de bannir n'importe quel utilisateur avec son identifiant, même s'il n'est pas dans le serveur concerné.
- Affichage de la raison du bannissement dans la réponse de la commande `?ban`.
- La commande `?raidmode` nécessite désormais la permission d'expulser des membres.
- Modification du temps d'expulsion si le captcha n'est pas complété (5 min).
- Améliorations internes diverses.

## 2.1.2 (17/04/2019)

- Ajout de la commande `?userinfo`.
- ~~Ajout des commandes `?lockall` et `?unlockall`~~ (Fonctionnalité supprimée).
- Ajout des commandes `?kick` et `?ban`.
- Ajout du min-age sur le captcha (possibilité de définir un âge minimum de compte pour accéder au serveur).
- Possibilité de configurer la suppression automatique des messages d'invocation de commandes.
- Le salon logs se recrée automatiquement s’il a été supprimé.
- Refonte de la connexion à la base de données.
- Correction de bugs et améliorations diverses.

## 2.1.1 (21/02/2019)

- Suppression du `?settings captcha` (remplacement par `?captcha`).
- Ajout de la possibilité de définir un salon de logs pour le captcha.
- Ajout d'un autorole compatible avec le captcha.
- Simplification du captcha (5/6 lettres bonnes nécessaires).
- Autres modifications mineures.

## 2.1.0 (16/02/2019)

- Ajout du captcha (`?settings captcha`).
- Ajout du niveau de sécurité de l'anti-spam (`?settings spamlevel`).
- Ajout des commandes `?about` et `?invite`.
- Ajout de la commande `?clear`.
- Diverses modifications et corrections de bugs.

## 2.0.1 (04/02/2019)

- Réécriture de l'aide (`?help`).
- Suppression de bugs dans `?lock` et `?unlock`.

## 2.0.0 (26/01/2019)

- Ajout de l'anti-spam.
- Ajout du mode raid automatique.
- Ajout du salon de logs.
- Ajout de la configuration du bot.
- Ajout du verrouillage de salons.
- Nombreuses modifications diverses.