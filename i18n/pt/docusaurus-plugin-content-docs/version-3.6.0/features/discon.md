---
title: DISCON
description: "O DISCON do RaidProtect define o nível de perigo do seu servidor Discord com um clique: 5 níveis que reforçam as proteções durante um raid."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

O **DISCON** é o nível de perigo do seu servidor, nos moldes do DEFCON. Durante um [raid](/pt/learn/discord-raid), sua equipe não precisa mais abrir `/settings` para mudar a verificação do Discord, ativar o captcha e fechar as DMs uma a uma: um clique no painel DISCON, e aplicamos de uma vez todas as proteções do nível escolhido. Um segundo clique, e desfazemos o que tínhamos ativado.

## ❓ Como funciona? {#working}

- **Cinco níveis**: do nível 5 (calmo) ao nível 1 (catástrofe). Quanto mais baixo o nível, mais rigorosa a proteção.
- **Um painel para a equipe**: uma mensagem postada em um canal reservado à equipe, com um botão por nível. Um clique basta para mudar de nível.
- **Efeitos calculados para o seu servidor**: o que um nível faz depende da sua configuração (captcha configurado ou não, modo Comunidade, ação do Auto RaidMode). A tabela exibida na configuração e no painel descreve exatamente o que acontecerá no seu servidor.
- **Um retorno limpo**: ao descer, desativamos apenas o que o próprio DISCON ativou. Um captcha, um Bloqueio de DMs ou um modo raid que você tinha ativado manualmente permanecem no lugar.
- **Uma mudança manual**: o nível nunca muda sozinho, é a sua equipe que decide.

## 🚦 Os cinco níveis {#levels}

| Nível | Nome | O que aplicamos |
|---|---|---|
| 🔵 **DISCON 5** | Tudo bem | Verificação média do Discord, nada mais. É o nível padrão. |
| 🟢 **DISCON 4** | Vigilância | [Captcha](./captcha.md) ativado se estiver configurado (canal e cargo). Sem captcha, verificação alta do Discord no lugar. |
| 🟡 **DISCON 3** | Alerta | Verificação máxima do Discord, captcha ativado se estiver configurado, [Bloqueio de DMs](./dm-lock.mdx). O captcha se aplica a **todos** os novos membros. |
| 🔴 **DISCON 2** | Crítico | Todo o nível 3, mais o **captcha congelado**: ninguém entra. Sem captcha, ativamos o [modo raid](./raid-mode.md) no lugar. |
| ⚪ **DISCON 1** | Catástrofe | Todo o nível 2, mais o **bloqueio total**: @everyone não pode mais escrever, reagir, falar em voz nem usar comandos. |

### Verificação do Discord {#verification}

Cada nível define o nível de verificação do Discord do seu servidor: média nos níveis 5 e 4 (alta no nível 4 se o captcha não estiver configurado), máxima do nível 3 ao nível 1.

### Captcha na entrada e captcha congelado {#captcha}

