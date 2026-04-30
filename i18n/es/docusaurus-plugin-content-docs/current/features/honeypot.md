---
title: HoneyPot
---

El **HoneyPot** (o canal-trampa) de RaidProtect es un canal donde **nadie debe escribir**. Como los miembros reales saben que hay que evitar este canal, los unicos que publican en el son las **cuentas hackeadas** o los bots de spam: RaidProtect los sanciona automaticamente.

## ❓ Como funciona {#working}

Cuando activas el HoneyPot, RaidProtect crea un canal de texto **en lo mas alto de tu servidor**, con un nombre claro elegido al azar. Este canal tiene tres caracteristicas:
- **Todo el mundo puede escribir en el**, incluidos los miembros que aun no han validado el captcha. Esto es a proposito: una cuenta hackeada o un bot no debe poder evitar la trampa.
- **Un mensaje de advertencia** se publica al crearse el canal, con un boton "Traducir" para que cada uno pueda leerlo en su idioma.
- **Un contador publico** muestra el numero de cuentas ya atrapadas por la trampa, actualizado automaticamente.

En cuanto un miembro publica en este canal:
- RaidProtect aplica la **sancion que has elegido** (baneo, softban, kick, timeout, jail o silencio).
- Los **mensajes enviados por ese miembro en los ultimos 10 minutos** se eliminan en todo el servidor, para detener el spam si ya se ha extendido a otros canales.
- La accion se anade a los registros de moderacion automatica (motivo: *Spam mediante cuenta de usuario comprometida*).

:::info
El HoneyPot funciona codo con codo con [ScamLens](/blog/scamlens-early-activation), que elimina las imagenes de scam sin castigar a la cuenta. El HoneyPot, por su parte, atrapa todo lo demas: **nuevas imagenes de scam aun no conocidas**, **spam de enlaces**, **raids de texto**, **bots**.
:::

## 🛠️ Configurar el HoneyPot {#config}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Haz clic en el boton "**HoneyPot**".
3. Haz clic en "**Crear el canal**": RaidProtect crea el canal, ajusta los permisos y publica el mensaje de advertencia.

Una vez creado el canal, puedes:
- **Regenerar el canal**: elimina el anterior y crea uno nuevo (con un nuevo nombre). Util si crees que un miembro ha compartido el nombre del canal-trampa para ayudar a otras cuentas a evitarlo.
- **Desactivar**: elimina el canal y detiene la funcionalidad.

### Elegir la sancion {#sanction}

Hay varias sanciones disponibles:

| Sancion | Efecto | Disponibilidad |
|---|---|---|
| **Baneo** | Excluye al miembro del servidor y elimina sus mensajes recientes | Gratuito |
| **Softban** | Banea y desbanea: elimina los mensajes, pero el miembro puede volver | Gratuito |
| **Expulsion (Kick)** | Excluye al miembro, que puede volver libremente | Premium |
| **Timeout** | Impide al miembro hablar durante un tiempo definido (max 28 dias) | Premium |
| **Jail** | Asigna el rol Jail configurado en tu servidor | Premium |
| **Silencio** | Asigna el rol de Silencio configurado en tu servidor | Premium |

Para las sanciones con duracion (Baneo, Timeout, Jail, Silencio), puedes elegir una **duracion lista para usar** (de 5 minutos a 28 dias) o una **duracion personalizada** mediante el boton dedicado (por ejemplo `5m`, `1h`, `2d`; minimo 1 minuto).

:::tip
El **Softban** es un buen compromiso: limpia los mensajes y expulsa la cuenta hackeada, pero el propietario legitimo puede volver una vez asegurada su cuenta.
:::

:::info
Solo el **Baneo** y el **Softban** permiten a Discord eliminar de forma nativa los mensajes de la cuenta hackeada **en todo el servidor** de una sola vez.  
Para las demas sanciones (Kick, Timeout, Jail, Silencio), RaidProtect debe hacer una eliminacion entre canales manual, mucho mas costosa para el bot, asi que estan reservadas a los servidores Premium.
:::

### Miembros ignorados {#ignore}

Puedes elegir **a quien no se sanciona** en caso de mensaje en el HoneyPot:
- **Nadie** *(por defecto)*: todo el mundo es sancionado, incluido el staff. Solo los miembros que el bot no puede moderar (rol mas alto que el de RaidProtect) son automaticamente respetados.
- **Staff**: los miembros con el permiso `Administrador`, `Gestionar el servidor` o `Gestionar canales` no son sancionados.
- **Miembros ignorados por el Antispam**: RaidProtect reutiliza la lista del [Anti-spam](./anti-spam.mdx). Si la lista esta vacia, se vuelve al modo "Staff".

:::info
En todos los casos, RaidProtect **nunca se sanciona a si mismo ni a otros bots**. Los bots no disparan el HoneyPot.
:::

## 🤝 HoneyPot y ScamLens, mejor juntos {#scamlens-combo}

RaidProtect ya integra **[ScamLens](/blog/scamlens-early-activation)**, que analiza las imagenes y elimina las que son scams conocidos (cripto, falsos sorteos, falsas promociones de casinos).

Ambos funcionan codo con codo:
- **ScamLens pasa primero.** Si la imagen publicada en el HoneyPot ya es conocida, se elimina y el HoneyPot no sanciona.
- **El HoneyPot toma el relevo** en todo lo demas: nuevas imagenes aun no conocidas, spam de enlaces, menciones masivas, raids de texto, bots.
- **Cada nueva imagen atrapada por un HoneyPot enriquece ScamLens**, que podra entonces bloquearla en todos los servidores protegidos.

ScamLens ya esta activo por defecto en tu servidor. **Activar el HoneyPot no rompe nada**: simplemente complementa lo que ya existe, y ayuda a RaidProtect a proteger mejor a toda la comunidad.
