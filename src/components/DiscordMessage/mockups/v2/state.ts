import { useState } from "react";
import type { Component } from "../../types";
import type { ModalData } from "../../Modal";

/* État partagé du serveur d'exemple « Les Explorateurs » (non premium). */
export interface State {
  antiraid: boolean;
  antiraidCloseDm: boolean;
  welcome: boolean;
  welcomeMention: boolean;
  antispam: boolean;
  antispamAdvanced: boolean;
  imageFilter: boolean;
  honeypot: boolean;
  lockRenaming: boolean;
  messageCache: boolean;
  sanctions: boolean;
  passiveModlog: boolean;
  showMedias: boolean;
  reports: boolean;
  reportsGroup: boolean;
  transparency: boolean;
  publicModlog: boolean;
  recapFeed: boolean;
  slowmodeChannel: boolean;
  quarantineSync: boolean;
}

export const INITIAL: State = {
  antiraid: true,
  antiraidCloseDm: false,
  welcome: true,
  welcomeMention: true,
  antispam: true,
  antispamAdvanced: false,
  imageFilter: true,
  honeypot: true,
  lockRenaming: false,
  messageCache: true,
  sanctions: true,
  passiveModlog: true,
  showMedias: true,
  reports: true,
  reportsGroup: true,
  transparency: true,
  publicModlog: true,
  recapFeed: true,
  slowmodeChannel: true,
  quarantineSync: true,
};

export interface Ctx {
  s: State;
  flip: (key: keyof State) => () => void;
}

export interface Part {
  screens: Record<string, () => Component[]>;
  modals?: Record<string, () => ModalData>;
  actions?: Record<string, () => void>;
}

export function useSettingsState(): Ctx {
  const [s, setS] = useState<State>(INITIAL);
  return { s, flip: (key) => () => setS((prev) => ({ ...prev, [key]: !prev[key] })) };
}

/* Mentions du serveur d'exemple, rendues en pastilles. */
export const CH = (name: string) => `#${name}`;
export const RO = (name: string) => `@[${name}]`;
