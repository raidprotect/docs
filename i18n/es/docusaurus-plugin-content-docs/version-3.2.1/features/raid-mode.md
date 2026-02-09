---
title: Anti-raid
---

## Modo Raid

El modo raid es una función de emergencia diseñada para bloquear instantáneamente a todos los nuevos usuarios que intenten unirse a tu servidor, superando la limitación nativa de Discord que solo permite este bloqueo durante 24 horas mediante la acción de seguridad "Pausar invitaciones".

### ❓ Cómo funciona el Modo Raid {#working}

RaidProtect activa automáticamente el modo raid si un gran número de usuarios se une a tu servidor en poco tiempo. Por defecto, el modo raid se activa si más de 10 usuarios se unen a tu servidor en menos de 10 segundos. Cuando el modo raid está activado, ningún usuario puede unirse al servidor. Son bloqueados a nivel de invitación.

:::warning
Las funciones de comunidad de Discord son esenciales para que el Modo Raid funcione correctamente. [Sigue nuestra guía para asegurarte de que la Comunidad esté activada en tu servidor.](../guides/community.md)
:::

#### Activación {#enable}

- Para activar este modo manualmente, un usuario con permisos de expulsión debe ejecutar el comando `/raidmode`.
- Se publicará automáticamente un mensaje en el canal de registros para señalar la activación.

#### Desactivación {#disable}

El modo raid no se desactiva solo. Recuerda desactivarlo con el mismo comando una vez que la amenaza haya pasado. 😇

:::info
El comando `raidmode` también está [disponible con prefijo](../guides/prefix.md).
:::

### 🚨 Configuración del Modo Raid Automático {#config}

Si tu servidor recibe frecuentemente muchos nuevos miembros a la vez, es recomendable ajustar este umbral para evitar falsos positivos.

![Captura de pantalla de la configuración del modo raid automático](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-raid-mode.webp)

:::note
Recomendamos establecer un valor entre 10 y 20 miembros en 10 segundos para un rendimiento óptimo del sistema.
:::

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el botón "**Auto RaidMode**".
3. Selecciona el número de miembros permitidos para unirse en 10 segundos.

Puedes dejarlo en el valor predeterminado (10) o ajustarlo al valor deseado haciendo clic en el botón "**Custom Value**".

:::warning
Si el modo raid se activa automáticamente, no olvides desactivarlo una vez que la amenaza haya pasado. Recuerda, no se apaga solo. 😖
:::


## Edad mínima de la cuenta {#minage}

Para mejorar la seguridad, puedes exigir una edad mínima de la cuenta de Discord para los nuevos miembros.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el botón "**Minimum Age**".
3. Selecciona el valor deseado en el menú desplegable o elige un valor personalizado en formato de fecha (m/h/d/y).

### 🎂 Omitir la edad mínima de cuenta {#bypass-minage}

Usa el comando: ```/bypass minage [user]```

Reemplaza `[user]` con el ID deseado; tendrá 10 minutos para unirse al servidor sin ser expulsado por no cumplir con el requisito de edad. También puedes usar el comando sin especificar un usuario para ver la lista actual de usuarios con omisión.
