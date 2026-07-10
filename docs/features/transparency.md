---
title: Transparence
---

La Transparence permet de montrer à vos membres comment le serveur est modéré. Elle repose sur trois éléments complémentaires : des **récapitulatifs de modération périodiques**, un **modlog public** et la **commande `/transparency`**.

## 🛠️ Configuration de la Transparence {#config}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Cliquez sur le bouton "**Transparence**".

Le menu vous donne accès aux "**Récaps périodiques**", au "**Modlog public**" et au bouton d'activation de la "**Commande transparency**".

## 📊 Récaps périodiques {#recaps}

Un récap est un résumé agrégé des actions de modération, publié automatiquement dans un salon selon la fréquence choisie.

1. Dans le menu Transparence, cliquez sur "**Récaps périodiques**".
2. Cliquez sur "**Ajouter un récap**".
3. Configurez le récap : la **fréquence**, le **salon** de publication et éventuellement un rôle à **mentionner**.

Les fréquences disponibles sont : **Hebdomadaire** (par défaut), **Toutes les deux semaines**, **Mensuel**, **Trimestriel** et **Annuel**. Un aperçu du récap est posté dans le salon dès que vous le définissez.

Le récap contient :
- le **nombre total d'actions de modération** sur la période ;
- le détail par type de sanction (bannissements, softbans, expulsions, timeouts, mutes, emprisonnements, avertissements et autres actions) ;
- le nombre d'**arnaques bloquées par [ScamLens](/blog/threat-weather-june-2026)** ;
- la répartition entre actions **automatiques** et actions **de l'équipe**.

:::info
En version gratuite, vous pouvez configurer **un seul récap**. Les serveurs **Premium** peuvent en créer plusieurs simultanément (par exemple un récap hebdomadaire pour l'équipe et un récap mensuel public).
:::

## 📢 Modlog public {#modlog}

Le modlog public publie **chaque action de modération** dans un salon visible par vos membres, avec uniquement les informations que vous choisissez d'afficher.

1. Dans le menu Transparence, cliquez sur "**Modlog public**".
2. Sélectionnez un salon, ou laissez RaidProtect en créer un pour vous (nommé "**public-modlog**", en lecture seule pour @everyone).
3. Choisissez les **éléments affichés** : "**Raison**", "**Modérateur**", "**Durée**", "**Membre sanctionné**".
4. Choisissez les **sources** incluses : "**Manuelles (équipe)**" et/ou "**Automatiques (RaidProtect)**".

Lorsque l'action est automatique et que l'affichage du modérateur est activé, le modlog indique "RaidProtect" à la place du nom du modérateur.

:::note
La publication est volontairement régulée pour éviter d'inonder le salon lors d'un raid : les messages sont envoyés progressivement.
:::

## 📜 La commande `/transparency` {#command}

Utilisez la commande : ```/transparency```

Elle permet à n'importe quel membre de consulter le **dernier rapport de transparence** de la période close (réponse éphémère, visible uniquement par le membre).

- La commande doit être activée via le bouton "**Commande transparency**" dans le menu Transparence.
- Si vous avez plusieurs récaps, le bouton "**Alimenter /transparency**" sur un récap le désigne comme la source utilisée par la commande.
