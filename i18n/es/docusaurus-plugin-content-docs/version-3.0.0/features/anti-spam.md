---
title: Anti-spam
---

Protege tu servidor de Discord de forma fácil y efectiva con la función anti-spam de RaidProtect.

## ❓ Cómo funciona el Anti-Spam {#working}

**El sistema anti-spam de RaidProtect banea automáticamente a los spammers y raiders de tu servidor sin ninguna intervención de tu parte.** Detecta tanto el spam pesado como el ligero y puede actuar rápidamente para detenerlo, dependiendo de la configuración de tu servidor. 🤚

:::warning
**El spam pesado generalmente involucra comportamiento similar a un raid, incluyendo enlaces de invitación, menciones o imágenes.** RaidProtect distingue el spam pesado del ligero y aplica sanciones diferentes en consecuencia.
:::

**Si se detecta spam, RaidProtect expulsa al spammer** y te informa a través del canal de logs. Puedes ver los detalles del spam bloqueado haciendo clic en el enlace proporcionado.

![Captura de pantalla del log de spam](../../../../en/docusaurus-plugin-content-docs/version-3.0.0/assets/log-spam-raidprotect.png)

## 📈 Niveles de seguridad del Anti-Spam {#level}

El sistema anti-spam de RaidProtect ofrece múltiples niveles de seguridad, lo que te permite **ajustar su comportamiento, especialmente en los canales ignorados.** 👮

### Niveles de seguridad disponibles {#level-list}

🔴 **Alto (`high`):** Detecta tanto el spam ligero como el pesado. En los canales ignorados, solo se bloquea el spam pesado.

🔶 **Medio (`medium`):** Detecta tanto el spam ligero como el pesado. En los canales ignorados, se permiten todos los tipos de spam.

💚 **Bajo (`low`):** Solo bloquea el spam pesado. En los canales ignorados, se permiten todos los tipos de spam.

### Cambiar el nivel de seguridad {#level-change}

Para cambiar el nivel de seguridad del anti-spam, usa el siguiente comando: `?settings spamlevel [high/medium/low]`.

## 💤 Ignorar un canal {#ignore-channel}

Por diversas razones, podrías querer que el sistema anti-spam ignore ciertos canales en tu servidor. Afortunadamente, es fácil excluir los canales que desees. 😝

El comportamiento del sistema anti-spam en los canales ignorados depende del nivel de seguridad configurado.

Para ignorar un canal, simplemente ejecuta el comando: `?settings allowspam #canal` (reemplaza `#canal` con el canal que quieres ignorar). Para volver a incluir el canal, usa el comando: `?settings allowspam #canal remove`.

Los canales con `spam` en su nombre se ignoran automáticamente.
