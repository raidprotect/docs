---
title: Betrugsbilder
description: "ScamLens, der Anti-Scam-Schutz von RaidProtect, erkennt und entfernt Betrugsbilder auf Ihrem Discord-Server automatisch. Standardmäßig aktiv, ohne Einrichtung."
---

import AntiScamMockup from '@site/src/components/DiscordMessage/mockups/anti-scam';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect schützt Ihren Server automatisch vor **Betrugsbildern** (Krypto-Betrug, gefälschte Giveaways, gefälschte Casino-Werbung). Dieser Schutz heißt **ScamLens**: Er analysiert gepostete Bilder, löscht die, die bekannte Betrugsversuche sind, und sanktioniert das Konto hinter der Nachricht (oft ein [gehacktes Konto](/de/learn/token-grabber)).

<AntiScamMockup />

:::tip Keine Konfiguration nötig
ScamLens ist **standardmäßig aktiviert, sobald RaidProtect Ihrem Server beitritt**. Sie sind sofort geschützt, ohne etwas einzustellen.
:::

## ❓ Wie funktioniert es? {#working}

ScamLens vergleicht jedes gepostete Bild mit bekannten Betrugsversuchen. Vom Text der Nachrichten wird nichts gelesen.

Je nach gefundener Übereinstimmung:

- **Sichere Übereinstimmung**: Die Nachricht wird sofort **gelöscht** und ihr Autor **sanktioniert**. Das Sanktions-Log nennt den betroffenen Kanal.
- **Unsichere Übereinstimmung**: Die Nachricht wird **vorsichtshalber** gelöscht, ohne Sanktion. Wird das Bild später als Betrug bestätigt, kann die Sanktion nachträglich erfolgen.

Der Sanktionsgrund lautet „Betrug (Krypto-Bilder) erkannt“. Auf einem [Premium](/de/premium)-Server erhält das sanktionierte Mitglied außerdem eine Privatnachricht.

ScamLens kümmert sich nur um **Bilder**. Andere Spam-Arten werden vom [Anti-Spam](./anti-spam.mdx) und vom [HoneyPot](./honeypot.md) behandelt.

## 🔧 ScamLens konfigurieren {#config}

ScamLens wird im Modul **Automod** des Tabs „**Schutz**“ auf dem Bildschirm „**Bilderfilter**“ eingestellt.

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Schutz**“.
3. Klicken Sie neben „**Automod**“ auf „**Konfigurieren**“.
4. Klicken Sie neben „**Bilder**“ auf „**Konfigurieren**“.

<Settings start="imageFilter" />

### ScamLens aktivieren oder deaktivieren {#toggle}

Klicken Sie auf dem Bildschirm „**Bilderfilter**“ oben rechts auf „**Deaktivieren**“ (oder „**Aktivieren**“). Jede Änderung wird in Ihren Logs festgehalten.

### Die Sanktion und ihre Dauer wählen {#sanction}

