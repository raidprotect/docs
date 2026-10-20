---
title: Anti-raid
description: "O modo raid do RaidProtect bloqueia instantaneamente as entradas em massa no seu servidor Discord, ativado automaticamente ao detectar uma onda suspeita."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

import RaidModeMockup from '@site/src/components/DiscordMessage/mockups/raid-mode';

{/* <RaidModeMockup /> : obsolète en 3.5.0 (montre l'expulsion comme seule action du mode raid) */}

## Modo raid {#raid-mode}

O **modo raid** do RaidProtect é uma funcionalidade de emergência que trata os novos usuários que tentam entrar no seu servidor durante uma [onda de entradas suspeita](/pt/learn/discord-raid), por uma duração máxima de 24 horas. O nosso bot de proteção o ativa sozinho assim que detecta uma onda, e você também pode acioná-lo manualmente. Você escolhe o que fazemos com os recém-chegados: bloquear os convites, expulsá-los ou enviá-los ao [captcha](./captcha.md). Para fechar o servidor de forma duradoura a novos membros, use o [comando `/joinlock`](./join-lock.mdx).

### ❓ Como funciona o modo raid? {#working}

- **Detecção:** o **Auto RaidMode** ativa o modo raid quando muitos usuários entram no seu servidor ao mesmo tempo. Por padrão, ele é acionado com 10 entradas em 10 segundos.
- **Reação:** durante o modo raid, os recém-chegados são tratados de acordo com a [ação durante o raid](#action) que você escolheu. As contas da onda que acionou o modo também são tratadas: expulsas, ou reenviadas para trás do captcha com as ações de captcha.
- **Fim:** o modo raid se desliga sozinho após a [duração configurada](#duration), 5 minutos por padrão.
- **Logs:** uma mensagem é publicada no canal de logs a cada ativação e desativação.
- **Boas-vindas:** a [mensagem de boas-vindas](./onboarding.md#welcome-message) fica em silêncio durante a onda, para não inundar o canal de boas-vindas.

:::warning
Com a ação “**Bloquear os convites**” (padrão), as funcionalidades de comunidade do Discord são indispensáveis para o modo raid. [Siga o nosso guia para verificar a ativação da comunidade no seu servidor.](../guides/community.md) As outras ações funcionam sem a comunidade.
:::

#### Ativação {#enable}

Um usuário com a permissão de expulsão pode ativar o modo raid manualmente.

Use o comando: ```/raidmode [status] [duration]```

- Sem opção, o comando exibe o estado do modo raid com um botão para ativá-lo ou desativá-lo.
- Substitua `[status]` por **True** para ativá-lo, **False** para desativá-lo.
- Substitua `[duration]` pela duração desejada (por exemplo `30m` ou `2h`, no máximo 24 horas). Sem duração, usamos a do Auto RaidMode.

Uma mensagem é automaticamente publicada no canal de logs para sinalizar a ativação. O modo raid manual aplica a mesma [ação](#action) que o Auto RaidMode.

#### Desativação {#disable}

O modo raid se desativa sozinho ao fim de sua duração. Você também pode pará-lo antes com o comando `/raidmode`, quando a ameaça tiver passado. 😇

:::info
O comando `raidmode` é [utilizável por prefixo](../guides/prefix.md).
:::

### 🚨 Configuração do modo raid automático {#config}

Se o seu servidor costuma receber muitos novos membros ao mesmo tempo, é recomendável modificar esse limite para evitar falsos positivos. Todas as configurações ficam na mesma tela.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Chegadas**”.
3. Clique em “**Configurar**” ao lado de “**Auto RaidMode**”.

O interruptor no canto superior direito da tela ativa ou desativa o Auto RaidMode. O RaidProtect precisa da permissão `MANAGE_GUILD`.

<Settings start="antiraid" />

#### Limite de membros {#threshold}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Chegadas**”.
3. Clique em “**Configurar**” ao lado de “**Auto RaidMode**”.
4. Em “**Número de membros / 10 segundos**”, escolha 10, 15, 20 ou 30 membros, ou um “**Valor personalizado**”.

O limite é contado em uma janela de 10 segundos. O valor padrão é de 10 membros.

:::note
Recomendamos um valor entre 10 e 20 membros em 10 segundos para uma boa eficácia do sistema.
:::

#### Duração do raidmode {#duration}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Chegadas**”.
3. Clique em “**Configurar**” ao lado de “**Auto RaidMode**”.
4. Em “**Duração**”, escolha 1, 2, 5 ou 10 minutos, ou um “**Valor personalizado**” de 10 segundos a 24 horas (por exemplo `5m 30s`).

A duração padrão é de 5 minutos.

#### Ação durante o raid {#action}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Chegadas**”.
3. Clique em “**Configurar**” ao lado de “**Auto RaidMode**”.
4. Em “**Ação durante o raid**”, escolha a ação a aplicar aos recém-chegados.

| Ação | Efeito sobre os recém-chegados | Disponibilidade |
|---|---|---|
| “**Bloquear os convites**” (padrão) | O Discord fecha os convites do servidor, ninguém novo entra. | Gratuito, comunidade necessária |
| “**Expulsar quem chegar**” | Cada recém-chegado é expulso e recebe uma mensagem privada convidando-o a voltar quando o modo raid for desativado. | [Premium](/pt/premium) |
| “**Enviar ao captcha**” | Os recém-chegados passam pelo captcha em vez de serem expulsos. | Gratuito, captcha ativo necessário |
| “**Captcha congelado durante o raid**” | Os recém-chegados esperam atrás do captcha e o passam depois da onda. | Gratuito, captcha ativo no modo Painel necessário |

:::tip
Com as ações de captcha, defina o [acionamento do captcha](./captcha.md#trigger) como **Automático**: o captcha só se impõe então durante os raids, e seus recém-chegados entram diretamente no resto do tempo.
:::

#### Modo expulsão <span className="badge-premium">Premium</span> {#kick-mode}

O antigo interruptor “**Modo expulsão**” se tornou a ação “**Expulsar quem chegar**” da [ação durante o raid](#action). Ela continua reservada aos servidores [**Premium**](/pt/premium) e funciona sem a comunidade do Discord.

#### Fechar as DMs automaticamente {#close-dm}

Você pode configurar o **Auto RaidMode** para que ele **feche automaticamente as DMs do servidor** assim que for ativado. Isso adiciona uma camada de proteção durante um raid: as contas novas deixam de poder contatar os seus membros em privado para aplicar [phishing](/pt/learn/token-grabber) ou golpes.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Chegadas**”.
3. Clique em “**Configurar**” ao lado de “**Auto RaidMode**”.
4. Clique em “**Ativar**” ao lado de “**Fechar as DM**”.

Quando o modo raid termina, as DMs retomam a sua configuração anterior.

:::info
Esta opção só se aplica com a ação “**Bloquear os convites**”, que passa pelas ações de segurança do Discord. Ela é complementar ao [Bloqueio de DMs permanente](./dm-lock.mdx): sem bloqueio permanente, as DMs só são fechadas durante um raid ativo.
:::

### 🎫 Bypass do modo raid {#bypass-raid}

Você está esperando um membro legítimo enquanto um raid está em andamento? Autorize-o a entrar apesar do modo raid:

Use o comando: ```/bypass raid [user]```

Substitua `[user]` pelo [identificador](../guides/id.mdx) desejado; ele terá 10 minutos para entrar no servidor sem ser expulso pelo modo raid. Você também pode usar o comando sem especificar um usuário para ver a lista atual de usuários com bypass (máximo de 7 usuários ao mesmo tempo).

:::warning
O bypass do modo raid só se aplica com a ação “**Expulsar quem chegar**”: um usuário bloqueado no nível do convite não pode receber bypass. Com as ações de captcha, use de preferência o [bypass do captcha](./captcha.md#bypass).
:::

## Idade mínima {#minage}

A idade mínima da conta tem sua própria seção na página [Chegadas e boas-vindas](./onboarding.md#minage): configuração da antiguidade, escolha da ação (expulsão, jail até a idade exigida, retenção na entrada) e bypass.

### 🎂 Bypass da idade mínima de conta {#bypass-minage}

Use o comando ```/bypass minage [user]```, detalhado no [bypass da idade mínima](./onboarding.md#bypass-minage).

## Perguntas frequentes {#faq}

### O modo raid é ativado automaticamente?

Sim. Por padrão, ativamos o modo raid assim que 10 usuários entram no seu servidor em 10 segundos. Esse limite é configurável nas configurações do Auto RaidMode.

### O que o modo raid faz com os recém-chegados?

Depende da ação escolhida: bloquear os convites (padrão), expulsar os recém-chegados ([Premium](/pt/premium)), enviá-los ao captcha, ou fazê-los esperar atrás de um captcha congelado até o fim da onda.

### Como ativar o modo raid manualmente?

Um usuário com a permissão de expulsão executa o comando `/raidmode`. Uma mensagem é então publicada no canal de logs para sinalizar a ativação, e a ação escolhida se aplica aos recém-chegados.

### O modo raid se desativa sozinho?

Sim. Ele se desliga após a duração escolhida em `/raidmode` ou, na falta dela, após a duração do Auto RaidMode (5 minutos por padrão, 24 horas no máximo). Você pode pará-lo antes com o mesmo comando.

### É preciso ativar a comunidade do Discord?

Somente para a ação “**Bloquear os convites**”, que usa o fechamento dos convites do Discord. As ações “**Expulsar quem chegar**”, “**Enviar ao captcha**” e “**Captcha congelado durante o raid**” funcionam sem ela.

### É possível deixar um membro legítimo entrar durante um raid?

Sim, com o comando `/bypass raid [user]` quando a ação é “**Expulsar quem chegar**”: o membro dispõe então de 10 minutos para entrar sem ser expulso (no máximo 7 usuários com bypass ao mesmo tempo). Com as ações de captcha, use `/bypass captcha [user]`.
