---
title: Anti-spam
---

Proteja o seu servidor Discord de forma fácil e eficaz com a funcionalidade anti-spam do RaidProtect.

## ❓ Como funciona o Anti-Spam {#working}

**O sistema anti-spam do RaidProtect bane automaticamente spammers e raiders do seu servidor sem qualquer intervenção da sua parte.** Deteta tanto spam pesado como ligeiro e pode agir rapidamente para o travar, dependendo da configuração do seu servidor. 🤚

:::warning
**O spam pesado envolve tipicamente comportamento semelhante a um raid, incluindo ligações de convite, menções ou imagens.** O RaidProtect distingue o spam pesado do ligeiro e aplica sanções diferentes em conformidade.
:::

**Se for detetado spam, o RaidProtect expulsa o spammer** e informa-o através do canal de logs. Pode ver os detalhes do spam bloqueado clicando na ligação fornecida.

![Captura de ecrã do log de spam](../../../../en/docusaurus-plugin-content-docs/version-3.0.0/assets/log-spam-raidprotect.png)

## 📈 Níveis de segurança do Anti-Spam {#level}

O sistema anti-spam do RaidProtect oferece múltiplos níveis de segurança, permitindo-lhe **ajustar o seu comportamento, particularmente nos canais ignorados.** 👮

### Níveis de segurança disponíveis {#level-list}

🔴 **Alto (`high`):** Deteta tanto spam ligeiro como pesado. Nos canais ignorados, apenas o spam pesado é bloqueado.

🔶 **Médio (`medium`):** Deteta tanto spam ligeiro como pesado. Nos canais ignorados, todos os tipos de spam são permitidos.

💚 **Baixo (`low`):** Apenas bloqueia spam pesado. Nos canais ignorados, todos os tipos de spam são permitidos.

### Alterar o nível de segurança {#level-change}

Para alterar o nível de segurança do anti-spam, utilize o seguinte comando: `?settings spamlevel [high/medium/low]`.

## 💤 Ignorar um canal {#ignore-channel}

Por diversas razões, poderá querer que o sistema anti-spam ignore determinados canais no seu servidor. Felizmente, é fácil excluir os canais que desejar. 😝

O comportamento do sistema anti-spam nos canais ignorados depende do nível de segurança configurado.

Para ignorar um canal, basta executar o comando: `?settings allowspam #canal` (substitua `#canal` pelo canal que pretende ignorar). Para voltar a incluir o canal, utilize o comando: `?settings allowspam #canal remove`.

Os canais com `spam` no nome são automaticamente ignorados.
