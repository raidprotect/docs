---
title: Dysfonctionnements
description: "Un problème avec RaidProtect ? Retrouvez ici les solutions aux dysfonctionnements les plus courants pour remettre votre bot d'aplomb."
---

Un problème avec RaidProtect ? La solution se trouve sûrement ici.

Parfois, il arrive que tout ne fonctionne pas comme prévu. Voici les **problèmes les plus courants** que vous pouvez rencontrer, et comment les résoudre. 🤗 

Si cette page n'apporte pas de réponse à un problème que vous rencontrez, [**n'hésitez pas à contacter notre support**](https://raidprotect.bot/discord) qui se fera un plaisir de vous aider !

## Le bot affiche une erreur lorsque je fais une commande {#commands}

Si la commande ne s'exécute pas avec succès, **RaidProtect peut afficher une erreur** à la place du résultat attendu. Dans la plupart des cas, une indication est donnée dans le message, mais il se peut qu'il s'agisse d'un message plus générique. Voici comment résoudre ce problème dans la plupart des cas. 🧐 

- **Faîtes ce qui est indiqué.** Certaines erreurs expliquent clairement le problème. Si le bot vous demande de faire quelque chose, faîtes le.

- **Vérifiez les paramètres de la commande.** Il se peut que la commande soit tout simplement mal écrite, regardez dans l'aide comment l'utiliser. N'oubliez pas que les crochets ([]) ne sont pas à inclure.

- **Vérifiez les permissions du bot.** Ce dernier doit avoir la permission **Administrateur** et être au niveau des administrateurs dans l'ordre des rôles.

- **Retentez la commande.** Parfois, le problème se résout sans que l'on sache pourquoi.

Si vous continuez à avoir une erreur malgré avoir suivi ces conseils, [contactez notre support](https://raidprotect.bot/discord) pour que nous puissions vous aider. 🤝 

## Le salon de logs du bot ne s'est pas créé tout seul {#logs}

Pour vous avertir des actions qu'il prend, RaidProtect a besoin d'un salon de logs. Ce salon est créé automatiquement lorsque le bot rejoint pour la première fois, mais parfois, aucun salon n'est créé. Voici comment remédier à ce problème. ⚙️ 

- **Assurez-vous que le bot est bien Administrateur.** Pour le bon fonctionnement du bot, il est nécessaire de lui donner la permission Administrateur. Si cela n'est pas fait, rendez-vous dans les paramètres des rôles et accordez cette permission au rôle RaidProtect. Il ne vous reste plus qu'à initialiser manuellement le bot pour que tout fonctionne (voir juste après) !

- **Vérifiez que le bot est correctement initialisé.** Cela est normalement fait automatiquement, mais vous pouvez forcer cette initialisation avec la [commande `/setup`](../setup.md#install). Le salon de logs devrait se créer automatiquement.

- **Définissez manuellement un salon.** Si rien ne fonctionne, pas de panique, vous pouvez choisir vous-même le salon des logs ! Faites la [commande `/settings`](../setup.md#settings), ouvrez l'onglet “**Modération**” puis cliquez sur “**Configurer**” à côté de “**Logs**”. Vous pouvez y choisir un salon général, et si vous le souhaitez un salon dédié à la modération et un autre au captcha : laissés vides, ces deux-là retombent sur le salon général.

## Un utilisateur a spammé, mais le bot ne l'a pas sanctionné {#anti-spam}

L'[anti-spam](../features/anti-spam.mdx) est l'une des fonctionnalités principales de RaidProtect, et cela peut être embêtant s’il ne fonctionne pas. Mais rassurez-vous, la plupart du temps, il ne s'agit de rien de grave. 😇 

- **Si l'anti-spam demande d'arrêter le spam**, mais ne sanctionne pas, cela est sûrement dû à un manque de permissions. Rappelez-vous, le bot doit avoir la permission Administrateur et doit être au niveau de celui des administrateurs dans l'ordre des rôles.

- **Vérifiez la configuration de l'anti-spam.** C'est bête comme tout, mais certains oublient qu'ils ont ignoré un salon. Un salon dont le nom contient « spam » est aussi toujours ignoré.

- **Lancez une simulation.** Dans l'écran de l'anti-spam, le bouton “**Simuler**” vous dit, pour un membre, un salon et un type de spam donnés, si l'anti-spam se déclencherait et sinon pourquoi (module coupé, salon ou rôle ignoré, membre au-dessus du bot…). La [commande `/feedback`](../features/utilities.mdx#feedback) propose aussi ce diagnostic quand vous signalez un bug d'anti-spam.

- **Vérifiez les permissions du spammeur.** Les membres du staff (Administrateur, Gérer le serveur, Gérer les messages) sont ignorés tant que vous n'avez ignoré aucun rôle ni membre vous-même. Si vous testez l'anti-spam sur votre propre serveur, il risque donc de ne pas vous détecter.

- **Le spam est-il assez long ?** L'anti-spam réagit à un volume de messages, pas à un message isolé. Ne soyez pas trop pressés, et vérifiez que la sanction du [déclencheur](../features/anti-spam.mdx#triggers) concerné n'est pas désactivée.

Si malgré cela un spam n'est toujours pas détecté, [contactez-nous sur notre serveur de support](https://raidprotect.bot/discord) en joignant une **capture d'écran du problème**.

## Les utilisateurs ont accès au serveur sans passer le captcha {#captcha}

Ce problème est relativement courant, mais dépend de **la configuration de votre serveur**. Voyons comment y remédier. 🏥 

- **Avez-vous un rôle automatique ?** Si vous avez configuré un bot (autre que RaidProtect) pour donner un rôle aux nouveaux arrivants sur votre serveur, cela peut interférer avec le captcha. Remplacez-le par les [rôles automatiques de RaidProtect](../features/onboarding.md#autorole), donnés une fois le captcha réussi.

- **Avez-vous activé le captcha ?** Il s'agit d'une fonctionnalité optionnelle : activez-la dans l'onglet “**Arrivées**” de [`/settings`](../setup.md#settings). Consultez la [page dédiée au captcha](../features/captcha.md#config) pour en savoir plus.

- **Quel est son déclenchement ?** En “**Automatique**”, le captcha ne s'applique que pendant un raid ou un niveau [DISCON](../features/discon.md) élevé (Shield Update, en expérimentation) : le reste du temps, les arrivants entrent directement. Choisissez “**En permanence**” pour que chaque arrivant passe le captcha.

- **Un rôle ou un salon le contourne-t-il ?** L'écran du captcha signale les salons encore visibles par le rôle de vérification et les rôles qui donnent accès au serveur sans le passer, avec un bouton pour corriger.

## La commande /snipe ne trouve aucun message {#snipe}

La [commande `/snipe`](../features/moderation.mdx#snipe) lit les messages que RaidProtect garde une heure en mémoire. Sans anti-spam ni signalements actifs, cette mise en cache est coupée par défaut : activez “**Mise en cache des messages**” dans l'onglet “**Utilitaires**” de [`/settings`](../setup.md#settings). Seuls les messages supprimés après son activation peuvent être retrouvés.

## Les utilisateurs peuvent toujours parler lorsque je verrouille un salon {#lock}

La commande de verrouillage parait magique, mais elle a aussi ses faiblesses. Comme [noté dans cette documentation](../features/channel-lock.md#lock), la commande **agit uniquement sur le rôle @everyone**. Cela signifie que si dans le salon que vous souhaitez verrouiller un rôle a explicitement la permission de parler, il pourra le faire malgré tout. Comme une image vaut mille mots, voici ce que cela donne concrètement. 🔍 

![Capture d'écran configuration verrouillage de salon](../assets/lock-channel-messages-raidprotect.png)