import type { Component } from "../../types";
import type { ModalData } from "../../Modal";
import {
  t, i, btn, text, sep, row, section, setting, heading, select, channelSelect, roleSelect,
  toggle, reset, edit, configure, createOne, custom, screen, type IconName,
} from "./kit";
import { docBlock, selectField, textField, checkField } from "./general";
import { CH, RO, type Ctx, type Part } from "./state";

/* Onglet Modération : Sanctions (Jail, Mute, noms), Doubles comptes, Logs,
 * Signalements, Transparence. */

const SANCTION_NAMES: Array<[IconName, string, string]> = [
  ["iconSanctionsBAN", "Bannissement", "banni"],
  ["iconSanctionsSOFTBAN", "Softban", "softban"],
  ["iconSanctionsUNBAN", "Débannissement", "débanni"],
  ["iconSanctionsKICK", "Expulsion", "expulsé"],
  ["iconSanctionsJAIL", "Emprisonnement", "emprisonné"],
  ["iconSanctionsUNJAIL", "Libération", "libéré"],
  ["iconSanctionsTIMEOUT", "Timeout", "timeout"],
  ["iconSanctionsUNTIMEOUT", "Untimeout", "untimeout"],
  ["iconSanctionsMUTE", "Mute", "mute"],
  ["iconSanctionsUNMUTE", "Unmute", "unmute"],
  ["iconSanctionsWARN", "Avertissement", "averti"],
];

