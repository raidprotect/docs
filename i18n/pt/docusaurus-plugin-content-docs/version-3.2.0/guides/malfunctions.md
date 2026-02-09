---
title: Problemas frequentes
---

Tens um problema com o RaidProtect? A solucao provavelmente esta aqui.

Por vezes as coisas nao funcionam como esperado. Aqui estao os **problemas mais comuns** que podes encontrar, juntamente com a forma de os resolver. 🤗

Se esta pagina nao responder a um problema que estas a ter, [**nao hesites em contactar o nosso suporte**](https://raidprotect.bot/discord) que tera todo o gosto em ajudar-te!

## O bot mostra um erro quando executo um comando {#commands}

Se o comando nao for executado com sucesso, **o RaidProtect pode apresentar um erro** em vez do resultado esperado. Na maioria dos casos, havera uma indicacao na mensagem, mas pode ser uma mensagem mais generica. Eis como resolver este problema na maioria dos casos. 🧐

- **Faz o que e indicado.** Alguns erros explicam claramente o problema. Se o bot te pede para fazeres algo, por favor faz.

- **Verifica os parametros do comando.** E possivel que o comando esteja simplesmente mal escrito; verifica a ajuda sobre como o usar. Lembra-te que os parentes retos ([]) nao devem ser incluidos.

- **Verifica as permissoes do bot.** O bot deve ter a permissao de **Administrador** e estar ao nivel de administrador na hierarquia de cargos.

- **Tenta o comando novamente.** Por vezes o problema resolve-se sozinho por razoes desconhecidas.

Se continuares a receber um erro apesar de seguires estes conselhos, [contacta o nosso suporte](https://raidprotect.bot/discord) para que possamos ajudar-te. 🤝

## O canal de registos do bot nao foi criado {#logs}

Para te notificar das acoes que realiza, o RaidProtect necessita de um canal de registos. Este canal e criado automaticamente quando o bot entra pela primeira vez, mas por vezes nenhum canal e criado. Eis como resolver este problema. ⚙️

- **Certifica-te de que o bot e Administrador.** Para que o bot funcione corretamente, deve ter a permissao de Administrador. Se isto nao foi feito, vai as definicoes de cargos e concede esta permissao ao cargo do RaidProtect. Depois so precisas de inicializar manualmente o bot para que tudo funcione (ver abaixo)!

- **Verifica que o bot esta corretamente inicializado.** Isto normalmente e feito automaticamente, mas podes forcar esta inicializacao com o [comando `/setup`](../setup.md#install). O canal de registos devera ser criado automaticamente.

- **Define um canal manualmente.** Se nada funcionar, nao entres em panico; podes escolher manualmente o canal que o bot usara para registos! Assim que um canal dedicado estiver criado, executa o [comando /settings](../setup.md#settings) e depois seleciona Logs.

## Um utilizador fez spam, mas o bot nao o sancionou {#anti-spam}

A funcionalidade de [anti-spam](../features/anti-spam.mdx) e uma das funcionalidades principais do RaidProtect, e pode ser frustrante se nao funcionar. Mas fica descansado, na maioria das vezes nao e nada de grave. 😇

- **Se o anti-spam pede para parar o spam mas nao sanciona,** provavelmente deve-se a falta de permissoes. Lembra-te, o bot deve ter a permissao de Administrador e deve estar ao nivel de administrador na hierarquia de cargos.

- **Verifica a configuracao do anti-spam.** E bastante simples, mas alguns esquecem-se de que ignoraram um canal.

- **Verifica as permissoes do spammer.** Os administradores sao ignorados, por isso se estiveres a testar o anti-spam no teu proprio servidor, pode nao te detetar.

- **O spam e suficientemente longo?** O bot geralmente so deteta spam se forem mais de 5 mensagens. Nao sejas demasiado impaciente.

Se o spam continuar a nao ser detetado, [contacta-nos no nosso servidor de suporte](https://raidprotect.bot/discord) com uma **captura de ecra do problema**.

## Os utilizadores tem acesso ao servidor sem completar o captcha {#captcha}

Este problema e relativamente comum, mas depende da **configuracao do teu servidor**. Vejamos como resolve-lo. 🏥

- **Tens um cargo automatico?** Se configuraste um bot (que nao o RaidProtect) para dar um cargo aos novos membros do teu servidor, isto pode interferir com o captcha. Substitui-o pelo [autorole do RaidProtect](../features/captcha.md#autorole).

- **Ativaste o captcha?** E uma funcionalidade completamente opcional que requer a execucao de um comando para a ativar. Consulta a [pagina de documentacao dedicada ao captcha](../features/captcha.md#config) para mais informacao.

## Os utilizadores podem continuar a falar quando bloqueio um canal {#lock}

O comando lock parece magico, mas tem as suas fraquezas. Como [mencionado nesta documentacao](../features/channel-lock.md#lock), o comando **so afeta o cargo @everyone**. Isto significa que se existir um cargo no canal que desejas bloquear que explicitamente tem permissao para falar, poderao continuar a faze-lo. Uma imagem vale mais do que mil palavras, por isso eis como se apresenta na pratica. 🔍

[Captura de ecra da configuracao de bloqueio de canal](../../../../en/docusaurus-plugin-content-docs/current/assets/lock-channel-messages-raidprotect.png)
