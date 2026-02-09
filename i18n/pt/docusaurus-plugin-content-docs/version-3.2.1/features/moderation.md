---
title: Moderação
---

Para facilitar o trabalho dos seus moderadores, o RaidProtect integra comandos de moderação muito úteis que permitem interagir diretamente com as funcionalidades nativas do Discord, tais como **banir** e **expulsar** utilizadores.

Para além destas ações, o RaidProtect envia mensagens diretas ao utilizador sancionado para explicar o motivo da sua sanção, sendo esta também registada nos registos do servidor para sua referência.

:::info
Os comandos de moderação são [utilizáveis com prefixo](../guides/prefix.md).
:::

## 🔨 Banir um Utilizador {#ban}

Utilize o comando: ```/ban (user) [reason]```

Substitua `(user)` pela menção ou ID desejado e `[reason]` pelo motivo da sanção.

:::tip
Pode banir um utilizador utilizando o seu [ID do Discord](https://dfr.gg/wiki/interface/mode-developpeur), mesmo que não esteja atualmente online ou presente no seu servidor.
:::

### Desbanir um utilizador {#unban}

Utilize o comando: ```/unban (user) [reason]```

Substitua `(user)` pelo identificador desejado e `[reason]` pelo motivo do desbanimento.

## 👢 Expulsar um Utilizador {#kick}

Utilize o comando: ```/kick (member) [reason]```

Substitua `(member)` pela menção ou ID desejado e `[reason]` pelo motivo da sanção.

## ⏳ Aplicar Timeout a um Utilizador {#timeout}

Utilize o comando: ```/timeout (member) (duration) [reason]```

Substitua `(member)` pela menção ou ID desejado, `(duration)` pela duração do timeout, até um máximo de 28 dias (ex.: `10m`, `1h`, `1d`), e `[reason]` pelo motivo da sanção.

## 🧹 Limpar um Grupo de Mensagens {#clear}

O comando `/clear` permite-lhe eliminar rapidamente um determinado número de mensagens num canal de texto. Pode especificar um utilizador para eliminar apenas as suas mensagens.

Utilize o comando: ```/clear (number) [user]```

Substitua `(number)` pelo número de mensagens que deseja eliminar (máximo 100). Adicione `[user]` utilizando a menção ou ID para visar apenas as suas mensagens no canal.

## 🕒 Ativar o modo lento num canal {#slowmode}

O comando `/slowmode` permite-lhe ativar ou modificar o modo lento de um canal de texto, de forma a limitar a frequência com que os utilizadores podem enviar mensagens.

Utilize o comando: ```/slowmode (duration) [channel] [reason]```

- Substitua `(duration)` pelo tempo desejado entre cada mensagem (ex.: `5s`, `1m`, `10m`, `1h`).
- Adicione `[channel]` se quiser aplicar o modo lento a um canal diferente daquele onde escreve o comando.
- Adicione `[reason]` para especificar o motivo, que será registado nos registos do servidor.
