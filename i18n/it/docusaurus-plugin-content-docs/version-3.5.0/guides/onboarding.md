---
title: Processo di benvenuto e Captcha
description: "Configura il processo di benvenuto di Discord perché il captcha di RaidProtect funzioni: rendi il canale di verifica visibile ai nuovi membri."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

Se il canale `#verifica` non è visibile per impostazione predefinita ai nuovi membri, questi non possono superare il [captcha](../features/captcha.md) e restano bloccati. Questa guida riguarda il **Processo di benvenuto di Discord** (Impostazioni del server > Processo di benvenuto). Per il messaggio di benvenuto e i ruoli automatici di RaidProtect, consulta la pagina [Arrivi e benvenuto](../features/onboarding.md).

Nella maggior parte dei casi, RaidProtect corregge il problema per te: inizia dal passaggio 1.

## 1️⃣ Lasciare che RaidProtect corregga {#auto-fix}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Arrivi**”.
3. Clicca su “**Configurare**” accanto a “**Captcha**”.
4. Se un riquadro segnala che il canale di verifica **non è visibile per impostazione predefinita**, clicca su:
   - “**Sposta in** _categoria_” per collocare il canale in una categoria già visibile ai nuovi membri;
   - oppure “**Crea una nuova categoria**” perché creiamo una categoria “Benvenuto” aggiunta ai canali predefiniti.

I permessi del canale vengono conservati durante lo spostamento.

<Settings start="captcha" />

:::tip
La stessa schermata segnala le **falle** del ruolo `@Non verificato`: ruoli assegnati dal Processo di benvenuto di Discord che aggirano la verifica, canali ancora visibili ai membri in verifica. Il pulsante “**Correggi**” chiude i canali interessati. Vedi gli [avvisi della schermata Captcha](../features/captcha.md#alerts).
:::

## 2️⃣ Verificare i permessi del canale {#permissions}

RaidProtect imposta da solo i permessi del canale `#verifica` e del ruolo `@Non verificato`. Se li hai modificati, verificali:

1. Apri le impostazioni del canale `#verifica` (clic destro > **Modifica canale**).
2. Nella scheda **Permessi**:
   - Assicurati che `@everyone` **non abbia** il permesso di vedere il canale.
   - Verifica che il ruolo `@Non verificato` **abbia** il permesso di **vedere il canale** e **leggere la cronologia dei messaggi**.
   - In modalità **Pannello (Interattivo)**, la modalità predefinita, `@Non verificato` **non deve** poter inviare messaggi: il codice si inserisce in una finestra. In modalità **Sfida (Classica)**, deve poter **inviare messaggi** per digitare il codice.

{/* ![Screenshot della verifica dei permessi del canale](../assets/rp-verification-channel-permissions.webp) : mostra “Inviare messaggi” autorizzato, vero solo in modalità Sfida */}

## 3️⃣ Verificare la categoria di benvenuto {#default-category}

Se preferisci correggere a mano:

1. Vai in **Impostazioni del server** > **Processo di benvenuto**.
2. Nella sezione **Canali predefiniti**, verifica che la categoria contenente `#verifica` sia spuntata come visibile ai nuovi membri.
3. Se necessario, sposta `#verifica` in una categoria spuntata.
4. Salva le modifiche.

![Screenshot della verifica della categoria di benvenuto](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-welcome-category.webp)

## 4️⃣ Aggiornare la configurazione in RaidProtect {#refresh-config}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Arrivi**”.
3. Clicca su “**Configurare**” accanto a “**Captcha**”.
4. Se è ancora mostrato un riquadro, clicca su “**Aggiornare**” per rilanciare la verifica. Quando il riquadro scompare, il captcha funziona correttamente.

## 5️⃣ Provare con un account di test {#test-account}

Per confermare che tutto sia configurato bene:

1. Unisciti al server con un altro account Discord.
2. Verifica che il canale `#verifica` sia visibile all'arrivo.
3. Clicca su “**Verifica**” e inserisci il codice (modalità Pannello), oppure digita il codice nel canale (modalità Sfida).
4. Una volta verificato, l'account dovrebbe avere accesso agli altri canali.

## 🛠️ Problemi frequenti e soluzioni {#common-issues}

| Problema | Soluzione |
|---------|----------|
| 🔴 Il canale `#verifica` resta invisibile | Clicca su “**Sposta in** _categoria_” nella schermata Captcha, oppure metti il canale in una **categoria spuntata** del benvenuto Discord. |
| 🚫 Il ruolo `@Non verificato` non può scrivere | Normale in modalità Pannello: il membro clicca su “**Verifica**”. In modalità Sfida, dagli il **permesso di inviare messaggi** in `#verifica`. |
| 🔓 Un membro non verificato vede altri canali | Clicca su “**Correggi**” nel riquadro di falla della schermata Captcha, e togli i ruoli che il Processo di benvenuto Discord assegna all'arrivo. |
| ❌ Il Captcha non funziona dopo una modifica | Clicca su “**Aggiornare**” nella schermata Captcha (scheda “**Arrivi**” di `/settings`). |

---

✅ Seguendo questi passaggi, il tuo sistema di verifica sarà pienamente operativo per accogliere i membri in sicurezza e bloccare efficacemente bot o raid.
