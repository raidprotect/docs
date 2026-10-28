---
title: Transparenz
description: "Die Transparenz von RaidProtect zeigt Ihren Mitgliedern, wie der Server moderiert wird: regelmäßige Zusammenfassungen, ein öffentliches Modlog und der Befehl /transparency."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import TransparencyMockup from '@site/src/components/DiscordMessage/mockups/transparency';

<TransparencyMockup />

Die Transparenz ermöglicht es, Ihren Mitgliedern zu zeigen, wie der Server moderiert wird. Sie beruht auf drei sich ergänzenden Elementen: **periodischen Moderations-Zusammenfassungen**, einem **öffentlichen Modlog** und dem **Befehl `/transparency`**.

## 🛠️ Konfiguration der Transparenz {#config}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Moderation**“.
3. Klicken Sie neben „**Transparenz**“ auf „**Konfigurieren**“.

Über den Bildschirm erreichen Sie „**Regelmäßige Zusammenfassungen**“, „**Öffentliches Modlog**“ und den Schalter „**Befehl /transparency**“.

<Settings start="transparency" />

## 📊 Periodische Zusammenfassungen {#recaps}

Eine Zusammenfassung ist eine aggregierte Übersicht der Moderationsaktionen, die je nach gewählter Häufigkeit automatisch in einem Kanal veröffentlicht wird.

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Moderation**“.
3. Klicken Sie neben „**Transparenz**“ auf „**Konfigurieren**“.
4. Klicken Sie neben „**Regelmäßige Zusammenfassungen**“ auf „**Konfigurieren**“.
5. Klicken Sie neben einem freien Platz auf „**Hinzufügen**“.
6. Der Bildschirm der neuen Zusammenfassung öffnet sich: Stellen Sie ihre **Häufigkeit**, den **Kanal** für die Veröffentlichung und gegebenenfalls eine zu **erwähnende** Rolle ein und klicken Sie dann rechts vom Titel auf „**Aktivieren**“.

Um später zu einer Zusammenfassung zurückzukehren, klicken Sie in der Liste neben ihr auf „**Bearbeiten**“.

<Settings start="recaps" />

Eine neue Zusammenfassung wird deaktiviert erstellt, wöchentlich, veröffentlicht gegen 08:00 Uhr, im Kanal des öffentlichen Modlogs. Die verfügbaren Häufigkeiten sind: **Wöchentlich** (Standard), **Alle zwei Wochen**, **Monatlich**, **Vierteljährlich** und **Jährlich**. Zwei Zusammenfassungen derselben Häufigkeit können nicht im selben Kanal veröffentlicht werden.

Auf dem Bildschirm einer Zusammenfassung können Sie außerdem:

