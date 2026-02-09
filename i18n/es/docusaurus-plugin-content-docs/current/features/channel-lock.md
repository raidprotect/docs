---
title: Bloqueo de canal
---

A veces es necesario bloquear temporalmente un canal para evitar que los usuarios envien mensajes. Gracias al comando de bloqueo, esto se vuelve muy facil.

## 🔒 Bloquear un canal {#lock}

Usa el comando: ```/lock [reason]```

Este comando elimina el permiso de enviar mensajes del rol **@everyone** en el canal, impidiendo que todos los usuarios publiquen. Reemplaza **[reason]** para indicar por que se bloquea el canal (por ejemplo, *limpieza del chat*, *anuncio importante*, etc.).

## 🔓 Desbloquear un canal {#unlock}

Usa el comando: ```/unlock [reason]```

Este comando restaura los permisos de enviar mensajes al estado anterior al bloqueo para el rol **@everyone** en el canal, permitiendo que los usuarios vuelvan a publicar. Reemplaza **[reason]** para indicar por que se desbloquea el canal (por ejemplo, *discusion reabierta*, *anuncio finalizado*, etc.).

:::warning
Para que el comando de bloqueo funcione correctamente, debes asegurarte de que ningun rol tenga permiso explicito para hablar en ese canal. De lo contrario, los miembros con esos roles seguiran pudiendo chatear.
:::
:::info
Los comandos `lock` y `unlock` son [utilizables mediante prefijo](../guides/prefix.md).
:::

## ✏️ Configuracion del icono de candado {#config}

Por defecto, esta funcion esta desactivada. Sin embargo, tienes la opcion de elegir si los canales bloqueados deben renombrarse con un emoji de candado (🔒) antes de su nombre.

Para activar/desactivar el icono de candado antes de los nombres de canales bloqueados:
1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton "**Candado en canales bloqueados**". Este boton funciona como un interruptor; un solo clic es suficiente para activar o desactivar la opcion.
