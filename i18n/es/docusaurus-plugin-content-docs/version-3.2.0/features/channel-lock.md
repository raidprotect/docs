---
title: Bloqueo de canales
---

A veces es necesario bloquear temporalmente un canal para impedir que los usuarios envien mensajes. Con el comando lock, esto es muy facil!

## 🔒 Bloquear un canal {#lock}

Usa el comando: ```/lock```

Esto eliminara el permiso de hablar del rol **@everyone** en el canal, impidiendo que todos los usuarios publiquen en ese canal.

## 🔓 Desbloquear un canal {#unlock}

Usa el comando: ```/unlock```

Esto restablecera el permiso de hablar del rol **@everyone** en el canal, permitiendo que todos los usuarios publiquen en ese canal.

:::warning
Para que el comando lock funcione correctamente, debes asegurarte de que ningun rol tenga permiso explicito para hablar en ese canal. De lo contrario, los miembros con esos roles podran seguir chateando.
:::
:::info
Los comandos `lock` y `unlock` son [utilizables con prefijo](../guides/prefix.md).
:::

## ✏️ Configurar el icono de bloqueo {#config}

Por defecto, esta funcion esta desactivada. Sin embargo, puedes elegir si los canales bloqueados deben ser renombrados con un emoji de candado (🔒) anadido delante de su nombre.

Para activar/desactivar el icono de bloqueo delante de los nombres de los canales bloqueados:
1. Usa el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton **Lock Icon on Locked Channels**. Este boton funciona como un interruptor; un simple clic es suficiente para activar o desactivar la opcion.
