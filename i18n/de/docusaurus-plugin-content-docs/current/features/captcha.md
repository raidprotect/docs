---
title: Captcha (Verifizierung)
---

Verhindern Sie, dass Selfbots auf Ihren Discord-Server zugreifen, und blockieren Sie Raids mit dem Captcha-System von RaidProtect.

Das Captcha ist eine der beliebtesten Funktionen von RaidProtect, obwohl es vollkommen optional bleibt. Es ermöglicht, jeden neuen Benutzer aufzufordern, eine Aufgabe zu lösen, bei der ein Code eingegeben werden muss, um zu überprüfen, dass es sich nicht um einen Bot (Selfbot) handelt.

## ❓ Funktionsweise des Captchas {#working}

Das Captcha basiert auf einer **@Nicht verifiziert**-Rolle und einem Kanal namens **#verifizierung**. Wenn ein Benutzer Ihrem Server beitritt:
- Der Bot weist diesem Benutzer automatisch die Rolle **@Nicht verifiziert** zu und beschränkt seinen Zugang auf den Kanal **#verifizierung**.
- In diesem Kanal wird ein Bild mit 6 Großbuchstaben vom Bot gesendet. Der Benutzer muss die Buchstaben im Kanal eingeben, um zu beweisen, dass er ein Mensch ist.
- Wenn die Antwort korrekt ist, wird die Rolle **@Nicht verifiziert** entfernt und der Benutzer erhält normalen Zugang zum Server. Andernfalls wird er automatisch gekickt.
- Wenn das Captcha aktiviert ist, veröffentlicht RaidProtect automatisch eine Nachricht im Log-Kanal mit dem Erstellungsdatum des Kontos jedes neuen Benutzers.
- RaidProtect erkennt automatisch Berechtigungsprobleme (Kanal und Rolle) sowie die Standard-Sichtbarkeit des Kanals während des Discord-Onboarding-Prozesses.

:::info
**Zeitlimit und Versuche:** Benutzer haben **1 bis 10 Minuten** Zeit, um das Captcha abzuschließen (**standardmäßig 5 Minuten**) und **1 bis 3 Versuche** (**standardmäßig 2 Versuche**). Danach werden sie automatisch vom Server gekickt.
:::
:::warning
**Berechtigungsverwaltung:** Die Berechtigungen der Rolle **@Nicht verifiziert** werden automatisch von RaidProtect konfiguriert. Sie können die Rolle und den Kanal umbenennen, aber löschen Sie sie nicht.
:::

## 🚪 Captcha-Konfiguration {#config}

Die Einrichtung des Captchas ist schnell und einfach.

1. Führen Sie den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicken Sie auf die Schaltfläche "**Captcha**".
3. Wählen Sie den Kanal, in dem die Captchas durchgeführt werden, oder verwenden Sie die Schaltfläche "**Einen für mich erstellen**".
4. Die Rolle **@Nicht verifiziert** wird automatisch erstellt und konfiguriert.
5. Konfigurieren Sie die Anzahl der erlaubten Versuche (zwischen 1 und 3) sowie die maximale Lösungszeit (zwischen 1 und 10 Minuten).

![Captcha-Einstellungen Screenshot](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-captcha.webp)

## ✨ Zusätzliche Funktionen {#additional-features}

Um sich an die Bedürfnisse Ihres Servers anzupassen, bietet das Captcha von RaidProtect anpassbare Optionen.

### Separate Logs {#logs}

Wenn Ihr Server beliebt ist, können Captcha-bezogene Logs Ihren Haupt-Log-Kanal überladen. Sie können sie in einen anderen Kanal verschieben.

1. Führen Sie den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicken Sie auf die Schaltfläche "**Logs**".
3. Wählen Sie "**Captcha**".
4. Wählen Sie den Kanal, in dem die Captcha-Logs gespeichert werden, oder verwenden Sie die Schaltfläche "**Einen für mich erstellen**".

### Automatische Rolle {#autorole}

Wenn Sie ein automatisches Rollensystem (Autorole) verwenden, das nicht von RaidProtect stammt, kann dies mit dem Captcha interferieren. Ersetzen Sie Ihre bestehende Autorole durch die von RaidProtect.

1. Führen Sie den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicken Sie auf die Schaltfläche "**Captcha**".
3. Wählen Sie "**Automatische Rolle**".
4. Wählen Sie die Rolle, die Mitgliedern nach erfolgreichem Captcha zugewiesen wird.

### Captcha-Bypass {#bypass}

Verwenden Sie den Befehl: ```/bypass captcha [Benutzer]```

Ersetzen Sie `[Benutzer]` durch die gewünschte Kennung; diese Person hat 10 Minuten Zeit, dem Server beizutreten, ohne das Captcha lösen zu müssen. Wenn der Benutzer bereits anwesend ist, wird das Captcha automatisch gelöst. Sie können den Befehl auch ohne Angabe eines Benutzers verwenden, um die aktuelle Liste der Bypass-Benutzer anzuzeigen.
