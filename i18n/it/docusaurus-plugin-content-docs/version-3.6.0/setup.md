---
title: Installazione
description: "Installa e configura RaidProtect sul tuo server Discord in pochi minuti, con l'assistente /setup e poi la dashboard /settings."
---

import Head from '@docusaurus/Head';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

<Head>
  <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"Configurare RaidProtect su un server Discord","description":"Installare e configurare il bot di protezione RaidProtect con i comandi /setup e /settings.","step":[{"@type":"HowToStep","position":1,"name":"Avviare /setup","text":"Digita /setup in un canale in cui il bot è attivo per aprire l'assistente di installazione."},{"@type":"HowToStep","position":2,"name":"Scegliere i moduli","text":"Seleziona le funzionalità da installare nel menu “Scegli i moduli da installare”, poi clicca su “Attivare”."},{"@type":"HowToStep","position":3,"name":"Convalidare il riepilogo","text":"Il bot mostra un riepilogo di ciò che creerà e attiverà. Clicca di nuovo su “Attivare” per applicarlo."},{"@type":"HowToStep","position":4,"name":"Regolare con /settings","text":"Usa /settings in qualsiasi momento: la dashboard raggruppa le impostazioni in cinque schede, Generale, Arrivi, Protezione, Moderazione e Utilità."}]}).replace(/</g, '\\u003c')}</script>
</Head>

