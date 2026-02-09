---
title: Anti-raid
---

## Modo Raid {#raid-mode}

El modo raid es una funcion de emergencia disenada para bloquear instantaneamente a todos los nuevos usuarios que intenten unirse a tu servidor, por una duracion maxima de 24 horas. Para bloquear permanentemente a nuevos miembros, usa el comando [`/joinlock`](./join-lock.mdx).

### ❓ Como funciona el Modo Raid {#working}

RaidProtect activa automaticamente el modo raid si un gran numero de usuarios se une a tu servidor en poco tiempo. Por defecto, el modo raid se activa si mas de 10 usuarios se unen a tu servidor en menos de 10 segundos. Cuando el modo raid esta activado, ningun usuario puede unirse al servidor. Son bloqueados a nivel de invitacion.

:::warning
Las funciones de Comunidad de Discord son esenciales para que el Modo Raid funcione correctamente. [Sigue nuestra guia para asegurar que la Comunidad este activada en tu servidor.](../guides/community.md)
:::

#### Activacion {#enable}

- Para activar manualmente este modo, un usuario con permisos de expulsion debe ejecutar el comando `/raidmode`.
- Se publicara automaticamente un mensaje en el canal de registros para senalar la activacion.

#### Desactivacion {#disable}

El modo raid no se desactiva automaticamente. Recuerda desactivarlo con el mismo comando una vez que la amenaza haya pasado. 😇

:::info
El comando `raidmode` tambien esta [disponible con prefijo](../guides/prefix.md).
:::

### 🚨 Configuracion del Modo Raid automatico {#config}

Si tu servidor frecuentemente recibe muchos nuevos miembros a la vez, es recomendable ajustar este umbral para evitar falsos positivos.

![Captura de pantalla de la configuracion del modo raid automatico](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-raid-mode.webp)

#### Umbral de miembros {#threshold}

1. Usa el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton "**Auto RaidMode**".
3. Selecciona "**Miembros**".
4. Elige el numero de miembros que pueden unirse en 10 segundos.

Puedes dejarlo en el valor predeterminado (10) o ajustarlo al valor deseado haciendo clic en el boton "**Valor personalizado**".

:::note
Recomendamos ingresar un valor entre 10 y 20 miembros en 10 segundos para una buena eficiencia del sistema.
:::

#### Duracion del modo raid {#duration}

1. Usa el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton "**Auto RaidMode**".
3. Selecciona "**Duracion**".
4. Elige la duracion del modo raid (maximo 24h).

Puedes dejarlo en el valor predeterminado (5 minutos) o ajustarlo al valor deseado haciendo clic en el boton "**Valor personalizado**".

## Edad minima de cuenta {#minage}

Para mejorar la seguridad, puedes exigir una edad minima de cuenta de Discord para nuevos miembros.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton "**Edad minima**".
3. Selecciona el valor deseado en el menu desplegable o elige un valor personalizado en formato de fecha (m/h/d/y).

### 🎂 Omision de edad minima de cuenta {#bypass-minage}

Usa el comando: ```/bypass minage [user]```

Reemplaza `[user]` con el ID deseado; tendra 10 minutos para unirse al servidor sin ser expulsado por no cumplir con el requisito de edad. Tambien puedes usar el comando sin especificar un usuario para ver la lista actual de usuarios con omision.