- **Nível 4**: ativamos o captcha se estiver configurado, mesmo que você o tivesse desativado, sem mexer no canal nem no cargo dele. Ele segue então a sua configuração de [acionamento](./captcha.md#trigger): em **Automático**, ele ainda não se impõe a ninguém fora de um raid.
- **Nível 3**: o captcha se impõe a todos os novos membros, qualquer que seja o seu acionamento (veja [prioridade sobre os gatilhos](#priority)).
- **Níveis 2 e 1**: colocamos o captcha no modo **Painel** e o **congelamos**. Os novos membros recebem o cargo de verificação e esperam atrás da porta: não podem resolver o desafio enquanto o nível se mantiver. Quando o nível sobe de volta, eles passam pelo captcha normalmente, sem precisar entrar de novo. Ao descer, devolvemos ao captcha o modo de exibição que ele tinha antes.

### Bloqueio de DMs {#dm-lock}

A partir do nível 3, ativamos o [Bloqueio de DMs](./dm-lock.mdx): é pelas DMs que passam os golpes quando o servidor se fecha. Ele exige o [modo Comunidade](../guides/community.md) e a permissão “**Gerenciar servidor**” para o RaidProtect. Sem esses pré-requisitos, o nível se aplica mesmo assim e um aviso indica que o bloqueio das DMs não pôde ser ativado.

### Bloqueio total do nível 1 {#lockdown}

No nível 1, retiramos do cargo **@everyone** as permissões de expressão: enviar mensagens (inclusive em threads), adicionar reações, criar threads, enviar mensagens de voz, anexar arquivos, falar em voz e usar os comandos de aplicativo. Elas são restabelecidas de forma idêntica ao descer.

## 🧩 Pré-requisitos dos níveis 2 e 1 {#requirements}

Para que os níveis 2 e 1 realmente retenham os novos membros na entrada, uma destas duas condições deve ser atendida:

- **Um captcha configurado** (canal e cargo de verificação): é a solução recomendada. O captcha congelado retém todo mundo e depois deixa entrar os membros legítimos quando a calma retorna. [Configure o captcha](./captcha.md#config).
- **Caso contrário, a ação do Auto RaidMode em “Expulsar quem chegar”**: sem captcha, ativamos o modo raid, e é a ação dele que decide o destino dos novos membros. Com a ação “**Bloquear os convites**” (configuração padrão), o modo raid aberto pelo DISCON não expulsa ninguém. Defina-a na [configuração do Auto RaidMode](./raid-mode.md#config).

O bloqueio total do nível 1 exige também que o RaidProtect possa modificar o cargo @everyone (permissão “**Gerenciar cargos**”). Se ele não conseguir, um aviso indica isso.

## 🔓 O que o nível 1 não bloqueia {#lockdown-leaks}

O bloqueio total afeta apenas o cargo **@everyone**. Um membro continua, portanto, podendo falar se outra fonte lhe der essa permissão:

- **Um cargo obtido sem moderador** que carrega essas permissões: cargos das perguntas do processo de integração do Discord, [cargos automáticos](./onboarding.md#autorole) do RaidProtect.
- **Uma permissão de canal** definida para um desses cargos.
- **Uma permissão @everyone definida em um canal** (por exemplo, “Enviar mensagens” permitido em `#geral`).

A configuração do DISCON lista esses acessos em um quadro laranja. Para neutralizá-los, retire essas permissões dos cargos envolvidos e deixe-as para @everyone no nível do servidor: a permissão do servidor basta, a permissão no canal se torna inútil.

:::tip
Os cargos da sua equipe podem manter suas próprias permissões de canal: é isso que lhes permite continuar moderando durante o bloqueio total.
:::

## ⚖️ Prioridade sobre os gatilhos automáticos {#priority}

O [captcha](./captcha.md#trigger) tem uma configuração de acionamento (Automático, Inteligente, Permanente). A partir do **nível 3**, o DISCON passa à frente dessa configuração: o captcha se aplica a **todos** os novos membros, sem avaliação caso a caso. O DISCON é uma decisão da sua equipe, um gatilho automático não a questiona.

Para isso, o captcha deve estar [configurado](./captcha.md#config), com seu canal e seu cargo. Se estiver apenas desativado, nós o ativamos pela duração do alerta. Se nunca foi configurado, o DISCON não pode impô-lo: a verificação do Discord é reforçada e, nos níveis 2 e 1, o [modo raid](./raid-mode.md) assume.

## 🛠️ Configuração do DISCON {#config}

1. Use o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Proteção**”.
3. Clique em “**Configurar**” ao lado de “**DISCON**”.
4. Escolha o canal do painel (de texto ou de voz) no seletor, ou clique em “**Criar o canal do painel**”.
5. Opcionalmente ([Premium](/pt/premium)), escolha um canal de voz de status, ou clique em “**Criar o canal de status**”.

Abaixo da configuração, você encontra o nível atual, os cinco botões de nível e a **tabela dos níveis**, que descreve o que cada nível fará no seu servidor.

<Settings start="discon" />

### Canal do painel {#panel-channel}

Os botões do painel não exigem nenhuma permissão: **é o acesso ao canal que faz o papel de controle**. Escolha, portanto, um canal reservado à sua equipe.

- Um canal visível para todo o servidor é recusado: qualquer membro poderia mudar o nível ali.
- Um canal de voz também serve: o painel é então postado no seu canal de texto integrado.
- “**Criar o canal do painel**” cria um canal `#discon` invisível para @everyone. Abra-o em seguida aos cargos da sua equipe.

### Canal de voz de status <span className="badge-premium">Premium</span> {#voice}

Um canal de voz cujo nome exibe o nível atual, visível em um piscar de olhos na lista de canais: `🔵 DISCON 5`, `🟢 DISCON 4`, `🟡 DISCON 3`, `🔴 DISCON 2`, `⚪ DISCON 1`. Ninguém pode se conectar a ele. “**Criar o canal de status**” o cria ao lado do canal do painel, com as mesmas permissões.

:::info
O Discord limita a renomeação de um canal a cerca de 2 vezes a cada 10 minutos. Se você mudar de nível mais rápido, o nome do canal de voz pode atrasar: o painel continua sendo a referência.
:::

## 📟 O painel DISCON {#panel}

O painel é uma mensagem postada no canal escolhido. Ele exibe o nível atual, a legenda dos cinco níveis com seus efeitos no seu servidor e cinco botões de nível. Sua cor segue o nível atual.

Para mudar de nível, basta clicar no botão correspondente. Se o nível só puder ser aplicado em parte (captcha não configurado, modo Comunidade ausente, permissão faltando), um aviso efêmero indica isso.

O painel DISCON também é o [local reservado do `/display staff`](./display.mdx#staff): você pode adicionar blocos a ele a partir de `/display staff`, mas seu canal é definido apenas na configuração do DISCON.

## 📑 Logs do DISCON {#logs}

Cada mudança de nível é registrada nos seus [logs do servidor](./moderation.mdx#logs), com o membro que a fez:

- “O **nível de perigo** subiu de 5 para 3 por @Moderador.”
- “O **nível de perigo** desceu de 3 para 5 por @Moderador.”

## Perguntas frequentes {#faq}

### Quem pode mudar o nível DISCON?

Qualquer pessoa que veja o canal do painel. Os botões não verificam nenhuma permissão: é o canal, reservado à equipe, que serve de filtro. Os administradores também podem mudar de nível a partir de `/settings`.

### O nível DISCON muda automaticamente durante um raid?

Não. O DISCON é sempre conduzido pela sua equipe. O [Auto RaidMode](./raid-mode.md) continua sendo a proteção automática contra as ondas de chegadas.

### O que acontece quando se volta ao nível 5?

Restabelecemos a verificação média e desfazemos o que o DISCON tinha ativado: captcha, modo do captcha, Bloqueio de DMs, modo raid e bloqueio total. O que você mesmo tinha ativado antes de subir permanece no lugar.

### O nível 2 funciona sem captcha?

Sim, mas ele ativa então o modo raid, que só expulsa os novos membros se a ação do Auto RaidMode for “Expulsar quem chegar”. Para que o nível 2 retenha todo mundo, configure o captcha.

### Por que alguns membros ainda podem escrever no nível 1?

O bloqueio total só retira a palavra do cargo @everyone. Um cargo de chegada ou uma permissão de canal que dê a permissão de escrever a restabelece mesmo assim. A configuração do DISCON lista esses acessos para que você possa retirá-los.

### O canal de voz de status é obrigatório?

Não, ele é opcional e reservado ao Premium. O painel basta para conduzir e exibir o nível.
