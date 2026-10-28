---
title: DISCON
description: "El DISCON de RaidProtect ajusta el nivel de peligro de tu servidor de Discord con un clic: 5 niveles que endurecen las protecciones durante un raid."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

El **DISCON** es el nivel de peligro de tu servidor, basado en el modelo del DEFCON. Durante un [raid](/es/learn/discord-raid), tu equipo ya no tiene que abrir `/settings` para cambiar la verificación de Discord, activar el captcha y cerrar los MD uno por uno: un clic en el panel DISCON y aplicamos de golpe todas las protecciones del nivel elegido. Un segundo clic y deshacemos lo que habíamos activado.

## ❓ ¿Cómo funciona? {#working}

- **Cinco niveles**: del nivel 5 (calma) al nivel 1 (catástrofe). Cuanto más bajo es el nivel, más estricta es la protección.
- **Un panel para el equipo**: un mensaje publicado en un canal reservado al staff, con un botón por nivel. Un clic basta para cambiar de nivel.
- **Efectos calculados para tu servidor**: lo que hace un nivel depende de tu configuración (captcha configurado o no, modo Comunidad, acción del Auto RaidMode). La escala mostrada en la configuración y en el panel describe exactamente lo que ocurrirá en tu servidor.
- **Una vuelta limpia**: al bajar de nivel, solo desactivamos lo que el propio DISCON activó. Un captcha, un Bloqueo de MD o un modo raid que hubieras activado a mano se quedan como están.
- **Un cambio manual**: el nivel nunca cambia solo, es tu equipo quien decide.

## 🚦 Los cinco niveles {#levels}

| Nivel | Nombre | Lo que aplicamos |
|---|---|---|
| 🔵 **DISCON 5** | Todo va bien | Verificación de Discord media, nada más. Es el nivel por defecto. |
| 🟢 **DISCON 4** | Vigilancia | [Captcha](./captcha.md) activado si está configurado (canal y rol). Sin captcha, verificación de Discord alta en su lugar. |
| 🟡 **DISCON 3** | Alerta | Verificación de Discord máxima, captcha activado si está configurado, [Bloqueo de MD](./dm-lock.mdx). El captcha se aplica a **todos** los que llegan. |
| 🔴 **DISCON 2** | Crítico | Todo el nivel 3, más el **captcha congelado**: nadie entra. Sin captcha, activamos el [modo raid](./raid-mode.md) en su lugar. |
| ⚪ **DISCON 1** | Catástrofe | Todo el nivel 2, más el **bloqueo total**: @everyone ya no puede escribir, reaccionar, hablar por voz ni usar comandos. |

### Verificación de Discord {#verification}

Cada nivel fija el nivel de verificación de Discord de tu servidor: media en los niveles 5 y 4 (alta en el nivel 4 si el captcha no está configurado), máxima del nivel 3 al nivel 1.

### Captcha en la entrada y captcha congelado {#captcha}

