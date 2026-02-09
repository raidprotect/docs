---
title: Proceso de incorporación y Captcha
---

Si el canal `#verification` no es visible por defecto para los nuevos miembros, esto puede impedir que el sistema de Captcha funcione correctamente. Aquí te explicamos cómo solucionar este problema paso a paso.

![Captura de pantalla de la alerta del captcha](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-captcha-alert.webp)

## 1️⃣ Verificar los permisos del canal {#permissions}

1. Abre la configuración del canal `#verification` (clic derecho > **Editar canal**).
2. En la pestaña **Permisos**:
   - Asegúrate de que `@everyone` **no** tenga permiso para ver el canal.
   - Asegúrate de que el rol `@Unverified` **tenga** permiso para **ver el canal**, **leer el historial de mensajes** y **enviar mensajes**.

![Captura de pantalla de la verificación de permisos del canal](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-verification-channel-permissions.webp)

## 2️⃣ Verificar la categoría de bienvenida {#default-category}

1. Ve a **Configuración del servidor** > **Incorporación**.
2. En la sección **Canales predeterminados**, verifica que la categoría que contiene `#verification` esté marcada como visible para los nuevos miembros.
3. Si es necesario, mueve `#verification` a una categoría marcada.
4. Guarda los cambios.

![Captura de pantalla de la verificación de la categoría de bienvenida](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-welcome-category.webp)

## 3️⃣ Actualizar la configuración en RaidProtect {#refresh-config}

1. Usa el comando [`/settings`](../setup.md#settings) y ve a la pestaña **Captcha**.
2. Haz clic en **Refresh** para forzar la actualización de la configuración.
3. Si el canal ahora es visible, el sistema de Captcha funcionará correctamente.

## 4️⃣ Probar con una cuenta de prueba {#test-account}

Para confirmar que todo está configurado correctamente:

1. Únete al servidor con otra cuenta de Discord.
2. Verifica que el canal `#verification` sea visible al llegar.
3. Ingresa el código de Captcha enviado por RaidProtect.
4. Una vez verificado, la cuenta debería tener acceso a los demás canales.

## 🛠️ Problemas comunes y soluciones {#common-issues}

| Problema | Solución |
|----------|----------|
| 🔴 El canal `#verification` permanece invisible | Verifica que esté en una **categoría marcada** en la configuración de bienvenida de Discord. |
| 🚫 El rol `@Unverified` no puede escribir | Otórgale el permiso de **enviar mensajes** en `#verification`. |
| ❌ El captcha no funciona después de los cambios | Haz clic en **"Refresh"** en `/settings > Captcha`. |

---

✅ Siguiendo estos pasos, tu sistema de verificación estará completamente operativo para recibir miembros de forma segura y bloquear eficazmente bots o raids.
