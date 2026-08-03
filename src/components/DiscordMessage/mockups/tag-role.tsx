import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";
import concept from "./concept.module.css";

/* Mockup du panneau de configuration du Rôle de Tag, répliqué depuis le
 * rendu réel du bot (emojis officiels via le CDN Discord). */

const E = (id: string) => `![](https://cdn.discordapp.com/emojis/${id}.webp)`;

export default function TagRoleMockup() {
  const message: DiscordMessageData = {
    embeds: [
      {
        color: 0xd35f5f,
        title: translate({ id: "mockup.tagrole.title", message: "Configuration du Rôle de Tag" }),
        description: [
          translate({
            id: "mockup.tagrole.desc1",
            message: "Configurez le **Rôle de Tag de Serveur** pour **attribuer automatiquement un rôle** aux membres qui ajoutent le **tag de votre serveur à leur profil**.",
          }),
          translate({
            id: "mockup.tagrole.desc2",
            message: "Si le membre retire le tag, le rôle lui est automatiquement retiré.",
          }),
          "",
          translate({
            id: "mockup.tagrole.desc3",
            message:
              "Vos membres auront le rôle à leur prochaine modification de profil (Pseudo, Avatar, Bannière, Rôles, Tag…). Vous pouvez demander au support une synchronisation complète du rôle si vous avez beaucoup de membres possédant ou ayant possédé le Tag.",
          }),
        ].join("\n"),
        fields: [
          {
            name: `${E("1398382673491398756")} ${translate({ id: "mockup.tagrole.field", message: "Rôle de Tag" })}`,
            value: "> @[Rôle de Tag]",
          },
        ],
        footer: { text: "RaidProtect v3.4.0 • Configuration > Rôle de Tag" },
      },
    ],
    components: [
      {
        type: 1,
        components: [
          {
            type: 6,
            custom_id: "tagrole-role",
            placeholder: translate({ id: "mockup.tagrole.placeholder", message: "Rôle de Tag (écrire pour chercher)" }),
          },
        ],
      },
      {
        type: 1,
        components: [
          {
            type: 2,
            style: 1,
            label: translate({ id: "mockup.tagrole.create", message: "En créer un pour moi" }),
            custom_id: "tagrole-create",
            emoji: { name: "iconCreateWhite", id: "1398382565060251792" },
          },
          {
            type: 2,
            style: 4,
            label: translate({ id: "mockup.tagrole.reset", message: "Réinitialiser" }),
            custom_id: "tagrole-reset",
            emoji: { name: "iconResetWhite", id: "1398382670735605844" },
          },
          {
            type: 2,
            style: 1,
            label: translate({ id: "mockup.tagrole.refresh", message: "Actualiser" }),
            custom_id: "tagrole-refresh",
            emoji: { name: "iconRefreshWhite", id: "1398382662598787134" },
          },
        ],
      },
      {
        type: 1,
        components: [
          {
            type: 2,
            style: 2,
            label: translate({ id: "mockup.tagrole.back", message: "Retour" }),
            custom_id: "tagrole-back",
            emoji: { name: "iconPreviousWhite", id: "1398382652087599249" },
          },
          {
            type: 2,
            style: 2,
            label: translate({ id: "mockup.settingsMenus.support", message: "Serveur Support" }),
            custom_id: "tagrole-support",
            emoji: { name: "iconSupportWhite", id: "1398382703111438428" },
          },
          {
            type: 2,
            style: 2,
            label: "Documentation",
            custom_id: "tagrole-docs",
            emoji: { name: "iconDocsWhite", id: "1398382589227565148" },
          },
        ],
      },
    ],
  };

  return (
    <div className={`${concept.animWrap} ${concept.dmWrap} ${concept.cfg}`}>
      <div className={concept.tight}>
        <DiscordMessage message={message} />
      </div>
    </div>
  );
}
