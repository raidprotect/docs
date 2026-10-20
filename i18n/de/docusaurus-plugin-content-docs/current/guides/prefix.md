---
title: Präfixbefehle
description: "Aktivieren Sie die Präfixbefehle von RaidProtect zusätzlich zu den Slash-Befehlen, wählen Sie ihr Präfix und wenden Sie darauf die Berechtigungen von Discord an."
---

import { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

## Präfix deaktiviert (standardmäßig) {#disabled}

Standardmäßig verwendet RaidProtect ausschließlich Slash-Befehle (`/`). Dies gewährleistet eine intuitive und mit den Discord-Standards konsistente Nutzung.

## Präfixbefehle (optional) {#activated}

Wenn Sie es vorziehen, bestimmte Befehle in einer Nachricht zu tippen, wählen Sie ein Präfix, zum Beispiel `?`. Diese Befehle sind dann mit ihm verwendbar:

- [`?raidmode`](../features/raid-mode.md) und [`?joinlock`](../features/join-lock.mdx)
- [`?ban`](../features/moderation.mdx#ban), [`?tempban`](../features/moderation.mdx#tempban), [`?softban`](../features/moderation.mdx#softban) und [`?unban`](../features/moderation.mdx#unban)
- [`?kick`](../features/moderation.mdx#kick)
- [`?mute` | `?timeout` | `?tempmute`](../features/moderation.mdx#timeout) und [`?unmute` | `?untimeout` | `?untempmute`](../features/moderation.mdx#untimeout)
- [`?jail`](../features/moderation.mdx#jail), [`?tempjail`](../features/moderation.mdx#tempjail) und [`?unjail`](../features/moderation.mdx#unjail)
- [`?warn`](../features/moderation.mdx#warn)
- [`?slowmode` | `?slow`](../features/moderation.mdx#slowmode)
- [`?lock`](../features/channel-lock.md#lock) und [`?unlock`](../features/channel-lock.md#unlock)
- [`?clear` | `?clean`](../features/moderation.mdx#clear)
- [`?nick` | `?nickname` | `?rename` | `?setnick`](../features/moderation.mdx#nick)
- [`?userinfo` | `?ui`](../features/utilities.mdx#userinfo), [`?serverinfo` | `?ginfo`](../features/utilities.mdx#serverinfo) und [`?inviteinfo` | `?ii`](../features/utilities.mdx#inviteinfo)

## 💬 Das Präfix wählen {#config}

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Klicken Sie im Tab „**Allgemein**“ neben „**Nachrichtenbefehle**“ auf „**Bearbeiten**“.
3. Wählen Sie ein Präfix aus der Liste (`?`, `!`, `>` oder `$`) oder geben Sie Ihr eigenes unter „**Eigenes Präfix**“ ein (höchstens drei Zeichen, hat Vorrang vor der Liste). Wählen Sie „**Deaktiviert**“, um die Präfixbefehle abzuschalten.
4. Aktivieren Sie „**Delinvoke**“, wenn RaidProtect die Nachricht mit dem Befehl löschen soll, sobald es sie gelesen hat.

<SettingsModal name="prefix" />

:::note
Die Slash-Befehle (`/`) bleiben auch mit einem Präfix verfügbar.
Vermeiden Sie Präfixe, die bereits von anderen Bots verwendet werden, um Befehlskonflikte zu vermeiden.
:::

## 🔒 Befehlsberechtigungen anwenden {#permissions}

Die Berechtigungen der RaidProtect-Befehle werden in Discord eingestellt: **Servereinstellungen → Integrationen → RaidProtect**. Dort können Sie jeden Befehl pro Rolle, Mitglied oder Kanal erlauben oder verbieten. Discord wendet sie nur auf Slash-Befehle an.

Damit sie auch für Präfixbefehle und für die vom Menü „**Sanktionieren**“ (Rechtsklick auf ein Mitglied) angebotenen Sanktionen gelten:

1. Führen Sie den [Befehl `/settings`](../setup.md#settings) aus.
2. Klicken Sie im Tab „**Allgemein**“ neben „**Berechtigungen**“ auf „**Bearbeiten**“.
3. Aktivieren Sie „**Berechtigungen der Integrationen anwenden**“.

<SettingsModal name="permissions" />

Ein Mitglied, das `/ban` verwenden darf, kann dann über das Menü „**Sanktionieren**“ bannen, und ein Mitglied, dem `/ban` verboten ist, kann `?ban` nicht mehr verwenden. Die Option ist standardmäßig deaktiviert.

:::warning
Das Menü **Integrationen** von Discord ist nur in der PC- und Web-App verfügbar, nicht auf Mobilgeräten.
:::
