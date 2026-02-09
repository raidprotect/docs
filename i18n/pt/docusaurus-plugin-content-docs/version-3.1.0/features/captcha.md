---
title: Captcha (Verificacao)
---

Impeca que selfbots acedam ao seu servidor Discord e bloqueie raids com o sistema de captcha do RaidProtect.

O captcha e uma das funcionalidades mais populares do RaidProtect, embora permaneca totalmente opcional. Permite-lhe exigir que cada novo utilizador complete um desafio introduzindo um codigo para verificar que nao e um bot (selfbot).

## ❓ Como funciona o Captcha {#working}

O captcha baseia-se num cargo **@Unverified** e num canal **#verification**. Quando um utilizador entra no seu servidor:
- O bot atribui automaticamente o cargo **@Unverified** a este utilizador, limitando o seu acesso apenas ao canal **#verification**.
- Neste canal, o bot envia uma imagem contendo 6 letras maiusculas. O utilizador deve transcrever as letras no canal para provar que e humano.
- Se a resposta estiver correta, o cargo **@Unverified** e removido e o utilizador obtem acesso normal ao servidor. Caso contrario, e automaticamente expulso.
- Quando o captcha esta ativado, o RaidProtect publica automaticamente uma mensagem no canal de registos, indicando a data de criacao da conta de cada novo utilizador.
- O RaidProtect deteta automaticamente problemas de permissoes (canal e cargo) bem como a visibilidade predefinida do canal durante o processo de integracao do Discord.

:::info
**Limite de tempo e tentativas:** Os utilizadores tem de **1 a 10 minutos** para completar o captcha (**5 minutos por defeito**) e de **1 a 3 tentativas** (**2 tentativas por defeito**). Se excederem estes limites, sao automaticamente expulsos do servidor.
:::
:::warning
**Gestao de permissoes:** As permissoes do cargo **@Unverified** sao automaticamente configuradas pelo RaidProtect. Pode renomear o cargo e o canal, mas nao os elimine.
:::

## 🚪 Configuracao do Captcha {#config}

Configurar o captcha e rapido e facil.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botao "**Captcha**".
3. Escolha o canal onde os captchas serao realizados ou utilize o botao "**Criar um por mim**".
4. O cargo **@Unverified** e automaticamente criado e configurado.
5. Configure o numero de tentativas permitidas (entre **1 e 3**) e o tempo maximo de resolucao (entre **1 e 10 minutos**).

![Captura de ecra das definicoes do captcha](../../../../en/docusaurus-plugin-content-docs/version-3.1.0/assets/rpBeta-settings-anti-captcha.webp)

## ✨ Funcionalidades adicionais {#additional-features}

Para se adaptar as necessidades do seu servidor, o captcha do RaidProtect oferece opcoes personalizaveis.

### Registos separados {#logs}

Se o seu servidor for popular, os registos relacionados com o captcha podem sobrecarregar o seu canal de registos principal. Pode move-los para outro canal.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botao "**Registos**".
3. Selecione "**Captcha**".
4. Escolha o canal onde os registos do captcha serao armazenados ou utilize o botao "**Criar um por mim**".

### Cargo automatico {#autorole}

Se utilizar um sistema de cargo automatico (autorole) diferente do RaidProtect, este pode interferir com o captcha. Substitua o seu autorole existente pelo do RaidProtect.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botao "**Captcha**".
3. Selecione "**Cargo automatico**".
4. Escolha o cargo que sera atribuido aos membros que completarem o captcha com sucesso.

### Idade minima de conta {#minage}

Para reforcar a seguranca, pode exigir uma idade minima de conta para os novos membros do Discord.

1. Execute o [comando `/settings`](../setup.md#settings).
2. Clique no botao "**Captcha**".
3. Prima o botao "**Idade minima**".
4. Selecione o valor pretendido no menu pendente ou escolha um valor personalizado expresso em formato de data (m/h/d/y).
