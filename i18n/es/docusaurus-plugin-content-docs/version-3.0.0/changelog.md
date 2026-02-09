# Registro de cambios

Descubre la lista detallada de los cambios realizados en RaidProtect.

:::note Se está preparando una nueva versión mayor
Esto explica la baja cantidad de actualizaciones recientes. Pero no te preocupes, ¡nuestro equipo técnico está siempre activo en caso de fallos en las versiones actuales! ️

Para estar al tanto de las últimas novedades sobre la próxima versión mayor, [únete a nuestro servidor de Discord](https://discord.com/invite/rWEGrNXXzQ).
:::

## 3.0.0 (14/01/2023)

- Reescritura completa destinada a preparar futuras actualizaciones y estabilizar el bot.
- Se corrigieron todos los errores conocidos hasta la fecha.
- El comando `?raidmode` ahora utiliza la función "Desactivar invitaciones".
- Envío automático de un mensaje privado al miembro afectado cuando se aplica una sanción.

## 2.2.0 (13/04/2020)

- Mejora del rendimiento del bot.
- Cambios importantes en la arquitectura interna del proyecto.

## 2.1.3 (13/10/2019)

- Se eliminó la lista negra y los comandos asociados.
- Se añadió la posibilidad de banear a cualquier usuario por su ID, incluso si no está en el servidor.
- Se muestra la razón del baneo en la respuesta del comando `?ban`.
- El comando `?raidmode` ahora requiere el permiso "expulsar miembros".
- Se cambió el tiempo de espera para la expulsión si el captcha no se completa (5 minutos).
- Diversas mejoras internas.

## 2.1.2 (17/04/2019)

- Se añadió el comando `?userinfo`.
- ~~Se añadieron los comandos `?lockall` y `?unlockall`~~ (Función eliminada).
- Se añadieron los comandos `?kick` y `?ban`.
- Se introdujo la edad mínima de cuenta para el captcha (opción para establecer una edad mínima de cuenta para acceder al servidor).
- Se añadió la posibilidad de eliminar automáticamente los mensajes de invocación de comandos.
- El canal de logs ahora se recrea automáticamente si se elimina.
- Se reestructuró la conexión a la base de datos.
- Corrección de errores y diversas mejoras.

## 2.1.1 (21/02/2019)

- Se eliminó `?settings captcha` (reemplazado por `?captcha`).
- Se añadió la posibilidad de definir un canal de logs para el captcha.
- Se añadió un autorole compatible con el captcha.
- Se simplificó el captcha (se requieren 5/6 letras correctas).
- Otros cambios menores.

## 2.1.0 (16/02/2019)

- Se introdujo el captcha (`?settings captcha`).
- Se añadió el nivel de seguridad anti-spam (`?settings spamlevel`).
- Se añadieron los comandos `?about` y `?invite`.
- Se añadió el comando `?clear`.
- Diversos cambios y correcciones de errores.

## 2.0.1 (04/02/2019)

- Se reescribió el comando de ayuda (`?help`).
- Se corrigieron errores en `?lock` y `?unlock`.

## 2.0.0 (26/01/2019)

- Se introdujo el anti-spam.
- Se añadió el modo raid automático.
- Se añadió el canal de logs.
- Se añadió la configuración del bot.
- Se añadió el bloqueo de canales.
- Numerosos otros cambios.
