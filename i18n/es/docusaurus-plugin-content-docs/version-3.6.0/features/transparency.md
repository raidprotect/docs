---
title: Transparencia
description: "La Transparencia de RaidProtect muestra a tus miembros cómo se modera el servidor: resúmenes periódicos, un modlog público y el comando /transparency."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import TransparencyMockup from '@site/src/components/DiscordMessage/mockups/transparency';

<TransparencyMockup />

La Transparencia permite mostrar a tus miembros cómo se modera el servidor. Se basa en tres elementos complementarios: unos **resúmenes de moderación periódicos**, un **modlog público** y el **comando `/transparency`**.

## 🛠️ Configuración de la Transparencia {#config}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Moderación**”.
3. Haz clic en “**Configurar**” junto a “**Transparencia**”.

La pantalla te da acceso a los “**Resúmenes periódicos**”, al “**Modlog público**” y al interruptor del “**Comando /transparency**”.

<Settings start="transparency" />

## 📊 Resúmenes periódicos {#recaps}

Un resumen es un compendio agregado de las acciones de moderación, publicado automáticamente en un canal según la frecuencia elegida.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Moderación**”.
3. Haz clic en “**Configurar**” junto a “**Transparencia**”.
4. Haz clic en “**Configurar**” junto a “**Resúmenes periódicos**”.
5. Haz clic en “**Añadir**” junto a un espacio libre.
6. Se abre la pantalla del nuevo resumen: ajusta su **frecuencia**, su **canal** de publicación, opcionalmente un rol a **mencionar**, y luego haz clic en “**Activar**” a la derecha del título.

Para volver más tarde sobre un resumen, haz clic en “**Editar**” junto a él en la lista.

<Settings start="recaps" />

Un nuevo resumen se crea desactivado, semanal, publicado hacia las 08:00, en el canal del modlog público. Las frecuencias disponibles son: **Semanal** (por defecto), **Cada dos semanas**, **Mensual**, **Trimestral** y **Anual**. Dos resúmenes de la misma frecuencia no pueden publicarse en el mismo canal.

Desde la pantalla de un resumen, también puedes:

- “**Renombrar**” el resumen (deja el campo vacío para recuperar el nombre de la frecuencia);
- ajustar su “**Horario**” de publicación (ver más abajo);
- hacer clic en “**Alimentar /transparency**” para convertirlo en la fuente del [comando `/transparency`](#command);
- “**Eliminar**”.

El resumen contiene:
- el **número total de acciones de moderación** del periodo;
- el detalle por tipo de sanción (baneos, softbans, expulsiones, timeouts, silencios, encarcelamientos, advertencias y otras acciones);
- el número de **estafas bloqueadas por [ScamLens](./scam-images.md)**;
- el reparto entre acciones **automáticas** y acciones **del equipo**.

**Límites:** 1 resumen en la versión gratuita, 5 resúmenes en la versión [Premium](/es/premium) (por ejemplo, un resumen semanal para el equipo y un resumen mensual público).

### Horario de publicación {#recap-schedule}

1. En la pantalla de un resumen, haz clic en “**Horario**”.
2. En la ventana, elige la “**Hora de publicación**” (hora local, de `00:00` a `23:00`).

<SettingsModal name="recapSchedule" />

| Versión | Momento de publicación |
|---|---|
| Gratuita | En un margen de 12 h a partir de la hora elegida |
| [Premium](/es/premium) | Hacia la hora elegida, con 1 h de margen |

La hora elegida sigue la **zona horaria del servidor**, recordada bajo la línea “**Horario**”. Se ajusta una sola vez para todo el servidor, en la pestaña “**General**”:

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**General**”.
3. Haz clic en “**Editar**” junto a “**Zona horaria**”.
4. Elige tu desfase en “**Zona horaria (UTC)**”, o introduce una “**Zona horaria personalizada**” como `Europe/Paris`, que tiene prioridad y gestiona el horario de verano automáticamente.

<SettingsModal name="timezone" />

## 📢 Modlog público {#modlog}

El modlog público publica **cada acción de moderación** en un canal visible para tus miembros, con únicamente la información que decidas mostrar.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Moderación**”.
3. Haz clic en “**Configurar**” junto a “**Transparencia**”.
4. Haz clic en “**Configurar**” junto a “**Modlog público**”.
5. Selecciona un canal, o haz clic en “**Crear uno para mí**” (RaidProtect crea el canal `public-modlog`, en solo lectura para @everyone).
6. En “**Información mostrada**”, elige: “**Razón**”, “**Moderador**”, “**Duración**”, “**Miembro sancionado**” (por defecto: Razón y Duración).
7. En “**Sanciones publicadas**”, elige: “**Manuales (equipo)**” y/o “**Automáticas (RaidProtect)**” (por defecto: ambas).
8. Haz clic en “**Activar**” a la derecha del título de la pantalla.

<Settings start="modlog" />

Cuando la acción es automática y la visualización del moderador está activada, el modlog indica “RaidProtect” en lugar del nombre del moderador.

## 📜 El comando `/transparency` {#command}

Usa el comando: ```/transparency```

Permite a cualquier miembro consultar el **último informe de transparencia** del periodo cerrado (respuesta efímera, visible únicamente por el miembro).

- El comando debe activarse con el interruptor “**Comando /transparency**” de la pantalla Transparencia.
- Si tienes varios resúmenes, el botón “**Alimentar /transparency**” en un resumen lo designa como la fuente utilizada por el comando. Ese resumen se marca con una ⭐ en la lista.

## Preguntas frecuentes {#faq}

### ¿Cuántos resúmenes puedo programar?

Uno solo en la versión gratuita, hasta cinco con el [Premium](/es/premium).

### ¿A qué hora se publica el resumen?

A la hora que elijas, en la zona horaria del servidor ajustada en la pestaña “**General**” de `/settings`. En la versión gratuita, la publicación tiene lugar en un margen de 12 horas a partir de esa hora; con el Premium, con una hora de margen.

### ¿Mis miembros ven quién los ha sancionado?

Solo si marcas “**Moderador**” en la información mostrada del modlog público. Para una acción automática, el modlog indica entonces RaidProtect.