export function moderationPart({ s, flip }: Ctx): Part {
  const enabled = t("enabled", "Activé");
  const disabled = t("disabled", "Désactivé");
  const onOff = (v: boolean) => (v ? enabled : disabled);

  const sanctions = (): Component[] =>
    screen({
      tab: "moderation",
      icon: "iconSanctions",
      title: t("sanctions.title", "Configuration des sanctions"),
      desc: t(
        "sanctions.desc",
        "Configurez les paramètres liés aux sanctions automatiques et à leur journalisation sur le serveur. Elle offre un contrôle précis sur les rôles appliqués, les seuils de sanction et la visibilité des actions de modération."
      ),
      accessory: toggle(s.sanctions, "toggle:sanctions"),
      crumbs: [{ label: "Sanctions" }],
      docs: "features/sanctions",
      body: [
        setting("iconSanctionsJAIL", "Jail", RO("Emprisonné"), btn({ label: t("edit", "Modifier"), emoji: "iconRoleWhite", id: "jail" })),
        setting(
          "iconSanctionsJAIL",
          t("sanctions.quarantine", "Quarantaine Discord synchronisée"),
          s.quarantineSync ? t("enabledF", "Activée") : t("disabledF", "Désactivée"),
          toggle(s.quarantineSync, "toggle:quarantineSync"),
          t(
            "sanctions.quarantineHint",
            "Un membre que l'AutoMod de Discord met en quarantaine (pseudo, tag de serveur) est mis en quarantaine avec le rôle de jail, et en sort quand Discord la lève. Seules les nouvelles quarantaines comptent."
          )
        ),
        setting("iconSanctionsMUTE", "Mute", RO("Muet"), btn({ label: t("edit", "Modifier"), emoji: "iconRoleWhite", id: "mute" })),
        sep(),
        setting("iconLogs", "Logs", CH("mod-logs"), btn({ label: t("edit", "Modifier"), emoji: "iconLogsWhite", id: "logsMod" })),
        setting("iconLogs", t("sanctions.passive", "Logs de modération passives"), onOff(s.passiveModlog), toggle(s.passiveModlog, "toggle:passiveModlog")),
        setting("iconView", t("sanctions.medias", "Afficher les médias"), onOff(s.showMedias), toggle(s.showMedias, "toggle:showMedias")),
        setting("iconSanctions", t("sanctions.privacy", "Confidentialité des Sanctions"), t("sanctions.privacyValue", "Avec les raisons"), edit("modal:sanctionsPrivacy", "iconSanctionsWhite")),
      ],
      rows: [
        row(
          btn({ label: t("export", "Exporter"), emoji: "iconExportWhite" }),
          btn({ label: t("import", "Importer"), emoji: "iconImportWhite" }),
          btn({ label: t("sanctions.names", "Noms des sanctions"), style: 1, emoji: "iconPremium", id: "sanctionNames" })
        ),
      ],
    });

  const jail = (): Component[] =>
    screen({
      tab: "moderation",
      icon: "iconSanctionsJAIL",
      title: t("sanctions.modTitle", "Configuration de la modération"),
      desc: t(
        "jail.desc",
        "Configurez le **rôle Jail** afin d'activer une sanction de modération par rôle, plus restrictive qu'un mute classique. Une fois configuré, ce rôle permet d'isoler un membre avec des permissions fortement limitées et débloque l'utilisation des commandes /jail et /tempjail."
      ),
      crumbs: [{ label: "Sanctions", id: "sanctions" }, { label: "Jail" }],
      docs: "features/sanctions#jail",
      body: [
        section(`### ${i("iconRole")} Jail`, createOne("modal:jailCreate")),
        roleSelect(t("jail.ph", "Role Jail (écrire pour chercher)"), [RO("Emprisonné")]),
        row(reset()),
        setting("iconChannelText", t("jail.channel", "Salon d'informations"), CH("accès-restreint"), btn({ label: t("jail.editChannel", "Modifier le salon"), style: 1, emoji: "iconSettingsWhite" })),
        sep(),
        heading("iconRole", t("jail.roles", "Gestion des rôles lors du jail"), t("jail.addDesc", "Le membre garde ses rôles, le rôle de jail est ajouté.")),
        select(t("jail.rolesPh", "Choisir le comportement lors du jail"), [
          { label: t("jail.add", "Ajouter le rôle de jail"), description: t("jail.addDesc", "Le membre garde ses rôles, le rôle de jail est ajouté."), emoji: "iconRole", default: true },
          { label: t("jail.replace", "Remplacer tous les rôles"), description: t("jail.replaceDesc", "Les rôles sont retirés puis restaurés à l'unjail."), emoji: "iconRole" },
        ]),
      ],
    });

  const mute = (): Component[] =>
    screen({
      tab: "moderation",
      icon: "iconSanctionsMUTE",
      title: t("sanctions.modTitle", "Configuration de la modération"),
      desc: t(
        "mute.desc",
        "Configurez le **rôle Mute** afin d'utiliser une sanction par rôle à la place du timeout Discord pour les durées prolongées. Lorsque la durée du mute dépasse le seuil défini, le bot attribuera automatiquement le rôle Mute au membre concerné au lieu d'appliquer un timeout Discord."
      ),
      crumbs: [{ label: "Sanctions", id: "sanctions" }, { label: "Mute" }],
      docs: "features/sanctions#mute",
      body: [
        section(`### ${i("iconRole")} ${t("mute.role", "Role Mute")}`, createOne()),
        roleSelect(t("mute.ph", "Role Mute (écrire pour chercher)"), [RO("Muet")]),
        row(reset()),
        sep(),
        heading(
          "iconTime",
          t("mute.threshold", "Seuil de Mute"),
          t("mute.thresholdHint", "Au-delà de cette durée, le rôle Mute remplace le timeout Discord. Zéro n'utilise jamais le timeout, et Discord plafonne celui-ci à 28 jours.")
        ),
        select(t("mute.thresholdPh", "Entrez le seuil"), [
          { label: t("mute.always", "Tout le temps"), emoji: "iconTime" },
          { label: t("oneHour", "1 heure"), emoji: "iconTime", default: true },
          { label: t("oneDay", "1 jour"), emoji: "iconTime" },
          { label: t("mute.extended", "Timeout étendu (=28 jours)"), emoji: "iconTime" },
          custom(),
        ]),
      ],
    });

  const sanctionNames = (): Component[] =>
    screen({
      tab: "moderation",
      icon: "iconPremium",
      title: t("names.title", "Personnaliser les noms des sanctions"),
      desc: t(
        "names.desc",
        "Personnalisez les noms affichés pour chaque type de sanction. Les noms personnalisés remplacent les traductions par défaut dans les logs, les recherches et les menus."
      ),
      crumbs: [{ label: "Sanctions", id: "sanctions" }, { label: t("sanctions.names", "Noms des sanctions") }],
      docs: "features/sanctions",
      body: [
        text(
          SANCTION_NAMES.map(([icon, name, verb]) =>
            name === "Avertissement"
              ? `${i(icon)} **${name}** : Carton Jaune (cartonné) ${i("iconCustomWhite")}`
              : `${i(icon)} **${name}** : ${name} (${verb})`
          ).join("\n")
        ),
        select(
          t("names.ph", "Sélectionner une sanction à personnaliser"),
          SANCTION_NAMES.map(([emoji, name]) => (name === "Avertissement" ? { label: "Carton Jaune", description: name, emoji } : { label: name, emoji }))
        ),
      ],
      rows: [
        row(
          btn({ label: t("export", "Exporter"), style: 1, emoji: "iconExportWhite" }),
          btn({ label: t("import", "Importer"), style: 1, emoji: "iconImportWhite" }),
          btn({ label: t("names.resetAll", "Réinitialiser tout"), style: 4 })
        ),
      ],
    });

  const alts = (): Component[] =>
    screen({
      tab: "moderation",
      icon: "iconLinks",
      title: t("alts.title", "Gestion des doubles comptes"),
      desc: t(
        "alts.desc",
        "Les comptes déclarés comme une même personne avec /alt partagent leurs sanctions restrictives : la sanction reste au nom du compte visé, les autres en reçoivent le statut, et la lever, par n'importe lequel d'entre eux, la lève pour tous. Choisissez comment chaque sanction s'étend."
      ),
      crumbs: [{ label: t("alts.name", "Doubles comptes") }],
      docs: "features/alt-accounts",
      body: [
        section(
          [
            `### ${i("iconSanctions")} ${t("alts.modes", "Sanctions des comptes liés")}`,
            ...([
              ["iconSanctionsBAN", "Bannissement"],
              ["iconSanctionsKICK", "Expulsion"],
              ["iconSanctionsMUTE", "Mute"],
              ["iconSanctionsJAIL", "Emprisonnement"],
              ["iconSanctionsTIMEOUT", "Timeout"],
            ] as Array<[IconName, string]>).map(([icon, name]) => `${i(icon)} ${name} : **${t("alts.now", "Tout de suite")}**`),
          ].join("\n"),
          edit("modal:altsModes", "iconSanctionsWhite")
        ),
        select(t("alts.allPh", "Tout régler sur…"), [
          { label: t("alts.now", "Tout de suite"), description: t("alts.nowDesc", "Chaque sanction s'étend aussitôt au groupe."), emoji: "iconSanctionsBAN" },
          { label: t("alts.trap", "Piège"), description: t("alts.trapDesc", "Chaque sanction ne vise que le compte choisi ; le kick, qui ne dure pas, ne change pas."), emoji: "iconView" },
          { label: disabled, description: t("alts.offDesc", "Plus aucune sanction ne s'étend aux comptes liés."), emoji: "iconToggleDisable" },
        ]),
        sep(),
        setting("iconAlert", t("alts.evasion", "Sanction de contournement"), t("alts.rest", "Reste de la sanction"), edit("modal:altsEvasion", "iconSanctionsWhite")),
        setting(
          "iconSanctionsJAIL",
          t("alts.single", "Un seul compte par personne"),
          disabled,
          toggle(false),
          t(
            "alts.singleHint",
            "Seul le compte principal de chaque groupe circule sur le serveur : les autres sont mis en quarantaine (rôle de jail), et en sortent d'eux-mêmes s'ils deviennent principaux ou sont retirés du groupe."
          )
        ),
      ],
    });

  const logs = (): Component[] =>
    screen({
      tab: "moderation",
      icon: "iconLogs",
      title: t("logs.title", "Configuration des Logs"),
      desc: t("logs.desc", "Configurez les **logs du bot** sur votre serveur Discord."),
      crumbs: [{ label: "Logs" }],
      docs: false,
      body: [
        section(`### ${i("iconChannelText")} ${t("logs.general", "Général")}`, createOne()),
        channelSelect(t("logs.generalPh", "Salon des logs Générales (écrire pour chercher)"), [CH("raidprotect-logs")]),
        section(`### ${i("iconChannelText")} ${t("logs.moderation", "Modération")}\n-# ${t("logs.fallback", "Laissé vide, ces logs vont dans le salon général.")}`, createOne()),
        channelSelect(t("logs.modPh", "Salon des logs de modération (écrire pour chercher)"), [CH("mod-logs")]),
        section(`### ${i("iconChannelText")} Captcha\n-# ${t("logs.fallback", "Laissé vide, ces logs vont dans le salon général.")}`, createOne()),
        channelSelect(t("logs.captchaPh", "Salon des logs Captcha (écrire pour chercher)"), [CH("raidprotect-logs")]),
        sep(),
        setting("iconLogs", t("sanctions.passive", "Logs de modération passives"), onOff(s.passiveModlog), toggle(s.passiveModlog, "toggle:passiveModlog")),
      ],
    });

  const logsMod = (): Component[] =>
    screen({
      tab: "moderation",
      title: t("logs.title", "Configuration des Logs"),
      desc: t("logs.modDesc", "Par défaut, les logs de modération sont dans le salon de logs de RaidProtect. Vous pouvez, si vous le souhaitez, sélectionner un autre salon."),
      crumbs: [{ label: "Logs", id: "logs" }, { label: t("logs.moderation", "Modération") }],
      docs: "features/moderation#logs",
      body: [section(`### ${i("iconChannelText")} ${t("logs.configured", "Salon configuré")}`, createOne())],
      rows: [channelSelect(t("logs.modPh", "Salon des logs de modération (écrire pour chercher)"), [CH("mod-logs")]), row(reset())],
    });

  const reports = (): Component[] =>
    screen({
      tab: "moderation",
      icon: "iconReport",
      title: t("reports.title", "Configuration du système de signalement"),
      desc: t(
        "reports.desc",
        "Activez le **système de signalement** pour permettre aux membres de **notifier facilement votre équipe** des situations problématiques."
      ),
      accessory: toggle(s.reports, "toggle:reports"),
      crumbs: [{ label: t("reports.name", "Signalements") }],
      docs: "features/reports",
      body: [
        setting("iconChannelText", t("reports.channel", "Réception des signalements"), CH("signalements"), edit("modal:reportChannel")),
        setting("iconRole", t("reports.role", "Rôle de notification"), RO("Modérateurs"), edit("modal:reportRole")),
        setting("iconReport", t("reports.notify", "Notification du signaleur"), t("reports.notify1", "Traitement seul"), edit("modal:reportNotify")),
        setting(
          "iconReport",
          t("reports.group", "Regroupement"),
          s.reportsGroup
            ? t("reports.groupOn", "Les signalements visant le même membre sont regroupés dans une seule alerte.")
            : t("reports.groupOff", "Chaque signalement crée sa propre alerte séparée."),
          toggle(s.reportsGroup, "toggle:reportsGroup")
        ),
        sep(),
        setting("iconPremium", t("reports.trusted", "Rôle de confiance"), disabled, btn({ label: t("edit", "Modifier"), emoji: "iconPremium" })),
        setting("iconReport", t("reports.bad", "Faux signaleurs"), t("reports.badValue", "5 · Notifier les modérateurs"), edit("modal:reportBad")),
      ],
    });

  const transparency = (): Component[] =>
    screen({
      tab: "moderation",
      icon: "iconSearch",
      title: t("transparency.name", "Transparence"),
      desc: t(
        "transparency.desc",
        "Publiez des récapitulatifs de modération périodiques et un modlog public pour que vos membres voient comment le serveur est modéré."
      ),
      crumbs: [{ label: t("transparency.name", "Transparence") }],
      docs: "features/transparency",
      body: [
        setting("iconSearch", t("transparency.recaps", "Récaps périodiques"), t("transparency.oneRecap", "1 récap"), configure("recaps", "iconSearchWhite")),
        setting("iconLogs", t("transparency.modlog", "Modlog public"), s.publicModlog ? CH("public-modlog") : disabled, configure("modlog", "iconLogsWhite")),
        setting("iconView", t("transparency.command", "Commande </transparency>"), onOff(s.transparency), toggle(s.transparency, "toggle:transparency")),
      ],
    });

  const modlog = (): Component[] =>
    screen({
      tab: "moderation",
      icon: "iconLogs",
      title: t("transparency.modlog", "Modlog public"),
      desc: t("modlog.desc", "Publie chaque action de modération dans un salon public. Choisissez ce qui est affiché et quelles sources sont incluses."),
      accessory: toggle(s.publicModlog, "toggle:publicModlog"),
      crumbs: [{ label: t("transparency.name", "Transparence"), id: "transparency" }, { label: t("transparency.modlog", "Modlog public") }],
      docs: "features/transparency#modlog",
      body: [
        section(`### ${i("iconChannelText")} ${t("modlog.channel", "Salon")}`, createOne()),
        channelSelect(t("modlog.channelPh", "Sélectionnez un salon"), [CH("public-modlog")]),
        sep(),
        heading("iconDocs", t("modlog.display", "Informations affichées")),
        select(t("modlog.displayPh", "Choisissez ce qui est affiché"), [
          { label: t("modlog.reason", "Raison"), emoji: "iconDocs", default: true },
          { label: t("modlog.moderator", "Modérateur"), emoji: "iconUser" },
          { label: t("modlog.duration", "Durée"), emoji: "iconTime" },
          { label: t("modlog.target", "Membre sanctionné"), emoji: "iconMembers" },
        ]),
        heading("iconSanctions", t("modlog.sources", "Sanctions publiées")),
        select(t("modlog.sourcesPh", "Choisissez quelles sanctions apparaissent"), [
          { label: t("modlog.human", "Manuelles (équipe)"), emoji: "iconUser", default: true },
          { label: t("modlog.auto", "Automatiques (RaidProtect)"), emoji: "iconBots" },
        ]),
      ],
    });

  const freeSlot = () => section(`> ${t("slowmode.free", "Emplacement libre.")}`, btn({ label: t("add", "Ajouter"), style: 3, emoji: "iconCreateWhite" }));

  const recaps = (): Component[] =>
    screen({
      tab: "moderation",
      icon: "iconSearch",
      title: t("transparency.recaps", "Récaps périodiques"),
      desc: t("recaps.desc", "Publie automatiquement un récapitulatif de modération agrégé dans un salon, selon une fréquence."),
      crumbs: [{ label: t("transparency.name", "Transparence"), id: "transparency" }, { label: t("transparency.recaps", "Récaps périodiques") }],
      docs: "features/transparency#recaps",
      body: [
        heading("iconSearch", t("recaps.configured", "Récaps configurés")),
        section(`${i("iconToggleEnable")} **${t("recaps.weekly", "Hebdomadaire")}** → ${CH("public-modlog")} ⭐`, btn({ label: t("edit", "Modifier"), emoji: "iconCustomWhite", id: "recap" })),
        freeSlot(),
        freeSlot(),
        freeSlot(),
        freeSlot(),
      ],
    });

  const recap = (): Component[] =>
    screen({
      tab: "moderation",
      icon: "iconSearch",
      title: t("recap.title", "Récap"),
      desc: t("recap.desc", "Configurez ce récap périodique."),
      accessory: toggle(s.recapFeed, "toggle:recapFeed"),
      crumbs: [
        { label: t("transparency.name", "Transparence"), id: "transparency" },
        { label: t("transparency.recaps", "Récaps périodiques"), id: "recaps" },
        { label: t("recap.title", "Récap") },
      ],
      docs: "features/transparency#recaps",
      body: [
        setting("iconDocs", t("recap.name", "Nom"), `${t("recaps.weekly", "Hebdomadaire")} #public-modlog`, btn({ label: t("recap.rename", "Renommer"), style: 1, emoji: "iconDocsWhite" })),
        setting(
          "iconTime",
          t("recap.schedule", "Horaire"),
          t("recap.at", "vers 08:00"),
          btn({ label: t("recap.schedule", "Horaire"), style: 1, emoji: "iconTimeWhite", id: "modal:recapSchedule" }),
          t("recap.tz", "Fuseau horaire du serveur : Europe/Paris (UTC+2)")
        ),
        sep(),
        heading("iconCalendar", t("recap.frequency", "Fréquence")),
        select(t("recap.frequencyPh", "Choisissez une fréquence"), [
          { label: t("recaps.weekly", "Hebdomadaire"), default: true },
          { label: t("recaps.biweekly", "Toutes les deux semaines") },
          { label: t("recaps.monthly", "Mensuel") },
          { label: t("recaps.quarterly", "Trimestriel") },
          { label: t("recaps.yearly", "Annuel") },
        ]),
        heading("iconChannelText", t("modlog.channel", "Salon")),
        channelSelect(t("modlog.channelPh", "Sélectionnez un salon"), [CH("public-modlog")]),
        heading("iconTag", "Mention"),
        roleSelect(t("recap.mentionPh", "Choisissez un rôle à mentionner")),
      ],
      rows: [
        row(
          btn({ label: t("recap.feed", "Alimenter /transparency"), emoji: "iconViewWhite", disabled: true }),
          btn({ label: t("delete", "Supprimer"), style: 4, emoji: "iconResetWhite" })
        ),
      ],
    });

  const ALT_SANCTIONS: Array<[string, Array<[string, string]>]> = [
    ["Bannissement", [
      [t("alts.now", "Tout de suite"), t("alts.banNow", "Tous les comptes liés sont bannis aussitôt, présents ou non.")],
      [t("alts.present", "Présents tout de suite, les autres à l'arrivée"), t("alts.banPresent", "Les comptes absents sont bannis s'ils rejoignent le serveur pendant le ban.")],
      [t("alts.trap", "Piège"), t("alts.banTrap", "Seul le compte visé ; un autre qui arrive ou écrit pendant ce temps est pris pour contournement.")],
      [disabled, t("alts.banOff", "La sanction ne vise que le compte choisi.")],
    ]],
    ["Expulsion", [
      [t("alts.now", "Tout de suite"), t("alts.kickNow", "Les comptes liés présents sur le serveur sont expulsés aussi.")],
      [disabled, t("alts.banOff", "La sanction ne vise que le compte choisi.")],
    ]],
    ...["Mute", "Emprisonnement", "Timeout"].map((n): [string, Array<[string, string]>] => [n, [
      [t("alts.now", "Tout de suite"), t("alts.roleNow", "Les comptes présents tout de suite, les autres à leur arrivée.")],
      [t("alts.trap", "Piège"), t("alts.banTrap", "Seul le compte visé ; un autre qui arrive ou écrit pendant ce temps est pris pour contournement.")],
      [disabled, t("alts.banOff", "La sanction ne vise que le compte choisi.")],
    ]]),
  ];

  const modals: Record<string, () => ModalData> = {
    sanctionsPrivacy: () => ({
      title: t("sanctions.privacy", "Confidentialité des Sanctions"),
      items: [
        {
          type: "text",
          content: t(
            "privacy.doc",
            "Configurez ce que voit un membre en consultant ses propres sanctions via la commande </mes-sanctions> ou le bouton **`Mes Sanctions`**.\n\n*Quel que soit le niveau sélectionné, **les modérateurs conservent un accès complet** à l'historique des sanctions via les outils de modération.*"
          ),
        },
        selectField(t("privacy.level", "Niveau d'accès"), [
          { label: disabled, description: t("privacy.l0", "Les utilisateurs ne peuvent pas consulter leurs sanctions."), emoji: "iconDisable" },
          { label: t("privacy.l1n", "Sanctions uniquement"), description: t("privacy.l1", "Les utilisateurs peuvent uniquement consulter leurs sanctions et le temps restant, si applicable."), emoji: "iconSanctions" },
          { label: t("privacy.l2n", "Avec les raisons"), description: t("privacy.l2", "Les utilisateurs peuvent consulter leurs sanctions et la raison."), emoji: "iconCustom", default: true },
          { label: t("privacy.l3n", "Avec les raisons et les modérateurs"), description: t("privacy.l3", "Les utilisateurs peuvent tout consulter sur leurs sanctions."), emoji: "iconUser" },
        ]),
      ],
    }),
    jailCreate: () => ({
      title: t("jail.createTitle", "Créer un rôle Jail"),
      items: [
        docBlock(t("jail.createDoc", "Une fois créé, la permission de voir les salons sera retirée sur ce rôle.")),
        textField(t("jail.roleName", "Nom du rôle"), undefined, "Emprisonné"),
        {
          type: "text",
          content: t(
            "jail.createHint",
            "Si vous sélectionnez un salon, il sera utilisé comme salon d'informations pour le rôle Jail. Sinon, un salon sera créé automatiquement à moins que vous enleviez complètement le texte du deuxième champ."
          ),
        },
        { type: "field", label: t("jail.existing", "Salon d'informations existant"), input: { kind: "channel", placeholder: t("jail.existingPh", "Sélectionner un salon (optionnel)") } },
        textField(t("jail.newChannel", "Ou créer un nouveau salon"), undefined, "accès-restreint"),
      ],
    }),
    reportChannel: () => ({
      title: t("reports.channel", "Réception des signalements"),
      items: [
        docBlock(t("reports.channelDoc", "Configurez le **salon** dans lequel les **notifications des signalements** seront envoyés.")),
        { type: "field", label: t("reports.channel", "Réception des signalements"), input: { kind: "channel", values: [CH("signalements")] } },
        checkField(t("reports.autoCreate", "Création automatique"), [{ label: t("reports.createChannel", "Créer un salon pour moi") }]),
      ],
    }),
    reportRole: () => ({
      title: t("reports.role", "Rôle de notification"),
      items: [
        docBlock(t("reports.roleDoc", "Configurez le **rôle qui sera notifié** lorsque d'un **nouveau signalement** sera reçu. De manière générale, un rôle modérateur.")),
        { type: "field", label: t("reports.role", "Rôle de notification"), description: t("reports.roleHint", "Choisissez un rôle, ou cochez une mention ci-dessous."), input: { kind: "role", values: [RO("Modérateurs")] } },
        checkField(t("reports.otherMention", "Autre mention"), [{ label: "@everyone" }, { label: "@here" }, { label: t("reports.createRole", "Créer un rôle pour moi") }]),
      ],
    }),
    reportNotify: () => ({
      title: t("reports.notify", "Notification du signaleur"),
      items: [
        docBlock(t("reports.notifyDoc", "Choisissez **ce que reçoivent en DM** les membres ayant signalé, une fois leur signalement traité.")),
        selectField(
          t("reports.notify", "Notification du signaleur"),
          [
            { label: disabled, description: t("reports.n0", "Les signaleurs ne reçoivent aucune notification."), emoji: "iconDisable" },
            { label: t("reports.notify1", "Traitement seul"), description: t("reports.n1", "On indique au signaleur que son signalement a été traité."), emoji: "iconReport", default: true },
            { label: t("reports.notify2", "Avec l'issue"), description: t("reports.n2", "On indique si le signalement a été accepté ou refusé."), emoji: "iconChecking" },
            { label: t("reports.notify3", "Avec le modérateur"), description: t("reports.n3", "On indique aussi quel modérateur a traité le signalement."), emoji: "iconUser" },
          ],
          undefined,
          t("reports.notifyPh", "Niveau de notification")
        ),
      ],
    }),
    reportBad: () => ({
      title: t("reports.badTitle", "Réputation des signaleurs"),
      items: [
        docBlock(
          t(
            "reports.badDoc",
            "Agir sur les membres dont les signalements sont régulièrement refusés. Définissez le seuil de signalements refusés, la fenêtre de calcul, et ce qui se passe une fois le seuil atteint."
          )
        ),
        selectField(
          t("reports.threshold", "Seuil"),
          [{ label: disabled, emoji: "iconDisableWhite" }, ...["3", "5", "6", "10", "15"].map((n) => ({ label: n, emoji: "iconWarning" as IconName, default: n === "5" }))],
          t("reports.thresholdHint", "Nombre de signalements refusés qui déclenche l'action.")
        ),
        selectField(
          t("reports.window", "Fenêtre"),
          ["7", "14", "30", "60", "90"].map((n) => ({ label: `${n} jours`, emoji: "iconTime" as IconName, default: n === "30" })),
          t("reports.windowHint", "Période sur laquelle les signalements refusés sont comptés.")
        ),
        selectField(
          "Action",
          [
            { label: t("reports.notifyMods", "Notifier les modérateurs"), emoji: "iconAlert", default: true },
            { label: t("reports.block", "Bloquer automatiquement"), emoji: "iconBlock" },
            { label: t("reports.sanction", "Sanctionner automatiquement"), emoji: "iconSanctions" },
            { label: t("reports.both", "Bloquer et sanctionner"), emoji: "iconRestricted" },
          ],
          t("reports.actionHint", "Ce qui arrive au membre une fois le seuil atteint.")
        ),
        selectField(
          "Sanction",
          [
            { label: "Avertissement", emoji: "iconSanctionsWARN", default: true },
            { label: "Timeout", emoji: "iconSanctionsTIMEOUT" },
            { label: "Mute", emoji: "iconSanctionsMUTE" },
            { label: "Expulsion", emoji: "iconSanctionsKICK" },
            { label: "Bannissement", emoji: "iconSanctionsBAN" },
          ],
          t("reports.sanctionHint", "Sanction appliquée quand l'action sanctionne le signaleur.")
        ),
      ],
    }),
    recapSchedule: () => ({
      title: t("recap.scheduleTitle", "Horaire de publication"),
      items: [
        {
          type: "text",
          content: t(
            "recap.scheduleDoc",
            "Choisissez l'heure de publication. L'heure choisie est locale, le fuseau horaire est réglé sur la page générale des paramètres.\nPublié dans une plage de 12h à partir de votre heure. Le premium resserre à 1h près."
          ),
        },
        selectField(
          t("recap.hour", "Heure de publication"),
          Array.from({ length: 24 }, (_, h) => ({ label: `${String(h).padStart(2, "0")}:00`, default: h === 8 })),
          undefined,
          t("recap.hourPh", "Choisissez l'heure (locale)")
        ),
      ],
    }),
    altsModes: () => ({
      title: t("alts.modes", "Sanctions des comptes liés"),
      items: ALT_SANCTIONS.map(([name, choices]) =>
        selectField(
          name,
          choices.map(([label, description], n) => ({
            label,
            description,
            emoji: (label === disabled ? "iconToggleDisable" : label === t("alts.trap", "Piège") ? "iconView" : n === 1 && name === "Bannissement" ? "iconUser" : "iconSanctionsBAN") as IconName,
            default: n === 0,
          }))
        )
      ),
    }),
    altsEvasion: () => ({
      title: t("alts.evasion", "Sanction de contournement"),
      items: [
        docBlock(
          t(
            "alts.evasionDoc",
            "Ce que reçoit un compte lié pris en mode piège : il arrive ou écrit pendant la sanction de son groupe.\n\n**Reste de la sanction** : il partage la sanction du groupe jusqu'à sa fin, sans sanction à son nom.\n**Une sanction** : elle est posée à son nom, avec sa propre durée, et ne se lève pas avec le groupe."
          )
        ),
        selectField(
          "Sanction",
          [
            { label: t("alts.rest", "Reste de la sanction"), description: t("alts.restDesc", "Il partage la sanction du groupe jusqu'à sa fin."), emoji: "iconLinks", default: true },
            { label: "Bannissement", emoji: "iconSanctionsBAN" },
            { label: "Expulsion", emoji: "iconSanctionsKICK" },
            { label: "Mute", emoji: "iconSanctionsMUTE" },
            { label: "Emprisonnement", emoji: "iconSanctionsJAIL" },
            { label: "Timeout", emoji: "iconSanctionsTIMEOUT" },
          ],
          undefined,
          t("alts.sanctionPh", "Choisir la sanction")
        ),
        textField(t("honeypot.duration", "Durée"), undefined, undefined, t("alts.durationHint", "Par exemple 1h, 3j, 2w. Vide : définitif (obligatoire pour un timeout, 28 jours au plus).")),
      ],
    }),
  };

  return {
    screens: { sanctions, jail, mute, sanctionNames, alts, logs, logsMod, reports, transparency, modlog, recaps, recap },
    modals,
    actions: {
      "toggle:sanctions": flip("sanctions"),
      "toggle:quarantineSync": flip("quarantineSync"),
      "toggle:passiveModlog": flip("passiveModlog"),
      "toggle:showMedias": flip("showMedias"),
      "toggle:reports": flip("reports"),
      "toggle:reportsGroup": flip("reportsGroup"),
      "toggle:transparency": flip("transparency"),
      "toggle:publicModlog": flip("publicModlog"),
      "toggle:recapFeed": flip("recapFeed"),
    },
  };
}
