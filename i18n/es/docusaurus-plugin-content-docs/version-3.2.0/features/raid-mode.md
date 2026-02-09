---
title: Anti-raid
---

## Modo Raid

El modo raid es una funcion de emergencia disenada para bloquear instantaneamente a todos los nuevos usuarios que intentan unirse a tu servidor, superando la limitacion nativa de Discord que solo permite este bloqueo por 24 horas mediante la accion de seguridad "Pausar Invitaciones".

### ❓ Como funciona el Modo Raid {#working}

RaidProtect activa automaticamente el modo raid si un gran numero de usuarios se une a tu servidor en poco tiempo. Por defecto, el modo raid se activa si mas de 10 usuarios se unen a tu servidor en menos de 10 segundos. Cuando el modo raid esta activado, ningun usuario puede unirse al servidor. Son bloqueados a nivel de invitacion.

:::warning
Las funciones de Comunidad de Discord son esenciales para que el Modo Raid funcione correctamente. [Sigue nuestra guia para asegurarte de que Comunidad esta activada en tu servidor.](../guides/community.md)
:::

#### Activacion {#enable}

- Para activar manualmente este modo, un usuario con permisos de expulsion debe ejecutar el comando `/raidmode`.
- Un mensaje se publicara automaticamente en el canal de registros para senalar la activacion.

#### Desactivacion {#disable}

El modo raid no se desactiva automaticamente. Recuerda desactivarlo con el mismo comando una vez que la amenaza haya pasado. 😇

:::info
El comando `raidmode` tambien esta [disponible con prefijo](../guides/prefix.md).
:::

### 🚨 Configuracion del Modo Raid Automatico {#config}

Si tu servidor recibe frecuentemente muchos nuevos miembros a la vez, es prudente ajustar este umbral para evitar falsos positivos.

![Captura de pantalla de la configuracion del modo raid automatico](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-raid-mode.webp)

:::note
Recomendamos establecer un valor entre 10 y 20 miembros en 10 segundos para un rendimiento optimo del sistema.
:::

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton "**Auto RaidMode**".
3. Selecciona el numero de miembros permitidos para unirse en 10 segundos.

Puedes dejarlo en el valor predeterminado (10) o ajustarlo al valor deseado haciendo clic en el boton "**Custom Value**".

:::warning
Si el modo raid se activa automaticamente, no olvides desactivarlo una vez que la amenaza haya pasado. Recuerda, no se desactiva solo. 😖
:::


## Edad minima de cuenta {#minage}

Para mejorar la seguridad, puedes requerir una edad minima de cuenta de Discord para los nuevos miembros.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton "**Minimum Age**".
3. Selecciona el valor deseado del menu desplegable o elige un valor personalizado en formato de fecha (m/h/d/y).

### 🎂 Omision de edad minima de cuenta {#bypass-minage}

Usa el comando: ```/bypass minage [user]```

Reemplaza `[user]` con el ID deseado; tendra 10 minutos para unirse al servidor sin ser expulsado por no cumplir el requisito de edad. Tambien puedes usar el comando sin especificar un usuario para ver la lista actual de usuarios con omision.
