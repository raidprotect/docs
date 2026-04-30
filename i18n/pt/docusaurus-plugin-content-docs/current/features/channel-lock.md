---
title: Bloqueio de Canal
---

Por vezes, é necessário bloquear temporariamente um canal para impedir os utilizadores de enviar mensagens. Graças ao comando de bloqueio, isto torna-se muito simples!

## 🔒 Bloquear um canal {#lock}

Utilize o comando: ```/lock [duration] [reason]```

Este comando remove a permissão de enviar mensagens do cargo **@everyone** no canal, impedindo assim todos os utilizadores de publicar. Substitua **[reason]** para indicar o motivo do bloqueio do canal (por exemplo, *limpeza do chat*, *anúncio importante*, etc.).

### Bloqueio temporário {#lock-duration}

O parâmetro `[duration]` permite **desbloquear automaticamente o canal** ao fim da duração indicada (por ex. `15m`, `1h`, `2d`). Útil para uma pausa rápida sem ter de se lembrar de desbloquear o canal manualmente.

## 🔓 Desbloquear um canal {#unlock}

Utilize o comando: ```/unlock [reason]```

Este comando restaura as permissões de envio de mensagens para o estado anterior ao bloqueio para o cargo **@everyone** no canal, permitindo que os utilizadores voltem a publicar. Substitua **[reason]** para indicar o motivo do desbloqueio do canal (por exemplo, *discussão reaberta*, *anúncio terminado*, etc.).

:::warning
Para que o comando de bloqueio funcione corretamente, deve certificar-se de que nenhum cargo tem permissão explícita para falar nesse canal. Caso contrário, os membros com esses cargos continuarão a poder conversar.
:::
:::info
Os comandos `lock` e `unlock` são [utilizáveis por prefixo](../guides/prefix.md).
:::

## ✏️ Configuração do ícone de cadeado {#config}

Por defeito, esta funcionalidade está desativada. No entanto, tem a opção de escolher se os canais bloqueados devem ser renomeados com um emoji de cadeado (🔒) adicionado antes do seu nome.

Para ativar/desativar o ícone de cadeado antes dos nomes dos canais bloqueados:
1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botão "**Cadeado nos canais bloqueados**". Este botão funciona como interruptor; um simples clique é suficiente para ativar ou desativar a opção.
