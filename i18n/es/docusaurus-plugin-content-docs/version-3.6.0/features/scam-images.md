---
title: Imágenes de estafa
description: "ScamLens, el antiestafa de RaidProtect, detecta y elimina automáticamente las imágenes de estafa en tu servidor de Discord. Activo por defecto, sin configuración."
---

import AntiScamMockup from '@site/src/components/DiscordMessage/mockups/anti-scam';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect protege automáticamente tu servidor contra las **imágenes de estafa** (estafas cripto, falsos giveaways, falsas promociones de casinos). Esta protección se llama **ScamLens**: analiza las imágenes publicadas, elimina las que son estafas conocidas y sanciona la cuenta que originó el mensaje (a menudo una [cuenta comprometida](/es/learn/token-grabber)).

<AntiScamMockup />

:::tip Sin configuración necesaria
ScamLens está **activado por defecto en cuanto RaidProtect llega a tu servidor**. Estás protegido de inmediato, sin configurar nada.
:::

## ❓ ¿Cómo funciona? {#working}

ScamLens compara cada imagen publicada con las estafas conocidas. No se lee nada del texto de los mensajes.

Según la coincidencia encontrada:

- **Coincidencia segura**: el mensaje se **elimina** de inmediato y su autor es **sancionado**. El log de la sanción indica el canal afectado.
- **Coincidencia incierta**: el mensaje se elimina **por precaución**, sin sanción. Si la imagen se confirma después como una estafa, la sanción puede llegar más tarde.

El motivo de la sanción es “Estafa (Imágenes Crypto) detectada”. En un servidor [Premium](/es/premium), el miembro sancionado también recibe un mensaje privado.

ScamLens solo se ocupa de las **imágenes**. Los demás tipos de spam los gestionan el [Anti-spam](./anti-spam.mdx) y el [HoneyPot](./honeypot.md).

## 🔧 Configurar ScamLens {#config}

ScamLens se ajusta en el módulo **Automod** de la pestaña “**Protección**”, en la pantalla “**Filtro de imágenes**”.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Protección**”.
3. Haz clic en “**Configurar**” junto a “**Automod**”.
4. Haz clic en “**Configurar**” junto a “**Imágenes**”.

<Settings start="imageFilter" />

### Activar o desactivar ScamLens {#toggle}

En la pantalla “**Filtro de imágenes**”, haz clic en “**Desactivar**” (o “**Activar**”) arriba a la derecha. Cada cambio queda registrado en tus logs.

### Elegir la sanción y su duración {#sanction}

