---
title: Verrouillage de salons
description: "La commande /lock de RaidProtect verrouille un salon en un instant pour empêcher l'envoi de messages, temporairement ou jusqu'à déverrouillage."
---

import ChannelLockMockup from '@site/src/components/DiscordMessage/mockups/channel-lock';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

{/* <ChannelLockMockup /> : masquée pour le moment */}

Il arrive parfois qu’il soit nécessaire de verrouiller temporairement un salon pour empêcher les utilisateurs d’y envoyer des messages. Grâce à la commande de verrouillage, cela devient un jeu d’enfant !

## 🔒 Verrouiller un salon {#lock}

Utilisez la commande : ```/lock [#salon] [durée] [raison] [--silent]```

Cette commande retire au rôle **@everyone** les permissions d’envoyer des messages et d’envoyer des messages dans les fils, dans le salon visé, empêchant ainsi tous les utilisateurs d’y poster.

- Remplacez `[#salon]` par la mention ou l'[identifiant](../guides/id.mdx) du salon à verrouiller. Sans salon, nous verrouillons celui où vous faites la commande. Les salons textuels, d'annonces, vocaux, forums, médias, de conférence et les catégories sont acceptés ; les fils ne le sont pas.
- Remplacez `[raison]` pour indiquer pourquoi le salon est verrouillé (ex. : *nettoyage du chat*, *annonce importante*, etc.).
- Ajoutez `--silent` pour ne rien annoncer dans le salon : seul vous recevez la confirmation.

:::info
Un même salon ne peut être verrouillé qu'une fois toutes les 10 minutes.
:::

### Verrouiller une catégorie {#lock-category}

Verrouiller une catégorie verrouille aussi tous ses salons visibles (hors fils) en une fois, et `/unlock` sur la catégorie les déverrouille ensemble. Un salon déjà fermé à l'écriture (règles, annonces) est laissé tel quel, au verrouillage comme au déverrouillage. Quand un verrouillage temporaire de catégorie expire, une seule ligne de log nomme la catégorie et le nombre de salons déverrouillés.

### Verrouillage temporaire {#lock-duration}

Le paramètre `[durée]` permet de **déverrouiller automatiquement le salon** après la durée indiquée (par ex. `15m`, `1h`, `2d`). Utile pour une mise au calme rapide sans avoir à penser à débloquer le salon manuellement. La durée est plafonnée à la durée maximale d'une sanction.

## 🔓 Déverrouiller un salon {#unlock}

Utilisez la commande : ```/unlock [#salon] [raison] [--silent]```

Cette commande rétablit au rôle **@everyone** les permissions d’envoyer des messages telles qu'elles étaient avant le verrouillage, permettant à nouveau aux utilisateurs d’y poster. Remplacez `[raison]` pour indiquer pourquoi le salon est déverrouillé (ex. : *discussion rouverte*, *annonce terminée*, etc.). Avec `--silent`, rien n'est annoncé dans le salon.

:::warning
Pour que le verrouillage fonctionne correctement, aucun rôle ouvert à tous ne doit avoir de permission explicite d'écrire dans ce salon. Sinon, les membres avec ces rôles pourront toujours discuter. Les accords posés pour les rôles de votre équipe, eux, sont utiles : ils gardent la parole au staff pendant un `/lock`, et l'[audit](./audit.md) ne les signale plus comme redondants.
:::
:::info
Les commandes `lock` et `unlock` sont [utilisables par préfixe](../guides/prefix.md). Elles demandent la permission “**Gérer les messages**”. RaidProtect a besoin des permissions “**Gérer les salons**” et “**Gérer les rôles**” pour modifier les permissions du salon.
:::

## ✏️ Configuration du cadenas {#config}

Vous pouvez choisir si les salons verrouillés sont renommés avec un cadenas : `/lock` renomme alors le salon en `🔒-nom-du-salon`, et `/unlock` retire le préfixe. On voit ainsi l'état du salon directement dans la liste des salons. Cette option est **désactivée par défaut**.

Pour activer ou désactiver le cadenas :
1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Utilitaires**”.
3. Cliquez sur “**Activer**” (ou “**Désactiver**”) à côté de “**Verrouillage de salon**”. Le bouton fonctionne comme un interrupteur, un simple clic suffit.

<Settings start="home:utilities" />

:::info
Le renommage demande la permission “**Gérer les salons**”.
:::

## Questions fréquentes {#faq}

### Peut-on verrouiller un autre salon que celui où l'on se trouve ?

Oui, indiquez le salon en premier argument : `/lock #général 30m Raid en cours`.

### Pourquoi certains membres peuvent-ils encore écrire dans un salon verrouillé ?

Le verrouillage ne retire la parole qu'au rôle @everyone. Un rôle qui a une permission explicite d'écrire dans ce salon la garde.

### Comment ajouter un cadenas au nom des salons verrouillés ?

Dans `/settings`, onglet Utilitaires, activez “Verrouillage de salon”. L'option est désactivée par défaut.
