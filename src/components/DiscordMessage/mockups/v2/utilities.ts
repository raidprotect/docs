import type { Component } from "../../types";
import { t, i, row, section, roleSelect, reset, createOne, screen } from "./kit";
import type { ScreenOpts } from "./kit";
import { RO, type Ctx, type Part } from "./state";

/* Onglet Utilitaires : Rôle de Tag, Rôle en service (les bascules
 * Verrouillage de salon et Mise en cache se règlent depuis l'accueil). */

export function utilitiesPart({ flip }: Ctx): Part {
  const onduty = (): Component[] =>
    screen({
      tab: "utilities",
      title: t("sanctions.modTitle", "Configuration de la modération"),
      desc: t(
        "onduty.desc",
        "Configurez le **rôle en service** : les modérateurs se marquent en service ou hors service avec la commande `/onduty`, ce qui ajoute ou retire ce rôle."
      ),
      crumbs: [{ label: t("onduty.name", "Rôle en service") }],
      docs: "features/moderation#onduty",
      body: [section(`### ${i("iconRole")} ${t("onduty.name", "Rôle en service")}`, createOne())],
      rows: [roleSelect(t("onduty.ph", "Rôle en service (écrire pour chercher)"), [RO("En service")]), row(reset())],
    });

  const tagrole = (command = false) => (): Component[] =>
    screen({
      tab: "utilities",
      title: t("tagrole.title", "Configuration du Rôle de Tag"),
      desc: t(
        "tagrole.desc",
        "Configurez le **Rôle de Tag de Serveur** pour **attribuer automatiquement un rôle** aux membres qui ajoutent le **tag de votre serveur à leur profil**.\nSi le membre retire le tag, le rôle lui est automatiquement retiré.\n\nVos membres auront le rôle à leur prochaine modification de profil (Pseudo, Avatar, Bannière, Rôles, Tag…). Vous pouvez demander au support une synchronisation complète du rôle si vous avez beaucoup de membres possédant ou ayant possédé le Tag."
      ),
      crumbs: [{ label: t("tagrole.name", "Rôle de Tag") }],
      command,
      docs: "features/tag-role",
      body: [section(`### ${i("iconRole")} ${t("tagrole.name", "Rôle de Tag")}`, createOne())],
      rows: [roleSelect(t("tagrole.ph", "Rôle de Tag (écrire pour chercher)"), [RO("Tag")]), row(reset())],
    } satisfies ScreenOpts);

  return {
    screens: { onduty, tagrole: tagrole(), tagroleCommand: tagrole(true) },
    actions: { "toggle:messageCache": flip("messageCache") },
  };
}

