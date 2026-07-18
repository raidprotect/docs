---
title: Anti-raid
---

import { RaidModeSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

import RaidModeMockup from '@site/src/components/DiscordMessage/mockups/raid-mode';

<RaidModeMockup />

## Modo raid {#raid-mode}

El modo raid es una funcion de emergencia disenada para bloquear al instante a todos los nuevos usuarios que intenten unirse a tu servidor, con una duracion maxima de 24 horas. Para bloquear de forma permanente a los nuevos miembros, usa el [comando `/joinlock`](./join-lock.mdx).

### ❓ Como funciona el modo raid {#working}

RaidProtect activa automaticamente el modo raid si un gran numero de usuarios se une a tu servidor en un corto periodo de tiempo. Por defecto, el modo raid se activa si mas de 10 usuarios se unen a tu servidor en menos de 10 segundos. Cuando el modo raid esta activado, ningun usuario puede unirse al servidor. Son bloqueados a nivel de la invitacion.

:::warning
Las funciones de comunidad de Discord son indispensables para el buen funcionamiento del Modo raid. [Sigue nuestra guia para verificar la activacion de la comunidad en tu servidor.](../guides/community.md)
:::

#### Activacion {#enable}

- Para activar manualmente este modo, un usuario con permisos de expulsion debe ejecutar el comando `/raidmode`.
- Se publicara automaticamente un mensaje en el canal de registros para senalar la activacion.

#### Desactivacion {#disable}

El modo raid no se desactiva automaticamente. Recuerda detenerlo con el mismo comando cuando la amenaza haya pasado. 😇

:::info
El comando `raidmode` es [utilizable mediante prefijo](../guides/prefix.md).
:::

### 🚨 Configuracion del modo raid automatico {#config}

Si tu servidor recibe a menudo muchos nuevos miembros al mismo tiempo, es recomendable modificar este umbral para evitar los falsos positivos.

<RaidModeSettingsMockup />

#### Umbral de miembros {#threshold}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton "**Auto RaidMode**".
3. Selecciona "**Numero de miembros**".
4. Elige el numero de miembros que pueden unirse en 10 segundos.

Puedes dejar el valor por defecto (10) o ajustarlo al valor deseado haciendo clic en el boton "**Valor personalizado**".

:::note
Recomendamos introducir un valor comprendido entre 10 y 20 miembros en 10 segundos para una buena eficacia del sistema.
:::

#### Duracion del raidmode {#duration}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton "**Auto RaidMode**".
3. Selecciona "**Duracion**".
4. Elige la duracion del raidmode (24h maximo).

Puedes dejar el valor por defecto (5 minutos) o ajustarlo al valor deseado haciendo clic en el boton "**Valor personalizado**".

#### Cerrar los MD automaticamente {#close-dm}

Puedes configurar el **auto raid mode** para que **cierre automaticamente los MD del servidor** en cuanto se active. Esto anade una capa de proteccion adicional durante un raid: las cuentas nuevas ya no pueden contactar a tus miembros en privado para hacerles phishing o estafarlos.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton "**Auto RaidMode**".
3. Activa la opcion "**Cerrar los MD**".

Cuando el auto raid mode se desactiva (manualmente o automaticamente tras la duracion configurada), los MD recuperan su configuracion anterior.

:::info
Esta opcion es complementaria al [Cierre permanente de los MD](./dm-lock.mdx): si la activas sin tener el cierre permanente, los MD solo se cierran durante un raid activo.
:::

#### Modo expulsion (Premium) {#kick-mode}

Por defecto, el modo raid bloquea a los recien llegados a nivel de la invitacion. Con el **modo expulsion**, los usuarios que se unen durante un raid son expulsados por RaidProtect en lugar de ser bloqueados en la invitacion.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton "**Auto RaidMode**".
3. Activa la opcion "**Modo expulsion**".

:::info
Esta opcion esta reservada a los servidores **Premium**. Es necesaria para usar el [bypass del modo raid](#bypass-raid).
:::

### 🎫 Bypass del modo raid {#bypass-raid}

¿Esperas a un miembro legitimo mientras hay un raid en curso? Autorizalo a unirse a pesar del modo raid:

Usa el comando: ```/bypass raid [usuario]```

Reemplaza `[usuario]` con el identificador deseado; este dispondra de 10 minutos para unirse al servidor sin ser expulsado por el modo raid. Tambien puedes usar el comando sin especificar un usuario para conocer la lista actual de usuarios con bypass (7 usuarios maximo simultaneamente).

:::warning
El bypass del modo raid requiere el [modo expulsion](#kick-mode): un usuario bloqueado a nivel de la invitacion no puede tener bypass.
:::

## Edad minima {#minage}

Para reforzar la seguridad, puedes exigir una edad minima para las cuentas de Discord de los nuevos miembros.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton "**Edad minima**".
3. Selecciona el valor deseado en el menu de seleccion o elige un valor personalizado expresado en formato de fecha (m/h/d/y).

### 🎂 Bypass de la edad minima de cuenta {#bypass-minage}

Usa el comando: ```/bypass minage [usuario]```

Reemplaza `[usuario]` con el identificador deseado; este dispondra de 10 minutos para unirse al servidor sin ser expulsado por la edad requerida. Tambien puedes usar el comando sin especificar un usuario para conocer la lista actual de usuarios con bypass.
