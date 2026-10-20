---
title: Auditoria de segurança
description: "O comando /audit do RaidProtect analisa a segurança do seu servidor Discord, identifica falhas de configuração e propõe corrigi-las em um clique."
---

import AuditMockup from '@site/src/components/DiscordMessage/mockups/audit';

<AuditMockup />

O comando `/audit` analisa a configuração do seu servidor Discord e identifica as falhas de segurança: permissões excessivamente permissivas, nível de verificação insuficiente, [cargos administradores não protegidos](/pt/learn/least-privilege), etc. Em seguida, ele propõe corrigir a maioria dos problemas com um clique.

Use o comando: ```/audit```

:::info
O comando é reservado aos membros que possuem a permissão `Administrador`. O relatório só é visível para você (resposta efêmera).
:::

## ❓ Como funciona a auditoria {#working}

O RaidProtect atribui ao seu servidor uma **pontuação global de 0 a 100**, acompanhada de um grau (de **S** a **E**) e de uma avaliação: **Excelente** (90 ou mais), **Bom** (70 ou mais), **A melhorar** (40 ou mais) ou **Crítico** (menos de 40).

O relatório é dividido em três categorias, cada uma com sua própria pontuação:

- **Configuração do servidor**
- **Cargos**
- **Canais**

Clique no botão “**Detalhes**” de uma categoria para ver o resultado de cada verificação e, em seguida, em “**Voltar**” para retornar ao relatório. O botão “**Atualizar**” reinicia a análise após suas modificações.

### Verificações realizadas {#checks}

| Categoria | Verificação |
|---|---|
| Configuração do servidor | **Nível de verificação** |
| Configuração do servidor | **Filtro de conteúdo explícito** |
| Configuração do servidor | **Autenticação de dois fatores (2FA) para a moderação** |
| Configuração do servidor | **Notificações padrão** |
| Configuração do servidor | **Alertas de raid** |
| Configuração do servidor | **DM Lock (servidor público)** * |
| Configuração do servidor | **Número de bots** * |
| Cargos | **Permissões de @everyone** |
| Cargos | **Cargos auto-atribuíveis** |
| Cargos | **Cargos concedidos por convites** |
| Cargos | **Cargos administradores** |
| Cargos | **Bots administradores** * |
| Canais | **Permissões de canal para @everyone** |
| Canais | **Permissões de canal redundantes** |
| Canais | **Permissões de fala dos cargos da equipe** * |
| Canais | **Webhooks antigos** * |

As verificações marcadas com `*` são **indicativas**: aparecem no relatório mas não influenciam a pontuação. **DM Lock (servidor público)** só aparece nos servidores de comunidade ou públicos.

Alguns esclarecimentos sobre essas verificações:

- **Cargos auto-atribuíveis**: são considerados os cargos que um membro obtém sem moderador, com sua origem: boas-vindas do Discord, [cargo automático](./onboarding.md#autorole) do RaidProtect, boost, assinatura, integração ou cargo vinculado.
- **Permissões de fala dos cargos da equipe**: um cargo que carrega uma permissão de moderação e que tem, em certos canais, concessões de fala (escrever, falar…) já cobertas em outro lugar. Nós as mantemos, pois elas deixam a palavra com a equipe durante um [`/lock`](./channel-lock.md) ou no nível 1 do [DISCON](./discon.md). Basta verificar se cada cargo listado é de fato um cargo da equipe: caso contrário, ele escapa dos bloqueios.

Se faltarem permissões ao RaidProtect para funcionar corretamente, um aviso dedicado é exibido além da pontuação. Uma verificação que exige uma permissão ausente (por exemplo Gerenciar webhooks) é sinalizada como não avaliada.

:::info
Se o RaidProtect não enxergar certos canais do seu servidor, o relatório exibe um quadro “**Análise incompleta**”: esses canais não são analisados e a pontuação considera apenas o restante.
:::

## 🔧 Corrigir as falhas com um clique {#fix}

As verificações que podem ser corrigidas automaticamente exibem um botão “**Corrigir**”:

| Verificação | Correção aplicada |
|---|---|
| Nível de verificação | Passa o nível de verificação do servidor para **Médio** (“Médio” ou mais é validado, “Baixo” gera um aviso, “Nenhum” uma falha) |
| Filtro de conteúdo explícito | Ativa o filtro para **todos os membros** |
| Notificações padrão | Passa as notificações padrão para **apenas @menções** |
| Permissões de @everyone | Remove as permissões sensíveis do cargo @everyone |
| Permissões de canal redundantes | Abre a lista de canais a limpar e depois “**Corrigir tudo**” |

Para os **cargos administradores**, não existe correção automática: a auditoria propõe protegê-los com os botões “**Integrar**” ou “**Integrar tudo**”, que os adicionam ao [Authentification Manager](./authentication-manager.mdx).

:::warning
Para aplicar as correções, o RaidProtect deve possuir as permissões `Gerenciar servidor` e `Gerenciar cargos`.
:::

### Permissões de canal redundantes {#redundant}

Uma permissão de canal é **redundante** quando não muda nada: ela já é concedida no nível do servidor, já é concedida pela permissão @everyone do canal, ou é uma negação sem efeito. É preciso então modificá-la em vários lugares para que ela realmente atue, o que cria pontos cegos.

A lista detalha, canal por canal, cada permissão e o motivo pelo qual ela é redundante:

- O botão “**Ignorar**” de um canal o retira da lista, da pontuação e de “**Corrigir tudo**”. Você pode restabelecê-lo a partir dos “**Itens ignorados**”.
- Corrigir uma categoria também corrige os canais sincronizados com ela.
- As permissões de um cargo **Administrador** são listadas à parte, em “**Sem efeito em um cargo Administrador**”: o Discord as ignora, e nós nunca as removemos, pois elas passarão a valer se esse cargo perder Administrador.

A análise leva em conta os bloqueios em andamento, por [`/lock`](./channel-lock.md) ou pelo [DISCON](./discon.md).

## ✅ Descartar um alerta voluntário {#ignore}

Alguns alertas correspondem a escolhas assumidas: um cargo administrador de confiança, uma permissão deixada para `@everyone` conscientemente, etc. O botão “**Marcar como OK**”, disponível no detalhe de uma categoria, permite escolher um item e depois “**Ignorar**”.

Um alerta descartado desaparece do relatório e deixa de contar na sua pontuação. Você pode consultar a qualquer momento a lista de itens ignorados (botão “**Itens ignorados**”) e restaurar qualquer um deles com “**Restaurar**” ou “**Restaurar tudo**”.

## Perguntas frequentes {#faq}

### Por que o nível de verificação “Médio” basta?

O nível “Médio” já afasta as contas criadas há menos de 5 minutos, o que bloqueia a maioria das contas descartáveis. É, portanto, o nível que o botão “**Corrigir**” aplica.

### Por que a auditoria não remove as permissões de canal dos meus cargos administradores?

O Discord ignora as permissões de canal de um cargo que tem Administrador. Nós as listamos à parte sem removê-las: elas voltarão a valer se esse cargo perder Administrador.

### Posso excluir um canal da análise das permissões redundantes?

Sim: clique em “**Ignorar**” ao lado do canal na lista das permissões redundantes. Ele deixa de contar na pontuação e você pode restabelecê-lo a partir dos itens ignorados.
