---
title: Anomalias
---

Tem um problema com o RaidProtect? A solução provavelmente encontra-se aqui.

Por vezes, as coisas não funcionam como esperado. Eis os **problemas mais comuns** que pode encontrar e como resolvê-los.

Se esta página não fornecer uma resposta para um problema que esteja a ter, [**não hesite em contactar a nossa equipa de suporte**](https://raidprotect.bot/discord) que terá todo o prazer em ajudá-lo!

## O bot apresenta um erro quando executo um comando {#commands}

Se o comando não for executado com sucesso, **o RaidProtect pode apresentar um erro** em vez do resultado esperado. Na maioria dos casos, é dada uma indicação na mensagem, mas pode ser uma mensagem mais genérica. Eis como resolver este problema na maioria dos casos.

- **Faça o que é indicado.** Alguns erros explicam claramente o problema. Se o bot lhe pedir para fazer algo, faça-o.

- **Verifique os parâmetros do comando.** O comando pode simplesmente estar mal escrito; consulte a ajuda para ver como utilizá-lo. Não se esqueça de que os parênteses retos ([]) não devem ser incluídos.

- **Verifique as permissões do bot.** Deve ter a permissão de **Administrador** e estar ao nível de administrador na hierarquia de cargos.

- **Tente novamente o comando.** Por vezes, o problema resolve-se por si só sem razão aparente.

Se continuar a obter um erro apesar destas dicas, [contacte o nosso suporte](https://raidprotect.bot/discord) para que possamos ajudá-lo.

## O canal de registos do bot não foi criado automaticamente {#logs}

Para o notificar das ações que executa, o RaidProtect precisa de um canal de registos. Este canal é criado automaticamente quando o bot entra pela primeira vez, mas por vezes nenhum canal é criado. Eis como corrigir este problema.

- **Certifique-se de que o bot tem permissões de Administrador.** Para que o bot funcione corretamente, precisa de lhe dar a permissão de Administrador. Se isto não estiver feito, vá às definições de cargos e conceda esta permissão ao cargo RaidProtect. Depois, basta inicializar manualmente o bot para que tudo funcione (ver abaixo)!

- **Verifique se o bot está devidamente inicializado.** Isto é normalmente feito automaticamente, mas pode forçar esta inicialização com o [comando `/setup`](../setup.md#install). O canal de registos deverá ser criado automaticamente.

- **Defina manualmente um canal.** Se nada funcionar, não entre em pânico, pode escolher manualmente o canal que o bot utilizará para registos! Assim que um canal dedicado estiver criado, execute o [comando `/settings`](../setup.md#settings) e depois selecione Registos.

## Um utilizador fez spam, mas o bot não o sancionou {#anti-spam}

O [anti-spam](../features/anti-spam.mdx) é uma das principais funcionalidades do RaidProtect, e pode ser frustrante se não funcionar. Mas fique descansado, na maioria das vezes, não é nada de grave.

- **Se o anti-spam pede para parar de fazer spam**, mas não sanciona, isto deve-se provavelmente à falta de permissões. Lembre-se, o bot deve ter a permissão de Administrador e estar ao nível de administrador na hierarquia de cargos.

- **Verifique a configuração do anti-spam.** Parece óbvio, mas algumas pessoas esquecem-se de que ignoraram um canal.

- **Verifique as permissões do spammer.** Os administradores são ignorados, portanto, se estiver a testar o anti-spam no seu próprio servidor, este pode não o detetar.

- **O spam é suficientemente longo?** O bot geralmente só deteta spam a partir de mais de 5 mensagens. Não seja demasiado apressado.

Se apesar de tudo isto, o spam continuar a não ser detetado, [contacte-nos no nosso servidor de suporte](https://raidprotect.bot/discord) com uma **captura de ecrã do problema**.

## Os utilizadores têm acesso ao servidor sem passar pelo captcha {#captcha}

Este problema é relativamente comum, mas depende da **configuração do seu servidor**. Vejamos como corrigi-lo.

- **Tem um cargo automático?** Se configurou um bot (que não o RaidProtect) para atribuir um cargo aos novos membros do servidor, isto pode interferir com o captcha. Substitua-o pelo [autorole do RaidProtect](../features/captcha.md#autorole).

- **Ativou o captcha?** Esta é uma funcionalidade totalmente opcional que requer a execução de um comando para ser ativada. Consulte a [página de documentação dedicada ao captcha](../features/captcha.md#config) para mais informações.

## Os utilizadores continuam a poder falar quando bloqueio um canal {#lock}

O comando de bloqueio parece mágico, mas também tem as suas fraquezas. Como [indicado nesta documentação](../features/channel-lock.md#lock), o comando **apenas atua sobre o cargo @everyone**. Isto significa que se um cargo no canal que pretende bloquear tiver permissão explícita para falar, continuará a poder fazê-lo. Como uma imagem vale mais do que mil palavras, eis como isto se apresenta na prática.

![Captura de ecrã da configuração de bloqueio de canal](../../../../en/docusaurus-plugin-content-docs/current/assets/lock-channel-messages-raidprotect.png)
