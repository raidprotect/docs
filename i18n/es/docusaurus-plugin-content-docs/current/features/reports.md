---
title: Reportes
description: "El sistema de reportes de RaidProtect permite a tu comunidad señalar contenidos y miembros sospechosos, con una gestión clara para tus moderadores."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import ReportsMockup from '@site/src/components/DiscordMessage/mockups/reports';

<ReportsMockup />

El sistema de reportes de RaidProtect permite a tu comunidad hacer llegar en unos clics cualquier mensaje o miembro sospechoso a tus moderadores, mediante un clic derecho, un botón dedicado o el comando `/reportar`. Se configura para optimizar el tratamiento de los reportes por parte de tu equipo.

## ❓ ¿Cómo funcionan los reportes? {#working}
Los miembros pueden reportar contenido a través de 4 métodos principales.

1. **Clic derecho en un mensaje**
Un miembro puede hacer clic derecho en un mensaje que considere que infringe el reglamento, seleccionar **`Aplicaciones`** y luego hacer clic en **`Reportar Mensaje`**. Se abre una ventana en la que precisa la razón del reporte.

2. **Clic derecho en un perfil**
De la misma manera, un miembro puede hacer clic derecho en un perfil que considere problemático, elegir **`Aplicaciones`** y luego hacer clic en **`Reportar Usuario`**. Se abre entonces una ventana para que precise lo que reporta (foto de perfil, nombre de usuario, biografía, actividad en voz, actividad en mensajes privados) y la razón.

3. **Botón en un panel de información**
Si la función “Reporte” está activada en un [panel de información (`/display public`)](./display.mdx), un botón “**Reportar un miembro**” está disponible directamente bajo el panel, lo que permite a los miembros reportar rápidamente a un usuario.

4. **Comando Slash**
Los miembros también pueden reportar a un usuario mediante el comando **`/reportar`** en cualquier canal del servidor.

Usa el comando: ```/reportar (member)```

Reemplaza `(member)` con el usuario deseado. La razón se introduce después en una ventana, como con el clic derecho en un perfil.

