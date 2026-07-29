---
title: Installation
description: "Installieren und konfigurieren Sie RaidProtect in wenigen Minuten auf Ihrem Discord-Server mit dem Befehl /settings und dem Konfigurationsmenü."
---

RaidProtect vereinfacht die Verwaltung Ihres Servers dank zweier leistungsstarker Werkzeuge: dem Befehl [`/setup`](#install) für eine schrittweise geführte Konfiguration und dem Befehl [`/settings`](#settings), um Ihre Einstellungen jederzeit über ein zentrales Menü zu ändern. Diese Installationsanleitung erklärt Ihnen, wie Sie sie effektiv nutzen.

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

:::info Ein Konfigurationsproblem?
Falls Sie auf ein Problem stoßen, sehen Sie im Abschnitt [Fehlfunktionen](./guides/malfunctions) nach oder treten Sie unserem [Support-Server](https://raidprotect.bot/discord) bei, um Hilfe zu erhalten.
:::
