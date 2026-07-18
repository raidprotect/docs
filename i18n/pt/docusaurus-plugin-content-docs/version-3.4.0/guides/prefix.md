---
title: Utilização de um Prefixo
---

import { PrefixSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

## Prefixo desativado (padrão) {#disabled}

Por padrão, o RaidProtect usa apenas comandos Slash (`/`) para interagir com o bot. Isso garante um uso intuitivo e consistente com os padrões do Discord.

## Prefixo ativado (opcional) {#activated}

Se você preferir usar determinados comandos com um prefixo personalizado, pode ativar essa opção. O prefixo padrão, quando ativado, é `?`, mas ele pode ser alterado conforme suas necessidades. Uma vez ativado, estes comandos podem ser usados com o prefixo configurado:
- [`?raidmode`](../features/raid-mode.md)
- [`?ban`](../features/moderation.mdx#ban)
- [`?tempban`](../features/moderation.mdx#tempban)
- [`?unban`](../features/moderation.mdx#unban)
- [`?kick`](../features/moderation.mdx#kick)
- [`?mute` | `?timeout`](../features/moderation.mdx#timeout)
- [`?unmute` | `?untimeout`](../features/moderation.mdx#untimeout)
- [`?jail`](../features/moderation.mdx#jail)
- [`?tempjail`](../features/moderation.mdx#tempjail)
- [`?unjail`](../features/moderation.mdx#unjail)
- [`?warn`](../features/moderation.mdx#warn)
- [`?slowmode`](../features/moderation.mdx#slowmode)
- [`?lock`](../features/channel-lock.md#lock)
- [`?unlock`](../features/channel-lock.md#unlock)
- [`?userinfo` | `?ui`](../features/utilities#userinfo)
- [`?clear`](../features/moderation#clear)

## 💬 Como ativar ou desativar o prefixo {#config}

1. Abra o menu de configurações digitando [`/settings`](../setup.md#settings).
2. Acesse a opção "**Prefixo**" dos comandos.
3. Ative ou desative o prefixo conforme suas preferências.
Se ativado, personalize o prefixo digitando o caractere ou a sequência de caracteres desejada.

<PrefixSettingsMockup />

:::note
Os comandos Slash (`/`) permanecem disponíveis mesmo que o prefixo esteja ativado.
É recomendável evitar prefixos já utilizados por outros bots para evitar conflitos de comandos.
:::

## 🔒 Aplicar as permissões de comandos {#permissions}

Por padrão, os comandos prefixo levam em conta apenas as permissões do Discord próprias de cada comando. As regras que você define no Discord (**Configurações do servidor → Integrações → RaidProtect**, por cargo, membro ou canal) se aplicam somente aos comandos Slash.

Para aplicá-las também aos comandos prefixo, ative a opção **Aplicar aos comandos prefixo** no painel de permissões de [`/settings`](../setup.md#settings). Ela está desativada por padrão.
