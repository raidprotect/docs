import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";

/* Mockup du log de sanction anti-spam (container V2 accent jaune Softban)
 * avec le fichier de logs des messages supprimés et le bouton Contexte. */
export default function AntiSpamMockup() {
  const message: DiscordMessageData = {
    components: [
      {
        type: 17,
        accent_color: 0xe5b117,
        components: [
          {
            type: 9,
            components: [
              {
                type: 10,
                content: "## @Chaussette (`chaussette`)\n-# ![](/img/icons/iconID.svg) `582749300512348171`",
              },
            ],
            accessory: { type: 11, media: { url: "/img/avatar/chaussette.webp" } },
          },
          { type: 13, divider: true },
          {
            type: 10,
            content: `### ![](/img/icons/SanctionsSOFTBAN.svg) ${translate({
              id: "mockup.antispam.sanction",
              message: "Softban :",
            })}\n\`${translate({ id: "mockup.antispam.reason", message: "Spam de mentions" })}\``,
          },
          {
            type: 10,
            content: `-# ![](/img/icons/iconID.svg) \`A1B2C3\` • ${translate({ id: "mockup.antispam.mod", message: "Mod :" })} @RaidProtect (Antispam)`,
          },
          {
            type: 14,
            file: { url: "#", filename: "2026-07-10_582749300512348171_logs.txt" },
          },
          {
            type: 1,
            components: [
              {
                type: 2,
                style: 5,
                label: translate({ id: "mockup.antispam.context", message: "Contexte" }),
                url: "https://docs.raidprotect.bot/beta/features/anti-spam",
              },
            ],
          },
        ],
      },
    ],
  };

  return <DiscordMessage message={message} />;
}
