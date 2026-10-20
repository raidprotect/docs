---
title: Tag-Rolle
description: "Die Tag-Rolle von RaidProtect vergibt automatisch eine Rolle an Mitglieder, die den Tag Ihres Discord-Servers tragen, und belohnt ihr Engagement."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';
import TagRoleConceptMockup from '@site/src/components/DiscordMessage/mockups/tag-role-concept';

<TagRoleConceptMockup />

Die Tag-Rolle ermöglicht es, Mitgliedern automatisch eine Rolle zuzuweisen, die [den Tag Ihres Servers](https://support.discord.com/hc/de/articles/31444248479639-Server-Tags) zu ihrem Discord-Profil hinzufügen. Indem Sie diesen Mitgliedern eine Rolle zuweisen, würdigen Sie ihr Engagement und motivieren sie, Ihren Server aktiv zu repräsentieren. Eine einfache, aber effektive Methode, um die gemeinsame Identität zu stärken und gleichzeitig die treuesten Botschafter Ihrer Community zu belohnen.

## ❓ Funktionsweise der Tag-Rolle {#working}

Das Prinzip ist einfach. Sobald ein Mitglied den Server-Tag zu seinem Discord-Profil hinzufügt, weist RaidProtect ihm automatisch eine bestimmte Rolle zu.
Entfernt das Mitglied den Tag, wird ihm die Rolle wieder entzogen.

Wir erkennen die Änderung bei der nächsten Aktualisierung des Profils des Mitglieds (Spitzname, Avatar, Banner, Rollen, Tag …).

:::info
Ist der Tag nicht aktiviert oder steht Ihrem Server die Funktion noch nicht zur Verfügung, hat die Tag-Rolle keine Wirkung.
:::

## 🎖️ Konfiguration der Tag-Rolle {#config}

Die Einrichtung dauert nur wenige Klicks:
1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Werkzeuge**“.
3. Klicken Sie neben „**Tag-Rolle**“ auf „**Konfigurieren**“.
4. Wählen Sie eine bestehende Rolle über die Auswahl oder klicken Sie auf „**Für mich erstellen**“: Wir erstellen eine Rolle `Tag` ohne jede Berechtigung.
5. Sie können die Tag-Rolle jederzeit deaktivieren, indem Sie auf die Schaltfläche „**Zurücksetzen**“ klicken.

Jede Konfigurationsänderung der Tag-Rolle wird in Ihren Server-Logs festgehalten.

<Settings start="tagrole" />

:::tip
Ihre Mitglieder erhalten die Rolle bei ihrer nächsten Profiländerung (Spitzname, Avatar, Banner, Rollen, Tag …).
:::

### Befehl /tagrole {#command}

Verwenden Sie den Befehl: ```/tagrole```

Er öffnet direkt den Konfigurationsbildschirm der Tag-Rolle, ohne den Umweg über `/settings`. Er ist Mitgliedern mit der Berechtigung „**Rollen verwalten**“ vorbehalten.

### Abgelehnte Rollen {#refused-roles}

Die Tag-Rolle wird jedem Mitglied automatisch gegeben: Wir lehnen daher Rollen ab, die Probleme verursachen könnten.

- **Eine bereits von RaidProtect verwendete Rolle**: Jail-Rolle, Mute-Rolle, Verifizierungsrolle des Captchas oder automatische Rolle.
- **Eine verwaltete Rolle** einer Anwendung oder des Server-Boosts: Discord verbietet, sie manuell zuzuweisen. Erstellen Sie stattdessen eine normale Rolle.
- **Eine Rolle über der Rolle von RaidProtect**: Ziehen Sie die Rolle von RaidProtect in **Servereinstellungen > Rollen** darüber.
- **Eine Rolle über Ihrer höchsten Rolle** (außer für den Server-Eigentümer).
- **Eine Rolle mit sensiblen Berechtigungen**: Administrator, Bannen, Kicken, Server, Kanäle, Nachrichten, Rollen, Webhooks, Ausdrücke, Events oder Threads verwalten.

### Warnkästen {#warnings}

Der Konfigurationsbildschirm warnt Sie, wenn die Tag-Rolle nicht funktionieren kann:

- **Fehlende Berechtigung**: RaidProtect benötigt die Berechtigung „**Rollen verwalten**“. Eine Warnung ⚠️ erscheint außerdem neben „**Tag-Rolle**“ im Tab Werkzeuge von `/settings`.
- **Server-Tag nicht aktiviert**: Ihr Server hat die Funktion [Server-Tag](https://support.discord.com/hc/de/articles/31444248479639-Server-Tags) nicht aktiviert, die Tag-Rolle hat daher derzeit keine Wirkung.

Klicken Sie nach der Behebung auf „**Aktualisieren**“, um erneut zu prüfen.

## Häufig gestellte Fragen {#faq}

### Warum hat ein Mitglied mit dem Tag die Rolle noch nicht?

Wir erkennen den Tag bei der nächsten Aktualisierung des Profils des Mitglieds. Solange es nichts ändert (Spitzname, Avatar, Rollen, Tag …), wird die Rolle nicht zugewiesen. Der Support kann bei Bedarf eine vollständige Synchronisierung starten.

### Warum wird meine Rolle abgelehnt?

Die Tag-Rolle darf keine bereits von RaidProtect verwendete Rolle sein, keine von einer Anwendung verwaltete Rolle, keine Rolle über RaidProtect oder über Ihnen und keine Rolle mit sensiblen Berechtigungen.

### Wer kann die Tag-Rolle konfigurieren?

Administratoren über `/settings` und Mitglieder mit der Berechtigung „Rollen verwalten“ mit dem Befehl `/tagrole`.
