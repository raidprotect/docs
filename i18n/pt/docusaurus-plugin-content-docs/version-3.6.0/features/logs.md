---
title: Logs do servidor
description: "Os logs do RaidProtect acompanham tudo o que acontece no seu servidor Discord: canais, cargos, membros, mensagens, voz, emojis e reações, com o autor de cada ação."
---

Os **logs do servidor** guardam um registro do que acontece no seu servidor: quem criou um canal, alterou um cargo, excluiu uma mensagem ou desconectou um membro de um canal de voz. Cada log começa pelo seu autor (“@mod criou o canal #geral.”) e mostra o antes e o depois de uma modificação.

:::info Experimentação: Logging Update
Os logs do servidor fazem parte da **Logging Update**, prevista para a versão 3.8.0. Até o lançamento, eles estão em experimentação, em beta público para os servidores [Premium](/pt/premium).
:::

## ⚙️ Configurar os logs {#config}

1. Use o [comando `/settings`](../setup.md#settings).
2. Abra a aba “**Moderação**”.
3. Clique em “**Configurar**” ao lado de “**Logs**”.
4. Abra “**Logs do servidor**” e escolha um canal para cada família.

Em cada família, duas listas:

- **Tipos enviados**: desmarque um tipo para não enviá-lo mais a lugar nenhum.
- **Tipos em outro canal**: dê um canal separado a um tipo. Um tipo sem canal separado segue o canal da sua família.

**Limites:** 3 canais de logs diferentes na versão gratuita, 15 com o [Premium](/pt/premium). Sem Premium, só os 3 primeiros canais recebem os logs: os outros ficam em pausa e suas configurações são mantidas.

Os canais “**Diversos**”, “**Moderação**” e “**Captcha**” dos [logs de moderação](./moderation.mdx#logs) não mudam.

## 📚 Famílias de logs {#families}

| Família | O que é registrado |
| --- | --- |
| **Canais, cargos e convites** | Categorias, canais, canais de voz e tópicos criados, modificados ou excluídos, permissões incluídas. Cargos, convites, webhooks, integrações, e bots adicionados ou removidos com o seu cargo. |
| **Membros** | Chegadas (com a idade da conta) e saídas (com a data de chegada e os cargos), regras aceitas, cargos adicionados ou removidos, apelidos, membros inativos removidos e boosts. |
| **Mensagens** | Mensagens excluídas, com quem as excluiu, mensagens editadas, exclusões em massa, mensagens fixadas ou desafixadas. |
| **Voz** <span className="badge-premium">Premium</span> | Chegadas, saídas com a duração da sessão, mudanças de canal, microfone, som, câmera e compartilhamento de tela. As ações da equipe (silenciar, ensurdecer, mover, desconectar) ficam à parte, com o seu autor. |
| **Emojis e reações** | Emojis, figurinhas e sons da soundboard criados, modificados ou excluídos. As reações adicionadas ou removidas são reservadas ao [Premium](/pt/premium) e desmarcadas por padrão. |

Uma mensagem editada mostra o antes e o depois. Para uma mensagem longa, só as linhas alteradas são exibidas.

As mensagens excluídas pelo próprio RaidProtect (anti-spam, HoneyPot, antigolpe, `/clear`) ficam nos logs do módulo correspondente, sem duplicata.

## 🎨 Formato dos logs {#format}

Escolha o formato em “**Formato dos logs**”, na mesma tela.

| Formato | Exibição |
| --- | --- |
| **Padrão** | A hora, o ícone, as menções com o seu nome e depois o detalhe. |
| **Destacado** | Um quadro colorido por log, com o seu título e o detalhe. |
| **Compacto** <span className="badge-premium">Premium</span> | Uma linha por log: a hora, o ícone e as menções. |

Um servidor que perde o Premium volta ao formato Padrão. A escolha dele é guardada para quando voltar.

## 💾 Mensagens na memória {#cache}

Para recuperar o conteúdo de uma mensagem excluída, o RaidProtect guarda as mensagens recentes na memória: **15 minutos** na versão gratuita, **6 horas** com o [Premium](/pt/premium). Depois disso, o log indica que o conteúdo não foi guardado.

Com o Premium, os anexos das mensagens excluídas também são copiados no log (10 MB por arquivo, 100 MB por servidor, os mais antigos são substituídos primeiro).
