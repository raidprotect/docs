---
title: Transparencia
description: "La Transparencia de RaidProtect muestra a tus miembros cómo se modera el servidor: resúmenes periódicos, un modlog público y el comando /transparency."
---

import TransparencyMockup from '@site/src/components/DiscordMessage/mockups/transparency';

<TransparencyMockup />

La Transparencia permite mostrar a tus miembros cómo se modera el servidor. Se basa en tres elementos complementarios: unos **resúmenes de moderación periódicos**, un **modlog público** y el **comando `/transparency`**.

## 🛠️ Configuración de la Transparencia {#config}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el botón "**Transparencia**".

El menú te da acceso a los "**Resúmenes periódicos**", al "**Modlog público**" y al botón de activación del "**Comando transparency**".

## 📊 Resúmenes periódicos {#recaps}

Un resumen es un compendio agregado de las acciones de moderación, publicado automáticamente en un canal según la frecuencia elegida.

1. En el menú Transparencia, haz clic en "**Resúmenes periódicos**".
2. Haz clic en "**Añadir un resumen**".
3. Configura el resumen: la **frecuencia**, el **canal** de publicación y, opcionalmente, un rol a **mencionar**.

Las frecuencias disponibles son: **Semanal** (por defecto), **Cada dos semanas**, **Mensual**, **Trimestral** y **Anual**. Se publica una vista previa del resumen en el canal en cuanto lo defines.

El resumen contiene:
- el **número total de acciones de moderación** del periodo;
- el detalle por tipo de sanción (baneos, softbans, expulsiones, timeouts, silencios, encarcelamientos, advertencias y otras acciones);
- el número de **estafas bloqueadas por [ScamLens](./scam-images.md)**;
- el reparto entre acciones **automáticas** y acciones **del equipo**.

:::info
En la versión gratuita, puedes configurar **un solo resumen**. Los servidores **Premium** pueden crear varios simultáneamente (por ejemplo, un resumen semanal para el equipo y un resumen mensual público).
:::

## 📢 Modlog público {#modlog}

El modlog público publica **cada acción de moderación** en un canal visible para tus miembros, con únicamente la información que decidas mostrar.

1. En el menú Transparencia, haz clic en "**Modlog público**".
2. Selecciona un canal, o deja que RaidProtect cree uno para ti (llamado "**public-modlog**", en solo lectura para @everyone).
3. Elige los **elementos mostrados**: "**Razón**", "**Moderador**", "**Duración**", "**Miembro sancionado**".
4. Elige las **fuentes** incluidas: "**Manuales (equipo)**" o "**Automáticas (RaidProtect)**".

Cuando la acción es automática y la visualización del moderador está activada, el modlog indica "RaidProtect" en lugar del nombre del moderador.

:::note
La publicación se regula voluntariamente para evitar inundar el canal durante un raid: los mensajes se envían de forma progresiva.
:::

## 📜 El comando `/transparency` {#command}

Usa el comando: ```/transparency```

Permite a cualquier miembro consultar el **último informe de transparencia** del periodo cerrado (respuesta efímera, visible únicamente por el miembro).

- El comando debe activarse mediante el botón "**Comando transparency**" en el menú Transparencia.
- Si tienes varios resúmenes, el botón "**Alimentar /transparency**" en un resumen lo designa como la fuente utilizada por el comando.
