---
title: Sanktionsverlauf
---

Der Sanktionsverlauf von RaidProtect ermöglicht es Ihnen, alle auf Ihrem Server verhängten Sanktionen zu verfolgen und zu verwalten. Dieses System zentralisiert alle Moderationsaktionen in einer durchsuchbaren und bearbeitbaren Datenbank und erleichtert so die Arbeit Ihres Moderationsteams.

## ❓ Funktionsweise des Verlaufs {#working}

Der Sanktionsverlauf zeichnet automatisch alle auf Ihrem Server durchgeführten Moderationsaktionen auf:

- **Manuelle Sanktionen**: Alle Moderationsbefehle (`/ban`, `/tempban`, `/kick`, `/timeout`, `/warn`) werden automatisch im Verlauf gespeichert.
- **Automatische Sanktionen**: Von Anti-Spam verhängte Sanktionen werden ebenfalls dem Sanktionsverlauf hinzugefügt.
- **Verbannungen, Kicks und Timeouts**: Sanktionen, die ohne RaidProtect verhängt wurden, werden dem Verlauf hinzugefügt.
- **Discord's Automod**: Sanktionen, die von Discord's Automod verhängt wurden, werden ebenfalls hinzugefügt.
- **Sanktionsbenachrichtigungen**: Sanktionierte Mitglieder erhalten eine private Nachricht, die sie über die Sanktion und deren Grund informiert. Der Bot sendet außerdem eine Empfangsbestätigung, die das Versenden dieser Benachrichtigung bestätigt.

:::info
Alle aufgezeichneten Sanktionen enthalten: den sanktionierten Benutzer, den verantwortlichen Moderator, den Grund (bis zu 512 Zeichen), Datum und Uhrzeit sowie die Art der Sanktion und ob der Benutzer benachrichtigt wurde.
:::

## 🔍 Sanktionen suchen {#search}

Der Befehl `/sanctions search` ermöglicht es Ihnen, Sanktionen im Verlauf nach verschiedenen Kriterien zu suchen.

Verwenden Sie den Befehl: ```/sanctions search [benutzer] [moderator] [typ] [datum] [status]```

- `[benutzer]`: Alle Sanktionen eines bestimmten Benutzers suchen.
- `[moderator]`: Alle Sanktionen suchen, die von einem bestimmten Moderator verhängt wurden.
- `[typ]`: Nach Sanktionstyp filtern (Ban, Softban, Unban, Kick, Timeout, Untimeout, Warn).
- `[datum]`: Nach Sanktionsdatum filtern.
- `[status]`: Nach Sanktionsstatus filtern (Aktiv, Abgelaufen, Storniert).

![Screenshot der Sanktionssuche](../assets/rp-sanctions-search.webp)

:::tip
Sie können mehrere Kriterien kombinieren, um Ihre Suche zu verfeinern. Suchen Sie beispielsweise nach allen Verbannungen, die von einem bestimmten Moderator durchgeführt wurden.
:::

## ℹ️ Eine Sanktion anzeigen {#info}

Der Befehl `/sanctions info` ermöglicht es Ihnen, detaillierte Informationen über eine bestimmte Sanktion zu erhalten.

Verwenden Sie den Befehl: ```/sanctions info (id)```

Ersetzen Sie `(id)` durch die Kennung der Sanktion, die Sie anzeigen möchten.

![Screenshot der Sanktionsinformationen](../assets/rp-sanctions-info.webp)

## ✏️ Eine Sanktion bearbeiten {#edit}

Der Befehl `/sanctions edit` ermöglicht es Ihnen, den Grund einer bestehenden Sanktion zu ändern, nützlich zur Korrektur eines Fehlers oder zum Hinzufügen von Details.

Verwenden Sie den Befehl: ```/sanctions edit (id) (neuer_grund)```

Ersetzen Sie `(id)` durch die Kennung der zu ändernden Sanktion und `(neuer_grund)` durch den neuen Grund (maximal 512 Zeichen).

![Screenshot der Sanktionsbearbeitung](../assets/rp-sanctions-edit.webp)

:::warning
Das Bearbeiten einer Sanktion aktualisiert den Eintrag im Verlauf, ändert jedoch nicht die auf Discord verhängte Sanktion (zum Beispiel bleibt ein verbannter Benutzer verbannt).
:::

## 🗑️ Eine Sanktion löschen {#delete}

Der Befehl `/sanctions delete` ermöglicht es Ihnen, eine Sanktion aus dem Verlauf zu löschen. Diese Aktion ist unwiderruflich.

Verwenden Sie den Befehl: ```/sanctions delete (id)```

Ersetzen Sie `(id)` durch die Kennung der zu löschenden Sanktion.

![Screenshot der Sanktionslöschung](../assets/rp-sanctions-delete.webp)


## 📊 Sanktionsprotokolle {#logs}

Für eine bessere Organisation können Sie einen Protokollkanal konfigurieren, der speziell für Sanktionen vorgesehen ist, getrennt von Ihren allgemeinen Protokollen.

![Screenshot der Sanktionsprotokolle-Konfiguration](../assets/rp-sanctions-logs.webp)

### Sanktionsprotokoll-Kanal konfigurieren {#config-logs}

![Screenshot der Sanktionsprotokolle-Konfiguration](../assets/rp-settings-sanctions-logs.webp)

1. Verwenden Sie den [Befehl `/settings`](../setup.md#settings).
2. Klicken Sie auf die Schaltfläche "**Logs**".
3. Wählen Sie "**Moderation**".
4. Wählen Sie den Kanal aus, in dem die Sanktionsprotokolle gesendet werden sollen, oder verwenden Sie die Schaltfläche "**Erstelle einen für mich**".

:::note
Sie können auch wählen, ob RaidProtect Aktionen protokolliert, die von Benutzern durchgeführt werden, ohne den Bot zu verwenden.
:::