:::info
Activar los reportes activa también la [caché de mensajes](./moderation.mdx#snipe): RaidProtect guarda una hora de mensajes en memoria para adjuntar el contenido reportado a la alerta.
:::

## 🚩 Configuración de los reportes {#config}

Los reportes llegan a un **canal de reportes**. Si no eliges ninguno, se envían a tu canal de logs general. Todos los ajustes están en una misma pantalla:

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Moderación**”.
3. Haz clic en “**Configurar**” junto a “**Reportes**”.
4. Haz clic en “**Activar**” a la derecha del título de la pantalla para encender el sistema de reportes.

<Settings start="reports" />

### Configurar el canal {#config-channel}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Moderación**”.
3. Haz clic en “**Configurar**” junto a “**Reportes**”.
4. Haz clic en “**Editar**” junto a “**Recibir reportes**”.
5. En la ventana, selecciona el canal deseado (_por ejemplo: #reportes o #reports_), o marca “**Crear un canal para mí**” para que RaidProtect cree un canal privado `reportes`.

Si no seleccionas ningún canal, o el canal de logs, los reportes siguen tu canal de logs general.

<SettingsModal name="reportChannel" />

### Configurar el rol de notificación {#config-role}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Moderación**”.
3. Haz clic en “**Configurar**” junto a “**Reportes**”.
4. Haz clic en “**Editar**” junto a “**Rol de notificación**”.
5. En la ventana, selecciona el rol deseado (_por ejemplo: @Moderador o @Notifs reportes_), o marca “**Otra mención**”: `@everyone`, `@here` o “**Crear un rol para mí**” (RaidProtect crea el rol `Nuevo reporte`).

Sin rol configurado, se menciona a `@here`.

<SettingsModal name="reportRole" />

:::warning
El canal debe estar reservado a los moderadores y administradores para garantizar una gestión correcta de los reportes.
:::

### Agrupación de los reportes {#group}

El interruptor “**Agrupación**” determina cómo se presentan varios reportes que apuntan al mismo miembro:

- **Activado** *(por defecto)*: los reportes que apuntan al mismo miembro se agrupan en una sola alerta.
- **Desactivado**: cada reporte crea su propia alerta separada.

Haz clic en “**Activar**” o “**Desactivar**” junto a “**Agrupación**” en la pantalla Reportes.

<a id="config-notify"></a>

### Notificación del reportante {#notify}

El botón “**Editar**” junto a “**Notificación al denunciante**” abre una ventana en la que eliges lo que el miembro que originó el reporte recibe por MD una vez tratado su reporte:

| Nivel | Efecto |
|---|---|
| **Desactivado** | Los reportantes no reciben ninguna notificación. |
| **Solo el tratamiento** *(por defecto)* | Se indica al reportante que su reporte ha sido tratado. |
| **Con el resultado** | Se indica si el reporte fue aceptado o rechazado. |
| **Con el moderador** | Se indica también qué moderador trató el reporte. |

El reportante solo recibe un mensaje por reporte, aunque se haya agrupado con otros.

<SettingsModal name="reportNotify" />

<a id="config-trusted-role"></a>

### Rol de confianza <span className="badge-premium">Premium</span> {#trusted-role}

El “**Rol de confianza**” permite a tus miembros más fiables actuar de inmediato en caso de urgencia: cuando un miembro que dispone de este rol realiza un reporte, puede marcar la opción “**Acción preventiva**” para aplicar un **timeout preventivo de 24 horas** al usuario reportado, a la espera de que un moderador trate el reporte.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Moderación**”.
3. Haz clic en “**Configurar**” junto a “**Reportes**”.
4. Haz clic en “**Editar**” junto a “**Rol de confianza**”.
5. En la ventana, selecciona el rol, o marca “**Crear un rol para mí**” (RaidProtect crea el rol `Reportante de confianza`). Deja el campo vacío para desactivar el rol de confianza.

Funcionamiento del timeout preventivo:

- El timeout preventivo es **silencioso**: el usuario reportado no recibe ningún MD mientras un moderador no haya confirmado la sanción.
- Su razón es “**Sanción preventiva:**” seguida de la razón del reporte.
- Si el reporte se refiere a un mensaje, este se elimina.
- La alerta se marca como urgente: la mención va precedida de “**🛑 Denuncia urgente**”.
- La sanción está vinculada al reporte: el moderador que lo trata puede confirmarla o anularla.

:::info
Esta función está reservada a los servidores [**Premium**](/es/premium).
:::

### Reputación de los reportantes {#bad-reporters}

El botón “**Editar**” junto a “**Falsos denunciantes**” abre la ventana “**Reputación de los denunciantes**”, que permite actuar sobre los miembros cuyos reportes son rechazados con regularidad:

- **Umbral**: número de reportes rechazados antes de actuar (3, 5, 6, 10 o 15; “**Desactivado**” por defecto).
- **Ventana**: periodo de cálculo (7, 14, 30, 60 o 90 días; 30 días por defecto).
- **Acción** una vez alcanzado el umbral:
  - “**Notificar a los moderadores**” *(por defecto)*: se envía una alerta con el botón “**Bloquear las denuncias**” y un botón de sanción (p. ej.: “**Advertir al denunciante**”).
  - “**Bloquear automáticamente**”: el miembro ya no puede enviar reportes.
  - “**Sancionar automáticamente**”: se aplica la sanción configurada.
  - “**Bloquear y sancionar**”: combina las dos acciones anteriores.
- **Sanción**: la sanción aplicada al reportante falso (Advertencia por defecto, Timeout, Silencio, Expulsión o Baneo).

<SettingsModal name="reportBad" />

:::info
Sin [rol de Silencio](./sanctions.mdx#mute) configurado, la sanción Silencio se convierte en un timeout.
:::

:::tip
También puedes bloquear manualmente a un miembro de los reportes en cualquier momento con el [comando `/block`](./utilities.mdx#block).
:::

## Gestionar los reportes {#manage}

Cada reporte llega al canal configurado en forma de una alerta con varias acciones:

- **🙋 Encargarse:** Haz clic en “**Encargarse**” para indicar a los demás moderadores que te ocupas de este reporte. El botón se convierte entonces en “**En curso**”.

- **✅ Resuelto:** Si el reporte es válido pero no es necesaria ninguna sanción (situación resuelta de otra forma: llamada de atención, mensaje eliminado por su autor…), haz clic en “**Resuelto**”. El reporte se marca como aceptado, sin sancionar al usuario reportado. Para sancionar, usa más bien el menú “**Sancionar a este miembro…**” que aparece a continuación.

- **❌ Rechazar:** Si el reporte no es legítimo, haz clic en “**Rechazar**”. Los rechazos se contabilizan para la [reputación de los reportantes](#bad-reporters).

- **⚖️ Sancionar:** El menú “**Sancionar a este miembro…**”, disponible una vez que el reporte está en curso, permite aplicar directamente una sanción al usuario reportado, sin salir del canal de reportes.

Cuando la [agrupación](#group) está activada, los reportes siguientes que apuntan al mismo miembro se añaden a la alerta existente (por ejemplo “**3 mensajes y 1 perfil denunciado por 2 usuarios**”) en lugar de crear una nueva.

:::note
Asegúrate de que tus moderadores estén bien formados en el uso de esta función y anima a tus miembros activos a usarla de manera responsable.
:::

## Preguntas frecuentes {#faq}

### ¿Cómo reportar a un miembro o un mensaje?

Un miembro puede hacer clic derecho en un mensaje o en un perfil, elegir “Aplicaciones” y luego “Reportar Mensaje” o “Reportar Usuario”. También puede usar el botón de un panel de información, o el comando `/reportar (member)` en cualquier canal: la razón se introduce después en una ventana.

### ¿Adónde llegan los reportes?

Se envían al canal de reportes que configures o, en su defecto, a tu canal de logs general. Este canal debe estar reservado a los moderadores y administradores para garantizar un tratamiento correcto de los reportes.

### ¿Qué rol se menciona en cada reporte?

El rol de notificación que configures, o `@everyone`. Sin ajuste, RaidProtect menciona a `@here`.

### ¿Cómo limitar los reportes falsos?

El ajuste “Falsos denunciantes” actúa sobre los miembros cuyos reportes son rechazados con regularidad. Defines un umbral y una ventana de cálculo, y luego una acción: notificar a los moderadores, bloquear los reportes, sancionar, o ambas cosas. También puedes bloquear a un miembro manualmente con el [comando `/block`](./utilities.mdx#block).
