---
title: Community aktivieren
description: "Aktivieren Sie die Discord-Community Ihres Servers, um die Sicherheitseinstellungen freizuschalten, die RaidProtect benötigt: DM-Sperre, Raid-Modus und mehr."
---

Die Aktivierung der Community-Funktion macht mehrere erweiterte Sicherheitseinstellungen von Discord verfügbar, die bestimmte Funktionen von RaidProtect benötigen:
- die [DM-Sperre](../features/dm-lock.mdx) (**DM Lock**);
- der [Raid-Modus](../features/raid-mode.md) und die [Beitrittssperre](../features/join-lock.mdx), **nur** mit der Aktion während des Raids „**Einladungen sperren**“ (der Standardeinstellung).

Das [Captcha](../features/captcha.md) und die anderen Aktionen des Raid-Modus („**Ankömmlinge kicken**“, „**Zum Captcha schicken**“, „**Captcha während des Raids eingefroren**“) funktionieren ohne die Community.

## 🚦 Voraussetzungen {#requirement}

- Administrator des Discord-Servers sein.

## 🚩 Community-Funktionen aktivieren {#steps}

1. **Öffnen Sie Ihre Servereinstellungen**
   - Klicken Sie oben links auf den Servernamen > „Servereinstellungen“.

2. **Gehen Sie zum Abschnitt „Community“**
   - Navigieren Sie in der Seitenleiste zum Tab **Community aktivieren** und klicken Sie dann auf **Loslegen**.

:::note
Wenn die Community auf Ihrem Server bereits aktiviert ist, heißt der Abschnitt **Community-Übersicht**.
:::

3. **Folgen Sie dem Einrichtungsassistenten**
   - Aktivieren Sie die E-Mail-Verifizierung für alle Mitglieder.
   - Aktivieren Sie den Filter für anstößige Inhalte.
   - Richten Sie einen Regelkanal und einen Ankündigungskanal ein.
   - Akzeptieren Sie die Nutzungsrichtlinien für Community-Server.

4. **Schließen Sie die Einrichtung ab**
   - Klicken Sie auf „Einrichtung abschließen“. Das „Community“-Abzeichen wird auf Ihrem Server angezeigt, sobald die Aktivierung abgeschlossen ist.

![Screenshot Discord Community-Aktivierung](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-enable-community.webp)

## 💡 DM-Sperre & Raid-Modus nach der Aktivierung verwenden {#use}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Öffnen Sie für die [DM-Sperre](../features/dm-lock.mdx) den Tab „**Schutz**“ und klicken Sie neben „**DM-Sperre**“ auf „**Bearbeiten**“.
3. Öffnen Sie für den [Raid-Modus](../features/raid-mode.md#config) den Tab „**Ankünfte**“ und klicken Sie neben „**Auto RaidMode**“ auf „**Konfigurieren**“.

Wenn ein Hinweis Sie aufgefordert hatte, die Community zu aktivieren, klicken Sie auf „**Aktualisieren**“: Er verschwindet, sobald die Community aktiviert ist.
