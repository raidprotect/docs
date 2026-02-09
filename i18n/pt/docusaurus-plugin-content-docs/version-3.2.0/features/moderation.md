---
title: Moderacao
---

Para facilitar o trabalho dos teus moderadores, o RaidProtect integra comandos de moderacao muito uteis que te permitem interagir diretamente com as funcionalidades nativas do Discord, como **banir** e **expulsar** utilizadores.

Para alem destas acoes, o RaidProtect envia mensagens diretas ao utilizador sancionado para explicar o motivo da sua sancao, e isto tambem fica registado nos registos do servidor para tua referencia.

:::info
Os comandos de moderacao sao [utilizaveis com prefixo](../guides/prefix.md).
:::

## 🔨 Banir um utilizador {#ban}

Usa o comando: ```/ban [@user] [reason]```

Substitui `[@user]` pela mencao ou ID desejada e `[reason]` pelo motivo da sancao.

:::tip
Podes banir um utilizador usando o seu [ID do Discord](https://dfr.gg/wiki/interface/mode-developpeur), mesmo que nao esteja online ou presente no teu servidor.
:::

## 👢 Expulsar um utilizador {#kick}

Usa o comando: ```/kick [@user] [reason]```

Substitui `[@user]` pela mencao ou ID desejada e `[reason]` pelo motivo da sancao.

## ⏳ Silenciar um utilizador {#timeout}

Usa o comando: ```/timeout [@user] [duration] [reason]```

Substitui `[@user]` pela mencao ou ID desejada, `[duration]` pela duracao do silenciamento, ate um maximo de 28 dias (por exemplo, `10m`, `1h`, `1d`), e `[reason]` pelo motivo da sancao.

## 🧹 Apagar um grupo de mensagens {#clear}

O comando `/clear` permite-te eliminar rapidamente uma certa quantidade de mensagens num canal de texto. Podes especificar um utilizador para eliminar apenas as suas mensagens.

Usa o comando: ```/clear [number] (@user)```

Substitui `[number]` pelo numero de mensagens que desejas eliminar (maximo 100). Adiciona `(@user)` usando a mencao ou ID para visar apenas as suas mensagens no canal.
