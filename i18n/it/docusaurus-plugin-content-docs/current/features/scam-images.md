---
title: Immagini di truffa
description: "ScamLens, l'anti-truffa di RaidProtect, rileva ed elimina automaticamente le immagini di truffa sul tuo server Discord. Attivo per impostazione predefinita, senza configurazione."
---

import AntiScamMockup from '@site/src/components/DiscordMessage/mockups/anti-scam';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect protegge automaticamente il tuo server dalle **immagini di truffa** (truffe crypto, finti giveaway, false promozioni di casinò). Questa protezione si chiama **ScamLens**: analizza le immagini pubblicate, elimina quelle che sono truffe note e sanziona l'account all'origine del messaggio (spesso un [account hackerato](/it/learn/token-grabber)).

<AntiScamMockup />

:::tip Nessuna configurazione necessaria
ScamLens è **attivato per impostazione predefinita non appena RaidProtect arriva sul tuo server**. Sei protetto immediatamente, senza configurare nulla.
:::

## ❓ Come funziona? {#working}

ScamLens confronta ogni immagine pubblicata con le truffe note. Nulla viene letto del testo dei messaggi.

A seconda della corrispondenza trovata:

- **Corrispondenza certa**: il messaggio viene **eliminato** immediatamente e il suo autore viene **sanzionato**. Il log della sanzione precisa il canale interessato.
- **Corrispondenza incerta**: il messaggio viene eliminato **per precauzione**, senza sanzione. Se l'immagine viene poi confermata come truffa, la sanzione può arrivare più tardi.

Il motivo della sanzione è “Truffa (Immagini Crypto) rilevata”. Su un server [Premium](/it/premium), il membro sanzionato riceve anche un messaggio privato.

ScamLens si occupa solo delle **immagini**. Gli altri tipi di spam sono gestiti dall'[Anti-spam](./anti-spam.mdx) e dall'[HoneyPot](./honeypot.md).

## 🔧 Configurare ScamLens {#config}

ScamLens si regola nel modulo **Automod** della scheda “**Protezione**”, nella schermata “**Filtro immagini**”.

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Protezione**”.
3. Clicca su “**Configurare**” accanto a “**Automod**”.
4. Clicca su “**Configurare**” accanto a “**Immagini**”.

<Settings start="imageFilter" />

### Attivare o disattivare ScamLens {#toggle}

Nella schermata “**Filtro immagini**”, clicca su “**Disattivare**” (o “**Attivare**”) in alto a destra. Ogni modifica viene registrata nei tuoi log.

### Scegliere la sanzione e la sua durata {#sanction}

