---
title: Processo de Onboarding e Captcha
---

Se o canal `#verification` nao estiver visivel por defeito para novos membros, isto pode impedir o sistema de Captcha de funcionar corretamente. Eis como corrigir este problema passo a passo.

![Captura de ecra do alerta do captcha](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-captcha-alert.webp)

## 1️⃣ Verificar as permissoes do canal {#permissions}

1. Abra as definicoes do canal `#verification` (clique direito > **Editar Canal**).
2. No separador **Permissoes**:
   - Certifique-se de que `@everyone` **nao** tem permissao para ver o canal.
   - Certifique-se de que o cargo `@Unverified` **tem** permissao para **ver o canal**, **ler o historico de mensagens** e **enviar mensagens**.

![Captura de ecra da verificacao de permissoes do canal](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-verification-channel-permissions.webp)

## 2️⃣ Verificar a categoria de Boas-vindas {#default-category}

1. Va a **Definicoes do Servidor** > **Onboarding**.
2. Na seccao **Canais Predefinidos**, verifique se a categoria que contem `#verification` esta marcada como visivel para novos membros.
3. Se necessario, mova `#verification` para uma categoria marcada.
4. Guarde as alteracoes.

![Captura de ecra da verificacao da categoria de boas-vindas](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-welcome-category.webp)

## 3️⃣ Atualizar a configuracao no RaidProtect {#refresh-config}

1. Utilize o comando [`/settings`](../setup.md#settings) e va ao separador **Captcha**.
2. Clique em **Refresh** para forcar a atualizacao da configuracao.
3. Se o canal estiver agora visivel, o sistema de Captcha funcionara corretamente.

## 4️⃣ Testar com uma conta de teste {#test-account}

Para confirmar que tudo esta configurado corretamente:

1. Entre no servidor com outra conta Discord.
2. Verifique se o canal `#verification` esta visivel a chegada.
3. Introduza o codigo de Captcha enviado pelo RaidProtect.
4. Uma vez verificado, a conta devera ter acesso aos outros canais.

## 🛠️ Problemas comuns e solucoes {#common-issues}

| Problema | Solucao |
|----------|---------|
| 🔴 O canal `#verification` permanece invisivel | Verifique se esta numa **categoria marcada** nas definicoes de Boas-vindas do Discord. |
| 🚫 O cargo `@Unverified` nao consegue escrever | Conceda-lhe permissao para **enviar mensagens** em `#verification`. |
| ❌ O Captcha nao funciona apos alteracoes | Clique em **"Refresh"** em `/settings > Captcha`. |

---

✅ Seguindo estes passos, o seu sistema de verificacao estara totalmente operacional para receber membros em seguranca e bloquear eficazmente bots ou raids.
