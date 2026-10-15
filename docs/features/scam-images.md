---
title: Images d'arnaque
description: "ScamLens, l'anti-arnaque de RaidProtect, détecte et supprime automatiquement les images d'arnaque sur votre serveur Discord. Actif par défaut, sans configuration."
---

import AntiScamMockup from '@site/src/components/DiscordMessage/mockups/anti-scam';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect protège automatiquement votre serveur contre les **images d'arnaque** (arnaques crypto, faux giveaways, fausses promotions de casinos). Cette protection s'appelle **ScamLens** : elle analyse les images postées, supprime celles qui sont des arnaques connues et sanctionne le compte à l'origine du message (souvent un [compte piraté](/learn/token-grabber)).

<AntiScamMockup />

:::tip Aucune configuration nécessaire
ScamLens est **activé par défaut dès que RaidProtect arrive sur votre serveur**. Vous êtes protégé immédiatement, sans rien configurer.
:::

## ❓ Comment ça marche ? {#working}

ScamLens compare chaque image postée aux arnaques connues. Rien n'est lu du texte des messages.

Selon la correspondance trouvée :

- **Correspondance certaine** : le message est **supprimé** immédiatement et son auteur est **sanctionné**. Le log de sanction précise le salon touché.
- **Correspondance incertaine** : le message est supprimé **par précaution**, sans sanction. Si l'image est confirmée comme une arnaque par la suite, la sanction peut arriver plus tard.

Le motif de sanction est « Arnaque (Images Crypto) détectée ». Sur un serveur [Premium](/premium), le membre sanctionné reçoit aussi un message privé.

ScamLens ne s'occupe que des **images**. Les autres types de spam sont gérés par l'[Anti-spam](./anti-spam.mdx) et le [HoneyPot](./honeypot.md).

## 🔧 Configurer ScamLens {#config}

ScamLens se règle dans le module **Automod** de l'onglet “**Protection**”, sur l'écran “**Filtre d'images**”.

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Protection**”.
3. Cliquez sur “**Configurer**” à côté de “**Automod**”.
4. Cliquez sur “**Configurer**” à côté de “**Images**”.

<Settings start="imageFilter" />

### Activer ou désactiver ScamLens {#toggle}

Sur l'écran “**Filtre d'images**”, cliquez sur “**Désactiver**” (ou “**Activer**”) en haut à droite. Chaque changement est consigné dans vos logs.

### Choisir la sanction et sa durée {#sanction}

