import React, {type ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import CommunityLanding, {
  Highlight,
  type CommunityContent,
} from '@site/src/components/communities/CommunityLanding';
import {CREATOR_SERVERS} from '@site/src/components/communities/communityServers';
import RaidModeMockup from '@site/src/components/DiscordMessage/mockups/raid-mode';
import DmLockMockup from '@site/src/components/DiscordMessage/mockups/dm-lock';
import AntiSpamMockup from '@site/src/components/DiscordMessage/mockups/anti-spam';
import TransparencyMockup from '@site/src/components/DiscordMessage/mockups/transparency';

export default function CreatorsCommunity(): ReactNode {
  const content: CommunityContent = {
    slug: 'creators',
    metaTitle: translate({
      id: 'communities.creators.meta.title',
      message: 'RaidProtect pour les créateurs & streamers',
      description: 'Browser tab title for the creators community landing page',
    }),
    metaDescription: translate({
      id: 'communities.creators.meta.description',
      message:
        'Un live, un short viral, un shoutout : votre serveur peut doubler en une nuit, raids et bots compris. RaidProtect absorbe les pics et filtre les indésirables.',
      description: 'Meta description for the creators community landing page',
    }),
    accent: {
      accent: '#a561a3',
      glow: 'rgba(165, 97, 163, 0.45)',
      gradient: 'linear-gradient(180deg, #a561a3 40%, #726cb3)',
      onAccent: '#ffffff',
    },
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
    secondaryCta: {
      to: '/docs/features/raid-mode',
      label: (
        <Translate
          id="communities.creators.hero.secondaryCta"
          description="Creators landing: secondary CTA label">
          Découvrir la protection
        </Translate>
      ),
    },
    socialProof: {
      title: (
        <Translate
          id="communities.creators.socialProof.title"
          description="Creators social proof marquee title">
          Des créateurs qui protègent leur communauté avec RaidProtect
        </Translate>
      ),
      servers: CREATOR_SERVERS,
    },
    threatsTitle: (
      <Translate
        id="communities.creators.threats.title"
        description="Creators landing: threats section title">
        Le revers de la viralité
      </Translate>
    ),
    threatsSubtitle: (
      <Translate
        id="communities.creators.threats.subtitle"
        description="Creators landing: threats section subtitle">
        Plus votre audience grandit, plus votre serveur attire ce que vous ne
        voulez pas y voir.
      </Translate>
    ),
    threats: [
      {
        icon: '/img/icons/iconAntiraidWhite.svg',
        iconAlt: '',
        title: (
          <Translate
            id="communities.creators.threat.raid.title"
            description="Creators threat 1 title">
            Raids après un live ou un shoutout
          </Translate>
        ),
        description: (
          <Translate
            id="communities.creators.threat.raid.description"
            description="Creators threat 1 description">
            Un pic de visibilité attire aussi les trolls : des vagues de comptes
            débarquent pour spammer et perturber votre chat.
          </Translate>
        ),
      },
      {
        icon: '/img/icons/iconCaptchaWhite.svg',
        iconAlt: '',
        title: (
          <Translate
            id="communities.creators.threat.bots.title"
            description="Creators threat 2 title">
            Bots et comptes jetables
          </Translate>
        ),
        description: (
          <Translate
            id="communities.creators.threat.bots.description"
            description="Creators threat 2 description">
            Self-bots, comptes recyclés et fermes d'abonnés polluent votre
            serveur dès qu'il commence à grossir.
          </Translate>
        ),
      },
      {
        icon: '/img/icons/iconAntispamWhite.svg',
        iconAlt: '',
        title: (
          <Translate
            id="communities.creators.threat.spam.title"
            description="Creators threat 3 title">
            Spam et auto-promo sauvage
          </Translate>
        ),
        description: (
          <Translate
            id="communities.creators.threat.spam.description"
            description="Creators threat 3 description">
            Liens d'autopromo, scams « free nitro » et flood d'émojis noient les
            vraies discussions de votre communauté.
          </Translate>
        ),
      },
    ],
    featuresTitle: (
      <Translate
        id="communities.creators.features.title"
        description="Creators landing: features section title">
        Pensé pour encaisser les pics
      </Translate>
    ),
    featuresSubtitle: (
      <Translate
        id="communities.creators.features.subtitle"
        description="Creators landing: features section subtitle">
        Les protections de RaidProtect, réglées pour les communautés qui
        grandissent vite.
      </Translate>
    ),
    featureRows: [
      {
        Mockup: RaidModeMockup,
        slotHeight: 362,
        to: '/docs/features/raid-mode',
        title: (
          <Translate
            id="communities.creators.feature.antiraid.title"
            description="Creators feature Anti-raid title">
            Anti-raid pensé pour les pics
          </Translate>
        ),
        description: (
          <Translate
            id="communities.creators.feature.antiraid.description"
            description="Creators feature Anti-raid description">
            Après un live ou un shoutout, RaidProtect ferme les arrivées et
            verrouille les salons le temps que le pic passe, puis rouvre tout
            seul.
          </Translate>
        ),
        cta: (
          <Translate
            id="communities.creators.feature.antiraid.cta"
            description="Creators feature Anti-raid CTA">
            Découvrir le mode raid
          </Translate>
        ),
      },
      {
        Mockup: DmLockMockup,
        slotHeight: 236,
        to: '/docs/features/dm-lock',
        title: (
          <Translate
            id="communities.creators.feature.dm.title"
            description="Creators feature DM Lock title">
            Fermeture des MP
          </Translate>
        ),
        description: (
          <Translate
            id="communities.creators.feature.dm.description"
            description="Creators feature DM Lock description">
            Empêchez les arnaqueurs de harceler vos membres en message privé en
            se faisant passer pour vous.
          </Translate>
        ),
        cta: (
          <Translate
            id="communities.creators.feature.dm.cta"
            description="Creators feature DM Lock CTA">
            Protéger les MP
          </Translate>
        ),
      },
      {
        Mockup: AntiSpamMockup,
        slotHeight: 380,
        to: '/docs/features/anti-spam',
        title: (
          <Translate
            id="communities.creators.feature.antispam.title"
            description="Creators feature Anti-spam title">
            Anti-spam automatique
          </Translate>
        ),
        description: (
          <Translate
            id="communities.creators.feature.antispam.description"
            description="Creators feature Anti-spam description">
            Sanctionne le flood, l'autopromo et les liens « free nitro » sans
            que vous leviez le petit doigt.
          </Translate>
        ),
        cta: (
          <Translate
            id="communities.creators.feature.antispam.cta"
            description="Creators feature Anti-spam CTA">
            Configurer l'anti-spam
          </Translate>
        ),
      },
      {
        Mockup: TransparencyMockup,
        slotHeight: 390,
        to: '/docs/features/transparency',
        title: (
          <Translate
            id="communities.creators.feature.transparency.title"
            description="Creators feature Transparency title">
            Transparence de la modération
          </Translate>
        ),
        description: (
          <Translate
            id="communities.creators.feature.transparency.description"
            description="Creators feature Transparency description">
            Un modlog public et des récapitulatifs réguliers montrent à votre
            audience une communauté saine et bien tenue.
          </Translate>
        ),
        cta: (
          <Translate
            id="communities.creators.feature.transparency.cta"
            description="Creators feature Transparency CTA">
            Découvrir la transparence
          </Translate>
        ),
      },
    ],
    stats: [
      {
        value: 350000,
        plus: true,
        label: (
          <Translate
            id="communities.creators.stat.servers"
            description="Creators stat: protected servers">
            serveurs Discord protégés
          </Translate>
        ),
      },
      {
        value: 4000000,
        plus: true,
        label: (
          <Translate
            id="communities.creators.stat.scamlens"
            description="Creators stat: scam images blocked by ScamLens across the network">
            arnaques en image bloquées
          </Translate>
        ),
      },
      {
        value: 1400000,
        plus: true,
        label: (
          <Translate
            id="communities.creators.stat.spam"
            description="Creators stat: spam messages blocked">
            spams bloqués
          </Translate>
        ),
      },
      {
        value: 50000000,
        plus: true,
        label: (
          <Translate
            id="communities.creators.stat.members"
            description="Creators stat: protected members">
            membres protégés
          </Translate>
        ),
      },
    ],
    premium: {
      title: (
        <Translate
          id="communities.creators.premium.title"
          description="Creators premium block title">
          Le premium pour accompagner votre croissance
        </Translate>
      ),
      description: (
        <Translate
          id="communities.creators.premium.description"
          description="Creators premium block description">
          La version gratuite protège déjà votre communauté. Le premium l'outille
          pour grandir sereinement.
        </Translate>
      ),
      perks: [
        <Translate
          key="p1"
          id="communities.creators.premium.perk1"
          description="Creators premium perk 1">
          Plusieurs récaps de transparence en parallèle (un public, un pour
          l'équipe)
        </Translate>,
        <Translate
          key="p2"
          id="communities.creators.premium.perk2"
          description="Creators premium perk 2">
          Rôle de confiance pour laisser vos habitués traiter les signalements
        </Translate>,
      ],
      ctaLabel: (
        <Translate
          id="communities.creators.premium.cta"
          description="Creators premium CTA label">
          Découvrir le premium
        </Translate>
      ),
    },
    ctaTitle: (
      <Translate
        id="communities.creators.cta.title"
        description="Creators landing: final CTA title; {highlight} renders the accented word"
        values={{
          highlight: (
            <Highlight>
              <Translate
                id="communities.creators.cta.title.highlight"
                description="Highlighted word inside the creators final CTA title">
                communauté
              </Translate>
            </Highlight>
          ),
        }}>
        {'Prêt à protéger votre {highlight} ?'}
      </Translate>
    ),
    ctaDescription: (
      <Translate
        id="communities.creators.cta.description"
        description="Creators landing: final CTA description">
        Ajoutez RaidProtect en quelques secondes et concentrez-vous sur votre
        contenu, pas sur la modération.
      </Translate>
    ),
  };

  return (
    <CommunityLanding
      content={content}
      addToDiscordLabel={
        <Translate
          id="communities.creators.cta.addToDiscord"
          description="Creators landing: primary CTA (add bot to Discord)">
          Ajouter à Discord
        </Translate>
      }
    />
  );
}
