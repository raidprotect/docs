---
title: Captcha (Verifizierung)
description: "Das Captcha von RaidProtect blockiert Selfbots und Raids: Jedes neue Mitglied beweist, dass es ein Mensch ist, bevor es Ihren Discord-Server betritt."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import CaptchaMockup from '@site/src/components/DiscordMessage/mockups/captcha';

{/* <CaptchaMockup /> : veraltet seit 3.5.0 (zeigt den Challenge-Modus mit automatischem Kick) */}

Das **Captcha** von RaidProtect fordert jedes neue Mitglied auf, einen Code abzutippen, bevor es Ihren Discord-Server betritt. So blockiert es [Selfbots](/de/learn/self-bot) und [Raids](/de/learn/discord-raid), indem es Konten herausfiltert, die keine Menschen sind.

Es ist eine der beliebtesten Funktionen von RaidProtect und bleibt vollständig optional. Sie wählen, wann es verlangt wird: bei jedem Beitritt, nur während eines Raids oder auch für verdächtige Konten.

## ❓ Funktionsweise des Captchas {#working}

Das Captcha basiert auf einer Rolle **@Nicht verifiziert** und einem Kanal **#verifizierung**. Wenn ein Benutzer Ihrem Server beitritt:
- **Warteposition:** Wir weisen ihm die Rolle **@Nicht verifiziert** zu, die seinen Zugang auf den Kanal **#verifizierung** beschränkt.
- **Aufgabe:** Im Panel-Modus löst er ein Puzzle in der [RaidProtect-Activity](#activity). Im Challenge-Modus tippt er einen auf einem Bild angezeigten Code ab. Siehe die [Anzeigemodi](#display-mode).
- **Bestanden:** Die Rolle **@Nicht verifiziert** wird entfernt und das Mitglied erhält Zugang zum Server. Seine [automatischen Rollen](./onboarding.md#autorole) und die [Willkommensnachricht](./onboarding.md#welcome-message) gehen in diesem Moment raus.
- **Nicht bestanden:** Sind seine Versuche aufgebraucht, wird er gekickt, ins Jail gesteckt oder für einige Minuten gesperrt, bevor er es erneut versuchen kann, je nach Ihrer Einstellung. Nach einem Kick kann er zurückkehren und das Captcha erneut versuchen.
- **Logs:** Jeder Beitritt wird mit dem Erstellungsdatum des Kontos im Log-Kanal festgehalten, ebenso bestandene und nicht bestandene Captchas und abgelaufene Fristen.
- **Diagnose:** RaidProtect erkennt selbst Probleme mit Berechtigungen, mit der Sichtbarkeit des Kanals im [Onboarding-Prozess](../guides/onboarding.md) von Discord und Lücken der Rolle **@Nicht verifiziert** und schlägt vor, sie zu beheben.

:::info
**Standardmäßig kein Kick.** Ein neues Captcha kickt Mitglieder, die es nicht lösen, nicht mehr: Sie bleiben ohne Zugang auf dem Server, bis sie verifiziert sind. Sie können eine [Frist vor dem Kick](#timeout) einstellen.
:::
:::warning
**Verwaltung der Berechtigungen:** Die Berechtigungen der Rolle **@Nicht verifiziert** werden von RaidProtect automatisch konfiguriert. Sie können die Rolle und den Kanal umbenennen, aber nicht löschen. RaidProtect benötigt die Berechtigungen `KICK_MEMBERS` und `MANAGE_ROLES` und muss über der Rolle **@Nicht verifiziert** stehen.
:::

### Anzeigemodi {#display-mode}

| Modus | Was das neue Mitglied sieht |
|---|---|
| **Panel (Interaktiv)**, Standard | Eine dauerhafte Nachricht „**Verifizierungssystem**“ mit einer Schaltfläche „**Verifizieren**“, die die [RaidProtect-Activity](#activity) öffnet. Das Mitglied kann nicht in **#verifizierung** schreiben. |
| **Challenge (Klassisch)** | Bei seiner Ankunft wird ein Bild in **#verifizierung** gepostet, und es tippt den Code als Nachricht in den Kanal. |

Das Panel trägt eine Schaltfläche „**Translate**“, um es in der eigenen Sprache zu lesen, und jeder Neuankömmling wird im Verifizierungskanal erwähnt, danach wird die Nachricht gelöscht: So findet er den Kanal wieder.

Der Panel-Modus hält den Kanal sauber und ermöglicht zusätzliche Einstellungen: Wahl der Sanktion bei aufgebrauchten Versuchen, [Captcha während eines Raids eingefroren](./raid-mode.md#action), [Zurückhalten zu junger Konten am Eingang](./onboarding.md#minage). Der Challenge-Modus kickt das Mitglied immer nach Ablauf der vorgegebenen Zeit oder wenn seine Versuche aufgebraucht sind.

### Auslöser {#trigger}

| Auslöser | Wann das Captcha gilt |
|---|---|
| **Dauerhaft**, Standard | Bei jedem Beitritt, ohne Bedingung. |
| **Automatisch** | Nur während eines Raids oder bei einer hohen DISCON-Stufe. Die übrigen Neuankömmlinge treten direkt bei. |
| **Intelligent** | Wie Automatisch, zuzüglich der Konten, die verdächtig erscheinen. |

Mit **Automatisch** wird das Captcha während eines Raids nur verlangt, wenn der [Auto RaidMode](./raid-mode.md#action) auf „**Zum Captcha schicken**“ oder „**Captcha während des Raids eingefroren**“ steht, sowie bei einem [DISCON](./discon.md)-Alarm ab Stufe 3.

Der Auslöser **Intelligent** bewertet das Profil jedes Neuankömmlings. Ein von Ihrem Team von Hand genehmigtes Mitglied gilt nie als verdächtig.

## 🚪 Wie konfiguriere ich das Captcha? {#config}

Das Einrichten des Captchas ist einfach und schnell.

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Ankünfte**“.
3. Klicken Sie neben „**Captcha**“ auf „**Konfigurieren**“.
4. Wählen Sie den Kanal, in dem die Captchas durchgeführt werden, oder verwenden Sie die Schaltfläche „**Für mich erstellen**“.
5. Klicken Sie auf „**Aktivieren**“. Die Rolle **@Nicht verifiziert** wird erstellt und ihre Berechtigungen werden in allen Kanälen gesetzt.

Das Captcha startet im Modus **Panel (Interaktiv)**, ausgelöst **Dauerhaft**, mit 3 Versuchen und ohne Frist vor dem Kick. Anschließend können Sie jede Einstellung auf demselben Bildschirm anpassen.

<Settings start="captcha" />

### Anzeigemodus und Auslöser {#mode}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Ankünfte**“.
3. Klicken Sie neben „**Captcha**“ auf „**Konfigurieren**“.
4. Wählen Sie unter „**Anzeigemodus**“ „**Panel (Interaktiv)**“ oder „**Challenge (Klassisch)**“.
5. Wählen Sie unter „**Auslösung**“ „**Dauerhaft**“, „**Automatisch**“ oder „**Intelligent**“.

### Verifizierung in der Activity {#activity}

Im Modus **Panel** öffnet die Schaltfläche „**Verifizieren**“ die **RaidProtect-Activity**: Das Mitglied löst ein kleines Puzzle direkt in Discord, in den Farben Ihres Servers und mit den Kanal-Links Ihres [Onboarding-Prozesses](../guides/onboarding.md). Auf einem [Premium](/de/premium)-Server mit Symbol wird das Serversymbol anstelle des RaidProtect-Logos angezeigt. Nach der Verifizierung entdeckt es dort seine [Willkommenskarte](./onboarding.md#welcome-message).

- **Puzzle nicht geschafft:** Wie bei einem falschen Code kostet es einen Versuch, und die vorgesehene Sanktion greift, wenn die Versuche aufgebraucht sind. Die Activity teilt dem Mitglied zuerst das Ergebnis mit, danach wird die Sanktion angewendet.
- **Erfolg:** Das Mitglied wird verifiziert, sobald es den Erfolgsbildschirm verlässt. Klickt es in der Zwischenzeit auf „**Verifizieren**“, gilt seine Validierung sofort, statt die Activity neu zu starten.
- **Roboter:** Ein von einem Automaten gelöstes Captcha wird sofort sanktioniert, wie bei aufgebrauchten Versuchen: Kick, Jail oder Sperre je nach Ihrer Einstellung.
- **Prüfung durch Ihr Team:** Im Zweifelsfall bleibt das Mitglied am Eingang blockiert, ohne laufende Frist, und Ihr Team erhält einen automatischen Captcha-Bericht. Er landet in den [Captcha-Logs](#logs), andernfalls im Kanal der [Meldungen](./reports.md), andernfalls in den Server-Logs. Sobald der Bericht übernommen ist, bietet er „**Einlassen**“, „**Mit anderem Mitglied verknüpfen**“ (mit der [Identity Update](#activity-alts)) und „**Ablehnen**“ an, das Ihre Captcha-Fehlschlag-Aktion anwendet (Kick, Jail oder Sperre): Das Sanktionsmenü ist dort nicht vorhanden.
- **Jail nach aufgebrauchten Versuchen:** Dieses Jail hat keine Dauer und eröffnet ebenfalls einen Prüfbericht. „**Einlassen**“ hebt das Jail auf und verifiziert das Mitglied; andernfalls sanktionieren Sie es.
- **Geräteprüfung abgelehnt:** Die Activity bittet das Mitglied um sein Einverständnis, bevor sie sein Gerät prüft. Lehnt es ab, erhält es die Fehlschlag-Aktion wie nach aufgebrauchten Versuchen (Kick, Jail oder Sperre).
- **Activity öffnet sich nicht:** Das Mitglied kann auf „**Code eingeben**“ klicken. Ein korrekter Code geht dann zur Prüfung an Ihr Team.
- **Löschung der Daten:** Ein Mitglied kann die Löschung seiner Verifizierungsdaten unter [privacy@raidprotect.bot](mailto:privacy@raidprotect.bot) beantragen. Es durchläuft das Captcha dann erneut, und seine Sanktionen bleiben bestehen.

#### Vom Captcha erkannte Zweitkonten <span className="badge-experiment">Experiment</span> {#activity-alts}

Mit der [Identity Update](./alt-accounts.md) erkennt die Activity auch Neuankömmlinge, die wahrscheinlich von derselben Person betrieben werden wie ein Mitglied Ihres Servers:

- **Sichere Verknüpfung:** Die Konten werden automatisch in [`/alt`](./alt-accounts.md#alt) verknüpft. Die Captcha-Logs weisen darauf hin, mit einer Schaltfläche „**Verknüpfung aufheben**“.
- **Wahrscheinliche Verknüpfung:** Ist [Nur ein Konto pro Person](./alt-accounts.md#single-account) aktiv, kommt das Mitglied zur Prüfung. „**Mit anderem Mitglied verknüpfen**“ verknüpft die Konten in `/alt` und lässt es herein; wurde kein Konto erkannt, bittet Sie ein Fenster, das Mitglied auszuwählen („**Konto bereits auf dem Server**“). Andernfalls tritt das Mitglied bei, und die Captcha-Logs melden die wahrscheinliche Verknüpfung mit einer Schaltfläche „**Konten verknüpfen**“.
- **Sichere Verknüpfung nicht angewendet:** Es wird nichts automatisch verknüpft, wenn ein Konto der Gruppe zum Serverteam gehört, wenn der Neuankömmling mit mehreren `/alt`-Gruppen verknüpft ist oder wenn beide Konten bereits jeweils eine eigene Gruppe haben (zwei Gruppen werden nie automatisch zusammengeführt). Die Verknüpfung wird Ihnen dann auf die gleiche Weise vorgeschlagen.

Es werden Ihnen nur die Konten Ihres Servers gezeigt: Über andere Server wird nichts gesagt.

:::info Experiment: Identity Update
Die Erkennung von Zweitkonten gehört zur **Identity Update**, die für Version 3.7.0 vorgesehen ist. Bis zu ihrer Veröffentlichung befindet sie sich in der Experimentierphase, als öffentliche Beta für [Premium](/de/premium)-Server.
:::

### Testmodus {#test-mode}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Ankünfte**“.
3. Klicken Sie neben „**Captcha**“ auf „**Konfigurieren**“.
4. Klicken Sie neben „**Testmodus**“ auf „**Aktivieren**“.

Im Panel-Modus kann dann ein bereits verifiziertes Mitglied Ihres Teams (Berechtigung **Server verwalten** oder der Eigentümer) auf „**Verifizieren**“ klicken, um das Captcha zu wiederholen. Versuche und Lösungszeit gelten wie für einen Neuankömmling: Das Captcha-Log sagt, was getan worden wäre, es wird nichts angewendet.

### Schwierigkeit {#difficulty}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Ankünfte**“.
3. Klicken Sie neben „**Captcha**“ auf „**Konfigurieren**“.
4. Klicken Sie neben „**Schwierigkeit**“ auf „**Bearbeiten**“.
5. Stellen Sie die Felder des Fensters ein und bestätigen Sie dann.

<SettingsModal name="captchaDifficulty" />

| Einstellung | Werte | Standard |
|---|---|---|
| „**Versuche**“ | 1 bis 10 Versuche | 3 Versuche |
| „**Aktion, wenn die Versuche aufgebraucht sind**“ (Panel) | „**Versuche aufgebraucht: Kicken**“, „**Versuche aufgebraucht: Jail**“ oder „**Versuche aufgebraucht: 10 Min. sperren**“ | Kicken |
| „**Lösungszeit**“ (Panel) | Deaktiviert, 15, 30 oder 45 Sekunden, 1, 2, 3 oder 5 Minuten: die Zeit zum Lösen des Puzzles, gezählt ab der ersten Aufgabe (nach der Zustimmung des Mitglieds). Ein Bild-Code behält mindestens 2 Minuten | 30 Sekunden |
| „**Lösungszeit (vor dem Kick)**“ (Challenge) | 3, 5, 10 oder 15 Minuten oder ein Wert von 30 Sekunden bis 15 Minuten: Nach Ablauf dieser Frist wird das Mitglied gekickt | 5 Minuten |

:::info
Die Wahl „**Versuche aufgebraucht: Jail**“ steckt das Mitglied ins [Jail](./sanctions.mdx#jail), statt es zu kicken. Dafür ist eine Jail-Rolle erforderlich, die im Tab „**Moderation**“ > „**Sanktionen**“ konfiguriert wird. Die Wahl „**Versuche aufgebraucht: 10 Min. sperren**“ lässt das Mitglied auf dem Server: Es wartet 10 Minuten und beginnt dann mit neuen Versuchen von vorn.
:::

### Frist vor dem Kick {#timeout}

Im Panel-Modus läuft diese Frist ab der Ankunft des Mitglieds: Ist es nicht rechtzeitig verifiziert, erhält es Ihre Fehlschlag-Aktion (Kick, Jail oder Sperre).

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Ankünfte**“.
3. Klicken Sie neben „**Captcha**“ auf „**Konfigurieren**“.
4. Wählen Sie unter „**Frist vor dem Kick**“ „**Deaktiviert**“, 5, 15 oder 30 Minuten oder „**Benutzerdefinierter Wert**“ von 30 Sekunden bis 30 Minuten.

:::warning
Bei deaktivierter Frist bleiben nicht verifizierte Konten auf dem Server und können Ihren Mitgliedern per DM schreiben. Stellen Sie eine Frist ein oder sperren Sie die DMs mit der [DM-Sperre](./dm-lock.mdx).
:::

### Warnungen des Captcha-Bildschirms {#alerts}

Der Captcha-Bildschirm zeigt Kästen an, wenn etwas die korrekte Funktion der Verifizierung verhindert:
- **Kanal bei der Ankunft unsichtbar:** Der Verifizierungskanal gehört zu keinem Standardkanal des Discord-Onboarding-Prozesses. Klicken Sie auf „**Verschieben nach** _Kategorie_“ oder „**Neue Kategorie erstellen**“, damit wir es beheben, oder folgen Sie der [Anleitung zum Onboarding-Prozess](../guides/onboarding.md).
- **Lücken der Rolle @Nicht verifiziert:** Rollen, die der Discord-Onboarding-Prozess gleichzeitig mit **@Nicht verifiziert** vergibt, umgehen die Verifizierung, die Rolle **@Nicht verifiziert** trägt Berechtigungen, **@everyone** hat die Berechtigung `ADMINISTRATOR`, oder Kanäle bleiben für Mitglieder in der Verifizierung (oder im Jail) sichtbar. Die Schaltfläche „**Beheben**“ schließt die betroffenen Kanäle.
- **Verifizierungsstufe Hoch:** Diese Discord-Stufe lässt 10 Minuten warten, bevor man schreiben kann. Das Captcha filtert bereits den Eingang: Die mit dem Captcha empfohlene Stufe ist **Mittel**.
- **Fehlende Berechtigungen:** RaidProtect benötigt `KICK_MEMBERS` und `MANAGE_ROLES`.

Klicken Sie nach der Behebung des Problems auf „**Aktualisieren**“.

### Das Captcha deaktivieren oder löschen {#disable}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Ankünfte**“.
3. Klicken Sie neben „**Captcha**“ auf „**Konfigurieren**“.
4. Wählen Sie unter „**Anzeigemodus**“:
   - „**Deaktiviert**“, um die Verifizierung auszusetzen, ohne etwas von Ihrer Konfiguration zu verlieren;
   - „**Löschen**“, um die Konfiguration und die Verifizierungsrolle zu löschen. RaidProtect bittet Sie um eine Bestätigung.

:::tip
Damit das Captcha außerhalb von Raids unauffällig bleibt, stellen Sie lieber seinen [Auslöser](#trigger) auf **Automatisch**, statt es zu deaktivieren.
:::

## ✨ Zusätzliche Funktionen {#additional-features}

### Getrennte Logs {#logs}

Wenn Ihr Server beliebt ist, können die Logs zum Captcha Ihren Haupt-Log-Kanal überfüllen. Sie können sie in einen anderen Kanal verschieben.

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Ankünfte**“.
3. Klicken Sie neben „**Captcha**“ auf „**Konfigurieren**“.
4. Klicken Sie neben „**Logs**“ auf „**Bearbeiten**“.
5. Wählen Sie den Kanal, an den die Captcha-Logs gesendet werden.

Diese Einstellung finden Sie auch im Tab „**Moderation**“ > „**Logs**“, in der Zeile „**Captcha**“.

### Automatische Rolle {#autorole}

Die automatische Rolle wird nicht mehr im Captcha eingestellt: Sie ist zu den [Automatischen Rollen](./onboarding.md#autorole) im Tab „**Ankünfte**“ gewandert, die mehrere Rollen akzeptieren. Ihre frühere Einstellung wurde dort automatisch übernommen. Ist das Captcha aktiv, werden diese Rollen nach bestandenem Captcha vergeben.

### Bypass des Captchas {#bypass}

Verwenden Sie den Befehl: ```/bypass captcha [@user]```

Ersetzen Sie `[@user]` durch die gewünschte [Kennung](../guides/id.mdx); diese Person hat dann 10 Minuten Zeit, dem Server beizutreten, ohne das Captcha lösen zu müssen. Ist der Benutzer bereits anwesend, wird das Captcha automatisch gelöst. Sie können den Befehl auch ohne Angabe eines Benutzers verwenden, um die aktuelle Liste der Bypass-Benutzer anzuzeigen.

## 🤝 Captcha und Anti-Raid, gemeinsam besser {#raid}

Das Captcha arbeitet mit den anderen Schutzmaßnahmen für Neuzugänge zusammen:
- **[Auto RaidMode](./raid-mode.md#action):** Mit der Aktion „**Zum Captcha schicken**“ durchlaufen die Neuankömmlinge einer Welle das Captcha, statt gekickt zu werden. Mit „**Captcha während des Raids eingefroren**“ warten sie hinter dem Captcha und durchlaufen es nach der Welle.
- **[Mindestalter des Kontos](./onboarding.md#minage):** Die Aktion „**Am Eingang festhalten**“ blockiert ein zu junges Konto an einem Captcha, das es erst lösen kann, wenn das Alter erreicht ist.
- **[DISCON](./discon.md#captcha):** Ab Stufe 4 wird das Captcha aktiviert, falls es konfiguriert ist, auch wenn Sie es deaktiviert hatten. Ab Stufe 3 gilt es für alle Neuankömmlinge, unabhängig von seinem Auslöser.

## Häufig gestellte Fragen {#faq}

### Wie viel Zeit hat man, um das Captcha zu lösen?

Im Panel-Modus hat das Mitglied standardmäßig 3 Versuche (1 bis 10) und standardmäßig 30 Sekunden, um das Puzzle zu lösen (deaktivierbar, bis zu 5 Minuten), gezählt ab der ersten Aufgabe. Standardmäßig gilt keine Kick-Frist, aber Sie können eine von bis zu 30 Minuten einstellen. Im Challenge-Modus hat es standardmäßig 5 Minuten (von 30 Sekunden bis 15 Minuten), bevor es gekickt wird.

### Was passiert, wenn ein Mitglied das Captcha nicht besteht?

Sind seine Versuche aufgebraucht, wird es vom Server gekickt oder, im Panel-Modus, ins Jail gesteckt oder 10 Minuten gesperrt, bevor es es erneut versuchen kann, wenn Sie das gewählt haben. Nach einem Kick kann es zurückkehren und das Captcha erneut versuchen.

### Werden nicht verifizierte Mitglieder automatisch gekickt?

Nicht bei einem neuen Captcha: Im Panel-Modus ist die Frist vor dem Kick standardmäßig deaktiviert. Nicht verifizierte Mitglieder bleiben ohne Zugang zu den Kanälen auf dem Server. Stellen Sie eine Frist vor dem Kick ein oder sperren Sie die DMs des Servers, damit sie Ihren Mitgliedern nicht privat schreiben.

### Kann man das Captcha nur während eines Raids aktivieren?

Ja. Stellen Sie seinen Auslöser auf **Automatisch** und die Aktion des Auto RaidMode auf „**Zum Captcha schicken**“ oder „**Captcha während des Raids eingefroren**“. In der übrigen Zeit treten die Neuankömmlinge direkt bei.

### Muss man die Discord-Community aktivieren, um das Captcha zu nutzen?

Nein, das Captcha funktioniert ohne die Community. Ist sie aktiviert, prüfen Sie, dass der Verifizierungskanal zu den Standardkanälen des [Onboarding-Prozesses](../guides/onboarding.md) gehört.

### Kann man ein Mitglied vom Captcha ausnehmen?

Ja, mit dem Befehl `/bypass captcha [@user]`. Das Mitglied hat 10 Minuten Zeit, ohne Lösen des Captchas beizutreten, und ist es bereits anwesend, wird das Captcha automatisch gelöst.

### Kann man die Rolle @Nicht verifiziert und den Kanal #verifizierung umbenennen?

Ja, Sie können sie frei umbenennen. Löschen Sie sie nicht, denn RaidProtect braucht sie, damit das Captcha funktioniert, und konfiguriert ihre Berechtigungen automatisch.
