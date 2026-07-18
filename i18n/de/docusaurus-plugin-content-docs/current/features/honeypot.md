---
title: HoneyPot
---

import HoneypotMockup from '@site/src/components/DiscordMessage/mockups/honeypot';

<HoneypotMockup />

Der **HoneyPot** (oder Fallenkanal) von RaidProtect ist ein Kanal, in dem **niemand schreiben sollte**. Da echte Mitglieder wissen, dass dieser Kanal zu meiden ist, sind die Einzigen, die dort posten, **gehackte Konten** oder Spam-Bots: RaidProtect sanktioniert sie automatisch.

:::info
**Sie haben ScamLens bereits standardmäßig.** Der Betrugsschutz [ScamLens](/blog/scamlens-early-activation) ist ohne jede Konfiguration auf Ihrem Server aktiv: Auf **Betrugsbilder** spezialisiert, erkennt er sie, entfernt sie und sanktioniert das kompromittierte Konto mit sehr hoher Zuverlässigkeit. Für Betrugsmaschen per Bild reicht ScamLens also völlig aus. Der HoneyPot ist vor allem dann nützlich, wenn Sie maximale Sicherheit wollen und die **anderen Spam-Arten** blockieren möchten: Link-Spam, Text-Raids, Bots.
:::

## ❓ Wie funktioniert es? {#working}

Wenn Sie den HoneyPot aktivieren, erstellt RaidProtect einen Textkanal **ganz oben auf Ihrem Server** mit einem klaren, zufällig gewählten Namen. Dieser Kanal hat drei Eigenschaften:
- **Jeder kann dort schreiben**, einschließlich der Mitglieder, die das Captcha noch nicht bestätigt haben. Das ist Absicht: Ein gehacktes Konto oder ein Bot soll die Falle nicht umgehen können.
- **Eine Warnnachricht** wird bei der Erstellung des Kanals gepostet, mit einer Schaltfläche „Übersetzen", damit jeder sie in seiner Sprache lesen kann.
- **Ein öffentlicher Zähler** zeigt die Anzahl der bereits von der Falle gefangenen Konten an und wird automatisch aktualisiert.

Sobald ein Mitglied in diesem Kanal postet:
- RaidProtect wendet die **von Ihnen gewählte Sanktion** an (Bann, Softban, Kick, Timeout, Jail oder Mute).
- Die **in den letzten 10 Minuten von diesem Mitglied gesendeten Nachrichten** werden auf dem gesamten Server gelöscht, um den Spam zu stoppen, falls er sich bereits in andere Kanäle ausgebreitet hat.
- Die Aktion wird den Logs der automatischen Moderation hinzugefügt (Grund: *Spam über kompromittiertes Benutzerkonto*).

## 🛠️ Den HoneyPot einrichten {#config}

1. Führen Sie den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicken Sie auf die Schaltfläche „**HoneyPot**".
3. Klicken Sie auf „**Kanal erstellen**": RaidProtect erstellt den Kanal, richtet die Berechtigungen ein und postet die Warnnachricht.

Sobald der Kanal erstellt ist, können Sie:
- **Den Kanal regenerieren**: Löscht den alten und erstellt einen neuen (mit einem neuen Namen). Nützlich, wenn Sie vermuten, dass ein Mitglied den Namen des Fallenkanals geteilt hat, um anderen Konten zu helfen, ihn zu vermeiden.
- **Deaktivieren**: Löscht den Kanal und stoppt die Funktion.

### Die Sanktion auswählen {#sanction}

Mehrere Sanktionen stehen zur Verfügung:

| Sanktion | Wirkung | Verfügbarkeit |
|---|---|---|
| **Bann** | Schließt das Mitglied vom Server aus und löscht seine letzten Nachrichten | Kostenlos |
| **Softban** | Bannt und entbannt: löscht die Nachrichten, das Mitglied kann jedoch zurückkehren | Kostenlos |
| **Kick (Ausschluss)** | Schließt das Mitglied aus, das frei zurückkehren kann | Premium |
| **Timeout** | Verhindert, dass das Mitglied für eine gewählte Zeit spricht (max. 28 Tage) | Premium |
| **Jail** | Weist die auf Ihrem Server konfigurierte Jail-Rolle zu | Premium |
| **Mute** | Weist die auf Ihrem Server konfigurierte Mute-Rolle zu | Premium |

Für Sanktionen mit Dauer (Bann, Timeout, Jail, Mute) können Sie eine **gebrauchsfertige Dauer** wählen (von 5 Minuten bis 28 Tagen) oder eine **benutzerdefinierte Dauer** über die entsprechende Schaltfläche (zum Beispiel `5m`, `1h`, `2d`; Minimum 1 Minute).

:::tip
Der **Softban** ist ein guter Kompromiss: Er räumt die Nachrichten auf und schließt das gehackte Konto aus, aber der legitime Besitzer kann zurückkehren, sobald er sein Konto gesichert hat.
:::

:::info
Nur **Bann** und **Softban** ermöglichen es Discord, die Nachrichten des gehackten Kontos **überall auf dem Server** auf einen Schlag nativ zu löschen.  
Für die anderen Sanktionen (Kick, Timeout, Jail, Mute) muss RaidProtect eine manuelle kanalübergreifende Löschung vornehmen, die botseitig deutlich aufwändiger ist; sie sind daher Premium-Servern vorbehalten.
:::

### Ignorierte Mitglieder {#ignore}

Sie können wählen, **wer bei einer Nachricht im HoneyPot nicht sanktioniert wird**:
- **Niemand** *(Standard)*: Alle werden sanktioniert, sogar das Staff-Team. Nur Mitglieder, die der Bot nicht moderieren kann (Rolle höher als die von RaidProtect), werden automatisch verschont.
- **Staff**: Mitglieder mit der Berechtigung `Administrator`, `Server verwalten` oder `Kanäle verwalten` werden nicht sanktioniert.
- **Vom Antispam ignorierte Mitglieder**: RaidProtect verwendet die Liste des [Anti-Spam](./anti-spam.mdx) erneut. Ist die Liste leer, fällt der Modus auf „Staff" zurück.

:::info
In allen Fällen sanktioniert RaidProtect **niemals sich selbst oder andere Bots**. Bots lösen den HoneyPot nicht aus.
:::

## 🤝 HoneyPot und ScamLens, gemeinsam besser {#scamlens-combo}

RaidProtect integriert bereits **[ScamLens](/blog/scamlens-early-activation)**, das Bilder analysiert und diejenigen entfernt, die bekannte Betrugsmaschen sind (Krypto, gefälschte Giveaways, gefälschte Casino-Werbung).

Beide arbeiten Hand in Hand:
- **ScamLens kommt zuerst.** Wenn das im HoneyPot gepostete Bild bereits bekannt ist, entfernt ScamLens die Nachricht und sanktioniert das kompromittierte Konto; die Sanktion des HoneyPot kommt dann nicht zusätzlich zur Anwendung.
- **Der HoneyPot übernimmt** den gesamten Rest: neue, noch nicht bekannte Bilder, Link-Spam, Massen-Erwähnungen, Text-Raids, Bots.
- **Jedes neue, von einem HoneyPot abgefangene Bild bereichert ScamLens**, das es anschließend auf allen geschützten Servern blockieren kann.

ScamLens ist auf Ihrem Server bereits standardmäßig aktiv. **Den HoneyPot zu aktivieren, macht nichts kaputt**: Es ergänzt nur das bereits Bestehende und hilft RaidProtect, die gesamte Community besser zu schützen.
