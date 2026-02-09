---
title: Problemas frecuentes
---

Tienes un problema con RaidProtect? La solucion probablemente esta aqui.

A veces las cosas no funcionan como se espera. Aqui estan los **problemas mas comunes** que puedes encontrar, junto con como resolverlos. 🤗

Si esta pagina no responde a un problema que estas experimentando, [**no dudes en contactar a nuestro soporte**](https://raidprotect.bot/discord) quienes estaran encantados de ayudarte!

## El bot muestra un error cuando ejecuto un comando {#commands}

Si el comando no se ejecuta exitosamente, **RaidProtect puede mostrar un error** en lugar del resultado esperado. En la mayoria de los casos, habra una indicacion en el mensaje, pero puede ser un mensaje mas generico. Asi es como resolver este problema en la mayoria de los casos. 🧐

- **Haz lo que se indica.** Algunos errores explican claramente el problema. Si el bot te pide que hagas algo, por favor hazlo.

- **Verifica los parametros del comando.** Es posible que el comando simplemente este mal escrito; revisa la ayuda sobre como usarlo. Recuerda que los corchetes ([]) no deben incluirse.

- **Verifica los permisos del bot.** El bot debe tener el permiso de **Administrador** y estar al nivel de administrador en la jerarquia de roles.

- **Reintenta el comando.** A veces el problema se resuelve solo por razones desconocidas.

Si continuas recibiendo un error a pesar de seguir estos consejos, [contacta a nuestro soporte](https://raidprotect.bot/discord) para que podamos ayudarte. 🤝

## El canal de registros del bot no se creo {#logs}

Para notificarte de las acciones que realiza, RaidProtect necesita un canal de registros. Este canal se crea automaticamente cuando el bot se une por primera vez, pero a veces no se crea ningun canal. Asi es como solucionar este problema. ⚙️

- **Asegurate de que el bot sea Administrador.** Para que el bot funcione correctamente, debe tener el permiso de Administrador. Si esto no se ha hecho, ve a la configuracion de roles y otorga este permiso al rol de RaidProtect. Luego solo necesitas inicializar manualmente el bot para que todo funcione (ver abajo)!

- **Verifica que el bot este correctamente inicializado.** Esto normalmente se hace automaticamente, pero puedes forzar esta inicializacion con el [comando `/setup`](../setup.md#install). El canal de registros deberia crearse automaticamente.

- **Establece un canal manualmente.** Si nada funciona, no te preocupes; puedes elegir manualmente el canal que el bot usara para registros! Una vez creado un canal dedicado, ejecuta el [comando /settings](../setup.md#settings) y luego selecciona Logs.

## Un usuario hizo spam, pero el bot no lo sanciono {#anti-spam}

La funcion de [anti-spam](../features/anti-spam.mdx) es una de las funcionalidades principales de RaidProtect, y puede ser frustrante si no funciona. Pero tranquilo, la mayoria de las veces no es nada serio. 😇

- **Si el anti-spam pide detener el spam pero no sanciona,** probablemente se deba a una falta de permisos. Recuerda, el bot debe tener el permiso de Administrador y debe estar al nivel de administrador en la jerarquia de roles.

- **Verifica la configuracion del anti-spam.** Es bastante simple, pero algunos olvidan que han ignorado un canal.

- **Verifica los permisos del spammer.** Los administradores son ignorados, asi que si estas probando el anti-spam en tu propio servidor, puede que no te detecte.

- **Es el spam lo suficientemente largo?** El bot generalmente solo detecta spam si son mas de 5 mensajes. No seas demasiado impaciente.

Si el spam sigue sin ser detectado, [contactanos en nuestro servidor de soporte](https://raidprotect.bot/discord) con una **captura de pantalla del problema**.

## Los usuarios tienen acceso al servidor sin completar el captcha {#captcha}

Este problema es relativamente comun, pero depende de **la configuracion de tu servidor**. Veamos como solucionarlo. 🏥

- **Tienes un rol automatico?** Si has configurado un bot (que no sea RaidProtect) para dar un rol a los nuevos miembros de tu servidor, esto puede interferir con el captcha. Reemplazalo con el [autorole de RaidProtect](../features/captcha.md#autorole).

- **Has activado el captcha?** Es una funcion completamente opcional que requiere ejecutar un comando para activarla. Revisa la [pagina de documentacion dedicada al captcha](../features/captcha.md#config) para mas informacion.

## Los usuarios pueden seguir hablando cuando bloqueo un canal {#lock}

El comando lock parece magico, pero tiene sus debilidades. Como se [menciona en esta documentacion](../features/channel-lock.md#lock), el comando **solo afecta al rol @everyone**. Esto significa que si hay un rol en el canal que deseas bloquear que explicitamente tiene permiso para hablar, podran seguir haciendolo. Una imagen vale mas que mil palabras, asi que aqui esta como se ve en la practica. 🔍

[Captura de pantalla de la configuracion de bloqueo de canal](../assets/lock-channel-messages-raidprotect.png)
