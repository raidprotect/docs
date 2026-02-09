---
title: Anti-spam
---

El Anti-spam de RaidProtect es una herramienta poderosa para prevenir el spam en tu servidor de Discord. Gracias a su sistema de deteccion automatica, se encarga de los problemas por si solo sin requerir tu intervencion.

## ❓ Como funciona el Anti-spam {#working}

El anti-spam de RaidProtect detecta y bloquea automaticamente comportamientos sospechosos. Distingue entre dos tipos de spam.
- **Spam pesado:** Mensajes que contienen enlaces de invitacion, menciones masivas o imagenes. Este tipo de spam se usa frecuentemente durante raids.
- **Spam ligero:** Mensajes enviados con frecuencia pero menos intrusivos.

El anti-spam de RaidProtect actua de dos maneras.
- **Sanciones:** Expulsion o baneo automatico de spammers.
- **Notificaciones:** Envia mensajes al canal de registros para reportar el spam bloqueado con un resumen de las acciones detectadas.

## 🛡️ Configurar el Anti-spam {#config}

RaidProtect ofrece tres niveles de seguridad para adaptarse a las necesidades de tu servidor.
- 🔴 **Alto:** Sanciona todo el spam, incluyendo spam pesado en canales ignorados.
- 🟠 **Medio:** Sanciona todo el spam pero respeta los canales ignorados.
- 🟢 **Bajo:** Sanciona solo el spam pesado.

### Cambiar el nivel de seguridad {#level}

1. Usa el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton "**Anti-spam**".
3. Selecciona el nivel de anti-spam deseado en el primer menu desplegable.

### Gestionar roles, usuarios y canales ignorados {#ignore}

Puedes excluir ciertos canales, roles o incluso usuarios del monitoreo del anti-spam para mayor flexibilidad. 😉
1. Usa el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton "**Anti-spam**".
3. Selecciona las diferentes opciones a ignorar en los menus desplegables:
- Canal(es) a ignorar
- Rol(es) a ignorar
- Miembro(s) a ignorar

![Captura de pantalla de configuracion del anti-spam](../../../../en/docusaurus-plugin-content-docs/version-3.1.0/assets/rpBeta-settings-anti-spam.webp)

:::info
Los canales que contienen "**spam**" en su nombre se ignoran automaticamente. Los usuarios con permisos de administrador se ignoran completamente.
:::
