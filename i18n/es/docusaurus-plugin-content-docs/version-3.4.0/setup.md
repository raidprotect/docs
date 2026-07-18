---
title: Instalación
---

RaidProtect simplifica la gestión de tu servidor gracias a dos herramientas potentes: el comando [`/setup`](#install) para una configuración guiada paso a paso y el comando [`/settings`](#settings) para modificar tus parámetros en cualquier momento a través de un menú centralizado. Esta guía de instalación te explica cómo usarlos de manera eficaz.

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

:::info ¿Un problema de configuración?
Si encuentras un problema, consulta la sección [Problemas frecuentes](./guides/malfunctions) o únete a nuestro [servidor de soporte](https://raidprotect.bot/discord) para obtener ayuda.
:::
