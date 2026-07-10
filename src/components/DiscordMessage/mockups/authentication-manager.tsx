import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";

/* Mockup du panneau /auth : demande d'authentification pour un rôle protégé
 * avec le choix de la méthode (PIN, OTP, Passkey). */
export default function AuthenticationManagerMockup() {
  const message: DiscordMessageData = {
    components: [
      {
        type: 17,
        accent_color: 0xd35f5f,
        components: [
          {
            type: 10,
            content: [
              `## ![](/img/icons/iconKey.svg) ${translate({ id: "mockup.auth.title", message: "Authentification requise" })}`,
              "",
              translate({
                id: "mockup.auth.body",
                message: "Pour recevoir @Modérateur, veuillez vous authentifier en utilisant l'une des méthodes ci-dessous.",
              }),
              `-# ${translate({ id: "mockup.auth.session", message: "Durée de session : 8h" })}`,
            ].join("\n"),
          },
          { type: 13, divider: true },
          {
            type: 1,
            components: [
              {
                type: 2,
                style: 1,
                label: translate({ id: "mockup.auth.pin", message: "S'authentifier avec le PIN" }),
                custom_id: "auth-pin",
                emoji: { name: "/img/icons/iconPin.svg" },
              },
              {
                type: 2,
                style: 1,
                label: translate({ id: "mockup.auth.otp", message: "S'authentifier avec l'OTP" }),
                custom_id: "auth-otp",
                emoji: { name: "/img/icons/iconTime.svg" },
              },
              {
                type: 2,
                style: 1,
                label: translate({ id: "mockup.auth.passkey", message: "S'authentifier avec le Passkey" }),
                custom_id: "auth-passkey",
                emoji: { name: "/img/icons/iconKey.svg" },
              },
            ],
          },
        ],
      },
    ],
  };

  return <DiscordMessage message={message} />;
}
