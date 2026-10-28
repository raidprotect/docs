---
title: Comandos por mensajes
description: "Activa los comandos por mensajes de RaidProtect junto a los comandos Slash, elige su prefijo y aplícales los permisos de Discord."
---

import { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

## Prefijo desactivado (por defecto) {#disabled}

Por defecto, RaidProtect solo utiliza los comandos Slash (`/`). Esto garantiza un uso intuitivo y coherente con los estándares de Discord.

## Comandos por mensajes (opcional) {#activated}

Si prefieres escribir ciertos comandos en un mensaje, elige un prefijo, por ejemplo `?`. Estos comandos se pueden usar entonces con él:

- [`?raidmode`](../features/raid-mode.md) y [`?joinlock`](../features/join-lock.mdx)
- [`?ban`](../features/moderation.mdx#ban), [`?tempban`](../features/moderation.mdx#tempban), [`?softban`](../features/moderation.mdx#softban) y [`?unban`](../features/moderation.mdx#unban)
- [`?kick`](../features/moderation.mdx#kick)
- [`?mute` | `?timeout` | `?tempmute`](../features/moderation.mdx#timeout) y [`?unmute` | `?untimeout` | `?untempmute`](../features/moderation.mdx#untimeout)
- [`?jail`](../features/moderation.mdx#jail), [`?tempjail`](../features/moderation.mdx#tempjail) y [`?unjail`](../features/moderation.mdx#unjail)
- [`?warn`](../features/moderation.mdx#warn)
- [`?slowmode` | `?slow`](../features/moderation.mdx#slowmode)
- [`?lock`](../features/channel-lock.md#lock) y [`?unlock`](../features/channel-lock.md#unlock)
- [`?clear` | `?clean`](../features/moderation.mdx#clear)
- [`?nick` | `?nickname` | `?rename` | `?setnick`](../features/moderation.mdx#nick)
- [`?userinfo` | `?ui`](../features/utilities.mdx#userinfo), [`?serverinfo` | `?ginfo`](../features/utilities.mdx#serverinfo) y [`?inviteinfo` | `?ii`](../features/utilities.mdx#inviteinfo)

## 💬 Elegir el prefijo {#config}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. En la pestaña “**General**”, haz clic en “**Editar**” junto a “**Comandos por mensaje**”.
3. Elige un prefijo en la lista (`?`, `!`, `>` o `$`), o introduce el tuyo en “**Prefijo personalizado**” (tres caracteres como máximo, prioritario sobre la lista). Elige “**Desactivado**” para desactivar los comandos por mensajes.
4. Marca “**Delinvoke**” si quieres que RaidProtect elimine el mensaje que contiene el comando en cuanto lo haya leído.

<SettingsModal name="prefix" />

:::note
Los comandos Slash (`/`) siguen disponibles incluso con un prefijo.
Evita los prefijos que ya usen otros bots para prevenir conflictos de comandos.
:::

## 🔒 Aplicar los permisos de comandos {#permissions}

Los permisos de los comandos de RaidProtect se ajustan en Discord: **Ajustes del servidor → Integraciones → RaidProtect**. Puedes permitir o prohibir ahí cada comando por rol, miembro o canal. Discord solo los aplica a los comandos Slash.

Para que se apliquen también a los comandos por mensajes y a las sanciones propuestas por el menú “**Sancionar**” (clic derecho sobre un miembro):

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. En la pestaña “**General**”, haz clic en “**Editar**” junto a “**Permisos**”.
3. Marca “**Aplicar los permisos de las integraciones**”.

<SettingsModal name="permissions" />

Un miembro autorizado a usar `/ban` podrá entonces banear desde el menú “**Sancionar**”, y un miembro al que se le prohíba `/ban` ya no podrá usar `?ban`. La opción está desactivada por defecto.

:::warning
El menú **Integraciones** de Discord solo está disponible en la aplicación de escritorio y en la web, no en móvil.
:::
