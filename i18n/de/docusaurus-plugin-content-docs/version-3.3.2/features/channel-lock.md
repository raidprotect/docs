---
title: Kanalsperre
---

Manchmal ist es notwendig, einen Kanal vorübergehend zu sperren, um zu verhindern, dass Benutzer Nachrichten senden. Dank des Sperrbefehls wird dies zum Kinderspiel!

## 🔒 Einen Kanal sperren {#lock}

Verwenden Sie den Befehl: ```/lock [Grund]```

Dieser Befehl entzieht der Rolle **@everyone** im Kanal die Berechtigung, Nachrichten zu senden, und verhindert so, dass alle Benutzer dort schreiben. Ersetzen Sie **[Grund]**, um anzugeben, warum der Kanal gesperrt ist (z. B. *Chat-Bereinigung*, *wichtige Ankündigung*, etc.).

## 🔓 Einen Kanal entsperren {#unlock}

Verwenden Sie den Befehl: ```/unlock [Grund]```

Dieser Befehl stellt die Berechtigungen zum Senden von Nachrichten auf den Zustand vor der Sperre für die Rolle **@everyone** im Kanal wieder her und erlaubt es den Benutzern, wieder zu schreiben. Ersetzen Sie **[Grund]**, um anzugeben, warum der Kanal entsperrt wird (z. B. *Diskussion wieder eröffnet*, *Ankündigung beendet*, etc.).

:::warning
Damit der Sperrbefehl korrekt funktioniert, müssen Sie sicherstellen, dass keine Rolle eine explizite Berechtigung hat, in diesem Kanal zu sprechen. Andernfalls können Mitglieder mit diesen Rollen weiterhin chatten.
:::
:::info
Die Befehle `lock` und `unlock` sind [per Präfix verwendbar](../guides/prefix.md).
:::

## ✏️ Schloss-Symbol-Konfiguration {#config}

Standardmäßig ist diese Funktion deaktiviert. Sie haben jedoch die Möglichkeit zu wählen, ob gesperrte Kanäle mit einem Schloss-Emoji (🔒) vor ihrem Namen umbenannt werden sollen.

Um das Schloss-Symbol vor gesperrten Kanalnamen zu aktivieren/deaktivieren:
1. Führen Sie den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicken Sie auf die Schaltfläche "**Schloss auf gesperrten Kanälen**". Diese Schaltfläche funktioniert als Umschalter; ein einfacher Klick genügt, um die Option zu aktivieren oder zu deaktivieren.
