import { useState } from "react";
import type { Component } from "../../types";
import type { ModalData } from "../../Modal";
import { t, i, btn, text, sep, row, section, container, type IconName } from "./kit";
import { selectField, textField } from "./general";
import { RO, type Part } from "./state";

/* Authentification Manager (/settings › Protection, ou /auth-settings) et
 * profil d'authentification du membre (/auth-profile). Ces écrans n'ont ni
 * fil d'Ariane ni rangée Support/Documentation. */

const GRADES = ["S", "A", "B", "C", "D", "E"] as const;
type Grade = (typeof GRADES)[number];
const rank = (g: Grade) => i(`securityRank${g}` as IconName);

const GRADE_LABELS: Record<Grade, string> = {
  S: "Passkey requis",
  A: "OTP requis",
  B: "PIN renforcé 8+",
  C: "PIN renforcé 6+",
  D: "PIN simple 6+",
  E: "PIN simple 4+",
};

export const gradeSelect = (label: string, current: Grade) =>
  selectField(
    label,
    GRADES.map((g) => ({ label: t(`grade.${g}`, GRADE_LABELS[g]), emoji: `securityRank${g}` as IconName, default: g === current }))
  );

const back = (id: string) => btn({ label: t("back", "Retour"), emoji: "iconPreviousWhite", id });

const pagination = () =>
  row(
    btn({ emoji: "iconButtonFirst", disabled: true }),
    btn({ emoji: "iconButtonPrevious", disabled: true }),
    btn({ label: "1/1", disabled: true }),
    btn({ emoji: "iconButtonNext", disabled: true }),
    btn({ emoji: "iconButtonLast", disabled: true })
  );

const empty = (label: string, emoji?: IconName) =>
  section(`-# ${t("auth.emptySlot", "Emplacement vide")}`, btn({ label, emoji, disabled: true }));

