---
title: Processo de integracao e Captcha
---

Se o canal `#verification` nao estiver visivel por predefinicao para os novos membros, isto pode impedir o sistema de Captcha de funcionar corretamente. Eis como resolver este problema passo a passo.

![Captura de ecra do alerta do captcha](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-captcha-alert.webp)

## 1️⃣ Verificar as permissoes do canal {#permissions}

1. Abre as definicoes do canal `#verification` (clique direito > **Editar canal**).
2. No separador **Permissoes**:
   - Certifica-te de que `@everyone` **nao** tem permissao para ver o canal.
   - Certifica-te de que o cargo `@Unverified` **tem** permissao para **ver o canal**, **ler o historico de mensagens** e **enviar mensagens**.

![Captura de ecra da verificacao de permissoes do canal](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-verification-channel-permissions.webp)

## 2️⃣ Verificar a categoria de boas-vindas {#default-category}

1. Vai a **Definicoes do servidor** > **Integracao**.
2. Na seccao **Canais predefinidos**, verifica que a categoria que contem `#verification` esta marcada como visivel para os novos membros.
3. Se necessario, move `#verification` para uma categoria marcada.
4. Guarda as alteracoes.

![Captura de ecra da verificacao da categoria de boas-vindas](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-welcome-category.webp)

## 3️⃣ Atualizar a configuracao no RaidProtect {#refresh-config}

1. Usa o comando [`/settings`](../setup.md#settings) e vai ao separador **Captcha**.
2. Clica em **Refresh** para forcar a atualizacao da configuracao.
3. Se o canal estiver agora visivel, o sistema de Captcha funcionara corretamente.

## 4️⃣ Testar com uma conta de teste {#test-account}

Para confirmar que tudo esta configurado corretamente:

1. Entra no servidor com outra conta Discord.
2. Verifica que o canal `#verification` esta visivel a chegada.
3. Introduz o codigo de Captcha enviado pelo RaidProtect.
4. Uma vez verificada, a conta devera ter acesso aos outros canais.

## 🛠️ Problemas comuns e solucoes {#common-issues}

| Problema | Solucao |
|-------|----------|
| 🔴 O canal `#verification` continua invisivel | Verifica que esta numa **categoria marcada** nas definicoes de boas-vindas do Discord. |
| 🚫 O cargo `@Unverified` nao pode escrever | Concede-lhe a permissao de **enviar mensagens** em `#verification`. |
| ❌ O captcha nao funciona apos as alteracoes | Clica em **"Refresh"** em `/settings > Captcha`. |

---

✅ Seguindo estes passos, o teu sistema de verificacao estara totalmente operacional para receber membros de forma segura e bloquear eficazmente bots ou raids.
