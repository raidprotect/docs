---
title: Verwendung eines Prefixes
---

## Prefix deaktiviert (Standard) {#disabled}

Standardmäßig verwendet RaidProtect ausschließlich Slash-Befehle (`/`) zur Interaktion mit dem Bot. Dies gewährleistet eine intuitive Nutzung, die den Discord-Standards entspricht.

## Prefix aktiviert (optional) {#activated}

Wenn Sie bestimmte Befehle lieber mit einem benutzerdefinierten Prefix verwenden möchten, können Sie diese Option aktivieren. Der Standard-Prefix bei Aktivierung ist `?`, kann aber nach Ihren Bedürfnissen geändert werden. Nach der Aktivierung können folgende Befehle mit dem konfigurierten Prefix verwendet werden:
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

## So aktivieren oder deaktivieren Sie den Prefix {#config}

1. Öffnen Sie das Einstellungsmenü, indem Sie [`/settings`](../setup.md#settings) eingeben.
2. Navigieren Sie zur Option "**Prefix**" der Befehle.
3. Aktivieren oder deaktivieren Sie den Prefix nach Ihren Wünschen.
Falls aktiviert, passen Sie den Prefix an, indem Sie das gewünschte Zeichen oder die gewünschte Zeichenkette eingeben.

![Screenshot Prefix-Einstellung](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-prefix.webp)

:::note
Slash-Befehle (`/`) bleiben auch bei aktiviertem Prefix verfügbar.
Es wird empfohlen, Prefixe zu vermeiden, die bereits von anderen Bots verwendet werden, um Befehlskonflikte zu verhindern.
:::
