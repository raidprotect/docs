import { useEffect, useState } from "react";
import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";
import concept from "./concept.module.css";
import styles from "./captcha.module.css";

/* Mockup animée du captcha, parcours Activity : le panneau de vérification,
 * clic sur « Vérifier », l'Activity s'ouvre (accord, puzzle, réussite), puis
 * Arthur est accueilli dans le salon. Boucle. Avec mouvement réduit, elle
 * reste sur l'écran « Vérification réussie ».
 *
 * Phases : 0 = panneau, 1 = clic, 2 = accord, 3 = accord accepté,
 * 4 = puzzle, 5 = pièce placée, 6 = réussite, 7 = accès accordé. */
const PHASE_DURATIONS = [1800, 600, 1900, 500, 1000, 1500, 2300, 2600];
const LAST = 6;
const SLIDE = 150;

const t = (id: string, message: string, values?: Record<string, string>) =>
  translate({ id: `mockup.captcha.${id}`, message }, values);

function Activity({ phase }: { phase: number }) {
  const server = t("serverName", "Ma Communauté");
  const current = phase >= 6 ? 2 : phase >= 4 ? 1 : 0;
  const steps = [t("stepConsent", "Accord"), t("stepChallenge", "Épreuve"), t("stepVerified", "Vérifié")];
  const done = phase >= 6;

  return (
    <div className={styles.activity}>
      <div className={styles.server}>
        <div className={styles.serverIcon}>MC</div>
        <div>
          <h4 className={styles.serverTitle}>{t("title", "Vérification")}</h4>
          <p className={styles.serverFor}>
            {t("for", "pour {server}", { server })}
          </p>
        </div>
      </div>

      <ol className={`${styles.steps} ${done ? styles.stepsOk : ""}`}>
        {steps.map((label, i) => (
          <li key={label} data-state={i < current ? "done" : i === current ? "current" : "todo"}>
            {label}
          </li>
        ))}
      </ol>

      {phase < 4 && (
        <>
          <p className={styles.consent}>
            {t(
              "consent",
              "Ce serveur demande une vérification de votre appareil pour détecter les automates et les doubles comptes."
            )}
          </p>
          <p className={styles.consentNote}>
            {t("consentNote", "L'équipe du serveur reçoit uniquement le résultat. Si vous refusez, vous ne pourrez pas accéder au serveur.")}
          </p>
          <div className={styles.actions}>
            <span className={`${styles.accept} ${phase === 3 ? styles.pressed : ""}`}>
              {t("accept", "J'accepte et je continue")}
            </span>
            <span className={styles.refuse}>{t("refuse", "Refuser")}</span>
          </div>
        </>
      )}

      {phase >= 4 && phase < 6 && (
        <>
          <p className={styles.hint}>{t("hint", "Faites glisser la pièce dans le trou.")}</p>
          <div className={`${styles.puzzle} ${phase === 5 ? styles.puzzleOk : ""}`} aria-hidden>
            <svg viewBox="0 0 320 180">
              <defs>
                <linearGradient id="cpzBg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#3b4a8f" />
                  <stop offset="0.55" stopColor="#8e4f8f" />
                  <stop offset="1" stopColor="#e0825e" />
                </linearGradient>
              </defs>
              <rect width="320" height="180" fill="url(#cpzBg)" />
              <circle cx="70" cy="48" r="26" fill="#ffd9a0" opacity="0.85" />
              <path d="M0 150 L70 100 L120 135 L190 80 L260 130 L320 95 L320 180 L0 180Z" fill="#1f2347" opacity="0.8" />
              <rect x="190" y="62" width="44" height="44" rx="8" fill="#000" opacity="0.5" />
              <g className={styles.piece} style={{ transform: `translateX(${phase === 5 ? SLIDE : 0}px)` }}>
                <rect x="36" y="62" width="44" height="44" rx="8" fill="#6a4f90" stroke="#fff" strokeOpacity="0.8" />
                <path d="M36 106 L58 84 L80 106Z" fill="#1f2347" opacity="0.8" />
              </g>
            </svg>
          </div>
          <div className={styles.slider} aria-hidden>
            {t("slide", "Glissez pour placer la pièce")}
            <span className={styles.knob} style={{ transform: `translateX(${phase === 5 ? 250 : 0}px)` }}>
              ›
            </span>
          </div>
        </>
      )}

      {phase >= 6 && (
        <div className={styles.result}>
          <div className={styles.resultIcon}>✓</div>
          <h5 className={styles.resultTitle}>{t("passTitle", "Vérification réussie")}</h5>
          <p className={styles.resultText}>{t("passText", "Bienvenue sur {server} !", { server })}</p>
        </div>
      )}
    </div>
  );
}

export default function CaptchaMockup() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setPhase(LAST);
      return;
    }
    const timer = setTimeout(() => setPhase((p) => (p + 1) % PHASE_DURATIONS.length), PHASE_DURATIONS[phase]);
    return () => clearTimeout(timer);
  }, [phase]);

  const message: DiscordMessageData = {
    components: [
      {
        type: 17,
        accent_color: 0xd35f5f,
        components: [
          {
            type: 10,
            content: `## ${t("panelTitle", "Système de vérification")}\n${t(
              "panelDescription",
              "Cliquez sur le bouton ci-dessous pour prouver que vous êtes humain et accéder au serveur."
            )}`,
          },
          { type: 1, components: [{ type: 2, style: 1, label: t("panelButton", "Vérifier"), custom_id: "captcha_verify" }] },
        ],
      },
    ],
  };

  const inActivity = phase >= 2 && phase <= LAST;
  const granted = phase === 7;

  return (
    <div className={`${concept.animWrap} ${concept.animWrapWide}`}>
      <div className={styles.stage}>
        {inActivity ? (
          <Activity phase={phase} />
        ) : (
          <div className={`${concept.tight} ${concept.wide}`}>
            <DiscordMessage message={message} />
            {phase === 1 && <div className={concept.chatText} aria-hidden>{t("opening", "L'Activity de vérification s'ouvre…")}</div>}
            {granted && (
              <div className={concept.systemLine}>
                <img src="/img/icons/iconSucceed.svg" alt="" width={16} height={16} loading="lazy" />
                {t("verified", "Arthur a été vérifié et a rejoint le serveur !")}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
