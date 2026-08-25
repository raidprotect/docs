import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import LearnArticle, {
  type LearnContent,
} from '@site/src/components/learn/LearnArticle';

/* Article de glossaire : « Qu'est-ce qu'un raid Discord ? ». Page modèle du
 * playbook « Learn » (pSEO éducatif). Contenu FR par défaut ; les traductions
 * viendront via les ids communs une fois le modèle validé. */

export default function DiscordRaidPage(): ReactNode {
  const content: LearnContent = {
    slug: 'discord-raid',
    metaTitle: translate({
      id: 'learn.discord-raid.metaTitle',
      message: "Raid Discord : définition et comment s'en protéger",
      description: 'Learn article meta title: Discord raid',
    }),
    metaDescription: translate({
      id: 'learn.discord-raid.metaDescription',
      message:
        "Un raid Discord, c'est l'arrivée coordonnée de dizaines de comptes pour spammer et saturer un serveur. Définition, différence avec un nuke, et comment le bloquer.",
      description: 'Learn article meta description: Discord raid',
    }),
    term: 'Raid Discord',
    title: (
      <Translate id="learn.discord-raid.title" description="Discord raid H1">
        Qu'est-ce qu'un raid Discord ?
      </Translate>
    ),
    definition: (
      <Translate id="learn.discord-raid.definition" description="Discord raid definition">
        Un raid Discord est l'arrivée soudaine et coordonnée de nombreux comptes,
        souvent des bots, sur un serveur, dans le but de le spammer, de le
        perturber ou de le saturer en quelques minutes.
      </Translate>
    ),
    definitionText:
      "Un raid Discord est l'arrivée soudaine et coordonnée de nombreux comptes, souvent des bots, sur un serveur, dans le but de le spammer, de le perturber ou de le saturer en quelques minutes.",
    sections: [
      {
        heading: (
          <Translate id="learn.discord-raid.s1.h" description="section heading">
            Comment se déroule un raid ?
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.discord-raid.s1.p1" description="paragraph">
                Un raid suit presque toujours le même scénario. Un lien
                d'invitation fuite ou est partagé publiquement, puis une vague de
                comptes rejoint le serveur au même moment.
              </Translate>
            </p>
            <p>
              <Translate
                id="learn.discord-raid.s1.p2"
                description="paragraph with inline emphasis"
                values={{
                  code: <code>@everyone</code>,
                  strong: (
                    <strong>
                      saturer le serveur plus vite que les modérateurs ne peuvent
                      réagir
                    </strong>
                  ),
                }}>
                {
                  "Une fois entrés, les participants passent à l'attaque : messages en masse, mentions {code} à répétition, liens d'arnaque, images choquantes ou flood d'émojis. L'objectif est de {strong}."
                }
              </Translate>
            </p>
            <p>
              <Translate id="learn.discord-raid.s1.p3" description="paragraph">
                La plupart des raids sont automatisés : ce ne sont pas des humains
                mais des bots pilotés depuis un seul outil, capable de passer de
                quelques comptes à plusieurs centaines en quelques secondes.
              </Translate>
            </p>
          </>
        ),
      },
      {
        heading: (
          <Translate id="learn.discord-raid.s2.h" description="section heading">
            Raid, nuke ou spam : quelle différence ?
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.discord-raid.s2.intro" description="intro">
                Ces trois termes sont souvent confondus, alors qu'ils décrivent
                des attaques très différentes. Et la distinction change la façon
                de s'en protéger.
              </Translate>
            </p>
            <table>
              <thead>
                <tr>
                  <th>
                    <Translate id="learn.discord-raid.s2.col1" description="table col">
                      Menace
                    </Translate>
                  </th>
                  <th>
                    <Translate id="learn.discord-raid.s2.col2" description="table col">
                      Origine
                    </Translate>
                  </th>
                  <th>
                    <Translate id="learn.discord-raid.s2.col3" description="table col">
                      Ce qui se passe
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
                    <Translate id="learn.discord-raid.s2.raid.origin" description="cell">
                      De l'extérieur
                    </Translate>
                  </td>
                  <td>
                    <Translate id="learn.discord-raid.s2.raid.what" description="cell">
                      Une vague de comptes rejoint le serveur pour le perturber
                      et le spammer par le nombre.
                    </Translate>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Nuke</strong>
                  </td>
                  <td>
                    <Translate id="learn.discord-raid.s2.nuke.origin" description="cell">
                      De l'intérieur
                    </Translate>
                  </td>
                  <td>
                    <Translate id="learn.discord-raid.s2.nuke.what" description="cell">
                      Un membre ou un bot avec des permissions élevées (admin
                      compromis, bot malveillant) détruit le serveur : suppression
                      de salons et rôles, bannissements de masse.
                    </Translate>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Spam</strong>
                  </td>
                  <td>
                    <Translate id="learn.discord-raid.s2.spam.origin" description="cell">
                      Interne ou externe
                    </Translate>
                  </td>
                  <td>
                    <Translate id="learn.discord-raid.s2.spam.what" description="cell">
                      Un flood de messages répétés, souvent le symptôme visible
                      d'un raid, mais possible aussi avec un seul compte.
                    </Translate>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              <Translate
                id="learn.discord-raid.s2.summary"
                description="summary with bold"
                values={{
                  raid: <strong>raid</strong>,
                  nuke: <strong>nuke</strong>,
                  spam: <strong>spam</strong>,
                }}>
                {
                  'En résumé : un {raid} est une invasion par le nombre, un {nuke} est une destruction par abus de permissions, et le {spam} est le symptôme le plus visible des deux.'
                }
              </Translate>
            </p>
          </>
        ),
      },
      {
        heading: (
          <Translate id="learn.discord-raid.s3.h" description="section heading">
            Quelles conséquences pour votre serveur ?
          </Translate>
        ),
        body: (
          <ul>
            <li>
              <Translate id="learn.discord-raid.s3.i1" description="li">
                Le chat est noyé : les vraies conversations deviennent illisibles.
              </Translate>
            </li>
            <li>
              <Translate id="learn.discord-raid.s3.i2" description="li">
                Des liens d'arnaque et du contenu choquant sont diffusés à vos
                membres.
              </Translate>
            </li>
            <li>
              <Translate id="learn.discord-raid.s3.i3" description="li">
                Des membres quittent le serveur et votre réputation en pâtit.
              </Translate>
            </li>
            <li>
              <Translate id="learn.discord-raid.s3.i4" description="li">
                Votre équipe de modération est débordée et s'épuise.
              </Translate>
            </li>
          </ul>
        ),
      },
      {
        heading: (
          <Translate id="learn.discord-raid.s4.h" description="section heading">
            Comment protéger son serveur des raids ?
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.discord-raid.s4.intro" description="intro">
                Aucune mesure unique ne suffit : une bonne protection anti-raid
                repose sur plusieurs couches complémentaires.
              </Translate>
            </p>
            <ul>
              <li>
                <strong>
                  <Translate id="learn.discord-raid.s4.i1.t" description="li title">
                    Vérification à l'entrée.
                  </Translate>
                </strong>{' '}
                <Translate
                  id="learn.discord-raid.s4.i1.b"
                  description="li body with link"
                  values={{
                    link: (
                      <Link to="/docs/features/captcha">
                        <Translate id="learn.discord-raid.s4.i1.link" description="link label">
                          captcha
                        </Translate>
                      </Link>
                    ),
                  }}>
                  {
                    'Un {link} oblige chaque nouveau membre à prouver qu’il est humain, ce qui bloque les vagues de bots avant l’accès au serveur.'
                  }
                </Translate>
              </li>
              <li>
                <strong>
                  <Translate id="learn.discord-raid.s4.i2.t" description="li title">
                    Détection automatique des vagues.
                  </Translate>
                </strong>{' '}
                <Translate
                  id="learn.discord-raid.s4.i2.b"
                  description="li body with link"
                  values={{
                    link: (
                      <Link to="/docs/features/raid-mode">
                        <Translate id="learn.discord-raid.s4.i2.link" description="link label">
                          mode anti-raid
                        </Translate>
                      </Link>
                    ),
                  }}>
                  {
                    'Le {link} repère un afflux anormal de connexions et verrouille le serveur le temps que la vague passe.'
                  }
                </Translate>
              </li>
              <li>
                <strong>
                  <Translate id="learn.discord-raid.s4.i3.t" description="li title">
                    Piège à bots.
                  </Translate>
                </strong>{' '}
                <Translate
                  id="learn.discord-raid.s4.i3.b"
                  description="li body with link"
                  values={{
                    link: (
                      <Link to="/docs/features/honeypot">
                        <Translate id="learn.discord-raid.s4.i3.link" description="link label">
                          HoneyPot
                        </Translate>
                      </Link>
                    ),
                  }}>
                  {
                    'Un salon {link} attire les comptes automatisés et les sanctionne sans jamais toucher aux vrais membres.'
                  }
                </Translate>
              </li>
              <li>
                <strong>
                  <Translate id="learn.discord-raid.s4.i4.t" description="li title">
                    Permissions minimales.
                  </Translate>
                </strong>{' '}
                <Translate id="learn.discord-raid.s4.i4.b" description="li body">
                  Ne confiez les rôles sensibles qu'aux personnes de confiance,
                  pour limiter aussi le risque de nuke.
                </Translate>
              </li>
            </ul>
            <p>
              <Translate
                id="learn.discord-raid.s4.outro"
                description="outro with bold stat"
                values={{count: <strong>380 000 serveurs</strong>}}>
                {
                  'C’est exactement ce que RaidProtect automatise : le bot protège aujourd’hui plus de {count} et a déjà bloqué des millions de messages de spam.'
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
          id: 'learn.discord-raid.faq.q1',
          message: 'Un raid Discord est-il illégal ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.discord-raid.faq.a1',
          message:
            "Organiser ou participer à un raid pour nuire à un serveur viole les Conditions d'utilisation de Discord et peut entraîner la suspension des comptes impliqués. Selon le contenu diffusé, cela peut aussi relever du harcèlement.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.discord-raid.faq.q2',
          message: 'Combien de comptes faut-il pour parler de raid ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.discord-raid.faq.a2',
          message:
            "Il n'y a pas de seuil officiel. Un raid se caractérise par la coordination et la simultanéité, pas par un nombre précis : de quelques dizaines de comptes à plusieurs milliers via des bots.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.discord-raid.faq.q3',
          message: 'Comment arrêter un raid déjà en cours ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.discord-raid.faq.a3',
          message:
            'Verrouillez le serveur (fermez les arrivées et les salons), expulsez les comptes récemment arrivés, puis vérifiez les permissions. Un bot comme RaidProtect détecte la vague et applique ce verrouillage automatiquement.',
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.discord-raid.faq.q4',
          message: 'Un raid et un nuke, est-ce la même chose ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.discord-raid.faq.a4',
          message:
            "Non. Un raid vient de l'extérieur (une vague de comptes qui débarque), tandis qu'un nuke vient de l'intérieur (un membre ou un bot avec des permissions qui détruit le serveur). Les deux se protègent différemment.",
          description: 'faq a',
        }),
      },
    ],
    related: [
      {
        label: (
          <Translate id="learn.discord-raid.rel1" description="related link">
            Qu'est-ce qu'un nuke Discord ?
          </Translate>
        ),
        to: '/learn/discord-nuke',
      },
      {
        label: (
          <Translate id="learn.discord-raid.rel2b" description="related link">
            Qu'est-ce qu'un self-bot ?
          </Translate>
        ),
        to: '/learn/self-bot',
      },
      {
        label: (
          <Translate id="learn.discord-raid.rel3b" description="related link">
            Le mode anti-raid de RaidProtect
          </Translate>
        ),
        to: '/docs/features/raid-mode',
      },
      {
        label: (
          <Translate id="learn.discord-raid.rel4b" description="related link">
            La vérification par captcha
          </Translate>
        ),
        to: '/docs/features/captcha',
      },
    ],
  };

  return <LearnArticle content={content} />;
}
