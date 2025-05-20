---
title: Processus d’accueil et RaidProtect
---

🚀 Que faire si le salon de vérification n’est pas visible par défaut pour les membres ?

Si vous voyez une alerte indiquant que le salon #vérification n’est pas visible pour les nouveaux membres, suivez ces étapes pour corriger le problème :

1️⃣ Vérifier les permissions du salon #vérification
	1.	Accédez aux paramètres du salon #vérification :
	•	Faites un clic droit sur le salon et sélectionnez Modifier le salon.
	2.	Allez dans l’onglet “Permissions” :
	•	Assurez-vous que le rôle @everyone n’a pas accès au salon.
	•	Vérifiez que seul le rôle @Non Vérifié a la permission de voir et d’envoyer des messages dans ce salon.

2️⃣ Déplacer le salon dans une catégorie visible par défaut
	1.	Ouvrez les paramètres du serveur (⚙️ Serveur > Paramètres > Accueil).
	2.	Repérez la section Salons par défaut.
	3.	Ajoutez ou déplacez #vérification dans une catégorie cochée comme accessible aux nouveaux membres.
	4.	Sauvegardez les modifications et vérifiez que le salon apparaît bien dans la liste des salons par défaut.

3️⃣ Actualiser la configuration dans RaidProtect
	1.	Retournez dans les paramètres de RaidProtect via /settings > Captcha.
	2.	Cliquez sur le bouton “Actualiser” pour vérifier si le problème est résolu.
	3.	Si le salon est maintenant visible, le Captcha fonctionnera normalement.

4️⃣ Tester avec un compte non vérifié

Pour être sûr que tout est bien configuré :
	1.	Déconnectez-vous et rejoignez le serveur avec un autre compte Discord.
	2.	Vérifiez que vous voyez le salon #vérification dès votre arrivée.
	3.	Testez le Captcha en saisissant le code de vérification envoyé par RaidProtect.
	4.	Une fois validé, vous devriez obtenir l’accès aux autres salons.

🛠️ Problèmes courants et solutions

Problème	Solution
🔴 Le salon #vérification reste invisible	Vérifiez qu’il est bien dans une catégorie cochée dans l’accueil de Discord.
🚫 Le rôle @Non Vérifié ne peut pas écrire dans #vérification	Assurez-vous qu’il a la permission d’envoyer des messages.
❌ Le Captcha ne fonctionne pas après les modifications	Cliquez sur “Actualiser” dans les paramètres de RaidProtect.

✅ En appliquant ces solutions, votre Captcha sera fonctionnel et empêchera efficacement les bots et raids d’accéder à votre serveur ! 🚀