- die Zusammenfassung „**Umbenennen**“ (lassen Sie das Feld leer, um den Namen der Häufigkeit zu übernehmen);
- ihren Veröffentlichungs-„**Zeitplan**“ einstellen (siehe unten);
- auf „**/transparency speisen**“ klicken, um sie zur Quelle des [Befehls `/transparency`](#command) zu machen;
- sie „**Löschen**“.

Die Zusammenfassung enthält:
- die **Gesamtzahl der Moderationsaktionen** im Zeitraum;
- die Aufschlüsselung nach Sanktionstyp (Banns, Softbans, Kicks, Timeouts, Mutes, Jail-Einweisungen, Verwarnungen und andere Aktionen);
- die Anzahl der **von [ScamLens](./scam-images.md) blockierten Betrugsversuche**;
- die Verteilung zwischen **automatischen** Aktionen und Aktionen **des Teams**.

**Grenzen:** 1 Zusammenfassung in der kostenlosen Version, 5 Zusammenfassungen in der [Premium](/de/premium)-Version (zum Beispiel eine wöchentliche Zusammenfassung für das Team und eine öffentliche monatliche).

### Veröffentlichungszeitplan {#recap-schedule}

1. Klicken Sie auf dem Bildschirm einer Zusammenfassung auf „**Zeitplan**“.
2. Wählen Sie im Fenster die „**Veröffentlichungszeit**“ (Ortszeit, von `00:00` bis `23:00`).

<SettingsModal name="recapSchedule" />

| Version | Zeitpunkt der Veröffentlichung |
|---|---|
| Kostenlos | In einem Zeitfenster von 12 Std. ab der gewählten Uhrzeit |
| [Premium](/de/premium) | Gegen die gewählte Uhrzeit, auf 1 Std. genau |

Die gewählte Uhrzeit folgt der **Zeitzone des Servers**, die unter der Zeile „**Zeitplan**“ angezeigt wird. Sie wird nur einmal für den ganzen Server im Tab „**Allgemein**“ eingestellt:

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Allgemein**“.
3. Klicken Sie neben „**Zeitzone**“ auf „**Bearbeiten**“.
4. Wählen Sie Ihren Versatz unter „**Zeitzone (UTC)**“ oder geben Sie eine „**Benutzerdefinierte Zeitzone (optional)**“ wie `Europe/Paris` ein, die Vorrang hat und die Sommerzeit automatisch berücksichtigt.

<SettingsModal name="timezone" />

## 📢 Öffentliches Modlog {#modlog}

Das öffentliche Modlog veröffentlicht **jede Moderationsaktion** in einem für Ihre Mitglieder sichtbaren Kanal, mit ausschließlich den Informationen, die Sie anzeigen möchten.

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Moderation**“.
3. Klicken Sie neben „**Transparenz**“ auf „**Konfigurieren**“.
4. Klicken Sie neben „**Öffentliches Modlog**“ auf „**Konfigurieren**“.
5. Wählen Sie einen Kanal oder klicken Sie auf „**Für mich erstellen**“ (RaidProtect erstellt den Kanal `public-modlog`, für @everyone schreibgeschützt).
6. Wählen Sie unter „**Angezeigte Informationen**“: „**Grund**“, „**Moderator**“, „**Dauer**“, „**Sanktioniertes Mitglied**“ (Standard: Grund und Dauer).
7. Wählen Sie unter „**Veröffentlichte Sanktionen**“: „**Manuell (Team)**“ und/oder „**Automatisch (RaidProtect)**“ (Standard: beide).
8. Klicken Sie rechts vom Titel des Bildschirms auf „**Aktivieren**“.

<Settings start="modlog" />

Ist die Aktion automatisch und die Anzeige des Moderators aktiviert, nennt das Modlog „RaidProtect“ anstelle des Namens des Moderators.

## 📜 Der Befehl `/transparency` {#command}

Verwenden Sie den Befehl: ```/transparency```

Er ermöglicht jedem Mitglied, den **letzten Transparenzbericht** des abgeschlossenen Zeitraums einzusehen (ephemere Antwort, nur für das Mitglied sichtbar).

- Der Befehl muss mit dem Schalter „**Befehl /transparency**“ des Transparenz-Bildschirms aktiviert werden.
- Haben Sie mehrere Zusammenfassungen, bestimmt die Schaltfläche „**/transparency speisen**“ auf einer Zusammenfassung diese als Quelle des Befehls. Diese Zusammenfassung ist in der Liste mit einem ⭐ markiert.

## Häufig gestellte Fragen {#faq}

### Wie viele Zusammenfassungen kann ich planen?

Nur eine in der kostenlosen Version, bis zu fünf mit [Premium](/de/premium).

### Zu welcher Uhrzeit wird die Zusammenfassung veröffentlicht?

Zu der von Ihnen gewählten Uhrzeit, in der Zeitzone des Servers, die im Tab „**Allgemein**“ von `/settings` eingestellt wird. In der kostenlosen Version erfolgt die Veröffentlichung in einem Zeitfenster von 12 Stunden ab dieser Uhrzeit; mit Premium auf eine Stunde genau.

### Sehen meine Mitglieder, wer sie sanktioniert hat?

Nur wenn Sie in den angezeigten Informationen des öffentlichen Modlogs „**Moderator**“ ankreuzen. Bei einer automatischen Aktion nennt das Modlog dann RaidProtect.
