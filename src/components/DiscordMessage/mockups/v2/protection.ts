import type { Component } from "../../types";
import type { ModalData, ModalItem } from "../../Modal";
import {
  t, i, btn, text, sep, row, container, section, setting, heading, select, channelSelect, roleSelect, userSelect,
  toggle, reset, edit, configure, custom, screen, premiumNotice, COLORS, type IconName, type Opt,
} from "./kit";
import { docBlock, selectField, textField, checkField } from "./general";
import { CH, RO, type Ctx, type Part } from "./state";

/* Onglet Protection : DISCON, Anti-spam, Automod, HoneyPot, Slowmode
 * préventif, Fermeture des MP (l'Authentification Manager a son fichier). */

const SANCTIONS: Array<[string, IconName]> = [
  ["Bannissement", "iconSanctionsBAN"],
  ["Softban", "iconSanctionsSOFTBAN"],
  ["Emprisonnement", "iconSanctionsJAIL"],
  ["Expulsion", "iconSanctionsKICK"],
  ["Mute", "iconSanctionsMUTE"],
  ["Timeout", "iconSanctionsTIMEOUT"],
  ["Avertissement", "iconSanctionsWARN"],
];

const sanctionLabel = (fr: string) => t(`sanction.${fr}`, fr);

export const PRESETS = (): Opt[] => [
  { label: t("antispam.soft", "Souple"), description: t("antispam.softDesc", "Avertit d'abord, puis exclut temporairement ou isole : ni expulsion ni bannissement."), emoji: "iconSanctionsWARN" },
  { label: "Standard", description: t("antispam.standardDesc", "Les sanctions par défaut de RaidProtect."), emoji: "iconSanctionsTIMEOUT", default: true },
  { label: t("antispam.strict", "Strict (non recommandé)"), description: t("antispam.strictDesc", "Bannit la publicité et les comptes automatisés dès le premier spam."), emoji: "iconSanctionsBAN" },
];

const TRIGGERS = (): Array<[IconName, string]> => [
  ["iconSpam", t("trigger.spam", "Spam")],
  ["iconSpam", t("trigger.flood", "Flood (écran rempli)")],
  ["iconLinks", t("trigger.files", "Spam de fichiers")],
  ["iconDuplicate", t("trigger.duplicates", "Spam de duplicatas")],
  ["iconLinks", t("trigger.links", "Spam de liens")],
  ["iconMentions", t("trigger.mentions", "Spam de mentions")],
  ["iconBots", t("trigger.selfbot", "Spam avec selfbot")],
  ["iconCommand", t("trigger.commands", "Spam de commandes externes")],
  ["iconFilter", t("trigger.automod", "Spam de messages bloqués (AutoMod)")],
  ["iconSpam", t("trigger.multichannel", "Spam multisalon")],
];

const DISCON_LEVELS = (): Array<[number, IconName, string, string]> => [
  [5, "colorBlueProtect", t("discon.l5", "Tout va bien"), t("discon.e5", "vérification moyenne")],
  [4, "colorGreenProtect", t("discon.l4", "Vigilance"), t("discon.e4", "vérification moyenne, captcha à l'entrée")],
  [3, "colorYellowProtect", t("discon.l3", "Alerte"), t("discon.e3", "vérification maximale, captcha à l'entrée, blocage des MP")],
  [2, "colorRedProtect", t("discon.l2", "Critique"), t("discon.e2", "vérification maximale, captcha gelé, personne n'entre, blocage des MP")],
  [1, "colorWhiteProtect", t("discon.l1", "Catastrophe"), t("discon.e1", "vérification maximale, captcha gelé, personne n'entre, blocage des MP, verrouillage, plus personne ne peut écrire ni réagir")],
];

/* Bloc du niveau DISCON, sous l'écran de configuration et dans le panneau du salon. */
export function disconLevel(level: number, onPick?: (lvl: number) => string): Component {
  const levels = DISCON_LEVELS();
  const [, icon, label] = levels.find(([n]) => n === level)!;
  return container(
    [
      text(`### ${i(icon)} ${t("discon.current", "Niveau actuel")}\n> **DISCON ${level}** (${label})`),
      row(
        ...levels.map(([n, emoji]) =>
          btn({ label: String(n), emoji, style: n === level ? 1 : 2, id: onPick ? onPick(n) : undefined })
        )
      ),
      sep(),
      text(
        [
          `**${i("iconAntiraid")} ${t("discon.scale", "Barème des niveaux")}**`,
          ...levels.map(([n, e, l, effects]) => `-# ${i(e)} **DISCON ${n}** ${l} : ${effects}`),
        ].join("\n")
      ),
    ],
    COLORS.discon[level]
  );
}

