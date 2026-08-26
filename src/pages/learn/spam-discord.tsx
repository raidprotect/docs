import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import LearnArticle, {
  type LearnContent,
} from '@site/src/components/learn/LearnArticle';

/* Article de glossaire : « Qu'est-ce que le spam Discord ? ». */

export default function SpamDiscordPage(): ReactNode {
  const content: LearnContent = {
    slug: 'spam-discord',
    metaTitle: translate({
      id: 'learn.spam-discord.metaTitle',
      message: "Spam Discord : c'est quoi et comment l'arrêter ?",
      description: 'Learn article meta title: Discord spam',
    }),
    metaDescription: translate({
      id: 'learn.spam-discord.metaDescription',
      message:
        "Le spam Discord, c'est l'envoi de messages non sollicités et répétitifs sur un serveur ou en privé. Ses formes, pourquoi c'est un problème, et comment l'arrêter.",
      description: 'Learn article meta description: Discord spam',
    }),
    term: 'Spam Discord',
    title: (
      <Translate id="learn.spam-discord.title" description="H1">
        Qu'est-ce que le spam Discord ?
      </Translate>
    ),
    definition: (
      <Translate id="learn.spam-discord.definition" description="definition">
        Le spam Discord, c'est l'envoi de messages non sollicités et répétitifs
        sur un serveur ou en message privé : publicités, liens d'arnaque, faux
        Nitro, mentions en masse. Il peut venir d'un seul compte comme d'une vague
        entière.
      </Translate>
    ),
    definitionText:
      "Le spam Discord, c'est l'envoi de messages non sollicités et répétitifs sur un serveur ou en message privé : publicités, liens d'arnaque, faux Nitro, mentions en masse. Il peut venir d'un seul compte comme d'une vague entière.",
    sections: [
      {
        heading: (
          <Translate id="learn.spam-discord.s1.h" description="h">
            Les formes de spam les plus courantes
          </Translate>
        ),
        body: (
          <ul>
            <li>
              <Translate id="learn.spam-discord.s1.i1" description="li">
                Autopromo sauvage : liens et invitations vers d'autres serveurs,
                postés en boucle.
              </Translate>
            </li>
            <li>
              <Translate id="learn.spam-discord.s1.i2" description="li">
                Liens d'arnaque et phishing : faux « Nitro gratuit », drainers de
                wallet, fausses promotions.
              </Translate>
            </li>
            <li>
              <Translate id="learn.spam-discord.s1.i3" description="li">
                Flood : mentions @everyone, émojis ou messages répétés très
                rapidement pour saturer le chat.
              </Translate>
            </li>
            <li>
              <Translate id="learn.spam-discord.s1.i4" description="li">
                Spam de messages privés : vos membres reçoivent des pubs ou des
                scams en MP.
              </Translate>
            </li>
          </ul>
        ),
      },
      {
        heading: (
          <Translate id="learn.spam-discord.s2.h" description="h">
            Spam, flood, raid : où se situe le spam ?
          </Translate>
        ),
        body: (
          <p>
            <Translate
              id="learn.spam-discord.s2.p1"
              description="p with links"
              values={{
                flood: (
                  <Link to="/learn/raid-spam-flood">
                    <Translate id="learn.spam-discord.s2.flood" description="link">
                      flood
                    </Translate>
                  </Link>
                ),
                raid: (
                  <Link to="/learn/discord-raid">
                    <Translate id="learn.spam-discord.s2.raid" description="link">
                      raid
                    </Translate>
                  </Link>
                ),
              }}>
              {
                "Le spam désigne le contenu (des messages indésirables et répétitifs). Le {flood} en est une forme centrée sur le volume et la vitesse, tandis qu'un {raid} est une invasion de comptes qui emploie souvent le spam comme arme. Un seul compte peut spammer sans qu'il y ait de raid."
              }
            </Translate>
          </p>
        ),
      },
      {
        heading: (
          <Translate id="learn.spam-discord.s3.h" description="h">
            Pourquoi c'est un problème
          </Translate>
        ),
        body: (
          <ul>
            <li>
              <Translate id="learn.spam-discord.s3.i1" description="li">
                Le chat est noyé et les vraies conversations deviennent illisibles.
              </Translate>
            </li>
            <li>
              <Translate id="learn.spam-discord.s3.i2" description="li">
                Des liens d'arnaque atteignent vos membres et exposent votre
                communauté.
              </Translate>
            </li>
            <li>
              <Translate id="learn.spam-discord.s3.i3" description="li">
                Des membres se lassent et partent, et votre modération s'épuise.
              </Translate>
            </li>
          </ul>
        ),
      },
      {
        heading: (
          <Translate id="learn.spam-discord.s4.h" description="h">
            Comment stopper le spam sur son serveur ?
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.spam-discord.s4.intro" description="p">
                La bonne approche combine plusieurs protections qui se complètent.
              </Translate>
            </p>
            <ul>
              <li>
                <strong>
                  <Translate id="learn.spam-discord.s4.i1.t" description="li title">
                    Anti-spam automatique.
                  </Translate>
                </strong>{' '}
                <Translate
                  id="learn.spam-discord.s4.i1.b"
                  description="li body with link"
                  values={{
                    link: (
                      <Link to="/docs/features/anti-spam">
                        <Translate id="learn.spam-discord.s4.i1.link" description="link">
                          anti-spam
                        </Translate>
                      </Link>
                    ),
                  }}>
                  {
                    "L'{link} repère les messages répétitifs, les débits anormaux et les mentions en masse, puis sanctionne tout seul."
                  }
                </Translate>
              </li>
              <li>
                <strong>
                  <Translate id="learn.spam-discord.s4.i2.t" description="li title">
                    Vérification à l'entrée.
                  </Translate>
                </strong>{' '}
                <Translate
                  id="learn.spam-discord.s4.i2.b"
                  description="li body with link"
                  values={{
                    link: (
                      <Link to="/docs/features/captcha">
                        <Translate id="learn.spam-discord.s4.i2.link" description="link">
                          captcha
                        </Translate>
                      </Link>
                    ),
                  }}>
                  {
                    "Un {link} bloque les fermes de bots spammeurs avant qu'elles n'accèdent au serveur."
                  }
                </Translate>
              </li>
              <li>
                <strong>
                  <Translate id="learn.spam-discord.s4.i3.t" description="li title">
                    Fermeture des messages privés.
                  </Translate>
                </strong>{' '}
                <Translate
                  id="learn.spam-discord.s4.i3.b"
                  description="li body with link"
                  values={{
                    link: (
                      <Link to="/docs/features/dm-lock">
                        <Translate id="learn.spam-discord.s4.i3.link" description="link">
                          fermeture des MP
                        </Translate>
                      </Link>
                    ),
                  }}>
                  {
                    "La {link} empêche les spammeurs de contacter vos membres en privé."
                  }
                </Translate>
              </li>
            </ul>
            <p>
              <Translate
                id="learn.spam-discord.s4.outro"
                description="outro with stat"
                values={{count: <strong>380 000 serveurs</strong>}}>
                {
                  "C'est ce que RaidProtect automatise : le bot protège plus de {count} et a déjà bloqué des millions de messages de spam."
                }
              </Translate>
            </p>
          </>
        ),
      },
    ],
    faq: [
      {
        question: translate({
          id: 'learn.spam-discord.faq.q1',
          message: 'Le spam est-il interdit sur Discord ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.spam-discord.faq.a1',
          message:
            "Oui : le spam viole les Conditions d'utilisation de Discord. Les serveurs peuvent sanctionner les auteurs, et les comptes qui spamment massivement peuvent être bannis par Discord.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.spam-discord.faq.q2',
          message: 'Un seul compte peut-il spammer ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.spam-discord.faq.a2',
          message:
            "Oui. Contrairement à un raid, le spam ne nécessite pas une vague de comptes : un seul compte, ou un self-bot, suffit à spammer.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.spam-discord.faq.q3',
          message: 'Comment bloquer le spam automatiquement ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.spam-discord.faq.a3',
          message:
            "Un anti-spam repère les messages répétitifs, les envois trop rapides et les mentions en masse, et applique une sanction sans intervention de votre part.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.spam-discord.faq.q4',
          message: 'Spam et flood, est-ce pareil ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.spam-discord.faq.a4',
          message:
            "Le flood est une forme de spam centrée sur le volume et la vitesse (saturer un salon). Tout flood est du spam, mais tout spam n'est pas forcément un flood.",
          description: 'faq a',
        }),
      },
    ],
    related: [
      {
        label: (
          <Translate id="learn.spam-discord.rel1" description="related">
            Raid, spam ou flood : quelle différence ?
          </Translate>
        ),
        to: '/learn/raid-spam-flood',
      },
      {
        label: (
          <Translate id="learn.spam-discord.rel2" description="related">
            Qu'est-ce qu'un raid Discord ?
          </Translate>
        ),
        to: '/learn/discord-raid',
      },
      {
        label: (
          <Translate id="learn.spam-discord.rel3" description="related">
            L'anti-spam de RaidProtect
          </Translate>
        ),
        to: '/docs/features/anti-spam',
      },
      {
        label: (
          <Translate id="learn.spam-discord.rel4" description="related">
            Protéger les MP de vos membres
          </Translate>
        ),
        to: '/docs/features/dm-lock',
      },
    ],
  };

  return <LearnArticle content={content} />;
}
