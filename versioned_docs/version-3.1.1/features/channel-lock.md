---
title: Verrouillage de salons
---

Il arrive parfois qu’il soit nécessaire de verrouiller temporairement un salon pour empêcher les utilisateurs d’y envoyer des messages. Grâce à la commande de verrouillage, cela devient un jeu d’enfant !

## 🔒 Verrouiller un salon {#lock}

Utilisez la commande : ```/lock```

Cela retirera la permission de parler du rôle **@everyone** dans le salon, empêchant ainsi tous les utilisateurs de poster dans ce salon.

## 🔓 Déverrouiller un salon {#unlock}

Utilisez la commande : ```/unlock```

Cela ajoutera la permission de parler du rôle **@everyone** dans le salon, empêchant ainsi tous les utilisateurs de poster dans ce salon.

:::warning
Pour que la commande de verrouillage fonctionne correctement, vous devez vous assurer qu’aucun rôle n’a de permission explicite de parler dans ce salon. Sinon, les membres avec ces rôles pourront toujours discuter.
:::
:::info
Les commandes `lock` et `unlock` sont [utilisables par préfixe](../guides/prefix.md).
:::

## ✏️ Configuration du cadenas {#config}

Par défaut, cette fonctionnalité est désactivée. Cependant, vous avez la possibilité de choisir si les salons verrouillés doivent être renommés avec un emoji cadenas (🔒) ajouté devant leur nom.

Pour activer/désactiver le cadena devant les noms des salons verrouillés : 
1. Faites la [commande `/settings`](../setup.md#settings).
2. Cliquez sur le bouton “**Cadenas sur les salons verrouillés**”. Ce bouton fonctionne comme un interrupteur ; Un simple clic suffit pour activer ou désactiver l’option.