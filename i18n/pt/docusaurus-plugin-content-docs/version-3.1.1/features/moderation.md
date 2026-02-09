---
title: Moderacao
---

Para facilitar o trabalho dos teus moderadores, o RaidProtect integra comandos de moderacao muito uteis que te permitem interagir diretamente com as funcionalidades nativas do Discord, como **banir** e **expulsar** utilizadores.

Alem destas acoes, o RaidProtect envia mensagens diretas ao utilizador sancionado para explicar o motivo da sua sancao, e isto tambem fica registado nos registos do servidor para tua referencia.

:::info
Os comandos de moderacao sao [utilizaveis com prefixo](../guides/prefix.md).
:::

## 🔨 Banir um Utilizador {#ban}

Usa o comando: ```/ban [@user] [reason]```

Substitui `[@user]` pela mencao ou ID desejado e `[reason]` pelo motivo da sancao.

:::tip
Podes banir um utilizador usando o seu [ID do Discord](https://dfr.gg/wiki/interface/mode-developpeur), mesmo que nao esteja atualmente online ou presente no teu servidor.
:::

## 👢 Expulsar um Utilizador {#kick}

Usa o comando: ```/kick [@user] [reason]```

Substitui `[@user]` pela mencao ou ID desejado e `[reason]` pelo motivo da sancao.

## ⏳ Silenciar um Utilizador {#timeout}

Usa o comando: ```/timeout [@user] [duration] [reason]```

Substitui `[@user]` pela mencao ou ID desejado, `[duration]` pela duracao do silenciamento, ate um maximo de 28 dias (ex. `10m`, `1h`, `1d`), e `[reason]` pelo motivo da sancao.
