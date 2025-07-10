---
title: Anti-raid
---

## Mode raid

Le mode raid est une fonctionnalité d'urgence conçue pour bloquer instantanément tous les nouveaux utilisateurs tentant de rejoindre votre serveur, surpassant ainsi la limitation native de Discord qui ne permet ce blocage que pour 24 heures via l'action de cybersécurité "Suspendre les invitations".

### ❓ Fonctionnement du mode raid {#working}

RaidProtect active automatiquement le mode raid si un grand nombre d’utilisateurs rejoint votre serveur en un court laps de temps. Par défaut, le mode raid s'active si plus de 10 utilisateurs rejoignent votre serveur en moins de 10 secondes. Lorsque le mode raid est activé, aucun utilisateur ne peut rejoindre le serveur. Ils sont bloqués au niveau de l’invitation.

:::warning
Les fonctions communautaires de Discord sont indispensables au bon fonctionnement du Mode raid. [Suivez notre guide pour vérifier l'activation de la communauté sur votre serveur.](../guides/community.md)
:::

#### Activation {#enable}

- Pour activer manuellement ce mode, un utilisateur disposant des permissions d'expulsion doit exécuter la commande `/raidmode`.
- Un message sera automatiquement posté dans le salon de logs pour signaler l'activation.

#### Désactivation {#disable}

Le mode raid ne se désactive pas automatiquement. Pensez à l’arrêter avec la même commande lorsque la menace est écartée. 😇

:::info
La commande `raidmode` est [utilisable par préfixe](../guides/prefix.md).
:::

### 🚨 Configuration du mode raid automatique {#config}

Si votre serveur accueille souvent beaucoup de nouveaux membres simultanément, il est judicieux de modifier ce seuil pour éviter les faux-positifs.

![Capture d'écran mode raid automatique](../assets/rp-settings-raid-mode.webp)

:::note
Nous recommandons d’entrer une valeur comprise entre 10 et 20 membres en 10 secondes pour une bonne efficacité du système.
:::

1. Faites la [commande `/settings`](../setup.md#settings).
2. Cliquez sur le bouton “**Auto RaidMode**”.
3. Sélectionnez le nombre de membres pouvant rejoindre sous 10 secondes.

Vous pouvez laisser à la valeur par défaut (10) ou ajuster selon la valeur souhaitée en cliquant sur le bouton “**Valeur personnalisée**”.

:::warning
Si le mode raid s’active automatiquement, pensez à le désactiver une fois la menace passée. Rappelez-vous, il ne se désactive pas tout seul. 😖
:::


## Âge Minimum {#minage}

Pour renforcer la sécurité, vous pouvez exiger un âge minimum pour les comptes Discord des nouveaux membres.

1. Faites la [commande `/settings`](../setup.md#settings).
2. Cliquez sur le bouton “**Âge Minimum**”.
3. Sélectionnez la valeur souhaitée dans le menu de sélection ou choisissez une valeur personnalisée exprimée en format date (m/h/d/y).

### 🎂 Bypass de l'âge de compte minimum {#bypass-minage}

Utilisez la commande : ```/bypass minage [utilisateur]```

Remplacez `[utilisateur]` par l’identifiant souhaité, ce dernier disposera de 10 minutes pour rejoindre le serveur sans être expulsé par l'âge requis.