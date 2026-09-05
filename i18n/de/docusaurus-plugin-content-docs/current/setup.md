---
title: Installation
description: "Installieren und konfigurieren Sie RaidProtect in wenigen Minuten auf Ihrem Discord-Server mit dem Befehl /settings und dem Konfigurationsmenü."
---

import Head from '@docusaurus/Head';

<Head>
  <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"RaidProtect auf einem Discord-Server einrichten","description":"Den Schutzbot RaidProtect mit den Befehlen /setup und /settings installieren und konfigurieren.","step":[{"@type":"HowToStep","position":1,"name":"/setup ausführen","text":"Geben Sie /setup in einem Kanal ein, in dem der Bot aktiv ist, um die geführte Konfiguration zu starten."},{"@type":"HowToStep","position":2,"name":"Empfohlene Konfiguration","text":"Wählen Sie „Empfohlene Konfiguration“ und aktivieren oder deaktivieren Sie die wichtigsten Funktionen über das Auswahlmenü."},{"@type":"HowToStep","position":3,"name":"Änderungen bestätigen","text":"Der Bot zeigt eine Zusammenfassung der aktivierten Funktionen und der Änderungen an, bevor er sie auf den Server anwendet."},{"@type":"HowToStep","position":4,"name":"Mit /settings anpassen","text":"Verwenden Sie /settings jederzeit, um Ihre Einstellungen einzusehen, zu ändern oder zurückzusetzen."}]}).replace(/</g, '\\u003c')}</script>
</Head>

