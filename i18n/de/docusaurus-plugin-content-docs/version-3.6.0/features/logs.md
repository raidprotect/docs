---
title: Server-Logs
description: "Die Logs von RaidProtect verfolgen alles, was auf Ihrem Discord-Server passiert: Kanäle, Rollen, Mitglieder, Nachrichten, Sprachkanäle, Emojis und Reaktionen, mit dem Urheber jeder Aktion."
---

Die **Server-Logs** halten fest, was auf Ihrem Server passiert: wer einen Kanal erstellt, eine Rolle geändert, eine Nachricht gelöscht oder ein Mitglied aus einem Sprachkanal getrennt hat. Jeder Log beginnt mit seinem Urheber („@modo hat den Kanal #allgemein erstellt.“) und zeigt bei einer Änderung den Zustand davor und danach.

:::info Experiment: Logging Update
Die Server-Logs sind Teil der **Logging Update**, die für Version 3.8.0 geplant ist. Bis zu ihrer Veröffentlichung befinden sie sich in der Experimentierphase, als öffentliche Beta für [Premium](/de/premium)-Server.
:::

## ⚙️ Logs konfigurieren {#config}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Moderation**“.
3. Klicken Sie neben „**Logs**“ auf „**Konfigurieren**“.
4. Öffnen Sie „**Server-Logs**“ und wählen Sie dann einen Kanal für jede Familie.

In jeder Familie gibt es zwei Listen:

- **Gesendete Typen**: Entfernen Sie das Häkchen bei einem Typ, damit er nirgendwo mehr gesendet wird.
- **Typen in einem anderen Kanal**: Geben Sie einem Typ einen eigenen Kanal. Ein Typ ohne eigenen Kanal folgt dem Kanal seiner Familie.

**Limits:** 3 verschiedene Log-Kanäle in der kostenlosen Version, 15 mit [Premium](/de/premium). Ohne Premium erhalten nur die ersten 3 Kanäle die Logs: Die übrigen werden pausiert, ihre Einstellungen bleiben erhalten.

Die Kanäle „**Allgemein**“, „**Moderation**“ und „**Captcha**“ der [Moderationslogs](./moderation.mdx#logs) ändern sich nicht.

## 📚 Log-Familien {#families}

| Familie | Was erfasst wird |
| --- | --- |
| **Kanäle, Rollen und Einladungen** | Erstellte, geänderte oder gelöschte Kategorien, Kanäle, Sprachkanäle und Threads, einschließlich Berechtigungen. Rollen (und ihre neue Reihenfolge), Einladungen, Webhooks, Integrationen sowie hinzugefügte oder entfernte Bots mit ihrer Rolle. AutoMod-Regeln von Discord, mit den hinzugefügten oder entfernten Wörtern und Ausdrücken, und geplante Events. Die an einem Event interessierten Mitglieder sind [Premium](/de/premium) vorbehalten. |
| **Mitglieder** | Beitritte (mit dem Alter des Kontos) und Austritte (mit dem Beitrittsdatum und den Rollen), akzeptierte Regeln, hinzugefügte oder entfernte Rollen, Spitznamen, Server-Avatare, entfernte inaktive Mitglieder und Boosts. |
| **Nachrichten** | Gelöschte Nachrichten, mit der Angabe, wer sie gelöscht hat, bearbeitete Nachrichten, Massenlöschungen, angeheftete oder losgelöste Nachrichten. |
| **Sprachkanäle** <span className="badge-premium">Premium</span> | Beitritte, Austritte mit der Dauer der Sitzung, Kanalwechsel, Mikrofon, Ton, Kamera und Bildschirmübertragung. Die Aktionen des Teams (stummschalten, Ton deaktivieren, verschieben, trennen) werden gesondert erfasst, mit ihrem Urheber. Gestartete, geänderte oder beendete Stages sowie Mitglieder, die das Wort ergreifen oder die Hand heben. |
| **Emojis und Reaktionen** | Erstellte, geänderte oder gelöschte Emojis, Sticker und Soundboard-Sounds. Hinzugefügte oder entfernte Reaktionen sind [Premium](/de/premium) vorbehalten und standardmäßig deaktiviert. |

Eine bearbeitete Nachricht zeigt den Zustand davor und danach. Bei einer langen Nachricht werden nur die geänderten Zeilen angezeigt.

Hat der Urheber einer Aktion einen **Grund** angegeben (sichtbar im Audit-Log von Discord), erscheint er im Log. Rollenbezogene Logs haben eine Schaltfläche „**Rolle**“, die ihr Profil [`/roleinfo`](./utilities.mdx#roleinfo) öffnet.

Von RaidProtect selbst gelöschte Nachrichten (Anti-Spam, HoneyPot, Betrugsschutz, `/clear`) bleiben in den Logs des betreffenden Moduls, ohne Dopplung.

## 🎨 Log-Format {#format}

Wählen Sie das Format unter „**Log-Format**“ auf demselben Bildschirm.

| Format | Darstellung |
| --- | --- |
| **Standard** | Die Uhrzeit, das Symbol, die Erwähnungen mit ihrem Namen, dann die Details. |
| **Eingerahmt** | Ein farbiger Kasten pro Log, mit seinem Titel und den Details. |
| **Kompakt** <span className="badge-premium">Premium</span> | Eine Zeile pro Log: die Uhrzeit, das Symbol und die Erwähnungen. |

Ein Server, der Premium verliert, wechselt zurück zum Format Standard. Seine Wahl bleibt für seine Rückkehr gespeichert.

## 💾 Gespeicherte Nachrichten {#cache}

Um den Inhalt einer gelöschten Nachricht wiederzufinden, hält RaidProtect die neuesten Nachrichten im Speicher: **15 Minuten** in der kostenlosen Version, **6 Stunden** mit [Premium](/de/premium). Danach gibt der Log an, dass der Inhalt nicht gespeichert wurde.

Mit Premium werden auch die Anhänge gelöschter Nachrichten in den Log kopiert (10 MB pro Datei, 100 MB pro Server, die ältesten werden zuerst ersetzt).
