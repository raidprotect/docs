---
title: Captcha (Vérification)
description: "Le captcha de RaidProtect bloque les selfbots et les raids : chaque nouveau membre doit prouver qu'il est humain avant d'accéder à votre serveur Discord."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import CaptchaMockup from '@site/src/components/DiscordMessage/mockups/captcha';

{/* <CaptchaMockup /> : obsolète en 3.5.0 (montre le mode Challenge avec expulsion automatique) */}

Le **captcha** de RaidProtect demande à chaque nouveau membre de recopier un code avant d'accéder à votre serveur Discord, ce qui bloque les [selfbots](/learn/self-bot) et les [raids](/learn/discord-raid) en filtrant les comptes qui ne sont pas humains.

C'est l'une des fonctionnalités les plus populaires de RaidProtect, et elle reste entièrement optionnelle. Vous choisissez quand l'imposer : à chaque arrivée, seulement pendant un raid, ou aussi pour les comptes suspects.

## ❓ Fonctionnement du captcha {#working}

Le captcha repose sur un rôle **@Non vérifié** et un salon **#vérification**. Lorsqu'un utilisateur rejoint votre serveur :
- **Mise en attente :** nous lui donnons le rôle **@Non vérifié**, qui limite son accès au seul salon **#vérification**.
- **Épreuve :** en mode Panneau, il résout un puzzle dans l'[Activity RaidProtect](#activity). En mode Challenge, il recopie un code affiché sur une image. Voir les [modes d'affichage](#display-mode).
- **Réussite :** le rôle **@Non vérifié** est retiré et le membre accède au serveur. Ses [rôles automatiques](./onboarding.md#autorole) et le [message de bienvenue](./onboarding.md#welcome-message) partent à ce moment-là.
- **Échec :** quand il épuise ses essais, il est expulsé, mis au jail ou bloqué quelques minutes avant de pouvoir réessayer, selon votre réglage. Il peut revenir et retenter le captcha après une expulsion.
- **Logs :** chaque arrivée est notée dans le salon de logs avec la date de création du compte, ainsi que les réussites, les échecs et les délais expirés.
- **Diagnostic :** RaidProtect repère seul les problèmes de permissions, de visibilité du salon dans le [Processus d'accueil](../guides/onboarding.md) Discord et les fuites du rôle **@Non vérifié**, et propose de les corriger.

:::info
**Pas d'expulsion par défaut.** Un captcha neuf n'expulse plus les membres qui ne le résolvent pas : ils restent sur le serveur, sans accès, jusqu'à leur vérification. Vous pouvez régler un [délai avant expulsion](#timeout).
:::
:::warning
**Gestion des permissions :** les permissions du rôle **@Non vérifié** sont configurées automatiquement par RaidProtect. Vous pouvez renommer le rôle et le salon, mais ne les supprimez pas. RaidProtect a besoin des permissions `KICK_MEMBERS` et `MANAGE_ROLES`, et doit être placé au-dessus du rôle **@Non vérifié**.
:::

### Modes d'affichage {#display-mode}

| Mode | Ce que voit le nouveau membre |
|---|---|
| **Panneau (Interactif)**, par défaut | Un message permanent “**Système de vérification**” avec un bouton “**Vérifier**”, qui ouvre l'[Activity RaidProtect](#activity). Le membre ne peut pas écrire dans **#vérification**. |
| **Challenge (Classique)** | Une image est postée dans **#vérification** à son arrivée, et il tape le code en message dans le salon. |

Le panneau porte un bouton “**Translate**” pour le lire dans sa langue, et chaque arrivant y est mentionné dans le salon de vérification, puis le message est supprimé : il retrouve ainsi le salon.

Le mode Panneau garde le salon propre et permet des réglages en plus : choix de la sanction quand les essais sont épuisés, [captcha gelé pendant un raid](./raid-mode.md#action), [retenue à l'entrée des comptes trop récents](./onboarding.md#minage). Le mode Challenge expulse toujours le membre à la fin du temps imparti ou quand ses essais sont épuisés.

### Déclenchement {#trigger}

| Déclenchement | Quand le captcha s'applique |
|---|---|
| **En permanence**, par défaut | À chaque arrivée, sans condition. |
| **Automatique** | Seulement pendant un raid ou un niveau DISCON élevé. Les autres arrivants entrent directement. |
| **Intelligent** | Comme Automatique, plus les comptes qui semblent suspects. |

Avec **Automatique**, le captcha s'impose pendant un raid seulement si l'[Auto RaidMode](./raid-mode.md#action) est réglé sur “**Envoyer au captcha**” ou “**Captcha gelé pendant le raid**”, et pendant une alerte [DISCON](./discon.md) à partir du niveau 3.

Le déclenchement **Intelligent** évalue le profil de chaque arrivant. Un membre approuvé à la main par votre équipe n'est jamais considéré comme suspect.

## 🚪 Comment configurer le captcha ? {#config}

La mise en place du captcha est simple et rapide.

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Captcha**”.
4. Choisissez le salon dans lequel les captchas seront réalisés, ou utilisez le bouton “**En créer un pour moi**”.
5. Cliquez sur “**Activer**”. Le rôle **@Non vérifié** est créé et ses permissions sont posées dans tous les salons.

Le captcha démarre en mode **Panneau (Interactif)**, déclenché **En permanence**, avec 3 essais et sans délai avant expulsion. Vous pouvez ensuite ajuster chaque réglage depuis le même écran.

<Settings start="captcha" />

### Mode d'affichage et déclenchement {#mode}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Captcha**”.
4. Dans “**Mode d'affichage**”, choisissez “**Panneau (Interactif)**” ou “**Challenge (Classique)**”.
5. Dans “**Déclenchement**”, choisissez “**En permanence**”, “**Automatique**” ou “**Intelligent**”.

### Vérification dans l'Activity {#activity}

En mode **Panneau**, le bouton “**Vérifier**” ouvre l'**Activity RaidProtect** : le membre résout un petit puzzle directement dans Discord, aux couleurs de votre serveur et avec les liens de salon de votre [Processus d'accueil](../guides/onboarding.md). Sur un serveur [Premium](/premium) qui a une icône, elle s'affiche à la place du logo RaidProtect. Une fois vérifié, il y découvre sa [carte de bienvenue](./onboarding.md#welcome-message).

- **Puzzle raté :** comme un code faux, il consomme un essai, et la sanction prévue tombe quand les essais sont épuisés. L'Activity annonce d'abord l'issue au membre, puis la sanction est appliquée.
- **Réussite :** le membre est vérifié quand il quitte l'écran de réussite. S'il clique sur “**Vérifier**” entre-temps, sa validation s'applique tout de suite au lieu de relancer l'Activity.
- **Robot :** un captcha résolu par un automate est sanctionné tout de suite, comme à l'épuisement des essais : expulsion, jail ou blocage selon votre réglage.
- **Revue par votre équipe :** en cas de doute, le membre reste bloqué à l'entrée, sans délai qui court, et votre équipe reçoit un rapport automatique du captcha. Il arrive dans les [logs du captcha](#logs), à défaut dans le salon des [signalements](./reports.md), à défaut dans les logs du serveur. Une fois le rapport pris en charge, il propose “**Laisser entrer**”, “**Lier à un autre membre**” (avec l'[Identity Update](#activity-alts)) et “**Refuser**”, qui applique votre action d'échec du captcha (expulsion, jail ou blocage) : le menu des sanctions n'y figure pas.
- **Jail après des essais épuisés :** ce jail n'a pas de durée et ouvre aussi un rapport de revue. “**Laisser entrer**” lève le jail et valide le membre ; sinon sanctionnez-le.
- **Vérification de l'appareil refusée :** l'Activity demande au membre son accord avant de vérifier son appareil. S'il refuse, il subit l'action d'échec comme après des essais épuisés (expulsion, jail ou blocage).
- **Activity qui ne s'ouvre pas :** le membre peut cliquer sur “**Saisir un code**”. Un code correct passe alors en revue par votre équipe.
- **Effacement des données :** un membre peut demander l'effacement de ses données de vérification à [privacy@raidprotect.bot](mailto:privacy@raidprotect.bot). Il repasse alors le captcha, et ses sanctions restent.

#### Doubles comptes repérés par le captcha <span className="badge-experiment">Expérimentation</span> {#activity-alts}

Avec l'[Identity Update](./alt-accounts.md), l'Activity repère aussi les arrivants probablement tenus par la même personne qu'un membre de votre serveur :

- **Lien sûr :** les comptes sont liés automatiquement dans [`/alt`](./alt-accounts.md#alt). Les logs du captcha le signalent, avec un bouton “**Délier**”. Si le groupe est sanctionné, ou si [Un seul compte par personne](./alt-accounts.md#single-account) retient ses comptes secondaires, l'arrivant reçoit la sanction du groupe ou passe en quarantaine.
- **Lien probable :** si [Un seul compte par personne](./alt-accounts.md#single-account) est actif, le membre passe en revue. “**Lier à un autre membre**” les lie dans `/alt` et le laisse entrer ; si aucun compte n'a été repéré, une fenêtre vous demande de choisir le membre (“**Compte déjà sur le serveur**”). Sinon, le membre entre, et les logs du captcha signalent le lien probable avec un bouton “**Lier**”.
- **Lien sûr non appliqué :** rien n'est lié d'office si un compte du groupe fait partie de l'équipe du serveur, si l'arrivant est lié à plusieurs groupes `/alt`, ou si les deux comptes ont déjà chacun leur groupe (deux groupes ne sont jamais fusionnés d'office). Le lien vous est alors proposé de la même façon.

Seuls les comptes de votre serveur vous sont montrés : rien n'est dit des autres serveurs.

:::info Expérimentation : Identity Update
Le repérage des doubles comptes fait partie de l'**Identity Update**, prévue pour la version 3.7.0. En attendant sa sortie, il est en expérimentation, en bêta publique pour les serveurs [Premium](/premium).
:::

### Tester le captcha {#test-mode}

Il n'y a rien à activer : en mode Panneau, un membre de votre équipe déjà vérifié (le propriétaire, ou un membre avec la permission **Administrateur** ou **Gérer le serveur**) peut toujours cliquer sur “**Vérifier**” pour refaire le captcha. Les essais et le temps de résolution s'appliquent comme pour un arrivant. Rien n'est appliqué : le log du captcha (“**Test de l'équipe**”) dit ce qui aurait été fait.

### Difficulté {#difficulty}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Captcha**”.
4. Cliquez sur “**Modifier**” à côté de “**Difficulté**”.
5. Réglez les champs de la fenêtre, puis validez.

<SettingsModal name="captchaDifficulty" />

| Réglage | Valeurs | Par défaut |
|---|---|---|
| “**Essais**” | de 1 à 10 essais | 3 essais |
| “**Action quand les essais sont épuisés**” (Panneau) | “**Essais épuisés : Expulser**”, “**Essais épuisés : Jail**” ou “**Essais épuisés : Bloquer 10 min**” | Expulser |
| “**Temps de résolution**” (Panneau) | Désactivé, 15, 30 ou 45 secondes, 1, 2, 3 ou 5 minutes : le temps laissé pour résoudre le puzzle, compté dès la première épreuve (après l'accord du membre). Un code en image garde au moins 2 minutes | 30 secondes |
| “**Temps de résolution (avant expulsion)**” (Challenge) | 3, 5, 10 ou 15 minutes, ou une valeur de 30 secondes à 15 minutes : passé ce délai, le membre est expulsé | 5 minutes |

:::info
Le choix “**Essais épuisés : Jail**” place le membre au [jail](./sanctions.mdx#jail) au lieu de l'expulser. Il faut pour cela un Rôle de Jail configuré dans l'onglet “**Modération**” > “**Sanctions**”. Le choix “**Essais épuisés : Bloquer 10 min**” garde le membre sur le serveur : il attend 10 minutes, puis recommence avec des essais neufs.
:::

### Délai avant expulsion {#timeout}

En mode Panneau, ce délai est compté dès l'arrivée du membre : s'il n'est pas vérifié à temps, il subit votre action d'échec (expulsion, jail ou blocage).

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Captcha**”.
4. Dans “**Délai avant expulsion**”, choisissez “**Désactivé**”, 5, 15 ou 30 minutes, ou une “**Valeur personnalisée**” de 30 secondes à 30 minutes.

:::warning
Avec le délai désactivé, les comptes non vérifiés restent sur le serveur et peuvent écrire en MP à vos membres. Mettez un délai, ou fermez les MP avec la [Fermeture des MP](./dm-lock.mdx).
:::

### Alertes de l'écran Captcha {#alerts}

L'écran du captcha affiche des encarts quand quelque chose empêche la vérification de bien fonctionner :
- **Salon invisible à l'arrivée :** le salon de vérification n'est dans aucun salon par défaut du Processus d'accueil Discord. Cliquez sur “**Déplacer dans** _catégorie_” ou “**Créer une nouvelle catégorie**” pour que nous le corrigions, ou suivez le [guide du Processus d'accueil](../guides/onboarding.md).
- **Fuites du rôle @Non vérifié :** des rôles donnés par le Processus d'accueil Discord en même temps que **@Non vérifié** contournent la vérification, le rôle **@Non vérifié** porte des permissions, **@everyone** a la permission `ADMINISTRATOR`, ou des salons restent visibles aux membres en vérification (ou au jail). Le bouton “**Corriger**” ferme les salons concernés.
- **Niveau de vérification Élevé :** ce niveau Discord fait attendre 10 minutes avant de pouvoir écrire. Le captcha filtre déjà l'entrée : le niveau conseillé avec le captcha est **Moyen**.
- **Permissions manquantes :** RaidProtect a besoin de `KICK_MEMBERS` et `MANAGE_ROLES`.

Une fois le problème réglé, cliquez sur “**Actualiser**”.

### Désactiver ou supprimer le captcha {#disable}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Arrivées**”.
3. Cliquez sur “**Configurer**” à côté de “**Captcha**”.
4. Dans “**Mode d'affichage**”, choisissez :
   - “**Désactivé**” pour suspendre la vérification sans rien perdre de votre configuration ;
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

Le rôle automatique ne se règle plus dans le captcha : il a rejoint les [Rôles automatiques](./onboarding.md#autorole) de l'onglet “**Arrivées**”, qui acceptent plusieurs rôles. Votre ancien réglage y a été repris automatiquement. Quand le captcha est actif, ces rôles sont donnés après la réussite du captcha.

### Bypass du captcha {#bypass}

Utilisez la commande : ```/bypass captcha [utilisateur]```

Remplacez `[utilisateur]` par l'[identifiant](../guides/id.mdx) souhaité, ce dernier disposera de 10 minutes pour rejoindre le serveur sans avoir besoin de résoudre le captcha. Si l'utilisateur est déjà présent, le captcha sera résolu automatiquement. Vous pouvez aussi utiliser la commande sans spécifier d'utilisateur pour connaître la liste actuelle des utilisateurs bypass.

## 🤝 Captcha et anti-raid, c'est mieux ensemble {#raid}

Le captcha travaille avec les autres protections des arrivées :
- **[Auto RaidMode](./raid-mode.md#action) :** avec l'action “**Envoyer au captcha**”, les arrivants d'une vague passent le captcha au lieu d'être expulsés. Avec “**Captcha gelé pendant le raid**”, ils attendent derrière le captcha et le passent après la vague.
- **[Âge minimum du compte](./onboarding.md#minage) :** l'action “**Retenir à l'entrée**” bloque un compte trop récent sur un captcha qu'il ne pourra résoudre qu'une fois l'âge atteint.
- **[DISCON](./discon.md#captcha) :** dès le niveau 4, le captcha est activé s'il est configuré, même si vous l'aviez désactivé. À partir du niveau 3, il s'impose à tous les arrivants, quel que soit son déclenchement.

## Questions fréquentes {#faq}

### Combien de temps a-t-on pour résoudre le captcha ?

En mode Panneau, le membre a 3 essais par défaut (1 à 10) et 30 secondes par défaut pour résoudre le puzzle (désactivable, jusqu'à 5 minutes), compté dès la première épreuve. Aucun délai d'expulsion n'est appliqué par défaut, mais vous pouvez en régler un jusqu'à 30 minutes. En mode Challenge, il a 5 minutes par défaut (de 30 secondes à 15 minutes) avant d'être expulsé.

### Que se passe-t-il si un membre échoue le captcha ?

Quand il épuise ses essais, il est expulsé du serveur ou, en mode Panneau, mis au jail ou bloqué 10 minutes avant de pouvoir réessayer si vous l'avez choisi. Après une expulsion, il peut revenir et retenter le captcha.

### Les membres non vérifiés sont-ils expulsés automatiquement ?

Pas sur un captcha neuf : en mode Panneau, le délai avant expulsion est désactivé par défaut. Les membres non vérifiés restent sur le serveur sans accès aux salons. Réglez un délai avant expulsion, ou fermez les MP du serveur, pour éviter qu'ils écrivent à vos membres en privé.

### Peut-on n'activer le captcha que pendant un raid ?

Oui. Réglez son déclenchement sur **Automatique** et l'action de l'Auto RaidMode sur “**Envoyer au captcha**” ou “**Captcha gelé pendant le raid**”. Le reste du temps, les arrivants entrent directement.

### Faut-il activer la communauté Discord pour utiliser le captcha ?

Non, le captcha fonctionne sans la communauté. Si elle est activée, vérifiez que le salon de vérification fait partie des salons par défaut du [Processus d'accueil](../guides/onboarding.md).

### Peut-on exempter un membre du captcha ?

Oui, avec la commande `/bypass captcha [utilisateur]`. Le membre dispose de 10 minutes pour rejoindre sans résoudre le captcha, et s'il est déjà présent, le captcha est résolu automatiquement.

### Peut-on renommer le rôle @Non vérifié et le salon #vérification ?

Oui, vous pouvez les renommer librement. Ne les supprimez pas, car RaidProtect en a besoin pour faire fonctionner le captcha et configure leurs permissions automatiquement.
