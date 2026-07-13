import { useState } from "react";
import type { ReactNode } from "react";
import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";
import concept from "./concept.module.css";

/* Mockups des sous-menus de /settings, répliqués depuis le rendu réel du
 * bot (embeds + boutons/selects, emojis officiels via le CDN Discord). */

const E = (id: string) => `![](https://cdn.discordapp.com/emojis/${id}.webp)`;

const ICON = {
  channel: "1398382555929247976",
  channelWhite: "1398382557841719367",
  role: "1398382673491398756",
  roleWhite: "1398382675630489752",
  members: "1398382630688391198",
  membersWhite: "1398382632735211671",
  time: "1398382711457976494",
  timeWhite: "1398382713743999027",
  dmlock: "1398382582584049815",
  premium: "1483848678656573460",
  report: "1398382664276246550",
  reportWhite: "1398382666675650600",
  language: "1398382614800367637",
  prefix: "1398382644328403004",
  spam: "1398382694915903589",
  bots: "1398382535968297010",
  mentions: "1398382635016785930",
  links: "1398382619539931267",
  command: "1407131770901631067",
  duplicate: "1398382591060475917",
  scamlens: "1516713500519694366",
  sanctions: "1398382679694770237",
  disableWhite: "1398382578397872240",
  previousWhite: "1398382652087599249",
  sanctionsWhite: "1398382681439604747",
  supportWhite: "1398382703111438428",
  docsWhite: "1398382589227565148",
  resetWhite: "1398382670735605844",
  customWhite: "1398382569195700415",
  createWhite: "1398382565060251792",
  suggestWhite: "1398382698850160812",
  toggleEnable: "1398382720840630412",
  toggleDisable: "1398382718827364475",
} as const;

const t = {
  back: () => translate({ id: "mockup.settingsMenus.back", message: "Retour" }),
  support: () => translate({ id: "mockup.settingsMenus.support", message: "Serveur Support" }),
  docs: () => "Documentation",
  none: () => translate({ id: "mockup.settingsMenus.none", message: "Aucun" }),
  enabled: () => translate({ id: "mockup.settingsMenus.enabled", message: "Activé" }),
  disabled: () => translate({ id: "mockup.settingsMenus.disabled", message: "Désactivé" }),
  disable: () => translate({ id: "mockup.settingsMenus.disable", message: "Désactiver" }),
  enable: () => translate({ id: "mockup.settingsMenus.enable", message: "Activer" }),
  reset: () => translate({ id: "mockup.settingsMenus.reset", message: "Réinitialiser" }),
  footer: (path: string) => `RaidProtect v3.4.0 • Configuration > ${path}`,
};

function btn(
  label: string,
  style: 1 | 2 | 3 | 4 | 5,
  emojiId?: string,
  disabled?: boolean,
  id?: string
): { type: 2; style: 1 | 2 | 3 | 4 | 5; label: string; custom_id: string; emoji?: { name: string; id: string }; disabled?: boolean } {
  return {
    type: 2,
    style,
    label,
    custom_id: id ?? `sm-${label.toLowerCase().replace(/[^a-z]+/g, "-")}`,
    ...(emojiId ? { emoji: { name: "emoji", id: emojiId } } : {}),
    ...(disabled ? { disabled: true } : {}),
  };
}

/* backId "__back__" rend le Retour actif (retour à l'écran racine) dans les
 * sous-écrans ; sans backId, le Retour est inerte (écran racine d'une page
 * de doc, il n'y a pas de menu parent à afficher). */
function navRow(backId?: string, withDocs = true) {
  return {
    type: 1 as const,
    components: [
      btn(t.back(), 2, ICON.previousWhite, false, backId),
      btn(t.support(), 2, ICON.supportWhite),
      ...(withDocs ? [btn(t.docs(), 2, ICON.docsWhite)] : []),
    ],
  };
}

/* Sous-écran de configuration au format commun du bot. */
function subScreen(opts: {
  title: string;
  desc: string;
  fields: DiscordMessageData["embeds"][number]["fields"];
  footerPath: string;
  selects?: Array<ReturnType<typeof sel>>;
  buttons?: Array<ReturnType<typeof btn>>;
  backOnly?: boolean;
}): DiscordMessageData {
  return {
    embeds: [
      {
        color: 0xd35f5f,
        title: opts.title,
        description: opts.desc,
        fields: opts.fields,
        footer: { text: t.footer(opts.footerPath) },
      },
    ],
    components: [
      ...(opts.selects ?? []),
      ...(opts.buttons && opts.buttons.length ? [{ type: 1 as const, components: opts.buttons }] : []),
      opts.backOnly
        ? { type: 1 as const, components: [btn(t.back(), 2, ICON.previousWhite, false, "__back__")] }
        : navRow("__back__"),
    ],
  };
}

function sel(placeholder: string, options: Array<{ label: string; emoji?: { name: string; id?: string } }>) {
  return {
    type: 1 as const,
    components: [
      {
        type: 3 as const,
        custom_id: `sm-sel-${placeholder.toLowerCase().replace(/[^a-z]+/g, "-").slice(0, 20)}`,
        placeholder,
        options: options.map((o, i) => ({ label: o.label, value: String(i), emoji: o.emoji })),
      },
    ],
  };
}

