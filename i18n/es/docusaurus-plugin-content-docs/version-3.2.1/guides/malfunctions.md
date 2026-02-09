---
title: Problemas frecuentes
---

¿Tienes un problema con RaidProtect? La solución probablemente está aquí.

A veces las cosas no funcionan como se espera. Aquí están los **problemas más comunes** que puedes encontrar, junto con cómo resolverlos. 🤗

Si esta página no responde a un problema que estás experimentando, [**no dudes en contactar a nuestro soporte**](https://raidprotect.bot/discord) quienes estarán encantados de ayudarte.

## El bot muestra un error cuando ejecuto un comando {#commands}

Si el comando no se ejecuta exitosamente, **RaidProtect puede mostrar un error** en lugar del resultado esperado. En la mayoría de los casos, habrá una indicación en el mensaje, pero puede ser un mensaje más genérico. Aquí te explicamos cómo resolver este problema en la mayoría de los casos. 🧐

- **Haz lo que se indica.** Algunos errores explican claramente el problema. Si el bot te pide que hagas algo, por favor hazlo.

- **Verifica los parámetros del comando.** El comando simplemente puede estar mal escrito; revisa la ayuda sobre cómo usarlo. Recuerda que los corchetes ([]) no deben incluirse.

- **Verifica los permisos del bot.** El bot debe tener el permiso de **Administrador** y estar al nivel de administrador en la jerarquía de roles.

- **Vuelve a intentar el comando.** A veces el problema se resuelve solo por razones desconocidas.

Si continúas recibiendo un error a pesar de seguir estos consejos, [contacta a nuestro soporte](https://raidprotect.bot/discord) para que podamos asistirte. 🤝

## El canal de registros del bot no se creó {#logs}

Para notificarte de las acciones que realiza, RaidProtect necesita un canal de registros. Este canal se crea automáticamente cuando el bot se une por primera vez, pero a veces no se crea ningún canal. Aquí te explicamos cómo remediar este problema. ⚙️

- **Asegúrate de que el bot sea Administrador.** Para que el bot funcione correctamente, se le debe otorgar el permiso de Administrador. Si no se ha hecho, ve a la configuración de roles y otorga este permiso al rol de RaidProtect. Luego solo necesitas inicializar manualmente el bot para que todo funcione (¡ver abajo)!

- **Verifica que el bot esté correctamente inicializado.** Esto generalmente se hace automáticamente, pero puedes forzar esta inicialización con el [comando `/setup`](../setup.md#install). El canal de registros debería crearse automáticamente.

- **Configura un canal manualmente.** Si nada funciona, no te preocupes; ¡puedes elegir manualmente el canal que el bot usará para los registros! Una vez creado un canal dedicado, ejecuta el [comando /settings](../setup.md#settings) y luego selecciona Logs.

## Un usuario hizo spam, pero el bot no lo sancionó {#anti-spam}

La función de [anti-spam](../features/anti-spam.mdx) es una de las principales funcionalidades de RaidProtect, y puede ser frustrante si no funciona. Pero no te preocupes, la mayoría de las veces no es nada grave. 😇

- **Si el anti-spam pide que se detenga el spam pero no sanciona,** probablemente se deba a la falta de permisos. Recuerda, el bot debe tener el permiso de Administrador y debe estar al nivel de administrador en la jerarquía de roles.

- **Verifica la configuración del anti-spam.** Es bastante simple, pero algunos olvidan que han ignorado un canal.

- **Verifica los permisos del spammer.** Los administradores son ignorados, así que si estás probando el anti-spam en tu propio servidor, puede que no te detecte.

- **¿El spam es lo suficientemente largo?** El bot generalmente solo detecta spam si son más de 5 mensajes. No seas demasiado impaciente.

Si el spam aún no es detectado, [contáctanos en nuestro servidor de soporte](https://raidprotect.bot/discord) con una **captura de pantalla del problema**.

## Los usuarios tienen acceso al servidor sin completar el captcha {#captcha}

Este problema es relativamente común, pero depende de **la configuración de tu servidor**. Veamos cómo solucionarlo. 🏥

- **¿Tienes un rol automático?** Si has configurado un bot (que no sea RaidProtect) para dar un rol a los nuevos miembros de tu servidor, esto puede interferir con el captcha. Reemplázalo con el [autorole de RaidProtect](../features/captcha.md#autorole).

- **¿Has activado el captcha?** Esta es una función completamente opcional que requiere ejecutar un comando para activarla. Consulta la [página de documentación dedicada al captcha](../features/captcha.md#config) para más información.

## Los usuarios todavía pueden hablar cuando bloqueo un canal {#lock}

El comando de bloqueo parece mágico, pero tiene sus debilidades. Como [se indica en esta documentación](../features/channel-lock.md#lock), el comando **solo afecta al rol @everyone**. Esto significa que si hay un rol en el canal que deseas bloquear que explícitamente tiene permiso para hablar, seguirán pudiendo hacerlo. Una imagen vale más que mil palabras, así que aquí tienes cómo se ve en la práctica. 🔍

[Captura de pantalla de la configuración de bloqueo de canal](../../../../en/docusaurus-plugin-content-docs/current/assets/lock-channel-messages-raidprotect.png)
