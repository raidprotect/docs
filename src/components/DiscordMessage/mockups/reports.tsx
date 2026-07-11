import { useEffect, useRef, useState } from "react";
import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import { formatInlineMarkdown } from "../markdown";
import type { ThreadData } from "../index";
import type { Component, DiscordMessageData } from "../types";
import concept from "./concept.module.css";

/* Mockup animée et interactive du parcours d'un signalement :
 * 1. Dans #général, le curseur fait un clic droit sur le message d'arnaque,
 *    passe par Applications, choisit "Signaler ce message" (icône
 *    RaidProtect), remplit la vraie modal du bot et envoie.
 * 2. Un badge clignote sur #signalements : si le visiteur clique dessus, la
 *    suite se joue ; sinon la boucle repart dans #général après quelques
 *    secondes (elle ne change jamais de salon toute seule).
 * 3. Dans #signalements : l'alerte du bot, clic sur "Prendre en charge",
 *    état pris en charge ; ensuite un badge pulse sur #général et l'animation
 *    attend le clic du visiteur pour recommencer. Statique si mouvement
 *    réduit.
 *
 * Phases : 0 repos, 1 curseur vers le message, 2 clic droit, 3 vers
 * Applications, 4 vers "Signaler ce message", 5 clic, 6 modal + saisie,
 * 7 vers Envoyer, 8 clic, 9 badge sur #signalements (clic visiteur ou
 * retour auto), 10 vers Prendre en charge, 11 clic, 12 pris en charge,
 * 13 badge sur #général en attente du clic visiteur. */
const PHASE_DURATIONS = [1400, 800, 350, 800, 700, 300, 0, 700, 300, 5200, 900, 300, 4200, 0];
const REASON = "Lien d'arnaque";
const SPAM_TEXT = "@everyone FREE NITRO 🎁 ➜ nitro-gift.click";

/* Position du curseur (pointe) par phase, relative à la scène. */
const CURSOR_POS: Array<[number, number]> = [
  [500, 330], // 0 repos
  [300, 84], // 1 sur le message
  [300, 84], // 2 clic droit
  [255, 182], // 3 vers Applications
  [445, 190], // 4 vers "Signaler ce message"
  [445, 190], // 5 clic
  [505, 330], // 6 pendant la saisie
  [432, 362], // 7 vers Envoyer
  [432, 362], // 8 clic
  [500, 330], // 9 attente
  [246, 172], // 10 vers Prendre en charge
  [246, 172], // 11 clic
  [500, 350], // 12 repos
  [500, 350], // 13 attente du retour au général
];

