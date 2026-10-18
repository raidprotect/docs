---
title: Rôle de Tag
description: "Le Rôle de Tag de RaidProtect attribue automatiquement un rôle aux membres qui arborent le tag de votre serveur Discord, et récompense leur engagement."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';
import TagRoleConceptMockup from '@site/src/components/DiscordMessage/mockups/tag-role-concept';

<TagRoleConceptMockup />

Le Rôle de Tag permet d’attribuer automatiquement un rôle aux membres qui ajoutent [le tag de votre serveur](https://support.discord.com/hc/fr/articles/31444248479639-Tag-du-serveur) à leur profil Discord. En attribuant un rôle à ces membres, vous valorisez leur engagement et [les encouragez à représenter activement votre serveur](https://dfr.gg/blog/2025/05/09/revolution-boosts-tags-serveur-publics#tags). C’est un moyen simple mais efficace de renforcer l’identité collective, tout en récompensant les ambassadeurs les plus fidèles de votre communauté.

## ❓ Fonctionnement du Rôle de Tag {#working}

Le fonctionnement est simple. Dès qu’un membre ajoute le tag du serveur sur son profil Discord, RaidProtect lui attribue automatiquement un rôle spécifique.
Si le membre retire le tag, le rôle lui est retiré.

Nous détectons le changement à la prochaine mise à jour du profil du membre (pseudo, avatar, bannière, rôles, tag…).

:::info
Si le Tag n'est pas activé ou que votre serveur ne dispose pas encore de la fonctionnalité, le Rôle de Tag n’aura aucun effet.
:::

## 🎖️ Configuration du Rôle de Tag {#config}

La configuration se fait en quelques clics :
1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Utilitaires**”.
3. Cliquez sur “**Configurer**” à côté de “**Rôle de Tag**”.
4. Sélectionnez un rôle existant via le sélecteur ou cliquez sur “**En créer un pour moi**” : nous créons un rôle `Tag` sans aucune permission.
5. Vous pouvez à tout moment désactiver le Rôle de Tag en cliquant sur le bouton “**Réinitialiser**”.

Chaque changement de configuration du Rôle de Tag est inscrit dans vos logs serveur.

<Settings start="tagrole" />

:::tip
Vos membres auront le rôle à leur prochaine modification de profil (Pseudo, Avatar, Bannière, Rôles, Tag…).
:::

### Commande /tagrole {#command}

Utilisez la commande : ```/tagrole```

Elle ouvre directement l'écran de configuration du Rôle de Tag, sans passer par `/settings`. Elle est réservée aux membres qui ont la permission “**Gérer les rôles**”.

### Rôles refusés {#refused-roles}

Le Rôle de Tag est donné automatiquement à n'importe quel membre : nous refusons donc les rôles qui pourraient poser problème.

- **Un rôle déjà utilisé par RaidProtect** : rôle de jail, rôle de mute, rôle de vérification du captcha ou rôle automatique.
- **Un rôle géré** par une application ou par le boost du serveur : Discord interdit de l'attribuer manuellement. Créez un rôle normal à la place.
- **Un rôle placé au-dessus du rôle de RaidProtect** : faites glisser le rôle de RaidProtect au-dessus dans **Paramètres du serveur > Rôles**.
- **Un rôle placé au-dessus de votre rôle le plus haut** (sauf pour le propriétaire du serveur).
- **Un rôle avec des permissions sensibles** : Administrateur, Bannir, Expulser, Gérer le serveur, les salons, les messages, les rôles, les webhooks, les expressions, les événements ou les fils.

### Encarts d'alerte {#warnings}

L'écran de configuration vous prévient quand le Rôle de Tag ne peut pas fonctionner :

- **Permission manquante** : RaidProtect a besoin de la permission “**Gérer les rôles**”. Une alerte ⚠️ s'affiche aussi à côté de “**Rôle de Tag**” dans l'onglet Utilitaires de `/settings`.
- **Tag de serveur non activé** : votre serveur n'a pas activé la fonctionnalité [Tag de Serveur](https://support.discord.com/hc/fr/articles/31444248479639-Tag-du-serveur), le Rôle de Tag n'a donc aucun effet pour le moment.

Après correction, cliquez sur “**Actualiser**” pour vérifier de nouveau.

## Questions fréquentes {#faq}

### Pourquoi un membre avec le tag n'a-t-il pas encore le rôle ?

Nous détectons le tag à la prochaine mise à jour du profil du membre. Tant qu'il ne modifie rien (pseudo, avatar, rôles, tag…), le rôle n'est pas attribué. Le support peut lancer une synchronisation complète si besoin.

### Pourquoi mon rôle est-il refusé ?

Le Rôle de Tag ne peut pas être un rôle déjà utilisé par RaidProtect, un rôle géré par une application, un rôle placé au-dessus de RaidProtect ou de vous, ni un rôle avec des permissions sensibles.

### Qui peut configurer le Rôle de Tag ?

Les administrateurs depuis `/settings`, et les membres qui ont la permission “Gérer les rôles” avec la commande `/tagrole`.
