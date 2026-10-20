---
title: Meldungen
description: "Das Meldesystem von RaidProtect lässt Ihre Community verdächtige Inhalte und Mitglieder melden, mit einem klaren Ablauf für Ihre Moderatoren."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import ReportsMockup from '@site/src/components/DiscordMessage/mockups/reports';

<ReportsMockup />

Das Meldesystem von RaidProtect ermöglicht es Ihrer Community, jede verdächtige Nachricht oder jedes verdächtige Mitglied mit wenigen Klicks an Ihre Moderatoren zu melden, per Rechtsklick, über eine eigene Schaltfläche oder mit dem Befehl `/report`. Es lässt sich konfigurieren, um die Bearbeitung der Meldungen durch Ihr Team zu optimieren.

## ❓ Wie funktionieren die Meldungen? {#working}
Mitglieder können einen Inhalt über 4 Hauptmethoden melden.

1. **Rechtsklick auf eine Nachricht**
Ein Mitglied kann per Rechtsklick auf eine Nachricht, die es als Regelverstoß betrachtet, **`Apps`** auswählen und dann auf **`Nachricht melden`** klicken. Es öffnet sich ein Fenster, in dem es den Grund der Meldung angibt.

2. **Rechtsklick auf ein Profil**
Auf die gleiche Weise kann ein Mitglied per Rechtsklick auf ein Profil, das es für problematisch hält, **`Apps`** auswählen und dann auf **`Benutzer melden`** klicken. Daraufhin öffnet sich ein Fenster, in dem es angeben kann, was es meldet (Profilbild, Benutzername, Bio, Aktivität im Sprachkanal, Aktivität in Direktnachrichten), und den Grund.

3. **Schaltfläche auf einem Informationspanel**
Wenn die Funktion „Meldung“ auf einem [Informationspanel (`/display public`)](./display.mdx) aktiviert ist, steht direkt unter dem Panel eine Schaltfläche „**Mitglied melden**“ zur Verfügung, über die Mitglieder schnell einen Nutzer melden können.

4. **Slash-Befehl**
Mitglieder können einen Nutzer auch über den Befehl **`/report`** in einem beliebigen Kanal des Servers melden.

Verwenden Sie den Befehl: ```/report (@member)```

Ersetzen Sie `(@member)` durch den gewünschten Nutzer. Der Grund wird anschließend in einem Fenster eingegeben, wie beim Rechtsklick auf ein Profil.

