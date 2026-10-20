---
title: Automod
description: "El Automod de RaidProtect elimina automáticamente las imágenes de estafa y las referencias a otros servidores de Discord: invitaciones, mensajes reenviados, enlaces de canal y etiquetas de servidor."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

El **Automod** de RaidProtect reúne los filtros que eliminan automáticamente un contenido no deseado en cuanto se publica. Cada filtro tiene su propia sanción para el autor del mensaje.

Para abrirlo:

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Protección**”.
3. Haz clic en “**Configurar**” junto a “**Automod**”.

<Settings start="automod" />

## 🖼️ Imágenes de estafa {#images}

El filtro **Imágenes** elimina las imágenes de estafa conocidas (estafas cripto, falsos giveaways, falsas promociones de casinos) y sanciona a su autor. Está **activo por defecto**, sin configurar nada.

Todo el detalle, la sanción y el catálogo de imágenes están en la página [Imágenes de estafa](./scam-images.md).

## 🔗 Otros servidores <span className="badge-experiment">Experimental</span> {#servers}

El filtro **Otros servidores** controla lo que remite a otros servidores de Discord: las **invitaciones**, los **mensajes reenviados** y los **enlaces de canal**, así como las **etiquetas de servidor** que muestran tus miembros. Bloquea la publicidad salvaje y los servidores competidores o maliciosos, sin afectar a tus socios.

:::info Experimental: Shield Update
El filtro Otros servidores forma parte de la **Shield Update**, prevista para la versión 3.6.0. Hasta su lanzamiento, está en fase experimental, en beta pública para los servidores [Premium](/es/premium).
:::

### ¿Cómo funciona? {#servers-working}

Tres comportamientos se ajustan por separado, cada uno en uno de estos modos:

- “**Desactivado**”: no se filtra nada.
- “**Lista negra**”: los servidores de la lista se rechazan, los demás pasan.
- “**Lista blanca**”: solo pasan los servidores de la lista, todos los demás se rechazan.

| Comportamiento | Qué ocurre si se rechaza |
|---|---|
| **Invitación** | Se elimina el mensaje que contiene la invitación. También cuentan los enlaces `ptb.` y `canary.`, y se leen las invitaciones ocultas en un embed, un componente o un mensaje reenviado, así como los mensajes editados después. |
| **Mensaje reenviado o enlace de canal** | Se elimina el mensaje reenviado desde ese servidor, o que contiene un enlace a uno de sus canales. |
| **Etiqueta de servidor mostrada** | El miembro se pone en **cuarentena** con el [rol Jail](./sanctions.mdx#jail). Se levanta en cuanto quita la etiqueta. |

Tu propio servidor siempre pasa, por cualquiera de sus invitaciones, y tu equipo (permisos **Gestionar servidor** o **Gestionar mensajes**) nunca es objetivo del filtro.

### Configuración {#servers-config}

1. En el Automod, haz clic en “**Configurar**” junto a “**Otros servidores**”.
2. Activa el filtro con el interruptor de arriba a la derecha y luego elige un modo para cada comportamiento.

<Settings start="serverRefs" />

#### Invitaciones de amistad y de grupo <span className="badge-premium">Premium</span> {#servers-private}

Una invitación de amistad o de grupo privado no lleva a ningún servidor. Con el modo “**Invitación**” (en cuanto no está en “**Desactivado**”), el selector “**Invitaciones de amistad y de grupo**” regula su suerte por separado:

- “**Seguir la lista**” *(por defecto)*: pasan con lista negra y se eliminan con lista blanca.
- “**Siempre permitidas**”: aceptadas, sea cual sea la lista.
- “**Siempre eliminadas**”: eliminadas, sea cual sea la lista.

Sin Premium, siguen siempre la lista.

### Sanción {#servers-sanction}

Cada mensaje rechazado se elimina. En “**Sanción de los mensajes eliminados**”, elige además una sanción para su autor, o “**Solo se elimina el mensaje**”. Para un timeout, un mute, un jail o un ban, elige también su duración.

La sanción se aplica como máximo una vez por minuto y por miembro: un miembro que pega varias invitaciones seguidas solo es sancionado una vez.

### Listas de servidores {#servers-lists}

1. Haz clic en “**Añadir un servidor**”.
2. Pega una invitación del servidor todavía válida (p. ej. `discord.gg/ejemplo`): se leen su nombre y su identificador. Ya no se acepta un identificador solo.
3. Elige la lista: negra o blanca.

Un servidor que ya está en una lista simplemente cambia de lista. “**Retirar**” elimina uno o varios servidores de las listas.

**Límites:** 25 servidores en total entre las dos listas.

:::tip
Para permitir solo las invitaciones de tus socios, ajusta “**Invitación**” en “**Lista blanca**” y añade a tus socios a la lista blanca. Una lista blanca vacía rechaza todas las invitaciones a otros servidores.
:::

### Logs {#servers-logs}

Cada sanción y cada cuarentena se anotan en tus [logs de moderación](./moderation.mdx#logs), con el servidor y el canal afectados. Un mensaje eliminado sin sanción (“**Solo se elimina el mensaje**”) también se anota. Las sanciones aparecen en el [historial de sanciones](./sanctions.mdx), con los motivos “Invitación a un servidor rechazado”, “Invitación de amistad o de grupo rechazada” (Premium), “Mensaje reenviado o enlace de canal de un servidor rechazado” o “Etiqueta de un servidor rechazado”.

## Preguntas frecuentes {#faq}

### ¿Mis socios pueden seguir compartiendo su invitación?

Sí. Añádelos a la lista blanca del filtro Otros servidores, o déjalos fuera de la lista negra.

### ¿Qué pasa cuando un miembro quita la etiqueta rechazada?

Su cuarentena se levanta automáticamente.

### ¿Los moderadores son filtrados?

No. Los miembros que tienen el permiso Gestionar servidor o Gestionar mensajes nunca son objetivo del filtro Otros servidores.
