---
title: Reportes
---

El sistema de reportes de RaidProtect permite a tu comunidad reportar rapidamente cualquier contenido problematico o usuarios sospechosos. Funciona de dos maneras diferentes y se puede configurar para optimizar el proceso de gestion de reportes.

## ❓ Como Funcionan los Reportes {#working}
Los miembros pueden reportar contenido a traves de 3 metodos principales.

1. **Clic derecho en un mensaje**
Un miembro puede hacer clic derecho en un mensaje que cree que viola las reglas, seleccionar **`Aplicaciones`** y luego hacer clic en **`Report Message`**. Aparecera una ventana emergente que permite al usuario agregar una explicacion.

2. **Clic derecho en un perfil**
De manera similar, un miembro puede hacer clic derecho en un perfil que considere problematico, elegir **`Aplicaciones`** y luego hacer clic en **`Report Member`**. Se abrira una ventana emergente para que el usuario proporcione detalles adicionales sobre la situacion.

3. **Comando Slash**
Los miembros tambien pueden reportar un mensaje o usuario a traves del comando **`/report`** en cualquier canal del servidor.

Usa el comando: ```/report [@user] [reason]```

Reemplaza `[@user]` con el usuario deseado y `[reason]` con el motivo de la infraccion.

## 🚩 Configurar los Reportes {#config}

Antes de que el sistema de reportes este completamente operativo, es imprescindible configurar un **canal de reportes** donde se enviaran todos los reportes. Necesitas configurar un canal de registros o notificaciones para recibir alertas sobre los reportes.

[Captura de pantalla de la configuracion de reportes](../../../../en/docusaurus-plugin-content-docs/version-3.1.1/assets/rp-settings-reports.webp)

### Configurar el Canal {#config-channel}

1. Usa el [comando `/settings`](../setup.md#settings).
2. Selecciona el boton **Reportes**.
3. Haz clic en el boton **Canal**.
4. Elige el canal deseado (_ej. #reportes_).
Si no tienes un canal adecuado, puedes optar por crear uno automaticamente usando el boton **Crear uno para mi**.

### Configurar el Rol de Notificacion {#config-role}

1. Usa el [comando `/settings`](../setup.md#settings).
2. Selecciona el boton **Reportes**.
3. Haz clic en el boton **Rol**.
4. Elige el rol deseado (_ej. @Moderador o @Ping de Reportes_).
Si no tienes un rol adecuado, puedes optar por crear uno automaticamente con el boton **Crear uno para mi**.

:::warning
El canal debe estar restringido a moderadores y administradores para asegurar una gestion adecuada de los reportes.
:::

## Gestionar Reportes {#manage}

Como moderador de la comunidad, puedes elegir aceptar o rechazar un reporte.

- **✅ Aceptar un reporte:** Si el reporte es valido, haz clic en el boton "Aceptar" debajo de la alerta. Este boton no activa ninguna accion especifica pero indica a otros moderadores que consideras que este reporte esta gestionado, fomentando la coordinacion y organizacion.

- **👁️ Ver Contexto:** Para ver el mensaje reportado y su contexto, haz clic en "Ver Mensaje" debajo de la alerta.

- **❌ Rechazar un reporte:** Si el reporte no es legitimo, haz clic en el boton "Rechazar" debajo de la alerta. Similar al boton "Aceptar", no hay ninguna accion especifica asociada a este boton; simplemente informa a otros moderadores de tu decision.

:::note
Asegurate de que tus moderadores esten bien capacitados en el uso de esta funcion y anima a tus miembros activos a usarla de manera responsable.
:::
