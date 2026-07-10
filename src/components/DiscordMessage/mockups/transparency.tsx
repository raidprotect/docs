import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";

/* Mockup du rapport de transparence périodique publié dans un salon. */
export default function TransparencyMockup() {
  const message: DiscordMessageData = {
    embeds: [
      {
        color: 0xd35f5f,
        description: [
          `## ![](/img/icons/iconSearch.svg) ${translate({ id: "mockup.transparency.title", message: "Rapport de transparence" })}`,
          `![](/img/icons/iconCalendar.svg) ${translate({ id: "mockup.transparency.range", message: "1 juillet 2026 — 8 juillet 2026" })}`,
          "",
          translate({
            id: "mockup.transparency.intro",
            message: "**37** actions de modération ont été prises durant cette période.",
          }),
          "",
          `![](/img/icons/SanctionsBAN.svg) **5** ${translate({ id: "mockup.transparency.bans", message: "bannissements" })}`,
          `![](/img/icons/SanctionsSOFTBAN.svg) **3** ${translate({ id: "mockup.transparency.softbans", message: "softbans" })}`,
          `![](/img/icons/SanctionsKICK.svg) **4** ${translate({ id: "mockup.transparency.kicks", message: "expulsions" })}`,
          `![](/img/icons/SanctionsTIMEOUT.svg) **12** ${translate({ id: "mockup.transparency.timeouts", message: "timeouts" })}`,
          `![](/img/icons/SanctionsJAIL.svg) **1** ${translate({ id: "mockup.transparency.jails", message: "emprisonnement" })}`,
          `![](/img/icons/SanctionsWARN.svg) **8** ${translate({ id: "mockup.transparency.warns", message: "avertissements" })}`,
          `![](/img/icons/iconSanctions.svg) **4** ${translate({ id: "mockup.transparency.others", message: "autres actions" })}`,
          "",
          `![](/img/icons/iconScamLens.svg) **6** ${translate({ id: "mockup.transparency.scamlens", message: "arnaques bloquées par ScamLens" })}`,
          "",
          `![](/img/icons/iconBots.svg) **28** ${translate({ id: "mockup.transparency.automated", message: "automatiques" })} · ![](/img/icons/iconUser.svg) **9** ${translate({ id: "mockup.transparency.human", message: "par l'équipe" })}`,
        ].join("\n"),
      },
    ],
  };

  return <DiscordMessage message={message} />;
}
