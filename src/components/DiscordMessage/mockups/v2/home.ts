import type { Component } from "../../types";
import {
  t, i, btn, sep, row, section, container, setting, configure, edit, toggle,
  TAB_LABEL, type Tab, type IconName,
} from "./kit";
import { CH, RO, type Ctx, type Part } from "./state";

/* Accueil de /settings : en-tête, 5 onglets, réglages de l'onglet. */

const TABS: Tab[] = ["general", "arrivals", "protection", "moderation", "utilities"];

function tabRows(tab: Tab, { s, flip }: Ctx): Component[] {
  const disabled = t("disabled", "Désactivé");
  const enabled = t("enabled", "Activé");
  const line = (icon: IconName, name: string, value: string | string[], acc: Component, hint?: string) =>
    setting(icon, name, value, acc, hint);

  switch (tab) {
    case "general":
      return [
        line("iconLanguage", t("lang.name", "Langue"), "Français", edit("modal:lang", "iconLanguageWhite")),
        line("iconPrefix", t("prefix.name", "Commandes par messages"), "`?`", edit("modal:prefix", "iconPrefixWhite"), t("prefix.deleteInvoke", "Suppression à l'invocation")),
        line("iconKey", "Permissions", t("perms.mirror", "Intégrations appliquées partout"), edit("modal:permissions", "iconKeyWhite")),
        line("iconTime", t("timezone.name", "Fuseau horaire"), "Europe/Paris (UTC+2)", edit("modal:timezone", "iconTimeWhite")),
      ];
    case "arrivals":
      return [
        line("iconAntiraid", "Auto RaidMode", s.antiraid ? t("antiraid.value", "10 membres / 10 secondes") : disabled, configure("antiraid")),
        line("iconCaptcha", "Captcha", [CH("vérification"), RO("Non vérifié")], configure("captcha")),
        line("iconCalendar", t("minage.name", "Âge minimum du compte"), t("oneDay", "1 jour"), configure("minage")),
        line("iconRole", t("autorole.name", "Rôles automatiques"), RO("Membre"), configure("autorole")),
        line("iconChannelText", t("welcome.name", "Message de bienvenue"), s.welcome ? CH("bienvenue") : disabled, configure("welcome")),
      ];
    case "protection":
      return [
        line("iconDISCON", "DISCON", t("discon.value", "Niveau de danger du serveur, piloté par votre équipe."), configure("discon")),
        line("iconAntispam", "Anti-spam", s.antispam ? enabled : disabled, configure("antispam")),
        line("iconFilter", "Automod", t("automod.value", "Images"), configure("automod"), t("automod.hint", "Filtre les contenus reconnus comme des arnaques")),
        line("iconHoneypot", "HoneyPot", s.honeypot ? CH("ne-pas-ecrire") : disabled, configure("honeypot")),
        line("iconSlowmode", t("slowmode.name", "Slowmode préventif"), disabled, configure("slowmode", "iconPremium")),
        line("iconAuthManager", "Authentification Manager", t("auth.value", "Rôles temporaires à validation, sessions et journal des accès."), configure("auth")),
        line("iconDmlock", t("dmlock.name", "Fermeture des MP"), t("dmlock.off", "Désactivée"), edit("modal:dmlock", "iconDmlockWhite")),
      ];
    case "moderation":
      return [
        line("iconSanctions", "Sanctions", s.sanctions ? enabled : disabled, configure("sanctions")),
        line("iconLogs", "Logs", [`${t("logs.general", "Général")} ${CH("raidprotect-logs")}`, `${t("logs.moderation", "Modération")} ${CH("mod-logs")}`, `Captcha ${CH("raidprotect-logs")}`], configure("logs")),
        line("iconReport", t("reports.name", "Signalements"), s.reports ? `${CH("signalements")} · ${RO("Modérateurs")}` : disabled, configure("reports")),
        line("iconSearch", t("transparency.name", "Transparence"), s.transparency ? enabled : disabled, configure("transparency"), t("transparency.hint", "Récapitulatifs périodiques et modlog public.")),
      ];
    case "utilities":
      return [
        line("iconTag", t("tagrole.name", "Rôle de Tag"), RO("Tag"), configure("tagrole")),
        line(
          "iconLocking",
          t("lockrenaming.name", "Verrouillage de salon"),
          s.lockRenaming
            ? t("lockrenaming.on", "Ajoute 🔒 au nom d'un salon verrouillé avec </lock>, et le retire avec </unlock>. On voit l'état du salon depuis la liste.")
            : t("lockrenaming.off", "N'ajoute **pas** 🔒 au nom des salons verrouillés avec </lock>."),
          toggle(s.lockRenaming, "toggle:lockRenaming")
        ),
        line("iconRole", t("onduty.name", "Rôle en service"), RO("En service"), configure("onduty")),
        line(
          "iconTime",
          t("messagecache.name", "Mise en cache des messages"),
          enabled,
          toggle(true, "toggle:messageCache", true),
          t("messagecache.forced", "Activée par l'antispam ou les signalements, qui lisent les messages. Ce que RaidProtect conserve : </privacy>.")
        ),
      ];
  }
}

export function homePart(ctx: Ctx): Part {
  const home = (tab: Tab) => (): Component[] => [
    container([
      section(
        `## ${i("iconSettings")} Configuration\n-# RaidProtect v3.5.0\n\n${t(
          "home.desc",
          "Les réglages de RaidProtect pour ce serveur. Pour commencer, regardez **Arrivées** (captcha, anti-raid) et **Modération** (salon de logs, sanctions). Tout changement s'applique immédiatement."
        )}`,
        btn({ label: "Changelog", emoji: "iconBookOpen" })
      ),
      row(
        ...TABS.map((k) =>
          k === tab
            ? btn({ label: TAB_LABEL[k](), style: 1, emoji: "iconFolderOpenWhite", disabled: true })
            : btn({ label: TAB_LABEL[k](), emoji: "iconFolderBlurple", id: `home:${k}` })
        )
      ),
      sep(),
      ...tabRows(tab, ctx),
      sep(),
      row(
        btn({ label: t("support", "Serveur Support"), style: 5, emoji: "iconSupportWhite", url: "https://discord.gg/raidprotect" }),
        btn({ label: "Documentation", style: 5, emoji: "iconDocsWhite", url: "https://raidprotect.bot/docs" }),
        btn({ label: t("customize", "Personnaliser"), style: 1, emoji: "iconPremium", id: "customize" })
      ),
    ]),
  ];

  return {
    screens: Object.fromEntries(TABS.map((k) => [`home:${k}`, home(k)])),
    actions: {
      "toggle:lockRenaming": ctx.flip("lockRenaming"),
    },
  };
}

