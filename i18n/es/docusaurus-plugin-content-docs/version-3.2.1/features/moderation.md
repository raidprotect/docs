---
title: Moderación
---

Para facilitar el trabajo de tus moderadores, RaidProtect integra comandos de moderación muy útiles que te permiten interactuar directamente con las funciones nativas de Discord, como **banear** y **expulsar** usuarios.

Además de estas acciones, RaidProtect envía mensajes directos al usuario sancionado para explicar la razón de su sanción, y esto también queda registrado en los registros del servidor para tu referencia.

:::info
Los comandos de moderación son [utilizables con prefijo](../guides/prefix.md).
:::

## 🔨 Banear a un usuario {#ban}

Usa el comando: ```/ban (user) [reason]```

Reemplaza `(user)` con la mención o ID deseada y `[reason]` con la razón de la sanción.

:::tip
Puedes banear a un usuario usando su [ID de Discord](https://dfr.gg/wiki/interface/mode-developpeur), incluso si no está conectado o presente en tu servidor.
:::

### Desbanear a un usuario {#unban}

Usa el comando: ```/unban (user) [reason]```

Reemplaza `(user)` con el identificador deseado y `[reason]` con la razón del desbaneo.

## 👢 Expulsar a un usuario {#kick}

Usa el comando: ```/kick (member) [reason]```

Reemplaza `(member)` con la mención o ID deseada y `[reason]` con la razón de la sanción.

## ⏳ Silenciar a un usuario {#timeout}

Usa el comando: ```/timeout (member) (duration) [reason]```

Reemplaza `(member)` con la mención o ID deseada, `(duration)` con la duración del timeout, hasta un máximo de 28 días (por ejemplo, `10m`, `1h`, `1d`), y `[reason]` con la razón de la sanción.

## 🧹 Borrar un grupo de mensajes {#clear}

El comando `/clear` te permite eliminar rápidamente una cierta cantidad de mensajes en un canal de texto. Puedes especificar un usuario para eliminar solo sus mensajes.

Usa el comando: ```/clear (number) [user]```

Reemplaza `(number)` con el número de mensajes que deseas eliminar (máximo 100). Agrega `[user]` usando la mención o ID para eliminar solo sus mensajes en el canal.

## 🕒 Activar el modo lento en un canal {#slowmode}

El comando `/slowmode` te permite activar o modificar el modo lento de un canal de texto, para limitar la frecuencia con la que los usuarios pueden enviar mensajes.

Usa el comando: ```/slowmode (duration) [channel] [reason]```

- Reemplaza `(duration)` con el tiempo deseado entre cada mensaje (por ejemplo: `5s`, `1m`, `10m`, `1h`).
- Agrega `[channel]` si deseas aplicar el modo lento en un canal diferente al que estás escribiendo.
- Agrega `[reason]` para especificar el motivo, que quedará registrado en los registros del servidor.
