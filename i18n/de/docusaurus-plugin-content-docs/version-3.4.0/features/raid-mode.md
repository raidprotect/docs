---
title: Anti-Raid
description: "Der Raid-Modus von RaidProtect blockiert Massenbeitritte auf Ihrem Discord-Server sofort, automatisch ausgelöst, sobald eine verdächtige Welle erkannt wird."
---

import { RaidModeSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

import RaidModeMockup from '@site/src/components/DiscordMessage/mockups/raid-mode';

<RaidModeMockup />

## Raid-Modus {#raid-mode}

Der Raid-Modus von RaidProtect ist eine Notfallfunktion, die alle neuen Nutzer, die versuchen, Ihrem Server beizutreten, sofort für eine maximale Dauer von 24 Stunden blockiert. Unser Schutzbot aktiviert ihn selbst, sobald er eine verdächtige Beitrittswelle erkennt, und Sie können ihn auch manuell auslösen. Um neue Mitglieder dauerhaft zu blockieren, verwenden Sie den [`/joinlock`-Befehl](./join-lock.mdx).

### ❓ Wie funktioniert der Raid-Modus? {#working}

RaidProtect aktiviert den Raid-Modus automatisch, wenn eine große Anzahl von Nutzern Ihrem Server in kurzer Zeit beitritt. Standardmäßig wird der Raid-Modus aktiviert, wenn mehr als 10 Nutzer Ihrem Server in weniger als 10 Sekunden beitreten. Wenn der Raid-Modus aktiviert ist, kann kein Nutzer dem Server beitreten. Sie werden auf Einladungsebene blockiert.

:::warning
Die Community-Funktionen von Discord sind für die ordnungsgemäße Funktion des Raid-Modus unerlässlich. [Folgen Sie unserer Anleitung, um die Aktivierung der Community auf Ihrem Server zu überprüfen.](../guides/community.md)
:::

#### Aktivierung {#enable}

- Um diesen Modus manuell zu aktivieren, muss ein Nutzer mit Kick-Berechtigungen den Befehl `/raidmode` ausführen.
- Eine Nachricht wird automatisch im Log-Kanal veröffentlicht, um die Aktivierung zu signalisieren.

#### Deaktivierung {#disable}

Der Raid-Modus wird nicht automatisch deaktiviert. Denken Sie daran, ihn mit demselben Befehl zu stoppen, sobald die Bedrohung vorüber ist. 😇

:::info
Der Befehl `raidmode` ist [per Präfix verwendbar](../guides/prefix.md).
:::

### 🚨 Konfiguration des automatischen Raid-Modus {#config}

Wenn Ihr Server häufig viele neue Mitglieder gleichzeitig empfängt, ist es ratsam, diesen Schwellenwert anzupassen, um Fehlalarme zu vermeiden.

<RaidModeSettingsMockup />

#### Mitglieder-Schwellenwert {#threshold}

1. Führen Sie den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicken Sie auf die Schaltfläche „**Auto RaidMode**".
3. Wählen Sie „**Anzahl der Mitglieder**".
4. Wählen Sie die Anzahl der Mitglieder, die innerhalb von 10 Sekunden beitreten können.

Sie können den Standardwert (10) beibehalten oder ihn auf den gewünschten Wert anpassen, indem Sie auf die Schaltfläche „**Benutzerdefinierter Wert**" klicken.

:::note
Wir empfehlen, einen Wert zwischen 10 und 20 Mitgliedern in 10 Sekunden einzugeben, um eine gute Effektivität des Systems zu gewährleisten.
:::

#### Dauer des Raid-Modus {#duration}

1. Führen Sie den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicken Sie auf die Schaltfläche „**Auto RaidMode**".
3. Wählen Sie „**Dauer**".
4. Wählen Sie die Dauer des Raid-Modus (maximal 24 Stunden).

Sie können den Standardwert (5 Minuten) beibehalten oder ihn auf den gewünschten Wert anpassen, indem Sie auf die Schaltfläche „**Benutzerdefinierter Wert**" klicken.

#### DMs automatisch schließen {#close-dm}

Sie können den **Auto-Raid-Modus** so konfigurieren, dass er die **DMs des Servers automatisch schließt**, sobald er aktiviert wird. Das fügt während eines Raids eine zusätzliche Schutzschicht hinzu: Neue Konten können Ihre Mitglieder nicht mehr privat kontaktieren, um sie zu phishen oder zu betrügen.

1. Führen Sie den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicken Sie auf die Schaltfläche „**Auto RaidMode**".
3. Aktivieren Sie die Option „**DMs schließen**".

Wenn der Auto-Raid-Modus deaktiviert wird (manuell oder automatisch nach der konfigurierten Dauer), kehren die DMs zu ihrer vorherigen Konfiguration zurück.

:::info
Diese Option ergänzt die [dauerhafte DM-Schließung](./dm-lock.mdx): Wenn Sie sie ohne die dauerhafte Schließung aktivieren, werden die DMs nur während eines aktiven Raids geschlossen.
:::

#### Kick-Modus (Premium) {#kick-mode}

Standardmäßig blockiert der Raid-Modus die neuen Ankömmlinge auf Einladungsebene. Mit dem **Kick-Modus** werden Nutzer, die während eines Raids beitreten, von RaidProtect gekickt, anstatt bei der Einladung blockiert zu werden.

1. Führen Sie den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicken Sie auf die Schaltfläche „**Auto RaidMode**".
3. Aktivieren Sie die Option „**Kick-Modus**".

:::info
Diese Option ist [**Premium**](/de/premium)-Servern vorbehalten. Sie ist erforderlich, um den [Bypass des Raid-Modus](#bypass-raid) zu verwenden.
:::

### 🎫 Bypass des Raid-Modus {#bypass-raid}

Sie erwarten ein legitimes Mitglied, während ein Raid im Gange ist? Erlauben Sie ihm, trotz des Raid-Modus beizutreten:

Verwenden Sie den Befehl: ```/bypass raid [benutzer]```

Ersetzen Sie `[benutzer]` durch die gewünschte Kennung; diese Person hat dann 10 Minuten Zeit, dem Server beizutreten, ohne vom Raid-Modus gekickt zu werden. Sie können den Befehl auch ohne Angabe eines Nutzers verwenden, um die aktuelle Liste der Bypass-Nutzer anzuzeigen (maximal 7 Nutzer gleichzeitig).

:::warning
Der Bypass des Raid-Modus erfordert den [Kick-Modus](#kick-mode): Ein Nutzer, der auf Einladungsebene blockiert ist, kann nicht per Bypass zugelassen werden.
:::

## Mindestalter {#minage}

Um die Sicherheit zu erhöhen, können Sie ein Mindestalter für die Discord-Konten neuer Mitglieder verlangen.

1. Führen Sie den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicken Sie auf die Schaltfläche „**Mindestalter**".
3. Wählen Sie den gewünschten Wert im Auswahlmenü oder wählen Sie einen benutzerdefinierten Wert im Datumsformat (m/h/d/y).

### 🎂 Bypass des Mindestkontoalters {#bypass-minage}

Verwenden Sie den Befehl: ```/bypass minage [benutzer]```

Ersetzen Sie `[benutzer]` durch die gewünschte Kennung; diese Person hat dann 10 Minuten Zeit, dem Server beizutreten, ohne aufgrund des erforderlichen Alters gekickt zu werden. Sie können den Befehl auch ohne Angabe eines Nutzers verwenden, um die aktuelle Liste der Bypass-Nutzer anzuzeigen.

## Häufig gestellte Fragen {#faq}

### Aktiviert sich der Raid-Modus automatisch?

Ja. Standardmäßig aktivieren wir den Raid-Modus, sobald mehr als 10 Nutzer Ihrem Server in weniger als 10 Sekunden beitreten. Dieser Schwellenwert ist in den Einstellungen des Auto RaidMode konfigurierbar.

### Wie aktiviert man den Raid-Modus manuell?

Ein Nutzer mit Kick-Berechtigung führt den Befehl `/raidmode` aus. Anschließend wird eine Nachricht im Log-Kanal veröffentlicht, um die Aktivierung zu signalisieren, und kein Mitglied kann dem Server mehr beitreten.

### Deaktiviert sich der Raid-Modus von selbst?

Der manuell aktivierte Raid-Modus stoppt nicht automatisch: Denken Sie daran, ihn mit demselben Befehl zu deaktivieren, sobald die Bedrohung vorüber ist. Der Auto RaidMode hingegen schaltet sich nach der von Ihnen konfigurierten Dauer ab (standardmäßig 5 Minuten, maximal 24 Stunden).

### Kann man ein legitimes Mitglied während eines Raids beitreten lassen?

Ja, mit dem Befehl `/bypass raid [benutzer]`: Das Mitglied hat dann 10 Minuten Zeit, beizutreten, ohne gekickt zu werden (maximal 7 Bypass-Nutzer gleichzeitig). Der Bypass erfordert den Kick-Modus, der Premium-Servern vorbehalten ist.
