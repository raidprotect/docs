---
title: Bloqueo de canales
---

A veces es necesario bloquear temporalmente un canal para evitar que los usuarios envien mensajes. Con el comando lock, esto es muy sencillo.

## 🔒 Bloquear un Canal {#lock}

Usa el comando: ```/lock```

Esto eliminara el permiso de hablar del rol **@everyone** en el canal, impidiendo que todos los usuarios publiquen en ese canal.

## 🔓 Desbloquear un Canal {#unlock}

Usa el comando: ```/unlock```

Esto restaurara el permiso de hablar del rol **@everyone** en el canal, permitiendo que todos los usuarios publiquen en ese canal.

:::warning
Para que el comando lock funcione correctamente, debes asegurarte de que ningun rol tenga permiso explicito de hablar en ese canal. De lo contrario, los miembros con esos roles aun podran chatear.
:::
:::info
Los comandos `lock` y `unlock` son [utilizables con prefijo](../guides/prefix.md).
:::

## ✏️ Configurar el Icono de Bloqueo {#config}

Por defecto, esta funcion esta desactivada. Sin embargo, puedes elegir si los canales bloqueados deben renombrarse con un emoji de candado (🔒) agregado al inicio de su nombre.

Para activar/desactivar el icono de bloqueo delante de los nombres de los canales bloqueados:
1. Usa el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton **Icono de Bloqueo en Canales Bloqueados**. Este boton funciona como un interruptor; un simple clic es suficiente para activar o desactivar la opcion.
