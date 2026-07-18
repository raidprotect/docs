---
title: Imágenes de estafa
---

import { AntiSpamSanctionsSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

RaidProtect protege automáticamente tu servidor contra las **imágenes de estafa** (estafas cripto, falsos giveaways, falsas promociones de casinos). Esta protección se llama **ScamLens**: analiza las imágenes publicadas, elimina las que son estafas conocidas y sanciona la cuenta que originó el mensaje (a menudo una cuenta comprometida).

:::tip Sin configuración necesaria
ScamLens está **activado por defecto en cuanto RaidProtect llega a tu servidor**. Estás protegido de inmediato, sin configurar nada.
:::

## ❓ Cómo funciona {#working}

En cuanto se publica una imagen, ScamLens la analiza. Si es una estafa conocida:

1. El incidente se **registra en los logs de moderación** (con la imagen implicada) antes de cualquier eliminación.
2. El mensaje se **elimina**.
3. La cuenta que lo originó es **sancionada**.

ScamLens solo se ocupa de las **imágenes**. Los demás tipos de spam los gestionan el [Anti-spam](./anti-spam.mdx) y el [HoneyPot](./honeypot.md).

## 🔧 Desactivar o reactivar {#config}

La sanción aplicada a las imágenes de estafa **sigue por defecto la de tu [HoneyPot](./honeypot.md#sanction)** (o un Timeout si el HoneyPot no está activado). Puedes modificarla, desactivarla o reactivarla desde el mismo menú:

1. Ejecuta el comando [`/settings`](../setup.md#settings).
2. Abre el módulo **Anti-spam** y luego el menú **Sanciones**.
3. En la lista de disparadores, selecciona **«Imágenes de estafa (Crypto Scam)»** y elige la sanción deseada. Para cortar la protección, restablece la sanción de este disparador.

<AntiSpamSanctionsSettingsMockup />

## 📊 Transparencia {#reports}

Cada estafa bloqueada por ScamLens:

- aparece en las [recapitulaciones de Transparencia](./transparency.md#recaps) de tu servidor («X estafas bloqueadas por ScamLens»);
- se cuenta en el contador público de cuentas atrapadas del [HoneyPot](./honeypot.md);
- refuerza la protección de **todos los servidores** que usan RaidProtect.

Publicamos regularmente informes públicos sobre las estafas detectadas y bloqueadas: encuéntralos en la [**Meteorología de amenazas**](/blog/tags/threats). Para conocer ScamLens en detalle, lee [nuestra presentación](/blog/scamlens-early-activation).
