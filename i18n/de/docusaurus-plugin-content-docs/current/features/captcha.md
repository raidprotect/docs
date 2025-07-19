---
title: Captcha (Verifizierung)
---

Verhindere den Zugriff von Selfbots auf deinen Discord-Server und blockiere Raids mit dem Captcha-System von RaidProtect.

Captcha ist eine der beliebtesten Funktionen von RaidProtect und bleibt dennoch komplett optional. Es ermöglicht dir, von jedem neuen Nutzer eine Herausforderung zu verlangen, bei der er einen Code eingibt, um zu bestätigen, dass er kein Bot (Selfbot) ist.

## ❓ Wie Captcha funktioniert {#working}

Captcha basiert auf einer **@Unverified**-Rolle und einem **#verification**-Kanal. Wenn ein Nutzer deinem Server beitritt:
- Der Bot weist diesem Nutzer automatisch die **@Unverified**-Rolle zu und beschränkt seinen Zugriff auf den **#verification**-Kanal.
- In diesem Kanal sendet der Bot ein Bild mit 6 Großbuchstaben. Der Nutzer muss diese Buchstaben im Kanal eingeben, um zu beweisen, dass er ein Mensch ist.
- Ist die Antwort korrekt, wird die **@Unverified**-Rolle entfernt und der Nutzer erhält normalen Zugriff auf den Server. Andernfalls wird er automatisch gekickt.
- Wenn Captcha aktiviert ist, postet RaidProtect automatisch eine Nachricht im Log-Kanal mit dem Erstellungsdatum des Accounts jedes neuen Nutzers.
- RaidProtect erkennt automatisch Berechtigungsprobleme (Kanal und Rolle) sowie die Standard-Sichtbarkeit des Kanals während des Discord-Onboardings.

:::info
**Zeitlimit und Versuche:** Nutzer haben **1 bis 10 Minuten** Zeit, das Captcha zu lösen (**Standard: 5 Minuten**) und **1 bis 3 Versuche** (**Standard: 2 Versuche**). Überschreiten sie diese Grenzen, werden sie automatisch vom Server gekickt.
:::
:::warning
**Berechtigungsverwaltung:** Die Berechtigungen für die **@Unverified**-Rolle werden von RaidProtect automatisch konfiguriert. Du kannst Rolle und Kanal umbenennen, solltest sie aber nicht löschen.
:::

## 🚪 Captcha einrichten {#config}

Die Einrichtung des Captchas geht schnell und einfach.

1. Führe den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicke auf die Schaltfläche "**Captcha**".
3. Wähle den Kanal, in dem das Captcha stattfinden soll, oder nutze die Schaltfläche "**Einen für mich erstellen**".
4. Die **@Unverified**-Rolle wird automatisch erstellt und konfiguriert.
5. Lege die erlaubte Anzahl an Versuchen (zwischen **1 und 3**) sowie die maximale Lösungszeit (zwischen **1 und 10 Minuten**) fest.

![Captcha settings screenshot](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-captcha.webp)

## ✨ Zusätzliche Funktionen {#additional-features}

Um sich an die Bedürfnisse deines Servers anzupassen, bietet das Captcha von RaidProtect weitere anpassbare Optionen.

### Separate Logs {#logs}

Sollte dein Server sehr aktiv sein, können captcha-bezogene Logs deinen Haupt-Log-Kanal überfüllen. Du kannst sie in einen anderen Kanal verschieben.

1. Führe den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicke auf die Schaltfläche "**Logs**".
3. Wähle "**Captcha**" aus.
4. Bestimme den Kanal für die Captcha-Logs oder nutze die Schaltfläche "**Einen für mich erstellen**".

### Auto Role {#autorole}

Wenn du ein anderes automatisches Rollensystem (Autorole) als RaidProtect verwendest, kann dies das Captcha stören. Ersetze dein bestehendes Autorole-System durch das von RaidProtect.

1. Führe den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicke auf die Schaltfläche "**Captcha**".
3. Wähle "**Auto Role**" aus.
4. Wähle die Rolle, die Mitgliedern zugewiesen wird, die das Captcha erfolgreich abschließen.