export function protectionPart({ s, flip }: Ctx, disconState: { level: number; setLevel: (n: number) => void }): Part {
  const discon = (command = false) => (): Component[] =>
    screen({
      tab: "protection",
      title: `${i("iconDISCON")} ${t("discon.title", "Configuration DISCON")}`,
      desc: t(
        "discon.desc",
        "Choisissez le salon où poster le panneau DISCON et, en option, un salon vocal dont le nom reflète le niveau courant."
      ),
      crumbs: [{ label: "DISCON" }],
      command,
      docs: "features/discon",
      accent: COLORS.discon[disconState.level],
      body: [
        section(`### ${i("iconChannelText")} ${t("discon.panelChannel", "Salon du panneau")}`, btn({ label: t("discon.createPanel", "Créer le salon du panneau"), style: 1, emoji: "iconCreateWhite", disabled: true })),
        channelSelect(t("discon.panelPh", "Salon du panneau DISCON (texte)"), [CH("discon-staff")]),
        sep(),
        section(
          `### ${i("iconInfo")} ${t("discon.voice", "Salon vocal de statut")}\n-# ${i("iconPremium")} ${t("discon.voicePremium", "Le salon vocal de statut du DISCON nécessite le premium.")}`,
          btn({ label: t("discon.createVoice", "Créer le salon de statut"), style: 1, emoji: "iconPremium" })
        ),
        channelSelect(t("discon.voicePh", "Salon vocal de statut (optionnel)")),
      ],
      below: [disconLevel(disconState.level, (n) => `discon:level:${n}`)],
    });

  const antispam = (): Component[] =>
    screen({
      tab: "protection",
      icon: "iconAntispam",
      title: t("antispam.title", "Configuration de l'Anti-spam"),
      desc: t("antispam.desc", "Configurez le système anti-spam pour protéger votre serveur Discord contre les actions malveillantes d'utilisateurs."),
      accessory: toggle(s.antispam, "toggle:antispam"),
      crumbs: [{ label: "Anti-spam" }],
      docs: "features/anti-spam",
      body: [
        section(`### ${i("iconSanctions")} Sanctions`, btn({ label: t("antispam.details", "Voir les détails"), emoji: "iconSanctionsWhite", id: "antispamSanctions" })),
        select(t("antispam.presetPh", "Choisir un préréglage"), PRESETS()),
        sep(),
        heading("iconChannelText", t("antispam.channels", "Salon(s) ignoré(s)")),
        channelSelect(t("antispam.channelsPh", "Salon(s) à ignorer (écrire pour chercher)"), [CH("médias")]),
        heading("iconRole", t("antispam.roles", "Rôle(s) ignoré(s)")),
        roleSelect(t("antispam.rolesPh", "Rôle(s) à ignorer (écrire pour chercher)"), [RO("Modérateurs")]),
        heading("iconMembers", t("antispam.members", "Membre(s) ignoré(s)")),
        userSelect(t("antispam.membersPh", "Membre(s) à ignorer (écrire pour chercher)")),
        sep(),
        setting(
          "iconLoader",
          "Simulation",
          null,
          btn({ label: t("antispam.simulate", "Simuler"), style: 1, emoji: "iconLoaderWhite", id: "modal:antispamSimulate" }),
          t("antispam.simulateHint", "Simulez une situation pour comprendre si l'anti-spam se déclencherait : choisissez un membre, un salon et un type de spam.")
        ),
      ],
    });

  const familyLine = (icon: IconName, name: string, value: string, hint: string) =>
    setting(icon, name, value, edit("modal:antispamFamily"), hint);

  const antispamSanctions = (): Component[] =>
    screen({
      tab: "protection",
      icon: "iconSanctions",
      title: t("antispam.title", "Configuration de l'Anti-spam"),
      desc: t(
        "antispam.sanctionsDesc",
        "Vous pouvez personnaliser les sanctions appliquées selon le type de spam détecté. Cela permet une réponse adaptée à la gravité de l'infraction."
      ),
      accessory: reset(),
      crumbs: [{ label: "Anti-spam", id: "antispam" }, { label: "Sanctions" }],
      docs: "features/anti-spam#triggers",
      body: [
        section(`### ${i("iconSanctions")} Sanctions`, btn({ label: t("antispam.advanced", "Mode avancé"), emoji: s.antispamAdvanced ? "iconToggleEnable" : "iconToggleDisable", id: "toggle:antispamAdvanced" })),
        select(t("antispam.presetPh", "Choisir un préréglage"), PRESETS()),
        text(`-# ${t("antispam.familiesHint", "Chaque famille regroupe des déclencheurs de même nature. Quand un spam en franchit plusieurs, la sanction la plus sévère l'emporte.")}`),
        ...(s.antispamAdvanced
          ? [
              text(
                TRIGGERS()
                  .map(([icon, name], n) => {
                    const value = [
                      `Timeout · ${t("antispam.defaultDuration", "Défaut (1 heure)")}`,
                      `Timeout · ${t("antispam.defaultDuration", "Défaut (1 heure)")}`,
                      `Timeout · ${t("antispam.defaultDuration", "Défaut (1 heure)")}`,
                      "Softban",
                      "Softban",
                      "Softban",
                      sanctionLabel("Bannissement"),
                      sanctionLabel("Bannissement"),
                      sanctionLabel("Bannissement"),
                      `${sanctionLabel("Emprisonnement")} · ${t("antispam.defaultDuration", "Défaut (1 heure)")}`,
                    ][n];
                    return `${i(icon)} **${name}** · ${value}`;
                  })
                  .join("\n")
              ),
              select(t("antispam.triggersPh", "Sélectionner les déclencheurs à modifier"), TRIGGERS().map(([emoji, label]) => ({ label, emoji }))),
            ]
          : [
              familyLine("iconSpam", t("family.excess", "Excès"), `Timeout · ${t("antispam.defaultDuration", "Défaut (1 heure)")}`, t("family.excessHint", "Volume de messages, flood et fichiers : quelqu'un qui s'emballe.")),
              familyLine("iconLinks", "Spam", "Softban", t("family.spamHint", "Messages en double, liens et mentions : publicité ou harcèlement.")),
              familyLine("iconBots", t("family.automated", "Automatisé"), sanctionLabel("Bannissement"), t("family.automatedHint", "Selfbot, commandes externes et messages bloqués par l'AutoMod : un bot ou un compte compromis.")),
              familyLine(
                "iconSpam",
                t("trigger.multichannel", "Spam multisalon"),
                `${sanctionLabel("Emprisonnement")} · ${t("antispam.defaultDuration", "Défaut (1 heure)")}`,
                t("family.multiHint", "Remplace la sanction du déclencheur quand le spam touche plusieurs salons, uniquement si elle est plus sévère.")
              ),
            ]),
        sep(),
        heading(
          "iconTime",
          t("antispam.duration", "Durée par défaut"),
          t("antispam.durationHint", "Durée appliquée aux déclencheurs sans durée propre, pour les sanctions qui en supportent une (mute, timeout, jail). Ignorée pour les autres sanctions.")
        ),
        select(t("durationPh", "Sélectionner une durée"), [
          { label: t("permanent", "Permanent"), emoji: "iconTime" },
          { label: "5 minutes", emoji: "iconTime" },
          { label: t("oneHour", "1 heure"), emoji: "iconTime", default: true },
          { label: t("oneDay", "1 jour"), emoji: "iconTime" },
          custom(),
        ]),
        setting(
          "iconChannelText",
          t("antispam.publicMsg", "Message public de sanction"),
          t("enabled", "Activé"),
          btn({ label: t("disable", "Désactiver"), emoji: "iconPremium" }),
          t("antispam.publicMsgHint", "Envoie un message dans le salon pour annoncer la sanction (ex. « membre a été mute »). Désactivable en premium.")
        ),
      ],
    });

  const automod = (): Component[] =>
    screen({
      tab: "protection",
      icon: "iconFilter",
      title: "Automod",
      desc: t(
        "automod.desc",
        "Les filtres qui reconnaissent un contenu déjà vu ailleurs et le retirent avant qu'il ne circule. Chacun décide de la sanction appliquée à son auteur."
      ),
      crumbs: [{ label: "Automod" }],
      docs: "features/automod",
      body: [
        setting("iconScamLens", "Images", t("automod.default", "Par défaut"), configure("imageFilter", "iconScamLensWhite"), t("automod.imagesHint", "Arnaques connues, comparées par empreinte")),
        setting(
          "iconLinks",
          t("servers.name", "Autres serveurs"),
          t("servers.short", "Invitations, transferts et tags d'autres serveurs"),
          configure("serverRefs"),
          t("servers.hint", "Supprime les invitations et messages transférés d'autres serveurs, met en quarantaine leurs tags.")
        ),
        setting(
          "iconFilter",
          t("files.name", "Extensions de fichiers"),
          t("files.short", "Fichiers bloqués ou seuls autorisés, par salon"),
          configure("files"),
          t("files.hint", "Supprime les fichiers d'une extension refusée, sur tout le serveur ou dans certains salons.")
        ),
      ],
    });

  const SERVER_KINDS: Array<[string, string, IconName, number]> = [
    ["link", t("servers.link", "Invitation"), "iconLinks", 2],
    ["forward", t("servers.forward", "Message transféré ou lien de salon"), "iconLinks", 0],
    ["tag", t("servers.tag", "Tag de serveur affiché"), "iconTag", 1],
  ];

  const serverModes = (selected: number): Opt[] => [
    { label: t("disabled", "Désactivé"), emoji: "iconToggleDisable", default: selected === 0 },
    { label: t("servers.blocklist", "Liste noire"), emoji: "iconFail", default: selected === 1 },
    { label: t("servers.allowlist", "Liste blanche"), emoji: "iconSuccess", default: selected === 2 },
  ];

  const serverRefs = (): Component[] =>
    screen({
      tab: "protection",
      icon: "iconLinks",
      title: t("servers.title", "Références à d'autres serveurs"),
      desc: t(
        "servers.desc",
        "Choisissez, pour chaque comportement, une liste noire (ces serveurs sont refusés) ou une liste blanche (seuls ces serveurs passent). Votre serveur passe toujours, et votre équipe (Gérer le serveur, Gérer les messages) n'est jamais visée."
      ),
      accessory: toggle(s.serverRefs, "toggle:serverRefs"),
      crumbs: [{ label: "Automod", id: "automod" }, { label: t("servers.name", "Autres serveurs") }],
      docs: "features/automod#servers",
      body: [
        ...SERVER_KINDS.flatMap(([, label, icon, mode]) => [
          heading(icon, label),
          select(t("servers.modePh", "Choisir un mode"), serverModes(mode)),
          ...(label === t("servers.link", "Invitation") && mode !== 0
            ? [
                text(`-# ${i("iconPremium")} ${t("servers.private.heading", "Invitations d'ami et de groupe privé, réglables séparément en premium")}`),
                select(t("servers.private.placeholder", "Invitations d'ami et de groupe"), [
                  { label: t("servers.private.follow", "Suivre la liste"), description: t("servers.private.followDesc", "Passent en liste noire, supprimées en liste blanche"), emoji: "iconLinks", default: true },
                  { label: t("servers.private.allow", "Toujours autorisées"), description: t("servers.private.allowDesc", "Invitations d'ami et de groupe privé acceptées, quelle que soit la liste"), emoji: "iconPremium" },
                  { label: t("servers.private.block", "Toujours supprimées"), description: t("servers.private.blockDesc", "Invitations d'ami et de groupe privé supprimées, quelle que soit la liste"), emoji: "iconPremium" },
                ]),
              ]
            : []),
        ]),
        sep(),
        heading("iconSanctions", t("servers.sanction", "Sanction des messages supprimés")),
        select(t("sanctionPh", "Sélectionner une sanction"), [
          { label: t("servers.none", "Message supprimé seulement"), emoji: "iconTrash" },
          ...SANCTIONS.map(([label, emoji]) => ({ label: sanctionLabel(label), emoji, default: label === "Timeout" })),
        ]),
        select(t("durationPh", "Sélectionner une durée"), [
          { label: "10 minutes", emoji: "iconTime" },
          { label: t("oneHour", "1 heure"), emoji: "iconTime" },
          { label: t("oneDay", "1 jour"), emoji: "iconTime", default: true },
          { label: t("sevenDays", "7 jours"), emoji: "iconTime" },
          custom(),
        ]),
        sep(),
        text(
          `### ${i("iconFail")} ${t("servers.blockList", "Liste noire")} (1)\n- **Serveur de pub** \`123456789012345678\`\n### ${i("iconSuccess")} ${t("servers.allowList", "Liste blanche")} (1)\n- **Serveur partenaire** \`234567890123456789\``
        ),
        row(
          btn({ label: t("servers.add", "Ajouter un serveur"), style: 1, emoji: "iconCreateWhite" }),
          btn({ label: t("servers.remove", "Retirer"), style: 2, emoji: "iconTrash" })
        ),
      ],
    });

  const FILE_GROUPS: Array<[string, string]> = [
    [t("files.groups.executables", "Exécutables"), "exe, msi, msix, appx, bat, cmd, com, scr, pif, cpl, ps1, vbs…"],
    [t("files.groups.images", "Images"), "png, jpg, jpeg, gif, webp, avif, bmp, heic, tif, tiff"],
    [t("files.groups.videos", "Vidéos"), "mp4, mov, webm, mkv, avi, m4v, wmv"],
    [t("files.groups.audio", "Audio"), "mp3, wav, ogg, flac, m4a, aac, opus"],
    [t("files.groups.archives", "Archives"), "zip, rar, 7z, tar, gz, tgz, bz2, xz"],
    [t("files.groups.documents", "Documents"), "pdf, txt, md, doc, docx, odt, rtf, xls, xlsx, ods, csv, ppt, pptx, odp"],
  ];

  const fileModes = (selected: number): Opt[] => [
    { label: t("disabled", "Désactivé"), description: t("files.server.off", "Aucune extension refusée sur tout le serveur"), emoji: "iconToggleDisable", default: selected === 0 },
    { label: t("servers.blocklist", "Liste noire"), description: t("files.server.blocklist", "Supprime les fichiers de ces extensions, partout"), emoji: "iconFail", default: selected === 1 },
    { label: t("servers.allowlist", "Liste blanche"), description: t("files.server.allowlist", "Supprime tout fichier d'une autre extension, partout"), emoji: "iconSuccess", default: selected === 2 },
  ];

  const files = (): Component[] =>
    screen({
      tab: "protection",
      icon: "iconFilter",
      title: t("files.title", "Extensions de fichiers"),
      desc: t(
        "files.desc",
        "Bloquez des extensions de fichiers ou n'autorisez que certaines, sur tout le serveur ou par salon. Votre équipe n'est jamais visée."
      ),
      accessory: toggle(s.files, "toggle:files"),
      crumbs: [{ label: "Automod", id: "automod" }, { label: t("files.name", "Extensions de fichiers") }],
      docs: "features/automod#files-config",
      body: [
        text(`### ${i("iconSettings")} ${t("files.server.name", "Tout le serveur")}\n-# ${t("files.server.hint", "S'applique à chaque salon, en plus de sa propre règle.")}`),
        select(t("files.modePh", "Choisir un mode"), fileModes(1)),
        setting("iconFail", t("files.server.blocked", "Extensions bloquées"), `${FILE_GROUPS[0][0]}, .psd`, edit("modal:filesServer")),
        setting(
          "iconWarning",
          t("files.disguised.name", "Toujours refuser les fichiers corrompus"),
          null,
          toggle(s.filesDisguised, "toggle:filesDisguised"),
          t("files.disguised.hint", "Une image ou une vidéo que Discord ne sait pas lire (un `.exe` renommé en `.png`) est supprimée dans tous les salons, pas seulement par une liste blanche.")
        ),
        sep(),
        text(
          `### ${i("iconChannelText")} ${t("files.channels.name", "Salons et catégories ({count})").replace("{count}", "1")}\n-# ${t(
            "files.channels.hint",
            "Une règle de catégorie vaut pour tous ses salons. Une extension nommée par une règle suit la plus précise : salon, puis catégorie, puis serveur."
          )}\n-# ${i("iconPremium")} ${t(
            "files.channels.premiumRequired",
            "Sans premium, une seule règle de salon s'applique et les catégories ne sont pas disponibles ; jusqu'à {max} règles avec le premium."
          ).replace("{max}", "20")}\n- ${CH("médias")} : ${t("files.channels.allowOnly", "n'accepte que {extensions}").replace(
            "{extensions}",
            `${FILE_GROUPS[1][0]}, ${FILE_GROUPS[2][0]}`
          )}`
        ),
        select(t("files.channels.editPh", "Modifier un salon"), [
          { label: CH("médias"), description: `${FILE_GROUPS[1][0]}, ${FILE_GROUPS[2][0]}`, emoji: "iconSuccess" },
        ]),
        row(
          btn({ label: t("files.add.button", "Ajouter un salon"), style: 1, emoji: "iconPremium", id: "modal:filesChannel" }),
          btn({ label: t("files.remove.button", "Retirer"), style: 2, emoji: "iconTrash", id: "modal:filesRemove" })
        ),
        sep(),
        heading(
          "iconSanctions",
          t("files.sanction.field", "Sanction des messages supprimés"),
          t("files.sanction.hint", "Chaque message refusé est supprimé ; la sanction s'applique au plus une fois par minute et par membre.")
        ),
        select(t("files.sanction.placeholder", "Choisir une sanction"), [
          { label: t("files.sanction.none", "Message supprimé seulement"), emoji: "iconTrash", default: true },
          ...SANCTIONS.map(([label, emoji]) => ({ label: sanctionLabel(label), emoji })),
        ]),
      ],
    });

  const imageFilter = (): Component[] =>
    screen({
      tab: "protection",
      icon: "iconScamLens",
      title: t("imagefilter.title", "Filtre d'images"),
      desc: t(
        "imagefilter.desc",
        "Compare l'empreinte des images postées à celles des arnaques connues, supprime celles qui correspondent et sanctionne leur auteur. Rien n'est lu du texte des messages."
      ),
      accessory: toggle(s.imageFilter, "toggle:imageFilter"),
      crumbs: [{ label: "Automod", id: "automod" }, { label: "Images" }],
      docs: "features/scam-images",
      body: [
        heading("iconSanctions", t("sanction.applied", "Sanction appliquée")),
        select(
          t("sanctionPh", "Sélectionner une sanction"),
          [
            { label: t("automod.default", "Par défaut"), description: "Softban", emoji: "iconReset", default: true },
            ...SANCTIONS.map(([label, emoji]) => ({ label: sanctionLabel(label), emoji })),
          ],
          !s.imageFilter
        ),
        text(
          `### ${i("iconTime")} ${t("imagefilter.duration", "Durée de la sanction")}\n> ${t("oneDay", "1 jour")}\n-# ${t("imagefilter.durationHint", "Par défaut : suit la durée du HoneyPot, actif sur ce serveur.")}`
        ),
        select(t("durationPh", "Sélectionner une durée"), [
          { label: t("automod.default", "Par défaut"), emoji: "iconReset", default: true },
          { label: "5 minutes", emoji: "iconTime" },
          { label: t("oneHour", "1 heure"), emoji: "iconTime" },
          { label: t("oneDay", "1 jour"), emoji: "iconTime" },
          custom(),
        ]),
        sep(),
        text(
          `### ${i("iconScamLens")} ${t("imagefilter.catalog", "Catalogue d'images")}\n-# ⚠️ ${t(
            "imagefilter.catalogHint",
            "**Une liste = un seul registre d'images** (un même type de contenu). Mélanger des images sans rapport dans une liste corrompt la détection."
          )}`
        ),
        text(`### ${i("iconScamLens")} Crypto Scam\n> ${t("imagefilter.global", "Géré par RaidProtect, appliqué sur tous les serveurs")}`),
        text(t("imagefilter.empty", "Aucune liste pour ce serveur. Créez-en une, choisissez son salon de vérification, puis ajoutez vos images.")),
        row(btn({ label: t("imagefilter.create", "Créer une liste (0/0)"), style: 1, emoji: "iconPremium" })),
      ],
    });

  const honeypot = (command = false) => (): Component[] =>
    screen({
      tab: "protection",
      icon: "iconHoneypot",
      title: t("honeypot.title", "Configuration du HoneyPot"),
      desc: t(
        "honeypot.desc",
        "Le **HoneyPot** est un salon piège visible et accessible en écriture par **tous les membres** (y compris ceux qui ont le rôle Jail ou le rôle de vérification du captcha). Tout membre qui y envoie un message est **automatiquement sanctionné** par RaidProtect.\n\nLe salon est créé tout en haut de votre serveur, et un message d'avertissement y est posté à sa création (avec un bouton de traduction)."
      ),
      accessory: toggle(s.honeypot, "toggle:honeypot"),
      crumbs: [{ label: "HoneyPot" }],
      command,
      docs: "features/honeypot",
      body: [
        s.honeypot
          ? setting("iconChannelText", t("honeypot.channel", "Salon HoneyPot"), CH("ne-pas-ecrire"), btn({ label: t("honeypot.regen", "Régénérer le salon"), style: 1, emoji: "iconRefreshWhite" }))
          : setting("iconChannelText", t("honeypot.channel", "Salon HoneyPot"), t("disabled", "Désactivé"), btn({ label: t("honeypot.create", "Créer le salon"), style: 1, emoji: "iconCreateWhite", id: "toggle:honeypot" })),
        sep(),
        heading("iconSanctions", t("sanction.applied", "Sanction appliquée")),
        select(t("sanctionPh", "Sélectionner une sanction"), [
          { label: sanctionLabel("Bannissement"), emoji: "iconSanctionsBAN" },
          { label: "Softban", emoji: "iconSanctionsSOFTBAN", default: true },
          { label: `${sanctionLabel("Emprisonnement")} (Premium)`, emoji: "iconPremium" },
          { label: `${sanctionLabel("Expulsion")} (Premium)`, emoji: "iconPremium" },
          { label: "Mute (Premium)", emoji: "iconPremium" },
          { label: "Timeout (Premium)", emoji: "iconPremium" },
        ]),
        heading("iconTime", t("honeypot.duration", "Durée")),
        select(
          t("durationPh", "Sélectionner une durée"),
          [
            { label: "5 minutes", emoji: "iconTime" },
            { label: t("oneHour", "1 heure"), emoji: "iconTime" },
            { label: t("oneDay", "1 jour"), emoji: "iconTime", default: true },
            { label: "28 jours", emoji: "iconTime" },
            custom(),
          ],
          true
        ),
        heading(
          "iconAlert",
          t("honeypot.delay", "Délai avant sanction"),
          t(
            "honeypot.delayHint",
            "Avec un délai, le message est retiré et le membre est mentionné avec un bouton pour dire que c'était une erreur. Sans clic à temps, la sanction tombe. Le même message posté dans un autre salon, avant ou pendant le délai, est sanctionné tout de suite."
          )
        ),
        select(t("honeypot.delayPh", "Sélectionner un délai"), [
          { label: t("honeypot.immediate", "Sanction immédiate"), emoji: "iconSanctions", default: true },
          ...["30 secondes", "1 minute", "2 minutes", "5 minutes"].map((d) => ({
            label: t("honeypot.askFirst", "Demander d'abord, sanction après {duration}").replace("{duration}", d),
            emoji: "iconTime" as IconName,
          })),
        ]),
        sep(),
        heading("iconHide", t("honeypot.ignored", "Membres ignorés")),
        select(t("honeypot.ignoredPh", "Sélectionner les membres à ignorer"), [
          { label: t("honeypot.nobody", "Personne (sauf membres non modérables)"), default: true },
          { label: t("honeypot.staff", "Staff (Admin / Gérer le serveur / Gérer les salons)") },
          { label: t("honeypot.antispamIgnored", "Membres ignorés par l'Antispam") },
        ]),
      ],
    });

  const slowmodeDesc = t(
    "slowmode.desc",
    "Ajuste tout seul le slowmode des salons choisis selon le nombre de messages par minute, sans sortir des limites de chaque salon."
  );
  const free = t("slowmode.free", "Emplacement libre.");

  const slowmode = (): Component[] =>
    screen({
      tab: "protection",
      icon: "iconSlowmode",
      title: t("slowmode.title", "Slowmode préventif (Premium)"),
      desc: slowmodeDesc,
      crumbs: [{ label: t("slowmode.name", "Slowmode préventif") }],
      docs: "features/slowmode",
      notices: [premiumNotice(t("slowmode.notice", "Le premium est requis pour le slowmode préventif."))],
      body: [
        s.slowmodeChannel
          ? section(`${i("iconToggleEnable")} ${CH("général")} · ${t("slowmode.rate30", "30 messages / min")}`, btn({ label: t("edit", "Modifier"), emoji: "iconCustomWhite", id: "slowmodeChannel" }))
          : section(`> ${free}`, btn({ label: t("add", "Ajouter"), style: 3, emoji: "iconCreateWhite", id: "modal:slowmodeAdd" })),
        ...[1, 2, 3, 4, 5].map(() => section(`> ${free}`, btn({ label: t("add", "Ajouter"), style: 3, emoji: "iconCreateWhite", id: "modal:slowmodeAdd" }))),
      ],
    });

  const slowmodeChannel = (): Component[] =>
    screen({
      tab: "protection",
      icon: "iconSlowmode",
      title: `${t("slowmode.channelTitle", "Salon régulé :")} #général`,
      desc: t(
        "slowmode.channelDesc",
        "Choisissez combien de messages par minute ce salon peut recevoir. Au-delà, le slowmode monte tout seul, et il redescend quand le salon se calme. Il reste toujours entre le minimum et le maximum choisis."
      ),
      accessory: toggle(false),
      crumbs: [{ label: t("slowmode.name", "Slowmode préventif"), id: "slowmode" }, { label: `${t("slowmode.channelTitle", "Salon régulé :")} #général` }],
      docs: "features/slowmode",
      notices: [premiumNotice(t("slowmode.notice", "Le premium est requis pour le slowmode préventif."))],
      body: [
        heading("iconSlowmode", t("slowmode.target", "Débit de messages")),
        select(
          t("slowmode.targetPh", "Choisir le débit de messages"),
          [5, 10, 15, 20, 30, 45, 60, 90, 120].map((n) => ({ label: `${n} messages / min`, emoji: "iconSlowmode" as IconName, default: n === 30 }))
        ),
        heading("iconTime", t("slowmode.min", "Slowmode minimum")),
        select(
          t("slowmode.minPh", "Choisir le slowmode minimum"),
          ["0 seconde", "1 seconde", "2 secondes", "3 secondes", "5 secondes", "10 secondes"].map((label, n) => ({ label, emoji: "iconMinus" as IconName, default: n === 0 }))
        ),
        heading("iconTime", t("slowmode.max", "Slowmode maximum")),
        select(
          t("slowmode.maxPh", "Choisir le slowmode maximum"),
          ["5 secondes", "10 secondes", "15 secondes", "30 secondes", "1 minute", "2 minutes", "5 minutes", "10 minutes"].map((label) => ({ label, emoji: "iconPlus" as IconName, default: label === "2 minutes" }))
        ),
      ],
      rows: [
        row(
          btn({ label: t("customize", "Personnaliser"), style: 1, emoji: "iconCustomWhite", id: "modal:slowmodeCustom" }),
          btn({ label: t("slowmode.applyAll", "Appliquer à tous les salons régulés"), emoji: "iconRefreshWhite" }),
          btn({ label: t("delete", "Supprimer"), style: 4, emoji: "iconResetWhite" })
        ),
      ],
    });

  const dmlockCommand = (): Component[] =>
    screen({
      tab: "protection",
      icon: "iconDmlock",
      title: t("dmlock.title", "Configuration des MP fermés"),
      desc: DMLOCK_DESC(),
      accessory: toggle(false, "modal:dmlock"),
      command: true,
      docs: "features/dm-lock",
      rows: [row(btn({ label: t("suggest", "Faire une suggestion"), style: 5, emoji: "iconSuggestWhite", url: "https://suggestions.raidprotect.bot" }))],
    });

  const fileGroupsField = (checked: string[]): ModalItem =>
    checkField(
      t("files.extensions.groups", "Groupes"),
      FILE_GROUPS.map(([label, extensions]) => ({ label, description: extensions.slice(0, 100), checked: checked.includes(label) }))
    );

  const modals: Record<string, () => ModalData> = {
    antispamFamily: () => ({
      title: t("antispam.familyModal", "Sanction des déclencheurs"),
      items: [
        {
          type: "text",
          content: `### ${t("antispam.familyModalHead", "3 déclencheurs modifiés")}\n- **${t("trigger.spam", "Spam")}** · Timeout · ${t("antispam.defaultDuration", "Défaut (1 heure)")}\n- **${t("trigger.flood", "Flood (écran rempli)")}** · Timeout · ${t("antispam.defaultDuration", "Défaut (1 heure)")}\n- **${t("trigger.files", "Spam de fichiers")}** · Timeout · ${t("antispam.defaultDuration", "Défaut (1 heure)")}`,
        },
        selectField(
          "Sanction",
          [
            ...SANCTIONS.map(([label, emoji]) => ({ label: sanctionLabel(label), emoji, default: label === "Timeout" })),
            { label: t("disable", "Désactiver"), emoji: "iconDisable" },
          ],
          t("antispam.keepSanction", "Laisser vide pour garder la sanction actuelle.")
        ),
        selectField(
          t("honeypot.duration", "Durée"),
          [
            { label: t("antispam.globalDuration", "Par défaut (durée globale)"), emoji: "iconReset" },
            { label: t("permanent", "Permanent") },
            { label: "5 minutes" },
            { label: t("oneHour", "1 heure") },
            { label: t("oneDay", "1 jour") },
          ],
          t("antispam.keepDuration", "Pour le mute, le timeout et le jail. Laisser vide pour garder la durée actuelle.")
        ),
        textField(t("antispam.customDuration", "Durée personnalisée"), "ex. 5m 30s", undefined, t("antispam.customDurationHint", "Remplace la durée choisie au-dessus (5 minutes minimum).")),
      ],
    }),
    filesServer: () => ({
      title: t("files.server.blocked", "Extensions bloquées"),
      items: [
        {
          type: "text",
          content: `### ${i("iconDocs")} Documentation\n${t(
            "files.server.docs",
            "Cochez des groupes, saisissez des extensions séparées par des virgules (`exe, msi`), ou les deux. Le point est facultatif."
          )}`,
        },
        fileGroupsField([FILE_GROUPS[0][0]]),
        textField(t("files.extensions.label", "Autres extensions"), "exe, msi, psd", "psd", t("files.extensions.description", "Séparées par des virgules, le point est facultatif.")),
      ],
    }),
    filesChannel: () => ({
      title: t("files.add.title", "Ajouter un salon"),
      items: [
        { type: "field", label: t("files.add.channel", "Salon ou catégorie"), description: t("files.add.channelDescription", "Déjà réglé, sa règle est remplacée."), required: true, input: { kind: "channel" } },
        selectField(t("files.add.mode", "Mode"), [
          { label: t("servers.allowlist", "Liste blanche"), description: t("files.channels.allowDescription", "Seuls les fichiers de ces extensions passent"), emoji: "iconSuccess", default: true },
          { label: t("servers.blocklist", "Liste noire"), description: t("files.channels.blockDescription", "Les fichiers de ces extensions sont supprimés"), emoji: "iconFail" },
        ]),
        fileGroupsField([]),
        textField(t("files.extensions.label", "Autres extensions"), "exe, msi, psd", undefined, t("files.extensions.description", "Séparées par des virgules, le point est facultatif.")),
      ],
    }),
    filesRemove: () => ({
      title: t("files.remove.title", "Retirer des salons"),
      items: [
        selectField(t("files.remove.label", "Salons à retirer"), [
          { label: CH("médias"), description: `${t("servers.allowlist", "Liste blanche")} · ${FILE_GROUPS[1][0]}, ${FILE_GROUPS[2][0]}`, emoji: "iconSuccess" },
        ]),
      ],
    }),
    antispamSimulate: () => ({
      title: t("antispam.simTitle", "Diagnostic de l'anti-spam"),
      items: [
        docBlock(t("antispam.simulateHint", "Simulez une situation pour comprendre si l'anti-spam se déclencherait : choisissez un membre, un salon et un type de spam.")),
        { type: "field", label: t("antispam.simMember", "Membre à tester"), input: { kind: "user", placeholder: t("antispam.simMemberPh", "Sélectionnez un membre") } },
        { type: "field", label: t("antispam.simChannel", "Salon à tester"), input: { kind: "channel", placeholder: t("antispam.simChannelPh", "Sélectionnez un salon") } },
        selectField(
          t("antispam.simType", "Type de spam"),
          [[ "iconSpam", t("trigger.messages", "Spam de messages") ] as [IconName, string], ...TRIGGERS().slice(1)].map(([emoji, label]) => ({ label, emoji })),
          undefined,
          t("antispam.simTypePh", "Sélectionnez un type de spam")
        ),
      ],
    }),
    antispamPreset: () => ({
      title: t("antispam.presetTitle", "Appliquer un préréglage"),
      items: [
        {
          type: "text",
          content: `### ${i("iconAlert")} ${t("antispam.presetWarn", "Vos réglages vont être écrasés")}\n${t(
            "antispam.presetBody",
            "Ce que vous avez configuré va être remplacé par le préréglage **Souple** :"
          )}\n\n- ${t("family.excess", "Excès")} : **${sanctionLabel("Avertissement")}**\n- Spam : **Timeout**\n- ${t("family.automated", "Automatisé")} : **Softban**\n- ${t("trigger.multichannel", "Spam multisalon")} : **${sanctionLabel("Expulsion")}**`,
        },
        checkField(t("confirmation", "Confirmation"), [{ label: t("antispam.presetConfirm", "J'ai compris, appliquer le préréglage") }]),
      ],
    }),
    slowmodeAdd: () => ({
      title: t("slowmode.addTitle", "Ajouter un salon régulé"),
      items: [
        {
          type: "field",
          label: t("slowmode.channel", "Salon"),
          description: t("slowmode.addHint", "Il reprend les réglages du dernier salon ajouté, modifiables ensuite."),
          required: true,
          input: { kind: "channel" },
        },
      ],
    }),
    slowmodeCustom: () => ({
      title: t("slowmode.customTitle", "Valeurs personnalisées"),
      items: [
        textField(t("slowmode.targetField", "Débit de messages (messages / min)"), "ex. 40", "30", t("slowmode.targetHint", "Le slowmode s'ajuste pour tenir cette moyenne de messages par minute.")),
        textField(t("slowmode.min", "Slowmode minimum"), "ex. 0s", "0s", t("slowmode.minHint", "Plancher : le slowmode ne descend jamais en dessous. 0s pour aucun minimum.")),
        textField(t("slowmode.max", "Slowmode maximum"), "ex. 2m 30s", "2m", t("slowmode.maxHint", "Plafond : garde-fou anti-emballement, le slowmode ne monte jamais au-delà.")),
      ],
    }),
    dmlock: () => ({
      title: t("dmlock.name", "Fermeture des MP"),
      items: [
        docBlock(`${DMLOCK_DESC()}\n\n${i("iconWarning")} ${DMLOCK_WARN()}`),
        checkField(t("dmlock.state", "État des MP fermés"), [{ label: t("dmlock.option", "Fermer les messages privés du serveur") }]),
      ],
    }),
  };

  return {
    screens: {
      discon: discon(),
      disconCommand: discon(true),
      antispam,
      antispamSanctions,
      automod,
      imageFilter,
      serverRefs,
      files,
      honeypot: honeypot(),
      honeypotCommand: honeypot(true),
      slowmode,
      slowmodeChannel,
      dmlockCommand,
    },
    modals,
    actions: {
      "toggle:antispam": flip("antispam"),
      "toggle:antispamAdvanced": flip("antispamAdvanced"),
      "toggle:imageFilter": flip("imageFilter"),
      "toggle:serverRefs": flip("serverRefs"),
      "toggle:files": flip("files"),
      "toggle:filesDisguised": flip("filesDisguised"),
      "toggle:honeypot": flip("honeypot"),
      ...Object.fromEntries([5, 4, 3, 2, 1].map((n) => [`discon:level:${n}`, () => disconState.setLevel(n)])),
    },
  };
}

export const DMLOCK_DESC = () =>
  t(
    "dmlock.desc",
    "Configurez la fermeture des messages privés pour prévenir les tentatives de phishing ou d'arnaque.\nRaidProtect désactivera les messages privés en permanence jusqu'à que vous désactiviez cette protection. Nous utilisons la fonction \"Actions de cybersécurité de Discord\" (limité à 24h par Discord, étendue à toujours par RaidProtect)"
  );

export const DMLOCK_WARN = () =>
  t("dmlock.warn", "Seul les bots, les membres qui ont déjà échangé ou qui sont en ami et les staff pourront recevoir des MP avec ce mode.");
