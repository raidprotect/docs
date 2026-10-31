import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import LearnArticle, {
  type LearnContent,
} from '@site/src/components/learn/LearnArticle';

/* Article de glossaire : le captcha et la vérification des membres sur Discord,
 * ce que chaque méthode récupère (adresse IP) et le repérage des doubles comptes. */

export default function CaptchaDiscordPage(): ReactNode {
  const content: LearnContent = {
    slug: 'captcha-discord',
    metaTitle: translate({
      id: 'learn.captcha-discord.metaTitle',
      message: 'Captcha Discord : vérifier les membres sans récupérer leur IP',
      description: 'Learn article meta title: captcha-discord',
    }),
    metaDescription: translate({
      id: 'learn.captcha-discord.metaDescription',
      message:
        "Captcha dans Discord, page web externe ou Activity : les façons de vérifier les nouveaux membres, ce que chacune récupère, et comment repérer les doubles comptes sans adresse IP.",
      description: 'Learn article meta description: captcha-discord',
    }),
    term: translate({
      id: 'learn.captcha-discord.term',
      message: 'Captcha et vérification Discord',
      description: 'Learn glossary term name (breadcrumb + schema)',
    }),
    title: (
      <Translate id="learn.captcha-discord.title" description="H1">
        Le captcha et la vérification sur Discord
      </Translate>
    ),
    definition: (
      <Translate id="learn.captcha-discord.definition" description="definition">
        Une vérification, ou captcha, demande à chaque nouveau membre de prouver
        qu'il est humain avant d'accéder au serveur. Selon l'outil, elle se passe
        dans Discord ou sur un site externe, et ce choix décide des données
        récupérées, à commencer par l'adresse IP.
      </Translate>
    ),
    definitionText: translate({
      id: 'learn.captcha-discord.definitionText',
      message:
        "Une vérification, ou captcha, demande à chaque nouveau membre de prouver qu'il est humain avant d'accéder au serveur. Selon l'outil, elle se passe dans Discord ou sur un site externe, et ce choix décide des données récupérées, à commencer par l'adresse IP.",
      description: 'Learn definition plain text for schema.org',
    }),
    sections: [
      {
        heading: (
          <Translate id="learn.captcha-discord.s1.h" description="h">
            À quoi sert une vérification
          </Translate>
        ),
        body: (
          <p>
            <Translate
              id="learn.captcha-discord.s1.p1"
              description="p with links"
              values={{
                selfbot: (
                  <Link to="/learn/self-bot">
                    <Translate id="learn.captcha-discord.s1.selfbot" description="link">
                      self-bot
                    </Translate>
                  </Link>
                ),
                raid: (
                  <Link to="/learn/discord-raid">
                    <Translate id="learn.captcha-discord.s1.raid" description="link">
                      raid
                    </Translate>
                  </Link>
                ),
              }}>
              {
                "À son arrivée, le membre reçoit un rôle « non vérifié » qui ne lui montre qu'un salon de vérification. Tant qu'il n'a pas réussi l'épreuve, il ne voit pas le reste du serveur et ne peut pas y écrire. Un {selfbot}, ou une vague de comptes pendant un {raid}, reste bloqué à l'entrée."
              }
            </Translate>
          </p>
        ),
      },
      {
        heading: (
          <Translate id="learn.captcha-discord.s2.h" description="h">
            Les trois façons de vérifier un membre
          </Translate>
        ),
        body: (
          <ul>
            <li>
              <Translate id="learn.captcha-discord.s2.i1" description="li">
                Dans Discord, par message : le membre recopie un code affiché sur
                une image, ou clique sur un bouton. Rien ne sort de Discord, mais un
                automate bien entraîné peut parfois lire l'image.
              </Translate>
            </li>
            <li>
              <Translate id="learn.captcha-discord.s2.i2" description="li">
                Sur un site externe : un bouton ouvre une page web qui affiche le
                captcha. Ce site voit l'adresse IP du membre et son navigateur, et
                peut poser des cookies. C'est souvent ainsi que des bots comparent
                les IP pour repérer les doubles comptes.
              </Translate>
            </li>
            <li>
              <Translate id="learn.captcha-discord.s2.i3" description="li">
                Dans une Activity Discord : la page s'ouvre dans Discord, comme un
                jeu. Ses échanges passent par le proxy de Discord, qui ne transmet
                pas l'adresse IP du membre à l'application.
              </Translate>
            </li>
          </ul>
        ),
      },
      {
        heading: (
          <Translate id="learn.captcha-discord.s3.h" description="h">
            Ce qu'un bot Discord voit de vous
          </Translate>
        ),
        body: (
          <p>
            <Translate id="learn.captcha-discord.s3.p1" description="p">
              Discord ne donne l'adresse IP de ses utilisateurs à aucun bot. Un bot
              voit votre compte, vos rôles et vos messages sur le serveur, rien de
              plus. Une IP n'est récupérée que si vous ouvrez une page web hébergée
              ailleurs que dans Discord. Avant de vous vérifier sur un site, regardez
              son adresse : dès que vous quittez Discord, ce site peut voir votre IP.
            </Translate>
          </p>
        ),
      },
      {
        id: 'alts',
        heading: (
          <Translate id="learn.captcha-discord.s4.h" description="h">
            Repérer les doubles comptes sans adresse IP
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.captcha-discord.s4.p1" description="p">
                Comparer les adresses IP est la méthode la plus répandue, mais elle
                a ses limites. Plusieurs personnes partagent souvent la même IP (une
                famille, un internat, un réseau mobile), ce qui accuse des
                innocents, et un VPN suffit à en changer. Elle oblige aussi à garder
                une donnée personnelle.
              </Translate>
            </p>
            <p>
              <Translate id="learn.captcha-discord.s4.p2" description="p">
                D'autres indices existent : l'appareil utilisé, la façon de résoudre
                l'épreuve, ou simplement le lien déclaré par l'équipe de modération
                quand elle reconnaît quelqu'un.
              </Translate>
            </p>
          </>
        ),
      },
      {
        heading: (
          <Translate id="learn.captcha-discord.s6.h" description="h">
            Une adresse IP qu'on ne garde pas ne peut pas fuiter
          </Translate>
        ),
        body: (
          <p>
            <Translate
              id="learn.captcha-discord.s6.p1"
              description="p with external source link"
              values={{
                source: (
                  <a
                    href="https://cybersecuritynews.com/discord-users-data-exposed/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Translate id="learn.captcha-discord.s6.source" description="link">
                      Cyber Security News
                    </Translate>
                  </a>
                ),
              }}>
              {
                "En octobre 2026, Double Counter, un bot de détection des doubles comptes qui vérifie les membres sur son site, a subi une fuite de données. Selon {source}, environ 27 millions d'enregistrements d'adresses IP et de localisation ont été copiés, avec des millions d'identifiants Discord. C'est la limite de toute vérification qui garde les adresses IP : une fois stockées, elles peuvent fuiter, et elles permettent de situer une personne. Nous ne voyons jamais l'adresse IP des membres, nous n'avons donc pas ce risque."
              }
            </Translate>
          </p>
        ),
      },
      {
        heading: (
          <Translate id="learn.captcha-discord.s5.h" description="h">
            Comment fait RaidProtect
          </Translate>
        ),
        body: (
          <ul>
            <li>
              <Translate
                id="learn.captcha-discord.s5.i1"
                description="li with link"
                values={{
                  link: (
                    <Link to="/docs/features/captcha#privacy">
                      <Translate id="learn.captcha-discord.s5.i1.link" description="link">
                        captcha
                      </Translate>
                    </Link>
                  ),
                }}>
                {
                  "Notre {link} se passe dans l'Activity RaidProtect, dans Discord. Nous ne récupérons pas l'adresse IP des membres, et l'Activity le leur indique."
                }
              </Translate>
            </li>
            <li>
              <Translate id="learn.captcha-discord.s5.i2" description="li">
                Avec l'accord du membre, l'Activity vérifie son appareil pour
                repérer les automates et les doubles comptes. L'équipe du serveur ne
                reçoit que le résultat.
              </Translate>
            </li>
            <li>
              <Translate
                id="learn.captcha-discord.s5.i3"
                description="li with link"
                values={{
                  link: (
                    <Link to="/docs/features/alt-accounts">
                      <Translate id="learn.captcha-discord.s5.i3.link" description="link">
                        doubles comptes
                      </Translate>
                    </Link>
                  ),
                }}>
                {
                  "Avec l'Identity Update, en expérimentation, deux {link} sûrs d'être la même personne sont liés automatiquement. Un lien qui ne repose que sur l'appareil est proposé à l'équipe, jamais appliqué d'office."
                }
              </Translate>
            </li>
            <li>
              <Translate id="learn.captcha-discord.s5.i4" description="li">
                Les doubles comptes restent propres à chaque serveur : rien n'est
                partagé avec d'autres serveurs.
              </Translate>
            </li>
            <li>
              <Translate id="learn.captcha-discord.s5.i5" description="li">
                En mode Challenge, le membre recopie un code en message dans le
                salon, et rien n'est relevé sur son appareil.
              </Translate>
            </li>
          </ul>
        ),
      },
    ],
    faq: [
      {
        question: translate({
          id: 'learn.captcha-discord.faq.q1',
          message: 'Un captcha Discord peut-il voir mon adresse IP ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.captcha-discord.faq.a1',
          message:
            "Pas s'il se passe dans Discord : Discord ne donne l'adresse IP à aucun bot, et une Activity passe par son proxy. Une page web externe, elle, voit votre IP.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.captcha-discord.faq.q2',
          message: 'RaidProtect récupère-t-il mon adresse IP ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.captcha-discord.faq.a2',
          message:
            "Non. Notre captcha se passe dans l'Activity RaidProtect, dans Discord, et nous ne voyons jamais l'adresse IP des membres.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.captcha-discord.faq.q3',
          message: 'Comment RaidProtect repère-t-il les doubles comptes ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.captcha-discord.faq.a3',
          message:
            "Par la vérification de l'appareil, faite dans l'Activity du captcha avec l'accord du membre, et par les liens que l'équipe déclare avec /alt. Jamais par l'adresse IP.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.captcha-discord.faq.q4',
          message: "Que se passe-t-il si je refuse la vérification de l'appareil ?",
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.captcha-discord.faq.a4',
          message:
            "Vous ne pouvez pas accéder au serveur : le refus compte comme un captcha raté, et le serveur applique l'action prévue (expulsion, jail ou blocage de quelques minutes).",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.captcha-discord.faq.q5',
          message: 'Un captcha gêne-t-il les vrais membres ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.captcha-discord.faq.a5',
          message:
            "Il ajoute une étape à l'arrivée. C'est pourquoi le captcha de RaidProtect peut ne s'appliquer que pendant un raid, ou aussi aux comptes qui semblent suspects.",
          description: 'faq a',
        }),
      },
    ],
    related: [
      {
        label: (
          <Translate id="learn.captcha-discord.rel1" description="related">
            Qu'est-ce qu'un self-bot ?
          </Translate>
        ),
        to: '/learn/self-bot',
      },
      {
        label: (
          <Translate id="learn.captcha-discord.rel2" description="related">
            Qu'est-ce qu'un raid Discord ?
          </Translate>
        ),
        to: '/learn/discord-raid',
      },
      {
        label: (
          <Translate id="learn.captcha-discord.rel3" description="related">
            Le captcha RaidProtect
          </Translate>
        ),
        to: '/docs/features/captcha',
      },
      {
        label: (
          <Translate id="learn.captcha-discord.rel4" description="related">
            Les doubles comptes
          </Translate>
        ),
        to: '/docs/features/alt-accounts',
      },
    ],
  };

  return <LearnArticle content={content} />;
}
