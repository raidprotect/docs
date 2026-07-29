---
title: Rol de etiqueta
description: "El Rol de etiqueta de RaidProtect asigna automáticamente un rol a los miembros que lucen la etiqueta de tu servidor de Discord y recompensa su compromiso."
---

import TagRoleMockup from '@site/src/components/DiscordMessage/mockups/tag-role';
import TagRoleConceptMockup from '@site/src/components/DiscordMessage/mockups/tag-role-concept';

<TagRoleConceptMockup />

El Rol de etiqueta permite asignar automáticamente un rol a los miembros que añaden [la etiqueta de tu servidor](https://support.discord.com/hc/es/articles/31444248479639-Server-Tags) a su perfil de Discord. Al asignar un rol a estos miembros, valoras su compromiso y [los animas a representar activamente tu servidor](https://dfr.gg/blog/2025/05/09/revolution-boosts-tags-serveur-publics#tags). Es una manera sencilla pero eficaz de reforzar la identidad colectiva, a la vez que recompensas a los embajadores más fieles de tu comunidad.

## ❓ Cómo funciona el Rol de etiqueta {#working}

El funcionamiento es sencillo. En cuanto un miembro añade la etiqueta del servidor a su perfil de Discord, RaidProtect le asigna automáticamente un rol específico.
Si el miembro retira la etiqueta, el rol se le retira.

:::info
Si la etiqueta no está activada o tu servidor aún no dispone de la función, el Rol de etiqueta no tendrá ningún efecto.
:::

## 🎖️ Configuración del Rol de etiqueta {#config}

La configuración se hace en unos pocos clics:
1. Usa el [comando `/settings`](../setup.md#settings).
2. Haz clic en el botón "**Rol de etiqueta**".
3. Selecciona un rol existente mediante el selector o haz clic en "**Crear uno para mí**".
4. Puedes deseleccionar el rol en cualquier momento haciendo clic en el botón "**Restablecer**".

<TagRoleMockup />

:::tip
Tus miembros recibirán el rol en su próxima modificación de perfil (Nombre de usuario, Avatar, Banner, Roles, Etiqueta...).
:::

## 🔄 Sincronización del rol {#sync}

Para asignar de inmediato el rol a todos los miembros que ya llevan la etiqueta (y retirarlo a quienes ya no la llevan), usa el botón "**Sincronizar**" en la configuración del Rol de etiqueta:

- **Gratuito**: una sincronización ofrecida, una sola vez por servidor.
- **Premium**: una sincronización por semana.

La sincronización se ejecuta en segundo plano y continúa aunque el bot se reinicie. Solo puede haber una sincronización en curso a la vez en un servidor.

:::note
El botón "Sincronizar" está en despliegue progresivo. Si todavía no está disponible en tu servidor, puedes [pedir al soporte](https://raidprotect.bot/discord) una sincronización completa del rol.
:::
