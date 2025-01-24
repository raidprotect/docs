---
title: Anti-spam
---
L’Anti-spam de RaidProtect est un outil performant pour empêcher les spams sur votre serveur Discord. Grâce à son système de détection automatique, il s’occupe des problèmes tout seul, sans que vous ayez à intervenir.

## ❓ Fonctionnement de l’anti-spam {#working}

L'anti-spam de RaidProtect détecte et bloque automatiquement les comportements suspects. Il différencie deux types de spams :
- **Spam lourd :** Messages contenant des liens d'invitation, des mentions massives ou des images. Ces spams sont souvent utilisés lors de raids.
- **Spam léger :** Messages envoyés fréquemment mais moins intrusifs.

### Que fait l'anti-spam ?

- **Sanctions :** Expulsion ou bannissement automatique des spammeurs.
- **Notifications :** Envoi de messages dans le salon de logs pour signaler les spams bloqués avec un aperçu des actions détectées.

## 🛡️ Adaptez le niveau de sécurité {#level}

RaidProtect offre trois niveaux de sécurité pour répondre aux besoins de votre serveur :
- 🔴 **Haut :** Sanctionne rapidement tous les spams, y compris dans les salons ignorés.
- 🟠 **Moyen :** Sanctionne les spams, mais respecte les salons ignorés.
- 🟢 **Faible :** Cible uniquement les spams de liens, mentions et selfbots.

## 🎚️ Comment changer le niveau de sécurité ? {#level-change}

1. Faites la commande `/settings`
2. Cliquez sur le bouton “**Anti-spam**”.
3. Sélectionnez le niveau de l’anti-spam souhaité dans le premier sélecteur.
- Désactivé (pour désactiver l’anti-spam)
- 🟢 Niveau faible
- 🟠 Niveau moyen
- 🔴 Niveau élevé

## 🛌 Gérer les rôles, utilisateurs et salons ignorés 😉 {#ignore}

Vous pouvez exclure certains salons, rôles ou même utilisateurs de la surveillance anti-spam pour plus de flexibilité.
1. Faites la commande `/settings`
2. Cliquez sur le bouton “**Anti-spam**”.
3. Sélectionnez les différentes options à ignorer dans les différents sélecteurs 
- Salon(s) à ignorer
- Rôle(s) à ignorer
- Membre(s) à ignorer

![Capture d'écran paramètre anti-spam](../assets/rpBeta-settings-anti-spam.webp)

:::note
Les salons contenant “**spam**” dans leur nom sont automatiquement ignorés. Les personnes ayant la permission administrateur sont ignorées totalement. 
:::