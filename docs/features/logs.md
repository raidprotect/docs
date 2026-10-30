---
title: Logs du serveur
description: "Les logs de RaidProtect suivent tout ce qui se passe sur votre serveur Discord : salons, rôles, membres, messages, vocal, emojis et réactions, avec l'auteur de chaque action."
---

Les **logs du serveur** gardent une trace de ce qui se passe sur votre serveur : qui a créé un salon, changé un rôle, supprimé un message ou déconnecté un membre d'un vocal. Chaque log commence par son auteur (« @modo a créé le salon #général. ») et montre l'avant et l'après d'une modification.

:::info Expérimentation : Logging Update
Les logs du serveur font partie de la **Logging Update**, prévue pour la version 3.8.0. En attendant sa sortie, elles sont en expérimentation, en bêta publique pour les serveurs [Premium](/premium).
:::

## ⚙️ Configurer les logs {#config}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Modération**”.
3. Cliquez sur “**Configurer**” à côté de “**Logs**”.
4. Ouvrez “**Logs du serveur**”, puis choisissez un salon pour chaque famille.

Dans chaque famille, deux listes :

- **Types envoyés** : décochez un type pour ne plus l'envoyer nulle part.
- **Types dans un autre salon** : donnez un salon à part à un type. Un type sans salon à part suit le salon de sa famille.

**Limites :** 3 salons de logs différents en version gratuite, 15 avec le [Premium](/premium). Sans Premium, seuls les 3 premiers salons reçoivent les logs : les autres sont mis en pause et leurs réglages sont gardés.

Les salons “**Général**”, “**Moderation**” et “**Captcha**” des [logs de modération](./moderation.mdx#logs) ne changent pas.

## 📚 Familles de logs {#families}

| Famille | Ce qui est enregistré |
| --- | --- |
| **Salons, rôles et invitations** | Catégories, salons, salons vocaux et fils créés, modifiés ou supprimés, permissions comprises. Rôles (et leur nouvel ordre), invitations, webhooks, intégrations, et bots ajoutés ou retirés avec leur rôle. Règles AutoMod de Discord, avec les mots et expressions ajoutés ou retirés, et événements programmés. Les membres intéressés par un événement sont réservés au [Premium](/premium). |
| **Membres** | Arrivées (avec l'âge du compte) et départs (avec la date d'arrivée et les rôles), règlement accepté, rôles ajoutés ou retirés, pseudos, avatars de serveur, membres inactifs retirés et boosts. |
| **Messages** | Messages supprimés, avec qui les a supprimés, messages modifiés, suppressions en masse, messages épinglés ou désépinglés. |
| **Vocal** <span className="badge-premium">Premium</span> | Arrivées, départs avec la durée de la session, changements de salon, micro, son, caméra et partage d'écran. Les actions du staff (rendre muet, mettre en sourdine, déplacer, déconnecter) sont à part, avec leur auteur. Conférences lancées, modifiées ou terminées, et membres qui prennent la parole ou lèvent la main. |
| **Emojis et réactions** | Emojis, stickers et sons du soundboard créés, modifiés ou supprimés. Les réactions ajoutées ou retirées sont réservées au [Premium](/premium) et décochées par défaut. |

Un message modifié montre l'avant et l'après. Pour un long message, seules les lignes changées sont affichées.

Quand l'auteur d'une action a donné une **raison** (visible dans le journal d'audit de Discord), elle apparaît dans le log. Les logs liées à un rôle ont un bouton “**Rôle**” qui ouvre sa fiche [`/roleinfo`](./utilities.mdx#roleinfo).

Les messages supprimés par RaidProtect lui-même (anti-spam, HoneyPot, anti-arnaque, `/clear`) restent dans les logs du module concerné, sans doublon.

## 🎨 Format des logs {#format}

Choisissez le format dans “**Format des logs**”, sur le même écran.

| Format | Affichage |
| --- | --- |
| **Défaut** | L'heure, l'icône, les mentions avec leur nom, puis le détail. |
| **Encadré** | Un encart coloré par log, avec son titre et le détail. |
| **Compact** <span className="badge-premium">Premium</span> | Une ligne par log : l'heure, l'icône et les mentions. |

Un serveur qui perd le Premium repasse au format Défaut. Son choix est gardé pour son retour.

## 💾 Messages en mémoire {#cache}

Pour retrouver le contenu d'un message supprimé, RaidProtect garde les messages récents en mémoire : **15 minutes** en version gratuite, **6 heures** avec le [Premium](/premium). Au-delà, le log indique que le contenu n'a pas été conservé.

Avec le Premium, les pièces jointes des messages supprimés sont aussi copiées dans le log (10 Mo par fichier, 100 Mo par serveur, les plus anciennes sont remplacées en premier).
