import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";

/* Mockup du message de vérification posté dans #vérification à l'arrivée
 * d'un membre : texte de bienvenue + image captcha en pièce jointe. */
export default function CaptchaMockup() {
  const message: DiscordMessageData = {
    content: [
      `## ${translate({ id: "mockup.captcha.welcome", message: "Bienvenue sur Ma Communauté, @Arthur !" })}`,
      translate({
        id: "mockup.captcha.instructions",
        message: "Pour accéder au serveur, veuillez compléter ce captcha avec **6 lettres majuscules**.",
      }),
      "",
      `![](/img/icons/iconInfo.svg) ${translate({ id: "mockup.captcha.kick", message: "Expulsion automatique dans 5 minutes (2 essais restants)." })}`,
      `-# ${translate({
        id: "mockup.captcha.footer",
        message: "Cela ne prend que quelques secondes et garantit la sécurité de notre communauté.",
      })}`,
    ].join("\n"),
    components: [
      {
        type: 12,
        items: [{ media: { url: "/img/mockup/captcha.svg" }, description: "captcha.png" }],
      },
    ],
  };

  return <DiscordMessage message={message} />;
}
