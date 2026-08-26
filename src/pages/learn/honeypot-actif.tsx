import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import LearnArticle, {
  type LearnContent,
} from '@site/src/components/learn/LearnArticle';

/* Article « explainer » : faut-il un bot pour animer un salon HoneyPot ?
 * Débunke l'idée reçue du salon « chaud ». */

export default function HoneypotActifPage(): ReactNode {
  const content: LearnContent = {
    slug: 'honeypot-actif',
    kind: 'explainer',
    metaTitle: translate({
      id: 'learn.honeypot-actif.metaTitle',
      message: "Salon HoneyPot « actif » : faut-il un bot pour l'animer ?",
      description: 'Learn explainer meta title: honeypot activity',
    }),
    metaDescription: translate({
      id: 'learn.honeypot-actif.metaDescription',
      message:
        "Faut-il faire tourner un bot qui poste des messages pour qu'un salon HoneyPot paraisse actif ? Non : on explique simplement pourquoi c'est inutile.",
      description: 'Learn explainer meta description: honeypot activity',
    }),
    term: 'HoneyPot « actif »',
    title: (
      <Translate id="learn.honeypot-actif.title" description="H1">
        Faut-il un bot pour garder un salon HoneyPot « actif » ?
      </Translate>
    ),
    definition: (
      <Translate id="learn.honeypot-actif.definition" description="TL;DR answer">
        Non. Un salon HoneyPot n'a pas besoin d'être « animé » par un bot. Pour
        savoir si un salon est actif, il faut lire les messages… et donc voir qui
        les a écrits. Une fausse activité est donc immédiatement repérable, et de
        toute façon les comptes qui spamment ne font pas cette vérification.
      </Translate>
    ),
    definitionText:
      "Non. Un salon HoneyPot n'a pas besoin d'être animé par un bot. Pour savoir si un salon est actif, il faut lire les messages et donc voir qui les a écrits : une fausse activité est immédiatement repérable, et les comptes qui spamment ne font de toute façon pas cette vérification.",
    sections: [
      {
        heading: (
          <Translate id="learn.honeypot-actif.s1.h" description="h">
            Rappel : c'est quoi un salon HoneyPot ?
          </Translate>
        ),
        body: (
          <p>
            <Translate
              id="learn.honeypot-actif.s1.p1"
              description="p with links"
              values={{
                hp: (
                  <Link to="/docs/features/honeypot">
                    <Translate id="learn.honeypot-actif.s1.hp" description="link">
                      HoneyPot
                    </Translate>
                  </Link>
                ),
                bot: (
                  <Link to="/learn/self-bot">
                    <Translate id="learn.honeypot-actif.s1.bot" description="link">
                      comptes automatisés
                    </Translate>
                  </Link>
                ),
              }}>
              {
                "Un salon {hp} est un piège : aucun vrai membre n'a de raison d'y écrire. Du coup, tout compte qui poste dedans est presque à coup sûr un spammeur, et il est sanctionné automatiquement. C'est un moyen simple et redoutable d'attraper les {bot}."
              }
            </Translate>
          </p>
        ),
      },
      {
        heading: (
          <Translate id="learn.honeypot-actif.s2.h" description="h">
            L'idée reçue : « il faut que le salon ait l'air vivant »
          </Translate>
        ),
        body: (
          <p>
            <Translate id="learn.honeypot-actif.s2.p1" description="p">
              On lit parfois ce conseil : faire tourner un bot qui poste des
              messages dans le HoneyPot pour le rendre « chaud », histoire que les
              spammeurs le croient actif et viennent y poster. L'intention paraît
              logique… mais elle ne tient pas, et c'est même contre-productif.
            </Translate>
          </p>
        ),
      },
      {
        heading: (
          <Translate id="learn.honeypot-actif.s3.h" description="h">
            Pourquoi ça ne marche pas
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.honeypot-actif.s3.p1" description="p">
                Posez-vous la question : comment sait-on qu'un salon est « actif » ?
                Il faut lire ses derniers messages. Il n'y a pas d'autre moyen.
              </Translate>
            </p>
            <p>
              <Translate
                id="learn.honeypot-actif.s3.p2"
                description="p with emphasis"
                values={{
                  strong: (
                    <strong>
                      lire les messages, c'est aussi voir qui les a écrits
                    </strong>
                  ),
                }}>
                {
                  "Et voilà le problème : {strong}. Chaque message affiche son auteur. Donc si un bot a « chauffé » le salon, n'importe qui regarde verrait que toute l'activité vient d'un seul et même bot. La supercherie se voit tout de suite."
                }
              </Translate>
            </p>
            <p>
              <Translate id="learn.honeypot-actif.s3.p3" description="p">
                Autrement dit : il n'existe aucun moyen d'automatiser
                « intelligemment » un faux salon vivant. L'auteur des messages
                trahit toujours le fait que l'activité est bidon.
              </Translate>
            </p>
          </>
        ),
      },
      {
        heading: (
          <Translate id="learn.honeypot-actif.s4.h" description="h">
            Et surtout : personne ne regarde
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.honeypot-actif.s4.p1" description="p">
                Il y a plus simple encore. Pour vérifier l'activité d'un salon
                avant d'y envoyer des comptes, un attaquant devrait se connecter,
                récupérer l'historique des messages et l'analyser. C'est lourd,
                coûteux, et lent.
              </Translate>
            </p>
            <p>
              <Translate id="learn.honeypot-actif.s4.p2" description="p">
                Or les personnes qui automatisent des comptes pour spammer en masse
                ne font pas ça : c'est trop compliqué et trop lourd pour rien. Elles
                envoient leurs comptes partout, sans se poser la question.
              </Translate>
            </p>
            <p>
              <Translate
                id="learn.honeypot-actif.s4.p3"
                description="p with emphasis"
                values={{
                  strong: (
                    <strong>
                      un HoneyPot fonctionne justement parce qu'il est vide et
                      silencieux
                    </strong>
                  ),
                }}>
                {
                  "Résultat : {strong}. Il n'a pas besoin de paraître vivant. Au contraire, moins il y a d'activité légitime, plus le moindre message devient un signal d'alarme fiable."
                }
              </Translate>
            </p>
          </>
        ),
      },
      {
        heading: (
          <Translate id="learn.honeypot-actif.s5.h" description="h">
            Ce qu'il faut retenir
          </Translate>
        ),
        body: (
          <ul>
            <li>
              <Translate id="learn.honeypot-actif.s5.i1" description="li">
                Laissez votre salon HoneyPot vide : n'y écrivez pas, et n'y mettez
                pas de bot pour l'animer.
              </Translate>
            </li>
            <li>
              <Translate id="learn.honeypot-actif.s5.i2" description="li">
                Une fausse activité est repérable (l'auteur des messages est
                visible) et ne trompe personne.
              </Translate>
            </li>
            <li>
              <Translate id="learn.honeypot-actif.s5.i3" description="li">
                De toute façon, les spammeurs automatisés ne vérifient pas
                l'activité d'un salon : c'est trop coûteux pour eux.
              </Translate>
            </li>
          </ul>
        ),
      },
    ],
    faq: [
      {
        question: translate({
          id: 'learn.honeypot-actif.faq.q1',
          message: 'Faut-il écrire dans mon salon HoneyPot ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.honeypot-actif.faq.a1',
          message:
            "Non. Il doit rester vide et silencieux : aucun vrai membre n'a de raison d'y poster, donc tout message y est un signal fiable de compte indésirable.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.honeypot-actif.faq.q2',
          message: "Un bot qui « chauffe » le salon, ça aide ?",
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.honeypot-actif.faq.a2',
          message:
            "Non. Cela crée une fausse activité facilement repérable, car l'auteur de chaque message est visible, et cela consomme des ressources pour rien.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.honeypot-actif.faq.q3',
          message: 'Les spammeurs vérifient-ils si un salon est actif ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.honeypot-actif.faq.a3',
          message:
            "En pratique, non. Analyser l'activité d'un salon avant d'y poster serait trop lourd et trop coûteux : les comptes automatisés spamment sans faire cette vérification.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.honeypot-actif.faq.q4',
          message: 'Comment un HoneyPot piège-t-il les bots, alors ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.honeypot-actif.faq.a4',
          message:
            "Justement parce qu'il est silencieux : comme personne de légitime n'y écrit, tout compte qui y poste se dénonce de lui-même et peut être sanctionné automatiquement.",
          description: 'faq a',
        }),
      },
    ],
    related: [
      {
        label: (
          <Translate id="learn.honeypot-actif.rel1" description="related">
            Le salon-piège HoneyPot
          </Translate>
        ),
        to: '/docs/features/honeypot',
      },
      {
        label: (
          <Translate id="learn.honeypot-actif.rel2" description="related">
            Qu'est-ce qu'un self-bot ?
          </Translate>
        ),
        to: '/learn/self-bot',
      },
      {
        label: (
          <Translate id="learn.honeypot-actif.rel3" description="related">
            Qu'est-ce qu'un raid Discord ?
          </Translate>
        ),
        to: '/learn/discord-raid',
      },
      {
        label: (
          <Translate id="learn.honeypot-actif.rel4" description="related">
            L'anti-spam de RaidProtect
          </Translate>
        ),
        to: '/docs/features/anti-spam',
      },
    ],
  };

  return <LearnArticle content={content} />;
}
