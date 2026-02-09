---
title: Bloqueo de canal
---

A veces es necesario bloquear temporalmente un canal para evitar que los usuarios envien mensajes. Con el comando de bloqueo, ¡esto se vuelve muy facil!

## 🔒 Bloquear un canal {#lock}

Usa el comando: ```/lock [reason]```

Este comando elimina el permiso de enviar mensajes para el rol **@everyone** en el canal, evitando que todos los usuarios publiquen ahi. Reemplaza **[reason]** para indicar por que se bloquea el canal (por ejemplo: *limpieza de chat*, *anuncio importante*, etc.).

## 🔓 Desbloquear un canal {#unlock}

Usa el comando: ```/unlock [reason]```

Este comando restaura los permisos de envio de mensajes a su estado anterior al bloqueo para el rol **@everyone** en el canal, permitiendo que los usuarios publiquen de nuevo. Reemplaza **[reason]** para indicar por que se desbloquea el canal (por ejemplo: *discusion reabierta*, *anuncio finalizado*, etc.).

:::warning
Para que el comando de bloqueo funcione correctamente, debes asegurarte de que ningun rol tenga permiso explicito para hablar en ese canal. De lo contrario, los miembros con esos roles podran seguir chateando.
:::
:::info
Los comandos `lock` y `unlock` son [utilizables por prefijo](../guides/prefix.md).
:::

## ✏️ Configurar el icono de bloqueo {#config}

Por defecto, esta funcion esta desactivada. Sin embargo, puedes elegir si los canales bloqueados deben ser renombrados con un emoji de candado (🔒) agregado delante de su nombre.

Para activar/desactivar el icono de bloqueo delante de los nombres de los canales bloqueados:
1. Usa el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton **Icono de bloqueo en canales bloqueados**. Este boton funciona como un interruptor; un simple clic es suficiente para activar o desactivar la opcion.
