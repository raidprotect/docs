---
title: Denúncias
description: "O sistema de denúncias do RaidProtect permite que a sua comunidade sinalize conteúdos e membros suspeitos, com uma gestão clara para os moderadores."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import ReportsMockup from '@site/src/components/DiscordMessage/mockups/reports';

<ReportsMockup />

O sistema de denúncias do RaidProtect permite que a sua comunidade encaminhe em poucos cliques qualquer mensagem ou membro suspeito aos seus moderadores, por meio de um clique com o botão direito, de um botão dedicado ou do comando `/report`. Ele se configura para otimizar o tratamento das denúncias pela sua equipe.

## ❓ Como funcionam as denúncias? {#working}
Os membros podem denunciar um conteúdo por meio de 4 métodos principais.

1. **Clique com o botão direito em uma mensagem**
Um membro pode clicar com o botão direito em uma mensagem que considere violar as regras, selecionar **`Aplicativos`** e, em seguida, clicar em **`Denunciar Mensagem`**. Uma janela será aberta, na qual ele especifica o motivo da denúncia.

2. **Clique com o botão direito em um perfil**
Da mesma forma, um membro pode clicar com o botão direito em um perfil que considere problemático, escolher **`Aplicativos`** e, em seguida, clicar em **`Denunciar Usuário`**. Uma janela será então aberta para permitir que ele especifique o que está denunciando (foto de perfil, nome de usuário, bio, atividade em voz, atividade em mensagens privadas) e o motivo.

3. **Botão em um painel de informação**
Se a funcionalidade “Denúncia” estiver ativada em um [painel de informação (`/display public`)](./display.mdx), um botão “**Denunciar um membro**” fica disponível diretamente abaixo do painel, permitindo que os membros denunciem rapidamente um usuário.

4. **Comando slash**
Os membros também podem denunciar um usuário por meio do comando **`/report`** em qualquer canal do servidor.

Use o comando: ```/report (member)```

Substitua `(member)` pelo usuário desejado. O motivo é então informado em uma janela, como no clique com o botão direito em um perfil.

