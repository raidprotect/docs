---
title: Denúncias
description: "O sistema de denúncias do RaidProtect permite que a sua comunidade sinalize conteúdos e membros suspeitos, com uma gestão clara para os moderadores."
---

import { ReportsSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

import ReportsMockup from '@site/src/components/DiscordMessage/mockups/reports';

<ReportsMockup />

O sistema de denúncias do RaidProtect permite que a sua comunidade encaminhe em poucos cliques qualquer mensagem ou membro suspeito aos seus moderadores, por meio de um clique direito, de um botão dedicado ou do comando `/report`. Ele se configura para otimizar o tratamento das denúncias pela sua equipe.

## ❓ Como funcionam as denúncias? {#working}
Os membros podem denunciar um conteúdo por meio de 4 métodos principais.

1. **Clique direito em uma mensagem** 
Um membro pode clicar com o botão direito em uma mensagem que considere violar as regras, selecionar **`Aplicativos`** e, em seguida, clicar em **`Denunciar esta mensagem`**. Uma janela será aberta, permitindo que o usuário adicione uma explicação.

2. **Clique direito em um perfil** 
Da mesma forma, um membro pode clicar com o botão direito em um perfil que considere problemático, escolher **`Aplicativos`** e, em seguida, clicar em **`Denunciar o usuário`**. Uma janela será então aberta para permitir que o usuário especifique o que está denunciando (foto de perfil, nome de usuário, bio, atividade em voz, atividade em mensagens privadas) e forneça detalhes adicionais.

3. **Botão em um painel de informação**
Se a funcionalidade "Denúncia" estiver ativada em um [painel de informação (`/display public`)](./display.mdx), um botão "Denunciar" fica disponível diretamente abaixo do painel, permitindo que os membros denunciem rapidamente um usuário.

4. **Slash Command**
Os membros também podem denunciar uma mensagem ou um usuário por meio do comando **`/report`** em qualquer canal do servidor.

Utilize o comando: ```/report (membro) (motivo)```

Substitua `(membro)` pelo usuário desejado e `(motivo)` pela razão da infração.

## 🚩 Configuração das denúncias {#config}

Antes que o sistema de denúncias fique totalmente operacional, é imprescindível configurar um **canal de denúncias** para onde todas as denúncias serão enviadas. Você deve definir um canal de logs ou de notificações para receber os alertas relativos às denúncias.

<ReportsSettingsMockup />

### Configurar o canal {#config-channel}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Selecione o botão "**Denúncias**".
3. Clique no botão "**Canal**".
4. Selecione o canal desejado (_ex.: #denúncias ou #reports_). 
Se você não tiver um canal adequado, pode optar por criar um automaticamente pelo botão "**Criar um para mim**".

### Configurar o cargo de notificação {#config-role}

1. Execute o [comando `/settings`](../setup.md#settings).
2. Selecione o botão "**Denúncias**".
3. Clique no botão "**Cargo**".
4. Selecione o cargo desejado (_ex.: @Moderador ou @Notif de denúncias_). 
Se você não tiver um cargo adequado, pode optar por criar um automaticamente pelo botão "**Criar um para mim**".

:::warning
O canal deve ser reservado a moderadores e administradores, a fim de garantir uma gestão correta das denúncias.
:::

### Agrupamento das denúncias {#group}

O botão "**Agrupamento**" determina como várias denúncias que visam o mesmo membro são apresentadas:

- **Ativado**: as denúncias que visam o mesmo membro são reunidas em um único alerta.
- **Desativado**: cada denúncia cria seu próprio alerta separado.

### Notificação do denunciante {#notify}

Pelo botão "**Notificação do denunciante**", você escolhe o retorno que o membro que originou a denúncia recebe:

| Nível | Efeito |
|---|---|
| **Desativado** | Os denunciantes não recebem nenhuma notificação. |
| **Apenas processamento** | Informa-se ao denunciante que a sua denúncia foi processada. |
| **Com o desfecho** | Indica-se se a denúncia foi aceita ou recusada. |
| **Com o moderador** | Indica-se também qual moderador processou a denúncia. |

### Cargo de confiança (Premium) {#trusted-role}

O "**Cargo de confiança**" permite que os seus membros mais confiáveis ajam imediatamente em caso de emergência: quando um membro que possui esse cargo faz uma denúncia, ele pode marcar a opção "**Ação preventiva**" para aplicar um **timeout preventivo de 24 horas** ao usuário denunciado, enquanto aguarda que um moderador processe a denúncia.

- O timeout preventivo é **silencioso**: o usuário denunciado não recebe DM enquanto um moderador não confirmar a sanção.
- Se a denúncia for sobre uma mensagem, essa mensagem é excluída.
- A sanção fica vinculada à denúncia: o moderador que a processa pode confirmá-la ou cancelá-la.

:::info
Esta funcionalidade é reservada aos servidores [**Premium**](/pt/premium).
:::

### Reputação dos denunciantes {#bad-reporters}

O botão "**Falsos denunciantes**" permite agir sobre os membros cujas denúncias são recusadas com frequência:

- **Limite**: número de denúncias recusadas antes da ação (3, 5, 6, 10 ou 15; 0 para desativar).
- **Janela**: período de cálculo (7, 14, 30, 60 ou 90 dias).
- **Ação** quando o limite é atingido:
  - **Notificar os moderadores**: um alerta é enviado com botões "**Bloquear as denúncias**" e de sanção.
  - **Bloquear automaticamente**: o membro não pode mais enviar denúncias.
  - **Sancionar automaticamente**: a sanção configurada é aplicada.
  - **Bloquear e sancionar**: combina as duas ações anteriores.
- **Sanção**: a sanção aplicada no modo automático (Aviso, Timeout, Mute, Kick ou Ban).

:::tip
Você também pode bloquear manualmente um membro das denúncias a qualquer momento com o [comando `/block`](./utilities.mdx#block).
:::

## Gerenciar as denúncias {#manage}

Cada denúncia chega ao canal configurado na forma de um alerta com várias ações:

- **🙋 Assumir:** Clique em "**Assumir**" para indicar aos outros moderadores que você está cuidando desta denúncia. O botão passa então a ser "**Assumida**".

- **✅ Resolvido:** Se a denúncia for válida, mas nenhuma sanção for necessária (situação resolvida de outra forma: chamada de atenção, mensagem excluída pelo próprio autor...), clique em "**Resolvido**". A denúncia é marcada como aceita, sem sancionar o usuário denunciado. Para sancionar, use antes o menu "**Sancionar este membro…**" abaixo.

- **❌ Recusar:** Se a denúncia não for legítima, clique em "**Recusar**". As recusas são contabilizadas para a [reputação dos denunciantes](#bad-reporters).

- **⚖️ Sancionar:** O menu "**Sancionar este membro…**" abaixo do alerta permite aplicar diretamente uma sanção ao usuário denunciado, sem sair do canal de denúncias.

:::note
Certifique-se de que os seus moderadores estão bem preparados para o uso desta funcionalidade e incentive os seus membros ativos a utilizá-la de forma responsável! 
:::

## Perguntas frequentes {#faq}

### Como denunciar um membro ou uma mensagem?

Um membro pode clicar com o botão direito em uma mensagem ou em um perfil, escolher « Aplicativos » e depois « Denunciar esta mensagem » ou « Denunciar o usuário ». Ele também pode usar o botão de um painel de informações, ou o comando `/report (membro) (motivo)` em qualquer canal.

### Onde chegam as denúncias?

Elas são enviadas ao canal de denúncias que você configura. Esse canal deve ser reservado aos moderadores e administradores para garantir um tratamento correto das denúncias.

### Como limitar as denúncias falsas?

O botão « Denunciantes falsos » atua sobre os membros cujas denúncias são regularmente recusadas. Você define um limite e uma janela de cálculo, e depois uma ação automática: notificar os moderadores, bloquear as denúncias, sancionar, ou ambos. Você também pode bloquear um membro manualmente com o [comando `/block`](./utilities.mdx#block).
