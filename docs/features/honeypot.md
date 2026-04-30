---
title: HoneyPot
---

Le **HoneyPot** (ou salon-piège) de RaidProtect est un salon où **personne ne doit écrire**. Comme les vrais membres savent qu'il faut éviter ce salon, les seuls qui y postent sont les **comptes piratés** ou les robots de spam : RaidProtect les sanctionne automatiquement.

## ❓ Comment ça marche ? {#working}

Quand vous activez le HoneyPot, RaidProtect crée un salon textuel **tout en haut de votre serveur**, avec un nom clair tiré au hasard. Ce salon a trois caractéristiques :
- **Tout le monde peut y écrire**, y compris les membres qui n'ont pas encore validé le captcha. C'est fait exprès : un compte piraté ou un robot ne doit pas pouvoir éviter le piège.
- **Un message d'avertissement** est posté à la création du salon, avec un bouton "Traduire" pour que chacun puisse le lire dans sa langue.
- **Un compteur public** affiche le nombre de comptes déjà attrapés par le piège, mis à jour automatiquement.

Dès qu'un membre poste dans ce salon :
- RaidProtect applique la **sanction que vous avez choisie** (bannissement, softban, kick, timeout, jail ou mute).
- Les **messages envoyés par ce membre dans les 10 dernières minutes** sont supprimés sur tout le serveur, pour stopper le spam s'il s'est déjà répandu dans d'autres salons.
- L'action est ajoutée aux logs de modération automatique (motif : *Spam via compte utilisateur compromis*).

:::info
Le HoneyPot fonctionne main dans la main avec [ScamLens](/blog/scamlens-early-activation), qui supprime les images d'arnaque sans punir le compte. Le HoneyPot, lui, attrape tout le reste : **nouvelles images d'arnaque pas encore connues**, **spam de liens**, **raids texte**, **robots**.
:::

## 🛠️ Mettre en place le HoneyPot {#config}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Cliquez sur le bouton "**HoneyPot**".
3. Cliquez sur "**Créer le salon**" : RaidProtect crée le salon, règle les permissions et poste le message d'avertissement.

Une fois le salon créé, vous pouvez :
- **Régénérer le salon** : supprime l'ancien et en crée un nouveau (avec un nouveau nom). Utile si vous pensez qu'un membre a partagé le nom du salon-piège pour aider d'autres comptes à l'éviter.
- **Désactiver** : supprime le salon et arrête la fonctionnalité.

### Choisir la sanction {#sanction}

Plusieurs sanctions sont disponibles :

| Sanction | Effet | Disponibilité |
|---|---|---|
| **Bannissement** | Exclut le membre du serveur et supprime ses messages récents | Gratuit |
| **Softban** | Bannit puis débannit : supprime les messages, mais le membre peut revenir | Gratuit |
| **Expulsion (Kick)** | Exclut le membre, qui peut revenir librement | Premium |
| **Timeout** | Empêche le membre de parler pendant un temps choisi (max 28 jours) | Premium |
| **Jail** | Donne le rôle Jail configuré sur votre serveur | Premium |
| **Mute** | Donne le rôle Mute configuré sur votre serveur | Premium |

Pour les sanctions à durée (Bannissement, Timeout, Jail, Mute), vous pouvez choisir une **durée prête à l'emploi** (de 5 minutes à 28 jours) ou une **durée personnalisée** via le bouton dédié (par exemple `5m`, `1h`, `2d` ; minimum 1 minute).

:::tip
Le **Softban** est un bon compromis : il nettoie les messages et expulse le compte piraté, mais le propriétaire légitime peut revenir une fois son compte sécurisé.
:::

:::info
Seuls le **Bannissement** et le **Softban** permettent à Discord de supprimer nativement les messages du compte piraté **partout sur le serveur** d'un seul coup.  
Pour les autres sanctions (Kick, Timeout, Jail, Mute), RaidProtect doit faire une suppression inter-salons manuelle, beaucoup plus coûteuse côté bot, elles sont donc réservées aux serveurs Premium.
:::

### Membres ignorés {#ignore}

Vous pouvez choisir **qui n'est pas sanctionné** en cas de message dans le HoneyPot :
- **Personne** *(par défaut)* : tout le monde est sanctionné, même le staff. Seuls les membres que le bot ne peut pas modérer (rôle plus haut que celui de RaidProtect) sont automatiquement épargnés.
- **Staff** : les membres avec la permission `Administrateur`, `Gérer le serveur` ou `Gérer les salons` ne sont pas sanctionnés.
- **Membres ignorés par l'Antispam** : RaidProtect réutilise la liste de l'[Anti-spam](./anti-spam.mdx). Si la liste est vide, on retombe sur le mode "Staff".

:::info
Dans tous les cas, RaidProtect **ne sanctionne jamais lui-même ni les autres bots**. Les bots ne déclenchent pas le HoneyPot.
:::

## 🤝 HoneyPot et ScamLens, c'est mieux ensemble {#scamlens-combo}

RaidProtect intègre déjà **[ScamLens](/blog/scamlens-early-activation)**, qui analyse les images et supprime celles qui sont des arnaques connues (crypto, faux giveaways, fausses promos de casinos).

Les deux fonctionnent main dans la main :
- **ScamLens passe en premier.** Si l'image postée dans le HoneyPot est déjà connue, elle est supprimée et le HoneyPot ne sanctionne pas.
- **Le HoneyPot prend le relais** sur tout le reste : nouvelles images pas encore connues, spam de liens, mentions massives, raids texte, robots.
- **Chaque nouvelle image attrapée par un HoneyPot vient enrichir ScamLens**, qui pourra ensuite la bloquer sur tous les serveurs protégés.

ScamLens est déjà actif par défaut sur votre serveur. **Activer le HoneyPot ne casse rien** : ça vient juste compléter ce qui existe déjà, et ça aide RaidProtect à mieux protéger toute la communauté.
