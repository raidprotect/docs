---
title: Proceso de incorporacion y Captcha
---

Si el canal `#verification` no es visible por defecto para los nuevos miembros, esto puede impedir que el sistema de Captcha funcione correctamente. Aqui te explicamos como solucionar este problema paso a paso.

## 1️⃣ Verificar los permisos del canal {#permissions}

1. Abre la configuracion del canal `#verification` (clic derecho > **Editar canal**).
2. En la pestana **Permisos**:
   - Asegurate de que `@everyone` **no** tenga permiso para ver el canal.
   - Verifica que el rol `@Unverified` **tenga** permiso para **ver el canal**, **leer el historial de mensajes** y **enviar mensajes**.

## 2️⃣ Verificar la categoria de Bienvenida {#default-category}

1. Ve a **Configuracion del servidor** > **Bienvenida**.
2. En la seccion **Canales predeterminados**, verifica que la categoria que contiene `#verification` este marcada como visible para los nuevos miembros.
3. Si es necesario, mueve `#verification` a una categoria marcada.
4. Guarda los cambios.

## 3️⃣ Actualizar la configuracion en RaidProtect {#refresh-config}

1. Usa el comando [`/settings`](../setup.md#settings) y ve a la pestana **Captcha**.
2. Haz clic en **Actualizar** para forzar la actualizacion de la configuracion.
3. Si el canal ahora es visible, el sistema de Captcha funcionara correctamente.

## 4️⃣ Probar con una cuenta de prueba {#test-account}

Para confirmar que todo esta configurado correctamente:

1. Unete al servidor con otra cuenta de Discord.
2. Verifica que el canal `#verification` sea visible al llegar.
3. Ingresa el codigo de Captcha enviado por RaidProtect.
4. Una vez verificado, la cuenta deberia tener acceso a los otros canales.

## 🛠️ Problemas comunes y soluciones {#common-issues}

| Problema | Solucion |
|----------|----------|
| 🔴 El canal `#verification` sigue invisible | Verifica que este en una **categoria marcada** en la configuracion de Bienvenida de Discord. |
| 🚫 El rol `@Unverified` no puede escribir | Otorgale el permiso de **enviar mensajes** en `#verification`. |
| ❌ El Captcha no funciona despues de los cambios | Haz clic en **"Actualizar"** en `/settings > Captcha`. |

---

✅ Siguiendo estos pasos, tu sistema de verificacion estara completamente operativo para dar la bienvenida a los miembros de manera segura y bloquear eficazmente bots o raids.
