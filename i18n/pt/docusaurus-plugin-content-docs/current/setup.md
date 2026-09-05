---
title: Instalação
description: "Instale e configure o RaidProtect no seu servidor Discord em minutos com o comando /settings e o menu de configuração."
---

import Head from '@docusaurus/Head';

<Head>
  <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"Configurar o RaidProtect em um servidor Discord","description":"Instalar e configurar o bot de proteção RaidProtect com os comandos /setup e /settings.","step":[{"@type":"HowToStep","position":1,"name":"Executar /setup","text":"Digite /setup em um canal onde o bot esteja ativo para iniciar a configuração guiada."},{"@type":"HowToStep","position":2,"name":"Configuração recomendada","text":"Selecione « Configuração recomendada » e ative ou desative as funcionalidades principais pelo menu de seleção."},{"@type":"HowToStep","position":3,"name":"Validar as alterações","text":"O bot exibe um resumo das funcionalidades ativadas e das alterações antes de aplicá-las ao servidor."},{"@type":"HowToStep","position":4,"name":"Ajustar com /settings","text":"Use /settings a qualquer momento para visualizar, modificar ou redefinir as suas configurações."}]}).replace(/</g, '\\u003c')}</script>
</Head>

O RaidProtect simplifica o gerenciamento do seu servidor graças a duas ferramentas poderosas: o comando [`/setup`](#install) para uma configuração guiada passo a passo e o comando [`/settings`](#settings) para modificar suas configurações a qualquer momento por meio de um menu centralizado. Este guia de instalação explica como usá-los de forma eficaz.

## Por onde começar {#etapes}

Para um servidor que começa do zero, esta é a ordem recomendada:

1. **Ative o modo Comunidade do Discord** (Configurações do servidor, depois "Ativar comunidade"). É um pré-requisito para o [captcha](./features/captcha) e o [modo raid](./features/raid-mode).
2. **Execute [`/setup`](#install)**: é aqui que você escolhe quais funcionalidades ativar, pela configuração recomendada. O RaidProtect cria o canal de logs automaticamente e aplica as mudanças após um resumo.
3. **Ajuste o [anti-spam](./features/anti-spam)**: suas sanções são personalizadas por tipo de spam.
4. **Ajuste a qualquer momento com [`/settings`](#settings).**

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

## Qual configuração para o seu servidor? {#quelle-config}

A configuração recomendada do `/setup` já orienta você nessas escolhas. Se você está começando do zero, ou se está preparando a sua instalação com uma IA, identifique o que corresponde ao seu servidor: cada necessidade aponta para a funcionalidade que a resolve.

- **Raids, ondas de contas que chegam de uma vez**: o [modo raid](./features/raid-mode) fecha as entradas e bloqueia os canais durante o ataque.
- **Spam, publicidade, links de golpe**: o [anti-spam](./features/anti-spam) sanciona automaticamente, e o [HoneyPot](./features/honeypot) captura as contas de spam.
- **Bots que se inscrevem em massa**: o [captcha](./features/captcha) faz cada novo membro provar que é humano.
- **Golpes em imagem** (falsos giveaways, phishing): o [ScamLens](./features/scam-images) os detecta e os remove.
- **Risco de nuke ou contas da equipe hackeadas**: aplique o [menor privilégio](/pt/learn/least-privilege) e o [Authentication Manager](./features/authentication-manager).
- **Uma comunidade que pode ajudar você a moderar**: ative as [denúncias](./features/reports).

Em seguida, ajuste as [sanções](./features/sanctions) (expulsão, timeout, banimento, jail) ao seu servidor.

:::info Um problema de configuração?
Se você encontrar um problema, consulte a seção [Anomalias](./guides/malfunctions) ou junte-se ao nosso [servidor de suporte](https://raidprotect.bot/discord) para obter ajuda.
:::
