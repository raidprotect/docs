---
title: Kanalsperre
description: "Der Befehl /lock von RaidProtect sperrt einen Kanal im Nu, um neue Nachrichten zu verhindern, vorübergehend oder bis zur Entsperrung."
---

import ChannelLockMockup from '@site/src/components/DiscordMessage/mockups/channel-lock';

{/* <ChannelLockMockup /> : masquée pour le moment */}

Manchmal ist es notwendig, einen Kanal vorübergehend zu sperren, um zu verhindern, dass Benutzer dort Nachrichten senden. Dank des Sperrbefehls wird das zum Kinderspiel!

## 🔒 Einen Kanal sperren {#lock}

Verwenden Sie den Befehl: ```/lock [duration] [Grund]```

Dieser Befehl entzieht der Rolle **@everyone** im Kanal die Berechtigung, Nachrichten zu senden, und verhindert so, dass Benutzer dort posten. Ersetzen Sie **[Grund]**, um anzugeben, warum der Kanal gesperrt ist (z. B.: *Chat-Bereinigung*, *wichtige Ankündigung* usw.).

### Temporäre Sperre {#lock-duration}

Mit dem Parameter `[duration]` können Sie **den Kanal automatisch entsperren lassen**, nachdem die angegebene Dauer verstrichen ist (z. B. `15m`, `1h`, `2d`). Nützlich für eine schnelle Beruhigung, ohne daran denken zu müssen, den Kanal manuell zu entsperren.

## 🔓 Einen Kanal entsperren {#unlock}

Verwenden Sie den Befehl: ```/unlock [Grund]```

Dieser Befehl stellt die Berechtigungen zum Senden von Nachrichten für die Rolle **@everyone** im Kanal auf den Zustand vor der Sperre wieder her und erlaubt es den Benutzern, wieder zu posten. Ersetzen Sie **[Grund]**, um anzugeben, warum der Kanal entsperrt wird (z. B.: *Diskussion wieder eröffnet*, *Ankündigung beendet* usw.).

:::warning
Damit der Sperrbefehl korrekt funktioniert, müssen Sie sicherstellen, dass keine Rolle eine explizite Berechtigung hat, in diesem Kanal zu schreiben. Andernfalls können Mitglieder mit diesen Rollen weiterhin schreiben.
:::
:::info
Die Befehle `lock` und `unlock` sind [per Präfix verwendbar](../guides/prefix.md).
:::

## ✏️ Konfiguration des Schlosses {#config}

Standardmäßig ist diese Funktion deaktiviert. Sie haben jedoch die Möglichkeit zu wählen, ob gesperrte Kanäle mit einem vorangestellten Schloss-Emoji (🔒) umbenannt werden sollen.

Um das Schloss vor den Namen gesperrter Kanäle zu aktivieren/deaktivieren:
1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Klicken Sie auf die Schaltfläche "**Schloss auf gesperrten Kanälen**". Diese Schaltfläche funktioniert als Umschalter; ein einfacher Klick genügt, um die Option zu aktivieren oder zu deaktivieren.
