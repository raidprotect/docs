---
title: Transparence
description: "La Transparence de RaidProtect montre à vos membres comment le serveur est modéré : récapitulatifs périodiques, modlog public et commande /transparency."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import TransparencyMockup from '@site/src/components/DiscordMessage/mockups/transparency';

<TransparencyMockup />

La Transparence permet de montrer à vos membres comment le serveur est modéré. Elle repose sur trois éléments complémentaires : des **récapitulatifs de modération périodiques**, un **modlog public** et la **commande `/transparency`**.

## 🛠️ Configuration de la Transparence {#config}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Modération**”.
3. Cliquez sur “**Configurer**” à côté de “**Transparence**”.

L'écran vous donne accès aux “**Récaps périodiques**”, au “**Modlog public**” et à la bascule de la “**Commande /transparency**”.

<Settings start="transparency" />

## 📊 Récaps périodiques {#recaps}

Un récap est un résumé agrégé des actions de modération, publié automatiquement dans un salon selon la fréquence choisie.

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Modération**”.
3. Cliquez sur “**Configurer**” à côté de “**Transparence**”.
4. Cliquez sur “**Configurer**” à côté de “**Récaps périodiques**”.
5. Cliquez sur “**Ajouter**” à côté d'un emplacement libre.
6. L'écran du nouveau récap s'ouvre : réglez sa **fréquence**, son **salon** de publication, éventuellement un rôle à **mentionner**, puis cliquez sur “**Activer**” à droite du titre.

Pour revenir plus tard sur un récap, cliquez sur “**Modifier**” à côté de lui dans la liste.

<Settings start="recaps" />

Un nouveau récap est créé désactivé, hebdomadaire, publié vers 08:00, dans le salon du modlog public. Les fréquences disponibles sont : **Hebdomadaire** (par défaut), **Toutes les deux semaines**, **Mensuel**, **Trimestriel** et **Annuel**. Deux récaps de même fréquence ne peuvent pas être publiés dans le même salon.

Depuis l'écran d'un récap, vous pouvez aussi :

- “**Renommer**” le récap (laissez le champ vide pour reprendre le nom de la fréquence) ;
- régler son “**Horaire**” de publication (voir ci-dessous) ;
- cliquer sur “**Alimenter /transparency**” pour en faire la source de la [commande `/transparency`](#command) ;
- le “**Supprimer**”.

Le récap contient :
- le **nombre total d'actions de modération** sur la période ;
- le détail par type de sanction (bannissements, softbans, expulsions, timeouts, mutes, emprisonnements, avertissements et autres actions) ;
- le nombre d'**arnaques bloquées par [ScamLens](./scam-images.md)** ;
- la répartition entre actions **automatiques** et actions **de l'équipe**.

**Limites :** 1 récap en version gratuite, 5 récaps en version [Premium](/premium) (par exemple un récap hebdomadaire pour l'équipe et un récap mensuel public).

### Horaire de publication {#recap-schedule}

1. Sur l'écran d'un récap, cliquez sur “**Horaire**”.
2. Dans la fenêtre, choisissez l'“**Heure de publication**” (heure locale, de `00:00` à `23:00`).

<SettingsModal name="recapSchedule" />

| Version | Moment de publication |
|---|---|
| Gratuite | Dans une plage de 12 h à partir de l'heure choisie |
| [Premium](/premium) | Vers l'heure choisie, à 1 h près |

L'heure choisie suit le **fuseau horaire du serveur**, rappelé sous la ligne “**Horaire**”. Il se règle une seule fois pour tout le serveur, dans l'onglet “**Général**” :

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Général**”.
3. Cliquez sur “**Modifier**” à côté de “**Fuseau horaire**”.
4. Choisissez votre décalage dans “**Fuseau (UTC)**”, ou saisissez une “**Timezone personnalisée**” comme `Europe/Paris`, qui est prioritaire et gère l'heure d'été automatiquement.

<SettingsModal name="timezone" />

## 📢 Modlog public {#modlog}

Le modlog public publie **chaque action de modération** dans un salon visible par vos membres, avec uniquement les informations que vous choisissez d'afficher.

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Modération**”.
3. Cliquez sur “**Configurer**” à côté de “**Transparence**”.
4. Cliquez sur “**Configurer**” à côté de “**Modlog public**”.
5. Sélectionnez un salon, ou cliquez sur “**En créer un pour moi**” (RaidProtect crée le salon `public-modlog`, en lecture seule pour @everyone).
6. Dans “**Informations affichées**”, choisissez : “**Raison**”, “**Modérateur**”, “**Durée**”, “**Membre sanctionné**” (par défaut : Raison et Durée).
7. Dans “**Sanctions publiées**”, choisissez : “**Manuelles (équipe)**” et/ou “**Automatiques (RaidProtect)**” (par défaut : les deux).
8. Cliquez sur “**Activer**” à droite du titre de l'écran.

<Settings start="modlog" />

Lorsque l'action est automatique et que l'affichage du modérateur est activé, le modlog indique "RaidProtect" à la place du nom du modérateur.

## 📜 La commande `/transparency` {#command}

Utilisez la commande : ```/transparency```

Elle permet à n'importe quel membre de consulter le **dernier rapport de transparence** de la période close (réponse éphémère, visible uniquement par le membre).

- La commande doit être activée avec la bascule “**Commande /transparency**” de l'écran Transparence.
- Si vous avez plusieurs récaps, le bouton “**Alimenter /transparency**” sur un récap le désigne comme la source utilisée par la commande. Ce récap est marqué d'une ⭐ dans la liste.

## Questions fréquentes {#faq}

### Combien de récaps puis-je programmer ?

Un seul en version gratuite, jusqu'à cinq avec le [Premium](/premium).

### À quelle heure le récap est-il publié ?

À l'heure que vous choisissez, dans le fuseau horaire du serveur réglé dans l'onglet “**Général**” de `/settings`. En version gratuite, la publication a lieu dans une plage de 12 heures à partir de cette heure ; avec le Premium, à une heure près.

### Mes membres voient-ils qui les a sanctionnés ?

Seulement si vous cochez “**Modérateur**” dans les informations affichées du modlog public. Pour une action automatique, le modlog indique alors RaidProtect.
