---
title: Denúncias
---

O sistema de denúncias do RaidProtect permite à sua comunidade reportar rapidamente qualquer conteúdo problemático ou utilizadores suspeitos. Funciona de duas formas diferentes e pode ser configurado para otimizar o processo de gestão das denúncias.

## ❓ Como funcionam as Denúncias {#working}
Os membros podem denunciar conteúdo através de 4 métodos principais.

1. **Clique direito numa mensagem**
Um membro pode clicar com o botão direito numa mensagem que considere violar as regras, selecionar **`Aplicações`** e depois clicar em **`Denunciar Mensagem`**. Aparecerá uma janela que permite ao utilizador adicionar uma explicação.

2. **Clique direito num perfil**
Da mesma forma, um membro pode clicar com o botão direito num perfil que considere problemático, escolher **`Aplicações`** e depois clicar em **`Denunciar Membro`**. Abre-se então uma janela para permitir ao utilizador fornecer detalhes adicionais sobre a situação.

3. **Botão num painel de informação**
Se a funcionalidade "Denúncia" estiver ativada num [painel de informação (`/display public`)](./display.mdx), um botão "Denunciar" está disponível diretamente abaixo do painel, permitindo aos membros denunciar rapidamente um utilizador.

4. **Slash Command**
Os membros podem também denunciar uma mensagem ou utilizador através do comando **`/report`** em qualquer canal do servidor.

Utilize o comando: ```/report (member) (reason)```

Substitua `(member)` pelo utilizador desejado e `(reason)` pela razão da infração.

## 🚩 Configurar as Denúncias {#config}

Antes que o sistema de denúncias esteja totalmente operacional, é imperativo configurar um **canal de denúncias** onde todas as denúncias serão enviadas. Precisa de configurar um canal de registos ou notificações para receber alertas relativos às denúncias.

![Captura de ecrã das definições de denúncias](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-reports.webp)

### Configurar o Canal {#config-channel}

1. Utilize o [comando `/settings`](../setup.md#settings).
2. Selecione o botão "**Denúncias**".
3. Clique no botão "**Canal**".
4. Escolha o canal desejado (_ex.: #denúncias_).
Se não tiver um canal adequado, pode optar por criar um automaticamente utilizando o botão "**Criar um para mim**".

### Configurar o Cargo de Notificação {#config-role}

1. Utilize o [comando `/settings`](../setup.md#settings).
2. Selecione o botão "**Denúncias**".
3. Clique no botão "**Cargo**".
4. Escolha o cargo desejado (_ex.: @Moderador ou @Ping de Denúncias_).
Se não tiver um cargo adequado, pode optar por criar um automaticamente com o botão "**Criar um para mim**".

:::warning
O canal deve ser restrito a moderadores e administradores para garantir uma gestão adequada das denúncias.
:::

## Gerir as Denúncias {#manage}

Como moderador da comunidade, pode escolher aceitar ou rejeitar uma denúncia.

- **✅ Aceitar uma denúncia:** Se a denúncia for válida, clique no botão "Aceitar" abaixo do alerta. Este botão não desencadeia nenhuma ação específica, mas indica aos outros moderadores que considera esta denúncia como tratada, promovendo a coordenação e organização.

- **👁️ Ver Contexto:** Para ver a mensagem denunciada e o contexto, clique em "Ver Mensagem" abaixo do alerta.

- **❌ Rejeitar uma denúncia:** Se a denúncia não for legítima, clique no botão "Rejeitar" abaixo do alerta. Tal como o botão "Aceitar", nenhuma ação específica está associada a este botão; apenas informa os outros moderadores da sua decisão.

:::note
Certifique-se de que os seus moderadores estão bem formados na utilização desta funcionalidade e encoraje os seus membros ativos a utilizá-la de forma responsável!
:::
