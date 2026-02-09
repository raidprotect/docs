---
title: Denuncias
---

O sistema de denuncias do RaidProtect permite a sua comunidade reportar rapidamente qualquer conteudo problematico ou utilizadores suspeitos. Funciona de duas formas diferentes e pode ser configurado para otimizar o processo de gestao de denuncias.

## ❓ Como funcionam as denuncias {#working}
Os membros podem denunciar conteudo atraves de 3 metodos principais.

1. **Clique direito numa mensagem**
Um membro pode clicar com o botao direito numa mensagem que considere violar as regras, selecionar **`Aplicacoes`** e depois clicar em **`Denunciar mensagem`**. Aparecera uma janela que permite ao utilizador adicionar uma explicacao.

2. **Clique direito num perfil**
De forma semelhante, um membro pode clicar com o botao direito num perfil que considere problematico, escolher **`Aplicacoes`** e depois clicar em **`Denunciar membro`**. Sera aberta uma janela para permitir ao utilizador fornecer detalhes adicionais sobre a situacao.

3. **Comando Slash**
Os membros tambem podem denunciar uma mensagem ou utilizador atraves do comando **`/report`** em qualquer canal do servidor.

Utilize o comando: ```/report [@utilizador] [motivo]```

Substitua `[@utilizador]` pelo utilizador pretendido e `[motivo]` pelo motivo da infracao.

## 🚩 Configurar as denuncias {#config}

Antes do sistema de denuncias estar totalmente operacional, e imprescindivel configurar um **canal de denuncias** para onde todas as denuncias serao enviadas. Precisa de configurar um canal de registos ou notificacoes para receber alertas sobre as denuncias.

### Configurar o canal {#config-channel}

1. Utilize o [comando `/settings`](../setup.md#settings).
2. Selecione o botao **Denuncias**.
3. Clique no botao **Canal**.
4. Escolha o canal pretendido (_ex. #denuncias_).
Se nao tiver um canal adequado, pode optar por criar um automaticamente utilizando o botao **Criar um por mim**.

[Captura de ecra das definicoes de denuncias](../../../../en/docusaurus-plugin-content-docs/version-3.1.0/assets/rpBeta-settings-reports.webp)

### Configurar o cargo de notificacao {#config-role}

1. Utilize o [comando `/settings`](../setup.md#settings).
2. Selecione o botao **Denuncias**.
3. Clique no botao **Cargo**.
4. Escolha o cargo pretendido (_ex. @Moderador ou @Ping de denuncias_).
Se nao tiver um cargo adequado, pode optar por criar um automaticamente com o botao **Criar um por mim**.

:::warning
O canal deve estar restrito a moderadores e administradores para garantir a gestao adequada das denuncias.
:::

## Gerir as denuncias {#manage}

Enquanto moderador da comunidade, pode optar por aceitar ou rejeitar uma denuncia.

- **✅ Aceitar uma denuncia:** Se a denuncia for valida, clique no botao "Aceitar" abaixo do alerta. Este botao nao desencadeia nenhuma acao especifica, mas indica aos outros moderadores que considera esta denuncia tratada, promovendo a coordenacao e organizacao.

- **👁️ Ver contexto:** Para visualizar a mensagem denunciada e ver o contexto, clique em "Ver mensagem" abaixo do alerta.

- **❌ Rejeitar uma denuncia:** Se a denuncia nao for legitima, clique no botao "Rejeitar" abaixo do alerta. Semelhante ao botao "Aceitar", nenhuma acao especifica esta associada a este botao; apenas informa os outros moderadores da sua decisao.

:::note
Certifique-se de que os seus moderadores estao bem formados na utilizacao desta funcionalidade e incentive os seus membros ativos a utiliza-la de forma responsavel!
:::
