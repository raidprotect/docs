---
title: Bloqueio de Canal
description: "O comando /lock do RaidProtect bloqueia um canal num instante para impedir o envio de mensagens, temporariamente ou até você desbloquear."
---

import ChannelLockMockup from '@site/src/components/DiscordMessage/mockups/channel-lock';

{/* <ChannelLockMockup /> : masquée pour le moment */}

Às vezes, é necessário bloquear temporariamente um canal para impedir que os usuários enviem mensagens nele. Graças ao comando de bloqueio, isso se torna muito fácil!

## 🔒 Bloquear um canal {#lock}

Use o comando: ```/lock [duration] [reason]```

Este comando remove a permissão de enviar mensagens do cargo **@everyone** no canal, impedindo assim que todos os usuários publiquem nele. Substitua **[reason]** para indicar o motivo do bloqueio do canal (por exemplo, *limpeza do chat*, *anúncio importante*, etc.).

### Bloqueio temporário {#lock-duration}

O parâmetro `[duration]` permite **desbloquear automaticamente o canal** após a duração indicada (por exemplo, `15m`, `1h`, `2d`). Útil para uma pausa rápida sem precisar se lembrar de desbloquear o canal manualmente.

## 🔓 Desbloquear um canal {#unlock}

Use o comando: ```/unlock [reason]```

Este comando restaura as permissões de enviar mensagens para o estado anterior ao bloqueio para o cargo **@everyone** no canal, permitindo que os usuários voltem a publicar. Substitua **[reason]** para indicar o motivo do desbloqueio do canal (por exemplo, *discussão reaberta*, *anúncio finalizado*, etc.).

:::warning
Para que o comando de bloqueio funcione corretamente, você deve garantir que nenhum cargo tenha permissão explícita para falar nesse canal. Caso contrário, os membros com esses cargos ainda poderão conversar.
:::
:::info
Os comandos `lock` e `unlock` são [utilizáveis por prefixo](../guides/prefix.md).
:::

## ✏️ Configuração do cadeado {#config}

Por padrão, essa funcionalidade está desativada. No entanto, você tem a opção de escolher se os canais bloqueados devem ser renomeados com um emoji de cadeado (🔒) adicionado antes do nome.

Para ativar/desativar o cadeado antes dos nomes dos canais bloqueados:
1. Use o [comando `/settings`](../setup.md#settings).
2. Clique no botão "**Cadeado nos canais bloqueados**". Esse botão funciona como um interruptor; um simples clique é suficiente para ativar ou desativar a opção.
