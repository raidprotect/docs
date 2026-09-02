import {translate} from '@docusaurus/Translate';

/* Registre des articles du glossaire « Learn ». Sert au hub (/learn) et, plus
 * tard, au maillage automatique entre articles. Ajouter une entrée ici quand un
 * nouvel article est publié. Les libellés passent par translate() pour que les
 * cartes du hub soient traduites dans toutes les locales. */

export type LearnEntry = {
  slug: string;
  term: string;
  /** Accroche affichée sur la carte du hub. */
  teaser: string;
};

export const LEARN_ARTICLES: LearnEntry[] = [
  {
    slug: 'discord-raid',
    term: translate({
      id: 'learn.discord-raid.cardTerm',
      message: 'Raid Discord',
      description: 'Learn hub card term: discord-raid',
    }),
    teaser: translate({
      id: 'learn.discord-raid.cardTeaser',
      message:
        "L'arrivée coordonnée de comptes pour saturer un serveur : définition, différence avec un nuke, et comment le bloquer.",
      description: 'Learn hub card teaser: discord-raid',
    }),
  },
  {
    slug: 'discord-nuke',
    term: translate({
      id: 'learn.discord-nuke.cardTerm',
      message: 'Nuke Discord',
      description: 'Learn hub card term: discord-nuke',
    }),
    teaser: translate({
      id: 'learn.discord-nuke.cardTeaser',
      message:
        "La destruction d'un serveur de l'intérieur par abus de permissions. Différence avec un raid, et comment l'éviter.",
      description: 'Learn hub card teaser: discord-nuke',
    }),
  },
  {
    slug: 'spam-discord',
    term: translate({
      id: 'learn.spam-discord.cardTerm',
      message: 'Spam Discord',
      description: 'Learn hub card term: spam-discord',
    }),
    teaser: translate({
      id: 'learn.spam-discord.cardTeaser',
      message:
        "Les messages non sollicités et répétitifs qui noient un serveur : ses formes, pourquoi c'est un problème, et comment l'arrêter.",
      description: 'Learn hub card teaser: spam-discord',
    }),
  },
  {
    slug: 'self-bot',
    term: translate({
      id: 'learn.self-bot.cardTerm',
      message: 'Self-bot',
      description: 'Learn hub card term: self-bot',
    }),
    teaser: translate({
      id: 'learn.self-bot.cardTeaser',
      message:
        "Un compte utilisateur automatisé, interdit par Discord. Comment il alimente raids et spam, et comment le bloquer.",
      description: 'Learn hub card teaser: self-bot',
    }),
  },
  {
    slug: 'token-grabber',
    term: translate({
      id: 'learn.token-grabber.cardTerm',
      message: 'Token grabber',
      description: 'Learn hub card term: token-grabber',
    }),
    teaser: translate({
      id: 'learn.token-grabber.cardTeaser',
      message:
        "Le vol du token qui authentifie un compte Discord. Comment ça marche et comment s'en protéger.",
      description: 'Learn hub card teaser: token-grabber',
    }),
  },
  {
    slug: 'least-privilege',
    term: translate({
      id: 'learn.least-privilege.cardTerm',
      message: 'Le moindre privilège',
      description: 'Learn hub card term: least-privilege',
    }),
    teaser: translate({
      id: 'learn.least-privilege.cardTeaser',
      message:
        "Ne donner à chacun que les permissions nécessaires : votre meilleure défense anti-nuke, jusqu'à l'Authentication Manager.",
      description: 'Learn hub card teaser: least-privilege',
    }),
  },
  {
    slug: 'honeypot-warming',
    term: translate({
      id: 'learn.honeypot-warming.cardTerm',
      message: 'Faut-il animer un HoneyPot ?',
      description: 'Learn hub card term: honeypot-warming',
    }),
    teaser: translate({
      id: 'learn.honeypot-warming.cardTeaser',
      message:
        "Le mythe du salon « chaud » : pourquoi un bot qui poste pour animer un HoneyPot est inutile, voire contre-productif.",
      description: 'Learn hub card teaser: honeypot-warming',
    }),
  },
  {
    slug: 'server-raidable',
    term: translate({
      id: 'learn.server-raidable.cardTerm',
      message: '« This server is raidable »',
      description: 'Learn hub card term: server-raidable',
    }),
    teaser: translate({
      id: 'learn.server-raidable.cardTeaser',
      message:
        "Ce que veut vraiment dire ce message (bots type Jalapeno), pourquoi le test est trompeur, et les deux façons de corriger.",
      description: 'Learn hub card teaser: server-raidable',
    }),
  },
];
