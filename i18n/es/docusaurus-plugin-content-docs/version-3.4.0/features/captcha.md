---
title: Captcha (Verificación)
---

import { CaptchaSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

import CaptchaMockup from '@site/src/components/DiscordMessage/mockups/captcha';

{/* <CaptchaMockup /> : oculta por el momento */}

Evita que los selfbots accedan a tu servidor de Discord y bloquea los raids gracias al sistema de captcha de RaidProtect.

El captcha es una de las funciones más populares de RaidProtect, aunque sigue siendo completamente opcional. Permite pedir a cada nuevo usuario que supere un desafío que consiste en escribir un código, con el fin de verificar que no se trata de un robot (selfbot).

## ❓ Funcionamiento del captcha {#working}

El captcha se basa en un rol **@No verificado** y un canal llamado **#verificación**. Cuando un usuario se une a tu servidor:
- El bot asigna automáticamente el rol **@No verificado** a este usuario, limitando su acceso únicamente al canal **#verificación**.
- En este canal, el bot envía una imagen que contiene 6 letras mayúsculas. El usuario debe transcribir las letras en el canal para demostrar que es humano.
- Si la respuesta es correcta, se retira el rol **@No verificado** y el usuario accede con normalidad al servidor. En caso contrario, es expulsado automáticamente.
- Cuando el captcha está activado, RaidProtect publica automáticamente un mensaje en el canal de registros, indicando la fecha de creación de la cuenta de cada nuevo usuario.
- RaidProtect detecta automáticamente los problemas de permisos (canal y rol), así como la visibilidad predeterminada del canal durante el proceso de incorporación (onboarding) de Discord.

:::info
**Límite de tiempo e intentos:** Los usuarios disponen de **1 a 10 minutos** para completar el captcha (**5 minutos por defecto**) y de **1 a 3 intentos** (**2 intentos por defecto**). Pasado ese límite, son expulsados automáticamente del servidor.
:::
:::warning
**Gestión de permisos:** Los permisos del rol **@No verificado** son configurados automáticamente por RaidProtect. Puedes renombrar el rol y el canal, pero no los elimines.
:::

## 🚪 Configuración del captcha {#config}

La instalación del captcha es sencilla y rápida.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el botón "**Captcha**".
3. Elige el canal en el que se realizarán los captchas o usa el botón "**Crear uno para mí**".
4. El rol **@No verificado** se crea y se configura automáticamente.
5. Configura el número de intentos permitidos (entre 1 y 3) así como el tiempo máximo de resolución (entre 1 y 10 minutos).

<CaptchaSettingsMockup />

## ✨ Funciones adicionales {#additional-features}

Para adaptarse a las necesidades de tu servidor, el captcha de RaidProtect ofrece opciones personalizables.

### Registros separados {#logs}

Si tu servidor es popular, los registros relacionados con el captcha pueden saturar tu canal de registros principal. Puedes moverlos a otro canal.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el botón "**Registros**".
3. Selecciona "**Captcha**".
4. Elige el canal en el que se indexarán los registros del captcha o usa el botón "**Crear uno para mí**".

### Rol automático {#autorole}

Si usas un sistema de rol automático (autorole) distinto al de RaidProtect, puede interferir con el captcha. Reemplaza tu autorole existente por el de RaidProtect.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el botón "**Captcha**".
3. Selecciona "**Rol automático**".
4. Elige el rol que se otorgará a los miembros que hayan validado el captcha.

### Bypass del captcha {#bypass}

Usa el comando: ```/bypass captcha [usuario]```

Reemplaza `[usuario]` por el identificador deseado; este dispondrá de 10 minutos para unirse al servidor sin necesidad de resolver el captcha. Si el usuario ya está presente, el captcha se resolverá automáticamente. También puedes usar el comando sin especificar ningún usuario para conocer la lista actual de usuarios con bypass.
