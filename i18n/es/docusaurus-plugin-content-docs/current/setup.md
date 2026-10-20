---
title: Instalación
description: "Instala y configura RaidProtect en tu servidor de Discord en minutos, con el asistente /setup y luego el panel de control /settings."
---

import Head from '@docusaurus/Head';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

<Head>
  <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"Configurar RaidProtect en un servidor de Discord","description":"Instalar y configurar el bot de protección RaidProtect con los comandos /setup y /settings.","step":[{"@type":"HowToStep","position":1,"name":"Lanzar /setup","text":"Escribe /setup en un canal donde el bot esté activo para abrir el asistente de instalación."},{"@type":"HowToStep","position":2,"name":"Elegir los módulos","text":"Selecciona las funciones que quieres instalar en el menú “Elige los módulos a instalar” y luego haz clic en “Activar”."},{"@type":"HowToStep","position":3,"name":"Validar el resumen","text":"El bot muestra un resumen de lo que va a crear y activar. Haz clic de nuevo en “Activar” para aplicarlo."},{"@type":"HowToStep","position":4,"name":"Ajustar con /settings","text":"Usa /settings en cualquier momento: el panel de control reúne los ajustes en cinco pestañas, General, Llegadas, Protección, Moderación y Utilidades."}]}).replace(/</g, '\\u003c')}</script>
</Head>

