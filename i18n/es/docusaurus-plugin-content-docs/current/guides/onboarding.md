---
title: Proceso de incorporacion y Captcha
---

Si el canal `#verification` no es visible por defecto para los nuevos miembros, esto puede impedir que el sistema de Captcha funcione correctamente. Aqui te explicamos como solucionar este problema paso a paso.

![Captura de pantalla de la alerta del Captcha](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-captcha-alert.webp)

## 1. Verificar los permisos del canal {#permissions}

1. Abre la configuracion del canal `#verification` (clic derecho > **Editar canal**).
2. En la pestana **Permisos**:
   - Asegurate de que `@everyone` **no** tenga permiso para ver el canal.
   - Verifica que el rol `@Unverified` **tenga** permiso para **ver el canal**, **leer el historial de mensajes** y **enviar mensajes**.

![Captura de pantalla de la verificacion de permisos del canal](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-verification-channel-permissions.webp)

## 2. Verificar la categoria de incorporacion {#default-category}

1. Ve a **Configuracion del servidor** > **Proceso de incorporacion**.
2. En la seccion **Canales predeterminados**, verifica que la categoria que contiene `#verification` este marcada como visible para los nuevos miembros.
3. Si es necesario, mueve `#verification` a una categoria marcada.
4. Guarda los cambios.

![Captura de pantalla de la verificacion de la categoria de incorporacion](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-welcome-category.webp)

## 3. Actualizar la configuracion en RaidProtect {#refresh-config}

1. Usa el [comando `/settings`](../setup.md#settings) y luego ve a la pestana **Captcha**.
2. Haz clic en **Actualizar** para forzar la actualizacion de la configuracion.
3. Si el canal ahora es visible, el sistema de Captcha funcionara correctamente.

## 4. Probar con una cuenta de prueba {#test-account}

Para confirmar que todo esta configurado correctamente:

1. Unete al servidor con otra cuenta de Discord.
2. Verifica que el canal `#verification` sea visible al llegar.
3. Ingresa el codigo Captcha enviado por RaidProtect.
4. Una vez verificada, la cuenta deberia tener acceso a los demas canales.

## Problemas comunes y soluciones {#common-issues}

| Problema | Solucion |
|---------|----------|
| El canal `#verification` sigue invisible | Verifica que este en una **categoria marcada** en la incorporacion de Discord. |
| El rol `@Unverified` no puede escribir | Otorgale el **permiso de enviar mensajes** en `#verification`. |
| El Captcha no funciona despues de la modificacion | Haz clic en **"Actualizar"** en `/settings > Captcha`. |

---

Siguiendo estos pasos, tu sistema de verificacion estara completamente operativo para recibir a los miembros de forma segura y bloquear eficazmente bots o raids.