function wrap(
  message: DiscordMessageData,
  pages?: Record<string, DiscordMessageData>,
  actions?: Record<string, () => void>
): ReactNode {
  return (
    <div className={`${concept.animWrap} ${concept.dmWrap} ${concept.cfg}`}>
      <div className={concept.tight}>
        <DiscordMessage message={message} pages={pages} actions={actions} />
      </div>
    </div>
  );
}

const CHANNEL_OPTIONS = [
  { label: "# général" },
  { label: "# blabla" },
  { label: "# raidprotect-logs" },
];

/* === Anti-spam === */
export function AntiSpamSettingsMockup() {
  const [on, setOn] = useState(true);
  const [publicOn, setPublicOn] = useState(true);
  return wrap({
    embeds: [
      {
        color: 0xd35f5f,
        title: translate({ id: "mockup.settingsMenus.antispam.title", message: "Configuration de l'Anti-spam" }),
        description: [
          translate({
            id: "mockup.settingsMenus.antispam.desc",
            message:
              "Configurez le système anti-spam pour protéger votre serveur Discord contre les actions malveillantes d'utilisateurs.",
          }),
          "",
          translate({
            id: "mockup.settingsMenus.antispam.high",
            message: "🔴 **Haut :** Sanctionne tous les spams, y compris dans les salons ignorés.",
          }),
          translate({
            id: "mockup.settingsMenus.antispam.medium",
            message: "🟡 **Moyen :** Sanctionne les spams, mais respecte les salons ignorés.",
          }),
          translate({
            id: "mockup.settingsMenus.antispam.low",
            message: "🟢 **Faible :** Cible uniquement les spams de liens, mentions et selfbots.",
          }),
        ].join("\n"),
        fields: [
          {
            name: translate({ id: "mockup.settingsMenus.antispam.level", message: "Niveau de protection" }),
            value: on ? `🟢 ${t.enabled()}` : `🔴 ${t.disabled()}`,
          },
          {
            name: `${E(ICON.channel)} ${translate({ id: "mockup.settingsMenus.antispam.channels", message: "Salon(s) ignoré(s)" })}`,
            value: t.none(),
            inline: true,
          },
          {
            name: `${E(ICON.role)} ${translate({ id: "mockup.settingsMenus.antispam.roles", message: "Rôle(s) ignoré(s)" })}`,
            value: t.none(),
            inline: true,
          },
          {
            name: `${E(ICON.members)} ${translate({ id: "mockup.settingsMenus.antispam.members", message: "Membre(s) ignoré(s)" })}`,
            value: t.none(),
            inline: true,
          },
        ],
        footer: { text: t.footer("Anti-spam") },
      },
    ],
    components: [
      {
        type: 1,
        components: [
          { ...btn(t.enabled(), 3, undefined, on, "antispam-on"), emoji: { name: "🟢" } },
          btn(t.disabled(), 4, ICON.disableWhite, !on, "antispam-off"),
        ],
      },
      sel(translate({ id: "mockup.settingsMenus.antispam.selChannels", message: "Salon(s) à ignorer (écrire pour chercher)" }), CHANNEL_OPTIONS),
      sel(translate({ id: "mockup.settingsMenus.antispam.selRoles", message: "Rôle(s) à ignorer (écrire pour chercher)" }), [
        { label: "@Modérateur" },
        { label: "@Membre" },
      ]),
      sel(translate({ id: "mockup.settingsMenus.antispam.selMembers", message: "Membre(s) à ignorer (écrire pour chercher)" }), [
        { label: "@Arthur" },
        { label: "@Zallom" },
      ]),
      {
        type: 1,
        components: [
          btn(t.back(), 2, ICON.previousWhite),
          btn("Sanctions", 2, ICON.sanctionsWhite, false, "antispam-sanctions"),
          btn(t.support(), 2, ICON.supportWhite),
        ],
      },
    ],
  }, { "antispam-sanctions": antispamSanctionsMessage("__back__", publicOn) }, {
    "antispam-on": () => setOn(true),
    "antispam-off": () => setOn(false),
    "antispam-public": () => setPublicOn(!publicOn),
  });
}

