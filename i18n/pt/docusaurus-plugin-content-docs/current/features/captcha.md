---
title: Captcha (Verificação)
---

Impeça que selfbots acedam ao seu servidor Discord e bloqueie raids com o sistema de captcha do RaidProtect.

O captcha é uma das funcionalidades mais populares do RaidProtect, embora permaneça totalmente opcional. Permite-lhe exigir que cada novo utilizador complete um desafio que consiste em introduzir um código, de forma a verificar que não é um bot (selfbot).

## ❓ Como funciona o captcha {#working}

O captcha baseia-se num cargo **@Não Verificado** e num canal chamado **#verificação**. Quando um utilizador entra no seu servidor:
- O bot atribui automaticamente o cargo **@Não Verificado** a este utilizador, limitando o seu acesso apenas ao canal **#verificação**.
- Neste canal, é enviada pelo bot uma imagem contendo 6 letras maiúsculas. O utilizador deve escrever as letras no canal para provar que é humano.
- Se a resposta estiver correta, o cargo **@Não Verificado** é removido e o utilizador obtém acesso normal ao servidor. Caso contrário, é automaticamente expulso.
- Quando o captcha está ativado, o RaidProtect publica automaticamente uma mensagem no canal de registos, indicando a data de criação da conta de cada novo utilizador.
- O RaidProtect deteta automaticamente problemas de permissões (canal e cargo), bem como a visibilidade predefinida do canal durante o processo de integração do Discord.

:::info
**Limite de tempo e tentativas:** Os utilizadores têm **1 a 10 minutos** para completar o captcha (**5 minutos por defeito**) e **1 a 3 tentativas** (**2 tentativas por defeito**). Ultrapassado esse limite, são automaticamente expulsos do servidor.
:::
:::warning
**Gestão de permissões:** As permissões do cargo **@Não Verificado** são automaticamente configuradas pelo RaidProtect. Pode renomear o cargo e o canal, mas não os elimine.
:::

## 🚪 Configuração do captcha {#config}

A configuração do captcha é rápida e fácil.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botão "**Captcha**".
3. Escolha o canal onde os captchas serão realizados ou utilize o botão "**Criar um para mim**".
4. O cargo **@Não Verificado** é automaticamente criado e configurado.
5. Configure o número de tentativas permitidas (entre 1 e 3) e o tempo máximo de resolução (entre 1 e 10 minutos).

![Captura de ecrã das definições do captcha](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-captcha.webp)

## ✨ Funcionalidades adicionais {#additional-features}

Para se adaptar às necessidades do seu servidor, o captcha do RaidProtect oferece opções personalizáveis.

### Registos separados {#logs}

Se o seu servidor for popular, os registos relacionados com o captcha podem sobrecarregar o seu canal de registos principal. Pode movê-los para outro canal.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botão "**Registos**".
3. Selecione "**Captcha**".
4. Escolha o canal onde os registos do captcha serão armazenados ou utilize o botão "**Criar um para mim**".

### Cargo automático {#autorole}

Se utilizar um sistema de cargo automático (autorole) diferente do RaidProtect, este pode interferir com o captcha. Substitua o seu autorole existente pelo do RaidProtect.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botão "**Captcha**".
3. Selecione "**Cargo automático**".
4. Escolha o cargo que será atribuído aos membros que completarem o captcha.

### Contornar o captcha {#bypass}

Utilize o comando: ```/bypass captcha [user]```

Substitua `[user]` pelo identificador desejado; essa pessoa terá 10 minutos para entrar no servidor sem precisar de resolver o captcha. Se o utilizador já estiver presente, o captcha será automaticamente resolvido. Pode também utilizar o comando sem especificar um utilizador para ver a lista atual de utilizadores com bypass.
