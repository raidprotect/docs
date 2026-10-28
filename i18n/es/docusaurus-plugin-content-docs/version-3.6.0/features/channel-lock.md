---
title: Bloqueo de canal
description: "El comando /lock de RaidProtect bloquea un canal al instante para impedir el envío de mensajes, de forma temporal o hasta que lo desbloquees."
---

import ChannelLockMockup from '@site/src/components/DiscordMessage/mockups/channel-lock';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

{/* <ChannelLockMockup /> : oculta por el momento */}

A veces es necesario bloquear temporalmente un canal para impedir que los usuarios envíen mensajes. Gracias al comando de bloqueo, esto se vuelve un juego de niños.

## 🔒 Bloquear un canal {#lock}

Usa el comando: ```/lock [channel] [duration] [reason] [--silent]```

Este comando retira al rol **@everyone** los permisos de enviar mensajes y de enviar mensajes en hilos, en el canal indicado, impidiendo así que todos los usuarios publiquen.

- Reemplaza `[channel]` con la mención o el [identificador](../guides/id.mdx) del canal que quieres bloquear. Sin canal, bloqueamos aquel donde ejecutas el comando. Se aceptan los canales de texto, de anuncios, de voz, foros, multimedia, de conferencia y las categorías; los hilos no.
- Reemplaza `[reason]` para indicar por qué se bloquea el canal (por ejemplo: *limpieza del chat*, *anuncio importante*, etc.).
- Añade `--silent` para no anunciar nada en el canal: solo tú recibes la confirmación.

:::info
Un mismo canal solo puede bloquearse una vez cada 10 minutos.
:::

### Bloquear una categoría {#lock-category}

Bloquear una categoría también bloquea todos sus canales visibles (excepto los hilos) de una sola vez, y `/unlock` sobre la categoría los desbloquea juntos. Un canal ya cerrado a la escritura (normas, anuncios) se deja tal cual, tanto al bloquear como al desbloquear. Cuando expira un bloqueo temporal de categoría, una sola línea de log nombra la categoría y el número de canales desbloqueados.

### Bloqueo temporal {#lock-duration}

El parámetro `[duration]` permite **desbloquear automáticamente el canal** tras la duración indicada (por ejemplo `15m`, `1h`, `2d`). Útil para una pausa rápida sin tener que acordarse de desbloquear el canal manualmente. La duración está limitada a la duración máxima de una sanción.

## 🔓 Desbloquear un canal {#unlock}

Usa el comando: ```/unlock [channel] [reason] [--silent]```

Este comando restablece al rol **@everyone** los permisos de enviar mensajes tal como estaban antes del bloqueo, permitiendo de nuevo que los usuarios publiquen. Reemplaza `[reason]` para indicar por qué se desbloquea el canal (por ejemplo: *discusión reabierta*, *anuncio finalizado*, etc.). Con `--silent`, no se anuncia nada en el canal.

:::warning
Para que el bloqueo funcione correctamente, ningún rol abierto a todos debe tener un permiso explícito para escribir en ese canal. De lo contrario, los miembros con esos roles podrán seguir chateando. Los acuerdos definidos para los roles de tu equipo, en cambio, son útiles: mantienen la palabra al staff durante un `/lock`, y la [auditoría](./audit.md) ya no los señala como redundantes.
:::
:::info
Los comandos `lock` y `unlock` son [utilizables mediante prefijo](../guides/prefix.md). Requieren el permiso “**Gestionar mensajes**”. RaidProtect necesita los permisos “**Gestionar canales**” y “**Gestionar roles**” para modificar los permisos del canal.
:::

## ✏️ Configuración del candado {#config}

Puedes elegir si los canales bloqueados se renombran con un candado: `/lock` renombra entonces el canal como `🔒-nombre-del-canal`, y `/unlock` quita el prefijo. Así se ve el estado del canal directamente en la lista de canales. Esta opción está **desactivada por defecto**.

Para activar o desactivar el candado:
1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Utilidades**”.
3. Haz clic en “**Activar**” (o “**Desactivar**”) junto a “**Bloqueo de canal**”. El botón funciona como un interruptor, un simple clic basta.

<Settings start="home:utilities" />

:::info
El cambio de nombre requiere el permiso “**Gestionar canales**”.
:::

## Preguntas frecuentes {#faq}

### ¿Se puede bloquear un canal distinto de aquel en el que uno se encuentra?

Sí, indica el canal como primer argumento: `/lock #general 30m Raid en curso`.

### ¿Por qué algunos miembros pueden seguir escribiendo en un canal bloqueado?

El bloqueo solo quita la palabra al rol @everyone. Un rol que tenga un permiso explícito para escribir en ese canal lo conserva.

### ¿Cómo añadir un candado al nombre de los canales bloqueados?

En `/settings`, pestaña Utilidades, activa “Bloqueo de canal”. La opción está desactivada por defecto.
