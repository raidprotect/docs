---
title: Audit de sécurité
---

La commande `/audit` analyse la configuration de votre serveur Discord et identifie les failles de sécurité : permissions trop permissives, niveau de vérification insuffisant, rôles administrateurs non protégés, etc. Elle vous propose ensuite de corriger la plupart des problèmes en un clic.

Utilisez la commande : ```/audit```

:::info
La commande est réservée aux membres disposant de la permission `Administrateur`. Le rapport n'est visible que par vous (réponse éphémère).
:::

## ❓ Fonctionnement de l'audit {#working}

RaidProtect attribue à votre serveur un **score global sur 100**, accompagné d'un grade (de **S** à **E**) et d'une appréciation : **Excellent** (90 et plus), **Bon** (70 et plus), **À améliorer** (40 et plus) ou **Critique** (moins de 40).

Le rapport est découpé en trois catégories, chacune avec son propre score :

- **Configuration du serveur**
- **Rôles**
- **Salons**

Cliquez sur le bouton "**Détails**" d'une catégorie pour voir le résultat de chaque vérification, puis sur "**Retour**" pour revenir au rapport. Le bouton "**Actualiser**" relance l'analyse après vos modifications.

### Vérifications effectuées {#checks}

| Catégorie | Vérification |
|---|---|
| Configuration du serveur | **Niveau de vérification** |
| Configuration du serveur | **Filtre de contenu explicite** |
| Configuration du serveur | **Double authentification (2FA) pour la modération** |
| Configuration du serveur | **Notifications par défaut** |
| Configuration du serveur | **Alertes de raid** |
| Rôles | **Permissions de @everyone** |
| Rôles | **Rôles auto-attribuables** |
| Rôles | **Rôles administrateurs** |
| Rôles | **Bots administrateurs** |
| Salons | **Permissions de salon pour @everyone** |
| Salons | **Permissions de salon redondantes** |

Si des permissions manquent à RaidProtect pour fonctionner correctement, un avertissement dédié est affiché en plus du score. L'audit se termine par une section "**Conseils**" qui vous suggère d'activer les protections RaidProtect encore désactivées ([HoneyPot](./honeypot.md), [Anti-spam](./anti-spam.mdx), [Auto RaidMode](./raid-mode.md), [Fermeture des MP](./dm-lock.mdx)).

## 🔧 Corriger les failles en un clic {#fix}

Les vérifications qui peuvent être corrigées automatiquement affichent un bouton "**Corriger**" :

| Vérification | Correction appliquée |
|---|---|
| Niveau de vérification | Passe le niveau de vérification du serveur à **Élevé** |
| Filtre de contenu explicite | Active le filtre pour **tous les membres** |
| Notifications par défaut | Passe les notifications par défaut à **@mentions uniquement** |
| Permissions de @everyone | Retire les permissions sensibles du rôle @everyone |
| Permissions de salon redondantes | Nettoie les permissions de salon inutiles ("**Tout corriger**") |

Pour les **rôles administrateurs** (et bots administrateurs), il n'existe pas de correction automatique : l'audit vous propose de les protéger avec les boutons "**Intégrer**" ou "**Tout intégrer**", qui les ajoutent à l'[Authentication Manager](./authentication-manager.mdx).

:::warning
Pour appliquer les corrections, RaidProtect doit disposer des permissions `Gérer le serveur` et `Gérer les rôles`.
:::