/* === Anti-spam > Sanctions === */
function antispamSanctionsMessage(backId?: string, publicOn = true): DiscordMessageData {
  const sanctionLine = (emojiId: string, labelId: string, label: string, value: string) =>
    `${E(emojiId)} **${translate({ id: labelId, message: label })}** : \`${value}\``;

  return {
    embeds: [
      {
        color: 0xd35f5f,
        title: translate({ id: "mockup.settingsMenus.antispam.title", message: "Configuration de l'Anti-spam" }),
        description: translate({
          id: "mockup.settingsMenus.antispamSanctions.desc",
          message:
            "Vous pouvez personnaliser les sanctions appliquées selon le type de spam détecté. Cela permet une réponse adaptée à la gravité de l'infraction.",
        }),
        fields: [
          {
            name: translate({ id: "mockup.settingsMenus.antispamSanctions.list", message: "Sanctions :" }),
            value: [
              sanctionLine(ICON.spam, "mockup.settingsMenus.trigger.spam", "Spam", translate({ id: "mockup.sanction.warn", message: "Avertissement" })),
              sanctionLine(ICON.bots, "mockup.settingsMenus.trigger.selfbot", "Spam avec selfbot", "Softban"),
              sanctionLine(ICON.mentions, "mockup.settingsMenus.trigger.mentions", "Spam de mentions", "Softban"),
              sanctionLine(ICON.links, "mockup.settingsMenus.trigger.links", "Spam de liens", translate({ id: "mockup.sanction.ban", message: "Bannissement" })),
              sanctionLine(ICON.command, "mockup.settingsMenus.trigger.commands", "Spam de commandes externes", translate({ id: "mockup.sanction.ban", message: "Bannissement" })),
              sanctionLine(ICON.links, "mockup.settingsMenus.trigger.files", "Spam de fichiers", t.disabled()),
              sanctionLine(ICON.duplicate, "mockup.settingsMenus.trigger.duplicates", "Spam de duplicatas OU Spam importants", "Softban"),
              sanctionLine(ICON.scamlens, "mockup.settingsMenus.trigger.scam", "Images d'arnaques (Crypto Scam)", "Timeout"),
            ].join("\n"),
          },
          {
            name: `${E(ICON.spam)} ${translate({ id: "mockup.settingsMenus.antispamSanctions.multichannel", message: "Spam multisalon" })}`,
            value: [
              `\`${translate({ id: "mockup.sanction.jail", message: "Emprisonnement" })}\``,
              translate({
                id: "mockup.settingsMenus.antispamSanctions.multichannelDesc",
                message: "Remplace la sanction du déclencheur quand le spam touche plusieurs salons, uniquement si elle est plus sévère.",
              }),
            ].join("\n"),
          },
          {
            name: `${E(ICON.time)} ${translate({ id: "mockup.settingsMenus.antispamSanctions.duration", message: "Durée des sanctions" })}`,
            value: `> ${translate({ id: "mockup.settingsMenus.oneHour", message: "1 heure" })}`,
          },
          {
            name: `${E(ICON.channel)} ${translate({ id: "mockup.settingsMenus.antispamSanctions.publicMessage", message: "Message public de sanction" })}`,
            value: [
              `> ${publicOn ? t.enabled() : t.disabled()}`,
              translate({
                id: "mockup.settingsMenus.antispamSanctions.publicMessageDesc",
                message: "Envoie un message dans le salon pour signaler la sanction (ex. 'membre a été mute'). Désactivable en premium.",
              }),
            ].join("\n"),
          },
        ],
        footer: { text: t.footer("Anti-spam > Sanctions") },
      },
    ],
    components: [
      sel(translate({ id: "mockup.settingsMenus.antispamSanctions.selTrigger", message: "Selectionner un déclencheur" }), [
        { label: translate({ id: "mockup.settingsMenus.trigger.spam", message: "Spam" }), emoji: { name: "e", id: ICON.spam } },
        { label: translate({ id: "mockup.settingsMenus.trigger.selfbot", message: "Spam avec selfbot" }), emoji: { name: "e", id: ICON.bots } },
        { label: translate({ id: "mockup.settingsMenus.trigger.mentions", message: "Spam de mentions" }), emoji: { name: "e", id: ICON.mentions } },
        { label: translate({ id: "mockup.settingsMenus.trigger.links", message: "Spam de liens" }), emoji: { name: "e", id: ICON.links } },
        { label: translate({ id: "mockup.settingsMenus.trigger.scam", message: "Images d'arnaques (Crypto Scam)" }), emoji: { name: "e", id: ICON.scamlens } },
      ]),
      sel(translate({ id: "mockup.settingsMenus.antispamSanctions.selSanction", message: "Sélectionner une sanction" }), [
        { label: translate({ id: "mockup.sanction.warn", message: "Avertissement" }), emoji: { name: "/img/icons/SanctionsWARN.svg" } },
        { label: "Timeout", emoji: { name: "/img/icons/SanctionsTIMEOUT.svg" } },
        { label: translate({ id: "mockup.sanction.jail", message: "Emprisonnement" }), emoji: { name: "/img/icons/SanctionsJAIL.svg" } },
        { label: "Softban", emoji: { name: "/img/icons/SanctionsSOFTBAN.svg" } },
        { label: translate({ id: "mockup.sanction.ban", message: "Bannissement" }), emoji: { name: "/img/icons/SanctionsBAN.svg" } },
      ]),
      sel(translate({ id: "mockup.settingsMenus.oneHour", message: "1 heure" }), [
        { label: "30 minutes" },
        { label: translate({ id: "mockup.settingsMenus.oneHour", message: "1 heure" }) },
        { label: "6 heures" },
        { label: "1 jour" },
      ]),
      {
        type: 1,
        components: [
          btn(t.reset(), 4, ICON.resetWhite, true),
          btn(translate({ id: "mockup.settingsMenus.antispamSanctions.customDuration", message: "Durée personnalisée" }), 1, ICON.customWhite),
          btn(translate({ id: "mockup.settingsMenus.antispamSanctions.publicMessage", message: "Message public de sanction" }), publicOn ? 4 : 3, ICON.channelWhite, false, "antispam-public"),
        ],
      },
      navRow(backId),
    ],
  };
}

