---
title: Bloqueio de Canais
---

Por vezes e necessario bloquear temporariamente um canal para impedir os utilizadores de enviar mensagens. Com o comando de bloqueio, isto torna-se muito simples!

## 🔒 Bloquear um canal {#lock}

Utilize o comando: ```/lock [reason]```

Este comando remove a permissao de enviar mensagens para o cargo **@everyone** no canal, impedindo todos os utilizadores de publicar mensagens. Substitua **[reason]** para indicar o motivo pelo qual o canal esta bloqueado (ex.: *limpeza do chat*, *anuncio importante*, etc.).

## 🔓 Desbloquear um canal {#unlock}

Utilize o comando: ```/unlock [reason]```

Este comando restaura as permissoes de envio de mensagens ao estado anterior ao bloqueio para o cargo **@everyone** no canal, permitindo que os utilizadores publiquem novamente. Substitua **[reason]** para indicar o motivo pelo qual o canal e desbloqueado (ex.: *discussao reaberta*, *anuncio concluido*, etc.).

:::warning
Para que o comando de bloqueio funcione corretamente, deve certificar-se de que nenhum cargo tem permissao explicita para falar nesse canal. Caso contrario, os membros com esses cargos continuarao a poder conversar.
:::
:::info
Os comandos `lock` e `unlock` sao [utilizaveis por prefixo](../guides/prefix.md).
:::

## ✏️ Configurar o Icone de Bloqueio {#config}

Por defeito, esta funcionalidade esta desativada. No entanto, pode escolher se os canais bloqueados devem ser renomeados com um emoji de cadeado (🔒) adicionado antes do seu nome.

Para ativar/desativar o icone de bloqueio antes dos nomes dos canais bloqueados:
1. Utilize o [comando `/settings`](../setup.md#settings).
2. Clique no botao **Lock Icon on Locked Channels**. Este botao funciona como um interruptor; um simples clique e suficiente para ativar ou desativar a opcao.
