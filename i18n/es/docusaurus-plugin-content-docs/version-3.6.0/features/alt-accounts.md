---
title: Cuentas duplicadas
description: "Las cuentas duplicadas de RaidProtect vinculan las cuentas de una misma persona en tu servidor de Discord: banear una banea las demás, sin elusión posible."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

Las **cuentas duplicadas** permiten a tu equipo declarar que varias cuentas de Discord pertenecen a una misma persona. Las [sanciones](./sanctions.mdx) de una se extienden entonces a las demás: un miembro baneado ya no vuelve con una segunda cuenta para eludir su sanción.

:::info Experimental: Identity Update
Las cuentas duplicadas forman parte de la **Identity Update**, prevista para la versión 3.7.0. Hasta su lanzamiento, están en fase experimental, en beta pública para los servidores [Premium](/es/premium).
:::

## ❓ ¿Cómo funciona? {#working}

- **Un grupo por persona**: un grupo reúne las cuentas que tu equipo considera una misma persona. Los grupos son propios de tu servidor: no se comparte nada con otros servidores.
- **Sanciones compartidas** ([Premium](/es/premium)): el baneo, la expulsión, el silencio, el jail y el timeout se extienden a las demás cuentas del grupo, según el [modo](#modes) que elijas para cada sanción. La sanción queda a nombre de la cuenta objetivo, las demás reciben su estado. Nunca se extiende a las cuentas que moderan el servidor (administración, gestión del servidor, baneo, expulsión o aislamiento de miembros), al propietario ni a los bots. Sin Premium, las cuentas se vinculan y se consultan, pero ninguna sanción se extiende: el log de la sanción cita entonces las demás cuentas del miembro.
- **Levantamiento común**: levantar la sanción de una de las cuentas, sea cual sea, la levanta para todas, con o sin Premium.
- **Búsqueda agrupada**: [buscar las sanciones](./sanctions.mdx#search) de una cuenta muestra también las de las demás cuentas del grupo.
- **AutoMod de Discord**: los timeouts y silencios aplicados por el AutoMod de Discord también se extienden a las cuentas vinculadas.
- **Detectadas por el captcha**: la [Activity del captcha](./captcha.md#activity-alts) puede vincular por sí misma dos cuentas que está segura de que son la misma persona, o proponer el vínculo a tu equipo. Se basa en el dispositivo, [nunca en la dirección IP](#ip).
- **Logs**: los vínculos, las retiradas y los cambios de cuenta principal se registran en los [logs de moderación](./moderation.mdx#logs). El log de una sanción cita las cuentas vinculadas con su nombre de usuario y, en formato embed, lleva un botón “**Cuentas vinculadas**” que abre el panel `/alt` del miembro sancionado.

**Límites:** ninguno en el número de cuentas por grupo ni en el número de grupos. Una sanción se extiende a **10 cuentas vinculadas** de una vez: las siguientes se sancionan en su próximo mensaje o a su llegada, y el botón bajo la sanción las sanciona al momento.

## 🔗 Vincular cuentas con /alt {#alt}

Usa el comando: ```/alt [miembro] [otra]```

- Sin opciones: muestra la lista de grupos de cuentas vinculadas del servidor. El botón “**Vincular dos cuentas**” vincula ahí dos miembros del servidor, o dos cuentas ausentes mediante sus identificadores.
- Con `[miembro]`: muestra el grupo de esa cuenta, o esa cuenta sola si no está vinculada a ninguna otra. Cada cuenta aparece con su estado (baneada del servidor, en el servidor, no está en el servidor, en cuarentena), con la cuenta principal al principio.
- Con `[miembro]` y `[otra]`: vincula directamente las dos cuentas, declaradas como la misma persona.

Si una de las cuentas del grupo ya está baneada ([Premium](/es/premium)), las cuentas vinculadas comparten un mismo baneo: RaidProtect te propone “**Banear también**” las demás cuentas, “**Levantar el ban**” de la cuenta baneada para todas, o decidir “**Más tarde**”.

Reemplaza `[miembro]` y `[otra]` con la mención o el [identificador](../guides/id.mdx) de las cuentas deseadas. Los bots no se pueden vincular.

Desde el panel de un grupo:

- “**Vincular un miembro**” añade una cuenta al grupo: un miembro del servidor, o el identificador de Discord de una cuenta ausente del servidor.
- El selector “**Modificar una cuenta del grupo**” abre una ventana para convertirla en la “**Cuenta principal del grupo**” o para “**Quitar esta cuenta del grupo**”. Una cuenta quitada deja de tratarse como la misma persona, pero si fue baneada junto con el grupo, sigue baneada.

También encuentras las cuentas vinculadas de un miembro en la [vista de moderación `/modview`](./moderation.mdx#modview), con el botón “**Gestionar**”.

:::info
El comando `/alt` y sus botones requieren el permiso **Banear miembros**.
:::

## 🛠️ Configuración de las cuentas duplicadas {#config}

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Moderación**”.
3. Haz clic en “**Configurar**” junto a “**Cuentas duplicadas**”.

<Settings start="alts" />

### Sanciones de las cuentas vinculadas <span className="badge-premium">Premium</span> {#modes}

Para cada sanción, elige cómo se extiende al grupo:

1. En la pantalla Cuentas duplicadas, haz clic en “**Editar**” junto a “**Sanciones de las cuentas vinculadas**”.
2. En la ventana, elige un modo para cada sanción.

El selector “**Ajustar todo en…**” de la pantalla aplica el mismo modo a todas las sanciones de una vez.

<SettingsModal name="altsModes" />

| Modo | Efecto | Sanciones afectadas |
|---|---|---|
| “**De inmediato**” *(por defecto)* | Baneo: todas las cuentas vinculadas son baneadas al instante, estén presentes o no. Expulsión: las cuentas vinculadas presentes en el servidor también son expulsadas. Silencio, jail y timeout: las cuentas presentes son sancionadas de inmediato, las demás cuando lleguen. | Todas |
| “**Presentes de inmediato, las demás al llegar**” | Las cuentas presentes son baneadas al instante; las cuentas ausentes lo son si se unen al servidor durante el baneo. | Baneo |
| “**Trampa**” | Solo se sanciona la cuenta objetivo. Otra cuenta del grupo que llegue o escriba durante la sanción se toma por elusión y recibe la [sanción por elusión](#evasion). | Todas excepto la expulsión |
| “**Desactivado**” | La sanción solo afecta a la cuenta elegida. | Todas |

### Sanción de grupo {#group-sanction}

Cuando una sanción se extiende a varias cuentas, aparece en el historial ([`/sanctions`](./sanctions.mdx#search), `/modview`) como **una sola sanción de grupo** (por ejemplo “**Ban de grupo**”), que enumera las cuentas afectadas (“**Cuentas**”) con el estado de cada una. Cada cuenta conserva su propia línea, marcada “Forma parte de la sanción de grupo”. Cancelar, eliminar o modificar (razón, duración) la sanción de grupo actúa sobre todas las cuentas a la vez. Una cuenta solo consulta su propia línea en `/mis-sanciones`.

### Sanción por elusión {#evasion}

La sanción por elusión se aplica a una cuenta vinculada en modo “**Trampa**”: llega al servidor o escribe en él durante la sanción de su grupo.

1. En la pantalla Cuentas duplicadas, haz clic en “**Editar**” junto a “**Sanción por elusión**”.
2. En la ventana, elige la “**Sanción**” y, si hace falta, su “**Duración**”.

<SettingsModal name="altsEvasion" />

- “**Resto de la sanción**” *(por defecto)*: la cuenta comparte la sanción del grupo hasta su final, sin sanción a su nombre.
- **Una sanción** (Baneo, Expulsión, Silencio, Jail o Timeout): se aplica a su nombre, con su propia duración, y después vale para todo el grupo. Un silencio o un jail vuelve si la cuenta sale del servidor y vuelve a unirse. Deja la duración vacía para una sanción definitiva (ej.: `1h`, `3d`, `2w`).

:::info
Un timeout siempre requiere una duración, de 28 días como máximo. El silencio y el jail requieren que su [rol](./sanctions.mdx#config) esté configurado.
:::

### Una sola cuenta por persona {#single-account}

Con este ajuste, gratuito como la detección del captcha, solo la **cuenta principal** de cada grupo circula por el servidor. Las demás cuentas se ponen en **cuarentena** con el [rol de jail](./sanctions.mdx#jail) (sanción “**Cuarentena**” en el historial). Salen de ella por sí solas si pasan a ser la cuenta principal o si se quitan del grupo.

1. Ejecuta el [comando `/settings`](../setup.md#settings).
2. Abre la pestaña “**Moderación**”.
3. Haz clic en “**Configurar**” junto a “**Cuentas duplicadas**”.
4. Haz clic en “**Activar**” junto a “**Una sola cuenta por persona**”.

:::info
Este ajuste requiere un [rol Jail](./sanctions.mdx#jail). Si no lo hay, una ventana te propone “**Activar y configurar el jail**”: el ajuste se activa, y las cuentas secundarias se ponen en cuarentena en cuanto existe el rol.
:::

Para cambiar la cuenta principal de un grupo, usa `/alt` con una de las cuentas y luego el selector “**Modificar una cuenta del grupo**”.

## Preguntas frecuentes {#faq}

### ¿Las cuentas duplicadas se comparten entre servidores?

No. Los grupos son propios de tu servidor y no se comparte nada con otros servidores.

### ¿RaidProtect usa la dirección IP para detectar las cuentas duplicadas? {#ip}

No. Nunca obtenemos la dirección IP: el bot no la recibe de Discord, y la [Activity del captcha](./captcha.md#privacy) pasa por el proxy de Discord, que no la transmite. Las cuentas duplicadas las vincula tu equipo con `/alt`, o se detectan mediante la verificación del dispositivo, hecha con la conformidad del miembro. Un vínculo que solo se basa en el dispositivo nunca se aplica automáticamente: se propone a tu equipo. Para saber más, lee nuestro artículo sobre [el captcha y la verificación en Discord](/es/learn/captcha-discord#alts).

### ¿Qué pasa cuando desbaneo una de las cuentas?

Levantar la sanción de una de las cuentas la levanta para todas las cuentas del grupo.

### ¿Puedo vincular una cuenta que no está en mi servidor?

Sí. En el panel `/alt`, haz clic en “**Vincular un miembro**” e introduce su identificador de Discord.

### ¿Quién puede usar /alt?

Los miembros que tienen el permiso **Banear miembros**, en un servidor [Premium](/es/premium) mientras la Identity Update esté en fase experimental.
