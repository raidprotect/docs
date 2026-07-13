import { useEffect, useRef, useState } from "react";
import { translate } from "@docusaurus/Translate";
import concept from "./concept.module.css";

/* Mockup schématique animée de /audit : la commande et son récap (mauvais
 * score, jauges par catégorie, bouton Corriger) sont déjà affichés, le
 * curseur clique Corriger et le message s'édite : tout passe au vert, les
 * audit logs défilent, tout est clean. Boucle. Statique (état corrigé) si
 * mouvement réduit.
 *
 * Phases : 0 repos, 1 curseur vers Corriger, 2 clic, 3 chargement (bouton
 * grisé), 4 corrigé (édité), 5 reset. */
const PHASE_DURATIONS = [900, 1400, 300, 1100, 3800, 100];

const GAUGES = [
  { icon: "/img/icons/iconSettings.svg", labelId: "mockup.audit.gaugeServer", label: "Serveur", value: 68 },
  { icon: "/img/icons/iconRole.svg", labelId: "mockup.audit.gaugeRoles", label: "Rôles", value: 45 },
  { icon: "/img/icons/iconChannelText.svg", labelId: "mockup.audit.gaugeChannels", label: "Salons", value: 82 },
];

const CURSOR_POS: Array<[number, number]> = [
  [340, 262], // 0 repos
  [120, 230], // 1 vers Corriger (recalé au runtime)
  [120, 230], // 2 clic
  [120, 230], // 3 chargement (le curseur reste sur le bouton)
  [340, 262], // 4 corrigé
  [340, 262], // 5 reset
];

function Cursor({ phase, target }: { phase: number; target: [number, number] | null }) {
  const [x, y] = phase >= 1 && phase <= 3 && target ? target : CURSOR_POS[phase];
  return (
    <svg
      className={concept.cursor}
      style={{ transform: `translate(${x}px, ${y}px)${phase === 2 ? " scale(0.8)" : ""}`, marginLeft: 0, left: 0 }}
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

export default function AuditMockup() {
  const [phase, setPhase] = useState(4);
  const [btnPos, setBtnPos] = useState<[number, number] | null>(null);
  const [arrived, setArrived] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    setArrived(false);
    const t = setTimeout(() => setArrived(true), 680);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase === 1 && sceneRef.current && btnRef.current) {
      const sr = sceneRef.current.getBoundingClientRect();
      const br = btnRef.current.getBoundingClientRect();
      setBtnPos([br.left - sr.left + br.width / 2 - 7, br.top - sr.top + br.height / 2 - 3]);
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
    const t = setTimeout(() => setPhase(phase >= 5 ? 0 : phase + 1), PHASE_DURATIONS[phase]);
    return () => clearTimeout(t);
  }, [phase]);

  const loading = phase === 3;
  const clean = phase >= 4;

  return (
    <div className={`${concept.animWrap} ${concept.animWrapWide} ${concept.auditWrap}`} ref={sceneRef}>
      <div className={concept.auditInvoked}>
        <img src="/img/avatar/zallom.webp" alt="" loading="lazy" />
        <span>
          <strong>Zallom</strong>{" "}
          {translate({ id: "mockup.audit.invoked", message: "a utilisé" })} <strong>/audit</strong>
        </span>
      </div>

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
              </div>

              <div className={concept.auditFlex}>
              <div className={`${concept.auditCard} ${clean ? concept.auditCardClean : ""}`}>
                <div className={concept.auditTitle}>
                  <img src="/img/icons/iconSearch.svg" alt="" loading="lazy" />
                  {translate({ id: "mockup.audit.title", message: "Audit de sécurité" })}
                </div>

                <div className={concept.auditScore}>
                  <img src={clean ? "/img/icons/RankS.svg" : "/img/icons/RankC.svg"} alt="" loading="lazy" />
                  {clean
                    ? translate({ id: "mockup.audit.scoreClean", message: "Score global : 100/100" })
                    : translate({ id: "mockup.audit.score", message: "Score global : 65/100" })}
                </div>

                {GAUGES.map((g) => {
                  const value = clean ? 100 : g.value;
                  return (
                    <div key={g.labelId} className={concept.gaugeRow}>
                      <span className={concept.gaugeLabel}>
                        <img src={g.icon} alt="" loading="lazy" />
                        {translate({ id: g.labelId, message: g.label })}
                      </span>
                      <span className={concept.gauge}>
                        <span
                          className={concept.gaugeFill}
                          style={{ width: `${value}%`, backgroundColor: value === 100 ? "#23a55a" : value >= 60 ? "#e5b117" : "#e58422" }}
                        />
                      </span>
                      <span className={concept.gaugeValue}>{value}</span>
                    </div>
                  );
                })}

                {!clean ? (
                  <span
                    ref={btnRef}
                    className={`${concept.auditFix} ${
                      loading
                        ? concept.auditFixLoading
                        : phase === 2
                          ? concept.auditFixActive
                          : phase === 1 && arrived
                            ? concept.auditFixHover
                            : ""
                    }`}
                  >
                    {loading ? (
                      <span className={concept.dmSpinner} />
                    ) : (
                      <img src="/img/icons/iconSucceed.svg" alt="" width={15} height={15} loading="lazy" />
                    )}
                    {translate({ id: "mockup.audit.fix", message: "Corriger" })}
                  </span>
                ) : (
                  <div style={{ minHeight: 30 }}>
                    <div className={concept.auditClean}>
                      <img src="/img/icons/iconSucceed.svg" alt="" loading="lazy" />
                      {translate({ id: "mockup.audit.clean", message: "Tout est clean !" })}
                      <span className={concept.auditEdited}>
                        {translate({ id: "mockup.audit.edited", message: "(modifié)" })}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {clean && (
                <div className={concept.auditLogs}>
                  {[
                    { icon: "/img/icons/iconSettings.svg", id: "mockup.audit.log1", msg: "Niveau de vérification → Élevé" },
                    { icon: "/img/icons/iconRole.svg", id: "mockup.audit.log2", msg: "Permissions @everyone réduites" },
                    { icon: "/img/icons/iconChannelText.svg", id: "mockup.audit.log3", msg: "Salons redondants nettoyés" },
                  ].map((log, i) => (
                    <div key={log.id} className={concept.auditLogItem} style={{ animationDelay: `${i * 200}ms` }}>
                      <img src={log.icon} alt="" loading="lazy" />
                      {translate({ id: log.id, message: log.msg })}
                    </div>
                  ))}
                </div>
              )}
              </div>
            </div>
          </div>

      <Cursor phase={phase} target={btnPos} />
    </div>
  );
}
