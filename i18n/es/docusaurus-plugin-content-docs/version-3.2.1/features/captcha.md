---
title: Captcha (Verificación)
---

Evita que los selfbots accedan a tu servidor de Discord y bloquea los raids con el sistema de captcha de RaidProtect.

El captcha es una de las funciones más populares de RaidProtect, aunque es completamente opcional. Te permite exigir que cada nuevo usuario complete un desafío ingresando un código para verificar que no es un bot (selfbot).

## ❓ Cómo funciona el Captcha {#working}

El captcha se basa en un rol **@Unverified** y un canal **#verification**. Cuando un usuario se une a tu servidor:
- El bot asigna automáticamente el rol **@Unverified** a este usuario, limitando su acceso únicamente al canal **#verification**.
- En este canal, el bot envía una imagen con 6 letras mayúsculas. El usuario debe transcribir las letras en el canal para demostrar que es humano.
- Si la respuesta es correcta, se elimina el rol **@Unverified** y el usuario obtiene acceso normal al servidor. De lo contrario, es expulsado automáticamente.
- Cuando el captcha está activado, RaidProtect publica automáticamente un mensaje en el canal de registros, indicando la fecha de creación de la cuenta de cada nuevo usuario.
- RaidProtect detecta automáticamente problemas de permisos (canal y rol) así como la visibilidad predeterminada del canal durante el proceso de incorporación de Discord.

:::info
**Límite de tiempo e intentos:** Los usuarios tienen de **1 a 10 minutos** para completar el captcha (**5 minutos por defecto**) y de **1 a 3 intentos** (**2 intentos por defecto**). Si superan estos límites, son expulsados automáticamente del servidor.
:::
:::warning
**Gestión de permisos:** Los permisos del rol **@Unverified** son configurados automáticamente por RaidProtect. Puedes renombrar el rol y el canal, pero no los elimines.
:::

## 🚪 Configuración del Captcha {#config}

Configurar el captcha es rápido y sencillo.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el botón "**Captcha**".
3. Elige el canal donde se realizarán los captchas o usa el botón "**Create one for me**".
4. El rol **@Unverified** se crea y configura automáticamente.
5. Configura el número de intentos permitidos (entre **1 y 3**) y el tiempo máximo de resolución (entre **1 y 10 minutos**).

![Captura de pantalla de la configuración del captcha](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-captcha.webp)

## ✨ Funciones adicionales {#additional-features}

Para adaptarse a las necesidades de tu servidor, el captcha de RaidProtect ofrece opciones personalizables.

### Registros separados {#logs}

Si tu servidor es popular, los registros relacionados con el captcha pueden saturar tu canal de registros principal. Puedes moverlos a otro canal.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el botón "**Logs**".
3. Selecciona "**Captcha**".
4. Elige el canal donde se almacenarán los registros del captcha o usa el botón "**Create one for me**".

### Rol automático {#autorole}

Si usas un sistema de rol automático (autorole) distinto al de RaidProtect, puede interferir con el captcha. Reemplaza tu autorole existente con el de RaidProtect.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el botón "**Captcha**".
3. Selecciona "**Auto Role**".
4. Elige el rol que se asignará a los miembros que completen exitosamente el captcha.

### Omitir captcha {#bypass}

Usa el comando: ```/bypass captcha [user]```

Reemplaza `[user]` con el identificador deseado, quien tendrá 10 minutos para unirse al servidor sin necesidad de resolver el captcha. Si el usuario ya está presente, el captcha se resolverá automáticamente. También puedes usar el comando sin especificar un usuario para ver la lista actual de usuarios con omisión.
