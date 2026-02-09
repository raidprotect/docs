---
title: Processo de Integracao e Captcha
---

Se o canal `#verification` nao estiver visivel por defeito para os novos membros, isto pode impedir o sistema de Captcha de funcionar corretamente. Eis como corrigir este problema passo a passo.

## 1️⃣ Verificar as permissoes do canal {#permissions}

1. Abre as definicoes do canal `#verification` (clique direito > **Editar Canal**).
2. No separador **Permissoes**:
   - Certifica-te de que `@everyone` **nao** tem permissao para ver o canal.
   - Certifica-te de que o cargo `@Unverified` **tem** permissao para **ver o canal**, **ler o historico de mensagens** e **enviar mensagens**.

## 2️⃣ Verificar a categoria de Boas-vindas {#default-category}

1. Vai a **Definicoes do Servidor** > **Boas-vindas**.
2. Na secao **Canais Predefinidos**, verifica que a categoria que contem `#verification` esta marcada como visivel para os novos membros.
3. Se necessario, move `#verification` para uma categoria marcada.
4. Guarda as alteracoes.

## 3️⃣ Atualizar a configuracao no RaidProtect {#refresh-config}

1. Usa o comando [`/settings`](../setup.md#settings) e vai ao separador **Captcha**.
2. Clica em **Atualizar** para forcar a atualizacao da configuracao.
3. Se o canal estiver agora visivel, o sistema de Captcha funcionara corretamente.

## 4️⃣ Testar com uma conta de teste {#test-account}

Para confirmares que tudo esta configurado corretamente:

1. Junta-te ao servidor com outra conta Discord.
2. Verifica que o canal `#verification` esta visivel a chegada.
3. Introduz o codigo do Captcha enviado pelo RaidProtect.
4. Uma vez verificada, a conta devera ter acesso aos restantes canais.

## 🛠️ Problemas comuns e solucoes {#common-issues}

| Problema | Solucao |
|----------|---------|
| 🔴 O canal `#verification` permanece invisivel | Verifica que esta numa **categoria marcada** nas definicoes de Boas-vindas do Discord. |
| 🚫 O cargo `@Unverified` nao consegue escrever | Concede-lhe permissao de **enviar mensagens** em `#verification`. |
| ❌ O Captcha nao funciona apos alteracoes | Clica em **"Atualizar"** em `/settings > Captcha`. |

---

✅ Seguindo estes passos, o teu sistema de verificacao estara totalmente operacional para receber membros em seguranca e bloquear eficazmente bots ou raids.
