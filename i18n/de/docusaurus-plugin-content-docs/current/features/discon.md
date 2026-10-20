---
title: DISCON
description: "Der DISCON von RaidProtect stellt die Gefahrenstufe Ihres Discord-Servers mit einem Klick ein: 5 Stufen, die die Schutzmaßnahmen während eines Raids verschärfen."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

Der **DISCON** ist die Gefahrenstufe Ihres Servers nach dem Vorbild von DEFCON. Während eines [Raids](/de/learn/discord-raid) muss Ihr Team nicht mehr `/settings` öffnen, um die Discord-Verifizierung zu ändern, das Captcha zu aktivieren und die DMs einzeln zu sperren: Ein Klick auf das DISCON-Panel, und wir wenden alle Schutzmaßnahmen der gewählten Stufe auf einmal an. Ein zweiter Klick, und wir machen rückgängig, was wir aktiviert hatten.

## ❓ Wie funktioniert es? {#working}

- **Fünf Stufen**: von Stufe 5 (ruhig) bis Stufe 1 (Katastrophe). Je niedriger die Stufe, desto strenger der Schutz.
- **Ein Panel für das Team**: eine Nachricht in einem Kanal, der dem Staff vorbehalten ist, mit einer Schaltfläche pro Stufe. Ein Klick genügt, um die Stufe zu wechseln.
- **Für Ihren Server berechnete Effekte**: Was eine Stufe bewirkt, hängt von Ihrer Konfiguration ab (Captcha konfiguriert oder nicht, Community-Modus, Aktion des Auto RaidMode). Die in der Konfiguration und auf dem Panel angezeigte Übersicht beschreibt genau, was bei Ihnen passieren wird.
- **Eine saubere Rückkehr**: Beim Herunterstufen deaktivieren wir nur, was der DISCON selbst aktiviert hat. Ein Captcha, eine DM-Sperre oder ein Raid-Modus, die Sie von Hand aktiviert hatten, bleiben bestehen.
- **Eine manuelle Änderung**: Die Stufe ändert sich nie von selbst, Ihr Team entscheidet.

