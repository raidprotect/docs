import { useState } from "react";
import SettingsFlow, { ModalMockup } from "./flow";
import { useSettingsState, type Part } from "./state";
import { homePart } from "./home";
import { generalPart } from "./general";
import { arrivalsPart } from "./arrivals";
import { protectionPart } from "./protection";
import { moderationPart } from "./moderation";
import { utilitiesPart } from "./utilities";
import { useAuthPart } from "./auth";
import { extrasPart } from "./extras";

/* /settings 3.5.0 : tous les écrans dans un seul parcours. Chaque mockup de
 * la doc ouvre ce parcours sur l'écran qui l'intéresse. */

function useRegistry(): Part {
  const ctx = useSettingsState();
  const [level, setLevel] = useState(5);
  const auth = useAuthPart();
  const parts: Part[] = [
    homePart(ctx),
    generalPart(),
    arrivalsPart(ctx),
    protectionPart(ctx, { level, setLevel }),
    moderationPart(ctx),
    utilitiesPart(ctx),
    auth,
    extrasPart(),
  ];
  return {
    screens: Object.assign({}, ...parts.map((p) => p.screens)),
    modals: Object.assign({}, ...parts.map((p) => p.modals ?? {})),
    actions: Object.assign({}, ...parts.map((p) => p.actions ?? {})),
  };
}

export function Settings({ start = "home:general" }: { start?: string }) {
  const { screens, modals, actions } = useRegistry();
  return <SettingsFlow start={start} screens={screens} modals={modals} actions={actions} />;
}

export function SettingsModal({ name }: { name: string }) {
  const { modals } = useRegistry();
  return modals?.[name] ? <ModalMockup modal={modals[name]} /> : null;
}

export default Settings;
