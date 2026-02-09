---
title: Anti-raid
---

## Modo Raid

O modo raid e uma funcionalidade de emergencia concebida para bloquear instantaneamente todos os novos utilizadores que tentam entrar no teu servidor, superando a limitacao nativa do Discord que so permite este bloqueio por 24 horas atraves da acao de seguranca "Pausar Convites".

### ❓ Como funciona o Modo Raid {#working}

O RaidProtect ativa automaticamente o modo raid se um grande numero de utilizadores entrar no teu servidor num curto espaco de tempo. Por predefinicao, o modo raid ativa-se se mais de 10 utilizadores entrarem no teu servidor em menos de 10 segundos. Quando o modo raid esta ativado, nenhum utilizador pode entrar no servidor. Sao bloqueados ao nivel do convite.

:::warning
As funcionalidades de Comunidade do Discord sao essenciais para que o Modo Raid funcione corretamente. [Segue o nosso guia para garantir que a Comunidade esta ativada no teu servidor.](../guides/community.md)
:::

#### Ativacao {#enable}

- Para ativar manualmente este modo, um utilizador com permissao de expulsao deve executar o comando `/raidmode`.
- Uma mensagem sera automaticamente publicada no canal de registos para assinalar a ativacao.

#### Desativacao {#disable}

O modo raid nao se desativa automaticamente. Lembra-te de o desativar com o mesmo comando assim que a ameaca tiver passado. 😇

:::info
O comando `raidmode` tambem esta [disponivel com prefixo](../guides/prefix.md).
:::

### 🚨 Configuracao do Modo Raid Automatico {#config}

Se o teu servidor recebe frequentemente muitos novos membros ao mesmo tempo, e prudente ajustar este limiar para evitar falsos positivos.

![Captura de ecra da configuracao do modo raid automatico](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-raid-mode.webp)

:::note
Recomendamos definir um valor entre 10 e 20 membros em 10 segundos para um desempenho otimo do sistema.
:::

1. Executa o [comando `/settings`](../setup.md#settings).
2. Clica no botao "**Auto RaidMode**".
3. Seleciona o numero de membros permitidos para entrar em 10 segundos.

Podes deixar no valor predefinido (10) ou ajusta-lo ao valor desejado clicando no botao "**Custom Value**".

:::warning
Se o modo raid for acionado automaticamente, nao te esquecas de o desativar assim que a ameaca tiver passado. Lembra-te, nao se desativa sozinho. 😖
:::


## Idade minima de conta {#minage}

Para melhorar a seguranca, podes exigir uma idade minima de conta Discord para os novos membros.

1. Executa o [comando `/settings`](../setup.md#settings).
2. Clica no botao "**Minimum Age**".
3. Seleciona o valor desejado no menu suspenso ou escolhe um valor personalizado em formato de data (m/h/d/y).

### 🎂 Excecao de idade minima de conta {#bypass-minage}

Usa o comando: ```/bypass minage [user]```

Substitui `[user]` pelo ID desejado; tera 10 minutos para entrar no servidor sem ser expulso por nao cumprir o requisito de idade. Tambem podes usar o comando sem especificar um utilizador para ver a lista atual de utilizadores com excecao.
