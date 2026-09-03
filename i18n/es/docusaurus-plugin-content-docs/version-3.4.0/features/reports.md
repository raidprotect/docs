---
title: Reportes
description: "El sistema de reportes de RaidProtect permite a tu comunidad señalar contenidos y miembros sospechosos, con una gestión clara para tus moderadores."
---

import { ReportsSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

import ReportsMockup from '@site/src/components/DiscordMessage/mockups/reports';

<ReportsMockup />

El sistema de reportes de RaidProtect permite a tu comunidad remontar en unos clics cualquier mensaje o miembro sospechoso a tus moderadores, mediante un clic derecho, un botón dedicado o el comando `/report`. Se configura para optimizar el tratamiento de los reportes por parte de tu equipo.

## ❓ ¿Cómo funcionan los reportes? {#working}
Los miembros pueden reportar contenido a traves de 4 metodos principales.

1. **Clic derecho en un mensaje**
Un miembro puede hacer clic derecho en un mensaje que considere que infringe el reglamento, seleccionar **`Aplicaciones`** y luego hacer clic en **`Reportar este mensaje`**. Aparecera una ventana emergente que permite al usuario anadir una explicacion.

2. **Clic derecho en un perfil**
De la misma manera, un miembro puede hacer clic derecho en un perfil que considere problematico, elegir **`Aplicaciones`** y luego hacer clic en **`Reportar al usuario`**. Se abrira entonces una ventana emergente para que el usuario precise lo que reporta (foto de perfil, nombre de usuario, biografia, actividad en voz, actividad en mensajes privados) y aporte detalles adicionales.

3. **Boton en un panel de informacion**
Si la funcion "Reporte" esta activada en un [panel de informacion (`/display public`)](./display.mdx), un boton "Reportar" esta disponible directamente bajo el panel, lo que permite a los miembros reportar rapidamente a un usuario.

4. **Comando Slash**
Los miembros tambien pueden reportar un mensaje o un usuario mediante el comando **`/report`** en cualquier canal del servidor.

Usa el comando: ```/report (miembro) (razon)```

Reemplaza `(miembro)` con el usuario deseado y `(razon)` con el motivo de la infraccion.

## 🚩 Configuracion de los reportes {#config}

Antes de que el sistema de reportes sea plenamente funcional, es imprescindible configurar un **canal de reportes** al que se enviaran todos los reportes. Debes definir un canal de registros o de notificaciones para recibir las alertas relativas a los reportes.

<ReportsSettingsMockup />

### Configurar el canal {#config-channel}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Selecciona el boton "**Reportes**".
3. Haz clic en el boton "**Canal**".
4. Selecciona el canal deseado (_por ejemplo: #reportes o #reports_).
Si no dispones de un canal adecuado, puedes optar por crear uno automaticamente desde el boton "**Crear uno para mi**".

### Configurar el rol de notificacion {#config-role}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Selecciona el boton "**Reportes**".
3. Haz clic en el boton "**Rol**".
4. Selecciona el rol deseado (_por ejemplo: @Moderador o @Notifs reportes_).
Si no dispones de un rol adecuado, puedes optar por crear uno automaticamente desde el boton "**Crear uno para mi**".

:::warning
El canal debe estar reservado a los moderadores y administradores para garantizar una gestion correcta de los reportes.
:::

### Agrupacion de los reportes {#group}

El boton "**Agrupacion**" determina como se presentan varios reportes que apuntan al mismo miembro:

- **Activado**: los reportes que apuntan al mismo miembro se agrupan en una sola alerta.
- **Desactivado**: cada reporte crea su propia alerta separada.

### Notificacion del reportante {#notify}

Desde el boton "**Notificacion del reportante**", eliges lo que el miembro que origino el reporte recibe como respuesta:

| Nivel | Efecto |
|---|---|
| **Desactivado** | Los reportantes no reciben ninguna notificacion. |
| **Solo el tratamiento** | Se indica al reportante que su reporte ha sido tratado. |
| **Con el resultado** | Se indica si el reporte fue aceptado o rechazado. |
| **Con el moderador** | Se indica tambien que moderador trato el reporte. |

### Rol de confianza (Premium) {#trusted-role}

El "**Rol de confianza**" permite a tus miembros mas fiables actuar de inmediato en caso de urgencia: cuando un miembro que dispone de este rol realiza un reporte, puede marcar la opcion "**Accion preventiva**" para aplicar un **timeout preventivo de 24 horas** al usuario reportado, a la espera de que un moderador trate el reporte.

- El timeout preventivo es **silencioso**: el usuario reportado no recibe ningun MD mientras un moderador no haya confirmado la sancion.
- Si el reporte se refiere a un mensaje, este se elimina.
- La sancion esta vinculada al reporte: el moderador que lo trata puede confirmarla o anularla.

:::info
Esta funcion esta reservada a los servidores [**Premium**](/es/premium).
:::

### Reputacion de los reportantes {#bad-reporters}

El boton "**Reportantes falsos**" permite actuar sobre los miembros cuyos reportes son rechazados con regularidad:

- **Umbral**: numero de reportes rechazados antes de actuar (3, 5, 6, 10 o 15; 0 para desactivar).
- **Ventana**: periodo de calculo (7, 14, 30, 60 o 90 dias).
- **Accion** una vez alcanzado el umbral:
  - **Notificar a los moderadores**: se envia una alerta con botones "**Bloquear los reportes**" y de sancion.
  - **Bloquear automaticamente**: el miembro ya no puede enviar reportes.
  - **Sancionar automaticamente**: se aplica la sancion configurada.
  - **Bloquear y sancionar**: combina las dos acciones anteriores.
- **Sancion**: la sancion aplicada en modo automatico (Advertencia, Timeout, Silencio, Expulsion o Baneo).

:::tip
Tambien puedes bloquear manualmente a un miembro de los reportes en cualquier momento con el [comando `/block`](./utilities.mdx#block).
:::

## Gestionar los reportes {#manage}

Cada reporte llega al canal configurado en forma de una alerta con varias acciones:

- **🙋 Encargarse:** Haz clic en "**Encargarse**" para indicar a los demas moderadores que te ocupas de este reporte. El boton se convierte entonces en "**En curso**".

- **✅ Resuelto:** Si el reporte es valido pero no es necesaria ninguna sancion (situacion resuelta de otra forma: llamada de atencion, mensaje eliminado por su autor...), haz clic en "**Resuelto**". El reporte se marca como aceptado, sin sancionar al usuario reportado. Para sancionar, usa mas bien el menu "**Sancionar a este miembro…**" que aparece a continuacion.

- **❌ Rechazar:** Si el reporte no es legitimo, haz clic en "**Rechazar**". Los rechazos se contabilizan para la [reputacion de los reportantes](#bad-reporters).

- **⚖️ Sancionar:** El menu "**Sancionar a este miembro…**" bajo la alerta permite aplicar directamente una sancion al usuario reportado, sin salir del canal de reportes.

:::note
Asegurate de que tus moderadores esten bien formados en el uso de esta funcion y anima a tus miembros activos a usarla de manera responsable.
:::

## Preguntas frecuentes {#faq}

### ¿Cómo reportar a un miembro o un mensaje?

Un miembro puede hacer clic derecho en un mensaje o en un perfil, elegir «Aplicaciones» y luego «Reportar este mensaje» o «Reportar al usuario». También puede usar el botón de un panel de información, o el comando `/report (miembro) (razón)` en cualquier canal.

### ¿Dónde llegan los reportes?

Se envían al canal de reportes que configures. Este canal debe estar reservado a los moderadores y administradores para garantizar un tratamiento correcto de los reportes.

### ¿Cómo limitar los reportes falsos?

El botón «Reportantes falsos» actúa sobre los miembros cuyos reportes son rechazados con regularidad. Defines un umbral y una ventana de cálculo, y luego una acción automática: notificar a los moderadores, bloquear los reportes, sancionar, o ambas cosas. También puedes bloquear a un miembro manualmente con el [comando `/block`](./utilities.mdx#block).
