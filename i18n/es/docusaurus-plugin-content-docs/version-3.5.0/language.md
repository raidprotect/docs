---
title: Idioma
description: "Cambia el idioma de RaidProtect para adaptarlo a tu comunidad: el bot habla 11 idiomas, del francés al japonés, o sigue el de tu servidor de Discord."
---

import { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect te permite elegir el idioma utilizado por el bot para adaptarse lo mejor posible a tu comunidad de Discord.

**Mensajes públicos:** el idioma configurado se aplica a los mensajes públicos enviados por RaidProtect en tu servidor (logs, captcha, reportes, etc.).

**Mensajes efímeros:** los mensajes privados o temporales se siguen mostrando en el idioma del usuario que interactúa con el bot.

## 🌐 Lista de idiomas soportados {#supported}

- **Francés**
- **Inglés**
- **Español**
- **Alemán**
- **Portugués brasileño**
- **Italiano**
- **Turco**
- **Vietnamita**
- **Japonés**
- **Chino simplificado**
- **Chino tradicional**

Solo se ofrecen los idiomas traducidos íntegramente. Las respuestas efímeras dirigidas a un miembro que usa Discord en otro idioma se muestran en inglés.

## ⚙️ Cambiar el idioma del bot {#change}

1. Ejecuta el [comando `/settings`](./setup.md#settings).
2. En la pestaña “**General**”, haz clic en “**Editar**” junto a “**Idioma**”.
3. Elige el idioma deseado en la lista y confirma.

<SettingsModal name="lang" />

El cambio es inmediato y aparece en los logs del servidor.

### Seguir el idioma del servidor {#follow}

La primera opción, “**Seguir el idioma del servidor**”, recupera el idioma principal definido en los ajustes de Comunidad de Discord. Es el ajuste por defecto. Si ese idioma no forma parte de los idiomas soportados, RaidProtect habla inglés.

:::info
El soporte lingüístico de RaidProtect está en constante evolución. [Sugiere](https://suggestions.raidprotect.bot) los idiomas que te gustaría ver en el bot o [vota](https://suggestions.raidprotect.bot) por los idiomas propuestos para que sean añadidos.
:::
