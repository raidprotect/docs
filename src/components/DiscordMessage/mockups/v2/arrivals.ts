import type { Component } from "../../types";
import type { ModalData } from "../../Modal";
import {
  t, i, btn, text, sep, row, container, setting, heading, select, channelSelect, roleSelect,
  toggle, reset, edit, custom, screen, COLORS,
} from "./kit";
import { docBlock, selectField, textField, checkField } from "./general";
import { CH, RO, type Ctx, type Part } from "./state";

export const WELCOME_CARD = "/img/mockup/welcome-card.jpg";

/* Onglet Arrivées : Auto RaidMode, Captcha, Âge minimum, Rôles automatiques,
 * Message de bienvenue. */

export function arrivalsPart({ s, flip }: Ctx): Part {
  const antiraid = (): Component[] =>
    screen({
      tab: "arrivals",
      icon: "iconAntiraid",
      title: t("antiraid.title", "Configuration de l'auto RaidMode"),
      desc: t(
        "antiraid.desc",
        "Le RaidMode se déclenche quand trop de membres arrivent en même temps. Réglez le seuil, la durée pendant laquelle il reste actif, et ce que RaidProtect fait des arrivants pendant la vague."
      ),
      accessory: toggle(s.antiraid, "toggle:antiraid"),
      crumbs: [{ label: "Auto RaidMode" }],
      docs: "features/raid-mode#config",
      body: [
        heading("iconMembers", t("antiraid.maxjoin", "Nombre de membres / 10 secondes")),
        select(t("antiraid.maxjoinPh", "Sélectionner un nombre de membre"), [
          { label: t("antiraid.m10", "10 membres"), emoji: "iconMembers", default: s.antiraid },
          { label: t("antiraid.m15", "15 membres"), emoji: "iconMembers" },
          { label: t("antiraid.m20", "20 membres"), emoji: "iconMembers" },
          { label: t("antiraid.m30", "30 membres"), emoji: "iconMembers" },
          custom(),
        ]),
        heading("iconTime", t("antiraid.duration", "Durée avant désactivation")),
        select(t("durationPh", "Sélectionner une durée"), [
          { label: "1 minute", emoji: "iconTime" },
          { label: "2 minutes", emoji: "iconTime" },
          { label: "5 minutes", emoji: "iconTime", default: true },
          { label: "10 minutes", emoji: "iconTime" },
          custom(),
        ]),
        sep(),
        heading("iconAntiraid", t("antiraid.action", "Action pendant le raid"), t("antiraid.inviteLockDesc", "Discord ferme les invitations du serveur, personne de nouveau n'entre")),
        select(t("actionPh", "Choisir l'action"), [
          { label: t("antiraid.inviteLock", "Bloquer les invitations"), description: t("antiraid.inviteLockDesc", "Discord ferme les invitations du serveur, personne de nouveau n'entre"), emoji: "iconInvite", default: true },
          { label: t("antiraid.kick", "Expulser les arrivants"), description: t("antiraid.kickDesc", "Chaque arrivant est expulsé avec une invitation pour revenir après"), emoji: "iconPremium" },
          { label: t("antiraid.captcha", "Envoyer au captcha"), description: t("antiraid.captchaDesc", "Les arrivants passent le captcha au lieu d'être expulsés"), emoji: "iconCaptcha" },
          { label: t("antiraid.frozen", "Captcha gelé pendant le raid"), description: t("antiraid.frozenDesc", "Les arrivants attendent derrière le captcha et le passent après la vague (mode panneau)"), emoji: "iconLocking" },
        ]),
        sep(),
        setting("iconDmlock", t("antiraid.closedm", "Fermer les MP"), s.antiraidCloseDm ? t("enabled", "Activé") : t("disabled", "Désactivé"), toggle(s.antiraidCloseDm, "toggle:antiraidCloseDm")),
      ],
    });

  const captcha = (): Component[] =>
    screen({
      tab: "arrivals",
      icon: "iconCaptcha",
      title: t("captcha.title", "Configuration du Captcha"),
      desc: t("captcha.desc", "Configurez le Captcha pour empêcher les selfbots d'accéder à votre serveur Discord et bloquer les raids."),
      crumbs: [{ label: "Captcha" }],
      docs: "features/captcha",
      body: [
        heading("iconView", t("captcha.display", "Mode d'affichage")),
        select(t("captcha.displayPh", "Sélectionner un mode"), [
          { label: t("disabled", "Désactivé"), description: t("captcha.offDesc", "Aucune vérification, les arrivants accèdent directement au serveur"), emoji: "iconDisable" },
          { label: t("captcha.classic", "Challenge (Classique)"), description: t("captcha.classicDesc", "Une image est postée dans le salon à l'arrivée, le code se tape en message"), emoji: "iconView" },
          { label: t("captcha.panel", "Panneau (Interactif)"), description: t("captcha.panelDesc", "Un panneau permanent : le captcha s'ouvre en privé et le code se saisit dans une fenêtre"), emoji: "iconDisplay", default: true },
          { label: t("delete", "Supprimer"), description: t("captcha.deleteDesc", "Efface la configuration et le rôle de vérification, après confirmation"), emoji: "iconTrash" },
        ]),
        heading("iconAntiraid", t("captcha.trigger", "Déclenchement")),
        select(t("captcha.triggerPh", "Choisir le déclenchement"), [
          { label: t("captcha.auto", "Automatique"), description: t("captcha.autoDesc", "Seulement pendant un raid ou un niveau DISCON élevé"), emoji: "iconAntiraid" },
          { label: t("captcha.smart", "Intelligent"), description: t("captcha.smartDesc", "Idem, plus les comptes qui semblent suspects"), emoji: "iconSearch" },
          { label: t("captcha.always", "En permanence"), description: t("captcha.alwaysDesc", "À chaque arrivée, sans condition"), emoji: "iconCaptcha", default: true },
        ]),
        sep(),
        setting("iconChannelText", t("captcha.channel", "Salon de vérification"), CH("vérification"), btn({ label: t("edit", "Modifier"), emoji: "iconChannelTextWhite" })),
        text(`### ${i("iconRole")} ${t("captcha.role", "Rôle des membres en vérification")}\n> ${RO("Non vérifié")}`),
        sep(),
        setting(
          "iconFail",
          t("captcha.difficulty", "Difficulté"),
          [
            t("captcha.diffTries", "Essais : **2 essais**"),
            t("captcha.diffFail", "Essais épuisés : **Expulser**"),
            t("captcha.diffSolve", "Temps de résolution : **3 minutes**"),
          ],
          edit("modal:captchaDifficulty")
        ),
        setting(
          "iconActivity",
          t("captcha.testMode", "Mode test"),
          s.captchaTestMode
            ? t("captcha.testModeOn", "Activé : votre équipe déjà vérifiée peut relancer le captcha")
            : t("disabled", "Désactivé"),
          toggle(s.captchaTestMode, "toggle:captchaTestMode"),
          t(
            "captcha.testModeHint",
            "Un membre de l'équipe (Gérer le serveur) déjà vérifié clique sur « Vérifier » pour refaire le captcha autant qu'il veut. Le résultat part dans les logs du captcha, rien n'est appliqué."
          )
        ),
        heading("iconTime", t("captcha.timeout", "Délai avant expulsion")),
        select(t("captcha.timeoutPh", "Selectionner un délai"), [
          { label: t("disabled", "Désactivé"), emoji: "iconDisable" },
          { label: "5 minutes", emoji: "iconTime", default: true },
          { label: "15 minutes", emoji: "iconTime" },
          { label: "30 minutes", emoji: "iconTime" },
          custom(),
        ]),
        sep(),
        setting("iconLogs", "Logs", CH("raidprotect-logs"), btn({ label: t("edit", "Modifier"), emoji: "iconLogsWhite", id: "logs" })),
      ],
    });

  const minage = (): Component[] =>
    screen({
      tab: "arrivals",
      icon: "iconCalendar",
      title: t("minage.title", "Configuration de l'âge minimum du compte"),
      desc:
        t(
          "minage.desc",
          "Un compte plus récent que l'ancienneté choisie ne passe pas la porte. L'action décide de son sort : expulsé, mis au jail jusqu'à la bonne date, ou retenu à l'entrée."
        ) +
        "\n-# " +
        t("minage.hint", "L'expulsion, le jail et la retenue suivent vos changements d'ancienneté ; les bannissements déjà posés gardent leur date de levée."),
      accessory: reset(),
      crumbs: [{ label: t("minage.name", "Âge minimum du compte") }],
      docs: "features/onboarding#minage",
      body: [
        heading("iconCalendar", t("minage.name", "Âge minimum du compte")),
        select(t("minage.ph", "Selectionner une ancienneté de compte"), [
          { label: "2 heures", emoji: "iconCalendar" },
          { label: "12 heures", emoji: "iconCalendar" },
          { label: t("oneDay", "1 jour"), emoji: "iconCalendar", default: true },
          { label: "2 jours", emoji: "iconCalendar" },
          custom(),
        ]),
        sep(),
        heading("iconSanctions", "Action", t("minage.kickDesc", "Expulsé à chaque tentative tant que son compte est trop récent")),
        select(t("actionPh", "Choisir l'action"), [
          { label: t("minage.kick", "Expulser"), description: t("minage.kickDesc", "Expulsé à chaque tentative tant que son compte est trop récent"), emoji: "iconSanctionsKICK", default: true },
          { label: t("minage.jail", "Jail jusqu'à l'âge requis"), description: t("minage.jailDesc", "Entre sans rien voir du serveur, et en sort dès qu'il a l'âge requis"), emoji: "iconSanctionsJAILTemp" },
          { label: t("minage.hold", "Retenir à l'entrée"), description: t("minage.holdDesc", "Bloqué sur un captcha qu'il ne peut résoudre qu'une fois l'âge atteint"), emoji: "iconCaptcha" },
        ]),
      ],
    });

  const autorole = (): Component[] =>
    screen({
      tab: "arrivals",
      icon: "iconRole",
      title: t("autorole.name", "Rôles automatiques"),
      desc: t(
        "autorole.desc",
        "Rôles donnés à chaque nouveau membre dès son arrivée, ou après le captcha s'il est actif. Évitez les rôles qui portent des permissions."
      ),
      crumbs: [{ label: t("autorole.name", "Rôles automatiques") }],
      docs: "features/onboarding",
      body: [
        setting("iconRole", t("autorole.name", "Rôles automatiques"), null, reset(), `${i("iconPremium")} ${t("autorole.limit", "3 rôles maximum, 10 avec le premium.")}`),
        roleSelect(t("autorole.ph", "Sélectionner un ou des rôles"), [RO("Membre")]),
      ],
    });

  const welcome = (): Component[] =>
    screen({
      tab: "arrivals",
      icon: "iconChannelText",
      title: t("welcome.name", "Message de bienvenue"),
      desc: s.welcome
        ? t("welcome.desc", "Configurez ci-dessous le contenu du message envoyé à l'arrivée d'un nouveau membre.")
        : t("welcome.descOff", "Aucun message de bienvenue ne sera envoyé à l'arrivée d'un nouveau membre."),
      accessory: toggle(s.welcome, "toggle:welcome"),
      crumbs: [{ label: t("welcome.name", "Message de bienvenue") }],
      docs: "features/onboarding#welcome-message",
      body: [
        heading("iconChannelText", t("welcome.channel", "Salon de bienvenue")),
        channelSelect(t("welcome.channelPh", "Sélectionner un salon de bienvenue"), [CH("bienvenue")]),
        sep(),
        heading("iconCustom", t("welcome.content", "Contenu du message")),
        row(
          btn({ label: t("welcome.text", "Texte"), style: 1, emoji: "iconCustomWhite", id: "modal:welcomeText", disabled: !s.welcome }),
          btn({ label: t("welcome.color", "Couleur"), emoji: "iconPremium", disabled: !s.welcome })
        ),
        sep(),
        setting(
          "iconUser",
          t("welcome.mention", "Mentionner le membre"),
          s.welcomeMention ? t("enabled", "Activé") : t("disabled", "Désactivé"),
          toggle(s.welcomeMention, "toggle:welcomeMention", !s.welcome)
        ),
        ...(s.welcome
          ? [
              sep(),
              text(`**${i("iconChannelText")} ${t("welcome.buttons", "Gérer les boutons")}**\n-# ${t("welcome.buttonsHint", "Choisissez un bouton à modifier, ou ajoutez-en un")}`),
              select(t("welcome.buttons", "Gérer les boutons"), [
                { label: t("welcome.buttons", "Gérer les boutons"), description: t("welcome.buttonsHint", "Choisissez un bouton à modifier, ou ajoutez-en un"), emoji: "iconSettings", default: true },
                { label: t("welcome.rulesBtn", "Lire le règlement"), description: "→ #règlement", emoji: "iconChannelTextWhite" },
                { label: t("welcome.addBtn", "Ajouter un bouton"), emoji: "iconPlus" },
              ]),
            ]
          : []),
      ],
      below: s.welcome
        ? [
            ...(s.welcomeMention ? [text("@Arthur")] : []),
            container(
              [
                text(t("welcome.preview", "Bienvenue @Arthur sur **Les Explorateurs** ! 🎉")),
                { type: 12, items: [{ media: { url: WELCOME_CARD } }] },
              ],
              COLORS.default
            ),
            row(btn({ label: t("welcome.rulesBtn", "Lire le règlement"), style: 5, url: "https://discord.com" })),
          ]
        : [],
    });

  const modals: Record<string, () => ModalData> = {
    captchaDifficulty: () => ({
      title: t("captcha.diffTitle", "Difficulté du captcha"),
      items: [
        docBlock(
          t(
            "captcha.diffDoc",
            "Le nombre d'essais pour recopier le code et ce qui arrive une fois épuisés, le délai avant l'expulsion depuis l'arrivée, et le temps laissé pour taper le code après le clic."
          )
        ),
        selectField(t("captcha.tries", "Essais"), [
          { label: "1 essai", emoji: "iconFail" },
          { label: "2 essais", emoji: "iconFail", default: true },
          { label: "3 essais", emoji: "iconFail" },
        ]),
        selectField(t("captcha.failAction", "Action quand les essais sont épuisés"), [
          { label: t("captcha.failKick", "Essais épuisés : Expulser"), emoji: "iconSanctionsKICK", default: true },
          { label: t("captcha.failJail", "Essais épuisés : Jail"), emoji: "iconSanctionsJAIL" },
        ]),
        selectField(t("captcha.solve", "Temps de résolution"), [
          { label: t("disabled", "Désactivé") },
          { label: "2 minutes" },
          { label: "3 minutes", default: true },
          { label: "5 minutes" },
        ]),
      ],
    }),
    welcomeText: () => ({
      title: t("welcome.text", "Texte"),
      items: [
        docBlock(
          t(
            "welcome.textDoc",
            "Variables disponibles : `{user.mention}` · `{user.name}` · `{user.displayname}` · `{user.id}` · `{server.name}` · `{server.member_count}` · `{server.id}`\nLaissez le champ vide pour revenir au message par défaut."
          )
        ),
        textField(t("welcome.text", "Texte"), "Bienvenue {user.mention} sur **{server.name}** ! 🎉", undefined, undefined, true),
      ],
    }),
    minageJail: () => ({
      title: t("minage.name", "Âge minimum du compte"),
      items: [
        docBlock(
          t(
            "minage.jailDoc",
            "**Aucun rôle de jail n'est configuré**\n\nLe jail retient un compte trop récent dans le serveur sans lui montrer quoi que ce soit, puis le libère tout seul à la bonne date. Il lui faut un rôle de jail pour fonctionner.\n\nConfigurez-le, ou repliez-vous sur le bannissement : la porte se referme jusqu'à la même date, mais le compte sort du serveur."
          )
        ),
        selectField(t("whatToDo", "Que faire ?"), [
          { label: t("minage.configureJail", "Configurer le jail"), emoji: "iconSanctionsJAIL", default: true },
          { label: t("minage.ban", "Bannir jusqu'à l'âge requis"), emoji: "iconSanctionsBAN" },
        ]),
      ],
    }),
    captchaDelete: () => ({
      title: t("captcha.deleteTitle", "Supprimer le captcha"),
      items: [
        checkField(t("confirmation", "Confirmation"), [
          { label: t("captcha.deleteYes", "Oui, supprimer le captcha") },
          { label: t("captcha.deleteNo", "Non, ne rien supprimer") },
        ]),
      ],
    }),
  };

  return {
    screens: { antiraid, captcha, minage, autorole, welcome },
    modals,
    actions: {
      "toggle:antiraid": flip("antiraid"),
      "toggle:antiraidCloseDm": flip("antiraidCloseDm"),
      "toggle:welcome": flip("welcome"),
      "toggle:welcomeMention": flip("welcomeMention"),
      "toggle:captchaTestMode": flip("captchaTestMode"),
    },
  };
}
