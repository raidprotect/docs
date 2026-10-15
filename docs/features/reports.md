---
title: Signalements
description: "Le système de signalement de RaidProtect permet à votre communauté de remonter les contenus et membres suspects, avec une gestion claire pour vos modérateurs."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import ReportsMockup from '@site/src/components/DiscordMessage/mockups/reports';

<ReportsMockup />

Le système de signalement de RaidProtect permet à votre communauté de remonter en quelques clics tout message ou membre suspect à vos modérateurs, via un clic droit, un bouton dédié ou la commande `/report`. Il se configure pour optimiser le traitement des signalements par votre équipe.

## ❓ Comment fonctionnent les signalements ? {#working}
Les membres peuvent signaler un contenu via 4 méthodes principales.

1. **Clic droit sur un message**
Un membre peut faire un clic droit sur un message qu'il estime enfreindre le règlement, sélectionner **`Applications`**, puis cliquer sur **`Signaler ce message`**. Une fenêtre s'ouvre, dans laquelle il précise la raison du signalement.

2. **Clic droit sur un profil**
De la même manière, un membre peut faire un clic droit sur un profil qu'il juge problématique, choisir **`Applications`**, puis cliquer sur **`Signaler l'utilisateur`**. Une fenêtre s'ouvre alors pour lui permettre de préciser ce qu'il signale (photo de profil, nom d'utilisateur, bio, activité en vocal, activité en messages privés) et la raison.

3. **Bouton sur un panneau d'information**
Si la fonctionnalité "Signalement" est activée sur un [panneau d'information (`/display public`)](./display.mdx), un bouton “**Signaler un membre**” est disponible directement sous le panneau, permettant aux membres de signaler rapidement un utilisateur.

4. **Commande Slash**
Les membres peuvent également signaler un utilisateur via la commande **`/report`** dans n'importe quel salon du serveur.

Utilisez la commande : ```/report (membre)```

Remplacez `(membre)` par l'utilisateur souhaité. La raison se saisit ensuite dans une fenêtre, comme pour le clic droit sur un profil.

:::info
Activer les signalements active aussi la [mise en cache des messages](./moderation.mdx#snipe) : RaidProtect garde une heure de messages en mémoire pour joindre le contenu signalé à l'alerte.
:::

## 🚩 Configuration des signalements {#config}

Les signalements arrivent dans un **salon de signalement**. Si vous n'en choisissez pas, ils sont envoyés dans votre salon de logs général. Tous les réglages se trouvent sur un même écran :

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Modération**”.
3. Cliquez sur “**Configurer**” à côté de “**Signalements**”.
4. Cliquez sur “**Activer**” à droite du titre de l'écran pour allumer le système de signalement.

<Settings start="reports" />

### Configurer le salon {#config-channel}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Modération**”.
3. Cliquez sur “**Configurer**” à côté de “**Signalements**”.
4. Cliquez sur “**Modifier**” à côté de “**Réception des signalements**”.
5. Dans la fenêtre, sélectionnez le salon souhaité (_ex : #signalements ou #reports_), ou cochez “**Créer un salon pour moi**” pour que RaidProtect crée un salon privé `signalements`.

Si vous ne sélectionnez aucun salon, ou le salon de logs, les signalements suivent votre salon de logs général.

<SettingsModal name="reportChannel" />

### Configurer le rôle de notification {#config-role}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Modération**”.
3. Cliquez sur “**Configurer**” à côté de “**Signalements**”.
4. Cliquez sur “**Modifier**” à côté de “**Rôle de notification**”.
5. Dans la fenêtre, sélectionnez le rôle souhaité (_ex : @Modérateur ou @Notifs reports_), ou cochez une “**Autre mention**” : `@everyone`, `@here` ou “**Créer un rôle pour moi**” (RaidProtect crée le rôle `Nouveau signalement`).

Sans rôle configuré, c'est `@here` qui est mentionné.

<SettingsModal name="reportRole" />

:::warning
Le salon doit être réservé aux modérateurs et administrateurs afin d'assurer une gestion correcte des signalements.
:::

### Regroupement des signalements {#group}

La bascule “**Regroupement**” détermine comment sont présentés plusieurs signalements visant le même membre :

- **Activé** *(par défaut)* : les signalements visant le même membre sont regroupés dans une seule alerte.
- **Désactivé** : chaque signalement crée sa propre alerte séparée.

Cliquez sur “**Activer**” ou “**Désactiver**” à côté de “**Regroupement**” dans l'écran Signalements.

<a id="config-notify"></a>

### Notification du signaleur {#notify}

Le bouton “**Modifier**” à côté de “**Notification du signaleur**” ouvre une fenêtre dans laquelle vous choisissez ce que le membre à l'origine du signalement reçoit en MP une fois son signalement traité :

| Niveau | Effet |
|---|---|
| **Désactivé** | Les signaleurs ne reçoivent aucune notification. |
| **Traitement seul** *(par défaut)* | On indique au signaleur que son signalement a été traité. |
| **Avec l'issue** | On indique si le signalement a été accepté ou refusé. |
| **Avec le modérateur** | On indique aussi quel modérateur a traité le signalement. |

Le signaleur ne reçoit qu'un seul message par signalement, même s'il a été regroupé avec d'autres.

<SettingsModal name="reportNotify" />

<a id="config-trusted-role"></a>

### Rôle de confiance <span className="badge-premium">Premium</span> {#trusted-role}

Le “**Rôle de confiance**” permet à vos membres les plus fiables d'agir immédiatement en cas d'urgence : lorsqu'un membre disposant de ce rôle effectue un signalement, il peut cocher l'option “**Action préventive**” pour appliquer un **timeout préventif de 24 heures** à l'utilisateur signalé, en attendant qu'un modérateur traite le signalement.

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Modération**”.
3. Cliquez sur “**Configurer**” à côté de “**Signalements**”.
4. Cliquez sur “**Modifier**” à côté de “**Rôle de confiance**”.
5. Dans la fenêtre, sélectionnez le rôle, ou cochez “**Créer un rôle pour moi**” (RaidProtect crée le rôle `Signaleur de confiance`). Laissez le champ vide pour désactiver le rôle de confiance.

Fonctionnement du timeout préventif :

- Le timeout préventif est **silencieux** : l'utilisateur signalé ne reçoit pas de MP tant qu'un modérateur n'a pas confirmé la sanction.
- Sa raison est “**Sanction préventive :**” suivie de la raison du signalement.
- Si le signalement porte sur un message, celui-ci est supprimé.
- L'alerte est marquée comme urgente : la mention est précédée de “**🛑 Signalement urgent**”.
- La sanction est liée au signalement : le modérateur qui le traite peut la confirmer ou l'annuler.

:::info
Cette fonctionnalité est réservée aux serveurs [**Premium**](/premium). Sans premium, la ligne affiche “**Désactivé**” et le bouton présente l'offre.
:::

### Réputation des signaleurs {#bad-reporters}

Le bouton “**Modifier**” à côté de “**Faux signaleurs**” ouvre la fenêtre “**Réputation des signaleurs**”, qui permet d'agir sur les membres dont les signalements sont régulièrement refusés :

- **Seuil** : nombre de signalements refusés avant action (3, 5, 6, 10 ou 15 ; “**Désactivé**” par défaut).
- **Fenêtre** : période de calcul (7, 14, 30, 60 ou 90 jours ; 30 jours par défaut).
- **Action** une fois le seuil atteint :
  - “**Notifier les modérateurs**” *(par défaut)* : une alerte est envoyée avec le bouton “**Bloquer les signalements**” et un bouton de sanction (ex. : “**Avertir le signaleur**”).
  - “**Bloquer automatiquement**” : le membre ne peut plus envoyer de signalements.
  - “**Sanctionner automatiquement**” : la sanction configurée est appliquée.
  - “**Bloquer et sanctionner**” : combine les deux actions précédentes.
- **Sanction** : la sanction appliquée au faux signaleur (Avertissement par défaut, Timeout, Mute, Expulsion ou Bannissement).

<SettingsModal name="reportBad" />

:::info
Sans [rôle Mute](./sanctions.mdx#mute) configuré, la sanction Mute retombe sur un timeout.
:::

:::tip
Vous pouvez aussi bloquer manuellement un membre des signalements à tout moment avec la [commande `/block`](./utilities.mdx#block).
:::

## Gérer les signalements {#manage}

Chaque signalement arrive dans le salon configuré sous forme d'une alerte avec plusieurs actions :

- **🙋 Prendre en charge :** Cliquez sur “**Prendre en charge**” pour indiquer aux autres modérateurs que vous vous occupez de ce signalement. Le bouton devient alors “**Pris en charge**”.

- **✅ Résolu :** Si le signalement est valide mais qu'aucune sanction n'est nécessaire (situation réglée autrement : rappel à l'ordre, message supprimé par son auteur...), cliquez sur “**Résolu**”. Le signalement est marqué comme accepté, sans sanctionner l'utilisateur signalé. Pour sanctionner, utilisez plutôt le menu “**Sanctionner ce membre…**” ci-dessous.

- **❌ Refuser :** Si le signalement n'est pas légitime, cliquez sur “**Refuser**”. Les refus sont comptabilisés pour la [réputation des signaleurs](#bad-reporters).

- **⚖️ Sanctionner :** Le menu “**Sanctionner ce membre…**”, disponible une fois le signalement pris en charge, permet d'appliquer directement une sanction à l'utilisateur signalé, sans quitter le salon de signalements.

Lorsque le [regroupement](#group) est activé, les signalements suivants visant le même membre s'ajoutent à l'alerte existante (par exemple “**3 messages & 1 profil signalé par 2 utilisateurs**”) au lieu d'en créer une nouvelle.

:::note
Assurez-vous que vos modérateurs sont bien formés à l'utilisation de cette fonctionnalité et encouragez vos membres actifs à l'utiliser de manière responsable !
:::

## Questions fréquentes {#faq}

### Comment signaler un membre ou un message ?

Un membre peut faire un clic droit sur un message ou un profil, choisir « Applications » puis « Signaler ce message » ou « Signaler l'utilisateur ». Il peut aussi passer par le bouton d'un panneau d'information, ou par la commande `/report (membre)` dans n'importe quel salon : la raison se saisit ensuite dans une fenêtre.

### Où arrivent les signalements ?

Ils sont envoyés dans le salon de signalement que vous configurez, ou à défaut dans votre salon de logs général. Ce salon doit être réservé aux modérateurs et administrateurs pour assurer un traitement correct des signalements.

### Quel rôle est mentionné à chaque signalement ?

Le rôle de notification que vous configurez, ou `@everyone`. Sans réglage, RaidProtect mentionne `@here`.

### Comment limiter les faux signalements ?

Le réglage « Faux signaleurs » agit sur les membres dont les signalements sont régulièrement refusés. Vous définissez un seuil et une fenêtre de calcul, puis une action : notifier les modérateurs, bloquer les signalements, sanctionner, ou les deux. Vous pouvez aussi bloquer un membre manuellement avec la [commande `/block`](./utilities.mdx#block).
