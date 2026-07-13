import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";
import concept from "./concept.module.css";

/* Mockup du menu principal /settings, répliqué depuis le rendu réel du bot
 * (embed + rangées de boutons, emojis officiels via le CDN Discord). */

const E = (id: string) => `![](https://cdn.discordapp.com/emojis/${id}.webp)`;

export default function SettingsMockup() {
  const message: DiscordMessageData = {
    embeds: [
      {
        color: 0xd35f5f,
        title: translate({ id: "mockup.settings.title", message: "Menu principal de configuration" }),
        description: [
          translate({
            id: "mockup.settings.desc1",
            message: "Ce menu vous permet de visualiser, ajuster ou personnaliser les fonctionnalités !",
          }),
          "",
          translate({
            id: "mockup.settings.desc2",
            message:
              "Chaque catégorie présente une liste d'options modifiables sous forme de boutons ou menus déroulants. Utilisez les boutons ci-dessous pour configurer les différentes fonctionnalités.",
          }),
        ].join("\n"),
        fields: [
          {
            name: `${E("1398382614800367637")} ${translate({ id: "mockup.settings.language", message: "Langue" })}`,
            value: `> ${translate({ id: "mockup.settings.languageValue", message: "Français" })}`,
            inline: true,
          },
          {
            name: `${E("1398382644328403004")} ${translate({ id: "mockup.settings.prefix", message: "Préfixe" })}`,
            value: `> ${translate({ id: "mockup.settings.disabled", message: "Désactivé" })}`,
            inline: true,
          },
          {
            name: `${E("1398382518885159173")} Auto RaidMode`,
            value: `> ${translate({ id: "mockup.settings.raidmodeValue", message: "10 membres / 10 secondes" })}`,
            inline: true,
          },
          {
            name: `${E("1398382621918236828")} ${translate({ id: "mockup.settings.locking", message: "Verrouillage de salon" })}`,
            value: `> ${translate({ id: "mockup.settings.lockingValue", message: "Ne renomme pas avec le cadenas" })}`,
          },
          {
            name: `${E("1398382544038269019")} Captcha`,
            value: `> ${translate({ id: "mockup.settings.disabled", message: "Désactivé" })}`,
            inline: true,
          },
          {
            name: `${E("1398382537965043838")} ${translate({ id: "mockup.settings.minage", message: "Âge Minimum" })}`,
            value: `> ${translate({ id: "mockup.settings.minageValue", message: "2 heures" })}`,
            inline: true,
          },
          {
            name: `${E("1398382523175796887")} Anti-spam`,
            value: `> ${translate({ id: "mockup.settings.enabled", message: "Activé" })}`,
            inline: true,
          },
          {
            name: `${E("1398382626099695627")} Logs`,
            value: [
              translate({ id: "mockup.settings.logsGeneral", message: "Général" }),
              "> #raidprotect-logs",
              translate({ id: "mockup.settings.logsModeration", message: "Modération" }),
              "> #raidprotect-logs",
              "Captcha",
              "> #raidprotect-logs",
            ].join("\n"),
            inline: true,
          },
          {
            name: `${E("1398382664276246550")} ${translate({ id: "mockup.settings.reports", message: "Signalements" })}`,
            value: "> #signalements\n> @here",
            inline: true,
          },
          {
            name: `${E("1398382705472962671")} ${translate({ id: "mockup.settings.tagrole", message: "Rôle de Tag" })}`,
            value: `> ${translate({ id: "mockup.settings.disabled", message: "Désactivé" })}`,
            inline: true,
          },
          {
            name: `${E("1398382582584049815")} ${translate({ id: "mockup.settings.dmlock", message: "Fermeture des MP" })}`,
            value: `> ${translate({ id: "mockup.settings.enabled", message: "Activé" })}`,
          },
        ],
        footer: { text: "RaidProtect v3.4.0 • Configuration" },
      },
    ],
    components: [
      {
        type: 1,
        components: [
          { type: 2, style: 2, label: translate({ id: "mockup.settings.language", message: "Langue" }), custom_id: "s-language", emoji: { name: "iconLanguageWhite", id: "1398382617258098828" } },
          { type: 2, style: 2, label: translate({ id: "mockup.settings.prefix", message: "Préfixe" }), custom_id: "s-prefix", emoji: { name: "iconPrefixWhite", id: "1398382647025336351" } },
          { type: 2, style: 2, label: "Permissions", custom_id: "s-perms", emoji: { name: "iconKeyWhite", id: "1473631642969964771" } },
          { type: 2, style: 1, label: translate({ id: "mockup.settings.lockEmoji", message: "Cadenas sur les salons verrouillés" }), custom_id: "s-lock-emoji", emoji: { name: "iconToggleDisable", id: "1398382718827364475" } },
        ],
      },
      {
        type: 1,
        components: [
          { type: 2, style: 2, label: "Auto RaidMode", custom_id: "s-raidmode", emoji: { name: "iconAntiraidWhite", id: "1398382520629727284" } },
          { type: 2, style: 2, label: "Captcha", custom_id: "s-captcha", emoji: { name: "iconCaptchaWhite", id: "1398382553169264766" } },
          { type: 2, style: 2, label: translate({ id: "mockup.settings.minage", message: "Âge Minimum" }), custom_id: "s-minage", emoji: { name: "iconCalendarWhite", id: "1398382540540350565" } },
          { type: 2, style: 2, label: "Anti-spam", custom_id: "s-antispam", emoji: { name: "iconAntispamWhite", id: "1398382524824027291" } },
          { type: 2, style: 2, label: "HoneyPot", custom_id: "s-honeypot", emoji: { name: "iconHoneypotWhite", id: "1499431126647701514" } },
        ],
      },
      {
        type: 1,
        components: [
          { type: 2, style: 2, label: "Sanctions", custom_id: "s-sanctions", emoji: { name: "iconSanctionsWhite", id: "1398382681439604747" } },
          { type: 2, style: 2, label: "Logs", custom_id: "s-logs", emoji: { name: "iconLogsWhite", id: "1398382628599763125" } },
          { type: 2, style: 2, label: translate({ id: "mockup.settings.reports", message: "Signalements" }), custom_id: "s-reports", emoji: { name: "iconReportWhite", id: "1398382666675650600" } },
          { type: 2, style: 2, label: translate({ id: "mockup.settings.transparency", message: "Transparence" }), custom_id: "s-transparency", emoji: { name: "iconSearchWhite", id: "1409623284755988632" } },
        ],
      },
      {
        type: 1,
        components: [
          { type: 2, style: 2, label: translate({ id: "mockup.settings.tagrole", message: "Rôle de Tag" }), custom_id: "s-tagrole", emoji: { name: "iconTagWhite", id: "1398382707284644032" } },
          { type: 2, style: 2, label: translate({ id: "mockup.settings.dmlock", message: "Fermeture des MP" }), custom_id: "s-dmlock", emoji: { name: "iconDmlockWhite", id: "1398382584584474634" } },
          { type: 2, style: 2, label: "Authentification Manager", custom_id: "s-auth", emoji: { name: "iconAuthManagerWhite", id: "1473631640646320230" } },
        ],
      },
      {
        type: 1,
        components: [
          { type: 2, style: 2, label: translate({ id: "mockup.settings.support", message: "Serveur Support" }), custom_id: "s-support", emoji: { name: "iconSupportWhite", id: "1398382703111438428" } },
          { type: 2, style: 2, label: "Documentation", custom_id: "s-docs", emoji: { name: "iconDocsWhite", id: "1398382589227565148" } },
          { type: 2, style: 2, label: "Changelog", custom_id: "s-changelog", emoji: { name: "iconHeart", id: "1398382606420148350" } },
          { type: 2, style: 1, label: translate({ id: "mockup.settings.customize", message: "Personnaliser" }), custom_id: "s-customize", emoji: { name: "iconPremium", id: "1483848678656573460" } },
        ],
      },
    ],
  };

  return (
    <div className={`${concept.animWrap} ${concept.dmWrap} ${concept.cfg}`}>
      <div className={concept.tight}>
        <DiscordMessage message={message} />
      </div>
    </div>
  );
}
