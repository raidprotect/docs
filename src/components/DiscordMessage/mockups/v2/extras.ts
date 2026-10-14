import type { Component } from "../../types";
import type { ModalData } from "../../Modal";
import { t, i, btn, text, sep, row, container, select, screen, COLORS, type IconName } from "./kit";
import type { Part } from "./state";

/* Personnaliser (pied de /settings, premium) et assistant /setup. */

const SETUP_MODULES: Array<[string, string, IconName]> = [
  ["Commandes par messages", "Activer les commandes par préfixe.", "iconPrefix"],
  ["Auto RaidMode", "Nombre maximal de membres qui rejoignent en 10 secondes.", "iconAntiraid"],
  ["Captcha", "Bloquer les raids avec le Captcha.", "iconCaptcha"],
  ["Âge minimum du compte", "Ancienneté minimale d'un compte pour qu'il puisse rejoindre.", "iconCalendar"],
  ["Anti-spam", "Protection contre les spam, les liens, les mentions et les selfbots.", "iconAntispam"],
  ["Signalements", "Permettre aux membres de signaler les activités suspectes à votre équipe de modération.", "iconReport"],
  ["Rôle de Tag", "Donner un rôle aux membres qui ont votre tag", "iconTag"],
  ["Fermeture des MP", "Fermer les MP pour prévenir des arnaques", "iconDmlock"],
  ["HoneyPot", "Salon piège qui sanctionne les membres qui écrivent dedans", "iconHoneypot"],
];

export function extrasPart(): Part {
  const customize = (): Component[] => [
    container([text(`${i("iconPremium")} ${t("customize.notice", "La personnalisation du bot nécessite le premium.")}`)], COLORS.warn),
    container([
      { type: 9, components: [{ type: 10, content: `## RaidProtect\n-# ${t("customize.bio1", "Des fonctionnalités de modération et de sécurité avancées,")}\n-# ${t("customize.bio2", "propulsées par RaidProtect.")}` }], accessory: { type: 11, media: { url: "/img/logo.png" } } },
      row(
        btn({ label: t("customize.edit", "Éditer"), style: 1, emoji: "iconCreateWhite", id: "modal:customize" }),
        btn({ label: t("customize.reset", "Remettre à Zéro"), style: 4, emoji: "iconResetWhite" })
      ),
      sep(),
      text(`## ${t("customize.displayName", "Nom affiché")}`),
      select("", [
        { label: "gg sans (Default)", emoji: "fontGGsans", default: true },
        { label: "Tempo", emoji: "fontTempo" },
        { label: "Sakura", emoji: "fontSakura" },
        { label: "Jellybean", emoji: "fontJellybean" },
        { label: "Modern", emoji: "fontModern" },
        { label: "Medieval", emoji: "fontMedieval" },
        { label: "8Bit", emoji: "font8Bit" },
        { label: "Vampyre", emoji: "fontVampyre" },
      ]),
      select("", [
        { label: "Solid (Default)", emoji: "effectSolid", default: true },
        { label: "Neon", emoji: "effectNeon" },
        { label: "Toon", emoji: "effectToon" },
        { label: "Pop", emoji: "effectPop" },
      ]),
      select(t("customize.colors", "Couleurs"), [
        { label: t("customize.default", "Défaut"), emoji: "iconReset" },
        { label: t("color.red", "Rouge"), emoji: "colorRedProtect" },
        { label: t("color.orange", "Orange"), emoji: "colorOrangeProtect" },
        { label: t("color.yellow", "Jaune"), emoji: "colorYellowProtect" },
        { label: t("color.green", "Vert"), emoji: "colorGreenProtect" },
        { label: t("color.blue", "Bleu"), emoji: "colorBlueProtect" },
        { label: "Indigo", emoji: "colorIndigoProtect" },
        { label: t("color.purple", "Violet"), emoji: "colorPurpleProtect" },
      ]),
      row(
        btn({ label: t("customize.save", "Sauvegarder"), style: 3, emoji: "iconSucceed", disabled: true }),
        btn({ label: t("customize.reset", "Remettre à Zéro"), style: 4, emoji: "iconResetWhite", disabled: true })
      ),
      sep(),
      row(btn({ label: t("back", "Retour"), emoji: "iconPreviousWhite", id: "home:general" })),
    ]),
  ];

  const setupHead = (desc: string) => ({ title: "Installation", icon: "iconSetup" as IconName, desc, docs: "setup" });

  const setup = (): Component[] =>
    screen({
      ...setupHead(
        t(
          "setup.desc",
          "Activez ou réinstallez les fonctionnalités souhaitées en utilisant le menu de sélection. Le bot vous enverra ensuite un récapitulatif des fonctionnalités activées et des modifications qu'il apportera au serveur. (Utilisez `/settings` pour désactiver une fonctionnalité)"
        )
      ),
      command: true,
      body: [
        select(
          t("setup.ph", "Choisir les modules à installer"),
          SETUP_MODULES.map(([label, description, emoji]) => ({ label: t(`setup.m.${label}`, label), description: t(`setup.d.${label}`, description), emoji }))
        ),
      ],
      rows: [row(btn({ label: t("enable", "Activer"), style: 3, emoji: "iconEnableWhite", id: "setupRecap" }))],
    });

  const setupRecap = (): Component[] =>
    screen({
      ...setupHead(t("setup.recapDesc", "Récapitulatif des fonctionnalités et configurations choisies :")),
      command: true,
      body: [
        text(
          [
            `**${i("iconLogs")} Logs**\n> \`#raidprotect-logs\``,
            `**${i("iconAntiraid")} Auto RaidMode**\n> ${t("antiraid.value", "10 membres / 10 secondes")}`,
            `**${i("iconCaptcha")} Captcha**\n> \`#vérification\`\n> \`@Non vérifié\``,
            `**${i("iconAntispam")} Anti-spam**\n> ${t("enabled", "Activé")}`,
            `**${i("iconReport")} ${t("reports.name", "Signalements")}**\n> \`#raidprotect-logs\`\n> @here`,
            `**${i("iconHoneypot")} HoneyPot**\n> \`#${t("setup.honeypotChannel", "Salon HoneyPot")}\``,
          ].join("\n\n")
        ),
      ],
      rows: [
        row(
          btn({ label: t("back", "Retour"), emoji: "iconPreviousWhite", id: "setup" }),
          btn({ label: t("enable", "Activer"), style: 3, emoji: "iconEnableWhite", id: "setupDone" })
        ),
      ],
    });

  const setupDone = (): Component[] =>
    screen({
      ...setupHead(
        `${i("iconSuccess")} **${t("setup.doneTitle", "RaidProtect a été initialisé !")}**\n${t(
          "setup.doneDesc",
          "La commande `/settings` vous permet de gérer vos paramètres après l'installation. Vous pouvez aussi cliquer sur le bouton `Configuration` pour exécuter la commande."
        )}`
      ),
      command: true,
      rows: [row(btn({ label: "Configuration", style: 1, emoji: "iconSettingsWhite", id: "home:general" }))],
    });

  const modals: Record<string, () => ModalData> = {
    customize: () => ({
      title: t("customize.modalTitle", "Personnaliser le bot"),
      items: [
        { type: "field", label: t("customize.nick", "Pseudo du bot"), input: { kind: "text", value: "RaidProtect" } },
        { type: "field", label: t("customize.avatar", "Avatar du bot"), input: { kind: "file", max: 1 } },
        { type: "field", label: t("customize.banner", "Bannière du bot"), input: { kind: "file", max: 1 } },
      ],
    }),
  };

  return { screens: { customize, setup, setupRecap, setupDone }, modals };
}

