---
title: Anti-Raid
description: "Der Raid-Modus von RaidProtect blockiert Massenbeitritte auf Ihrem Discord-Server sofort, automatisch ausgelöst, sobald eine verdächtige Welle erkannt wird."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

import RaidModeMockup from '@site/src/components/DiscordMessage/mockups/raid-mode';

{/* <RaidModeMockup /> : veraltet seit 3.5.0 (zeigt den Kick als einzige Aktion des Raid-Modus) */}

## Raid-Modus {#raid-mode}

Der **Raid-Modus** von RaidProtect ist eine Notfallfunktion, die neue Nutzer, die während einer [verdächtigen Beitrittswelle](/de/learn/discord-raid) versuchen, Ihrem Server beizutreten, für maximal 24 Stunden behandelt. Unser Schutzbot aktiviert ihn selbst, sobald er eine Welle erkennt, und Sie können ihn auch manuell auslösen. Sie wählen, was wir mit den Neuankömmlingen tun: die Einladungen blockieren, sie kicken oder sie zum [Captcha](./captcha.md) schicken. Um den Server dauerhaft für neue Mitglieder zu schließen, verwenden Sie den [`/joinlock`-Befehl](./join-lock.mdx).

### ❓ Wie funktioniert der Raid-Modus? {#working}

