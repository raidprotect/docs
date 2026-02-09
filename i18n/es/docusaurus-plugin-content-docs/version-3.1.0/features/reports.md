---
title: Reportes
---

El sistema de reportes de RaidProtect permite a tu comunidad reportar rapidamente cualquier contenido problematico o usuarios sospechosos. Funciona de dos maneras diferentes y puede configurarse para optimizar el proceso de gestion de reportes.

## ❓ Como funcionan los reportes {#working}
Los miembros pueden reportar contenido a traves de 3 metodos principales.

1. **Clic derecho en un mensaje**
Un miembro puede hacer clic derecho en un mensaje que crea que viola las reglas, seleccionar **`Aplicaciones`** y luego hacer clic en **`Reportar mensaje`**. Aparecera una ventana emergente que permite al usuario agregar una explicacion.

2. **Clic derecho en un perfil**
De manera similar, un miembro puede hacer clic derecho en un perfil que considere problematico, elegir **`Aplicaciones`** y luego hacer clic en **`Reportar miembro`**. Se abrira una ventana emergente para permitir al usuario proporcionar detalles adicionales sobre la situacion.

3. **Comando Slash**
Los miembros tambien pueden reportar un mensaje o usuario mediante el comando **`/report`** en cualquier canal del servidor.

Usa el comando: ```/report [@usuario] [motivo]```

Reemplaza `[@usuario]` con el usuario deseado y `[motivo]` con el motivo de la infraccion.

## 🚩 Configurar los reportes {#config}

Antes de que el sistema de reportes sea completamente operativo, es imprescindible configurar un **canal de reportes** donde se enviaran todos los reportes. Necesitas configurar un canal de registros o notificaciones para recibir alertas sobre los reportes.

### Configurar el canal {#config-channel}

1. Usa el [comando `/settings`](../setup.md#settings).
2. Selecciona el boton **Reportes**.
3. Haz clic en el boton **Canal**.
4. Elige el canal deseado (_ej. #reportes_).
Si no tienes un canal adecuado, puedes optar por crear uno automaticamente usando el boton **Crear uno por mi**.

[Captura de pantalla de configuracion de reportes](../../../../en/docusaurus-plugin-content-docs/version-3.1.0/assets/rpBeta-settings-reports.webp)

### Configurar el rol de notificacion {#config-role}

1. Usa el [comando `/settings`](../setup.md#settings).
2. Selecciona el boton **Reportes**.
3. Haz clic en el boton **Rol**.
4. Elige el rol deseado (_ej. @Moderador o @Ping de reportes_).
Si no tienes un rol adecuado, puedes optar por crear uno automaticamente con el boton **Crear uno por mi**.

:::warning
El canal debe estar restringido a moderadores y administradores para asegurar la gestion adecuada de los reportes.
:::

## Gestionar los reportes {#manage}

Como moderador de la comunidad, puedes elegir aceptar o rechazar un reporte.

- **✅ Aceptar un reporte:** Si el reporte es valido, haz clic en el boton "Aceptar" debajo de la alerta. Este boton no desencadena ninguna accion especifica, pero indica a otros moderadores que consideras que este reporte ha sido atendido, fomentando la coordinacion y organizacion.

- **👁️ Ver contexto:** Para ver el mensaje reportado y su contexto, haz clic en "Ver mensaje" debajo de la alerta.

- **❌ Rechazar un reporte:** Si el reporte no es legitimo, haz clic en el boton "Rechazar" debajo de la alerta. Similar al boton "Aceptar", no se asocia ninguna accion especifica con este boton; simplemente informa a otros moderadores de tu decision.

:::note
¡Asegurate de que tus moderadores esten bien capacitados en el uso de esta funcion y anima a tus miembros activos a usarla de manera responsable!
:::
