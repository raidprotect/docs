---
title: Bloqueo de canales
---

A veces es necesario bloquear temporalmente un canal para evitar que los usuarios envíen mensajes. ¡Con el comando de bloqueo, esto es muy fácil!

## 🔒 Bloquear un canal {#lock}

Usa el comando: ```/lock [reason]```

Este comando elimina el permiso de enviar mensajes para el rol **@everyone** en el canal, impidiendo que todos los usuarios publiquen allí. Reemplaza **[reason]** para indicar por qué se bloquea el canal (por ejemplo: *limpieza del chat*, *anuncio importante*, etc.).

## 🔓 Desbloquear un canal {#unlock}

Usa el comando: ```/unlock [reason]```

Este comando restaura los permisos de envío de mensajes a su estado anterior al bloqueo para el rol **@everyone** en el canal, permitiendo que los usuarios publiquen nuevamente. Reemplaza **[reason]** para indicar por qué se desbloquea el canal (por ejemplo: *discusión reabierta*, *anuncio finalizado*, etc.).

:::warning
Para que el comando de bloqueo funcione correctamente, debes asegurarte de que ningún rol tenga permiso explícito para hablar en ese canal. De lo contrario, los miembros con esos roles seguirán pudiendo chatear.
:::
:::info
Los comandos `lock` y `unlock` son [utilizables con prefijo](../guides/prefix.md).
:::

## ✏️ Configuración del ícono de bloqueo {#config}

Por defecto, esta función está desactivada. Sin embargo, puedes elegir si los canales bloqueados deben ser renombrados con un emoji de candado (🔒) agregado delante de su nombre.

Para activar/desactivar el ícono de bloqueo delante de los nombres de los canales bloqueados:
1. Usa el [comando `/settings`](../setup.md#settings).
2. Haz clic en el botón **Lock Icon on Locked Channels**. Este botón funciona como un interruptor; un simple clic es suficiente para activar o desactivar la opción.
