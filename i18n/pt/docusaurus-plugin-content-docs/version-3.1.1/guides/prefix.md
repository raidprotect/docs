---
title: Usar um prefixo
---

## Prefixo Desativado (Predefinido) {#disabled}

Por defeito, o RaidProtect usa apenas comandos Slash (`/`) para interagir com o bot. Isto garante uma utilizacao intuitiva e consistente com os padroes do Discord.

## Prefixo Ativado (Opcional) {#activated}

Se preferires usar certos comandos com um prefixo personalizado, podes ativar esta opcao. O prefixo predefinido quando ativado e `?`, mas pode ser modificado conforme as tuas necessidades. Uma vez ativado, estes comandos podem ser usados com o prefixo configurado:
- [`?raidmode`](../features/raid-mode.md)
- [`?ban`](../features/moderation.md#ban)
- [`?kick`](../features/moderation.md#kick)
- [`?lock`](../features/channel-lock.md#lock)
- [`?unlock`](../features/channel-lock.md#unlock)
- [`?userinfo` | `?ui`](../features/utilities#userinfo)
- [`?clear`](../features/utilities#clear)

## 💬 Como Ativar ou Desativar o Prefixo {#config}

1. Abre o menu de configuracao escrevendo [`/settings`](../setup.md#settings).
2. Acede a opcao "**Prefixo**" para comandos.
3. Ativa ou desativa o prefixo conforme as tuas preferencias.
Se estiver ativado, personaliza o prefixo introduzindo o caracter ou cadeia desejada.

![Captura de ecra das definicoes do prefixo](../../../../en/docusaurus-plugin-content-docs/version-3.1.1/assets/rp-settings-prefix.webp)

:::note
Os comandos Slash (`/`) continuam disponiveis mesmo que o prefixo esteja ativado.
Recomenda-se evitar prefixos ja utilizados por outros bots para prevenir conflitos de comandos.
:::
