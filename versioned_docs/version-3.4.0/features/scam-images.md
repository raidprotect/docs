---
title: Images d'arnaque
---

import { AntiSpamSanctionsSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

RaidProtect protège automatiquement votre serveur contre les **images d'arnaque** (arnaques crypto, faux giveaways, fausses promotions de casinos). Cette protection s'appelle **ScamLens** : elle analyse les images postées, supprime celles qui sont des arnaques connues et sanctionne le compte à l'origine du message (souvent un compte piraté).

:::tip Aucune configuration nécessaire
ScamLens est **activé par défaut dès que RaidProtect arrive sur votre serveur**. Vous êtes protégé immédiatement, sans rien configurer.
:::

## ❓ Comment ça marche {#working}

Dès qu'une image est postée, ScamLens l'analyse. Si c'est une arnaque connue :

1. L'incident est **enregistré dans les logs de modération** (avec l'image concernée) avant toute suppression.
2. Le message est **supprimé**.
3. Le compte à l'origine est **sanctionné**.

ScamLens ne s'occupe que des **images**. Les autres types de spam sont gérés par l'[Anti-spam](./anti-spam.mdx) et le [HoneyPot](./honeypot.md).

## 🔧 Désactiver ou réactiver {#config}

La sanction appliquée aux images d'arnaque suit **par défaut celle de votre [HoneyPot](./honeypot.md#sanction)** (ou un Timeout si le HoneyPot n'est pas activé). Vous pouvez la modifier, la désactiver ou la réactiver depuis le même menu :

1. Faites la [commande `/settings`](../setup.md#settings).
2. Ouvrez le module **Anti-spam**, puis le menu **Sanctions**.
3. Dans la liste des déclencheurs, sélectionnez **« Images d'arnaques (Crypto Scam) »** et choisissez la sanction voulue. Pour couper la protection, réinitialisez la sanction de ce déclencheur.

<AntiSpamSanctionsSettingsMockup />

## 📊 Transparence {#reports}

Chaque arnaque bloquée par ScamLens :

- apparaît dans les [récaps de Transparence](./transparency.md#recaps) de votre serveur (« X arnaques bloquées par ScamLens ») ;
- est comptée dans le compteur public de comptes attrapés du [HoneyPot](./honeypot.md) ;
- vient renforcer la protection de **tous les serveurs** utilisant RaidProtect.

### Nos rapports mensuels {#recaps}

Chaque mois, nous publions la **[Météo des menaces](/blog/tags/threats)**, un bilan public de l'activité de ScamLens. Chiffres cumulés depuis le [lancement le 14 février 2026](/blog/scamlens-early-activation), sur l'ensemble des serveurs protégés par RaidProtect :

| Rapport | Images d'arnaque supprimées | Comptes piratés identifiés |
|---|---|---|
| [Bilan à 1 mois](/blog/scamlens-1-month-recap) *(mars 2026)* | 260 000 | 15 000 |
| [Avril 2026](/blog/threat-weather-april-2026) | 1 400 000 | 40 000 |
| [Mai 2026](/blog/threat-weather-may-2026) | 2 300 000 | 80 000 |
| [Juin 2026](/blog/threat-weather-june-2026) | 4 000 000 | 160 000 |