- **Nivel 4**: activamos el captcha si está configurado, aunque lo hubieras desactivado, sin tocar su canal ni su rol. Sigue entonces tu ajuste de [activación](./captcha.md#trigger): en **Automática**, todavía no se impone a nadie fuera de un raid.
- **Nivel 3**: el captcha se impone a todos los que llegan, sea cual sea su activación (ver [prioridad sobre los activadores](#priority)).
- **Niveles 2 y 1**: pasamos el captcha al modo **Panel** y lo **congelamos**. Los recién llegados reciben el rol de verificación y esperan tras la puerta: no pueden resolver la prueba mientras el nivel se mantenga. Una vez que el nivel sube, pasan el captcha con normalidad, sin tener que volver a unirse. Al bajar de nivel, devolvemos al captcha el modo de visualización que tenía antes.

### Bloqueo de MD {#dm-lock}

A partir del nivel 3, activamos el [Bloqueo de MD](./dm-lock.mdx): las estafas pasan por los MD cuando el servidor se cierra. Requiere el [modo Comunidad](../guides/community.md) y el permiso “**Gestionar servidor**” para RaidProtect. Sin estos requisitos, el nivel se aplica igualmente y un aviso te indica que el bloqueo de MD no se ha podido activar.

### Bloqueo total del nivel 1 {#lockdown}

En el nivel 1, retiramos al rol **@everyone** los permisos de expresión: enviar mensajes (incluidos los hilos), añadir reacciones, crear hilos, enviar mensajes de voz, adjuntar archivos, hablar por voz y usar los comandos de aplicación. Se restablecen tal cual al bajar de nivel.

## 🧩 Requisitos de los niveles 2 y 1 {#requirements}

Para que los niveles 2 y 1 retengan realmente a los recién llegados en la entrada, debe cumplirse una de estas dos condiciones:

- **Un captcha configurado** (canal y rol de verificación): es la solución recomendada. El captcha congelado retiene a todos y luego deja entrar a los miembros legítimos cuando vuelve la calma. [Configura el captcha](./captcha.md#config).
- **En su defecto, la acción del Auto RaidMode en “Expulsar a quienes llegan”**: sin captcha, activamos el modo raid, y es su acción la que decide la suerte de los recién llegados. Con la acción “**Bloquear las invitaciones**” (ajuste por defecto), el modo raid abierto por el DISCON no expulsa a nadie. Ajústala en la [configuración del Auto RaidMode](./raid-mode.md#config).

El bloqueo total del nivel 1 también requiere que RaidProtect pueda modificar el rol @everyone (permiso “**Gestionar roles**”). Si no lo consigue, un aviso te lo indica.

## 🔓 Lo que el nivel 1 no bloquea {#lockdown-leaks}

El bloqueo solo afecta al rol **@everyone**. Un miembro conserva por tanto la palabra si otra fuente se la da:

- **Un rol obtenido sin moderador** que tenga él mismo esos permisos: roles de las preguntas del Proceso de bienvenida de Discord, [roles automáticos](./onboarding.md#autorole) de RaidProtect.
- **Una excepción de canal** definida para uno de esos roles.
- **Una excepción @everyone definida en un canal** (por ejemplo “Enviar mensajes” permitido en `#general`).

La configuración DISCON te lista estos accesos en un recuadro naranja. Para neutralizarlos, retira esos permisos a los roles afectados y déjalos en @everyone a nivel de servidor: el permiso del servidor basta, la excepción en el canal deja de ser necesaria.

:::tip
Los roles de tu equipo pueden conservar sus propias excepciones de canal: es lo que les permite seguir moderando durante el bloqueo.
:::

## ⚖️ Prioridad sobre los activadores automáticos {#priority}

El [captcha](./captcha.md#trigger) tiene un ajuste de activación (Automática, Inteligente, Permanente). A partir del **nivel 3**, el DISCON tiene prioridad sobre este ajuste: el captcha se aplica a **todos** los que llegan, sin evaluación caso por caso. El DISCON es una decisión de tu equipo, un activador automático no la discute.

Para ello, el captcha debe estar [configurado](./captcha.md#config), con su canal y su rol. Si simplemente está desactivado, lo activamos mientras dure la alerta. Si nunca se ha configurado, el DISCON no puede imponerlo: se refuerza la verificación de Discord y, en los niveles 2 y 1, el [modo raid](./raid-mode.md) toma el relevo.

## 🛠️ Configuración del DISCON {#config}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Protección**”.
3. Haz clic en “**Configurar**” junto a “**DISCON**”.
4. Elige el canal del panel (de texto o de voz) en el selector, o haz clic en “**Crear el canal del panel**”.
5. Opcionalmente ([Premium](/es/premium)), elige un canal de voz de estado, o haz clic en “**Crear el canal de estado**”.

Debajo de la configuración encuentras el nivel actual, los cinco botones de nivel y la **escala de niveles**, que describe lo que hará cada nivel en tu servidor.

<Settings start="discon" />

### Canal del panel {#panel-channel}

Los botones del panel no requieren ningún permiso: **el acceso al canal hace de control**. Elige por tanto un canal reservado a tu equipo.

- Se rechaza un canal visible para todo el servidor: cualquier miembro podría cambiar el nivel.
- Un canal de voz también sirve: el panel se publica entonces en su canal de texto integrado.
- “**Crear el canal del panel**” crea un canal `#discon` invisible para @everyone. Ábrelo después a los roles de tu equipo.

### Canal de voz de estado <span className="badge-premium">Premium</span> {#voice}

Un canal de voz cuyo nombre muestra el nivel en curso, visible de un vistazo en la lista de canales: `🔵 DISCON 5`, `🟢 DISCON 4`, `🟡 DISCON 3`, `🔴 DISCON 2`, `⚪ DISCON 1`. Nadie puede conectarse a él. “**Crear el canal de estado**” lo crea junto al canal del panel, con los mismos permisos.

:::info
Discord limita el cambio de nombre de un canal a unas 2 veces cada 10 minutos. Si cambias de nivel más rápido, el nombre del canal de voz puede retrasarse: el panel sigue siendo la referencia.
:::

## 📟 El panel DISCON {#panel}

El panel es un mensaje publicado en el canal elegido. Muestra el nivel actual, la leyenda de los cinco niveles con sus efectos en tu servidor y cinco botones de nivel. Su color sigue el nivel en curso.

Para cambiar de nivel, simplemente haz clic en el botón correspondiente. Si el nivel solo se puede aplicar en parte (captcha no configurado, modo Comunidad ausente, permiso que falta), un aviso efímero te lo indica.

El panel DISCON es también el [espacio reservado del `/display staff`](./display.mdx#staff): puedes añadirle bloques desde `/display staff`, pero su canal solo se ajusta desde la configuración DISCON.

## 📑 Logs del DISCON {#logs}

Cada cambio de nivel se registra en tus [logs del servidor](./moderation.mdx#logs), con el miembro que lo hizo:

- “El **nivel de peligro** ha subido de 5 a 3 por @Moderador.”
- “El **nivel de peligro** ha bajado de 3 a 5 por @Moderador.”

## Preguntas frecuentes {#faq}

### ¿Quién puede cambiar el nivel DISCON?

Cualquier persona que vea el canal del panel. Los botones no comprueban ningún permiso: es el canal, reservado al equipo, el que sirve de filtro. Los administradores también pueden cambiar de nivel desde `/settings`.

### ¿El nivel DISCON cambia automáticamente durante un raid?

No. El DISCON siempre lo controla tu equipo. El [Auto RaidMode](./raid-mode.md) sigue siendo la protección automática contra las oleadas de llegadas.

### ¿Qué ocurre al volver al nivel 5?

Volvemos a la verificación media y deshacemos lo que el DISCON había activado: captcha, modo del captcha, Bloqueo de MD, modo raid y bloqueo total. Lo que hubieras activado tú antes de subir de nivel se queda como está.

### ¿El nivel 2 funciona sin captcha?

Sí, pero entonces activa el modo raid, que solo expulsa a los recién llegados si la acción del Auto RaidMode es “Expulsar a quienes llegan”. Para que el nivel 2 retenga a todos, configura el captcha.

### ¿Por qué algunos miembros todavía pueden escribir en el nivel 1?

El bloqueo solo quita la palabra al rol @everyone. Un rol de llegada o una excepción de canal que dé el permiso de escribir lo devuelve de todos modos. La configuración DISCON lista estos accesos para que puedas retirarlos.

### ¿El canal de voz de estado es obligatorio?

No, es opcional y está reservado a Premium. El panel basta para controlar y mostrar el nivel.
