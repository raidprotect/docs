---
title: Signalements
description: "Le système de signalement de RaidProtect permet à votre communauté de remonter les contenus et membres suspects, avec une gestion claire pour vos modérateurs."
---

import { ReportsSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

import ReportsMockup from '@site/src/components/DiscordMessage/mockups/reports';

<ReportsMockup />

Le système de signalement de RaidProtect permet à votre communauté de remonter en quelques clics tout message ou membre suspect à vos modérateurs, via un clic droit, un bouton dédié ou la commande `/report`. Il se configure pour optimiser le traitement des signalements par votre équipe.

## ❓ Comment fonctionnent les signalements ? {#working}
Les membres peuvent signaler un contenu via 4 méthodes principales.

1. **Clic droit sur un message** 
Un membre peut faire un clic droit sur un message qu'il estime enfreindre le règlement, sélectionner **`Applications`**, puis cliquer sur **`Signaler ce message`**. Une fenêtre contextuelle s'ouvrira, permettant à l'utilisateur d'ajouter une explication.

2. **Clic droit sur un profil** 
De la même manière, un membre peut faire un clic droit sur un profil qu'il juge problématique, choisir **`Applications`**, puis cliquer sur **`Signaler l'utilisateur`**. Une fenêtre contextuelle s'ouvrira alors pour permettre à l'utilisateur de préciser ce qu'il signale (photo de profil, nom d'utilisateur, bio, activité en vocal, activité en messages privés) et de fournir des détails supplémentaires.

3. **Bouton sur un panneau d'information**
Si la fonctionnalité "Signalement" est activée sur un [panneau d'information (`/display public`)](./display.mdx), un bouton "Signaler" est disponible directement sous le panneau, permettant aux membres de signaler rapidement un utilisateur.

4. **Commande Slash**
Les membres peuvent également signaler un message ou un utilisateur via la commande **`/report`** dans n'importe quel salon du serveur.

Utilisez la commande : ```/report (membre) (raison)```

Remplacez `(membre)` par l'utilisateur souhaité et `(raison)` par le motif de l'infraction.

## 🚩 Configuration des signalements {#config}

Avant que le système de signalement ne soit pleinement fonctionnel, il est impératif de configurer un **salon de signalement** où tous les signalements seront envoyés. Vous devez définir un salon de logs ou de notifications pour recevoir les alertes concernant les signalements.

<ReportsSettingsMockup />

### Configurer le salon {#config-channel}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Sélectionnez le bouton "**Signalements**".
3. Cliquez sur le bouton "**Salon**".
4. Sélectionnez le salon souhaité (_ex : #signalements ou #reports_). 
Si vous ne disposez pas de salon adapté, vous pouvez choisir d'en créer un automatiquement depuis le bouton "**En créer un pour moi**".

### Configurer le rôle de notification {#config-role}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Sélectionnez le bouton "**Signalements**".
3. Cliquez sur le bouton "**Rôle**".
4. Sélectionnez le rôle souhaité (_ex : @Modérateur ou @Notifs reports_). 
Si vous ne disposez pas de rôle adapté, vous pouvez choisir d'en créer un automatiquement depuis le bouton "**En créer un pour moi**".

:::warning
Le salon doit être réservé aux modérateurs et administrateurs afin d'assurer une gestion correcte des signalements.
:::

### Regroupement des signalements {#group}

Le bouton "**Regroupement**" détermine comment sont présentés plusieurs signalements visant le même membre :

- **Activé** : les signalements visant le même membre sont regroupés dans une seule alerte.
- **Désactivé** : chaque signalement crée sa propre alerte séparée.

### Notification du signaleur {#notify}

Depuis le bouton "**Notification du signaleur**", vous choisissez ce que le membre à l'origine du signalement reçoit comme retour :

| Niveau | Effet |
|---|---|
| **Désactivé** | Les signaleurs ne reçoivent aucune notification. |
| **Traitement seul** | On indique au signaleur que son signalement a été traité. |
| **Avec l'issue** | On indique si le signalement a été accepté ou refusé. |
| **Avec le modérateur** | On indique aussi quel modérateur a traité le signalement. |

### Rôle de confiance (Premium) {#trusted-role}

Le "**Rôle de confiance**" permet à vos membres les plus fiables d'agir immédiatement en cas d'urgence : lorsqu'un membre disposant de ce rôle effectue un signalement, il peut cocher l'option "**Action préventive**" pour appliquer un **timeout préventif de 24 heures** à l'utilisateur signalé, en attendant qu'un modérateur traite le signalement.

- Le timeout préventif est **silencieux** : l'utilisateur signalé ne reçoit pas de MP tant qu'un modérateur n'a pas confirmé la sanction.
- Si le signalement porte sur un message, celui-ci est supprimé.
- La sanction est liée au signalement : le modérateur qui le traite peut la confirmer ou l'annuler.

:::info
Cette fonctionnalité est réservée aux serveurs [**Premium**](/premium).
:::

### Réputation des signaleurs {#bad-reporters}

Le bouton "**Faux signaleurs**" permet d'agir sur les membres dont les signalements sont régulièrement refusés :

- **Seuil** : nombre de signalements refusés avant action (3, 5, 6, 10 ou 15 ; 0 pour désactiver).
- **Fenêtre** : période de calcul (7, 14, 30, 60 ou 90 jours).
- **Action** une fois le seuil atteint :
  - **Notifier les modérateurs** : une alerte est envoyée avec des boutons "**Bloquer les signalements**" et de sanction.
  - **Bloquer automatiquement** : le membre ne peut plus envoyer de signalements.
  - **Sanctionner automatiquement** : la sanction configurée est appliquée.
  - **Bloquer et sanctionner** : combine les deux actions précédentes.
- **Sanction** : la sanction appliquée en mode automatique (Warn, Timeout, Mute, Kick ou Ban).

:::tip
Vous pouvez aussi bloquer manuellement un membre des signalements à tout moment avec la [commande `/block`](./utilities.mdx#block).
:::

## Gérer les signalements {#manage}

Chaque signalement arrive dans le salon configuré sous forme d'une alerte avec plusieurs actions :

- **🙋 Prendre en charge :** Cliquez sur "**Prendre en charge**" pour indiquer aux autres modérateurs que vous vous occupez de ce signalement. Le bouton devient alors "**Pris en charge**".

- **✅ Résolu :** Si le signalement est valide mais qu'aucune sanction n'est nécessaire (situation réglée autrement : rappel à l'ordre, message supprimé par son auteur...), cliquez sur "**Résolu**". Le signalement est marqué comme accepté, sans sanctionner l'utilisateur signalé. Pour sanctionner, utilisez plutôt le menu "**Sanctionner ce membre…**" ci-dessous.

- **❌ Refuser :** Si le signalement n'est pas légitime, cliquez sur "**Refuser**". Les refus sont comptabilisés pour la [réputation des signaleurs](#bad-reporters).

- **⚖️ Sanctionner :** Le menu "**Sanctionner ce membre…**" sous l'alerte permet d'appliquer directement une sanction à l'utilisateur signalé, sans quitter le salon de signalements.

:::note
Assurez-vous que vos modérateurs sont bien formés à l'utilisation de cette fonctionnalité et encouragez vos membres actifs à l'utiliser de manière responsable ! 
:::

## Questions fréquentes {#faq}

### Comment signaler un membre ou un message ?

Un membre peut faire un clic droit sur un message ou un profil, choisir « Applications » puis « Signaler ce message » ou « Signaler l'utilisateur ». Il peut aussi passer par le bouton d'un panneau d'information, ou par la commande `/report (membre) (raison)` dans n'importe quel salon.

### Où arrivent les signalements ?

Ils sont envoyés dans le salon de signalement que vous configurez. Ce salon doit être réservé aux modérateurs et administrateurs pour assurer un traitement correct des signalements.

### Comment limiter les faux signalements ?

Le bouton « Faux signaleurs » agit sur les membres dont les signalements sont régulièrement refusés. Vous définissez un seuil et une fenêtre de calcul, puis une action automatique : notifier les modérateurs, bloquer les signalements, sanctionner, ou les deux. Vous pouvez aussi bloquer un membre manuellement avec la [commande `/block`](./utilities.mdx#block).
