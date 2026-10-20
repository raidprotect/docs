---
title: HoneyPot
description: "El HoneyPot de RaidProtect es un canal-trampa antispam que detecta y sanciona automáticamente cuentas hackeadas y bots de spam en tu servidor de Discord."
---

import HoneypotMockup from '@site/src/components/DiscordMessage/mockups/honeypot';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

<HoneypotMockup />

El **HoneyPot** (o canal-trampa) de RaidProtect es una función antispam: un canal donde **[nadie debe escribir](/es/learn/honeypot-warming)**. Como los miembros reales saben que hay que evitar este canal, los únicos que publican en él son las **[cuentas hackeadas](/es/learn/token-grabber)** o los bots de spam: RaidProtect los sanciona automáticamente.

:::info
**Ya tienes ScamLens por defecto.** El anti-estafa [ScamLens](./scam-images.md) está activo en tu servidor sin ninguna configuración: especializado en las **imágenes de estafa**, las detecta, las elimina y sanciona a la cuenta comprometida con una fiabilidad muy alta. Para las estafas por imagen, ScamLens es más que suficiente. El HoneyPot resulta útil sobre todo si quieres una seguridad máxima y bloquear los **otros tipos de spam**: spam de enlaces, raids de texto, bots.
:::

## ❓ ¿Cómo funciona? {#working}

