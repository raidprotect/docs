---
title: Sprache
description: "Ändern Sie die Sprache von RaidProtect passend zu Ihrer Community: Der Bot spricht 11 Sprachen, von Französisch bis Japanisch, oder folgt der Sprache Ihres Discord-Servers."
---

import { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect ermöglicht es Ihnen, die vom Bot verwendete Sprache zu wählen, um sich bestmöglich an Ihre Discord-Community anzupassen.

**Öffentliche Nachrichten:** Die konfigurierte Sprache gilt für die öffentlichen Nachrichten, die RaidProtect auf Ihrem Server sendet (Logs, Captcha, Meldungen usw.).

**Ephemere Nachrichten:** Private oder temporäre Nachrichten werden weiterhin in der Sprache des Nutzers angezeigt, der mit dem Bot interagiert.

## 🌐 Liste der unterstützten Sprachen {#supported}

- **Französisch**
- **Englisch**
- **Spanisch**
- **Deutsch**
- **Brasilianisches Portugiesisch**
- **Italienisch**
- **Türkisch**
- **Vietnamesisch**
- **Japanisch**
- **Vereinfachtes Chinesisch**
- **Traditionelles Chinesisch**

Es werden nur vollständig übersetzte Sprachen angeboten. Ephemere Antworten an ein Mitglied, das Discord in einer anderen Sprache nutzt, werden auf Englisch angezeigt.

## ⚙️ Die Sprache des Bots ändern {#change}

1. Führen Sie den [Befehl `/settings`](./setup.md#settings) aus.
2. Klicken Sie im Tab „**Allgemein**“ neben „**Sprache**“ auf „**Bearbeiten**“.
3. Wählen Sie die gewünschte Sprache in der Liste aus und bestätigen Sie.

<SettingsModal name="lang" />

Die Änderung wird sofort wirksam und erscheint in den Logs des Servers.

### Der Sprache des Servers folgen {#follow}

Die erste Option, „**Sprache des Servers übernehmen**“, übernimmt die Hauptsprache, die in den Community-Einstellungen von Discord festgelegt ist. Das ist die Standardeinstellung. Gehört diese Sprache nicht zu den unterstützten Sprachen, spricht RaidProtect Englisch.

:::info
Die Sprachunterstützung von RaidProtect entwickelt sich ständig weiter! [Schlagen Sie](https://suggestions.raidprotect.bot) die Sprachen vor, die Sie im Bot sehen möchten, oder [stimmen Sie](https://suggestions.raidprotect.bot) für die vorgeschlagenen Sprachen ab, damit sie hinzugefügt werden.
:::