export function AntiSpamSanctionsSettingsMockup() {
  const [publicOn, setPublicOn] = useState(true);
  return wrap(antispamSanctionsMessage(undefined, publicOn), undefined, {
    "antispam-public": () => setPublicOn(!publicOn),
  });
}

/* === Signalements === */
export function ReportsSettingsMockup() {
  const [grouped, setGrouped] = useState(true);
  const reportsTitle = translate({ id: "mockup.settingsMenus.reports.title", message: "Configuration du système de signalement" });
  const pages: Record<string, DiscordMessageData> = {
    "reports-channel": subScreen({
      title: reportsTitle,
      desc: translate({
        id: "mockup.settingsMenus.reports.channelDesc",
        message: "Configurez le **salon** dans lequel les **notifications des signalements** seront envoyées.",
      }),
      fields: [
        {
          name: translate({ id: "mockup.settingsMenus.reports.channel", message: "Réception des signalements" }),
          value: "> #signalements",
        },
      ],
      footerPath: "Signalements > Salon",
      selects: [
        sel(translate({ id: "mockup.settingsMenus.reports.channelSel", message: "Salon de réception (écrire pour chercher)" }), CHANNEL_OPTIONS),
      ],
      buttons: [
        btn(translate({ id: "mockup.settingsMenus.createForMe", message: "En créer un pour moi" }), 1, ICON.createWhite),
        btn(t.reset(), 4, ICON.resetWhite),
      ],
    }),
    "reports-role": subScreen({
      title: reportsTitle,
      desc: translate({
        id: "mockup.settingsMenus.reports.roleDesc",
        message: "Configurez le **rôle qui sera notifié** lorsqu'un **nouveau signalement** sera reçu. De manière générale, un rôle modérateur.",
      }),
      fields: [
        {
          name: translate({ id: "mockup.settingsMenus.reports.role", message: "Rôle de notification" }),
          value: "> @here",
        },
      ],
      footerPath: "Signalements > Rôle",
      selects: [
        sel(translate({ id: "mockup.settingsMenus.reports.roleSel", message: "Rôle de notification (écrire pour chercher)" }), [
          { label: "@here" },
          { label: "@Modérateur" },
          { label: "@Staff" },
        ]),
      ],
      buttons: [
        btn(translate({ id: "mockup.settingsMenus.createForMe", message: "En créer un pour moi" }), 1, ICON.createWhite),
        btn("@everyone", 2),
        btn("@here", 2, undefined, true),
        btn(t.reset(), 4, ICON.resetWhite, true),
      ],
    }),
    "reports-notify": subScreen({
      title: translate({ id: "mockup.settingsMenus.reports.notify", message: "Notification du signaleur" }),
      desc: translate({
        id: "mockup.settingsMenus.reports.notifyDesc",
        message: "Choisissez **ce que reçoivent en DM** les membres ayant signalé, une fois leur signalement traité.",
      }),
      fields: [
        {
          name: translate({ id: "mockup.settingsMenus.reports.notify", message: "Notification du signaleur" }),
          value: `> ${translate({ id: "mockup.settingsMenus.reports.notifyValue", message: "Traitement seul" })}`,
        },
      ],
      footerPath: "Signalements > Notification du signaleur",
      selects: [
        sel(translate({ id: "mockup.settingsMenus.reports.notifySel", message: "Niveau de notification" }), [
          { label: t.disabled() },
          { label: translate({ id: "mockup.settingsMenus.reports.notifyValue", message: "Traitement seul" }) },
          { label: translate({ id: "mockup.settingsMenus.reports.notifyOutcome", message: "Avec l'issue" }) },
          { label: translate({ id: "mockup.settingsMenus.reports.notifyModerator", message: "Avec le modérateur" }) },
        ]),
      ],
    }),
    "reports-trusted": subScreen({
      title: translate({ id: "mockup.settingsMenus.reports.trusted", message: "Rôle de confiance" }),
      desc: translate({
        id: "mockup.settingsMenus.reports.trustedDesc",
        message:
          "Les membres avec ce **rôle de confiance** peuvent appliquer un **timeout préventif de 24h** lorsqu'ils signalent, en attendant qu'un modérateur traite le signalement.",
      }),
      fields: [
        {
          name: translate({ id: "mockup.settingsMenus.reports.trusted", message: "Rôle de confiance" }),
          value: `> @${translate({ id: "mockup.settingsMenus.reports.trustedValue", message: "Membre de confiance" })}`,
        },
      ],
      footerPath: "Signalements > Rôle de confiance",
      selects: [
        sel(translate({ id: "mockup.settingsMenus.reports.trustedSel", message: "Rôle de confiance (écrire pour chercher)" }), [
          { label: `@${translate({ id: "mockup.settingsMenus.reports.trustedValue", message: "Membre de confiance" })}` },
          { label: "@Modérateur" },
        ]),
      ],
      buttons: [
        btn(translate({ id: "mockup.settingsMenus.createForMe", message: "En créer un pour moi" }), 1, ICON.createWhite),
        btn(t.reset(), 4, ICON.resetWhite),
      ],
    }),
    "reports-badreporters": subScreen({
      title: translate({ id: "mockup.settingsMenus.reports.badTitle", message: "Réputation des signaleurs" }),
      desc: translate({
        id: "mockup.settingsMenus.reports.badDesc",
        message:
          "Agir sur les membres dont les signalements sont régulièrement refusés. Définissez le seuil de signalements refusés, la fenêtre de calcul, et ce qui se passe une fois le seuil atteint.",
      }),
      fields: [
        {
          name: translate({ id: "mockup.settingsMenus.reports.badThreshold", message: "Seuil" }),
          value: "> 3",
          inline: true,
        },
        {
          name: translate({ id: "mockup.settingsMenus.reports.badWindow", message: "Fenêtre" }),
          value: `> ${translate({ id: "mockup.settingsMenus.reports.badWindowValue", message: "30 jours" })}`,
          inline: true,
        },
        {
          name: translate({ id: "mockup.settingsMenus.reports.badMode", message: "Action" }),
          value: `> ${translate({ id: "mockup.settingsMenus.reports.badModeNotify", message: "Notifier les modérateurs" })}`,
          inline: true,
        },
      ],
      footerPath: "Signalements > Faux signaleurs",
      selects: [
        sel(translate({ id: "mockup.settingsMenus.reports.badThresholdSel", message: "Signalements refusés avant action" }), [
          { label: translate({ id: "mockup.settingsMenus.reports.badOpt3", message: "3 signalements" }) },
          { label: translate({ id: "mockup.settingsMenus.reports.badOpt5", message: "5 signalements" }) },
          { label: translate({ id: "mockup.settingsMenus.reports.badOpt10", message: "10 signalements" }) },
        ]),
        sel(translate({ id: "mockup.settingsMenus.reports.badWindowSel", message: "Durée de calcul" }), [
          { label: translate({ id: "mockup.settingsMenus.reports.badWin7", message: "7 jours" }) },
          { label: translate({ id: "mockup.settingsMenus.reports.badWindowValue", message: "30 jours" }) },
          { label: translate({ id: "mockup.settingsMenus.reports.badWin90", message: "90 jours" }) },
        ]),
        sel(translate({ id: "mockup.settingsMenus.reports.badModeSel", message: "Que faire au seuil atteint" }), [
          { label: translate({ id: "mockup.settingsMenus.reports.badModeNotify", message: "Notifier les modérateurs" }) },
          { label: translate({ id: "mockup.settingsMenus.reports.badModeBlock", message: "Bloquer automatiquement" }) },
          { label: translate({ id: "mockup.settingsMenus.reports.badModeSanction", message: "Sanctionner automatiquement" }) },
          { label: translate({ id: "mockup.settingsMenus.reports.badModeBoth", message: "Bloquer et sanctionner" }) },
        ]),
      ],
      backOnly: true,
    }),
  };

  return wrap({
    embeds: [
      {
        color: 0xd35f5f,
        title: translate({ id: "mockup.settingsMenus.reports.title", message: "Configuration du système de signalement" }),
        description: translate({
          id: "mockup.settingsMenus.reports.desc",
          message:
            "Activez le système de signalement pour permettre aux membres de notifier facilement votre équipe des situations problématiques.",
        }),
        fields: [
          {
            name: `${E(ICON.channel)} ${translate({ id: "mockup.settingsMenus.reports.channel", message: "Réception des signalements" })}`,
            value: "> #signalements",
            inline: true,
          },
          {
            name: `${E(ICON.role)} ${translate({ id: "mockup.settingsMenus.reports.role", message: "Rôle de notification" })}`,
            value: "> @here",
            inline: true,
          },
          {
            name: `${E(ICON.report)} ${translate({ id: "mockup.settingsMenus.reports.group", message: "Regroupement" })}`,
            value: grouped
              ? translate({
                  id: "mockup.settingsMenus.reports.groupValue",
                  message: "Les signalements visant le même membre sont regroupés dans une seule alerte.",
                })
              : translate({
                  id: "mockup.settingsMenus.reports.groupSeparate",
                  message: "Chaque signalement crée sa propre alerte séparée.",
                }),
          },
          {
            name: `${E(ICON.report)} ${translate({ id: "mockup.settingsMenus.reports.notify", message: "Notification du signaleur" })}`,
            value: `> ${translate({ id: "mockup.settingsMenus.reports.notifyValue", message: "Traitement seul" })}`,
            inline: true,
          },
          {
            name: `${E(ICON.premium)} ${translate({ id: "mockup.settingsMenus.reports.trusted", message: "Rôle de confiance" })}`,
            value: `> @${translate({ id: "mockup.settingsMenus.reports.trustedValue", message: "Membre de confiance" })}`,
            inline: true,
          },
        ],
        footer: { text: t.footer("Signalements") },
      },
    ],
    components: [
      {
        type: 1,
        components: [
          btn(translate({ id: "mockup.settingsMenus.reports.btnChannel", message: "Salon" }), 2, ICON.channelWhite, false, "reports-channel"),
          btn(translate({ id: "mockup.settingsMenus.reports.btnRole", message: "Rôle" }), 2, ICON.roleWhite, false, "reports-role"),
          btn(translate({ id: "mockup.settingsMenus.reports.group", message: "Regroupement" }), 1, grouped ? ICON.toggleEnable : ICON.toggleDisable, false, "reports-group"),
          btn(translate({ id: "mockup.settingsMenus.reports.notify", message: "Notification du signaleur" }), 2, ICON.reportWhite, false, "reports-notify"),
        ],
      },
      {
        type: 1,
        components: [
          btn(translate({ id: "mockup.settingsMenus.reports.trusted", message: "Rôle de confiance" }), 1, ICON.premium, false, "reports-trusted"),
          btn(translate({ id: "mockup.settingsMenus.reports.badReporters", message: "Faux signaleurs" }), 2, ICON.reportWhite, false, "reports-badreporters"),
          btn(t.disable(), 4, ICON.disableWhite),
        ],
      },
      navRow(),
    ],
  }, pages, { "reports-group": () => setGrouped(!grouped) });
}

