---
title: Betrugsbilder
---

import { AntiSpamSanctionsSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

RaidProtect schützt Ihren Server automatisch vor **Betrugsbildern** (Krypto-Betrug, gefälschte Giveaways, gefälschte Casino-Werbung). Dieser Schutz heißt **ScamLens**: Er analysiert gepostete Bilder, löscht die, die bekannte Betrugsversuche sind, und sanktioniert das Konto hinter der Nachricht (oft ein gehacktes Konto).

:::tip Keine Konfiguration nötig
ScamLens ist **standardmäßig aktiviert, sobald RaidProtect Ihrem Server beitritt**. Sie sind sofort geschützt, ohne etwas einzustellen.
:::

## ❓ So funktioniert es {#working}

Sobald ein Bild gepostet wird, analysiert ScamLens es. Handelt es sich um einen bekannten Betrug:

1. Der Vorfall wird **in den Moderationslogs erfasst** (mit dem betreffenden Bild), bevor etwas gelöscht wird.
2. Die Nachricht wird **gelöscht**.
3. Das dahinterstehende Konto wird **sanktioniert**.

ScamLens kümmert sich nur um **Bilder**. Andere Spam-Arten werden vom [Anti-spam](./anti-spam.mdx) und vom [HoneyPot](./honeypot.md) behandelt.

## 🔧 Deaktivieren oder wieder aktivieren {#config}

Die auf Betrugsbilder angewandte Sanktion **folgt standardmäßig der Ihres [HoneyPots](./honeypot.md#sanction)** (oder ein Timeout, wenn der HoneyPot nicht aktiviert ist). Sie können sie über dasselbe Menü ändern, deaktivieren oder wieder aktivieren:

1. Führen Sie den Befehl [`/settings`](../setup.md#settings) aus.
2. Öffnen Sie das Modul **Anti-spam** und dann das Menü **Sanktionen**.
3. Wählen Sie in der Auslöserliste **„Betrugsbilder (Crypto Scam)"** und die gewünschte Sanktion. Um den Schutz abzuschalten, setzen Sie die Sanktion dieses Auslösers zurück.

<AntiSpamSanctionsSettingsMockup />

## 📊 Transparenz {#reports}

Jeder von ScamLens blockierte Betrug:

- erscheint in den [Transparenz-Zusammenfassungen](./transparency.md#recaps) Ihres Servers („X von ScamLens blockierte Betrugsversuche");
- wird im öffentlichen Zähler der gefangenen Konten des [HoneyPots](./honeypot.md) mitgezählt;
- stärkt den Schutz **aller Server**, die RaidProtect nutzen.

Wir veröffentlichen regelmäßig öffentliche Berichte über die erkannten und blockierten Betrugsversuche: Sie finden sie in der [**Bedrohungswetter**](/blog/tags/threats). Um ScamLens im Detail kennenzulernen, lesen Sie [unsere Vorstellung](/blog/scamlens-early-activation).
