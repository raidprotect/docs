---
title: Anti-raid
description: "O modo raid do RaidProtect bloqueia instantaneamente as entradas em massa no seu servidor Discord, ativado automaticamente ao detectar uma onda suspeita."
---

import { RaidModeSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

import RaidModeMockup from '@site/src/components/DiscordMessage/mockups/raid-mode';

<RaidModeMockup />

## Modo raid {#raid-mode}

O modo raid do RaidProtect é uma funcionalidade de emergência que bloqueia instantaneamente todos os novos usuários que tentam entrar no seu servidor, por uma duração máxima de 24 horas. O nosso bot de proteção o ativa sozinho assim que detecta uma onda de entradas suspeita, e você também pode acioná-lo manualmente. Para bloquear permanentemente os novos membros, utilize o [comando `/joinlock`](./join-lock.mdx).

### ❓ Como funciona o modo raid? {#working}

O RaidProtect ativa automaticamente o modo raid se um grande número de usuários entrar no seu servidor em um curto espaço de tempo. Por padrão, o modo raid é ativado se mais de 10 usuários entrarem no seu servidor em menos de 10 segundos. Quando o modo raid está ativado, nenhum usuário consegue entrar no servidor. Eles são bloqueados no nível do convite.

:::warning
As funcionalidades de comunidade do Discord são indispensáveis para o bom funcionamento do Modo raid. [Siga o nosso guia para verificar a ativação da comunidade no seu servidor.](../guides/community.md)
:::

#### Ativação {#enable}

- Para ativar manualmente este modo, um usuário com as permissões de expulsão deve executar o comando `/raidmode`.
- Uma mensagem será automaticamente publicada no canal de logs para sinalizar a ativação.

#### Desativação {#disable}

O modo raid não se desativa automaticamente. Lembre-se de pará-lo com o mesmo comando quando a ameaça tiver passado. 😇

:::info
O comando `raidmode` é [utilizável por prefixo](../guides/prefix.md).
:::

### 🚨 Configuração do modo raid automático {#config}

Se o seu servidor costuma receber muitos novos membros ao mesmo tempo, é recomendável modificar esse limite para evitar falsos positivos.

<RaidModeSettingsMockup />

#### Limite de membros {#threshold}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botão "**Auto RaidMode**".
3. Selecione "**Número de membros**".
4. Escolha o número de membros que podem entrar em 10 segundos.

Você pode deixar o valor padrão (10) ou ajustar conforme o valor desejado clicando no botão "**Valor personalizado**".

:::note
Recomendamos inserir um valor entre 10 e 20 membros em 10 segundos para uma boa eficácia do sistema.
:::

#### Duração do raidmode {#duration}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botão "**Auto RaidMode**".
3. Selecione "**Duração**".
4. Escolha a duração do raidmode (máximo 24h).

Você pode deixar o valor padrão (5 minutos) ou ajustar conforme o valor desejado clicando no botão "**Valor personalizado**".

#### Fechar as DMs automaticamente {#close-dm}

Você pode configurar o **auto raid mode** para que ele **feche automaticamente as DMs do servidor** assim que for ativado. Isso adiciona uma camada de proteção extra durante um raid: as contas novas deixam de poder contatar os seus membros em privado para aplicar phishing ou golpes.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botão "**Auto RaidMode**".
3. Ative a opção "**Fechar as DMs**".

Quando o auto raid mode é desativado (manualmente ou automaticamente após a duração configurada), as DMs retomam a sua configuração anterior.

:::info
Esta opção é complementar ao [Fechamento permanente das DMs](./dm-lock.mdx): se você a ativar sem ter o fechamento permanente, as DMs só são fechadas durante um raid ativo.
:::

#### Modo expulsão (Premium) {#kick-mode}

Por padrão, o modo raid bloqueia os novos participantes no nível do convite. Com o **modo expulsão**, os usuários que entram durante um raid são expulsos pelo RaidProtect em vez de serem bloqueados no convite.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botão "**Auto RaidMode**".
3. Ative a opção "**Modo expulsão**".

:::info
Esta opção é reservada aos servidores [**Premium**](/pt/premium). Ela é necessária para usar o [bypass do modo raid](#bypass-raid).
:::

### 🎫 Bypass do modo raid {#bypass-raid}

Você está esperando um membro legítimo enquanto um raid está em andamento? Autorize-o a entrar apesar do modo raid:

Utilize o comando: ```/bypass raid [usuário]```

Substitua `[usuário]` pelo identificador desejado; ele terá 10 minutos para entrar no servidor sem ser expulso pelo modo raid. Você também pode usar o comando sem especificar um usuário para ver a lista atual de usuários com bypass (máximo de 7 usuários ao mesmo tempo).

:::warning
O bypass do modo raid requer o [modo expulsão](#kick-mode): um usuário bloqueado no nível do convite não pode receber bypass.
:::

## Idade Mínima {#minage}

Para reforçar a segurança, você pode exigir uma idade mínima para as contas Discord dos novos membros.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botão "**Idade Mínima**".
3. Selecione o valor desejado no menu de seleção ou escolha um valor personalizado expresso em formato de data (m/h/d/y).

### 🎂 Bypass da idade mínima de conta {#bypass-minage}

Utilize o comando: ```/bypass minage [usuário]```

Substitua `[usuário]` pelo identificador desejado; ele terá 10 minutos para entrar no servidor sem ser expulso pela idade exigida. Você também pode usar o comando sem especificar um usuário para ver a lista atual de usuários com bypass.

## Perguntas frequentes {#faq}

### O modo raid é ativado automaticamente?

Sim. Por padrão, ativamos o modo raid assim que mais de 10 usuários entram no seu servidor em menos de 10 segundos. Esse limite é configurável nos parâmetros do auto raid mode.

### Como ativar o modo raid manualmente?

Um usuário com a permissão de expulsão executa o comando `/raidmode`. Uma mensagem é então publicada no canal de logs para sinalizar a ativação, e nenhum membro consegue mais entrar no servidor.

### O modo raid se desativa sozinho?

O modo raid ativado manualmente não para automaticamente: lembre-se de desativá-lo com o mesmo comando assim que a ameaça for afastada. O auto raid mode, por sua vez, se desliga após a duração que você configurou (5 minutos por padrão, 24 horas no máximo).

### É possível deixar um membro legítimo entrar durante um raid?

Sim, com o comando `/bypass raid [usuário]`: o membro dispõe então de 10 minutos para entrar sem ser expulso (no máximo 7 usuários com bypass ao mesmo tempo). O bypass exige o modo expulsão, reservado aos servidores Premium.
