---
title: Bloqueo de canal
description: "El comando /lock de RaidProtect bloquea un canal al instante para impedir el envío de mensajes, de forma temporal o hasta que lo desbloquees."
---

import ChannelLockMockup from '@site/src/components/DiscordMessage/mockups/channel-lock';

{/* <ChannelLockMockup /> : oculta por el momento */}

A veces es necesario bloquear temporalmente un canal para impedir que los usuarios envíen mensajes. Gracias al comando de bloqueo, esto se vuelve un juego de niños.

## 🔒 Bloquear un canal {#lock}

Usa el comando: ```/lock [duration] [raison]```

Este comando retira los permisos de enviar mensajes al rol **@everyone** en el canal, impidiendo así que todos los usuarios publiquen. Reemplaza **[raison]** para indicar por qué se bloquea el canal (por ejemplo: *limpieza del chat*, *anuncio importante*, etc.).

### Bloqueo temporal {#lock-duration}

El parámetro `[duration]` permite **desbloquear automáticamente el canal** tras la duración indicada (por ejemplo `15m`, `1h`, `2d`). Útil para una pausa rápida sin tener que acordarse de desbloquear el canal manualmente.

## 🔓 Desbloquear un canal {#unlock}

Usa el comando: ```/unlock [raison]```

Este comando restablece los permisos de enviar mensajes al estado previo al bloqueo para el rol **@everyone** en el canal, permitiendo de nuevo que los usuarios publiquen. Reemplaza **[raison]** para indicar por qué se desbloquea el canal (por ejemplo: *discusión reabierta*, *anuncio finalizado*, etc.).

:::warning
Para que el comando de bloqueo funcione correctamente, debes asegurarte de que ningún rol tenga permiso explícito para hablar en ese canal. De lo contrario, los miembros con esos roles podrán seguir chateando.
:::
:::info
Los comandos `lock` y `unlock` son [utilizables mediante prefijo](../guides/prefix.md).
:::

## ✏️ Configuración del candado {#config}

Por defecto, esta función está desactivada. Sin embargo, tienes la posibilidad de elegir si los canales bloqueados deben renombrarse con un emoji de candado (🔒) añadido delante de su nombre.

Para activar/desactivar el candado delante de los nombres de los canales bloqueados:
1. Usa el [comando `/settings`](../setup.md#settings).
2. Haz clic en el botón "**Candado en los canales bloqueados**". Este botón funciona como un interruptor; un simple clic basta para activar o desactivar la opción.
