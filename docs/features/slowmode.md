---
title: Slowmode préventif
description: "Le slowmode préventif de RaidProtect ajuste automatiquement le mode lent des salons de votre serveur Discord pour garder un débit de messages lisible."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

Le **slowmode préventif** de RaidProtect ajuste automatiquement le [mode lent](./moderation.mdx#slowmode) de vos salons pour tenir un **débit de messages** par minute. Quand un salon s'emballe (annonce, live, afflux de nouveaux membres, début de [raid](/learn/discord-raid)), nous montons le mode lent ; quand il se calme, nous le redescendons. Vos modérateurs n'ont plus à surveiller le chat pour le régler à la main.

:::info Expérimentation : Shield Update
Le slowmode préventif est réservé aux serveurs [Premium](/premium). Il fait partie de la **Shield Update**, prévue pour la version 3.6.0, en expérimentation d'ici sa sortie.
:::

## ❓ Comment ça marche ? {#working}

- **Un débit de messages** : pour chaque salon régulé, vous choisissez combien de messages par minute il peut recevoir (30 par défaut). Au-delà, le mode lent monte tout seul.
- **Des bornes** : le mode lent reste toujours entre le **slowmode minimum** et le **slowmode maximum** que vous avez fixés pour le salon.
- **Un ajustement continu** : nous ajustons le mode lent selon le débit réel, et il monte tout de suite quand un salon s'emballe.
- **Une redescente progressive** : quand le salon se calme, le mode lent revient peu à peu vers le minimum.
- **Journal d'audit** : chaque changement porte le motif « Slowmode automatique ».

## 🛠️ Configuration du slowmode préventif {#config}

### Ajouter un salon régulé {#add}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Protection**”.
3. Cliquez sur “**Configurer**” à côté de “**Slowmode préventif**”.
4. Cliquez sur “**Ajouter**” à côté d'un emplacement libre.
5. Choisissez le salon (salon textuel ou salon d'annonces).

<Settings start="slowmode" />

**Limites :** 6 salons régulés par serveur.

:::warning Permissions requises
RaidProtect doit avoir la permission `Gérer les salons` dans chaque salon régulé.
:::

### Régler un salon {#channel}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Protection**”.
3. Cliquez sur “**Configurer**” à côté de “**Slowmode préventif**”.
4. Cliquez sur “**Modifier**” à côté du salon.
5. Choisissez le “**Débit de messages**”, le “**Slowmode minimum**” et le “**Slowmode maximum**”.

<Settings start="slowmodeChannel" />

| Réglage | Valeurs proposées | Par défaut |
|---|---|---|
| **Débit de messages** | de 5 à 120 messages par minute | 30 messages / min |
| **Slowmode minimum** | de 0 à 10 secondes | 0 seconde (aucun minimum) |
| **Slowmode maximum** | de 5 secondes à 10 minutes | 2 minutes |

Pour une valeur qui n'est pas dans la liste, cliquez sur “**Personnaliser**” et saisissez vos propres valeurs (par exemple `40` messages par minute, un minimum de `0s`, un maximum de `2m 30s`). Le mode lent ne peut pas dépasser 6 heures, la limite de Discord.

<SettingsModal name="slowmodeCustom" />

Depuis l'écran d'un salon, vous pouvez aussi :
- couper ou relancer la régulation avec l'interrupteur en haut à droite. Couper la régulation remet le mode lent du salon à 0 ;
- cliquer sur “**Appliquer à tous les salons régulés**” pour recopier ces réglages sur tous vos salons régulés ;
- cliquer sur “**Supprimer**” pour libérer l'emplacement.

## 🕒 Slowmode préventif et commande /slowmode {#manual}

Si un modérateur utilise la [commande `/slowmode`](./moderation.mdx#slowmode) sur un salon régulé, sa valeur manuelle est appliquée et la **régulation automatique est désactivée** pour ce salon. Un message le signale. Pour relancer la régulation, réactivez-la depuis l'écran du salon dans `/settings`.

## Questions fréquentes {#faq}

### Quelle différence entre le slowmode préventif et l'anti-spam ?

L'[anti-spam](./anti-spam.mdx) sanctionne les membres qui spamment. Le slowmode préventif ne sanctionne personne : il ralentit tout un salon quand le débit global devient trop élevé, pour garder une discussion lisible.

### Combien de salons peut-on réguler ?

Jusqu'à 6 salons par serveur, avec chacun son débit de messages et ses bornes.

### Le slowmode préventif est-il gratuit ?

Non, il est réservé aux serveurs Premium. Il fait aussi partie de la Shield Update, encore en expérimentation.

### Que se passe-t-il si je règle le mode lent à la main ?

La commande /slowmode applique votre valeur et désactive la régulation automatique de ce salon. Vous pouvez la réactiver dans /settings, onglet Protection, Slowmode préventif.
