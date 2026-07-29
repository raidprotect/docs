import { useEffect, useRef, useState } from "react";
import { translate } from "@docusaurus/Translate";
import DiscordMessage from "../index";
import type { DiscordMessageData } from "../types";
import concept from "./concept.module.css";

/* Mockup animée du parcours d'ouverture de la vue de modération :
 * 1. Dans #général, le curseur fait un clic droit sur le message d'Arthur,
 *    passe par Applications et choisit "Ouvrir ModView" (icône RaidProtect).
 * 2. La ModView s'ouvre en réponse éphémère sous le message : identité, infos
 *    compte, note, dernières sanctions et menu de sanction rapide.
 * 3. Après quelques secondes la boucle repart. Statique si mouvement réduit.
 *
 * Phases : 0 repos, 1 curseur vers le message, 2 clic droit, 3 vers
 * Applications, 4 vers "Ouvrir ModView", 5 clic, 6 ModView affichée. */
const PHASE_DURATIONS = [1600, 800, 1100, 900, 700, 300, 6000];

/* Position du curseur (pointe) par phase, relative à la scène. */
const CURSOR_POS: Array<[number, number]> = [
  [400, 200], // 0 repos
  [160, 36], // 1 sur le message
  [160, 36], // 2 clic droit
  [150, 140], // 3 vers Applications
  [340, 146], // 4 vers "Ouvrir ModView"
  [340, 146], // 5 clic
  [400, 200], // 6 ModView ouverte
];