RaidProtect vereinfacht die Verwaltung Ihres Servers dank zweier leistungsstarker Werkzeuge: dem Befehl [`/setup`](#install) für eine schrittweise geführte Konfiguration und dem Befehl [`/settings`](#settings), um Ihre Einstellungen jederzeit über ein zentrales Menü zu ändern. Diese Installationsanleitung erklärt Ihnen, wie Sie sie effektiv nutzen.

## Wo anfangen {#etapes}

Für einen Server, der bei null anfängt, ist dies die empfohlene Reihenfolge:

1. **Aktivieren Sie den Community-Modus von Discord** (Servereinstellungen, dann „Community aktivieren"). Das ist eine Voraussetzung für das [Captcha](./features/captcha) und den [Raid-Modus](./features/raid-mode).
2. **Führen Sie [`/setup`](#install) aus**: Hier wählen Sie über die empfohlene Konfiguration, welche Funktionen aktiviert werden. RaidProtect erstellt den Log-Kanal automatisch und wendet die Änderungen nach einer Zusammenfassung an.
3. **Stellen Sie den [Anti-Spam](./features/anti-spam) ein**: Seine Sanktionen lassen sich pro Spam-Art anpassen.
4. **Passen Sie jederzeit mit [`/settings`](#settings) an.**

## Geführte Installation {#install}

Der Befehl `/setup` wurde entwickelt, um Ihnen zu helfen, RaidProtect schnell oder über einen detaillierten Ansatz je nach Ihren Bedürfnissen zu konfigurieren.
<!--
Er bietet Ihnen zwei Konfigurationsmodi: [empfohlen](#recommended) oder [erweitert](#advanced).
-->

### 🔧 Empfohlene Konfiguration {#recommended}

Ermöglicht es, die wichtigsten Funktionen im Handumdrehen über ein interaktives Auswahlmenü zu aktivieren oder zu deaktivieren.

1. Führen Sie den Befehl `/setup` aus.
2. Wählen Sie die Schaltfläche "**Empfohlene Konfiguration**".
3. Aktivieren oder deaktivieren Sie die gewünschten Funktionen über das Auswahlmenü.

Der Bot sendet Ihnen anschließend eine Zusammenfassung der aktivierten Funktionen und der Änderungen, die er am Server vornehmen wird.

![Screenshot empfohlene Konfiguration](../../../en/docusaurus-plugin-content-docs/current/assets/rp-setup.webp)

<!--
### 🛠️ Erweiterte Konfiguration {#advanced}

Wenn Sie den Bot gründlicher konfigurieren möchten, entscheiden Sie sich für die erweiterte Konfiguration. Der Bot führt Sie Schritt für Schritt mit klaren Erklärungen.

1. Führen Sie den Befehl `/setup` aus.
2. Wählen Sie die Schaltfläche "**Erweiterte Konfiguration**".
3. Jeder Schritt stellt eine Funktion, ihren Nutzen und eine empfohlene Mindestkonfiguration vor.
4. Verwenden Sie die Schaltflächen "**Zurück**" und "**Weiter**", um vor- oder zurückzugehen.

Am Ende wird eine Zusammenfassung der Einstellungen angezeigt, um Ihre Auswahl zu bestätigen.
-->
## Konfiguration ändern {#settings}

Der Befehl `/settings` ist der Befehl zur Verwaltung Ihrer Einstellungen nach abgeschlossener Installation. Er ermöglicht es Ihnen, die Funktionen von RaidProtect jederzeit einfach und schnell einzusehen, anzupassen oder zu personalisieren.

### 🔍 Einstellungsmenü {#menu}

1. Geben Sie `/settings` in einem Kanal ein, in dem der Bot aktiv ist.
2. Navigieren Sie bequem zwischen den verschiedenen Bereichen, um die Einstellungen zu finden, die Sie ändern möchten.
3. Passen Sie die Optionen an: Jede Kategorie zeigt eine Liste anpassbarer Optionen in Form von Schaltflächen oder Dropdown-Menüs.

import SettingsMockup from '@site/src/components/DiscordMessage/mockups/settings';

<SettingsMockup />

### 🔄 Eine Einstellung zurücksetzen {#reset}

1. Navigieren Sie zur gewünschten Einstellung.
2. Klicken Sie auf "**Zurücksetzen**".

![Screenshot Schaltfläche Zurücksetzen](../../../en/docusaurus-plugin-content-docs/current/assets/rp-button-reset.webp)

Der Bot bestätigt das Zurücksetzen, bevor er die Änderungen übernimmt.

## Welche Konfiguration für Ihren Server? {#quelle-config}

Die empfohlene Konfiguration von `/setup` führt Sie bereits durch diese Entscheidungen. Wenn Sie bei null anfangen oder Ihre Einrichtung mit einer KI vorbereiten, finden Sie heraus, was zu Ihrem Server passt: Jeder Bedarf verweist auf die Funktion, die ihn abdeckt.

- **Raids, Wellen von Konten, die auf einen Schlag hereinströmen**: der [Raid-Modus](./features/raid-mode) schließt die Zugänge und sperrt die Kanäle für die Dauer des Angriffs.
- **Spam, Werbung, Betrugslinks**: der [Anti-Spam](./features/anti-spam) sanktioniert automatisch, und der [HoneyPot](./features/honeypot) fängt Spam-Konten ab.
- **Bots, die sich massenhaft anmelden**: das [Captcha](./features/captcha) lässt jeden Ankömmling beweisen, dass er ein Mensch ist.
- **Betrug per Bild** (gefälschte Giveaways, Phishing): [ScamLens](./features/scam-images) erkennt und entfernt ihn.
- **Ein Nuke-Risiko oder gehackte Staff-Konten**: wenden Sie die [geringsten Rechte](/de/learn/least-privilege) und den [Authentication Manager](./features/authentication-manager) an.
- **Eine Community, die Ihnen beim Moderieren helfen kann**: aktivieren Sie die [Meldungen](./features/reports).

Passen Sie anschließend die [Sanktionen](./features/sanctions) (Kick, Timeout, Bann, Jail) an Ihren Server an.

:::info Ein Konfigurationsproblem?
Falls Sie auf ein Problem stoßen, sehen Sie im Abschnitt [Fehlfunktionen](./guides/malfunctions) nach oder treten Sie unserem [Support-Server](https://raidprotect.bot/discord) bei, um Hilfe zu erhalten.
:::
