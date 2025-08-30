---
title: Modération
---

Pour faciliter le travail de vos modérateurs, RaidProtect intègre des commandes de modération très pratiques qui vous permettent d’interagir directement avec les fonctionnalités natives de Discord, comme le **bannissement** et l’**expulsion** d’utilisateurs.

En plus de ces actions, RaidProtect envoie des messages privés à l’utilisateur sanctionné pour lui expliquer la raison de sa sanction, et cela est également enregistré dans les logs du serveur pour votre suivi.

:::info
Les commandes de modérations sont [utilisables par préfixe](../guides/prefix.md).
:::

## 🔨 Bannir un utilisateur {#ban}

Utilisez la commande : ```/ban [@utilisateur] (raison)```

Remplacez `[@utilisateur]` par la mention ou l’identifiant souhaité et `(raison)` par le motif de la sanction.

:::tip
Vous pouvez bannir un utilisateur à partir de son [identifiant Discord](https://dfr.gg/wiki/interface/mode-developpeur), même s’il n’est pas connecté ou présent sur votre serveur.
:::

### Débannir un utilisateur {#unban}

Utilisez la commande : ```/unban [ID] (raison)```

Remplacez `[ID]` par l’identifiant souhaité et `(raison)` par le motif du débannissement.

## 👢 Expulser un utilisateur {#kick}

Utilisez la commande : ```/kick [@utilisateur] (raison)```

Remplacez `[@utilisateur]` par la mention ou l’identifiant souhaité et `(raison)` par le motif de la sanction.

## ⏳ Exclure un utilisateur {#timeout}

Utilisez la commande : ```/timeout [@utilisateur] [durée] (raison)```

Remplacez `[@utilisateur]` par la mention ou l’identifiant souhaité, `[durée]` par la durée du timeout, dans un maximum de 28 jours (ex. : `10m`, `1h`, `1d`) et `(raison)` par le motif de la sanction.

## 🧹 Supprimer un groupe de messages {#clear}

La commande `/clear` vous permet de supprimer rapidement un certain nombre de messages dans un salon texte. Vous pouvez spécifier un utilisateur pour ne supprimer que ses messages.

Utilisez la commande : ```/clear [nombre] (@utilisateur)```

Remplacez `[nombre]` par le nombre de messages que vous souhaitez supprimer (maximum 100). Ajoutez `(@utilisateur)` en utilisant la mention ou l’identifiant pour cibler uniquement ses messages dans le salon.