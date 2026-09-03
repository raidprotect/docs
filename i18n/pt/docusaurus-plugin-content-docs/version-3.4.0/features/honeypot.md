---
title: HoneyPot
description: "O HoneyPot do RaidProtect é um canal-armadilha antispam que detecta e sanciona automaticamente contas hackeadas e bots de spam no seu servidor Discord."
---

import HoneypotMockup from '@site/src/components/DiscordMessage/mockups/honeypot';

<HoneypotMockup />

O **HoneyPot** (ou canal-armadilha) do RaidProtect é uma funcionalidade antispam: um canal onde **ninguém deve escrever**. Como os membros reais sabem que precisam evitar esse canal, os únicos que publicam ali são as **contas invadidas** ou os bots de spam: o RaidProtect os sanciona automaticamente.

:::info
**Você já tem o ScamLens por padrão.** O antifraude [ScamLens](./scam-images.md) está ativo no seu servidor sem nenhuma configuração: especializado em **imagens de fraude**, ele as detecta, as remove e sanciona a conta comprometida com altíssima confiabilidade. Para as fraudes por imagem, o ScamLens já é mais que suficiente. O HoneyPot é útil sobretudo se você quiser segurança máxima e bloquear os **outros tipos de spam**: spam de links, raids de texto, bots.
:::

## ❓ Como funciona? {#working}

Quando você ativa o HoneyPot, o RaidProtect cria um canal de texto **bem no topo do seu servidor**, com um nome claro escolhido aleatoriamente. Esse canal tem três características:
- **Todo mundo pode escrever nele**, inclusive os membros que ainda não validaram o captcha. Isso é de propósito: uma conta invadida ou um bot não pode conseguir evitar a armadilha.
- **Uma mensagem de aviso** é publicada quando o canal é criado, com um botão "Traduzir" para que cada um possa lê-la no seu idioma.
- **Um contador público** exibe o número de contas já capturadas pela armadilha, atualizado automaticamente.

Assim que um membro publica nesse canal:
- O RaidProtect aplica a **sanção que você escolheu** (banimento, softban, kick, timeout, jail ou mute).
- As **mensagens enviadas por esse membro nos últimos 10 minutos** são excluídas em todo o servidor, para conter o spam caso ele já tenha se espalhado por outros canais.
- A ação é adicionada aos logs de moderação automática (motivo: *Spam através de conta de usuário comprometida*).

## 🛠️ Configurar o HoneyPot {#config}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botão "**HoneyPot**".
3. Clique em "**Criar o canal**": o RaidProtect cria o canal, ajusta as permissões e publica a mensagem de aviso.

Depois que o canal for criado, você pode:
- **Regenerar o canal**: exclui o antigo e cria um novo (com um novo nome). Útil se você achar que algum membro compartilhou o nome do canal-armadilha para ajudar outras contas a evitá-lo.
- **Desativar**: exclui o canal e para a funcionalidade.

### Escolher a sanção {#sanction}

Várias sanções estão disponíveis:

| Sanção | Efeito | Disponibilidade |
|---|---|---|
| **Banimento** | Exclui o membro do servidor e apaga suas mensagens recentes | Gratuito |
| **Softban** | Bane e depois desbane: apaga as mensagens, mas o membro pode voltar | Gratuito |
| **Expulsão (Kick)** | Exclui o membro, que pode voltar livremente | Premium |
| **Timeout** | Impede o membro de falar durante um tempo escolhido (máx. 28 dias) | Premium |
| **Jail** | Atribui o cargo Jail configurado no seu servidor | Premium |
| **Mute** | Atribui o cargo Mute configurado no seu servidor | Premium |

Para as sanções com duração (Banimento, Timeout, Jail, Mute), você pode escolher uma **duração pronta para usar** (de 5 minutos a 28 dias) ou uma **duração personalizada** por meio do botão dedicado (por exemplo `5m`, `1h`, `2d`; mínimo 1 minuto).

:::tip
O **Softban** é um bom meio-termo: ele limpa as mensagens e expulsa a conta invadida, mas o dono legítimo pode voltar assim que sua conta estiver protegida.
:::

:::info
Apenas o **Banimento** e o **Softban** permitem que o Discord exclua nativamente as mensagens da conta invadida **em todo o servidor** de uma só vez.  
Para as outras sanções (Kick, Timeout, Jail, Mute), o RaidProtect precisa fazer uma exclusão entre canais manual, muito mais custosa para o bot, por isso elas ficam reservadas aos servidores [Premium](/pt/premium).
:::

### Membros ignorados {#ignore}

Você pode escolher **quem não é sancionado** em caso de mensagem no HoneyPot:
- **Ninguém** *(padrão)*: todo mundo é sancionado, até a equipe. Apenas os membros que o bot não pode moderar (cargo mais alto do que o do RaidProtect) são poupados automaticamente.
- **Equipe**: os membros com a permissão `Administrador`, `Gerenciar o servidor` ou `Gerenciar os canais` não são sancionados.
- **Membros ignorados pelo Antispam**: o RaidProtect reutiliza a lista do [Anti-spam](./anti-spam.mdx). Se a lista estiver vazia, volta-se para o modo "Equipe".

:::info
Em todos os casos, o RaidProtect **nunca sanciona a si mesmo nem os outros bots**. Os bots não acionam o HoneyPot.
:::

## 🤝 HoneyPot e ScamLens, melhor juntos {#scamlens-combo}

O RaidProtect já integra o **[ScamLens](./scam-images.md)**, que analisa as imagens e remove as que são fraudes conhecidas (cripto, falsos giveaways, falsas promoções de cassinos).

Os dois funcionam de mãos dadas:
- **O ScamLens age primeiro.** Se a imagem publicada no HoneyPot já for conhecida, é o ScamLens que exclui a mensagem e sanciona a conta comprometida; a sanção do HoneyPot não é aplicada por cima.
- **O HoneyPot assume** todo o resto: novas imagens ainda não conhecidas, spam de links, menções em massa, raids de texto, bots.
- **Cada nova imagem capturada por um HoneyPot enriquece o ScamLens**, que poderá depois bloqueá-la em todos os servidores protegidos.

O ScamLens já está ativo por padrão no seu servidor. **Ativar o HoneyPot não quebra nada**: ele apenas complementa o que já existe, e ajuda o RaidProtect a proteger melhor toda a comunidade.

## Perguntas frequentes {#faq}

### O HoneyPot é útil se eu já tenho o ScamLens?

Para os golpes por imagem, o ScamLens já é mais que suficiente: ele está ativo por padrão e os detecta, remove e sanciona sozinho. O HoneyPot é útil sobretudo para bloquear os outros tipos de spam, como o spam de links, os raids de texto e os bots.

### Qual sanção o HoneyPot aplica?

Você escolhe a sanção: Banimento e Softban são gratuitos, enquanto Kick, Timeout, Jail e Mute são reservados aos servidores Premium. O Softban é um bom meio-termo, pois limpa as mensagens e expulsa a conta invadida ao mesmo tempo em que deixa o dono legítimo voltar.

### Os membros da equipe são sancionados se escreverem no HoneyPot?

Isso depende da opção « Membros ignorados ». Por padrão, todo mundo é sancionado, até a equipe. O RaidProtect nunca sanciona a si mesmo, e os bots nunca acionam a armadilha.

### O que acontece com as mensagens de uma conta capturada pelo HoneyPot?

Além da sanção, as mensagens enviadas por esse membro nos últimos 10 minutos são excluídas em todo o servidor, para conter o spam caso ele já tenha se espalhado por outros canais.
