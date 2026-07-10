import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";

/* Mockup du panneau de configuration /dmlock : état des MP fermés
 * et bouton d'activation. */
export default function DmLockMockup() {
  const message: DiscordMessageData = {
    embeds: [
      {
        color: 0xd35f5f,
        title: translate({ id: "mockup.dmlock.title", message: "Configuration des MP fermés" }),
        description: [
          translate({
            id: "mockup.dmlock.desc1",
            message: "Configurez la fermeture des messages privés pour prévenir les tentatives de phishing ou d'arnaque.",
          }),
          translate({
            id: "mockup.dmlock.desc2",
            message: "RaidProtect désactivera les messages privés en permanence jusqu'à ce que vous désactiviez cette protection.",
          }),
          "",
          `⚠️ ${translate({
            id: "mockup.dmlock.warning",
            message: "Seuls les bots, les membres qui ont déjà échangé ou qui sont en ami et les staff pourront recevoir des MP avec ce mode.",
          })}`,
        ].join("\n"),
        fields: [
          {
            name: `![](/img/icons/iconDmlockWhite.svg) ${translate({ id: "mockup.dmlock.field", message: "État des MP fermés" })}`,
            value: `> ${translate({ id: "mockup.dmlock.state", message: "Activé" })}`,
          },
        ],
        footer: { text: "RaidProtect v3.4.0 • Configuration" },
      },
    ],
    components: [
      {
        type: 1,
        components: [
          {
            type: 2,
            style: 1,
            label: translate({ id: "mockup.dmlock.disable", message: "Désactiver" }),
            custom_id: "dmlock-toggle",
          },
          {
            type: 2,
            style: 2,
            label: translate({ id: "mockup.dmlock.back", message: "Retour" }),
            custom_id: "dmlock-back",
          },
        ],
      },
    ],
  };

  return <DiscordMessage message={message} />;
}
