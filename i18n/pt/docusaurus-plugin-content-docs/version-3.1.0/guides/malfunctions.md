---
title: Anomalias
---

Tem um problema com o RaidProtect? A solucao provavelmente esta aqui.

Por vezes as coisas nao funcionam como esperado. Aqui estao os **problemas mais comuns** que pode encontrar, juntamente com a forma de os resolver. 🤗

Se esta pagina nao responder a um problema que esta a ter, [**nao hesite em contactar o nosso suporte**](https://raidprotect.bot/discord) que tera todo o gosto em ajuda-lo!

## O bot mostra um erro quando executo um comando {#commands}

Se o comando nao for executado com sucesso, **o RaidProtect pode apresentar um erro** em vez do resultado esperado. Na maioria dos casos, havera uma indicacao na mensagem, mas pode ser uma mensagem mais generica. Eis como resolver este problema na maioria dos casos. 🧐

- **Faca o que e indicado.** Alguns erros explicam claramente o problema. Se o bot lhe pedir para fazer algo, por favor faca-o.

- **Verifique os parametros do comando.** O comando pode simplesmente estar mal escrito; consulte a ajuda sobre como utiliza-lo. Lembre-se de que os parenteses rectos ([]) nao devem ser incluidos.

- **Verifique as permissoes do bot.** O bot deve ter a permissao de **Administrador** e estar ao nivel de administrador na hierarquia de cargos.

- **Tente novamente o comando.** Por vezes o problema resolve-se sozinho por razoes desconhecidas.

Se continuar a receber um erro apesar de seguir estas dicas, [contacte o nosso suporte](https://raidprotect.bot/discord) para que possamos ajuda-lo. 🤝

## O canal de registos do bot nao se criou {#logs}

Para o notificar das acoes que realiza, o RaidProtect precisa de um canal de registos. Este canal e criado automaticamente quando o bot entra pela primeira vez, mas por vezes nenhum canal e criado. Eis como remediar este problema. ⚙️

- **Certifique-se de que o bot e Administrador.** Para que o bot funcione corretamente, deve-lhe ser concedida a permissao de Administrador. Se isto nao tiver sido feito, va as definicoes de cargos e conceda esta permissao ao cargo do RaidProtect. Depois so precisa de inicializar manualmente o bot para que tudo funcione (ver abaixo)!

- **Verifique que o bot esta devidamente inicializado.** Isto e normalmente feito automaticamente, mas pode forcar esta inicializacao com o [comando `/setup`](../setup.md#install). O canal de registos devera ser criado automaticamente.

- **Defina um canal manualmente.** Se nada funcionar, nao entre em panico; pode escolher manualmente o canal que o bot utilizara para registos! Apos criar um canal dedicado, execute o [comando /settings](../setup.md#settings) e depois selecione Registos.

## Um utilizador fez spam, mas o bot nao o sancionou {#anti-spam}

A funcionalidade de [anti-spam](../features/anti-spam.md) e uma das principais funcionalidades do RaidProtect, e pode ser frustrante se nao estiver a funcionar. Mas fique tranquilo, na maioria das vezes nao e nada de grave. 😇

- **Se o anti-spam pede para parar o spam mas nao sanciona,** isto deve-se provavelmente a falta de permissoes. Lembre-se, o bot deve ter a permissao de Administrador e deve estar ao nivel de administrador na hierarquia de cargos.

- **Verifique a configuracao do anti-spam.** E bastante simples, mas alguns esquecem-se de que ignoraram um canal.

- **Verifique as permissoes do spammer.** Os administradores sao ignorados, por isso se estiver a testar o anti-spam no seu proprio servidor, pode nao o detetar.

- **O spam e suficientemente longo?** O bot geralmente so deteta spam se forem mais de 5 mensagens. Nao seja demasiado apressado.

Se o spam continuar a nao ser detetado, [contacte-nos no nosso servidor de suporte](https://raidprotect.bot/discord) com uma **captura de ecra do problema**.

## Os utilizadores tem acesso ao servidor sem completar o captcha {#captcha}

Este problema e relativamente comum, mas depende da **configuracao do seu servidor**. Vejamos como resolve-lo. 🏥

- **Tem um cargo automatico?** Se configurou um bot (diferente do RaidProtect) para atribuir um cargo aos recem-chegados no seu servidor, isto pode interferir com o captcha. Substitua-o pelo [autorole do RaidProtect](../features/captcha.md#autorole).

- **Ativou o captcha?** Esta e uma funcionalidade completamente opcional que requer a execucao de um comando para a ativar. Consulte a [pagina de documentacao dedicada ao captcha](../features/captcha.md#config) para mais informacoes.

## Os utilizadores continuam a poder falar quando bloqueio um canal {#lock}

O comando lock parece magico, mas tem as suas fraquezas. Como [indicado nesta documentacao](../features/channel-lock.md#lock), o comando **afeta apenas o cargo @everyone**. Isto significa que se houver um cargo no canal que pretende bloquear que tenha permissao explicita para falar, eles continuarao a poder faze-lo. Uma imagem vale mais do que mil palavras, por isso eis como se apresenta na pratica. 🔍

[Captura de ecra da configuracao de bloqueio de canal](../../../../en/docusaurus-plugin-content-docs/version-3.1.0/assets/lock-channel-messages-raidprotect.png)
