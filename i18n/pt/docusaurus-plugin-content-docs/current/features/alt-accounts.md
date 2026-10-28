---
title: Contas duplicadas
description: "As contas duplicadas do RaidProtect vinculam as contas de uma mesma pessoa no seu servidor Discord: banir uma bane as outras, sem possibilidade de burlar a sanção."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

As **contas duplicadas** permitem que sua equipe declare que várias contas do Discord pertencem a uma mesma pessoa. As [sanções](./sanctions.mdx) de uma se estendem então às outras: um membro banido não volta mais com uma segunda conta para burlar a sanção.

:::info Experimentação: Identity Update
As contas duplicadas fazem parte da **Identity Update**, prevista para a versão 3.7.0. Até o lançamento, elas estão em experimentação, em beta público para os servidores [Premium](/pt/premium).
:::

## ❓ Como funciona? {#working}

- **Um grupo por pessoa**: um grupo reúne as contas que sua equipe considera como uma mesma pessoa. Os grupos são próprios do seu servidor: nada é compartilhado com outros servidores.
- **Sanções compartilhadas** ([Premium](/pt/premium)): o banimento, a expulsão, o mute, o jail e o timeout se estendem às outras contas do grupo, de acordo com o [modo](#modes) que você escolher para cada sanção. A sanção continua no nome da conta visada, as outras recebem o status dela. Ela nunca se estende às contas que moderam o servidor (administração, gerenciamento do servidor, banimento, expulsão ou castigo de membros), ao dono nem aos bots. Sem Premium, as contas são vinculadas e consultadas, mas nenhuma sanção se estende: o log da sanção cita então as outras contas do membro.
- **Remoção em comum**: remover a sanção de uma das contas, qualquer que seja, a remove para todas, com ou sem Premium.
- **Busca agrupada**: [buscar as sanções](./sanctions.mdx#search) de uma conta também mostra as das outras contas do grupo.
- **AutoMod do Discord**: os timeouts e mutes aplicados pelo AutoMod do Discord também se estendem às contas vinculadas.
- **Detectadas pelo captcha**: a [Activity do captcha](./captcha.md#activity-alts) pode vincular por conta própria duas contas que tem certeza de serem a mesma pessoa, ou propor o vínculo à sua equipe.
- **Logs**: os vínculos, as remoções e as mudanças de conta principal são registrados nos [logs de moderação](./moderation.mdx#logs). O log de uma sanção cita as contas vinculadas com o nome de usuário delas e, no formato embed, traz um botão “**Contas vinculadas**” que abre o painel `/alt` do membro sancionado.

**Limites:** nenhum no número de contas por grupo nem no número de grupos. Uma sanção se estende a **10 contas vinculadas** de uma vez: as seguintes são sancionadas na próxima mensagem ou na chegada, e o botão abaixo da sanção as sanciona na hora.

## 🔗 Vincular contas com /alt {#alt}

Use o comando: ```/alt [membro] [outra]```

- Sem opção: exibe a lista dos grupos de contas vinculadas do servidor. O botão “**Vincular contas**” vincula ali dois membros do servidor, ou duas contas ausentes por meio de seus IDs.
- Com `[membro]`: exibe o grupo dessa conta, ou essa conta sozinha se ela não estiver vinculada a nenhuma outra. Cada conta aparece ali com seu estado (banida do servidor, no servidor, fora do servidor, em quarentena), com a conta principal no topo.
- Com `[membro]` e `[outra]`: vincula diretamente as duas contas, declaradas como a mesma pessoa.

Se uma das contas do grupo já estiver banida ([Premium](/pt/premium)), as contas vinculadas compartilham um mesmo banimento: o RaidProtect propõe “**Banir também**” as outras contas, “**Remover o banimento**” da conta banida para todas, ou decidir “**Mais tarde**”.

Substitua `[membro]` e `[outra]` pela menção ou pelo [ID](../guides/id.mdx) das contas desejadas. Os bots não podem ser vinculados.

A partir do painel de um grupo:

- “**Vincular um membro**” adiciona uma conta ao grupo: um membro do servidor, ou o ID do Discord de uma conta ausente do servidor.
- O seletor “**Editar uma conta do grupo**” abre uma janela para torná-la a “**Conta principal do grupo**” ou “**Remover esta conta do grupo**”. Uma conta removida deixa de ser tratada como a mesma pessoa, mas se tiver sido banida com o grupo, continua banida.

Você também encontra as contas vinculadas de um membro na [visão de moderação `/modview`](./moderation.mdx#modview), com o botão “**Gerenciar**”.

:::info
O comando `/alt` e seus botões exigem a permissão **Banir membros**.
:::

## 🛠️ Configuração das contas duplicadas {#config}

1. Use o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Moderação**”.
3. Clique em “**Configurar**” ao lado de “**Contas duplicadas**”.

<Settings start="alts" />

### Sanções das contas vinculadas <span className="badge-premium">Premium</span> {#modes}

Para cada sanção, escolha como ela se estende ao grupo:

1. Na tela Contas duplicadas, clique em “**Editar**” ao lado de “**Sanções das contas vinculadas**”.
2. Na janela, escolha um modo para cada sanção.

O seletor “**Definir tudo como…**” da tela aplica o mesmo modo a todas as sanções de uma só vez.

<SettingsModal name="altsModes" />

| Modo | Efeito | Sanções envolvidas |
|---|---|---|
| “**Imediato**” *(padrão)* | Banimento: todas as contas vinculadas são banidas imediatamente, presentes ou não. Expulsão: as contas vinculadas presentes no servidor também são expulsas. Mute, jail e timeout: as contas presentes são sancionadas imediatamente, as outras na chegada. | Todas |
| “**Presentes na hora, as outras na chegada**” | As contas presentes são banidas imediatamente, as contas ausentes são banidas se entrarem no servidor durante o ban. | Banimento |
| “**Armadilha**” | Somente a conta visada é sancionada. Outra conta do grupo que chegue ou escreva durante a sanção é considerada uma evasão e recebe a [sanção de evasão](#evasion). | Todas, exceto a expulsão |
| “**Desativado**” | A sanção atinge apenas a conta escolhida. | Todas |

### Sanção em grupo {#group-sanction}

Quando uma sanção se estende a várias contas, ela aparece no histórico ([`/sanctions`](./sanctions.mdx#search), `/modview`) como **uma única sanção em grupo** (por exemplo “**Banimento em grupo**”), que lista as contas envolvidas (“**Contas**”) com o estado de cada uma. Cada conta mantém a sua própria linha, marcada “Faz parte da sanção em grupo”. Cancelar, excluir ou modificar (motivo, duração) a sanção em grupo age em todas as contas ao mesmo tempo. Uma conta consulta apenas a sua própria linha em `/minhas-sancoes`.

### Sanção de evasão {#evasion}

A sanção de evasão se aplica a uma conta vinculada pega no modo “**Armadilha**”: ela chega ao servidor ou escreve nele durante a sanção de seu grupo.

1. Na tela Contas duplicadas, clique em “**Editar**” ao lado de “**Sanção de evasão**”.
2. Na janela, escolha a “**Sanção**” e, se necessário, sua “**Duração**”.

<SettingsModal name="altsEvasion" />

- “**Resto da sanção**” *(padrão)*: a conta compartilha a sanção do grupo até o fim, sem sanção em seu nome.
- **Uma sanção** (Banimento, Expulsão, Mute, Jail ou Timeout): ela é aplicada em seu nome, com sua própria duração, e depois vale para todo o grupo. Um mute ou um jail volta se a conta sair do servidor e entrar de novo. Deixe a duração vazia para uma sanção definitiva (ex.: `1h`, `3d`, `2w`).

:::info
Um timeout sempre exige uma duração, de no máximo 28 dias. O mute e o jail exigem que seu [cargo](./sanctions.mdx#config) esteja configurado.
:::

### Uma conta por pessoa {#single-account}

Com essa configuração, gratuita como a detecção pelo captcha, apenas a **conta principal** de cada grupo circula no servidor. As outras contas são colocadas em **quarentena** com o [cargo de jail](./sanctions.mdx#jail) (sanção “**Quarentena**” no histórico). Elas saem dela por conta própria se se tornarem a conta principal ou se forem removidas do grupo.

1. Use o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Moderação**”.
3. Clique em “**Configurar**” ao lado de “**Contas duplicadas**”.
4. Clique em “**Ativar**” ao lado de “**Uma conta por pessoa**”.

:::info
Essa configuração exige um [cargo Jail](./sanctions.mdx#jail). Se não houver, uma janela propõe “**Ativar e configurar o jail**”: a configuração é ativada, e as contas secundárias são colocadas em quarentena assim que o cargo existir.
:::

Para mudar a conta principal de um grupo, use `/alt` com uma das contas e depois o seletor “**Editar uma conta do grupo**”.

## Perguntas frequentes {#faq}

### As contas duplicadas são compartilhadas entre servidores?

Não. Os grupos são próprios do seu servidor e nada é compartilhado com outros servidores.

### O que acontece quando eu removo o banimento de uma das contas?

Remover a sanção de uma das contas a remove para todas as contas do grupo.

### Posso vincular uma conta que não está no meu servidor?

Sim. No painel `/alt`, clique em “**Vincular um membro**” e informe o ID do Discord dela.

### Quem pode usar /alt?

Os membros que têm a permissão **Banir membros**, em um servidor [Premium](/pt/premium) enquanto a Identity Update estiver em experimentação.
