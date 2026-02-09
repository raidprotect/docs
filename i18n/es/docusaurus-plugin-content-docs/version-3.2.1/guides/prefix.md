---
title: Uso de prefijo
---

## Prefijo desactivado (Predeterminado) {#disabled}

Por defecto, RaidProtect usa únicamente comandos Slash (`/`) para interactuar con el bot. Esto asegura un uso intuitivo y consistente con los estándares de Discord.

## Prefijo activado (Opcional) {#activated}

Si prefieres usar ciertos comandos con un prefijo personalizado, puedes activar esta opción. El prefijo predeterminado cuando se activa es `?`, pero puede modificarse según tus necesidades. Una vez activado, estos comandos pueden usarse con el prefijo configurado:
- [`?raidmode`](../features/raid-mode.md)
- [`?ban`](../features/moderation.md#ban)
- [`?kick`](../features/moderation.md#kick)
- [`?lock`](../features/channel-lock.md#lock)
- [`?unlock`](../features/channel-lock.md#unlock)
- [`?userinfo` | `?ui`](../features/utilities#userinfo)
- [`?clear`](../features/moderation#clear)

## 💬 Cómo activar o desactivar el prefijo {#config}

1. Abre el menú de configuración escribiendo [`/settings`](../setup.md#settings).
2. Accede a la opción "**Prefix**" para comandos.
3. Activa o desactiva el prefijo según tus preferencias.
Si está activado, personaliza el prefijo ingresando el carácter o cadena deseada.

![Captura de pantalla de la configuración del prefijo](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-prefix.webp)

:::note
Los comandos Slash (`/`) siguen disponibles incluso si el prefijo está activado.
Se recomienda evitar prefijos que ya estén en uso por otros bots para prevenir conflictos de comandos.
:::
