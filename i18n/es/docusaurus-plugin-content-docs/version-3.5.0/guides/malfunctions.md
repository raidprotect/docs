---
title: Problemas frecuentes
description: "¿Un problema con RaidProtect? Encuentra aquí las soluciones a los fallos más comunes para poner tu bot a punto de nuevo."
---

¿Tienes un problema con RaidProtect? La solución probablemente está aquí.

A veces, las cosas no funcionan como se espera. Aquí están los **problemas más comunes** que puedes encontrar y cómo resolverlos.

Si esta página no proporciona una respuesta a un problema que estás experimentando, [**no dudes en contactar a nuestro equipo de soporte**](https://raidprotect.bot/discord) que estará encantado de ayudarte.

## El bot muestra un error cuando ejecuto un comando {#commands}

Si el comando no se ejecuta correctamente, **RaidProtect puede mostrar un error** en lugar del resultado esperado. En la mayoría de los casos, se da una indicación en el mensaje, pero puede ser un mensaje más genérico. Aquí te explicamos cómo resolver este problema en la mayoría de los casos.

- **Haz lo que se indica.** Algunos errores explican claramente el problema. Si el bot te pide hacer algo, hazlo.

- **Verifica los parámetros del comando.** El comando puede estar simplemente mal escrito; revisa la ayuda para ver cómo usarlo. No olvides que los corchetes ([]) no deben incluirse.

- **Verifica los permisos del bot.** Debe tener el permiso de **Administrador** y estar al nivel de administrador en la jerarquía de roles.

- **Reintenta el comando.** A veces, el problema se resuelve solo sin razón aparente.

Si sigues obteniendo un error a pesar de seguir estos consejos, [contacta a nuestro soporte](https://raidprotect.bot/discord) para que podamos ayudarte.

## El canal de logs del bot no se creó automáticamente {#logs}

Para notificarte sobre las acciones que realiza, RaidProtect necesita un canal de logs. Este canal se crea automáticamente cuando el bot se une por primera vez, pero a veces no se crea ningún canal. Aquí te explicamos cómo solucionar este problema.

- **Asegúrate de que el bot tenga permisos de Administrador.** Para que el bot funcione correctamente, necesitas darle el permiso de Administrador. Si no lo has hecho, ve a la configuración de roles y otorga este permiso al rol de RaidProtect. Luego solo necesitas inicializar manualmente el bot para que todo funcione (ver abajo).

- **Verifica que el bot esté correctamente inicializado.** Esto normalmente se hace automáticamente, pero puedes forzar esta inicialización con el [comando `/setup`](../setup.md#install). El canal de logs debería crearse automáticamente.

- **Establece un canal manualmente.** Si nada funciona, no te preocupes, ¡puedes elegir tú mismo el canal de logs! Usa el [comando `/settings`](../setup.md#settings), abre la pestaña “**Moderación**” y haz clic en “**Configurar**” junto a “**Logs**”. Puedes elegir ahí un canal general y, si quieres, un canal dedicado a la moderación y otro al captcha: si se dejan vacíos, estos dos últimos recurren al canal general.

## Un usuario hizo spam, pero el bot no lo sancionó {#anti-spam}

El [anti-spam](../features/anti-spam.mdx) es una de las funciones principales de RaidProtect, y puede ser frustrante si no funciona. Pero tranquilo, la mayoría de las veces no es nada grave.

- **Si el anti-spam pide que dejen de hacer spam**, pero no sanciona, esto probablemente se debe a la falta de permisos. Recuerda, el bot debe tener el permiso de Administrador y estar al nivel de administrador en la jerarquía de roles.

- **Verifica la configuración del anti-spam.** Suena tonto, pero algunas personas olvidan que han ignorado un canal. Un canal cuyo nombre contiene “spam” también se ignora siempre.

- **Lanza una simulación.** En la pantalla del anti-spam, el botón “**Simular**” te dice, para un miembro, un canal y un tipo de spam dados, si el anti-spam se activaría y, si no, por qué (módulo desactivado, canal o rol ignorado, miembro por encima del bot…). El [comando `/feedback`](../features/utilities.mdx#feedback) también propone este diagnóstico cuando reportas un fallo del anti-spam.

- **Verifica los permisos del spammer.** Los miembros del staff (Administrador, Gestionar servidor, Gestionar mensajes) son ignorados mientras no hayas ignorado tú ningún rol ni miembro. Si estás probando el anti-spam en tu propio servidor, puede que no te detecte.

- **¿El spam es lo suficientemente largo?** El anti-spam reacciona a un volumen de mensajes, no a un mensaje aislado. No seas muy impaciente, y verifica que la sanción del [disparador](../features/anti-spam.mdx#triggers) correspondiente no esté desactivada.

Si a pesar de todo esto, el spam sigue sin ser detectado, [contáctanos en nuestro servidor de soporte](https://raidprotect.bot/discord) con una **captura de pantalla del problema**.

## Los usuarios tienen acceso al servidor sin pasar el captcha {#captcha}

Este problema es relativamente común, pero depende de **la configuración de tu servidor**. Veamos cómo solucionarlo.

- **¿Tienes un rol automático?** Si has configurado un bot (diferente a RaidProtect) para asignar un rol a los nuevos miembros de tu servidor, esto puede interferir con el captcha. Reemplázalo con los [roles automáticos de RaidProtect](../features/onboarding.md#autorole), que se dan una vez superado el captcha.

- **¿Has activado el captcha?** Es una función opcional: actívala en la pestaña “**Llegadas**” de [`/settings`](../setup.md#settings). Consulta la [página de documentación dedicada al captcha](../features/captcha.md#config) para más información.

- **¿Cuál es su activación?** En “**Automática**”, el captcha solo se aplica durante un raid o un nivel [DISCON](../features/discon.md) alto (Shield Update, en fase experimental): el resto del tiempo, los recién llegados entran directamente. Elige “**Permanente**” para que cada recién llegado pase el captcha.

- **¿Un rol o un canal lo eluden?** La pantalla del captcha señala los canales que el rol de verificación sigue viendo y los roles que dan acceso al servidor sin pasarlo, con un botón para corregirlo.

## El comando /snipe no encuentra ningún mensaje {#snipe}

El [comando `/snipe`](../features/moderation.mdx#snipe) lee los mensajes que RaidProtect guarda una hora en memoria. Sin anti-spam ni reportes activos, esta caché está desactivada por defecto: activa “**Caché de mensajes**” en la pestaña “**Utilidades**” de [`/settings`](../setup.md#settings). Solo se pueden recuperar los mensajes eliminados después de activarla.

## Los usuarios pueden seguir hablando cuando bloqueo un canal {#lock}

El comando de bloqueo parece mágico, pero también tiene sus debilidades. Como [se indica en esta documentación](../features/channel-lock.md#lock), el comando **solo actúa sobre el rol @everyone**. Esto significa que si un rol en el canal que deseas bloquear tiene explícitamente permiso para hablar, podrá seguir haciéndolo. Como una imagen vale más que mil palabras, aquí te mostramos cómo se ve en la práctica.

![Captura de pantalla de la configuración de bloqueo de canal](../../../../en/docusaurus-plugin-content-docs/current/assets/lock-channel-messages-raidprotect.png)
