---
title: Automod
description: "Der Automod von RaidProtect entfernt automatisch Betrugsbilder, Dateien mit abgelehnten Endungen und Verweise auf andere Discord-Server: Einladungen, weitergeleitete Nachrichten, Kanal- oder Event-Links und Server-Tags."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

Der **Automod** von RaidProtect bündelt die Filter, die unerwünschte Inhalte automatisch entfernen, sobald sie gepostet werden. Jeder Filter hat seine eigene Sanktion für den Autor der Nachricht.

So öffnen Sie ihn:

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Schutz**“.
3. Klicken Sie neben „**Automod**“ auf „**Konfigurieren**“.

<Settings start="automod" />

## 🖼️ Betrugsbilder {#images}

Der Filter **Bilder** löscht bekannte Betrugsbilder (Krypto-Betrug, gefälschte Giveaways, gefälschte Casino-Werbung) und sanktioniert ihren Autor. Er ist **standardmäßig aktiv**, ohne jede Konfiguration.

Alle Details, die Sanktion und der Bilderkatalog stehen auf der Seite [Betrugsbilder](./scam-images.md).

## 🔗 Andere Server {#servers}

Der Filter **Andere Server** kontrolliert alles, was auf andere Discord-Server verweist: **Einladungen**, **weitergeleitete Nachrichten**, **Kanallinks** und **Event-Links** sowie die von Ihren Mitgliedern angezeigten **Server-Tags**. Er blockiert wilde Werbung und konkurrierende oder bösartige Server, ohne Ihre Partner zu beeinträchtigen.

### Wie funktioniert es? {#servers-working}

Drei Verhaltensweisen lassen sich getrennt einstellen, jeweils in einem dieser Modi:

- „**Deaktiviert**“: Es wird nichts gefiltert.
- „**Sperrliste**“: Die Server der Liste werden abgelehnt, alle anderen kommen durch.
- „**Zulassungsliste**“: Nur die Server der Liste kommen durch, alle anderen werden abgelehnt.