- **Erkennung:** Der **Auto RaidMode** aktiviert den Raid-Modus, wenn zu viele Nutzer gleichzeitig Ihrem Server beitreten. Standardmäßig löst er bei 10 Beitritten in 10 Sekunden aus.
- **Reaktion:** Während des Raid-Modus werden die Neuankömmlinge gemäß der von Ihnen gewählten [Aktion während des Raids](#action) behandelt. Auch die Konten der Welle, die den Modus ausgelöst hat, werden behandelt: gekickt oder bei den Captcha-Aktionen hinter das Captcha zurückgeschickt.
- **Ende:** Der Raid-Modus schaltet sich nach der [konfigurierten Dauer](#duration) von selbst ab, standardmäßig 5 Minuten.
- **Logs:** Bei jeder Aktivierung und Deaktivierung wird eine Nachricht im Log-Kanal gepostet.
- **Empfang:** Die [Willkommensnachricht](./onboarding.md#welcome-message) schweigt während der Welle, um den Willkommenskanal nicht zu überfluten.

:::warning
Mit der Aktion „**Einladungen sperren**“ (Standard) sind die Community-Funktionen von Discord für den Raid-Modus unerlässlich. [Folgen Sie unserer Anleitung, um die Aktivierung der Community auf Ihrem Server zu überprüfen.](../guides/community.md) Die anderen Aktionen funktionieren ohne die Community.
:::

#### Aktivierung {#enable}

Ein Nutzer mit Kick-Berechtigung kann den Raid-Modus von Hand aktivieren.

Verwenden Sie den Befehl: ```/raidmode [status] [duration]```

- Ohne Option zeigt der Befehl den Status des Raid-Modus mit einer Schaltfläche zum Aktivieren oder Deaktivieren an.
- Ersetzen Sie `[status]` durch **True**, um ihn zu aktivieren, **False**, um ihn zu deaktivieren.
- Ersetzen Sie `[duration]` durch die gewünschte Dauer (zum Beispiel `30m` oder `2h`, höchstens 24 Stunden). Ohne Dauer übernehmen wir die des Auto RaidMode.

Eine Nachricht wird automatisch im Log-Kanal gepostet, um die Aktivierung zu signalisieren. Der manuelle Raid-Modus wendet dieselbe [Aktion](#action) an wie der Auto RaidMode.

#### Deaktivierung {#disable}

Der Raid-Modus deaktiviert sich nach Ablauf seiner Dauer von selbst. Sie können ihn auch früher mit dem Befehl `/raidmode` beenden, sobald die Gefahr gebannt ist. 😇

:::info
Der Befehl `raidmode` ist [per Präfix verwendbar](../guides/prefix.md).
:::

### 🚨 Konfiguration des automatischen Raid-Modus {#config}

Wenn Ihr Server häufig viele neue Mitglieder gleichzeitig empfängt, ist es sinnvoll, den Schwellenwert anzupassen, um Fehlalarme zu vermeiden. Alle Einstellungen befinden sich auf demselben Bildschirm.

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Ankünfte**“.
3. Klicken Sie neben „**Auto RaidMode**“ auf „**Konfigurieren**“.

Der Schalter oben rechts auf dem Bildschirm aktiviert oder deaktiviert den Auto RaidMode. RaidProtect benötigt die Berechtigung `MANAGE_GUILD`.

<Settings start="antiraid" />

#### Mitglieder-Schwellenwert {#threshold}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Ankünfte**“.
3. Klicken Sie neben „**Auto RaidMode**“ auf „**Konfigurieren**“.
4. Wählen Sie unter „**Anzahl der Mitglieder / 10 Sekunden**“ 10, 15, 20 oder 30 Mitglieder oder „**Benutzerdefinierter Wert**“.

Der Schwellenwert wird über ein Fenster von 10 Sekunden gezählt. Der Standardwert ist 10 Mitglieder.

:::note
Wir empfehlen einen Wert zwischen 10 und 20 Mitgliedern in 10 Sekunden für eine gute Wirksamkeit des Systems.
:::

#### Dauer des Raid-Modus {#duration}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Ankünfte**“.
3. Klicken Sie neben „**Auto RaidMode**“ auf „**Konfigurieren**“.
4. Wählen Sie unter „**Dauer**“ 1, 2, 5 oder 10 Minuten oder „**Benutzerdefinierter Wert**“ von 10 Sekunden bis 24 Stunden (zum Beispiel `5m 30s`).

Die Standarddauer beträgt 5 Minuten.

#### Aktion während des Raids {#action}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Ankünfte**“.
3. Klicken Sie neben „**Auto RaidMode**“ auf „**Konfigurieren**“.
4. Wählen Sie unter „**Aktion während des Raids**“ die Aktion, die auf die Neuankömmlinge angewendet wird.

| Aktion | Wirkung auf die Neuankömmlinge | Verfügbarkeit |
|---|---|---|
| „**Einladungen sperren**“ (Standard) | Discord schließt die Einladungen des Servers, niemand tritt mehr bei. | Kostenlos, Community erforderlich |
| „**Ankömmlinge kicken**“ | Jeder Neuankömmling wird gekickt und erhält eine Privatnachricht, die ihn einlädt, zurückzukehren, sobald der Raid-Modus deaktiviert ist. | [Premium](/de/premium) |
| „**Zum Captcha schicken**“ | Die Neuankömmlinge durchlaufen das Captcha, statt gekickt zu werden. | Kostenlos, aktives Captcha erforderlich |
| „**Captcha während des Raids eingefroren**“ | Die Neuankömmlinge warten hinter dem Captcha und durchlaufen es nach der Welle. | Kostenlos, aktives Captcha im Panel-Modus erforderlich |

:::tip
Stellen Sie bei den Captcha-Aktionen den [Auslöser des Captchas](./captcha.md#trigger) auf **Automatisch**: Das Captcha wird dann nur während Raids verlangt, und Ihre Neuankömmlinge treten in der übrigen Zeit direkt bei.
:::

#### Kick-Modus <span className="badge-premium">Premium</span> {#kick-mode}

Der frühere Schalter „**Kick-Modus**“ ist zur Aktion „**Ankömmlinge kicken**“ der [Aktion während des Raids](#action) geworden. Sie bleibt [**Premium**](/de/premium)-Servern vorbehalten und funktioniert ohne die Discord-Community.

#### DMs automatisch schließen {#close-dm}

Sie können den **Auto RaidMode** so konfigurieren, dass er bei seiner Aktivierung **automatisch die DMs des Servers schließt**. Das fügt während eines Raids eine Schutzschicht hinzu: Neue Konten können Ihre Mitglieder nicht mehr privat kontaktieren, um sie zu [phishen](/de/learn/token-grabber) oder zu betrügen.

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Ankünfte**“.
3. Klicken Sie neben „**Auto RaidMode**“ auf „**Konfigurieren**“.
4. Klicken Sie neben „**DMs schließen**“ auf „**Aktivieren**“.

Wenn der Raid-Modus endet, kehren die DMs zu ihrer vorherigen Konfiguration zurück.

:::info
Diese Option gilt nur mit der Aktion „**Einladungen sperren**“, die über die Sicherheitsaktionen von Discord läuft. Sie ergänzt die [dauerhafte DM-Sperre](./dm-lock.mdx): Ohne dauerhafte Sperre sind die DMs nur während eines aktiven Raids geschlossen.
:::

### 🎫 Bypass des Raid-Modus {#bypass-raid}

Sie erwarten ein legitimes Mitglied, während ein Raid läuft? Erlauben Sie ihm, trotz Raid-Modus beizutreten:

Verwenden Sie den Befehl: ```/bypass raid [@user]```

Ersetzen Sie `[@user]` durch die gewünschte [Kennung](../guides/id.mdx); diese Person hat dann 10 Minuten Zeit, dem Server beizutreten, ohne vom Raid-Modus gekickt zu werden. Sie können den Befehl auch ohne Angabe eines Nutzers verwenden, um die aktuelle Liste der Bypass-Nutzer anzuzeigen (maximal 7 Nutzer gleichzeitig).

:::warning
Der Bypass des Raid-Modus gilt nur mit der Aktion „**Ankömmlinge kicken**“: Ein Nutzer, der auf Einladungsebene blockiert ist, kann nicht per Bypass zugelassen werden. Verwenden Sie bei den Captcha-Aktionen stattdessen den [Bypass des Captchas](./captcha.md#bypass).
:::

## Mindestalter {#minage}

Das Mindestalter des Kontos hat einen eigenen Abschnitt auf der Seite [Ankunft und Empfang](./onboarding.md#minage): Einstellung des Alters, Wahl der Aktion (Kick, Jail bis zum erforderlichen Alter, Zurückhalten am Eingang) und Bypass.

### 🎂 Bypass des Mindestalters des Kontos {#bypass-minage}

Verwenden Sie den Befehl ```/bypass minage [@user]```, beschrieben im [Bypass des Mindestalters](./onboarding.md#bypass-minage).

## Häufig gestellte Fragen {#faq}

### Wird der Raid-Modus automatisch aktiviert?

Ja. Standardmäßig aktivieren wir den Raid-Modus, sobald 10 Nutzer Ihrem Server in 10 Sekunden beitreten. Dieser Schwellenwert ist in den Einstellungen des Auto RaidMode konfigurierbar.

### Was macht der Raid-Modus mit den Neuankömmlingen?

Das hängt von der gewählten Aktion ab: die Einladungen blockieren (Standard), die Neuankömmlinge kicken ([Premium](/de/premium)), sie zum Captcha schicken oder sie bis zum Ende der Welle hinter einem eingefrorenen Captcha warten lassen.

### Wie aktiviere ich den Raid-Modus manuell?

Ein Nutzer mit Kick-Berechtigung führt den Befehl `/raidmode` aus. Anschließend wird eine Nachricht im Log-Kanal veröffentlicht, um die Aktivierung zu signalisieren, und die gewählte Aktion gilt für die Neuankömmlinge.

### Deaktiviert sich der Raid-Modus von selbst?

Ja. Er schaltet sich nach der in `/raidmode` gewählten Dauer ab, oder andernfalls nach der Dauer des Auto RaidMode (standardmäßig 5 Minuten, höchstens 24 Stunden). Sie können ihn mit demselben Befehl früher beenden.

### Muss man die Discord-Community aktivieren?

Nur für die Aktion „**Einladungen sperren**“, die das Schließen der Einladungen von Discord nutzt. Die Aktionen „**Ankömmlinge kicken**“, „**Zum Captcha schicken**“ und „**Captcha während des Raids eingefroren**“ funktionieren ohne.

### Kann man ein legitimes Mitglied während eines Raids beitreten lassen?

Ja, mit dem Befehl `/bypass raid [@user]`, wenn die Aktion „**Ankömmlinge kicken**“ lautet: Das Mitglied hat dann 10 Minuten Zeit, beizutreten, ohne gekickt zu werden (maximal 7 Bypass-Nutzer gleichzeitig). Verwenden Sie bei den Captcha-Aktionen `/bypass captcha [@user]`.
