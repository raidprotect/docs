---
title: Transparência
---

import TransparencyMockup from '@site/src/components/DiscordMessage/mockups/transparency';

<TransparencyMockup />

A Transparência permite mostrar aos seus membros como o servidor é moderado. Ela se baseia em três elementos complementares: **resumos de moderação periódicos**, um **modlog público** e o **comando `/transparency`**.

## 🛠️ Configuração da Transparência {#config}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botão "**Transparência**".

O menu dá acesso aos "**Resumos periódicos**", ao "**Modlog público**" e ao botão de ativação do "**Comando transparency**".

## 📊 Resumos periódicos {#recaps}

Um resumo é um apanhado agregado das ações de moderação, publicado automaticamente em um canal de acordo com a frequência escolhida.

1. No menu Transparência, clique em "**Resumos periódicos**".
2. Clique em "**Adicionar um resumo**".
3. Configure o resumo: a **frequência**, o **canal** de publicação e, eventualmente, um cargo a **mencionar**.

As frequências disponíveis são: **Semanal** (padrão), **Quinzenal**, **Mensal**, **Trimestral** e **Anual**. Uma prévia do resumo é publicada no canal assim que você o define.

O resumo contém:
- o **número total de ações de moderação** no período;
- o detalhe por tipo de sanção (banimentos, softbans, expulsões, timeouts, mutes, prisões, advertências e outras ações);
- o número de **golpes bloqueados pelo [ScamLens](/blog/threat-weather-june-2026)**;
- a divisão entre ações **automáticas** e ações **da equipe**.

:::info
Na versão gratuita, você pode configurar **um único resumo**. Os servidores **Premium** podem criar vários simultaneamente (por exemplo, um resumo semanal para a equipe e um resumo mensal público).
:::

## 📢 Modlog público {#modlog}

O modlog público publica **cada ação de moderação** em um canal visível para seus membros, apenas com as informações que você escolher exibir.

1. No menu Transparência, clique em "**Modlog público**".
2. Selecione um canal ou deixe o RaidProtect criar um para você (chamado "**public-modlog**", somente leitura para @everyone).
3. Escolha os **elementos exibidos**: "**Motivo**", "**Moderador**", "**Duração**", "**Membro sancionado**".
4. Escolha as **fontes** incluídas: "**Manuais (equipe)**" e/ou "**Automáticas (RaidProtect)**".

Quando a ação é automática e a exibição do moderador está ativada, o modlog indica "RaidProtect" no lugar do nome do moderador.

:::note
A publicação é deliberadamente regulada para evitar inundar o canal durante um raid: as mensagens são enviadas progressivamente.
:::

## 📜 O comando `/transparency` {#command}

Utilize o comando: ```/transparency```

Ele permite que qualquer membro consulte o **último relatório de transparência** do período encerrado (resposta efêmera, visível apenas para o membro).

- O comando deve ser ativado através do botão "**Comando transparency**" no menu Transparência.
- Se você tiver vários resumos, o botão "**Alimentar /transparency**" em um resumo o designa como a fonte usada pelo comando.