export function useAuthPart(): Part {
  const [tab, setTab] = useState<"roles" | "users" | "logs">("roles");

  const header = () => [
    text(`## ${i("iconAuthManager")} Authentification Manager`),
    sep(),
    section(
      [
        `### ${t("auth.serverConfig", "Configuration du serveur")}`,
        `${i("iconTime")} ${t("auth.duration", "Durée de session par défaut")} : **10m**`,
        `${i("iconGrade")} ${t("auth.minGrade", "Grade minimum par défaut")} : ${rank("A")}`,
        `${i("iconAMManager")} ${t("auth.managerGrade", "Grade minimum des gestionnaires")} : ${rank("A")}`,
        `${i("iconWebhook")} Webhook : *${t("auth.undefined", "non défini")}*`,
      ].join("\n"),
      btn({ label: t("edit", "Modifier"), style: 1, id: "modal:authConfig" })
    ),
    sep(),
  ];

  const tabs = (current: typeof tab) =>
    row(
      back("home:protection"),
      btn({ label: t("auth.roles", "Rôles"), emoji: "iconRole", id: "auth:tab:roles", disabled: current === "roles" }),
      btn({ label: t("auth.users", "Utilisateurs"), emoji: "iconUser", id: "auth:tab:users", disabled: current === "users" }),
      btn({ label: "Logs", emoji: "iconAuditLogs", id: "auth:tab:logs", disabled: current === "logs" }),
      ...(current === "logs" ? [] : [btn({ label: t("add", "Ajouter"), style: 1, id: current === "roles" ? "modal:authAddRole" : "modal:authAddUser" })])
    );

  const lines: Record<typeof tab, Component[]> = {
    roles: [
      section(`${RO("Administrateur")} ${rank("A")} • 30m • ${t("auth.nUsers2", "2 utilisateurs")}`, btn({ label: t("edit", "Modifier"), style: 1, id: "authRole" })),
      section(`${RO("Modérateur")} ${rank("C")} • 60m • ${t("auth.nUsers3", "3 utilisateurs")}`, btn({ label: t("edit", "Modifier"), style: 1, id: "authRole" })),
      empty(t("edit", "Modifier")),
      empty(t("edit", "Modifier")),
      empty(t("edit", "Modifier")),
    ],
    users: [
      section(`@Alice ${rank("S")} • 2 roles • ${t("auth.manager", "Gestionnaire")}`, btn({ label: t("auth.manage", "Gérer"), style: 1, id: "authUser" })),
      section(`@Bastien ${rank("A")} • 1 role`, btn({ label: t("auth.manage", "Gérer"), style: 1, id: "authUser" })),
      section(`@Chloé ${rank("C")} • 1 role`, btn({ label: t("auth.manage", "Gérer"), style: 1, id: "authUser" })),
      section(`@Dimitri ${rank("D")} • 1 role`, btn({ label: t("auth.manage", "Gérer"), style: 1, id: "authUser" })),
      empty(t("auth.manage", "Gérer")),
    ],
    logs: [
      section(`@Alice ${t("auth.ago4", "il y a 4 minutes")} ${t("auth.sessionGranted", "Session accordée")}`, btn({ style: 1, emoji: "iconViewWhite" })),
      section(`@Bastien ${t("auth.ago1h", "il y a 1 heure")} ${t("auth.sessionExpired", "Session expirée")}`, btn({ style: 1, emoji: "iconViewWhite" })),
      section(`@Chloé ${t("auth.ago2h", "il y a 2 heures")} ${t("auth.invited", "Invitation envoyée")}`, btn({ style: 1, emoji: "iconViewWhite" })),
      empty("", "iconViewWhite"),
      empty("", "iconViewWhite"),
    ],
  };

  const auth = (): Component[] => [container([...header(), tabs(tab), ...lines[tab], pagination()])];

  const authRole = (): Component[] => [
    container([
      text(
        `## ${RO("Administrateur")}\n\n${i("iconGrade")} ${t("auth.roleGrade", "Grade minimum")} : ${rank("A")}\n${i("iconTime")} ${t("auth.roleDuration", "Durée de session")} : **30m**\n${i("iconUser")} ${t("auth.assigned", "Utilisateurs assignés")} : **2**`
      ),
      sep(),
      row(
        back("auth"),
        btn({ label: t("edit", "Modifier"), style: 1, id: "modal:authEditRole" }),
        btn({ label: t("disable", "Désactiver") }),
        btn({ label: t("delete", "Supprimer"), style: 4 })
      ),
    ]),
  ];

  const authUser = (): Component[] => [
    container([
      text(`## @Chloé\n\n${i("iconGrade")} Grade ${rank("C")}\n${i("iconID")} \`112233445566778899\`\n${i("iconAMManager")} ${t("auth.manager", "Gestionnaire")} : **${t("no", "Non")}**`),
      sep(),
      text(`${i("iconWarning")} ${rank("A")} **Administrateur** (${t("auth.statusInvited", "Invité")})`),
      sep(),
      row({
        type: 3,
        custom_id: "auth-user-roles",
        placeholder: t("auth.rolesPh", "Sélectionner des rôles..."),
        options: [
          { label: "Administrateur", value: "a", description: t("auth.invitedDesc", "Invité •en attente de configuration auth"), emoji: { name: "securityRankA", id: "1471294402340327597" }, default: true },
          { label: "Modérateur", value: "m", emoji: { name: "securityRankC", id: "1471294404005331208" } },
        ],
      }),
      row(
        back("auth"),
        btn({ label: t("auth.promote", "Promouvoir gestionnaire"), style: 4, emoji: "iconAMManagerWhite" }),
        btn({ label: t("auth.removeUser", "Supprimer l'utilisateur"), style: 4, emoji: "iconCancel" })
      ),
    ]),
  ];

  const authManagerLogin = (): Component[] => [
    container([
      text(`## ${i("iconKey")} ${t("auth.loginTitle", "Authentification gestionnaire requise")}\n\n${t("auth.loginDesc", "Veuillez vous authentifier pour accéder au panneau de configuration Authentification.")}`),
      sep(),
      row(
        btn({ label: t("auth.withPin", "S'authentifier avec le PIN"), style: 1, emoji: "iconPin", id: "authPinPad" }),
        btn({ label: t("auth.withOtp", "S'authentifier avec l'OTP"), style: 1, emoji: "iconTime", id: "modal:authOtp" }),
        btn({ label: t("auth.withPasskey", "S'authentifier avec le Passkey"), style: 1, emoji: "iconKey" })
      ),
    ]),
  ];

  const digit = (n: number) => btn({ emoji: `icon${n}` as IconName });
  const authPinPad = (): Component[] => [
    container([
      text(`## ${t("auth.padTitle", "Authentification gestionnaire")}\n\n${t("auth.padDesc", "Entrez votre PIN en utilisant les boutons ci-dessous.")}`),
      sep(),
      text("-# ●●●○○○○○○○○○"),
      row(digit(7), digit(2), digit(9)),
      row(digit(4), digit(0), digit(6)),
      row(digit(1), digit(8), digit(3)),
      row(btn({ style: 4, emoji: "iconCancel" }), digit(5), btn({ style: 3, emoji: "iconValidate", disabled: true })),
      sep(),
      row(back("authManagerLogin")),
    ]),
  ];

  const authProfile = (): Component[] => [
    container([
      section(`## @Bastien  ${rank("A")}`, btn({ label: t("profile.forgot", "J'ai oublié mes auths"), style: 4 })),
      sep(),
      section(`## ${i("iconPin")} ${t("profile.pin", "Code PIN")}\n-# ${t("profile.reinforced", "Renforcé")}`, btn({ label: t("edit", "Modifier"), style: 1 })),
      section(`## ${i("iconTime")} ${t("profile.otp", "Code 2FA")}\n-# ${t("profile.configured", "Configuré")}`, btn({ label: t("edit", "Modifier"), style: 1 })),
      sep(),
      text(`## ${i("iconKey")} Passkeys`),
      row(btn({ label: t("profile.addPasskey", "Ajouter un Passkey"), style: 3 })),
      sep(),
      text(`-# ${t("profile.log1", "il y a 2 jours Activation de la 2FA")}\n-# ${t("profile.log2", "il y a 2 jours Ajout d'un code PIN")}`),
      row(btn({ label: t("profile.allLogs", "Voir tous les logs"), style: 1 })),
      sep(),
      text(`-# ${t("profile.gradeIs", "Votre Grade de Sécurité est")} ${rank("A")}, ${t("profile.hintA", "Ajoutez un Passkey pour atteindre le grade maximum.")}`),
    ]),
  ];

  const modals: Record<string, () => ModalData> = {
    authConfig: () => ({
      title: t("auth.configTitle", "Configuration Authentification du serveur"),
      items: [
        { type: "text", content: `-# Max : **8h** · **1d** ${t("auth.withPremium", "avec Premium")}` },
        textField(t("auth.duration", "Durée de session par défaut"), undefined, "10m"),
        gradeSelect(t("auth.minGrade", "Grade minimum par défaut"), "A"),
        gradeSelect(t("auth.managerGrade", "Grade minimum des gestionnaires"), "A"),
        textField(t("auth.webhook", "URL du Webhook (laisser vide pour supprimer)")),
      ],
    }),
    authAddRole: () => ({
      title: t("auth.addRoleTitle", "Ajouter un rôle Authentification"),
      items: [
        { type: "field", label: t("auth.discordRole", "Rôle Discord"), input: { kind: "role" } },
        gradeSelect(t("auth.securityGrade", "Grade de sécurité minimum"), "A"),
        textField(t("auth.durationMax", "Durée de session (max. 8h)"), undefined, "10m"),
        selectField(t("auth.strategy", "Choisir une stratégie"), [
          { label: t("auth.useAsIs", "Utiliser ce rôle tel quel"), description: t("auth.useAsIsDesc", "Le rôle sera utilisé directement comme rôle d'authentification."), emoji: "iconRole", default: true },
          { label: t("auth.split", "Créer un rôle de permissions séparé"), description: t("auth.splitDesc", "Un nouveau rôle avec les permissions est créé, ce rôle conserve son affichage."), emoji: "iconCreate" },
        ]),
      ],
    }),
    authAddUser: () => ({
      title: t("auth.addUserTitle", "Ajouter un utilisateur Authentification"),
      items: [
        { type: "field", label: t("auth.user", "Utilisateur"), input: { kind: "user" } },
        selectField(t("auth.authRole", "Rôle Authentification"), [
          { label: "Administrateur", emoji: "securityRankA" },
          { label: "Modérateur", emoji: "securityRankC" },
        ]),
      ],
    }),
    authEditRole: () => ({
      title: t("auth.editRoleTitle", "Modifier un rôle Authentification"),
      items: [
        gradeSelect(t("auth.securityGrade", "Grade de sécurité minimum"), "A"),
        { type: "text", content: `-# Max : **8h** · **1d** ${t("auth.withPremium", "avec Premium")}` },
        textField(t("auth.roleDuration", "Durée de session"), undefined, "30m"),
      ],
    }),
    authOtp: () => ({
      title: t("auth.otpTitle", "Authentification OTP gestionnaire"),
      items: [textField(t("auth.otpField", "Code à 6 chiffres de votre app"), "000000")],
    }),
  };

  return {
    screens: { auth, authRole, authUser, authManagerLogin, authPinPad, authProfile },
    modals,
    actions: {
      "auth:tab:roles": () => setTab("roles"),
      "auth:tab:users": () => setTab("users"),
      "auth:tab:logs": () => setTab("logs"),
    },
  };
}

