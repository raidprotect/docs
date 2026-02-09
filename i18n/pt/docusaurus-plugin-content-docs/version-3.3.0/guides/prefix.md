---
title: Utilizar um prefixo
---

## Prefixo Desativado (Predefinido) {#disabled}

Por defeito, o RaidProtect utiliza apenas comandos Slash (`/`) para interagir com o bot. Isto garante uma utilizacao intuitiva e consistente com os padroes do Discord.

## Prefixo Ativado (Opcional) {#activated}

Se preferir utilizar determinados comandos com um prefixo personalizado, pode ativar esta opcao. O prefixo predefinido quando ativado e `?`, mas pode ser modificado conforme as suas necessidades. Uma vez ativado, estes comandos podem ser utilizados com o prefixo configurado:
- [`?raidmode`](../features/raid-mode.md)
- [`?ban`](../features/moderation.mdx#ban)
- [`?tempban`](../features/moderation.mdx#tempban)
- [`?unban`](../features/moderation.mdx#unban)
- [`?kick`](../features/moderation.mdx#kick)
- [`?timeout`](../features/moderation.mdx#timeout)
- [`?untimeout`](../features/moderation.mdx#untimeout)
- [`?warn`](../features/moderation.mdx#warn)
- [`?lock`](../features/channel-lock.md#lock)
- [`?unlock`](../features/channel-lock.md#unlock)
- [`?userinfo` | `?ui`](../features/utilities#userinfo)
- [`?clear`](../features/moderation#clear)

## 💬 Como Ativar ou Desativar o Prefixo {#config}

1. Abra o menu de configuracao escrevendo [`/settings`](../setup.md#settings).
2. Aceda a opcao "**Prefix**" para comandos.
3. Ative ou desative o prefixo de acordo com as suas preferencias.
Se ativado, personalize o prefixo introduzindo o caracter ou texto desejado.

![Captura de ecra das definicoes de prefixo](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-prefix.webp)

:::note
Os comandos Slash (`/`) permanecem disponiveis mesmo que o prefixo esteja ativado.
E recomendavel evitar prefixos ja utilizados por outros bots para prevenir conflitos de comandos.
:::