Nel selettore “**Sanzione applicata**”, scegli:
- “**Predefinita**”: la sanzione del tuo [HoneyPot](./honeypot.md#sanction) se è attivo, altrimenti un'esclusione temporanea (Timeout);
- oppure una sanzione precisa: Bando, Softban, Jail, Espulsione, Mute, Timeout o Avvertimento.

Nel selettore “**Durata della sanzione**”, scegli 5 minuti, 1 ora, 1 giorno o “**Valore personalizzato**” (per esempio `30m`, `2h`, `7d`). L'opzione “**Predefinita**” segue la durata del tuo HoneyPot se è attivo, altrimenti **1 giorno**. Una durata scelta qui è propria di ScamLens, indipendente da Anti-spam e HoneyPot. Si applica anche alle sanzioni arrivate più tardi.

:::info
- Un **Jail** o un **Mute** senza ruolo configurato diventa un **Timeout**.
- Il messaggio pubblico che annuncia la sanzione segue l'impostazione “**Messaggio pubblico di sanzione**” dell'[Anti-spam](./anti-spam.mdx#public-message), disattivabile con il Premium.
:::

## 🗂️ Catalogo di immagini <span className="badge-premium">Premium</span> {#catalog}

Oltre al catalogo globale “Crypto Scam”, gestito da noi e applicato su tutti i server, i server [Premium](/it/premium) possono bloccare **le proprie immagini**, qualunque sia il loro contenuto: screenshot di finto Nitro, visual di una truffa che prende di mira la tua community, immagini vietate sul tuo server…

**Limiti:** 2 liste per server, 10 immagini per invio.

### Creare una lista {#lists}

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Protezione**”.
3. Clicca su “**Configurare**” accanto a “**Automod**”.
4. Clicca su “**Configurare**” accanto a “**Immagini**”.
5. In “**Catalogo di immagini**”, clicca su “**Crea una lista**” e dalle un nome.
6. Scegli il “**Canale di verifica**” della lista.
7. Clicca su “**Aggiungi immagini**” e invia fino a 10 immagini. Il risultato indica le immagini aggiunte, le varianti collegate, i duplicati ignorati e le immagini rifiutate.

Le immagini di una lista vengono eliminate non appena ricompaiono sul tuo server, e il loro autore riceve la sanzione scelta sopra. Il motivo della sanzione cita la lista (“Immagine della lista ‘_nome_’”). Senza sanzione, l'eliminazione viene registrata nei tuoi log di moderazione, con il canale e la lista.

:::warning Una lista = un solo registro di immagini
Metti in una lista un solo tipo di contenuto. Mescolare immagini senza rapporto in una stessa lista corrompe il rilevamento: crea piuttosto una seconda lista.
:::

### Canale di verifica {#review}

Quando un'immagine assomiglia a un'immagine della tua lista senza corrispondenza certa, la segnaliamo nel **canale di verifica** della lista (“Verifica richiesta: lista …”), con due pulsanti:
- “**Conferma, è vietato**”: l'immagine entra nel catalogo, il messaggio viene eliminato e il suo autore sanzionato;
- “**Scarta, è pulito**”: questa immagine non farà più scattare una verifica.

Serve il permesso `Gestire il server` per decidere. Senza canale di verifica, le corrispondenze incerte restano silenziose.

## 📊 Trasparenza {#reports}

Ogni truffa bloccata da ScamLens:

- compare nei [riepiloghi di Trasparenza](./transparency.md#recaps) del tuo server (“X truffe bloccate da ScamLens”);
- viene conteggiata nel contatore di account segnalati dell'[HoneyPot](./honeypot.md);
- rafforza la protezione di **tutti i server** che usano RaidProtect.

### I nostri rapporti mensili {#recaps}

Ogni mese pubblichiamo il **[Meteo delle minacce](/blog/tags/threats)**, un bilancio pubblico dell'attività di ScamLens. Cifre cumulative dal [lancio il 14 febbraio 2026](/blog/scamlens-early-activation), sull'insieme dei server protetti da RaidProtect:

| Rapporto | Immagini di truffa eliminate | Account hackerati identificati |
|---|---|---|
| [Bilancio a 1 mese](/blog/scamlens-1-month-recap) *(marzo 2026)* | 260.000 | 15.000 |
| [Aprile 2026](/blog/threat-weather-april-2026) | 1.400.000 | 40.000 |
| [Maggio 2026](/blog/threat-weather-may-2026) | 2.300.000 | 80.000 |
| [Giugno 2026](/blog/threat-weather-june-2026) | 4.000.000 | 160.000 |

## Domande frequenti {#faq}

### Bisogna configurare ScamLens?

No. ScamLens è attivato per impostazione predefinita non appena RaidProtect arriva sul tuo server. Sei protetto immediatamente, senza configurare nulla.

### ScamLens blocca qualcosa oltre alle immagini?

No, ScamLens si occupa solo delle immagini. Per impostazione predefinita, blocca le immagini di truffa note. I server Premium possono anche aggiungervi le proprie immagini grazie al catalogo di immagini. Gli altri tipi di spam sono gestiti dall'[Anti-spam](./anti-spam.mdx) e dall'[HoneyPot](./honeypot.md).

### Quale sanzione viene applicata a un'immagine di truffa?

Per impostazione predefinita, ScamLens applica la sanzione e la durata del tuo [HoneyPot](./honeypot.md#sanction), o un Timeout di un giorno se l'HoneyPot non è attivato. Puoi scegliere un'altra sanzione e un'altra durata in /settings, scheda Protezione, modulo Automod, schermata Filtro immagini.

### Come disattivare ScamLens?

In /settings, scheda Protezione, clicca su “Configurare” accanto ad Automod, poi accanto a Immagini, e usa l'interruttore in alto a destra della schermata Filtro immagini.