Wählen Sie in der Auswahl „**Angewandte Sanktion**“:
- „**Standard**“: die Sanktion Ihres [HoneyPot](./honeypot.md#sanction), falls aktiv, andernfalls ein vorübergehender Ausschluss (Timeout);
- oder eine bestimmte Sanktion: Bann, Softban, Jail, Kick, Mute, Timeout oder Verwarnung.

Wählen Sie in der Auswahl „**Dauer der Sanktion**“ 5 Minuten, 1 Stunde, 1 Tag oder „**Benutzerdefinierter Wert**“ (zum Beispiel `30m`, `2h`, `7d`). Die Option „**Standard**“ folgt der Dauer Ihres HoneyPot, falls aktiv, andernfalls **1 Tag**. Eine hier gewählte Dauer gehört nur zu ScamLens, unabhängig vom Anti-Spam und vom HoneyPot. Sie gilt auch für später nachgeholte Sanktionen.

:::info
- Ein **Jail** oder **Mute** ohne konfigurierte Rolle wird zu einem **Timeout**.
- Die öffentliche Nachricht, die die Sanktion ankündigt, folgt der Einstellung „**Öffentliche Sanktionsnachricht**“ des [Anti-Spam](./anti-spam.mdx#public-message), mit Premium deaktivierbar.
:::

## 🗂️ Bilderkatalog <span className="badge-premium">Premium</span> {#catalog}

Zusätzlich zum globalen Katalog „Crypto Scam“, den wir pflegen und der auf allen Servern gilt, können [Premium](/de/premium)-Server **ihre eigenen Bilder** blockieren, unabhängig von ihrem Inhalt: Screenshots gefälschter Nitro-Angebote, Bilder eines Betrugs, der auf Ihre Community zielt, auf Ihrem Server verbotene Bilder …

**Grenzen:** 2 Listen pro Server, 10 Bilder pro Upload.

### Eine Liste erstellen {#lists}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Schutz**“.
3. Klicken Sie neben „**Automod**“ auf „**Konfigurieren**“.
4. Klicken Sie neben „**Bilder**“ auf „**Konfigurieren**“.
5. Klicken Sie unter „**Bilderkatalog**“ auf „**Liste erstellen**“ und geben Sie ihr einen Namen.
6. Wählen Sie den „**Verifizierungskanal**“ der Liste.
7. Klicken Sie auf „**Bilder hinzufügen**“ und senden Sie bis zu 10 Bilder. Das Ergebnis nennt die hinzugefügten Bilder, die zugeordneten Varianten, die ignorierten Duplikate und die abgelehnten Bilder.

Die Bilder einer Liste werden gelöscht, sobald sie auf Ihrem Server wieder auftauchen, und ihr Autor erhält die oben gewählte Sanktion. Der Grund der Sanktion nennt die Liste („Bild aus der Liste ‚_Name_‘“). Ohne Sanktion wird die Löschung in Ihren Moderationslogs festgehalten, mit Kanal und Liste.

:::warning Eine Liste = ein einziges Bilderregister
Legen Sie in einer Liste nur eine Art von Inhalt ab. Unzusammenhängende Bilder in einer Liste zu mischen verfälscht die Erkennung: Erstellen Sie stattdessen eine zweite Liste.
:::

### Verifizierungskanal {#review}

Ähnelt ein Bild einem Bild Ihrer Liste ohne sichere Übereinstimmung, melden wir es im **Verifizierungskanal** der Liste („Überprüfung erforderlich: Liste …“) mit zwei Schaltflächen:
- „**Bestätigen, es ist verboten**“: Das Bild kommt in den Katalog, die Nachricht wird gelöscht und ihr Autor sanktioniert;
- „**Verwerfen, es ist unbedenklich**“: Dieses Bild löst keine Prüfung mehr aus.

Zum Entscheiden ist die Berechtigung `Server verwalten` nötig. Ohne Verifizierungskanal bleiben unsichere Übereinstimmungen still.

## 📊 Transparenz {#reports}

Jeder von ScamLens blockierte Betrug:

- erscheint in den [Transparenz-Zusammenfassungen](./transparency.md#recaps) Ihres Servers („X von ScamLens blockierte Betrugsversuche“);
- wird im Zähler der gemeldeten Konten des [HoneyPots](./honeypot.md) mitgezählt;
- stärkt den Schutz **aller Server**, die RaidProtect nutzen.

### Unsere monatlichen Berichte {#recaps}

Jeden Monat veröffentlichen wir das **[Bedrohungswetter](/blog/tags/threats)**, eine öffentliche Bilanz der ScamLens-Aktivität. Kumulierte Zahlen seit dem [Start am 14. Februar 2026](/blog/scamlens-early-activation), über alle von RaidProtect geschützten Server:

| Bericht | Gelöschte Betrugsbilder | Erkannte gehackte Konten |
|---|---|---|
| [1-Monats-Bilanz](/blog/scamlens-1-month-recap) *(März 2026)* | 260.000 | 15.000 |
| [April 2026](/blog/threat-weather-april-2026) | 1.400.000 | 40.000 |
| [Mai 2026](/blog/threat-weather-may-2026) | 2.300.000 | 80.000 |
| [Juni 2026](/blog/threat-weather-june-2026) | 4.000.000 | 160.000 |

## Häufig gestellte Fragen {#faq}

### Muss man ScamLens konfigurieren?

Nein. ScamLens ist standardmäßig aktiviert, sobald RaidProtect Ihrem Server beitritt. Sie sind sofort geschützt, ohne etwas einzustellen.

### Blockiert ScamLens etwas anderes als Bilder?

Nein, ScamLens kümmert sich nur um Bilder. Standardmäßig blockiert es bekannte Betrugsbilder. Premium-Server können mit dem Bilderkatalog auch ihre eigenen Bilder hinzufügen. Andere Spam-Arten werden vom [Anti-Spam](./anti-spam.mdx) und vom [HoneyPot](./honeypot.md) behandelt.

### Welche Sanktion wird auf ein Betrugsbild angewendet?

Standardmäßig wendet ScamLens die Sanktion und Dauer Ihres [HoneyPot](./honeypot.md#sanction) an, oder einen Timeout von einem Tag, wenn der HoneyPot nicht aktiviert ist. Sie können in /settings, Tab Schutz, Modul Automod, Bildschirm Bilderfilter, eine andere Sanktion und eine andere Dauer wählen.

### Wie deaktiviert man ScamLens?

Klicken Sie in /settings, Tab Schutz, neben Automod auf „Konfigurieren“, dann neben Bilder, und verwenden Sie den Schalter oben rechts auf dem Bildschirm Bilderfilter.
