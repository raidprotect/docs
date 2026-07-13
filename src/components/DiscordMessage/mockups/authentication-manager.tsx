import { useEffect, useRef, useState } from "react";
import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";
import concept from "./concept.module.css";

/* Mockup concept animée de l'Authentication Manager, sur le modèle du Rôle
 * de Tag : le profil à gauche, et à droite Zallom tape /auth, choisit la
 * Passkey, vérification schématique (paf, vérifié), et le rôle @Admin
 * apparaît sur le profil le temps d'une session. Boucle. Statique (rôle
 * attribué) si mouvement réduit.
 *
 * Phases : 0 repos, 1 saisie de /auth, 2 panneau + curseur vers le bouton,
 * 3 clic, 4 vérification, 5 vérifié, 6 rôle attribué, 7 reset,
 * 8 refusé (un cycle sur deux : pas de passkey valide). */
const PHASE_DURATIONS = [900, 0, 1000, 300, 800, 900, 3400, 100, 2400];
const COMMAND = "/auth";

const CURSOR_POS: Array<[number, number]> = [
  [300, 335], // 0 repos
  [300, 335], // 1 saisie
  [85, 170], // 2 vers S'authentifier
  [85, 170], // 3 clic
  [300, 335], // 4 vérification
  [300, 335], // 5 vérifié
  [300, 335], // 6 rôle attribué
  [300, 335], // 7 reset
  [300, 335], // 8 refusé
];

