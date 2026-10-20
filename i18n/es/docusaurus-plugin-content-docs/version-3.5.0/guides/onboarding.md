---
title: Proceso de bienvenida y Captcha
description: "Configura la bienvenida de Discord para que el captcha de RaidProtect funcione: haz visible el canal de verificación para los nuevos miembros."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

Si el canal `#verificación` no es visible por defecto para los nuevos miembros, no pueden pasar el [captcha](../features/captcha.md) y se quedan bloqueados. Esta guía se refiere al **Proceso de bienvenida de Discord** (Ajustes del servidor > Proceso de bienvenida). Para el mensaje de bienvenida y los roles automáticos de RaidProtect, consulta la página [Llegadas y bienvenida](../features/onboarding.md).

En la mayoría de los casos, RaidProtect corrige el problema por ti: empieza por el paso 1.

## 1️⃣ Dejar que RaidProtect lo corrija {#auto-fix}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Llegadas**”.
3. Haz clic en “**Configurar**” junto a “**Captcha**”.
4. Si un recuadro señala que el canal de verificación **no es visible por defecto**, haz clic en:
   - “**Mover a** _categoría_” para colocar el canal en una categoría que ya sea visible para los nuevos miembros;
   - o “**Crear una nueva categoría**” para que creemos una categoría “Bienvenida” añadida a los canales por defecto.

Los permisos del canal se conservan al moverlo.

<Settings start="captcha" />

:::tip
La misma pantalla señala las **fugas** del rol `@No verificado`: roles dados por el Proceso de bienvenida de Discord que eluden la verificación, canales aún visibles para los miembros en verificación. El botón “**Corregir**” cierra los canales afectados. Consulta las [alertas de la pantalla Captcha](../features/captcha.md#alerts).
:::

## 2️⃣ Verificar los permisos del canal {#permissions}

RaidProtect establece por sí mismo los permisos del canal `#verificación` y del rol `@No verificado`. Si los has modificado, verifícalos:

1. Abre los ajustes del canal `#verificación` (clic derecho > **Editar canal**).
2. En la pestaña **Permisos**:
   - Asegúrate de que `@everyone` **no** tenga permiso para ver el canal.
   - Verifica que el rol `@No verificado` **tenga** permiso para **ver el canal** y **leer el historial de mensajes**.
   - En modo **Panel (Interactivo)**, el modo por defecto, `@No verificado` **no debe** poder enviar mensajes: el código se introduce en una ventana. En modo **Desafío (Clásico)**, debe poder **enviar mensajes** para escribir el código.

{/* ![Captura de pantalla de la verificación de permisos del canal](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-verification-channel-permissions.webp) : muestra “Enviar mensajes” permitido, cierto solo en modo Desafío */}

## 3️⃣ Verificar la categoría de bienvenida {#default-category}

Si prefieres corregirlo a mano:

1. Ve a **Ajustes del servidor** > **Proceso de bienvenida**.
2. En la sección **Canales predeterminados**, verifica que la categoría que contiene `#verificación` esté marcada como visible para los nuevos miembros.
3. Si es necesario, mueve `#verificación` a una categoría marcada.
4. Guarda los cambios.

![Captura de pantalla de la verificación de la categoría de bienvenida](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-welcome-category.webp)

## 4️⃣ Actualizar la configuración en RaidProtect {#refresh-config}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Llegadas**”.
3. Haz clic en “**Configurar**” junto a “**Captcha**”.
4. Si todavía se muestra un recuadro, haz clic en “**Actualizar**” para volver a lanzar la verificación. Cuando el recuadro desaparece, el captcha funciona correctamente.

## 5️⃣ Probar con una cuenta de prueba {#test-account}

Para confirmar que todo está configurado correctamente:

1. Únete al servidor con otra cuenta de Discord.
2. Verifica que el canal `#verificación` sea visible al llegar.
3. Haz clic en “**Verificar**” e introduce el código (modo Panel), o escribe el código en el canal (modo Desafío).
4. Una vez verificada, la cuenta debería tener acceso a los demás canales.

## 🛠️ Problemas comunes y soluciones {#common-issues}

| Problema | Solución |
|---------|----------|
| 🔴 El canal `#verificación` sigue invisible | Haz clic en “**Mover a** _categoría_” en la pantalla Captcha, o coloca el canal en una **categoría marcada** de la incorporación de Discord. |
| 🚫 El rol `@No verificado` no puede escribir | Es normal en modo Panel: el miembro hace clic en “**Verificar**”. En modo Desafío, otórgale el **permiso de enviar mensajes** en `#verificación`. |
| 🔓 Un miembro no verificado ve otros canales | Haz clic en “**Corregir**” en el recuadro de fuga de la pantalla Captcha, y quita los roles que el Proceso de bienvenida de Discord da al llegar. |
| ❌ El Captcha no funciona después de la modificación | Haz clic en “**Actualizar**” en la pantalla Captcha (pestaña “**Llegadas**” de `/settings`). |

---

✅ Siguiendo estos pasos, tu sistema de verificación estará completamente operativo para recibir a los miembros de forma segura y bloquear eficazmente bots o raids.
