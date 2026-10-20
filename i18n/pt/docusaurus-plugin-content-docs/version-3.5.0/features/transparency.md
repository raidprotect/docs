---
title: Transparência
description: "A Transparência do RaidProtect mostra aos seus membros como o servidor é moderado: resumos periódicos, um modlog público e o comando /transparency."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import TransparencyMockup from '@site/src/components/DiscordMessage/mockups/transparency';

<TransparencyMockup />

A Transparência permite mostrar aos seus membros como o servidor é moderado. Ela se baseia em três elementos complementares: **resumos de moderação periódicos**, um **modlog público** e o **comando `/transparency`**.

## 🛠️ Configuração da Transparência {#config}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Moderação**”.
3. Clique em “**Configurar**” ao lado de “**Transparência**”.

A tela dá acesso aos “**Resumos periódicos**”, ao “**Modlog público**” e à alternância do “**Comando /transparency**”.

<Settings start="transparency" />

## 📊 Resumos periódicos {#recaps}

Um resumo é um apanhado agregado das ações de moderação, publicado automaticamente em um canal de acordo com a frequência escolhida.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Moderação**”.
3. Clique em “**Configurar**” ao lado de “**Transparência**”.
4. Clique em “**Configurar**” ao lado de “**Resumos periódicos**”.
5. Clique em “**Adicionar**” ao lado de um espaço livre.
6. A tela do novo resumo se abre: defina sua **frequência**, seu **canal** de publicação, eventualmente um cargo a **mencionar** e depois clique em “**Ativar**” à direita do título.

Para voltar a um resumo mais tarde, clique em “**Editar**” ao lado dele na lista.

<Settings start="recaps" />

Um novo resumo é criado desativado, semanal, publicado por volta das 08:00, no canal do modlog público. As frequências disponíveis são: **Semanal** (padrão), **A cada duas semanas**, **Mensal**, **Trimestral** e **Anual**. Dois resumos da mesma frequência não podem ser publicados no mesmo canal.

Na tela de um resumo, você também pode:

- “**Renomear**” o resumo (deixe o campo vazio para voltar ao nome da frequência);
- definir seu “**Horário**” de publicação (veja abaixo);
- clicar em “**Alimentar /transparency**” para torná-lo a fonte do [comando `/transparency`](#command);
- “**Excluir**”.

O resumo contém:
- o **número total de ações de moderação** no período;
- o detalhe por tipo de sanção (banimentos, softbans, expulsões, timeouts, mutes, jails, avisos e outras ações);
- o número de **golpes bloqueados pelo [ScamLens](./scam-images.md)**;
- a divisão entre ações **automáticas** e ações **da equipe**.

**Limites:** 1 resumo na versão gratuita, 5 resumos na versão [Premium](/pt/premium) (por exemplo, um resumo semanal para a equipe e um resumo mensal público).

### Horário de publicação {#recap-schedule}

1. Na tela de um resumo, clique em “**Horário**”.
2. Na janela, escolha o “**Horário de publicação**” (horário local, de `00:00` a `23:00`).

<SettingsModal name="recapSchedule" />

| Versão | Momento de publicação |
|---|---|
| Gratuita | Dentro de uma faixa de 12 h a partir do horário escolhido |
| [Premium](/pt/premium) | Por volta do horário escolhido, com 1 h de margem |

O horário escolhido segue o **fuso horário do servidor**, lembrado abaixo da linha “**Horário**”. Ele é definido uma única vez para todo o servidor, na aba “**Geral**”:

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Geral**”.
3. Clique em “**Editar**” ao lado de “**Fuso horário**”.
4. Escolha o seu deslocamento em “**Fuso horário (UTC)**”, ou digite um “**Fuso horário personalizado**” como `Europe/Paris`, que tem prioridade e gerencia o horário de verão automaticamente.

<SettingsModal name="timezone" />

## 📢 Modlog público {#modlog}

O modlog público publica **cada ação de moderação** em um canal visível para seus membros, apenas com as informações que você escolher exibir.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Moderação**”.
3. Clique em “**Configurar**” ao lado de “**Transparência**”.
4. Clique em “**Configurar**” ao lado de “**Modlog público**”.
5. Selecione um canal ou clique em “**Criar um para mim**” (o RaidProtect cria o canal `public-modlog`, somente leitura para @everyone).
6. Em “**Informações exibidas**”, escolha: “**Motivo**”, “**Moderador**”, “**Duração**”, “**Membro punido**” (padrão: Motivo e Duração).
7. Em “**Sanções publicadas**”, escolha: “**Manuais (equipe)**” e/ou “**Automáticas (RaidProtect)**” (padrão: as duas).
8. Clique em “**Ativar**” à direita do título da tela.

<Settings start="modlog" />

Quando a ação é automática e a exibição do moderador está ativada, o modlog indica “RaidProtect” no lugar do nome do moderador.

## 📜 O comando `/transparency` {#command}

Use o comando: ```/transparency```

Ele permite que qualquer membro consulte o **último relatório de transparência** do período encerrado (resposta efêmera, visível apenas para o membro).

- O comando deve ser ativado com a alternância “**Comando /transparency**” da tela Transparência.
- Se você tiver vários resumos, o botão “**Alimentar /transparency**” em um resumo o designa como a fonte usada pelo comando. Esse resumo é marcado com uma ⭐ na lista.

## Perguntas frequentes {#faq}

### Quantos resumos posso programar?

Apenas um na versão gratuita, até cinco com o [Premium](/pt/premium).

### A que horas o resumo é publicado?

No horário que você escolher, no fuso horário do servidor definido na aba “**Geral**” de `/settings`. Na versão gratuita, a publicação ocorre dentro de uma faixa de 12 horas a partir desse horário; com o Premium, com uma hora de margem.

### Meus membros veem quem os sancionou?

Somente se você marcar “**Moderador**” nas informações exibidas do modlog público. Para uma ação automática, o modlog indica então RaidProtect.