/* === Auto RaidMode === */
export function RaidModeSettingsMockup() {
  const [closeDm, setCloseDm] = useState(false);
  const [kickMode, setKickMode] = useState(false);
  const pages: Record<string, DiscordMessageData> = {
    "raidmode-threshold": subScreen({
      title: translate({ id: "mockup.settingsMenus.raidmode.title", message: "Configuration de l'auto RaidMode" }),
      desc: translate({
        id: "mockup.settingsMenus.raidmode.thresholdDesc",
        message:
          "Définit le nombre maximal de nouveaux membres autorisés à rejoindre le serveur sur une période de 10 secondes avant l'activation du RaidMode.",
      }),
      fields: [
        {
          name: `${E(ICON.members)} ${translate({ id: "mockup.settingsMenus.raidmode.threshold", message: "Nombre de membres / 10 secondes" })}`,
          value: `> ${translate({ id: "mockup.settingsMenus.raidmode.thresholdValue", message: "10 membres" })}`,
        },
      ],
      footerPath: "Auto RaidMode > Nombre de membre",
      selects: [
        sel(translate({ id: "mockup.settingsMenus.raidmode.thresholdValue", message: "10 membres" }), [
          { label: translate({ id: "mockup.settingsMenus.raidmode.opt5", message: "5 membres" }) },
          { label: translate({ id: "mockup.settingsMenus.raidmode.thresholdValue", message: "10 membres" }) },
          { label: translate({ id: "mockup.settingsMenus.raidmode.opt20", message: "20 membres" }) },
          { label: translate({ id: "mockup.settingsMenus.raidmode.opt30", message: "30 membres" }) },
        ]),
      ],
      buttons: [
        btn(translate({ id: "mockup.settingsMenus.customValue", message: "Valeur personnalisée" }), 1, ICON.customWhite),
        btn(t.reset(), 4, ICON.resetWhite, true),
      ],
    }),
    "raidmode-duration": subScreen({
      title: translate({ id: "mockup.settingsMenus.raidmode.title", message: "Configuration de l'auto RaidMode" }),
      desc: translate({
        id: "mockup.settingsMenus.raidmode.durationDesc",
        message: "Définit la durée pendant laquelle le RaidMode reste actif avant de se désactiver automatiquement.",
      }),
      fields: [
        {
          name: `${E(ICON.time)} ${translate({ id: "mockup.settingsMenus.raidmode.duration", message: "Durée avant désactivation" })}`,
          value: `> ${translate({ id: "mockup.settingsMenus.raidmode.durationValue", message: "5 minutes" })}`,
        },
      ],
      footerPath: "Auto RaidMode > Durée",
      selects: [
        sel(translate({ id: "mockup.settingsMenus.raidmode.durationValue", message: "5 minutes" }), [
          { label: translate({ id: "mockup.settingsMenus.raidmode.optDur1", message: "1 minute" }) },
          { label: translate({ id: "mockup.settingsMenus.raidmode.durationValue", message: "5 minutes" }) },
          { label: translate({ id: "mockup.settingsMenus.raidmode.optDur10", message: "10 minutes" }) },
          { label: translate({ id: "mockup.settingsMenus.raidmode.optDur30", message: "30 minutes" }) },
          { label: translate({ id: "mockup.settingsMenus.oneHour", message: "1 heure" }) },
        ]),
      ],
      buttons: [
        btn(translate({ id: "mockup.settingsMenus.customValue", message: "Valeur personnalisée" }), 1, ICON.customWhite),
        btn(t.reset(), 4, ICON.resetWhite, true),
      ],
    }),
  };

  return wrap({
    embeds: [
      {
        color: 0xd35f5f,
        title: translate({ id: "mockup.settingsMenus.raidmode.title", message: "Configuration de l'auto RaidMode" }),
        description: translate({
          id: "mockup.settingsMenus.raidmode.desc",
          message:
            "Configurez le mode anti-raid automatique en définissant le seuil d'arrivées de membres sur 10 secondes. Lorsque le seuil est dépassé, les membres signalés sont kick et les invitations sont désactivées pendant la durée configurée.",
        }),
        fields: [
          {
            name: `${E(ICON.members)} ${translate({ id: "mockup.settingsMenus.raidmode.threshold", message: "Nombre de membres / 10 secondes" })}`,
            value: `> ${translate({ id: "mockup.settingsMenus.raidmode.thresholdValue", message: "10 membres" })}`,
            inline: true,
          },
          {
            name: `${E(ICON.time)} ${translate({ id: "mockup.settingsMenus.raidmode.duration", message: "Durée avant désactivation" })}`,
            value: `> ${translate({ id: "mockup.settingsMenus.raidmode.durationValue", message: "5 minutes" })}`,
            inline: true,
          },
          {
            name: `${E(ICON.dmlock)} ${translate({ id: "mockup.settingsMenus.raidmode.dmlock", message: "Fermer les MP" })}`,
            value: `> ${closeDm ? t.enabled() : t.disabled()}`,
          },
          {
            name: `${E(ICON.premium)} ${translate({ id: "mockup.settingsMenus.raidmode.kickMode", message: "Mode expulsion" })}`,
            value: kickMode
              ? `> ${translate({ id: "mockup.settingsMenus.raidmode.kickModeEnabled", message: "Expulsion à l'arrivée et envoi d'un message privé avec une invitation pour rejoindre le serveur à nouveau" })}`
              : `> ${translate({ id: "mockup.settingsMenus.raidmode.kickModeValue", message: "Désactivation des invitations" })}`,
          },
        ],
        footer: { text: t.footer("Auto RaidMode") },
      },
    ],
    components: [
      {
        type: 1,
        components: [
          btn(translate({ id: "mockup.settingsMenus.raidmode.btnThreshold", message: "Nombre de membre" }), 2, ICON.membersWhite, false, "raidmode-threshold"),
          btn(translate({ id: "mockup.settingsMenus.raidmode.btnDuration", message: "Durée" }), 2, ICON.timeWhite, false, "raidmode-duration"),
          btn(t.disable(), 4, ICON.disableWhite),
        ],
      },
      {
        type: 1,
        components: [
          btn(translate({ id: "mockup.settingsMenus.raidmode.dmlock", message: "Fermer les MP" }), 1, closeDm ? ICON.toggleEnable : ICON.toggleDisable, false, "raidmode-closedm"),
          btn(translate({ id: "mockup.settingsMenus.raidmode.kickMode", message: "Mode expulsion" }), 1, kickMode ? ICON.toggleEnable : ICON.toggleDisable, false, "raidmode-kickmode"),
        ],
      },
      navRow(),
    ],
  }, pages, {
    "raidmode-closedm": () => setCloseDm(!closeDm),
    "raidmode-kickmode": () => setKickMode(!kickMode),
  });
}

