---
title: Prefix verwenden
---

## Deaktivierter Prefix (Standard) {#disabled}

Standardmäßig nutzt RaidProtect ausschließlich Slash-Befehle (`/`) zur Interaktion mit dem Bot. Das sorgt für eine intuitive und konsistente Bedienung gemäß den Discord-Richtlinien.

## Aktivierter Prefix (Optional) {#activated}

Wenn du bestimmte Befehle lieber mit einem eigenen Prefix verwenden möchtest, kannst du diese Option aktivieren. Der Standardprefix ist `?`, lässt sich jedoch nach Bedarf anpassen. Nach der Aktivierung können folgende Befehle mit dem eingestellten Prefix genutzt werden:
- [`?raidmode`](../features/raid-mode.md)
- [`?ban`](../features/moderation.md#ban)
- [`?kick`](../features/moderation.md#kick)
- [`?lock`](../features/channel-lock.md#lock)
- [`?unlock`](../features/channel-lock.md#unlock)
- [`?userinfo` | `?ui`](../features/utilities#userinfo)
- [`?clear`](../features/moderation#clear)

## 💬 Prefix aktivieren oder deaktivieren {#config}

1. Öffne das Konfigurationsmenü mit [`/settings`](../setup.md#settings).
2. Wähle die Option "**Prefix**" für Befehle.
3. Aktiviere oder deaktiviere den Prefix nach deinen Vorlieben.
   Wenn aktiviert, kannst du den Prefix anpassen, indem du das gewünschte Zeichen oder Wort eingibst.

![Prefix settings screenshot](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-prefix.webp)

:::note
Slash-Befehle (`/`) bleiben verfügbar, auch wenn der Prefix aktiviert ist.
Es empfiehlt sich, Prefixe zu vermeiden, die bereits von anderen Bots verwendet werden, um Konflikte zu vermeiden.
:::
