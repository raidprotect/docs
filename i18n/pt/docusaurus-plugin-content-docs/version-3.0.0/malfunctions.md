---
title: Problemas de funcionamento
---

Está com um problema no RaidProtect? A solução provavelmente está aqui.

Por vezes, as coisas não correm como esperado. Aqui estão os **problemas mais comuns** que poderá encontrar e como resolvê-los. 🤗

Se esta página não abordar o problema que está a enfrentar, **não hesite em contactar a nossa equipa de suporte**, que terá todo o gosto em ajudá-lo!

## O bot mostra um erro quando uso um comando {#commands}

Se um comando não for executado com sucesso, **o RaidProtect poderá apresentar um erro** em vez do resultado esperado. Na maioria dos casos, a mensagem explicará o problema, mas por vezes pode ser mais genérica. Eis como resolver o problema na maioria dos casos. 🧐

- **Siga as instruções.** Alguns erros explicam claramente o problema. Se o bot lhe pedir para fazer algo, siga as instruções fornecidas.

- **Verifique os parâmetros do comando.** Certifique-se de que o comando está escrito corretamente. Consulte a documentação de ajuda se necessário. Lembre-se de que os parênteses retos (`[]`) não devem ser incluídos no seu comando.

- **Verifique as permissões do bot.** O bot deve ter permissões de Administrador e estar posicionado ao mesmo nível dos administradores na hierarquia de cargos.

- **Tente novamente o comando.** Ocasionalmente, o problema resolve-se sozinho sem razão aparente.

Se o erro persistir apesar de seguir estes passos, contacte a nossa equipa de suporte para mais assistência. 🤝

## O canal de logs do bot não foi criado automaticamente {#logs}

Para o notificar das suas ações, o RaidProtect necessita de um canal de logs. Este canal é criado automaticamente quando o bot entra no servidor pela primeira vez, mas por vezes não aparece. Eis como resolver isto! ⚙️

- **Certifique-se de que o bot tem permissões de Administrador.** O bot necessita de acesso de Administrador para funcionar corretamente. Se não tiver, vá às definições de cargos do seu servidor e conceda esta permissão ao cargo do RaidProtect. Depois de configurar as permissões, inicialize manualmente o bot conforme descrito abaixo.

- **Verifique a inicialização do bot.** Este processo é normalmente automático, mas pode inicializar manualmente o bot executando o comando `?setup`. O canal de logs deverá então ser criado.

- **Defina um canal de logs manualmente.** Se nada funcionar, não se preocupe! Pode atribuir manualmente um canal para os logs. Crie um canal dedicado e depois execute o comando `?settings logs #canal`, substituindo `#canal` pelo seu novo canal de logs.

## Um utilizador fez spam, mas o bot não agiu {#anti-spam}

O anti-spam é uma das funcionalidades principais do RaidProtect, e pode ser frustrante se não funcionar como esperado. Felizmente, o problema é geralmente fácil de resolver. 😇

- **Se o anti-spam deteta spam mas não age,** provavelmente deve-se a permissões insuficientes. Certifique-se de que o bot tem permissões de Administrador e está posicionado ao mesmo nível dos administradores na hierarquia de cargos.

- **Verifique a configuração do anti-spam.** Pode parecer trivial, mas alguns utilizadores esquecem-se de que excluíram determinados canais da deteção.

- **Verifique as permissões do spammer.** Os administradores são ignorados pelo sistema anti-spam. Se estiver a testar no seu próprio servidor, o bot poderá não detetar o seu spam.

- **O spam é suficientemente significativo?** O bot normalmente deteta spam após mais de cinco mensagens. Tenha paciência ao testar.

Se o anti-spam continuar sem responder ao spam, contacte-nos no nosso servidor de suporte com uma **captura de ecrã do problema**.

## Os utilizadores contornam o captcha {#captcha}

Este problema é relativamente comum e está frequentemente relacionado com **a configuração do seu servidor**. Eis como resolvê-lo. 🏥

- **Tem um autorole?** Se outro bot estiver a atribuir um cargo a novos utilizadores, isso pode interferir com o captcha. Substitua-o pelo [autorole do RaidProtect](./features/captcha.md#autorole).

- **O captcha está ativado?** Esta funcionalidade é opcional e requer um comando para ser ativada. Consulte a documentação do captcha para mais detalhes.

## Os utilizadores continuam a poder conversar quando bloqueio um canal {#lock}

O comando de bloqueio é útil mas tem limitações. Conforme indicado [nesta documentação](./features/others.md#lock), o comando **afeta apenas o cargo @everyone**. Isto significa que se outro cargo tiver permissão explícita para conversar no canal bloqueado, os membros com esse cargo continuarão a poder falar.

Uma imagem vale mais que mil palavras, por isso aqui está um exemplo visual de como isto se apresenta. 🔍

![Captura de ecrã da configuração de bloqueio de canal](../../../en/docusaurus-plugin-content-docs/version-3.0.0/assets/lock-channel-messages-raidprotect.png)
