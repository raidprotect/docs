---
title: Instalação
description: "Instale e configure o RaidProtect no seu servidor Discord em minutos, com o assistente /setup e depois o painel de controle /settings."
---

import Head from '@docusaurus/Head';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

<Head>
  <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"Configurar o RaidProtect em um servidor Discord","description":"Instalar e configurar o bot de proteção RaidProtect com os comandos /setup e /settings.","step":[{"@type":"HowToStep","position":1,"name":"Executar /setup","text":"Digite /setup em um canal onde o bot esteja ativo para abrir o assistente de instalação."},{"@type":"HowToStep","position":2,"name":"Escolher os módulos","text":"Selecione as funcionalidades a instalar no menu “Escolha os módulos a instalar” e depois clique em “Ativar”."},{"@type":"HowToStep","position":3,"name":"Validar o resumo","text":"O bot exibe um resumo do que vai criar e ativar. Clique novamente em “Ativar” para aplicá-lo."},{"@type":"HowToStep","position":4,"name":"Ajustar com /settings","text":"Use /settings a qualquer momento: o painel de controle reúne as configurações em cinco abas, Geral, Chegadas, Proteção, Moderação e Utilitários."}]}).replace(/</g, '\\u003c')}</script>
</Head>

O RaidProtect é configurado com dois comandos: [`/setup`](#install), um assistente que instala de uma só vez as proteções essenciais, e [`/settings`](#settings), o painel de controle onde você ajusta todo o resto a qualquer momento. Este guia explica como usá-los.

## Por onde começar {#etapes}

Para um servidor que começa do zero, esta é a ordem recomendada:

1. **Execute [`/setup`](#install)** e escolha os módulos a instalar. O RaidProtect cria o canal de logs, os canais e cargos necessários e depois aplica as mudanças após um resumo.
2. **Abra a aba “Chegadas” de [`/settings`](#settings)**: configure o [captcha](./features/captcha.md), o [Auto RaidMode](./features/raid-mode.md) e as [boas-vindas aos novos membros](./features/onboarding.md).
3. **Abra a aba “Moderação”**: verifique o canal de logs e as [sanções](./features/sanctions.mdx) (cargos de jail e de mute).
4. **Configure o [anti-spam](./features/anti-spam.mdx)** na aba “Proteção”: uma predefinição basta para começar.

:::info Comunidade Discord
O [modo Comunidade](./guides/community.md) do Discord só é exigido por algumas configurações, como o bloqueio dos convites do Auto RaidMode e o [Bloqueio de DMs](./features/dm-lock.mdx). O captcha funciona sem ele.
:::

## Instalação guiada {#install}

O comando `/setup` é reservado aos administradores. Ele instala de uma só vez os módulos que você escolher, com valores padrão testados e aprovados que você ajustará em seguida em `/settings`.

### 🔧 Escolher os módulos {#recommended}

1. Use o comando `/setup`.
2. No menu “**Escolha os módulos a instalar**”, selecione as funcionalidades desejadas: Comandos por mensagem, Auto RaidMode, Captcha, Idade mínima da conta, Anti-spam, Denúncias, Cargo de Tag, Bloqueio de DMs e HoneyPot. Os módulos já ativos vêm pré-marcados.
3. Clique em “**Ativar**”.
4. O bot resume o que vai criar ou reutilizar. Clique novamente em “**Ativar**” para aplicar, ou em “**Voltar**” para modificar a seleção.

<Settings start="setup" />

Na validação, o RaidProtect:

- cria o canal `#raidprotect-logs` se ele não existir, visível para os administradores e para a pessoa que adicionou o bot;
- retira de `@everyone` as permissões perigosas (Administrador, Banir, Expulsar, Gerenciar servidor, canais, cargos, mensagens, webhooks e threads, Mencionar @everyone, Colocar membros em castigo);
- ativa cada módulo escolhido com seus valores padrão: prefixo `?`, Auto RaidMode com 10 membros em 10 segundos, captcha no modo Painel com o canal `#verificação` e o cargo `@Não verificado`, idade mínima de 6 horas, anti-spam e denúncias ativados, cargo `@Tag`, bloqueio de DMs, canal-armadilha do [HoneyPot](./features/honeypot.md).

:::tip Desativar um módulo
Desmarcar um módulo em `/setup` não o desativa. Para desativar uma funcionalidade, passe por [`/settings`](#settings).
:::

Os [cargos automáticos e a mensagem de boas-vindas](./features/onboarding.md) não fazem parte do assistente: configure-os na aba “**Chegadas**” de `/settings`.

### 🧭 Novo assistente de instalação <span className="badge-experiment">Experimentação</span> {#wizard}

Um novo assistente `/setup` substitui a lista de módulos por um percurso guiado:

- **Seção por seção**: Geral (com o idioma do servidor), Chegadas, Proteção e Moderação, uma etapa por vez. Uma **visão condensada** reúne tudo em uma única tela, a um clique.
- **Propostas adaptadas**: conforme o tamanho do servidor, se ele é público, comunitário ou se tem uma tag, o assistente pré-marca as proteções recomendadas e diz por quê.
- **Mais módulos**: a [mensagem de boas-vindas](./features/onboarding.md#welcome-message) (com seu canal), o filtro [Outros servidores](./features/automod.md#servers), que exclui os convites para outros servidores, e o [slowmode preventivo](./features/slowmode.md) ([Premium](/pt/premium)) no canal de sua escolha. O [DISCON](./features/discon.md) é explicado ali: ele está sempre ativo, sem instalar nada.
- **Uma verificação antes de começar**: ele sinaliza as permissões que faltam ao RaidProtect e os cargos posicionados acima do dele, com um botão “**Verificar novamente**”.
- **Um resumo** do que será criado, modificado ou configurado. Nada é aplicado antes de “**Instalar**”.
- **Um servidor já configurado é verificado, não refeito**: o painel do captcha existente e o bloqueio de DMs já ativo são mantidos.
- **E depois**: uma prévia da [auditoria de segurança](./features/audit.md) encerra a instalação, com atalhos para testar o captcha, personalizar a mensagem de boas-vindas ou abrir todas as configurações. Uma etapa que falhou é retomada executando `/setup` novamente.

:::info Experimentação: Shield Update
O novo assistente de instalação chega com a **Shield Update**, prevista para a versão 3.6.0. Por enquanto, ele só é oferecido a um pequeno número de servidores.
:::

## Modificar a configuração {#settings}

O comando `/settings` abre o painel de controle do RaidProtect. Ele é reservado aos administradores e é exibido em mensagem privada temporária, visível somente para você.

### 🔍 O painel de controle {#menu}

As configurações são organizadas em cinco abas:

- **Geral**: [idioma](./language.md), [comandos por mensagem](./guides/prefix.md), [permissões](./guides/prefix.md#permissions) e fuso horário do servidor.
- **Chegadas**: [Auto RaidMode](./features/raid-mode.md), [captcha](./features/captcha.md), [idade mínima da conta](./features/onboarding.md#minage), [cargos automáticos](./features/onboarding.md#autorole) e [mensagem de boas-vindas](./features/onboarding.md#welcome-message).
- **Proteção**: [DISCON](./features/discon.md)\*, [anti-spam](./features/anti-spam.mdx), [Automod](./features/automod.md) ([filtro de imagens](./features/scam-images.md) e [outros servidores](./features/automod.md#servers)\*), [HoneyPot](./features/honeypot.md), [slowmode preventivo](./features/slowmode.md)\*, [Authentification Manager](./features/authentication-manager.mdx) e [Bloqueio de DMs](./features/dm-lock.mdx).
- **Moderação**: [sanções](./features/sanctions.mdx), [contas duplicadas](./features/alt-accounts.md)\*, logs, [denúncias](./features/reports.md) e [transparência](./features/transparency.md).
- **Utilitários**: [Cargo de Tag](./features/tag-role.md), [bloqueio de canal](./features/channel-lock.md), [cargo em serviço](./features/moderation.mdx#onduty) e cache de mensagens.

\* Em experimentação: essas linhas só aparecem nos servidores que têm acesso à Shield Update (DISCON, outros servidores, slowmode preventivo) ou à Identity Update (contas duplicadas), em beta público [Premium](/pt/premium).

Cada linha exibe o valor atual da configuração e um botão: “**Configurar**” abre uma tela dedicada, “**Editar**” abre uma janela de entrada. Qualquer mudança se aplica imediatamente.

Após uma atualização, um selo **Novo** sinaliza por duas semanas as configurações que acabaram de chegar, bem como a aba delas enquanto você não a tiver aberto.

Explore o painel de controle abaixo, os botões são clicáveis:

<Settings start="home:arrivals" />

:::info Funcionalidades Premium
As telas reservadas ao [Premium](/pt/premium) continuam consultáveis.
:::

### 🕒 Fuso horário {#timezone}

O fuso horário serve para tudo o que o RaidProtect publica em horário fixo, como os [resumos de transparência](./features/transparency.md#recaps).

1. Use o comando `/settings`.
2. Na aba “**Geral**”, clique em “**Editar**” ao lado de “**Fuso horário**”.
3. Escolha o seu deslocamento UTC, ou informe um identificador de fuso como `Europe/Paris` para que o horário de verão seja gerenciado automaticamente.

Sem configuração, o servidor fica em UTC.

### 🔄 Redefinir uma configuração {#reset}

1. Navegue até a configuração desejada.
2. Clique em “**Redefinir**”.

A redefinição se aplica imediatamente, sem confirmação. Somente as ações destrutivas, como a exclusão do captcha, pedem que você confirme.

### 🎨 Personalizar o bot <span className="badge-premium">Premium</span> {#customize}

O botão “**Personalizar**”, na parte de baixo do painel de controle, muda a aparência do RaidProtect no seu servidor: apelido, avatar, banner, fonte, efeito e cores do apelido.

<Settings start="customize" />

As imagens aceitas são PNG, JPEG, GIF ou WebP, de até 10 MB. Se o Premium terminar, o avatar, o banner e o estilo do apelido voltam aos do RaidProtect; o apelido é mantido.

## Qual configuração para o seu servidor? {#quelle-config}

O assistente `/setup` já cobre o essencial. Se você está começando do zero, ou se está preparando a sua instalação com uma IA, identifique o que corresponde ao seu servidor: cada necessidade aponta para a funcionalidade que a resolve.

- **[Raids](/pt/learn/discord-raid), ondas de contas que chegam de uma vez**: o [Auto RaidMode](./features/raid-mode.md) bloqueia ou filtra as chegadas durante o ataque, e o [DISCON](./features/discon.md) permite que você reforce todo o servidor com um clique.
- **[Spam](/pt/learn/spam-discord), publicidade, links de golpe**: o [anti-spam](./features/anti-spam.mdx) sanciona automaticamente, e o [HoneyPot](./features/honeypot.md) captura as contas de spam.
- **[Bots](/pt/learn/self-bot) que entram em massa**: o [captcha](./features/captcha.md) faz cada recém-chegado provar que é humano, e a [idade mínima da conta](./features/onboarding.md#minage) afasta as contas criadas na véspera.
- **Golpes em imagem** (falsos giveaways, phishing): o [filtro de imagens](./features/scam-images.md) os detecta e os remove.
- **Risco de [nuke](/pt/learn/discord-nuke) ou contas da equipe hackeadas**: aplique o [menor privilégio](/pt/learn/least-privilege) e o [Authentification Manager](./features/authentication-manager.mdx).
- **Uma comunidade que pode ajudar você a moderar**: ative as [denúncias](./features/reports.md).

Em seguida, ajuste as [sanções](./features/sanctions.mdx) (expulsão, timeout, banimento, jail) ao seu servidor.

:::info Um problema de configuração?
Se você encontrar um problema, consulte a seção [Solução de problemas](./guides/malfunctions.md) ou entre no nosso [servidor de suporte](https://raidprotect.bot/discord) para obter ajuda.
:::
