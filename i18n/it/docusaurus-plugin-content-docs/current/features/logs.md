---
title: Log del server
description: "I log di RaidProtect tengono traccia di tutto ciò che succede sul tuo server Discord: canali, ruoli, membri, messaggi, vocale, emoji e reazioni, con l'autore di ogni azione."
---

I **log del server** tengono traccia di ciò che succede sul tuo server: chi ha creato un canale, modificato un ruolo, eliminato un messaggio o disconnesso un membro da un canale vocale. Ogni log inizia con il suo autore (“@moderatore ha creato il canale #generale.”) e mostra il prima e il dopo di una modifica.

:::info Sperimentazione: Logging Update
I log del server fanno parte della **Logging Update**, prevista per la versione 3.8.0. In attesa della sua uscita, sono in fase di sperimentazione, in beta pubblica per i server [Premium](/it/premium).
:::

## ⚙️ Configurare i log {#config}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Moderazione**”.
3. Clicca su “**Configurare**” accanto a “**Log**”.
4. Apri “**Log del server**”, poi scegli un canale per ogni famiglia.

In ogni famiglia ci sono due elenchi:

- **Tipi inviati**: deseleziona un tipo per non inviarlo più da nessuna parte.
- **Tipi in un altro canale**: assegna un canale a parte a un tipo. Un tipo senza canale a parte segue il canale della sua famiglia.

**Limiti:** 3 canali di log diversi nella versione gratuita, 15 con il [Premium](/it/premium). Senza Premium, solo i primi 3 canali ricevono i log: gli altri vengono messi in pausa e le loro impostazioni vengono conservate.

I canali “**Generale**”, “**Moderazione**” e “**Captcha**” dei [log di moderazione](./moderation.mdx#logs) non cambiano.

## 📚 Famiglie di log {#families}

| Famiglia | Cosa viene registrato |
| --- | --- |
| **Canali, ruoli e inviti** | Categorie, canali, canali vocali e thread creati, modificati o eliminati, permessi compresi. Ruoli (e il loro nuovo ordine), inviti, webhook, integrazioni, e bot aggiunti o rimossi con il loro ruolo. Regole AutoMod di Discord, con le parole e le espressioni aggiunte o rimosse, ed eventi programmati. I membri interessati a un evento sono riservati al [Premium](/it/premium). |
| **Membri** | Arrivi (con l'età dell'account) e uscite (con la data di arrivo e i ruoli), regolamento accettato, ruoli aggiunti o rimossi, nickname, avatar del server, membri inattivi rimossi e boost. |
| **Messaggi** | Messaggi eliminati, con chi li ha eliminati, messaggi modificati, eliminazioni in massa, messaggi fissati o non più fissati. |
| **Vocale** <span className="badge-premium">Premium</span> | Arrivi, uscite con la durata della sessione, cambi di canale, microfono, audio, videocamera e condivisione dello schermo. Le azioni del team (silenziare, disattivare l'audio, spostare, disconnettere) sono a parte, con il loro autore. Stage avviati, modificati o terminati, e membri che prendono la parola o alzano la mano. |
| **Emoji e reazioni** | Emoji, sticker e suoni della soundboard creati, modificati o eliminati. Le reazioni aggiunte o rimosse sono riservate al [Premium](/it/premium) e deselezionate per impostazione predefinita. |

Un messaggio modificato mostra il prima e il dopo. Per un messaggio lungo, vengono mostrate solo le righe cambiate.

Quando l'autore di un'azione ha indicato un **motivo** (visibile nel registro di controllo di Discord), questo appare nel log. I log legati a un ruolo hanno un pulsante “**Ruolo**” che apre la sua scheda [`/roleinfo`](./utilities.mdx#roleinfo).

I messaggi eliminati da RaidProtect stesso (anti-spam, HoneyPot, anti-truffa, `/clear`) restano nei log del modulo interessato, senza doppioni.

## 🎨 Formato dei log {#format}

Scegli il formato in “**Formato dei log**”, nella stessa schermata.

| Formato | Visualizzazione |
| --- | --- |
| **Predefinito** | L'ora, l'icona, le menzioni con il loro nome, poi il dettaglio. |
| **Riquadro** | Un riquadro colorato per log, con il suo titolo e il dettaglio. |
| **Compatto** <span className="badge-premium">Premium</span> | Una riga per log: l'ora, l'icona e le menzioni. |

Un server che perde il Premium torna al formato Predefinito. La sua scelta viene conservata per quando tornerà.

## 💾 Messaggi in memoria {#cache}

Per ritrovare il contenuto di un messaggio eliminato, RaidProtect conserva i messaggi recenti in memoria: **15 minuti** nella versione gratuita, **6 ore** con il [Premium](/it/premium). Oltre questo limite, il log indica che il contenuto non è stato conservato.

Con il Premium, anche gli allegati dei messaggi eliminati vengono copiati nel log (10 MB per file, 100 MB per server, i più vecchi vengono sostituiti per primi).
