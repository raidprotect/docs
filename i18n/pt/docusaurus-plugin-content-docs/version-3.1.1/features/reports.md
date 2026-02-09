---
title: Denuncias
---

O sistema de denuncias do RaidProtect permite a tua comunidade denunciar rapidamente qualquer conteudo problematico ou utilizadores suspeitos. Funciona de duas formas diferentes e pode ser configurado para otimizar o processo de gestao de denuncias.

## ❓ Como Funcionam as Denuncias {#working}
Os membros podem denunciar conteudo atraves de 3 metodos principais.

1. **Clique direito numa mensagem**
Um membro pode clicar com o botao direito numa mensagem que acredite violar as regras, selecionar **`Applications`** e depois clicar em **`Report Message`**. Aparecera uma janela pop-up que permite ao utilizador adicionar uma explicacao.

2. **Clique direito num perfil**
Da mesma forma, um membro pode clicar com o botao direito num perfil que considere problematico, escolher **`Applications`** e depois clicar em **`Report Member`**. Abrira uma janela pop-up para o utilizador fornecer detalhes adicionais sobre a situacao.

3. **Comando Slash**
Os membros tambem podem denunciar uma mensagem ou utilizador atraves do comando **`/report`** em qualquer canal do servidor.

Usa o comando: ```/report [@user] [reason]```

Substitui `[@user]` pelo utilizador desejado e `[reason]` pelo motivo da infracao.

## 🚩 Configurar as Denuncias {#config}

Antes de o sistema de denuncias estar totalmente operacional, e imprescindivel configurar um **canal de denuncias** onde todas as denuncias serao enviadas. Precisas de configurar um canal de registos ou notificacoes para receberes alertas relativas as denuncias.

[Captura de ecra das definicoes de denuncias](../../../../en/docusaurus-plugin-content-docs/version-3.1.1/assets/rp-settings-reports.webp)

### Configurar o Canal {#config-channel}

1. Usa o [comando `/settings`](../setup.md#settings).
2. Seleciona o botao **Denuncias**.
3. Clica no botao **Canal**.
4. Escolhe o canal desejado (_ex. #denuncias_).
Se nao tiveres um canal adequado, podes optar por criar um automaticamente usando o botao **Criar um para mim**.

### Configurar o Cargo de Notificacao {#config-role}

1. Usa o [comando `/settings`](../setup.md#settings).
2. Seleciona o botao **Denuncias**.
3. Clica no botao **Cargo**.
4. Escolhe o cargo desejado (_ex. @Moderador ou @Ping de Denuncias_).
Se nao tiveres um cargo adequado, podes optar por criar um automaticamente com o botao **Criar um para mim**.

:::warning
O canal deve estar restrito a moderadores e administradores para garantir uma gestao adequada das denuncias.
:::

## Gerir Denuncias {#manage}

Como moderador da comunidade, podes escolher aceitar ou rejeitar uma denuncia.

- **✅ Aceitar uma denuncia:** Se a denuncia for valida, clica no botao "Aceitar" abaixo do alerta. Este botao nao desencadeia nenhuma acao especifica mas indica a outros moderadores que consideras esta denuncia tratada, promovendo a coordenacao e organizacao.

- **👁️ Ver Contexto:** Para veres a mensagem denunciada e o seu contexto, clica em "Ver Mensagem" abaixo do alerta.

- **❌ Rejeitar uma denuncia:** Se a denuncia nao for legitima, clica no botao "Rejeitar" abaixo do alerta. Semelhante ao botao "Aceitar", nenhuma acao especifica esta associada a este botao; apenas informa outros moderadores da tua decisao.

:::note
Certifica-te de que os teus moderadores estao bem treinados na utilizacao desta funcionalidade e encoraja os teus membros ativos a usa-la de forma responsavel!
:::
