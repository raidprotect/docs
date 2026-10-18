---
title: Doubles comptes
description: "Les doubles comptes de RaidProtect lient les comptes d'une même personne sur votre serveur Discord : bannir l'un bannit les autres, sans contournement."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

Les **doubles comptes** permettent à votre équipe de déclarer que plusieurs comptes Discord appartiennent à une même personne. Les [sanctions](./sanctions.mdx) de l'un s'étendent alors aux autres : un membre banni ne revient plus avec un second compte pour contourner sa sanction.

:::info Expérimentation : Identity Update
Les doubles comptes font partie de l'**Identity Update**, prévue pour la version 3.7.0. En attendant sa sortie, ils sont en expérimentation, en bêta publique pour les serveurs [Premium](/premium).
:::

## ❓ Comment ça marche ? {#working}

- **Un groupe par personne** : un groupe rassemble les comptes que votre équipe considère comme une même personne. Les groupes sont propres à votre serveur : rien n'est partagé avec d'autres serveurs.
- **Sanctions partagées** ([Premium](/premium)) : le bannissement, l'expulsion, le mute, l'emprisonnement et le timeout s'étendent aux autres comptes du groupe, selon le [mode](#modes) que vous choisissez pour chaque sanction. La sanction reste au nom du compte visé, les autres en reçoivent le statut. Sans Premium, les comptes se lient et se consultent, mais aucune sanction ne s'étend : le log de la sanction cite alors les autres comptes du membre.
- **Levée commune** : lever la sanction de l'un des comptes, quel qu'il soit, la lève pour tous, avec ou sans Premium.
- **Recherche groupée** : [rechercher les sanctions](./sanctions.mdx#search) d'un compte montre aussi celles des autres comptes du groupe.
- **AutoMod de Discord** : les timeouts et mutes posés par l'AutoMod de Discord s'étendent aussi aux comptes liés.
- **Repérés par le captcha** : l'[Activity du captcha](./captcha.md#activity-alts) peut lier d'elle-même deux comptes sûrs d'être la même personne, ou proposer le lien à votre équipe.
- **Logs** : les liens, les retraits et les changements de compte principal sont enregistrés dans les [logs de modération](./moderation.mdx#logs).

**Limites :** aucune, ni sur le nombre de comptes par groupe ni sur le nombre de groupes.

## 🔗 Lier des comptes avec /alt {#alt}

Utilisez la commande : ```/alt [membre] [autre]```

- Sans option : affiche la liste des groupes de comptes liés du serveur. Le bouton “**Lier des comptes**” y lie deux membres du serveur, ou deux comptes absents par leurs identifiants.
- Avec `[membre]` : affiche le groupe de ce compte, ou ce compte seul s'il n'est lié à aucun autre. Chaque compte y apparaît avec son état (banni du serveur, sur le serveur, pas sur le serveur, en quarantaine), le compte principal en tête.
- Avec `[membre]` et `[autre]` : lie directement les deux comptes, déclarés comme la même personne.

Remplacez `[membre]` et `[autre]` par la mention ou l'[identifiant](../guides/id.mdx) des comptes souhaités. Les bots ne peuvent pas être liés.

Depuis le panneau d'un groupe :

- “**Lier un membre**” ajoute un compte au groupe : un membre du serveur, ou l'identifiant Discord d'un compte absent du serveur.
- Le sélecteur “**Modifier un compte du groupe**” ouvre une fenêtre pour en faire le “**Compte principal du groupe**” ou le “**Retirer ce compte du groupe**”. Un compte retiré n'est plus traité comme la même personne, mais s'il a été banni avec le groupe, il le reste.

Vous retrouvez aussi les comptes liés d'un membre dans la [vue de modération `/modview`](./moderation.mdx#modview), avec le bouton “**Gérer**”.

:::info
La commande `/alt` et ses boutons demandent la permission **Bannir des membres**.
:::

## 🛠️ Configuration des doubles comptes {#config}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Modération**”.
3. Cliquez sur “**Configurer**” à côté de “**Doubles comptes**”.

<Settings start="alts" />

### Sanctions des comptes liés <span className="badge-premium">Premium</span> {#modes}

Pour chaque sanction, choisissez comment elle s'étend au groupe :

1. Sur l'écran Doubles comptes, cliquez sur “**Modifier**” à côté de “**Sanctions des comptes liés**”.
2. Dans la fenêtre, choisissez un mode pour chaque sanction.

Le sélecteur “**Tout régler sur…**” de l'écran applique le même mode à toutes les sanctions d'un coup.

<SettingsModal name="altsModes" />

| Mode | Effet | Sanctions concernées |
|---|---|---|
| “**Tout de suite**” *(par défaut)* | Bannissement : tous les comptes liés sont bannis aussitôt, présents ou non. Expulsion : les comptes liés présents sur le serveur sont expulsés aussi. Mute, emprisonnement et timeout : les comptes présents sont sanctionnés tout de suite, les autres à leur arrivée. | Toutes |
| “**Présents tout de suite, les autres à l'arrivée**” | Les comptes présents sont bannis aussitôt, les comptes absents le sont s'ils rejoignent le serveur pendant le ban. | Bannissement |
| “**Piège**” | Seul le compte visé est sanctionné. Un autre compte du groupe qui arrive ou écrit pendant la sanction est pris pour contournement et reçoit la [sanction de contournement](#evasion). | Toutes sauf l'expulsion |
| “**Désactivé**” | La sanction ne vise que le compte choisi. | Toutes |

### Comptes protégés et garde-fous {#safeguards}

- **Comptes protégés** : une sanction ne s'étend jamais au propriétaire du serveur, aux bots, aux modérateurs ni à vous-même.
- **Beaucoup de comptes d'un coup** : au-delà de 10 comptes liés, les suivants ne sont pas sanctionnés tout de suite. Le message de la sanction propose de les sanctionner aussi d'un clic.
- **Pause automatique** : si trop de comptes liés sont sanctionnés automatiquement en une heure, ces sanctions automatiques se mettent en pause sur le serveur, et vos logs vous préviennent. Elles reprennent quand le rythme redescend. Les sanctions à la main ne sont pas touchées.

### Sanction de contournement {#evasion}

La sanction de contournement s'applique à un compte lié pris en mode “**Piège**” : il arrive sur le serveur ou y écrit pendant la sanction de son groupe.

1. Sur l'écran Doubles comptes, cliquez sur “**Modifier**” à côté de “**Sanction de contournement**”.
2. Dans la fenêtre, choisissez la “**Sanction**” et, si besoin, sa “**Durée**”.

<SettingsModal name="altsEvasion" />

- “**Reste de la sanction**” *(par défaut)* : le compte partage la sanction du groupe jusqu'à sa fin, sans sanction à son nom.
- **Une sanction** (Bannissement, Expulsion, Mute, Emprisonnement ou Timeout) : elle est posée à son nom, avec sa propre durée, et ne se lève pas avec le groupe. Laissez la durée vide pour une sanction définitive (ex. : `1h`, `3j`, `2w`).

:::info
Un timeout demande toujours une durée, de 28 jours au plus. Le mute et l'emprisonnement demandent que leur [rôle](./sanctions.mdx#config) soit configuré.
:::

### Un seul compte par personne {#single-account}

Avec ce réglage, seul le **compte principal** de chaque groupe circule sur le serveur. Les autres comptes sont mis en **quarantaine** avec le [rôle de jail](./sanctions.mdx#jail) (sanction “**Quarantaine**” dans l'historique). Ils en sortent d'eux-mêmes s'ils deviennent le compte principal ou s'ils sont retirés du groupe.

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Modération**”.
3. Cliquez sur “**Configurer**” à côté de “**Doubles comptes**”.
4. Cliquez sur “**Activer**” à côté de “**Un seul compte par personne**”.

:::warning
Ce réglage exige un [rôle Jail](./sanctions.mdx#jail). Sans lui, RaidProtect refuse de l'activer.
:::

Pour changer le compte principal d'un groupe, utilisez `/alt` avec l'un des comptes, puis le sélecteur “**Modifier un compte du groupe**”.

## Questions fréquentes {#faq}

### Les doubles comptes sont-ils partagés entre serveurs ?

Non. Les groupes sont propres à votre serveur et rien n'est partagé avec d'autres serveurs.

### Que se passe-t-il quand je débannis l'un des comptes ?

Lever la sanction de l'un des comptes la lève pour tous les comptes du groupe.

### Puis-je lier un compte qui n'est pas sur mon serveur ?

Oui. Dans le panneau `/alt`, cliquez sur “**Lier un membre**” et saisissez son identifiant Discord.

### Qui peut utiliser /alt ?

Les membres qui ont la permission **Bannir des membres**, sur un serveur [Premium](/premium) tant que l'Identity Update est en expérimentation.
