---
title: Denuncias
---

O sistema de denuncias do RaidProtect permite a sua comunidade denunciar rapidamente qualquer conteudo problematico ou utilizadores suspeitos. Funciona de duas formas diferentes e pode ser configurado para otimizar o processo de gestao de denuncias.

## ❓ Como funcionam as Denuncias {#working}
Os membros podem denunciar conteudo atraves de 3 metodos principais.

1. **Clique direito numa mensagem**
Um membro pode clicar com o botao direito numa mensagem que considere violar as regras, selecionar **`Applications`** e depois clicar em **`Report Message`**. Aparecera uma janela popup, permitindo ao utilizador adicionar uma explicacao.

2. **Clique direito num perfil**
Da mesma forma, um membro pode clicar com o botao direito num perfil que considere problematico, escolher **`Applications`** e depois clicar em **`Report Member`**. Uma janela popup abrira entao para permitir ao utilizador fornecer detalhes adicionais sobre a situacao.

3. **Slash Command**
Os membros tambem podem denunciar uma mensagem ou utilizador atraves do comando **`/report`** em qualquer canal do servidor.

Utilize o comando: ```/report (member) (reason)```

Substitua `(member)` pelo utilizador desejado e `(reason)` pelo motivo da infracao.

## 🚩 Configurar as Denuncias {#config}

Antes do sistema de denuncias estar totalmente operacional, e imperativo configurar um **canal de denuncias** onde todas as denuncias serao enviadas. Precisa de configurar um canal de registos ou notificacoes para receber alertas sobre denuncias.

[Captura de ecra das definicoes de denuncias](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-reports.webp)

### Configurar o Canal {#config-channel}

1. Utilize o [comando `/settings`](../setup.md#settings).
2. Selecione o botao **Reports**.
3. Clique no botao **Channel**.
4. Escolha o canal desejado (_ex.: #reports_).
Se nao tiver um canal adequado, pode optar por criar um automaticamente utilizando o botao **Create one for me**.

### Configurar o Cargo de Notificacao {#config-role}

1. Utilize o [comando `/settings`](../setup.md#settings).
2. Selecione o botao **Reports**.
3. Clique no botao **Role**.
4. Escolha o cargo desejado (_ex.: @Moderator ou @Report Ping_).
Se nao tiver um cargo adequado, pode optar por criar um automaticamente com o botao **Create one for me**.

:::warning
O canal deve ser restrito a moderadores e administradores para garantir uma gestao adequada das denuncias.
:::

## Gerir Denuncias {#manage}

Como moderador da comunidade, pode escolher aceitar ou rejeitar uma denuncia.

- **✅ Aceitar uma denuncia:** Se a denuncia for valida, clique no botao "Accept" abaixo do alerta. Este botao nao desencadeia nenhuma acao especifica, mas indica aos outros moderadores que considera esta denuncia como tratada, promovendo a coordenacao e organizacao.

- **👁️ Ver Contexto:** Para ver a mensagem denunciada e ver o contexto, clique em "View Message" abaixo do alerta.

- **❌ Rejeitar uma denuncia:** Se a denuncia nao for legitima, clique no botao "Reject" abaixo do alerta. Tal como o botao "Accept", nenhuma acao especifica esta associada a este botao; informa simplesmente os outros moderadores da sua decisao.

:::note
Certifique-se de que os seus moderadores estao bem treinados na utilizacao desta funcionalidade e incentive os seus membros ativos a utiliza-la de forma responsavel!
:::