RaidProtect se configura con dos comandos: [`/setup`](#install), un asistente que instala de una vez las protecciones esenciales, y [`/settings`](#settings), el panel de control donde ajustas todo lo demás en cualquier momento. Esta guía te explica cómo usarlos.

## Por dónde empezar {#etapes}

Para un servidor que parte de cero, este es el orden recomendado:

1. **Lanza [`/setup`](#install)** y elige los módulos que quieres instalar. RaidProtect crea el canal de logs, los canales y roles necesarios, y aplica los cambios tras un resumen.
2. **Abre la pestaña “Llegadas” de [`/settings`](#settings)**: ajusta el [captcha](./features/captcha.md), el [Auto RaidMode](./features/raid-mode.md) y la [bienvenida de los nuevos miembros](./features/onboarding.md).
3. **Abre la pestaña “Moderación”**: revisa el canal de logs y las [sanciones](./features/sanctions.mdx) (roles de jail y de silencio).
4. **Ajusta el [anti-spam](./features/anti-spam.mdx)** en la pestaña “Protección”: un preajuste basta para empezar.

:::info Comunidad de Discord
El [modo Comunidad](./guides/community.md) de Discord solo lo exigen algunos ajustes, como el bloqueo de invitaciones del Auto RaidMode y el [bloqueo de MD](./features/dm-lock.mdx). El captcha funciona sin él.
:::

## Instalación guiada {#install}

El comando `/setup` está reservado a los administradores. Instala de una vez los módulos que elijas, con valores por defecto probados que luego ajustarás en `/settings`.

### 🔧 Elegir los módulos {#recommended}

1. Ejecuta el comando `/setup`.
2. En el menú “**Elige los módulos a instalar**”, selecciona las funciones deseadas: Comandos por mensajes, Auto RaidMode, Captcha, Edad mínima de la cuenta, Anti-spam, Reportes, Rol de Etiqueta, Bloqueo de MD y HoneyPot. Los módulos ya activos aparecen premarcados.
3. Haz clic en “**Activar**”.
4. El bot resume lo que va a crear o reutilizar. Haz clic de nuevo en “**Activar**” para aplicar, o en “**Volver**” para modificar la selección.

<Settings start="setup" />

Al validar, RaidProtect:

- crea el canal `#raidprotect-logs` si no existe, visible para los administradores y para la persona que añadió el bot;
- retira a `@everyone` los permisos peligrosos (Administrador, Banear, Expulsar, Gestionar el servidor, los canales, los roles, los mensajes, los webhooks y los hilos, Mencionar @everyone, Aislar temporalmente);
- activa cada módulo elegido con sus valores por defecto: prefijo `?`, Auto RaidMode a 10 miembros en 10 segundos, captcha en modo Panel con el canal `#verificación` y el rol `@No verificado`, edad mínima de 6 horas, anti-spam y reportes activados, rol `@Tag`, bloqueo de MD, canal trampa del [HoneyPot](./features/honeypot.md).

:::tip Desactivar un módulo
Desmarcar un módulo en `/setup` no lo desactiva. Para detener una función, pasa por [`/settings`](#settings).
:::

Los [roles automáticos y el mensaje de bienvenida](./features/onboarding.md) no forman parte del asistente: ajústalos en la pestaña “**Llegadas**” de `/settings`.

### 🧭 Nuevo asistente de instalación <span className="badge-experiment">Experimental</span> {#wizard}

Un nuevo asistente `/setup` sustituye la lista de módulos por un recorrido guiado:

- **Sección por sección**: General (con el idioma del servidor), Llegadas, Protección y Moderación, un paso cada vez. Una **vista condensada** reúne todo en una sola pantalla, a un clic.
- **Propuestas adaptadas**: según el tamaño del servidor, si es público, comunitario o si tiene una etiqueta, el asistente premarca las protecciones aconsejadas y explica por qué.
- **Más módulos**: el [mensaje de bienvenida](./features/onboarding.md#welcome-message) (con su canal), el filtro [Otros servidores](./features/automod.md#servers), que elimina las invitaciones a otros servidores, y el [slowmode preventivo](./features/slowmode.md) ([Premium](/es/premium)) en el canal que elijas. El [DISCON](./features/discon.md) se explica ahí: siempre está activo, sin instalar nada.
- **Una verificación antes de empezar**: señala los permisos que le faltan a RaidProtect y los roles situados por encima del suyo, con un botón “**Volver a comprobar**”.
- **Un resumen** de lo que se creará, modificará o ajustará. No se aplica nada antes de “**Instalar**”.
- **Un servidor ya configurado se verifica, no se rehace**: el panel del captcha existente y el bloqueo de MD ya activo se conservan.
- **Y después**: una vista previa de la [auditoría de seguridad](./features/audit.md) cierra la instalación, con accesos directos para probar el captcha, personalizar el mensaje de bienvenida o abrir todos los ajustes. Un paso fallido se retoma volviendo a lanzar `/setup`.

:::info Experimental: Shield Update
El nuevo asistente de instalación llega con la **Shield Update**, prevista para la versión 3.6.0. Por ahora solo se ofrece a un pequeño número de servidores.
:::

## Modificar la configuración {#settings}

El comando `/settings` abre el panel de control de RaidProtect. Está reservado a los administradores y se muestra en un mensaje privado temporal, visible solo para ti.

### 🔍 El panel de control {#menu}

Los ajustes están organizados en cinco pestañas:

- **General**: [idioma](./language.md), [comandos por mensajes](./guides/prefix.md), [permisos](./guides/prefix.md#permissions) y zona horaria del servidor.
- **Llegadas**: [Auto RaidMode](./features/raid-mode.md), [captcha](./features/captcha.md), [edad mínima de la cuenta](./features/onboarding.md#minage), [roles automáticos](./features/onboarding.md#autorole) y [mensaje de bienvenida](./features/onboarding.md#welcome-message).
- **Protección**: [DISCON](./features/discon.md)\*, [anti-spam](./features/anti-spam.mdx), [Automod](./features/automod.md) ([filtro de imágenes](./features/scam-images.md) y [otros servidores](./features/automod.md#servers)\*), [HoneyPot](./features/honeypot.md), [slowmode preventivo](./features/slowmode.md)\*, [Authentification Manager](./features/authentication-manager.mdx) y [bloqueo de MD](./features/dm-lock.mdx).
- **Moderación**: [sanciones](./features/sanctions.mdx), [cuentas duplicadas](./features/alt-accounts.md)\*, logs, [reportes](./features/reports.md) y [transparencia](./features/transparency.md).
- **Utilidades**: [rol de etiqueta](./features/tag-role.md), [bloqueo de canal](./features/channel-lock.md), [rol de servicio](./features/moderation.mdx#onduty) y caché de mensajes.

\* En fase experimental: estas líneas solo aparecen en los servidores que tienen acceso a la Shield Update (DISCON, otros servidores, slowmode preventivo) o a la Identity Update (cuentas duplicadas), en beta pública [Premium](/es/premium).

Cada línea muestra el valor actual del ajuste y un botón: “**Configurar**” abre una pantalla dedicada, “**Editar**” abre una ventana de entrada. Cualquier cambio se aplica de inmediato.

Tras una actualización, una insignia **Nuevo** señala durante dos semanas los ajustes que acaban de llegar, así como su pestaña mientras no la hayas abierto.

Explora el panel de control a continuación, los botones son clicables:

<Settings start="home:arrivals" />

:::info Funciones Premium
Las pantallas reservadas a [Premium](/es/premium) siguen siendo consultables.
:::

### 🕒 Zona horaria {#timezone}

La zona horaria sirve para todo lo que RaidProtect publica a hora fija, como los [resúmenes de transparencia](./features/transparency.md#recaps).

1. Ejecuta el comando `/settings`.
2. En la pestaña “**General**”, haz clic en “**Editar**” junto a “**Zona horaria**”.
3. Elige tu desfase UTC, o introduce un identificador de zona como `Europe/Paris` para que el horario de verano se gestione automáticamente.

Sin ajuste, el servidor está en UTC.

### 🔄 Restablecer un parámetro {#reset}

1. Navega hasta el parámetro deseado.
2. Haz clic en “**Restablecer**”.

El restablecimiento se aplica de inmediato, sin confirmación. Solo las acciones destructivas, como la eliminación del captcha, te piden confirmar.

### 🎨 Personalizar el bot <span className="badge-premium">Premium</span> {#customize}

El botón “**Personalizar**”, al final del panel de control, cambia la apariencia de RaidProtect en tu servidor: apodo, avatar, banner, fuente, efecto y colores del apodo.

<Settings start="customize" />

Las imágenes aceptadas son PNG, JPEG, GIF o WebP, de hasta 10 MB. Si el Premium termina, el avatar, el banner y el estilo del apodo vuelven a los de RaidProtect; el apodo se conserva.

## ¿Qué configuración para tu servidor? {#quelle-config}

El asistente `/setup` ya cubre lo esencial. Si empiezas desde cero, o si preparas tu instalación con una IA, localiza lo que corresponde a tu servidor: cada necesidad apunta a la función que la resuelve.

- **[Raids](/es/learn/discord-raid), oleadas de cuentas que llegan de golpe**: el [Auto RaidMode](./features/raid-mode.md) bloquea o filtra las llegadas mientras dura el ataque, y el [DISCON](./features/discon.md) te permite endurecer todo el servidor con un clic.
- **[Spam](/es/learn/spam-discord), publicidad, enlaces de estafa**: el [anti-spam](./features/anti-spam.mdx) sanciona automáticamente, y el [HoneyPot](./features/honeypot.md) atrapa las cuentas de spam.
- **[Bots](/es/learn/self-bot) que entran en masa**: el [captcha](./features/captcha.md) hace que cada recién llegado demuestre que es humano, y la [edad mínima de la cuenta](./features/onboarding.md#minage) descarta las cuentas creadas el día anterior.
- **Estafas por imagen** (falsos giveaways, phishing): el [filtro de imágenes](./features/scam-images.md) las detecta y las elimina.
- **Riesgo de [nuke](/es/learn/discord-nuke) o cuentas del staff hackeadas**: aplica el [mínimo privilegio](/es/learn/least-privilege) y el [Authentification Manager](./features/authentication-manager.mdx).
- **Una comunidad que puede ayudarte a moderar**: activa los [reportes](./features/reports.md).

Luego ajusta las [sanciones](./features/sanctions.mdx) (expulsión, timeout, baneo, jail) a tu servidor.

:::info ¿Un problema de configuración?
Si encuentras un problema, consulta la sección [Problemas frecuentes](./guides/malfunctions.md) o únete a nuestro [servidor de soporte](https://raidprotect.bot/discord) para obtener ayuda.
:::
