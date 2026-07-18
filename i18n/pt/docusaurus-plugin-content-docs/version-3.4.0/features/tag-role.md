---
title: Tag de Cargo
---

import TagRoleMockup from '@site/src/components/DiscordMessage/mockups/tag-role';
import TagRoleConceptMockup from '@site/src/components/DiscordMessage/mockups/tag-role-concept';

<TagRoleConceptMockup />

O Tag de Cargo permite atribuir automaticamente um cargo aos membros que adicionam [a tag do seu servidor](https://support.discord.com/hc/pt-br/articles/31444248479639-Server-Tags) ao seu perfil do Discord. Ao atribuir um cargo a esses membros, você valoriza o engajamento deles e [os incentiva a representar ativamente o seu servidor](https://dfr.gg/blog/2025/05/09/revolution-boosts-tags-serveur-publics#tags). É uma forma simples, mas eficaz, de reforçar a identidade coletiva, ao mesmo tempo em que recompensa os embaixadores mais fiéis da sua comunidade.

## ❓ Como funciona o Tag de Cargo {#working}

O funcionamento é simples. Assim que um membro adiciona a tag do servidor ao seu perfil do Discord, o RaidProtect atribui automaticamente um cargo específico a ele.
Se o membro remover a tag, o cargo é removido.

:::info
Se o Tag não estiver ativado ou se o seu servidor ainda não tiver a funcionalidade, o Tag de Cargo não terá efeito.
:::

## 🎖️ Configuração do Tag de Cargo {#config}

A configuração é feita em poucos cliques:
1. Use o [comando `/settings`](../setup.md#settings).
2. Clique no botão "**Tag de Cargo**".
3. Selecione um cargo existente por meio do seletor ou clique em "**Criar um para mim**".
4. Você pode desmarcar o cargo a qualquer momento clicando no botão "**Redefinir**".

<TagRoleMockup />

:::tip
Seus membros receberão o cargo na próxima vez que atualizarem o perfil (Nome de usuário, Avatar, Banner, Cargos, Tag...).
:::

## 🔄 Sincronização do cargo {#sync}

Para atribuir imediatamente o cargo a todos os membros que já usam a tag (e removê-lo de quem não a usa mais), utilize o botão "**Sincronizar**" na configuração do Tag de Cargo:

- **Gratuito**: uma sincronização oferecida, apenas uma vez por servidor.
- **Premium**: uma sincronização por semana.

A sincronização é executada em segundo plano e continua mesmo que o bot reinicie. Apenas uma sincronização pode estar em andamento por vez em um servidor.

:::note
O botão "Sincronizar" está em implementação progressiva. Se ainda não estiver disponível no seu servidor, você pode [solicitar ao suporte](https://raidprotect.bot/discord) uma sincronização completa do cargo.
:::