/* === Captcha === */
export function CaptchaSettingsMockup() {
  return wrap({
    embeds: [
      {
        color: 0xd35f5f,
        title: translate({ id: "mockup.settingsMenus.captcha.title", message: "Configuration du Captcha" }),
        description: translate({
          id: "mockup.settingsMenus.captcha.desc",
          message: "Configurez le Captcha pour empêcher les selfbots d'accéder à votre serveur Discord et bloquer les raids.",
        }),
        fields: [
          {
            name: `${E(ICON.channel)} ${translate({ id: "mockup.settingsMenus.captcha.channel", message: "Salon de vérification" })}`,
            value: `> ${t.none()}`,
          },
        ],
        footer: { text: t.footer("Captcha") },
      },
    ],
    components: [
      sel(translate({ id: "mockup.settingsMenus.selChannel", message: "Sélectionner un salon" }), CHANNEL_OPTIONS),
      {
        type: 1,
        components: [btn(translate({ id: "mockup.settingsMenus.createForMe", message: "En créer un pour moi" }), 1, ICON.createWhite)],
      },
      navRow(),
    ],
  });
}

/* === Fermeture des MP === */
export function DmLockSettingsMockup() {
  const [on, setOn] = useState(true);
  return wrap({
    embeds: [
      {
        color: 0xd35f5f,
        title: translate({ id: "mockup.settingsMenus.dmlock.title", message: "Configuration des MP fermés" }),
        description: [
          translate({
            id: "mockup.settingsMenus.dmlock.desc1",
            message: "Configurez la fermeture des messages privés pour prévenir les tentatives de phishing ou d'arnaque.",
          }),
          translate({
            id: "mockup.settingsMenus.dmlock.desc2",
            message:
              "RaidProtect désactivera les messages privés en permanence jusqu'à ce que vous désactiviez cette protection. Nous utilisons la fonction \"Actions de cybersécurité de Discord\" (limitée à 24h par Discord, étendue à toujours par RaidProtect).",
          }),
          "",
          `⚠️ ${translate({
            id: "mockup.settingsMenus.dmlock.warning",
            message: "Seuls les bots, les membres qui ont déjà échangé ou qui sont en ami et les staff pourront recevoir des MP avec ce mode.",
          })}`,
        ].join("\n"),
        fields: [
          {
            name: `${E(ICON.dmlock)} ${translate({ id: "mockup.settingsMenus.dmlock.state", message: "État des MP fermés" })}`,
            value: `> ${on ? t.enabled() : t.disabled()}`,
          },
        ],
        footer: { text: t.footer("Fermeture des MP") },
      },
    ],
    components: [
      {
        type: 1,
        components: [
          btn(on ? t.disable() : t.enable(), 1, on ? ICON.toggleEnable : ICON.toggleDisable, false, "dmlock-toggle"),
          btn(translate({ id: "mockup.settingsMenus.dmlock.suggest", message: "Faire une suggestion" }), 2, ICON.suggestWhite),
        ],
      },
      navRow(),
    ],
  }, undefined, { "dmlock-toggle": () => setOn(!on) });
}

