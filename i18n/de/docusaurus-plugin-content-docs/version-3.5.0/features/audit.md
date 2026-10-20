---
title: Sicherheitsaudit
description: "Der Befehl /audit von RaidProtect prüft die Sicherheit Ihres Discord-Servers, findet Konfigurationslücken und behebt sie auf Wunsch mit einem Klick."
---

import AuditMockup from '@site/src/components/DiscordMessage/mockups/audit';

<AuditMockup />

Der Befehl `/audit` analysiert die Konfiguration Ihres Discord-Servers und identifiziert Sicherheitslücken: zu großzügige Berechtigungen, unzureichende Verifizierungsstufe, [ungeschützte Administrator-Rollen](/de/learn/least-privilege) usw. Anschließend bietet er Ihnen an, die meisten Probleme mit einem Klick zu beheben.

Verwenden Sie den Befehl: ```/audit```

:::info
Der Befehl ist Mitgliedern mit der Berechtigung `Administrator` vorbehalten. Der Bericht ist nur für Sie sichtbar (ephemere Antwort).
:::

## ❓ Funktionsweise des Audits {#working}

RaidProtect vergibt für Ihren Server einen **Gesamtscore von maximal 100 Punkten**, begleitet von einem Grad (von **S** bis **E**) und einer Bewertung: **Ausgezeichnet** (90 und mehr), **Gut** (70 und mehr), **Verbesserungswürdig** (40 und mehr) oder **Kritisch** (weniger als 40).

Der Bericht ist in drei Kategorien unterteilt, jede mit ihrem eigenen Score:

- **Serverkonfiguration**
- **Rollen**
- **Kanäle**

Klicken Sie auf die Schaltfläche „**Details**“ einer Kategorie, um das Ergebnis jeder Prüfung zu sehen, und dann auf „**Zurück**“, um zum Bericht zurückzukehren. Die Schaltfläche „**Aktualisieren**“ startet die Analyse nach Ihren Änderungen neu.

### Durchgeführte Prüfungen {#checks}

| Kategorie | Prüfung |
|---|---|
| Serverkonfiguration | **Verifizierungsstufe** |
| Serverkonfiguration | **Filter für anstößige Inhalte** |
| Serverkonfiguration | **Zwei-Faktor-Authentifizierung (2FA) für die Moderation** |
| Serverkonfiguration | **Standard-Benachrichtigungen** |
| Serverkonfiguration | **Raid-Warnungen** |
| Serverkonfiguration | **DM Lock (öffentlicher Server)** * |
| Serverkonfiguration | **Anzahl der Bots** * |
| Rollen | **Berechtigungen von @everyone** |
| Rollen | **Automatisch vergebene Rollen** |
| Rollen | **Durch Einladungen gewährte Rollen** |
| Rollen | **Administrator-Rollen** |
| Rollen | **Administrator-Bots** * |
| Kanäle | **Kanalberechtigungen für @everyone** |
| Kanäle | **Redundante Kanalberechtigungen** |
| Kanäle | **Ausdrucksfreigaben der Team-Rollen** * |
| Kanäle | **Alte Webhooks** * |

Mit `*` markierte Prüfungen sind **informativ**: Sie erscheinen im Bericht, wirken sich aber nicht auf den Score aus. **DM Lock (öffentlicher Server)** erscheint nur auf Community- oder öffentlichen Servern.

Einige Präzisierungen zu diesen Prüfungen:

