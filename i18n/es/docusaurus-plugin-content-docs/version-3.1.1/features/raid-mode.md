---
title: Modo raid
---

El modo raid es una funcion de emergencia disenada para bloquear instantaneamente a todos los nuevos usuarios que intenten unirse a tu servidor. Es radical pero efectivo para prevenir raids masivos. Con el modo raid de RaidProtect, tienes un escudo efectivo contra ataques masivos a tu servidor. 🌟

## ❓ Como Funciona el Modo Raid {#working}

RaidProtect activa automaticamente el modo raid si una gran cantidad de usuarios se unen a tu servidor en un corto periodo. Por defecto, el modo raid se activa si mas de 10 usuarios se unen a tu servidor en menos de 10 segundos. Cuando el modo raid esta activado, ningun usuario puede unirse al servidor. Son bloqueados a nivel de invitacion.

:::warning
Las funciones de Comunidad de Discord son esenciales para que el modo raid funcione correctamente. [Sigue nuestra guia para verificar que la Comunidad esta habilitada en tu servidor.](../guides/community.md)
:::

### Activacion {#enable}

- Para activar manualmente este modo, un usuario con permisos de expulsion debe ejecutar el comando `/raidmode`.
- Se publicara automaticamente un mensaje en el canal de registros para indicar la activacion.

### Desactivacion {#disable}

El modo raid no se desactiva automaticamente. Asegurate de desactivarlo con el mismo comando cuando la amenaza haya pasado. 😇

:::info
El comando `raidmode` es [utilizable con prefijo](../guides/prefix.md).
:::

## 🚨 Configurar el Modo Raid Automatico {#config}

Si tu servidor recibe frecuentemente a muchos nuevos miembros simultaneamente, es prudente ajustar este umbral para evitar falsos positivos.

[Captura de pantalla del modo raid automatico](../../../../en/docusaurus-plugin-content-docs/version-3.1.1/assets/rp-settings-raid-mode.webp)

:::note
Recomendamos ingresar un valor entre 10 y 20 miembros en 10 segundos para una buena eficiencia del sistema.
:::

1. Usa el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton "**Auto RaidMode**".
3. Selecciona el numero de miembros que pueden unirse en 10 segundos.

Puedes dejar el valor predeterminado (10) o ajustarlo al valor deseado haciendo clic en el boton "**Valor Personalizado**".

:::warning
Si el modo raid se activa automaticamente, recuerda desactivarlo una vez que la amenaza haya pasado. Ten en cuenta que no se desactiva por si solo. 😖
:::
