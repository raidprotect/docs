---
title: Verwendung eines Präfixes
description: "Aktivieren Sie die Präfix-Befehle von RaidProtect zusätzlich zu den Slash-Befehlen und passen Sie das Präfix auf Ihrem Discord-Server an."
---

import { PrefixSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

## Präfix deaktiviert (standardmäßig) {#disabled}

Standardmäßig verwendet RaidProtect ausschließlich Slash-Befehle (`/`), um mit dem Bot zu interagieren. Dies gewährleistet eine intuitive und mit den Discord-Standards konsistente Nutzung.

## Präfix aktiviert (optional) {#activated}

Wenn Sie es vorziehen, bestimmte Befehle mit einem benutzerdefinierten Präfix zu verwenden, können Sie diese Option aktivieren. Das Standard-Präfix bei Aktivierung ist `?`, es kann jedoch nach Ihren Bedürfnissen geändert werden. Nach der Aktivierung sind diese Befehle mit dem konfigurierten Präfix verwendbar:
- [`?raidmode`](../features/raid-mode.md)
- [`?ban`](../features/moderation.mdx#ban)
- [`?tempban`](../features/moderation.mdx#tempban)
- [`?unban`](../features/moderation.mdx#unban)
- [`?kick`](../features/moderation.mdx#kick)
- [`?mute` | `?timeout`](../features/moderation.mdx#timeout)
- [`?unmute` | `?untimeout`](../features/moderation.mdx#untimeout)
- [`?jail`](../features/moderation.mdx#jail)
- [`?tempjail`](../features/moderation.mdx#tempjail)
- [`?unjail`](../features/moderation.mdx#unjail)
- [`?warn`](../features/moderation.mdx#warn)
- [`?slowmode`](../features/moderation.mdx#slowmode)
- [`?lock`](../features/channel-lock.md#lock)
- [`?unlock`](../features/channel-lock.md#unlock)
- [`?userinfo` | `?ui`](../features/utilities#userinfo)
- [`?clear`](../features/moderation#clear)

## 💬 So aktivieren oder deaktivieren Sie das Präfix {#config}

1. Öffnen Sie das Konfigurationsmenü, indem Sie [`/settings`](../setup.md#settings) eingeben.
2. Rufen Sie die Option "**Präfix**" der Befehle auf.
3. Aktivieren oder deaktivieren Sie das Präfix nach Ihren Präferenzen.
Falls aktiviert, passen Sie das Präfix an, indem Sie das gewünschte Zeichen oder die gewünschte Zeichenkette eingeben.

<PrefixSettingsMockup />

:::note
Die Slash-Befehle (`/`) bleiben auch bei aktiviertem Präfix verfügbar.
Es wird empfohlen, Präfixe zu vermeiden, die bereits von anderen Bots verwendet werden, um Befehlskonflikte zu vermeiden.
:::

## 🔒 Befehlsberechtigungen anwenden {#permissions}

Standardmäßig berücksichtigen Präfix-Befehle nur die eigenen Discord-Berechtigungen jedes Befehls. Die Regeln, die Sie in Discord festlegen (**Servereinstellungen → Integrationen → RaidProtect**, pro Rolle, Mitglied oder Kanal), gelten nur für Slash-Befehle.

Um sie auch auf Präfix-Befehle anzuwenden, aktivieren Sie die Option **Auf Präfix-Befehle anwenden** im Berechtigungspanel von [`/settings`](../setup.md#settings). Sie ist standardmäßig deaktiviert.
