---
title: Comandi tramite messaggio
description: "Attiva i comandi tramite messaggio di RaidProtect in aggiunta agli Slash Command, scegli il loro prefisso e applica loro i permessi di Discord."
---

import { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

## Prefisso disattivato (predefinito) {#disabled}

Per impostazione predefinita, RaidProtect usa solo gli Slash Command (`/`). Questo garantisce un utilizzo intuitivo e coerente con gli standard di Discord.

## Comandi tramite messaggio (facoltativo) {#activated}

Se preferisci digitare alcuni comandi in un messaggio, scegli un prefisso, per esempio `?`. Questi comandi diventano allora utilizzabili con esso:

- [`?raidmode`](../features/raid-mode.md) e [`?joinlock`](../features/join-lock.mdx)
- [`?ban`](../features/moderation.mdx#ban), [`?tempban`](../features/moderation.mdx#tempban), [`?softban`](../features/moderation.mdx#softban) e [`?unban`](../features/moderation.mdx#unban)
- [`?kick`](../features/moderation.mdx#kick)
- [`?mute` | `?timeout` | `?tempmute`](../features/moderation.mdx#timeout) e [`?unmute` | `?untimeout` | `?untempmute`](../features/moderation.mdx#untimeout)
- [`?jail`](../features/moderation.mdx#jail), [`?tempjail`](../features/moderation.mdx#tempjail) e [`?unjail`](../features/moderation.mdx#unjail)
- [`?warn`](../features/moderation.mdx#warn)
- [`?slowmode` | `?slow`](../features/moderation.mdx#slowmode)
- [`?lock`](../features/channel-lock.md#lock) e [`?unlock`](../features/channel-lock.md#unlock)
- [`?clear` | `?clean`](../features/moderation.mdx#clear)
- [`?nick` | `?nickname` | `?rename` | `?setnick`](../features/moderation.mdx#nick)
- [`?userinfo` | `?ui`](../features/utilities.mdx#userinfo), [`?serverinfo` | `?ginfo`](../features/utilities.mdx#serverinfo) e [`?inviteinfo` | `?ii`](../features/utilities.mdx#inviteinfo)

## 💬 Scegliere il prefisso {#config}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Nella scheda “**Generale**”, clicca su “**Modifica**” accanto a “**Comandi tramite messaggio**”.
3. Scegli un prefisso dall'elenco (`?`, `!`, `>` o `$`), oppure inserisci il tuo in “**Prefisso personalizzato**” (al massimo tre caratteri, ha la precedenza sull'elenco). Scegli “**Disattivato**” per spegnere i comandi tramite messaggio.
4. Spunta “**Eliminazione all'invocazione**” se vuoi che RaidProtect elimini il messaggio che contiene il comando non appena l'ha letto.

<SettingsModal name="prefix" />

:::note
Gli Slash Command (`/`) restano disponibili anche con un prefisso.
Evita i prefissi già usati da altri bot per evitare conflitti tra comandi.
:::

## 🔒 Applicare i permessi dei comandi {#permissions}

I permessi dei comandi di RaidProtect si regolano in Discord: **Impostazioni del server → Integrazioni → RaidProtect**. Puoi autorizzare o vietare ogni comando per ruolo, membro o canale. Discord li applica solo agli Slash Command.

Perché si applichino anche ai comandi tramite messaggio e alle sanzioni proposte dal menu “**Sanzionare**” (clic destro su un membro):

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Nella scheda “**Generale**”, clicca su “**Modifica**” accanto a “**Permessi**”.
3. Spunta “**Applica i permessi delle integrazioni**”.

<SettingsModal name="permissions" />

Un membro autorizzato a usare `/ban` potrà allora bannare dal menu “**Sanzionare**”, e un membro a cui `/ban` è vietato non potrà più usare `?ban`. L'opzione è disattivata per impostazione predefinita.

:::warning
Il menu **Integrazioni** di Discord è disponibile solo nell'app per PC e sul Web, non su mobile.
:::
