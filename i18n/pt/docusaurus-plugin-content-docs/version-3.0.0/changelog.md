# Registo de alterações

Descubra a lista detalhada das alterações efetuadas no RaidProtect.

:::note Uma nova versão maior está em preparação
Isto explica o baixo número de atualizações recentes. Mas não se preocupe, a nossa equipa técnica está sempre ativa em caso de avarias nas versões atuais! ️

Para ficar a par das últimas novidades sobre a próxima versão maior, [junte-se ao nosso servidor Discord](https://discord.com/invite/rWEGrNXXzQ).
:::

## 3.0.0 (14/01/2023)

- Reescrita completa com o objetivo de preparar futuras atualizações e estabilizar o bot.
- Correção de todos os erros conhecidos até à data.
- O comando `?raidmode` utiliza agora a funcionalidade "Desativar convites".
- Envio automático de uma mensagem privada ao membro em causa quando é aplicada uma sanção.

## 2.2.0 (13/04/2020)

- Melhoria do desempenho do bot.
- Alterações importantes na arquitetura interna do projeto.

## 2.1.3 (13/10/2019)

- Remoção da lista negra e dos comandos associados.
- Adição da possibilidade de banir qualquer utilizador pelo seu ID, mesmo que não esteja no servidor.
- Apresentação do motivo do banimento na resposta do comando `?ban`.
- O comando `?raidmode` requer agora a permissão "expulsar membros".
- Alteração do tempo limite de expulsão caso o captcha não seja completado (5 minutos).
- Diversas melhorias internas.

## 2.1.2 (17/04/2019)

- Adição do comando `?userinfo`.
- ~~Adição dos comandos `?lockall` e `?unlockall`~~ (Funcionalidade removida).
- Adição dos comandos `?kick` e `?ban`.
- Introdução da idade mínima de conta para o captcha (opção para definir uma idade mínima de conta para aceder ao servidor).
- Adição da possibilidade de eliminar automaticamente as mensagens de invocação de comandos.
- O canal de logs recria-se agora automaticamente se for eliminado.
- Reestruturação da ligação à base de dados.
- Correção de erros e diversas melhorias.

## 2.1.1 (21/02/2019)

- Remoção de `?settings captcha` (substituído por `?captcha`).
- Adição da possibilidade de definir um canal de logs para o captcha.
- Adição de um autorole compatível com o captcha.
- Simplificação do captcha (são necessárias 5/6 letras corretas).
- Outras alterações menores.

## 2.1.0 (16/02/2019)

- Introdução do captcha (`?settings captcha`).
- Adição do nível de segurança anti-spam (`?settings spamlevel`).
- Adição dos comandos `?about` e `?invite`.
- Adição do comando `?clear`.
- Diversas alterações e correções de erros.

## 2.0.1 (04/02/2019)

- Reescrita do comando de ajuda (`?help`).
- Correção de erros em `?lock` e `?unlock`.

## 2.0.0 (26/01/2019)

- Introdução do anti-spam.
- Adição do modo raid automático.
- Adição do canal de logs.
- Adição da configuração do bot.
- Adição do bloqueio de canais.
- Numerosas outras alterações.