:::info
Ativar as denúncias também ativa o [cache de mensagens](./moderation.mdx#snipe): o RaidProtect salva uma hora de mensagens em memória para anexar o conteúdo denunciado ao alerta.
:::

## 🚩 Configuração das denúncias {#config}

As denúncias chegam a um **canal de denúncias**. Se você não escolher nenhum, elas são enviadas ao seu canal de logs geral. Todas as configurações ficam em uma mesma tela:

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Moderação**”.
3. Clique em “**Configurar**” ao lado de “**Denúncias**”.
4. Clique em “**Ativar**” à direita do título da tela para ligar o sistema de denúncias.

<Settings start="reports" />

### Configurar o canal {#config-channel}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Moderação**”.
3. Clique em “**Configurar**” ao lado de “**Denúncias**”.
4. Clique em “**Editar**” ao lado de “**Recebimento de denúncias**”.
5. Na janela, selecione o canal desejado (_ex.: #denúncias ou #reports_), ou marque “**Criar um canal para mim**” para que o RaidProtect crie um canal privado `denúncias`.

Se você não selecionar nenhum canal, ou selecionar o canal de logs, as denúncias seguem o seu canal de logs geral.

<SettingsModal name="reportChannel" />

### Configurar o cargo de notificação {#config-role}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Moderação**”.
3. Clique em “**Configurar**” ao lado de “**Denúncias**”.
4. Clique em “**Editar**” ao lado de “**Cargo de notificação**”.
5. Na janela, selecione o cargo desejado (_ex.: @Moderador ou @Notif de denúncias_), ou marque uma “**Outra menção**”: `@everyone`, `@here` ou “**Criar um cargo para mim**” (o RaidProtect cria o cargo `Nova denúncia`).

Sem cargo configurado, é `@here` que é mencionado.

<SettingsModal name="reportRole" />

:::warning
O canal deve ser reservado a moderadores e administradores, a fim de garantir uma gestão correta das denúncias.
:::

### Agrupamento das denúncias {#group}

A alternância “**Agrupamento**” determina como várias denúncias que visam o mesmo membro são apresentadas:

- **Ativado** *(padrão)*: as denúncias que visam o mesmo membro são reunidas em um único alerta.
- **Desativado**: cada denúncia cria seu próprio alerta separado.

Clique em “**Ativar**” ou “**Desativar**” ao lado de “**Agrupamento**” na tela Denúncias.

<a id="config-notify"></a>

### Notificação do denunciante {#notify}

O botão “**Editar**” ao lado de “**Notificação do denunciante**” abre uma janela na qual você escolhe o que o membro que originou a denúncia recebe por DM depois que a denúncia é tratada:

| Nível | Efeito |
|---|---|
| **Desativado** | Os denunciantes não recebem nenhuma notificação. |
| **Somente tratamento** *(padrão)* | Informa-se ao denunciante que a sua denúncia foi processada. |
| **Com o desfecho** | Indica-se se a denúncia foi aceita ou recusada. |
| **Com o moderador** | Indica-se também qual moderador processou a denúncia. |

O denunciante recebe apenas uma mensagem por denúncia, mesmo que ela tenha sido agrupada com outras.

<SettingsModal name="reportNotify" />

<a id="config-trusted-role"></a>

### Cargo de confiança <span className="badge-premium">Premium</span> {#trusted-role}

O “**Cargo de confiança**” permite que os seus membros mais confiáveis ajam imediatamente em caso de emergência: quando um membro que possui esse cargo faz uma denúncia, ele pode marcar a opção “**Ação preventiva**” para aplicar um **timeout preventivo de 24 horas** ao usuário denunciado, enquanto aguarda que um moderador processe a denúncia.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Moderação**”.
3. Clique em “**Configurar**” ao lado de “**Denúncias**”.
4. Clique em “**Editar**” ao lado de “**Cargo de confiança**”.
5. Na janela, selecione o cargo, ou marque “**Criar um cargo para mim**” (o RaidProtect cria o cargo `Denunciante de confiança`). Deixe o campo vazio para desativar o cargo de confiança.

Funcionamento do timeout preventivo:

- O timeout preventivo é **silencioso**: o usuário denunciado não recebe DM enquanto um moderador não confirmar a sanção.
- O motivo dele é “**Sanção preventiva:**” seguido do motivo da denúncia.
- Se a denúncia for sobre uma mensagem, essa mensagem é excluída.
- O alerta é marcado como urgente: a menção é precedida de “**🛑 Denúncia urgente**”.
- A sanção fica vinculada à denúncia: o moderador que a processa pode confirmá-la ou cancelá-la.

:::info
Esta funcionalidade é reservada aos servidores [**Premium**](/pt/premium).
:::

### Reputação dos denunciantes {#bad-reporters}

O botão “**Editar**” ao lado de “**Falsos denunciantes**” abre a janela “**Reputação dos denunciantes**”, que permite agir sobre os membros cujas denúncias são recusadas com frequência:

- **Limite**: número de denúncias recusadas antes da ação (3, 5, 6, 10 ou 15; “**Desativado**” por padrão).
- **Janela**: período de cálculo (7, 14, 30, 60 ou 90 dias; 30 dias por padrão).
- **Ação** quando o limite é atingido:
  - “**Notificar os moderadores**” *(padrão)*: um alerta é enviado com o botão “**Bloquear as denúncias**” e um botão de sanção (ex.: “**Avisar o denunciante**”).
  - “**Bloquear automaticamente**”: o membro não pode mais enviar denúncias.
  - “**Punir automaticamente**”: a sanção configurada é aplicada.
  - “**Bloquear e punir**”: combina as duas ações anteriores.
- **Sanção**: a sanção aplicada ao falso denunciante (Aviso por padrão, Timeout, Mute, Expulsão ou Banimento).

<SettingsModal name="reportBad" />

:::info
Sem [cargo Mute](./sanctions.mdx#mute) configurado, a sanção Mute recai sobre um timeout.
:::

:::tip
Você também pode bloquear manualmente um membro das denúncias a qualquer momento com o [comando `/block`](./utilities.mdx#block).
:::

## Gerenciar as denúncias {#manage}

Cada denúncia chega ao canal configurado na forma de um alerta com várias ações:

- **🙋 Assumir:** Clique em “**Assumir**” para indicar aos outros moderadores que você está cuidando desta denúncia. O botão passa então a ser “**Assumido**”.

- **✅ Resolvido:** Se a denúncia for válida, mas nenhuma sanção for necessária (situação resolvida de outra forma: chamada de atenção, mensagem excluída pelo próprio autor...), clique em “**Resolvido**”. A denúncia é marcada como aceita, sem sancionar o usuário denunciado. Para sancionar, use de preferência o menu “**Sancionar este membro…**” abaixo.

- **❌ Recusar:** Se a denúncia não for legítima, clique em “**Recusar**”. As recusas são contabilizadas para a [reputação dos denunciantes](#bad-reporters).

- **⚖️ Sancionar:** O menu “**Sancionar este membro…**”, disponível depois que a denúncia é assumida, permite aplicar diretamente uma sanção ao usuário denunciado, sem sair do canal de denúncias.

Quando o [agrupamento](#group) está ativado, as denúncias seguintes que visam o mesmo membro se somam ao alerta existente (por exemplo “**3 mensagens e 1 perfil denunciados por 2 usuários**”) em vez de criar um novo.

:::note
Certifique-se de que os seus moderadores estão bem preparados para o uso desta funcionalidade e incentive os seus membros ativos a utilizá-la de forma responsável!
:::

## Perguntas frequentes {#faq}

### Como denunciar um membro ou uma mensagem?

Um membro pode clicar com o botão direito em uma mensagem ou em um perfil, escolher “**Aplicativos**” e depois “**Denunciar Mensagem**” ou “**Denunciar Usuário**”. Ele também pode usar o botão de um painel de informação, ou o comando `/report (member)` em qualquer canal: o motivo é então informado em uma janela.

### Onde chegam as denúncias?

Elas são enviadas ao canal de denúncias que você configura ou, na falta dele, ao seu canal de logs geral. Esse canal deve ser reservado aos moderadores e administradores para garantir um tratamento correto das denúncias.

### Qual cargo é mencionado a cada denúncia?

O cargo de notificação que você configura, ou `@everyone`. Sem configuração, o RaidProtect menciona `@here`.

### Como limitar as denúncias falsas?

A configuração “**Falsos denunciantes**” atua sobre os membros cujas denúncias são regularmente recusadas. Você define um limite e uma janela de cálculo, e depois uma ação: notificar os moderadores, bloquear as denúncias, sancionar, ou ambos. Você também pode bloquear um membro manualmente com o [comando `/block`](./utilities.mdx#block).
