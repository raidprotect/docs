---
title: Onboarding-Prozess und Captcha
description: "Richten Sie das Discord-Onboarding ein, damit das Captcha von RaidProtect funktioniert: Machen Sie den Verifizierungskanal für neue Mitglieder sichtbar."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

Wenn der Kanal `#verifizierung` für neue Mitglieder standardmäßig nicht sichtbar ist, können sie das [Captcha](../features/captcha.md) nicht bestehen und bleiben blockiert. Diese Anleitung betrifft den **Onboarding-Prozess von Discord** (Servereinstellungen > Onboarding-Prozess). Für die Willkommensnachricht und die automatischen Rollen von RaidProtect lesen Sie die Seite [Ankunft und Empfang](../features/onboarding.md).

In den meisten Fällen behebt RaidProtect das Problem für Sie: Beginnen Sie mit Schritt 1.

## 1️⃣ RaidProtect das Problem beheben lassen {#auto-fix}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Ankünfte**“.
3. Klicken Sie neben „**Captcha**“ auf „**Konfigurieren**“.
4. Weist ein Hinweis darauf hin, dass der Verifizierungskanal **nicht standardmäßig sichtbar ist**, klicken Sie auf:
   - „**Verschieben nach** _Kategorie_“, um den Kanal in eine Kategorie zu legen, die für neue Mitglieder bereits sichtbar ist;
   - oder „**Neue Kategorie erstellen**“, damit wir eine Kategorie „Willkommen“ erstellen, die zu den Standardkanälen hinzugefügt wird.

Die Berechtigungen des Kanals bleiben beim Verschieben erhalten.

<Settings start="captcha" />

:::tip
Derselbe Bildschirm weist auf die **Lücken** der Rolle `@Nicht verifiziert` hin: Rollen, die der Discord-Onboarding-Prozess vergibt und die die Verifizierung umgehen, Kanäle, die für Mitglieder in der Verifizierung noch sichtbar sind. Die Schaltfläche „**Beheben**“ schließt die betroffenen Kanäle. Siehe die [Warnungen des Captcha-Bildschirms](../features/captcha.md#alerts).
:::

## 2️⃣ Kanalberechtigungen überprüfen {#permissions}

RaidProtect setzt die Berechtigungen des Kanals `#verifizierung` und der Rolle `@Nicht verifiziert` selbst. Falls Sie sie geändert haben, überprüfen Sie sie:

1. Öffnen Sie die Einstellungen des Kanals `#verifizierung` (Rechtsklick > **Kanal bearbeiten**).
2. Im Tab **Berechtigungen**:
   - Stellen Sie sicher, dass `@everyone` **keine** Berechtigung hat, den Kanal zu sehen.
   - Überprüfen Sie, dass die Rolle `@Nicht verifiziert` die Berechtigung hat, den **Kanal zu sehen** und **den Nachrichtenverlauf zu lesen**.
   - Im Modus **Panel (Interaktiv)**, dem Standardmodus, darf `@Nicht verifiziert` **keine** Nachrichten senden können: Der Code wird in einem Fenster eingegeben. Im Modus **Challenge (Klassisch)** muss die Rolle **Nachrichten senden** können, um den Code zu tippen.

{/* ![Screenshot Überprüfung der Kanalberechtigungen](../assets/rp-verification-channel-permissions.webp) : zeigt „Nachrichten senden“ als erlaubt, gilt nur im Challenge-Modus */}

## 3️⃣ Onboarding-Kategorie überprüfen {#default-category}

Wenn Sie lieber von Hand korrigieren:

1. Gehen Sie zu **Servereinstellungen** > **Onboarding-Prozess**.
2. Überprüfen Sie im Abschnitt **Standardkanäle**, dass die Kategorie, die `#verifizierung` enthält, als sichtbar für neue Mitglieder markiert ist.
3. Verschieben Sie `#verifizierung` bei Bedarf in eine markierte Kategorie.
4. Speichern Sie die Änderungen.

![Screenshot Überprüfung der Onboarding-Kategorie](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-welcome-category.webp)

## 4️⃣ Konfiguration in RaidProtect aktualisieren {#refresh-config}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie den Tab „**Ankünfte**“.
3. Klicken Sie neben „**Captcha**“ auf „**Konfigurieren**“.
4. Wird noch ein Hinweis angezeigt, klicken Sie auf „**Aktualisieren**“, um die Prüfung neu zu starten. Sobald der Hinweis verschwindet, funktioniert das Captcha korrekt.

## 5️⃣ Mit einem Testkonto testen {#test-account}

Um zu bestätigen, dass alles richtig konfiguriert ist:

1. Treten Sie dem Server mit einem anderen Discord-Konto bei.
2. Überprüfen Sie, ob der Kanal `#verifizierung` bei der Ankunft sichtbar ist.
3. Klicken Sie auf „**Verifizieren**“ und geben Sie den Code ein (Panel-Modus) oder tippen Sie den Code in den Kanal (Challenge-Modus).
4. Nach der Verifizierung sollte das Konto Zugang zu den anderen Kanälen haben.

## 🛠️ Häufige Probleme und Lösungen {#common-issues}

| Problem | Lösung |
|---------|----------|
| 🔴 Der Kanal `#verifizierung` bleibt unsichtbar | Klicken Sie auf dem Captcha-Bildschirm auf „**Verschieben nach** _Kategorie_“ oder legen Sie den Kanal in eine **markierte Kategorie** des Discord-Onboardings. |
| 🚫 Die Rolle `@Nicht verifiziert` kann nicht schreiben | Normal im Panel-Modus: Das Mitglied klickt auf „**Verifizieren**“. Im Challenge-Modus erteilen Sie ihr die **Berechtigung zum Senden von Nachrichten** in `#verifizierung`. |
| 🔓 Ein nicht verifiziertes Mitglied sieht andere Kanäle | Klicken Sie im Lücken-Hinweis des Captcha-Bildschirms auf „**Beheben**“ und entfernen Sie die Rollen, die der Discord-Onboarding-Prozess bei der Ankunft vergibt. |
| ❌ Das Captcha funktioniert nach der Änderung nicht | Klicken Sie auf dem Captcha-Bildschirm (Tab „**Ankünfte**“ von `/settings`) auf „**Aktualisieren**“. |

---

Wenn Sie diese Schritte befolgen, ist Ihr Verifizierungssystem voll funktionsfähig, um Mitglieder sicher zu empfangen und Bots oder Raids effektiv zu blockieren.
