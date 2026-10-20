import { useState } from "react";
import DiscordMessage from "../../index";
import DiscordModal, { type ModalData } from "../../Modal";
import type { Component } from "../../types";
import concept from "../concept.module.css";
import styles from "./flow.module.css";

/* Parcours interactif dans /settings : un clic sur un bouton dont le
 * custom_id est un écran y navigue, « modal:<clé> » ouvre une modale,
 * et les actions (interrupteurs) modifient l'état du mockup. */

export type Screens = Record<string, () => Component[]>;

export interface FlowProps {
  start: string;
  screens: Screens;
  modals?: Record<string, () => ModalData>;
  actions?: Record<string, () => void>;
}

export function collectIds(components: Component[], out: string[] = []): string[] {
  for (const c of components) {
    if (c.type === 2 && c.custom_id) out.push(c.custom_id);
    if ("components" in c && Array.isArray(c.components)) collectIds(c.components as Component[], out);
    if (c.type === 9 && c.accessory) collectIds([c.accessory as Component], out);
  }
  return out;
}

export default function SettingsFlow({ start, screens, modals = {}, actions = {} }: FlowProps) {
  const [current, setCurrent] = useState(start);
  const [modal, setModal] = useState<string | null>(null);

  const components = (screens[current] ?? screens[start])();

  const handlers: Record<string, () => void> = {};
  for (const id of collectIds(components)) {
    if (actions[id]) handlers[id] = actions[id];
    else if (id.startsWith("modal:") && modals[id.slice(6)]) handlers[id] = () => setModal(id.slice(6));
    else if (screens[id]) handlers[id] = () => setCurrent(id);
  }

  return (
    <div className={`${concept.animWrap} ${concept.dmWrap} ${concept.cfg} ${styles.flow} ${modal ? styles.withModal : ""}`}>
      <div className={concept.tight}>
        <DiscordMessage key={current} message={{ components }} actions={handlers} />
      </div>
      {modal && modals[modal] && (
        <div className={styles.overlay} onClick={() => setModal(null)}>
          <div onClick={(e) => e.stopPropagation()}>
            <DiscordModal modal={modals[modal]()} onClose={() => setModal(null)} />
          </div>
        </div>
      )}
    </div>
  );
}

/* Modale seule, hors parcours (pour illustrer une étape dans la page). */
export function ModalMockup({ modal }: { modal: () => ModalData }) {
  return (
    <div className={`${concept.animWrap} ${concept.dmWrap} ${concept.cfg}`}>
      <DiscordModal modal={modal()} />
    </div>
  );
}
