---
title: Utilizar um prefixo
---

## Prefixo desativado (por defeito) {#disabled}

Por defeito, o RaidProtect utiliza apenas comandos Slash (`/`) para interagir com o bot. Isto garante uma utilizacao intuitiva e consistente com os padroes do Discord.

## Prefixo ativado (opcional) {#activated}

Se preferir utilizar determinados comandos com um prefixo personalizado, pode ativar esta opcao. O prefixo predefinido quando ativado e `?`, mas pode ser modificado conforme as suas necessidades. Uma vez ativado, estes comandos podem ser utilizados com o prefixo configurado:
- [`?raidmode`](../features/raid-mode.md)
- [`?ban`](../features/moderation.md#ban)
- [`?kick`](../features/moderation.md#kick)
- [`?lock`](../features/channel-lock.md#lock)
- [`?unlock`](../features/channel-lock.md#unlock)
- [`?userinfo` | `?ui`](../features/utilities#userinfo)
- [`?clear`](../features/utilities#clear)

## 💬 Como ativar ou desativar o prefixo {#config}

1. Abra o menu de configuracao escrevendo [`/settings`](../setup.md#settings).
2. Aceda a opcao "**Prefixo**" para comandos.
3. Ative ou desative o prefixo conforme as suas preferencias.
Se estiver ativado, personalize o prefixo introduzindo o caracter ou cadeia pretendida.

:::note
Os comandos Slash (`/`) permanecem disponiveis mesmo que o prefixo esteja ativado.
Recomenda-se evitar prefixos ja utilizados por outros bots para prevenir conflitos de comandos.
:::
