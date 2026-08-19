import React, {type ReactNode} from 'react';
import Translate from '@docusaurus/Translate';

/* Source unique des univers présentés dans le hero-carrousel de l'accueil et
 * dans la barre d'onglets partagée (accueil + pages communautés). Les libellés
 * de hero réutilisent volontairement les mêmes ids de traduction que les pages
 * communautés (`communities.<slug>.hero.*`) et que le hero de base
 * (`hero.*`) : aucun nouvel id de contenu, les traductions restent alignées. */

export type CarouselAccent = {
  /** Couleur d'accent pleine (pastille d'onglet, halo). */
  accent: string;
  /** Couleur translucide pour le halo flouté d'arrière-plan. */
  glow: string;
  /** Dégradé appliqué au mot surligné du titre. */
  gradient: string;
};

export type CarouselEntry = {
  /** Identifiant stable, sert aussi de clé d'onglet actif. */
  id: string;
  /** Destination de l'onglet et de la carte CTA. */
  path: string;
  /** Libellé court affiché dans la barre d'onglets. */
  tabLabel: ReactNode;
  /** Accent de la verticale (marque par défaut pour l'univers « sécurité »). */
  accent: CarouselAccent;
  /** Pastille au-dessus du titre (absente pour l'univers de base). */
  eyebrow?: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

/** Accent de marque, repris pour l'univers « sécurité » (= --gradient-1). */
const BRAND_ACCENT: CarouselAccent = {
  accent: '#d35f5f',
  glow: 'rgba(211, 95, 95, 0.4)',
  gradient: 'linear-gradient(180deg, #d35f5f 40%, #a561a3)',
};

/** Mot surligné : reprend `--cv-gradient` posé par le conteneur du slide.
 *  En inline-style pour rester indépendant des CSS modules (réutilisable dans
 *  le carrousel comme sur les pages). */
export function Highlight({children}: {children: ReactNode}): ReactNode {
  return (
    <span
      style={{
        backgroundImage: 'var(--cv-gradient)',
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
      }}>
      {children}
    </span>
  );
}

export const CAROUSEL_ENTRIES: CarouselEntry[] = [
  {
    id: 'security',
    path: '/',
    accent: BRAND_ACCENT,
    tabLabel: (
      <Translate id="communities.tabs.security" description="Carousel tab label: base security universe">
        Sécurité
      </Translate>
    ),
    title: (
      <Translate
        id="hero.title"
        description="Hero main title; {highlight} renders the gradient-highlighted word"
        values={{
          highlight: (
            <Highlight>
              <Translate
                id="hero.title.highlight"
                description="The highlighted word inside the hero title (security)">
                sécurité
              </Translate>
            </Highlight>
          ),
        }}>
        {'Le meilleur bot Discord de {highlight}'}
      </Translate>
    ),
    description: (
      <Translate id="hero.description" description="Hero description below the title">
        Empêchez les utilisateurs malintentionnés de nuire à votre serveur Discord.
      </Translate>
    ),
  },
  {
    id: 'games',
    path: '/communities/games',
    accent: {
      accent: '#5f6fd3',
      glow: 'rgba(95, 111, 211, 0.45)',
      gradient: 'linear-gradient(180deg, #5f6fd3 40%, #726cb3)',
    },
    tabLabel: (
      <Translate id="communities.tabs.games" description="Carousel tab label: gaming universe">
        Gaming
      </Translate>
    ),
    title: (
      <Translate
        id="communities.games.hero.title"
        description="Games landing: hero H1; {highlight} renders the accented word"
        values={{
          highlight: (
            <Highlight>
              <Translate
                id="communities.games.hero.title.highlight"
                description="Highlighted word inside the games hero title">
                gaming
              </Translate>
            </Highlight>
          ),
        }}>
        {'Protégez votre communauté {highlight} des raids'}
      </Translate>
    ),
    description: (
      <Translate
        id="communities.games.hero.description"
        description="Games landing: hero subtitle">
        FiveM, Roblox, Minecraft ou un Discord de jeu qui cartonne : dès que ça
        grossit, ça attire les raids, les bots et les vendeurs de cheats.
        RaidProtect filtre tout ça automatiquement pour que vos joueurs profitent
        du jeu, pas du spam.
      </Translate>
    ),
  },
  {
    id: 'creators',
    path: '/communities/creators',
    accent: {
      accent: '#a561a3',
      glow: 'rgba(165, 97, 163, 0.45)',
      gradient: 'linear-gradient(180deg, #a561a3 40%, #726cb3)',
    },
    tabLabel: (
      <Translate id="communities.tabs.creators" description="Carousel tab label: creators universe">
        Créateurs
      </Translate>
    ),
    title: (
      <Translate
        id="communities.creators.hero.title"
        description="Creators landing: hero H1; {highlight} renders the accented word"
        values={{
          highlight: (
            <Highlight>
              <Translate
                id="communities.creators.hero.title.highlight"
                description="Highlighted word inside the creators hero title">
                créateurs
              </Translate>
            </Highlight>
          ),
        }}>
        {'La protection Discord pensée pour les {highlight}'}
      </Translate>
    ),
    description: (
      <Translate
        id="communities.creators.hero.description"
        description="Creators landing: hero subtitle">
        Un live, un short viral, un shoutout : votre serveur peut doubler en une
        nuit, raids et bots compris. RaidProtect absorbe les pics, filtre les
        indésirables et laisse votre communauté tranquille.
      </Translate>
    ),
  },
];

/** Accès direct par id (onglet actif d'une page communauté). */
export const ENTRY_BY_ID: Record<string, CarouselEntry> = Object.fromEntries(
  CAROUSEL_ENTRIES.map((e) => [e.id, e]),
);
