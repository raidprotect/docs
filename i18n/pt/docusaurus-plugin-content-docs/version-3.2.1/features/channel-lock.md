---
title: Bloqueio de canais
---

Por vezes é necessário bloquear temporariamente um canal para impedir os utilizadores de enviar mensagens. Com o comando lock, isto torna-se muito simples!

## 🔒 Bloquear um canal {#lock}

Utilize o comando: ```/lock [reason]```

Este comando remove a permissão de enviar mensagens para o cargo **@everyone** no canal, impedindo todos os utilizadores de publicar nele. Substitua **[reason]** para indicar o motivo do bloqueio do canal (ex.: *limpeza do chat*, *anúncio importante*, etc.).

## 🔓 Desbloquear um canal {#unlock}

Utilize o comando: ```/unlock [reason]```

Este comando restaura as permissões de envio de mensagens ao estado anterior ao bloqueio para o cargo **@everyone** no canal, permitindo que os utilizadores publiquem novamente. Substitua **[reason]** para indicar o motivo do desbloqueio do canal (ex.: *discussão reaberta*, *anúncio terminado*, etc.).

:::warning
Para que o comando lock funcione corretamente, deve garantir que nenhum cargo tem permissão explícita para falar nesse canal. Caso contrário, os membros com esses cargos continuarão a poder conversar.
:::
:::info
Os comandos `lock` e `unlock` são [utilizáveis com prefixo](../guides/prefix.md).
:::

## ✏️ Configurar o Ícone de Cadeado {#config}

Por defeito, esta funcionalidade está desativada. No entanto, pode escolher se os canais bloqueados devem ser renomeados com um emoji de cadeado (🔒) adicionado antes do seu nome.

Para ativar/desativar o ícone de cadeado antes dos nomes dos canais bloqueados:
1. Utilize o [comando `/settings`](../setup.md#settings).
2. Clique no botão **Ícone de Cadeado nos Canais Bloqueados**. Este botão funciona como um interruptor; um simples clique é suficiente para ativar ou desativar a opção.
