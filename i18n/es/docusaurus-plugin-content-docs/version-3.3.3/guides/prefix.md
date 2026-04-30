---
title: Uso de un prefijo
---

## Prefijo desactivado (por defecto) {#disabled}

Por defecto, RaidProtect solo utiliza comandos Slash (`/`) para interactuar con el bot. Esto garantiza un uso intuitivo y coherente con los estandares de Discord.

## Prefijo activado (opcional) {#activated}

Si prefieres usar ciertos comandos con un prefijo personalizado, puedes activar esta opcion. El prefijo predeterminado al activarlo es `?`, pero se puede cambiar segun tus necesidades. Una vez activado, los siguientes comandos se pueden usar con el prefijo configurado:
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

## Como activar o desactivar el prefijo {#config}

1. Abre el menu de configuracion escribiendo [`/settings`](../setup.md#settings).
2. Navega a la opcion de comando "**Prefijo**".
3. Activa o desactiva el prefijo segun tus preferencias.
Si esta activado, personaliza el prefijo ingresando el caracter o la cadena deseada.

![Captura de pantalla de la configuracion de prefijo](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-prefix.webp)

:::note
Los comandos Slash (`/`) siguen disponibles aunque el prefijo este activado.
Se recomienda evitar prefijos que ya usen otros bots para prevenir conflictos de comandos.
:::
