---
title: Fehlfunktionen
description: "Ein Problem mit RaidProtect? Hier finden Sie Lösungen für die häufigsten Störungen, um Ihren Bot wieder flottzumachen."
---

Ein Problem mit RaidProtect? Die Lösung finden Sie wahrscheinlich hier.

Manchmal funktioniert nicht alles wie erwartet. Hier sind die **häufigsten Probleme**, die auftreten können, und wie Sie sie beheben können.

Wenn diese Seite keine Antwort auf ein Problem bietet, das Sie haben, [**zögern Sie nicht, unser Support-Team zu kontaktieren**](https://raidprotect.bot/discord), das Ihnen gerne weiterhilft!

## Der Bot zeigt einen Fehler an, wenn ich einen Befehl ausführe {#commands}

Wenn der Befehl nicht erfolgreich ausgeführt wird, **kann RaidProtect einen Fehler anzeigen** anstelle des erwarteten Ergebnisses. In den meisten Fällen wird ein Hinweis in der Nachricht gegeben, aber es kann sich auch um eine allgemeinere Meldung handeln. So beheben Sie dieses Problem in den meisten Fällen.

- **Tun Sie, was angegeben ist.** Einige Fehler erklären das Problem deutlich. Wenn der Bot Sie auffordert, etwas zu tun, tun Sie es.

- **Überprüfen Sie die Befehlsparameter.** Der Befehl ist möglicherweise einfach falsch geschrieben; schauen Sie in der Hilfe nach, wie er verwendet wird. Vergessen Sie nicht, dass eckige Klammern ([]) nicht mit eingegeben werden sollen.

- **Überprüfen Sie die Berechtigungen des Bots.** Er muss die **Administrator**-Berechtigung haben und sich auf der Ebene der Administratoren in der Rollenhierarchie befinden.

- **Versuchen Sie den Befehl erneut.** Manchmal löst sich das Problem von selbst ohne erkennbaren Grund.

Wenn Sie trotz dieser Tipps weiterhin einen Fehler erhalten, [kontaktieren Sie unseren Support](https://raidprotect.bot/discord), damit wir Ihnen helfen können.

## Der Log-Kanal des Bots wurde nicht automatisch erstellt {#logs}

Um Sie über die durchgeführten Aktionen zu informieren, benötigt RaidProtect einen Log-Kanal. Dieser Kanal wird automatisch erstellt, wenn der Bot zum ersten Mal beitritt, aber manchmal wird kein Kanal erstellt. So beheben Sie dieses Problem.

- **Stellen Sie sicher, dass der Bot Administrator-Berechtigungen hat.** Für das ordnungsgemäße Funktionieren des Bots müssen Sie ihm die Administrator-Berechtigung erteilen. Falls dies noch nicht geschehen ist, gehen Sie zu den Rolleneinstellungen und gewähren Sie der RaidProtect-Rolle diese Berechtigung. Dann müssen Sie den Bot nur noch manuell initialisieren, damit alles funktioniert (siehe unten)!

- **Überprüfen Sie, ob der Bot korrekt initialisiert ist.** Dies geschieht normalerweise automatisch, aber Sie können diese Initialisierung mit dem [Befehl `/setup`](../setup.md#install) erzwingen. Der Log-Kanal sollte automatisch erstellt werden.

- **Legen Sie manuell einen Kanal fest.** Wenn nichts funktioniert, keine Panik, Sie können den Log-Kanal selbst wählen! Führen Sie den [Befehl `/settings`](../setup.md#settings) aus, öffnen Sie den Tab „**Moderation**“ und klicken Sie neben „**Logs**“ auf „**Konfigurieren**“. Dort können Sie einen allgemeinen Kanal wählen und, wenn Sie möchten, einen Kanal für die Moderation und einen weiteren für das Captcha: Bleiben diese beiden leer, fallen sie auf den allgemeinen Kanal zurück.

## Ein Benutzer hat gespammt, aber der Bot hat ihn nicht sanktioniert {#anti-spam}

Der [Anti-Spam](../features/anti-spam.mdx) ist eine der Hauptfunktionen von RaidProtect, und es kann ärgerlich sein, wenn er nicht funktioniert. Aber seien Sie beruhigt, meistens ist es nichts Ernstes.

- **Wenn der Anti-Spam auffordert, das Spammen zu stoppen**, aber nicht sanktioniert, liegt dies wahrscheinlich an fehlenden Berechtigungen. Denken Sie daran, der Bot muss die Administrator-Berechtigung haben und sich auf der Ebene der Administratoren in der Rollenhierarchie befinden.

- **Überprüfen Sie die Anti-Spam-Konfiguration.** Es klingt banal, aber manche vergessen, dass sie einen Kanal ignoriert haben. Ein Kanal, dessen Name „spam“ enthält, wird ebenfalls immer ignoriert.

- **Starten Sie eine Simulation.** Auf dem Anti-Spam-Bildschirm sagt Ihnen die Schaltfläche „**Simulieren**“ für ein bestimmtes Mitglied, einen Kanal und eine Spam-Art, ob der Anti-Spam ausgelöst würde und andernfalls warum (Modul abgeschaltet, Kanal oder Rolle ignoriert, Mitglied über dem Bot …). Der [Befehl `/feedback`](../features/utilities.mdx#feedback) bietet diese Diagnose auch an, wenn Sie einen Anti-Spam-Fehler melden.

- **Überprüfen Sie die Berechtigungen des Spammers.** Staff-Mitglieder (Administrator, Server verwalten, Nachrichten verwalten) werden ignoriert, solange Sie selbst keine Rolle und kein Mitglied ignoriert haben. Wenn Sie den Anti-Spam auf Ihrem eigenen Server testen, wird er Sie daher möglicherweise nicht erkennen.

- **Ist der Spam lang genug?** Der Anti-Spam reagiert auf ein Nachrichtenvolumen, nicht auf eine einzelne Nachricht. Seien Sie nicht zu ungeduldig, und überprüfen Sie, dass die Sanktion des betroffenen [Auslösers](../features/anti-spam.mdx#triggers) nicht deaktiviert ist.

Wenn trotz alledem Spam immer noch nicht erkannt wird, [kontaktieren Sie uns auf unserem Support-Server](https://raidprotect.bot/discord) und fügen Sie einen **Screenshot des Problems** bei.

## Benutzer haben Zugang zum Server, ohne das Captcha zu bestehen {#captcha}

Dieses Problem tritt relativ häufig auf, hängt aber von **der Konfiguration Ihres Servers** ab. Sehen wir uns an, wie es behoben werden kann.

- **Haben Sie eine automatische Rolle?** Wenn Sie einen Bot (außer RaidProtect) konfiguriert haben, der neuen Mitgliedern auf Ihrem Server automatisch eine Rolle zuweist, kann dies das Captcha beeinträchtigen. Ersetzen Sie ihn durch die [automatischen Rollen von RaidProtect](../features/onboarding.md#autorole), die nach bestandenem Captcha vergeben werden.

- **Haben Sie das Captcha aktiviert?** Dies ist eine optionale Funktion: Aktivieren Sie sie im Tab „**Ankünfte**“ von [`/settings`](../setup.md#settings). Lesen Sie die [Dokumentationsseite zum Captcha](../features/captcha.md#config) für weitere Informationen.

- **Wie ist sein Auslöser?** Bei „**Automatisch**“ gilt das Captcha nur während eines Raids oder bei einer hohen [DISCON](../features/discon.md)-Stufe (Shield Update, im Experiment): In der übrigen Zeit treten die Neuankömmlinge direkt bei. Wählen Sie „**Dauerhaft**“, damit jeder Neuankömmling das Captcha durchläuft.

- **Umgeht eine Rolle oder ein Kanal es?** Der Captcha-Bildschirm weist auf Kanäle hin, die für die Verifizierungsrolle noch sichtbar sind, und auf Rollen, die Zugang zum Server geben, ohne es zu durchlaufen, mit einer Schaltfläche zur Korrektur.

## Der Befehl /snipe findet keine Nachricht {#snipe}

Der [Befehl `/snipe`](../features/moderation.mdx#snipe) liest die Nachrichten, die RaidProtect eine Stunde lang im Speicher hält. Ohne aktiven Anti-Spam oder aktive Meldungen ist diese Zwischenspeicherung standardmäßig abgeschaltet: Aktivieren Sie „**Nachrichten-Zwischenspeicher**“ im Tab „**Werkzeuge**“ von [`/settings`](../setup.md#settings). Nur Nachrichten, die nach der Aktivierung gelöscht wurden, können wiedergefunden werden.

## Benutzer können weiterhin schreiben, wenn ich einen Kanal sperre {#lock}

Der Sperrbefehl scheint magisch zu sein, hat aber auch seine Schwächen. Wie [in dieser Dokumentation erwähnt](../features/channel-lock.md#lock), **wirkt der Befehl nur auf die Rolle @everyone**. Das bedeutet: Hat eine Rolle in dem Kanal, den Sie sperren möchten, ausdrücklich die Berechtigung zum Schreiben, kann sie trotzdem schreiben. Da ein Bild mehr als tausend Worte sagt, hier ist, wie das in der Praxis aussieht.

![Screenshot Kanalsperre-Konfiguration](../../../../en/docusaurus-plugin-content-docs/current/assets/lock-channel-messages-raidprotect.png)
