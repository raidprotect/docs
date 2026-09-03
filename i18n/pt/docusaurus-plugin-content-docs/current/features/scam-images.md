---
title: Imagens de golpe
description: "O ScamLens, o antigolpe do RaidProtect, detecta e remove automaticamente imagens de golpe no seu servidor Discord. Ativo por padrão, sem configuração."
---

import { AntiSpamSanctionsSettingsMockup } from '@site/src/components/DiscordMessage/mockups/settings-menus';

O RaidProtect protege automaticamente o seu servidor contra as **imagens de golpe** (golpes de cripto, falsos giveaways, falsas promoções de cassinos). Essa proteção se chama **ScamLens**: ela analisa as imagens publicadas, exclui as que são golpes conhecidos e sanciona a conta que originou a mensagem (muitas vezes uma conta comprometida).

:::tip Sem configuração necessária
O ScamLens está **ativado por padrão assim que o RaidProtect chega ao seu servidor**. Você está protegido imediatamente, sem configurar nada.
:::

## ❓ Como funciona? {#working}

Assim que uma imagem é publicada, o ScamLens a analisa. Se for um golpe conhecido:

1. O incidente é **registrado nos logs de moderação** (com a imagem envolvida) antes de qualquer exclusão.
2. A mensagem é **excluída**.
3. A conta que a originou é **sancionada**.

O ScamLens cuida apenas das **imagens**. Os outros tipos de spam são tratados pelo [Anti-spam](./anti-spam.mdx) e pelo [HoneyPot](./honeypot.md).

## 🔧 Como desativar ou reativar o ScamLens? {#config}

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

### Nossos relatórios mensais {#recaps}

Todo mês publicamos a **[Previsão de ameaças](/blog/tags/threats)**, um balanço público da atividade do ScamLens. Números acumulados desde o [lançamento em 14 de fevereiro de 2026](/blog/scamlens-early-activation), em todos os servidores protegidos pelo RaidProtect:

| Relatório | Imagens de golpe removidas | Contas comprometidas identificadas |
|---|---|---|
| [Balanço de 1 mês](/blog/scamlens-1-month-recap) *(mar. 2026)* | 260.000 | 15.000 |
| [Abril de 2026](/blog/threat-weather-april-2026) | 1.400.000 | 40.000 |
| [Maio de 2026](/blog/threat-weather-may-2026) | 2.300.000 | 80.000 |
| [Junho de 2026](/blog/threat-weather-june-2026) | 4.000.000 | 160.000 |

## Perguntas frequentes {#faq}

### É preciso configurar o ScamLens?

Não. O ScamLens está ativado por padrão assim que o RaidProtect chega ao seu servidor. Você está protegido imediatamente, sem configurar nada.

### O ScamLens bloqueia algo além das imagens?

Não, o ScamLens cuida apenas das imagens de golpe. Os outros tipos de spam são tratados pelo [Anti-spam](./anti-spam.mdx) e pelo [HoneyPot](./honeypot.md).

### Qual sanção é aplicada a uma imagem de golpe?

Por padrão, o ScamLens aplica a sanção do seu [HoneyPot](./honeypot.md#sanction), ou um Timeout se o HoneyPot não estiver ativado. Você pode alterá-la, desativá-la ou reativá-la pelo menu Anti-spam, nas Sanções.
