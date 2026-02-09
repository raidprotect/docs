---
title: Processo de Onboarding e Captcha
---

Se o canal `#verification` não estiver visível por defeito para os novos membros, isto pode impedir o sistema de Captcha de funcionar corretamente. Eis como resolver este problema passo a passo.

![Captura de ecrã do alerta do captcha](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-captcha-alert.webp)

## 1️⃣ Verificar as permissões do canal {#permissions}

1. Abra as definições do canal `#verification` (clique com o botão direito > **Editar Canal**).
2. No separador **Permissões**:
   - Certifique-se de que `@everyone` **não tem** permissão para ver o canal.
   - Certifique-se de que o cargo `@Unverified` **tem** permissão para **ver o canal**, **ler o histórico de mensagens** e **enviar mensagens**.

![Captura de ecrã da verificação de permissões do canal](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-verification-channel-permissions.webp)

## 2️⃣ Verificar a categoria de Boas-vindas {#default-category}

1. Vá a **Definições do Servidor** > **Onboarding**.
2. Na secção **Canais Predefinidos**, verifique se a categoria que contém `#verification` está marcada como visível para os novos membros.
3. Se necessário, mova `#verification` para uma categoria marcada.
4. Guarde as alterações.

![Captura de ecrã da verificação da categoria de boas-vindas](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-welcome-category.webp)

## 3️⃣ Atualizar a configuração no RaidProtect {#refresh-config}

1. Utilize o comando [`/settings`](../setup.md#settings) e vá ao separador **Captcha**.
2. Clique em **Atualizar** para forçar a atualização da configuração.
3. Se o canal estiver agora visível, o sistema de Captcha funcionará corretamente.

## 4️⃣ Testar com uma conta de teste {#test-account}

Para confirmar que tudo está corretamente configurado:

1. Entre no servidor com outra conta Discord.
2. Verifique se o canal `#verification` está visível à chegada.
3. Introduza o código Captcha enviado pelo RaidProtect.
4. Uma vez verificado, a conta deverá ter acesso aos outros canais.

## 🛠️ Problemas comuns e soluções {#common-issues}

| Problema | Solução |
|-------|----------|
| 🔴 O canal `#verification` permanece invisível | Verifique se está numa **categoria marcada** nas definições de Boas-vindas do Discord. |
| 🚫 O cargo `@Unverified` não consegue escrever | Conceda-lhe a permissão de **enviar mensagens** em `#verification`. |
| ❌ O captcha não funciona após alterações | Clique em **"Atualizar"** em `/settings > Captcha`. |

---

✅ Ao seguir estes passos, o seu sistema de verificação estará totalmente operacional para acolher membros em segurança e bloquear eficazmente bots ou raids.
