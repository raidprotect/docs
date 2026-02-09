---
title: Denúncias
---

O sistema de denúncias do RaidProtect permite que a sua comunidade reporte rapidamente qualquer conteúdo problemático ou utilizadores suspeitos. Funciona de duas formas diferentes e pode ser configurado para otimizar o processo de gestão das denúncias.

## ❓ Como funcionam as Denúncias {#working}
Os membros podem denunciar conteúdo através de 3 métodos principais.

1. **Clicar com o botão direito numa mensagem**
Um membro pode clicar com o botão direito numa mensagem que considere violar as regras, selecionar **`Aplicações`** e depois clicar em **`Denunciar Mensagem`**. Aparecerá uma janela popup, permitindo ao utilizador adicionar uma explicação.

2. **Clicar com o botão direito num perfil**
Da mesma forma, um membro pode clicar com o botão direito num perfil que considere problemático, escolher **`Aplicações`** e depois clicar em **`Denunciar Membro`**. Uma janela popup abrirá então para permitir ao utilizador fornecer detalhes adicionais sobre a situação.

3. **Slash Command**
Os membros também podem denunciar uma mensagem ou utilizador através do comando **`/report`** em qualquer canal do servidor.

Utilize o comando: ```/report (member) (reason)```

Substitua `(member)` pelo utilizador desejado e `(reason)` pelo motivo da infração.

## 🚩 Configurar as Denúncias {#config}

Antes que o sistema de denúncias esteja totalmente operacional, é imperativo configurar um **canal de denúncias** onde todas as denúncias serão enviadas. Precisa de configurar um canal de registo ou notificação para receber alertas relativos às denúncias.

[Captura de ecrã das definições de denúncias](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-reports.webp)

### Configurar o Canal {#config-channel}

1. Utilize o [comando `/settings`](../setup.md#settings).
2. Selecione o botão **Denúncias**.
3. Clique no botão **Canal**.
4. Escolha o canal desejado (_ex.: #denuncias_).
Se não tiver um canal adequado, pode optar por criar um automaticamente utilizando o botão **Criar um para mim**.

### Configurar o Cargo de Notificação {#config-role}

1. Utilize o [comando `/settings`](../setup.md#settings).
2. Selecione o botão **Denúncias**.
3. Clique no botão **Cargo**.
4. Escolha o cargo desejado (_ex.: @Moderador ou @Ping de Denúncia_).
Se não tiver um cargo adequado, pode optar por criar um automaticamente com o botão **Criar um para mim**.

:::warning
O canal deve ser restrito a moderadores e administradores para garantir uma gestão adequada das denúncias.
:::

## Gerir as Denúncias {#manage}

Como moderador da comunidade, pode escolher aceitar ou rejeitar uma denúncia.

- **✅ Aceitar uma denúncia:** Se a denúncia for válida, clique no botão "Aceitar" sob o alerta. Este botão não desencadeia nenhuma ação específica, mas indica aos outros moderadores que considera esta denúncia como tratada, promovendo a coordenação e organização.

- **👁️ Ver Contexto:** Para ver a mensagem denunciada e o seu contexto, clique em "Ver Mensagem" sob o alerta.

- **❌ Rejeitar uma denúncia:** Se a denúncia não for legítima, clique no botão "Rejeitar" sob o alerta. Tal como o botão "Aceitar", nenhuma ação específica está associada a este botão; informa apenas os outros moderadores da sua decisão.

:::note
Garanta que os seus moderadores estão bem formados na utilização desta funcionalidade e encoraje os seus membros ativos a utilizá-la de forma responsável!
:::
