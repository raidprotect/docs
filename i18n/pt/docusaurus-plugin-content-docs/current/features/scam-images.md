---
title: Imagens de golpe
description: "O ScamLens, o antigolpe do RaidProtect, detecta e remove automaticamente imagens de golpe no seu servidor Discord. Ativo por padrão, sem configuração."
---

import AntiScamMockup from '@site/src/components/DiscordMessage/mockups/anti-scam';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

O RaidProtect protege automaticamente o seu servidor contra as **imagens de golpe** (golpes de cripto, falsos giveaways, falsas promoções de cassinos). Essa proteção se chama **ScamLens**: ela analisa as imagens publicadas, exclui as que são golpes conhecidos e sanciona a conta que originou a mensagem (muitas vezes uma [conta comprometida](/pt/learn/token-grabber)).

<AntiScamMockup />

:::tip Sem configuração necessária
O ScamLens está **ativado por padrão assim que o RaidProtect chega ao seu servidor**. Você está protegido imediatamente, sem configurar nada.
:::

## ❓ Como funciona? {#working}

O ScamLens compara cada imagem publicada com os golpes conhecidos. Nada é lido do texto das mensagens.

Conforme a correspondência encontrada:

- **Correspondência certa**: a mensagem é **excluída** imediatamente e seu autor é **sancionado**. O log da sanção indica o canal atingido.
- **Correspondência incerta**: a mensagem é excluída **por precaução**, sem sanção. Se a imagem for confirmada como golpe depois, a sanção pode chegar mais tarde.

O motivo da sanção é “Golpe (Imagens Crypto) detectado”. Em um servidor [Premium](/pt/premium), o membro sancionado também recebe uma mensagem privada.

O ScamLens cuida apenas das **imagens**. Os outros tipos de spam são tratados pelo [Anti-spam](./anti-spam.mdx) e pelo [HoneyPot](./honeypot.md).

## 🔧 Configurar o ScamLens {#config}

O ScamLens é configurado no módulo **Automod** da aba “**Proteção**”, na tela “**Filtro de imagens**”.

1. Use o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Proteção**”.
3. Clique em “**Configurar**” ao lado de “**Automod**”.
4. Clique em “**Configurar**” ao lado de “**Imagens**”.

<Settings start="imageFilter" />

### Ativar ou desativar o ScamLens {#toggle}

Na tela “**Filtro de imagens**”, clique em “**Desativar**” (ou “**Ativar**”) no canto superior direito. Cada mudança é registrada nos seus logs.

### Escolher a sanção e sua duração {#sanction}

No seletor “**Sanção aplicada**”, escolha:
- “**Padrão**”: a sanção do seu [HoneyPot](./honeypot.md#sanction), se estiver ativo, caso contrário uma exclusão temporária (Timeout);
- ou uma sanção específica: Banimento, Softban, Jail, Expulsão, Mute, Timeout ou Aviso.

No seletor “**Duração da sanção**”, escolha 5 minutos, 1 hora, 1 dia ou “**Valor personalizado**” (por exemplo `30m`, `2h`, `7d`). A opção “**Padrão**” segue a duração do seu HoneyPot, se estiver ativo, caso contrário **1 dia**. Uma duração escolhida aqui é própria do ScamLens, independente do Anti-spam e do HoneyPot. Ela também se aplica às sanções que chegam mais tarde.

:::info
- Um **Jail** ou um **Mute** sem cargo configurado se torna um **Timeout**.
- A mensagem pública que anuncia a sanção segue a configuração “**Mensagem pública de punição**” do [Anti-spam](./anti-spam.mdx#public-message), que pode ser desativada no Premium.
:::

## 🗂️ Catálogo de imagens <span className="badge-premium">Premium</span> {#catalog}

Além do catálogo global “Crypto Scam”, gerenciado por nós e aplicado em todos os servidores, os servidores [Premium](/pt/premium) podem bloquear **suas próprias imagens**, qualquer que seja o conteúdo: capturas de falso Nitro, imagens de um golpe que visa a sua comunidade, imagens proibidas no seu servidor…

**Limites:** 2 listas por servidor, 10 imagens por envio.

### Criar uma lista {#lists}

1. Use o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Proteção**”.
3. Clique em “**Configurar**” ao lado de “**Automod**”.
4. Clique em “**Configurar**” ao lado de “**Imagens**”.
5. Em “**Catálogo de imagens**”, clique em “**Criar uma lista**” e dê um nome a ela.
6. Escolha o “**Canal de verificação**” da lista.
7. Clique em “**Adicionar imagens**” e envie até 10 imagens. O resultado indica as imagens adicionadas, as variantes associadas, as duplicatas ignoradas e as imagens recusadas.

As imagens de uma lista são excluídas assim que reaparecem no seu servidor, e o autor delas recebe a sanção escolhida acima. O motivo da sanção nomeia a lista (“Imagem da lista ‘_nome_’”). Sem sanção, a exclusão é registrada nos seus logs de moderação, com o canal e a lista.

:::warning Uma lista = um único registro de imagens
Coloque em uma lista um único tipo de conteúdo. Misturar imagens sem relação em uma mesma lista corrompe a detecção: crie de preferência uma segunda lista.
:::

### Canal de verificação {#review}

Quando uma imagem se parece com uma imagem da sua lista sem correspondência certa, nós a sinalizamos no **canal de verificação** da lista (“Verificação necessária: lista …”), com dois botões:
- “**Confirmar, é proibido**”: a imagem entra no catálogo, a mensagem é excluída e seu autor sancionado;
- “**Descartar, está limpo**”: essa imagem não acionará mais uma verificação.

É preciso ter a permissão `Gerenciar servidor` para decidir. Sem canal de verificação, as correspondências incertas permanecem silenciosas.

## 📊 Transparência {#reports}

Cada golpe bloqueado pelo ScamLens:

- aparece nos [resumos de Transparência](./transparency.md#recaps) do seu servidor (“X golpes bloqueados pelo ScamLens”);
- é contado no contador de contas sinalizadas do [HoneyPot](./honeypot.md);
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

Não, o ScamLens cuida apenas das imagens. Por padrão, ele bloqueia as imagens de golpe conhecidas. Os servidores Premium também podem adicionar a ele suas próprias imagens graças ao catálogo de imagens. Os outros tipos de spam são tratados pelo [Anti-spam](./anti-spam.mdx) e pelo [HoneyPot](./honeypot.md).

### Qual sanção é aplicada a uma imagem de golpe?

Por padrão, o ScamLens aplica a sanção e a duração do seu [HoneyPot](./honeypot.md#sanction), ou um Timeout de um dia se o HoneyPot não estiver ativado. Você pode escolher outra sanção e outra duração em /settings, aba Proteção, módulo Automod, tela Filtro de imagens.

### Como desativar o ScamLens?

Em /settings, aba Proteção, clique em “**Configurar**” ao lado de Automod, depois ao lado de Imagens, e use o interruptor no canto superior direito da tela Filtro de imagens.
