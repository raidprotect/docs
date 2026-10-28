---
title: Slowmode preventivo
description: "O slowmode preventivo do RaidProtect ajusta automaticamente o modo lento dos canais do seu servidor Discord para manter um fluxo de mensagens legível."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

O **slowmode preventivo** do RaidProtect, reservado aos servidores [Premium](/pt/premium), ajusta automaticamente o [modo lento](./moderation.mdx#slowmode) dos seus canais para manter um **ritmo de mensagens** por minuto. Quando um canal dispara (anúncio, live, afluxo de novos membros, início de [raid](/pt/learn/discord-raid)), aumentamos o modo lento; quando ele se acalma, nós o reduzimos. Seus moderadores não precisam mais vigiar o chat para ajustá-lo manualmente.

## ❓ Como funciona? {#working}

- **Um ritmo de mensagens**: para cada canal regulado, você escolhe quantas mensagens por minuto ele pode receber (30 por padrão). Acima disso, o modo lento sobe sozinho.
- **Limites**: o modo lento permanece sempre entre o **slowmode mínimo** e o **slowmode máximo** que você definiu para o canal.
- **Um ajuste contínuo**: ajustamos o modo lento de acordo com o fluxo real, e ele sobe imediatamente quando um canal dispara.
- **Uma descida progressiva**: quando o canal se acalma, o modo lento volta aos poucos para o mínimo.
- **Registro de auditoria**: cada mudança traz o motivo “Slowmode automático”.

## 🛠️ Configuração do slowmode preventivo {#config}

### Adicionar um canal regulado {#add}

1. Use o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Proteção**”.
3. Clique em “**Configurar**” ao lado de “**Slowmode preventivo**”.
4. Clique em “**Adicionar**” ao lado de um espaço livre.
5. Escolha o canal (canal de texto, de anúncios, de voz ou de palco: o modo lento de um canal de voz regula o seu canal de texto integrado).

<Settings start="slowmode" />

**Limites:** 6 canais regulados por servidor.

:::warning Permissões necessárias
O RaidProtect deve ter a permissão `Gerenciar canais` em cada canal regulado.
:::

### Ajustar um canal {#channel}

1. Use o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Proteção**”.
3. Clique em “**Configurar**” ao lado de “**Slowmode preventivo**”.
4. Clique em “**Editar**” ao lado do canal.
5. Escolha o “**Ritmo de mensagens**”, o “**Slowmode mínimo**” e o “**Slowmode máximo**”.

<Settings start="slowmodeChannel" />

| Configuração | Valores propostos | Padrão |
|---|---|---|
| **Ritmo de mensagens** | de 5 a 120 mensagens por minuto | 30 mensagens / min |
| **Slowmode mínimo** | de 0 a 10 segundos | 0 segundo (sem mínimo) |
| **Slowmode máximo** | de 5 segundos a 10 minutos | 2 minutos |

Para um valor que não esteja na lista, clique em “**Personalizar**” e informe seus próprios valores (por exemplo `40` mensagens por minuto, um mínimo de `0s`, um máximo de `2m 30s`). O modo lento não pode ultrapassar 6 horas, o limite do Discord.

<SettingsModal name="slowmodeCustom" />

Na tela de um canal, você também pode:
- pausar ou retomar a regulação com o interruptor no canto superior direito. Pausar a regulação coloca o modo lento do canal em 0;
- clicar em “**Aplicar a todos os canais regulados**” para copiar essas configurações para todos os seus canais regulados;
- clicar em “**Excluir**” para liberar o espaço.

## 🕒 Slowmode preventivo e comando /slowmode {#manual}

Se um moderador usar o [comando `/slowmode`](./moderation.mdx#slowmode) em um canal regulado, o valor manual dele é aplicado e a **regulação automática é desativada** para esse canal. Uma mensagem indica isso. Para retomar a regulação, reative-a na tela do canal em `/settings`.

## Perguntas frequentes {#faq}

### Qual a diferença entre o slowmode preventivo e o anti-spam?

O [anti-spam](./anti-spam.mdx) sanciona os membros que fazem spam. O slowmode preventivo não sanciona ninguém: ele desacelera todo um canal quando o fluxo global fica alto demais, para manter uma conversa legível.

### Quantos canais é possível regular?

Até 6 canais por servidor, cada um com seu ritmo de mensagens e seus limites.

### O slowmode preventivo é gratuito?

Não, ele é reservado aos servidores Premium.

### O que acontece se eu ajustar o modo lento manualmente?

O comando /slowmode aplica o seu valor e desativa a regulação automática desse canal. Você pode reativá-la em /settings, aba Proteção, Slowmode preventivo.
