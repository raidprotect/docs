---
title: Channel sperren
---

Manchmal ist es nötig, einen Kanal vorübergehend zu sperren, damit Nutzer keine Nachrichten mehr senden können. Mit dem Befehl `/lock` geht das ganz einfach!

## 🔒 Einen Kanal sperren {#lock}

Verwende den Befehl: ```/lock```

Dadurch wird der **@everyone**-Rolle in diesem Kanal die Schreibberechtigung entzogen, sodass niemand dort mehr posten kann.

## 🔓 Einen Kanal entsperren {#unlock}

Verwende den Befehl: ```/unlock```

Damit erhält die **@everyone**-Rolle ihre Schreibberechtigung im Kanal zurück und alle Nutzer können wieder dort schreiben.

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
