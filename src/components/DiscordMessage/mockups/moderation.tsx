import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";

/* Mockup de la vue de modération centralisée (/modview) : identité, infos
 * compte, note, dernières sanctions et menu de sanction rapide. */
export default function ModerationMockup() {
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
                content: `## 🔍 Chaussette\n@Chaussette (\`chaussette\`)\n-# ✅ ${translate({
                  id: "mockup.modview.member",
                  message: "Membre du serveur",
                })}`,
              },
            ],
            accessory: { type: 11, media: { url: "/img/avatar/chaussette.webp" } },
          },
          { type: 13, divider: true },
          {
            type: 10,
            content: [
              `**${translate({ id: "mockup.modview.created", message: "Création du compte" })}** 12/03/2021 (${translate({ id: "mockup.modview.createdRel", message: "il y a 5 ans" })})`,
              `**${translate({ id: "mockup.modview.joined", message: "Membre depuis" })}** 02/09/2024 (${translate({ id: "mockup.modview.joinedRel", message: "il y a 2 ans" })})`,
              `**${translate({ id: "mockup.modview.nick", message: "Pseudo" })}** \`Chaussette 🧦\``,
              `**${translate({ id: "mockup.modview.perms", message: "Permissions :" })}** ${translate({ id: "mockup.modview.permsValue", message: "Membre" })} (**4** ${translate({ id: "mockup.modview.roles", message: "rôles" })})`,
            ].join("\n"),
          },
          { type: 13, divider: true },
          {
            type: 9,
            components: [
              {
                type: 10,
                content: `### 📝 ${translate({ id: "mockup.modview.note", message: "Note" })}\n-# ${translate({
                  id: "mockup.modview.noteEmpty",
                  message: "Aucune note.",
                })}`,
              },
            ],
            accessory: {
              type: 2,
              style: 1,
              label: translate({ id: "mockup.modview.noteEdit", message: "Modifier" }),
              custom_id: "modview-note",
            },
          },
          { type: 13, divider: true },
          {
            type: 9,
            components: [
              {
                type: 10,
                content: `### ⚖️ ${translate({ id: "mockup.modview.sanctions", message: "Dernières sanctions" })} (**2**/**5**)`,
              },
            ],
            accessory: {
              type: 2,
              style: 2,
              label: translate({ id: "mockup.modview.sanctionsAll", message: "Voir toutes les sanctions" }),
              custom_id: "modview-sanctions",
            },
          },
          {
            type: 10,
            content: [
              `![](/img/icons/SanctionsTIMEOUT.svg) ${translate({ id: "mockup.modview.row1", message: "Timeout il y a 3 jours." })}`,
              `-# 🪪 \`A1B2C3\` ![](/img/icons/SanctionStatusEXPIRED.svg) • ${translate({ id: "mockup.modview.mod", message: "Mod :" })} @Zallom`,
              `![](/img/icons/SanctionsWARN.svg) ${translate({ id: "mockup.modview.row2", message: "Avertissement il y a 5 heures." })}`,
              `-# 🪪 \`D4E5F6\` ![](/img/icons/SanctionStatusACTIVE.svg) • ${translate({ id: "mockup.modview.mod", message: "Mod :" })} @Arthur`,
            ].join("\n"),
          },
          { type: 13, divider: true },
          { type: 10, content: "-# 🪪 582749300512348171" },
          {
            type: 1,
            components: [
              {
                type: 3,
                custom_id: "modview-sanction",
                placeholder: translate({ id: "mockup.modview.sanctionPlaceholder", message: "Sanctionner l'utilisateur" }),
                options: [
                  { label: "Warn", value: "warn", emoji: { name: "/img/icons/SanctionsWARN.svg" } },
                  { label: "Timeout", value: "timeout", emoji: { name: "/img/icons/SanctionsTIMEOUT.svg" } },
                  { label: "Kick", value: "kick", emoji: { name: "/img/icons/SanctionsKICK.svg" } },
                  { label: "Ban", value: "ban", emoji: { name: "/img/icons/SanctionsBAN.svg" } },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  return <DiscordMessage message={message} />;
}
