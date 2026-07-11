import { useEffect, useRef, useState } from "react";
import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import { formatInlineMarkdown } from "../markdown";
import type { DiscordMessageData } from "../types";
import concept from "./concept.module.css";

/* Mockup animée de l'anti-spam : un salon vit sa vie, Chaussette déferle en
 * spammant le même message en rafale, et paf : les messages se replient et
 * RaidProtect poste le log de sanction Softban. Boucle. Statique (log) si
 * mouvement réduit.
 *
 * Étapes : 0 = calme, 1-4 = messages de spam, 5 = repli du spam,
 * 6 = log de sanction. */
const STEP_DURATIONS = [700, 280, 240, 210, 190, 600, 3600, 100];
const SPAM_TEXT = "@everyone FREE NITRO 🎁 ➜ nitro-gift.click";

export default function AntiSpamMockup() {
  const [step, setStep] = useState(0);
  const animated = useRef(true);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      animated.current = false;
      setStep(6);
      return;
    }
    const t = setTimeout(() => setStep(step >= 7 ? 0 : step + 1), STEP_DURATIONS[step]);
    return () => clearTimeout(t);
  }, [step]);

  const spamCount = Math.min(Math.max(step, 0), 4);
  const collapsed = step >= 5;
  const sanctioned = step >= 6;

  const logMessage: DiscordMessageData = {
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
                content: "**@Chaussette** (`chaussette`)\n-# ![](/img/icons/iconID.svg) `582749300512348171`",
              },
            ],
            accessory: { type: 11, media: { url: "/img/avatar/chaussette.webp" } },
          },
          {
            type: 10,
            content: `### ![](/img/icons/SanctionsSOFTBAN.svg) ${translate({
              id: "mockup.antispam.sanction",
              message: "Softban :",
            })}\n\`\`\`${translate({ id: "mockup.antispam.reason", message: "Spam de mentions" })}\`\`\``,
          },
          {
            type: 10,
            content: `-# ![](/img/icons/iconID.svg) \`A1B2C3\` • ${translate({ id: "mockup.antispam.mod", message: "Mod :" })} @RaidProtect (Antispam)`,
          },
        ],
      },
    ],
  };

  return (
    <div className={`${concept.animWrap} ${concept.animWrapWide} ${concept.antispamWrap}`}>
      <div className={concept.chatMessage}>
        <img className={concept.chatAvatar} src="/img/avatar/derrios.webp" alt="" loading="lazy" />
        <div className={concept.chatBody}>
          <div className={concept.chatHeader}>
            <span className={concept.chatName}>Arthur</span>
            <span className={concept.chatTime}>
              {translate({ id: "mockup.antispam.time1", message: "aujourd'hui à 21:07" })}
            </span>
          </div>
          <div className={concept.chatText}>
            {translate({ id: "mockup.antispam.ambient", message: "quelqu'un pour une partie ce soir ?" })}
          </div>
        </div>
      </div>

      {spamCount > 0 && (
        <div className={`${concept.spamWrap} ${concept.chatPinged} ${collapsed ? concept.spamCollapsed : ""}`} style={{ maxHeight: collapsed ? undefined : 90 * spamCount }}>
          <div className={concept.chatMessage}>
            <img className={concept.chatAvatar} src="/img/avatar/chaussette.webp" alt="" loading="lazy" />
            <div className={concept.chatBody}>
              <div className={concept.chatHeader}>
                <span className={concept.chatName}>Chaussette</span>
                <span className={concept.chatTime}>
                  {translate({ id: "mockup.antispam.time2", message: "aujourd'hui à 21:08" })}
                </span>
              </div>
              <div className={concept.chatText}>{formatInlineMarkdown(SPAM_TEXT)}</div>
            </div>
          </div>
          {Array.from({ length: Math.max(0, spamCount - 1) }, (_, i) => (
            <div key={i} className={concept.chatCompact}>
              <div className={concept.chatText}>{formatInlineMarkdown(SPAM_TEXT)}</div>
            </div>
          ))}
        </div>
      )}

      {sanctioned && (
        <div className={concept.chatMessage}>
          <img className={concept.chatAvatar} src="/img/logo.png" alt="" loading="lazy" />
          <div className={concept.chatBody}>
            <div className={concept.chatHeader}>
              <span className={`${concept.chatName} ${concept.memberNameRP}`}>RaidProtect</span>
              <span className={concept.memberBot}><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor" /></svg>APP</span>
              <span className={concept.chatTime}>
                {translate({ id: "mockup.antispam.time3", message: "aujourd'hui à 21:08" })}
              </span>
            </div>
            <div className={concept.flushLeft}>
              <DiscordMessage message={logMessage} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
