import { useEffect, useRef, useState } from "react";
import { translate } from "@docusaurus/Translate";
import concept from "./concept.module.css";

/* Mockup animée de l'anti-raid : une vague de comptes rejoint le serveur
 * (messages d'arrivée à gauche, liste des membres qui se remplit à droite),
 * le RaidMode automatique s'active et RaidProtect expulse toute la vague.
 * Boucle. Statique (fin de raid) si mouvement réduit.
 *
 * Étapes : 0 = calme, 1-5 = arrivées, 6 = alerte RaidMode, 7 = expulsions,
 * 8 = retour au calme. */
const STEP_DURATIONS = [700, 130, 110, 90, 80, 300, 900, 2400, 100];

const RAIDERS = [
  { name: "FreeNitro77", avatar: "https://cdn.discordapp.com/embed/avatars/0.png", time: "03:12" },
  { name: "xX_Nitro_Xx", avatar: "https://cdn.discordapp.com/embed/avatars/1.png", time: "03:12" },
  { name: "user28471", avatar: "https://cdn.discordapp.com/embed/avatars/2.png", time: "03:12" },
  { name: "Nitro4You", avatar: "https://cdn.discordapp.com/embed/avatars/3.png", time: "03:12" },
  { name: "gift-bot-01", avatar: "https://cdn.discordapp.com/embed/avatars/4.png", time: "03:13" },
];

const MEMBERS = [
  { name: "RaidProtect", avatar: "/img/logo.png", bot: true, rp: true },
  { name: "Zallom", avatar: "/img/avatar/zallom.webp" },
  { name: "Arthur", avatar: "/img/avatar/derrios.webp" },
];

function JoinArrow() {
  return (
    <svg className={concept.joinArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
      <path d="M4 12h13m0 0-5-5m5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function RaidModeMockup() {
  const [step, setStep] = useState(0);
  const animated = useRef(true);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      animated.current = false;
      setStep(7);
      return;
    }
    const t = setTimeout(() => setStep(step >= 8 ? 0 : step + 1), STEP_DURATIONS[step]);
    return () => clearTimeout(t);
  }, [step]);

  const joined = Math.min(Math.max(step, 0), 5);
  const alerted = step >= 6;
  const kicked = step >= 7;

  return (
    <div className={`${concept.animWrap} ${concept.animWrapWide}`}>
      <div className={concept.raidScene}>
        <div className={concept.raidFeed}>
          {RAIDERS.slice(0, joined).map((r) => (
            <div key={r.name} className={concept.joinMsg}>
              <JoinArrow />
              <span>
                <strong>{r.name}</strong>{" "}
                {translate({ id: "mockup.raidmode.joined", message: "a rejoint le serveur." })}
              </span>
              <span className={concept.joinTime}>{r.time}</span>
            </div>
          ))}

          {alerted && (
            <div className={concept.raidAlert}>
              <div className={concept.raidAlertTitle}>
                <img src="/img/icons/iconAntiraidWhite.svg" alt="" loading="lazy" />
                {translate({ id: "mockup.raidmode.title", message: "RaidMode automatique activé !" })}
              </div>
              {translate({
                id: "mockup.raidmode.body",
                message: "Les nouveaux arrivants sont expulsés. Pour le désactiver, utilisez la commande",
              })}{" "}
              <span className={concept.commandMention}>/raidmode</span>.
            </div>
          )}
        </div>

        <div className={concept.memberList}>
          <div className={concept.memberHeader}>
            {translate(
              { id: "mockup.raidmode.members", message: "Membres — {count}" },
              { count: 3 + (kicked ? 0 : joined) }
            )}
          </div>
          {MEMBERS.map((m) => (
            <div key={m.name} className={concept.memberRow}>
              <img src={m.avatar} alt="" loading="lazy" />
              <span className={`${concept.memberName} ${m.rp ? concept.memberNameRP : ""}`}>{m.name}</span>
              {m.bot && <span className={concept.memberBot}><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor" /></svg>APP</span>}
            </div>
          ))}
          {RAIDERS.slice(0, joined).map((r, i) => (
            <div
              key={r.name}
              className={`${concept.memberRow} ${kicked ? concept.memberKicked : ""}`}
              style={kicked ? { transitionDelay: `${i * 130}ms` } : undefined}
            >
              <img src={r.avatar} alt="" loading="lazy" />
              <span className={concept.memberName}>{r.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
