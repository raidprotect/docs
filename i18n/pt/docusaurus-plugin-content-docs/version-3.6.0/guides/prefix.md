---
title: Comandos por mensagem
description: "Ative os comandos por mensagem do RaidProtect além dos comandos Slash, escolha o prefixo deles e aplique as permissões do Discord."
---

import { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

## Prefixo desativado (padrão) {#disabled}

Por padrão, o RaidProtect usa apenas comandos Slash (`/`). Isso garante um uso intuitivo e consistente com os padrões do Discord.

## Comandos por mensagem (opcional) {#activated}

Se você preferir digitar certos comandos em uma mensagem, escolha um prefixo, por exemplo `?`. Esses comandos podem então ser usados com ele:

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

## 💬 Escolher o prefixo {#config}

1. Use o [comando `/settings`](../setup.md#settings).
2. Na aba “**Geral**”, clique em “**Editar**” ao lado de “**Comandos por mensagem**”.
3. Escolha um prefixo na lista (`?`, `!`, `>` ou `$`), ou digite o seu em “**Prefixo personalizado**” (no máximo três caracteres, tem prioridade sobre a lista). Escolha “**Desativado**” para desligar os comandos por mensagem.
4. Marque “**Delinvoke**” se você quiser que o RaidProtect exclua a mensagem que contém o comando assim que a ler.

<SettingsModal name="prefix" />

:::note
Os comandos Slash (`/`) permanecem disponíveis mesmo com um prefixo.
Evite os prefixos já usados por outros bots para evitar conflitos de comandos.
:::

## 🔒 Aplicar as permissões de comandos {#permissions}

As permissões dos comandos do RaidProtect são definidas no Discord: **Configurações do servidor → Integrações → RaidProtect**. Você pode permitir ou proibir ali cada comando por cargo, membro ou canal. O Discord só as aplica aos comandos Slash.

Para que elas também se apliquem aos comandos por mensagem e às sanções propostas pelo menu “**Sancionar**” (clique direito em um membro):

1. Use o [comando `/settings`](../setup.md#settings).
2. Na aba “**Geral**”, clique em “**Editar**” ao lado de “**Permissões**”.
3. Marque “**Aplicar as permissões das integrações**”.

<SettingsModal name="permissions" />

Um membro autorizado a usar `/ban` poderá então banir a partir do menu “**Sancionar**”, e um membro a quem `/ban` é proibido não poderá mais usar `?ban`. A opção está desativada por padrão.

:::warning
O menu **Integrações** do Discord só está disponível no aplicativo para PC e na Web, não no celular.
:::
