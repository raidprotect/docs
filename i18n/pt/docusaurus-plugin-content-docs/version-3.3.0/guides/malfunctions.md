---
title: Avarias
---

Tem um problema com o RaidProtect? A solucao provavelmente esta aqui.

Por vezes as coisas nao funcionam como esperado. Aqui estao os **problemas mais comuns** que pode encontrar, juntamente com a forma de os resolver. 🤗

Se esta pagina nao responder a um problema que esta a ter, [**nao hesite em contactar o nosso suporte**](https://raidprotect.bot/discord) que tera todo o gosto em ajuda-lo!

## O bot mostra um erro quando executo um comando {#commands}

Se o comando nao for executado com sucesso, **o RaidProtect pode apresentar um erro** em vez do resultado esperado. Na maioria dos casos, havera uma indicacao na mensagem, mas pode ser uma mensagem mais generica. Eis como resolver este problema na maioria dos casos. 🧐

- **Faca o que e indicado.** Alguns erros explicam claramente o problema. Se o bot lhe pede para fazer algo, por favor faca-o.

- **Verifique os parametros do comando.** O comando pode simplesmente estar mal escrito; verifique a ajuda sobre como o utilizar. Lembre-se de que os parentesis retos ([]) nao devem ser incluidos.

- **Verifique as permissoes do bot.** O bot deve ter permissao de **Administrador** e estar ao nivel de administrador na hierarquia de cargos.

- **Tente novamente o comando.** Por vezes o problema resolve-se sozinho por razoes desconhecidas.

Se continuar a receber um erro apesar destas dicas, [contacte o nosso suporte](https://raidprotect.bot/discord) para que possamos ajuda-lo. 🤝

## O canal de registos do bot nao foi criado {#logs}

Para o notificar das acoes que realiza, o RaidProtect precisa de um canal de registos. Este canal e criado automaticamente quando o bot entra pela primeira vez, mas por vezes nenhum canal e criado. Eis como remediar este problema. ⚙️

- **Certifique-se de que o bot e Administrador.** Para que o bot funcione corretamente, deve ter a permissao de Administrador. Se nao for o caso, va as definicoes de cargos e conceda esta permissao ao cargo RaidProtect. Depois basta inicializar manualmente o bot para que tudo funcione (ver abaixo)!

- **Verifique se o bot esta corretamente inicializado.** Isto normalmente e feito automaticamente, mas pode forcar esta inicializacao com o [comando `/setup`](../setup.md#install). O canal de registos devera ser criado automaticamente.

- **Defina manualmente um canal.** Se nada funcionar, nao entre em panico; pode escolher manualmente o canal que o bot utilizara para registos! Assim que um canal dedicado for criado, execute o [comando /settings](../setup.md#settings) e selecione Logs.

## Um utilizador fez spam, mas o bot nao o sancionou {#anti-spam}

A funcionalidade de [anti-spam](../features/anti-spam.mdx) e uma das principais funcionalidades do RaidProtect, e pode ser frustrante se nao estiver a funcionar. Mas fique descansado, na maioria das vezes nao e nada de grave. 😇

- **Se o anti-spam pede para parar o spam mas nao sanciona,** isto deve-se provavelmente a falta de permissoes. Lembre-se, o bot deve ter permissao de Administrador e deve estar ao nivel de administrador na hierarquia de cargos.

- **Verifique a configuracao do anti-spam.** E bastante simples, mas alguns esquecem-se de que ignoraram um canal.

- **Verifique as permissoes do spammer.** Os administradores sao ignorados, portanto se estiver a testar o anti-spam no seu proprio servidor, pode nao o detetar.

- **O spam e suficientemente longo?** O bot geralmente so deteta spam se for mais de 5 mensagens. Nao seja demasiado apressado.

Se o spam ainda nao for detetado, [contacte-nos no nosso servidor de suporte](https://raidprotect.bot/discord) com uma **captura de ecra do problema**.

## Os utilizadores tem acesso ao servidor sem completar o captcha {#captcha}

Este problema e relativamente comum, mas depende da **configuracao do seu servidor**. Vejamos como o corrigir. 🏥

- **Tem um cargo automatico?** Se configurou um bot (diferente do RaidProtect) para dar um cargo aos recem-chegados ao seu servidor, isto pode interferir com o captcha. Substitua-o pelo [autorole do RaidProtect](../features/captcha.md#autorole).

- **Ativou o captcha?** Esta e uma funcionalidade completamente opcional que requer a execucao de um comando para a ativar. Consulte a [pagina de documentacao dedicada ao captcha](../features/captcha.md#config) para mais informacoes.

## Os utilizadores ainda podem falar quando bloqueio um canal {#lock}

O comando de bloqueio parece magico, mas tem as suas fraquezas. Como [indicado nesta documentacao](../features/channel-lock.md#lock), o comando **afeta apenas o cargo @everyone**. Isto significa que se houver um cargo no canal que pretende bloquear que tenha explicitamente permissao para falar, eles continuarao a poder faze-lo. Uma imagem vale mais que mil palavras, eis como isso se apresenta na pratica. 🔍

[Captura de ecra da configuracao de bloqueio de canal](../../../../en/docusaurus-plugin-content-docs/current/assets/lock-channel-messages-raidprotect.png)
