---
title: Denuncias
---

O sistema de denuncias do RaidProtect permite a tua comunidade denunciar rapidamente qualquer conteudo problematico ou utilizadores suspeitos. Funciona de duas formas diferentes e pode ser configurado para otimizar o processo de gestao de denuncias.

## ❓ Como funcionam as denuncias {#working}
Os membros podem denunciar conteudo atraves de 3 metodos principais.

1. **Clique direito numa mensagem**
Um membro pode clicar com o botao direito numa mensagem que acredite violar as regras, selecionar **`Applications`** e depois clicar em **`Report Message`**. Surgira uma janela que permite ao utilizador adicionar uma explicacao.

2. **Clique direito num perfil**
De forma semelhante, um membro pode clicar com o botao direito num perfil que considere problematico, escolher **`Applications`** e depois clicar em **`Report Member`**. Abrira uma janela para que o utilizador forneca detalhes adicionais sobre a situacao.

3. **Comando Slash**
Os membros tambem podem denunciar uma mensagem ou utilizador atraves do comando **`/report`** em qualquer canal do servidor.

Usa o comando: ```/report [@user] [reason]```

Substitui `[@user]` pelo utilizador desejado e `[reason]` pelo motivo da infracao.

## 🚩 Configurar as denuncias {#config}

Antes que o sistema de denuncias esteja totalmente operacional, e imprescindivel configurar um **canal de denuncias** onde todas as denuncias serao enviadas. Precisas de configurar um canal de registos ou notificacoes para receber alertas sobre as denuncias.

[Captura de ecra da configuracao de denuncias](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-settings-reports.webp)

### Configurar o canal {#config-channel}

1. Usa o [comando `/settings`](../setup.md#settings).
2. Seleciona o botao **Reports**.
3. Clica no botao **Channel**.
4. Escolhe o canal desejado (_por exemplo, #reports_).
Se nao tiveres um canal adequado, podes optar por criar um automaticamente usando o botao **Create one for me**.

### Configurar o cargo de notificacao {#config-role}

1. Usa o [comando `/settings`](../setup.md#settings).
2. Seleciona o botao **Reports**.
3. Clica no botao **Role**.
4. Escolhe o cargo desejado (_por exemplo, @Moderator ou @Report Ping_).
Se nao tiveres um cargo adequado, podes optar por criar um automaticamente com o botao **Create one for me**.

:::warning
O canal deve estar restrito a moderadores e administradores para assegurar uma gestao adequada das denuncias.
:::

## Gerir denuncias {#manage}

Como moderador da comunidade, podes escolher aceitar ou rejeitar uma denuncia.

- **✅ Aceitar uma denuncia:** Se a denuncia for valida, clica no botao "Accept" abaixo do alerta. Este botao nao desencadeia nenhuma acao especifica mas indica a outros moderadores que consideras que esta denuncia esta a ser tratada, fomentando a coordenacao e organizacao.

- **👁️ Ver contexto:** Para ver a mensagem denunciada e o seu contexto, clica em "View Message" abaixo do alerta.

- **❌ Rejeitar uma denuncia:** Se a denuncia nao for legitima, clica no botao "Reject" abaixo do alerta. Tal como o botao "Accept", nao esta associada nenhuma acao especifica; simplesmente informa outros moderadores da tua decisao.

:::note
Certifica-te de que os teus moderadores estao bem formados na utilizacao desta funcionalidade e incentiva os teus membros ativos a usa-la de forma responsavel!
:::
