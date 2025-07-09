---
title: Utilitaires
---

Des fonctionnalités supplémentaires pour simplifier la gestion de votre serveur. 🔧

En plus des fonctionnalités principales comme le système de captcha et la protection anti-raid, RaidProtect propose plusieurs outils secondaires qui peuvent rendre la gestion de votre serveur encore plus fluide.

:::info
Les commandes utilitaires sont [utilisables par préfixe](../guides/prefix.md).
:::

## 👤 Informations Utilisateur {#userinfo}

La commande `/userinfo` vous permet d’obtenir des informations détaillées sur un utilisateur.

Utilisez la commande : ```/userinfo [@utilisateur]```

Remplacez `[@utilisateur]` par la mention ou l’identifiant souhaité.

### 📋 Informations affichées

- **Date de création du compte** Discord
- **Photo de profil** de l’utilisateur
- **Bannière de profil**
- **Badges de profil**
  - Le badge Nitro s’affiche uniquement si l’utilisateur possède **une photo de profil animée ou une bannière**.
  - Le badge de Booster n’est pas affiché.


### 🎭 Informations sur un membre du serveur

Si la cible est un membre du serveur, les infos supplémentaires incluent :

- **Date d’arrivée sur le serveur**
- **Pseudo sur le serveur**
- **Nombre de rôles** et **liste des 6 premiers rôles**
- **Catégorie de permissions** (déterminée automatiquement selon les rôles) :

<Tabs>
  <TabItem value="animator" label="🟦 Animateur">

La catégorie **Animateur** est affiché si le membre possède **au moins une** des permissions suivantes :

- `MANAGE_EXPRESSIONS`
- `CREATE_GUILD_EXPRESSIONS`
- `MANAGE_EVENTS`

  </TabItem>
  <TabItem value="moderator" label="🟨 Modérateur">

La catégorie **Modérateur** est affiché si le membre possède **au moins une** des permissions suivantes :

- `KICK_MEMBERS`
- `BAN_MEMBERS`
- `MODERATE_MEMBERS`
- `MANAGE_MESSAGES`
- `MUTE_MEMBERS`
- `DEAFEN_MEMBERS`
- `MOVE_MEMBERS`
- `MANAGE_THREADS`

  </TabItem>
  <TabItem value="manager" label="🟧 Responsable">

La catégorie **Responsable** est affiché si le membre possède **au moins une** des permissions suivantes :

- `MANAGE_GUILD`
- `MANAGE_ROLES`
- `MANAGE_CHANNELS`
- `VIEW_AUDIT_LOG`
- `MANAGE_WEBHOOKS`
- `MANAGE_SERVER_EXPRESSIONS`

  </TabItem>
  <TabItem value="admin" label="🟥 Administrateur">

La catégorie **Administrateur** est affiché dans **deux cas possibles** :

1️⃣ Possède la permission :
- `ADMINISTRATOR`

2️⃣ Possède les **trois permissions suivantes en même temps** :
- `MANAGE_GUILD`
- `MANAGE_ROLES`
- `MANAGE_CHANNELS`

  </TabItem>
  <TabItem value="owner" label="🟩 Propriétaire" default>

**Condition** : Le membre est le **propriétaire du serveur**.

  </TabItem>
</Tabs>

- **Flags de membre**

Certains indicateurs spéciaux (flags) peuvent être affichés pour un membre :

| Flag                                      | Emoji / Nom affiché          | Explication                                                       |
| ----------------------------------------- | ---------------------------- | ----------------------------------------------------------------- |
| `DID_REJOIN`                             | MemberDidRejoin              | L'utilisateur a quitté et rejoint à nouveau le serveur.           |
| `IS_GUEST`                               | MemberIsGuest                | Membre invité (invitation temporaire ou accès invité).            |
| `COMPLETED_ONBOARDING`                   | OnboardingCompleted          | A terminé le processus d'accueil (onboarding) du serveur.         |
| `STARTED_ONBOARDING`                     | OnboardingStarted            | A commencé le processus d'accueil mais ne l'a pas encore fini.     |
| `COMPLETED_SERVER_GUIDE`                 | ServerGuideCompleted         | A terminé le guide du serveur si activé.                           |
| `STARTED_SERVER_GUIDE`                   | ServerGuideStarted           | A commencé le guide du serveur mais ne l'a pas fini.                |
| `AUTOMOD_QUARANTINED_NAME`               | MemberQuarantined            | Nom d'utilisateur mis en quarantaine par l'automodération.         |
| `AUTOMOD_QUARANTINED_GUILD_TAG`          | MemberQuarantined            | Tag ou pseudo sur le serveur mis en quarantaine par l'automod.     |
| `BYPASSES_VERIFICATION`                  | BypassVerification           | L'utilisateur peut passer outre la vérification du serveur.        |
| `SPAMMER`                                | UnusualAccountActivity       | Compte marqué comme spammeur ou activité inhabituelle détectée.    |