Cuando activas el HoneyPot, RaidProtect crea un canal de texto **en lo más alto de tu servidor**, con un nombre claro elegido al azar. Este canal tiene tres características:
- **Todo el mundo puede escribir en él**, incluidos los miembros que aún no han validado el captcha y los que tienen el [rol Jail](./sanctions.mdx#jail). Esto es a propósito: una cuenta hackeada o un bot no debe poder evitar la trampa.
- **Un mensaje de advertencia** (“NO ENVÍES NINGÚN MENSAJE AQUÍ”) se publica al crearse el canal, con un botón “**Translate**” para que cada uno pueda leerlo en su idioma.
- **Un contador de cuentas señaladas** aparece como un botón junto a “**Translate**” desde la primera cuenta atrapada.

En cuanto un miembro publica en este canal:
- RaidProtect aplica la **sanción que has elegido** (baneo, softban, kick, timeout, jail o silencio), sin enviarle ningún mensaje privado.
- Los **mensajes enviados por ese miembro en los últimos 10 minutos** se eliminan en todo el servidor, para detener el spam si ya se ha extendido a otros canales.
- La acción se añade a los logs de moderación automática (motivo: *Spam a través de cuenta de usuario comprometida*).

Si has elegido un [plazo antes de la sanción](#grace), el miembro tiene primero la oportunidad de decir que fue un error.

## 🛠️ Configurar el HoneyPot {#config}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Protección**”.
3. Haz clic en “**Configurar**” junto a “**HoneyPot**”.
4. Haz clic en “**Activar**” arriba a la derecha: RaidProtect crea el canal, ajusta los permisos y publica el mensaje de advertencia.

<Settings start="honeypot" />

Una vez creado el canal, puedes:
- **Regenerar canal** (botón junto a “**Canal HoneyPot**”): elimina el anterior y crea uno nuevo, con un nuevo nombre. Útil si crees que un miembro ha compartido el nombre del canal-trampa para ayudar a otras cuentas a evitarlo.
- **Desactivar** (interruptor de arriba a la derecha): elimina el canal y detiene la función.

:::warning Permisos requeridos
RaidProtect necesita los permisos `Gestionar canales` y `Banear miembros`. Sin ellos, aparece un recuadro de error y los botones quedan atenuados.
:::

### Elegir la sanción {#sanction}

Por defecto, el HoneyPot aplica un **Softban**. Hay varias [sanciones](/es/learn/discord-sanctions) disponibles en el selector “**Sanción aplicada**”:

| Sanción | Efecto | Disponibilidad |
|---|---|---|
| **Ban** | Excluye al miembro del servidor y elimina sus mensajes recientes. Temporal (1 día por defecto). | Gratuito |
| **Softban** | Banea y luego desbanea: elimina los mensajes, pero el miembro puede volver | Gratuito |
| **Expulsión (Kick)** | Excluye al miembro, que puede volver libremente | Premium |
| **Timeout** | Impide al miembro hablar durante un tiempo elegido (máx. 28 días) | Premium |
| **Jail** | Asigna el [rol Jail](./sanctions.mdx#jail) configurado en tu servidor | Premium |
| **Silencio** | Asigna el [rol de Silencio](./sanctions.mdx#mute) configurado en tu servidor | Premium |

Para las sanciones con duración (Ban, Timeout, Jail, Silencio), elige una duración en el selector “**Duración**”: 5 minutos, 1 hora, **1 día** (por defecto) o 28 días, o “**Valor personalizado**” para introducir la tuya (por ejemplo `5m`, `1h`, `2d`; mínimo 1 minuto). El selector aparece atenuado para el Softban y la Expulsión, que no tienen duración.

:::tip
El **Softban** es un buen compromiso: limpia los mensajes y expulsa la cuenta hackeada, pero el propietario legítimo puede volver una vez asegurada su cuenta.
:::

:::info
Solo el **Ban** y el **Softban** permiten a Discord eliminar de forma nativa los mensajes de la cuenta hackeada **en todo el servidor** de una sola vez.  
Para las demás sanciones (Kick, Timeout, Jail, Silencio), RaidProtect elimina él mismo los mensajes: están reservadas a los servidores [Premium](/es/premium).
:::

:::info
- Un **Jail** o un **Silencio** sin rol configurado se convierte en un **Timeout**. El selector lo indica bajo la sanción.
- Si tu servidor pierde el Premium, una sanción Premium vuelve automáticamente a **Softban** en la siguiente activación.
:::

### Plazo antes de la sanción <span className="badge-experiment">Experimental</span> {#grace}

Un miembro de buena fe puede escribir en el HoneyPot por error. El **plazo antes de la sanción** le deja tiempo para indicarlo antes de ser sancionado.

:::info Experimental: Shield Update
El plazo antes de la sanción forma parte de la **Shield Update**, prevista para la versión 3.6.0. Hasta su lanzamiento, está en fase experimental, en beta pública para los servidores [Premium](/es/premium).
:::

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Protección**”.
3. Haz clic en “**Configurar**” junto a “**HoneyPot**”.
4. En “**Plazo antes de la sanción**”, elige “**Sanción inmediata**” (por defecto) o “**Preguntar primero, sanción tras**” 30 segundos, 1 minuto, 2 minutos o 5 minutos.

Con un plazo:
- el mensaje se **retira** y el miembro es **mencionado** en el canal-trampa, con el botón “**Fue un error**”;
- solo ese miembro puede hacer clic en el botón. Si hace clic a tiempo, no se aplica ninguna sanción;
- sin clic antes del final del plazo, cae la sanción.

:::info
Un bot de spam suele publicar el mismo texto en todas partes. Una cuenta que publica el **mismo mensaje** en otro lugar es sancionada **de inmediato**, sin esperar.
:::

### Miembros ignorados {#ignore}

Puedes elegir **a quién no se sanciona** en caso de mensaje en el HoneyPot, en el selector “**Miembros ignorados**”:
- “**Nadie (excepto miembros no moderables)**” *(por defecto)*: todo el mundo es sancionado, incluido el staff. Solo los miembros que el bot no puede moderar (rol más alto que el de RaidProtect) se respetan automáticamente.
- “**Staff (Admin / Gestionar servidor / Gestionar canales)**”: los miembros con el permiso `Administrador`, `Gestionar servidor` o `Gestionar canales` no son sancionados.
- “**Miembros ignorados por el Antispam**”: RaidProtect reutiliza los roles y miembros ignorados del [Anti-spam](./anti-spam.mdx#ignore). Si esta lista está vacía, se ignoran los miembros con el permiso `Administrador`, `Gestionar servidor` o `Gestionar mensajes`.

:::info
En todos los casos, RaidProtect **nunca se sanciona a sí mismo ni a otros bots**. Los bots no disparan el HoneyPot.
:::

## ℹ️ Comando /honeypot {#command}

El comando `/honeypot` abre directamente la pantalla de configuración del HoneyPot, sin pasar por `/settings`. Requiere el permiso `Gestionar servidor`.

Usa el comando: ```/honeypot```

## 🤝 HoneyPot y ScamLens, mejor juntos {#scamlens-combo}

RaidProtect ya integra **[ScamLens](./scam-images.md)**, que analiza las imágenes y elimina las que son estafas conocidas (cripto, falsos sorteos, falsas promociones de casinos).

Ambos funcionan codo con codo:
- **ScamLens pasa primero.** Si la imagen publicada en el HoneyPot ya es conocida, es ScamLens quien elimina el mensaje y sanciona a la cuenta comprometida; la sanción del HoneyPot no se aplica además.
- **El HoneyPot toma el relevo** en todo lo demás: nuevas imágenes aún no conocidas, spam de enlaces, menciones masivas, raids de texto, bots.
- **Cada nueva imagen atrapada por un HoneyPot enriquece ScamLens**, que podrá entonces bloquearla en todos los servidores protegidos.
- **ScamLens sigue a tu HoneyPot**: mientras no le des un ajuste propio, aplica la [sanción y la duración](./scam-images.md#config) de tu HoneyPot.

ScamLens ya está activo por defecto en tu servidor. **Activar el HoneyPot no rompe nada**: simplemente complementa lo que ya existe, y ayuda a RaidProtect a proteger mejor a toda la comunidad.

## Preguntas frecuentes {#faq}

### ¿El HoneyPot es útil si ya tengo ScamLens?

Para las estafas por imagen, ScamLens es más que suficiente: está activo por defecto y las detecta, elimina y sanciona por sí solo. El HoneyPot resulta útil sobre todo para bloquear los otros tipos de spam, como el spam de enlaces, los raids de texto y los bots.

### ¿Qué sanción aplica el HoneyPot?

Por defecto, un Softban. Puedes elegir otra sanción: Ban y Softban son gratuitos, mientras que Expulsión, Timeout, Jail y Silencio están reservados a los servidores Premium. El Ban del HoneyPot dura 1 día por defecto, una duración que puedes modificar.

### Un miembro ha escrito en el HoneyPot por error, ¿qué hacer?

Activa el plazo antes de la sanción: el mensaje se retira, el miembro es mencionado y dispone de 30 segundos a 5 minutos para hacer clic en “Fue un error”. Si hace clic a tiempo, no es sancionado. En cambio, una cuenta que ha publicado el mismo mensaje en otro lugar es sancionada de inmediato.

### ¿Se sanciona a los miembros del staff si escriben en el HoneyPot?

Depende de la opción “Miembros ignorados”. Por defecto, todo el mundo es sancionado, incluido el staff. RaidProtect nunca se sanciona a sí mismo, y los bots nunca disparan la trampa.

### ¿Qué ocurre con los mensajes de una cuenta atrapada por el HoneyPot?

Además de la sanción, los mensajes enviados por ese miembro en los últimos 10 minutos se eliminan en todo el servidor, para detener el spam si ya se ha extendido a otros canales.
