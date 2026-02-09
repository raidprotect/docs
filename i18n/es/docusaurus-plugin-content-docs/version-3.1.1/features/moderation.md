---
title: Moderacion
---

Para facilitar el trabajo de tus moderadores, RaidProtect integra comandos de moderacion muy utiles que te permiten interactuar directamente con las funciones nativas de Discord, como **banear** y **expulsar** usuarios.

Ademas de estas acciones, RaidProtect envia mensajes directos al usuario sancionado para explicar el motivo de su sancion, y esto tambien se registra en los registros del servidor para tu referencia.

:::info
Los comandos de moderacion son [utilizables con prefijo](../guides/prefix.md).
:::

## 🔨 Banear a un Usuario {#ban}

Usa el comando: ```/ban [@user] [reason]```

Reemplaza `[@user]` con la mencion o ID deseado y `[reason]` con el motivo de la sancion.

:::tip
Puedes banear a un usuario usando su [ID de Discord](https://dfr.gg/wiki/interface/mode-developpeur), incluso si no esta actualmente en linea o presente en tu servidor.
:::

## 👢 Expulsar a un Usuario {#kick}

Usa el comando: ```/kick [@user] [reason]```

Reemplaza `[@user]` con la mencion o ID deseado y `[reason]` con el motivo de la sancion.

## ⏳ Silenciar a un Usuario {#timeout}

Usa el comando: ```/timeout [@user] [duration] [reason]```

Reemplaza `[@user]` con la mencion o ID deseado, `[duration]` con la duracion del silencio, hasta un maximo de 28 dias (ej. `10m`, `1h`, `1d`), y `[reason]` con el motivo de la sancion.
