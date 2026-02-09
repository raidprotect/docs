---
title: Processo de integracao e Captcha
---

Se o canal `#verification` nao estiver visivel por defeito para os novos membros, isto pode impedir o sistema de Captcha de funcionar corretamente. Eis como resolver este problema passo a passo.

## 1️⃣ Verificar as permissoes do canal {#permissions}

1. Abra as definicoes do canal `#verification` (clique direito > **Editar canal**).
2. No separador **Permissoes**:
   - Certifique-se de que `@everyone` **nao** tem permissao para ver o canal.
   - Verifique que o cargo `@Unverified` **tem** permissao para **ver o canal**, **ler o historico de mensagens** e **enviar mensagens**.

## 2️⃣ Verificar a categoria de Boas-vindas {#default-category}

1. Va a **Definicoes do servidor** > **Boas-vindas**.
2. Na seccao **Canais predefinidos**, verifique que a categoria que contem `#verification` esta marcada como visivel para os novos membros.
3. Se necessario, mova `#verification` para uma categoria marcada.
4. Guarde as alteracoes.

## 3️⃣ Atualizar a configuracao no RaidProtect {#refresh-config}

1. Utilize o comando [`/settings`](../setup.md#settings) e va ao separador **Captcha**.
2. Clique em **Atualizar** para forcar a atualizacao da configuracao.
3. Se o canal estiver agora visivel, o sistema de Captcha funcionara corretamente.

## 4️⃣ Testar com uma conta de teste {#test-account}

Para confirmar que tudo esta configurado corretamente:

1. Entre no servidor com outra conta Discord.
2. Verifique que o canal `#verification` esta visivel a chegada.
3. Introduza o codigo de Captcha enviado pelo RaidProtect.
4. Uma vez verificada, a conta devera ter acesso aos outros canais.

## 🛠️ Problemas comuns e solucoes {#common-issues}

| Problema | Solucao |
|----------|---------|
| 🔴 O canal `#verification` permanece invisivel | Verifique que esta numa **categoria marcada** nas definicoes de Boas-vindas do Discord. |
| 🚫 O cargo `@Unverified` nao consegue escrever | Conceda-lhe a permissao de **enviar mensagens** em `#verification`. |
| ❌ O Captcha nao funciona apos as alteracoes | Clique em **"Atualizar"** em `/settings > Captcha`. |

---

✅ Seguindo estes passos, o seu sistema de verificacao estara totalmente operacional para acolher os membros de forma segura e bloquear eficazmente bots ou raids.
