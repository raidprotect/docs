---
title: Bloqueio de canais
description: "O comando /lock do RaidProtect bloqueia um canal em um instante para impedir o envio de mensagens, temporariamente ou até você desbloquear."
---

import ChannelLockMockup from '@site/src/components/DiscordMessage/mockups/channel-lock';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

{/* <ChannelLockMockup /> : masquée pour le moment */}

Às vezes, é necessário bloquear temporariamente um canal para impedir que os usuários enviem mensagens nele. Graças ao comando de bloqueio, isso se torna muito fácil!

## 🔒 Bloquear um canal {#lock}

Use o comando: ```/lock [#channel] [duration] [reason] [--silent]```

Este comando remove do cargo **@everyone** as permissões de enviar mensagens e de enviar mensagens em threads, no canal visado, impedindo assim que todos os usuários publiquem nele.

- Substitua `[#channel]` pela menção ou pelo [ID](../guides/id.mdx) do canal a bloquear. Sem canal, bloqueamos aquele em que você executa o comando. Os canais de texto, de anúncios, de voz, fóruns, de mídia, de palco e as categorias são aceitos; as threads não.
- Substitua `[reason]` para indicar o motivo do bloqueio do canal (por exemplo, *limpeza do chat*, *anúncio importante*, etc.).
- Adicione `--silent` para não anunciar nada no canal: só você recebe a confirmação.

:::info
Um mesmo canal só pode ser bloqueado uma vez a cada 10 minutos.
:::

### Bloquear uma categoria {#lock-category}

Bloquear uma categoria também bloqueia todos os seus canais visíveis (exceto threads) de uma só vez, e `/unlock` na categoria os desbloqueia juntos. Um canal já fechado para escrita (regras, anúncios) é deixado como está, tanto no bloqueio quanto no desbloqueio. Quando um bloqueio temporário de categoria expira, uma única linha de log indica a categoria e o número de canais desbloqueados.

### Bloqueio temporário {#lock-duration}

O parâmetro `[duration]` permite **desbloquear automaticamente o canal** após a duração indicada (por exemplo, `15m`, `1h`, `2d`). Útil para uma pausa rápida sem precisar se lembrar de desbloquear o canal manualmente. A duração é limitada à duração máxima de uma sanção.

## 🔓 Desbloquear um canal {#unlock}

Use o comando: ```/unlock [#channel] [reason] [--silent]```

Este comando restaura para o cargo **@everyone** as permissões de enviar mensagens tais como eram antes do bloqueio, permitindo que os usuários voltem a publicar. Substitua `[reason]` para indicar o motivo do desbloqueio do canal (por exemplo, *discussão reaberta*, *anúncio finalizado*, etc.). Com `--silent`, nada é anunciado no canal.

:::warning
Para que o bloqueio funcione corretamente, nenhum cargo aberto a todos deve ter permissão explícita para escrever nesse canal. Caso contrário, os membros com esses cargos ainda poderão conversar. As permissões definidas para os cargos da sua equipe, por outro lado, são úteis: elas garantem que a equipe continue podendo falar durante um `/lock`, e a [auditoria](./audit.md) não as sinaliza mais como redundantes.
:::
:::info
Os comandos `lock` e `unlock` são [utilizáveis por prefixo](../guides/prefix.md). Eles exigem a permissão “**Gerenciar mensagens**”. O RaidProtect precisa das permissões “**Gerenciar canais**” e “**Gerenciar cargos**” para modificar as permissões do canal.
:::

## ✏️ Configuração do cadeado {#config}

Você pode escolher se os canais bloqueados são renomeados com um cadeado: `/lock` renomeia então o canal para `🔒-nome-do-canal`, e `/unlock` remove o prefixo. Assim, o estado do canal é visto diretamente na lista de canais. Essa opção está **desativada por padrão**.

Para ativar ou desativar o cadeado:
1. Use o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Utilitários**”.
3. Clique em “**Ativar**” (ou “**Desativar**”) ao lado de “**Bloqueio de canal**”. O botão funciona como um interruptor, um simples clique é suficiente.

<Settings start="home:utilities" />

:::info
A renomeação exige a permissão “**Gerenciar canais**”.
:::

## Perguntas frequentes {#faq}

### É possível bloquear um canal diferente daquele em que estou?

Sim, indique o canal como primeiro argumento: `/lock #geral 30m Raid em andamento`.

### Por que alguns membros ainda podem escrever em um canal bloqueado?

O bloqueio só retira a palavra do cargo @everyone. Um cargo que tenha permissão explícita para escrever nesse canal a mantém.

### Como adicionar um cadeado ao nome dos canais bloqueados?

Em `/settings`, aba Utilitários, ative “Bloqueio de canal”. A opção está desativada por padrão.
