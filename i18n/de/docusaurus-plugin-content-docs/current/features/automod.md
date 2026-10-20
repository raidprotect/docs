---
title: Automod
description: "Der Automod von RaidProtect entfernt automatisch Betrugsbilder und Verweise auf andere Discord-Server: Einladungen, weitergeleitete Nachrichten, Kanallinks und Server-Tags."
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

## 🔗 Andere Server <span className="badge-experiment">Experiment</span> {#servers}

Der Filter **Andere Server** kontrolliert alles, was auf andere Discord-Server verweist: **Einladungen**, **weitergeleitete Nachrichten** und **Kanallinks** sowie die von Ihren Mitgliedern angezeigten **Server-Tags**. Er blockiert wilde Werbung und konkurrierende oder bösartige Server, ohne Ihre Partner zu beeinträchtigen.

:::info Experiment: Shield Update
Der Filter „Andere Server“ gehört zur **Shield Update**, die für Version 3.6.0 vorgesehen ist. Bis zu ihrer Veröffentlichung befindet er sich in der Experimentierphase, als öffentliche Beta für [Premium](/de/premium)-Server.
:::

### Wie funktioniert es? {#servers-working}

Drei Verhaltensweisen lassen sich getrennt einstellen, jeweils in einem dieser Modi:

- „**Deaktiviert**“: Es wird nichts gefiltert.
- „**Sperrliste**“: Die Server der Liste werden abgelehnt, alle anderen kommen durch.
- „**Zulassungsliste**“: Nur die Server der Liste kommen durch, alle anderen werden abgelehnt.

| Verhalten | Was bei einer Ablehnung geschieht |
|---|---|
| **Einladung** | Die Nachricht mit der Einladung wird gelöscht. Auch `ptb.`- und `canary.`-Links zählen, und Einladungen, die in einem Embed, einer Komponente oder einer weitergeleiteten Nachricht versteckt sind, werden gelesen, ebenso nachträglich bearbeitete Nachrichten. |
| **Weitergeleitete Nachricht oder Kanallink** | Die von diesem Server weitergeleitete Nachricht oder die Nachricht mit einem Link zu einem seiner Kanäle wird gelöscht. |
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

## Häufig gestellte Fragen {#faq}

### Können meine Partner weiterhin ihre Einladung teilen?

Ja. Fügen Sie sie der Zulassungsliste des Filters „Andere Server“ hinzu oder lassen Sie sie außerhalb der Sperrliste.

### Was passiert, wenn ein Mitglied den abgelehnten Tag entfernt?

Seine Quarantäne wird automatisch aufgehoben.

### Werden Moderatoren gefiltert?

Nein. Mitglieder mit der Berechtigung „Server verwalten“ oder „Nachrichten verwalten“ werden vom Filter „Andere Server“ nie erfasst.