/* === Langue === */
export function LanguageSettingsMockup() {
  return wrap({
    embeds: [
      {
        color: 0xd35f5f,
        title: translate({ id: "mockup.settingsMenus.language.title", message: "Configuration de la langue" }),
        description: translate({
          id: "mockup.settingsMenus.language.desc",
          message:
            "La langue configurée affecte uniquement les messages publics envoyés par RaidProtect dans votre serveur (logs, messages de captcha, signalements, etc.). Les messages privés ou temporaires restent affichés dans la langue de l'utilisateur qui interagit avec le bot.",
        }),
        fields: [
          {
            name: `${E(ICON.language)} ${translate({ id: "mockup.settingsMenus.language.selected", message: "Langue sélectionnée" })}`,
            value: `> ${translate({ id: "mockup.settingsMenus.language.value", message: "Français" })}`,
          },
        ],
        footer: { text: t.footer("Langue") },
      },
    ],
    components: [
      sel(translate({ id: "mockup.settingsMenus.language.value", message: "Français" }), [
        { label: "Français", emoji: { name: "🇫🇷" } },
        { label: "English", emoji: { name: "🇬🇧" } },
        { label: "Deutsch", emoji: { name: "🇩🇪" } },
        { label: "Español", emoji: { name: "🇪🇸" } },
        { label: "Português", emoji: { name: "🇧🇷" } },
      ]),
      {
        type: 1,
        components: [btn(t.reset(), 4, ICON.resetWhite, true)],
      },
      navRow(),
    ],
  });
}

