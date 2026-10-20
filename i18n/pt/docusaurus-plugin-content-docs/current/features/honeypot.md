---
title: HoneyPot
description: "O HoneyPot do RaidProtect é um canal-armadilha anti-spam que detecta e sanciona automaticamente contas invadidas e bots de spam no seu servidor Discord."
---

import HoneypotMockup from '@site/src/components/DiscordMessage/mockups/honeypot';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

<HoneypotMockup />

O **HoneyPot** (ou canal-armadilha) do RaidProtect é uma funcionalidade anti-spam: um canal onde **[ninguém deve escrever](/pt/learn/honeypot-warming)**. Como os membros reais sabem que precisam evitar esse canal, os únicos que publicam ali são as **[contas invadidas](/pt/learn/token-grabber)** ou os bots de spam: o RaidProtect os sanciona automaticamente.

:::info
**Você já tem o ScamLens por padrão.** O antigolpe [ScamLens](./scam-images.md) está ativo no seu servidor sem nenhuma configuração: especializado em **imagens de golpe**, ele as detecta, as remove e sanciona a conta comprometida com altíssima confiabilidade. Para os golpes por imagem, o ScamLens já é mais que suficiente. O HoneyPot é útil sobretudo se você quiser segurança máxima e bloquear os **outros tipos de spam**: spam de links, raids de texto, bots.
:::

## ❓ Como funciona? {#working}