:::info Experiment: Shield Update
Der DISCON gehört zur **Shield Update**, die für Version 3.6.0 vorgesehen ist. Bis zu ihrer Veröffentlichung befindet er sich in der Experimentierphase, als öffentliche Beta für [Premium](/de/premium)-Server. Der [Status-Sprachkanal](#voice) erfordert Premium.
:::

## 🚦 Die fünf Stufen {#levels}

| Stufe | Name | Was wir anwenden |
|---|---|---|
| 🔵 **DISCON 5** | Alles in Ordnung | Mittlere Discord-Verifizierung, sonst nichts. Das ist die Standardstufe. |
| 🟢 **DISCON 4** | Wachsamkeit | [Captcha](./captcha.md) aktiviert, falls konfiguriert (Kanal und Rolle). Ohne Captcha wird stattdessen die Discord-Verifizierung auf hoch angehoben. |
| 🟡 **DISCON 3** | Alarm | Maximale Discord-Verifizierung, Captcha aktiviert, falls konfiguriert, [DM-Sperre](./dm-lock.mdx). Das Captcha gilt für **alle** Neuankömmlinge. |
| 🔴 **DISCON 2** | Kritisch | Alles von Stufe 3, plus das **eingefrorene Captcha**: Niemand kommt herein. Ohne Captcha aktivieren wir stattdessen den [Raid-Modus](./raid-mode.md). |
| ⚪ **DISCON 1** | Katastrophe | Alles von Stufe 2, plus die **Sperrung**: @everyone kann nicht mehr schreiben, reagieren, im Sprachkanal sprechen oder Befehle verwenden. |

### Discord-Verifizierung {#verification}

Jede Stufe legt die Discord-Verifizierungsstufe Ihres Servers fest: mittel bei Stufe 5 und 4 (bei Stufe 4 hoch, wenn das Captcha nicht konfiguriert ist), maximal von Stufe 3 bis Stufe 1.

### Captcha beim Beitritt und eingefrorenes Captcha {#captcha}

- **Stufe 4**: Wir aktivieren das Captcha, falls es konfiguriert ist, auch wenn Sie es deaktiviert hatten, ohne seinen Kanal oder seine Rolle zu ändern. Es folgt dann Ihrer Einstellung für den [Auslöser](./captcha.md#trigger): Im Modus **Automatisch** wird es außerhalb eines Raids weiterhin niemandem auferlegt.
- **Stufe 3**: Das Captcha gilt für alle Neuankömmlinge, unabhängig von seinem Auslöser (siehe [Vorrang vor den Auslösern](#priority)).
- **Stufen 2 und 1**: Wir stellen das Captcha auf den Modus **Panel** und **frieren es ein**. Die Neuankömmlinge erhalten die Verifizierungsrolle und warten hinter der Tür: Sie können die Aufgabe nicht lösen, solange die Stufe gilt. Sobald die Stufe wieder gesenkt ist, durchlaufen sie das Captcha normal, ohne erneut beitreten zu müssen. Beim Herunterstufen geben wir dem Captcha den Anzeigemodus zurück, den es vorher hatte.

### DM-Sperre {#dm-lock}

Ab Stufe 3 aktivieren wir die [DM-Sperre](./dm-lock.mdx): Betrug läuft über DMs, wenn sich der Server abschottet. Sie erfordert den [Community-Modus](../guides/community.md) und die Berechtigung „**Server verwalten**“ für RaidProtect. Ohne diese Voraussetzungen wird die Stufe trotzdem angewendet, und eine Warnung weist darauf hin, dass die DM-Sperre nicht aktiviert werden konnte.

### Sperrung auf Stufe 1 {#lockdown}

Auf Stufe 1 entziehen wir der Rolle **@everyone** die Berechtigungen zum Schreiben: Nachrichten senden (auch in Threads), Reaktionen hinzufügen, Threads erstellen, Sprachnachrichten senden, Dateien anhängen, im Sprachkanal sprechen und Anwendungsbefehle verwenden. Sie werden beim Herunterstufen identisch wiederhergestellt.

## 🧩 Voraussetzungen der Stufen 2 und 1 {#requirements}

Damit die Stufen 2 und 1 Neuankömmlinge beim Beitritt wirklich zurückhalten, muss eine dieser beiden Bedingungen erfüllt sein:

- **Ein konfiguriertes Captcha** (Verifizierungskanal und -rolle): Das ist die empfohlene Lösung. Das eingefrorene Captcha hält alle zurück und lässt die legitimen Mitglieder herein, sobald Ruhe eingekehrt ist. [Konfigurieren Sie das Captcha](./captcha.md#config).
- **Andernfalls die Aktion des Auto RaidMode auf „Neuankömmlinge kicken“**: Ohne Captcha aktivieren wir den Raid-Modus, und seine Aktion entscheidet über das Schicksal der Neuankömmlinge. Mit der Aktion „**Einladungen sperren**“ (Standardeinstellung) kickt der vom DISCON geöffnete Raid-Modus niemanden. Stellen Sie sie in der [Konfiguration des Auto RaidMode](./raid-mode.md#config) ein.

Die Sperrung auf Stufe 1 erfordert außerdem, dass RaidProtect die Rolle @everyone ändern kann (Berechtigung „**Rollen verwalten**“). Gelingt das nicht, weist eine Warnung darauf hin.

## 🔓 Was Stufe 1 nicht sperrt {#lockdown-leaks}

Die Sperrung betrifft nur die Rolle **@everyone**. Ein Mitglied behält also das Wort, wenn eine andere Quelle es ihm gibt:

- **Eine Rolle, die ohne Moderator erhalten wird** und selbst diese Berechtigungen trägt: Rollen aus den Fragen des Discord-Onboardings, [automatische Rollen](./onboarding.md#autorole) von RaidProtect.
- **Eine Kanalberechtigung**, die für eine dieser Rollen gesetzt wurde.
- **Eine @everyone-Berechtigung auf einem Kanal** (zum Beispiel „Nachrichten senden“ in `#allgemein` erlaubt).

Die DISCON-Konfiguration listet diese Zugänge in einem orangefarbenen Kasten auf. Um sie zu entschärfen, entziehen Sie den betroffenen Rollen diese Berechtigungen und belassen Sie sie bei @everyone auf Serverebene: Die Serverberechtigung genügt, die Kanalberechtigung wird überflüssig.

:::tip
Die Rollen Ihres Teams können ihre eigenen Kanalberechtigungen behalten: So können sie während der Sperrung weiter moderieren.
:::

## ⚖️ Vorrang vor den automatischen Auslösern {#priority}

Das [Captcha](./captcha.md#trigger) hat eine Auslöser-Einstellung (Automatisch, Intelligent, Dauerhaft). Ab **Stufe 3** hat der DISCON Vorrang vor dieser Einstellung: Das Captcha gilt für **alle** Neuankömmlinge, ohne Einzelfallprüfung. Der DISCON ist eine Entscheidung Ihres Teams, ein automatischer Auslöser stellt sie nicht infrage.

Dafür muss das Captcha mit Kanal und Rolle [konfiguriert](./captcha.md#config) sein. Ist es lediglich deaktiviert, aktivieren wir es für die Dauer des Alarms. Wurde es nie konfiguriert, kann der DISCON es nicht erzwingen: Die Discord-Verifizierung wird verschärft und auf den Stufen 2 und 1 übernimmt der [Raid-Modus](./raid-mode.md).

## 🛠️ Den DISCON einrichten {#config}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Schutz**“.
3. Klicken Sie neben „**DISCON**“ auf „**Konfigurieren**“.
4. Wählen Sie den Panel-Kanal in der Auswahl oder klicken Sie auf „**Panel-Kanal erstellen**“.
5. Optional ([Premium](/de/premium)): Wählen Sie einen Status-Sprachkanal oder klicken Sie auf „**Status-Kanal erstellen**“.

Unter der Konfiguration finden Sie die aktuelle Stufe, die fünf Stufen-Schaltflächen und die **Stufenübersicht**, die beschreibt, was jede Stufe auf Ihrem Server bewirken wird.

<Settings start="discon" />

### Panel-Kanal {#panel-channel}

Die Schaltflächen des Panels erfordern keine Berechtigung: **Der Zugang zum Kanal dient als Kontrolle**. Wählen Sie daher einen Kanal, der Ihrem Team vorbehalten ist.

- Ein für den gesamten Server sichtbarer Kanal wird abgelehnt: Jedes Mitglied könnte dort die Stufe ändern.
- „**Panel-Kanal erstellen**“ erstellt einen Kanal `#discon`, der für @everyone unsichtbar ist. Öffnen Sie ihn anschließend für die Rollen Ihres Teams.

### Status-Sprachkanal <span className="badge-premium">Premium</span> {#voice}

Ein Sprachkanal, dessen Name die aktuelle Stufe anzeigt, auf einen Blick in der Kanalliste sichtbar: `🔵 DISCON 5`, `🟢 DISCON 4`, `🟡 DISCON 3`, `🔴 DISCON 2`, `⚪ DISCON 1`. Niemand kann ihm beitreten. „**Status-Kanal erstellen**“ erstellt ihn neben dem Panel-Kanal, mit denselben Berechtigungen.

:::info
Discord begrenzt das Umbenennen eines Kanals auf etwa 2 Mal alle 10 Minuten. Wechseln Sie schneller die Stufe, kann der Name des Sprachkanals hinterherhinken: Das Panel bleibt die Referenz.
:::

## 📟 Das DISCON-Panel {#panel}

Das Panel ist eine Nachricht im gewählten Kanal. Es zeigt die aktuelle Stufe, die Legende der fünf Stufen mit ihren Auswirkungen auf Ihren Server und fünf Stufen-Schaltflächen. Seine Farbe folgt der aktuellen Stufe.

Um die Stufe zu wechseln, klicken Sie einfach auf die entsprechende Schaltfläche. Kann die Stufe nur teilweise angewendet werden (Captcha nicht konfiguriert, Community-Modus fehlt, Berechtigung fehlt), weist eine flüchtige Warnung darauf hin.

Das DISCON-Panel ist außerdem der [reservierte Platz von `/display staff`](./display.mdx#staff): Sie können dort über `/display staff` Blöcke hinzufügen, aber sein Kanal wird ausschließlich in der DISCON-Konfiguration eingestellt.

## 📑 DISCON-Logs {#logs}

Jeder Stufenwechsel wird in Ihren [Server-Logs](./moderation.mdx#logs) festgehalten, mit dem Mitglied, das ihn vorgenommen hat:

- „Die **Gefahrenstufe** wurde von @Moderator von 5 auf 3 angehoben.“
- „Die **Gefahrenstufe** wurde von @Moderator von 3 auf 5 gesenkt.“

## Häufig gestellte Fragen {#faq}

### Wer kann die DISCON-Stufe ändern?

Jede Person, die den Panel-Kanal sieht. Die Schaltflächen prüfen keine Berechtigung: Der dem Team vorbehaltene Kanal dient als Filter. Administratoren können die Stufe auch über `/settings` ändern.

### Ändert sich die DISCON-Stufe während eines Raids automatisch?

Nein. Der DISCON wird immer von Ihrem Team gesteuert. Der [Auto RaidMode](./raid-mode.md) bleibt der automatische Schutz gegen Beitrittswellen.

### Was passiert, wenn man auf Stufe 5 zurückgeht?

Wir stellen die mittlere Verifizierung wieder her und machen rückgängig, was der DISCON aktiviert hatte: Captcha, Captcha-Modus, DM-Sperre, Raid-Modus und Sperrung. Was Sie selbst vor dem Hochstufen aktiviert hatten, bleibt bestehen.

### Funktioniert Stufe 2 ohne Captcha?

Ja, aber sie aktiviert dann den Raid-Modus, der Neuankömmlinge nur kickt, wenn die Aktion des Auto RaidMode „Neuankömmlinge kicken“ lautet. Damit Stufe 2 alle zurückhält, konfigurieren Sie das Captcha.

### Warum können manche Mitglieder auf Stufe 1 noch schreiben?

Die Sperrung entzieht nur der Rolle @everyone das Wort. Eine Beitrittsrolle oder eine Kanalberechtigung, die das Schreiben erlaubt, gibt es trotzdem zurück. Die DISCON-Konfiguration listet diese Zugänge auf, damit Sie sie entfernen können.

### Ist der Status-Sprachkanal verpflichtend?

Nein, er ist optional und Premium vorbehalten. Das Panel genügt, um die Stufe zu steuern und anzuzeigen.