function Cursor({ phase }: { phase: number }) {
  const [x, y] = CURSOR_POS[phase];
  const press = phase === 2 || phase === 5;
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

/* animate=false : la ModView est affichée d'emblée, sans le parcours clic droit
 * (utilisé sur la landing, où le contexte du salon manque et l'animation ne
 * ferait que du vide). animate=true : parcours complet, pour la doc. */
export default function ModerationMockup({ animate = true }: { animate?: boolean } = {}) {
  const [phase, setPhase] = useState(6);
  // Le curseur met ~650ms à glisser : les survols simulés ne s'activent
  // qu'une fois la souris arrivée, pour rester synchrones.
  const [arrived, setArrived] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    setArrived(false);
    const t = setTimeout(() => setArrived(true), 680);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (!animate) return; // mode statique : la ModView reste ouverte (phase 6)
    if (!started.current) {
      if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
      started.current = true;
      setPhase(0);
      return;
    }
    const t = setTimeout(() => setPhase(phase === 6 ? 0 : phase + 1), PHASE_DURATIONS[phase]);
    return () => clearTimeout(t);
  }, [phase, animate]);

  const menuOpen = phase >= 2 && phase <= 5;
  const subOpen = (phase === 3 && arrived) || phase === 4 || phase === 5;
  const subItemHover = (phase === 4 && arrived) || phase === 5;
  const modviewOpen = phase === 6;

  const modview: DiscordMessageData = {
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
                content: `## ![](/img/icons/iconModView.svg) Arthur\n@Arthur (\`arthur\`)\n-# ![](/img/icons/iconSucceed.svg) ${translate({
                  id: "mockup.modview.member",
                  message: "Membre du serveur",
                })}`,
              },
            ],
            accessory: { type: 11, media: { url: "/img/avatar/derrios.webp" } },
          },
          { type: 13, divider: true },
          {
            type: 10,
            content: [
              `**${translate({ id: "mockup.modview.created", message: "Création du compte" })}** 12/03/2021 (${translate({ id: "mockup.modview.createdRel", message: "il y a 5 ans" })})`,
              `**${translate({ id: "mockup.modview.joined", message: "Membre depuis" })}** 02/09/2024 (${translate({ id: "mockup.modview.joinedRel", message: "il y a 2 ans" })})`,
              `**${translate({ id: "mockup.modview.nick", message: "Pseudo" })}** \`Arthurio ⚡\``,
              `**${translate({ id: "mockup.modview.perms", message: "Permissions :" })}** ${translate({ id: "mockup.modview.permsValue", message: "Membre" })} (**4** ${translate({ id: "mockup.modview.roles", message: "rôles" })})`,
            ].join("\n"),
          },
          { type: 13, divider: true },
          {
            type: 9,
            components: [
              {
                type: 10,
                content: `### ![](/img/icons/iconCustom.svg) ${translate({ id: "mockup.modview.note", message: "Note" })}\n-# ${translate({
                  id: "mockup.modview.noteEmpty",
                  message: "Aucune note.",
                })}`,
              },
            ],
            accessory: {
              type: 2,
              style: 1,
              label: translate({ id: "mockup.modview.noteEdit", message: "Modifier" }),
              custom_id: "modview-note",
            },
          },
          { type: 13, divider: true },
          {
            type: 9,
            components: [
              {
                type: 10,
                content: `### ![](/img/icons/iconSanctions.svg) ${translate({ id: "mockup.modview.sanctions", message: "Dernières sanctions" })} (**2**/**5**)`,
              },
            ],
            accessory: {
              type: 2,
              style: 2,
              label: translate({ id: "mockup.modview.sanctionsAll", message: "Voir toutes les sanctions" }),
              custom_id: "modview-sanctions",
            },
          },
          {
            type: 10,
            content: [
              `![](/img/icons/SanctionsTIMEOUT.svg) ${translate({ id: "mockup.modview.row1", message: "Timeout il y a 3 jours." })}`,
              `-# ![](/img/icons/iconID.svg) \`A1B2C3\` ![](/img/icons/SanctionStatusEXPIRED.svg) • ${translate({ id: "mockup.modview.mod", message: "Mod :" })} @Zallom`,
              `![](/img/icons/SanctionsWARN.svg) ${translate({ id: "mockup.modview.row2", message: "Avertissement il y a 5 heures." })}`,
              `-# ![](/img/icons/iconID.svg) \`D4E5F6\` ![](/img/icons/SanctionStatusACTIVE.svg) • ${translate({ id: "mockup.modview.mod", message: "Mod :" })} @Chaussette`,
            ].join("\n"),
          },
          { type: 13, divider: true },
          { type: 10, content: "-# ![](/img/icons/iconID.svg) `582749300512348171`" },
          {
            type: 1,
            components: [
              {
                type: 3,
                custom_id: "modview-sanction",
                placeholder: translate({ id: "mockup.modview.sanctionPlaceholder", message: "Sanctionner l'utilisateur" }),
                options: [
                  { label: "Warn", value: "warn", emoji: { name: "/img/icons/SanctionsWARN.svg" } },
                  { label: "Timeout", value: "timeout", emoji: { name: "/img/icons/SanctionsTIMEOUT.svg" } },
                  { label: "Kick", value: "kick", emoji: { name: "/img/icons/SanctionsKICK.svg" } },
                  { label: "Ban", value: "ban", emoji: { name: "/img/icons/SanctionsBAN.svg" } },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div className={`${concept.animWrap} ${concept.modviewWrap} ${!animate ? concept.modviewStatic : ""}`}>
      <div className={concept.modviewScene}>
        <div className={concept.reportContent}>
          {animate && (
            <div className={concept.chatMessage}>
              <img className={concept.chatAvatar} src="/img/avatar/derrios.webp" alt="" loading="lazy" />
              <div className={concept.chatBody}>
                <div className={concept.chatHeader}>
                  <span className={concept.chatName}>Arthur</span>
                  <span className={concept.chatTime}>
                    {translate({ id: "mockup.modview.time", message: "aujourd'hui à 19:03" })}
                  </span>
                </div>
                <div className={concept.chatText}>
                  {translate({ id: "mockup.modview.chat", message: "vous faites vraiment n'importe quoi ici" })}
                </div>
              </div>
            </div>
          )}

          {modviewOpen && (
            <div className={concept.ephemeral}>
              <div className={concept.ephemeralCard}>
                <DiscordMessage message={modview} />
              </div>
              <div className={concept.ephemeralNote}>
                <svg className={concept.ephemeralIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 5c-5 0-9 4.5-9 7s4 7 9 7 9-4.5 9-7-4-7-9-7Zm0 11.5A4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 0 1 0 9Zm0-7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
                </svg>
                {translate({ id: "mockup.modview.ephemeral", message: "Seul vous pouvez voir cela" })}
                <span className={concept.ephemeralSep}>•</span>
                <span className={concept.ephemeralDismiss}>
                  {translate({ id: "mockup.modview.dismiss", message: "Ignorer le message" })}
                </span>
              </div>
            </div>
          )}
        </div>

        {animate && menuOpen && (
          <div className={concept.ctxMenu} style={{ top: 50, left: 90 }}>
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

        {animate && subOpen && (
          <div className={concept.ctxSub} style={{ top: 125, left: 288 }}>
            <div className={`${concept.ctxItem} ${concept.ctxItemApp} ${subItemHover ? concept.ctxItemHover : ""}`}>
              <img className={concept.ctxAppIcon} src="/img/logo.png" alt="" loading="lazy" />
              {translate({ id: "mockup.modview.ctxOpen", message: "Ouvrir ModView" })}
            </div>
          </div>
        )}

        {animate && <Cursor phase={phase} />}
      </div>
    </div>
  );
}
