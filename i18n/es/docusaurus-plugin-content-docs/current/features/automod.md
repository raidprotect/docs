---
title: Automod
description: "El Automod de RaidProtect elimina automáticamente las imágenes de estafa, los archivos de extensiones rechazadas y las referencias a otros servidores de Discord: invitaciones, mensajes reenviados, enlaces de canal o de evento y etiquetas de servidor."
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

## 🔗 Otros servidores {#servers}

El filtro **Otros servidores** controla lo que remite a otros servidores de Discord: las **invitaciones**, los **mensajes reenviados**, los **enlaces de canal** y los **enlaces de evento**, así como las **etiquetas de servidor** que muestran tus miembros. Bloquea la publicidad salvaje y los servidores competidores o maliciosos, sin afectar a tus socios.

### ¿Cómo funciona? {#servers-working}

Tres comportamientos se ajustan por separado, cada uno en uno de estos modos:

- “**Desactivado**”: no se filtra nada.
- “**Lista negra**”: los servidores de la lista se rechazan, los demás pasan.
- “**Lista blanca**”: solo pasan los servidores de la lista, todos los demás se rechazan.

| Comportamiento | Qué ocurre si se rechaza |
|---|---|
| **Invitación** | Se elimina el mensaje que contiene la invitación. También cuentan los enlaces `ptb.` y `canary.`, y se leen las invitaciones ocultas en un embed, un componente o un mensaje reenviado, así como los mensajes editados después. |
| **Mensaje reenviado o enlace de canal** | Se elimina el mensaje reenviado desde ese servidor, o que contiene un enlace a uno de sus canales o de sus eventos. |
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

:::tip
Si sales de la pantalla de un filtro que has modificado sin haberlo activado, RaidProtect te propone activarlo antes de irte (“**Dejar desactivado**” está preseleccionado).
:::

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

## 📎 Extensiones de archivo {#files}

El filtro **Extensiones de archivo** elimina los archivos cuya extensión está rechazada. Puedes bloquear ciertas extensiones (lista negra) o permitir solo algunas (lista blanca), en todo el servidor o canal por canal. Tu equipo (permisos **Gestionar servidor** o **Gestionar mensajes**) nunca es objetivo del filtro.

Los archivos de un mensaje reenviado también cuentan, y un hilo sigue las reglas de su canal.

### Configuración {#files-config}

1. En el Automod, haz clic en “**Configurar**” junto a “**Extensiones de archivo**”.
2. Activa el filtro con el interruptor de arriba a la derecha.
3. En “**Todo el servidor**”, elige un modo: “**Desactivado**”, “**Lista negra**” o “**Lista blanca**”.
4. Marca **grupos** (Ejecutables, Imágenes, Vídeos, Audio, Archivos comprimidos, Documentos) y/o escribe otras extensiones separadas por comas, por ejemplo `exe, msi`. El punto es opcional. Una regla acepta 50 extensiones libres como máximo, además de los grupos.

:::warning
Una lista blanca sin extensiones no acepta ningún archivo: se elimina todo archivo enviado.
:::

### Reglas por canal y por categoría {#files-channels}

Haz clic en “**Añadir un canal**” para dar una regla a un canal, un hilo o una categoría. Una regla de categoría vale para todos sus canales.

Las reglas se suman, salvo para una extensión nombrada por varias reglas: decide la regla **más precisa** (canal, luego categoría, luego servidor). Por ejemplo, un `.exe` permitido en un canal pasa a pesar de la lista negra del servidor. Una extensión que ninguna regla nombra pasa por todas las reglas.

| | Gratuito | <span className="badge-premium">Premium</span> |
|---|---|---|
| **Reglas por canal** | 1 (el primer canal configurado) | 20 canales o categorías |
| **Regla de categoría** | No | Sí |

Sin Premium, las reglas sobrantes se conservan pero quedan inactivas.

### Archivos corruptos {#files-disguised}

Un archivo renombrado para hacerse pasar por una imagen o un vídeo (un `.exe` renombrado como `.png`) se reconoce: Discord no sabe leerlo como una imagen real. Una lista blanca siempre lo rechaza. La opción “**Rechazar siempre los archivos corruptos**” también lo elimina en todos los canales, incluso sin lista blanca.

### Sanción {#files-sanction}

Cada archivo rechazado se elimina con su mensaje. En “**Sanción de los mensajes eliminados**”, elige además una sanción para su autor, o “**Solo se elimina el mensaje**”. La sanción se aplica como máximo una vez por minuto y por miembro.

Cada mensaje eliminado se anota en tus [logs de moderación](./moderation.mdx#logs), con el archivo, el canal y la extensión en cuestión. Las sanciones aparecen en el [historial de sanciones](./sanctions.mdx) con el motivo “Archivo de una extensión rechazada”.

## Preguntas frecuentes {#faq}

### ¿Mis socios pueden seguir compartiendo su invitación?

Sí. Añádelos a la lista blanca del filtro Otros servidores, o déjalos fuera de la lista negra.

### ¿Qué pasa cuando un miembro quita la etiqueta rechazada?

Su cuarentena se levanta automáticamente.

### ¿Los moderadores son filtrados?

No. Los miembros que tienen el permiso Gestionar servidor o Gestionar mensajes nunca son objetivo del filtro Otros servidores.
