import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";

/* Mockup du détail d'une sanction (/sanctions info) : statut, utilisateur,
 * sanction avec raison, modérateur, boutons d'édition et de suppression. */
export default function SanctionsMockup() {
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
                content: `## ${translate({ id: "mockup.sanctions.title", message: "Sanction" })} \`A1B2C3\` ![](/img/icons/SanctionStatusACTIVE.svg)`,
              },
            ],
            accessory: {
              type: 2,
              style: 4,
              label: "", custom_id: "sanction-delete",
              emoji: { name: "/img/icons/iconTrashWhite.svg" },
            },
          },
          { type: 13, divider: true },
          {
            type: 9,
            components: [
              {
                type: 10,
                content: `## ${translate({ id: "mockup.sanctions.user", message: "Utilisateur :" })}\n@Chaussette (\`chaussette\`)\n-# ![](/img/icons/iconID.svg) \`582749300512348171\``,
              },
            ],
            accessory: { type: 11, media: { url: "/img/avatar/chaussette.webp" } },
          },
          { type: 13, divider: true },
          {
            type: 9,
            components: [
              {
                type: 10,
                content: `### ![](/img/icons/SanctionsTIMEOUT.svg) ${translate({
                  id: "mockup.sanctions.row",
                  message: "Timeout il y a 2 heures jusqu'à demain 18:42 (`1d`).",
                })}\n\`${translate({ id: "mockup.sanctions.reason", message: "Publicité répétée dans #général" })}\``,
              },
            ],
            accessory: {
              type: 2,
              style: 1,
              label: "", custom_id: "sanction-edit",
              emoji: { name: "/img/icons/iconCustomWhite.svg" },
            },
          },
          { type: 13, divider: true },
          {
            type: 9,
            components: [
              {
                type: 10,
                content: `## ${translate({ id: "mockup.sanctions.moderator", message: "Modérateur :" })}\n@Zallom (\`zallom\`)\n-# ![](/img/icons/iconID.svg) \`214798000185426442\``,
              },
            ],
            accessory: { type: 11, media: { url: "/img/avatar/zallom.webp" } },
          },
        ],
      },
    ],
  };

  return <DiscordMessage message={message} />;
}
