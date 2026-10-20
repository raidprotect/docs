---
title: Captcha (Verificação)
description: "O captcha do RaidProtect bloqueia selfbots e raids: cada novo membro prova que é humano antes de acessar o seu servidor Discord."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import CaptchaMockup from '@site/src/components/DiscordMessage/mockups/captcha';

{/* <CaptchaMockup /> : obsolète en 3.5.0 (montre le mode Challenge avec expulsion automatique) */}

O **captcha** do RaidProtect pede a cada novo membro que copie um código antes de acessar o seu servidor Discord, o que bloqueia os [selfbots](/pt/learn/self-bot) e os [raids](/pt/learn/discord-raid) ao filtrar as contas que não são humanas.

É uma das funcionalidades mais populares do RaidProtect, e continua totalmente opcional. Você escolhe quando impô-lo: a cada chegada, somente durante um raid, ou também para as contas suspeitas.

## ❓ Como funciona o captcha {#working}

O captcha se baseia em um cargo **@Não verificado** e um canal **#verificação**. Quando um usuário entra no seu servidor:
- **Colocação em espera:** atribuímos a ele o cargo **@Não verificado**, que limita seu acesso apenas ao canal **#verificação**.
- **Desafio:** no modo Painel, ele resolve um quebra-cabeça na [Activity RaidProtect](#activity). No modo Desafio, ele copia um código exibido em uma imagem. Veja os [modos de exibição](#display-mode).
- **Sucesso:** o cargo **@Não verificado** é removido e o membro acessa o servidor. Seus [cargos automáticos](./onboarding.md#autorole) e a [mensagem de boas-vindas](./onboarding.md#welcome-message) são enviados nesse momento.
- **Falha:** quando esgota as tentativas, ele é expulso, colocado em jail ou bloqueado por alguns minutos antes de poder tentar de novo, conforme sua configuração. Ele pode voltar e tentar o captcha de novo após uma expulsão.
- **Logs:** cada chegada é registrada no canal de logs com a data de criação da conta, assim como os sucessos, as falhas e os prazos expirados.
- **Diagnóstico:** o RaidProtect detecta sozinho os problemas de permissões, de visibilidade do canal no [Processo de integração](../guides/onboarding.md) do Discord e os vazamentos do cargo **@Não verificado**, e propõe corrigi-los.

:::info
**Sem expulsão por padrão.** Um captcha novo não expulsa mais os membros que não o resolvem: eles permanecem no servidor, sem acesso, até serem verificados. Você pode definir um [prazo antes da expulsão](#timeout).
:::
:::warning
**Gestão das permissões:** as permissões do cargo **@Não verificado** são configuradas automaticamente pelo RaidProtect. Você pode renomear o cargo e o canal, mas não os exclua. O RaidProtect precisa das permissões `KICK_MEMBERS` e `MANAGE_ROLES`, e deve estar posicionado acima do cargo **@Não verificado**.
:::

### Modos de exibição {#display-mode}

| Modo | O que o novo membro vê |
|---|---|
| **Painel (Interativo)**, padrão | Uma mensagem permanente “**Sistema de verificação**” com um botão “**Verificar**”, que abre a [Activity RaidProtect](#activity). O membro não pode escrever em **#verificação**. |
| **Desafio (Clássico)** | Uma imagem é postada em **#verificação** na chegada dele, e ele digita o código como mensagem no canal. |

O modo Painel mantém o canal limpo e permite configurações adicionais: escolha da sanção quando as tentativas se esgotam, [captcha congelado durante um raid](./raid-mode.md#action), [retenção na entrada das contas muito recentes](./onboarding.md#minage). O modo Desafio sempre expulsa o membro ao fim do tempo concedido ou quando suas tentativas se esgotam.

### Acionamento {#trigger}

| Acionamento | Quando o captcha se aplica |
|---|---|
| **Permanente**, padrão | A cada chegada, sem condição. |
| **Automático** | Somente durante um raid ou um nível DISCON elevado. Os outros recém-chegados entram diretamente. |
| **Inteligente** <span className="badge-experiment">Experimentação</span> | Como Automático, mais as contas que parecem suspeitas. |

Com **Automático**, o captcha se impõe durante um raid somente se o [Auto RaidMode](./raid-mode.md#action) estiver definido como “**Enviar ao captcha**” ou “**Captcha congelado durante o raid**”, e durante um alerta [DISCON](./discon.md) a partir do nível 3 (em experimentação com a Shield Update).

O acionamento **Inteligente** avalia o perfil de cada recém-chegado. Um membro aprovado manualmente pela sua equipe nunca é considerado suspeito.

:::info Experimentação: Shield Update
O acionamento Inteligente faz parte da **Shield Update**, prevista para a versão 3.6.0. Até o lançamento, ele está em experimentação, em beta público para os servidores [Premium](/pt/premium). Sem a experimentação, ele não é oferecido.
:::

## 🚪 Como configurar o captcha? {#config}

A configuração do captcha é simples e rápida.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Chegadas**”.
3. Clique em “**Configurar**” ao lado de “**Captcha**”.
4. Escolha o canal em que os captchas serão realizados ou use o botão “**Criar um para mim**”.
5. Clique em “**Ativar**”. O cargo **@Não verificado** é criado e suas permissões são definidas em todos os canais.

O captcha começa no modo **Painel (Interativo)**, com acionamento **Permanente**, 3 tentativas e sem prazo antes da expulsão. Você pode em seguida ajustar cada configuração a partir da mesma tela.

<Settings start="captcha" />

### Modo de exibição e acionamento {#mode}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Chegadas**”.
3. Clique em “**Configurar**” ao lado de “**Captcha**”.
4. Em “**Modo de exibição**”, escolha “**Painel (Interativo)**” ou “**Desafio (Clássico)**”.
5. Em “**Acionamento**”, escolha “**Permanente**”, “**Automático**” ou “**Inteligente**” (Shield Update).

### Verificação na Activity {#activity}

No modo **Painel**, o botão “**Verificar**” abre a **Activity RaidProtect**: o membro resolve um pequeno quebra-cabeça diretamente no Discord, com as cores do seu servidor e com os links de canal do seu [Processo de integração](../guides/onboarding.md). Uma vez verificado, ele descobre ali seu [cartão de boas-vindas](./onboarding.md#welcome-message).

- **Quebra-cabeça errado:** como um código incorreto, ele consome uma tentativa, e a sanção prevista é aplicada quando as tentativas se esgotam. A Activity anuncia primeiro o resultado ao membro, depois a sanção é aplicada.
- **Sucesso:** o membro é verificado quando sai da tela de sucesso. Se clicar em “**Verificar**” nesse meio-tempo, a validação dele é aplicada na hora, em vez de reabrir a Activity.
- **Robô:** um captcha resolvido por um autômato é sancionado imediatamente, como ao esgotar as tentativas: expulsão, jail ou bloqueio conforme sua configuração.
- **Revisão pela sua equipe:** em caso de dúvida, o membro permanece bloqueado na entrada, sem prazo correndo, e sua equipe recebe um relatório automático do captcha. Ele chega aos [logs do captcha](#logs) ou, na falta deles, ao canal de [denúncias](./reports.md) ou, na falta deste, aos logs do servidor. Depois que o relatório é assumido, ele oferece “**Deixar entrar**”, “**Vincular a outro membro**” (com a [Identity Update](#activity-alts)) e “**Recusar**”, que aplica a sua ação de falha do captcha (expulsão, jail ou bloqueio): o menu de sanções não aparece nele.
- **Jail após tentativas esgotadas:** esse jail não tem duração e também abre um relatório de revisão. “**Deixar entrar**” tira o membro do jail e o valida; senão, sancione-o.
- **Verificação do dispositivo recusada:** a Activity pede o consentimento do membro antes de verificar seu dispositivo. Se ele recusar, sofre a ação de falha como após tentativas esgotadas (expulsão, jail ou bloqueio).
- **Activity que não abre:** o membro pode clicar em “**Digitar um código**”. Um código correto passa então por revisão da sua equipe.
- **Apagamento de dados:** um membro pode solicitar o apagamento de seus dados de verificação em [privacy@raidprotect.bot](mailto:privacy@raidprotect.bot). Ele refaz então o captcha, e suas sanções permanecem.

#### Contas duplicadas detectadas pelo captcha <span className="badge-experiment">Experimentação</span> {#activity-alts}

Com a [Identity Update](./alt-accounts.md), a Activity também detecta os recém-chegados provavelmente controlados pela mesma pessoa que um membro do seu servidor:

- **Vínculo seguro:** as contas são vinculadas automaticamente em [`/alt`](./alt-accounts.md#alt). Os logs do captcha o sinalizam, com um botão “**Desvincular**”.
- **Vínculo provável:** se [Uma conta por pessoa](./alt-accounts.md#single-account) estiver ativo, o membro passa por revisão. “**Vincular a outro membro**” as vincula em `/alt` e o deixa entrar; se nenhuma conta tiver sido detectada, uma janela pede que você escolha o membro (“**Conta já no servidor**”). Caso contrário, o membro entra, e os logs do captcha sinalizam o vínculo provável com um botão “**Vincular contas**”.
- **Vínculo seguro não aplicado:** nada é vinculado automaticamente se uma conta do grupo fizer parte da equipe do servidor, se o recém-chegado estiver ligado a vários grupos `/alt`, ou se as duas contas já tiverem cada uma o seu grupo (dois grupos nunca são unidos automaticamente). O vínculo é então proposto a você da mesma forma.

Somente as contas do seu servidor são mostradas a você: nada é dito sobre os outros servidores.

:::info Experimentação: Identity Update
A detecção das contas duplicadas faz parte da **Identity Update**, prevista para a versão 3.7.0. Até o lançamento, ela está em experimentação, em beta público para os servidores [Premium](/pt/premium).
:::

### Modo de teste {#test-mode}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Chegadas**”.
3. Clique em “**Configurar**” ao lado de “**Captcha**”.
4. Clique em “**Ativar**” ao lado de “**Modo de teste**”.

No modo Painel, um membro da sua equipe já verificado (permissão **Gerenciar servidor**, ou o proprietário) pode então clicar em “**Verificar**” para refazer o captcha. As tentativas e o tempo de resolução valem como para um recém-chegado: o log do captcha diz o que teria sido feito, nada é aplicado.

### Dificuldade {#difficulty}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Chegadas**”.
3. Clique em “**Configurar**” ao lado de “**Captcha**”.
4. Clique em “**Editar**” ao lado de “**Dificuldade**”.
5. Ajuste os campos da janela e depois confirme.

<SettingsModal name="captchaDifficulty" />

| Configuração | Valores | Padrão |
|---|---|---|
| “**Tentativas**” | de 1 a 10 tentativas | 3 tentativas |
| “**Ação quando as tentativas se esgotarem**” (Painel) | “**Tentativas esgotadas: Expulsar**”, “**Tentativas esgotadas: Jail**” ou “**Tentativas esgotadas: Bloquear 10 min**” | Expulsar |
| “**Tempo de resolução**” (Painel) | Desativado, 15, 30 ou 45 segundos, 1, 2, 3 ou 5 minutos: o tempo concedido para resolver o quebra-cabeça, contado desde a primeira prova (após o aceite do membro). Um código em imagem tem pelo menos 2 minutos | 30 segundos |
| “**Tempo de resolução (antes da expulsão)**” (Desafio) | 3, 5, 10 ou 15 minutos, ou um valor de 30 segundos a 15 minutos: passado esse prazo, o membro é expulso | 5 minutos |

:::info
A escolha “**Tentativas esgotadas: Jail**” coloca o membro no [jail](./sanctions.mdx#jail) em vez de expulsá-lo. Para isso, é necessário um cargo Jail configurado na aba “**Moderação**” > “**Sanções**”. A escolha “**Tentativas esgotadas: Bloquear 10 min**” mantém o membro no servidor: ele espera 10 minutos e recomeça com tentativas renovadas.
:::

### Prazo antes da expulsão {#timeout}

No modo Painel, esse prazo é contado a partir da chegada do membro: se ele não for verificado a tempo, sofre a sua ação de falha (expulsão, jail ou bloqueio).

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Chegadas**”.
3. Clique em “**Configurar**” ao lado de “**Captcha**”.
4. Em “**Prazo antes da expulsão**”, escolha “**Desativado**”, 5, 15 ou 30 minutos, ou um “**Valor personalizado**” de 30 segundos a 30 minutos.

:::warning
Com o prazo desativado, as contas não verificadas permanecem no servidor e podem escrever por DM para os seus membros. Defina um prazo, ou feche as DMs com o [Bloqueio de DMs](./dm-lock.mdx).
:::

### Alertas da tela Captcha {#alerts}

A tela do captcha exibe quadros quando algo impede a verificação de funcionar bem:
- **Canal invisível na chegada:** o canal de verificação não está em nenhum dos canais padrão do Processo de integração do Discord. Clique em “**Mover para** _categoria_” ou “**Criar uma nova categoria**” para que o corrijamos, ou siga o [guia do Processo de integração](../guides/onboarding.md).
- **Vazamentos do cargo @Não verificado:** cargos atribuídos pelo Processo de integração do Discord ao mesmo tempo que **@Não verificado** contornam a verificação, o cargo **@Não verificado** carrega permissões, **@everyone** tem a permissão `ADMINISTRATOR`, ou canais permanecem visíveis para os membros em verificação (ou no jail). O botão “**Corrigir**” fecha os canais envolvidos.
- **Nível de verificação Alto:** esse nível do Discord faz esperar 10 minutos antes de poder escrever. O captcha já filtra a entrada: o nível recomendado com o captcha é **Médio**.
- **Permissões ausentes:** o RaidProtect precisa de `KICK_MEMBERS` e `MANAGE_ROLES`.

Depois de resolvido o problema, clique em “**Atualizar**”.

### Desativar ou excluir o captcha {#disable}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Chegadas**”.
3. Clique em “**Configurar**” ao lado de “**Captcha**”.
4. Em “**Modo de exibição**”, escolha:
   - “**Desativado**” para suspender a verificação sem perder nada da sua configuração;
   - “**Excluir**” para apagar a configuração e o cargo de verificação. O RaidProtect pede uma confirmação.

:::tip
Para que o captcha fique discreto fora dos raids, em vez de desativá-lo, defina o seu [acionamento](#trigger) como **Automático**.
:::

## ✨ Funcionalidades adicionais {#additional-features}

### Logs separados {#logs}

Se o seu servidor for popular, os logs relacionados ao captcha podem sobrecarregar o seu canal de logs principal. Você pode movê-los para outro canal.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Chegadas**”.
3. Clique em “**Configurar**” ao lado de “**Captcha**”.
4. Clique em “**Editar**” ao lado de “**Logs**”.
5. Escolha o canal em que os logs do captcha serão enviados.

Você também encontra essa configuração na aba “**Moderação**” > “**Logs**”, na linha “**Captcha**”.

### Cargo automático {#autorole}

O cargo automático não é mais configurado no captcha: ele passou para os [Cargos automáticos](./onboarding.md#autorole) da aba “**Chegadas**”, que aceitam vários cargos. Sua configuração anterior foi retomada ali automaticamente. Quando o captcha está ativo, esses cargos são atribuídos após o sucesso no captcha.

### Bypass do captcha {#bypass}

Use o comando: ```/bypass captcha [user]```

Substitua `[user]` pelo [identificador](../guides/id.mdx) desejado; ele terá 10 minutos para entrar no servidor sem precisar resolver o captcha. Se o usuário já estiver presente, o captcha será resolvido automaticamente. Você também pode usar o comando sem especificar um usuário para ver a lista atual de usuários com bypass.

## 🤝 Captcha e anti-raid, melhor juntos {#raid}

O captcha trabalha com as outras proteções das chegadas:
- **[Auto RaidMode](./raid-mode.md#action):** com a ação “**Enviar ao captcha**”, os recém-chegados de uma onda passam pelo captcha em vez de serem expulsos. Com “**Captcha congelado durante o raid**”, eles esperam atrás do captcha e o passam depois da onda.
- **[Idade mínima da conta](./onboarding.md#minage):** a ação “**Reter na entrada**” bloqueia uma conta muito recente em um captcha que ela só poderá resolver depois que a idade for atingida.
- **[DISCON](./discon.md#captcha):** a partir do nível 4, o captcha é ativado se estiver configurado, mesmo que você o tivesse desativado. A partir do nível 3, ele se impõe a todos os recém-chegados, qualquer que seja o seu acionamento (em experimentação com a Shield Update).

## Perguntas frequentes {#faq}

### Quanto tempo o membro tem para resolver o captcha?

No modo Painel, o membro tem 3 tentativas por padrão (1 a 10) e 30 segundos por padrão para resolver o quebra-cabeça (desativável, até 5 minutos), contados desde a primeira prova. Nenhum prazo de expulsão é aplicado por padrão, mas você pode definir um de até 30 minutos. No modo Desafio, ele tem 5 minutos por padrão (de 30 segundos a 15 minutos) antes de ser expulso.

### O que acontece se um membro falhar no captcha?

Quando esgota as suas tentativas, ele é expulso do servidor ou, no modo Painel, colocado em jail ou bloqueado por 10 minutos antes de poder tentar de novo se você escolheu isso. Após uma expulsão, ele pode voltar e tentar o captcha novamente.

### Os membros não verificados são expulsos automaticamente?

Não em um captcha novo: no modo Painel, o prazo antes da expulsão é desativado por padrão. Os membros não verificados permanecem no servidor sem acesso aos canais. Defina um prazo antes da expulsão, ou feche as DMs do servidor, para evitar que escrevam em privado para os seus membros.

### É possível ativar o captcha apenas durante um raid?

Sim. Defina o acionamento como **Automático** e a ação do Auto RaidMode como “**Enviar ao captcha**” ou “**Captcha congelado durante o raid**”. No resto do tempo, os recém-chegados entram diretamente.

### É preciso ativar a comunidade do Discord para usar o captcha?

Não, o captcha funciona sem a comunidade. Se ela estiver ativada, verifique se o canal de verificação faz parte dos canais padrão do [Processo de integração](../guides/onboarding.md).

### É possível isentar um membro do captcha?

Sim, com o comando `/bypass captcha [user]`. O membro dispõe de 10 minutos para entrar sem resolver o captcha, e se ele já estiver presente, o captcha é resolvido automaticamente.

### É possível renomear o cargo @Não verificado e o canal #verificação?

Sim, você pode renomeá-los livremente. Não os exclua, pois o RaidProtect precisa deles para fazer o captcha funcionar e configura as suas permissões automaticamente.
