---
title: Bloqueio de canais
---

Por vezes e necessario bloquear temporariamente um canal para impedir os utilizadores de enviar mensagens. Com o comando lock, isto torna-se muito facil!

## 🔒 Bloquear um canal {#lock}

Utilize o comando: ```/lock```

Isto ira remover a permissao de falar do cargo **@everyone** no canal, impedindo todos os utilizadores de publicar nesse canal.

## 🔓 Desbloquear um canal {#unlock}

Utilize o comando: ```/unlock```

Isto ira restaurar a permissao de falar do cargo **@everyone** no canal, permitindo a todos os utilizadores publicar nesse canal.

:::warning
Para que o comando lock funcione corretamente, deve certificar-se de que nenhum cargo tem permissao explicita para falar nesse canal. Caso contrario, os membros com esses cargos continuarao a poder conversar.
:::
:::info
Os comandos `lock` e `unlock` sao [utilizaveis por prefixo](../guides/prefix.md).
:::

## ✏️ Configurar o icone de bloqueio {#config}

Por defeito, esta funcionalidade esta desativada. No entanto, pode escolher se os canais bloqueados devem ser renomeados com um emoji de cadeado (🔒) adicionado antes do seu nome.

Para ativar/desativar o icone de bloqueio antes dos nomes dos canais bloqueados:
1. Utilize o [comando `/settings`](../setup.md#settings).
2. Clique no botao **Icone de bloqueio em canais bloqueados**. Este botao funciona como um interruptor; um simples clique e suficiente para ativar ou desativar a opcao.
