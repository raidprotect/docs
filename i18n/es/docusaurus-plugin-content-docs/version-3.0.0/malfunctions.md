---
title: Problemas de funcionamiento
---

¿Tienes un problema con RaidProtect? La solución probablemente está aquí.

A veces, las cosas no salen como se esperaba. Aquí están los **problemas más comunes** que podrías encontrar y cómo resolverlos. 🤗

Si esta página no aborda el problema que enfrentas, **no dudes en contactar a nuestro equipo de soporte**, ¡que te ayudará con gusto!

## El bot muestra un error cuando uso un comando {#commands}

Si un comando no se ejecuta correctamente, **RaidProtect podría mostrar un error** en lugar del resultado esperado. En la mayoría de los casos, el mensaje explicará el problema, pero a veces puede ser más genérico. A continuación te explicamos cómo resolver el problema en la mayoría de los casos. 🧐

- **Sigue las instrucciones.** Algunos errores explican claramente el problema. Si el bot te pide que hagas algo, sigue las instrucciones proporcionadas.

- **Verifica los parámetros del comando.** Asegúrate de que el comando esté escrito correctamente. Consulta la documentación de ayuda si es necesario. Recuerda que los corchetes (`[]`) no deben incluirse en tu comando.

- **Verifica los permisos del bot.** El bot debe tener permisos de Administrador y estar ubicado al mismo nivel que los administradores en la jerarquía de roles.

- **Vuelve a intentar el comando.** En ocasiones, el problema se resuelve solo sin razón aparente.

Si el error persiste a pesar de seguir estos pasos, contacta a nuestro equipo de soporte para obtener más asistencia. 🤝

## El canal de logs del bot no se creó automáticamente {#logs}

Para notificarte de sus acciones, RaidProtect requiere un canal de logs. Este canal se crea automáticamente cuando el bot se une al servidor por primera vez, pero a veces no aparece. ¡Así es como puedes solucionarlo! ⚙️

- **Asegúrate de que el bot tenga permisos de Administrador.** El bot requiere acceso de Administrador para funcionar correctamente. Si no lo tiene, ve a la configuración de roles de tu servidor y otorga este permiso al rol de RaidProtect. Una vez configurados los permisos, inicializa manualmente el bot como se describe a continuación.

- **Verifica la inicialización del bot.** Este proceso normalmente es automático, pero puedes inicializar el bot manualmente ejecutando el comando `?setup`. El canal de logs debería crearse entonces.

- **Establece un canal de logs manualmente.** Si nada funciona, ¡no te preocupes! Puedes asignar manualmente un canal para los logs. Crea un canal dedicado y luego ejecuta el comando `?settings logs #canal`, reemplazando `#canal` con tu nuevo canal de logs.

## Un usuario hizo spam, pero el bot no actuó {#anti-spam}

El anti-spam es una de las funciones principales de RaidProtect, y puede ser frustrante si no funciona como se espera. Afortunadamente, el problema suele ser fácil de solucionar. 😇

- **Si el anti-spam detecta spam pero no actúa,** probablemente se deba a permisos insuficientes. Asegúrate de que el bot tenga permisos de Administrador y esté ubicado al mismo nivel que los administradores en la jerarquía de roles.

- **Verifica la configuración del anti-spam.** Puede parecer obvio, pero algunos usuarios olvidan que excluyeron ciertos canales de la detección.

- **Verifica los permisos del spammer.** Los administradores son ignorados por el sistema anti-spam. Si estás haciendo pruebas en tu propio servidor, el bot podría no detectar tu spam.

- **¿El spam es lo suficientemente significativo?** El bot generalmente detecta el spam después de más de cinco mensajes. Ten paciencia al hacer pruebas.

Si el anti-spam sigue sin responder al spam, contáctanos en nuestro servidor de soporte con una **captura de pantalla del problema**.

## Los usuarios evaden el captcha {#captcha}

Este problema es relativamente común y generalmente está relacionado con **la configuración de tu servidor**. Así es como puedes solucionarlo. 🏥

- **¿Tienes un autorole?** Si otro bot está asignando un rol a los nuevos usuarios, podría interferir con el captcha. Reemplázalo con el [autorole de RaidProtect](./features/captcha.md#autorole).

- **¿Está activado el captcha?** Esta función es opcional y requiere un comando para activarse. Consulta la documentación del captcha para más detalles.

## Los usuarios aún pueden chatear cuando bloqueo un canal {#lock}

El comando de bloqueo es útil pero tiene limitaciones. Como se indica en [esta documentación](./features/others.md#lock), el comando **solo afecta al rol @everyone**. Esto significa que si otro rol tiene permiso explícito para chatear en el canal bloqueado, los miembros con ese rol seguirán pudiendo hablar.

Una imagen vale más que mil palabras, así que aquí tienes un ejemplo visual de cómo se ve esto. 🔍

![Captura de pantalla de la configuración del bloqueo de canal](../../../en/docusaurus-plugin-content-docs/version-3.0.0/assets/lock-channel-messages-raidprotect.png)
