---
title: Outros
---

Explore todas as funcionalidades secundárias do RaidProtect: moderação, bloqueio de canais, informações de utilizadores e muito mais.

Para além das funcionalidades principais apresentadas anteriormente, o RaidProtect oferece **algumas funcionalidades menores adicionais**. São simples mas úteis! 😯

## 🤬 Comandos de moderação {#moderation}

Para facilitar a vida aos seus moderadores, o RaidProtect inclui comandos para interagir com as funcionalidades de moderação nativas do Discord: **banir e expulsar utilizadores**. Para além de banir ou expulsar um utilizador (como esperado), estes comandos enviam uma mensagem privada ao utilizador a explicar o motivo da sua sanção e registam a ação no canal de logs do RaidProtect. 🗣️

Utilizar estes comandos é **muito simples**. Para banir, basta executar: `?ban @utilizador motivo`. O comando `?kick` segue o mesmo formato. Por exemplo, para expulsar o utilizador "Evil" por "insultos", execute: `?kick @Evil Insultos`. É assim tão rápido!

Para utilizadores avançados, note que pode banir um utilizador mesmo **que não esteja no seu servidor** utilizando o seu ID de utilizador. Conveniente.

![Captura de ecrã do log de banimento](../../../../en/docusaurus-plugin-content-docs/version-3.0.0/assets/log-ban-raidprotect.png)

Exemplo de uma mensagem de log após banir um utilizador.

## 🔒 Bloqueio de canais {#lock}

Por vezes, pode precisar — por qualquer razão — de bloquear um canal para **impedir os membros de falar nele.** O comando de bloqueio permite-lhe fazê-lo rapidamente: execute `?lock`, e o canal fica bloqueado! Para reverter a ação, basta utilizar o comando `?unlock`.

Este comando **remove a permissão de falar** do cargo @everyone no canal. Para que funcione corretamente, certifique-se de que nenhum outro cargo tem permissão explícita para falar no canal; caso contrário, os utilizadores com esses cargos continuarão a poder falar.

## 👤 Informações do utilizador {#userinfo}

A última funcionalidade adicional é o comando `?userinfo`. Este comando permite-lhe principalmente ver **a data de criação da conta de qualquer utilizador** e, se for membro do servidor, a data em que se juntou ao seu servidor. O comando deve ser seguido de uma menção, um nome de utilizador com tag ou um ID de utilizador. 👀

![Captura de ecrã de informações do utilizador](../../../../en/docusaurus-plugin-content-docs/version-3.0.0/assets/userinfo-raidprotect.png)
