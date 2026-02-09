---
title: Problemas Frequentes
---

Tens um problema com o RaidProtect? A solucao provavelmente esta aqui.

Por vezes as coisas nao funcionam como esperado. Aqui estao os **problemas mais comuns** que podes encontrar, juntamente com a forma de os resolver. 🤗

Se esta pagina nao responder a um problema que estejas a experienciar, [**nao hesites em contactar o nosso suporte**](https://raidprotect.bot/discord) que tera todo o prazer em ajudar-te!

## O bot mostra um erro quando executo um comando {#commands}

Se o comando nao for executado com sucesso, **o RaidProtect pode apresentar um erro** em vez do resultado esperado. Na maioria dos casos, havera uma indicacao na mensagem, mas pode ser uma mensagem mais generica. Eis como resolver este problema na maioria dos casos. 🧐

- **Faz o que e indicado.** Alguns erros explicam claramente o problema. Se o bot te pede para fazeres algo, por favor faz.

- **Verifica os parametros do comando.** O comando pode simplesmente estar mal escrito; consulta a ajuda sobre como usa-lo. Lembra-te de que os parenteses retos ([]) nao devem ser incluidos.

- **Verifica as permissoes do bot.** O bot deve ter permissao de **Administrador** e estar ao nivel de administrador na hierarquia de cargos.

- **Tenta novamente o comando.** Por vezes o problema resolve-se sozinho por razoes desconhecidas.

Se continuares a receber um erro apesar de seguires estas dicas, [contacta o nosso suporte](https://raidprotect.bot/discord) para que possamos ajudar-te. 🤝

## O canal de registos do bot nao se criou {#logs}

Para te notificar das acoes que realiza, o RaidProtect precisa de um canal de registos. Este canal e criado automaticamente quando o bot se junta pela primeira vez, mas por vezes nenhum canal e criado. Eis como remediar este problema. ⚙️

- **Certifica-te de que o bot e Administrador.** Para o bot funcionar corretamente, deve ter permissao de Administrador. Se isto nao tiver sido feito, vai as definicoes de cargos e concede esta permissao ao cargo do RaidProtect. Depois so precisas de inicializar manualmente o bot para que tudo funcione (ver abaixo)!

- **Verifica que o bot esta corretamente inicializado.** Isto normalmente e feito automaticamente, mas podes forcar esta inicializacao com o [comando `/setup`](../setup.md#install). O canal de registos devera ser criado automaticamente.

- **Define um canal manualmente.** Se nada funcionar, nao entres em panico; podes escolher manualmente o canal que o bot usara para os registos! Depois de criar um canal dedicado, executa o [comando /settings](../setup.md#settings) e seleciona Registos.

## Um utilizador fez spam, mas o bot nao o sancionou {#anti-spam}

A funcionalidade de [antispam](../features/anti-spam.md) e uma das principais funcionalidades do RaidProtect, e pode ser frustrante se nao estiver a funcionar. Mas fica descansado, na maioria das vezes nao e nada grave. 😇

- **Se o antispam pede para parar o spam mas nao sanciona,** isto deve-se provavelmente a falta de permissoes. Lembra-te, o bot deve ter permissao de Administrador e estar ao nivel de administrador na hierarquia de cargos.

- **Verifica a configuracao do antispam.** E bastante simples, mas alguns esquecem-se de que ignoraram um canal.

- **Verifica as permissoes do spammer.** Os administradores sao ignorados, por isso se estiveres a testar o antispam no teu proprio servidor, pode nao te detetar.

- **O spam e suficientemente longo?** O bot geralmente so deteta spam se forem mais de 5 mensagens. Nao sejas demasiado precipitado.

Se o spam continuar a nao ser detetado, [contacta-nos no nosso servidor de suporte](https://raidprotect.bot/discord) com uma **captura de ecra do problema**.

## Os utilizadores tem acesso ao servidor sem completar o captcha {#captcha}

Este problema e relativamente comum, mas depende da **configuracao do teu servidor**. Vejamos como resolve-lo. 🏥

- **Tens um cargo automatico?** Se configuraste um bot (diferente do RaidProtect) para dar um cargo aos recem-chegados no teu servidor, isto pode interferir com o captcha. Substitui-o pelo [autorole do RaidProtect](../features/captcha.md#autorole).

- **Ativaste o captcha?** Esta e uma funcionalidade completamente opcional que requer a execucao de um comando para a ativar. Consulta a [pagina de documentacao dedicada ao captcha](../features/captcha.md#config) para mais informacoes.

## Os utilizadores ainda podem falar quando bloqueio um canal {#lock}

O comando lock parece magico, mas tem as suas fraquezas. Como [indicado nesta documentacao](../features/channel-lock.md#lock), o comando **afeta apenas o cargo @everyone**. Isto significa que se houver um cargo no canal que queres bloquear que tenha permissao explicita para falar, eles continuarao a poder faze-lo. Uma imagem vale mais que mil palavras, por isso eis como isto se apresenta na pratica. 🔍

[Captura de ecra da configuracao de bloqueio de canal](../../../../en/docusaurus-plugin-content-docs/version-3.1.1/assets/lock-channel-messages-raidprotect.png)
