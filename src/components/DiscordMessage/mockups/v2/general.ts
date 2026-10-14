import type { ModalData, ModalItem } from "../../Modal";
import { t, i, opts, type Opt } from "./kit";
import type { Part } from "./state";

/* Onglet Général : chaque réglage s'édite dans une modale. */

export const docBlock = (content: string): ModalItem => ({
  type: "text",
  content: `### ${i("iconDocs")} Documentation\n${content}`,
});

export const selectField = (label: string, list: Opt[], description?: string, placeholder?: string): ModalItem => ({
  type: "field",
  label,
  description,
  input: { kind: "select", placeholder, options: opts(list) },
});

export const textField = (label: string, placeholder?: string, value?: string, description?: string, paragraph?: boolean): ModalItem => ({
  type: "field",
  label,
  description,
  input: { kind: "text", placeholder, value, paragraph },
});

export const checkField = (label: string, options: Array<{ label: string; description?: string; checked?: boolean }>, description?: string): ModalItem => ({
  type: "field",
  label,
  description,
  input: { kind: "checkbox", options },
});

const LANGS: Array<[string, Opt["emoji"]]> = [
  ["English", "iconLanguageEN"],
  ["Français", "iconLanguageFR"],
  ["Español", "iconLanguageES"],
  ["Deutsch", "iconLanguageDE"],
  ["Português", "iconLanguagePT"],
  ["Italiano", "iconLanguageIT"],
  ["Türkçe", "iconLanguageTR"],
  ["Tiếng Việt", "iconLanguageVI"],
  ["日本語", "iconLanguageJA"],
  ["简体中文", "iconLanguagezh_CN"],
  ["繁體中文", "iconLanguagezh_TW"],
];

export const langModal = (): ModalData => ({
  title: t("lang.name", "Langue"),
  items: [
    docBlock(
      t(
        "lang.doc",
        "La langue choisie s'applique aux messages publics de RaidProtect sur le serveur : logs, captcha, signalements. Les réponses privées et temporaires restent dans la langue de chaque membre.\n\n**Suivre la langue du serveur** reprend la langue principale définie dans les paramètres Communauté de Discord."
      )
    ),
    selectField(t("lang.field", "Langue sélectionnée"), [
      { label: t("lang.follow", "Suivre la langue du serveur"), description: t("lang.current", "Actuellement : Français"), emoji: "iconLanguage" },
      ...LANGS.map(([label, emoji]) => ({ label, emoji, default: label === "Français" })),
    ]),
  ],
});

export const prefixModal = (): ModalData => ({
  title: t("prefix.name", "Commandes par messages"),
  items: [
    docBlock(
      t(
        "prefix.doc",
        "Les commandes par messages se lancent avec un préfixe, par exemple `?ban`. Choisissez-le dans la liste ou saisissez le vôtre ; **Désactivé** les coupe.\n\nCommandes disponibles : `raidmode`, `ban`, `tempban`, `unban`, `kick`, `timeout`, `untimeout`, `warn`, `slowmode`, `lock`, `unlock`, `userinfo`, `clear`."
      )
    ),
    selectField(t("prefix.field", "Préfixe"), [
      { label: t("disabled", "Désactivé"), emoji: "iconDisable" },
      { label: "?", emoji: "iconPrefix", default: true },
      { label: "!", emoji: "iconPrefix" },
      { label: ">", emoji: "iconPrefix" },
      { label: "$", emoji: "iconPrefix" },
    ]),
    textField(t("prefix.custom", "Préfixe personnalisé"), undefined, undefined, t("prefix.customHint", "Prioritaire sur la liste. Trois caractères au plus.")),
    checkField(t("prefix.options", "Options"), [
      {
        label: t("prefix.deleteInvoke", "Suppression à l'invocation"),
        description: t("prefix.deleteInvokeHint", "Supprime le message qui contient la commande dès qu'elle est lue."),
        checked: true,
      },
    ]),
  ],
});

export const permissionsModal = (): ModalData => ({
  title: t("perms.title", "Permissions des commandes"),
  items: [
    docBlock(
      t(
        "perms.doc",
        "Les permissions des commandes RaidProtect se configurent directement dans Discord : **Paramètres du serveur → Intégrations → RaidProtect**.\n\nVous pouvez y autoriser ou interdire chaque commande par **rôle**, **membre** ou **salon**. Discord les applique aux **commandes slash**. Cochez l'option ci-dessous pour que RaidProtect les applique aussi aux **commandes par messages** et aux sanctions proposées par **Sanctionner** (clic droit sur un membre) : un membre autorisé à utiliser `/ban` pourra bannir depuis ce menu."
      ) +
        `\n\n${i("iconWarning")} ` +
        t("perms.mobile", "**Ce menu n'est disponible que sur l'application PC / Web de Discord**, il est inaccessible depuis mobile.")
    ),
    checkField(t("perms.option", "Option"), [
      {
        label: t("perms.mirrorOption", "Appliquer les permissions des intégrations"),
        description: t("perms.mirrorHint", "Valent aussi pour les commandes par messages et les sanctions proposées par Sanctionner."),
        checked: true,
      },
    ]),
  ],
});

const OFFSETS = [
  "UTC+12 (Tarawa)", "UTC+11 (Sydney, Nouméa)", "UTC+10 (Brisbane)", "UTC+9 (Tokyo)", "UTC+8 (Pékin)",
  "UTC+7 (Bangkok)", "UTC+6 (Dacca)", "UTC+5 (Karachi)", "UTC+4 (Dubaï)", "UTC+3 (Moscou)",
  "UTC+2 (Paris, Berlin, Johannesburg)", "UTC+1 (Londres, Lagos)", "UTC+0 (Reykjavik)", "UTC-1 (Cap-Vert)",
  "UTC-2 (Fernando de Noronha)", "UTC-3 (São Paulo)", "UTC-4 (New York, Caracas)", "UTC-5 (Chicago, Lima)",
  "UTC-6 (Denver, Mexico)", "UTC-7 (Los Angeles, Phoenix)", "UTC-8 (Anchorage, Pitcairn)", "UTC-9 (Gambier)",
  "UTC-10 (Honolulu)", "UTC-11 (Pago Pago)",
];

export const timezoneModal = (): ModalData => ({
  title: t("timezone.name", "Fuseau horaire"),
  items: [
    {
      type: "text",
      content: t(
        "timezone.doc",
        "Choisissez votre décalage UTC, ou saisissez une timezone (ex. Europe/Paris) pour gérer l'heure d'été automatiquement."
      ),
    },
    selectField("Fuseau (UTC)", OFFSETS.map((label) => ({ label })), undefined, t("timezone.placeholder", "Choisissez votre décalage UTC")),
    textField(
      t("timezone.custom", "Timezone personnalisée (optionnel)"),
      "Europe/Paris",
      "Europe/Paris",
      t("timezone.customHint", "Prioritaire sur le décalage UTC, gère l'heure d'été. Ex. Europe/Paris, America/New_York.")
    ),
  ],
});

export function generalPart(): Part {
  return {
    screens: {},
    modals: { lang: langModal, prefix: prefixModal, permissions: permissionsModal, timezone: timezoneModal },
  };
}
