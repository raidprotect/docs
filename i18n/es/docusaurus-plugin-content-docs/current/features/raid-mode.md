---
title: Anti-raid
---

## Modo raid {#raid-mode}

El modo raid es una funcion de emergencia disenada para bloquear instantaneamente a todos los nuevos usuarios que intenten unirse a tu servidor, con una duracion maxima de 24 horas. Para bloquear permanentemente a los nuevos miembros, usa el [comando `/joinlock`](./join-lock.mdx).

### ❓ Como funciona el modo raid {#working}

RaidProtect activa automaticamente el modo raid si un gran numero de usuarios se une a tu servidor en un corto periodo de tiempo. Por defecto, el modo raid se activa si mas de 10 usuarios se unen a tu servidor en menos de 10 segundos. Cuando el modo raid esta activado, ningun usuario puede unirse al servidor. Son bloqueados a nivel de invitacion.

:::warning
Las funciones de comunidad de Discord son esenciales para que el modo raid funcione correctamente. [Sigue nuestra guia para verificar que la comunidad este activada en tu servidor.](../guides/community.md)
:::

#### Activacion {#enable}

- Para activar manualmente este modo, un usuario con permisos de expulsion debe ejecutar el comando `/raidmode`.
- Un mensaje se publicara automaticamente en el canal de registros para senalar la activacion.

#### Desactivacion {#disable}

El modo raid no se desactiva automaticamente. Recuerda detenerlo con el mismo comando una vez que la amenaza haya pasado. 😇

:::info
El comando `raidmode` es [utilizable mediante prefijo](../guides/prefix.md).
:::

### 🚨 Configuracion del modo raid automatico {#config}

Si tu servidor recibe frecuentemente muchos nuevos miembros simultaneamente, es recomendable modificar este umbral para evitar falsos positivos.

![Captura de pantalla del modo raid automatico](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-raid-mode.webp)

#### Umbral de miembros {#threshold}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton "**Auto RaidMode**".
3. Selecciona "**Numero de miembros**".
4. Elige el numero de miembros que pueden unirse en 10 segundos.

Puedes dejarlo en el valor predeterminado (10) o ajustarlo al valor deseado haciendo clic en el boton "**Valor personalizado**".

:::note
Recomendamos ingresar un valor entre 10 y 20 miembros por 10 segundos para una buena efectividad del sistema.
:::

#### Duracion del modo raid {#duration}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton "**Auto RaidMode**".
3. Selecciona "**Duracion**".
4. Elige la duracion del modo raid (maximo 24 horas).

Puedes dejarlo en el valor predeterminado (5 minutos) o ajustarlo al valor deseado haciendo clic en el boton "**Valor personalizado**".

#### Cerrar los MD automaticamente {#close-dm}

Puedes configurar el **auto raid mode** para que **cierre automaticamente los MD del servidor** en cuanto se active. Esto anade una capa de proteccion adicional durante un raid: las cuentas nuevas ya no pueden contactar a tus miembros en privado para intentar phishing o estafarlos.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton "**Auto RaidMode**".
3. Activa la opcion "**Cerrar los MD**".

Cuando el auto raid mode se desactiva (manualmente o automaticamente despues de la duracion configurada), los MD recuperan su configuracion anterior.

:::info
Esta opcion es complementaria al [Cierre permanente de los MD](./dm-lock.mdx): si la activas sin tener el cierre permanente, los MD solo se cierran durante un raid activo.
:::

## Edad minima {#minage}

Para reforzar la seguridad, puedes exigir una edad minima para las cuentas de Discord de los nuevos miembros.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton "**Edad minima**".
3. Selecciona el valor deseado del menu de seleccion o elige un valor personalizado expresado en formato de fecha (m/h/d/y).

### 🎂 Omision de la edad minima de cuenta {#bypass-minage}

Usa el comando: ```/bypass minage [user]```

Reemplaza `[user]` con el identificador deseado; tendra 10 minutos para unirse al servidor sin ser expulsado por el requisito de edad. Tambien puedes usar el comando sin especificar un usuario para ver la lista actual de usuarios con omision.
