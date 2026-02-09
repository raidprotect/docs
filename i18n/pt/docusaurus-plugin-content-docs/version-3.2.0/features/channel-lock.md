---
title: Bloqueio de canais
---

Por vezes e necessario bloquear temporariamente um canal para impedir que os utilizadores enviem mensagens. Com o comando lock, isto torna-se muito facil!

## 🔒 Bloquear um canal {#lock}

Usa o comando: ```/lock```

Isto removera a permissao de falar do cargo **@everyone** no canal, impedindo que todos os utilizadores publiquem nesse canal.

## 🔓 Desbloquear um canal {#unlock}

Usa o comando: ```/unlock```

Isto restabelecera a permissao de falar do cargo **@everyone** no canal, permitindo que todos os utilizadores publiquem nesse canal.

:::warning
Para que o comando lock funcione corretamente, deves garantir que nenhum cargo tenha permissao explicita para falar nesse canal. Caso contrario, os membros com esses cargos poderao continuar a conversar.
:::
:::info
Os comandos `lock` e `unlock` sao [utilizaveis com prefixo](../guides/prefix.md).
:::

## ✏️ Configurar o icone de bloqueio {#config}

Por predefinicao, esta funcionalidade esta desativada. No entanto, podes escolher se os canais bloqueados devem ser renomeados com um emoji de cadeado (🔒) adicionado antes do seu nome.

Para ativar/desativar o icone de bloqueio antes dos nomes dos canais bloqueados:
1. Usa o [comando `/settings`](../setup.md#settings).
2. Clica no botao **Lock Icon on Locked Channels**. Este botao funciona como um interruptor; um simples clique e suficiente para ativar ou desativar a opcao.
