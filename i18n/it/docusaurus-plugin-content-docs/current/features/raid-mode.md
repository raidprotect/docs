---
title: Anti-raid
description: "La modalità raid di RaidProtect blocca istantaneamente gli arrivi di massa sul tuo server Discord, automaticamente non appena viene rilevata un'ondata sospetta."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

import RaidModeMockup from '@site/src/components/DiscordMessage/mockups/raid-mode';

{/* <RaidModeMockup /> : obsolète en 3.5.0 (montre l'expulsion comme seule action du mode raid) */}

## Modalità raid {#raid-mode}

La **modalità raid** di RaidProtect è una funzionalità d'emergenza che gestisce i nuovi utenti che tentano di unirsi al tuo server durante un'[ondata di arrivi sospetta](/it/learn/discord-raid), per una durata massima di 24 ore. Il nostro bot di protezione la attiva da solo non appena rileva un'ondata, e puoi anche attivarla a mano. Scegli tu cosa facciamo di chi arriva: bloccare gli inviti, espellerli o mandarli al [captcha](./captcha.md). Per chiudere durevolmente il server ai nuovi membri, usa il [comando `/joinlock`](./join-lock.mdx).

### ❓ Come funziona la modalità raid? {#working}

- **Rilevamento:** l'**Auto RaidMode** attiva la modalità raid quando troppi utenti si uniscono al tuo server contemporaneamente. Per impostazione predefinita, scatta a 10 arrivi in 10 secondi.
- **Reazione:** durante la modalità raid, chi arriva viene trattato secondo l'[azione durante il raid](#action) che hai scelto. Anche gli account dell'ondata che ha fatto scattare la modalità vengono trattati: espulsi, o rimandati dietro il captcha con le azioni captcha.
- **Fine:** la modalità raid si spegne da sola dopo la [durata configurata](#duration), 5 minuti per impostazione predefinita.
- **Log:** un messaggio viene pubblicato nel canale dei log a ogni attivazione e disattivazione.
- **Benvenuto:** il [messaggio di benvenuto](./onboarding.md#welcome-message) tace durante l'ondata, per non inondare il canale di benvenuto.

:::warning
Con l'azione “**Bloccare gli inviti**” (predefinita), le funzioni della community di Discord sono indispensabili alla modalità raid. [Segui la nostra guida per verificare l'attivazione della community sul tuo server.](../guides/community.md) Le altre azioni funzionano senza la community.
:::

#### Attivazione {#enable}

Un utente che dispone del permesso di espulsione può attivare la modalità raid a mano.

Usa il comando: ```/raidmode [status] [duration]```

- Senza opzioni, il comando mostra lo stato della modalità raid con un pulsante per attivarla o disattivarla.
- Sostituisci `[status]` con **True** per attivarla, **False** per disattivarla.
- Sostituisci `[duration]` con la durata desiderata (per esempio `30m` o `2h`, 24 ore al massimo). Senza durata, riprendiamo quella dell'Auto RaidMode.

Un messaggio viene automaticamente pubblicato nel canale dei log per segnalare l'attivazione. La modalità raid manuale applica la stessa [azione](#action) dell'Auto RaidMode.

#### Disattivazione {#disable}

La modalità raid si disattiva da sola alla fine della sua durata. Puoi anche fermarla prima con il comando `/raidmode`, una volta scongiurata la minaccia. 😇

:::info
Il comando `raidmode` è [utilizzabile tramite prefisso](../guides/prefix.md).
:::

### 🚨 Configurazione della modalità raid automatica {#config}

Se il tuo server accoglie spesso molti nuovi membri contemporaneamente, è opportuno modificare la soglia per evitare i falsi positivi. Tutte le impostazioni si trovano nella stessa schermata.

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Arrivi**”.
3. Clicca su “**Configurare**” accanto a “**Auto RaidMode**”.

L'interruttore in alto a destra della schermata attiva o disattiva l'Auto RaidMode. RaidProtect ha bisogno del permesso `MANAGE_GUILD`.

<Settings start="antiraid" />

#### Soglia di membri {#threshold}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Arrivi**”.
3. Clicca su “**Configurare**” accanto a “**Auto RaidMode**”.
4. In “**Numero di membri / 10 secondi**”, scegli 10, 15, 20 o 30 membri, oppure un “**Valore personalizzato**”.

La soglia si conta su una finestra di 10 secondi. Il valore predefinito è di 10 membri.

:::note
Consigliamo un valore compreso tra 10 e 20 membri in 10 secondi per una buona efficacia del sistema.
:::

#### Durata del raidmode {#duration}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Arrivi**”.
3. Clicca su “**Configurare**” accanto a “**Auto RaidMode**”.
4. In “**Durata prima della disattivazione**”, scegli 1, 2, 5 o 10 minuti, oppure un “**Valore personalizzato**” da 10 secondi a 24 ore (per esempio `5m 30s`).

La durata predefinita è di 5 minuti.

#### Azione durante il raid {#action}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Arrivi**”.
3. Clicca su “**Configurare**” accanto a “**Auto RaidMode**”.
4. In “**Azione durante il raid**”, scegli l'azione da applicare a chi arriva.

| Azione | Effetto su chi arriva | Disponibilità |
|---|---|---|
| “**Bloccare gli inviti**” (predefinita) | Discord chiude gli inviti del server, nessuno di nuovo entra. | Gratuita, community richiesta |
| “**Espellere chi arriva**” | Ogni nuovo arrivato viene espulso e riceve un messaggio privato che lo invita a tornare una volta disattivata la modalità raid. | [Premium](/it/premium) |
| “**Mandare al captcha**” | Chi arriva passa il captcha invece di essere espulso. | Gratuita, captcha attivo richiesto |
| “**Captcha congelato durante il raid**” | Chi arriva aspetta dietro il captcha e lo supera dopo l'ondata. | Gratuita, captcha attivo in modalità Pannello richiesto |

:::tip
Con le azioni captcha, imposta l'[attivazione del captcha](./captcha.md#trigger) su **Automatica**: il captcha si impone allora solo durante i raid, e chi arriva entra direttamente il resto del tempo.
:::

#### Modalità espulsione <span className="badge-premium">Premium</span> {#kick-mode}

Il vecchio interruttore “**Modalità espulsione**” è diventato l'azione “**Espellere chi arriva**” dell'[azione durante il raid](#action). Resta riservata ai server [**Premium**](/it/premium) e funziona senza la community Discord.

#### Chiudere i MP automaticamente {#close-dm}

Puoi configurare l'**Auto RaidMode** perché **chiuda automaticamente i MP del server** non appena si attiva. Questo aggiunge uno strato di protezione durante un raid: i nuovi account non possono più contattare i tuoi membri in privato per [phisharli](/it/learn/token-grabber) o truffarli.

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Arrivi**”.
3. Clicca su “**Configurare**” accanto a “**Auto RaidMode**”.
4. Clicca su “**Attivare**” accanto a “**Chiudere i MP**”.

Quando la modalità raid termina, i MP tornano alla loro configurazione precedente.

:::info
Questa opzione si applica solo con l'azione “**Bloccare gli inviti**”, che passa dalle azioni di sicurezza di Discord. È complementare alla [Chiusura dei MP permanente](./dm-lock.mdx): senza chiusura permanente, i MP sono chiusi solo durante un raid attivo.
:::

### 🎫 Bypass della modalità raid {#bypass-raid}

Aspetti un membro legittimo mentre è in corso un raid? Autorizzalo a unirsi nonostante la modalità raid:

Usa il comando: ```/bypass raid [utente]```

Sostituisci `[utente]` con l'[ID](../guides/id.mdx) desiderato: avrà 10 minuti per unirsi al server senza essere espulso dalla modalità raid. Puoi anche usare il comando senza specificare un utente per conoscere l'elenco attuale degli utenti in bypass (7 utenti al massimo contemporaneamente).

:::warning
Il bypass della modalità raid si applica solo con l'azione “**Espellere chi arriva**”: un utente bloccato a livello di invito non può essere messo in bypass. Con le azioni captcha, usa piuttosto il [bypass del captcha](./captcha.md#bypass).
:::

## Età minima {#minage}

L'età minima dell'account ha una sua sezione nella pagina [Arrivi e benvenuto](./onboarding.md#minage): impostazione dell'anzianità, scelta dell'azione (espulsione, jail fino all'età richiesta, trattenimento all'ingresso) e bypass.

### 🎂 Bypass dell'età minima dell'account {#bypass-minage}

Usa il comando ```/bypass minage [utente]```, dettagliato nel [bypass dell'età minima](./onboarding.md#bypass-minage).

## Domande frequenti {#faq}

### La modalità raid si attiva automaticamente?

Sì. Per impostazione predefinita, attiviamo la modalità raid non appena 10 utenti si uniscono al tuo server in 10 secondi. Questa soglia è configurabile nelle impostazioni dell'Auto RaidMode.

### Cosa fa la modalità raid ai nuovi arrivati?

Dipende dall'azione scelta: bloccare gli inviti (predefinita), espellere chi arriva ([Premium](/it/premium)), mandarlo al captcha, oppure farlo aspettare dietro un captcha congelato fino alla fine dell'ondata.

### Come attivare la modalità raid manualmente?

Un utente che dispone del permesso di espulsione esegue il comando `/raidmode`. Un messaggio viene allora pubblicato nel canale dei log per segnalare l'attivazione, e l'azione scelta si applica a chi arriva.

### La modalità raid si disattiva da sola?

Sì. Si spegne dopo la durata scelta in `/raidmode`, o in mancanza dopo la durata dell'Auto RaidMode (5 minuti per impostazione predefinita, 24 ore al massimo). Puoi fermarla prima con lo stesso comando.

### Serve attivare la community Discord?

Solo per l'azione “**Bloccare gli inviti**”, che usa la chiusura degli inviti di Discord. Le azioni “**Espellere chi arriva**”, “**Mandare al captcha**” e “**Captcha congelato durante il raid**” funzionano senza.

### Si può lasciare entrare un membro legittimo durante un raid?

Sì, con il comando `/bypass raid [utente]` quando l'azione è “**Espellere chi arriva**”: il membro ha allora 10 minuti per unirsi senza essere espulso (7 utenti in bypass al massimo contemporaneamente). Con le azioni captcha, usa `/bypass captcha [utente]`.
