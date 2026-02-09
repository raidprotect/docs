---
title: Anti-raid
---

## Modo Raid

O modo raid é uma funcionalidade de emergência concebida para bloquear instantaneamente todos os novos utilizadores que tentem entrar no seu servidor, superando a limitação nativa do Discord que apenas permite este bloqueio durante 24 horas através da ação de segurança "Pausar Convites".

### ❓ Como funciona o Modo Raid {#working}

O RaidProtect ativa automaticamente o modo raid se um grande número de utilizadores entrar no seu servidor num curto espaço de tempo. Por defeito, o modo raid ativa-se se mais de 10 utilizadores entrarem no seu servidor em menos de 10 segundos. Quando o modo raid está ativado, nenhum utilizador pode entrar no servidor. São bloqueados ao nível do convite.

:::warning
As funcionalidades de Comunidade do Discord são essenciais para o funcionamento correto do Modo Raid. [Siga o nosso guia para garantir que a Comunidade está ativada no seu servidor.](../guides/community.md)
:::

#### Ativação {#enable}

- Para ativar manualmente este modo, um utilizador com permissão de expulsão deve executar o comando `/raidmode`.
- Uma mensagem será automaticamente publicada no canal de registos para assinalar a ativação.

#### Desativação {#disable}

O modo raid não se desativa automaticamente. Lembre-se de o desligar com o mesmo comando assim que a ameaça tiver passado. 😇

:::info
O comando `raidmode` também está [disponível com prefixo](../guides/prefix.md).
:::

### 🚨 Configuração do Modo Raid Automático {#config}

Se o seu servidor recebe frequentemente muitos novos membros de uma só vez, é aconselhável ajustar este limiar para evitar falsos positivos.

![Captura de ecrã das definições do modo raid automático](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-raid-mode.webp)

:::note
Recomendamos definir um valor entre 10 e 20 membros em 10 segundos para um desempenho ótimo do sistema.
:::

1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botão "**Auto RaidMode**".
3. Selecione o número de membros autorizados a entrar num intervalo de 10 segundos.

Pode manter o valor predefinido (10) ou ajustá-lo ao valor desejado clicando no botão "**Valor Personalizado**".

:::warning
Se o modo raid for acionado automaticamente, não se esqueça de o desativar assim que a ameaça tiver passado. Lembre-se, ele não se desliga sozinho. 😖
:::


## Idade Mínima da Conta {#minage}

Para melhorar a segurança, pode exigir uma idade mínima da conta Discord para novos membros.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botão "**Idade Mínima**".
3. Selecione o valor desejado no menu suspenso ou escolha um valor personalizado no formato de data (m/h/d/y).

### 🎂 Ignorar a Idade Mínima da Conta {#bypass-minage}

Utilize o comando: ```/bypass minage [user]```

Substitua `[user]` pelo ID desejado; essa pessoa terá 10 minutos para entrar no servidor sem ser expulsa por não cumprir o requisito de idade. Pode também utilizar o comando sem especificar um utilizador para ver a lista atual de utilizadores com bypass.
