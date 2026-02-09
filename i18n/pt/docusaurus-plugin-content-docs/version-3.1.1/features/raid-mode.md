---
title: Modo raid
---

O modo raid e uma funcionalidade de emergencia concebida para bloquear instantaneamente todos os novos utilizadores que tentarem juntar-se ao teu servidor. E radical mas eficaz na prevencao de raids em massa. Com o modo raid do RaidProtect, tens um escudo eficaz contra ataques massivos ao teu servidor. 🌟

## ❓ Como Funciona o Modo Raid {#working}

O RaidProtect ativa automaticamente o modo raid se um grande numero de utilizadores se juntar ao teu servidor num curto periodo. Por defeito, o modo raid ativa-se se mais de 10 utilizadores se juntarem ao teu servidor em menos de 10 segundos. Quando o modo raid esta ativado, nenhum utilizador pode juntar-se ao servidor. Sao bloqueados ao nivel do convite.

:::warning
As funcionalidades de Comunidade do Discord sao essenciais para o modo raid funcionar corretamente. [Segue o nosso guia para verificares que a Comunidade esta ativada no teu servidor.](../guides/community.md)
:::

### Ativacao {#enable}

- Para ativar manualmente este modo, um utilizador com permissoes de expulsao deve executar o comando `/raidmode`.
- Uma mensagem sera automaticamente publicada no canal de registos para indicar a ativacao.

### Desativacao {#disable}

O modo raid nao se desativa automaticamente. Certifica-te de que o desativas com o mesmo comando quando a ameaca tiver passado. 😇

:::info
O comando `raidmode` e [utilizavel com prefixo](../guides/prefix.md).
:::

## 🚨 Configurar o Modo Raid Automatico {#config}

Se o teu servidor recebe frequentemente muitos novos membros em simultaneo, e prudente ajustar este limiar para evitar falsos positivos.

[Captura de ecra do modo raid automatico](../../../../en/docusaurus-plugin-content-docs/version-3.1.1/assets/rp-settings-raid-mode.webp)

:::note
Recomendamos introduzir um valor entre 10 e 20 membros em 10 segundos para uma boa eficiencia do sistema.
:::

1. Usa o [comando `/settings`](../setup.md#settings).
2. Clica no botao "**Auto RaidMode**".
3. Seleciona o numero de membros que podem juntar-se em 10 segundos.

Podes deixar o valor predefinido (10) ou ajusta-lo ao valor desejado clicando no botao "**Valor Personalizado**".

:::warning
Se o modo raid se ativar automaticamente, lembra-te de o desativar assim que a ameaca tiver passado. Tem em conta que nao se desliga sozinho. 😖
:::
