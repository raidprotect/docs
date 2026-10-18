---
title: Installation
description: "Installez et configurez RaidProtect sur votre serveur Discord en quelques minutes, avec l'assistant /setup puis le tableau de bord /settings."
---

import Head from '@docusaurus/Head';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

<Head>
  <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"Configurer RaidProtect sur un serveur Discord","description":"Installer et configurer le bot de protection RaidProtect avec les commandes /setup et /settings.","step":[{"@type":"HowToStep","position":1,"name":"Lancer /setup","text":"Tapez /setup dans un salon où le bot est actif pour ouvrir l'assistant d'installation."},{"@type":"HowToStep","position":2,"name":"Choisir les modules","text":"Sélectionnez les fonctionnalités à installer dans le menu « Choisir les modules à installer », puis cliquez sur « Activer »."},{"@type":"HowToStep","position":3,"name":"Valider le récapitulatif","text":"Le bot affiche un récapitulatif de ce qu'il va créer et activer. Cliquez de nouveau sur « Activer » pour l'appliquer."},{"@type":"HowToStep","position":4,"name":"Ajuster avec /settings","text":"Utilisez /settings à tout moment : le tableau de bord regroupe les réglages en cinq onglets, Général, Arrivées, Protection, Modération et Utilitaires."}]}).replace(/</g, '\\u003c')}</script>
</Head>

