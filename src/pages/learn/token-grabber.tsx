import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import LearnArticle, {
  type LearnContent,
} from '@site/src/components/learn/LearnArticle';

/* Article de glossaire : « Qu'est-ce qu'un token grabber ? ». */

export default function TokenGrabberPage(): ReactNode {
  const content: LearnContent = {
    slug: 'token-grabber',
    metaTitle: translate({
      id: 'learn.token-grabber.metaTitle',
      message: 'Token grabber Discord : comment un compte se fait voler',
      description: 'Learn article meta title: token grabber',
    }),
    metaDescription: translate({
      id: 'learn.token-grabber.metaDescription',
      message:
        "Un token grabber est un programme malveillant qui vole le token Discord d'un compte pour le pirater, sans mot de passe. Comment ça marche et comment se protéger.",
      description: 'Learn article meta description: token grabber',
    }),
    term: translate({
      id: 'learn.token-grabber.term',
      message: 'Token grabber',
      description: 'Learn glossary term name (breadcrumb + schema)',
    }),
    title: (
      <Translate id="learn.token-grabber.title" description="H1">
        Qu'est-ce qu'un token grabber ?
      </Translate>
    ),
    definition: (
      <Translate id="learn.token-grabber.definition" description="definition">
        Un token grabber est un programme malveillant conçu pour voler le token
        Discord, la clé qui authentifie votre compte. Avec ce token, un attaquant
        peut contrôler votre compte sans mot de passe.
      </Translate>
    ),
    definitionText: translate({
      id: 'learn.token-grabber.definitionText',
      message: "Un token grabber est un programme malveillant conçu pour voler le token Discord, la clé qui authentifie votre compte. Avec ce token, un attaquant peut contrôler votre compte sans mot de passe.",
      description: 'Learn definition plain text for schema.org',
    }),
    sections: [
      {
        heading: (
          <Translate id="learn.token-grabber.s1.h" description="h">
            C'est quoi un token Discord ?
          </Translate>
        ),
        body: (
          <p>
            <Translate id="learn.token-grabber.s1.p1" description="p">
              Le token est une chaîne secrète qui prouve à Discord que c'est bien
              vous. Votre application le stocke localement pour vous garder
              connecté. Quiconque met la main dessus peut se connecter à votre
              place, sans mot de passe et sans déclencher la double authentification.
            </Translate>
          </p>
        ),
      },
      {
        heading: (
          <Translate id="learn.token-grabber.s2.h" description="h">
            Comment un token grabber vole votre compte
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.token-grabber.s2.p1" description="p">
                Le piège arrive presque toujours par un fichier ou un lien qu'on
                vous pousse à ouvrir :
              </Translate>
            </p>
            <ul>
              <li>
                <Translate id="learn.token-grabber.s2.i1" description="li">
                  De faux logiciels, cheats, cracks ou « outils Discord » à
                  télécharger.
                </Translate>
              </li>
              <li>
                <Translate id="learn.token-grabber.s2.i2" description="li">
                  De fausses offres « Nitro gratuit » et des liens de phishing.
                </Translate>
              </li>
              <li>
                <Translate id="learn.token-grabber.s2.i3" description="li">
                  Des extensions ou des scripts piégés.
                </Translate>
              </li>
            </ul>
            <p>
              <Translate id="learn.token-grabber.s2.p2" description="p">
                Une fois exécuté, le programme lit les fichiers locaux où le token
                est stocké et l'envoie à l'attaquant, souvent en quelques secondes
                et sans le moindre signe visible.
              </Translate>
            </p>
          </>
        ),
      },
      {
        heading: (
          <Translate id="learn.token-grabber.s3.h" description="h">
            Le risque pour vos serveurs
          </Translate>
        ),
        body: (
          <p>
            <Translate
              id="learn.token-grabber.s3.p1"
              description="p with link"
              values={{
                link: (
                  <Link to="/learn/discord-nuke">
                    <Translate id="learn.token-grabber.s3.link" description="link">
                      nuke
                    </Translate>
                  </Link>
                ),
              }}>
              {
                "Avec votre compte, l’attaquant envoie des scams à vos amis et rejoint vos serveurs. Et si vous êtes admin ou modérateur, un token volé est l’un des moyens les plus courants de {link} un serveur de l’intérieur : c’est le point de départ de nombreuses attaques."
              }
            </Translate>
          </p>
        ),
      },
      {
        heading: (
          <Translate id="learn.token-grabber.s4.h" description="h">
            Comment se protéger d'un token grabber ?
          </Translate>
        ),
        body: (
          <ul>
            <li>
              <strong>
                <Translate id="learn.token-grabber.s4.i1.t" description="li title">
                  N'exécutez rien de non fiable.
                </Translate>
              </strong>{' '}
              <Translate id="learn.token-grabber.s4.i1.b" description="li body">
                Cheats, cracks, « outils » Discord et fichiers reçus de sources
                inconnues sont le vecteur numéro un.
              </Translate>
            </li>
            <li>
              <strong>
                <Translate id="learn.token-grabber.s4.i2.t" description="li title">
                  Méfiez-vous du « gratuit ».
                </Translate>
              </strong>{' '}
              <Translate id="learn.token-grabber.s4.i2.b" description="li body">
                Les « Nitro gratuit » et liens trop beaux pour être vrais sont du
                phishing dans la quasi-totalité des cas.
              </Translate>
            </li>
            <li>
              <strong>
                <Translate id="learn.token-grabber.s4.i3.t" description="li title">
                  Réagissez vite si vous êtes compromis.
                </Translate>
              </strong>{' '}
              <Translate id="learn.token-grabber.s4.i3.b" description="li body">
                Changez votre mot de passe immédiatement : cela invalide le token
                volé et déconnecte l'attaquant.
              </Translate>
            </li>
            <li>
              <strong>
                <Translate
                  id="learn.token-grabber.s4.i4.t"
                  description="li title with link"
                  values={{
                    link: (
                      <Link to="/learn/least-privilege">
                        <Translate id="learn.token-grabber.s4.i4.link" description="link">
                          moindre privilège
                        </Translate>
                      </Link>
                    ),
                  }}>
                  {'Côté serveur, appliquez le {link}.'}
                </Translate>
              </strong>{' '}
              <Translate id="learn.token-grabber.s4.i4.b" description="li body">
                Ainsi, même le compte d'un membre du staff compromis ne peut pas
                tout détruire.
              </Translate>
            </li>
          </ul>
        ),
      },
    ],
    faq: [
      {
        question: translate({
          id: 'learn.token-grabber.faq.q1',
          message: 'Un token grabber vole-t-il mon mot de passe ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.token-grabber.faq.a1',
          message:
            "Non : il vole le token de session, ce qui suffit pour accéder au compte sans le mot de passe. C'est justement ce qui le rend dangereux.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.token-grabber.faq.q2',
          message: 'La double authentification protège-t-elle du token grabber ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.token-grabber.faq.a2',
          message:
            "Pas directement, car un token déjà volé contourne la connexion. Mais elle protège le changement de mot de passe et la reconnexion, et changer son mot de passe invalide le token volé.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.token-grabber.faq.q3',
          message: 'Comment savoir si mon token a été volé ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.token-grabber.faq.a3',
          message:
            "Surveillez toute activité inconnue : messages que vous n'avez pas écrits, serveurs rejoints ou quittés, DM de scam envoyés en votre nom. Au moindre doute, changez votre mot de passe.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.token-grabber.faq.q4',
          message: 'Quel rapport avec un nuke ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.token-grabber.faq.a4',
          message:
            "Un token volé à un administrateur est l'un des moyens les plus courants de nuke un serveur : l'attaquant agit depuis un compte légitime et privilégié.",
          description: 'faq a',
        }),
      },
    ],
    related: [
      {
        label: (
          <Translate id="learn.token-grabber.rel1" description="related">
            Qu'est-ce qu'un nuke Discord ?
          </Translate>
        ),
        to: '/learn/discord-nuke',
      },
      {
        label: (
          <Translate id="learn.token-grabber.rel2" description="related">
            Qu'est-ce qu'un self-bot ?
          </Translate>
        ),
        to: '/learn/self-bot',
      },
      {
        label: (
          <Translate id="learn.token-grabber.rel3" description="related">
            Protéger les MP de vos membres
          </Translate>
        ),
        to: '/docs/features/dm-lock',
      },
      {
        label: (
          <Translate id="learn.token-grabber.rel4" description="related">
            Qu'est-ce qu'un raid Discord ?
          </Translate>
        ),
        to: '/learn/discord-raid',
      },
    ],
  };

  return <LearnArticle content={content} />;
}
