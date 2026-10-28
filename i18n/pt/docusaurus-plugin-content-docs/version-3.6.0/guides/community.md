---
title: Ativar a comunidade
description: "Ative a comunidade Discord do seu servidor para desbloquear as configurações de segurança de que o RaidProtect precisa: Bloqueio de DMs, modo raid e mais."
---

Ativar a comunidade disponibiliza diversas configurações de segurança avançadas do Discord, das quais algumas funcionalidades do RaidProtect precisam:
- o [Bloqueio de DMs](../features/dm-lock.mdx) (**DM Lock**);
- o [modo raid](../features/raid-mode.md) e o [Bloqueio de Entradas](../features/join-lock.mdx), **apenas** com a ação durante o raid “**Bloquear os convites**” (a configuração padrão).

O [captcha](../features/captcha.md) e as outras ações do modo raid (“**Expulsar quem chegar**”, “**Enviar ao captcha**”, “**Captcha congelado durante o raid**”) funcionam sem a comunidade.

## 🚦 Pré-requisitos {#requirement}

- Ser administrador do servidor Discord.

## 🚩 Ativar as funcionalidades de comunidade {#steps}

1. **Abra as configurações do servidor**
   - Clique no nome do servidor no canto superior esquerdo > “Configurações do servidor”.

2. **Vá até a seção “Comunidade”**
   - Na barra lateral, vá até a aba **Ativar Comunidade** e clique em **Começar**.

:::note
Se a comunidade já estiver ativada no seu servidor, a seção se chamará **Visão geral da comunidade**.
:::

3. **Siga o assistente de configuração**
   - Ative a verificação por e-mail para todos os membros.
   - Ative o filtro de conteúdo explícito.
   - Configure um canal de regras e um canal de anúncios.
   - Aceite as diretrizes de uso do servidor comunitário.

4. **Conclua a configuração**
   - Clique em “Concluir configuração”. O selo “Comunidade” aparecerá no seu servidor assim que a ativação estiver finalizada.

![Captura de tela da ativação de comunidade Discord](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-enable-community.webp)

## 💡 Usar os módulos Bloqueio de DMs e modo raid após a ativação {#use}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Para o [Bloqueio de DMs](../features/dm-lock.mdx), abra a aba “**Proteção**” e clique em “**Editar**” ao lado de “**Bloqueio de DMs**”.
3. Para o [modo raid](../features/raid-mode.md#config), abra a aba “**Chegadas**” e clique em “**Configurar**” ao lado de “**Auto RaidMode**”.

Se um aviso pedia para você ativar a comunidade, clique em “**Atualizar**”: ele desaparece assim que a comunidade estiver ativada.
