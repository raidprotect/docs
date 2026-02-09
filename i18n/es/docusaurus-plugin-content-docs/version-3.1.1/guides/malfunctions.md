---
title: Problemas Frecuentes
---

¿Tienes un problema con RaidProtect? La solucion probablemente esta aqui.

A veces las cosas no funcionan como se espera. Aqui estan los **problemas mas comunes** que puedes encontrar, junto con como resolverlos. 🤗

Si esta pagina no responde a un problema que estas experimentando, [**no dudes en contactar a nuestro soporte**](https://raidprotect.bot/discord) quienes estaran encantados de ayudarte.

## El bot muestra un error cuando ejecuto un comando {#commands}

Si el comando no se ejecuta exitosamente, **RaidProtect puede mostrar un error** en lugar del resultado esperado. En la mayoria de los casos, habra una indicacion en el mensaje, pero puede ser un mensaje mas generico. Asi es como resolver este problema en la mayoria de los casos. 🧐

- **Haz lo que se indica.** Algunos errores explican claramente el problema. Si el bot te pide que hagas algo, por favor hazlo.

- **Verifica los parametros del comando.** El comando podria simplemente estar mal escrito; revisa la ayuda sobre como usarlo. Recuerda que los corchetes ([]) no deben incluirse.

- **Verifica los permisos del bot.** El bot debe tener permiso de **Administrador** y estar al nivel de administrador en la jerarquia de roles.

- **Reintenta el comando.** A veces el problema se resuelve solo por razones desconocidas.

Si continuas recibiendo un error a pesar de seguir estos consejos, [contacta a nuestro soporte](https://raidprotect.bot/discord) para que podamos ayudarte. 🤝

## El canal de registros del bot no se creo {#logs}

Para notificarte de las acciones que realiza, RaidProtect necesita un canal de registros. Este canal se crea automaticamente cuando el bot se une por primera vez, pero a veces no se crea ningun canal. Asi es como remediar este problema. ⚙️

- **Asegurate de que el bot sea Administrador.** Para que el bot funcione correctamente, debe tener permiso de Administrador. Si esto no se ha hecho, ve a la configuracion de roles y otorga este permiso al rol de RaidProtect. Luego solo necesitas inicializar manualmente el bot para que todo funcione (ver abajo).

- **Verifica que el bot este correctamente inicializado.** Esto generalmente se hace automaticamente, pero puedes forzar esta inicializacion con el [comando `/setup`](../setup.md#install). El canal de registros deberia crearse automaticamente.

- **Configura un canal manualmente.** Si nada funciona, no entres en panico; puedes elegir manualmente el canal que el bot usara para los registros. Una vez creado un canal dedicado, ejecuta el [comando /settings](../setup.md#settings) y luego selecciona Registros.

## Un usuario hizo spam, pero el bot no lo sanciono {#anti-spam}

La funcion de [antispam](../features/anti-spam.md) es una de las principales funcionalidades de RaidProtect, y puede ser frustrante si no esta funcionando. Pero no te preocupes, la mayoria de las veces no es nada grave. 😇

- **Si el antispam pide que se detenga el spam pero no sanciona,** esto probablemente se debe a una falta de permisos. Recuerda, el bot debe tener permiso de Administrador y estar al nivel de administrador en la jerarquia de roles.

- **Verifica la configuracion del antispam.** Es bastante simple, pero algunos olvidan que han ignorado un canal.

- **Verifica los permisos del spammer.** Los administradores son ignorados, por lo que si estas probando el antispam en tu propio servidor, puede que no te detecte.

- **¿El spam es suficientemente largo?** El bot generalmente solo detecta spam si son mas de 5 mensajes. No seas demasiado impaciente.

Si el spam aun no se detecta, [contactanos en nuestro servidor de soporte](https://raidprotect.bot/discord) con una **captura de pantalla del problema**.

## Los usuarios tienen acceso al servidor sin completar el captcha {#captcha}

Este problema es relativamente comun, pero depende de **la configuracion de tu servidor**. Veamos como solucionarlo. 🏥

- **¿Tienes un rol automatico?** Si has configurado un bot (diferente a RaidProtect) para dar un rol a los recien llegados en tu servidor, esto puede interferir con el captcha. Reemplazalo con el [autorole de RaidProtect](../features/captcha.md#autorole).

- **¿Has activado el captcha?** Esta es una funcion completamente opcional que requiere ejecutar un comando para habilitarla. Consulta la [pagina de documentacion dedicada al captcha](../features/captcha.md#config) para mas informacion.

## Los usuarios aun pueden hablar cuando bloqueo un canal {#lock}

El comando lock parece magico, pero tiene sus debilidades. Como [se indica en esta documentacion](../features/channel-lock.md#lock), el comando **solo afecta al rol @everyone**. Esto significa que si hay un rol en el canal que deseas bloquear que tiene permiso explicito para hablar, aun podran hacerlo. Una imagen vale mas que mil palabras, asi que aqui esta como se ve en la practica. 🔍

[Captura de pantalla de la configuracion de bloqueo de canal](../../../../en/docusaurus-plugin-content-docs/version-3.1.1/assets/lock-channel-messages-raidprotect.png)
