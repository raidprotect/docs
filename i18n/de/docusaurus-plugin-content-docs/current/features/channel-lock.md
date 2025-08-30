---
title: Channel sperren
---

Manchmal ist es nötig, einen Kanal vorübergehend zu sperren, damit Nutzer keine Nachrichten mehr senden können. Mit dem Befehl `/lock` geht das ganz einfach!

## 🔒 Einen Kanal sperren {#lock}

Verwende den Befehl: ```/lock [Grund]```

Dieser Befehl entzieht der Rolle **@everyone** die Berechtigung, Nachrichten im Kanal zu senden, sodass keine Nutzer dort posten können. Ersetze **[Grund]**, um anzugeben, warum der Kanal gesperrt ist (z. B.: *Chat-Bereinigung*, *wichtige Ankündigung* usw.).

## 🔓 Einen Kanal entsperren {#unlock}

Verwende den Befehl: ```/unlock [Grund]```

Dieser Befehl stellt die vorherigen Nachrichtenrechte für die Rolle **@everyone** im Kanal wieder her, sodass die Nutzer erneut dort posten können. Ersetze **[Grund]**, um anzugeben, warum der Kanal entsperrt ist (z. B.: *Diskussion wieder geöffnet*, *Ankündigung beendet* usw.).

:::warning
Damit der Lock-Befehl korrekt funktioniert, dürfen keine Rollen explizit das Recht haben, in diesem Kanal zu schreiben. Andernfalls können Mitglieder mit solchen Rollen weiterhin chatten.
:::
:::info
Die Befehle `lock` und `unlock` sind [auch mit Prefix nutzbar](../guides/prefix.md).
:::

## ✏️ Das Schloss-Icon konfigurieren {#config}

Standardmäßig ist diese Funktion deaktiviert. Du kannst jedoch festlegen, ob gesperrte Kanäle ein Schloss-Emoji (🔒) vor ihrem Namen erhalten sollen.

So aktivierst/deaktivierst du das Schloss-Icon vor dem Namen gesperrter Kanäle:
1. Nutze den [Befehl `/settings`](../setup.md#settings).
2. Klicke auf die Schaltfläche **Lock Icon on Locked Channels**. Ein einfacher Klick genügt, um die Option an- oder auszuschalten.