- **Automatisch vergebene Rollen**: Betroffen sind Rollen, die ein Mitglied ohne Moderator erhält, mit ihrer Quelle: Discord-Onboarding, [automatische Rolle](./onboarding.md#autorole) von RaidProtect, Boost, Abonnement, Integration oder verknüpfte Rolle.
- **Ausdrucksfreigaben der Team-Rollen**: eine Rolle mit einer Moderationsberechtigung, die in bestimmten Kanälen Sprechfreigaben (schreiben, sprechen …) hat, die anderswo bereits abgedeckt sind. Wir behalten sie, denn sie lassen dem Team während eines [`/lock`](./channel-lock.md) oder auf Stufe 1 des [DISCON](./discon.md) das Wort. Prüfen Sie einfach, dass jede aufgeführte Rolle wirklich eine Team-Rolle ist: Andernfalls entgeht sie den Sperrungen.

Wenn RaidProtect Berechtigungen fehlen, um ordnungsgemäß zu funktionieren, wird zusätzlich zum Score eine gesonderte Warnung angezeigt. Eine Prüfung, die eine fehlende Berechtigung erfordert (zum Beispiel Webhooks verwalten), wird als nicht bewertet gekennzeichnet.

:::info
Sieht RaidProtect bestimmte Kanäle Ihres Servers nicht, zeigt der Bericht einen Kasten „**Unvollständige Analyse**“ an: Diese Kanäle werden nicht analysiert, und der Score bezieht sich nur auf den Rest.
:::

## 🔧 Lücken mit einem Klick beheben {#fix}

Die Prüfungen, die automatisch behoben werden können, zeigen eine Schaltfläche „**Beheben**“ an:

| Prüfung | Angewandte Korrektur |
|---|---|
| Verifizierungsstufe | Setzt die Verifizierungsstufe des Servers auf **Mittel** („Mittel“ oder höher wird bestanden, „Niedrig“ ergibt eine Warnung, „Keine“ ein Nichtbestehen) |
| Filter für anstößige Inhalte | Aktiviert den Filter für **alle Mitglieder** |
| Standard-Benachrichtigungen | Setzt die Standard-Benachrichtigungen auf **nur @Erwähnungen** |
| Berechtigungen von @everyone | Entfernt die sensiblen Berechtigungen der Rolle @everyone |
| Redundante Kanalberechtigungen | Öffnet die Liste der zu bereinigenden Kanäle, dann „**Alles beheben**“ |

Für die **Administrator-Rollen** gibt es keine automatische Korrektur: Das Audit bietet Ihnen an, sie mit den Schaltflächen „**Einbinden**“ oder „**Alle einbinden**“ zu schützen, die sie dem [Authentification Manager](./authentication-manager.mdx) hinzufügen.

:::warning
Um die Korrekturen anzuwenden, muss RaidProtect über die Berechtigungen `Server verwalten` und `Rollen verwalten` verfügen.
:::

### Redundante Kanalberechtigungen {#redundant}

Eine Kanalberechtigung ist **redundant**, wenn sie nichts ändert: Sie ist bereits auf Serverebene gewährt, bereits durch die @everyone-Berechtigung des Kanals gewährt oder ist eine wirkungslose Verweigerung. Man muss sie dann an mehreren Stellen ändern, damit sie wirklich wirkt, was blinde Flecken erzeugt.

Die Liste führt Kanal für Kanal jede Berechtigung auf und den Grund, warum sie redundant ist:

- Die Schaltfläche „**Ignorieren**“ eines Kanals nimmt ihn aus der Liste, aus dem Score und aus „**Alles beheben**“ heraus. Sie können ihn über „**Ignorierte Elemente**“ wiederherstellen.
- Eine Kategorie zu korrigieren korrigiert auch die mit ihr synchronisierten Kanäle.
- Die Berechtigungen einer **Administrator**-Rolle werden gesondert aufgeführt, unter „**Ohne Wirkung auf eine Administrator-Rolle**“: Discord ignoriert sie, und wir entfernen sie nie, denn sie greifen wieder, falls diese Rolle Administrator verliert.

Die Analyse berücksichtigt laufende Sperrungen, durch [`/lock`](./channel-lock.md) oder durch den [DISCON](./discon.md).

## ✅ Eine bewusste Warnung verwerfen {#ignore}

Manche Warnungen entsprechen bewussten Entscheidungen: eine vertrauenswürdige Administrator-Rolle, eine `@everyone` wissentlich belassene Berechtigung usw. Mit der Schaltfläche „**Als OK markieren**“, die in der Detailansicht einer Kategorie verfügbar ist, wählen Sie ein Element aus und können es „**Ignorieren**“.

Eine verworfene Warnung verschwindet aus dem Bericht und zählt nicht mehr in Ihren Score. Sie können die Liste der ignorierten Elemente jederzeit einsehen (Schaltfläche „**Ignorierte Elemente**“) und jedes davon mit „**Wiederherstellen**“ oder „**Alle wiederherstellen**“ wieder aufnehmen.

## Häufig gestellte Fragen {#faq}

### Warum genügt die Verifizierungsstufe „Mittel“?

Die Stufe „Mittel“ hält bereits Konten fern, die vor weniger als 5 Minuten erstellt wurden, was die meisten Wegwerfkonten blockiert. Es ist daher die Stufe, die die Schaltfläche „**Beheben**“ anwendet.

### Warum entfernt das Audit die Kanalberechtigungen meiner Administrator-Rollen nicht?

Discord ignoriert die Kanalberechtigungen einer Rolle mit Administrator. Wir führen sie gesondert auf, ohne sie zu entfernen: Sie greifen wieder, falls diese Rolle Administrator verliert.

### Kann ich einen Kanal von der Analyse der redundanten Berechtigungen ausschließen?

Ja: Klicken Sie in der Liste der redundanten Berechtigungen neben dem Kanal auf „**Ignorieren**“. Er zählt dann nicht mehr im Score, und Sie können ihn über die ignorierten Elemente wiederherstellen.
