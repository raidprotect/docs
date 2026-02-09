---
title: Anomalias
---

Está a ter um problema com o RaidProtect? A solução provavelmente está aqui.

Por vezes as coisas não funcionam como esperado. Eis os **problemas mais comuns** que pode encontrar, juntamente com a forma de os resolver. 🤗

Se esta página não responder a um problema que está a ter, [**não hesite em contactar o nosso suporte**](https://raidprotect.bot/discord) que terá todo o prazer em ajudá-lo!

## O bot mostra um erro quando executo um comando {#commands}

Se o comando não for executado com sucesso, **o RaidProtect pode apresentar um erro** em vez do resultado esperado. Na maioria dos casos, haverá uma indicação na mensagem, mas pode ser uma mensagem mais genérica. Eis como resolver este problema na maioria dos casos. 🧐

- **Faça o que é indicado.** Alguns erros explicam claramente o problema. Se o bot lhe pedir para fazer algo, por favor faça-o.

- **Verifique os parâmetros do comando.** O comando pode simplesmente estar mal escrito; consulte a ajuda sobre como o utilizar. Lembre-se que os parênteses retos ([]) não devem ser incluídos.

- **Verifique as permissões do bot.** O bot deve ter a permissão de **Administrador** e estar ao nível de administrador na hierarquia de cargos.

- **Tente executar o comando novamente.** Por vezes o problema resolve-se sozinho por razões desconhecidas.

Se continuar a receber um erro apesar de seguir estas dicas, [contacte o nosso suporte](https://raidprotect.bot/discord) para que possamos ajudá-lo. 🤝

## O canal de registos do bot não foi criado {#logs}

Para o notificar das ações que realiza, o RaidProtect precisa de um canal de registos. Este canal é criado automaticamente quando o bot entra pela primeira vez, mas por vezes nenhum canal é criado. Eis como resolver este problema. ⚙️

- **Certifique-se de que o bot é Administrador.** Para que o bot funcione corretamente, deve-lhe ser concedida a permissão de Administrador. Se isto não estiver feito, vá às definições de cargos e conceda esta permissão ao cargo do RaidProtect. Depois, basta inicializar manualmente o bot para que tudo funcione (veja abaixo)!

- **Verifique se o bot está devidamente inicializado.** Isto é normalmente feito automaticamente, mas pode forçar esta inicialização com o [comando `/setup`](../setup.md#install). O canal de registos deverá ser criado automaticamente.

- **Defina manualmente um canal.** Se nada funcionar, não entre em pânico; pode escolher manualmente o canal que o bot utilizará para os registos! Depois de criar um canal dedicado, execute o [comando /settings](../setup.md#settings) e depois selecione Registos.

## Um utilizador fez spam, mas o bot não o sancionou {#anti-spam}

A funcionalidade de [anti-spam](../features/anti-spam.mdx) é uma das principais funcionalidades do RaidProtect, e pode ser frustrante se não estiver a funcionar. Mas fique descansado, na maioria das vezes não é nada de grave. 😇

- **Se o anti-spam pede para parar o spam mas não sanciona,** isto deve-se provavelmente a falta de permissões. Lembre-se, o bot deve ter a permissão de Administrador e deve estar ao nível de administrador na hierarquia de cargos.

- **Verifique a configuração do anti-spam.** É bastante simples, mas alguns esquecem-se de que ignoraram um canal.

- **Verifique as permissões do spammer.** Os administradores são ignorados, portanto se estiver a testar o anti-spam no seu próprio servidor, pode não o detetar.

- **O spam é suficientemente longo?** O bot geralmente só deteta spam com mais de 5 mensagens. Não seja demasiado apressado.

Se o spam continuar a não ser detetado, [contacte-nos no nosso servidor de suporte](https://raidprotect.bot/discord) com uma **captura de ecrã do problema**.

## Os utilizadores têm acesso ao servidor sem completar o captcha {#captcha}

Este problema é relativamente comum, mas depende da **configuração do seu servidor**. Vejamos como resolvê-lo. 🏥

- **Tem um cargo automático?** Se configurou um bot (diferente do RaidProtect) para atribuir um cargo aos recém-chegados do seu servidor, isto pode interferir com o captcha. Substitua-o pelo [cargo automático do RaidProtect](../features/captcha.md#autorole).

- **Ativou o captcha?** Esta é uma funcionalidade completamente opcional que requer a execução de um comando para ser ativada. Consulte a [página de documentação dedicada ao captcha](../features/captcha.md#config) para mais informações.

## Os utilizadores ainda conseguem falar quando bloqueio um canal {#lock}

O comando lock parece mágico, mas tem as suas fraquezas. Como [referido nesta documentação](../features/channel-lock.md#lock), o comando **afeta apenas o cargo @everyone**. Isto significa que se existir um cargo no canal que pretende bloquear que tenha explicitamente permissão para falar, esses membros continuarão a poder fazê-lo. Uma imagem vale mais que mil palavras, por isso eis como isto se apresenta na prática. 🔍

[Captura de ecrã da configuração de bloqueio de canal](../../../../en/docusaurus-plugin-content-docs/current/assets/lock-channel-messages-raidprotect.png)
