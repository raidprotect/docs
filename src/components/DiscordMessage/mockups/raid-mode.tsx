import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";

/* Mockup de l'alerte de logs quand le RaidMode automatique s'active. */
export default function RaidModeMockup() {
  const message: DiscordMessageData = {
    embeds: [
      {
        color: 0xe59400,
        description: [
          `⚠️ **${translate({ id: "mockup.raidmode.title", message: "RaidMode automatique activé !" })}**`,
          translate({
            id: "mockup.raidmode.body",
            message: "Pour le désactiver, utilisez la commande `/raidmode`.",
          }),
        ].join("\n"),
        footer: {
          text: translate({
            id: "mockup.raidmode.footer",
            message:
              "Vous pouvez modifier les conditions d'activation automatique du RaidMode dans les paramètres (/settings).",
          }),
        },
      },
    ],
  };

  return <DiscordMessage message={message} />;
}
