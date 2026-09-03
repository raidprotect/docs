---
title: Instalación
description: "Instala y configura RaidProtect en tu servidor de Discord en minutos con el comando /settings y el menú de configuración."
---

import Head from '@docusaurus/Head';

<Head>
  <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"HowTo","name":"Configurar RaidProtect en un servidor de Discord","description":"Instalar y configurar el bot de protección RaidProtect con los comandos /setup y /settings.","step":[{"@type":"HowToStep","position":1,"name":"Lanzar /setup","text":"Escribe /setup en un canal donde el bot esté activo para iniciar la configuración guiada."},{"@type":"HowToStep","position":2,"name":"Configuración recomendada","text":"Selecciona «Configuración recomendada» y activa o desactiva las funciones clave mediante el menú de selección."},{"@type":"HowToStep","position":3,"name":"Validar los cambios","text":"El bot muestra un resumen de las funciones activadas y de los cambios antes de aplicarlos al servidor."},{"@type":"HowToStep","position":4,"name":"Ajustar con /settings","text":"Usa /settings en cualquier momento para visualizar, modificar o restablecer tus parámetros."}]}`}</script>
</Head>

RaidProtect simplifica la gestión de tu servidor gracias a dos herramientas potentes: el comando [`/setup`](#install) para una configuración guiada paso a paso y el comando [`/settings`](#settings) para modificar tus parámetros en cualquier momento a través de un menú centralizado. Esta guía de instalación te explica cómo usarlos de manera eficaz.

## Por dónde empezar {#etapes}

Para un servidor que parte de cero, este es el orden recomendado:

1. **Activa el modo Comunidad de Discord** (Ajustes del servidor, luego «Activar la comunidad»). Es un requisito previo para el [captcha](./features/captcha) y el [modo raid](./features/raid-mode).
2. **Lanza [`/setup`](#install)**: aquí eliges qué funciones activar, mediante la configuración recomendada. RaidProtect crea automáticamente el canal de registros y aplica los cambios tras un resumen.
3. **Ajusta el [anti-spam](./features/anti-spam)**: sus sanciones se personalizan por tipo de spam.
4. **Ajusta en cualquier momento con [`/settings`](#settings).**

## Instalación guiada {#install}

El comando `/setup` está diseñado para ayudarte a configurar RaidProtect rápidamente o mediante un enfoque detallado según tus necesidades.
<!--
Te propone dos modos de configuración: [recomendada](#recommended) o [avanzada](#advanced).
-->

### 🔧 Configuración recomendada {#recommended}

Permite activar o desactivar las funciones principales en un abrir y cerrar de ojos gracias a un menú de selección interactivo.

1. Usa el comando `/setup`.
2. Selecciona el botón "**Configuración recomendada**".
3. Activa o desactiva las funciones deseadas usando el menú de selección.

El bot te enviará luego un resumen de las funciones activadas y de los cambios que aportará al servidor.

![Captura de pantalla de la configuración recomendada](../../../en/docusaurus-plugin-content-docs/current/assets/rp-setup.webp)

<!--
### 🛠️ Configuración avanzada {#advanced}

Si deseas configurar el bot de una manera más detallada, opta por la configuración avanzada. El bot te guía paso a paso con explicaciones claras.

1. Usa el comando `/setup`.
2. Selecciona el botón "**Configuración avanzada**".
3. Cada paso presenta una función, su utilidad y una configuración mínima recomendada.
4. Usa los botones "**Anterior**" y "**Siguiente**" para avanzar o retroceder.

Al final, se muestra un resumen de los parámetros para confirmar tus elecciones.
-->
## Modificar la configuración {#settings}

El comando `/settings` es el comando de gestión de tus parámetros una vez realizada la instalación. Te permite visualizar, ajustar o personalizar las funciones de RaidProtect en cualquier momento, de manera simple y rápida.

### 🔍 Menú de parámetros {#menu}

1. Escribe `/settings` en un canal donde el bot esté activo.
2. Navega fácilmente entre las diferentes secciones para encontrar los parámetros que deseas modificar.
3. Ajusta las opciones: cada categoría presenta una lista de opciones modificables en forma de botones o menús desplegables.

import SettingsMockup from '@site/src/components/DiscordMessage/mockups/settings';

<SettingsMockup />

### 🔄 Restablecer un parámetro {#reset}

1. Navega hasta el parámetro deseado.
2. Haz clic en "**Restablecer**".

![Captura de pantalla del botón restablecer](../../../en/docusaurus-plugin-content-docs/current/assets/rp-button-reset.webp)

El bot confirmará el restablecimiento antes de aplicar los cambios.

## ¿Qué configuración para tu servidor? {#quelle-config}

La configuración recomendada de `/setup` ya te guía en estas decisiones. Si empiezas desde cero, o si preparas tu instalación con una IA, localiza lo que corresponde a tu servidor: cada necesidad apunta a la función que la resuelve.

- **Raids, oleadas de cuentas que llegan de golpe**: el [modo raid](./features/raid-mode) cierra las entradas y bloquea los canales mientras dura el ataque.
- **Spam, publicidad, enlaces de estafa**: el [anti-spam](./features/anti-spam) sanciona automáticamente, y el [HoneyPot](./features/honeypot) atrapa las cuentas de spam.
- **Bots que se registran en masa**: el [captcha](./features/captcha) hace que cada recién llegado demuestre que es humano.
- **Estafas por imagen** (falsos giveaways, phishing): [ScamLens](./features/scam-images) las detecta y las elimina.
- **Riesgo de nuke o cuentas del staff hackeadas**: aplica el [mínimo privilegio](/es/learn/least-privilege) y el [Authentication Manager](./features/authentication-manager).
- **Una comunidad que puede ayudarte a moderar**: activa los [reportes](./features/reports).

Luego ajusta las [sanciones](./features/sanctions) (expulsión, timeout, baneo, jail) a tu servidor.

:::info ¿Un problema de configuración?
Si encuentras un problema, consulta la sección [Problemas frecuentes](./guides/malfunctions) o únete a nuestro [servidor de soporte](https://raidprotect.bot/discord) para obtener ayuda.
:::
