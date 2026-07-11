import { useEffect, useRef, useState } from "react";
import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";
import concept from "./concept.module.css";

/* Mockup animée du HoneyPot : le message d'avertissement du salon-piège,
 * puis un compte compromis poste son spam d'un coup (les bots ne tapent
 * pas) : le message est supprimé, softban, et le compteur public
 * s'incrémente. L'heure affichée est la vraie heure du visiteur. Boucle.
 * Statique (sanction) si mouvement réduit.
 *
 * Étapes : 0 = repos, 1 = message posté, 2 = supprimé + sanctionné. */
const STEP_DURATIONS = [900, 1100, 3200, 100];
const SPAM = "nitro gratuit ici 👉 nitro-gift.click";

export default function HoneypotMockup() {
  const [step, setStep] = useState(0);
  const [clock, setClock] = useState("00:00");
  const animated = useRef(true);

  // L'heure est figée au moment où le message est posté : elle ne change
  // pas sous les yeux du visiteur pendant l'affichage.
  useEffect(() => {
    if (step === 1) {
      setClock(new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }));
    }
  }, [step]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      animated.current = false;
      setClock(new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }));
      setStep(2);
      return;
    }
    const t = setTimeout(() => setStep(step >= 3 ? 0 : step + 1), STEP_DURATIONS[step]);
    return () => clearTimeout(t);
  }, [step]);

  const flagged = step >= 2 ? 43 : 42;
  const posted = step === 1 || step === 2;
  const removed = step >= 2;

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
                content: [
                  `## ![](/img/icons/iconAlert.svg) ${translate({ id: "mockup.honeypot.title", message: "N'ENVOYEZ PAS DE MESSAGE ICI" })}`,
                  "",
                  translate({
                    id: "mockup.honeypot.body1",
                    message: "Ce salon sert à détecter les **comptes automatisés**.",
                  }),
                  translate({
                    id: "mockup.honeypot.body2",
                    message: "Tout message envoyé ici entraîne une **sanction automatique** (Softban).",
                  }),
                ].join("\n"),
              },
            ],
            accessory: { type: 11, media: { url: "/img/icons/iconHoneyPot.svg" } },
          },
          {
            type: 10,
            content: `-# ${translate(
              { id: "mockup.honeypot.count", message: "{count} comptes signalés" },
              { count: flagged }
            )}`,
          },
        ],
      },
      {
        type: 1,
        components: [
          {
            type: 2,
            style: 2,
            label: translate({ id: "mockup.honeypot.translate", message: "Translate" }),
            custom_id: "honeypot-translate",
            emoji: { name: "/img/icons/iconLanguage.svg" },
          },
        ],
      },
    ],
  };

  return (
    <div className={`${concept.animWrap} ${concept.animWrapWide} ${concept.honeypotWrap}`}>
      <div className={`${concept.tight} ${concept.wide}`}>
        <DiscordMessage message={message} />
      </div>

      {posted && (
        <div className={`${concept.chatMessage} ${removed ? concept.chatRemoved : ""}`}>
          <img className={concept.chatAvatar} src="/img/avatar/chaussette.webp" alt="" loading="lazy" />
          <div className={concept.chatBody}>
            <div className={concept.chatHeader}>
              <span className={concept.chatName}>Chaussette</span>
              <span className={concept.chatTime}>
                {translate(
                  { id: "mockup.honeypot.now", message: "aujourd'hui à {time}" },
                  { time: clock }
                )}
              </span>
            </div>
            <div className={concept.chatText}>{SPAM}</div>
          </div>
        </div>
      )}

      {removed && (
        <div className={`${concept.systemLine} ${concept.systemLineDanger}`}>
          <img src="/img/icons/SanctionsSOFTBAN.svg" alt="" width={16} height={16} loading="lazy" />
          {translate({ id: "mockup.honeypot.sanctioned", message: "Chaussette a été softban et ses messages supprimés." })}
        </div>
      )}

      <div className={concept.chatInput}>
        <span className={concept.chatPlaceholder}>
          {translate({ id: "mockup.honeypot.inputPlaceholder", message: "Message #honeypot" })}
        </span>
      </div>
    </div>
  );
}
