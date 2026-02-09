---
title: Anti-Raid
---

## Raid-Modus {#raid-mode}

Der Raid-Modus ist eine Notfallfunktion, die darauf ausgelegt ist, alle neuen Benutzer, die versuchen, Ihrem Server beizutreten, sofort zu blockieren, mit einer maximalen Dauer von 24 Stunden. Um neue Mitglieder dauerhaft zu blockieren, verwenden Sie den [`/joinlock`-Befehl](./join-lock.mdx).

### ❓ Funktionsweise des Raid-Modus {#working}

RaidProtect aktiviert den Raid-Modus automatisch, wenn eine große Anzahl von Benutzern Ihrem Server in kurzer Zeit beitritt. Standardmäßig wird der Raid-Modus aktiviert, wenn mehr als 10 Benutzer Ihrem Server in weniger als 10 Sekunden beitreten. Wenn der Raid-Modus aktiviert ist, kann kein Benutzer dem Server beitreten. Sie werden auf Einladungsebene blockiert.

:::warning
Die Community-Funktionen von Discord sind für die ordnungsgemäße Funktion des Raid-Modus unerlässlich. [Folgen Sie unserer Anleitung, um die Aktivierung der Community auf Ihrem Server zu überprüfen.](../guides/community.md)
:::

#### Aktivierung {#enable}

- Um diesen Modus manuell zu aktivieren, muss ein Benutzer mit Kick-Berechtigungen den Befehl `/raidmode` ausführen.
- Eine Nachricht wird automatisch im Log-Kanal veröffentlicht, um die Aktivierung zu signalisieren.

#### Deaktivierung {#disable}

Der Raid-Modus wird nicht automatisch deaktiviert. Denken Sie daran, ihn mit demselben Befehl zu stoppen, sobald die Bedrohung vorüber ist. 😇

:::info
Der Befehl `raidmode` ist [per Präfix verwendbar](../guides/prefix.md).
:::

### 🚨 Konfiguration des automatischen Raid-Modus {#config}

Wenn Ihr Server häufig viele neue Mitglieder gleichzeitig empfängt, ist es ratsam, diesen Schwellenwert anzupassen, um Fehlalarme zu vermeiden.

![Automatischer Raid-Modus Screenshot](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-raid-mode.webp)

#### Mitglieder-Schwellenwert {#threshold}

1. Führen Sie den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicken Sie auf die Schaltfläche "**Auto RaidMode**".
3. Wählen Sie "**Anzahl der Mitglieder**".
4. Wählen Sie die Anzahl der Mitglieder, die innerhalb von 10 Sekunden beitreten können.

Sie können den Standardwert (10) beibehalten oder ihn auf den gewünschten Wert anpassen, indem Sie auf die Schaltfläche "**Benutzerdefinierter Wert**" klicken.

:::note
Wir empfehlen, einen Wert zwischen 10 und 20 Mitgliedern pro 10 Sekunden einzugeben, um eine gute Effektivität des Systems zu gewährleisten.
:::

#### Dauer des Raid-Modus {#duration}

1. Führen Sie den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicken Sie auf die Schaltfläche "**Auto RaidMode**".
3. Wählen Sie "**Dauer**".
4. Wählen Sie die Dauer des Raid-Modus (maximal 24 Stunden).

Sie können den Standardwert (5 Minuten) beibehalten oder ihn auf den gewünschten Wert anpassen, indem Sie auf die Schaltfläche "**Benutzerdefinierter Wert**" klicken.

## Mindestalter {#minage}

Um die Sicherheit zu erhöhen, können Sie ein Mindestalter für Discord-Konten neuer Mitglieder festlegen.

1. Führen Sie den [`/settings`-Befehl](../setup.md#settings) aus.
2. Klicken Sie auf die Schaltfläche "**Mindestalter**".
3. Wählen Sie den gewünschten Wert aus dem Auswahlmenü oder wählen Sie einen benutzerdefinierten Wert im Datumsformat (m/h/d/y).

### 🎂 Bypass des Mindestkonto-Alters {#bypass-minage}

Verwenden Sie den Befehl: ```/bypass minage [Benutzer]```

Ersetzen Sie `[Benutzer]` durch die gewünschte Kennung; diese Person hat 10 Minuten Zeit, dem Server beizutreten, ohne aufgrund der Altersanforderung gekickt zu werden. Sie können den Befehl auch ohne Angabe eines Benutzers verwenden, um die aktuelle Liste der Bypass-Benutzer anzuzeigen.
