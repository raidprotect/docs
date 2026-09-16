import React, {type ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import CommunityLanding, {
  Highlight,
  type CommunityContent,
} from '@site/src/components/communities/CommunityLanding';
import AntiScamMockup from '@site/src/components/DiscordMessage/mockups/anti-scam';
import AuthenticationManagerMockup from '@site/src/components/DiscordMessage/mockups/authentication-manager';
import DmLockMockup from '@site/src/components/DiscordMessage/mockups/dm-lock';
import HoneypotMockup from '@site/src/components/DiscordMessage/mockups/honeypot';

export default function CryptoCommunity(): ReactNode {
  const content: CommunityContent = {
    slug: 'crypto',
    metaTitle: translate({
      id: 'communities.crypto.meta.title',
      message: 'RaidProtect pour les serveurs crypto & Web3',
      description: 'Browser tab title for the crypto community landing page',
    }),
    metaDescription: translate({
      id: 'communities.crypto.meta.description',
      message:
        'Les serveurs crypto sont la cible n°1 des scams, du phishing et des drainers de wallet. RaidProtect verrouille les MP, filtre les bots et bloque les raids.',
      description: 'Meta description for the crypto community landing page',
    }),
    accent: {
      accent: '#ffab22',
      glow: 'rgba(255, 171, 34, 0.45)',
      gradient: 'linear-gradient(180deg, #ffab22 40%, #d35f5f)',
      onAccent: '#040114',
    },
    eyebrow: (
      <Translate
        id="communities.crypto.eyebrow"
        description="Crypto landing: small pill above the title">
        Pour les serveurs crypto & Web3
      </Translate>
    ),
    title: (
      <Translate
        id="communities.crypto.hero.title"
        description="Crypto landing: hero H1; {highlight} renders the accented word"
        values={{
          highlight: (
            <Highlight>
              <Translate
                id="communities.crypto.hero.title.highlight"
                description="Highlighted word inside the crypto hero title">
                crypto
              </Translate>
            </Highlight>
          ),
        }}>
        {'Protégez votre communauté {highlight} des arnaques'}
      </Translate>
    ),
    description: (
      <Translate
        id="communities.crypto.hero.description"
        description="Crypto landing: hero subtitle">
        Les serveurs crypto sont la cible n°1 des scams, du phishing et des
        drainers de wallet. RaidProtect verrouille les messages privés, filtre
        les bots et bloque les raids avant qu'ils n'atteignent vos membres.
      </Translate>
    ),
    secondaryCta: {
      to: '/docs/features/scam-images',
      label: (
        <Translate
          id="communities.crypto.hero.secondaryCta"
          description="Crypto landing: secondary CTA label">
          Découvrir ScamLens
        </Translate>
      ),
    },
    threatsTitle: (
      <Translate
        id="communities.crypto.threats.title"
        description="Crypto landing: threats section title">
        Ce que vous affrontez chaque jour
      </Translate>
    ),
    threatsSubtitle: (
      <Translate
        id="communities.crypto.threats.subtitle"
        description="Crypto landing: threats section subtitle">
        Les communautés crypto attirent des attaques ciblées que la modération
        manuelle ne peut pas suivre.
      </Translate>
    ),
    threats: [
      {
        icon: '/img/icons/iconDmlockWhite.svg',
        iconAlt: '',
        title: (
          <Translate
            id="communities.crypto.threat.dm.title"
            description="Crypto threat 1 title">
            Arnaques et drainers en MP
          </Translate>
        ),
        description: (
          <Translate
            id="communities.crypto.threat.dm.description"
            description="Crypto threat 1 description">
            Faux supports, fausses promos, liens de connexion piégés : les
            escrocs ciblent vos membres en message privé, là où la modération ne
            voit rien.
          </Translate>
        ),
      },
      {
        icon: '/img/icons/iconCaptchaWhite.svg',
        iconAlt: '',
        title: (
          <Translate
            id="communities.crypto.threat.bots.title"
            description="Crypto threat 2 title">
            Vagues de faux comptes
          </Translate>
        ),
        description: (
          <Translate
            id="communities.crypto.threat.bots.description"
            description="Crypto threat 2 description">
            Les bots s'inscrivent en masse pour spammer de faux airdrops et
            gonfler artificiellement votre communauté.
          </Translate>
        ),
      },
      {
        icon: '/img/icons/iconAntispamWhite.svg',
        iconAlt: '',
        title: (
          <Translate
            id="communities.crypto.threat.spam.title"
            description="Crypto threat 3 title">
            Spam de liens et phishing
          </Translate>
        ),
        description: (
          <Translate
            id="communities.crypto.threat.spam.description"
            description="Crypto threat 3 description">
            Un seul compte compromis suffit à inonder vos salons de liens
            malveillants en quelques secondes.
          </Translate>
        ),
      },
    ],
    featuresTitle: (
      <Translate
        id="communities.crypto.features.title"
        description="Crypto landing: features section title">
        Votre arsenal anti-scam
      </Translate>
    ),
    featuresSubtitle: (
      <Translate
        id="communities.crypto.features.subtitle"
        description="Crypto landing: features section subtitle">
        Les protections de RaidProtect, réglées pour les menaces propres à
        l'univers crypto.
      </Translate>
    ),
    featureRows: [
      {
        Mockup: AntiScamMockup,
        slotHeight: 420,
        to: '/docs/features/scam-images',
        title: (
          <Translate
            id="communities.crypto.feature.scamlens.title"
            description="Crypto feature ScamLens title">
            ScamLens, l'anti-arnaque images
          </Translate>
        ),
        description: (
          <Translate
            id="communities.crypto.feature.scamlens.description"
            description="Crypto feature ScamLens description">
            Les images de faux airdrops, giveaways et promos de casino sont
            détectées et supprimées automatiquement, avant que vos membres ne
            cliquent.
          </Translate>
        ),
        cta: (
          <Translate
            id="communities.crypto.feature.scamlens.cta"
            description="Crypto feature ScamLens CTA">
            Découvrir ScamLens
          </Translate>
        ),
      },
      {
        Mockup: AuthenticationManagerMockup,
        slotHeight: 350,
        to: '/docs/features/authentication-manager',
        title: (
          <Translate
            id="communities.crypto.feature.am.title"
            description="Crypto feature Authentication Manager title">
            Rôles sensibles verrouillés
          </Translate>
        ),
        description: (
          <Translate
            id="communities.crypto.feature.am.description"
            description="Crypto feature Authentication Manager description">
            Protégez vos rôles admin et modo par passkey, code PIN ou OTP : même
            un compte piraté ne peut pas prendre le contrôle de votre serveur.
          </Translate>
        ),
        cta: (
          <Translate
            id="communities.crypto.feature.am.cta"
            description="Crypto feature Authentication Manager CTA">
            Sécuriser mes rôles
          </Translate>
        ),
      },
      {
        Mockup: DmLockMockup,
        slotHeight: 236,
        to: '/docs/features/dm-lock',
        title: (
          <Translate
            id="communities.crypto.feature.dm.title"
            description="Crypto feature DM Lock title">
            Fermeture des MP
          </Translate>
        ),
        description: (
          <Translate
            id="communities.crypto.feature.dm.description"
            description="Crypto feature DM Lock description">
            Bloquez les messages privés entre vos membres : l'angle d'attaque
            favori des arnaqueurs crypto disparaît.
          </Translate>
        ),
        cta: (
          <Translate
            id="communities.crypto.feature.dm.cta"
            description="Crypto feature DM Lock CTA">
            Protéger les MP
          </Translate>
        ),
      },
      {
        Mockup: HoneypotMockup,
        slotHeight: 390,
        to: '/docs/features/honeypot',
        title: (
          <Translate
            id="communities.crypto.feature.honeypot.title"
            description="Crypto feature HoneyPot title">
            HoneyPot antispam
          </Translate>
        ),
        description: (
          <Translate
            id="communities.crypto.feature.honeypot.description"
            description="Crypto feature HoneyPot description">
            Un salon-piège où seuls les comptes piratés et les robots postent :
            ils sont repérés et sanctionnés dès le premier message.
          </Translate>
        ),
        cta: (
          <Translate
            id="communities.crypto.feature.honeypot.cta"
            description="Crypto feature HoneyPot CTA">
            Découvrir le HoneyPot
          </Translate>
        ),
      },
    ],
    stats: [
      {
        value: 4000000,
        plus: true,
        label: (
          <Translate
            id="communities.crypto.stat.scamlens"
            description="Crypto stat: scam images blocked by ScamLens across the network">
            arnaques en image bloquées
          </Translate>
        ),
      },
      {
        value: 160000,
        plus: true,
        label: (
          <Translate
            id="communities.crypto.stat.hacked"
            description="Crypto stat: hacked accounts neutralized">
            comptes piratés neutralisés
          </Translate>
        ),
      },
      {
        value: 350000,
        plus: true,
        label: (
          <Translate
            id="communities.crypto.stat.servers"
            description="Crypto stat: protected servers">
            serveurs Discord protégés
          </Translate>
        ),
      },
      {
        value: 50000000,
        plus: true,
        label: (
          <Translate
            id="communities.crypto.stat.members"
            description="Crypto stat: protected members">
            membres protégés
          </Translate>
        ),
      },
    ],
    premium: {
      title: (
        <Translate
          id="communities.crypto.premium.title"
          description="Crypto premium block title">
          Le premium pour les serveurs à forts enjeux
        </Translate>
      ),
      description: (
        <Translate
          id="communities.crypto.premium.description"
          description="Crypto premium block description">
          La version gratuite protège déjà. Le premium ajoute la couche de défense
          que réclament les communautés crypto les plus exposées.
        </Translate>
      ),
      perks: [
        <Translate
          key="p1"
          id="communities.crypto.premium.perk1"
          description="Crypto premium perk 1">
          Plus de rôles admin protégés et des sessions d'authentification
          prolongées
        </Translate>,
        <Translate
          key="p2"
          id="communities.crypto.premium.perk2"
          description="Crypto premium perk 2">
          Modération discrète : les sanctions anti-spam n'affichent plus de
          message public
        </Translate>,
        <Translate
          key="p3"
          id="communities.crypto.premium.perk3"
          description="Crypto premium perk 3">
          Sanctions avancées du HoneyPot (expulsion, timeout, jail) contre les
          comptes piratés
        </Translate>,
      ],
      ctaLabel: (
        <Translate
          id="communities.crypto.premium.cta"
          description="Crypto premium CTA label">
          Découvrir le premium
        </Translate>
      ),
    },
    ctaTitle: (
      <Translate
        id="communities.crypto.cta.title"
        description="Crypto landing: final CTA title; {highlight} renders the accented word"
        values={{
          highlight: (
            <Highlight>
              <Translate
                id="communities.crypto.cta.title.highlight"
                description="Highlighted word inside the crypto final CTA title">
                crypto
              </Translate>
            </Highlight>
          ),
        }}>
        {'Prêt à blinder votre serveur {highlight} ?'}
      </Translate>
    ),
    ctaDescription: (
      <Translate
        id="communities.crypto.cta.description"
        description="Crypto landing: final CTA description">
        Ajoutez RaidProtect en quelques secondes et protégez votre communauté
        dès aujourd'hui.
      </Translate>
    ),
  };

  return (
    <CommunityLanding
      content={content}
      addToDiscordLabel={
        <Translate
          id="communities.crypto.cta.addToDiscord"
          description="Crypto landing: primary CTA (add bot to Discord)">
          Ajouter à Discord
        </Translate>
      }
    />
  );
}