RaidProtect se configure avec deux commandes : [`/setup`](#install), un assistant qui installe en une fois les protections essentielles, et [`/settings`](#settings), le tableau de bord où vous réglez tout le reste à tout moment. Ce guide vous explique comment les utiliser.

## Par où commencer {#etapes}

Pour un serveur qui part de zéro, voici l'ordre conseillé :

1. **Lancez [`/setup`](#install)** et choisissez les modules à installer. RaidProtect crée le salon de logs, les salons et rôles nécessaires, puis applique les changements après un récapitulatif.
2. **Ouvrez l'onglet “Arrivées” de [`/settings`](#settings)** : réglez le [captcha](./features/captcha.md), l'[Auto RaidMode](./features/raid-mode.md) et l'[accueil des nouveaux membres](./features/onboarding.md).
3. **Ouvrez l'onglet “Modération”** : vérifiez le salon de logs et les [sanctions](./features/sanctions.mdx) (rôles de jail et de mute).
4. **Réglez l'[anti-spam](./features/anti-spam.mdx)** dans l'onglet “Protection” : un préréglage suffit pour démarrer.

:::info Communauté Discord
Le [mode Communauté](./guides/community.md) de Discord n'est exigé que par quelques réglages, comme le blocage des invitations de l'Auto RaidMode et la [fermeture des MP](./features/dm-lock.mdx). Le captcha fonctionne sans.
:::

## Installation guidée {#install}

La commande `/setup` est réservée aux administrateurs. Elle installe en une fois les modules que vous choisissez, avec des valeurs par défaut éprouvées que vous ajusterez ensuite dans `/settings`.

### 🔧 Choisir les modules {#recommended}

1. Faites la commande `/setup`.
2. Dans le menu “**Choisir les modules à installer**”, sélectionnez les fonctionnalités voulues : Commandes par messages, Auto RaidMode, Captcha, Âge minimum du compte, Anti-spam, Signalements, Rôle de Tag, Fermeture des MP et HoneyPot. Les modules déjà actifs sont précochés.
3. Cliquez sur “**Activer**”.
4. Le bot récapitule ce qu'il va créer ou réutiliser. Cliquez de nouveau sur “**Activer**” pour appliquer, ou sur “**Retour**” pour modifier la sélection.

<Settings start="setup" />

À la validation, RaidProtect :

- crée le salon `#raidprotect-logs` s'il n'existe pas, visible des administrateurs et de la personne qui a ajouté le bot ;
- retire à `@everyone` les permissions dangereuses (Administrateur, Bannir, Expulser, Gérer le serveur, les salons, les rôles, les messages, les webhooks et les fils, Mentionner @everyone, Exclure temporairement) ;
- active chaque module choisi avec ses valeurs par défaut : préfixe `?`, Auto RaidMode à 10 membres en 10 secondes, captcha en mode Panneau avec le salon `#vérification` et le rôle `@Non vérifié`, âge minimum de 6 heures, anti-spam et signalements activés, rôle `@Tag`, fermeture des MP, salon piège du [HoneyPot](./features/honeypot.md).

:::tip Désactiver un module
Décocher un module dans `/setup` ne le désactive pas. Pour couper une fonctionnalité, passez par [`/settings`](#settings).
:::

Les [rôles automatiques et le message de bienvenue](./features/onboarding.md) ne font pas partie de l'assistant : réglez-les dans l'onglet “**Arrivées**” de `/settings`.

### 🧭 Nouvel assistant d'installation <span className="badge-experiment">Expérimentation</span> {#wizard}

Un nouvel assistant `/setup` remplace la liste de modules par un parcours guidé :

- **Section par section** : Général (avec la langue du serveur), Arrivées, Protection et Modération, une étape à la fois. Une **vue condensée** rassemble tout sur un seul écran, à un clic.
- **Des propositions adaptées** : selon la taille du serveur, s'il est public, communautaire ou s'il a un tag, l'assistant précoche les protections conseillées et dit pourquoi.
- **Plus de modules** : le [message de bienvenue](./features/onboarding.md#welcome-message) (avec son salon), le filtre [Autres serveurs](./features/server-references.md), qui supprime les invitations vers d'autres serveurs, et le [slowmode préventif](./features/slowmode.md) ([Premium](/premium)) sur le salon de votre choix. Le [DISCON](./features/discon.md) y est expliqué : il est toujours actif, sans rien installer.
- **Une vérification avant de commencer** : il signale les permissions qui manquent à RaidProtect et les rôles placés au-dessus du sien, avec un bouton “**Revérifier**”.
- **Un récapitulatif** de ce qui sera créé, modifié ou réglé. Rien n'est appliqué avant “**Installer**”.
- **Un serveur déjà configuré est vérifié, pas refait** : le panneau du captcha en place et la fermeture des MP déjà active sont conservés.
- **Et ensuite** : un aperçu de l'[audit de sécurité](./features/audit.md) termine l'installation, avec des raccourcis pour tester le captcha, personnaliser le message de bienvenue ou ouvrir tous les réglages. Une étape en échec se reprend en relançant `/setup`.

:::info Expérimentation : Shield Update
Le nouvel assistant d'installation arrive avec la **Shield Update**, prévue pour la version 3.6.0. Il n'est pour l'instant proposé qu'à un petit nombre de serveurs.
:::

## Modifier la configuration {#settings}

La commande `/settings` ouvre le tableau de bord de RaidProtect. Elle est réservée aux administrateurs et s'affiche en message privé temporaire, visible de vous seul.

### 🔍 Le tableau de bord {#menu}

Les réglages sont rangés en cinq onglets :

- **Général** : [langue](./language.md), [commandes par messages](./guides/prefix.md), [permissions](./guides/prefix.md#permissions) et fuseau horaire du serveur.
- **Arrivées** : [Auto RaidMode](./features/raid-mode.md), [captcha](./features/captcha.md), [âge minimum du compte](./features/onboarding.md#minage), [rôles automatiques](./features/onboarding.md#autorole) et [message de bienvenue](./features/onboarding.md#welcome-message).
- **Protection** : [DISCON](./features/discon.md)\*, [anti-spam](./features/anti-spam.mdx), Automod ([filtre d'images](./features/scam-images.md) et [autres serveurs](./features/server-references.md)\*), [HoneyPot](./features/honeypot.md), [slowmode préventif](./features/slowmode.md)\*, [Authentification Manager](./features/authentication-manager.mdx) et [fermeture des MP](./features/dm-lock.mdx).
- **Modération** : [sanctions](./features/sanctions.mdx), [doubles comptes](./features/alt-accounts.md)\*, logs, [signalements](./features/reports.md) et [transparence](./features/transparency.md).
- **Utilitaires** : [rôle de tag](./features/tag-role.md), [verrouillage de salon](./features/channel-lock.md), [rôle en service](./features/moderation.mdx#onduty) et mise en cache des messages.

\* En expérimentation : ces lignes n'apparaissent que sur les serveurs qui ont accès à la Shield Update (DISCON, autres serveurs, slowmode préventif) ou à l'Identity Update (doubles comptes), en bêta publique [Premium](/premium).

Chaque ligne affiche la valeur actuelle du réglage et un bouton : “**Configurer**” ouvre un écran dédié, “**Modifier**” ouvre une fenêtre de saisie. Tout changement s'applique immédiatement.

Après une mise à jour, une pastille **Nouveau** signale pendant deux semaines les réglages qui viennent d'arriver, ainsi que leur onglet tant que vous ne l'avez pas ouvert.

Explorez le tableau de bord ci-dessous, les boutons sont cliquables :

<Settings start="home:arrivals" />

:::info Fonctionnalités Premium
Les écrans réservés au [Premium](/premium) restent consultables.
:::

### 🕒 Fuseau horaire {#timezone}

Le fuseau horaire sert à tout ce que RaidProtect publie à heure fixe, comme les [récapitulatifs de transparence](./features/transparency.md#recaps).

1. Faites la commande `/settings`.
2. Dans l'onglet “**Général**”, cliquez sur “**Modifier**” à côté de “**Fuseau horaire**”.
3. Choisissez votre décalage UTC, ou saisissez un identifiant de fuseau comme `Europe/Paris` pour que l'heure d'été soit gérée automatiquement.

Sans réglage, le serveur est en UTC.

### 🔄 Réinitialiser un paramètre {#reset}

1. Naviguez vers le paramètre souhaité.
2. Cliquez sur “**Réinitialiser**”.

La réinitialisation s'applique tout de suite, sans confirmation. Seules les actions destructrices, comme la suppression du captcha, vous demandent de confirmer.

### 🎨 Personnaliser le bot <span className="badge-premium">Premium</span> {#customize}

Le bouton “**Personnaliser**”, en bas du tableau de bord, change l'apparence de RaidProtect sur votre serveur : pseudo, avatar, bannière, police, effet et couleurs du pseudo.

<Settings start="customize" />

Les images acceptées sont en PNG, JPEG, GIF ou WebP, jusqu'à 10 Mo. Si le Premium prend fin, l'avatar, la bannière et le style du pseudo reviennent à ceux de RaidProtect ; le pseudo est conservé.

## Quelle config pour votre serveur ? {#quelle-config}

L'assistant `/setup` couvre déjà l'essentiel. Si vous partez de zéro, ou si vous préparez votre installation avec une IA, repérez ce qui correspond à votre serveur : chaque besoin pointe vers la fonctionnalité qui y répond.

- **Des [raids](/learn/discord-raid), des vagues de comptes qui débarquent d'un coup** : l'[Auto RaidMode](./features/raid-mode.md) bloque ou filtre les arrivées le temps de l'attaque, et le [DISCON](./features/discon.md) vous permet de durcir tout le serveur en un clic.
- **Du [spam](/learn/spam-discord), de la pub, des liens d'arnaque** : l'[anti-spam](./features/anti-spam.mdx) sanctionne automatiquement, et le [HoneyPot](./features/honeypot.md) piège les comptes de spam.
- **Des [bots](/learn/self-bot) qui rejoignent en masse** : le [captcha](./features/captcha.md) fait prouver à chaque arrivant qu'il est humain, et l'[âge minimum du compte](./features/onboarding.md#minage) écarte les comptes créés la veille.
- **Des arnaques en image** (faux giveaways, phishing) : le [filtre d'images](./features/scam-images.md) les détecte et les supprime.
- **Un risque de [nuke](/learn/discord-nuke) ou des comptes du staff piratés** : appliquez le [moindre privilège](/learn/least-privilege) et l'[Authentification Manager](./features/authentication-manager.mdx).
- **Une communauté qui peut vous aider à modérer** : activez les [signalements](./features/reports.md).

Ajustez ensuite les [sanctions](./features/sanctions.mdx) (expulsion, timeout, bannissement, jail) à votre serveur.

:::info Un problème de configuration ?
Si vous rencontrez un problème, consultez la section [Dysfonctionnements](./guides/malfunctions.md) ou rejoignez notre [serveur de support](https://raidprotect.bot/discord) pour obtenir de l'aide.
:::
