---
title: Meldungen
---

Das Meldesystem von RaidProtect ermöglicht deiner Community, problematische Inhalte oder verdächtige Nutzer schnell zu melden. Es funktioniert auf zwei Arten und lässt sich konfigurieren, um die Bearbeitung der Meldungen zu optimieren.

## ❓ Wie das Melden funktioniert {#working}
Mitglieder können auf 4 Hauptwegen Meldungen abgeben.

1. **Rechtsklick auf eine Nachricht**
Ein Mitglied kann eine Nachricht, die gegen die Regeln verstößt, mit Rechtsklick auswählen, **`Anwendungen`** wählen und dann auf **`Nachricht melden`** klicken. Daraufhin erscheint ein Popup, in dem eine Erklärung hinzugefügt werden kann.

2. **Rechtsklick auf ein Profil**
Ebenso kann ein Mitglied ein problematisches Profil mit Rechtsklick auswählen, **`Anwendungen`** wählen und dann auf **`Mitglied melden`** klicken. Ein Popup öffnet sich, damit der Nutzer weitere Details zur Situation angeben kann.

3. **Schaltfläche auf einem Informationspanel**
Wenn die Funktion "Meldung" auf einem [Informationspanel (`/display public`)](./display.mdx) aktiviert ist, steht direkt unter dem Panel eine Schaltfläche "Melden" zur Verfügung, über die Mitglieder schnell einen Nutzer melden können.

4. **Slash-Befehl**
Mitglieder können auch eine Nachricht oder einen Nutzer über den Befehl **`/report`** in einem beliebigen Serverkanal melden.

Verwende den Befehl: ```/report (member) (reason)```

Ersetze `(member)` durch den gewünschten Nutzer und `(reason)` durch den Grund des Verstoßes.

## 🚩 Meldungen konfigurieren {#config}

Bevor das Meldesystem vollständig funktioniert, muss ein **Meldekanal** eingerichtet werden, in dem alle Meldungen eingehen. Außerdem solltest du einen Log- oder Benachrichtigungskanal festlegen, um über Meldungen informiert zu werden.

![Screenshot der Meldungseinstellungen](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-reports.webp)

### Den Kanal einrichten {#config-channel}

1. Nutze den [Befehl `/settings`](../setup.md#settings).
2. Wähle die Schaltfläche "**Meldungen**".
3. Klicke auf "**Kanal**".
4. Wähle den gewünschten Kanal (_z. B.: #meldungen oder #reports_).
Wenn du keinen passenden Kanal hast, kannst du über "**Einen für mich erstellen**" automatisch einen erstellen lassen.

### Die Benachrichtigungsrolle festlegen {#config-role}

1. Nutze den [Befehl `/settings`](../setup.md#settings).
2. Wähle die Schaltfläche "**Meldungen**".
3. Klicke auf "**Rolle**".
4. Wähle die gewünschte Rolle (_z. B.: @Moderator oder @Meldungs-Ping_).
Wenn du keine passende Rolle hast, kannst du sie über "**Einen für mich erstellen**" automatisch erstellen lassen.

:::warning
Der Kanal sollte auf Moderatoren und Administratoren beschränkt sein, um eine ordnungsgemäße Bearbeitung der Meldungen zu gewährleisten.
:::

## Meldungen verwalten {#manage}

Als Community-Moderator kannst du eine Meldung annehmen oder ablehnen.

- **✅ Meldung annehmen:** Wenn die Meldung berechtigt ist, klicke unter der Benachrichtigung auf "Annehmen". Dieser Button löst keine spezielle Aktion aus, zeigt aber anderen Moderatoren, dass du die Meldung als bearbeitet betrachtest, und fördert so die Koordination und Organisation.

- **👁️ Kontext anzeigen:** Um die gemeldete Nachricht im Zusammenhang zu sehen, klicke unter der Benachrichtigung auf "Nachricht anzeigen".

- **❌ Meldung ablehnen:** Wenn die Meldung unbegründet ist, klicke unter der Benachrichtigung auf "Ablehnen". Wie beim Button "Annehmen" ist auch hier keine spezielle Aktion hinterlegt; andere Moderatoren sehen lediglich deine Entscheidung.

:::note
Stelle sicher, dass deine Moderatoren im Umgang mit dieser Funktion geschult sind, und ermutige deine aktiven Mitglieder, sie verantwortungsvoll zu nutzen!
:::
