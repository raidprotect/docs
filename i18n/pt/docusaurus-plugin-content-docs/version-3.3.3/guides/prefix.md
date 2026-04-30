---
title: Utilização de um Prefixo
---

## Prefixo desativado (predefinido) {#disabled}

Por defeito, o RaidProtect utiliza apenas Slash commands (`/`) para interagir com o bot. Isto garante uma utilização intuitiva e consistente com os padrões do Discord.

## Prefixo ativado (opcional) {#activated}

Se preferir utilizar determinados comandos com um prefixo personalizado, pode ativar esta opção. O prefixo predefinido quando ativado é `?`, mas pode ser alterado conforme as suas necessidades. Uma vez ativado, os seguintes comandos podem ser utilizados com o prefixo configurado:
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

## Como ativar ou desativar o prefixo {#config}

1. Abra o menu de definições escrevendo [`/settings`](../setup.md#settings).
2. Navegue até à opção de comando "**Prefixo**".
3. Ative ou desative o prefixo conforme as suas preferências.
Se ativado, personalize o prefixo introduzindo o carácter ou cadeia de caracteres desejado.

![Captura de ecrã da definição de prefixo](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-prefix.webp)

:::note
Os Slash commands (`/`) permanecem disponíveis mesmo que o prefixo esteja ativado.
É recomendável evitar prefixos já utilizados por outros bots para prevenir conflitos de comandos.
:::
