import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";

/* Mockup du rapport /audit : score global avec grade, résumé par catégorie
 * et problèmes détectés. */
export default function AuditMockup() {
  const categories = [
    {
      icon: "⚙️",
      name: translate({ id: "mockup.audit.catServer", message: "Configuration du serveur" }),
      score: "90/100",
      stats: "✅ 6 · ⚠️ 1 · ❌ 0",
      id: "server",
    },
    {
      icon: "🎭",
      name: translate({ id: "mockup.audit.catRoles", message: "Rôles" }),
      score: "75/100",
      stats: "✅ 3 · ⚠️ 1 · ❌ 1",
      id: "roles",
    },
    {
      icon: "💬",
      name: translate({ id: "mockup.audit.catChannels", message: "Salons" }),
      score: "82/100",
      stats: "✅ 2 · ⚠️ 1 · ❌ 0",
      id: "channels",
    },
  ];

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
                content: `## 🔎 ${translate({ id: "mockup.audit.title", message: "Audit de sécurité" })}\n-# Ma Communauté`,
              },
            ],
            accessory: {
              type: 2,
              style: 2,
              label: translate({ id: "mockup.audit.refresh", message: "Actualiser" }),
              custom_id: "audit-refresh",
            },
          },
          { type: 13, divider: true },
          {
            type: 10,
            content: `![](/img/icons/RankB.svg) **${translate({ id: "mockup.audit.score", message: "Score global :" })} \`82/100\`** · ${translate({ id: "mockup.audit.scoreLabel", message: "Bon" })}`,
          },
          { type: 13, divider: false },
          {
            type: 10,
            content: `**${translate({ id: "mockup.audit.summary", message: "Résumé par catégorie" })}**`,
          },
          ...categories.map((cat) => ({
            type: 9 as const,
            components: [
              {
                type: 10 as const,
                content: `${cat.icon} **${cat.name}** · \`${cat.score}\`\n-# ${cat.stats}`,
              },
            ],
            accessory: {
              type: 2 as const,
              style: 2 as const,
              label: translate({ id: "mockup.audit.details", message: "Détails" }),
              custom_id: `audit-cat-${cat.id}`,
            },
          })),
          { type: 13, divider: true },
          {
            type: 10,
            content: [
              `**${translate({ id: "mockup.audit.findings", message: "Problèmes détectés (2)" })}**`,
              "",
              `❌ **${translate({ id: "mockup.audit.finding1", message: "Rôles administrateurs" })}**`,
              `> ${translate({
                id: "mockup.audit.finding1Body",
                message: "2 rôles disposent de la permission Administrateur sans protection. Intégrez-les à l'Authentication Manager.",
              })}`,
              "",
              `⚠️ **${translate({ id: "mockup.audit.finding2", message: "Niveau de vérification" })}**`,
              `> ${translate({
                id: "mockup.audit.finding2Body",
                message: "Niveau trop bas. Réglez la vérification sur « Moyen » ou plus pour bloquer les comptes jetables.",
              })}`,
            ].join("\n"),
          },
        ],
      },
    ],
  };

  return <DiscordMessage message={message} />;
}
