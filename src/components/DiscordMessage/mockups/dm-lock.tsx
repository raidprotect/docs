import { useEffect, useRef, useState } from "react";
import { translate } from "@docusaurus/Translate";
import concept from "./concept.module.css";

/* Mockup animée de la Fermeture des MP : Zallom active la protection, puis
 * Chaussette lance une campagne de mass DM. Toute la liste des cibles
 * apparaît avec un envoi en cours (spinner), et chaque envoi se résout un à
 * un : croix (bloqué), sauf un ami (l'exception native) qui passe au check.
 * Chaussette récolte l'erreur Discord "message non distribué". Boucle.
 * Statique (campagne bloquée) si mouvement réduit.
 *
 * Étapes : 0 repos, 1 activation, 2 spam + liste en chargement,
 * 3-7 résolutions une à une, 8 erreur de distribution + pause, 9 reset. */
const STEP_DURATIONS = [800, 900, 1000, 420, 380, 360, 340, 380, 3400, 100];
const SPAM = "🎁 Tu as gagné un Nitro ! Réclame-le ici : nitro-gift.click";

const TARGETS = [
  { name: "Arthur", avatar: "/img/avatar/derrios.webp", friend: false },
  { name: "Dawoox", avatar: "/img/avatar/dawoox.webp", friend: false },
  { name: "Ichii", avatar: "/img/avatar/ichii.webp", friend: true },
  { name: "Zallom", avatar: "/img/avatar/zallom.webp", friend: false },
  { name: "user28471", avatar: "https://cdn.discordapp.com/embed/avatars/2.png", friend: false },
];

export default function DmLockMockup() {
  const [step, setStep] = useState(8);
  const animated = useRef(false);

  useEffect(() => {
    if (!animated.current) {
      if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
      animated.current = true;
      setStep(0);
      return;
    }
    const t = setTimeout(() => setStep(step >= 9 ? 0 : step + 1), STEP_DURATIONS[step]);
    return () => clearTimeout(t);
  }, [step]);

  const locked = step >= 1;
  const posted = step >= 2;
  const failed = step >= 8;
  const resolved = Math.min(Math.max(step - 2, 0), TARGETS.length);
  const delivered = TARGETS.slice(0, resolved).filter((t) => t.friend).length;

  return (
    <div className={`${concept.animWrap} ${concept.animWrapWide} ${concept.dmWrap}`}>
      <div className={concept.dmScene}>
        <div className={concept.dmFeed}>
          {locked && (
            <div className={concept.systemLine}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} width={15} height={15} aria-hidden="true">
                <rect x="5" y="11" width="14" height="9" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
              {translate({
                id: "mockup.dmlockConcept.activated",
                message: "Zallom a activé la Fermeture des MP.",
              })}
            </div>
          )}

          {posted && (
            <div className={concept.chatMessage}>
              <img className={concept.chatAvatar} src="/img/avatar/chaussette.webp" alt="" loading="lazy" />
              <div className={concept.chatBody}>
                <div className={concept.chatHeader}>
                  <span className={concept.chatName}>Chaussette</span>
                  <span className={concept.chatTime}>
                    {translate({ id: "mockup.dmlockConcept.time", message: "aujourd'hui à 03:12" })}
                  </span>
                </div>
                <div className={concept.chatText}>{SPAM}</div>
                <div className={concept.dmCampaign}>
                  {translate({
                    id: "mockup.dmlockConcept.campaign",
                    message: "envoyé en MP à tous les membres du serveur…",
                  })}
                </div>
              </div>
            </div>
          )}

          {failed && (
            <div className={concept.dmError}>
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <circle cx="8" cy="8" r="7" fill="currentColor" />
                <path d="M8 4v5M8 11.4v.2" stroke="#1e1f22" strokeWidth={1.8} strokeLinecap="round" />
              </svg>
              {translate({
                id: "mockup.dmlockConcept.undelivered",
                message: "Votre message n'a pas pu être distribué.",
              })}
            </div>
          )}
        </div>

        <div className={concept.memberList}>
          <div className={concept.memberHeader}>
            {translate(
              { id: "mockup.dmlockConcept.targets", message: "Mass DM · {delivered}/{total} reçus" },
              { delivered, total: TARGETS.length }
            )}
          </div>
          {posted &&
            TARGETS.map((target, i) => (
              <div key={target.name} className={concept.memberRow}>
                <img src={target.avatar} alt="" loading="lazy" />
                <span className={concept.memberName}>{target.name}</span>
                {target.friend && (
                  <span className={concept.dmFriendTag}>
                    {translate({ id: "mockup.dmlockConcept.friend", message: "ami" })}
                  </span>
                )}
                {i < resolved ? (
                  <span className={`${concept.dmStatus} ${target.friend ? concept.dmStatusOk : concept.dmStatusBlocked}`}>
                    {target.friend ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.2} aria-hidden="true">
                        <path d="M4 12.5 10 18.5 20 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.2} aria-hidden="true">
                        <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                      </svg>
                    )}
                  </span>
                ) : (
                  <span className={concept.dmStatus}>
                    <span className={concept.dmSpinner} />
                  </span>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
