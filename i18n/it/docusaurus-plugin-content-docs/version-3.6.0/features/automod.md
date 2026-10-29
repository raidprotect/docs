---
title: Automod
description: "L'Automod di RaidProtect rimuove automaticamente le immagini di truffa, i file con estensioni rifiutate e i riferimenti ad altri server Discord: inviti, messaggi inoltrati, link di canali o di eventi e tag di server."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

L'**Automod** di RaidProtect raggruppa i filtri che rimuovono automaticamente un contenuto indesiderato non appena viene pubblicato. Ogni filtro ha la propria sanzione per l'autore del messaggio.

Per aprirlo:

1. Esegui il [comando `/settings`](../setup.md#settings).
2. Apri la scheda “**Protezione**”.
3. Clicca su “**Configurare**” accanto a “**Automod**”.

<Settings start="automod" />

## 🖼️ Immagini di truffa {#images}

Il filtro **Immagini** elimina le immagini di truffa note (truffe crypto, finti giveaway, false promozioni di casinò) e sanziona il loro autore. È **attivo per impostazione predefinita**, senza configurare nulla.

Tutti i dettagli, la sanzione e il catalogo di immagini sono nella pagina [Immagini di truffa](./scam-images.md).

## 🔗 Altri server {#servers}

Il filtro **Altri server** controlla ciò che rimanda ad altri server Discord: gli **inviti**, i **messaggi inoltrati**, i **link di canali** e i **link di eventi**, oltre ai **tag di server** mostrati dai tuoi membri. Blocca la pubblicità selvaggia e i server concorrenti o malevoli, senza toccare i tuoi partner.

### Come funziona? {#servers-working}

Tre comportamenti si regolano separatamente, ciascuno su una di queste modalità:

- “**Disattivato**”: nulla viene filtrato.
- “**Blocklist**”: i server dell'elenco vengono rifiutati, gli altri passano.
- “**Allowlist**”: passano solo i server dell'elenco, tutti gli altri vengono rifiutati.

| Comportamento | Cosa succede se viene rifiutato |
|---|---|
| **Invito** | Il messaggio contenente l'invito viene eliminato. Contano anche i link `ptb.` e `canary.`, e gli inviti nascosti in un embed, in un componente o in un messaggio inoltrato vengono letti, come i messaggi modificati in seguito. |
| **Messaggio inoltrato o link di un canale** | Il messaggio inoltrato da quel server, o contenente un link a uno dei suoi canali o dei suoi eventi, viene eliminato. |
| **Tag del server visualizzato** | Il membro viene messo in **quarantena** con il [ruolo Jail](./sanctions.mdx#jail). Viene revocata non appena toglie il tag. |

Il tuo server passa sempre, con qualsiasi dei suoi inviti, e il tuo team (permessi **Gestire il server** o **Gestire i messaggi**) non viene mai preso di mira.

### Configurazione {#servers-config}

1. Nell'Automod, clicca su “**Configurare**” accanto a “**Altri server**”.
2. Attiva il filtro con l'interruttore in alto a destra, poi scegli una modalità per ogni comportamento.

<Settings start="serverRefs" />

#### Inviti di amicizia e di gruppo <span className="badge-premium">Premium</span> {#servers-private}

Un invito di amicizia o di gruppo privato non porta a nessun server. Con la modalità “**Invito**” (non appena non è su “**Disattivato**”), il selettore “**Inviti di amicizia e di gruppo**” ne regola la sorte a parte:

- “**Segui la lista**” *(predefinito)*: passano con la blocklist e vengono eliminati con l'allowlist.
- “**Sempre consentiti**”: accettati, qualunque sia la lista.
- “**Sempre rimossi**”: eliminati, qualunque sia la lista.

Senza Premium, seguono sempre la lista.

:::tip
Se lasci la schermata di un filtro che hai modificato senza averlo attivato, RaidProtect ti propone di attivarlo prima di uscire (“**Lascia disattivato**” è preselezionato).
:::

### Sanzione {#servers-sanction}

Ogni messaggio rifiutato viene eliminato. In “**Sanzione dei messaggi eliminati**”, scegli inoltre una sanzione per il suo autore, oppure “**Solo messaggio eliminato**”. Per un timeout, un mute, un jail o un bando, scegli anche la sua durata.

La sanzione si applica al massimo una volta al minuto e per membro: un membro che incolla più inviti di fila viene sanzionato una sola volta.

### Elenchi di server {#servers-lists}

1. Clicca su “**Aggiungi un server**”.
2. Incolla un invito del server ancora valido (ad es. `discord.gg/esempio`): ne vengono letti il nome e l'ID. Un ID da solo non è più accettato.
3. Scegli l'elenco: blocklist o allowlist.

Un server già presente cambia semplicemente elenco. “**Rimuovi**” toglie uno o più server dagli elenchi.

**Limiti:** 25 server in totale nei due elenchi.

:::tip
Per autorizzare solo gli inviti dei tuoi partner, imposta “**Invito**” su “**Allowlist**” e aggiungi i tuoi partner all'allowlist. Un'allowlist vuota rifiuta tutti gli inviti verso altri server.
:::

### Log {#servers-logs}

Ogni sanzione e ogni quarantena vengono registrate nei tuoi [log di moderazione](./moderation.mdx#logs), con il server e il canale interessati. Viene registrato anche un messaggio eliminato senza sanzione (“**Solo messaggio eliminato**”). Le sanzioni compaiono nella [cronologia delle sanzioni](./sanctions.mdx), con i motivi “Invito a un server rifiutato”, “Invito di amicizia o di gruppo rifiutato” (Premium), “Messaggio inoltrato o link di un canale di un server rifiutato” o “Tag di un server rifiutato”.

## 📎 Estensioni dei file {#files}

Il filtro **Estensioni dei file** elimina i file la cui estensione è rifiutata. Puoi bloccare alcune estensioni (blocklist) o autorizzarne solo alcune (allowlist), su tutto il server o canale per canale. Il tuo team (permessi **Gestire il server** o **Gestire i messaggi**) non viene mai preso di mira.

Contano anche i file di un messaggio inoltrato, e un thread segue le regole del suo canale.

### Configurazione {#files-config}

1. Nell'Automod, clicca su “**Configurare**” accanto a “**Estensioni dei file**”.
2. Attiva il filtro con l'interruttore in alto a destra.
3. Sotto “**Tutto il server**”, scegli una modalità: “**Disattivato**”, “**Blocklist**” o “**Allowlist**”.
4. Spunta dei **gruppi** (Eseguibili, Immagini, Video, Audio, Archivi, Documenti) e/o inserisci altre estensioni separate da virgole, per esempio `exe, msi`. Il punto è facoltativo. Una regola accetta al massimo 50 estensioni libere, oltre ai gruppi.

<Settings start="files" />

:::warning
Un'allowlist senza estensioni non accetta alcun file: ogni file inviato viene eliminato.
:::

### Regole per canale e per categoria {#files-channels}

Clicca su “**Aggiungi un canale**” per dare una regola a un canale, a un thread o a una categoria. Una regola di categoria vale per tutti i suoi canali.

Le regole si sommano, tranne per un'estensione nominata da più regole: decide la regola **più precisa** (canale, poi categoria, poi server). Per esempio, un `.exe` autorizzato in un canale passa nonostante la blocklist del server. Un'estensione che nessuna regola nomina passa attraverso tutte le regole.

| | Gratuito | <span className="badge-premium">Premium</span> |
|---|---|---|
| **Regole per canale** | 1 (il primo canale configurato) | 20 canali o categorie |
| **Regola di categoria** | No | Sì |

Senza Premium, le regole in eccesso vengono conservate ma restano inattive.

### File corrotti {#files-disguised}

Un file rinominato per spacciarsi per un'immagine o un video (un `.exe` rinominato in `.png`) viene riconosciuto: Discord non sa leggerlo come una vera immagine. Un'allowlist lo rifiuta sempre. L'opzione “**Rifiuta sempre i file corrotti**” lo elimina anche in tutti i canali, anche senza allowlist.

### Sanzione {#files-sanction}

Ogni file rifiutato viene eliminato insieme al suo messaggio. In “**Sanzione dei messaggi eliminati**”, scegli inoltre una sanzione per il suo autore, oppure “**Solo messaggio eliminato**”. La sanzione si applica al massimo una volta al minuto e per membro.

Ogni messaggio eliminato viene registrato nei tuoi [log di moderazione](./moderation.mdx#logs), con il file, il canale e l'estensione in questione. Le sanzioni compaiono nella [cronologia delle sanzioni](./sanctions.mdx) con il motivo “File con un'estensione rifiutata”.

## Domande frequenti {#faq}

### I miei partner possono ancora condividere il loro invito?

Sì. Aggiungili all'allowlist del filtro Altri server, oppure lasciali fuori dalla blocklist.

### Cosa succede quando un membro toglie il tag rifiutato?

La sua quarantena viene revocata automaticamente.

### I moderatori vengono filtrati?

No. I membri che hanno il permesso Gestire il server o Gestire i messaggi non vengono mai presi di mira dal filtro Altri server.
