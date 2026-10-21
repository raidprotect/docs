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

/* Boutons qui remontent (Retour, fil d'Ariane) ou changent d'onglet : ils ne
 * servent pas à délimiter la portée d'un mockup. */
const LEAVING = new Set(["iconPreviousWhite", "iconChevronRightBlurple", "iconFolderOpenBlurple", "iconFolderBlurple"]);

function forwardTargets(components: Component[], screens: Screens, out: string[] = []): string[] {
  for (const c of components) {
    if (c.type === 2 && c.custom_id && screens[c.custom_id] && !LEAVING.has(c.emoji?.name ?? "")) out.push(c.custom_id);
    if ("components" in c && Array.isArray(c.components)) forwardTargets(c.components as Component[], screens, out);
    if (c.type === 9 && c.accessory) forwardTargets([c.accessory as Component], screens, out);
  }
  return out;
}

/* Écrans atteignables depuis l'écran de départ en ne faisant que descendre :
 * chaque mockup reste sur le sujet de sa page. */
function scopeOf(start: string, screens: Screens): Set<string> {
  const scope = new Set([start]);
  const queue = [start];
  while (queue.length) {
    for (const id of forwardTargets(screens[queue.shift()!]?.() ?? [], screens)) {
      if (!scope.has(id)) {
        scope.add(id);
        queue.push(id);
      }
    }
  }
  return scope;
}

function lockOutside(components: Component[], scope: Set<string>, screens: Screens): Component[] {
  return components.map((c) => {
    if (c.type === 2 && c.custom_id && screens[c.custom_id] && !scope.has(c.custom_id)) return { ...c, disabled: true };
    if (c.type === 9 && c.accessory) return { ...c, accessory: lockOutside([c.accessory as Component], scope, screens)[0] } as Component;
    if ("components" in c && Array.isArray(c.components))
      return { ...c, components: lockOutside(c.components as Component[], scope, screens) } as Component;
    return c;
  });
}

export default function SettingsFlow({ start, screens, modals = {}, actions = {} }: FlowProps) {
  const [current, setCurrent] = useState(start);
  const [modal, setModal] = useState<string | null>(null);

  const scope = scopeOf(start, screens);
  const components = lockOutside((screens[current] ?? screens[start])(), scope, screens);

  const handlers: Record<string, () => void> = {};
  for (const id of collectIds(components)) {
    if (actions[id]) handlers[id] = actions[id];
    else if (id.startsWith("modal:") && modals[id.slice(6)]) handlers[id] = () => setModal(id.slice(6));
    else if (scope.has(id)) handlers[id] = () => setCurrent(id);
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
