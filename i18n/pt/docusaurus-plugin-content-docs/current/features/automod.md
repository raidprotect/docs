---
title: Automod
description: "O Automod do RaidProtect remove automaticamente as imagens de golpe e as referências a outros servidores Discord: convites, mensagens encaminhadas, links de canal e tags de servidor."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

O **Automod** do RaidProtect reúne os filtros que removem automaticamente um conteúdo indesejado assim que ele é postado. Cada filtro tem sua própria sanção para o autor da mensagem.

Para abri-lo:

1. Use o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Proteção**”.
3. Clique em “**Configurar**” ao lado de “**Automod**”.

<Settings start="automod" />

## 🖼️ Imagens de golpe {#images}

O filtro **Imagens** exclui as imagens de golpe conhecidas (golpes de cripto, falsos giveaways, falsas promoções de cassinos) e sanciona seu autor. Ele está **ativo por padrão**, sem nada a configurar.

Todos os detalhes, a sanção e o catálogo de imagens estão na página [Imagens de golpe](./scam-images.md).

## 🔗 Outros servidores <span className="badge-experiment">Experimentação</span> {#servers}

O filtro **Outros servidores** controla o que direciona para outros servidores Discord: os **convites**, as **mensagens encaminhadas** e os **links de canal**, bem como as **tags de servidor** exibidas pelos seus membros. Ele bloqueia a divulgação não autorizada e os servidores concorrentes ou maliciosos, sem afetar seus parceiros.

:::info Experimentação: Shield Update
O filtro Outros servidores faz parte da **Shield Update**, prevista para a versão 3.6.0. Até o lançamento, ele está em experimentação, em beta público para os servidores [Premium](/pt/premium).
:::

### Como funciona? {#servers-working}

Três comportamentos são configurados separadamente, cada um em um destes modos:

- “**Desativado**”: nada é filtrado.
- “**Lista de bloqueio**”: os servidores da lista são recusados, os outros passam.
- “**Lista de permissão**”: somente os servidores da lista passam, todos os outros são recusados.

| Comportamento | O que acontece se for recusado |
|---|---|
| **Convite** | A mensagem que contém o convite é excluída. Os links `ptb.` e `canary.` também contam, e os convites escondidos em um embed, um componente ou uma mensagem encaminhada são lidos, assim como as mensagens editadas depois. |
| **Mensagem encaminhada ou link de canal** | A mensagem encaminhada desse servidor, ou que contém um link para um de seus canais, é excluída. |
| **Tag de servidor exibida** | O membro é colocado em **quarentena** com o [cargo Jail](./sanctions.mdx#jail). Ela é removida assim que ele retira a tag. |

Seu próprio servidor sempre passa, por qualquer um dos seus convites, e sua equipe (permissões **Gerenciar servidor** ou **Gerenciar mensagens**) nunca é visada.

### Configuração {#servers-config}

1. No Automod, clique em “**Configurar**” ao lado de “**Outros servidores**”.
2. Ative o filtro com o interruptor no canto superior direito e depois escolha um modo para cada comportamento.

<Settings start="serverRefs" />

#### Convites de amizade e de grupo <span className="badge-premium">Premium</span> {#servers-private}

Um convite de amizade ou de grupo privado não leva a nenhum servidor. No modo “**Convite**” (assim que não estiver em “**Desativado**”), o seletor “**Convites de amizade e de grupo**” define o destino deles à parte:

- “**Seguir a lista**” *(padrão)*: eles passam com a lista de bloqueio e são excluídos com a lista de permissão.
- “**Sempre permitidos**”: aceitos, qualquer que seja a lista.
- “**Sempre removidos**”: excluídos, qualquer que seja a lista.

Sem Premium, eles sempre seguem a lista.

### Sanção {#servers-sanction}

Cada mensagem recusada é excluída. Em “**Sanção das mensagens apagadas**”, escolha também uma sanção para o autor, ou “**Apenas apagar a mensagem**”. Para um timeout, um mute, um jail ou um banimento, escolha também sua duração.

A sanção se aplica no máximo uma vez por minuto e por membro: um membro que cola vários convites em sequência é sancionado apenas uma vez.

### Listas de servidores {#servers-lists}

1. Clique em “**Adicionar um servidor**”.
2. Cole um convite do servidor ainda válido (por ex. `discord.gg/exemplo`): o nome e o ID dele são lidos. Um ID sozinho não é mais aceito.
3. Escolha a lista: de bloqueio ou de permissão.

Um servidor já presente simplesmente muda de lista. “**Remover**” retira um ou mais servidores das listas.

**Limites:** 25 servidores no total nas duas listas.

:::tip
Para permitir apenas os convites dos seus parceiros, defina “**Convite**” como “**Lista de permissão**” e adicione seus parceiros à lista de permissão. Uma lista de permissão vazia recusa todos os convites para outros servidores.
:::

### Logs {#servers-logs}

Cada sanção e cada quarentena são registradas nos seus [logs de moderação](./moderation.mdx#logs), com o servidor e o canal envolvidos. Uma mensagem excluída sem sanção (“**Apenas apagar a mensagem**”) também é registrada. As sanções aparecem no [histórico de sanções](./sanctions.mdx), com os motivos “Convite para um servidor recusado”, “Convite de amizade ou de grupo recusado” (Premium), “Mensagem encaminhada ou link de canal de um servidor recusado” ou “Tag de um servidor recusada”.

## Perguntas frequentes {#faq}

### Meus parceiros ainda podem compartilhar seu convite?

Sim. Adicione-os à lista de permissão do filtro Outros servidores, ou deixe-os fora da lista de bloqueio.

### O que acontece quando um membro retira a tag recusada?

Sua quarentena é removida automaticamente.

### Os moderadores são filtrados?

Não. Os membros que têm a permissão Gerenciar servidor ou Gerenciar mensagens nunca são visados pelo filtro Outros servidores.
