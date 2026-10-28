---
title: Anti-raid
description: "El modo raid de RaidProtect bloquea al instante las llegadas masivas a tu servidor de Discord, de forma automática en cuanto detecta una oleada sospechosa."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

import RaidModeMockup from '@site/src/components/DiscordMessage/mockups/raid-mode';

{/* <RaidModeMockup /> : obsoleto en la 3.5.0 (muestra la expulsión como única acción del modo raid) */}

## Modo raid {#raid-mode}

El **modo raid** de RaidProtect es una función de emergencia que trata a los nuevos usuarios que intentan unirse a tu servidor durante una [oleada de llegadas sospechosa](/es/learn/discord-raid), durante 24 horas como máximo. Nuestro bot de protección lo activa solo en cuanto detecta una oleada, y también puedes activarlo a mano. Tú eliges qué hacemos con los recién llegados: bloquear las invitaciones, expulsarlos o enviarlos al [captcha](./captcha.md). Para cerrar de forma duradera el servidor a los nuevos miembros, usa el [comando `/joinlock`](./join-lock.mdx).

### ❓ ¿Cómo funciona el modo raid? {#working}

- **Detección:** el **Auto RaidMode** activa el modo raid cuando demasiados usuarios se unen a tu servidor a la vez. Por defecto, se activa con 10 llegadas en 10 segundos.
- **Reacción:** durante el modo raid, los recién llegados se tratan según la [acción durante el raid](#action) que hayas elegido. Las cuentas de la oleada que activó el modo también se tratan: expulsadas, o devueltas al captcha con las acciones captcha.
- **Fin:** el modo raid se corta solo tras la [duración configurada](#duration), 5 minutos por defecto.
- **Logs:** se publica un mensaje en el canal de logs con cada activación y desactivación.
- **Bienvenida:** el [mensaje de bienvenida](./onboarding.md#welcome-message) se calla durante la oleada, para no inundar el canal de bienvenida.

:::warning
Con la acción “**Bloquear las invitaciones**” (por defecto), las funciones comunitarias de Discord son indispensables para el modo raid. [Sigue nuestra guía para verificar la activación de la comunidad en tu servidor.](../guides/community.md) Las demás acciones funcionan sin la comunidad.
:::

#### Activación {#enable}

Un usuario con el permiso de expulsión puede activar el modo raid a mano.

Usa el comando: ```/raidmode [status] [duration]```

- Sin opciones, el comando muestra el estado del modo raid con un botón para activarlo o desactivarlo.
- Reemplaza `[status]` con **True** para activarlo, **False** para desactivarlo.
- Reemplaza `[duration]` con la duración deseada (por ejemplo `30m` o `2h`, 24 horas como máximo). Sin duración, recuperamos la del Auto RaidMode.

Se publica automáticamente un mensaje en el canal de logs para señalar la activación. El modo raid manual aplica la misma [acción](#action) que el Auto RaidMode.

#### Desactivación {#disable}

El modo raid se desactiva solo al final de su duración. También puedes detenerlo antes con el comando `/raidmode`, una vez descartada la amenaza. 😇

:::info
El comando `raidmode` es [utilizable mediante prefijo](../guides/prefix.md).
:::

### 🚨 Configuración del modo raid automático {#config}

Si tu servidor recibe a menudo muchos nuevos miembros a la vez, conviene modificar el umbral para evitar falsos positivos. Todos los ajustes están en la misma pantalla.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Llegadas**”.
3. Haz clic en “**Configurar**” junto a “**Auto RaidMode**”.

El interruptor de arriba a la derecha de la pantalla activa o desactiva el Auto RaidMode. RaidProtect necesita el permiso `MANAGE_GUILD`.

<Settings start="antiraid" />

#### Umbral de miembros {#threshold}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Llegadas**”.
3. Haz clic en “**Configurar**” junto a “**Auto RaidMode**”.
4. En “**Número de miembros / 10 segundos**”, elige 10, 15, 20 o 30 miembros, o un “**Valor personalizado**”.

El umbral se cuenta en una ventana de 10 segundos. El valor por defecto es de 10 miembros.

:::note
Recomendamos un valor comprendido entre 10 y 20 miembros en 10 segundos para una buena eficacia del sistema.
:::

#### Duración del raidmode {#duration}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Llegadas**”.
3. Haz clic en “**Configurar**” junto a “**Auto RaidMode**”.
4. En “**Duración**”, elige 1, 2, 5 o 10 minutos, o un “**Valor personalizado**” de 10 segundos a 24 horas (por ejemplo `5m 30s`).

La duración por defecto es de 5 minutos.

#### Acción durante el raid {#action}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Llegadas**”.
3. Haz clic en “**Configurar**” junto a “**Auto RaidMode**”.
4. En “**Acción durante el raid**”, elige la acción que se aplicará a los recién llegados.

| Acción | Efecto sobre los recién llegados | Disponibilidad |
|---|---|---|
| “**Bloquear las invitaciones**” (por defecto) | Discord cierra las invitaciones del servidor, nadie nuevo entra. | Gratuito, comunidad requerida |
| “**Expulsar a quienes llegan**” | Cada recién llegado es expulsado y recibe un mensaje privado que le invita a volver una vez desactivado el modo raid. | [Premium](/es/premium) |
| “**Enviar al captcha**” | Los recién llegados pasan el captcha en lugar de ser expulsados. | Gratuito, captcha activo requerido |
| “**Captcha congelado durante el raid**” | Los recién llegados esperan tras el captcha y lo pasan después de la oleada. | Gratuito, captcha activo en modo Panel requerido |

:::tip
Con las acciones captcha, ajusta la [activación del captcha](./captcha.md#trigger) en **Automática**: el captcha solo se impone entonces durante los raids, y tus recién llegados entran directamente el resto del tiempo.
:::

#### Modo expulsión <span className="badge-premium">Premium</span> {#kick-mode}

El antiguo interruptor “**Modo expulsión**” se ha convertido en la acción “**Expulsar a quienes llegan**” de la [acción durante el raid](#action). Sigue reservada a los servidores [**Premium**](/es/premium) y funciona sin la comunidad de Discord. Si el Premium caduca, la acción vuelve a “**Bloquear las invitaciones**”. Del mismo modo, una acción captcha cuyo captcha no se puede usar recurre al modo normal (oleada expulsada, luego invitaciones bloqueadas), nunca a la expulsión.

#### Cerrar los MD automáticamente {#close-dm}

Puedes configurar el **Auto RaidMode** para que **cierre automáticamente los MD del servidor** en cuanto se active. Esto añade una capa de protección durante un raid: las cuentas nuevas ya no pueden contactar a tus miembros en privado para [hacerles phishing](/es/learn/token-grabber) o estafarlos.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Llegadas**”.
3. Haz clic en “**Configurar**” junto a “**Auto RaidMode**”.
4. Haz clic en “**Activar**” junto a “**Cerrar los MD**”.

Cuando el modo raid termina, los MD recuperan su configuración anterior.

:::info
Esta opción solo se aplica con la acción “**Bloquear las invitaciones**”, que pasa por las acciones de seguridad de Discord. Es complementaria del [Bloqueo de MD permanente](./dm-lock.mdx): sin bloqueo permanente, los MD solo se cierran durante un raid activo.
:::

### 🎫 Bypass del modo raid {#bypass-raid}

¿Esperas a un miembro legítimo mientras hay un raid en curso? Permítele unirse a pesar del modo raid:

Usa el comando: ```/bypass raid [user]```

Reemplaza `[user]` con el [identificador](../guides/id.mdx) deseado; este dispondrá de 10 minutos para unirse al servidor sin ser expulsado por el modo raid. También puedes usar el comando sin especificar un usuario para conocer la lista actual de usuarios con bypass (7 usuarios máximo simultáneamente).

:::warning
El bypass del modo raid solo se aplica con la acción “**Expulsar a quienes llegan**”: un usuario bloqueado a nivel de la invitación no puede tener bypass. Con las acciones captcha, usa mejor el [bypass del captcha](./captcha.md#bypass).
:::

## Edad mínima {#minage}

La edad mínima de la cuenta tiene su propia sección en la página [Llegadas y bienvenida](./onboarding.md#minage): ajuste de la antigüedad, elección de la acción (expulsión, jail hasta la edad requerida, retención en la entrada) y bypass.

### 🎂 Bypass de la edad mínima de cuenta {#bypass-minage}

Usa el comando ```/bypass minage [user]```, detallado en el [bypass de la edad mínima](./onboarding.md#bypass-minage).

## Preguntas frecuentes {#faq}

### ¿El modo raid se activa automáticamente?

Sí. Por defecto, activamos el modo raid en cuanto 10 usuarios se unen a tu servidor en 10 segundos. Este umbral es configurable en los ajustes del Auto RaidMode.

### ¿Qué hace el modo raid con los recién llegados?

Depende de la acción elegida: bloquear las invitaciones (por defecto), expulsar a los recién llegados ([Premium](/es/premium)), enviarlos al captcha, o hacerlos esperar tras un captcha congelado hasta el final de la oleada.

### ¿Cómo activar el modo raid manualmente?

Un usuario con el permiso de expulsión ejecuta el comando `/raidmode`. Se publica entonces un mensaje en el canal de logs para señalar la activación, y la acción elegida se aplica a los recién llegados.

### ¿El modo raid se desactiva solo?

Sí. Se corta tras la duración elegida en `/raidmode` o, en su defecto, tras la duración del Auto RaidMode (5 minutos por defecto, 24 horas como máximo). Puedes detenerlo antes con el mismo comando.

### ¿Hay que activar la comunidad de Discord?

Solo para la acción “**Bloquear las invitaciones**”, que usa el cierre de invitaciones de Discord. Las acciones “**Expulsar a quienes llegan**”, “**Enviar al captcha**” y “**Captcha congelado durante el raid**” funcionan sin ella.

### ¿Se puede dejar que un miembro legítimo se una durante un raid?

Sí, con el comando `/bypass raid [user]` cuando la acción es “**Expulsar a quienes llegan**”: el miembro dispone entonces de 10 minutos para unirse sin ser expulsado (7 usuarios con bypass máximo al mismo tiempo). Con las acciones captcha, usa `/bypass captcha [user]`.
