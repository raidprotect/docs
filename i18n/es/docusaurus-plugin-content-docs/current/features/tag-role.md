---
title: Rol de Etiqueta
description: "El Rol de Etiqueta de RaidProtect asigna automáticamente un rol a los miembros que lucen la etiqueta de tu servidor de Discord y recompensa su compromiso."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';
import TagRoleConceptMockup from '@site/src/components/DiscordMessage/mockups/tag-role-concept';

<TagRoleConceptMockup />

El Rol de Etiqueta permite asignar automáticamente un rol a los miembros que añaden [la etiqueta de tu servidor](https://support.discord.com/hc/es/articles/31444248479639-Etiqueta-del-servidor) a su perfil de Discord. Al asignar un rol a estos miembros, valoras su compromiso y los animas a representar activamente tu servidor. Es una manera sencilla pero eficaz de reforzar la identidad colectiva, a la vez que recompensas a los embajadores más fieles de tu comunidad.

## ❓ Cómo funciona el Rol de Etiqueta {#working}

El funcionamiento es sencillo. En cuanto un miembro añade la etiqueta del servidor a su perfil de Discord, RaidProtect le asigna automáticamente un rol específico.
Si el miembro retira la etiqueta, el rol se le retira.

Detectamos el cambio en la siguiente actualización del perfil del miembro (apodo, avatar, banner, roles, etiqueta…).

:::info
Si la etiqueta no está activada o tu servidor aún no dispone de la función, el Rol de Etiqueta no tendrá ningún efecto.
:::

## 🎖️ Configuración del Rol de Etiqueta {#config}

La configuración se hace en unos pocos clics:
1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Utilidades**”.
3. Haz clic en “**Configurar**” junto a “**Rol de Etiqueta**”.
4. Selecciona un rol existente mediante el selector o haz clic en “**Crear uno para mí**”: creamos un rol `Tag` sin ningún permiso.
5. Puedes desactivar el Rol de Etiqueta en cualquier momento haciendo clic en el botón “**Restablecer**”.

Cada cambio de configuración del Rol de Etiqueta se registra en tus logs del servidor.

<Settings start="tagrole" />

:::tip
Tus miembros recibirán el rol en su próxima modificación de perfil (apodo, avatar, banner, roles, etiqueta…).
:::

### Comando /tagrole {#command}

Usa el comando: ```/tagrole```

Abre directamente la pantalla de configuración del Rol de Etiqueta, sin pasar por `/settings`. Está reservado a los miembros que tienen el permiso “**Gestionar roles**”.

### Roles rechazados {#refused-roles}

El Rol de Etiqueta se da automáticamente a cualquier miembro: rechazamos por tanto los roles que podrían causar problemas.

- **Un rol ya utilizado por RaidProtect**: rol de jail, rol de silencio, rol de verificación del captcha o rol automático.
- **Un rol gestionado** por una aplicación o por el boost del servidor: Discord prohíbe asignarlo manualmente. Crea un rol normal en su lugar.
- **Un rol situado por encima del rol de RaidProtect**: arrastra el rol de RaidProtect por encima en **Ajustes del servidor > Roles**.
- **Un rol situado por encima de tu rol más alto** (salvo para el propietario del servidor).
- **Un rol con permisos sensibles**: Administrador, Banear, Expulsar, Gestionar el servidor, los canales, los mensajes, los roles, los webhooks, las expresiones, los eventos o los hilos.

### Recuadros de alerta {#warnings}

La pantalla de configuración te avisa cuando el Rol de Etiqueta no puede funcionar:

- **Permiso que falta**: RaidProtect necesita el permiso “**Gestionar roles**”. También aparece una alerta ⚠️ junto a “**Rol de Etiqueta**” en la pestaña Utilidades de `/settings`.
- **Etiqueta de servidor no activada**: tu servidor no ha activado la función [Etiqueta de servidor](https://support.discord.com/hc/es/articles/31444248479639-Etiqueta-del-servidor), por lo que el Rol de Etiqueta no tiene ningún efecto por el momento.

Tras la corrección, haz clic en “**Actualizar**” para volver a comprobar.

## Preguntas frecuentes {#faq}

### ¿Por qué un miembro con la etiqueta todavía no tiene el rol?

Detectamos la etiqueta en la siguiente actualización del perfil del miembro. Mientras no modifique nada (apodo, avatar, roles, etiqueta…), el rol no se asigna. El soporte puede lanzar una sincronización completa si hace falta.

### ¿Por qué se rechaza mi rol?

El Rol de Etiqueta no puede ser un rol ya utilizado por RaidProtect, un rol gestionado por una aplicación, un rol situado por encima de RaidProtect o de ti, ni un rol con permisos sensibles.

### ¿Quién puede configurar el Rol de Etiqueta?

Los administradores desde `/settings`, y los miembros que tienen el permiso “Gestionar roles” con el comando `/tagrole`.
