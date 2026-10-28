---
title: Idioma
description: "Mude o idioma do RaidProtect para adaptá-lo à sua comunidade: o bot fala 11 idiomas, do francês ao japonês, ou segue o do seu servidor Discord."
---

import { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

O RaidProtect permite que você escolha o idioma usado pelo bot para se adaptar melhor à sua comunidade do Discord.

**Mensagens públicas:** o idioma configurado se aplica às mensagens públicas enviadas pelo RaidProtect no seu servidor (logs, captcha, denúncias, etc.).

**Mensagens efêmeras:** as mensagens privadas ou temporárias continuam exibidas no idioma do usuário que interage com o bot.

## 🌐 Lista de idiomas suportados {#supported}

- **Francês**
- **Inglês**
- **Espanhol**
- **Alemão**
- **Português do Brasil**
- **Italiano**
- **Turco**
- **Vietnamita**
- **Japonês**
- **Chinês simplificado**
- **Chinês tradicional**

Somente os idiomas totalmente traduzidos são oferecidos. As respostas efêmeras enviadas a um membro que usa o Discord em outro idioma são exibidas em inglês.

## ⚙️ Alterar o idioma do bot {#change}

1. Use o [comando `/settings`](./setup.md#settings).
2. Na aba “**Geral**”, clique em “**Editar**” ao lado de “**Idioma**”.
3. Escolha o idioma desejado na lista e confirme.

<SettingsModal name="lang" />

A mudança é imediata e aparece nos logs do servidor.

### Seguir o idioma do servidor {#follow}

A primeira opção, “**Seguir o idioma do servidor**”, usa o idioma principal definido nas configurações de Comunidade do Discord. É a configuração padrão. Se esse idioma não fizer parte dos idiomas suportados, o RaidProtect fala inglês.

:::info
O suporte de idiomas do RaidProtect está em constante evolução! [Sugira](https://suggestions.raidprotect.bot) os idiomas que você gostaria de ver no bot ou [vote](https://suggestions.raidprotect.bot) nos idiomas propostos para que sejam adicionados.
:::
