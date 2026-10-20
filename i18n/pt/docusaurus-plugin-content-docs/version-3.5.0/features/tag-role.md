---
title: Cargo de Tag
description: "O Cargo de Tag do RaidProtect atribui automaticamente um cargo aos membros que exibem a tag do seu servidor Discord e recompensa o engajamento deles."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';
import TagRoleConceptMockup from '@site/src/components/DiscordMessage/mockups/tag-role-concept';

<TagRoleConceptMockup />

O Cargo de Tag permite atribuir automaticamente um cargo aos membros que adicionam [a tag do seu servidor](https://support.discord.com/hc/pt-br/articles/31444248479639-Tags-do-servidor) ao seu perfil do Discord. Ao atribuir um cargo a esses membros, você valoriza o engajamento deles e os incentiva a representar ativamente o seu servidor. É uma forma simples, mas eficaz, de reforçar a identidade coletiva, ao mesmo tempo em que recompensa os embaixadores mais fiéis da sua comunidade.

## ❓ Como funciona o Cargo de Tag {#working}

O funcionamento é simples. Assim que um membro adiciona a tag do servidor ao seu perfil do Discord, o RaidProtect atribui automaticamente um cargo específico a ele.
Se o membro remover a tag, o cargo é removido.

Detectamos a mudança na próxima atualização do perfil do membro (nome de usuário, avatar, banner, cargos, tag…).

:::info
Se a tag não estiver ativada ou se o seu servidor ainda não tiver a funcionalidade, o Cargo de Tag não terá efeito.
:::

## 🎖️ Configuração do Cargo de Tag {#config}

A configuração é feita em poucos cliques:
1. Use o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Utilitários**”.
3. Clique em “**Configurar**” ao lado de “**Cargo de Tag**”.
4. Selecione um cargo existente por meio do seletor ou clique em “**Criar um para mim**”: criamos um cargo `Tag` sem nenhuma permissão.
5. Você pode desativar o Cargo de Tag a qualquer momento clicando no botão “**Redefinir**”.

Cada mudança de configuração do Cargo de Tag é registrada nos seus logs do servidor.

<Settings start="tagrole" />

:::tip
Seus membros receberão o cargo na próxima vez que atualizarem o perfil (nome de usuário, avatar, banner, cargos, tag…).
:::

### Comando /tagrole {#command}

Use o comando: ```/tagrole```

Ele abre diretamente a tela de configuração do Cargo de Tag, sem passar por `/settings`. Ele é reservado aos membros que têm a permissão “**Gerenciar cargos**”.

### Cargos recusados {#refused-roles}

O Cargo de Tag é dado automaticamente a qualquer membro: por isso recusamos os cargos que poderiam causar problemas.

- **Um cargo já usado pelo RaidProtect**: cargo de jail, cargo de mute, cargo de verificação do captcha ou cargo automático.
- **Um cargo gerenciado** por um aplicativo ou pelo boost do servidor: o Discord proíbe atribuí-lo manualmente. Crie um cargo normal no lugar.
- **Um cargo posicionado acima do cargo do RaidProtect**: arraste o cargo do RaidProtect para cima dele em **Configurações do servidor > Cargos**.
- **Um cargo posicionado acima do seu cargo mais alto** (exceto para o proprietário do servidor).
- **Um cargo com permissões sensíveis**: Administrador, Banir, Expulsar, Gerenciar servidor, canais, mensagens, cargos, webhooks, expressões, eventos ou threads.

### Quadros de alerta {#warnings}

A tela de configuração avisa quando o Cargo de Tag não pode funcionar:

- **Permissão ausente**: o RaidProtect precisa da permissão “**Gerenciar cargos**”. Um alerta ⚠️ também é exibido ao lado de “**Cargo de Tag**” na aba Utilitários de `/settings`.
- **Tag de servidor não ativada**: seu servidor não ativou a funcionalidade [Tag do servidor](https://support.discord.com/hc/pt-br/articles/31444248479639-Tags-do-servidor), então o Cargo de Tag não tem efeito por enquanto.

Após a correção, clique em “**Atualizar**” para verificar novamente.

## Perguntas frequentes {#faq}

### Por que um membro com a tag ainda não tem o cargo?

Detectamos a tag na próxima atualização do perfil do membro. Enquanto ele não modificar nada (nome de usuário, avatar, cargos, tag…), o cargo não é atribuído. O suporte pode iniciar uma sincronização completa, se necessário.

### Por que meu cargo é recusado?

O Cargo de Tag não pode ser um cargo já usado pelo RaidProtect, um cargo gerenciado por um aplicativo, um cargo posicionado acima do RaidProtect ou de você, nem um cargo com permissões sensíveis.

### Quem pode configurar o Cargo de Tag?

Os administradores a partir de `/settings`, e os membros que têm a permissão “Gerenciar cargos” com o comando `/tagrole`.
