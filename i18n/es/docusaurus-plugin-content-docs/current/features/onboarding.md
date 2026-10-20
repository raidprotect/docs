---
title: Llegadas y bienvenida
description: "La bienvenida de RaidProtect recibe a los nuevos miembros de tu servidor de Discord, les da sus roles y filtra las cuentas demasiado recientes."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

La **bienvenida** de RaidProtect se ocupa de los nuevos miembros de tu servidor de Discord desde su llegada: un **mensaje de bienvenida** con una tarjeta a su nombre, **roles automáticos** y una **edad mínima de la cuenta** que mantiene a raya las cuentas creadas para la ocasión, a menudo usadas en los [raids](/es/learn/discord-raid). Estos tres ajustes se encuentran en la pestaña “**Llegadas**” de `/settings`, junto al [captcha](./captcha.md) y el [Auto RaidMode](./raid-mode.md).

## ❓ ¿Cómo funciona? {#working}

Cuando un usuario se une a tu servidor, el [modo raid](./raid-mode.md#action), la [edad mínima de la cuenta](#minage) y luego el [captcha](./captcha.md) se aplican antes de su admisión. Una vez admitido, recibe sus [roles automáticos](#autorole) y su [mensaje de bienvenida](#welcome-message).

## 👋 Mensaje de bienvenida {#welcome-message}

El mensaje de bienvenida se envía al canal que elijas cuando un miembro es admitido en el servidor. Contiene tu texto y una **tarjeta de bienvenida** generada para cada miembro: su avatar, “Bienvenido a” seguido del nombre del servidor, y su número de miembro.

<Settings start="welcome" />

### Activar el mensaje de bienvenida {#welcome-config}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Llegadas**”.
3. Haz clic en “**Configurar**” junto a “**Mensaje de bienvenida**”.
4. En “**Canal de bienvenida**”, elige el canal de texto donde se enviará el mensaje. Elegir un canal activa el mensaje.

El interruptor de arriba a la derecha de la pantalla activa o desactiva el mensaje de bienvenida. Una vista previa del mensaje se muestra bajo la pantalla y se actualiza con cada modificación.

:::info
El canal de bienvenida no puede ser el del captcha, el del jail, el del HoneyPot ni el del DISCON. Si se elimina el canal, el ajuste se vacía.
:::

### Texto y variables {#welcome-text}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Llegadas**”.
3. Haz clic en “**Configurar**” junto a “**Mensaje de bienvenida**”.
4. En “**Contenido del mensaje**”, haz clic en “**Texto**”.
5. Escribe tu mensaje (1200 caracteres como máximo) y confirma. Deja el campo vacío para volver al mensaje por defecto.

<SettingsModal name="welcomeText" />

El texto por defecto es “¡Bienvenido `{user.mention}` a **`{server.name}`**! 🎉”, en el idioma del servidor. Puedes usar estas variables:

| Variable | Se reemplaza por |
|---|---|
| `{user.mention}` | La mención del miembro |
| `{user.name}` | Su nombre de usuario |
| `{user.displayname}` | Su nombre visible |
| `{user.id}` | Su [identificador](../guides/id.mdx) |
| `{server.name}` | El nombre del servidor |
| `{server.member_count}` | El número de miembros del servidor |
| `{server.id}` | El identificador del servidor |

### Mencionar al miembro {#welcome-mention}

La opción “**Mencionar al miembro**”, activada por defecto, notifica al nuevo miembro cuando se publica su mensaje de bienvenida. Solo menciona a los recién llegados, nunca a @everyone ni a los roles.

### Botones {#welcome-buttons}

Puedes añadir bajo el mensaje botones que llevan a un canal del servidor, por ejemplo “Leer las normas”.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Llegadas**”.
3. Haz clic en “**Configurar**” junto a “**Mensaje de bienvenida**”.
4. En “**Gestionar los botones**”, elige “**Añadir un botón**”.
5. Dale un nombre al botón y elige el canal al que vincularlo.

Para modificar o eliminar un botón, selecciónalo en la misma lista.

**Límites:** 2 botones en la versión gratuita, 4 botones en la versión [Premium](/es/premium). Si el Premium caduca, solo se siguen mostrando los 2 primeros botones.

### Color <span className="badge-premium">Premium</span> {#welcome-color}

Con el [Premium](/es/premium), haz clic en “**Color**” en “**Contenido del mensaje**” para elegir el color de la barra a la izquierda del mensaje: un color RaidProtect de la lista, o un código hexadecimal (por ejemplo `#D35F5F`). Sin elección, el mensaje adopta el color del apodo del bot si lo has [personalizado](/es/premium); si no, el color por defecto. La tarjeta de bienvenida se tiñe del mismo color.

### Afluencia y raids {#welcome-raid}

- **Agrupación:** cuando muchos miembros llegan a la vez, las llegadas se agrupan para no inundar el canal.
- **Pausa durante un raid:** mientras el [modo raid](./raid-mode.md) de RaidProtect o el [Bloqueo de acceso](./join-lock.mdx) estén activos, no se envía ningún mensaje de bienvenida.

## 🏷️ Roles automáticos {#autorole}

Los roles automáticos se dan a cada nuevo miembro desde su llegada, o tras superar el [captcha](./captcha.md) si está activo. Sustituyen al antiguo rol automático del captcha, cuyo ajuste se ha recuperado automáticamente.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Llegadas**”.
3. Haz clic en “**Configurar**” junto a “**Roles automáticos**”.
4. Selecciona uno o varios roles.

Para quitar todos los roles automáticos, haz clic en “**Restablecer**”.

<Settings start="autorole" />

**Límites:** 3 roles en la versión gratuita, 10 roles en la versión [Premium](/es/premium).

:::warning
Evita los roles que tengan permisos: un rol dado automáticamente no debería conceder ningún poder. RaidProtect rechaza los roles gestionados por una integración, los roles por encima del suyo o del tuyo, y los que tienen un permiso de moderación: se conservan los roles aceptables de tu selección, y un mensaje aparte explica por qué se rechazan los demás (si se rechazan todos, la configuración existente no cambia). Te avisa si un rol elegido gana permisos más tarde.
:::
:::info
Si tu servidor usa otro bot para su rol automático, es posible que dé el rol antes del captcha. Sustitúyelo por los roles automáticos de RaidProtect.
:::

## 🎂 Edad mínima de la cuenta {#minage}

Para reforzar la seguridad, puedes exigir una edad mínima a las cuentas de Discord de los nuevos miembros. Las cuentas creadas justo antes de un raid no pasan la puerta. El filtro se aplica en cada llegada.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Llegadas**”.
3. Haz clic en “**Configurar**” junto a “**Antigüedad mínima de la cuenta**”.
4. En “**Antigüedad mínima de la cuenta**”, elige 2 horas, 12 horas, 1 día o 2 días, o un “**Valor personalizado**” (por ejemplo `0a 3d 1h`, 10 años como máximo).
5. En “**Acción**”, elige qué ocurre con las cuentas demasiado recientes.

Para desactivar el filtro, haz clic en “**Restablecer**”. RaidProtect necesita el permiso `KICK_MEMBERS`.

<Settings start="minage" />

### Acciones {#minage-action}

| Acción | Efecto sobre una cuenta demasiado reciente |
|---|---|
| “**Expulsar**” (por defecto) | Se expulsa en cada intento mientras su cuenta sea demasiado reciente. |
| “**Jail hasta la antigüedad requerida**” | Entra sin ver nada del servidor y sale del [jail](./sanctions.mdx#jail) en cuanto tiene la edad requerida. |
| “**Retener en la entrada**” | Queda bloqueada en un [captcha](./captcha.md) que solo puede resolver una vez alcanzada la edad. |

La cuenta recibe un mensaje privado con la fecha en la que tendrá acceso al servidor. Las expulsiones, los jails y los baneos se anotan en el canal de logs.

:::info
- “**Jail hasta la antigüedad requerida**” requiere un Rol de Jail, configurado en la pestaña “**Moderación**” > “**Sanciones**”. Sin él, RaidProtect te propone configurarlo o recurrir a “**Banear hasta la antigüedad requerida**”: la cuenta sale del servidor y su baneo se levanta automáticamente en la fecha correcta.
- “**Retener en la entrada**” requiere un captcha activo en modo **Panel (Interactivo)**.
:::

### 🎫 Bypass de la edad mínima {#bypass-minage}

Usa el comando: ```/bypass minage [user]```

Reemplaza `[user]` con el [identificador](../guides/id.mdx) deseado; este dispondrá de 10 minutos para unirse al servidor sin quedar bloqueado por la edad requerida. También puedes usar el comando sin especificar un usuario para conocer la lista actual de usuarios con bypass.

## Preguntas frecuentes {#faq}

### ¿Cuándo se envía el mensaje de bienvenida?

Cuando el miembro es admitido: desde su llegada si el captcha no se aplica; si no, tras superar el captcha. No se envía durante un raid ni durante un Bloqueo de acceso.

### ¿Se puede quitar la tarjeta de bienvenida?

No, la tarjeta de bienvenida se adjunta a cada mensaje de bienvenida. Con el Premium, puedes cambiar su color.

### ¿Cuántos roles automáticos se pueden dar?

3 roles en la versión gratuita y 10 con el Premium. Los roles que tienen un permiso de moderación se rechazan.

### ¿Los roles automáticos se dan antes del captcha?

No. Cuando el captcha se aplica al miembro, sus roles automáticos se le dan tras superar el captcha.

### ¿Qué edad mínima elegir?

Un valor de unas horas a 1 día basta para descartar la mayoría de las cuentas creadas para un raid, sin molestar a los miembros reales. El [comando `/setup`](../setup.md) establece 6 horas por defecto.

### ¿Una cuenta demasiado reciente es baneada?

No, no por defecto: se expulsa en cada intento. También puedes ponerla en jail hasta la edad requerida o retenerla tras el captcha. El baneo temporal es solo un recurso cuando el jail no está configurado.