Quando você ativa o HoneyPot, o RaidProtect cria um canal de texto **bem no topo do seu servidor**, com um nome claro escolhido aleatoriamente. Esse canal tem três características:
- **Todo mundo pode escrever nele**, inclusive os membros que ainda não validaram o captcha e os que têm o [cargo Jail](./sanctions.mdx#jail). Isso é de propósito: uma conta invadida ou um bot não deve conseguir evitar a armadilha.
- **Uma mensagem de aviso** (“NÃO ENVIE MENSAGENS AQUI”) é publicada quando o canal é criado, com um botão “**Translate**” para que cada um possa lê-la no seu idioma.
- **Um contador de contas sinalizadas** aparece na forma de um botão ao lado de “**Translate**” a partir da primeira conta capturada.

Assim que um membro publica nesse canal:
- O RaidProtect aplica a **sanção que você escolheu** (banimento, softban, kick, timeout, jail ou mute), sem lhe enviar mensagem privada.
- As **mensagens enviadas por esse membro nos últimos 10 minutos** são excluídas em todo o servidor, para conter o spam caso ele já tenha se espalhado por outros canais.
- A ação é adicionada aos logs de moderação automática (motivo: *Spam através de conta de usuário comprometida*).

Se você escolheu um [prazo antes da sanção](#grace), o membro tem primeiro a chance de dizer que foi um engano.

## 🛠️ Configurar o HoneyPot {#config}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Proteção**”.
3. Clique em “**Configurar**” ao lado de “**HoneyPot**”.
4. Clique em “**Ativar**” no canto superior direito: o RaidProtect cria o canal, ajusta as permissões e publica a mensagem de aviso.

<Settings start="honeypot" />

Depois que o canal for criado, você pode:
- **Regenerar canal** (botão ao lado de “**Canal HoneyPot**”): exclui o antigo e cria um novo, com um novo nome. Útil se você achar que algum membro compartilhou o nome do canal-armadilha para ajudar outras contas a evitá-lo.
- **Desativar** (interruptor no canto superior direito): exclui o canal e para a funcionalidade.

:::warning Permissões necessárias
O RaidProtect precisa das permissões `Gerenciar canais` e `Banir membros`. Sem elas, um quadro de erro é exibido e os botões ficam esmaecidos.
:::

### Escolher a sanção {#sanction}

Por padrão, o HoneyPot aplica um **Softban**. Várias [sanções](/pt/learn/discord-sanctions) estão disponíveis no seletor “**Sanção aplicada**”:

| Sanção | Efeito | Disponibilidade |
|---|---|---|
| **Banimento** | Exclui o membro do servidor e apaga suas mensagens recentes. Temporário (1 dia por padrão). | Gratuito |
| **Softban** | Bane e depois desbane: apaga as mensagens, mas o membro pode voltar | Gratuito |
| **Expulsão (Kick)** | Exclui o membro, que pode voltar livremente | Premium |
| **Timeout** | Impede o membro de falar durante um tempo escolhido (máx. 28 dias) | Premium |
| **Jail** | Atribui o [cargo Jail](./sanctions.mdx#jail) configurado no seu servidor | Premium |
| **Mute** | Atribui o [cargo Mute](./sanctions.mdx#mute) configurado no seu servidor | Premium |

Para as sanções com duração (Banimento, Timeout, Jail, Mute), escolha uma duração no seletor “**Duração**”: 5 minutos, 1 hora, **1 dia** (padrão) ou 28 dias, ou “**Valor personalizado**” para informar a sua (por exemplo `5m`, `1h`, `2d`; mínimo 1 minuto). O seletor fica esmaecido para o Softban e a Expulsão, que não têm duração.

:::tip
O **Softban** é um bom meio-termo: ele limpa as mensagens e expulsa a conta invadida, mas o dono legítimo pode voltar assim que sua conta estiver protegida.
:::

:::info
Apenas o **Banimento** e o **Softban** permitem que o Discord exclua nativamente as mensagens da conta invadida **em todo o servidor** de uma só vez.  
Para as outras sanções (Kick, Timeout, Jail, Mute), o RaidProtect exclui ele mesmo as mensagens: elas ficam reservadas aos servidores [Premium](/pt/premium).
:::

:::info
- Um **Jail** ou um **Mute** sem cargo configurado se torna um **Timeout**. O seletor indica isso abaixo da sanção.
- Se o seu servidor perder o Premium, uma sanção Premium volta automaticamente para **Softban** no próximo acionamento.
:::

### Prazo antes da sanção <span className="badge-experiment">Experimentação</span> {#grace}

Um membro de boa-fé pode escrever no HoneyPot por engano. O **prazo antes da sanção** dá a ele tempo para avisar antes de ser sancionado.

:::info Experimentação: Shield Update
O prazo antes da sanção faz parte da **Shield Update**, prevista para a versão 3.6.0. Até o lançamento, ele está em experimentação, em beta público para os servidores [Premium](/pt/premium).
:::

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Proteção**”.
3. Clique em “**Configurar**” ao lado de “**HoneyPot**”.
4. Em “**Prazo antes da sanção**”, escolha “**Sanção imediata**” (padrão) ou “**Perguntar primeiro, sanção após**” 30 segundos, 1 minuto, 2 minutos ou 5 minutos.

Com um prazo:
- a mensagem é **removida** e o membro é **mencionado** no canal-armadilha, com o botão “**Foi um engano**”;
- somente esse membro pode clicar no botão. Se clicar a tempo, nenhuma sanção é aplicada;
- sem clique antes do fim do prazo, a sanção é aplicada.

:::info
Um bot de spam geralmente posta o mesmo texto em todo lugar. Uma conta que posta a **mesma mensagem** em outro lugar é sancionada **imediatamente**, sem esperar.
:::

### Membros ignorados {#ignore}

Você pode escolher **quem não é sancionado** em caso de mensagem no HoneyPot, no seletor “**Membros ignorados**”:
- “**Ninguém (exceto membros não moderáveis)**” *(padrão)*: todo mundo é sancionado, até a equipe. Apenas os membros que o bot não pode moderar (cargo mais alto do que o do RaidProtect) são poupados automaticamente.
- “**Staff (Admin / Gerenciar servidor / Gerenciar canais)**”: os membros com a permissão `Administrador`, `Gerenciar servidor` ou `Gerenciar canais` não são sancionados.
- “**Membros ignorados pelo Antispam**”: o RaidProtect reutiliza os cargos e membros ignorados do [Anti-spam](./anti-spam.mdx#ignore). Se essa lista estiver vazia, são ignorados os membros com a permissão `Administrador`, `Gerenciar servidor` ou `Gerenciar mensagens`.

:::info
Em todos os casos, o RaidProtect **nunca sanciona a si mesmo nem os outros bots**. Os bots não acionam o HoneyPot.
:::

## ℹ️ Comando /honeypot {#command}

O comando `/honeypot` abre diretamente a tela de configuração do HoneyPot, sem passar por `/settings`. Ele exige a permissão `Gerenciar servidor`.

Use o comando: ```/honeypot```

## 🤝 HoneyPot e ScamLens, melhor juntos {#scamlens-combo}

O RaidProtect já integra o **[ScamLens](./scam-images.md)**, que analisa as imagens e remove as que são golpes conhecidos (cripto, falsos giveaways, falsas promoções de cassinos).

Os dois funcionam de mãos dadas:
- **O ScamLens age primeiro.** Se a imagem publicada no HoneyPot já for conhecida, é o ScamLens que exclui a mensagem e sanciona a conta comprometida; a sanção do HoneyPot não é aplicada por cima.
- **O HoneyPot assume** todo o resto: novas imagens ainda não conhecidas, spam de links, menções em massa, raids de texto, bots.
- **Cada nova imagem capturada por um HoneyPot enriquece o ScamLens**, que poderá depois bloqueá-la em todos os servidores protegidos.
- **O ScamLens segue o seu HoneyPot**: enquanto você não lhe der uma configuração própria, ele aplica a [sanção e a duração](./scam-images.md#config) do seu HoneyPot.

O ScamLens já está ativo por padrão no seu servidor. **Ativar o HoneyPot não quebra nada**: ele apenas complementa o que já existe, e ajuda o RaidProtect a proteger melhor toda a comunidade.

## Perguntas frequentes {#faq}

### O HoneyPot é útil se eu já tenho o ScamLens?

Para os golpes por imagem, o ScamLens já é mais que suficiente: ele está ativo por padrão e os detecta, remove e sanciona sozinho. O HoneyPot é útil sobretudo para bloquear os outros tipos de spam, como o spam de links, os raids de texto e os bots.

### Qual sanção o HoneyPot aplica?

Por padrão, um Softban. Você pode escolher outra sanção: Banimento e Softban são gratuitos, enquanto Kick, Timeout, Jail e Mute são reservados aos servidores Premium. O Banimento do HoneyPot dura 1 dia por padrão, uma duração que você pode modificar.

### Um membro escreveu no HoneyPot por engano, o que fazer?

Ative o prazo antes da sanção: a mensagem é removida, o membro é mencionado e tem de 30 segundos a 5 minutos para clicar em “**Foi um engano**”. Se clicar a tempo, não é sancionado. Uma conta que postou a mesma mensagem em outro lugar é, em compensação, sancionada imediatamente.

### Os membros da equipe são sancionados se escreverem no HoneyPot?

Isso depende da opção “**Membros ignorados**”. Por padrão, todo mundo é sancionado, até a equipe. O RaidProtect nunca sanciona a si mesmo, e os bots nunca acionam a armadilha.

### O que acontece com as mensagens de uma conta capturada pelo HoneyPot?

Além da sanção, as mensagens enviadas por esse membro nos últimos 10 minutos são excluídas em todo o servidor, para conter o spam caso ele já tenha se espalhado por outros canais.
