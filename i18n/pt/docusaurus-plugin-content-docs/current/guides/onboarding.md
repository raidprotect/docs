---
title: Processo de Integração e Captcha
---

Se o canal `#verification` não estiver visível por defeito para os novos membros, isto pode impedir o bom funcionamento do sistema de Captcha. Eis como corrigir este problema passo a passo.

![Captura de ecrã do alerta de captcha](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-captcha-alert.webp)

## 1. Verificar as permissões do canal {#permissions}

1. Abra as definições do canal `#verification` (clique direito > **Editar Canal**).
2. No separador **Permissões**:
   - Certifique-se de que `@everyone` **não** tem permissão para ver o canal.
   - Verifique que o cargo `@Não Verificado` **tem** permissão para **ver o canal**, **ler o histórico de mensagens** e **enviar mensagens**.

![Captura de ecrã da verificação de permissões do canal](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-verification-channel-permissions.webp)

## 2. Verificar a categoria de integração {#default-category}

1. Vá a **Definições do Servidor** > **Processo de Integração**.
2. Na secção **Canais Predefinidos**, verifique que a categoria que contém `#verification` está marcada como visível para os novos membros.
3. Se necessário, mova `#verification` para uma categoria marcada.
4. Guarde as alterações.

![Captura de ecrã da verificação da categoria de integração](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-welcome-category.webp)

## 3. Atualizar a configuração no RaidProtect {#refresh-config}

1. Utilize o comando [`/settings`](../setup.md#settings) e depois vá ao separador **Captcha**.
2. Clique em **Atualizar** para forçar a atualização da configuração.
3. Se o canal estiver agora visível, o sistema de Captcha funcionará corretamente.

## 4. Testar com uma conta de teste {#test-account}

Para confirmar que tudo está devidamente configurado:

1. Entre no servidor com outra conta Discord.
2. Verifique que o canal `#verification` está visível à chegada.
3. Introduza o código de Captcha enviado pelo RaidProtect.
4. Após a verificação, a conta deverá ter acesso aos outros canais.

## Problemas comuns e soluções {#common-issues}

| Problema | Solução |
|---------|----------|
| O canal `#verification` permanece invisível | Verifique que está numa **categoria marcada** na integração do Discord. |
| O cargo `@Não Verificado` não pode escrever | Conceda-lhe **permissão para enviar mensagens** em `#verification`. |
| O Captcha não funciona após a modificação | Clique em **"Atualizar"** em `/settings > Captcha`. |

---

Seguindo estes passos, o seu sistema de verificação estará totalmente operacional para acolher membros de forma segura e bloquear eficazmente bots ou raids.
