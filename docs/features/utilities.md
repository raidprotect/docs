---
title: Utilitaires
---
Des fonctionnalités supplémentaires pour simplifier la gestion de votre serveur. 🔧

En plus des fonctionnalités principales comme le système de captcha et la protection anti-raid, RaidProtect propose plusieurs outils secondaires qui peuvent rendre la gestion de votre serveur encore plus fluide. 

## ⚙️ Préfixe des commandes RaidProtect {#prefix}

### Préfixe désactivé (par défaut)

Par défaut, RaidProtect utilise uniquement les commandes Slash (`/`) pour interagir avec le bot. Cela garantit une utilisation intuitive et cohérente avec les standards de Discord.

### Préfixe activé (optionnel)

Si vous préférez utiliser certaines commandes avec un préfixe personnalisé, vous pouvez activer cette option. Le préfixe par défaut en cas d’activation est `?`, mais il peut être modifié selon vos besoins. Une fois activé, ces commandes sont également utilisables avec le préfixe configuré : 
- [`/raidmode`](./raid-mode.md)
- [`/ban`](./moderation.md#ban)
- [`/kick`](./moderation.md#kick)
- [`/lock`](./channel-lock.md#lock)
- [`/unlock`](./channel-lock.md#unlock)
- [`/userinfo`](#userinfo)


## 💬 Comment activer ou désactiver le préfixe

1. Ouvrez le menu de configuration en tapant [`/settings`](../setup.md#settings).
2. Accédez à l’option "**Préfixe**" des commandes.
3. Activez ou désactivez le préfixe selon vos préférences.
Si activé, personnalisez le préfixe en saisissant le caractère ou la chaîne souhaitée.

:::note
Les commandes Slash (`/`) restent disponibles même si le préfixe est activé.
Il est recommandé d’éviter les préfixes déjà utilisés par d’autres bots pour éviter les conflits de commandes.
:::

## 👤 Informations Utilisateur {#userinfo}

La commande `/userinfo` vous permet d’obtenir des informations détaillées sur un utilisateur, telles que la **date de création de son compte** Discord ainsi que la **date à laquelle il a rejoint** votre serveur (si c’est un membre).

Utilisez la commande :

```/userinfo [@utilisateur]```
Remplacez `[@utilisateur]` par la mention ou l’identifiant souhaité.