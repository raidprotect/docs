---
title: HoneyPot
description: "Le HoneyPot de RaidProtect est un salon-piège antispam qui repère et sanctionne automatiquement les comptes piratés et robots de spam sur votre serveur Discord."
---

import HoneypotMockup from '@site/src/components/DiscordMessage/mockups/honeypot';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

<HoneypotMockup />

Le **HoneyPot** (ou salon-piège) de RaidProtect est une fonctionnalité antispam : un salon où **[personne ne doit écrire](/learn/honeypot-warming)**. Comme les vrais membres savent qu'il faut éviter ce salon, les seuls qui y postent sont les **[comptes piratés](/learn/token-grabber)** ou les robots de spam : RaidProtect les sanctionne automatiquement.

:::info
**Vous avez déjà ScamLens par défaut.** L'anti-arnaque [ScamLens](./scam-images.md) est actif sur votre serveur sans aucune configuration : spécialisé dans les **images d'arnaque**, il les détecte, les supprime et sanctionne le compte compromis avec une très grande fiabilité. Pour les scams par image, ScamLens suffit donc largement. Le HoneyPot est surtout utile si vous voulez une sécurité maximale et bloquer les **autres types de spam** : spam de liens, raids texte, robots.
:::

## ❓ Comment ça marche ? {#working}

Quand vous activez le HoneyPot, RaidProtect crée un salon textuel **tout en haut de votre serveur**, avec un nom clair tiré au hasard. Ce salon a trois caractéristiques :
- **Tout le monde peut y écrire**, y compris les membres qui n'ont pas encore validé le captcha et ceux qui ont le [rôle Jail](./sanctions.mdx#jail). C'est fait exprès : un compte piraté ou un robot ne doit pas pouvoir éviter le piège.
- **Un message d'avertissement** (« N'ENVOYEZ PAS DE MESSAGE ICI ») est posté à la création du salon, avec un bouton “**Translate**” pour que chacun puisse le lire dans sa langue.
- **Un compteur de comptes signalés** apparaît sous forme de bouton à côté de “**Translate**” dès le premier compte attrapé.

Dès qu'un membre poste dans ce salon :
- RaidProtect applique la **sanction que vous avez choisie** (bannissement, softban, kick, timeout, jail ou mute), sans lui envoyer de message privé.
- Les **messages envoyés par ce membre dans les 10 dernières minutes** sont supprimés sur tout le serveur, pour stopper le spam s'il s'est déjà répandu dans d'autres salons.
- L'action est ajoutée aux logs de modération automatique (motif : *Spam via compte utilisateur compromis*).

