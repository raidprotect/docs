---
title: Präventiver Slowmode
description: "Der präventive Slowmode von RaidProtect passt den Langsam-Modus der Kanäle Ihres Discord-Servers automatisch an, damit die Nachrichtenrate lesbar bleibt."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

Der **präventive Slowmode** von RaidProtect passt den [Langsam-Modus](./moderation.mdx#slowmode) Ihrer Kanäle automatisch an, um eine **Nachrichtenrate** pro Minute zu halten. Wenn ein Kanal ausufert (Ankündigung, Live, Zustrom neuer Mitglieder, Beginn eines [Raids](/de/learn/discord-raid)), erhöhen wir den Langsam-Modus; wenn er sich beruhigt, senken wir ihn wieder. Ihre Moderatoren müssen den Chat nicht mehr beobachten, um ihn von Hand einzustellen.

:::info Experiment: Shield Update
Der präventive Slowmode ist [Premium](/de/premium)-Servern vorbehalten. Er gehört zur **Shield Update**, die für Version 3.6.0 vorgesehen ist, und befindet sich bis zu ihrer Veröffentlichung in der Experimentierphase.
:::

## ❓ Wie funktioniert es? {#working}

- **Eine Nachrichtenrate**: Für jeden regulierten Kanal wählen Sie, wie viele Nachrichten pro Minute er erhalten darf (standardmäßig 30). Darüber steigt der Slowmode von selbst.
- **Grenzen**: Der Langsam-Modus bleibt immer zwischen dem **minimalen Slowmode** und dem **maximalen Slowmode**, die Sie für den Kanal festgelegt haben.
- **Laufende Anpassung**: Wir passen den Langsam-Modus an die tatsächliche Rate an, und er steigt sofort, wenn ein Kanal ausufert.
- **Schrittweise Absenkung**: Wenn sich der Kanal beruhigt, kehrt der Langsam-Modus allmählich zum Minimum zurück.
- **Audit-Log**: Jede Änderung trägt den Grund „Automatischer Slowmode“.

## 🛠️ Den präventiven Slowmode einrichten {#config}

### Einen regulierten Kanal hinzufügen {#add}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Schutz**“.
3. Klicken Sie neben „**Präventiver Slowmode**“ auf „**Konfigurieren**“.
4. Klicken Sie neben einem freien Platz auf „**Hinzufügen**“.
5. Wählen Sie den Kanal (Textkanal oder Ankündigungskanal).

<Settings start="slowmode" />

**Grenzen:** 6 regulierte Kanäle pro Server.

:::warning Erforderliche Berechtigungen
RaidProtect muss in jedem regulierten Kanal die Berechtigung `Kanäle verwalten` haben.
:::

### Einen Kanal einstellen {#channel}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Schutz**“.
3. Klicken Sie neben „**Präventiver Slowmode**“ auf „**Konfigurieren**“.
4. Klicken Sie neben dem Kanal auf „**Bearbeiten**“.
5. Wählen Sie die „**Nachrichtenrate**“, den „**Minimaler Slowmodus**“ und den „**Maximaler Slowmodus**“.

<Settings start="slowmodeChannel" />

| Einstellung | Angebotene Werte | Standard |
|---|---|---|
| **Nachrichtenrate** | 5 bis 120 Nachrichten pro Minute | 30 Nachrichten / Min. |
| **Minimaler Slowmodus** | 0 bis 10 Sekunden | 0 Sekunden (kein Minimum) |
| **Maximaler Slowmodus** | 5 Sekunden bis 10 Minuten | 2 Minuten |

Für einen Wert, der nicht in der Liste steht, klicken Sie auf „**Anpassen**“ und geben Sie Ihre eigenen Werte ein (zum Beispiel `40` Nachrichten pro Minute, ein Minimum von `0s`, ein Maximum von `2m 30s`). Der Langsam-Modus darf 6 Stunden nicht überschreiten, das Limit von Discord.

<SettingsModal name="slowmodeCustom" />

Auf dem Bildschirm eines Kanals können Sie außerdem:
- die Regulierung mit dem Schalter oben rechts stoppen oder wieder starten. Das Stoppen der Regulierung setzt den Langsam-Modus des Kanals auf 0 zurück;
- auf „**Auf alle regulierten Kanäle anwenden**“ klicken, um diese Einstellungen auf alle Ihre regulierten Kanäle zu übertragen;
- auf „**Löschen**“ klicken, um den Platz freizugeben.

## 🕒 Präventiver Slowmode und der Befehl /slowmode {#manual}

Wenn ein Moderator den [Befehl `/slowmode`](./moderation.mdx#slowmode) auf einem regulierten Kanal verwendet, wird sein manueller Wert angewendet und die **automatische Regulierung wird für diesen Kanal deaktiviert**. Eine Nachricht weist darauf hin. Um die Regulierung wieder zu starten, aktivieren Sie sie auf dem Bildschirm des Kanals in `/settings` erneut.

## Häufig gestellte Fragen {#faq}

### Was ist der Unterschied zwischen dem präventiven Slowmode und dem Anti-Spam?

Der [Anti-Spam](./anti-spam.mdx) sanktioniert Mitglieder, die spammen. Der präventive Slowmode sanktioniert niemanden: Er bremst einen ganzen Kanal, wenn die Gesamtrate zu hoch wird, damit die Unterhaltung lesbar bleibt.

### Wie viele Kanäle lassen sich regulieren?

Bis zu 6 Kanäle pro Server, jeder mit eigener Nachrichtenrate und eigenen Grenzen.

### Ist der präventive Slowmode kostenlos?

Nein, er ist Premium-Servern vorbehalten. Er gehört außerdem zur Shield Update, die sich noch in der Experimentierphase befindet.

### Was passiert, wenn ich den Langsam-Modus von Hand einstelle?

Der Befehl /slowmode wendet Ihren Wert an und deaktiviert die automatische Regulierung dieses Kanals. Sie können sie in /settings, Tab Schutz, Präventiver Slowmode, wieder aktivieren.