function Cursor({ phase, target }: { phase: number; target: [number, number] | null }) {
  const [x, y] = (phase === 2 || phase === 3) && target ? target : CURSOR_POS[phase];
  return (
    <svg
      className={concept.cursor}
      style={{ transform: `translate(${x}px, ${y}px)${phase === 3 ? " scale(0.8)" : ""}`, marginLeft: 0, left: 0 }}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M5 2 L5 19 L9.5 15 L12.5 21.5 L15.5 20 L12.5 13.7 L18.5 13.2 Z"
        fill="#ffffff"
        stroke="#111214"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AuthenticationManagerMockup() {
  const [phase, setPhase] = useState(6);
  const [typed, setTyped] = useState(0);
  // Cible du curseur mesurée au runtime sur le vrai bouton : la pointe du
  // curseur (offset ~7,3 dans le SVG) atterrit au centre du bouton.
  const [btnPos, setBtnPos] = useState<[number, number] | null>(null);
  // Les survols simulés attendent l'arrivée du curseur (transition ~650ms).
  const [arrived, setArrived] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);
  // Un cycle sur deux, l'authentification est refusée : c'est le cycle
  // "hacker sur le compte", affiché dès le début du cycle sur le cadre.
  const attempt = useRef(0);
  const [hacker, setHacker] = useState(false);

  useEffect(() => {
    setArrived(false);
    const t = setTimeout(() => setArrived(true), 680);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase === 2 && sceneRef.current) {
      const btn = sceneRef.current.querySelector("button");
      if (btn) {
        const sr = sceneRef.current.getBoundingClientRect();
        const br = btn.getBoundingClientRect();
        setBtnPos([br.left - sr.left + br.width / 2 - 7, br.top - sr.top + br.height / 2 - 3]);
      }
    }
  }, [phase]);

  useEffect(() => {
    if (!animated.current) {
      if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
      animated.current = true;
      setPhase(0);
      return;
    }
    if (phase === 1) {
      const t = setInterval(() => {
        setTyped((n) => {
          if (n >= COMMAND.length) {
            clearInterval(t);
            setPhase(2);
            return n;
          }
          return n + 1;
        });
      }, 110);
      return () => clearInterval(t);
    }
    const t = setTimeout(() => {
      if (phase === 7 || phase === 8) {
        attempt.current++;
        setHacker(attempt.current % 2 === 1);
        setTyped(0);
        setPhase(0);
      } else if (phase === 4) {
        setPhase(attempt.current % 2 === 1 ? 8 : 5);
      } else {
        setPhase(phase + 1);
      }
    }, PHASE_DURATIONS[phase]);
    return () => clearTimeout(t);
  }, [phase]);

  const panelOpen = phase === 2 || phase === 3;
  const verifying = phase === 4;
  const verified = phase === 5;
  const granted = phase === 6 || phase === 7;
  const refused = phase === 8;

  const panelMessage: DiscordMessageData = {
    components: [
      {
        type: 17,
        accent_color: 0xd35f5f,
        components: [
          {
            type: 10,
            content: [
              `### ![](/img/icons/iconKey.svg) ${translate({ id: "mockup.auth.title", message: "Authentification requise" })}`,
              translate({ id: "mockup.auth.bodyShort", message: "Pour recevoir @Admin, authentifiez-vous." }),
              `-# ${translate({ id: "mockup.auth.session", message: "Durée de session : 8h" })}`,
            ].join("\n"),
          },
          { type: 13, divider: true },
          {
            type: 1,
            components: [
              {
                type: 2,
                style: 1,
                label: translate({ id: "mockup.authConcept.authenticate", message: "S'authentifier" }),
                custom_id: "auth-authenticate",
                emoji: { name: "/img/icons/iconKey.svg" },
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div className={concept.authWrap} aria-hidden>
      <div className={concept.authScene} ref={sceneRef}>
        <div className={`${concept.authRight} ${hacker ? concept.authFrameDanger : concept.authFrameOk}`}>
          <svg className={concept.authFrameGlow} aria-hidden="true">
            <rect rx={9} pathLength={100} />
          </svg>
          <span className={concept.authFrameLabel}>
            {hacker
              ? translate({ id: "mockup.authConcept.frameHacker", message: "Hacker sur le compte" })
              : translate({ id: "mockup.authConcept.frameLegit", message: "Personne légitime" })}
          </span>
          {panelOpen && (
            <div
              className={`${concept.tight} ${
                phase === 3 ? concept.panelActive : arrived ? concept.panelHover : ""
              }`}
            >
              <DiscordMessage message={panelMessage} />
            </div>
          )}

          {verifying && (
            <div className={concept.authVerify}>
              <img src="/img/icons/iconKey.svg" alt="" loading="lazy" />
              <span className={concept.authVerifyLabel}>
                {translate({ id: "mockup.authConcept.verifying", message: "Vérification de la passkey…" })}
              </span>
            </div>
          )}

          {refused && (
            <div className={concept.authVerify}>
              <span className={concept.authCross}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.2} aria-hidden="true">
                  <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                </svg>
              </span>
              <span className={`${concept.authVerifyLabel} ${concept.authFailed}`}>
                {translate({ id: "mockup.authConcept.refused", message: "Refusé : aucune passkey valide" })}
              </span>
            </div>
          )}

          {(verified || granted) && (
            <div className={concept.authVerify}>
              <span className={concept.authCheck}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.2} aria-hidden="true">
                  <path d="M4 12.5 10 18.5 20 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className={`${concept.authVerifyLabel} ${concept.authVerified}`}>
                {granted
                  ? translate({ id: "mockup.authConcept.granted", message: "Rôle @Admin attribué · session 8h" })
                  : translate({ id: "mockup.authConcept.verified", message: "Vérifié" })}
              </span>
            </div>
          )}

          <div className={concept.chatInput}>
            {phase === 1 ? (
              <>
                {COMMAND.slice(0, typed)}
                <span className={concept.caret} />
              </>
            ) : (
              <span className={concept.chatPlaceholder}>
                {translate({ id: "mockup.authConcept.inputPlaceholder", message: "Message #staff" })}
              </span>
            )}
          </div>
        </div>

        <div className={concept.profileCard}>
          <div className={concept.profileBanner} />
          <div className={concept.profileBody}>
            <div className={concept.profileAvatarWrap}>
              <img className={concept.profileAvatar} src="/img/avatar/zallom.webp" alt="" loading="lazy" />
              <span className={concept.profileStatus} />
            </div>
            <div className={`${concept.profileName} ${granted ? "" : concept.profileNameMuted}`}>Zallom</div>
            <div className={concept.profileUsernameRow}>
              <span className={concept.profileUsername}>zallom</span>
            </div>
            <div className={concept.roles}>
              <span className={`${concept.roleChip} ${concept.roleChipNew} ${granted ? "" : concept.roleHidden}`}>
                <span className={concept.roleDot} />
                <span className={concept.roleLabel}>Admin</span>
              </span>
              <span className={concept.roleChip}>
                <span className={concept.roleDot} />
                {translate({ id: "mockup.authConcept.roleMember", message: "Membre" })}
              </span>
              {granted && <span className={concept.roleAdd}>+</span>}
            </div>
          </div>
        </div>

        <Cursor phase={phase} target={btnPos} />
      </div>
    </div>
  );
}
