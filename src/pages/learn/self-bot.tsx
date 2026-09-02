import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import LearnArticle, {
  type LearnContent,
} from '@site/src/components/learn/LearnArticle';

/* Article de glossaire : « Qu'est-ce qu'un self-bot Discord ? ». */

export default function SelfBotPage(): ReactNode {
  const content: LearnContent = {
    slug: 'self-bot',
    metaTitle: translate({
      id: 'learn.self-bot.metaTitle',
      message: 'Self-bot Discord : définition et risques pour votre serveur',
      description: 'Learn article meta title: self-bot',
    }),
    metaDescription: translate({
      id: 'learn.self-bot.metaDescription',
      message:
        "Un self-bot automatise un compte utilisateur Discord via l'API, ce qui est interdit par Discord. Ce que c'est, comment il sert aux raids et au spam, et comment s'en protéger.",
      description: 'Learn article meta description: self-bot',
    }),
    term: translate({
      id: 'learn.self-bot.term',
      message: 'Self-bot',
      description: 'Learn glossary term name (breadcrumb + schema)',
    }),
    title: (
      <Translate id="learn.self-bot.title" description="H1">
        Qu'est-ce qu'un self-bot Discord ?
      </Translate>
    ),
    definition: (
      <Translate id="learn.self-bot.definition" description="definition">
        Un self-bot est un compte utilisateur Discord (pas un vrai bot) piloté
        automatiquement par un script qui utilise l'API à sa place. C'est interdit
        par les Conditions d'utilisation de Discord.
      </Translate>
    ),
    definitionText: translate({
      id: 'learn.self-bot.definitionText',
      message: "Un self-bot est un compte utilisateur Discord (pas un vrai bot) piloté automatiquement par un script qui utilise l'API à sa place. C'est interdit par les Conditions d'utilisation de Discord.",
      description: 'Learn definition plain text for schema.org',
    }),
    sections: [
      {
        heading: (
          <Translate id="learn.self-bot.s1.h" description="h">
            Self-bot ou bot classique : quelle différence ?
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.self-bot.s1.p1" description="p">
                Un bot officiel est déclaré auprès de Discord, ajouté via une
                autorisation, affiche un badge « APP » et n'a que les permissions
                qu'on lui accorde. Un self-bot, lui, détourne un compte humain
                normal pour agir tout seul.
              </Translate>
            </p>
            <table>
              <thead>
                <tr>
                  <th />
                  <th>
                    <Translate id="learn.self-bot.s1.col1" description="col">
                      Bot officiel
                    </Translate>
                  </th>
                  <th>
                    <Translate id="learn.self-bot.s1.col2" description="col">
                      Self-bot
                    </Translate>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>
                      <Translate id="learn.self-bot.s1.r1" description="row">
                        Nature
                      </Translate>
                    </strong>
                  </td>
                  <td>
                    <Translate id="learn.self-bot.s1.bot.nature" description="cell">
                      Application déclarée
                    </Translate>
                  </td>
                  <td>
                    <Translate id="learn.self-bot.s1.self.nature" description="cell">
                      Compte utilisateur détourné
                    </Translate>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      <Translate id="learn.self-bot.s1.r2" description="row">
                        Visibilité
                      </Translate>
                    </strong>
                  </td>
                  <td>
                    <Translate id="learn.self-bot.s1.bot.vis" description="cell">
                      Badge « APP » visible
                    </Translate>
                  </td>
                  <td>
                    <Translate id="learn.self-bot.s1.self.vis" description="cell">
                      Indistinct d'un vrai membre
                    </Translate>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      <Translate id="learn.self-bot.s1.r3" description="row">
                        Statut
                      </Translate>
                    </strong>
                  </td>
                  <td>
                    <Translate id="learn.self-bot.s1.bot.status" description="cell">
                      Autorisé
                    </Translate>
                  </td>
                  <td>
                    <Translate id="learn.self-bot.s1.self.status" description="cell">
                      Interdit par Discord
                    </Translate>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },
      {
        heading: (
          <Translate id="learn.self-bot.s2.h" description="h">
            À quoi servent les self-bots ?
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.self-bot.s2.p1" description="p">
                Utilisés de façon malveillante, les self-bots servent surtout à
                agir en masse en se faisant passer pour de vrais utilisateurs :
              </Translate>
            </p>
            <ul>
              <li>
                <Translate
                  id="learn.self-bot.s2.i1"
                  description="li with link"
                  values={{
                    link: (
                      <Link to="/learn/discord-raid">
                        <Translate id="learn.self-bot.s2.i1.link" description="link">
                          raids
                        </Translate>
                      </Link>
                    ),
                  }}>
                  {
                    'Gonfler des {link} : des centaines de self-bots rejoignent un serveur pour le spammer simultanément.'
                  }
                </Translate>
              </li>
              <li>
                <Translate id="learn.self-bot.s2.i2" description="li">
                  Envoyer des scams et de la publicité en message privé à grande
                  échelle.
                </Translate>
              </li>
              <li>
                <Translate id="learn.self-bot.s2.i3" description="li">
                  Récupérer la liste des membres d'un serveur pour les cibler
                  ailleurs.
                </Translate>
              </li>
            </ul>
          </>
        ),
      },
      {
        heading: (
          <Translate id="learn.self-bot.s3.h" description="h">
            Pourquoi c'est interdit et risqué
          </Translate>
        ),
        body: (
          <p>
            <Translate id="learn.self-bot.s3.p1" description="p">
              Automatiser un compte utilisateur viole les Conditions d'utilisation
              de Discord et expose au bannissement du compte. Pour un serveur, le
              vrai danger est ailleurs : un self-bot est difficile à distinguer
              d'un membre normal, ce qui lui permet de passer sous les radars de la
              modération classique.
            </Translate>
          </p>
        ),
      },
      {
        heading: (
          <Translate id="learn.self-bot.s4.h" description="h">
            Comment protéger son serveur des self-bots ?
          </Translate>
        ),
        body: (
          <ul>
            <li>
              <strong>
                <Translate id="learn.self-bot.s4.i1.t" description="li title">
                  Vérification à l'entrée.
                </Translate>
              </strong>{' '}
              <Translate
                id="learn.self-bot.s4.i1.b"
                description="li body with link"
                values={{
                  link: (
                    <Link to="/docs/features/captcha">
                      <Translate id="learn.self-bot.s4.i1.link" description="link">
                        captcha
                      </Translate>
                    </Link>
                  ),
                }}>
                {
                  'Un {link} arrête la plupart des fermes de self-bots avant même qu’elles accèdent au serveur.'
                }
              </Translate>
            </li>
            <li>
              <strong>
                <Translate id="learn.self-bot.s4.i2.t" description="li title">
                  Piège à bots.
                </Translate>
              </strong>{' '}
              <Translate
                id="learn.self-bot.s4.i2.b"
                description="li body with link"
                values={{
                  link: (
                    <Link to="/docs/features/honeypot">
                      <Translate id="learn.self-bot.s4.i2.link" description="link">
                        HoneyPot
                      </Translate>
                    </Link>
                  ),
                }}>
                {
                  'Un salon {link} attire les comptes automatisés et les sanctionne sans toucher aux vrais membres.'
                }
              </Translate>
            </li>
            <li>
              <strong>
                <Translate id="learn.self-bot.s4.i3.t" description="li title">
                  Anti-spam.
                </Translate>
              </strong>{' '}
              <Translate
                id="learn.self-bot.s4.i3.b"
                description="li body with link"
                values={{
                  link: (
                    <Link to="/docs/features/anti-spam">
                      <Translate id="learn.self-bot.s4.i3.link" description="link">
                        anti-spam
                      </Translate>
                    </Link>
                  ),
                }}>
                {
                  'L’{link} repère les comportements de flood typiques des comptes automatisés et réagit tout seul.'
                }
              </Translate>
            </li>
          </ul>
        ),
      },
    ],
    faq: [
      {
        question: translate({
          id: 'learn.self-bot.faq.q1',
          message: 'Un self-bot est-il légal ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.self-bot.faq.a1',
          message:
            "Non. Automatiser un compte utilisateur viole les Conditions d'utilisation de Discord et expose au bannissement définitif du compte.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.self-bot.faq.q2',
          message: 'Comment reconnaître un self-bot ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.self-bot.faq.a2',
          message:
            "Il n'a pas de badge « APP » et se comporte de façon anormale (messages très rapides, réactions instantanées, présence permanente). À l'œil nu c'est difficile : d'où l'intérêt du captcha et de l'anti-spam.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.self-bot.faq.q3',
          message: 'Un self-bot peut-il raid mon serveur ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.self-bot.faq.a3',
          message:
            'Oui. Les raids automatisés reposent souvent sur des dizaines ou des centaines de self-bots qui rejoignent et spamment en même temps.',
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.self-bot.faq.q4',
          message: 'Le captcha bloque-t-il les self-bots ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.self-bot.faq.a4',
          message:
            "Il bloque la grande majorité des fermes de self-bots à l'entrée, puisqu'elles ne peuvent pas résoudre la vérification automatiquement.",
          description: 'faq a',
        }),
      },
    ],
    related: [
      {
        label: (
          <Translate id="learn.self-bot.rel1" description="related">
            Qu'est-ce qu'un raid Discord ?
          </Translate>
        ),
        to: '/learn/discord-raid',
      },
      {
        label: (
          <Translate id="learn.self-bot.rel2" description="related">
            Qu'est-ce qu'un token grabber ?
          </Translate>
        ),
        to: '/learn/token-grabber',
      },
      {
        label: (
          <Translate id="learn.self-bot.rel3" description="related">
            La vérification par captcha
          </Translate>
        ),
        to: '/docs/features/captcha',
      },
      {
        label: (
          <Translate id="learn.self-bot.rel4" description="related">
            L'anti-spam de RaidProtect
          </Translate>
        ),
        to: '/docs/features/anti-spam',
      },
    ],
  };

  return <LearnArticle content={content} />;
}
