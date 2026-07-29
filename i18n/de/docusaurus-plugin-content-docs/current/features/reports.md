---
title: Meldungen
description: "Das Meldesystem von RaidProtect lässt Ihre Community verdächtige Inhalte und Mitglieder melden, mit einem klaren Ablauf für Ihre Moderatoren."
---

import { ReportsSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

import ReportsMockup from '@site/src/components/DiscordMessage/mockups/reports';

<ReportsMockup />

Das Meldesystem von RaidProtect ermöglicht es Ihrer Community, jeden problematischen Inhalt oder verdächtigen Nutzer schnell zu melden. Es funktioniert auf zwei verschiedene Arten und lässt sich konfigurieren, um die Bearbeitung der Meldungen zu optimieren.

## ❓ Funktionsweise der Meldungen {#working}
Mitglieder können einen Inhalt über 4 Hauptmethoden melden.

1. **Rechtsklick auf eine Nachricht**
Ein Mitglied kann per Rechtsklick auf eine Nachricht, die es als Regelverstoß betrachtet, **`Anwendungen`** auswählen und dann auf **`Nachricht melden`** klicken. Es öffnet sich ein Popup-Fenster, in dem der Nutzer eine Erklärung hinzufügen kann.

2. **Rechtsklick auf ein Profil**
Auf die gleiche Weise kann ein Mitglied per Rechtsklick auf ein Profil, das es für problematisch hält, **`Anwendungen`** auswählen und dann auf **`Benutzer melden`** klicken. Daraufhin öffnet sich ein Popup-Fenster, damit der Nutzer angeben kann, was er meldet (Profilbild, Benutzername, Bio, Aktivität im Sprachkanal, Aktivität in Direktnachrichten), und weitere Details liefern kann.

3. **Schaltfläche auf einem Informationspanel**
Wenn die Funktion „Meldung" auf einem [Informationspanel (`/display public`)](./display.mdx) aktiviert ist, steht direkt unter dem Panel eine Schaltfläche „Melden" zur Verfügung, über die Mitglieder schnell einen Nutzer melden können.

4. **Slash-Befehl**
Mitglieder können eine Nachricht oder einen Nutzer auch über den Befehl **`/report`** in einem beliebigen Kanal des Servers melden.

Verwenden Sie den Befehl: ```/report (mitglied) (grund)```

Ersetzen Sie `(mitglied)` durch den gewünschten Nutzer und `(grund)` durch den Grund des Verstoßes.

## 🚩 Konfiguration der Meldungen {#config}

Bevor das Meldesystem vollständig funktionsfähig ist, muss zwingend ein **Meldekanal** konfiguriert werden, in den alle Meldungen gesendet werden. Sie müssen einen Log- oder Benachrichtigungskanal festlegen, um die Warnungen zu den Meldungen zu erhalten.

<ReportsSettingsMockup />

### Den Kanal konfigurieren {#config-channel}

1. Führen Sie den [`/settings`-Befehl](../setup.md#settings) aus.
2. Wählen Sie die Schaltfläche „**Meldungen**".
3. Klicken Sie auf die Schaltfläche „**Kanal**".
4. Wählen Sie den gewünschten Kanal (_z. B.: #meldungen oder #reports_).
Wenn Sie keinen passenden Kanal haben, können Sie über die Schaltfläche „**Einen für mich erstellen**" automatisch einen erstellen lassen.

### Die Benachrichtigungsrolle konfigurieren {#config-role}

1. Führen Sie den [`/settings`-Befehl](../setup.md#settings) aus.
2. Wählen Sie die Schaltfläche „**Meldungen**".
3. Klicken Sie auf die Schaltfläche „**Rolle**".
4. Wählen Sie die gewünschte Rolle (_z. B.: @Moderator oder @Meldungs-Benachrichtigungen_).
Wenn Sie keine passende Rolle haben, können Sie über die Schaltfläche „**Einen für mich erstellen**" automatisch eine erstellen lassen.

:::warning
Der Kanal sollte auf Moderatoren und Administratoren beschränkt sein, um eine ordnungsgemäße Bearbeitung der Meldungen zu gewährleisten.
:::

### Gruppierung der Meldungen {#group}

Die Schaltfläche „**Gruppierung**" bestimmt, wie mehrere Meldungen gegen dasselbe Mitglied dargestellt werden:

- **Aktiviert**: Die Meldungen gegen dasselbe Mitglied werden in einer einzigen Warnung gruppiert.
- **Deaktiviert**: Jede Meldung erzeugt ihre eigene separate Warnung.

### Benachrichtigung des Melders {#notify}

Über die Schaltfläche „**Benachrichtigung des Melders**" legen Sie fest, welche Rückmeldung das Mitglied erhält, das die Meldung ausgelöst hat:

| Stufe | Wirkung |
|---|---|
| **Deaktiviert** | Die Melder erhalten keine Benachrichtigung. |
| **Nur Bearbeitung** | Dem Melder wird mitgeteilt, dass seine Meldung bearbeitet wurde. |
| **Mit dem Ergebnis** | Es wird mitgeteilt, ob die Meldung angenommen oder abgelehnt wurde. |
| **Mit dem Moderator** | Es wird zusätzlich mitgeteilt, welcher Moderator die Meldung bearbeitet hat. |

### Vertrauensrolle (Premium) {#trusted-role}

Die „**Vertrauensrolle**" ermöglicht es Ihren zuverlässigsten Mitgliedern, im Notfall sofort zu handeln: Wenn ein Mitglied mit dieser Rolle eine Meldung abgibt, kann es die Option „**Präventive Aktion**" ankreuzen, um ein **präventives Timeout von 24 Stunden** auf den gemeldeten Nutzer anzuwenden, bis ein Moderator die Meldung bearbeitet.

- Das präventive Timeout ist **stumm**: Der gemeldete Nutzer erhält keine DM, solange ein Moderator die Sanktion nicht bestätigt hat.
- Bezieht sich die Meldung auf eine Nachricht, wird diese gelöscht.
- Die Sanktion ist mit der Meldung verknüpft: Der Moderator, der sie bearbeitet, kann sie bestätigen oder aufheben.

:::info
Diese Funktion ist [**Premium**](/de/premium)-Servern vorbehalten.
:::

### Reputation der Melder {#bad-reporters}

Die Schaltfläche „**Falschmelder**" ermöglicht es, gegen Mitglieder vorzugehen, deren Meldungen regelmäßig abgelehnt werden:

- **Schwelle**: Anzahl der abgelehnten Meldungen vor einer Aktion (3, 5, 6, 10 oder 15; 0 zum Deaktivieren).
- **Zeitfenster**: Berechnungszeitraum (7, 14, 30, 60 oder 90 Tage).
- **Aktion**, sobald die Schwelle erreicht ist:
  - **Moderatoren benachrichtigen**: Eine Warnung wird mit den Schaltflächen „**Meldungen blockieren**" und einer Sanktion gesendet.
  - **Automatisch blockieren**: Das Mitglied kann keine Meldungen mehr senden.
  - **Automatisch sanktionieren**: Die konfigurierte Sanktion wird angewendet.
  - **Blockieren und sanktionieren**: Kombiniert die beiden vorherigen Aktionen.
- **Sanktion**: die im automatischen Modus angewendete Sanktion (Warn, Timeout, Mute, Kick oder Ban).

:::tip
Sie können ein Mitglied auch jederzeit manuell von den Meldungen ausschließen, mit dem [`/block`-Befehl](./utilities.mdx#block).
:::

## Meldungen verwalten {#manage}

Jede Meldung erreicht den konfigurierten Kanal in Form einer Warnung mit mehreren Aktionen:

- **🙋 Übernehmen:** Klicken Sie auf „**Übernehmen**", um den anderen Moderatoren mitzuteilen, dass Sie sich um diese Meldung kümmern. Die Schaltfläche wird dann zu „**Übernommen**".

- **✅ Erledigt:** Wenn die Meldung berechtigt ist, aber keine Sanktion erforderlich ist (die Situation wurde anderweitig geregelt: Ermahnung, vom Autor gelöschte Nachricht ...), klicken Sie auf „**Erledigt**". Die Meldung wird als angenommen markiert, ohne den gemeldeten Nutzer zu sanktionieren. Um zu sanktionieren, verwenden Sie stattdessen das untenstehende Menü „**Dieses Mitglied sanktionieren…**".

- **❌ Ablehnen:** Wenn die Meldung nicht berechtigt ist, klicken Sie auf „**Ablehnen**". Die Ablehnungen werden für die [Reputation der Melder](#bad-reporters) gezählt.

- **⚖️ Sanktionieren:** Über das Menü „**Dieses Mitglied sanktionieren…**" unter der Warnung können Sie direkt eine Sanktion auf den gemeldeten Nutzer anwenden, ohne den Meldekanal zu verlassen.

:::note
Stellen Sie sicher, dass Ihre Moderatoren im Umgang mit dieser Funktion gut geschult sind, und ermutigen Sie Ihre aktiven Mitglieder, sie verantwortungsvoll zu nutzen!
:::
