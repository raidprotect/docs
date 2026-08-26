import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import LearnArticle, {
  type LearnContent,
} from '@site/src/components/learn/LearnArticle';

/* Article de glossaire : le principe du moindre privilège sur Discord. */

export default function MoindrePrivilegePage(): ReactNode {
  const content: LearnContent = {
    slug: 'moindre-privilege',
    metaTitle: translate({
      id: 'learn.moindre-privilege.metaTitle',
      message: 'Moindre privilège sur Discord : la meilleure défense anti-nuke',
      description: 'Learn article meta title: least privilege',
    }),
    metaDescription: translate({
      id: 'learn.moindre-privilege.metaDescription',
      message:
        "Le moindre privilège, c'est ne donner à chaque membre et bot que les permissions strictement nécessaires. Pourquoi c'est votre meilleure défense anti-nuke, et comment l'appliquer.",
      description: 'Learn article meta description: least privilege',
    }),
    term: 'Moindre privilège',
    title: (
      <Translate id="learn.moindre-privilege.title" description="H1">
        Le principe du moindre privilège sur Discord
      </Translate>
    ),
    definition: (
      <Translate id="learn.moindre-privilege.definition" description="definition">
        Le principe du moindre privilège consiste à ne donner à chaque membre et à
        chaque bot que les permissions strictement nécessaires à leur rôle, et rien
        de plus. Moins il y a de comptes tout-puissants, moins un compte compromis
        peut faire de dégâts.
      </Translate>
    ),
    definitionText:
      "Le principe du moindre privilège consiste à ne donner à chaque membre et à chaque bot que les permissions strictement nécessaires à leur rôle, et rien de plus. Moins il y a de comptes tout-puissants, moins un compte compromis peut faire de dégâts.",
    sections: [
      {
        heading: (
          <Translate id="learn.moindre-privilege.s1.h" description="h">
            En quoi ça consiste
          </Translate>
        ),
        body: (
          <p>
            <Translate
              id="learn.moindre-privilege.s1.p1"
              description="p with emphasis"
              values={{
                strong: (
                  <strong>juste ce qu'il faut, et rien de plus</strong>
                ),
              }}>
              {
                "Chaque personne et chaque bot ne reçoit que {strong}. Sur Discord, cela veut dire éviter de distribuer la permission « Administrateur » à tout va, préférer des permissions granulaires réparties par rôle (gérer les messages, expulser, gérer les salons…) et garder une hiérarchie de rôles claire."
              }
            </Translate>
          </p>
        ),
      },
      {
        heading: (
          <Translate id="learn.moindre-privilege.s2.h" description="h">
            Pourquoi c'est votre meilleure défense anti-nuke
          </Translate>
        ),
        body: (
          <p>
            <Translate
              id="learn.moindre-privilege.s2.p1"
              description="p with links"
              values={{
                nuke: (
                  <Link to="/learn/discord-nuke">
                    <Translate id="learn.moindre-privilege.s2.nuke" description="link">
                      nuke
                    </Translate>
                  </Link>
                ),
                token: (
                  <Link to="/learn/token-grabber">
                    <Translate id="learn.moindre-privilege.s2.token" description="link">
                      token volé
                    </Translate>
                  </Link>
                ),
              }}>
              {
                "La plupart des {nuke} viennent d'un compte privilégié : un membre du staff dont le compte est compromis (via un {token} ou du phishing), ou un bot malveillant avec trop de droits. Si personne n'a plus de permissions que nécessaire, même un compte piraté ne peut pas tout détruire. Le moindre privilège réduit le rayon de dégâts."
              }
            </Translate>
          </p>
        ),
      },
      {
        heading: (
          <Translate id="learn.moindre-privilege.s3.h" description="h">
            Les bonnes pratiques sur Discord
          </Translate>
        ),
        body: (
          <ul>
            <li>
              <Translate id="learn.moindre-privilege.s3.i1" description="li">
                N'accordez « Administrateur » qu'à très peu de personnes de
                confiance.
              </Translate>
            </li>
            <li>
              <Translate id="learn.moindre-privilege.s3.i2" description="li">
                Préférez des permissions granulaires par rôle plutôt que l'admin
                global.
              </Translate>
            </li>
            <li>
              <Translate id="learn.moindre-privilege.s3.i3" description="li">
                Retirez l'admin aux bots qui n'en ont pas besoin : un bot compromis
                peut nuke à lui seul.
              </Translate>
            </li>
            <li>
              <Translate id="learn.moindre-privilege.s3.i4" description="li">
                Activez la 2FA obligatoire pour la modération.
              </Translate>
            </li>
            <li>
              <Translate
                id="learn.moindre-privilege.s3.i5"
                description="li with link"
                values={{
                  link: (
                    <Link to="/docs/features/audit">
                      <Translate id="learn.moindre-privilege.s3.i5.link" description="link">
                        audit de sécurité
                      </Translate>
                    </Link>
                  ),
                }}>
                {
                  "Vérifiez régulièrement qui a quelles permissions : l'{link} de RaidProtect repère les droits à risque."
                }
              </Translate>
            </li>
          </ul>
        ),
      },
      {
        heading: (
          <Translate id="learn.moindre-privilege.s4.h" description="h">
            Aller plus loin : verrouiller l'accès aux rôles sensibles
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.moindre-privilege.s4.p1" description="p">
                Le moindre privilège réduit le nombre de comptes puissants, mais ces
                comptes restent une cible de choix. C'est là qu'intervient
                l'Authentication Manager de RaidProtect.
              </Translate>
            </p>
            <p>
              <Translate
                id="learn.moindre-privilege.s4.p2"
                description="p with code and link"
                values={{
                  auth: <code>/auth</code>,
                  link: (
                    <Link to="/docs/features/authentication-manager">
                      <Translate id="learn.moindre-privilege.s4.link" description="link">
                        Authentication Manager
                      </Translate>
                    </Link>
                  ),
                }}>
                {
                  "L'{link} protège l'accès aux rôles sensibles par une vraie vérification d'identité (passkey, code PIN ou OTP) : obtenir le rôle demande de s'authentifier via {auth}. Surtout, l'accès est accordé pour une session temporaire qui expire, après quoi le rôle sensible est retiré automatiquement."
                }
              </Translate>
            </p>
            <p>
              <Translate
                id="learn.moindre-privilege.s4.p3"
                description="p with emphasis"
                values={{
                  strong: (
                    <strong>
                      un accès administrateur permanent
                    </strong>
                  ),
                }}>
                {
                  "Résultat : même si le compte d'un membre du staff est compromis, l'attaquant ne récupère pas {strong}. Il lui faudrait aussi passer l'authentification, et la fenêtre d'accès reste courte. C'est le moindre privilège appliqué non seulement à « qui », mais aussi à « pour combien de temps »."
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
          id: 'learn.moindre-privilege.faq.q1',
          message: "C'est quoi le moindre privilège, en clair ?",
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.moindre-privilege.faq.a1',
          message:
            "Donner à chaque membre et à chaque bot juste ce dont il a besoin, rien de plus. Moins il y a de comptes tout-puissants, moins un compte compromis peut causer de dégâts.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.moindre-privilege.faq.q2',
          message: 'Comment le moindre privilège protège-t-il d\'un nuke ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.moindre-privilege.faq.a2',
          message:
            "Un nuke vient presque toujours d'un compte privilégié. En limitant les permissions de chacun, un compte compromis ne peut pas supprimer les salons ni bannir en masse : il n'en a tout simplement pas le droit.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.moindre-privilege.faq.q3',
          message: "Faut-il donner l'administrateur à un bot ?",
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.moindre-privilege.faq.a3',
          message:
            "Seulement s'il en a réellement besoin. Un bot avec trop de droits est un risque : privilégiez des permissions ciblées, et n'accordez l'admin qu'aux bots de confiance qui le nécessitent.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.moindre-privilege.faq.q4',
          message: "Quel est le rapport avec l'Authentication Manager ?",
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.moindre-privilege.faq.a4',
          message:
            "Il pousse le principe plus loin : il protège l'accès aux rôles sensibles par une vérification d'identité et des sessions temporaires, pour qu'un compte compromis ne conserve pas un accès administrateur permanent.",
          description: 'faq a',
        }),
      },
    ],
    related: [
      {
        label: (
          <Translate id="learn.moindre-privilege.rel1" description="related">
            Qu'est-ce qu'un nuke Discord ?
          </Translate>
        ),
        to: '/learn/discord-nuke',
      },
      {
        label: (
          <Translate id="learn.moindre-privilege.rel2" description="related">
            Qu'est-ce qu'un token grabber ?
          </Translate>
        ),
        to: '/learn/token-grabber',
      },
      {
        label: (
          <Translate id="learn.moindre-privilege.rel3" description="related">
            L'Authentication Manager
          </Translate>
        ),
        to: '/docs/features/authentication-manager',
      },
      {
        label: (
          <Translate id="learn.moindre-privilege.rel4" description="related">
            L'audit de sécurité RaidProtect
          </Translate>
        ),
        to: '/docs/features/audit',
      },
    ],
  };

  return <LearnArticle content={content} />;
}
