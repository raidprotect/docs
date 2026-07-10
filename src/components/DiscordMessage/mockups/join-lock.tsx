import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";

/* Mockup du statut /joinlock : état + bouton d'activation. */
export default function JoinLockMockup() {
  const message: DiscordMessageData = {
    embeds: [
      {
        color: 0xe59400,
        title: `⛔ ${translate({ id: "mockup.joinlock.title", message: "Statut du Join lock" })}`,
        description: [
          translate({ id: "mockup.joinlock.line1", message: "Le Join lock est actuellement **activé** !" }),
          translate({
            id: "mockup.joinlock.line2",
            message: "Cela signifie que *personne ne peut rejoindre le serveur*.",
          }),
        ].join("\n"),
      },
    ],
    components: [
      {
        type: 1,
        components: [
          {
            type: 2,
            style: 1,
            label: translate({ id: "mockup.joinlock.disable", message: "Désactiver" }),
            custom_id: "joinlock-action",
            emoji: { name: "/img/icons/iconAntiraidWhite.svg" },
          },
        ],
      },
    ],
  };

  return <DiscordMessage message={message} />;
}
