---
title: HoneyPot
---

O **HoneyPot** (ou canal-armadilha) do RaidProtect é um canal onde **ninguém deve escrever**. Como os membros reais sabem que devem evitar este canal, os únicos que aí publicam são as **contas pirateadas** ou os bots de spam: o RaidProtect sanciona-os automaticamente.

## ❓ Como funciona? {#working}

Quando ativa o HoneyPot, o RaidProtect cria um canal de texto **mesmo no topo do seu servidor**, com um nome claro escolhido aleatoriamente. Este canal tem três características:
- **Toda a gente pode escrever nele**, incluindo os membros que ainda não validaram o captcha. É feito de propósito: uma conta pirateada ou um bot não pode evitar a armadilha.
- **Uma mensagem de aviso** é publicada quando o canal é criado, com um botão "Traduzir" para que cada um a possa ler na sua língua.
- **Um contador público** apresenta o número de contas já apanhadas pela armadilha, atualizado automaticamente.

Assim que um membro publica neste canal:
- O RaidProtect aplica a **sanção que escolheu** (banimento, softban, kick, timeout, jail ou mute).
- As **mensagens enviadas por esse membro nos últimos 10 minutos** são eliminadas em todo o servidor, para travar o spam caso já se tenha espalhado por outros canais.
- A ação é adicionada aos registos de moderação automática (motivo: *Spam via conta de utilizador comprometida*).

:::info
O HoneyPot funciona em conjunto com o [ScamLens](/pt/blog/scamlens-early-activation), que remove as imagens de scam sem punir a conta. O HoneyPot, por seu lado, apanha tudo o resto: **novas imagens de scam ainda não conhecidas**, **spam de links**, **raids de texto**, **bots**.
:::

## 🛠️ Configurar o HoneyPot {#config}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botão "**HoneyPot**".
3. Clique em "**Criar o canal**": o RaidProtect cria o canal, configura as permissões e publica a mensagem de aviso.

Uma vez criado o canal, pode:
- **Regenerar o canal**: elimina o antigo e cria um novo (com um novo nome). Útil se suspeitar que algum membro partilhou o nome do canal-armadilha para ajudar outras contas a evitá-lo.
- **Desativar**: elimina o canal e desliga a funcionalidade.

### Escolher a sanção {#sanction}

Estão disponíveis várias sanções:

| Sanção | Efeito | Disponibilidade |
|---|---|---|
| **Banimento** | Exclui o membro do servidor e elimina as suas mensagens recentes | Gratuito |
| **Softban** | Bane e desbane: elimina as mensagens, mas o membro pode regressar | Gratuito |
| **Expulsão (Kick)** | Exclui o membro, que pode regressar livremente | Premium |
| **Timeout** | Impede o membro de falar durante um tempo definido (máximo 28 dias) | Premium |
| **Jail** | Atribui o cargo Jail configurado no seu servidor | Premium |
| **Mute** | Atribui o cargo Mute configurado no seu servidor | Premium |

Para as sanções com duração (Banimento, Timeout, Jail, Mute), pode escolher uma **duração pré-definida** (de 5 minutos a 28 dias) ou uma **duração personalizada** através do botão dedicado (por exemplo `5m`, `1h`, `2d`; mínimo 1 minuto).

:::tip
O **Softban** é um bom compromisso: limpa as mensagens e expulsa a conta pirateada, mas o legítimo proprietário pode regressar assim que tiver protegido a conta.
:::

:::info
Apenas o **Banimento** e o **Softban** permitem ao Discord eliminar nativamente as mensagens da conta pirateada **em todo o servidor** de uma só vez.  
Para as outras sanções (Kick, Timeout, Jail, Mute), o RaidProtect tem de fazer uma eliminação inter-canais manual, muito mais pesada para o bot, pelo que ficam reservadas a servidores Premium.
:::

### Membros ignorados {#ignore}

Pode escolher **quem não é sancionado** em caso de mensagem no HoneyPot:
- **Ninguém** *(por defeito)*: toda a gente é sancionada, incluindo a equipa. Apenas os membros que o bot não pode moderar (cargo mais alto que o do RaidProtect) ficam automaticamente fora.
- **Equipa**: os membros com a permissão `Administrador`, `Gerir o servidor` ou `Gerir os canais` não são sancionados.
- **Membros ignorados pelo Antispam**: o RaidProtect reutiliza a lista do [Anti-spam](./anti-spam.mdx). Se a lista estiver vazia, recai-se no modo "Equipa".

:::info
Em todos os casos, o RaidProtect **nunca se sanciona a si próprio nem a outros bots**. Os bots não desencadeiam o HoneyPot.
:::

## 🤝 HoneyPot e ScamLens, melhor juntos {#scamlens-combo}

O RaidProtect já integra o **[ScamLens](/pt/blog/scamlens-early-activation)**, que analisa as imagens e remove as que são scams conhecidos (cripto, falsos giveaways, falsas promoções de casinos).

Os dois funcionam de mãos dadas:
- **O ScamLens passa primeiro.** Se a imagem publicada no HoneyPot já é conhecida, é removida e o HoneyPot não sanciona.
- **O HoneyPot toma o relé** em todo o resto: novas imagens ainda não conhecidas, spam de links, menções massivas, raids de texto, bots.
- **Cada nova imagem apanhada por um HoneyPot enriquece o ScamLens**, que poderá depois bloqueá-la em todos os servidores protegidos.

O ScamLens já está ativo por defeito no seu servidor. **Ativar o HoneyPot não estraga nada**: vem apenas completar o que já existe e ajuda o RaidProtect a proteger melhor toda a comunidade.
