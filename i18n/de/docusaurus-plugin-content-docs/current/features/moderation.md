---
title: Moderation
---

Um die Arbeit deiner Moderatoren zu erleichtern, integriert RaidProtect sehr nützliche Moderationsbefehle, mit denen du direkt auf die nativen Funktionen von Discord zugreifen kannst, wie etwa **Bannen** und **Kicken** von Nutzern.

Zusätzlich zu diesen Aktionen sendet RaidProtect dem sanktionierten Nutzer eine Direktnachricht, um den Grund der Sanktion zu erläutern. Dieser wird auch in den Server-Logs vermerkt.

:::info
Moderationsbefehle sind [auch mit Prefix nutzbar](../guides/prefix.md).
:::

## 🔨 Einen Nutzer bannen {#ban}

Der Befehl `/ban` ermöglicht es Ihnen, einem Benutzer dauerhaft den Zugriff auf Ihren Server zu verwehren.

Verwende den Befehl: ```/ban (user) [reason]```

Ersetze `(user)` durch die gewünschte Erwähnung oder ID und `[reason]` durch den Grund der Sanktion.

:::tip
Du kannst einen Nutzer über seine [Discord-ID](https://support.discord.com/hc/de/articles/206346498-Wo-kann-ich-meine-Benutzer-Server-Nachrichten-ID-finden) bannen, selbst wenn er nicht online ist oder deinen Server bereits verlassen hat.
:::

### Benutzer entsperren {#unban}

Der Befehl `/unban` ermöglicht es Ihnen, die Sperre eines zuvor gesperrten Benutzers aufzuheben, sodass dieser Ihrem Server erneut beitreten kann.

Verwenden Sie den Befehl: ```/unban (user) [reason]```

Ersetzen Sie `(user)` durch die gewünschte Kennung und `[reason]` durch den Grund der Entsperrung.

## 👢 Einen Nutzer kicken {#kick}

The `/kick`-Befehl ermöglicht es Ihnen, ein Mitglied von Ihrem Server zu entfernen, ohne es zu bannen. Der Benutzer kann dem Server erneut beitreten, wenn er über eine gültige Einladung verfügt.

Verwende den Befehl: ```/kick (member) [reason]```

Ersetze `(member)` durch die gewünschte Erwähnung oder ID und `[reason]` durch den Grund der Sanktion.

## ⏳ Einen Nutzer stummschalten {#timeout}

Verwende den Befehl: ```/timeout (member) (duration) [reason]```

Ersetze `(member)` durch die gewünschte Erwähnung oder ID, `(duration)` durch die Dauer des Timeouts (maximal 28 Tage, z. B. `10m`, `1h`, `1d`) und `[reason]` durch den Grund der Sanktion.

### Ausschluss eines Nutzers aufheben {#untimeout}

Der Befehl `/untimeout` ermöglicht es, die Einschränkungen eines zeitlich gesperrten Mitglieds sofort aufzuheben, sodass es alle Interaktionsmöglichkeiten auf dem Server wiedererlangt.

Verwenden Sie den Befehl: ```/untimeout (mitglied) [grund]```

Ersetzen Sie `(mitglied)` durch die gewünschte Erwähnung oder ID und `[grund]` durch den Grund für das Aufheben des Timeouts.

## ⚠️ Einen Nutzer verwarnen {#warn}

Der Befehl `/warn` ermöglicht es Ihnen, ein Mitglied formell zu verwarnen, indem der Bot eine private Nachricht sendet.

Verwenden Sie den Befehl: ```/warn (mitglied) [grund]```

Ersetzen Sie `(mitglied)` durch die gewünschte Erwähnung oder ID und `[grund]` durch den Grund der Verwarnung.

## 🧹 Nachrichten eines Kanals löschen {#clear}

Der Befehl `/clear` ermöglicht es dir, in einem Textkanal schnell eine bestimmte Anzahl von Nachrichten zu löschen. Du kannst auch einen Nutzer angeben, um nur seine Nachrichten zu entfernen.

Verwende den Befehl: ```/clear (number) [user]```

Ersetze `(number)` durch die Anzahl der zu löschenden Nachrichten (maximal 100). Füge `[user]` mit der entsprechenden Erwähnung oder ID hinzu, um nur seine Nachrichten im Kanal zu löschen.

## 🕒 Slowmode in einem Kanal aktivieren {#slowmode}

Der Befehl `/slowmode` ermöglicht es dir, den Slowmode in einem Textkanal zu aktivieren oder anzupassen, um die Häufigkeit der gesendeten Nachrichten der Nutzer zu begrenzen.

Verwende den Befehl: ```/slowmode (duration) [channel] [reason]```

- Ersetze `(duration)` durch das gewünschte Intervall zwischen den Nachrichten (z. B.: `5s`, `1m`, `10m`, `1h`).
- Füge `[channel]` hinzu, wenn du den Slowmode in einem anderen Kanal anwenden möchtest als in dem, in dem du den Befehl eingibst.
- Füge `[reason]` hinzu, um den Anlass anzugeben, der in den Server-Logs gespeichert wird.