---
title: Processo de integração e captcha
description: "Configure o processo de integração do Discord para o captcha do RaidProtect funcionar: torne o canal de verificação visível para os novos membros."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

Se o canal `#verificação` não estiver visível por padrão para os novos membros, eles não conseguem passar pelo [captcha](../features/captcha.md) e ficam bloqueados. Este guia trata do **Processo de integração do Discord** (Configurações do servidor > Processo de integração). Para a mensagem de boas-vindas e os cargos automáticos do RaidProtect, consulte a página [Chegadas e boas-vindas](../features/onboarding.md).

Na maioria dos casos, o RaidProtect corrige o problema para você: comece pela etapa 1.

## 1️⃣ Deixar o RaidProtect corrigir {#auto-fix}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Chegadas**”.
3. Clique em “**Configurar**” ao lado de “**Captcha**”.
4. Se um aviso indicar que o canal de verificação **não está visível por padrão**, clique em:
   - “**Mover para** _categoria_” para colocar o canal em uma categoria já visível para os novos membros;
   - ou “**Criar uma nova categoria**” para que criemos uma categoria “Boas-vindas” adicionada aos canais padrão.

As permissões do canal são mantidas durante a mudança.

<Settings start="captcha" />

:::tip
A mesma tela sinaliza os **vazamentos** do cargo `@Não verificado`: cargos atribuídos pelo Processo de integração do Discord que contornam a verificação, canais ainda visíveis para os membros em verificação. O botão “**Corrigir**” fecha os canais em questão. Veja os [alertas da tela Captcha](../features/captcha.md#alerts).
:::

## 2️⃣ Verificar as permissões do canal {#permissions}

O RaidProtect define ele mesmo as permissões do canal `#verificação` e do cargo `@Não verificado`. Se você as modificou, verifique-as:

1. Abra as configurações do canal `#verificação` (clique com o botão direito > **Editar canal**).
2. Na aba **Permissões**:
   - Certifique-se de que `@everyone` **não** tem permissão para ver o canal.
   - Verifique se o cargo `@Não verificado` **tem** permissão para **ver o canal** e **ler o histórico de mensagens**.
   - No modo **Painel (Interativo)**, o modo padrão, `@Não verificado` **não deve** poder enviar mensagens: o código é inserido em uma janela. No modo **Desafio (Clássico)**, ele deve poder **enviar mensagens** para digitar o código.

{/* ![Capture d'écran vérification des permissions du salon](../assets/rp-verification-channel-permissions.webp) : montre « Envoyer des messages » autorisé, vrai seulement en mode Challenge */}

## 3️⃣ Verificar a categoria de integração {#default-category}

Se preferir corrigir manualmente:

1. Vá até **Configurações do servidor** > **Processo de integração**.
2. Na seção **Canais padrão**, verifique se a categoria que contém `#verificação` está marcada como visível para os novos membros.
3. Se necessário, mova `#verificação` para uma categoria marcada.
4. Salve as alterações.

![Captura de tela da verificação da categoria de integração](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-welcome-category.webp)

## 4️⃣ Atualizar a configuração no RaidProtect {#refresh-config}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Chegadas**”.
3. Clique em “**Configurar**” ao lado de “**Captcha**”.
4. Se um aviso ainda for exibido, clique em “**Atualizar**” para reiniciar a verificação. Quando o aviso desaparecer, o captcha funciona corretamente.

## 5️⃣ Testar com uma conta de teste {#test-account}

Para confirmar que tudo está devidamente configurado:

1. Entre no servidor com outra conta Discord.
2. Verifique se o canal `#verificação` está visível na chegada.
3. Clique em “**Verificar**” e insira o código (modo Painel), ou digite o código no canal (modo Desafio).
4. Após a verificação, a conta deve ter acesso aos outros canais.

## 🛠️ Problemas comuns e soluções {#common-issues}

| Problema | Solução |
|---------|----------|
| 🔴 O canal `#verificação` permanece invisível | Clique em “**Mover para** _categoria_” na tela Captcha, ou coloque o canal em uma **categoria marcada** do processo de integração do Discord. |
| 🚫 O cargo `@Não verificado` não pode escrever | Normal no modo Painel: o membro clica em “**Verificar**”. No modo Desafio, conceda a ele a **permissão para enviar mensagens** em `#verificação`. |
| 🔓 Um membro não verificado vê outros canais | Clique em “**Corrigir**” no aviso de vazamento da tela Captcha e retire os cargos que o Processo de integração do Discord atribui na chegada. |
| ❌ O captcha não funciona após a modificação | Clique em “**Atualizar**” na tela Captcha (aba “**Chegadas**” de `/settings`). |

---

✅ Seguindo essas etapas, o seu sistema de verificação estará totalmente operacional para receber os membros com segurança e bloquear com eficácia bots e raids.
