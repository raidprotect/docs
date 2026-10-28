---
title: Logs del servidor
description: "Los logs de RaidProtect siguen todo lo que pasa en tu servidor de Discord: canales, roles, miembros, mensajes, voz, emojis y reacciones, con el autor de cada acción."
---

Los **logs del servidor** guardan un registro de lo que pasa en tu servidor: quién creó un canal, cambió un rol, eliminó un mensaje o desconectó a un miembro de un canal de voz. Cada log empieza por su autor («@modo ha creado el canal #general.») y muestra el antes y el después de una modificación.

:::info Experimental: Logging Update
Los logs del servidor forman parte de la **Logging Update**, prevista para la versión 3.8.0. Hasta su lanzamiento, están en fase experimental, en beta pública para los servidores [Premium](/es/premium).
:::

## ⚙️ Configurar los logs {#config}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Moderación**”.
3. Haz clic en “**Configurar**” junto a “**Logs**”.
4. Abre “**Logs del servidor**” y elige un canal para cada familia.

En cada familia, dos listas:

- **Tipos enviados**: desmarca un tipo para no enviarlo a ningún sitio.
- **Tipos en otro canal**: da un canal aparte a un tipo. Un tipo sin canal aparte sigue el canal de su familia.

**Límites:** 3 canales de logs distintos en la versión gratuita, 15 con [Premium](/es/premium). Sin Premium, solo los 3 primeros canales reciben los logs: los demás quedan en pausa y sus ajustes se conservan.

Los canales “**General**”, “**Moderación**” y “**Captcha**” de los [logs de moderación](./moderation.mdx#logs) no cambian.

## 📚 Familias de logs {#families}

| Familia | Lo que se registra |
| --- | --- |
| **Canales, roles e invitaciones** | Categorías, canales, canales de voz e hilos creados, modificados o eliminados, permisos incluidos. Roles, invitaciones, webhooks, integraciones, y bots añadidos o retirados con su rol. |
| **Miembros** | Llegadas (con la antigüedad de la cuenta) y salidas (con la fecha de llegada y los roles), reglamento aceptado, roles añadidos o retirados, apodos, miembros inactivos retirados y boosts. |
| **Mensajes** | Mensajes eliminados, con quién los eliminó, mensajes modificados, eliminaciones masivas, mensajes fijados o desfijados. |
| **Voz** <span className="badge-premium">Premium</span> | Llegadas, salidas con la duración de la sesión, cambios de canal, micrófono, sonido, cámara y pantalla compartida. Las acciones del equipo (silenciar, ensordecer, mover, desconectar) van aparte, con su autor. |
| **Emojis y reacciones** | Emojis, stickers y sonidos de la soundboard creados, modificados o eliminados. Las reacciones añadidas o retiradas están reservadas a [Premium](/es/premium) y desmarcadas por defecto. |

Un mensaje modificado muestra el antes y el después. Para un mensaje largo, solo se muestran las líneas cambiadas.

Los mensajes eliminados por el propio RaidProtect (anti-spam, HoneyPot, anti-estafa, `/clear`) se quedan en los logs del módulo correspondiente, sin duplicados.

## 🎨 Formato de los logs {#format}

Elige el formato en “**Formato de los logs**”, en la misma pantalla.

| Formato | Visualización |
| --- | --- |
| **Por defecto** | La hora, el icono, las menciones con su nombre y luego el detalle. |
| **Recuadro** | Un recuadro de color por log, con su título y el detalle. |
| **Compacto** <span className="badge-premium">Premium</span> | Una línea por log: la hora, el icono y las menciones. |

Un servidor que pierde Premium vuelve al formato Por defecto. Su elección se conserva para cuando vuelva.

## 💾 Mensajes en memoria {#cache}

Para recuperar el contenido de un mensaje eliminado, RaidProtect guarda los mensajes recientes en memoria: **15 minutos** en la versión gratuita, **6 horas** con [Premium](/es/premium). Pasado ese tiempo, el log indica que el contenido no se ha conservado.

Con Premium, los archivos adjuntos de los mensajes eliminados también se copian en el log (10 MB por archivo, 100 MB por servidor, los más antiguos se reemplazan primero).
