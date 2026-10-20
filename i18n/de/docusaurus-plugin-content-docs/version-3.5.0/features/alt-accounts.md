---
title: Zweitkonten
description: "Die Zweitkonten von RaidProtect verknüpfen die Konten ein und derselben Person auf Ihrem Discord-Server: Wird eines gebannt, werden die anderen mitgebannt, ohne Umgehung."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

Mit den **Zweitkonten** kann Ihr Team festlegen, dass mehrere Discord-Konten zu ein und derselben Person gehören. Die [Sanktionen](./sanctions.mdx) des einen erstrecken sich dann auf die anderen: Ein gebanntes Mitglied kommt nicht mehr mit einem zweiten Konto zurück, um seine Sanktion zu umgehen.

:::info Experiment: Identity Update
Die Zweitkonten gehören zur **Identity Update**, die für Version 3.7.0 vorgesehen ist. Bis zu ihrer Veröffentlichung befinden sie sich in der Experimentierphase, als öffentliche Beta für [Premium](/de/premium)-Server.
:::

## ❓ Wie funktioniert es? {#working}

- **Eine Gruppe pro Person**: Eine Gruppe vereint die Konten, die Ihr Team als ein und dieselbe Person betrachtet. Die Gruppen gehören zu Ihrem Server: Nichts wird mit anderen Servern geteilt.
- **Geteilte Sanktionen** ([Premium](/de/premium)): Bann, Kick, Mute, Jail und Timeout erstrecken sich auf die anderen Konten der Gruppe, je nach dem [Modus](#modes), den Sie für jede Sanktion wählen. Die Sanktion bleibt auf den Namen des betroffenen Kontos eingetragen, die anderen erhalten ihren Status. Ohne Premium lassen sich die Konten verknüpfen und einsehen, aber keine Sanktion wird ausgeweitet: Das Log der Sanktion nennt dann die anderen Konten des Mitglieds.
- **Gemeinsame Aufhebung**: Die Sanktion eines beliebigen Kontos aufzuheben, hebt sie für alle auf, mit oder ohne Premium.
- **Gruppierte Suche**: Die [Suche nach Sanktionen](./sanctions.mdx#search) eines Kontos zeigt auch die der anderen Konten der Gruppe.
- **AutoMod von Discord**: Die vom AutoMod von Discord verhängten Timeouts und Mutes erstrecken sich ebenfalls auf die verknüpften Konten.
- **Vom Captcha erkannt**: Die [Activity des Captchas](./captcha.md#activity-alts) kann zwei Konten, bei denen sie sicher ist, dass es dieselbe Person ist, selbst verknüpfen oder Ihrem Team die Verknüpfung vorschlagen.
- **Logs**: Verknüpfungen, Entfernungen und Wechsel des Hauptkontos werden in den [Moderationslogs](./moderation.mdx#logs) aufgezeichnet.

**Grenzen:** keine, weder bei der Anzahl der Konten pro Gruppe noch bei der Anzahl der Gruppen.

## 🔗 Konten mit /alt verknüpfen {#alt}

Verwenden Sie den Befehl: ```/alt [@mitglied] [@anderes]```

- Ohne Option: zeigt die Liste der Gruppen verknüpfter Konten des Servers an. Mit der Schaltfläche „**Zwei Konten verknüpfen**“ verknüpfen Sie dort zwei Mitglieder des Servers oder zwei nicht anwesende Konten über ihre Kennungen.
- Mit `[@mitglied]`: zeigt die Gruppe dieses Kontos an oder dieses Konto allein, wenn es mit keinem anderen verknüpft ist. Jedes Konto erscheint dort mit seinem Status (auf dem Server gebannt, auf dem Server, nicht auf dem Server, in Quarantäne), das Hauptkonto an erster Stelle.
- Mit `[@mitglied]` und `[@anderes]`: verknüpft die beiden Konten direkt, als dieselbe Person deklariert.

Ersetzen Sie `[@mitglied]` und `[@anderes]` durch die Erwähnung oder die [Kennung](../guides/id.mdx) der gewünschten Konten. Bots können nicht verknüpft werden.

Im Panel einer Gruppe:

- „**Mitglied verknüpfen**“ fügt der Gruppe ein Konto hinzu: ein Mitglied des Servers oder die Discord-Kennung eines Kontos, das nicht auf dem Server ist.
- Die Auswahl „**Ein Konto der Gruppe bearbeiten**“ öffnet ein Fenster, um es zum „**Hauptkonto der Gruppe**“ zu machen oder es mit „**Dieses Konto aus der Gruppe entfernen**“ zu entfernen. Ein entferntes Konto wird nicht mehr als dieselbe Person behandelt, aber wenn es mit der Gruppe gebannt wurde, bleibt es gebannt.

Die verknüpften Konten eines Mitglieds finden Sie auch in der [Moderationsansicht `/modview`](./moderation.mdx#modview), mit der Schaltfläche „**Verwalten**“.

:::info
Der Befehl `/alt` und seine Schaltflächen erfordern die Berechtigung **Mitglieder bannen**.
:::

## 🛠️ Die Zweitkonten einrichten {#config}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Moderation**“.
3. Klicken Sie neben „**Doppelkonten**“ auf „**Konfigurieren**“.

<Settings start="alts" />

### Sanktionen verknüpfter Konten <span className="badge-premium">Premium</span> {#modes}

Wählen Sie für jede Sanktion, wie sie sich auf die Gruppe erstreckt:

1. Klicken Sie auf dem Bildschirm Doppelkonten neben „**Sanktionen verknüpfter Konten**“ auf „**Bearbeiten**“.
2. Wählen Sie im Fenster für jede Sanktion einen Modus.

Mit der Auswahl „**Alle einstellen auf…**“ auf dem Bildschirm wenden Sie auf einen Schlag denselben Modus auf alle Sanktionen an.

<SettingsModal name="altsModes" />

| Modus | Wirkung | Betroffene Sanktionen |
|---|---|---|
| „**Sofort**“ *(Standard)* | Bann: Alle verknüpften Konten werden sofort gebannt, ob anwesend oder nicht. Kick: Die auf dem Server anwesenden verknüpften Konten werden ebenfalls gekickt. Mute, Jail und Timeout: Die anwesenden Konten werden sofort sanktioniert, die anderen bei ihrer Ankunft. | Alle |
| „**Anwesende sofort, die anderen bei Ankunft**“ | Die anwesenden Konten werden sofort gebannt, die nicht anwesenden, wenn sie dem Server während des Banns beitreten. | Bann |
| „**Falle**“ | Nur das betroffene Konto wird sanktioniert. Ein anderes Konto der Gruppe, das während der Sanktion ankommt oder schreibt, gilt als Umgehung und erhält die [Umgehungssanktion](#evasion). | Alle außer Kick |
| „**Deaktiviert**“ | Die Sanktion betrifft nur das gewählte Konto. | Alle |

### Gruppensanktion {#group-sanction}

Erstreckt sich eine Sanktion auf mehrere Konten, erscheint sie im Verlauf ([`/sanctions`](./sanctions.mdx#search), `/modview`) als **eine einzige Gruppensanktion** (zum Beispiel „**Gruppenbann**“), die die betroffenen Konten („**Konten**“) mit dem Status jedes einzelnen auflistet. Jedes Konto behält seine eigene Zeile, markiert mit „Teil der Gruppensanktion“. Das Abbrechen, Löschen oder Ändern (Grund, Dauer) der Gruppensanktion wirkt auf alle Konten gleichzeitig. Ein Konto sieht in `/meine-sanktionen` nur seine eigene Zeile.

### Sanktion bei Umgehung {#evasion}

Die Umgehungssanktion gilt für ein im Modus „**Falle**“ erwischtes verknüpftes Konto: Es kommt während der Sanktion seiner Gruppe auf den Server oder schreibt dort.

1. Klicken Sie auf dem Bildschirm Doppelkonten neben „**Sanktion bei Umgehung**“ auf „**Bearbeiten**“.
2. Wählen Sie im Fenster die „**Sanktion**“ und gegebenenfalls ihre „**Dauer**“.

<SettingsModal name="altsEvasion" />

- „**Rest der Sanktion**“ *(Standard)*: Das Konto teilt die Sanktion der Gruppe bis zu ihrem Ende, ohne Sanktion auf seinen Namen.
- **Eine Sanktion** (Bann, Kick, Mute, Jail oder Timeout): Sie wird auf seinen Namen verhängt, mit eigener Dauer, und wird nicht mit der Gruppe aufgehoben. Lassen Sie die Dauer leer für eine endgültige Sanktion (z. B. `1h`, `3d`, `2w`).

:::info
Ein Timeout erfordert immer eine Dauer von höchstens 28 Tagen. Mute und Jail erfordern, dass ihre [Rolle](./sanctions.mdx#config) konfiguriert ist.
:::

### Nur ein Konto pro Person {#single-account}

Mit dieser Einstellung bewegt sich nur das **Hauptkonto** jeder Gruppe auf dem Server. Die anderen Konten werden mit der [Jail-Rolle](./sanctions.mdx#jail) in **Quarantäne** gesetzt (Sanktion „**Quarantäne**“ im Verlauf). Sie verlassen sie von selbst, wenn sie zum Hauptkonto werden oder aus der Gruppe entfernt werden.

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Moderation**“.
3. Klicken Sie neben „**Doppelkonten**“ auf „**Konfigurieren**“.
4. Klicken Sie neben „**Nur ein Konto pro Person**“ auf „**Aktivieren**“.

:::warning
Diese Einstellung erfordert eine [Jail-Rolle](./sanctions.mdx#jail). Ohne sie weigert sich RaidProtect, sie zu aktivieren.
:::

Um das Hauptkonto einer Gruppe zu ändern, verwenden Sie `/alt` mit einem der Konten und dann die Auswahl „**Ein Konto der Gruppe bearbeiten**“.

## Häufig gestellte Fragen {#faq}

### Werden die Zweitkonten zwischen Servern geteilt?

Nein. Die Gruppen gehören zu Ihrem Server, und nichts wird mit anderen Servern geteilt.

### Was passiert, wenn ich eines der Konten entbanne?

Die Aufhebung der Sanktion eines Kontos hebt sie für alle Konten der Gruppe auf.

### Kann ich ein Konto verknüpfen, das nicht auf meinem Server ist?

Ja. Klicken Sie im `/alt`-Panel auf „**Mitglied verknüpfen**“ und geben Sie seine Discord-Kennung ein.

### Wer kann /alt verwenden?

Mitglieder mit der Berechtigung **Mitglieder bannen**, auf einem [Premium](/de/premium)-Server, solange sich die Identity Update in der Experimentierphase befindet.