Dans le sélecteur “**Sanction appliquée**”, choisissez :
- “**Par défaut**” : la sanction de votre [HoneyPot](./honeypot.md#sanction) s'il est actif, sinon une exclusion temporaire (Timeout) ;
- ou une sanction précise : Bannissement, Softban, Jail, Expulsion, Mute, Timeout ou Avertissement.

Dans le sélecteur “**Durée de la sanction**”, choisissez 5 minutes, 1 heure, 1 jour ou “**Valeur personnalisée**” (par exemple `30m`, `2h`, `7d`). L'option “**Par défaut**” suit la durée de votre HoneyPot s'il est actif, sinon **1 jour**. Une durée choisie ici est propre à ScamLens, indépendante de l'Anti-spam et du HoneyPot. Elle s'applique aussi aux sanctions arrivées plus tard.

:::info
- Un **Jail** ou un **Mute** sans rôle configuré devient un **Timeout**.
- Le message public qui annonce la sanction suit le réglage “**Message public de sanction**” de l'[Anti-spam](./anti-spam.mdx#public-message), désactivable en Premium.
:::

## 🗂️ Catalogue d'images <span className="badge-premium">Premium</span> {#catalog}

En plus du catalogue global « Crypto Scam », géré par nos soins et appliqué sur tous les serveurs, les serveurs [Premium](/premium) peuvent bloquer **leurs propres images**, quel que soit leur contenu : captures de faux Nitro, visuels d'un scam qui cible votre communauté, images interdites sur votre serveur…

**Limites :** 2 listes par serveur, 10 images par envoi.

### Créer une liste {#lists}

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez l'onglet “**Protection**”.
3. Cliquez sur “**Configurer**” à côté de “**Automod**”.
4. Cliquez sur “**Configurer**” à côté de “**Images**”.
5. Dans “**Catalogue d'images**”, cliquez sur “**Créer une liste**” et donnez-lui un nom.
6. Choisissez le “**Salon de vérification**” de la liste.
7. Cliquez sur “**Ajouter des images**” et envoyez jusqu'à 10 images. Le résultat indique les images ajoutées, les variantes rattachées, les doublons ignorés et les images refusées.

Les images d'une liste sont supprimées dès qu'elles réapparaissent sur votre serveur, et leur auteur reçoit la sanction choisie plus haut.

:::warning Une liste = un seul registre d'images
Rangez dans une liste un seul type de contenu. Mélanger des images sans rapport dans une même liste corrompt la détection : créez plutôt une seconde liste.
:::

### Salon de vérification {#review}

Quand une image ressemble à une image de votre liste sans correspondance certaine, nous la signalons dans le **salon de vérification** de la liste (« Vérification requise : liste … »), avec deux boutons :
- “**Confirmer, c'est interdit**” : l'image rejoint le catalogue, le message est supprimé et son auteur sanctionné ;
- “**Écarter, c'est sain**” : cette image ne déclenchera plus de vérification.

Il faut la permission `Gérer le serveur` pour trancher. Sans salon de vérification, les correspondances incertaines restent silencieuses.

## 📊 Transparence {#reports}

Chaque arnaque bloquée par ScamLens :

- apparaît dans les [récaps de Transparence](./transparency.md#recaps) de votre serveur (« X arnaques bloquées par ScamLens ») ;
- est comptée dans le compteur de comptes signalés du [HoneyPot](./honeypot.md) ;
- vient renforcer la protection de **tous les serveurs** utilisant RaidProtect.

### Nos rapports mensuels {#recaps}

Chaque mois, nous publions la **[Météo des menaces](/blog/tags/threats)**, un bilan public de l'activité de ScamLens. Chiffres cumulés depuis le [lancement le 14 février 2026](/blog/scamlens-early-activation), sur l'ensemble des serveurs protégés par RaidProtect :

| Rapport | Images d'arnaque supprimées | Comptes piratés identifiés |
|---|---|---|
| [Bilan à 1 mois](/blog/scamlens-1-month-recap) *(mars 2026)* | 260 000 | 15 000 |
| [Avril 2026](/blog/threat-weather-april-2026) | 1 400 000 | 40 000 |
| [Mai 2026](/blog/threat-weather-may-2026) | 2 300 000 | 80 000 |
| [Juin 2026](/blog/threat-weather-june-2026) | 4 000 000 | 160 000 |

## Questions fréquentes {#faq}

### Faut-il configurer ScamLens ?

Non. ScamLens est activé par défaut dès que RaidProtect arrive sur votre serveur. Vous êtes protégé immédiatement, sans rien configurer.

### ScamLens bloque-t-il autre chose que les images ?

Non, ScamLens ne s'occupe que des images. Par défaut, il bloque les images d'arnaque connues. Les serveurs Premium peuvent aussi y ajouter leurs propres images grâce au catalogue d'images. Les autres types de spam sont gérés par l'[Anti-spam](./anti-spam.mdx) et le [HoneyPot](./honeypot.md).

### Quelle sanction est appliquée à une image d'arnaque ?

Par défaut, ScamLens applique la sanction et la durée de votre [HoneyPot](./honeypot.md#sanction), ou un Timeout d'un jour si le HoneyPot n'est pas activé. Vous pouvez choisir une autre sanction et une autre durée dans /settings, onglet Protection, module Automod, écran Filtre d'images.

### Comment désactiver ScamLens ?

Dans /settings, onglet Protection, cliquez sur « Configurer » à côté d'Automod, puis à côté d'Images, et utilisez l'interrupteur en haut à droite de l'écran Filtre d'images.
