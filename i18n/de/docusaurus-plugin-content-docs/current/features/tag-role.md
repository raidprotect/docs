---
title: Tag-Rolle
description: "Die Tag-Rolle von RaidProtect vergibt automatisch eine Rolle an Mitglieder, die das Tag Ihres Discord-Servers tragen, und belohnt ihr Engagement."
---

import TagRoleMockup from '@site/src/components/DiscordMessage/mockups/tag-role';
import TagRoleConceptMockup from '@site/src/components/DiscordMessage/mockups/tag-role-concept';

<TagRoleConceptMockup />

Die Tag-Rolle ermöglicht es, Mitgliedern automatisch eine Rolle zuzuweisen, die [den Tag Ihres Servers](https://support.discord.com/hc/de/articles/31444248479639-Server-Tags) zu ihrem Discord-Profil hinzufügen. Indem Sie diesen Mitgliedern eine Rolle zuweisen, würdigen Sie ihr Engagement und [motivieren sie, Ihren Server aktiv zu repräsentieren](https://dfr.gg/blog/2025/05/09/revolution-boosts-tags-serveur-publics#tags). Eine einfache, aber effektive Methode, um die gemeinsame Identität zu stärken und gleichzeitig die treuesten Botschafter Ihrer Community zu belohnen.

## ❓ Funktionsweise der Tag-Rolle {#working}

Das Prinzip ist einfach. Sobald ein Mitglied den Server-Tag zu seinem Discord-Profil hinzufügt, weist RaidProtect ihm automatisch eine bestimmte Rolle zu.
Entfernt das Mitglied den Tag, wird ihm die Rolle wieder entzogen.

:::info
Ist der Tag nicht aktiviert oder steht Ihrem Server die Funktion noch nicht zur Verfügung, hat die Tag-Rolle keine Wirkung.
:::

## 🎖️ Konfiguration der Tag-Rolle {#config}

Die Einrichtung dauert nur wenige Klicks:
1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Klicken Sie auf die Schaltfläche "**Tag-Rolle**".
3. Wählen Sie eine bestehende Rolle über das Auswahlmenü oder klicken Sie auf "**Einen für mich erstellen**".
4. Sie können die Rolle jederzeit abwählen, indem Sie auf die Schaltfläche "**Zurücksetzen**" klicken.

<TagRoleMockup />

:::tip
Ihre Mitglieder erhalten die Rolle bei ihrer nächsten Profiländerung (Benutzername, Avatar, Banner, Rollen, Tag…).
:::

## 🔄 Synchronisierung der Rolle {#sync}

Um die Rolle sofort allen Mitgliedern zuzuweisen, die den Tag bereits tragen (und sie denjenigen zu entziehen, die ihn nicht mehr tragen), verwenden Sie die Schaltfläche "**Synchronisieren**" in der Konfiguration der Tag-Rolle:

- **Kostenlos**: eine kostenlose Synchronisierung, nur einmal pro Server.
- **Premium**: eine Synchronisierung pro Woche.

Die Synchronisierung wird im Hintergrund gestartet und läuft auch dann weiter, wenn der Bot neu startet. Es kann immer nur eine Synchronisierung gleichzeitig auf einem Server laufen.

:::note
Die Schaltfläche "Synchronisieren" wird schrittweise ausgerollt. Falls sie auf Ihrem Server noch nicht verfügbar ist, können Sie [beim Support](https://raidprotect.bot/discord) eine vollständige Synchronisierung der Rolle anfordern.
:::
