import { useEffect, useRef, useState } from "react";
import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";
import concept from "./concept.module.css";

/* Mockup animée du captcha : le message de vérification du bot, puis Arthur
 * tape le code dans le salon, l'envoie et se fait vérifier. Boucle. Statique
 * si mouvement réduit.
 *
 * Phases : 0 = repos, 1 = saisie du code, 2 = message envoyé,
 * 3 = vérifié. */
const CODE = "RKFTQZ";
const PHASE_DURATIONS = [1600, 0, 1100, 2800];

export default function CaptchaMockup() {
  const [phase, setPhase] = useState(0);
  const [typed, setTyped] = useState(0);
  const animated = useRef(true);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      animated.current = false;
      return;
    }
    if (phase === 1) {
      const t = setInterval(() => {
        setTyped((n) => {
          if (n >= CODE.length) {
            clearInterval(t);
            setPhase(2);
            return n;
          }
          return n + 1;
        });
      }, 150);
      return () => clearInterval(t);
    }
    const t = setTimeout(() => {
      if (phase === 0) {
        setTyped(0);
        setPhase(1);
      } else if (phase === 3) {
        setTyped(0);
        setPhase(0);
      } else {
        setPhase(phase + 1);
      }
    }, PHASE_DURATIONS[phase]);
    return () => clearTimeout(t);
  }, [phase]);

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

  const sent = phase >= 2;
  const verified = phase === 3;

  return (
    <div className={`${concept.animWrap} ${concept.animWrapWide} ${concept.captchaWrap}`}>
      <div className={`${concept.tight} ${concept.wide}`}>
        <DiscordMessage message={message} />
      </div>

      {/* Espace réservé pour les messages : sa hauteur est fixe, la barre de
          saisie en dessous ne bouge donc jamais quand un message arrive. */}
      <div className={concept.captchaFeed}>
        {sent && (
          <div className={concept.chatMessage}>
            <img className={concept.chatAvatar} src="/img/avatar/derrios.webp" alt="" loading="lazy" />
            <div className={concept.chatBody}>
              <div className={concept.chatHeader}>
                <span className={concept.chatName}>Arthur</span>
                <span className={concept.chatTime}>
                  {translate({ id: "mockup.captcha.now", message: "aujourd'hui à 18:42" })}
                </span>
              </div>
              <div className={concept.chatText}>{CODE}</div>
            </div>
          </div>
        )}

        {verified && (
          <div className={concept.systemLine}>
            <img src="/img/icons/iconSucceed.svg" alt="" width={16} height={16} loading="lazy" />
            {translate({ id: "mockup.captcha.verified", message: "Arthur a été vérifié et a rejoint le serveur !" })}
          </div>
        )}
      </div>

      <div className={concept.chatInput}>
        {animated.current && phase === 1 ? (
          <>
            {CODE.slice(0, typed)}
            <span className={concept.caret} />
          </>
        ) : (
          <span className={concept.chatPlaceholder}>
            {translate({ id: "mockup.captcha.inputPlaceholder", message: "Message #vérification" })}
          </span>
        )}
      </div>
    </div>
  );
}
