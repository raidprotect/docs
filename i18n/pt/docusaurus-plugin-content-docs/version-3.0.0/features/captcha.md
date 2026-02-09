---
title: Captcha (Verificação)
---

Impeça selfbots de aceder ao seu servidor Discord e bloqueie raids com o sistema de verificação captcha do RaidProtect.

O captcha é uma das funcionalidades mais populares do RaidProtect, sendo no entanto **totalmente opcional**. Se necessário, o captcha permite-lhe exigir que cada utilizador complete um desafio, introduzindo um código para confirmar que não é um bot (_selfbot_).

Embora isto aumente a segurança do seu servidor, **alguns utilizadores poderão não compreender o processo**, o que pode resultar na perda de alguns membros. Cabe-lhe a si decidir se vale a pena implementá-lo! 😉

## ❓ Como funciona o Captcha {#working}

**O captcha utiliza um cargo "Não verificado" e um canal #verificação.** Quando um utilizador se junta, o bot atribui-lhe o cargo "Não verificado", restringindo o seu acesso apenas ao canal #verificação. Neste canal, **o bot envia uma imagem contendo seis letras**, e o utilizador deve escrever o que vê para provar que não é um bot. Se a resposta estiver correta — permitindo uma letra incorreta — o bot remove o cargo "Não verificado", concedendo ao utilizador acesso normal ao servidor. 👾

Os utilizadores têm cinco minutos para completar o captcha. Após este tempo, são expulsos do servidor para evitar acumular mensagens órfãs no canal de verificação.

:::warning
**As permissões do cargo "Não verificado" são geridas automaticamente pelo RaidProtect.** Embora possa renomear o cargo e o canal, estes não devem ser eliminados.
:::

![Como funciona o Captcha](../../../../en/docusaurus-plugin-content-docs/version-3.0.0/assets/captcha-raidprotect.gif)

Quando um utilizador se junta ao seu servidor com o captcha ativado, o RaidProtect publica automaticamente **uma mensagem com a data de criação da conta** do novo utilizador no canal de logs.

![Captura de ecrã do log de entrada](../../../../en/docusaurus-plugin-content-docs/version-3.0.0/assets/log-join-captcha-raidprotect.png)

## ⛽ Configuração do Captcha {#setup}

**Configurar o captcha é muito simples!** Basta utilizar o comando `?captcha enable`, e tudo será configurado automaticamente. 🎩

Para o desativar, utilize o comando `?captcha disable`. O cargo e o canal do captcha serão removidos sem intervenção adicional.

## ✨ Funcionalidades adicionais {#additional-features}

Para tornar o sistema de captcha mais flexível, adicionámos **várias opções adicionais.** 🦸‍♂️

### Logs separados {#logs}

Por predefinição, os logs do captcha são publicados no canal de logs do RaidProtect. Se o seu servidor for popular, estas mensagens podem sobrecarregar os outros logs. **Pode movê-los para outro canal!**

Depois de criar um novo canal de logs, utilize o comando `?captcha logs #canal-de-logs`. Todos os logs do captcha aparecerão agora no novo canal.

### Atribuição automática de cargo {#autorole}

:::warning
Se utilizar um sistema de atribuição automática de cargo (_autorole_) diferente do RaidProtect, **o captcha poderá deixar de funcionar.** Substitua-o pela funcionalidade de autorole do RaidProtect para resolver este problema. 👷
:::

Por predefinição, os utilizadores não recebem qualquer cargo após passarem o captcha. No entanto, pode **atribuir um cargo automaticamente**. Para isso, execute o comando:
`?captcha autorole @cargo`.

O cargo pode ser uma menção ou o nome exato de um cargo.

### Idade mínima de conta {#minage}

Pode impor um **requisito de idade mínima de conta para aceder ao seu servidor.** Qualquer utilizador com uma conta mais recente do que este limite será automaticamente expulso. 👶

Para ativar esta funcionalidade, utilize o comando: `?captcha min-age [idade mínima]`. A idade mínima deve ser especificada em dias.
