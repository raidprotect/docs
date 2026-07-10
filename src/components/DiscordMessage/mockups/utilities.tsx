import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";

/* Mockup de /userinfo : carte de profil avec avatar, dates, rôles et ID. */
export default function UtilitiesMockup() {
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
                content: "## Chaussette\n@Chaussette (`chaussette`)",
              },
            ],
            accessory: { type: 11, media: { url: "/img/avatar/chaussette.webp" } },
          },
          { type: 13, divider: true },
          {
            type: 10,
            content: [
              `**${translate({ id: "mockup.userinfo.created", message: "Création du compte" })}** 12/03/2021 (${translate({ id: "mockup.userinfo.createdRel", message: "il y a 5 ans" })})`,
              `**${translate({ id: "mockup.userinfo.joined", message: "Membre depuis" })}** 02/09/2024 (${translate({ id: "mockup.userinfo.joinedRel", message: "il y a 2 ans" })})`,
              `**${translate({ id: "mockup.userinfo.nick", message: "Pseudo" })}** \`Chaussette 🧦\``,
            ].join("\n"),
          },
          {
            type: 10,
            content: `**${translate({ id: "mockup.userinfo.roles", message: "Rôles" })}** (**4**)\n> @Représentant @Membre @Événements @Jeux`,
          },
          {
            type: 10,
            content: `**${translate({ id: "mockup.userinfo.perms", message: "Permissions :" })}** ${translate({ id: "mockup.userinfo.permsValue", message: "Membre" })}`,
          },
          { type: 13, divider: false },
          { type: 10, content: "-# 🪪 582749300512348171" },
        ],
      },
    ],
  };

  return <DiscordMessage message={message} />;
}
