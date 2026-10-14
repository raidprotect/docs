---
title: Audit de sécurité
description: "La commande /audit de RaidProtect analyse la sécurité de votre serveur Discord, repère les failles de configuration et vous propose de les corriger en un clic."
---

import AuditMockup from '@site/src/components/DiscordMessage/mockups/audit';

<AuditMockup />

La commande `/audit` analyse la configuration de votre serveur Discord et identifie les failles de sécurité : permissions trop permissives, niveau de vérification insuffisant, [rôles administrateurs non protégés](/learn/least-privilege), etc. Elle vous propose ensuite de corriger la plupart des problèmes en un clic.

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

Cliquez sur le bouton “**Détails**” d'une catégorie pour voir le résultat de chaque vérification, puis sur “**Retour**” pour revenir au rapport. Le bouton “**Actualiser**” relance l'analyse après vos modifications.

### Vérifications effectuées {#checks}

| Catégorie | Vérification |
|---|---|
| Configuration du serveur | **Niveau de vérification** |
| Configuration du serveur | **Filtre de contenu explicite** |
| Configuration du serveur | **Double authentification (2FA) pour la modération** |
| Configuration du serveur | **Notifications par défaut** |
| Configuration du serveur | **Alertes de raid** |
| Configuration du serveur | **DM Lock (serveur public)** * |
| Configuration du serveur | **Nombre de bots** * |
| Rôles | **Permissions de @everyone** |
| Rôles | **Rôles auto-attribuables** |
| Rôles | **Rôles octroyés par des invitations** |
| Rôles | **Rôles administrateurs** |
| Rôles | **Bots administrateurs** * |
| Salons | **Permissions de salon pour @everyone** |
| Salons | **Permissions de salon redondantes** |
| Salons | **Accords d'expression des rôles d'équipe** * |
| Salons | **Webhooks anciens** * |

Les vérifications marquées d'un `*` sont **indicatives** : elles apparaissent dans le rapport mais n'influencent pas le score. **DM Lock (serveur public)** n'apparaît que sur les serveurs communautaires ou publics.

Quelques précisions sur ces vérifications :

- **Rôles auto-attribuables** : sont concernés les rôles qu'un membre obtient sans modérateur, avec leur source : accueil de Discord, [rôle automatique](./onboarding.md#autorole) de RaidProtect, boost, abonnement, intégration ou rôle lié.
- **Accords d'expression des rôles d'équipe** : un rôle qui porte une permission de modération et qui a, sur certains salons, des accords d'expression (écrire, parler…) déjà couverts ailleurs. Nous les gardons, car ils laissent la parole à l'équipe pendant un [`/lock`](./channel-lock.md) ou au niveau 1 de [DISCON](./discon.md). Vérifiez simplement que chaque rôle listé est bien un rôle d'équipe : sinon, il échappe aux verrouillages.

Si des permissions manquent à RaidProtect pour fonctionner correctement, un avertissement dédié est affiché en plus du score. Une vérification qui demande une permission absente (par exemple Gérer les webhooks) est signalée comme non évaluée.

:::info
Si RaidProtect ne voit pas certains salons de votre serveur, le rapport affiche un encart “**Analyse incomplète**” : ces salons ne sont pas analysés et le score ne porte que sur le reste.
:::

## 🔧 Corriger les failles en un clic {#fix}

Les vérifications qui peuvent être corrigées automatiquement affichent un bouton “**Corriger**” :

| Vérification | Correction appliquée |
|---|---|
| Niveau de vérification | Passe le niveau de vérification du serveur à **Moyen** (“Moyen” ou plus est validé, “Faible” donne un avertissement, “Aucune” un échec) |
| Filtre de contenu explicite | Active le filtre pour **tous les membres** |
| Notifications par défaut | Passe les notifications par défaut à **@mentions uniquement** |
| Permissions de @everyone | Retire les permissions sensibles du rôle @everyone |
| Permissions de salon redondantes | Ouvre la liste des salons à nettoyer, puis “**Tout corriger**” |

Pour les **rôles administrateurs**, il n'existe pas de correction automatique : l'audit vous propose de les protéger avec les boutons “**Intégrer**” ou “**Tout intégrer**”, qui les ajoutent à l'[Authentication Manager](./authentication-manager.mdx).

:::warning
Pour appliquer les corrections, RaidProtect doit disposer des permissions `Gérer le serveur` et `Gérer les rôles`.
:::

### Permissions de salon redondantes {#redundant}

Une permission de salon est **redondante** quand elle ne change rien : elle est déjà accordée au niveau du serveur, déjà accordée par la permission @everyone du salon, ou c'est un refus sans effet. Il faut alors la modifier à plusieurs endroits pour qu'elle agisse réellement, ce qui crée des angles morts.

La liste détaille, salon par salon, chaque permission et la raison pour laquelle elle est redondante :

- Le bouton “**Ignorer**” d'un salon le retire de la liste, du score et de “**Tout corriger**”. Vous pouvez le rétablir depuis les “**Éléments ignorés**”.
- Corriger une catégorie corrige aussi les salons qui lui sont synchronisés.
- Les permissions d'un rôle **Administrateur** sont listées à part, dans “**Sans effet sur un rôle Administrateur**” : Discord les ignore, et nous ne les retirons jamais, car elles s'appliqueront si ce rôle perd Administrateur.

L'analyse tient compte des verrouillages temporaires :

- les salons verrouillés par [`/lock`](./channel-lock.md) sont écartés ;
- pendant le niveau 1 de [DISCON](./discon.md), les refus sont jugés sur les permissions qu'@everyone retrouvera ensuite ;
- les accords d'expression des rôles d'équipe ne sont pas comptés comme redondants (voir [plus haut](#checks)) ;
- une permission vocale posée sur un salon textuel (héritée de sa catégorie) n'est pas signalée.

## ✅ Écarter une alerte volontaire {#ignore}

Certaines alertes correspondent à des choix assumés : un rôle administrateur de confiance, une permission laissée à `@everyone` en connaissance de cause, etc. Le bouton “**Marquer comme OK**”, disponible dans le détail d'une catégorie, permet de choisir un élément puis de l'“**Ignorer**”.

Une alerte ignorée disparaît du rapport et ne pèse plus sur votre score. Vous pouvez à tout moment consulter la liste des éléments ignorés (bouton “**Éléments ignorés**”) et rétablir n'importe lequel d'entre eux avec “**Rétablir**” ou “**Tout rétablir**”.

## Questions fréquentes {#faq}

### Pourquoi le niveau de vérification « Moyen » suffit-il ?

Le niveau « Moyen » écarte déjà les comptes créés il y a moins de 5 minutes, ce qui bloque la plupart des comptes jetables. C'est donc le niveau que le bouton “**Corriger**” applique.

### Pourquoi l'audit ne retire-t-il pas les permissions de salon de mes rôles administrateurs ?

Discord ignore les permissions de salon d'un rôle qui a Administrateur. Nous les listons à part sans les retirer : elles reprendront effet si ce rôle perd Administrateur.

### Puis-je exclure un salon de l'analyse des permissions redondantes ?

Oui : cliquez sur “**Ignorer**” à côté du salon dans la liste des permissions redondantes. Il ne compte plus dans le score et vous pouvez le rétablir depuis les éléments ignorés.
