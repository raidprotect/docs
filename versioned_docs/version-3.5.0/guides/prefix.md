---
title: Commandes par messages
description: "Activez les commandes par messages de RaidProtect en complément des commandes Slash, choisissez leur préfixe et appliquez-leur les permissions de Discord."
---

import { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

## Préfixe désactivé (par défaut) {#disabled}

Par défaut, RaidProtect utilise uniquement les commandes Slash (`/`). Cela garantit une utilisation intuitive et cohérente avec les standards de Discord.

## Commandes par messages (optionnel) {#activated}

Si vous préférez taper certaines commandes dans un message, choisissez un préfixe, par exemple `?`. Ces commandes deviennent alors utilisables avec lui :

- [`?raidmode`](../features/raid-mode.md) et [`?joinlock`](../features/join-lock.mdx)
- [`?ban`](../features/moderation.mdx#ban), [`?tempban`](../features/moderation.mdx#tempban), [`?softban`](../features/moderation.mdx#softban) et [`?unban`](../features/moderation.mdx#unban)
- [`?kick`](../features/moderation.mdx#kick)
- [`?mute` | `?timeout` | `?tempmute`](../features/moderation.mdx#timeout) et [`?unmute` | `?untimeout` | `?untempmute`](../features/moderation.mdx#untimeout)
- [`?jail`](../features/moderation.mdx#jail), [`?tempjail`](../features/moderation.mdx#tempjail) et [`?unjail`](../features/moderation.mdx#unjail)
- [`?warn`](../features/moderation.mdx#warn)
- [`?slowmode` | `?slow`](../features/moderation.mdx#slowmode)
- [`?lock`](../features/channel-lock.md#lock) et [`?unlock`](../features/channel-lock.md#unlock)
- [`?clear` | `?clean`](../features/moderation.mdx#clear)
- [`?nick` | `?nickname` | `?rename` | `?setnick`](../features/moderation.mdx#nick)
- [`?userinfo` | `?ui`](../features/utilities.mdx#userinfo), [`?serverinfo` | `?ginfo`](../features/utilities.mdx#serverinfo) et [`?inviteinfo` | `?ii`](../features/utilities.mdx#inviteinfo)

## 💬 Choisir le préfixe {#config}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Dans l'onglet “**Général**”, cliquez sur “**Modifier**” à côté de “**Commandes par messages**”.
3. Choisissez un préfixe dans la liste (`?`, `!`, `>` ou `$`), ou saisissez le vôtre dans “**Préfixe personnalisé**” (trois caractères au plus, prioritaire sur la liste). Choisissez “**Désactivé**” pour couper les commandes par messages.
4. Cochez “**Suppression à l'invocation**” si vous voulez que RaidProtect supprime le message qui contient la commande dès qu'il l'a lue.

<SettingsModal name="prefix" />

:::note
Les commandes Slash (`/`) restent disponibles même avec un préfixe.
Évitez les préfixes déjà utilisés par d'autres bots pour éviter les conflits de commandes.
:::

## 🔒 Appliquer les permissions de commandes {#permissions}

Les permissions des commandes RaidProtect se règlent dans Discord : **Paramètres du serveur → Intégrations → RaidProtect**. Vous pouvez y autoriser ou interdire chaque commande par rôle, membre ou salon. Discord ne les applique qu'aux commandes Slash.

Pour qu'elles s'appliquent aussi aux commandes par messages et aux sanctions proposées par le menu “**Sanctionner**” (clic droit sur un membre) :

1. Faites la [commande `/settings`](../setup.md#settings).
2. Dans l'onglet “**Général**”, cliquez sur “**Modifier**” à côté de “**Permissions**”.
3. Cochez “**Appliquer les permissions des intégrations**”.

<SettingsModal name="permissions" />

Un membre autorisé à utiliser `/ban` pourra alors bannir depuis le menu “**Sanctionner**”, et un membre à qui `/ban` est interdit ne pourra plus utiliser `?ban`. L'option est désactivée par défaut.

:::warning
Le menu **Intégrations** de Discord n'est disponible que sur l'application PC et Web, pas sur mobile.
:::
