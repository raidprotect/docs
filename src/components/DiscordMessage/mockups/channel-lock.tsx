import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";

/* Mockup du message posté dans un salon verrouillé via /lock. */
export default function ChannelLockMockup() {
  const message: DiscordMessageData = {
    embeds: [
      {
        color: 0xe59400,
        description: [
          `🔒 **${translate({ id: "mockup.lock.title", message: "Le salon est verrouillé." })}**`,
          `ℹ️ **${translate({ id: "mockup.lock.reasonLabel", message: "Raison :" })}** ${translate({
            id: "mockup.lock.reason",
            message: "Raid en cours",
          })}`,
          `⏳ **${translate({ id: "mockup.lock.until", message: "Le salon sera déverrouillé dans 1 heure." })}**`,
        ].join("\n"),
      },
    ],
  };

  return <DiscordMessage message={message} />;
}
