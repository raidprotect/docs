---
title: Solução de problemas
description: "Um problema com o RaidProtect? Encontre aqui as soluções para os problemas mais comuns e deixe o seu bot de volta aos trilhos."
---

Você tem um problema com o RaidProtect? A solução provavelmente está aqui.

Às vezes, as coisas não funcionam como esperado. Veja os **problemas mais comuns** que você pode encontrar e como resolvê-los. 🤗

Se esta página não fornecer uma resposta para um problema que você esteja tendo, [**não hesite em entrar em contato com o nosso suporte**](https://raidprotect.bot/discord), que terá todo o prazer em ajudar você!

## O bot exibe um erro quando uso um comando {#commands}

Se o comando não for executado com sucesso, **o RaidProtect pode exibir um erro** em vez do resultado esperado. Na maioria dos casos, é dada uma indicação na mensagem, mas pode ser uma mensagem mais genérica. Veja como resolver esse problema na maioria dos casos. 🧐

- **Faça o que é indicado.** Alguns erros explicam claramente o problema. Se o bot pedir que você faça algo, faça.

- **Verifique os parâmetros do comando.** O comando pode simplesmente estar mal escrito; consulte a ajuda para ver como usá-lo. Não se esqueça de que os colchetes ([]) não devem ser incluídos.

- **Verifique as permissões do bot.** Ele deve ter a permissão de **Administrador** e estar no nível dos administradores na hierarquia de cargos.

- **Tente novamente o comando.** Às vezes, o problema se resolve sozinho, sem razão aparente.

Se você continuar recebendo um erro apesar dessas dicas, [entre em contato com o nosso suporte](https://raidprotect.bot/discord) para que possamos ajudar você. 🤝

## O canal de logs do bot não foi criado automaticamente {#logs}

Para avisar você das ações que executa, o RaidProtect precisa de um canal de logs. Esse canal é criado automaticamente quando o bot entra pela primeira vez, mas às vezes nenhum canal é criado. Veja como corrigir esse problema. ⚙️

- **Certifique-se de que o bot é Administrador.** Para que o bot funcione corretamente, é necessário dar a ele a permissão de Administrador. Se isso não estiver feito, vá até as configurações de cargos e conceda essa permissão ao cargo RaidProtect. Depois, basta inicializar manualmente o bot para que tudo funcione (ver abaixo)!

- **Verifique se o bot está devidamente inicializado.** Isso normalmente é feito automaticamente, mas você pode forçar essa inicialização com o [comando `/setup`](../setup.md#install). O canal de logs deve ser criado automaticamente.

- **Defina manualmente um canal.** Se nada funcionar, não entre em pânico: você mesmo pode escolher o canal de logs! Execute o [comando `/settings`](../setup.md#settings), abra a aba “**Moderação**” e clique em “**Configurar**” ao lado de “**Logs**”. Ali você pode escolher um canal geral e, se quiser, um canal dedicado à moderação e outro ao captcha: se ficarem vazios, esses dois usam o canal geral.

## Um usuário fez spam, mas o bot não o sancionou {#anti-spam}

O [anti-spam](../features/anti-spam.mdx) é uma das principais funcionalidades do RaidProtect, e pode ser frustrante se não funcionar. Mas fique tranquilo: na maioria das vezes, não é nada grave. 😇

- **Se o anti-spam pede para parar de fazer spam**, mas não sanciona, isso provavelmente se deve à falta de permissões. Lembre-se: o bot deve ter a permissão de Administrador e estar no nível dos administradores na hierarquia de cargos.

- **Verifique a configuração do anti-spam.** Parece óbvio, mas algumas pessoas se esquecem de que ignoraram um canal. Um canal cujo nome contenha “spam” também é sempre ignorado.

- **Faça uma simulação.** Na tela do anti-spam, o botão “**Simular**” diz, para um membro, um canal e um tipo de spam dados, se o anti-spam seria acionado e, se não, por quê (módulo desativado, canal ou cargo ignorado, membro acima do bot…). O [comando `/feedback`](../features/utilities.mdx#feedback) também oferece esse diagnóstico quando você relata um bug do anti-spam.

- **Verifique as permissões do spammer.** Os membros da equipe (Administrador, Gerenciar servidor, Gerenciar mensagens) são ignorados enquanto você mesmo não tiver ignorado nenhum cargo nem membro. Se você estiver testando o anti-spam no seu próprio servidor, ele pode, portanto, não detectar você.

- **O spam é suficientemente longo?** O anti-spam reage a um volume de mensagens, não a uma mensagem isolada. Não tenha tanta pressa e verifique se a sanção do [gatilho](../features/anti-spam.mdx#triggers) em questão não está desativada.

Se, apesar de tudo isso, o spam continuar a não ser detectado, [entre em contato conosco no nosso servidor de suporte](https://raidprotect.bot/discord) com uma **captura de tela do problema**.

## Os usuários têm acesso ao servidor sem passar pelo captcha {#captcha}

Esse problema é relativamente comum, mas depende da **configuração do seu servidor**. Vamos ver como corrigi-lo. 🏥

- **Você tem um cargo automático?** Se você configurou um bot (que não seja o RaidProtect) para dar um cargo aos novos membros do servidor, isso pode interferir no captcha. Substitua-o pelos [cargos automáticos do RaidProtect](../features/onboarding.md#autorole), atribuídos depois que o captcha é concluído com sucesso.

- **Você ativou o captcha?** Essa é uma funcionalidade opcional: ative-a na aba “**Chegadas**” de [`/settings`](../setup.md#settings). Consulte a [página dedicada ao captcha](../features/captcha.md#config) para mais informações.

- **Qual é o acionamento dele?** Em “**Automático**”, o captcha só se aplica durante um raid ou um nível [DISCON](../features/discon.md) elevado: no resto do tempo, os recém-chegados entram diretamente. Escolha “**Permanente**” para que cada recém-chegado passe pelo captcha.

- **Algum cargo ou canal o contorna?** A tela do captcha sinaliza os canais ainda visíveis para o cargo de verificação e os cargos que dão acesso ao servidor sem passar por ele, com um botão para corrigir.

## O comando /snipe não encontra nenhuma mensagem {#snipe}

O [comando `/snipe`](../features/moderation.mdx#snipe) lê as mensagens que o RaidProtect guarda na memória por uma hora. Sem anti-spam nem denúncias ativos, esse cache fica desativado por padrão: ative “**Cache de mensagens**” na aba “**Utilitários**” de [`/settings`](../setup.md#settings). Só as mensagens excluídas depois da ativação podem ser encontradas.

## Os usuários continuam podendo falar quando bloqueio um canal {#lock}

O comando de bloqueio parece mágico, mas também tem suas fraquezas. Como [indicado nesta documentação](../features/channel-lock.md#lock), o comando **atua apenas sobre o cargo @everyone**. Isso significa que, se um cargo tiver permissão explícita para falar no canal que você quer bloquear, ele continuará podendo fazer isso. Como uma imagem vale mais que mil palavras, veja como fica na prática. 🔍

![Captura de tela da configuração de bloqueio de canal](../../../../en/docusaurus-plugin-content-docs/current/assets/lock-channel-messages-raidprotect.png)
