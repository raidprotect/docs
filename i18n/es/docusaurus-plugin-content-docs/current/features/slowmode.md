---
title: Slowmode preventivo
description: "El slowmode preventivo de RaidProtect ajusta automáticamente el modo lento de los canales de tu servidor de Discord para mantener un ritmo de mensajes legible."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

El **slowmode preventivo** de RaidProtect, reservado a los servidores [Premium](/es/premium), ajusta automáticamente el [modo lento](./moderation.mdx#slowmode) de tus canales para mantener un **ritmo de mensajes** por minuto. Cuando un canal se dispara (anuncio, directo, afluencia de nuevos miembros, inicio de un [raid](/es/learn/discord-raid)), subimos el modo lento; cuando se calma, lo bajamos. Tus moderadores ya no tienen que vigilar el chat para ajustarlo a mano.

## ❓ ¿Cómo funciona? {#working}

- **Un ritmo de mensajes**: para cada canal regulado, eliges cuántos mensajes por minuto puede recibir (30 por defecto). Por encima, el modo lento sube solo.
- **Unos límites**: el modo lento se mantiene siempre entre el **slowmode mínimo** y el **slowmode máximo** que has fijado para el canal.
- **Un ajuste continuo**: ajustamos el modo lento según el ritmo real, y sube de inmediato cuando un canal se dispara.
- **Un descenso progresivo**: cuando el canal se calma, el modo lento vuelve poco a poco hacia el mínimo.
- **Registro de auditoría**: cada cambio lleva el motivo “Slowmode automático”.

## 🛠️ Configuración del slowmode preventivo {#config}

### Añadir un canal regulado {#add}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Protección**”.
3. Haz clic en “**Configurar**” junto a “**Slowmode preventivo**”.
4. Haz clic en “**Añadir**” junto a un espacio libre.
5. Elige el canal (canal de texto, de anuncios, de voz o de conferencia: el modo lento de un canal de voz regula su canal de texto integrado).

<Settings start="slowmode" />

**Límites:** 6 canales regulados por servidor.

:::warning Permisos requeridos
RaidProtect debe tener el permiso `Gestionar canales` en cada canal regulado.
:::

### Ajustar un canal {#channel}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Protección**”.
3. Haz clic en “**Configurar**” junto a “**Slowmode preventivo**”.
4. Haz clic en “**Editar**” junto al canal.
5. Elige el “**Ritmo de mensajes**”, el “**Slowmode mínimo**” y el “**Slowmode máximo**”.

<Settings start="slowmodeChannel" />

| Ajuste | Valores propuestos | Por defecto |
|---|---|---|
| **Ritmo de mensajes** | de 5 a 120 mensajes por minuto | 30 mensajes / min |
| **Slowmode mínimo** | de 0 a 10 segundos | 0 segundos (sin mínimo) |
| **Slowmode máximo** | de 5 segundos a 10 minutos | 2 minutos |

Para un valor que no esté en la lista, haz clic en “**Personalizar**” e introduce tus propios valores (por ejemplo `40` mensajes por minuto, un mínimo de `0s`, un máximo de `2m 30s`). El modo lento no puede superar las 6 horas, el límite de Discord.

<SettingsModal name="slowmodeCustom" />

Desde la pantalla de un canal, también puedes:
- detener o reanudar la regulación con el interruptor de arriba a la derecha. Detener la regulación devuelve el modo lento del canal a 0;
- hacer clic en “**Aplicar a todos los canales regulados**” para copiar estos ajustes a todos tus canales regulados;
- hacer clic en “**Eliminar**” para liberar el espacio.

## 🕒 Slowmode preventivo y comando /slowmode {#manual}

Si un moderador usa el [comando `/slowmode`](./moderation.mdx#slowmode) en un canal regulado, se aplica su valor manual y la **regulación automática se desactiva** para ese canal. Un mensaje lo indica. Para reanudar la regulación, vuelve a activarla desde la pantalla del canal en `/settings`.

## Preguntas frecuentes {#faq}

### ¿Qué diferencia hay entre el slowmode preventivo y el anti-spam?

El [anti-spam](./anti-spam.mdx) sanciona a los miembros que hacen spam. El slowmode preventivo no sanciona a nadie: ralentiza todo un canal cuando el ritmo global se vuelve demasiado alto, para mantener una conversación legible.

### ¿Cuántos canales se pueden regular?

Hasta 6 canales por servidor, cada uno con su ritmo de mensajes y sus límites.

### ¿El slowmode preventivo es gratuito?

No, está reservado a los servidores Premium.

### ¿Qué pasa si ajusto el modo lento a mano?

El comando /slowmode aplica tu valor y desactiva la regulación automática de ese canal. Puedes reactivarla en /settings, pestaña Protección, Slowmode preventivo.
