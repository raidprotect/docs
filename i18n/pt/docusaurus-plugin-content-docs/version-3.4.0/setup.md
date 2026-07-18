---
title: Instalação
---

O RaidProtect simplifica o gerenciamento do seu servidor graças a duas ferramentas poderosas: o comando [`/setup`](#install) para uma configuração guiada passo a passo e o comando [`/settings`](#settings) para modificar suas configurações a qualquer momento por meio de um menu centralizado. Este guia de instalação explica como usá-los de forma eficaz.

## Instalação guiada {#install}

O comando `/setup` foi projetado para ajudar você a configurar o RaidProtect rapidamente ou de forma detalhada, conforme suas necessidades.
<!--
Ele oferece dois modos de configuração: [recomendada](#recommended) ou [avançada](#advanced).
-->

### 🔧 Configuração recomendada {#recommended}

Permite ativar ou desativar as funcionalidades principais em um instante graças a um menu de seleção interativo.

1. Use o comando `/setup`.
2. Selecione o botão "**Configuração recomendada**".
3. Ative ou desative as funcionalidades desejadas usando o menu de seleção.

Em seguida, o bot enviará um resumo das funcionalidades ativadas e das alterações que fará no servidor.

![Captura de tela da configuração recomendada](../../../en/docusaurus-plugin-content-docs/current/assets/rp-setup.webp)

<!--
### 🛠️ Configuração avançada {#advanced}

Se você quiser configurar o bot de forma mais aprofundada, opte pela configuração avançada. O bot guia você passo a passo com explicações claras.

1. Use o comando `/setup`.
2. Selecione o botão "**Configuração avançada**".
3. Cada etapa apresenta uma funcionalidade, sua utilidade e uma configuração mínima recomendada.
4. Use os botões "**Anterior**" e "**Próximo**" para avançar ou voltar.

Ao final, um resumo das configurações é exibido para confirmar suas escolhas.
-->
## Modificar a configuração {#settings}

O comando `/settings` é o comando de gerenciamento das suas configurações após a instalação. Ele permite visualizar, ajustar ou personalizar as funcionalidades do RaidProtect a qualquer momento, de forma simples e rápida.

### 🔍 Menu de configurações {#menu}

1. Digite `/settings` em um canal onde o bot esteja ativo.
2. Navegue facilmente entre as diferentes seções para encontrar as configurações que deseja modificar.
3. Ajuste as opções: Cada categoria apresenta uma lista de opções modificáveis na forma de botões ou menus suspensos.

import SettingsMockup from '@site/src/components/DiscordMessage/mockups/settings';

<SettingsMockup />

### 🔄 Redefinir uma configuração {#reset}

1. Navegue até a configuração desejada.
2. Clique em "**Redefinir**".

![Captura de tela do botão redefinir](../../../en/docusaurus-plugin-content-docs/current/assets/rp-button-reset.webp)

O bot confirmará a redefinição antes de aplicar as alterações.

:::info Um problema de configuração?
Se você encontrar um problema, consulte a seção [Anomalias](./guides/malfunctions) ou junte-se ao nosso [servidor de suporte](https://raidprotect.bot/discord) para obter ajuda.
:::
