import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import LearnArticle, {
  type LearnContent,
} from '@site/src/components/learn/LearnArticle';

/* Article « explainer » : différence entre raid, spam et flood. */

export default function RaidSpamFloodPage(): ReactNode {
  const content: LearnContent = {
    slug: 'raid-spam-flood',
    kind: 'explainer',
    metaTitle: translate({
      id: 'learn.raid-spam-flood.metaTitle',
      message: 'Raid, spam ou flood : quelle différence sur Discord ?',
      description: 'Learn explainer meta title: raid vs spam vs flood',
    }),
    metaDescription: translate({
      id: 'learn.raid-spam-flood.metaDescription',
      message:
        "Raid, spam et flood sont souvent confondus. Un raid est une invasion, le spam un contenu indésirable, le flood une avalanche de messages. On clarifie, avec les protections.",
      description: 'Learn explainer meta description: raid vs spam vs flood',
    }),
    term: 'Raid, spam ou flood',
    title: (
      <Translate id="learn.raid-spam-flood.title" description="H1">
        Raid, spam ou flood : quelle différence ?
      </Translate>
    ),
    definition: (
      <Translate id="learn.raid-spam-flood.definition" description="TL;DR">
        Ces trois mots décrivent des choses différentes : un raid est une
        invasion (une vague de comptes qui débarque), le spam est du contenu
        indésirable et répétitif, et le flood est une avalanche de messages
        envoyés très vite pour saturer un salon. Un raid utilise souvent le spam
        et le flood comme armes.
      </Translate>
    ),
    definitionText:
      "Ces trois mots décrivent des choses différentes : un raid est une invasion (une vague de comptes qui débarque), le spam est du contenu indésirable et répétitif, et le flood est une avalanche de messages envoyés très vite pour saturer un salon. Un raid utilise souvent le spam et le flood comme armes.",
    sections: [
      {
        heading: (
          <Translate id="learn.raid-spam-flood.s1.h" description="h">
            Le spam : du contenu indésirable
          </Translate>
        ),
        body: (
          <p>
            <Translate
              id="learn.raid-spam-flood.s1.p1"
              description="p with emphasis"
              values={{
                strong: <strong>la nature du message</strong>,
              }}>
              {
                "Le spam, c'est du contenu non sollicité et répétitif : publicités, liens d'arnaque, faux « Nitro gratuit », messages privés en masse. Ce qui le définit, c'est {strong}, pas forcément la quantité. Un seul compte peut spammer."
              }
            </Translate>
          </p>
        ),
      },
      {
        heading: (
          <Translate id="learn.raid-spam-flood.s2.h" description="h">
            Le flood : une avalanche pour saturer
          </Translate>
        ),
        body: (
          <p>
            <Translate
              id="learn.raid-spam-flood.s2.p1"
              description="p with emphasis"
              values={{
                strong: <strong>le volume et la vitesse</strong>,
              }}>
              {
                "Le flood consiste à envoyer énormément de messages, de mentions ou d'émojis très rapidement. Ici, ce qui compte n'est pas le contenu mais {strong} : noyer le chat, pousser les vrais messages hors de vue et épuiser la modération. C'est une technique de saturation."
              }
            </Translate>
          </p>
        ),
      },
      {
        heading: (
          <Translate id="learn.raid-spam-flood.s3.h" description="h">
            Le raid : l'invasion qui utilise les deux
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate
                id="learn.raid-spam-flood.s3.p1"
                description="p with link"
                values={{
                  link: (
                    <Link to="/learn/discord-raid">
                      <Translate id="learn.raid-spam-flood.s3.link" description="link">
                        raid
                      </Translate>
                    </Link>
                  ),
                }}>
                {
                  "Un {link} n'est pas un type de message : c'est un événement, une vague coordonnée de comptes qui débarque sur un serveur. C'est une attaque par le nombre. Et une fois entrés, ses participants emploient justement le spam et le flood comme armes."
                }
              </Translate>
            </p>
            <table>
              <thead>
                <tr>
                  <th />
                  <th>
                    <Translate id="learn.raid-spam-flood.t.col1" description="col">
                      C'est quoi
                    </Translate>
                  </th>
                  <th>
                    <Translate id="learn.raid-spam-flood.t.col2" description="col">
                      Ce qui le définit
                    </Translate>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Raid</strong>
                  </td>
                  <td>
                    <Translate id="learn.raid-spam-flood.t.raid.a" description="cell">
                      Une invasion coordonnée
                    </Translate>
                  </td>
                  <td>
                    <Translate id="learn.raid-spam-flood.t.raid.b" description="cell">
                      Le nombre de comptes
                    </Translate>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Spam</strong>
                  </td>
                  <td>
                    <Translate id="learn.raid-spam-flood.t.spam.a" description="cell">
                      Du contenu indésirable
                    </Translate>
                  </td>
                  <td>
                    <Translate id="learn.raid-spam-flood.t.spam.b" description="cell">
                      La nature du message
                    </Translate>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Flood</strong>
                  </td>
                  <td>
                    <Translate id="learn.raid-spam-flood.t.flood.a" description="cell">
                      Une avalanche de messages
                    </Translate>
                  </td>
                  <td>
                    <Translate id="learn.raid-spam-flood.t.flood.b" description="cell">
                      Le volume et la vitesse
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
          <Translate id="learn.raid-spam-flood.s4.h" description="h">
            Comment s'en protéger
          </Translate>
        ),
        body: (
          <ul>
            <li>
              <strong>
                <Translate id="learn.raid-spam-flood.s4.i1.t" description="li title">
                  Contre le spam et le flood :
                </Translate>
              </strong>{' '}
              <Translate
                id="learn.raid-spam-flood.s4.i1.b"
                description="li body with link"
                values={{
                  link: (
                    <Link to="/docs/features/anti-spam">
                      <Translate id="learn.raid-spam-flood.s4.i1.link" description="link">
                        anti-spam
                      </Translate>
                    </Link>
                  ),
                }}>
                {
                  "l'{link} repère les messages répétitifs et les débits anormaux, et sanctionne tout seul."
                }
              </Translate>
            </li>
            <li>
              <strong>
                <Translate id="learn.raid-spam-flood.s4.i2.t" description="li title">
                  Contre les invasions :
                </Translate>
              </strong>{' '}
              <Translate
                id="learn.raid-spam-flood.s4.i2.b"
                description="li body with links"
                values={{
                  captcha: (
                    <Link to="/docs/features/captcha">
                      <Translate id="learn.raid-spam-flood.s4.i2.captcha" description="link">
                        captcha
                      </Translate>
                    </Link>
                  ),
                  raid: (
                    <Link to="/docs/features/raid-mode">
                      <Translate id="learn.raid-spam-flood.s4.i2.raid" description="link">
                        mode anti-raid
                      </Translate>
                    </Link>
                  ),
                }}>
                {
                  "un {captcha} à l'entrée bloque les vagues de bots, et le {raid} verrouille le serveur le temps qu'une vague passe."
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
          id: 'learn.raid-spam-flood.faq.q1',
          message: 'Le flood, est-ce du spam ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.raid-spam-flood.faq.a1',
          message:
            "Oui : le flood est une forme de spam centrée sur le volume et la vitesse. Tout flood est du spam, mais tout spam n'est pas un flood (un même lien reposté lentement reste du spam sans saturer le salon).",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.raid-spam-flood.faq.q2',
          message: 'Un raid, est-ce du spam ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.raid-spam-flood.faq.a2',
          message:
            "Non. Un raid est une invasion, c'est-à-dire une vague de comptes. Le spam et le flood sont les armes qu'il emploie, pas le raid lui-même.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.raid-spam-flood.faq.q3',
          message: 'Peut-on spammer sans raid ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.raid-spam-flood.faq.a3',
          message:
            "Oui. Un seul compte peut spammer ou flooder sans qu'il y ait de raid. Le raid, lui, suppose une vague coordonnée de comptes.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.raid-spam-flood.faq.q4',
          message: 'Comment RaidProtect gère les trois ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.raid-spam-flood.faq.a4',
          message:
            "L'anti-spam s'occupe du spam et du flood, tandis que le captcha et le mode anti-raid stoppent les invasions à l'entrée et pendant une vague.",
          description: 'faq a',
        }),
      },
    ],
    related: [
      {
        label: (
          <Translate id="learn.raid-spam-flood.rel1" description="related">
            Qu'est-ce qu'un raid Discord ?
          </Translate>
        ),
        to: '/learn/discord-raid',
      },
      {
        label: (
          <Translate id="learn.raid-spam-flood.rel2" description="related">
            Qu'est-ce qu'un self-bot ?
          </Translate>
        ),
        to: '/learn/self-bot',
      },
      {
        label: (
          <Translate id="learn.raid-spam-flood.rel3" description="related">
            L'anti-spam de RaidProtect
          </Translate>
        ),
        to: '/docs/features/anti-spam',
      },
      {
        label: (
          <Translate id="learn.raid-spam-flood.rel4" description="related">
            Le mode anti-raid
          </Translate>
        ),
        to: '/docs/features/raid-mode',
      },
    ],
  };

  return <LearnArticle content={content} />;
}