/* === Préfixe === */
export function PrefixSettingsMockup() {
  const [del, setDel] = useState(false);
  return wrap({
    embeds: [
      {
        color: 0xd35f5f,
        title: translate({ id: "mockup.settingsMenus.prefix.title", message: "Configuration du préfixe" }),
        description: [
          translate({
            id: "mockup.settingsMenus.prefix.desc1",
            message: "Sélectionnez un préfixe pour les commandes par message. Si non défini, les commandes par message seront désactivées.",
          }),
          "",
          translate({ id: "mockup.settingsMenus.prefix.commands", message: "Commandes utilisables par préfixe :" }),
          "`raidmode`, `ban`, `tempban`, `unban`, `kick`, `timeout`, `untimeout`, `warn`, `slowmode`, `lock`, `unlock`, `userinfo`, `clear`",
          "",
          translate({
            id: "mockup.settingsMenus.prefix.deleteDesc",
            message:
              "**Suppression à l'invocation :** Supprime automatiquement le message contenant la commande lorsqu'on utilise les commandes par préfixe.",
          }),
        ].join("\n"),
        fields: [
          {
            name: `${E(ICON.prefix)} ${translate({ id: "mockup.settingsMenus.prefix.field", message: "Préfixe" })}`,
            value: `> ${t.none()}`,
            inline: true,
          },
          {
            name: translate({ id: "mockup.settingsMenus.prefix.delete", message: "Suppression à l'invocation" }),
            value: `> ${del ? t.enabled() : t.disabled()}`,
            inline: true,
          },
        ],
        footer: { text: t.footer("Préfixe") },
      },
    ],
    components: [
      sel(translate({ id: "mockup.settingsMenus.prefix.sel", message: "Sélectionner un préfixe" }), [
        { label: "!" },
        { label: "?" },
        { label: "." },
        { label: "$" },
      ]),
      {
        type: 1,
        components: [
          btn(translate({ id: "mockup.settingsMenus.prefix.custom", message: "Valeur personnalisée" }), 1, ICON.customWhite),
          btn(t.disable(), 4, ICON.disableWhite, true),
          btn(translate({ id: "mockup.settingsMenus.prefix.delete", message: "Suppression à l'invocation" }), 1, del ? ICON.toggleEnable : ICON.toggleDisable, false, "prefix-delete"),
        ],
      },
      navRow(),
    ],
  }, undefined, { "prefix-delete": () => setDel(!del) });
}

/* === Sanctions > Logs === */
export function SanctionLogsSettingsMockup() {
  return wrap({
    embeds: [
      {
        color: 0xd35f5f,
        title: translate({ id: "mockup.settingsMenus.logs.title", message: "Configuration des Logs" }),
        description: translate({
          id: "mockup.settingsMenus.logs.desc",
          message:
            "Par défaut, les logs de modération sont dans le salon de logs de RaidProtect. Vous pouvez, si vous le souhaitez, sélectionner un autre salon.",
        }),
        fields: [
          {
            name: translate({ id: "mockup.settingsMenus.logs.channel", message: "Salon configuré" }),
            value: "> #raidprotect-logs",
          },
        ],
        footer: { text: t.footer("Logs > Modération") },
      },
    ],
    components: [
      sel(translate({ id: "mockup.settingsMenus.selChannel", message: "Sélectionner un salon" }), CHANNEL_OPTIONS),
      {
        type: 1,
        components: [
          btn(translate({ id: "mockup.settingsMenus.createForMe", message: "En créer un pour moi" }), 1, ICON.createWhite),
          btn(t.reset(), 4, ICON.resetWhite, true),
        ],
      },
      navRow(),
    ],
  });
}
