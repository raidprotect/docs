---
title: Ankunft und Empfang
description: "Der Empfang von RaidProtect begrüßt die neuen Mitglieder Ihres Discord-Servers, gibt ihnen ihre Rollen und filtert zu junge Konten heraus."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

Der **Empfang** von RaidProtect kümmert sich um die neuen Mitglieder Ihres Discord-Servers, sobald sie ankommen: eine **Willkommensnachricht** mit einer Karte auf ihren Namen, **automatische Rollen** und ein **Mindestalter des Kontos**, das eigens für den Anlass erstellte Konten fernhält, die oft bei [Raids](/de/learn/discord-raid) eingesetzt werden. Diese drei Einstellungen finden Sie im Tab „**Ankünfte**“ von `/settings`, neben dem [Captcha](./captcha.md) und dem [Auto RaidMode](./raid-mode.md).

## ❓ Wie funktioniert es? {#working}

Wenn ein Nutzer Ihrem Server beitritt, greifen vor seiner Aufnahme der [Raid-Modus](./raid-mode.md#action), das [Mindestalter des Kontos](#minage) und dann das [Captcha](./captcha.md). Nach der Aufnahme erhält er seine [automatischen Rollen](#autorole) und seine [Willkommensnachricht](#welcome-message).

## 👋 Willkommensnachricht {#welcome-message}

Die Willkommensnachricht wird im Kanal Ihrer Wahl gesendet, wenn ein Mitglied auf dem Server aufgenommen wird. Sie enthält Ihren Text und eine für jedes Mitglied erzeugte **Willkommenskarte**: sein Avatar, „Willkommen auf“ gefolgt vom Servernamen und seine Mitgliedsnummer.

<Settings start="welcome" />

### Die Willkommensnachricht aktivieren {#welcome-config}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Ankünfte**“.
3. Klicken Sie neben „**Willkommensnachricht**“ auf „**Konfigurieren**“.
4. Wählen Sie unter „**Willkommenskanal**“ den Textkanal, in dem die Nachricht gesendet wird. Die Wahl eines Kanals aktiviert die Nachricht.

Der Schalter oben rechts auf dem Bildschirm aktiviert oder deaktiviert die Willkommensnachricht. Eine Vorschau der Nachricht erscheint unter dem Bildschirm und aktualisiert sich bei jeder Änderung.

:::info
Der Willkommenskanal darf nicht der Kanal des Captchas, des Jails, des HoneyPots oder des DISCON sein. Wird der Kanal gelöscht, wird die Einstellung geleert.
:::

### Text und Variablen {#welcome-text}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Ankünfte**“.
3. Klicken Sie neben „**Willkommensnachricht**“ auf „**Konfigurieren**“.
4. Klicken Sie unter „**Nachrichteninhalt**“ auf „**Text**“.
5. Schreiben Sie Ihre Nachricht (maximal 1.200 Zeichen) und bestätigen Sie. Lassen Sie das Feld leer, um zur Standardnachricht zurückzukehren.

<SettingsModal name="welcomeText" />

Der Standardtext lautet „Willkommen `{user.mention}` auf **`{server.name}`**! 🎉“ in der Sprache des Servers. Sie können diese Variablen verwenden:

| Variable | Wird ersetzt durch |
|---|---|
| `{user.mention}` | Die Erwähnung des Mitglieds |
| `{user.name}` | Sein Benutzername |
| `{user.displayname}` | Sein Anzeigename |
| `{user.id}` | Seine [Kennung](../guides/id.mdx) |
| `{server.name}` | Der Name des Servers |
| `{server.member_count}` | Die Anzahl der Mitglieder des Servers |
| `{server.id}` | Die Kennung des Servers |

### Das Mitglied erwähnen {#welcome-mention}

Die standardmäßig aktivierte Option „**Mitglied erwähnen**“ benachrichtigt das neue Mitglied, wenn seine Willkommensnachricht gepostet wird. Sie erwähnt nur die Neuankömmlinge, niemals @everyone oder Rollen.

### Schaltflächen {#welcome-buttons}

Sie können unter der Nachricht Schaltflächen hinzufügen, die zu einem Kanal des Servers führen, zum Beispiel „Regeln lesen“.

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Ankünfte**“.
3. Klicken Sie neben „**Willkommensnachricht**“ auf „**Konfigurieren**“.
4. Wählen Sie unter „**Buttons verwalten**“ die Option „**Button hinzufügen**“.
5. Geben Sie der Schaltfläche einen Namen, wählen Sie den zu verlinkenden Kanal und, wenn Sie möchten, ein **Emoji**: ein Standard-Emoji oder ein Emoji dieses Servers (`<:nom:id>`, `:nom:` oder seine ID). Ein ungültiges Emoji verhindert das Speichern nicht: Die Schaltfläche wird ohne Emoji erstellt.

Um eine Schaltfläche zu ändern oder zu löschen, wählen Sie sie in derselben Liste aus.

**Grenzen:** 2 Schaltflächen in der kostenlosen Version, 4 Schaltflächen in der [Premium](/de/premium)-Version. Läuft das Premium ab, bleiben nur die ersten 2 Schaltflächen sichtbar.

### Farbe <span className="badge-premium">Premium</span> {#welcome-color}

Mit [Premium](/de/premium) klicken Sie unter „**Nachrichteninhalt**“ auf „**Farbe**“, um die Farbe der Leiste links neben der Nachricht zu wählen: eine RaidProtect-Farbe aus der Liste oder einen Hexadezimalcode (zum Beispiel `#D35F5F`). Ohne Auswahl übernimmt die Nachricht die Farbe des Bot-Namens, wenn Sie es [angepasst](/de/premium) haben, andernfalls die Standardfarbe. Die Willkommenskarte wird in derselben Farbe getönt.

### Ansturm und Raids {#welcome-raid}

- **Bündelung:** Wenn viele Mitglieder gleichzeitig ankommen, werden die Beitritte gebündelt, um den Kanal nicht zu überfluten.
- **Pause während eines Raids:** Solange der [Raid-Modus](./raid-mode.md) von RaidProtect oder die [Beitrittssperre](./join-lock.mdx) aktiv ist, wird keine Willkommensnachricht gesendet.

## 🏷️ Automatische Rollen {#autorole}

Automatische Rollen werden jedem neuen Mitglied direkt bei der Ankunft vergeben oder nach bestandenem [Captcha](./captcha.md), falls dieses aktiv ist. Sie ersetzen die frühere automatische Rolle des Captchas, deren Einstellung automatisch übernommen wurde.

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Ankünfte**“.
3. Klicken Sie neben „**Auto-Rollen**“ auf „**Konfigurieren**“.
4. Wählen Sie eine oder mehrere Rollen aus.

Um alle automatischen Rollen zu entfernen, klicken Sie auf „**Zurücksetzen**“.

<Settings start="autorole" />

**Grenzen:** 3 Rollen in der kostenlosen Version, 10 Rollen in der [Premium](/de/premium)-Version.

:::warning
Vermeiden Sie Rollen mit Berechtigungen: Eine automatisch vergebene Rolle sollte keinerlei Befugnisse gewähren. RaidProtect lehnt Rollen ab, die von einer Integration verwaltet werden, Rollen über seiner eigenen oder Ihrer und solche mit einer Moderationsberechtigung: Die akzeptablen Rollen Ihrer Auswahl werden behalten, und eine separate Nachricht erklärt, warum die anderen abgelehnt werden (sind es alle, bleibt die bestehende Konfiguration unverändert). Es warnt Sie, wenn eine gewählte Rolle später Berechtigungen erhält.
:::
:::info
Wenn Ihr Server einen anderen Bot für seine automatische Rolle verwendet, vergibt dieser die Rolle möglicherweise vor dem Captcha. Ersetzen Sie ihn durch die automatischen Rollen von RaidProtect.
:::

## 🤖 Ankunft der Bots {#bots}

Standardmäßig erhält ein dem Server hinzugefügter Bot die [automatischen Rollen](#autorole) wie ein Mitglied. Der Abschnitt „**Bots**“ im Tab „**Ankünfte**“ ändert das.

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Ankünfte**“.
3. Klicken Sie neben „**Bots**“ auf „**Konfigurieren**“.

- **Rollen der Bots**: werden jedem ankommenden Bot **anstelle** der automatischen Rollen vergeben. Ohne gewählte Rolle erhalten die Bots die automatischen Rollen. **Grenzen:** 1 Rolle in der kostenlosen Version, 15 Rollen mit [Premium](/de/premium). Es gelten dieselben Einschränkungen wie für die automatischen Rollen (von einer Integration verwaltete Rollen, Rollen über Ihrer eigenen oder der von RaidProtect oder mit einer Moderationsberechtigung).
- **Nicht freigegebene Bots kicken**: Jeder hinzugefügte Bot wird sofort gekickt, es sei denn, der Eigentümer hat ihn zuvor mit dem Befehl `/bypass bot` freigegeben. Standardmäßig deaktiviert. **Nur der Eigentümer des Servers** kann diese Option aktivieren oder deaktivieren und einen Bot freigeben.

### Einen Bot freigeben {#bypass-bot}

Verwenden Sie den Befehl: ```/bypass bot [bot]```

Ersetzen Sie `[bot]` durch den freizugebenden Bot: Er kann dem Server **einmal** innerhalb der folgenden 10 Minuten beitreten, ohne gekickt zu werden. Ohne Bot listet der Befehl die aktuell freigegebenen Bots auf. Jede Freigabe wird in Ihren Logs festgehalten.

:::info
RaidProtect benötigt die Berechtigung „**Mitglieder kicken**“ und eine Rolle über der des Bots, um ihn zu kicken. Andernfalls weist das Log darauf hin, und der Bot bleibt.
:::

## 🎂 Mindestalter des Kontos {#minage}

Zur Erhöhung der Sicherheit können Sie ein Mindestalter für die Discord-Konten neuer Mitglieder verlangen. Kurz vor einem Raid erstellte Konten kommen nicht durch die Tür. Der Filter gilt bei jedem Beitritt.

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Ankünfte**“.
3. Klicken Sie neben „**Mindestalter des Kontos**“ auf „**Konfigurieren**“.
4. Wählen Sie unter „**Mindestalter des Kontos**“ 2 Stunden, 12 Stunden, 1 Tag oder 2 Tage oder „**Benutzerdefinierter Wert**“ (zum Beispiel `0y 3d 1h`, maximal 10 Jahre).
5. Wählen Sie unter „**Aktion**“, was mit zu jungen Konten geschieht.

Um den Filter zu deaktivieren, klicken Sie auf „**Zurücksetzen**“. RaidProtect benötigt die Berechtigung `KICK_MEMBERS`.

<Settings start="minage" />

### Aktionen {#minage-action}

| Aktion | Wirkung auf ein zu junges Konto |
|---|---|
| „**Kicken**“ (Standard) | Es wird bei jedem Versuch gekickt, solange sein Konto zu jung ist. |
| „**Quarantäne bis zum erforderlichen Alter**“ | Es tritt bei, ohne etwas vom Server zu sehen (über die [Jail-Rolle](./sanctions.mdx#jail)), und verlässt seine Quarantäne, sobald es das erforderliche Alter hat, zum angegebenen Datum. |
| „**Am Eingang festhalten**“ | Es wird an einem [Captcha](./captcha.md) festgehalten, das es erst lösen kann, wenn das Alter erreicht ist. |

Das Konto erhält eine Privatnachricht mit dem Datum, ab dem es Zugang zum Server hat. Kicks, Quarantänen und Banns werden im Log-Kanal festgehalten.

:::info
- „**Quarantäne bis zum erforderlichen Alter**“ erfordert eine Jail-Rolle, die im Tab „**Moderation**“ > „**Sanktionen**“ konfiguriert wird. Ohne sie schlägt RaidProtect Ihnen vor, sie zu konfigurieren oder auf „**Bis zum erforderlichen Alter bannen**“ zurückzufallen: Das Konto verlässt den Server und sein Bann wird zum richtigen Zeitpunkt automatisch aufgehoben.
- „**Am Eingang festhalten**“ erfordert ein aktives Captcha im Modus **Panel (Interaktiv)**.
:::

### 🎫 Bypass des Mindestalters {#bypass-minage}

Verwenden Sie den Befehl: ```/bypass minage [@user]```

Ersetzen Sie `[@user]` durch die gewünschte [Kennung](../guides/id.mdx); diese Person hat dann 10 Minuten Zeit, dem Server beizutreten, ohne durch das erforderliche Alter blockiert zu werden. Sie können den Befehl auch ohne Angabe eines Nutzers verwenden, um die aktuelle Liste der Bypass-Nutzer anzuzeigen. Er hebt auch die Quarantäne eines zu jungen Kontos auf. `/unjail` hebt sie nicht auf: Es gibt den zu verwendenden Befehl an.

## Häufig gestellte Fragen {#faq}

### Wann wird die Willkommensnachricht gesendet?

Wenn das Mitglied aufgenommen wird: direkt bei seiner Ankunft, wenn das Captcha nicht gilt, andernfalls nach bestandenem Captcha. Während eines Raids oder einer Beitrittssperre wird sie nicht gesendet.

### Kann man die Willkommenskarte entfernen?

Nein, die Willkommenskarte ist jeder Willkommensnachricht beigefügt. Mit Premium können Sie ihre Farbe ändern.

### Wie viele automatische Rollen kann man vergeben?

3 Rollen in der kostenlosen Version und 10 mit Premium. Rollen mit einer Moderationsberechtigung werden abgelehnt.

### Werden die automatischen Rollen vor dem Captcha vergeben?

Nein. Wenn das Captcha für das Mitglied gilt, erhält es seine automatischen Rollen nach bestandenem Captcha.

### Welches Mindestalter sollte man wählen?

Ein Wert von wenigen Stunden bis 1 Tag genügt, um die meisten für einen Raid erstellten Konten fernzuhalten, ohne echte Mitglieder zu stören. Der [Befehl `/setup`](../setup.md) setzt standardmäßig 6 Stunden.

### Wird ein zu junges Konto gebannt?

Nein, standardmäßig nicht: Es wird bei jedem Versuch gekickt. Sie können es auch bis zum erforderlichen Alter in Quarantäne setzen oder hinter dem Captcha zurückhalten. Der temporäre Bann ist nur eine Ausweichlösung, wenn die Jail-Rolle nicht konfiguriert ist.
