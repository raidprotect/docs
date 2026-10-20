---
title: Activar la comunidad
description: "Activa la comunidad de Discord de tu servidor para desbloquear los ajustes de seguridad que RaidProtect necesita: Bloqueo de MD, modo raid y más."
---

Activar la función de comunidad hace que varios ajustes de seguridad avanzados de Discord estén disponibles, y algunas funciones de RaidProtect los necesitan:
- el [Bloqueo de MD](../features/dm-lock.mdx) (**DM Lock**);
- el [modo raid](../features/raid-mode.md) y el [Bloqueo de acceso](../features/join-lock.mdx), **solo** con la acción durante el raid “**Bloquear las invitaciones**” (el ajuste por defecto).

El [captcha](../features/captcha.md) y las demás acciones del modo raid (“**Expulsar a quienes llegan**”, “**Enviar al captcha**”, “**Captcha congelado durante el raid**”) funcionan sin la comunidad.

## 🚦 Requisitos previos {#requirement}

- Ser administrador del servidor de Discord.

## 🚩 Activar las funciones de comunidad {#steps}

1. **Abre la configuración de tu servidor**
   - Haz clic en el nombre del servidor en la esquina superior izquierda > “Configuración del servidor”.

2. **Ve a la sección “Comunidad”**
   - En la barra lateral, navega a la pestaña **Activar comunidad** y luego haz clic en **Comenzar**.

:::note
Si la comunidad ya está activada en tu servidor, la sección se llamará **Vista general de la comunidad**.
:::

3. **Sigue el asistente de configuración**
   - Activa la verificación por correo electrónico para todos los miembros.
   - Activa el filtro de contenido explícito.
   - Configura un canal de reglas y un canal de anuncios.
   - Acepta las directrices de uso del servidor comunitario.

4. **Completa la configuración**
   - Haz clic en “Finalizar configuración”. La insignia de “Comunidad” aparecerá en tu servidor una vez que la activación esté finalizada.

![Captura de pantalla de la activación de comunidad en Discord](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-enable-community.webp)

## 💡 Usar los módulos Bloqueo de MD y modo raid tras la activación {#use}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Para el [Bloqueo de MD](../features/dm-lock.mdx), abre la pestaña “**Protección**” y haz clic en “**Editar**” junto a “**Bloqueo de MD**”.
3. Para el [modo raid](../features/raid-mode.md#config), abre la pestaña “**Llegadas**” y haz clic en “**Configurar**” junto a “**Auto RaidMode**”.

Si un recuadro te pedía activar la comunidad, haz clic en “**Actualizar**”: desaparece una vez que la comunidad está activada.
