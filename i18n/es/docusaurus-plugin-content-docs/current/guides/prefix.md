---
title: Uso de un prefijo
---

import { PrefixSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

## Prefijo desactivado (por defecto) {#disabled}

Por defecto, RaidProtect solo utiliza los comandos Slash (`/`) para interactuar con el bot. Esto garantiza un uso intuitivo y coherente con los estándares de Discord.

## Prefijo activado (opcional) {#activated}

Si prefieres usar ciertos comandos con un prefijo personalizado, puedes activar esta opción. El prefijo por defecto al activarlo es `?`, pero se puede modificar según tus necesidades. Una vez activado, los siguientes comandos se pueden usar con el prefijo configurado:
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

## 💬 Cómo activar o desactivar el prefijo {#config}

1. Abre el menú de configuración escribiendo [`/settings`](../setup.md#settings).
2. Accede a la opción "**Prefijo**" de los comandos.
3. Activa o desactiva el prefijo según tus preferencias.
Si está activado, personaliza el prefijo introduciendo el carácter o la cadena deseada.

<PrefixSettingsMockup />

:::note
Los comandos Slash (`/`) siguen disponibles aunque el prefijo esté activado.
Se recomienda evitar los prefijos que ya usen otros bots para prevenir conflictos de comandos.
:::

## 🔒 Aplicar los permisos de comandos {#permissions}

Por defecto, los comandos de prefijo solo tienen en cuenta los permisos de Discord propios de cada comando. Las reglas que defines en Discord (**Ajustes del servidor → Integraciones → RaidProtect**, por rol, miembro o canal) se aplican únicamente a los comandos Slash.

Para aplicarlas también a los comandos de prefijo, activa la opción **Aplicar a los comandos de prefijo** en el panel de permisos de [`/settings`](../setup.md#settings). Está desactivada por defecto.
