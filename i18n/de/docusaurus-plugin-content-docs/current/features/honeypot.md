---
title: HoneyPot
description: "Der HoneyPot von RaidProtect ist ein Anti-Spam-Fallenkanal, der gehackte Konten und Spam-Bots auf Ihrem Discord-Server automatisch erkennt und ahndet."
---

import HoneypotMockup from '@site/src/components/DiscordMessage/mockups/honeypot';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

<HoneypotMockup />

Der **HoneyPot** (oder Fallenkanal) von RaidProtect ist eine Anti-Spam-Funktion: ein Kanal, in dem **[niemand schreiben sollte](/de/learn/honeypot-warming)**. Da echte Mitglieder wissen, dass dieser Kanal zu meiden ist, sind die Einzigen, die dort posten, **[gehackte Konten](/de/learn/token-grabber)** oder Spam-Bots: RaidProtect sanktioniert sie automatisch.

:::info
**Sie haben ScamLens bereits standardmäßig.** Der Betrugsschutz [ScamLens](./scam-images.md) ist ohne jede Konfiguration auf Ihrem Server aktiv: Auf **Betrugsbilder** spezialisiert, erkennt er sie, entfernt sie und sanktioniert das kompromittierte Konto mit sehr hoher Zuverlässigkeit. Für Betrugsmaschen per Bild reicht ScamLens also völlig aus. Der HoneyPot ist vor allem dann nützlich, wenn Sie maximale Sicherheit wollen und die **anderen Spam-Arten** blockieren möchten: Link-Spam, Text-Raids, Bots.
:::

## ❓ Wie funktioniert es? {#working}