function Cursor({ phase }: { phase: number }) {
  const [x, y] = CURSOR_POS[phase];
  const press = phase === 2 || phase === 5 || phase === 8 || phase === 11;
  return (
    <svg
      className={concept.cursor}
      style={{ transform: `translate(${x}px, ${y}px)${press ? " scale(0.8)" : ""}`, marginLeft: 0, left: 0 }}
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

export default function ReportsMockup() {
  const [phase, setPhase] = useState(12);
  const [typed, setTyped] = useState(0);
  // Le curseur met ~650ms à glisser : les survols simulés ne s'activent
  // qu'une fois la souris arrivée, pour rester synchrones.
  const [arrived, setArrived] = useState(false);
  const animated = useRef(false);

  useEffect(() => {
    setArrived(false);
    const t = setTimeout(() => setArrived(true), 680);
    return () => clearTimeout(t);
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
    if (phase === 6) {
      const t = setInterval(() => {
        setTyped((n) => {
          if (n >= REASON.length) {
            clearInterval(t);
            setPhase(7);
            return n;
          }
          return n + 1;
        });
      }, 60);
      return () => clearInterval(t);
    }
    if (phase === 13) return; // attente du clic du visiteur sur #général
    const t = setTimeout(() => {
      // Badge ignoré par le visiteur : la boucle de base repart dans #général.
      if (phase === 9) {
        setTyped(0);
        setPhase(0);
      } else {
        setPhase(phase + 1);
      }
    }, PHASE_DURATIONS[phase]);
    return () => clearTimeout(t);
  }, [phase]);

  const inReports = phase >= 10;
  const menuOpen = phase >= 2 && phase <= 5;
  const subOpen = (phase === 3 && arrived) || phase === 4 || phase === 5;
  const subItemHover = (phase === 4 && arrived) || phase === 5;
  const modalOpen = phase >= 6 && phase <= 8;
  const badge = phase === 9;
  const badgeGeneral = phase === 13;
  const claimed = phase >= 12;

  const containerChildren: Component[] = [
    {
      type: 9,
      components: [
        {
          type: 10,
          content: [
            `### ![](/img/icons/iconReport.svg) ${translate({ id: "mockup.reports.title", message: "Nouveau signalement" })}`,
            `**${translate({ id: "mockup.reports.member", message: "Membre signalé" })}**`,
            "@Chaussette (`@chaussette`)",
          ].join("\n"),
        },
      ],
      accessory: { type: 11, media: { url: "/img/avatar/chaussette.webp" } },
    },
    { type: 13, divider: true },
    {
      type: 10,
      content: translate({
        id: "mockup.reports.count",
        message: "1 message & 1 profil signalé par 2 utilisateurs",
      }),
    },
    {
      type: 1,
      components: [
        claimed
          ? {
              type: 2,
              style: 3,
              label: translate({ id: "mockup.reports.claimed", message: "Pris en charge" }),
              custom_id: "claim",
              disabled: true,
            }
          : {
              type: 2,
              style: 3,
              label: translate({ id: "mockup.reports.claim", message: "Prendre en charge" }),
              custom_id: "claim",
            },
        {
          type: 2,
          style: 2,
          label: translate({ id: "mockup.reports.resolve", message: "Résolu" }),
          custom_id: "resolve",
        },
        {
          type: 2,
          style: 4,
          label: translate({ id: "mockup.reports.refuse", message: "Refuser" }),
          custom_id: "refuse",
        },
      ],
    },
  ];

  if (claimed) {
    containerChildren.push({
      type: 10,
      content: `${translate({ id: "mockup.reports.claimedBy", message: "Pris en charge par" })} @Zallom`,
    });
  }

  const alertMessage: DiscordMessageData = {
    components: [{ type: 17, accent_color: 0xed4245, components: containerChildren }],
  };

  const selectMessage: DiscordMessageData = {
    components: [
      {
        type: 1,
        components: [
          {
            type: 3,
            custom_id: "sanction",
            placeholder: translate({ id: "mockup.reports.sanction", message: "Sanctionner ce membre…" }),
            options: [
              { label: "Warn", value: "warn", emoji: { name: "/img/icons/SanctionsWARN.svg" } },
              { label: "Timeout", value: "timeout", emoji: { name: "/img/icons/SanctionsTIMEOUT.svg" } },
              { label: "Ban", value: "ban", emoji: { name: "/img/icons/SanctionsBAN.svg" } },
            ],
          },
        ],
      },
    ],
  };

  const thread: ThreadData = {
    name: translate({ id: "mockup.reports.threadName", message: "Signalement : @chaussette" }),
    messageCount: 2,
    lastMessage: {
      username: "Zallom",
      avatar: "/img/avatar/zallom.webp",
      content: translate({ id: "mockup.reports.threadLast", message: "a aussi signalé ce membre" }),
      when: translate({ id: "mockup.reports.threadWhen", message: "il y a 17 min" }),
    },
  };

  return (
    <div className={`${concept.animWrap} ${concept.reportsWrap}`}>
      <div className={concept.reportScene}>
        <div className={concept.channelBar}>
          <div
            className={`${concept.channelItem} ${inReports ? concept.channelClickable : concept.channelActive}`}
            onClick={() => {
              if (inReports) {
                setTyped(0);
                setPhase(0);
              }
            }}
          >
            <span className={concept.channelHash}>#</span>
            {translate({ id: "mockup.reports.channelGeneral", message: "général" })}
            {badgeGeneral && <span className={concept.channelBadge}>1</span>}
          </div>
          <div
            className={`${concept.channelItem} ${inReports ? concept.channelActive : ""} ${badge ? concept.channelClickable : ""}`}
            onClick={() => {
              if (badge) setPhase(10);
            }}
          >
            <span className={concept.channelHash}>#</span>
            {translate({ id: "mockup.reports.channelReports", message: "signalements" })}
            {badge && <span className={concept.channelBadge}>1</span>}
          </div>
        </div>

        <div className={concept.reportContent}>
          {!inReports ? (
            <>
              <div className={concept.chatMessage}>
                <img className={concept.chatAvatar} src="/img/avatar/derrios.webp" alt="" loading="lazy" />
                <div className={concept.chatBody}>
                  <div className={concept.chatHeader}>
                    <span className={concept.chatName}>Arthur</span>
                    <span className={concept.chatTime}>
                      {translate({ id: "mockup.reports.time1", message: "aujourd'hui à 18:41" })}
                    </span>
                  </div>
                  <div className={concept.chatText}>
                    {translate({ id: "mockup.reports.ambient", message: "bienvenue aux nouveaux !" })}
                  </div>
                </div>
              </div>
              <div className={`${concept.chatMessage} ${concept.chatPinged}`}>
                <img className={concept.chatAvatar} src="/img/avatar/chaussette.webp" alt="" loading="lazy" />
                <div className={concept.chatBody}>
                  <div className={concept.chatHeader}>
                    <span className={concept.chatName}>Chaussette</span>
                    <span className={concept.chatTime}>
                      {translate({ id: "mockup.reports.time2", message: "aujourd'hui à 18:42" })}
                    </span>
                  </div>
                  <div className={concept.chatText}>{formatInlineMarkdown(SPAM_TEXT)}</div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={concept.tight}>
                <DiscordMessage message={alertMessage} />
              </div>
              {claimed && (
                <div className={`${concept.tight} ${concept.selectSlot}`}>
                  <DiscordMessage message={selectMessage} />
                </div>
              )}
              <div className={concept.tight}>
                <DiscordMessage message={{ components: [] }} thread={thread} />
              </div>
            </>
          )}
        </div>

        {menuOpen && (
          <div className={concept.ctxMenu} style={{ top: 96, left: 180 }}>
            <div className={concept.ctxItem}>
              {translate({ id: "mockup.reports.ctxReply", message: "Répondre" })}
            </div>
            <div className={concept.ctxItem}>
              {translate({ id: "mockup.reports.ctxCopy", message: "Copier le texte" })}
            </div>
            <div className={concept.ctxSep} />
            <div className={`${concept.ctxItem} ${concept.ctxItemFlex} ${subOpen ? concept.ctxItemHover : ""}`}>
              {translate({ id: "mockup.reports.ctxApps", message: "Applications" })}
              <svg className={concept.ctxChevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        )}

        {subOpen && (
          <div className={concept.ctxSub} style={{ top: 168, left: 378 }}>
            <div className={`${concept.ctxItem} ${concept.ctxItemApp} ${subItemHover ? concept.ctxItemHover : ""}`}>
              <img className={concept.ctxAppIcon} src="/img/logo.png" alt="" loading="lazy" />
              {translate({ id: "mockup.reports.ctxReport", message: "Signaler ce message" })}
            </div>
          </div>
        )}

        {modalOpen && (
          <>
            <div className={concept.modalOverlay} />
            <div className={concept.modal}>
              <div className={concept.modalBody}>
                <div className={concept.modalTitle}>
                  {translate({ id: "mockup.reports.modalTitle", message: "Signaler un message" })}
                </div>
                <div className={concept.modalSection}>
                  <div className={concept.modalLabel}>
                    {translate({ id: "mockup.reports.modalReason", message: "Raison" })}
                  </div>
                  <div className={concept.modalInput}>
                    {phase === 6 ? (
                      <>
                        {REASON.slice(0, typed)}
                        <span className={concept.caret} />
                      </>
                    ) : (
                      REASON
                    )}
                  </div>
                </div>
                <div className={concept.modalSection}>
                  <div className={concept.modalLabel}>
                    {translate({ id: "mockup.reports.modalPreventive", message: "Action préventive" })}
                  </div>
                  <div className={concept.modalDesc}>
                    {translate({
                      id: "mockup.reports.modalPreventiveDesc",
                      message: "En tant que membre de confiance, vous pouvez appliquer une mesure immédiate.",
                    })}
                  </div>
                  <div className={concept.modalCheck}>
                    <span className={concept.modalCheckBox} />
                    {translate({
                      id: "mockup.reports.modalPreventiveOption",
                      message: "Timeout préventif de 24h (en attendant un modérateur)",
                    })}
                  </div>
                </div>
              </div>
              <div className={concept.modalFooter}>
                <span className={concept.modalCancel}>
                  {translate({ id: "mockup.reports.modalCancel", message: "Annuler" })}
                </span>
                <span className={concept.modalSubmit}>
                  {translate({ id: "mockup.reports.modalSubmit", message: "Envoyer" })}
                </span>
              </div>
            </div>
          </>
        )}

        <Cursor phase={phase} />
      </div>
    </div>
  );
}
