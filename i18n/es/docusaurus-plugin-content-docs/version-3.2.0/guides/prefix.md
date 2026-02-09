---
title: Usar un prefijo
---

## Prefijo desactivado (por defecto) {#disabled}

Por defecto, RaidProtect usa solo comandos Slash (`/`) para interactuar con el bot. Esto asegura un uso intuitivo y consistente con los estandares de Discord.

## Prefijo activado (opcional) {#activated}

Si prefieres usar ciertos comandos con un prefijo personalizado, puedes activar esta opcion. El prefijo por defecto al activarlo es `?`, pero puede modificarse segun tus necesidades. Una vez activado, estos comandos pueden usarse con el prefijo configurado:
- [`?raidmode`](../features/raid-mode.md)
- [`?ban`](../features/moderation.md#ban)
- [`?kick`](../features/moderation.md#kick)
- [`?lock`](../features/channel-lock.md#lock)
- [`?unlock`](../features/channel-lock.md#unlock)
- [`?userinfo` | `?ui`](../features/utilities#userinfo)
- [`?clear`](../features/moderation#clear)

## 💬 Como activar o desactivar el prefijo {#config}

1. Abre el menu de configuracion escribiendo [`/settings`](../setup.md#settings).
2. Accede a la opcion "**Prefix**" para comandos.
3. Activa o desactiva el prefijo segun tus preferencias.
Si esta activado, personaliza el prefijo ingresando el caracter o cadena deseada.

![Captura de pantalla de la configuracion del prefijo](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-prefix.webp)

:::note
Los comandos Slash (`/`) permanecen disponibles incluso si el prefijo esta activado.
Se recomienda evitar prefijos que ya esten siendo usados por otros bots para prevenir conflictos de comandos.
:::
