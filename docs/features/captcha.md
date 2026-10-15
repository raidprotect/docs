---
title: Captcha (Vérification)
description: "Le captcha de RaidProtect bloque les selfbots et les raids : chaque nouveau membre doit prouver qu'il est humain avant d'accéder à votre serveur Discord."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import CaptchaMockup from '@site/src/components/DiscordMessage/mockups/captcha';

{/* <CaptchaMockup /> : obsolète en 3.5.0 (montre le mode Challenge avec expulsion automatique) */}

Le **captcha** de RaidProtect demande à chaque nouveau membre de recopier un code avant d'accéder à votre serveur Discord, ce qui bloque les [selfbots](/learn/self-bot) et les [raids](/learn/discord-raid) en filtrant les comptes qui ne sont pas humains.

C'est l'une des fonctionnalités les plus populaires de RaidProtect, et elle reste entièrement optionnelle. Vous choisissez quand l'imposer : à chaque arrivée, seulement pendant un raid, ou aussi pour les comptes suspects.

## ❓ Fonctionnement du captcha {#working}

Le captcha repose sur un rôle **@Non vérifié** et un salon **#vérification**. Lorsqu'un utilisateur rejoint votre serveur :
- **Mise en attente :** nous lui donnons le rôle **@Non vérifié**, qui limite son accès au seul salon **#vérification**.
- **Épreuve :** il recopie un code affiché sur une image. La façon de le faire dépend du [mode d'affichage](#display-mode). En mode Panneau, il peut aussi résoudre un puzzle dans l'[Activity RaidProtect](#activity).
- **Réussite :** le rôle **@Non vérifié** est retiré et le membre accède au serveur. Ses [rôles automatiques](./onboarding.md#autorole) et le [message de bienvenue](./onboarding.md#welcome-message) partent à ce moment-là.
- **Échec :** quand il épuise ses essais, il est expulsé ou mis au jail, selon votre réglage. Il peut revenir et retenter le captcha après une expulsion.
- **Logs :** chaque arrivée est notée dans le salon de logs avec la date de création du compte, ainsi que les réussites, les échecs et les délais expirés.
- **Diagnostic :** RaidProtect repère seul les problèmes de permissions, de visibilité du salon dans le [Processus d'accueil](../guides/onboarding.md) Discord et les fuites du rôle **@Non vérifié**, et propose de les corriger.

:::info
**Pas d'expulsion par défaut.** Un captcha neuf n'expulse plus les membres qui ne le résolvent pas : ils restent sur le serveur, sans accès, jusqu'à leur vérification. Vous pouvez régler un [délai avant expulsion](#timeout).
:::
:::warning
**Gestion des permissions :** les permissions du rôle **@Non vérifié** sont configurées automatiquement par RaidProtect. Vous pouvez renommer le rôle et le salon, mais ne les supprimez pas. RaidProtect a besoin des permissions `KICK_MEMBERS` et `MANAGE_ROLES`, et doit être placé au-dessus du rôle **@Non vérifié**.
:::

### Modes d'affichage {#display-mode}

| Mode | Ce que voit le nouveau membre |
|---|---|
| **Panneau (Interactif)**, par défaut | Un message permanent “**Système de vérification**” avec un bouton “**Vérifier**”. Le captcha s'ouvre en privé (seul le membre le voit) et le code se saisit dans une fenêtre. Le membre ne peut pas écrire dans **#vérification**. |
| **Challenge (Classique)** | Une image est postée dans **#vérification** à son arrivée, et il tape le code en message dans le salon. |

Le mode Panneau garde le salon propre et permet des réglages en plus : choix de la sanction quand les essais sont épuisés, [captcha gelé pendant un raid](./raid-mode.md#action), [retenue à l'entrée des comptes trop récents](./onboarding.md#minage). Le mode Challenge expulse toujours le membre à la fin du temps imparti ou quand ses essais sont épuisés.

### Déclenchement {#trigger}

| Déclenchement | Quand le captcha s'applique |
|---|---|
| **En permanence**, par défaut | À chaque arrivée, sans condition. |
| **Automatique** | Seulement pendant un raid ou un niveau DISCON élevé. Les autres arrivants entrent directement. |
| **Intelligent (Public Beta)** ([Premium](/premium)) | Comme Automatique, plus les comptes qui semblent suspects. |

Avec **Automatique**, le captcha s'impose pendant un raid seulement si l'[Auto RaidMode](./raid-mode.md#action) est réglé sur “**Envoyer au captcha**” ou “**Captcha gelé pendant le raid**”, et pendant une alerte [DISCON](./discon.md) à partir du niveau 3 (en expérimentation avec la Shield Update).

Le déclenchement **Intelligent** évalue le profil de chaque arrivant. Un membre approuvé à la main par votre équipe n'est jamais considéré comme suspect.

:::note
Le déclenchement intelligent est en **Public Beta**, réservée pour l'instant aux serveurs [**Premium**](/premium).
:::

## 🚪 Comment configurer le captcha ? {#config}

La mise en place du captcha est simple et rapide.

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Captcha**”.
4. Choisissez le salon dans lequel les captchas seront réalisés, ou utilisez le bouton “**En créer un pour moi**”.
5. Cliquez sur “**Activer**”. Le rôle **@Non vérifié** est créé et ses permissions sont posées dans tous les salons.

Le captcha démarre en mode **Panneau (Interactif)**, déclenché **En permanence**, avec 2 essais et sans délai avant expulsion. Vous pouvez ensuite ajuster chaque réglage depuis le même écran.

<Settings start="captcha" />

### Mode d'affichage et déclenchement {#mode}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Captcha**”.
4. Dans “**Mode d'affichage**”, choisissez “**Panneau (Interactif)**” ou “**Challenge (Classique)**”.
5. Dans “**Déclenchement**”, choisissez “**En permanence**”, “**Automatique**” ou “**Intelligent (Public Beta)**”.

### Détection des doubles comptes <span className="badge-experiment">Expérimentation</span> {#activity}

En mode **Panneau**, le bouton “**Vérifier**” peut ouvrir l'**Activity RaidProtect** au lieu du code en image : le membre résout un petit puzzle directement dans Discord, et nous repérons au passage les comptes probablement tenus par la même personne.

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Captcha**”.
4. Cliquez sur “**Activer**” à côté de “**Détection des doubles comptes (bêta)**”.

Le réglage est désactivé par défaut et n'apparaît qu'en mode Panneau. Une fois activé :

- **Réussite ou échec :** le verdict de l'Activity compte comme un code saisi. Un échec consomme un essai, et la sanction prévue tombe quand les essais sont épuisés. Le temps de résolution s'applique comme d'habitude.
- **Transmis à l'équipe :** quand le résultat est incertain, le membre reste en attente et le salon de logs du captcha vous prévient. Acceptez-le avec le [bypass](#bypass) ou sanctionnez-le.
- **Comptes liés :** les logs du captcha listent les comptes probablement liés, avec un indice de confiance. Le membre n'en voit rien.
- **Alerte de raid :** les logs du captcha signalent les arrivées groupées suspectes.
- **Code en image en secours :** si l'Activity n'est pas disponible, “**Vérifier**” affiche le code en image habituel.

:::info
Les comptes liés détectés par l'Activity ne sont **jamais sanctionnés automatiquement** : ils sont seulement montrés à votre équipe, qui décide. Pour lier des comptes et partager leurs sanctions, utilisez les [doubles comptes](./alt-accounts.md).
:::

### Difficulté {#difficulty}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Captcha**”.
4. Cliquez sur “**Modifier**” à côté de “**Difficulté**”.
5. Réglez les champs de la fenêtre, puis validez.

<SettingsModal name="captchaDifficulty" />

| Réglage | Valeurs | Par défaut |
|---|---|---|
| “**Essais**” | 1, 2 ou 3 essais | 2 essais |
| “**Action quand les essais sont épuisés**” (Panneau) | “**Essais épuisés : Expulser**” ou “**Essais épuisés : Jail**” | Expulser |
| “**Temps de résolution**” (Panneau) | Désactivé, 2, 3 ou 5 minutes : le temps laissé pour taper le code après le clic sur “**Vérifier**” | 3 minutes |
| “**Temps de résolution (avant expulsion)**” (Challenge) | 3, 5, 10 ou 15 minutes, ou une valeur de 30 secondes à 15 minutes : passé ce délai, le membre est expulsé | 5 minutes |

:::info
Le choix “**Essais épuisés : Jail**” place le membre au [jail](./sanctions.mdx#jail) au lieu de l'expulser. Il faut pour cela un Rôle de Jail configuré dans l'onglet “**Modération**” > “**Sanctions**”.
:::

### Délai avant expulsion {#timeout}

En mode Panneau, ce délai est compté dès l'arrivée du membre : s'il n'est pas vérifié à temps, il est expulsé (ou mis au jail si c'est votre réglage d'échec).

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Captcha**”.
4. Dans “**Délai avant expulsion**”, choisissez “**Désactivé**”, 5, 15 ou 30 minutes, ou une “**Valeur personnalisée**” de 30 secondes à 30 minutes.

:::warning
Avec le délai désactivé, les comptes non vérifiés restent sur le serveur et peuvent écrire en MP à vos membres. Mettez un délai, ou fermez les MP avec la [Fermeture des MP](./dm-lock.mdx).
:::

### Alertes de l'écran Captcha {#alerts}

L'écran du captcha affiche des encarts quand quelque chose empêche la vérification de bien fonctionner :
- **Salon invisible à l'arrivée :** le salon de vérification n'est dans aucun salon par défaut du Processus d'accueil Discord. Cliquez sur “**Déplacer dans** _catégorie_” ou “**Créer une nouvelle catégorie**” pour que nous le corrigions, ou suivez le [guide du Processus d'accueil](../guides/onboarding.md).
- **Fuites du rôle @Non vérifié :** des rôles donnés par le Processus d'accueil Discord en même temps que **@Non vérifié** contournent la vérification, le rôle **@Non vérifié** porte des permissions, **@everyone** a la permission `ADMINISTRATOR`, ou des salons restent visibles aux membres en vérification (ou au jail). Le bouton “**Corriger**” ferme les salons concernés.
- **Niveau de vérification Élevé :** ce niveau Discord fait attendre 10 minutes avant de pouvoir écrire. Le captcha filtre déjà l'entrée : le niveau conseillé avec le captcha est **Moyen**.
- **Permissions manquantes :** RaidProtect a besoin de `KICK_MEMBERS` et `MANAGE_ROLES`.

Une fois le problème réglé, cliquez sur “**Actualiser**”.

### Désactiver ou supprimer le captcha {#disable}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Captcha**”.
4. Dans “**Mode d'affichage**”, choisissez :
   - “**Désactivé**” pour suspendre la vérification sans rien perdre de votre configuration ;
   - “**Supprimer**” pour effacer la configuration et le rôle de vérification. RaidProtect vous demande une confirmation.

:::tip
Pour que le captcha se fasse discret hors des raids, réglez plutôt son [déclenchement](#trigger) sur **Automatique** que de le désactiver.
:::

## ✨ Fonctionnalités supplémentaires {#additional-features}

### Logs séparés {#logs}

Si votre serveur est populaire, les logs liés au captcha peuvent encombrer votre salon de logs principal. Vous pouvez les déplacer dans un autre salon.

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Captcha**”.
4. Cliquez sur “**Modifier**” à côté de “**Logs**”.
5. Choisissez le salon dans lequel les logs du captcha seront envoyés.

Vous retrouvez aussi ce réglage dans l'onglet “**Modération**” > “**Logs**”, à la ligne “**Captcha**”.

### Rôle automatique {#autorole}

Le rôle automatique ne se règle plus dans le captcha : il a rejoint les [Rôles automatiques](./onboarding.md#autorole) de l'onglet “**Arrivées**”, qui acceptent plusieurs rôles. Votre ancien réglage y a été repris automatiquement. Quand le captcha est actif, ces rôles sont donnés après la réussite du captcha.

### Bypass du captcha {#bypass}

Utilisez la commande : ```/bypass captcha [utilisateur]```

Remplacez `[utilisateur]` par l'[identifiant](../guides/id.mdx) souhaité, ce dernier disposera de 10 minutes pour rejoindre le serveur sans avoir besoin de résoudre le captcha. Si l'utilisateur est déjà présent, le captcha sera résolu automatiquement. Vous pouvez aussi utiliser la commande sans spécifier d'utilisateur pour connaître la liste actuelle des utilisateurs bypass.

## 🤝 Captcha et anti-raid, c'est mieux ensemble {#raid}

Le captcha travaille avec les autres protections des arrivées :
- **[Auto RaidMode](./raid-mode.md#action) :** avec l'action “**Envoyer au captcha**”, les arrivants d'une vague passent le captcha au lieu d'être expulsés. Avec “**Captcha gelé pendant le raid**”, ils attendent derrière le captcha et le passent après la vague.
- **[Âge minimum du compte](./onboarding.md#minage) :** l'action “**Retenir à l'entrée**” bloque un compte trop récent sur un captcha qu'il ne pourra résoudre qu'une fois l'âge atteint.
- **[DISCON](./discon.md#captcha) :** dès le niveau 4, le captcha est activé s'il est configuré, même si vous l'aviez désactivé. À partir du niveau 3, il s'impose à tous les arrivants, quel que soit son déclenchement (en expérimentation avec la Shield Update).

## Questions fréquentes {#faq}

### Combien de temps a-t-on pour résoudre le captcha ?

En mode Panneau, le membre a 2 essais par défaut (1 à 3) et 3 minutes pour taper le code après avoir cliqué sur “**Vérifier**”. Aucun délai d'expulsion n'est appliqué par défaut, mais vous pouvez en régler un jusqu'à 30 minutes. En mode Challenge, il a 5 minutes par défaut (de 30 secondes à 15 minutes) avant d'être expulsé.

### Que se passe-t-il si un membre échoue le captcha ?

Quand il épuise ses essais, il est expulsé du serveur ou, en mode Panneau, mis au jail si vous l'avez choisi. Après une expulsion, il peut revenir et retenter le captcha.

### Les membres non vérifiés sont-ils expulsés automatiquement ?

Pas sur un captcha neuf : en mode Panneau, le délai avant expulsion est désactivé par défaut. Les membres non vérifiés restent sur le serveur sans accès aux salons. Réglez un délai avant expulsion, ou fermez les MP du serveur, pour éviter qu'ils écrivent à vos membres en privé.

### Peut-on n'activer le captcha que pendant un raid ?

Oui. Réglez son déclenchement sur **Automatique** et l'action de l'Auto RaidMode sur “**Envoyer au captcha**” ou “**Captcha gelé pendant le raid**”. Le reste du temps, les arrivants entrent directement.

### Faut-il activer la communauté Discord pour utiliser le captcha ?

Non, le captcha fonctionne sans la communauté. Si elle est activée, vérifiez que le salon de vérification fait partie des salons par défaut du [Processus d'accueil](../guides/onboarding.md).

### Peut-on exempter un membre du captcha ?

Oui, avec la commande `/bypass captcha [utilisateur]`. Le membre dispose de 10 minutes pour rejoindre sans résoudre le captcha, et s'il est déjà présent, le captcha est résolu automatiquement.

### Peut-on renommer le rôle @Non vérifié et le salon #vérification ?

Oui, vous pouvez les renommer librement. Ne les supprimez pas, car RaidProtect en a besoin pour faire fonctionner le captcha et configure leurs permissions automatiquement.
