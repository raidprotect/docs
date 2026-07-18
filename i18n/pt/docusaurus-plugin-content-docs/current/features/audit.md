---
title: Auditoria de segurança
---

import AuditMockup from '@site/src/components/DiscordMessage/mockups/audit';

<AuditMockup />

O comando `/audit` analisa a configuração do seu servidor Discord e identifica as falhas de segurança: permissões excessivamente permissivas, nível de verificação insuficiente, cargos administradores não protegidos, etc. Em seguida, ele propõe corrigir a maioria dos problemas com um clique.

Utilize o comando: ```/audit```

:::info
O comando é reservado aos membros que possuem a permissão `Administrador`. O relatório só é visível para você (resposta efêmera).
:::

## ❓ Como funciona a auditoria {#working}

O RaidProtect atribui ao seu servidor uma **pontuação global de 100**, acompanhada de um grau (de **S** a **E**) e de uma classificação: **Excelente** (90 ou mais), **Bom** (70 ou mais), **A melhorar** (40 ou mais) ou **Crítico** (menos de 40).

O relatório é dividido em três categorias, cada uma com sua própria pontuação:

- **Configuração do servidor**
- **Cargos**
- **Canais**

Clique no botão "**Detalhes**" de uma categoria para ver o resultado de cada verificação e, em seguida, em "**Voltar**" para retornar ao relatório. O botão "**Atualizar**" reinicia a análise após suas modificações.

### Verificações realizadas {#checks}

| Categoria | Verificação |
|---|---|
| Configuração do servidor | **Nível de verificação** |
| Configuração do servidor | **Filtro de conteúdo explícito** |
| Configuração do servidor | **Autenticação de dois fatores (2FA) para a moderação** |
| Configuração do servidor | **Notificações padrão** |
| Configuração do servidor | **Alertas de raid** |
| Configuração do servidor | **Bloqueio de DMs** * (servidores de comunidade) |
| Configuração do servidor | **Número de bots instalados** * |
| Cargos | **Permissões de @everyone** |
| Cargos | **Cargos auto-atribuíveis** |
| Cargos | **Cargos de risco concedidos por um convite** |
| Cargos | **Cargos administradores** |
| Cargos | **Bots administradores** * |
| Canais | **Permissões de canal para @everyone** |
| Canais | **Permissões de canal redundantes** |
| Canais | **Webhooks antigos** * |

As verificações marcadas com `*` são **indicativas**: aparecem no relatório mas não influenciam a pontuação.

Se faltarem permissões ao RaidProtect para funcionar corretamente, um aviso dedicado é exibido além da pontuação.

## 🔧 Corrigir as falhas com um clique {#fix}

As verificações que podem ser corrigidas automaticamente exibem um botão "**Corrigir**":

| Verificação | Correção aplicada |
|---|---|
| Nível de verificação | Passa o nível de verificação do servidor para **Alto** |
| Filtro de conteúdo explícito | Ativa o filtro para **todos os membros** |
| Notificações padrão | Passa as notificações padrão para **apenas @menções** |
| Permissões de @everyone | Remove as permissões sensíveis do cargo @everyone |
| Permissões de canal redundantes | Limpa as permissões de canal desnecessárias ("**Corrigir tudo**") |

Para os **cargos administradores** (e bots administradores), não existe correção automática: a auditoria propõe protegê-los com os botões "**Integrar**" ou "**Integrar tudo**", que os adicionam ao [Authentication Manager](./authentication-manager.mdx).

:::warning
Para aplicar as correções, o RaidProtect deve possuir as permissões `Gerenciar servidor` e `Gerenciar cargos`.
:::

## ✅ Descartar um alerta voluntário {#ignore}

Alguns alertas correspondem a escolhas assumidas: um cargo administrador de confiança, uma permissão deixada para `@everyone` conscientemente, etc. O botão "**Marcar como OK**", disponível no detalhe de uma categoria, permite descartá-los.

Um alerta descartado desaparece do relatório e deixa de contar na sua pontuação. Você pode consultar a qualquer momento a lista de itens ignorados (botão "**Itens ignorados**") e restaurar qualquer um deles.
