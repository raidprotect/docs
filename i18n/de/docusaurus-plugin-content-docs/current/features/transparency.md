---
title: Transparenz
---

import TransparencyMockup from '@site/src/components/DiscordMessage/mockups/transparency';

<TransparencyMockup />

Die Transparenz ermöglicht es, Ihren Mitgliedern zu zeigen, wie der Server moderiert wird. Sie beruht auf drei sich ergänzenden Elementen: **periodischen Moderations-Zusammenfassungen**, einem **öffentlichen Modlog** und dem **Befehl `/transparency`**.

## 🛠️ Konfiguration der Transparenz {#config}

1. Führen Sie den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicken Sie auf die Schaltfläche "**Transparenz**".

Das Menü gibt Ihnen Zugang zu den "**Periodischen Zusammenfassungen**", zum "**Öffentlichen Modlog**" und zur Schaltfläche zur Aktivierung des "**Befehls transparency**".

## 📊 Periodische Zusammenfassungen {#recaps}

Eine Zusammenfassung ist eine aggregierte Übersicht der Moderationsaktionen, die je nach gewählter Häufigkeit automatisch in einem Kanal veröffentlicht wird.

1. Klicken Sie im Transparenz-Menü auf "**Periodische Zusammenfassungen**".
2. Klicken Sie auf "**Zusammenfassung hinzufügen**".
3. Konfigurieren Sie die Zusammenfassung: die **Häufigkeit**, den **Kanal** für die Veröffentlichung und gegebenenfalls eine zu **erwähnende** Rolle.

Die verfügbaren Häufigkeiten sind: **Wöchentlich** (Standard), **Alle zwei Wochen**, **Monatlich**, **Vierteljährlich** und **Jährlich**. Eine Vorschau der Zusammenfassung wird im Kanal veröffentlicht, sobald Sie sie festlegen.

Die Zusammenfassung enthält:
- die **Gesamtzahl der Moderationsaktionen** im Zeitraum;
- die Aufschlüsselung nach Sanktionstyp (Bannungen, Softbans, Kicks, Timeouts, Mutes, Einsperrungen, Verwarnungen und andere Aktionen);
- die Anzahl der **von [ScamLens](./scam-images.md) blockierten Betrugsversuche**;
- die Aufteilung zwischen **automatischen** Aktionen und Aktionen **des Teams**.

:::info
In der kostenlosen Version können Sie **eine einzige Zusammenfassung** konfigurieren. **Premium**-Server können mehrere gleichzeitig erstellen (zum Beispiel eine wöchentliche Zusammenfassung für das Team und eine monatliche öffentliche Zusammenfassung).
:::

## 📢 Öffentliches Modlog {#modlog}

Das öffentliche Modlog veröffentlicht **jede Moderationsaktion** in einem für Ihre Mitglieder sichtbaren Kanal, mit ausschließlich den Informationen, die Sie anzeigen möchten.

1. Klicken Sie im Transparenz-Menü auf "**Öffentliches Modlog**".
2. Wählen Sie einen Kanal aus oder lassen Sie RaidProtect einen für Sie erstellen (mit dem Namen "**public-modlog**", schreibgeschützt für @everyone).
3. Wählen Sie die **angezeigten Elemente**: "**Grund**", "**Moderator**", "**Dauer**", "**Sanktioniertes Mitglied**".
4. Wählen Sie die einbezogenen **Quellen**: "**Manuell (Team)**" und/oder "**Automatisch (RaidProtect)**".

Wenn die Aktion automatisch ist und die Anzeige des Moderators aktiviert ist, gibt das Modlog "RaidProtect" anstelle des Namens des Moderators an.

:::note
Die Veröffentlichung wird bewusst reguliert, um zu vermeiden, dass der Kanal bei einem Raid überflutet wird: Die Nachrichten werden schrittweise gesendet.
:::

## 📜 Der Befehl `/transparency` {#command}

Verwenden Sie den Befehl: ```/transparency```

Er ermöglicht es jedem Mitglied, den **letzten Transparenzbericht** des abgeschlossenen Zeitraums einzusehen (ephemere Antwort, nur für das Mitglied sichtbar).

- Der Befehl muss über die Schaltfläche "**Befehl transparency**" im Transparenz-Menü aktiviert werden.
- Wenn Sie mehrere Zusammenfassungen haben, bestimmt die Schaltfläche "**/transparency speisen**" auf einer Zusammenfassung diese als die vom Befehl verwendete Quelle.
