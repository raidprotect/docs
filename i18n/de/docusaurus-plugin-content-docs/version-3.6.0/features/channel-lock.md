---
title: Kanalsperre
description: "Der Befehl /lock von RaidProtect sperrt einen Kanal im Nu, um neue Nachrichten zu verhindern, vorübergehend oder bis zur Entsperrung."
---

import ChannelLockMockup from '@site/src/components/DiscordMessage/mockups/channel-lock';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

{/* <ChannelLockMockup /> : vorerst ausgeblendet */}

Manchmal ist es notwendig, einen Kanal vorübergehend zu sperren, um zu verhindern, dass Benutzer dort Nachrichten senden. Dank des Sperrbefehls wird das zum Kinderspiel!

## 🔒 Einen Kanal sperren {#lock}

Verwenden Sie den Befehl: ```/lock [#channel] [duration] [reason] [--silent]```

Dieser Befehl entzieht der Rolle **@everyone** im betroffenen Kanal die Berechtigungen, Nachrichten zu senden und Nachrichten in Threads zu senden, und verhindert so, dass Benutzer dort posten.

- Ersetzen Sie `[#channel]` durch die Erwähnung oder die [Kennung](../guides/id.mdx) des zu sperrenden Kanals. Ohne Kanal sperren wir den, in dem Sie den Befehl ausführen. Text-, Ankündigungs-, Sprach-, Forum-, Medien- und Bühnenkanäle sowie Kategorien werden akzeptiert; Threads nicht.
- Geben Sie mit `[reason]` an, warum der Kanal gesperrt wird (z. B. *Chat-Bereinigung*, *wichtige Ankündigung* usw.).
- Fügen Sie `--silent` hinzu, um im Kanal nichts anzukündigen: Nur Sie erhalten die Bestätigung.

:::info
Ein und derselbe Kanal kann nur einmal alle 10 Minuten gesperrt werden.
:::

### Eine Kategorie sperren {#lock-category}

Das Sperren einer Kategorie sperrt auch alle ihre sichtbaren Kanäle (außer Threads) auf einmal, und `/unlock` auf der Kategorie entsperrt sie gemeinsam. Ein bereits für das Schreiben geschlossener Kanal (Regeln, Ankündigungen) bleibt unverändert, beim Sperren wie beim Entsperren. Wenn eine temporäre Sperre einer Kategorie abläuft, nennt eine einzige Logzeile die Kategorie und die Anzahl der entsperrten Kanäle.

### Temporäre Sperre {#lock-duration}

Mit dem Parameter `[duration]` können Sie **den Kanal automatisch entsperren lassen**, nachdem die angegebene Dauer verstrichen ist (z. B. `15m`, `1h`, `2d`). Nützlich für eine schnelle Beruhigung, ohne daran denken zu müssen, den Kanal manuell zu entsperren. Die Dauer ist auf die maximale Dauer einer Sanktion begrenzt.

## 🔓 Einen Kanal entsperren {#unlock}

Verwenden Sie den Befehl: ```/unlock [#channel] [reason] [--silent]```

Dieser Befehl stellt die Berechtigungen zum Senden von Nachrichten für die Rolle **@everyone** auf den Zustand vor der Sperre wieder her und erlaubt es den Benutzern, wieder zu posten. Geben Sie mit `[reason]` an, warum der Kanal entsperrt wird (z. B. *Diskussion wieder eröffnet*, *Ankündigung beendet* usw.). Mit `--silent` wird im Kanal nichts angekündigt.

:::warning
Damit die Sperre korrekt funktioniert, darf keine für alle offene Rolle eine explizite Berechtigung haben, in diesem Kanal zu schreiben. Andernfalls können Mitglieder mit diesen Rollen weiterhin schreiben. Die für die Rollen Ihres Teams gesetzten Freigaben sind dagegen nützlich: Sie lassen dem Staff während eines `/lock` das Wort, und das [Audit](./audit.md) meldet sie nicht mehr als redundant.
:::
:::info
Die Befehle `lock` und `unlock` sind [per Präfix verwendbar](../guides/prefix.md). Sie erfordern die Berechtigung „**Nachrichten verwalten**“. RaidProtect benötigt die Berechtigungen „**Kanäle verwalten**“ und „**Rollen verwalten**“, um die Berechtigungen des Kanals zu ändern.
:::

## ✏️ Konfiguration des Schlosses {#config}

Sie können wählen, ob gesperrte Kanäle mit einem Schloss umbenannt werden: `/lock` benennt den Kanal dann in `🔒-name-des-kanals` um, und `/unlock` entfernt das Präfix. So sehen Sie den Zustand des Kanals direkt in der Kanalliste. Diese Option ist **standardmäßig deaktiviert**.

Um das Schloss zu aktivieren oder zu deaktivieren:
1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Werkzeuge**“.
3. Klicken Sie neben „**Kanalsperre**“ auf „**Aktivieren**“ (oder „**Deaktivieren**“). Die Schaltfläche funktioniert als Umschalter, ein einfacher Klick genügt.

<Settings start="home:utilities" />

:::info
Das Umbenennen erfordert die Berechtigung „**Kanäle verwalten**“.
:::

## Häufig gestellte Fragen {#faq}

### Kann man einen anderen Kanal sperren als den, in dem man sich befindet?

Ja, geben Sie den Kanal als erstes Argument an: `/lock #allgemein 30m Raid läuft`.

### Warum können manche Mitglieder in einem gesperrten Kanal noch schreiben?

Die Sperre entzieht nur der Rolle @everyone das Wort. Eine Rolle mit einer expliziten Berechtigung, in diesem Kanal zu schreiben, behält sie.

### Wie fügt man dem Namen gesperrter Kanäle ein Schloss hinzu?

Aktivieren Sie in `/settings`, Tab Werkzeuge, „Kanalsperre“. Die Option ist standardmäßig deaktiviert.