:::info
Das Aktivieren der Meldungen aktiviert auch die [Zwischenspeicherung von Nachrichten](./moderation.mdx#snipe): RaidProtect hält eine Stunde lang Nachrichten im Speicher, um den gemeldeten Inhalt der Warnung beizufügen.
:::

## 🚩 Konfiguration der Meldungen {#config}

Die Meldungen landen in einem **Meldekanal**. Wählen Sie keinen aus, werden sie an Ihren allgemeinen Log-Kanal gesendet. Alle Einstellungen befinden sich auf einem einzigen Bildschirm:

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Moderation**“.
3. Klicken Sie neben „**Meldungen**“ auf „**Konfigurieren**“.
4. Klicken Sie rechts vom Titel des Bildschirms auf „**Aktivieren**“, um das Meldesystem einzuschalten.

<Settings start="reports" />

### Den Kanal konfigurieren {#config-channel}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Moderation**“.
3. Klicken Sie neben „**Meldungen**“ auf „**Konfigurieren**“.
4. Klicken Sie neben „**Meldungen empfangen**“ auf „**Bearbeiten**“.
5. Wählen Sie im Fenster den gewünschten Kanal (_z. B. #meldungen oder #reports_) oder kreuzen Sie „**Kanal für mich erstellen**“ an, damit RaidProtect einen privaten Kanal `meldungen` erstellt.

Wählen Sie keinen Kanal oder den Log-Kanal, folgen die Meldungen Ihrem allgemeinen Log-Kanal.

<SettingsModal name="reportChannel" />

### Die Benachrichtigungsrolle konfigurieren {#config-role}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Moderation**“.
3. Klicken Sie neben „**Meldungen**“ auf „**Konfigurieren**“.
4. Klicken Sie neben „**Benachrichtigungsrolle**“ auf „**Bearbeiten**“.
5. Wählen Sie im Fenster die gewünschte Rolle (_z. B. @Moderator oder @Meldungs-Benachrichtigungen_) oder kreuzen Sie eine „**Andere Erwähnung**“ an: `@everyone`, `@here` oder „**Rolle für mich erstellen**“ (RaidProtect erstellt die Rolle `Neue Meldung`).

Ohne konfigurierte Rolle wird `@here` erwähnt.

<SettingsModal name="reportRole" />

:::warning
Der Kanal muss Moderatoren und Administratoren vorbehalten sein, um eine ordnungsgemäße Bearbeitung der Meldungen zu gewährleisten.
:::

### Gruppierung der Meldungen {#group}

Der Schalter „**Gruppierung**“ legt fest, wie mehrere Meldungen gegen dasselbe Mitglied dargestellt werden:

- **Aktiviert** *(Standard)*: Die Meldungen gegen dasselbe Mitglied werden in einer einzigen Warnung gebündelt.
- **Deaktiviert**: Jede Meldung erzeugt ihre eigene, getrennte Warnung.

Klicken Sie auf dem Bildschirm Meldungen neben „**Gruppierung**“ auf „**Aktivieren**“ oder „**Deaktivieren**“.

<a id="config-notify"></a>

### Benachrichtigung des Melders {#notify}

Die Schaltfläche „**Bearbeiten**“ neben „**Benachrichtigung des Melders**“ öffnet ein Fenster, in dem Sie wählen, was das Mitglied, das die Meldung ausgelöst hat, nach der Bearbeitung seiner Meldung per DM erhält:

| Stufe | Wirkung |
|---|---|
| **Deaktiviert** | Die Melder erhalten keine Benachrichtigung. |
| **Nur Bearbeitung** *(Standard)* | Dem Melder wird mitgeteilt, dass seine Meldung bearbeitet wurde. |
| **Mit Ergebnis** | Es wird mitgeteilt, ob die Meldung akzeptiert oder abgelehnt wurde. |
| **Mit Moderator** | Es wird außerdem mitgeteilt, welcher Moderator die Meldung bearbeitet hat. |

Der Melder erhält pro Meldung nur eine einzige Nachricht, auch wenn sie mit anderen gruppiert wurde.

<SettingsModal name="reportNotify" />

<a id="config-trusted-role"></a>

### Vertrauensrolle <span className="badge-premium">Premium</span> {#trusted-role}

Die „**Vertrauensrolle**“ ermöglicht Ihren zuverlässigsten Mitgliedern, im Notfall sofort zu handeln: Wenn ein Mitglied mit dieser Rolle eine Meldung abgibt, kann es die Option „**Präventive Maßnahme**“ ankreuzen, um dem gemeldeten Nutzer einen **präventiven Timeout von 24 Stunden** zu verhängen, bis ein Moderator die Meldung bearbeitet.

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Moderation**“.
3. Klicken Sie neben „**Meldungen**“ auf „**Konfigurieren**“.
4. Klicken Sie neben „**Vertrauensrolle**“ auf „**Bearbeiten**“.
5. Wählen Sie im Fenster die Rolle oder kreuzen Sie „**Rolle für mich erstellen**“ an (RaidProtect erstellt die Rolle `Vertrauenswürdiger Melder`). Lassen Sie das Feld leer, um die Vertrauensrolle zu deaktivieren.

Funktionsweise des präventiven Timeouts:

- Der präventive Timeout ist **still**: Der gemeldete Nutzer erhält keine DM, solange ein Moderator die Sanktion nicht bestätigt hat.
- Sein Grund lautet „**Präventive Sanktion:**“ gefolgt vom Grund der Meldung.
- Betrifft die Meldung eine Nachricht, wird diese gelöscht.
- Die Warnung wird als dringend gekennzeichnet: Der Erwähnung geht „**🛑 Dringende Meldung**“ voran.
- Die Sanktion ist mit der Meldung verknüpft: Der Moderator, der sie bearbeitet, kann sie bestätigen oder aufheben.

:::info
Diese Funktion ist [**Premium**](/de/premium)-Servern vorbehalten.
:::

### Reputation der Melder {#bad-reporters}

Die Schaltfläche „**Bearbeiten**“ neben „**Falschmelder**“ öffnet das Fenster „**Reputation der Melder**“, mit dem Sie gegen Mitglieder vorgehen können, deren Meldungen regelmäßig abgelehnt werden:

- **Schwellenwert**: Anzahl abgelehnter Meldungen vor einer Aktion (3, 5, 6, 10 oder 15; standardmäßig „**Deaktiviert**“).
- **Zeitraum**: Berechnungszeitraum (7, 14, 30, 60 oder 90 Tage; standardmäßig 30 Tage).
- **Aktion**, sobald der Schwellenwert erreicht ist:
  - „**Moderatoren benachrichtigen**“ *(Standard)*: Eine Warnung wird mit der Schaltfläche „**Meldungen blockieren**“ und einer Sanktionsschaltfläche (z. B. „**Den Melder verwarnen**“) gesendet.
  - „**Automatisch blockieren**“: Das Mitglied kann keine Meldungen mehr senden.
  - „**Automatisch sanktionieren**“: Die konfigurierte Sanktion wird angewendet.
  - „**Blockieren und sanktionieren**“: kombiniert die beiden vorherigen Aktionen.
- **Sanktion**: die gegen den falschen Melder verhängte Sanktion (standardmäßig Verwarnung, Timeout, Mute, Kick oder Bann).

<SettingsModal name="reportBad" />

:::info
Ohne konfigurierte [Mute-Rolle](./sanctions.mdx#mute) fällt die Sanktion Mute auf einen Timeout zurück.
:::

:::tip
Sie können ein Mitglied auch jederzeit mit dem [Befehl `/block`](./utilities.mdx#block) manuell von den Meldungen ausschließen.
:::

## Meldungen verwalten {#manage}

Jede Meldung landet im konfigurierten Kanal als Warnung mit mehreren Aktionen:

- **🙋 Übernehmen:** Klicken Sie auf „**Übernehmen**“, um den anderen Moderatoren zu zeigen, dass Sie sich um diese Meldung kümmern. Die Schaltfläche wird dann zu „**Übernommen**“.

- **✅ Erledigt:** Ist die Meldung berechtigt, aber keine Sanktion nötig (anderweitig geklärt: Ermahnung, Nachricht vom Autor gelöscht …), klicken Sie auf „**Erledigt**“. Die Meldung wird als akzeptiert markiert, ohne den gemeldeten Nutzer zu sanktionieren. Um zu sanktionieren, verwenden Sie stattdessen das Menü „**Dieses Mitglied sanktionieren…**“ weiter unten.

- **❌ Ablehnen:** Ist die Meldung nicht berechtigt, klicken Sie auf „**Ablehnen**“. Ablehnungen werden für die [Reputation der Melder](#bad-reporters) gezählt.

- **⚖️ Sanktionieren:** Das Menü „**Dieses Mitglied sanktionieren…**“, verfügbar, sobald die Meldung übernommen wurde, ermöglicht es, den gemeldeten Nutzer direkt zu sanktionieren, ohne den Meldekanal zu verlassen.

Ist die [Gruppierung](#group) aktiviert, werden weitere Meldungen gegen dasselbe Mitglied der bestehenden Warnung hinzugefügt (zum Beispiel „**3 Nachrichten & 1 Profil gemeldet von 2 Nutzern**“), statt eine neue zu erstellen.

:::note
Stellen Sie sicher, dass Ihre Moderatoren im Umgang mit dieser Funktion gut geschult sind, und ermutigen Sie Ihre aktiven Mitglieder, sie verantwortungsvoll zu nutzen!
:::

## Häufig gestellte Fragen {#faq}

### Wie meldet man ein Mitglied oder eine Nachricht?

Ein Mitglied kann per Rechtsklick auf eine Nachricht oder ein Profil „Apps“ und dann „Nachricht melden“ oder „Benutzer melden“ wählen. Es kann auch die Schaltfläche eines Informationspanels nutzen oder den Befehl `/report (@member)` in einem beliebigen Kanal: Der Grund wird anschließend in einem Fenster eingegeben.

### Wohin gehen die Meldungen?

Sie werden an den von Ihnen konfigurierten Meldekanal gesendet oder andernfalls an Ihren allgemeinen Log-Kanal. Dieser Kanal muss Moderatoren und Administratoren vorbehalten sein, damit die Meldungen ordnungsgemäß bearbeitet werden.

### Welche Rolle wird bei jeder Meldung erwähnt?

Die von Ihnen konfigurierte Benachrichtigungsrolle oder `@everyone`. Ohne Einstellung erwähnt RaidProtect `@here`.

### Wie begrenzt man falsche Meldungen?

Die Einstellung „Falschmelder“ wirkt auf Mitglieder, deren Meldungen regelmäßig abgelehnt werden. Sie legen einen Schwellenwert und ein Berechnungsfenster fest und dann eine Aktion: Moderatoren benachrichtigen, Meldungen blockieren, sanktionieren oder beides. Sie können ein Mitglied auch manuell mit dem [Befehl `/block`](./utilities.mdx#block) blockieren.
