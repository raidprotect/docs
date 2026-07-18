---
title: Captcha (Verificação)
---

import { CaptchaSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

import CaptchaMockup from '@site/src/components/DiscordMessage/mockups/captcha';

{/* <CaptchaMockup /> : oculto por enquanto */}

Impeça que selfbots acessem seu servidor Discord e bloqueie raids com o sistema de captcha do RaidProtect.

O captcha é uma das funcionalidades mais populares do RaidProtect, embora permaneça totalmente opcional. Ele permite exigir que cada novo usuário complete um desafio que consiste em digitar um código, a fim de verificar que não se trata de um robô (selfbot).

## ❓ Como funciona o captcha {#working}

O captcha se baseia em um cargo **@Não verificado** e um canal chamado **#verificação**. Quando um usuário entra no seu servidor:
- O bot atribui automaticamente o cargo **@Não verificado** a esse usuário, limitando seu acesso apenas ao canal **#verificação**.
- Nesse canal, o bot envia uma imagem contendo 6 letras maiúsculas. O usuário deve reproduzir as letras no canal para provar que é humano.
- Se a resposta estiver correta, o cargo **@Não verificado** é removido e o usuário acessa normalmente o servidor. Caso contrário, ele é automaticamente expulso.
- Quando o captcha está ativado, o RaidProtect publica automaticamente uma mensagem no canal de logs, indicando a data de criação da conta de cada novo usuário.
- O RaidProtect detecta automaticamente os problemas de permissões (canal e cargo), bem como a visibilidade padrão do canal durante o processo de integração do Discord.

:::info
**Tempo e tentativas:** Os usuários têm **1 a 10 minutos** para completar o captcha (**5 minutos por padrão**) e **1 a 3 tentativas** (**2 tentativas por padrão**). Além disso, são automaticamente expulsos do servidor.
:::
:::warning
**Gestão das permissões:** As permissões do cargo **@Não verificado** são configuradas automaticamente pelo RaidProtect. Você pode renomear o cargo e o canal, mas não os exclua.
:::

## 🚪 Configuração do captcha {#config}

A configuração do captcha é simples e rápida.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botão "**Captcha**".
3. Escolha o canal em que os captchas serão realizados ou use o botão "**Criar um para mim**".
4. O cargo **@Não verificado** é criado e configurado automaticamente.
5. Configure o número de tentativas permitidas (entre 1 e 3) e o tempo máximo de resolução (entre 1 e 10 minutos).

<CaptchaSettingsMockup />

## ✨ Funcionalidades adicionais {#additional-features}

Para se adaptar às necessidades do seu servidor, o captcha do RaidProtect oferece opções personalizáveis.

### Logs separados {#logs}

Se o seu servidor for popular, os logs relacionados ao captcha podem sobrecarregar o seu canal de logs principal. Você pode movê-los para outro canal.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botão "**Logs**".
3. Selecione "**Captcha**".
4. Escolha o canal em que os logs do captcha serão indexados ou use o botão "**Criar um para mim**".

### Cargo automático {#autorole}

Se você usa um sistema de cargo automático (autorole) diferente do RaidProtect, isso pode interferir com o captcha. Substitua seu autorole existente pelo do RaidProtect.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botão "**Captcha**".
3. Selecione "**Cargo automático**".
4. Escolha o cargo que será atribuído aos membros que validarem o captcha.

### Bypass do captcha {#bypass}

Utilize o comando: ```/bypass captcha [usuário]```

Substitua `[usuário]` pelo identificador desejado; ele terá 10 minutos para entrar no servidor sem precisar resolver o captcha. Se o usuário já estiver presente, o captcha será resolvido automaticamente. Você também pode usar o comando sem especificar um usuário para ver a lista atual de usuários com bypass.
