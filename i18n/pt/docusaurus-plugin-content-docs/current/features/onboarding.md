---
title: Chegadas e boas-vindas
description: "O módulo de boas-vindas do RaidProtect recebe os novos membros do seu servidor Discord, entrega os cargos deles e filtra as contas muito recentes."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

As **boas-vindas** do RaidProtect cuidam dos novos membros do seu servidor Discord assim que eles chegam: uma **mensagem de boas-vindas** com um cartão no nome deles, **cargos automáticos** e uma **idade mínima da conta** que mantém à distância as contas criadas para a ocasião, frequentemente usadas em [raids](/pt/learn/discord-raid). Essas três configurações ficam na aba “**Chegadas**” de `/settings`, ao lado do [captcha](./captcha.md) e do [Auto RaidMode](./raid-mode.md).

## ❓ Como funciona? {#working}

Quando um usuário entra no seu servidor, o [modo raid](./raid-mode.md#action), a [idade mínima da conta](#minage) e depois o [captcha](./captcha.md) se aplicam antes da admissão dele. Uma vez admitido, ele recebe seus [cargos automáticos](#autorole) e sua [mensagem de boas-vindas](#welcome-message).

## 👋 Mensagem de boas-vindas {#welcome-message}

A mensagem de boas-vindas é enviada no canal de sua escolha quando um membro é admitido no servidor. Ela contém o seu texto e um **cartão de boas-vindas** gerado para cada membro: seu avatar, “Boas-vindas a” seguido do nome do servidor, e seu número de membro.

<Settings start="welcome" />

### Ativar a mensagem de boas-vindas {#welcome-config}

1. Use o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Chegadas**”.
3. Clique em “**Configurar**” ao lado de “**Mensagem de boas-vindas**”.
4. Em “**Canal de boas-vindas**”, escolha o canal de texto onde a mensagem será enviada. Escolher um canal ativa a mensagem.

O interruptor no canto superior direito da tela ativa ou desativa a mensagem de boas-vindas. Uma prévia da mensagem é exibida abaixo da tela e é atualizada a cada modificação.

:::info
O canal de boas-vindas não pode ser o do captcha, do jail, do HoneyPot ou do DISCON. Se o canal for excluído, a configuração é esvaziada.
:::

### Texto e variáveis {#welcome-text}

1. Use o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Chegadas**”.
3. Clique em “**Configurar**” ao lado de “**Mensagem de boas-vindas**”.
4. Em “**Conteúdo da mensagem**”, clique em “**Texto**”.
5. Escreva a sua mensagem (no máximo 1.200 caracteres) e confirme. Deixe o campo vazio para voltar à mensagem padrão.

<SettingsModal name="welcomeText" />

O texto padrão é “Bem-vindo(a) `{user.mention}` ao **`{server.name}`**! 🎉”, no idioma do servidor. Você pode usar estas variáveis:

| Variável | Substituída por |
|---|---|
| `{user.mention}` | A menção do membro |
| `{user.name}` | Seu nome de usuário |
| `{user.displayname}` | Seu nome de exibição |
| `{user.id}` | Seu [ID](../guides/id.mdx) |
| `{server.name}` | O nome do servidor |
| `{server.member_count}` | O número de membros do servidor |
| `{server.id}` | O ID do servidor |

### Mencionar o membro {#welcome-mention}

A opção “**Mencionar membro**”, ativada por padrão, notifica o novo membro quando sua mensagem de boas-vindas é postada. Ela menciona apenas os recém-chegados, nunca @everyone nem os cargos.

### Botões {#welcome-buttons}

Você pode adicionar abaixo da mensagem botões que levam a um canal do servidor, por exemplo “Ler o regulamento”.

1. Use o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Chegadas**”.
3. Clique em “**Configurar**” ao lado de “**Mensagem de boas-vindas**”.
4. Em “**Gerenciar botões**”, escolha “**Adicionar um botão**”.
5. Dê um nome ao botão, escolha o canal a vincular e, se quiser, um **emoji**: um emoji padrão, ou um emoji deste servidor (`<:nome:id>`, `:nome:` ou o ID dele). Um emoji inválido não impede o salvamento: o botão é criado sem emoji.

Para modificar ou excluir um botão, selecione-o na mesma lista.

**Limites:** 2 botões na versão gratuita, 4 botões na versão [premium](/pt/premium). Se o Premium expirar, apenas os 2 primeiros botões continuam exibidos.

### Cor <span className="badge-premium">Premium</span> {#welcome-color}

Com o [Premium](/pt/premium), clique em “**Cor**” em “**Conteúdo da mensagem**” para escolher a cor da barra à esquerda da mensagem: uma cor RaidProtect da lista, ou um código hexadecimal (por exemplo `#D35F5F`). Sem escolha, a mensagem usa a cor do apelido do bot se você o [personalizou](/pt/premium), caso contrário a cor padrão. O cartão de boas-vindas é tingido com a mesma cor.

### Afluxo e raids {#welcome-raid}

- **Agrupamento:** quando muitos membros chegam ao mesmo tempo, as chegadas são agrupadas para não inundar o canal.
- **Pausa durante um raid:** enquanto o [modo raid](./raid-mode.md) do RaidProtect ou o [Bloqueio de Entradas](./join-lock.mdx) estiver ativo, nenhuma mensagem de boas-vindas é enviada.

## 🏷️ Cargos automáticos {#autorole}

Os cargos automáticos são dados a cada novo membro assim que ele chega, ou após a aprovação no [captcha](./captcha.md) se ele estiver ativo. Eles substituem o antigo cargo automático do captcha, cuja configuração foi retomada automaticamente.

1. Use o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Chegadas**”.
3. Clique em “**Configurar**” ao lado de “**Cargos automáticos**”.
4. Selecione um ou mais cargos.

Para remover todos os cargos automáticos, clique em “**Redefinir**”.

<Settings start="autorole" />

**Limites:** 3 cargos na versão gratuita, 10 cargos na versão [premium](/pt/premium).

:::warning
Escolha cargos sem permissões: um cargo dado na chegada não deveria conceder nenhum poder. O RaidProtect recusa os cargos gerenciados por uma integração, os que estão acima do dele ou do seu, os que dão uma permissão de moderação e o cargo não verificado do captcha. Ele avisa você se um cargo escolhido ganhar permissões mais tarde.
:::
:::info
Se o seu servidor usa outro bot para o cargo automático, ele corre o risco de dar o cargo antes do captcha. Substitua-o pelos cargos automáticos do RaidProtect.
:::

## 🤖 Chegada dos bots {#bots}

É o **antibot** do RaidProtect: ele controla os bots que entram no seu servidor.

1. Use o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Chegadas**”.
3. Clique em “**Configurar**” ao lado de “**Bots**”.

- **Cargos dos bots**: dados a cada bot assim que ele chega, **no lugar** dos [cargos automáticos](#autorole). Sem cargo escolhido, os bots recebem os cargos automáticos. **Limites:** 1 cargo na versão gratuita, 15 com o [Premium](/pt/premium).
- **Expulsar os bots não autorizados**: todo bot adicionado é expulso, a menos que o proprietário o tenha [autorizado](#bypass-bot) antes. Desativado por padrão, **somente o proprietário do servidor** pode ativá-lo.

O RaidProtect recusa os cargos gerenciados por uma integração, os que estão acima do dele ou do seu e os que dão a permissão **Administrador**. Um cargo com uma permissão de moderação é aceito, com um aviso: reserve-o para bots de confiança.

### Autorizar um bot {#bypass-bot}

Use o comando: ```/bypass bot [bot]```

Substitua `[bot]` pelo bot a autorizar: ele poderá entrar no servidor **uma vez**, nos 10 minutos seguintes, sem ser expulso. Sem bot, o comando lista os bots autorizados no momento. Cada autorização é registrada nos seus logs.

:::info
O RaidProtect precisa da permissão “**Expulsar membros**” e de um cargo acima do cargo do bot para expulsá-lo. Caso contrário, o log indica isso e o bot permanece.
:::

## 🎂 Idade mínima da conta {#minage}

Para reforçar a segurança, você pode exigir uma idade mínima para as contas Discord dos novos membros. As contas criadas pouco antes de um raid não passam pela porta. O filtro se aplica a cada chegada.

1. Use o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Chegadas**”.
3. Clique em “**Configurar**” ao lado de “**Idade mínima da conta**”.
4. Em “**Idade mínima da conta**”, escolha 2 horas, 12 horas, 1 dia ou 2 dias, ou um “**Valor personalizado**” (por exemplo `0a 3d 1h`, no máximo 10 anos).
5. Em “**Ação**”, escolha o que acontece com as contas muito recentes.

Para desativar o filtro, clique em “**Redefinir**”. O RaidProtect precisa da permissão `KICK_MEMBERS`.

<Settings start="minage" />

### Ações {#minage-action}

| Ação | Efeito sobre uma conta muito recente |
|---|---|
| “**Expulsar**” (padrão) | Ela é expulsa a cada tentativa enquanto sua conta for muito recente. |
| “**Quarentena até a idade exigida**” | Ela entra sem ver nada do servidor (através do [cargo Jail](./sanctions.mdx#jail)) e sai da quarentena assim que atinge a idade exigida, na data indicada. |
| “**Reter na entrada**” | Ela fica bloqueada em um [captcha](./captcha.md) que só pode resolver depois que a idade for atingida. |

A conta recebe uma mensagem privada com a data em que terá acesso ao servidor. As expulsões, as quarentenas e os banimentos são registrados no canal de logs.

:::info
- “**Quarentena até a idade exigida**” exige um cargo Jail, configurado na aba “**Moderação**” > “**Sanções**”. Sem ele, o RaidProtect propõe que você o configure ou recorra a “**Banir até a idade exigida**”: a conta sai do servidor e seu banimento é removido automaticamente na data certa.
- “**Reter na entrada**” exige um captcha ativo no modo **Painel (Interativo)**.
:::

### 🎫 Bypass da idade mínima {#bypass-minage}

Use o comando: ```/bypass minage [user]```

Substitua `[user]` pelo [ID](../guides/id.mdx) desejado; esse usuário terá 10 minutos para entrar no servidor sem ser bloqueado pela idade exigida. Você também pode usar o comando sem especificar um usuário para saber a lista atual de usuários com bypass. Ele também remove a quarentena de uma conta muito recente. O `/unjail` não a remove: ele indica o comando a usar.

## Perguntas frequentes {#faq}

### Quando a mensagem de boas-vindas é enviada?

Quando o membro é admitido: assim que ele chega, se o captcha não se aplica, caso contrário após a aprovação no captcha. Ela não é enviada durante um raid ou um Bloqueio de Entradas.

### É possível remover o cartão de boas-vindas?

Não, o cartão de boas-vindas é anexado a cada mensagem de boas-vindas. Com o Premium, você pode mudar sua cor.

### Quantos cargos automáticos é possível dar?

3 cargos na versão gratuita e 10 com o Premium. Os cargos que carregam uma permissão de moderação são recusados.

### Os cargos automáticos são dados antes do captcha?

Não. Quando o captcha se aplica ao membro, seus cargos automáticos são dados a ele após a aprovação no captcha.

### Qual idade mínima escolher?

Um valor de algumas horas a 1 dia basta para afastar a maioria das contas criadas para um raid, sem incomodar os membros de verdade. O [comando `/setup`](../setup.md) define 6 horas por padrão.

### Uma conta muito recente é banida?

Não, não por padrão: ela é expulsa a cada tentativa. Você também pode colocá-la em quarentena até a idade exigida ou retê-la atrás do captcha. O banimento temporário é apenas um recurso alternativo quando o cargo Jail não está configurado.