RaidProtect si configura con due comandi: [`/setup`](#install), un assistente che installa in un colpo solo le protezioni essenziali, e [`/settings`](#settings), la dashboard in cui regoli tutto il resto in qualsiasi momento. Questa guida ti spiega come usarli.

## Da dove iniziare {#etapes}

Per un server che parte da zero, ecco l'ordine consigliato:

1. **Avvia [`/setup`](#install)** e scegli i moduli da installare. RaidProtect crea il canale dei log, i canali e i ruoli necessari, poi applica le modifiche dopo un riepilogo.
2. **Apri la scheda “Arrivi” di [`/settings`](#settings)**: regola il [captcha](./features/captcha.md), l'[Auto RaidMode](./features/raid-mode.md) e il [benvenuto dei nuovi membri](./features/onboarding.md).
3. **Apri la scheda “Moderazione”**: verifica il canale dei log e le [sanzioni](./features/sanctions.mdx) (ruoli di jail e di mute).
4. **Regola l'[anti-spam](./features/anti-spam.mdx)** nella scheda “Protezione”: un preset basta per iniziare.

:::info Community Discord
La [modalità Community](./guides/community.md) di Discord è richiesta solo da alcune impostazioni, come il blocco degli inviti dell'Auto RaidMode e la [chiusura dei MP](./features/dm-lock.mdx). Il captcha funziona anche senza.
:::

## Installazione guidata {#install}

Il comando `/setup` è riservato agli amministratori. Installa in un colpo solo i moduli che scegli, con valori predefiniti collaudati che regolerai poi in `/settings`.

### 🔧 Scegliere i moduli {#recommended}

1. Esegui il comando `/setup`.
2. Nel menu “**Scegli i moduli da installare**”, seleziona le funzionalità desiderate: Comandi tramite messaggio, Auto RaidMode, Captcha, Età minima dell'account, Anti-spam, Segnalazioni, Ruolo del Tag, Chiusura dei MP e HoneyPot. I moduli già attivi sono preselezionati.
3. Clicca su “**Attivare**”.
4. Il bot riepiloga ciò che creerà o riutilizzerà. Clicca di nuovo su “**Attivare**” per applicare, oppure su “**Indietro**” per modificare la selezione.

<Settings start="setup" />

Alla conferma, RaidProtect:

- crea il canale `#raidprotect-logs` se non esiste, visibile agli amministratori e alla persona che ha aggiunto il bot;
- toglie a `@everyone` i permessi pericolosi (Amministratore, Bannare, Espellere, Gestire il server, i canali, i ruoli, i messaggi, i webhook e i thread, Menzionare @everyone, Escludere temporaneamente);
- attiva ogni modulo scelto con i suoi valori predefiniti: prefisso `?`, Auto RaidMode a 10 membri in 10 secondi, captcha in modalità Pannello con il canale `#verifica` e il ruolo `@Non verificato`, età minima di 6 ore, anti-spam e segnalazioni attivati, ruolo `@Tag`, chiusura dei MP, canale trappola dell'[HoneyPot](./features/honeypot.md).

:::tip Disattivare un modulo
Deselezionare un modulo in `/setup` non lo disattiva. Per spegnere una funzionalità, passa da [`/settings`](#settings).
:::

I [ruoli automatici e il messaggio di benvenuto](./features/onboarding.md) non fanno parte dell'assistente: regolali nella scheda “**Arrivi**” di `/settings`.

### 🧭 Nuovo assistente di installazione {#wizard}

Un nuovo assistente `/setup` sostituisce l'elenco di moduli con un percorso guidato:

- **Sezione per sezione**: Generale (con la lingua del server), Arrivi, Protezione e Moderazione, un passo alla volta. Una **vista condensata** riunisce tutto in un'unica schermata, a un clic di distanza.
- **Proposte su misura**: in base alla dimensione del server, se è pubblico, community o se ha un tag, l'assistente preseleziona le protezioni consigliate e spiega perché.
- **Più moduli**: il [messaggio di benvenuto](./features/onboarding.md#welcome-message) (con il suo canale), il filtro [Altri server](./features/automod.md#servers), che elimina gli inviti verso altri server, e lo [slowmode preventivo](./features/slowmode.md) ([Premium](/it/premium)) sul canale che preferisci. Il [DISCON](./features/discon.md) vi è spiegato: è sempre attivo, senza installare nulla.
- **Una verifica prima di iniziare**: segnala i permessi che mancano a RaidProtect e i ruoli posizionati sopra il suo, con un pulsante “**Verifica di nuovo**”.
- **Un riepilogo** di ciò che verrà creato, modificato o regolato. Nulla viene applicato prima di “**Installa**”.
- **Un server già configurato viene verificato, non rifatto**: il pannello del captcha già presente e la chiusura dei MP già attiva vengono conservati.
- **E poi**: un'anteprima dell'[audit di sicurezza](./features/audit.md) conclude l'installazione, con scorciatoie per provare il captcha, personalizzare il messaggio di benvenuto o aprire tutte le impostazioni. Un passaggio fallito si riprende rilanciando `/setup`.

## Modificare la configurazione {#settings}

Il comando `/settings` apre la dashboard di RaidProtect. È riservato agli amministratori e viene mostrato in un messaggio privato temporaneo, visibile solo a te.

### 🔍 La dashboard {#menu}

Le impostazioni sono organizzate in cinque schede:

- **Generale**: [lingua](./language.md), [comandi tramite messaggio](./guides/prefix.md), [permessi](./guides/prefix.md#permissions) e fuso orario del server.
- **Arrivi**: [Auto RaidMode](./features/raid-mode.md), [captcha](./features/captcha.md), [età minima dell'account](./features/onboarding.md#minage), [ruoli automatici](./features/onboarding.md#autorole) e [messaggio di benvenuto](./features/onboarding.md#welcome-message).
- **Protezione**: [DISCON](./features/discon.md), [anti-spam](./features/anti-spam.mdx), [Automod](./features/automod.md) ([filtro immagini](./features/scam-images.md), [altri server](./features/automod.md#servers) ed [estensioni dei file](./features/automod.md#files)), [HoneyPot](./features/honeypot.md), [slowmode preventivo](./features/slowmode.md), [Authentification Manager](./features/authentication-manager.mdx) e [chiusura dei MP](./features/dm-lock.mdx).
- **Moderazione**: [sanzioni](./features/sanctions.mdx), [doppi account](./features/alt-accounts.md)\*, log, [segnalazioni](./features/reports.md) e [trasparenza](./features/transparency.md).
- **Utilità**: [ruolo del tag](./features/tag-role.md), [blocco canale](./features/channel-lock.md), [ruolo in servizio](./features/moderation.mdx#onduty) e memorizzazione dei messaggi.

\* In sperimentazione: questa riga compare solo sui server che hanno accesso all'Identity Update (doppi account), in beta pubblica [Premium](/it/premium).

Ogni riga mostra il valore attuale dell'impostazione e un pulsante: “**Configurare**” apre una schermata dedicata, “**Modifica**” apre una finestra di inserimento. Ogni modifica si applica immediatamente.

Dopo un aggiornamento, un badge **Nuovo** segnala per due settimane le impostazioni appena arrivate, e anche la loro scheda finché non l'hai aperta.

Esplora la dashboard qui sotto, i pulsanti sono cliccabili:

<Settings start="home:arrivals" />

:::info Funzionalità Premium
Le schermate riservate al [Premium](/it/premium) restano consultabili.
:::

### 🕒 Fuso orario {#timezone}

Il fuso orario serve per tutto ciò che RaidProtect pubblica a un orario fisso, come i [riepiloghi di trasparenza](./features/transparency.md#recaps).

1. Esegui il comando `/settings`.
2. Nella scheda “**Generale**”, clicca su “**Modifica**” accanto a “**Fuso orario**”.
3. Scegli il tuo scostamento UTC, oppure inserisci un identificatore di fuso come `Europe/Rome` perché l'ora legale venga gestita automaticamente.

Senza impostazione, il server è in UTC.

### 🔄 Reimpostare un'impostazione {#reset}

1. Vai all'impostazione desiderata.
2. Clicca su “**Reimpostare**”.

La reimpostazione si applica subito, senza conferma. Solo le azioni distruttive, come l'eliminazione del captcha, ti chiedono di confermare.

### 🎨 Personalizzare il bot <span className="badge-premium">Premium</span> {#customize}

Il pulsante “**Personalizza**”, in fondo alla dashboard, cambia l'aspetto di RaidProtect sul tuo server: soprannome, avatar, banner, font, effetto e colori del soprannome.

<Settings start="customize" />

Le immagini accettate sono in PNG, JPEG, GIF o WebP, fino a 10 MB. Se il Premium termina, l'avatar, il banner e lo stile del soprannome tornano a quelli di RaidProtect; il soprannome viene conservato.

## Quale configurazione per il tuo server? {#quelle-config}

L'assistente `/setup` copre già l'essenziale. Se parti da zero, o se prepari la tua installazione con un'IA, individua ciò che corrisponde al tuo server: ogni esigenza rimanda alla funzionalità che vi risponde.

- **[Raid](/it/learn/discord-raid), ondate di account che arrivano tutti insieme**: l'[Auto RaidMode](./features/raid-mode.md) blocca o filtra gli arrivi per la durata dell'attacco, e il [DISCON](./features/discon.md) ti permette di irrigidire tutto il server con un clic.
- **[Spam](/it/learn/spam-discord), pubblicità, link di truffa**: l'[anti-spam](./features/anti-spam.mdx) sanziona automaticamente, e l'[HoneyPot](./features/honeypot.md) intrappola gli account di spam.
- **[Bot](/it/learn/self-bot) che entrano in massa**: il [captcha](./features/captcha.md) fa dimostrare a ogni nuovo arrivato di essere umano, e l'[età minima dell'account](./features/onboarding.md#minage) scarta gli account creati il giorno prima.
- **Truffe in immagine** (finti giveaway, phishing): il [filtro immagini](./features/scam-images.md) le rileva e le elimina.
- **Un rischio di [nuke](/it/learn/discord-nuke) o account dello staff hackerati**: applica il [privilegio minimo](/it/learn/least-privilege) e l'[Authentification Manager](./features/authentication-manager.mdx).
- **Una community che può aiutarti a moderare**: attiva le [segnalazioni](./features/reports.md).

Regola poi le [sanzioni](./features/sanctions.mdx) (espulsione, timeout, bando, jail) in base al tuo server.

:::info Un problema di configurazione?
Se incontri un problema, consulta la sezione [Malfunzionamenti](./guides/malfunctions.md) oppure unisciti al nostro [server di supporto](https://raidprotect.bot/discord) per ricevere aiuto.
:::
