---
title: Moderacion
---

Para facilitar el trabajo de tus moderadores, RaidProtect integra comandos de moderacion muy utiles que te permiten interactuar directamente con las funciones nativas de Discord, como **banear** y **expulsar** usuarios.

Ademas de estas acciones, RaidProtect envia mensajes directos al usuario sancionado para explicar el motivo de su sancion, y esto tambien queda registrado en los registros del servidor para tu referencia.

:::info
Los comandos de moderacion son [utilizables con prefijo](../guides/prefix.md).
:::

## 🔨 Banear a un usuario {#ban}

Usa el comando: ```/ban [@user] [reason]```

Reemplaza `[@user]` con la mencion o ID deseada y `[reason]` con el motivo de la sancion.

:::tip
Puedes banear a un usuario usando su [ID de Discord](https://dfr.gg/wiki/interface/mode-developpeur), incluso si no esta conectado o presente en tu servidor.
:::

## 👢 Expulsar a un usuario {#kick}

Usa el comando: ```/kick [@user] [reason]```

Reemplaza `[@user]` con la mencion o ID deseada y `[reason]` con el motivo de la sancion.

## ⏳ Silenciar a un usuario {#timeout}

Usa el comando: ```/timeout [@user] [duration] [reason]```

Reemplaza `[@user]` con la mencion o ID deseada, `[duration]` con la duracion del silenciamiento, hasta un maximo de 28 dias (por ejemplo, `10m`, `1h`, `1d`), y `[reason]` con el motivo de la sancion.

## 🧹 Borrar un grupo de mensajes {#clear}

El comando `/clear` te permite eliminar rapidamente una cierta cantidad de mensajes en un canal de texto. Puedes especificar un usuario para eliminar solo sus mensajes.

Usa el comando: ```/clear [number] (@user)```

Reemplaza `[number]` con el numero de mensajes que deseas eliminar (maximo 100). Anade `(@user)` usando la mencion o ID para apuntar solo a sus mensajes en el canal.
