---
title: Moderation
---

Um die Arbeit deiner Moderatoren zu erleichtern, integriert RaidProtect sehr nützliche Moderationsbefehle, mit denen du direkt auf die nativen Funktionen von Discord zugreifen kannst, wie etwa **Bannen** und **Kicken** von Nutzern.

Zusätzlich zu diesen Aktionen sendet RaidProtect dem sanktionierten Nutzer eine Direktnachricht, um den Grund der Sanktion zu erläutern. Dieser wird auch in den Server-Logs vermerkt.

:::info
Moderationsbefehle sind [auch mit Prefix nutzbar](../guides/prefix.md).
:::

## 🔨 Einen Nutzer bannen {#ban}

Verwende den Befehl: ```/ban [@user] [reason]```

Ersetze `[@user]` durch die gewünschte Erwähnung oder ID und `[reason]` durch den Grund der Sanktion.

:::tip
Du kannst einen Nutzer über seine [Discord-ID](https://dfr.gg/wiki/interface/mode-developpeur) bannen, selbst wenn er nicht online ist oder deinen Server bereits verlassen hat.
:::

### Benutzer entsperren {#unban}

Verwenden Sie den Befehl: ```/unban [ID] (Grund)```

Ersetzen Sie `[ID]` durch die gewünschte Kennung und `(Grund)` durch den Grund der Entsperrung.

## 👢 Einen Nutzer kicken {#kick}

Verwende den Befehl: ```/kick [@user] [reason]```

Ersetze `[@user]` durch die gewünschte Erwähnung oder ID und `[reason]` durch den Grund der Sanktion.

## ⏳ Einen Nutzer stummschalten {#timeout}

Verwende den Befehl: ```/timeout [@user] [duration] [reason]```

Ersetze `[@user]` durch die gewünschte Erwähnung oder ID, `[duration]` durch die Dauer des Timeouts (maximal 28 Tage, z. B. `10m`, `1h`, `1d`) und `[reason]` durch den Grund der Sanktion.

## 🧹 Nachrichten eines Kanals löschen {#clear}

Der Befehl `/clear` ermöglicht es dir, in einem Textkanal schnell eine bestimmte Anzahl von Nachrichten zu löschen. Du kannst auch einen Nutzer angeben, um nur seine Nachrichten zu entfernen.

Verwende den Befehl: ```/clear [number] (@user)```

Ersetze `[number]` durch die Anzahl der zu löschenden Nachrichten (maximal 100). Füge `(@user)` mit der entsprechenden Erwähnung oder ID hinzu, um nur seine Nachrichten im Kanal zu löschen.

## 🕒 Slowmode in einem Kanal aktivieren {#slowmode}

Der Befehl `/slowmode` ermöglicht es dir, den Slowmode in einem Textkanal zu aktivieren oder anzupassen, um die Häufigkeit der gesendeten Nachrichten der Nutzer zu begrenzen.

Verwende den Befehl: ```/slowmode [Dauer] (Kanal) (Grund)```

- Ersetze `[Dauer]` durch das gewünschte Intervall zwischen den Nachrichten (z. B.: `5s`, `1m`, `10m`, `1h`).
- Füge `(Kanal)` hinzu, wenn du den Slowmode in einem anderen Kanal anwenden möchtest als in dem, in dem du den Befehl eingibst.
- Füge `(Grund)` hinzu, um den Anlass anzugeben, der in den Server-Logs gespeichert wird.