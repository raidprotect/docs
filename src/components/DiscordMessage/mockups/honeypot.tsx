import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";

/* Mockup du message d'avertissement du salon-piège HoneyPot :
 * avertissement, compteur public et bouton Traduire. */
export default function HoneypotMockup() {
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
                content: [
                  `## ⚠️ ${translate({ id: "mockup.honeypot.title", message: "N'ENVOYEZ PAS DE MESSAGE ICI" })}`,
                  "",
                  translate({
                    id: "mockup.honeypot.body1",
                    message: "Ce salon sert à détecter les **comptes automatisés**.",
                  }),
                  translate({
                    id: "mockup.honeypot.body2",
                    message: "Tout message envoyé ici entraîne une **sanction automatique** (Softban).",
                  }),
                ].join("\n"),
              },
            ],
            accessory: { type: 11, media: { url: "/img/icons/iconHoneyPotWhite.svg" } },
          },
          {
            type: 10,
            content: `-# ${translate({ id: "mockup.honeypot.count", message: "42 comptes signalés" })}`,
          },
        ],
      },
      {
        type: 1,
        components: [
          {
            type: 2,
            style: 2,
            label: translate({ id: "mockup.honeypot.translate", message: "Translate" }),
            custom_id: "honeypot-translate",
            emoji: { name: "🌐" },
          },
        ],
      },
    ],
  };

  return <DiscordMessage message={message} />;
}