En el selector “**Sanción aplicada**”, elige:
- “**Por defecto**”: la sanción de tu [HoneyPot](./honeypot.md#sanction) si está activo; si no, una exclusión temporal (Timeout);
- o una sanción concreta: Baneo, Softban, Jail, Expulsión, Silencio, Timeout o Advertencia.

En el selector “**Duración de la sanción**”, elige 5 minutos, 1 hora, 1 día o “**Valor personalizado**” (por ejemplo `30m`, `2h`, `7d`). La opción “**Por defecto**” sigue la duración de tu HoneyPot si está activo; si no, **1 día**. Una duración elegida aquí es propia de ScamLens, independiente del Anti-spam y del HoneyPot. También se aplica a las sanciones llegadas más tarde.

:::info
- Un **Jail** o un **Silencio** sin rol configurado se convierte en un **Timeout**.
- El mensaje público que anuncia la sanción sigue el ajuste “**Mensaje público de sanción**” del [Anti-spam](./anti-spam.mdx#public-message), desactivable en Premium.
:::

## 🗂️ Catálogo de imágenes <span className="badge-premium">Premium</span> {#catalog}

Además del catálogo global “Crypto Scam”, gestionado por nosotros y aplicado en todos los servidores, los servidores [Premium](/es/premium) pueden bloquear **sus propias imágenes**, sea cual sea su contenido: capturas de falso Nitro, imágenes de una estafa que apunta a tu comunidad, imágenes prohibidas en tu servidor…

**Límites:** 2 listas por servidor, 10 imágenes por envío.

### Crear una lista {#lists}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Protección**”.
3. Haz clic en “**Configurar**” junto a “**Automod**”.
4. Haz clic en “**Configurar**” junto a “**Imágenes**”.
5. En “**Catálogo de imágenes**”, haz clic en “**Crear una lista**” y dale un nombre.
6. Elige el “**Canal de verificación**” de la lista.
7. Haz clic en “**Añadir imágenes**” y envía hasta 10 imágenes. El resultado indica las imágenes añadidas, las variantes vinculadas, los duplicados ignorados y las imágenes rechazadas.

Las imágenes de una lista se eliminan en cuanto reaparecen en tu servidor, y su autor recibe la sanción elegida más arriba. El motivo de la sanción nombra la lista (“Imagen de la lista ‘_nombre_’”). Sin sanción, la eliminación se anota en tus logs de moderación, con el canal y la lista.

:::warning Una lista = un solo registro de imágenes
Guarda en una lista un solo tipo de contenido. Mezclar imágenes sin relación en una misma lista corrompe la detección: crea mejor una segunda lista.
:::

### Canal de verificación {#review}

Cuando una imagen se parece a una imagen de tu lista sin coincidencia segura, la señalamos en el **canal de verificación** de la lista (“Verificación requerida: lista …”), con dos botones:
- “**Confirmar, está prohibido**”: la imagen se une al catálogo, el mensaje se elimina y su autor es sancionado;
- “**Descartar, es correcto**”: esa imagen ya no activará ninguna verificación.

Se necesita el permiso `Gestionar servidor` para decidir. Sin canal de verificación, las coincidencias inciertas permanecen en silencio.

## 📊 Transparencia {#reports}

Cada estafa bloqueada por ScamLens:

- aparece en las [recapitulaciones de Transparencia](./transparency.md#recaps) de tu servidor (“X estafas bloqueadas por ScamLens”);
- se cuenta en el contador de cuentas señaladas del [HoneyPot](./honeypot.md);
- refuerza la protección de **todos los servidores** que usan RaidProtect.

### Nuestros informes mensuales {#recaps}

Cada mes publicamos la **[Meteorología de amenazas](/blog/tags/threats)**, un balance público de la actividad de ScamLens. Cifras acumuladas desde el [lanzamiento el 14 de febrero de 2026](/blog/scamlens-early-activation), en todos los servidores protegidos por RaidProtect:

| Informe | Imágenes de estafa eliminadas | Cuentas comprometidas identificadas |
|---|---|---|
| [Balance a 1 mes](/blog/scamlens-1-month-recap) *(mar. 2026)* | 260.000 | 15.000 |
| [Abril 2026](/blog/threat-weather-april-2026) | 1.400.000 | 40.000 |
| [Mayo 2026](/blog/threat-weather-may-2026) | 2.300.000 | 80.000 |
| [Junio 2026](/blog/threat-weather-june-2026) | 4.000.000 | 160.000 |

## Preguntas frecuentes {#faq}

### ¿Hay que configurar ScamLens?

No. ScamLens está activado por defecto en cuanto RaidProtect llega a tu servidor. Estás protegido de inmediato, sin configurar nada.

### ¿ScamLens bloquea algo más que las imágenes?

No, ScamLens solo se ocupa de las imágenes. Por defecto, bloquea las imágenes de estafa conocidas. Los servidores Premium también pueden añadir sus propias imágenes gracias al catálogo de imágenes. Los demás tipos de spam los gestionan el [Anti-spam](./anti-spam.mdx) y el [HoneyPot](./honeypot.md).

### ¿Qué sanción se aplica a una imagen de estafa?

Por defecto, ScamLens aplica la sanción y la duración de tu [HoneyPot](./honeypot.md#sanction), o un Timeout de un día si el HoneyPot no está activado. Puedes elegir otra sanción y otra duración en /settings, pestaña Protección, módulo Automod, pantalla Filtro de imágenes.

### ¿Cómo desactivar ScamLens?

En /settings, pestaña Protección, haz clic en “Configurar” junto a Automod, luego junto a Imágenes, y usa el interruptor de arriba a la derecha de la pantalla Filtro de imágenes.
