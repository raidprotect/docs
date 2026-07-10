import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { ThreadData } from "../index";
import type { DiscordMessageData } from "../types";

/* Mockup illustrative de l'alerte de signalement (composants V2) avec son fil
 * de regroupement replié. Contenu fictif, structure, couleurs et libellés
 * alignés sur le vrai message du bot, chaînes localisées via Docusaurus. */
export default function ReportsMockup() {
  const message: DiscordMessageData = {
    components: [
      {
        type: 17,
        accent_color: 0xed4245,
        components: [
          {
            type: 9,
            components: [
              {
                type: 10,
                content: [
                  `### ![](/img/icons/iconReport.svg) ${translate({ id: "mockup.reports.title", message: "Nouveau signalement" })}`,
                  `**${translate({ id: "mockup.reports.member", message: "Membre signalé" })}**`,
                  "@Chaussette (`@chaussette`)",
                ].join("\n"),
              },
            ],
            accessory: { type: 11, media: { url: "/img/avatar/chaussette.webp" } },
          },
          { type: 13, divider: true },
          {
            type: 10,
            content: translate({
              id: "mockup.reports.count",
              message: "1 message & 1 profil signalé par 2 utilisateurs",
            }),
          },
          {
            type: 1,
            components: [
              {
                type: 2,
                style: 3,
                label: translate({ id: "mockup.reports.claimed", message: "Pris en charge" }),
                custom_id: "claim",
                disabled: true,
              },
              {
                type: 2,
                style: 2,
                label: translate({ id: "mockup.reports.resolve", message: "Résolu" }),
                custom_id: "resolve",
              },
              {
                type: 2,
                style: 4,
                label: translate({ id: "mockup.reports.refuse", message: "Refuser" }),
                custom_id: "refuse",
              },
            ],
          },
          {
            type: 10,
            content: `${translate({ id: "mockup.reports.claimedBy", message: "Pris en charge par" })} @Zallom`,
          },
        ],
      },
      {
        type: 1,
        components: [
          {
            type: 3,
            custom_id: "sanction",
            placeholder: translate({ id: "mockup.reports.sanction", message: "Sanctionner ce membre…" }),
            options: [
              { label: "Warn", value: "warn", emoji: { name: "/img/icons/SanctionsWARN.svg" } },
              { label: "Timeout", value: "timeout", emoji: { name: "/img/icons/SanctionsTIMEOUT.svg" } },
              { label: "Ban", value: "ban", emoji: { name: "/img/icons/SanctionsBAN.svg" } },
            ],
          },
        ],
      },
    ],
  };

  const thread: ThreadData = {
    name: translate({ id: "mockup.reports.threadName", message: "Signalement : @chaussette" }),
    messageCount: 2,
    lastMessage: {
      username: "Arthur",
      avatar: "/img/avatar/derrios.webp",
      content: translate({ id: "mockup.reports.threadLast", message: "a aussi signalé ce membre" }),
      when: translate({ id: "mockup.reports.threadWhen", message: "il y a 17 min" }),
    },
  };

  return <DiscordMessage message={message} thread={thread} />;
}
