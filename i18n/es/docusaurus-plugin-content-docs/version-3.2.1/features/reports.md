---
title: Reportes
---

El sistema de reportes de RaidProtect permite a tu comunidad reportar rápidamente cualquier contenido problemático o usuarios sospechosos. Funciona de dos maneras diferentes y puede configurarse para optimizar el proceso de gestión de reportes.

## ❓ Cómo funcionan los reportes {#working}
Los miembros pueden reportar contenido a través de 3 métodos principales.

1. **Clic derecho en un mensaje**
Un miembro puede hacer clic derecho en un mensaje que considere que viola las reglas, seleccionar **`Aplicaciones`** y luego hacer clic en **`Reportar mensaje`**. Aparecerá una ventana emergente que permite al usuario agregar una explicación.

2. **Clic derecho en un perfil**
De manera similar, un miembro puede hacer clic derecho en un perfil que considere problemático, elegir **`Aplicaciones`** y luego hacer clic en **`Reportar miembro`**. Se abrirá una ventana emergente para que el usuario proporcione detalles adicionales sobre la situación.

3. **Comando Slash**
Los miembros también pueden reportar un mensaje o usuario mediante el comando **`/report`** en cualquier canal del servidor.

Usa el comando: ```/report (member) (reason)```

Reemplaza `(member)` con el usuario deseado y `(reason)` con la razón de la infracción.

## 🚩 Configuración de los reportes {#config}

Antes de que el sistema de reportes esté completamente operativo, es necesario configurar un **canal de reportes** donde se enviarán todos los reportes. Necesitas configurar un canal de registros o notificaciones para recibir alertas sobre los reportes.

[Captura de pantalla de la configuración de reportes](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-reports.webp)

### Configurar el canal {#config-channel}

1. Usa el [comando `/settings`](../setup.md#settings).
2. Selecciona el botón **Reports**.
3. Haz clic en el botón **Channel**.
4. Elige el canal deseado (_por ejemplo, #reports_).
Si no tienes un canal adecuado, puedes optar por crear uno automáticamente usando el botón **Create one for me**.

### Configurar el rol de notificación {#config-role}

1. Usa el [comando `/settings`](../setup.md#settings).
2. Selecciona el botón **Reports**.
3. Haz clic en el botón **Role**.
4. Elige el rol deseado (_por ejemplo, @Moderador o @Report Ping_).
Si no tienes un rol adecuado, puedes optar por crear uno automáticamente con el botón **Create one for me**.

:::warning
El canal debe estar restringido a moderadores y administradores para garantizar una gestión adecuada de los reportes.
:::

## Gestión de reportes {#manage}

Como moderador de la comunidad, puedes elegir aceptar o rechazar un reporte.

- **✅ Aceptar un reporte:** Si el reporte es válido, haz clic en el botón "Accept" debajo de la alerta. Este botón no desencadena ninguna acción específica, pero indica a otros moderadores que consideras que este reporte ha sido atendido, fomentando la coordinación y organización.

- **👁️ Ver contexto:** Para ver el mensaje reportado y su contexto, haz clic en "View Message" debajo de la alerta.

- **❌ Rechazar un reporte:** Si el reporte no es legítimo, haz clic en el botón "Reject" debajo de la alerta. Al igual que el botón "Accept", no hay ninguna acción específica asociada; simplemente informa a otros moderadores de tu decisión.

:::note
¡Asegúrate de que tus moderadores estén bien capacitados en el uso de esta función y anima a tus miembros activos a usarla de manera responsable!
:::
