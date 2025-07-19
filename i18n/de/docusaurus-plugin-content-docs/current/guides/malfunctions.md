---
title: Fehlfunktionen
---

Hast du ein Problem mit RaidProtect? Die Lösung findest du wahrscheinlich hier.

Manchmal läuft nicht alles wie erwartet. Hier sind die **häufigsten Probleme**, die auftreten können, und wie du sie löst. 🤗

Sollte diese Seite dein Problem nicht beantworten, [**kontaktiere gerne unseren Support**](https://raidprotect.bot/discord), der dir weiterhilft!

## Der Bot zeigt einen Fehler, wenn ich einen Befehl ausführe {#commands}

Wenn der Befehl nicht erfolgreich ausgeführt wird, **kann RaidProtect einen Fehler anzeigen** statt des erwarteten Ergebnisses. In den meisten Fällen gibt es einen Hinweis in der Meldung, manchmal fällt sie jedoch generischer aus. So lässt sich das Problem meistens beheben. 🧐

- **Befolge die Hinweise.** Manche Fehler erklären klar das Problem. Wenn der Bot dich auffordert, etwas zu tun, mach es bitte.
- **Überprüfe die Befehlsparameter.** Möglicherweise hast du den Befehl falsch geschrieben; schau in der Hilfe nach, wie er korrekt verwendet wird. Denke daran, dass eckige Klammern ([]) nicht mit eingegeben werden dürfen.
- **Überprüfe die Berechtigungen des Bots.** Der Bot benötigt die Berechtigung **Administrator** und muss in der Rollenhierarchie auf Administratorniveau stehen.
- **Probiere den Befehl erneut.** Manchmal verschwindet das Problem aus unbekannten Gründen von selbst.

Erhältst du trotz dieser Tipps weiterhin einen Fehler, [kontaktiere unseren Support](https://raidprotect.bot/discord), damit wir dir helfen können. 🤝

## Der Log-Kanal des Bots wurde nicht erstellt {#logs}

Um dich über seine Aktionen zu informieren, benötigt RaidProtect einen Log-Kanal. Dieser wird normalerweise automatisch erstellt, wenn der Bot beitritt, doch manchmal passiert nichts. So behebst du das Problem. ⚙️

- **Stelle sicher, dass der Bot Administrator ist.** Damit der Bot korrekt funktioniert, muss ihm die Administrator-Berechtigung erteilt werden. Ist das noch nicht geschehen, öffne die Rolleneinstellungen und gib der RaidProtect-Rolle diese Berechtigung. Danach musst du den Bot nur noch manuell initialisieren (siehe unten)!
- **Überprüfe, ob der Bot richtig initialisiert ist.** Dies geschieht normalerweise automatisch, aber du kannst die Initialisierung mit dem [Befehl `/setup`](../setup.md#install) erzwingen. Der Log-Kanal sollte dann automatisch erstellt werden.
- **Lege einen Kanal manuell fest.** Wenn gar nichts funktioniert, keine Panik – du kannst den Kanal, den der Bot für Logs verwenden soll, auch manuell wählen! Sobald ein entsprechender Kanal erstellt wurde, führe den [Befehl `/settings`](../setup.md#settings) aus und wähle dann Logs.

## Ein Nutzer hat gespammt, aber der Bot hat ihn nicht bestraft {#anti-spam}

Die [Anti-Spam-Funktion](../features/anti-spam.mdx) gehört zu den Hauptfunktionen von RaidProtect und es ist frustrierend, wenn sie nicht funktioniert. In den meisten Fällen ist es aber nichts Ernstes. 😇

- **Wenn der Anti-Spam zum Stoppen auffordert, aber nicht sanktioniert,** liegt das meist an fehlenden Berechtigungen. Denk daran, dass der Bot Administratorrechte braucht und in der Rollenhierarchie entsprechend hoch stehen muss.
- **Überprüfe die Anti-Spam-Konfiguration.** Manchmal vergisst man, dass ein Kanal ignoriert wird.
- **Überprüfe die Berechtigungen des Spammers.** Administratoren werden ignoriert. Wenn du also selbst testest, wird der Anti-Spam dich möglicherweise nicht erkennen.
- **Ist der Spam lang genug?** Der Bot erkennt Spam in der Regel erst ab 5 Nachrichten. Sei nicht zu ungeduldig.

Wird der Spam weiterhin nicht erkannt, [melde dich auf unserem Support-Server](https://raidprotect.bot/discord) mit einem **Screenshot des Problems**.

## Nutzer haben Zugriff auf den Server, ohne das Captcha abzuschließen {#captcha}

Dieses Problem tritt relativ häufig auf, hängt jedoch von **deiner Serverkonfiguration** ab. So behebst du es. 🏥

- **Hast du eine Autorole?** Wenn du einen anderen Bot (nicht RaidProtect) eingesetzt hast, um neuen Mitgliedern automatisch eine Rolle zu geben, kann das das Captcha stören. Ersetze ihn durch die [Autorole von RaidProtect](../features/captcha.md#autorole).
- **Hast du das Captcha aktiviert?** Es ist eine völlig optionale Funktion, die per Befehl aktiviert werden muss. Schau auf der [dedizierten Captcha-Dokumentationsseite](../features/captcha.md#config) nach weiteren Informationen.

## Nutzer können weiterhin schreiben, wenn ich einen Kanal sperre {#lock}

Der Lock-Befehl wirkt zwar magisch, hat aber seine Schwächen. Wie [in der Dokumentation erwähnt](../features/channel-lock.md#lock), **betrifft der Befehl nur die @everyone-Rolle**. Wenn also eine Rolle im Kanal explizit die Berechtigung zum Schreiben hat, können Mitglieder mit dieser Rolle weiterhin schreiben. Ein Bild sagt mehr als tausend Worte, daher siehst du hier, wie das in der Praxis aussieht. 🔍

![Screenshot of channel lock configuration](../../../../en/docusaurus-plugin-content-docs/current/assets/lock-channel-messages-raidprotect.png)
