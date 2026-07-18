---
title: Imagens de golpe
---

import { AntiSpamSanctionsSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

O RaidProtect protege automaticamente o seu servidor contra as **imagens de golpe** (golpes de cripto, falsos giveaways, falsas promoções de cassinos). Essa proteção se chama **ScamLens**: ela analisa as imagens publicadas, exclui as que são golpes conhecidos e sanciona a conta que originou a mensagem (muitas vezes uma conta comprometida).

:::tip Sem configuração necessária
O ScamLens está **ativado por padrão assim que o RaidProtect chega ao seu servidor**. Você está protegido imediatamente, sem configurar nada.
:::

## ❓ Como funciona {#working}

Assim que uma imagem é publicada, o ScamLens a analisa. Se for um golpe conhecido:

1. O incidente é **registrado nos logs de moderação** (com a imagem envolvida) antes de qualquer exclusão.
2. A mensagem é **excluída**.
3. A conta que a originou é **sancionada**.

O ScamLens cuida apenas das **imagens**. Os outros tipos de spam são tratados pelo [Anti-spam](./anti-spam.mdx) e pelo [HoneyPot](./honeypot.md).

## 🔧 Desativar ou reativar {#config}

A sanção aplicada às imagens de golpe **segue por padrão a do seu [HoneyPot](./honeypot.md#sanction)** (ou um Timeout se o HoneyPot não estiver ativado). Você pode alterá-la, desativá-la ou reativá-la pelo mesmo menu:

1. Use o comando [`/settings`](../setup.md#settings).
2. Abra o módulo **Anti-spam** e depois o menu **Sanções**.
3. Na lista de gatilhos, selecione **«Imagens de golpe (Crypto Scam)»** e escolha a sanção desejada. Para desligar a proteção, redefina a sanção desse gatilho.

<AntiSpamSanctionsSettingsMockup />

## 📊 Transparência {#reports}

Cada golpe bloqueado pelo ScamLens:

- aparece nas [recapitulações de Transparência](./transparency.md#recaps) do seu servidor («X golpes bloqueados pelo ScamLens»);
- é contado no contador público de contas capturadas do [HoneyPot](./honeypot.md);
- reforça a proteção de **todos os servidores** que usam o RaidProtect.

Publicamos regularmente relatórios públicos sobre os golpes detectados e bloqueados: encontre-os na [**Previsão de ameaças**](/blog/tags/threats). Para conhecer o ScamLens em detalhe, leia [nossa apresentação](/blog/scamlens-early-activation).
