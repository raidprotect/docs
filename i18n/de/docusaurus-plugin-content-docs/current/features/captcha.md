---
title: Captcha (Verifizierung)
description: "Das Captcha von RaidProtect blockiert Selfbots und Raids: Jedes neue Mitglied beweist, dass es ein Mensch ist, bevor es Ihren Discord-Server betritt."
---

import { CaptchaSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

import CaptchaMockup from '@site/src/components/DiscordMessage/mockups/captcha';

{/* <CaptchaMockup /> : vorerst ausgeblendet */}

Das Captcha von RaidProtect fordert jedes neue Mitglied auf, einen Code abzutippen, bevor es Ihren Discord-Server betritt. So blockiert es Selfbots und Raids, indem es Konten herausfiltert, die keine Menschen sind.

Das Captcha ist eine der beliebtesten Funktionen von RaidProtect, obwohl es vollkommen optional bleibt. Es ermöglicht, jeden neuen Benutzer aufzufordern, eine Aufgabe zu lösen, bei der ein Code eingegeben werden muss, um zu überprüfen, dass es sich nicht um einen Roboter (Selfbot) handelt.

## ❓ Funktionsweise des Captchas {#working}

Das Captcha basiert auf einer Rolle **@Nicht verifiziert** und einem Kanal namens **#verifizierung**. Wenn ein Benutzer Ihrem Server beitritt:
- Der Bot weist diesem Benutzer automatisch die Rolle **@Nicht verifiziert** zu und beschränkt seinen Zugang auf den Kanal **#verifizierung**.
- In diesem Kanal wird vom Bot ein Bild mit 6 Großbuchstaben gesendet. Der Benutzer muss die Buchstaben im Kanal eingeben, um zu beweisen, dass er ein Mensch ist.
- Wenn die Antwort korrekt ist, wird die Rolle **@Nicht verifiziert** entfernt und der Benutzer erhält normalen Zugang zum Server. Andernfalls wird er automatisch gekickt.
- Wenn das Captcha aktiviert ist, veröffentlicht RaidProtect automatisch eine Nachricht im Log-Kanal, die das Erstellungsdatum des Kontos jedes neuen Benutzers angibt.
- RaidProtect erkennt automatisch Berechtigungsprobleme (Kanal und Rolle) sowie die Standard-Sichtbarkeit des Kanals während des Discord-Onboarding-Prozesses.

:::info
**Zeitlimit und Versuche:** Die Benutzer haben **1 bis 10 Minuten** Zeit, um das Captcha abzuschließen (**standardmäßig 5 Minuten**) und **1 bis 3 Versuche** (**standardmäßig 2 Versuche**). Danach werden sie automatisch vom Server gekickt.
:::
:::warning
**Berechtigungsverwaltung:** Die Berechtigungen der Rolle **@Nicht verifiziert** werden automatisch von RaidProtect konfiguriert. Sie können die Rolle und den Kanal umbenennen, aber löschen Sie sie nicht.
:::

## 🚪 Wie konfiguriert man das Captcha? {#config}

Die Einrichtung des Captchas ist einfach und schnell.

1. Führen Sie den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicken Sie auf die Schaltfläche "**Captcha**".
3. Wählen Sie den Kanal, in dem die Captchas durchgeführt werden, oder verwenden Sie die Schaltfläche "**Einen für mich erstellen**".
4. Die Rolle **@Nicht verifiziert** wird automatisch erstellt und konfiguriert.
5. Konfigurieren Sie die Anzahl der erlaubten Versuche (zwischen 1 und 3) sowie die maximale Lösungszeit (zwischen 1 und 10 Minuten).

<CaptchaSettingsMockup />

## ✨ Zusätzliche Funktionen {#additional-features}

Um sich an die Bedürfnisse Ihres Servers anzupassen, bietet das Captcha von RaidProtect anpassbare Optionen.

### Separate Logs {#logs}

Wenn Ihr Server beliebt ist, können die captcha-bezogenen Logs Ihren Haupt-Log-Kanal überladen. Sie können sie in einen anderen Kanal verschieben.

1. Führen Sie den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicken Sie auf die Schaltfläche "**Logs**".
3. Wählen Sie "**Captcha**".
4. Wählen Sie den Kanal, in dem die Captcha-Logs gespeichert werden, oder verwenden Sie die Schaltfläche "**Einen für mich erstellen**".

### Automatische Rolle {#autorole}

Wenn Sie ein automatisches Rollensystem (Autorole) verwenden, das nicht von RaidProtect stammt, kann dies mit dem Captcha interferieren. Ersetzen Sie Ihre bestehende Autorole durch die von RaidProtect.

1. Führen Sie den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicken Sie auf die Schaltfläche "**Captcha**".
3. Wählen Sie "**Automatische Rolle**".
4. Wählen Sie die Rolle, die den Mitgliedern nach bestandenem Captcha zugewiesen wird.

### Captcha-Bypass {#bypass}

Verwenden Sie den Befehl: ```/bypass captcha [benutzer]```

Ersetzen Sie `[benutzer]` durch die gewünschte Kennung; diese Person hat dann 10 Minuten Zeit, dem Server beizutreten, ohne das Captcha lösen zu müssen. Wenn der Benutzer bereits anwesend ist, wird das Captcha automatisch gelöst. Sie können den Befehl auch ohne Angabe eines Benutzers verwenden, um die aktuelle Liste der Bypass-Benutzer anzuzeigen.

## Häufig gestellte Fragen {#faq}

### Wie viel Zeit hat man, um das Captcha zu lösen?

Neue Mitglieder haben 1 bis 10 Minuten Zeit (standardmäßig 5 Minuten) und 1 bis 3 Versuche (standardmäßig 2 Versuche). Danach werden sie automatisch vom Server gekickt.

### Was passiert, wenn ein Mitglied das Captcha nicht besteht?

Wenn es seine Versuche aufbraucht oder die Zeit überschreitet, wird es automatisch vom Server gekickt. Es kann jedoch zurückkehren und das Captcha erneut versuchen.

### Kann man ein Mitglied vom Captcha ausnehmen?

Ja, mit dem Befehl `/bypass captcha [benutzer]`. Das Mitglied hat dann 10 Minuten Zeit, beizutreten, ohne das Captcha zu lösen, und wenn es bereits anwesend ist, wird das Captcha automatisch gelöst.

### Kann man die Rolle @Nicht verifiziert und den Kanal #verifizierung umbenennen?

Ja, Sie können sie frei umbenennen. Löschen Sie sie nicht, da RaidProtect sie für die Funktion des Captchas benötigt und ihre Berechtigungen automatisch konfiguriert.
