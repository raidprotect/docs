import { useEffect, useRef, useState } from "react";
import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";
import concept from "./concept.module.css";

/* Mockup animée de ScamLens (anti-scam d'images) : un compte piraté poste une
 * image d'arnaque crypto, ScamLens la scanne, la détecte, la supprime et
 * RaidProtect sanctionne le compte. Boucle. Statique (état final) si mouvement
 * réduit.
 *
 * Étapes : 0 = calme, 1 = image postée, 2 = scan, 3 = détectée,
 * 4 = supprimée + log de sanction. */
const STEP_DURATIONS = [900, 700, 520, 750, 3400];

export default function AntiScamMockup() {
  const [step, setStep] = useState(0);
  const animated = useRef(true);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      animated.current = false;
      setStep(4);
      return;
    }
    const t = setTimeout(() => setStep(step >= 4 ? 0 : step + 1), STEP_DURATIONS[step]);
    return () => clearTimeout(t);
  }, [step]);

  const posted = step >= 1;
  const scanning = step === 2;
  const detected = step >= 3;
  const removed = step >= 4;

  const logMessage: DiscordMessageData = {
    components: [
      {
        type: 17,
        accent_color: 0xf23f43,
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
            content: `### ![](/img/icons/SanctionsTIMEOUT.svg) ${translate({
              id: "mockup.antiscam.sanction",
              message: "Timeout :",
            })}\n\`\`\`${translate({ id: "mockup.antiscam.reason", message: "Image d'arnaque (Crypto Scam)" })}\`\`\``,
          },
          {
            type: 10,
            content: `-# ![](/img/icons/iconID.svg) \`A1B2C3\` • ${translate({
              id: "mockup.antiscam.detectedby",
              message: "Détecté par",
            })} ![](/img/icons/iconScamLens.svg) ScamLens`,
          },
        ],
      },
    ],
  };

  return (
    <div className={`${concept.animWrap} ${concept.animWrapWide} ${concept.scamWrap}`}>
      <div className={concept.chatMessage}>
        <img className={concept.chatAvatar} src="/img/avatar/derrios.webp" alt="" loading="lazy" />
        <div className={concept.chatBody}>
          <div className={concept.chatHeader}>
            <span className={concept.chatName}>Arthur</span>
            <span className={concept.chatTime}>
              {translate({ id: "mockup.antiscam.time1", message: "aujourd'hui à 19:32" })}
            </span>
          </div>
          <div className={concept.chatText}>
            {translate({ id: "mockup.antiscam.ambient", message: "on se fait une partie ce soir ?" })}
          </div>
        </div>
      </div>

      {posted && (
        <div className={`${concept.scamMsgWrap} ${removed ? concept.scamMsgRemoved : ""}`}>
          <div className={concept.chatMessage}>
            <img className={concept.chatAvatar} src="/img/avatar/chaussette.webp" alt="" loading="lazy" />
            <div className={concept.chatBody}>
              <div className={concept.chatHeader}>
                <span className={concept.chatName}>Chaussette</span>
                <span className={concept.chatTime}>
                  {translate({ id: "mockup.antiscam.time2", message: "aujourd'hui à 19:33" })}
                </span>
              </div>
              <div className={concept.scamImageWrap}>
                <img
                  className={`${concept.scamImage} ${detected ? concept.scamImageBlur : ""}`}
                  src="/img/mockup/scam.png"
                  alt=""
                  loading="lazy"
                />
                {scanning && <span className={concept.scamScan} />}
                {detected && (
                  <div className={concept.scamFlag}>
                    <img src="/img/icons/iconScamLens.svg" alt="" width={26} height={26} />
                    {translate({ id: "mockup.antiscam.detected", message: "Arnaque détectée" })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {removed && (
        <div className={concept.chatMessage}>
          <img className={concept.chatAvatar} src="/img/logo.png" alt="" loading="lazy" />
          <div className={concept.chatBody}>
            <div className={concept.chatHeader}>
              <span className={`${concept.chatName} ${concept.memberNameRP}`}>RaidProtect</span>
              <span className={concept.memberBot}>
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor" />
                </svg>
                APP
              </span>
              <span className={concept.chatTime}>
                {translate({ id: "mockup.antiscam.time3", message: "aujourd'hui à 19:33" })}
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
