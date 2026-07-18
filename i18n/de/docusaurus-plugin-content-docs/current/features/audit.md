---
title: Sicherheitsaudit
---

import AuditMockup from '@site/src/components/DiscordMessage/mockups/audit';

<AuditMockup />

Der Befehl `/audit` analysiert die Konfiguration Ihres Discord-Servers und identifiziert Sicherheitslücken: zu großzügige Berechtigungen, unzureichende Verifizierungsstufe, ungeschützte Administrator-Rollen usw. Anschließend bietet er Ihnen an, die meisten Probleme mit einem Klick zu beheben.

Verwenden Sie den Befehl: ```/audit```

:::info
Der Befehl ist Mitgliedern mit der Berechtigung `Administrator` vorbehalten. Der Bericht ist nur für Sie sichtbar (ephemere Antwort).
:::

## ❓ Funktionsweise des Audits {#working}

RaidProtect vergibt für Ihren Server einen **Gesamtscore von 100**, begleitet von einem Grad (von **S** bis **E**) und einer Bewertung: **Ausgezeichnet** (90 und mehr), **Gut** (70 und mehr), **Verbesserungswürdig** (40 und mehr) oder **Kritisch** (weniger als 40).

Der Bericht ist in drei Kategorien unterteilt, jede mit ihrem eigenen Score:

- **Serverkonfiguration**
- **Rollen**
- **Kanäle**

Klicken Sie auf die Schaltfläche "**Details**" einer Kategorie, um das Ergebnis jeder Prüfung zu sehen, und dann auf "**Zurück**", um zum Bericht zurückzukehren. Die Schaltfläche "**Aktualisieren**" startet die Analyse nach Ihren Änderungen neu.

### Durchgeführte Prüfungen {#checks}

| Kategorie | Prüfung |
|---|---|
| Serverkonfiguration | **Verifizierungsstufe** |
| Serverkonfiguration | **Filter für anstößige Inhalte** |
| Serverkonfiguration | **Zwei-Faktor-Authentifizierung (2FA) für die Moderation** |
| Serverkonfiguration | **Standard-Benachrichtigungen** |
| Serverkonfiguration | **Raid-Warnungen** |
| Serverkonfiguration | **DM-Sperre** * (Community-Server) |
| Serverkonfiguration | **Anzahl der installierten Bots** * |
| Rollen | **Berechtigungen von @everyone** |
| Rollen | **Selbst zuweisbare Rollen** |
| Rollen | **Riskante Rollen, die per Einladung vergeben werden** |
| Rollen | **Administrator-Rollen** |
| Rollen | **Administrator-Bots** * |
| Kanäle | **Kanalberechtigungen für @everyone** |
| Kanäle | **Redundante Kanalberechtigungen** |
| Kanäle | **Veraltete Webhooks** * |

Mit `*` markierte Prüfungen sind **informativ**: Sie erscheinen im Bericht, wirken sich aber nicht auf den Score aus.

Wenn RaidProtect Berechtigungen fehlen, um ordnungsgemäß zu funktionieren, wird zusätzlich zum Score eine gesonderte Warnung angezeigt.

## 🔧 Lücken mit einem Klick beheben {#fix}

Die Prüfungen, die automatisch behoben werden können, zeigen eine Schaltfläche "**Korrigieren**" an:

| Prüfung | Angewandte Korrektur |
|---|---|
| Verifizierungsstufe | Setzt die Verifizierungsstufe des Servers auf **Hoch** |
| Filter für anstößige Inhalte | Aktiviert den Filter für **alle Mitglieder** |
| Standard-Benachrichtigungen | Setzt die Standard-Benachrichtigungen auf **nur @Erwähnungen** |
| Berechtigungen von @everyone | Entfernt die sensiblen Berechtigungen der Rolle @everyone |
| Redundante Kanalberechtigungen | Bereinigt die unnötigen Kanalberechtigungen ("**Alles korrigieren**") |

Für die **Administrator-Rollen** (und Administrator-Bots) gibt es keine automatische Korrektur: Das Audit bietet Ihnen an, sie mit den Schaltflächen "**Einbinden**" oder "**Alle einbinden**" zu schützen, die sie dem [Authentication Manager](./authentication-manager.mdx) hinzufügen.

:::warning
Um die Korrekturen anzuwenden, muss RaidProtect über die Berechtigungen `Server verwalten` und `Rollen verwalten` verfügen.
:::

## ✅ Eine bewusste Warnung verwerfen {#ignore}

Manche Warnungen entsprechen bewussten Entscheidungen: eine vertrauenswürdige Administrator-Rolle, eine `@everyone` wissentlich belassene Berechtigung usw. Mit der Schaltfläche "**Als OK markieren**", die in der Detailansicht einer Kategorie verfügbar ist, können Sie sie verwerfen.

Eine verworfene Warnung verschwindet aus dem Bericht und zählt nicht mehr in Ihren Score. Sie können die Liste der ignorierten Elemente jederzeit einsehen (Schaltfläche "**Ignorierte Elemente**") und jedes davon wiederherstellen.
