---
title: Captcha (Verificación)
description: "El captcha de RaidProtect bloquea selfbots y raids: cada nuevo miembro demuestra que es humano antes de acceder a tu servidor de Discord."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import CaptchaMockup from '@site/src/components/DiscordMessage/mockups/captcha';

{/* <CaptchaMockup /> : obsoleto en la 3.5.0 (muestra el modo Desafío con expulsión automática) */}

El **captcha** de RaidProtect pide a cada nuevo miembro que copie un código antes de acceder a tu servidor de Discord, lo que bloquea los [selfbots](/es/learn/self-bot) y los [raids](/es/learn/discord-raid) al filtrar las cuentas que no son humanas.

Es una de las funciones más populares de RaidProtect, y sigue siendo totalmente opcional. Tú eliges cuándo imponerlo: en cada llegada, solo durante un raid, o también para las cuentas sospechosas.

## ❓ Funcionamiento del captcha {#working}

El captcha se basa en un rol **@No verificado** y un canal **#verificación**. Cuando un usuario se une a tu servidor:
- **Puesta en espera:** le damos el rol **@No verificado**, que limita su acceso al único canal **#verificación**.
- **Prueba:** en modo Panel, resuelve un puzle en la [Activity RaidProtect](#activity). En modo Desafío, copia un código mostrado en una imagen. Ver los [modos de visualización](#display-mode).
- **Éxito:** se retira el rol **@No verificado** y el miembro accede al servidor. Sus [roles automáticos](./onboarding.md#autorole) y el [mensaje de bienvenida](./onboarding.md#welcome-message) se envían en ese momento.
- **Fallo:** cuando agota sus intentos, es expulsado, puesto en jail o bloqueado unos minutos antes de poder reintentar, según tu ajuste. Puede volver y reintentar el captcha tras una expulsión.
- **Logs:** cada llegada se anota en el canal de logs con la fecha de creación de la cuenta, así como los éxitos, los fallos y los plazos agotados.
- **Diagnóstico:** RaidProtect detecta por sí solo los problemas de permisos, de visibilidad del canal en el [Proceso de bienvenida](../guides/onboarding.md) de Discord y las fugas del rol **@No verificado**, y propone corregirlos.

:::info
**Sin expulsión por defecto.** Un captcha nuevo ya no expulsa a los miembros que no lo resuelven: permanecen en el servidor, sin acceso, hasta que se verifican. Puedes ajustar un [plazo antes de la expulsión](#timeout).
:::
:::warning
**Gestión de permisos:** los permisos del rol **@No verificado** los configura automáticamente RaidProtect. Puedes renombrar el rol y el canal, pero no los elimines. RaidProtect necesita los permisos `KICK_MEMBERS` y `MANAGE_ROLES`, y debe estar situado por encima del rol **@No verificado**.
:::

### Modos de visualización {#display-mode}

| Modo | Lo que ve el nuevo miembro |
|---|---|
| **Panel (Interactivo)**, por defecto | Un mensaje permanente “**Sistema de verificación**” con un botón “**Verificar**”, que abre la [Activity RaidProtect](#activity). El miembro no puede escribir en **#verificación**. |
| **Desafío (Clásico)** | Se publica una imagen en **#verificación** a su llegada, y escribe el código como mensaje en el canal. |

El panel lleva un botón “**Translate**” para leerlo en su idioma, y cada recién llegado es mencionado en el canal de verificación, y luego se elimina el mensaje: así encuentra el canal.

El modo Panel mantiene el canal limpio y permite ajustes adicionales: elección de la sanción cuando se agotan los intentos, [captcha congelado durante un raid](./raid-mode.md#action), [retención en la entrada de las cuentas demasiado recientes](./onboarding.md#minage). El modo Desafío siempre expulsa al miembro al terminar el tiempo concedido o cuando agota sus intentos.

### Activación {#trigger}

| Activación | Cuándo se aplica el captcha |
|---|---|
| **Permanente**, por defecto | En cada llegada, sin condición. |
| **Automática** | Solo durante un raid o un nivel DISCON alto. Los demás recién llegados entran directamente. |
| **Inteligente** | Como Automática, más las cuentas que parecen sospechosas. |

Con **Automática**, el captcha se impone durante un raid solo si el [Auto RaidMode](./raid-mode.md#action) está ajustado en “**Enviar al captcha**” o “**Captcha congelado durante el raid**”, y durante una alerta [DISCON](./discon.md) a partir del nivel 3.

La activación **Inteligente** evalúa el perfil de cada recién llegado. Un miembro aprobado a mano por tu equipo nunca se considera sospechoso.

## 🚪 ¿Cómo configurar el captcha? {#config}

La puesta en marcha del captcha es sencilla y rápida.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Llegadas**”.
3. Haz clic en “**Configurar**” junto a “**Captcha**”.
4. Elige el canal en el que se realizarán los captchas, o usa el botón “**Crear uno para mí**”.
5. Haz clic en “**Activar**”. El rol **@No verificado** se crea y sus permisos se establecen en todos los canales.

El captcha arranca en modo **Panel (Interactivo)**, con activación **Permanente**, con 3 intentos y sin plazo antes de la expulsión. Después puedes ajustar cada opción desde la misma pantalla.

<Settings start="captcha" />

### Modo de visualización y activación {#mode}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Llegadas**”.
3. Haz clic en “**Configurar**” junto a “**Captcha**”.
4. En “**Modo de visualización**”, elige “**Panel (Interactivo)**” o “**Desafío (Clásico)**”.
5. En “**Activación**”, elige “**Permanente**”, “**Automática**” o “**Inteligente**”.

### Verificación en la Activity {#activity}

En modo **Panel**, el botón “**Verificar**” abre la **Activity RaidProtect**: el miembro resuelve un pequeño puzle directamente en Discord, con los colores de tu servidor y con los enlaces de canal de tu [Proceso de bienvenida](../guides/onboarding.md). Una vez verificado, descubre ahí su [tarjeta de bienvenida](./onboarding.md#welcome-message).

- **Puzle fallido:** como un código incorrecto, consume un intento, y la sanción prevista cae cuando se agotan los intentos. La Activity anuncia primero el resultado al miembro y luego se aplica la sanción.
- **Éxito:** el miembro queda verificado al salir de la pantalla de éxito. Si hace clic en “**Verificar**” entretanto, su validación se aplica de inmediato en lugar de volver a lanzar la Activity.
- **Robot:** un captcha resuelto por un autómata se sanciona de inmediato, como al agotarse los intentos: expulsión, jail o bloqueo según tu ajuste.
- **Revisión por tu equipo:** en caso de duda, el miembro queda bloqueado en la entrada, sin plazo en marcha, y tu equipo recibe un informe automático del captcha. Llega a los [logs del captcha](#logs), en su defecto al canal de [reportes](./reports.md), y en su defecto a los logs del servidor. Una vez atendido el informe, ofrece “**Dejar entrar**”, “**Vincular a otro miembro**” (con la [Identity Update](#activity-alts)) y “**Rechazar**”, que aplica tu acción de fallo del captcha (expulsión, jail o bloqueo): el menú de sanciones no aparece ahí.
- **Jail tras agotar los intentos:** este jail no tiene duración y también abre un informe de revisión. “**Dejar entrar**” levanta el jail y valida al miembro; si no, sanciónalo.
- **Verificación del dispositivo rechazada:** la Activity pide al miembro su conformidad antes de verificar su dispositivo. Si la rechaza, sufre la acción de fallo como tras agotar los intentos (expulsión, jail o bloqueo).
- **Activity que no se abre:** el miembro puede hacer clic en “**Introducir un código**”. Un código correcto pasa entonces a revisión por tu equipo.
- **Borrado de datos:** un miembro puede solicitar el borrado de sus datos de verificación en [privacy@raidprotect.bot](mailto:privacy@raidprotect.bot). Vuelve entonces a pasar el captcha, y sus sanciones se mantienen.

#### Cuentas duplicadas detectadas por el captcha <span className="badge-experiment">Experimental</span> {#activity-alts}

Con la [Identity Update](./alt-accounts.md), la Activity también detecta a los recién llegados probablemente manejados por la misma persona que un miembro de tu servidor:

- **Vínculo seguro:** las cuentas se vinculan automáticamente en [`/alt`](./alt-accounts.md#alt). Los logs del captcha lo señalan, con un botón “**Desvincular**”.
- **Vínculo probable:** si [Una sola cuenta por persona](./alt-accounts.md#single-account) está activo, el miembro pasa a revisión. “**Vincular a otro miembro**” las vincula en `/alt` y lo deja entrar; si no se ha detectado ninguna cuenta, una ventana te pide elegir al miembro (“**Cuenta ya presente en el servidor**”). Si no, el miembro entra, y los logs del captcha señalan el vínculo probable con un botón “**Vincular cuentas**”.
- **Vínculo seguro no aplicado:** no se vincula nada automáticamente si una cuenta del grupo forma parte del equipo del servidor, si el recién llegado está vinculado a varios grupos `/alt`, o si las dos cuentas ya tienen cada una su grupo (dos grupos nunca se fusionan automáticamente). El vínculo se te propone entonces de la misma manera.

Solo se te muestran las cuentas de tu servidor: no se dice nada de los demás servidores.

:::info Experimental: Identity Update
La detección de cuentas duplicadas forma parte de la **Identity Update**, prevista para la versión 3.7.0. Hasta su lanzamiento, está en fase experimental, en beta pública para los servidores [Premium](/es/premium).
:::

### Modo de prueba {#test-mode}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Llegadas**”.
3. Haz clic en “**Configurar**” junto a “**Captcha**”.
4. Haz clic en “**Activar**” junto a “**Modo de prueba**”.

En modo Panel, un miembro de tu equipo ya verificado (permiso **Gestionar servidor**, o el propietario) puede entonces hacer clic en “**Verificar**” para repetir el captcha. Los intentos y el tiempo de resolución se aplican como a un recién llegado: el log del captcha dice lo que se habría hecho, no se aplica nada.

### Dificultad {#difficulty}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Llegadas**”.
3. Haz clic en “**Configurar**” junto a “**Captcha**”.
4. Haz clic en “**Editar**” junto a “**Dificultad**”.
5. Ajusta los campos de la ventana y confirma.

<SettingsModal name="captchaDifficulty" />

| Ajuste | Valores | Por defecto |
|---|---|---|
| “**Intentos**” | de 1 a 10 intentos | 3 intentos |
| “**Acción cuando se agotan los intentos**” (Panel) | “**Intentos agotados: Expulsar**”, “**Intentos agotados: Jail**” o “**Intentos agotados: Bloquear 10 min**” | Expulsar |
| “**Tiempo de resolución**” (Panel) | Desactivado, 15, 30 o 45 segundos, 1, 2, 3 o 5 minutos: el tiempo concedido para resolver el puzle, contado desde la primera prueba (tras el acuerdo del miembro). Un código en imagen conserva al menos 2 minutos | 30 segundos |
| “**Tiempo de resolución (antes de la expulsión)**” (Desafío) | 3, 5, 10 o 15 minutos, o un valor de 30 segundos a 15 minutos: pasado este plazo, el miembro es expulsado | 5 minutos |

:::info
La opción “**Intentos agotados: Jail**” pone al miembro en el [jail](./sanctions.mdx#jail) en lugar de expulsarlo. Para ello hace falta un Rol de Jail configurado en la pestaña “**Moderación**” > “**Sanciones**”. La opción “**Intentos agotados: Bloquear 10 min**” mantiene al miembro en el servidor: espera 10 minutos y vuelve a empezar con intentos nuevos.
:::

### Plazo antes de la expulsión {#timeout}

En modo Panel, este plazo cuenta desde la llegada del miembro: si no se verifica a tiempo, sufre tu acción de fallo (expulsión, jail o bloqueo).

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Llegadas**”.
3. Haz clic en “**Configurar**” junto a “**Captcha**”.
4. En “**Plazo antes de la expulsión**”, elige “**Desactivado**”, 5, 15 o 30 minutos, o un “**Valor personalizado**” de 30 segundos a 30 minutos.

:::warning
Con el plazo desactivado, las cuentas no verificadas permanecen en el servidor y pueden escribir por MD a tus miembros. Ajusta un plazo, o cierra los MD con el [Bloqueo de MD](./dm-lock.mdx).
:::

### Alertas de la pantalla Captcha {#alerts}

La pantalla del captcha muestra recuadros cuando algo impide que la verificación funcione bien:
- **Canal invisible a la llegada:** el canal de verificación no está en ningún canal por defecto del Proceso de bienvenida de Discord. Haz clic en “**Mover a** _categoría_” o “**Crear una nueva categoría**” para que lo corrijamos, o sigue la [guía del Proceso de bienvenida](../guides/onboarding.md).
- **Fugas del rol @No verificado:** roles dados por el Proceso de bienvenida de Discord al mismo tiempo que **@No verificado** eluden la verificación, el rol **@No verificado** tiene permisos, **@everyone** tiene el permiso `ADMINISTRATOR`, o hay canales que siguen siendo visibles para los miembros en verificación (o en jail). El botón “**Corregir**” cierra los canales afectados.
- **Nivel de verificación Alto:** este nivel de Discord hace esperar 10 minutos antes de poder escribir. El captcha ya filtra la entrada: el nivel aconsejado con el captcha es **Medio**.
- **Permisos que faltan:** RaidProtect necesita `KICK_MEMBERS` y `MANAGE_ROLES`.

Una vez resuelto el problema, haz clic en “**Actualizar**”.

### Desactivar o eliminar el captcha {#disable}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Llegadas**”.
3. Haz clic en “**Configurar**” junto a “**Captcha**”.
4. En “**Modo de visualización**”, elige:
   - “**Desactivado**” para suspender la verificación sin perder nada de tu configuración;
   - “**Eliminar**” para borrar la configuración y el rol de verificación. RaidProtect te pide una confirmación.

:::tip
Para que el captcha pase desapercibido fuera de los raids, ajusta mejor su [activación](#trigger) en **Automática** que desactivarlo.
:::

## ✨ Funciones adicionales {#additional-features}

### Logs separados {#logs}

Si tu servidor es popular, los logs del captcha pueden saturar tu canal de logs principal. Puedes moverlos a otro canal.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Llegadas**”.
3. Haz clic en “**Configurar**” junto a “**Captcha**”.
4. Haz clic en “**Editar**” junto a “**Logs**”.
5. Elige el canal al que se enviarán los logs del captcha.

También encuentras este ajuste en la pestaña “**Moderación**” > “**Logs**”, en la línea “**Captcha**”.

### Rol automático {#autorole}

El rol automático ya no se ajusta en el captcha: se ha unido a los [Roles automáticos](./onboarding.md#autorole) de la pestaña “**Llegadas**”, que aceptan varios roles. Tu antiguo ajuste se ha recuperado ahí automáticamente. Cuando el captcha está activo, estos roles se dan tras superar el captcha.

### Bypass del captcha {#bypass}

Usa el comando: ```/bypass captcha [user]```

Reemplaza `[user]` con el [identificador](../guides/id.mdx) deseado; este dispondrá de 10 minutos para unirse al servidor sin necesidad de resolver el captcha. Si el usuario ya está presente, el captcha se resolverá automáticamente. También puedes usar el comando sin especificar un usuario para conocer la lista actual de usuarios con bypass.

## 🤝 Captcha y anti-raid, mejor juntos {#raid}

El captcha trabaja con las demás protecciones de las llegadas:
- **[Auto RaidMode](./raid-mode.md#action):** con la acción “**Enviar al captcha**”, los recién llegados de una oleada pasan el captcha en lugar de ser expulsados. Con “**Captcha congelado durante el raid**”, esperan tras el captcha y lo pasan después de la oleada.
- **[Edad mínima de la cuenta](./onboarding.md#minage):** la acción “**Retener en la entrada**” bloquea una cuenta demasiado reciente en un captcha que solo podrá resolver una vez alcanzada la edad.
- **[DISCON](./discon.md#captcha):** desde el nivel 4, el captcha se activa si está configurado, aunque lo hubieras desactivado. A partir del nivel 3, se impone a todos los recién llegados, sea cual sea su activación.

## Preguntas frecuentes {#faq}

### ¿Cuánto tiempo se tiene para resolver el captcha?

En modo Panel, el miembro tiene 3 intentos por defecto (de 1 a 10) y 30 segundos por defecto para resolver el puzle (se puede desactivar, hasta 5 minutos), contados desde la primera prueba. No se aplica ningún plazo de expulsión por defecto, pero puedes ajustar uno de hasta 30 minutos. En modo Desafío, tiene 5 minutos por defecto (de 30 segundos a 15 minutos) antes de ser expulsado.

### ¿Qué pasa si un miembro falla el captcha?

Cuando agota sus intentos, es expulsado del servidor o, en modo Panel, puesto en jail o bloqueado 10 minutos antes de poder reintentar si lo has elegido. Tras una expulsión, puede volver y reintentar el captcha.

### ¿Los miembros no verificados son expulsados automáticamente?

No en un captcha nuevo: en modo Panel, el plazo antes de la expulsión está desactivado por defecto. Los miembros no verificados permanecen en el servidor sin acceso a los canales. Ajusta un plazo antes de la expulsión, o cierra los MD del servidor, para evitar que escriban en privado a tus miembros.

### ¿Se puede activar el captcha solo durante un raid?

Sí. Ajusta su activación en **Automática** y la acción del Auto RaidMode en “**Enviar al captcha**” o “**Captcha congelado durante el raid**”. El resto del tiempo, los recién llegados entran directamente.

### ¿Hay que activar la comunidad de Discord para usar el captcha?

No, el captcha funciona sin la comunidad. Si está activada, comprueba que el canal de verificación forme parte de los canales por defecto del [Proceso de bienvenida](../guides/onboarding.md).

### ¿Se puede eximir a un miembro del captcha?

Sí, con el comando `/bypass captcha [user]`. El miembro dispone de 10 minutos para unirse sin resolver el captcha, y si ya está presente, el captcha se resuelve automáticamente.

### ¿Se pueden renombrar el rol @No verificado y el canal #verificación?

Sí, puedes renombrarlos libremente. No los elimines, porque RaidProtect los necesita para que el captcha funcione y configura sus permisos automáticamente.
