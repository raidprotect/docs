import React, {type ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import CommunityLanding, {
  Highlight,
  type CommunityContent,
} from '@site/src/components/communities/CommunityLanding';
import {GAMING_SERVERS} from '@site/src/components/communities/communityServers';
import RaidModeMockup from '@site/src/components/DiscordMessage/mockups/raid-mode';
import CaptchaMockup from '@site/src/components/DiscordMessage/mockups/captcha';
import AntiSpamMockup from '@site/src/components/DiscordMessage/mockups/anti-spam';
import ReportsMockup from '@site/src/components/DiscordMessage/mockups/reports';

export default function GamesCommunity(): ReactNode {
  const content: CommunityContent = {
    slug: 'games',
    metaTitle: translate({
      id: 'communities.games.meta.title',
      message: 'RaidProtect pour les serveurs de jeux & gaming',
      description: 'Browser tab title for the games community landing page',
    }),
    metaDescription: translate({
      id: 'communities.games.meta.description',
      message:
        'FiveM, Roblox, Minecraft ou un Discord de jeu qui cartonne : RaidProtect bloque les raids, filtre les bots et stoppe le spam de cheats automatiquement.',
      description: 'Meta description for the games community landing page',
    }),
    accent: {
      accent: '#5f6fd3',
      glow: 'rgba(95, 111, 211, 0.45)',
      gradient: 'linear-gradient(180deg, #5f6fd3 40%, #726cb3)',
      onAccent: '#ffffff',
    },
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
        FiveM, Roblox, Minecraft : dès qu'un serveur de jeu grossit, il attire
        les raids, les bots et les vendeurs de cheats. RaidProtect les bloque
        automatiquement, avant qu'ils n'atteignent vos joueurs.
      </Translate>
    ),
    secondaryCta: {
      to: '/docs/features/raid-mode',
      label: (
        <Translate
          id="communities.games.hero.secondaryCta"
          description="Games landing: secondary CTA label">
          Découvrir la protection
        </Translate>
      ),
    },
    socialProof: {
      title: (
        <Translate
          id="communities.games.socialProof.title"
          description="Games social proof marquee title">
          Ils protègent leur communauté gaming avec RaidProtect
        </Translate>
      ),
      servers: GAMING_SERVERS,
    },
    threatsTitle: (
      <Translate
        id="communities.games.threats.title"
        description="Games landing: threats section title">
        Ce qui menace votre serveur
      </Translate>
    ),
    threatsSubtitle: (
      <Translate
        id="communities.games.threats.subtitle"
        description="Games landing: threats section subtitle">
        Un serveur de jeu populaire est une cible permanente pour les raids et
        les arnaqueurs.
      </Translate>
    ),
    threats: [
      {
        icon: '/img/icons/iconAntiraidWhite.svg',
        iconAlt: '',
        title: (
          <Translate
            id="communities.games.threat.raid.title"
            description="Games threat 1 title">
            Raids et invasions de trolls
          </Translate>
        ),
        description: (
          <Translate
            id="communities.games.threat.raid.description"
            description="Games threat 1 description">
            Dès qu'un serveur de jeu prend de l'ampleur, il attire des vagues de
            comptes jetables qui viennent spammer et troller en masse.
          </Translate>
        ),
      },
      {
        icon: '/img/icons/iconCaptchaWhite.svg',
        iconAlt: '',
        title: (
          <Translate
            id="communities.games.threat.bots.title"
            description="Games threat 2 title">
            Bots et fermes de comptes
          </Translate>
        ),
        description: (
          <Translate
            id="communities.games.threat.bots.description"
            description="Games threat 2 description">
            Vendeurs de cheats, services de boosting et faux comptes s'inscrivent
            en masse pour polluer votre communauté.
          </Translate>
        ),
      },
      {
        icon: '/img/icons/iconAntispamWhite.svg',
        iconAlt: '',
        title: (
          <Translate
            id="communities.games.threat.spam.title"
            description="Games threat 3 title">
            Arnaques « free robux » & cheats
          </Translate>
        ),
        description: (
          <Translate
            id="communities.games.threat.spam.description"
            description="Games threat 3 description">
            Spam de liens d'arnaque, ventes de comptes et fausses promos noient le
            chat de votre serveur en quelques secondes.
          </Translate>
        ),
      },
    ],
    featuresTitle: (
      <Translate
        id="communities.games.features.title"
        description="Games landing: features section title">
        Pensé pour les grosses communautés
      </Translate>
    ),
    featuresSubtitle: (
      <Translate
        id="communities.games.features.subtitle"
        description="Games landing: features section subtitle">
        Les protections de RaidProtect, réglées pour les serveurs de jeu qui ne
        dorment jamais.
      </Translate>
    ),
    featureRows: [
      {
        Mockup: RaidModeMockup,
        slotHeight: 362,
        to: '/docs/features/raid-mode',
        title: (
          <Translate
            id="communities.games.feature.antiraid.title"
            description="Games feature Anti-raid title">
            Anti-raid & verrouillage
          </Translate>
        ),
        description: (
          <Translate
            id="communities.games.feature.antiraid.description"
            description="Games feature Anti-raid description">
            Dès qu'une vague de comptes débarque, RaidProtect ferme les arrivées
            et verrouille les salons le temps que le raid passe, bien au-delà de
            la limite de 24 h de Discord.
          </Translate>
        ),
        cta: (
          <Translate
            id="communities.games.feature.antiraid.cta"
            description="Games feature Anti-raid CTA">
            Découvrir le mode raid
          </Translate>
        ),
      },
      {
        Mockup: CaptchaMockup,
        slotHeight: 330,
        to: '/docs/features/captcha',
        title: (
          <Translate
            id="communities.games.feature.captcha.title"
            description="Games feature Captcha title">
            Captcha à l'entrée
          </Translate>
        ),
        description: (
          <Translate
            id="communities.games.feature.captcha.description"
            description="Games feature Captcha description">
            Chaque joueur prouve qu'il est humain avant d'entrer. Les fermes de
            bots restent à la porte.
          </Translate>
        ),
        cta: (
          <Translate
            id="communities.games.feature.captcha.cta"
            description="Games feature Captcha CTA">
            Activer le captcha
          </Translate>
        ),
      },
      {
        Mockup: AntiSpamMockup,
        slotHeight: 380,
        to: '/docs/features/anti-spam',
        title: (
          <Translate
            id="communities.games.feature.antispam.title"
            description="Games feature Anti-spam title">
            Anti-spam automatique
          </Translate>
        ),
        description: (
          <Translate
            id="communities.games.feature.antispam.description"
            description="Games feature Anti-spam description">
            Pub de cheats, ventes de comptes et liens d'arnaque sont sanctionnés
            instantanément, sans intervention.
          </Translate>
        ),
        cta: (
          <Translate
            id="communities.games.feature.antispam.cta"
            description="Games feature Anti-spam CTA">
            Configurer l'anti-spam
          </Translate>
        ),
      },
      {
        Mockup: ReportsMockup,
        slotHeight: 390,
        to: '/docs/features/reports',
        title: (
          <Translate
            id="communities.games.feature.reports.title"
            description="Games feature Reports title">
            Signalements communautaires
          </Translate>
        ),
        description: (
          <Translate
            id="communities.games.feature.reports.description"
            description="Games feature Reports description">
            Vos joueurs remontent les contenus et comptes suspects en un clic :
            sur un gros serveur, la communauté modère avec vous.
          </Translate>
        ),
        cta: (
          <Translate
            id="communities.games.feature.reports.cta"
            description="Games feature Reports CTA">
            Découvrir les signalements
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
            id="communities.games.stat.servers"
            description="Games stat: protected servers">
            serveurs Discord protégés
          </Translate>
        ),
      },
      {
        value: 4000000,
        plus: true,
        label: (
          <Translate
            id="communities.games.stat.scamlens"
            description="Games stat: scam images blocked by ScamLens across the network">
            arnaques en image bloquées
          </Translate>
        ),
      },
      {
        value: 1400000,
        plus: true,
        label: (
          <Translate
            id="communities.games.stat.spam"
            description="Games stat: spam messages blocked">
            spams bloqués
          </Translate>
        ),
      },
      {
        value: 50000000,
        plus: true,
        label: (
          <Translate
            id="communities.games.stat.members"
            description="Games stat: protected members">
            membres protégés
          </Translate>
        ),
      },
    ],
    premium: {
      title: (
        <Translate
          id="communities.games.premium.title"
          description="Games premium block title">
          Le premium pour les serveurs de jeu qui ne dorment jamais
        </Translate>
      ),
      description: (
        <Translate
          id="communities.games.premium.description"
          description="Games premium block description">
          La version gratuite tient déjà le choc. Le premium ajoute les réponses
          musclées pour les grosses vagues.
        </Translate>
      ),
      perks: [
        <Translate
          key="p1"
          id="communities.games.premium.perk1"
          description="Games premium perk 1">
          Mode expulsion de l'anti-raid pour dégager les grosses vagues de trolls
        </Translate>,
        <Translate
          key="p2"
          id="communities.games.premium.perk2"
          description="Games premium perk 2">
          Sanctions avancées du HoneyPot (expulsion, timeout, jail) contre les bots
        </Translate>,
        <Translate
          key="p3"
          id="communities.games.premium.perk3"
          description="Games premium perk 3">
          Modération discrète : les sanctions n'affichent plus de message dans le
          chat
        </Translate>,
      ],
      ctaLabel: (
        <Translate
          id="communities.games.premium.cta"
          description="Games premium CTA label">
          Découvrir le premium
        </Translate>
      ),
    },
    ctaTitle: (
      <Translate
        id="communities.games.cta.title"
        description="Games landing: final CTA title; {highlight} renders the accented word"
        values={{
          highlight: (
            <Highlight>
              <Translate
                id="communities.games.cta.title.highlight"
                description="Highlighted word inside the games final CTA title">
                gaming
              </Translate>
            </Highlight>
          ),
        }}>
        {'Prêt à sécuriser votre serveur {highlight} ?'}
      </Translate>
    ),
    ctaDescription: (
      <Translate
        id="communities.games.cta.description"
        description="Games landing: final CTA description">
        Ajoutez RaidProtect en quelques secondes et laissez vos joueurs se
        concentrer sur le jeu.
      </Translate>
    ),
  };

  return (
    <CommunityLanding
      content={content}
      addToDiscordLabel={
        <Translate
          id="communities.games.cta.addToDiscord"
          description="Games landing: primary CTA (add bot to Discord)">
          Ajouter à Discord
        </Translate>
      }
    />
  );
}
