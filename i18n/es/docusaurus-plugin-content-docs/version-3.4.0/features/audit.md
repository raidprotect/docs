---
title: Auditoría de seguridad
description: "El comando /audit de RaidProtect analiza la seguridad de tu servidor de Discord, detecta fallos de configuración y te propone corregirlos con un clic."
---

import AuditMockup from '@site/src/components/DiscordMessage/mockups/audit';

<AuditMockup />

El comando `/audit` analiza la configuración de tu servidor de Discord e identifica los fallos de seguridad: permisos demasiado permisivos, nivel de verificación insuficiente, roles administradores no protegidos, etc. A continuación, te propone corregir la mayoría de los problemas con un solo clic.

Usa el comando: ```/audit```

:::info
El comando está reservado a los miembros que disponen del permiso `Administrador`. El informe solo es visible para ti (respuesta efímera).
:::

## ❓ Funcionamiento de la auditoría {#working}

RaidProtect asigna a tu servidor una **puntuación global sobre 100**, acompañada de un grado (de **S** a **E**) y de una valoración: **Excelente** (90 o más), **Bueno** (70 o más), **A mejorar** (40 o más) o **Crítico** (menos de 40).

El informe se divide en tres categorías, cada una con su propia puntuación:

- **Configuración del servidor**
- **Roles**
- **Canales**

Haz clic en el botón "**Detalles**" de una categoría para ver el resultado de cada verificación, y luego en "**Volver**" para regresar al informe. El botón "**Actualizar**" relanza el análisis después de tus modificaciones.

### Verificaciones realizadas {#checks}

| Categoría | Verificación |
|---|---|
| Configuración del servidor | **Nivel de verificación** |
| Configuración del servidor | **Filtro de contenido explícito** |
| Configuración del servidor | **Autenticación de dos factores (2FA) para la moderación** |
| Configuración del servidor | **Notificaciones por defecto** |
| Configuración del servidor | **Alertas de raid** |
| Configuración del servidor | **Bloqueo de MD** * (servidores de comunidad) |
| Configuración del servidor | **Número de bots instalados** * |
| Roles | **Permisos de @everyone** |
| Roles | **Roles autoasignables** |
| Roles | **Roles de riesgo otorgados por una invitación** |
| Roles | **Roles administradores** |
| Roles | **Bots administradores** * |
| Canales | **Permisos de canal para @everyone** |
| Canales | **Permisos de canal redundantes** |
| Canales | **Webhooks antiguos** * |

Las verificaciones marcadas con `*` son **indicativas**: aparecen en el informe pero no influyen en la puntuación.

Si a RaidProtect le faltan permisos para funcionar correctamente, se muestra una advertencia específica además de la puntuación.

## 🔧 Corregir los fallos con un solo clic {#fix}

Las verificaciones que pueden corregirse automáticamente muestran un botón "**Corregir**":

| Verificación | Corrección aplicada |
|---|---|
| Nivel de verificación | Sube el nivel de verificación del servidor a **Alto** |
| Filtro de contenido explícito | Activa el filtro para **todos los miembros** |
| Notificaciones por defecto | Cambia las notificaciones por defecto a **solo @menciones** |
| Permisos de @everyone | Retira los permisos sensibles del rol @everyone |
| Permisos de canal redundantes | Limpia los permisos de canal innecesarios ("**Corregir todo**") |

Para los **roles administradores** (y los bots administradores), no existe una corrección automática: la auditoría te propone protegerlos con los botones "**Integrar**" o "**Integrar todo**", que los añaden al [Authentication Manager](./authentication-manager.mdx).

:::warning
Para aplicar las correcciones, RaidProtect debe disponer de los permisos `Gestionar el servidor` y `Gestionar los roles`.
:::

## ✅ Descartar una alerta voluntaria {#ignore}

Algunas alertas corresponden a decisiones asumidas: un rol administrador de confianza, un permiso dejado a `@everyone` a sabiendas, etc. El botón "**Marcar como correcto**", disponible en el detalle de una categoría, permite descartarlas.

Una alerta descartada desaparece del informe y deja de contar en tu puntuación. Puedes consultar en cualquier momento la lista de elementos ignorados (botón "**Elementos ignorados**") y restaurar cualquiera de ellos.