Si vous avez choisi un [délai avant sanction](#grace), le membre a d'abord une chance de dire que c'était une erreur.

## 🛠️ Mettre en place le HoneyPot {#config}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Protection**”.
3. Cliquez sur “**Configurer**” à côté de “**HoneyPot**”.
4. Cliquez sur “**Activer**” en haut à droite : RaidProtect crée le salon, règle les permissions et poste le message d'avertissement.

<Settings start="honeypot" />

Une fois le salon créé, vous pouvez :
- **Régénérer le salon** (bouton à côté de “**Salon HoneyPot**”) : supprime l'ancien salon et en crée un nouveau, avec un nouveau nom. Utile si vous pensez qu'un membre a partagé le nom du salon-piège pour aider d'autres comptes à l'éviter.
- **Désactiver** (interrupteur en haut à droite) : supprime le salon et arrête la fonctionnalité.

:::warning Permissions requises
RaidProtect a besoin des permissions `Gérer les salons` et `Bannir des membres`. Sans elles, un encart d'erreur s'affiche et les boutons restent grisés.
:::

### Choisir la sanction {#sanction}

Par défaut, le HoneyPot applique un **Softban**. Plusieurs [sanctions](/learn/discord-sanctions) sont disponibles dans le sélecteur “**Sanction appliquée**” :

| Sanction | Effet | Disponibilité |
|---|---|---|
| **Bannissement** | Exclut le membre du serveur et supprime ses messages récents. Temporaire (1 jour par défaut). | Gratuit |
| **Softban** | Bannit puis débannit : supprime les messages, mais le membre peut revenir | Gratuit |
| **Expulsion (Kick)** | Exclut le membre, qui peut revenir librement | Premium |
| **Timeout** | Empêche le membre de parler pendant un temps choisi (max 28 jours) | Premium |
| **Jail** | Donne le [rôle Jail](./sanctions.mdx#jail) configuré sur votre serveur | Premium |
| **Mute** | Donne le [rôle Mute](./sanctions.mdx#mute) configuré sur votre serveur | Premium |

Pour les sanctions à durée (Bannissement, Timeout, Jail, Mute), choisissez une durée dans le sélecteur “**Durée**” : 5 minutes, 1 heure, **1 jour** (par défaut) ou 28 jours, ou “**Valeur personnalisée**” pour saisir la vôtre (par exemple `5m`, `1h`, `2d` ; minimum 1 minute). Le sélecteur est grisé pour le Softban et l'Expulsion, qui n'ont pas de durée.

:::tip
Le **Softban** est un bon compromis : il nettoie les messages et expulse le compte piraté, mais le propriétaire légitime peut revenir une fois son compte sécurisé.
:::

:::info
Seuls le **Bannissement** et le **Softban** permettent à Discord de supprimer nativement les messages du compte piraté **partout sur le serveur** d'un seul coup.  
Pour les autres sanctions (Kick, Timeout, Jail, Mute), RaidProtect supprime lui-même les messages : elles sont réservées aux serveurs [Premium](/premium).
:::

:::info
- Un **Jail** ou un **Mute** sans rôle configuré devient un **Timeout**. Le sélecteur l'indique sous la sanction.
- Si votre serveur perd le Premium, une sanction Premium repasse automatiquement en **Softban** au prochain déclenchement.
:::

### Délai avant sanction <span className="badge-experiment">Expérimentation</span> {#grace}

Un membre de bonne foi peut écrire dans le HoneyPot par erreur. Le **délai avant sanction** lui laisse le temps de le signaler avant d'être sanctionné.

:::info Expérimentation : Shield Update
Le délai avant sanction fait partie de la **Shield Update**, prévue pour la version 3.6.0. En attendant sa sortie, il est en expérimentation, en bêta publique pour les serveurs [Premium](/premium).
:::

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Protection**”.
3. Cliquez sur “**Configurer**” à côté de “**HoneyPot**”.
4. Dans “**Délai avant sanction**”, choisissez “**Sanction immédiate**” (par défaut) ou “**Demander d'abord, sanction après**” 30 secondes, 1 minute, 2 minutes ou 5 minutes.

Avec un délai :
- le message est **retiré** et le membre est **mentionné** dans le salon-piège, avec le bouton “**C'était une erreur**” ;
- seul ce membre peut cliquer sur le bouton. S'il clique à temps, aucune sanction n'est appliquée ;
- sans clic avant la fin du délai, la sanction tombe.

:::info
Un robot de spam poste généralement le même texte partout. Un compte qui poste le **même message** ailleurs est sanctionné **tout de suite**, sans attendre.
:::

### Membres ignorés {#ignore}

Vous pouvez choisir **qui n'est pas sanctionné** en cas de message dans le HoneyPot, dans le sélecteur “**Membres ignorés**” :
- “**Personne (sauf membres non modérables)**” *(par défaut)* : tout le monde est sanctionné, même le staff. Seuls les membres que le bot ne peut pas modérer (rôle plus haut que celui de RaidProtect) sont automatiquement épargnés.
- “**Staff (Admin / Gérer le serveur / Gérer les salons)**” : les membres avec la permission `Administrateur`, `Gérer le serveur` ou `Gérer les salons` ne sont pas sanctionnés.
- “**Membres ignorés par l'Antispam**” : RaidProtect réutilise les rôles et membres ignorés de l'[Anti-spam](./anti-spam.mdx#ignore). Si cette liste est vide, ce sont les membres avec la permission `Administrateur`, `Gérer le serveur` ou `Gérer les messages` qui sont ignorés.

:::info
Dans tous les cas, RaidProtect **ne sanctionne jamais lui-même ni les autres bots**. Les bots ne déclenchent pas le HoneyPot.
:::

## ℹ️ Commande /honeypot {#command}

La commande `/honeypot` ouvre directement l'écran de configuration du HoneyPot, sans passer par `/settings`. Elle demande la permission `Gérer le serveur`.

Utilisez la commande : ```/honeypot```

## 🤝 HoneyPot et ScamLens, c'est mieux ensemble {#scamlens-combo}

RaidProtect intègre déjà **[ScamLens](./scam-images.md)**, qui analyse les images et supprime celles qui sont des arnaques connues (crypto, faux giveaways, fausses promos de casinos).

Les deux fonctionnent main dans la main :
- **ScamLens passe en premier.** Si l'image postée dans le HoneyPot est déjà connue, c'est ScamLens qui supprime le message et sanctionne le compte compromis ; la sanction du HoneyPot ne s'applique pas en plus.
- **Le HoneyPot prend le relais** sur tout le reste : nouvelles images pas encore connues, spam de liens, mentions massives, raids texte, robots.
- **Chaque nouvelle image attrapée par un HoneyPot vient enrichir ScamLens**, qui pourra ensuite la bloquer sur tous les serveurs protégés.
- **ScamLens suit votre HoneyPot** : tant que vous ne lui donnez pas de réglage propre, il applique la [sanction et la durée](./scam-images.md#config) de votre HoneyPot.

ScamLens est déjà actif par défaut sur votre serveur. **Activer le HoneyPot ne casse rien** : ça vient juste compléter ce qui existe déjà, et ça aide RaidProtect à mieux protéger toute la communauté.

## Questions fréquentes {#faq}

### Le HoneyPot est-il utile si j'ai déjà ScamLens ?

Pour les arnaques par image, ScamLens suffit largement : il est actif par défaut et les détecte, supprime et sanctionne tout seul. Le HoneyPot est surtout utile pour bloquer les autres types de spam, comme le spam de liens, les raids texte et les robots.

### Quelle sanction le HoneyPot applique-t-il ?

Par défaut, un Softban. Vous pouvez choisir une autre sanction : Bannissement et Softban sont gratuits, tandis que Kick, Timeout, Jail et Mute sont réservés aux serveurs Premium. Le Bannissement du HoneyPot dure 1 jour par défaut, une durée que vous pouvez modifier.

### Un membre a écrit dans le HoneyPot par erreur, que faire ?

Activez le délai avant sanction : le message est retiré, le membre est mentionné et dispose de 30 secondes à 5 minutes pour cliquer sur « C'était une erreur ». S'il clique à temps, il n'est pas sanctionné. Un compte qui a posté le même message ailleurs est en revanche sanctionné tout de suite.

### Les membres du staff sont-ils sanctionnés s'ils écrivent dans le HoneyPot ?

Cela dépend de l'option « Membres ignorés ». Par défaut, tout le monde est sanctionné, même le staff. RaidProtect ne se sanctionne jamais lui-même, et les bots ne déclenchent jamais le piège.

### Que deviennent les messages d'un compte attrapé par le HoneyPot ?

En plus de la sanction, les messages envoyés par ce membre dans les 10 dernières minutes sont supprimés sur tout le serveur, pour stopper le spam s'il s'est déjà répandu dans d'autres salons.
