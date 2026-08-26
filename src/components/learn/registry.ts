/* Registre des articles du glossaire « Learn ». Sert au hub (/learn) et, plus
 * tard, au maillage automatique entre articles. Ajouter une entrée ici quand un
 * nouvel article est publié. */

export type LearnEntry = {
  slug: string;
  term: string;
  /** Accroche affichée sur la carte du hub. */
  teaser: string;
};

export const LEARN_ARTICLES: LearnEntry[] = [
  {
    slug: 'discord-raid',
    term: 'Raid Discord',
    teaser:
      "L'arrivée coordonnée de comptes pour saturer un serveur : définition, différence avec un nuke, et comment le bloquer.",
  },
  {
    slug: 'discord-nuke',
    term: 'Nuke Discord',
    teaser:
      "La destruction d'un serveur de l'intérieur par abus de permissions. Différence avec un raid, et comment l'éviter.",
  },
  {
    slug: 'spam-discord',
    term: 'Spam Discord',
    teaser:
      "Les messages non sollicités et répétitifs qui noient un serveur : ses formes, pourquoi c'est un problème, et comment l'arrêter.",
  },
  {
    slug: 'self-bot',
    term: 'Self-bot',
    teaser:
      "Un compte utilisateur automatisé, interdit par Discord. Comment il alimente raids et spam, et comment le bloquer.",
  },
  {
    slug: 'token-grabber',
    term: 'Token grabber',
    teaser:
      "Le vol du token qui authentifie un compte Discord. Comment ça marche et comment s'en protéger.",
  },
  {
    slug: 'honeypot-actif',
    term: 'Faut-il animer un HoneyPot ?',
    teaser:
      "Le mythe du salon « chaud » : pourquoi un bot qui poste pour animer un HoneyPot est inutile, voire contre-productif.",
  },
];
