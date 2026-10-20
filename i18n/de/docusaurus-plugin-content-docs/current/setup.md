---
title: Installation
description: "Installieren und konfigurieren Sie RaidProtect in wenigen Minuten auf Ihrem Discord-Server mit dem Assistenten /setup und dem Dashboard /settings."
---

import Head from '@docusaurus/Head';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

<Head>
  <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"RaidProtect auf einem Discord-Server einrichten","description":"Den Schutzbot RaidProtect mit den Befehlen /setup und /settings installieren und konfigurieren.","step":[{"@type":"HowToStep","position":1,"name":"/setup ausführen","text":"Geben Sie /setup in einem Kanal ein, in dem der Bot aktiv ist, um den Installationsassistenten zu öffnen."},{"@type":"HowToStep","position":2,"name":"Module auswählen","text":"Wählen Sie die zu installierenden Funktionen im Menü „Wähle die zu installierenden Module“ aus und klicken Sie dann auf „Aktivieren“."},{"@type":"HowToStep","position":3,"name":"Zusammenfassung bestätigen","text":"Der Bot zeigt eine Zusammenfassung dessen an, was er erstellen und aktivieren wird. Klicken Sie erneut auf „Aktivieren“, um sie anzuwenden."},{"@type":"HowToStep","position":4,"name":"Mit /settings anpassen","text":"Verwenden Sie /settings jederzeit: Das Dashboard fasst die Einstellungen in fünf Tabs zusammen, Allgemein, Ankünfte, Schutz, Moderation und Werkzeuge."}]}).replace(/</g, '\\u003c')}</script>
</Head>

