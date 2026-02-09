---
title: Antispam
---

O Antispam do RaidProtect e uma ferramenta poderosa para prevenir spam no teu servidor Discord. Gracas ao seu sistema de detecao automatica, trata dos problemas sozinho sem necessitar da tua intervencao.

## ❓ Como Funciona o Antispam {#working}

O antispam do RaidProtect deteta e bloqueia automaticamente comportamentos suspeitos. Distingue entre dois tipos de spam.
- **Spam pesado:** Mensagens contendo links de convite, mencoes em massa ou imagens. Este tipo de spam e frequentemente usado durante raids.
- **Spam ligeiro:** Mensagens enviadas frequentemente mas menos intrusivas.

O antispam do RaidProtect atua de duas formas.
- **Sancoes:** Expulsao ou banimento automatico de spammers.
- **Notificacoes:** Envia mensagens para o canal de registos para reportar o spam bloqueado com um resumo das acoes detetadas.

## 🛡️ Configurar o Antispam {#config}

O RaidProtect oferece tres niveis de seguranca para se adaptar as necessidades do teu servidor.
- 🔴 **Alto:** Sanciona todo o spam, incluindo spam pesado em canais ignorados.
- 🟠 **Medio:** Sanciona todo o spam mas respeita os canais ignorados.
- 🟢 **Baixo:** Sanciona apenas o spam pesado.

![Captura de ecra das definicoes do antispam](../../../../en/docusaurus-plugin-content-docs/version-3.1.1/assets/rp-settings-anti-spam.webp)

### Alterar o Nivel de Seguranca {#level}

1. Usa o [comando `/settings`](../setup.md#settings).
2. Clica no botao "**Antispam**".
3. Seleciona o nivel de antispam desejado no primeiro menu pendente.

### Gerir Cargos, Utilizadores e Canais Ignorados {#ignore}

Podes excluir determinados canais, cargos ou ate utilizadores da monitorizacao do antispam para maior flexibilidade. 😉
1. Usa o [comando `/settings`](../setup.md#settings).
2. Clica no botao "**Antispam**".
3. Seleciona as diferentes opcoes a ignorar nos menus pendentes:
- Canal(is) a ignorar
- Cargo(s) a ignorar
- Membro(s) a ignorar

:::info
Os canais que contem "**spam**" no seu nome sao automaticamente ignorados. Os utilizadores com permissoes de administrador sao completamente ignorados.
:::