| Verhalten | Was bei einer Ablehnung geschieht |
|---|---|
| **Einladung** | Die Nachricht mit der Einladung wird gelöscht. Auch `ptb.`- und `canary.`-Links zählen, und Einladungen, die in einem Embed, einer Komponente oder einer weitergeleiteten Nachricht versteckt sind, werden gelesen, ebenso nachträglich bearbeitete Nachrichten. |
| **Weitergeleitete Nachricht oder Kanallink** | Die von diesem Server weitergeleitete Nachricht oder die Nachricht mit einem Link zu einem seiner Kanäle oder Events wird gelöscht. |
| **Angezeigter Server-Tag** | Das Mitglied wird mit der [Jail-Rolle](./sanctions.mdx#jail) in **Quarantäne** gesetzt. Sie wird aufgehoben, sobald es den Tag entfernt. |

Ihr eigener Server kommt immer durch, mit jeder seiner Einladungen, und Ihr Team (Berechtigungen **Server verwalten** oder **Nachrichten verwalten**) wird nie erfasst.

### Konfiguration {#servers-config}

1. Klicken Sie im Automod neben „**Andere Server**“ auf „**Konfigurieren**“.
2. Aktivieren Sie den Filter mit dem Schalter oben rechts und wählen Sie dann für jedes Verhalten einen Modus.

<Settings start="serverRefs" />

#### Freundes- und Gruppeneinladungen <span className="badge-premium">Premium</span> {#servers-private}

Eine Freundes- oder private Gruppeneinladung führt zu keinem Server. Unter dem Modus „**Einladung**“ (sobald er nicht auf „**Deaktiviert**“ steht) regelt die Auswahl „**Freundes- und Gruppeneinladungen**“ ihr Schicksal separat:

- „**Liste folgen**“ *(Standard)*: Mit Sperrliste sind sie erlaubt, mit Zulassungsliste werden sie gelöscht.
- „**Immer erlaubt**“: akzeptiert, unabhängig von der Liste.
- „**Immer gelöscht**“: gelöscht, unabhängig von der Liste.

Ohne Premium folgen sie immer der Liste.

:::tip
Wenn Sie den Bildschirm eines Filters verlassen, den Sie geändert, aber nicht aktiviert haben, schlägt RaidProtect Ihnen vor, ihn vor dem Verlassen zu aktivieren („**Deaktiviert lassen**“ ist vorausgewählt).
:::

### Sanktion {#servers-sanction}

Jede abgelehnte Nachricht wird gelöscht. Wählen Sie unter „**Sanktion für gelöschte Nachrichten**“ zusätzlich eine Sanktion für ihren Autor oder „**Nur Nachricht löschen**“. Bei einem Timeout, Mute, Jail oder Bann wählen Sie außerdem die Dauer.

Die Sanktion wird höchstens einmal pro Minute und Mitglied angewendet: Ein Mitglied, das mehrere Einladungen hintereinander einfügt, wird nur einmal sanktioniert.

### Serverlisten {#servers-lists}

1. Klicken Sie auf „**Server hinzufügen**“.
2. Fügen Sie eine noch gültige Einladung des Servers ein (z. B. `discord.gg/beispiel`): Name und ID werden daraus gelesen. Eine ID allein wird nicht mehr akzeptiert.
3. Wählen Sie die Liste: Sperrliste oder Zulassungsliste.

Ein bereits vorhandener Server wechselt einfach die Liste. Mit „**Entfernen**“ nehmen Sie einen oder mehrere Server aus den Listen.

**Grenzen:** 25 Server insgesamt in beiden Listen.

:::tip
Um nur die Einladungen Ihrer Partner zuzulassen, stellen Sie „**Einladung**“ auf „**Zulassungsliste**“ und fügen Sie Ihre Partner der Zulassungsliste hinzu. Eine leere Zulassungsliste lehnt alle Einladungen zu anderen Servern ab.
:::

### Logs {#servers-logs}

Jede Sanktion und jede Quarantäne wird in Ihren [Moderationslogs](./moderation.mdx#logs) festgehalten, mit dem betroffenen Server und Kanal. Eine ohne Sanktion gelöschte Nachricht („**Nur Nachricht löschen**“) wird ebenfalls festgehalten. Die Sanktionen erscheinen im [Sanktionsverlauf](./sanctions.mdx) mit den Gründen „Einladung zu einem Server abgelehnt“, „Freundes- oder Gruppeneinladung abgelehnt“ (Premium), „Weitergeleitete Nachricht oder Kanallink eines Servers abgelehnt“ oder „Tag eines Servers abgelehnt“.

## 📎 Dateiendungen {#files}

Der Filter **Dateiendungen** löscht Dateien, deren Endung abgelehnt wird. Sie können bestimmte Endungen sperren (Sperrliste) oder nur bestimmte zulassen (Zulassungsliste), auf dem ganzen Server oder Kanal für Kanal. Ihr Team (Berechtigungen **Server verwalten** oder **Nachrichten verwalten**) wird nie erfasst.

Auch die Dateien einer weitergeleiteten Nachricht zählen, und ein Thread folgt den Regeln seines Kanals.

### Konfiguration {#files-config}

1. Klicken Sie im Automod neben „**Dateiendungen**“ auf „**Konfigurieren**“.
2. Aktivieren Sie den Filter mit dem Schalter oben rechts.
3. Wählen Sie unter „**Ganzer Server**“ einen Modus: „**Deaktiviert**“, „**Sperrliste**“ oder „**Zulassungsliste**“.
4. Kreuzen Sie **Gruppen** an (Ausführbare Dateien, Bilder, Videos, Audio, Archive, Dokumente) und/oder geben Sie weitere Endungen durch Kommas getrennt ein, zum Beispiel `exe, msi`. Der Punkt ist optional. Eine Regel akzeptiert höchstens 50 freie Endungen, zusätzlich zu den Gruppen.

<Settings start="files" />

:::warning
Eine Zulassungsliste ohne Endung akzeptiert keine Datei: Jede gesendete Datei wird gelöscht.
:::

### Regeln pro Kanal und pro Kategorie {#files-channels}

Klicken Sie auf „**Kanal hinzufügen**“, um einem Kanal, einem Thread oder einer Kategorie eine Regel zu geben. Eine Kategorieregel gilt für alle ihre Kanäle.

Die Regeln addieren sich, außer bei einer Endung, die von mehreren Regeln genannt wird: Dann entscheidet die **genaueste** Regel (Kanal, dann Kategorie, dann Server). Zum Beispiel kommt eine in einem Kanal erlaubte `.exe` trotz der Sperrliste des Servers durch. Eine Endung, die keine Regel nennt, kommt durch alle Regeln.

| | Kostenlos | <span className="badge-premium">Premium</span> |
|---|---|---|
| **Regeln pro Kanal** | 1 (der erste eingestellte Kanal) | 20 Kanäle oder Kategorien |
| **Kategorieregel** | Nein | Ja |

Ohne Premium werden die überzähligen Regeln behalten, sind aber inaktiv.

### Beschädigte Dateien {#files-disguised}

Eine umbenannte Datei, die sich als Bild oder Video ausgibt (eine in `.png` umbenannte `.exe`), wird erkannt: Discord kann sie nicht als echtes Bild lesen. Eine Zulassungsliste lehnt sie immer ab. Die Option „**Beschädigte Dateien immer ablehnen**“ löscht sie auch in allen Kanälen, selbst ohne Zulassungsliste.

### Sanktion {#files-sanction}

Jede abgelehnte Datei wird mit ihrer Nachricht gelöscht. Wählen Sie unter „**Sanktion für gelöschte Nachrichten**“ zusätzlich eine Sanktion für ihren Autor oder „**Nur Nachricht löschen**“. Die Sanktion wird höchstens einmal pro Minute und Mitglied angewendet.

Jede gelöschte Nachricht wird in Ihren [Moderationslogs](./moderation.mdx#logs) festgehalten, mit der Datei, dem Kanal und der betroffenen Endung. Die Sanktionen erscheinen im [Sanktionsverlauf](./sanctions.mdx) mit dem Grund „Datei mit abgelehnter Endung“.

## Häufig gestellte Fragen {#faq}

### Können meine Partner weiterhin ihre Einladung teilen?

Ja. Fügen Sie sie der Zulassungsliste des Filters „Andere Server“ hinzu oder lassen Sie sie außerhalb der Sperrliste.

### Was passiert, wenn ein Mitglied den abgelehnten Tag entfernt?

Seine Quarantäne wird automatisch aufgehoben.

### Werden Moderatoren gefiltert?

Nein. Mitglieder mit der Berechtigung „Server verwalten“ oder „Nachrichten verwalten“ werden vom Filter „Andere Server“ nie erfasst.
