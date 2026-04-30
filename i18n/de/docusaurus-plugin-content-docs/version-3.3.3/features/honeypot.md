---
title: HoneyPot
---

Der **HoneyPot** (oder Fallenkanal) von RaidProtect ist ein Kanal, in dem **niemand schreiben sollte**. Da echte Mitglieder wissen, dass dieser Kanal zu meiden ist, sind die einzigen, die dort posten, **gehackte Konten** oder Spam-Bots: RaidProtect sanktioniert sie automatisch.

## ❓ Wie funktioniert es? {#working}

Wenn Sie den HoneyPot aktivieren, erstellt RaidProtect einen Textkanal **ganz oben auf Ihrem Server** mit einem klaren, zufällig gewählten Namen. Dieser Kanal hat drei Eigenschaften:
- **Jeder kann dort schreiben**, einschließlich Mitgliedern, die das Captcha noch nicht bestätigt haben. Das ist Absicht: Ein gehacktes Konto oder ein Bot soll die Falle nicht umgehen können.
- **Eine Warnnachricht** wird bei der Erstellung des Kanals gepostet, mit einer Schaltfläche „Übersetzen", damit jeder sie in seiner Sprache lesen kann.
- **Ein öffentlicher Zähler** zeigt die Anzahl der bereits durch die Falle gefangenen Konten an, automatisch aktualisiert.

Sobald ein Mitglied in diesem Kanal postet:
- RaidProtect wendet die **von Ihnen gewählte Sanktion** an (Bannung, Softban, Kick, Timeout, Jail oder Mute).
- Die **in den letzten 10 Minuten von diesem Mitglied gesendeten Nachrichten** werden auf dem gesamten Server gelöscht, um den Spam zu stoppen, falls er sich bereits in andere Kanäle ausgebreitet hat.
- Die Aktion wird den Logs der automatischen Moderation hinzugefügt (Grund: *Spam über kompromittiertes Benutzerkonto*).

:::info
Der HoneyPot arbeitet Hand in Hand mit [ScamLens](/de/blog/scamlens-early-activation), das Scam-Bilder entfernt, ohne das Konto zu bestrafen. Der HoneyPot fängt alles andere ab: **neue, noch nicht bekannte Scam-Bilder**, **Link-Spam**, **Text-Raids**, **Bots**.
:::

## 🛠️ HoneyPot einrichten {#config}

1. Führen Sie den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicken Sie auf die Schaltfläche „**HoneyPot**".
3. Klicken Sie auf „**Kanal erstellen**": RaidProtect erstellt den Kanal, konfiguriert die Berechtigungen und postet die Warnnachricht.

Sobald der Kanal erstellt ist, können Sie:
- **Den Kanal regenerieren**: Löscht den alten und erstellt einen neuen (mit einem neuen Namen). Nützlich, wenn Sie vermuten, dass ein Mitglied den Namen des Fallenkanals geteilt hat, um anderen Konten zu helfen, ihn zu vermeiden.
- **Deaktivieren**: Löscht den Kanal und stoppt die Funktion.

### Sanktion auswählen {#sanction}

Es stehen mehrere Sanktionen zur Verfügung:

| Sanktion | Wirkung | Verfügbarkeit |
|---|---|---|
| **Bannung** | Schließt das Mitglied vom Server aus und löscht seine letzten Nachrichten | Kostenlos |
| **Softban** | Bannt und entbannt: löscht die Nachrichten, das Mitglied kann jedoch zurückkehren | Kostenlos |
| **Kick (Ausschluss)** | Schließt das Mitglied aus, das frei zurückkehren kann | Premium |
| **Timeout** | Verhindert, dass das Mitglied für eine gewählte Zeit spricht (max. 28 Tage) | Premium |
| **Jail** | Weist die auf Ihrem Server konfigurierte Jail-Rolle zu | Premium |
| **Mute** | Weist die auf Ihrem Server konfigurierte Mute-Rolle zu | Premium |

Für Sanktionen mit Dauer (Bannung, Timeout, Jail, Mute) können Sie eine **vorgefertigte Dauer** wählen (von 5 Minuten bis 28 Tagen) oder eine **benutzerdefinierte Dauer** über die entsprechende Schaltfläche (zum Beispiel `5m`, `1h`, `2d`; Minimum 1 Minute).

:::tip
Der **Softban** ist ein guter Kompromiss: Er räumt die Nachrichten auf und schließt das gehackte Konto aus, aber der legitime Besitzer kann zurückkehren, sobald er sein Konto gesichert hat.
:::

:::info
Nur **Bannung** und **Softban** ermöglichen Discord, die Nachrichten des gehackten Kontos **überall auf dem Server** auf einmal nativ zu löschen.  
Für die anderen Sanktionen (Kick, Timeout, Jail, Mute) muss RaidProtect eine manuelle kanalübergreifende Löschung vornehmen, was botseitig deutlich aufwändiger ist; sie sind daher Premium-Servern vorbehalten.
:::

### Ignorierte Mitglieder {#ignore}

Sie können wählen, **wer nicht sanktioniert wird**, falls eine Nachricht im HoneyPot eingeht:
- **Niemand** *(Standard)*: Alle werden sanktioniert, sogar das Staff-Team. Nur Mitglieder, die der Bot nicht moderieren kann (Rolle höher als die von RaidProtect), werden automatisch verschont.
- **Staff**: Mitglieder mit den Berechtigungen `Administrator`, `Server verwalten` oder `Kanäle verwalten` werden nicht sanktioniert.
- **Vom Anti-Spam ignorierte Mitglieder**: RaidProtect verwendet die Liste des [Anti-Spam](./anti-spam.mdx) wieder. Wenn die Liste leer ist, fällt der Modus auf „Staff" zurück.

:::info
In allen Fällen sanktioniert RaidProtect **niemals sich selbst noch andere Bots**. Bots lösen den HoneyPot nicht aus.
:::

## 🤝 HoneyPot und ScamLens, gemeinsam besser {#scamlens-combo}

RaidProtect integriert bereits **[ScamLens](/de/blog/scamlens-early-activation)**, das Bilder analysiert und diejenigen entfernt, die bekannte Scams sind (Krypto, gefälschte Giveaways, gefälschte Casino-Werbung).

Beide arbeiten Hand in Hand:
- **ScamLens kommt zuerst.** Wenn das im HoneyPot gepostete Bild bereits bekannt ist, wird es entfernt, und der HoneyPot sanktioniert nicht.
- **Der HoneyPot übernimmt** den Rest: neue, noch nicht bekannte Bilder, Link-Spam, Massen-Erwähnungen, Text-Raids, Bots.
- **Jedes neue, von einem HoneyPot abgefangene Bild bereichert ScamLens**, das es dann auf allen geschützten Servern blockieren kann.

ScamLens ist auf Ihrem Server bereits standardmäßig aktiv. **Den HoneyPot zu aktivieren, macht nichts kaputt**: Es ergänzt nur das Bestehende und hilft RaidProtect, die gesamte Community besser zu schützen.
