---
title: Automod
description: "L'Automod de RaidProtect retire automatiquement les images d'arnaque et les références à d'autres serveurs Discord : invitations, messages transférés, liens de salon et tags de serveur."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

L'**Automod** de RaidProtect regroupe les filtres qui retirent automatiquement un contenu indésirable dès qu'il est posté. Chaque filtre a sa propre sanction pour l'auteur du message.

Pour l'ouvrir :

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Protection**”.
3. Cliquez sur “**Configurer**” à côté de “**Automod**”.

<Settings start="automod" />

## 🖼️ Images d'arnaque {#images}

Le filtre **Images** supprime les images d'arnaque connues (arnaques crypto, faux giveaways, fausses promotions de casinos) et sanctionne leur auteur. Il est **actif par défaut**, sans rien configurer.

Tout le détail, la sanction et le catalogue d'images sont sur la page [Images d'arnaque](./scam-images.md).

## 🔗 Autres serveurs <span className="badge-experiment">Expérimentation</span> {#servers}

Le filtre **Autres serveurs** contrôle ce qui renvoie vers d'autres serveurs Discord : les **invitations**, les **messages transférés** et les **liens de salon**, ainsi que les **tags de serveur** affichés par vos membres. Il bloque la publicité sauvage et les serveurs concurrents ou malveillants, sans toucher à vos partenaires.

:::info Expérimentation : Shield Update
Le filtre Autres serveurs fait partie de la **Shield Update**, prévue pour la version 3.6.0. En attendant sa sortie, il est en expérimentation, en bêta publique pour les serveurs [Premium](/premium).
:::

### Comment ça marche ? {#servers-working}

Trois comportements se règlent séparément, chacun sur l'un de ces modes :

- “**Désactivé**” : rien n'est filtré.
- “**Liste noire**” : les serveurs de la liste sont refusés, les autres passent.
- “**Liste blanche**” : seuls les serveurs de la liste passent, tous les autres sont refusés.

| Comportement | Ce qui se passe s'il est refusé |
|---|---|
| **Invitation** | Le message contenant l'invitation est supprimé. Les liens `ptb.` et `canary.` comptent aussi, et les invitations cachées dans un embed, un composant ou un message transféré sont lues, comme les messages modifiés après coup. |
| **Message transféré ou lien de salon** | Le message transféré depuis ce serveur, ou contenant un lien vers l'un de ses salons, est supprimé. |
| **Tag de serveur affiché** | Le membre est mis en **quarantaine** avec le [rôle Jail](./sanctions.mdx#jail). Elle est levée dès qu'il retire le tag. |

Votre propre serveur passe toujours, par n'importe laquelle de ses invitations, et votre équipe (permissions **Gérer le serveur** ou **Gérer les messages**) n'est jamais visée.

### Configuration {#servers-config}

1. Dans l'Automod, cliquez sur “**Configurer**” à côté de “**Autres serveurs**”.
2. Activez le filtre avec l'interrupteur en haut à droite, puis choisissez un mode pour chaque comportement.

<Settings start="serverRefs" />

#### Invitations d'ami et de groupe <span className="badge-premium">Premium</span> {#servers-private}

Une invitation d'ami ou de groupe privé ne mène à aucun serveur. Sous le mode “**Invitation**” (dès qu'il n'est pas sur “**Désactivé**”), le sélecteur “**Invitations d'ami et de groupe**” règle leur sort à part :

- “**Suivre la liste**” *(par défaut)* : elles passent en liste noire, et sont supprimées en liste blanche.
- “**Toujours autorisées**” : acceptées, quelle que soit la liste.
- “**Toujours supprimées**” : supprimées, quelle que soit la liste.

Sans Premium, elles suivent toujours la liste.

### Sanction {#servers-sanction}

Chaque message refusé est supprimé. Dans “**Sanction des messages supprimés**”, choisissez en plus une sanction pour son auteur, ou “**Message supprimé seulement**”. Pour un timeout, un mute, un jail ou un bannissement, choisissez aussi sa durée.

La sanction s'applique au plus une fois par minute et par membre : un membre qui colle plusieurs invitations d'affilée n'est sanctionné qu'une fois.

### Listes de serveurs {#servers-lists}

1. Cliquez sur “**Ajouter un serveur**”.
2. Collez une invitation du serveur encore valide (par ex. `discord.gg/exemple`) : son nom et son identifiant en sont lus. Un identifiant seul n'est plus accepté.
3. Choisissez la liste : noire ou blanche.

Un serveur déjà présent change simplement de liste. “**Retirer**” enlève un ou plusieurs serveurs des listes.

**Limites :** 25 serveurs au total dans les deux listes.

:::tip
Pour n'autoriser que les invitations de vos partenaires, réglez “**Invitation**” sur “**Liste blanche**” et ajoutez vos partenaires à la liste blanche. Une liste blanche vide refuse toutes les invitations vers d'autres serveurs.
:::

### Logs {#servers-logs}

Chaque sanction et chaque quarantaine sont notées dans vos [logs de modération](./moderation.mdx#logs), avec le serveur et le salon concernés. Un message supprimé sans sanction (“**Message supprimé seulement**”) est aussi noté. Les sanctions apparaissent dans l'[historique des sanctions](./sanctions.mdx), avec les motifs « Invitation vers un serveur refusé », « Invitation d'ami ou de groupe refusée » (Premium), « Message transféré ou lien de salon d'un serveur refusé » ou « Tag d'un serveur refusé ».

## Questions fréquentes {#faq}

### Mes partenaires peuvent-ils toujours partager leur invitation ?

Oui. Ajoutez-les à la liste blanche du filtre Autres serveurs, ou laissez-les hors de la liste noire.

### Que se passe-t-il quand un membre retire le tag refusé ?

Sa quarantaine est levée automatiquement.

### Les modérateurs sont-ils filtrés ?

Non. Les membres qui ont la permission Gérer le serveur ou Gérer les messages ne sont jamais visés par le filtre Autres serveurs.