RaidProtect wird mit zwei Befehlen konfiguriert: [`/setup`](#install), ein Assistent, der die wesentlichen Schutzmaßnahmen auf einmal installiert, und [`/settings`](#settings), das Dashboard, in dem Sie alles Übrige jederzeit einstellen. Diese Anleitung erklärt Ihnen, wie Sie sie verwenden.

## Wo anfangen {#etapes}

Für einen Server, der bei null anfängt, ist dies die empfohlene Reihenfolge:

1. **Führen Sie [`/setup`](#install) aus** und wählen Sie die zu installierenden Module. RaidProtect erstellt den Log-Kanal, die nötigen Kanäle und Rollen und wendet die Änderungen nach einer Zusammenfassung an.
2. **Öffnen Sie den Tab „Ankünfte“ von [`/settings`](#settings)**: Stellen Sie das [Captcha](./features/captcha.md), den [Auto RaidMode](./features/raid-mode.md) und den [Empfang neuer Mitglieder](./features/onboarding.md) ein.
3. **Öffnen Sie den Tab „Moderation“**: Prüfen Sie den Log-Kanal und die [Sanktionen](./features/sanctions.mdx) (Jail- und Mute-Rollen).
4. **Stellen Sie den [Anti-Spam](./features/anti-spam.mdx)** im Tab „Schutz“ ein: Eine Voreinstellung genügt für den Anfang.

:::info Discord-Community
Der [Community-Modus](./guides/community.md) von Discord wird nur von einigen Einstellungen verlangt, etwa dem Blockieren der Einladungen durch den Auto RaidMode und der [DM-Sperre](./features/dm-lock.mdx). Das Captcha funktioniert auch ohne.
:::

## Geführte Installation {#install}

Der Befehl `/setup` ist Administratoren vorbehalten. Er installiert auf einmal die von Ihnen gewählten Module, mit bewährten Standardwerten, die Sie anschließend in `/settings` anpassen.

### 🔧 Module auswählen {#recommended}

1. Führen Sie den Befehl `/setup` aus.
2. Wählen Sie im Menü „**Wähle die zu installierenden Module**“ die gewünschten Funktionen aus: Präfixbefehle, Auto RaidMode, Captcha, Mindestalter des Kontos, Anti-Spam, Meldungen, Tag-Rolle, DM-Sperre und HoneyPot. Bereits aktive Module sind vorausgewählt.
3. Klicken Sie auf „**Aktivieren**“.
4. Der Bot fasst zusammen, was er erstellen oder wiederverwenden wird. Klicken Sie erneut auf „**Aktivieren**“, um es anzuwenden, oder auf „**Zurück**“, um die Auswahl zu ändern.

<Settings start="setup" />

Bei der Bestätigung führt RaidProtect Folgendes aus:

- Es erstellt den Kanal `#raidprotect-logs`, falls er nicht existiert, sichtbar für die Administratoren und die Person, die den Bot hinzugefügt hat;
- es entzieht `@everyone` die gefährlichen Berechtigungen (Administrator, Bannen, Kicken, Server verwalten, Kanäle, Rollen, Nachrichten, Webhooks und Threads verwalten, @everyone erwähnen, Timeout);
- es aktiviert jedes gewählte Modul mit seinen Standardwerten: Präfix `?`, Auto RaidMode bei 10 Mitgliedern in 10 Sekunden, Captcha im Panel-Modus mit dem Kanal `#verifizierung` und der Rolle `@Nicht verifiziert`, Mindestalter von 6 Stunden, Anti-Spam und Meldungen aktiviert, Rolle `@Tag`, DM-Sperre, Fallenkanal des [HoneyPot](./features/honeypot.md).

:::tip Ein Modul deaktivieren
Ein Modul in `/setup` abzuwählen, deaktiviert es nicht. Um eine Funktion abzuschalten, gehen Sie über [`/settings`](#settings).
:::

Die [automatischen Rollen und die Willkommensnachricht](./features/onboarding.md) gehören nicht zum Assistenten: Stellen Sie sie im Tab „**Ankünfte**“ von `/settings` ein.

### 🧭 Neuer Installationsassistent <span className="badge-experiment">Experiment</span> {#wizard}

Ein neuer `/setup`-Assistent ersetzt die Modulliste durch einen geführten Ablauf:

- **Abschnitt für Abschnitt**: Allgemein (mit der Sprache des Servers), Ankünfte, Schutz und Moderation, ein Schritt nach dem anderen. Eine **Kompaktansicht** fasst alles auf einem einzigen Bildschirm zusammen, einen Klick entfernt.
- **Angepasste Vorschläge**: Je nach Größe des Servers, ob er öffentlich oder eine Community ist oder einen Tag hat, wählt der Assistent die empfohlenen Schutzmaßnahmen vor und sagt, warum.
- **Mehr Module**: die [Willkommensnachricht](./features/onboarding.md#welcome-message) (mit ihrem Kanal), der Filter [Andere Server](./features/automod.md#servers), der Einladungen zu anderen Servern löscht, und der [präventive Slowmode](./features/slowmode.md) ([Premium](/de/premium)) auf dem Kanal Ihrer Wahl. Der [DISCON](./features/discon.md) wird dort erklärt: Er ist immer aktiv, ohne dass etwas installiert werden muss.
- **Eine Prüfung vor dem Start**: Er weist auf die Berechtigungen hin, die RaidProtect fehlen, und auf Rollen, die über seiner eigenen liegen, mit einer Schaltfläche „**Erneut prüfen**“.
- **Eine Zusammenfassung** dessen, was erstellt, geändert oder eingestellt wird. Nichts wird vor „**Installieren**“ angewendet.
- **Ein bereits konfigurierter Server wird geprüft, nicht neu gemacht**: Das vorhandene Captcha-Panel und die bereits aktive DM-Sperre bleiben erhalten.
- **Und danach**: Eine Vorschau des [Sicherheitsaudits](./features/audit.md) schließt die Installation ab, mit Verknüpfungen, um das Captcha zu testen, die Willkommensnachricht anzupassen oder alle Einstellungen zu öffnen. Ein fehlgeschlagener Schritt wird durch erneutes Ausführen von `/setup` wieder aufgenommen.

:::info Experiment: Shield Update
Der neue Installationsassistent kommt mit der **Shield Update**, die für Version 3.6.0 vorgesehen ist. Er wird derzeit nur einer kleinen Zahl von Servern angeboten.
:::

## Konfiguration ändern {#settings}

Der Befehl `/settings` öffnet das Dashboard von RaidProtect. Er ist Administratoren vorbehalten und wird als temporäre Privatnachricht angezeigt, die nur Sie sehen.

### 🔍 Das Dashboard {#menu}

Die Einstellungen sind in fünf Tabs geordnet:

- **Allgemein**: [Sprache](./language.md), [Präfixbefehle](./guides/prefix.md), [Berechtigungen](./guides/prefix.md#permissions) und Zeitzone des Servers.
- **Ankünfte**: [Auto RaidMode](./features/raid-mode.md), [Captcha](./features/captcha.md), [Mindestalter des Kontos](./features/onboarding.md#minage), [automatische Rollen](./features/onboarding.md#autorole) und [Willkommensnachricht](./features/onboarding.md#welcome-message).
- **Schutz**: [DISCON](./features/discon.md)\*, [Anti-Spam](./features/anti-spam.mdx), [Automod](./features/automod.md) ([Bilderfilter](./features/scam-images.md) und [andere Server](./features/automod.md#servers)\*), [HoneyPot](./features/honeypot.md), [präventiver Slowmode](./features/slowmode.md)\*, [Authentification Manager](./features/authentication-manager.mdx) und [DM-Sperre](./features/dm-lock.mdx).
- **Moderation**: [Sanktionen](./features/sanctions.mdx), [Zweitkonten](./features/alt-accounts.md)\*, Logs, [Meldungen](./features/reports.md) und [Transparenz](./features/transparency.md).
- **Werkzeuge**: [Tag-Rolle](./features/tag-role.md), [Kanalsperre](./features/channel-lock.md), [Rolle „im Dienst“](./features/moderation.mdx#onduty) und Zwischenspeicherung von Nachrichten.

\* Im Experiment: Diese Zeilen erscheinen nur auf Servern, die Zugang zur Shield Update (DISCON, andere Server, präventiver Slowmode) oder zur Identity Update (Zweitkonten) haben, als öffentliche [Premium](/de/premium)-Beta.

Jede Zeile zeigt den aktuellen Wert der Einstellung und eine Schaltfläche: „**Konfigurieren**“ öffnet einen eigenen Bildschirm, „**Bearbeiten**“ öffnet ein Eingabefenster. Jede Änderung wird sofort angewendet.

Nach einem Update kennzeichnet ein Hinweis **Neu** zwei Wochen lang die Einstellungen, die gerade hinzugekommen sind, sowie ihren Tab, solange Sie ihn nicht geöffnet haben.

Erkunden Sie das Dashboard unten, die Schaltflächen sind anklickbar:

<Settings start="home:arrivals" />

:::info Premium-Funktionen
Die [Premium](/de/premium) vorbehaltenen Bildschirme bleiben einsehbar.
:::

### 🕒 Zeitzone {#timezone}

Die Zeitzone dient für alles, was RaidProtect zu festen Zeiten veröffentlicht, etwa die [Transparenz-Zusammenfassungen](./features/transparency.md#recaps).

1. Führen Sie den Befehl `/settings` aus.
2. Klicken Sie im Tab „**Allgemein**“ neben „**Zeitzone**“ auf „**Bearbeiten**“.
3. Wählen Sie Ihren UTC-Versatz oder geben Sie eine Zeitzonen-Kennung wie `Europe/Paris` ein, damit die Sommerzeit automatisch berücksichtigt wird.

Ohne Einstellung steht der Server auf UTC.

### 🔄 Eine Einstellung zurücksetzen {#reset}

1. Navigieren Sie zur gewünschten Einstellung.
2. Klicken Sie auf „**Zurücksetzen**“.

Das Zurücksetzen wird sofort ohne Bestätigung angewendet. Nur destruktive Aktionen, etwa das Löschen des Captchas, verlangen eine Bestätigung.

### 🎨 Den Bot anpassen <span className="badge-premium">Premium</span> {#customize}

Die Schaltfläche „**Anpassen**“ unten im Dashboard ändert das Aussehen von RaidProtect auf Ihrem Server: Name, Avatar, Banner, Schriftart, Effekt und Farben des Namens.

<Settings start="customize" />

Akzeptiert werden Bilder im Format PNG, JPEG, GIF oder WebP bis 10 MB. Endet das Premium, kehren Avatar, Banner und Namensstil zu denen von RaidProtect zurück; der Name bleibt erhalten.

## Welche Konfiguration für Ihren Server? {#quelle-config}

Der Assistent `/setup` deckt bereits das Wesentliche ab. Wenn Sie bei null anfangen oder Ihre Einrichtung mit einer KI vorbereiten, finden Sie heraus, was zu Ihrem Server passt: Jeder Bedarf verweist auf die Funktion, die ihn abdeckt.

- **[Raids](/de/learn/discord-raid), Wellen von Konten, die auf einen Schlag hereinströmen**: Der [Auto RaidMode](./features/raid-mode.md) blockiert oder filtert die Beitritte für die Dauer des Angriffs, und mit dem [DISCON](./features/discon.md) verschärfen Sie den gesamten Server mit einem Klick.
- **[Spam](/de/learn/spam-discord), Werbung, Betrugslinks**: Der [Anti-Spam](./features/anti-spam.mdx) sanktioniert automatisch, und der [HoneyPot](./features/honeypot.md) fängt Spam-Konten ab.
- **[Bots](/de/learn/self-bot), die massenhaft beitreten**: Das [Captcha](./features/captcha.md) lässt jeden Ankömmling beweisen, dass er ein Mensch ist, und das [Mindestalter des Kontos](./features/onboarding.md#minage) hält am Vortag erstellte Konten fern.
- **Betrug per Bild** (gefälschte Giveaways, Phishing): Der [Bilderfilter](./features/scam-images.md) erkennt und entfernt ihn.
- **Ein [Nuke](/de/learn/discord-nuke)-Risiko oder gehackte Staff-Konten**: Wenden Sie das Prinzip der [geringsten Rechte](/de/learn/least-privilege) an und nutzen Sie den [Authentification Manager](./features/authentication-manager.mdx).
- **Eine Community, die Ihnen beim Moderieren helfen kann**: Aktivieren Sie die [Meldungen](./features/reports.md).

Passen Sie anschließend die [Sanktionen](./features/sanctions.mdx) (Kick, Timeout, Bann, Jail) an Ihren Server an.

:::info Ein Konfigurationsproblem?
Falls Sie auf ein Problem stoßen, sehen Sie im Abschnitt [Fehlfunktionen](./guides/malfunctions.md) nach oder treten Sie unserem [Support-Server](https://raidprotect.bot/discord) bei, um Hilfe zu erhalten.
:::
