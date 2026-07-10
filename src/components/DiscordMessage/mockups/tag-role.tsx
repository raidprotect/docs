import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";

/* Mockup du panneau de configuration du Rôle de Tag : sélecteur de rôle,
 * boutons Réinitialiser et Synchroniser. */
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
        ].join("\n"),
        fields: [
          {
            name: `![](/img/icons/iconTagWhite.svg) ${translate({ id: "mockup.tagrole.field", message: "Rôle de Tag" })}`,
            value: "> @Représentant",
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
            style: 4,
            label: translate({ id: "mockup.tagrole.reset", message: "Réinitialiser" }),
            custom_id: "tagrole-reset",
          },
          {
            type: 2,
            style: 4,
            label: translate({ id: "mockup.tagrole.sync", message: "Synchroniser" }),
            custom_id: "tagrole-sync",
            emoji: { name: "🔄" },
          },
          {
            type: 2,
            style: 2,
            label: translate({ id: "mockup.tagrole.back", message: "Retour" }),
            custom_id: "tagrole-back",
          },
        ],
      },
    ],
  };

  return <DiscordMessage message={message} />;
}
