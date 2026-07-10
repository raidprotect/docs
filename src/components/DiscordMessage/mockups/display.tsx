import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";

/* Mockup d'un panneau d'information public (/display public) combinant
 * les blocs Verrouillage des MP et Sanctions, avec les boutons publics. */
export default function DisplayMockup() {
  const message: DiscordMessageData = {
    components: [
      {
        type: 17,
        accent_color: 0xd35f5f,
        components: [
          {
            type: 9,
            components: [
              {
                type: 10,
                content: `### ![](/img/icons/iconDmlockWhite.svg) ${translate({
                  id: "mockup.display.dmlockTitle",
                  message: "Verrouillage des MP",
                })}`,
              },
            ],
            accessory: {
              type: 2,
              style: 3,
              label: translate({ id: "mockup.display.enabled", message: "Activé" }),
              custom_id: "display-state",
              disabled: true,
            },
          },
          {
            type: 10,
            content: `🔒 ${translate({
              id: "mockup.display.dmlockBody",
              message: "Les messages privés sont fermés sur ce serveur. Seuls vos amis, le staff, les bots ou vos contacts précédents peuvent vous envoyer des MP. Cette restriction vise à vous protéger des arnaques, publicités et tentatives de vol de compte.",
            })}\n-# 🤝 ${translate({ id: "mockup.display.dmlockFooter", message: "Ajoutez un membre en ami pour discuter." })}`,
          },
          { type: 13, divider: true },
          {
            type: 10,
            content: `### ![](/img/icons/iconSanctions.svg) ${translate({ id: "mockup.display.sanctionsTitle", message: "Sanctions" })}\n${translate({
              id: "mockup.display.sanctionsBody",
              message: "Consultez l'historique de vos sanctions personnelles appliquées sur ce serveur avec la commande `/mes-sanctions`.",
            })}`,
          },
        ],
      },
      {
        type: 1,
        components: [
          {
            type: 2,
            style: 2,
            label: translate({ id: "mockup.display.translate", message: "Traduire" }),
            custom_id: "info-translate",
            emoji: { name: "🌐" },
          },
          {
            type: 2,
            style: 2,
            label: translate({ id: "mockup.display.mySanctions", message: "Consulter mes sanctions" }),
            custom_id: "mysnctn-open",
            emoji: { name: "/img/icons/iconSanctions.svg" },
          },
          {
            type: 2,
            style: 2,
            label: translate({ id: "mockup.display.report", message: "Signaler un membre" }),
            custom_id: "report-open",
            emoji: { name: "/img/icons/iconReportWhite.svg" },
          },
        ],
      },
    ],
  };

  return <DiscordMessage message={message} />;
}