Wenn Sie den HoneyPot aktivieren, erstellt RaidProtect einen Textkanal **ganz oben auf Ihrem Server** mit einem klaren, zufällig gewählten Namen. Dieser Kanal hat drei Eigenschaften:
- **Jeder kann dort schreiben**, einschließlich der Mitglieder, die das Captcha noch nicht bestätigt haben, und derjenigen mit der [Jail-Rolle](./sanctions.mdx#jail). Das ist Absicht: Ein gehacktes Konto oder ein Bot soll die Falle nicht umgehen können.
- **Eine Warnnachricht** („SENDE HIER KEINE NACHRICHT“) wird bei der Erstellung des Kanals gepostet, mit einer Schaltfläche „**Translate**“, damit jeder sie in seiner Sprache lesen kann.
- **Ein Zähler gemeldeter Konten** erscheint ab dem ersten gefangenen Konto als Schaltfläche neben „**Translate**“.

Sobald ein Mitglied in diesem Kanal postet:
- RaidProtect wendet die **von Ihnen gewählte Sanktion** an (Bann, Softban, Kick, Timeout, Jail oder Mute), ohne ihm eine Privatnachricht zu senden.
- Die **in den letzten 10 Minuten von diesem Mitglied gesendeten Nachrichten** werden auf dem gesamten Server gelöscht, um den Spam zu stoppen, falls er sich bereits in andere Kanäle ausgebreitet hat.
- Die Aktion wird den Logs der automatischen Moderation hinzugefügt (Grund: *Spam über kompromittiertes Benutzerkonto*).

Wenn Sie eine [Frist vor der Sanktion](#grace) gewählt haben, hat das Mitglied zuerst die Möglichkeit zu sagen, dass es ein Irrtum war.

## 🛠️ Den HoneyPot einrichten {#config}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Schutz**“.
3. Klicken Sie neben „**HoneyPot**“ auf „**Konfigurieren**“.
4. Klicken Sie oben rechts auf „**Aktivieren**“: RaidProtect erstellt den Kanal, richtet die Berechtigungen ein und postet die Warnnachricht.

<Settings start="honeypot" />

Sobald der Kanal erstellt ist, können Sie:
- **Kanal regenerieren** (Schaltfläche neben „**HoneyPot-Kanal**“): Löscht den alten und erstellt einen neuen (mit einem neuen Namen). Nützlich, wenn Sie vermuten, dass ein Mitglied den Namen des Fallenkanals geteilt hat, um anderen Konten zu helfen, ihn zu vermeiden.
- **Deaktivieren** (Schalter oben rechts): Löscht den Kanal und stoppt die Funktion.

:::warning Erforderliche Berechtigungen
RaidProtect benötigt die Berechtigungen `Kanäle verwalten` und `Mitglieder bannen`. Ohne sie wird ein Fehlerkasten angezeigt und die Schaltflächen bleiben ausgegraut.
:::

### Die Sanktion auswählen {#sanction}

Standardmäßig wendet der HoneyPot einen **Softban** an. Mehrere [Sanktionen](/de/learn/discord-sanctions) stehen in der Auswahl „**Angewandte Sanktion**“ zur Verfügung:

| Sanktion | Wirkung | Verfügbarkeit |
|---|---|---|
| **Bann** | Schließt das Mitglied vom Server aus und löscht seine letzten Nachrichten. Temporär (standardmäßig 1 Tag). | Kostenlos |
| **Softban** | Bannt und entbannt: löscht die Nachrichten, das Mitglied kann jedoch zurückkehren | Kostenlos |
| **Kick (Ausschluss)** | Schließt das Mitglied aus, das frei zurückkehren kann | Premium |
| **Timeout** | Verhindert, dass das Mitglied für eine gewählte Zeit spricht (max. 28 Tage) | Premium |
| **Jail** | Weist die auf Ihrem Server konfigurierte [Jail-Rolle](./sanctions.mdx#jail) zu | Premium |
| **Mute** | Weist die auf Ihrem Server konfigurierte [Mute-Rolle](./sanctions.mdx#mute) zu | Premium |

Für Sanktionen mit Dauer (Bann, Timeout, Jail, Mute) wählen Sie eine Dauer in der Auswahl „**Dauer**“: 5 Minuten, 1 Stunde, **1 Tag** (Standard) oder 28 Tage, oder „**Benutzerdefinierter Wert**“, um Ihre eigene einzugeben (zum Beispiel `5m`, `1h`, `2d`; Minimum 1 Minute). Die Auswahl ist beim Softban und beim Kick, die keine Dauer haben, ausgegraut.

:::tip
Der **Softban** ist ein guter Kompromiss: Er räumt die Nachrichten auf und schließt das gehackte Konto aus, aber der legitime Besitzer kann zurückkehren, sobald er sein Konto gesichert hat.
:::

:::info
Nur **Bann** und **Softban** ermöglichen es Discord, die Nachrichten des gehackten Kontos **überall auf dem Server** auf einen Schlag nativ zu löschen.  
Für die anderen Sanktionen (Kick, Timeout, Jail, Mute) löscht RaidProtect die Nachrichten selbst: Sie sind daher [Premium](/de/premium)-Servern vorbehalten.
:::

:::info
- Ein **Jail** oder **Mute** ohne konfigurierte Rolle wird zu einem **Timeout**. Die Auswahl weist unter der Sanktion darauf hin.
- Verliert Ihr Server das Premium, fällt eine Premium-Sanktion beim nächsten Auslösen automatisch auf **Softban** zurück.
:::

### Frist vor der Sanktion <span className="badge-experiment">Experiment</span> {#grace}

Ein gutgläubiges Mitglied kann versehentlich in den HoneyPot schreiben. Die **Frist vor der Sanktion** lässt ihm Zeit, dies zu melden, bevor es sanktioniert wird.

:::info Experiment: Shield Update
Die Frist vor der Sanktion gehört zur **Shield Update**, die für Version 3.6.0 vorgesehen ist. Bis zu ihrer Veröffentlichung befindet sie sich in der Experimentierphase, als öffentliche Beta für [Premium](/de/premium)-Server.
:::

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Schutz**“.
3. Klicken Sie neben „**HoneyPot**“ auf „**Konfigurieren**“.
4. Wählen Sie unter „**Frist vor der Sanktion**“ „**Sofortige Sanktion**“ (Standard) oder „**Erst nachfragen, Sanktion nach …**“ mit 30 Sekunden, 1 Minute, 2 Minuten oder 5 Minuten.

Mit einer Frist:
- wird die Nachricht **entfernt** und das Mitglied im Fallenkanal **erwähnt**, mit der Schaltfläche „**Das war ein Irrtum**“;
- nur dieses Mitglied kann auf die Schaltfläche klicken. Klickt es rechtzeitig, wird keine Sanktion angewendet;
- ohne Klick vor Ablauf der Frist greift die Sanktion.

:::info
Ein Spam-Bot postet in der Regel überall denselben Text. Ein Konto, das **dieselbe Nachricht** anderswo postet, wird **sofort** sanktioniert, ohne zu warten.
:::

### Ignorierte Mitglieder {#ignore}

Sie können in der Auswahl „**Ignorierte Mitglieder**“ wählen, **wer bei einer Nachricht im HoneyPot nicht sanktioniert wird**:
- „**Niemand (außer nicht moderierbare Mitglieder)**“ *(Standard)*: Alle werden sanktioniert, sogar das Staff-Team. Nur Mitglieder, die der Bot nicht moderieren kann (Rolle höher als die von RaidProtect), werden automatisch verschont.
- „**Staff (Admin / Server verwalten / Kanäle verwalten)**“: Mitglieder mit der Berechtigung `Administrator`, `Server verwalten` oder `Kanäle verwalten` werden nicht sanktioniert.
- „**Vom Antispam ignorierte Mitglieder**“: RaidProtect verwendet die ignorierten Rollen und Mitglieder des [Anti-Spam](./anti-spam.mdx#ignore) erneut. Ist diese Liste leer, werden Mitglieder mit der Berechtigung `Administrator`, `Server verwalten` oder `Nachrichten verwalten` ignoriert.

:::info
In allen Fällen sanktioniert RaidProtect **niemals sich selbst oder andere Bots**. Bots lösen den HoneyPot nicht aus.
:::

## ℹ️ Befehl /honeypot {#command}

Der Befehl `/honeypot` öffnet direkt den Konfigurationsbildschirm des HoneyPot, ohne den Umweg über `/settings`. Er erfordert die Berechtigung `Server verwalten`.

Verwenden Sie den Befehl: ```/honeypot```

## 🤝 HoneyPot und ScamLens, gemeinsam besser {#scamlens-combo}

RaidProtect integriert bereits **[ScamLens](./scam-images.md)**, das Bilder analysiert und diejenigen entfernt, die bekannte Betrugsmaschen sind (Krypto, gefälschte Giveaways, gefälschte Casino-Werbung).

Beide arbeiten Hand in Hand:
- **ScamLens kommt zuerst.** Wenn das im HoneyPot gepostete Bild bereits bekannt ist, entfernt ScamLens die Nachricht und sanktioniert das kompromittierte Konto; die Sanktion des HoneyPot kommt dann nicht zusätzlich zur Anwendung.
- **Der HoneyPot übernimmt** den gesamten Rest: neue, noch nicht bekannte Bilder, Link-Spam, Massen-Erwähnungen, Text-Raids, Bots.
- **Jedes neue, von einem HoneyPot abgefangene Bild bereichert ScamLens**, das es anschließend auf allen geschützten Servern blockieren kann.
- **ScamLens folgt Ihrem HoneyPot**: Solange Sie ihm keine eigene Einstellung geben, wendet es die [Sanktion und Dauer](./scam-images.md#config) Ihres HoneyPot an.

ScamLens ist auf Ihrem Server bereits standardmäßig aktiv. **Den HoneyPot zu aktivieren, macht nichts kaputt**: Es ergänzt nur das bereits Bestehende und hilft RaidProtect, die gesamte Community besser zu schützen.

## Häufig gestellte Fragen {#faq}

### Ist der HoneyPot nützlich, wenn ich bereits ScamLens habe?

Für Betrugsmaschen per Bild reicht ScamLens völlig aus: Es ist standardmäßig aktiv und erkennt, löscht und sanktioniert sie ganz von selbst. Der HoneyPot ist vor allem nützlich, um die anderen Spam-Arten zu blockieren, etwa Link-Spam, Text-Raids und Bots.

### Welche Sanktion wendet der HoneyPot an?

Standardmäßig einen Softban. Sie können eine andere Sanktion wählen: Bann und Softban sind kostenlos, während Kick, Timeout, Jail und Mute Premium-Servern vorbehalten sind. Der Bann des HoneyPot dauert standardmäßig 1 Tag, eine Dauer, die Sie ändern können.

### Ein Mitglied hat versehentlich in den HoneyPot geschrieben, was tun?

Aktivieren Sie die Frist vor der Sanktion: Die Nachricht wird entfernt, das Mitglied wird erwähnt und hat 30 Sekunden bis 5 Minuten Zeit, auf „Das war ein Irrtum“ zu klicken. Klickt es rechtzeitig, wird es nicht sanktioniert. Ein Konto, das dieselbe Nachricht anderswo gepostet hat, wird dagegen sofort sanktioniert.

### Werden Staff-Mitglieder sanktioniert, wenn sie in den HoneyPot schreiben?

Das hängt von der Option „Ignorierte Mitglieder“ ab. Standardmäßig werden alle sanktioniert, sogar das Staff-Team. RaidProtect sanktioniert sich nie selbst, und Bots lösen die Falle nie aus.

### Was passiert mit den Nachrichten eines vom HoneyPot gefangenen Kontos?

Zusätzlich zur Sanktion werden die in den letzten 10 Minuten von diesem Mitglied gesendeten Nachrichten auf dem gesamten Server gelöscht, um den Spam zu stoppen, falls er sich bereits in andere Kanäle ausgebreitet hat.
