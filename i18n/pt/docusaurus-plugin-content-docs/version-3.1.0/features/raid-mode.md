---
title: Modo raid
---

O modo raid e uma funcionalidade de emergencia concebida para bloquear instantaneamente todos os novos utilizadores que tentam entrar no seu servidor. E radical mas eficaz na prevencao de raids em massa. Com o modo raid do RaidProtect, tem um escudo eficaz contra ataques massivos no seu servidor. 🌟

## ❓ Como funciona o modo raid {#working}

O RaidProtect ativa automaticamente o modo raid se um grande numero de utilizadores entrar no seu servidor num curto periodo. Por defeito, o modo raid ativa-se se mais de 10 utilizadores entrarem no seu servidor em menos de 10 segundos. Quando o modo raid esta ativado, nenhum utilizador pode entrar no servidor. Sao bloqueados ao nivel do convite.

:::warning
As funcionalidades de Comunidade do Discord sao essenciais para que o modo raid funcione corretamente. [Siga o nosso guia para verificar que a Comunidade esta ativada no seu servidor.](../guides/community.md)
:::

### Ativacao {#enable}

- Para ativar manualmente este modo, um utilizador com permissoes de expulsao deve executar o comando `/raidmode`.
- Uma mensagem sera automaticamente publicada no canal de registos para indicar a ativacao.

### Desativacao {#disable}

O modo raid nao se desativa automaticamente. Certifique-se de o desativar com o mesmo comando quando a ameaca tiver passado. 😇

:::info
O comando `raidmode` e [utilizavel com prefixo](../guides/prefix.md).
:::

## 🚨 Configurar o modo raid automatico {#config}

Se o seu servidor recebe frequentemente muitos novos membros em simultaneo, e prudente ajustar este limiar para evitar falsos positivos.

[Captura de ecra do modo raid automatico](../../../../en/docusaurus-plugin-content-docs/version-3.1.0/assets/rpBeta-settings-raid-mode.webp)

:::note
Recomendamos introduzir um valor entre 10 e 20 membros em 10 segundos para uma boa eficiencia do sistema.
:::

1. Utilize o [comando `/settings`](../setup.md#settings).
2. Clique no botao "**Auto RaidMode**".
3. Selecione o numero de membros que podem entrar em 10 segundos.

Pode manter o valor predefinido (10) ou ajusta-lo para o valor pretendido clicando no botao "**Valor personalizado**".

:::warning
Se o modo raid se ativar automaticamente, lembre-se de o desativar assim que a ameaca tiver passado. Tenha em conta que nao se desativa sozinho. 😖
:::
