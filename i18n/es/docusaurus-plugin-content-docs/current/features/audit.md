---
title: Auditoría de seguridad
description: "El comando /audit de RaidProtect analiza la seguridad de tu servidor de Discord, detecta fallos de configuración y te propone corregirlos con un clic."
---

import AuditMockup from '@site/src/components/DiscordMessage/mockups/audit';

<AuditMockup />

El comando `/audit` analiza la configuración de tu servidor de Discord e identifica los fallos de seguridad: permisos demasiado permisivos, nivel de verificación insuficiente, [roles administradores no protegidos](/es/learn/least-privilege), etc. A continuación, te propone corregir la mayoría de los problemas con un solo clic.

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

Haz clic en el botón “**Detalles**” de una categoría para ver el resultado de cada verificación, y luego en “**Volver**” para regresar al informe. El botón “**Actualizar**” relanza el análisis después de tus modificaciones.

### Verificaciones realizadas {#checks}

| Categoría | Verificación |
|---|---|
| Configuración del servidor | **Nivel de verificación** |
| Configuración del servidor | **Filtro de contenido explícito** |
| Configuración del servidor | **Doble autenticación (2FA) para la moderación** |
| Configuración del servidor | **Notificaciones por defecto** |
| Configuración del servidor | **Alertas de raid** |
| Configuración del servidor | **DM Lock (servidor público)** * |
| Configuración del servidor | **Número de bots** * |
| Roles | **Permisos de @everyone** |
| Roles | **Roles autoasignables** |
| Roles | **Roles otorgados por invitaciones** |
| Roles | **Roles de administrador** |
| Roles | **Bots administradores** * |
| Canales | **Permisos de canal para @everyone** |
| Canales | **Permisos de canal redundantes** |
| Canales | **Permisos de expresión de los roles de equipo** * |
| Canales | **Webhooks antiguos** * |

Las verificaciones marcadas con `*` son **indicativas**: aparecen en el informe pero no influyen en la puntuación. **DM Lock (servidor público)** solo aparece en los servidores de comunidad o públicos.

Algunas precisiones sobre estas verificaciones:

- **Roles autoasignables**: se trata de los roles que un miembro obtiene sin moderador, con su origen: bienvenida de Discord, [rol automático](./onboarding.md#autorole) de RaidProtect, boost, suscripción, integración o rol vinculado.
- **Permisos de expresión de los roles de equipo**: un rol que tiene un permiso de moderación y que, en ciertos canales, tiene acuerdos de expresión (escribir, hablar…) ya cubiertos en otro lugar. Los conservamos, porque dejan la palabra al equipo durante un [`/lock`](./channel-lock.md) o en el nivel 1 del [DISCON](./discon.md). Simplemente comprueba que cada rol listado sea realmente un rol de equipo: si no, escapa a los bloqueos.

Si a RaidProtect le faltan permisos para funcionar correctamente, se muestra una advertencia específica además de la puntuación. Una verificación que requiere un permiso ausente (por ejemplo Gestionar webhooks) se señala como no evaluada.

:::info
Si RaidProtect no ve algunos canales de tu servidor, el informe muestra un recuadro “**Análisis incompleto**”: esos canales no se analizan y la puntuación solo se refiere al resto.
:::

## 🔧 Corregir los fallos con un solo clic {#fix}

Las verificaciones que pueden corregirse automáticamente muestran un botón “**Corregir**”:

| Verificación | Corrección aplicada |
|---|---|
| Nivel de verificación | Sube el nivel de verificación del servidor a **Medio** (“Medio” o más se valida, “Bajo” da una advertencia, “Ninguno” un fallo) |
| Filtro de contenido explícito | Activa el filtro para **todos los miembros** |
| Notificaciones por defecto | Cambia las notificaciones por defecto a **solo @menciones** |
| Permisos de @everyone | Retira los permisos sensibles del rol @everyone |
| Permisos de canal redundantes | Abre la lista de canales a limpiar y luego “**Corregir todo**” |

Para los **roles administradores**, no existe una corrección automática: la auditoría te propone protegerlos con los botones “**Integrar**” o “**Integrar todo**”, que los añaden al [Authentification Manager](./authentication-manager.mdx).

:::warning
Para aplicar las correcciones, RaidProtect debe disponer de los permisos `Gestionar servidor` y `Gestionar roles`.
:::

### Permisos de canal redundantes {#redundant}

Un permiso de canal es **redundante** cuando no cambia nada: ya está concedido a nivel de servidor, ya está concedido por el permiso @everyone del canal, o es una denegación sin efecto. Hay que modificarlo entonces en varios lugares para que actúe realmente, lo que crea puntos ciegos.

La lista detalla, canal por canal, cada permiso y la razón por la que es redundante:

- El botón “**Ignorar**” de un canal lo retira de la lista, de la puntuación y de “**Corregir todo**”. Puedes restablecerlo desde los “**Elementos ignorados**”.
- Corregir una categoría corrige también los canales sincronizados con ella.
- Los permisos de un rol **Administrador** se listan aparte, en “**Sin efecto en un rol Administrador**”: Discord los ignora, y nunca los retiramos, porque se aplicarán si ese rol pierde Administrador.

El análisis tiene en cuenta los bloqueos en curso, por [`/lock`](./channel-lock.md) o por el [DISCON](./discon.md).

## ✅ Descartar una alerta voluntaria {#ignore}

Algunas alertas corresponden a decisiones asumidas: un rol administrador de confianza, un permiso dejado a `@everyone` a sabiendas, etc. El botón “**Marcar como correcto**”, disponible en el detalle de una categoría, permite elegir un elemento y luego “**Ignorar**”.

Una alerta descartada desaparece del informe y deja de contar en tu puntuación. Puedes consultar en cualquier momento la lista de elementos ignorados (botón “**Elementos ignorados**”) y restablecer cualquiera de ellos con “**Restaurar**” o “**Restaurar todo**”.

## Preguntas frecuentes {#faq}

### ¿Por qué basta el nivel de verificación “Medio”?

El nivel “Medio” ya descarta las cuentas creadas hace menos de 5 minutos, lo que bloquea la mayoría de las cuentas desechables. Es por tanto el nivel que aplica el botón “**Corregir**”.

### ¿Por qué la auditoría no retira los permisos de canal de mis roles administradores?

Discord ignora los permisos de canal de un rol que tiene Administrador. Los listamos aparte sin retirarlos: volverán a surtir efecto si ese rol pierde Administrador.

### ¿Puedo excluir un canal del análisis de permisos redundantes?

Sí: haz clic en “**Ignorar**” junto al canal en la lista de permisos redundantes. Deja de contar en la puntuación y puedes restablecerlo desde los elementos ignorados.
