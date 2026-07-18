---
title: HoneyPot
---

import HoneypotMockup from '@site/src/components/DiscordMessage/mockups/honeypot';

<HoneypotMockup />

O **HoneyPot** (ou canal-armadilha) do RaidProtect é um canal onde **ninguém deve escrever**. Como os membros reais sabem que precisam evitar esse canal, os únicos que publicam ali são as **contas invadidas** ou os bots de spam: o RaidProtect os sanciona automaticamente.

:::info
**Você já tem o ScamLens por padrão.** O antifraude [ScamLens](/blog/scamlens-early-activation) está ativo no seu servidor sem nenhuma configuração: especializado em **imagens de fraude**, ele as detecta, as remove e sanciona a conta comprometida com altíssima confiabilidade. Para as fraudes por imagem, o ScamLens já é mais que suficiente. O HoneyPot é útil sobretudo se você quiser segurança máxima e bloquear os **outros tipos de spam**: spam de links, raids de texto, bots.
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
Para as outras sanções (Kick, Timeout, Jail, Mute), o RaidProtect precisa fazer uma exclusão entre canais manual, muito mais custosa para o bot, por isso elas ficam reservadas aos servidores Premium.
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

O RaidProtect já integra o **[ScamLens](/blog/scamlens-early-activation)**, que analisa as imagens e remove as que são fraudes conhecidas (cripto, falsos giveaways, falsas promoções de cassinos).

Os dois funcionam de mãos dadas:
- **O ScamLens age primeiro.** Se a imagem publicada no HoneyPot já for conhecida, é o ScamLens que exclui a mensagem e sanciona a conta comprometida; a sanção do HoneyPot não é aplicada por cima.
- **O HoneyPot assume** todo o resto: novas imagens ainda não conhecidas, spam de links, menções em massa, raids de texto, bots.
- **Cada nova imagem capturada por um HoneyPot enriquece o ScamLens**, que poderá depois bloqueá-la em todos os servidores protegidos.

O ScamLens já está ativo por padrão no seu servidor. **Ativar o HoneyPot não quebra nada**: ele apenas complementa o que já existe, e ajuda o RaidProtect a proteger melhor toda a comunidade.
