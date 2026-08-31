import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import LearnArticle, {
  type LearnContent,
} from '@site/src/components/learn/LearnArticle';

/* Article « explainer » ciblé SEO : le message « this server is raidable »
 * (bots type Jalapeno), le spam par applications externes, et comment corriger. */

export default function ServerRaidablePage(): ReactNode {
  const content: LearnContent = {
    slug: 'server-raidable',
    kind: 'explainer',
    metaTitle: translate({
      id: 'learn.server-raidable.metaTitle',
      message: '« This server is raidable » : ce que ça veut dire et comment corriger',
      description: 'Learn explainer meta title: this server is raidable',
    }),
    metaDescription: translate({
      id: 'learn.server-raidable.metaDescription',
      message:
        "Un bot comme Jalapeno affiche « this server is raidable » ? Ce message signale seulement que les applications externes sont autorisées. Ce que ça veut vraiment dire, et comment protéger votre serveur.",
      description: 'Learn explainer meta description: this server is raidable',
    }),
    term: '« This server is raidable »',
    title: (
      <Translate id="learn.server-raidable.title" description="H1">
        « This server is raidable » : faut-il s'inquiéter ?
      </Translate>
    ),
    definition: (
      <Translate id="learn.server-raidable.definition" description="TL;DR">
        Le message « this server is raidable » vient d'un bot comme Jalapeno,
        installé en application utilisateur. Il signale simplement que vos membres
        peuvent utiliser des applications externes, ce qui pourrait servir à
        spammer via des messages de suivi. Ce n'est pas une faille en soi, et deux
        réglages suffisent à s'en protéger.
      </Translate>
    ),
    definitionText:
      "Le message « this server is raidable » vient d'un bot comme Jalapeno, installé en application utilisateur. Il signale simplement que vos membres peuvent utiliser des applications externes, ce qui pourrait servir à spammer via des messages de suivi. Ce n'est pas une faille en soi, et deux réglages suffisent à s'en protéger.",
    sections: [
      {
        heading: (
          <Translate id="learn.server-raidable.s1.h" description="h">
            D'où vient le spam par applications externes ?
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.server-raidable.s1.p1" description="p">
                Discord permet d'installer des applications directement sur son
                compte, les « applications utilisateur ». Une fois installée, on
                peut utiliser leurs commandes dans n'importe quel serveur qui
                autorise les applications externes, même si l'application n'y est
                pas ajoutée.
              </Translate>
            </p>
            <p>
              <Translate
                id="learn.server-raidable.s1.p2"
                description="p with link"
                values={{
                  spam: (
                    <Link to="/learn/spam-discord">
                      <Translate id="learn.server-raidable.s1.spam" description="link">
                        spammer
                      </Translate>
                    </Link>
                  ),
                }}>
                {
                  "Certaines applications malveillantes en profitent : via une commande, elles envoient une rafale de messages de suivi (« follow-up ») dans le salon, ce qui permet de {spam} un serveur sans même y être invité. Le message apparaît au nom de l'application, mais c'est bien un membre qui l'a déclenchée."
                }
              </Translate>
            </p>
          </>
        ),
      },
      {
        heading: (
          <Translate id="learn.server-raidable.s2.h" description="h">
            « This server is raidable » : ce que ça veut vraiment dire
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.server-raidable.s2.p1" description="p">
                Des bots comme Jalapeno proposent une commande qui affiche « this
                server is raidable ». En réalité, ce test se contente de vérifier
                une seule chose : est-ce que les membres ont la permission
                d'utiliser des applications externes ? Si oui, il affiche
                « raidable ».
              </Translate>
            </p>
            <p>
              <Translate
                id="learn.server-raidable.s2.p2"
                description="p with emphasis"
                values={{
                  strong: (
                    <strong>
                      un compte administrateur affichera toujours « raidable »
                    </strong>
                  ),
                }}>
                {
                  "C'est trompeur. Avoir cette permission activée ne veut pas dire que votre serveur est sans défense. Et surtout, gare au piège : {strong}, car un administrateur contourne toutes les permissions. Vous pourriez croire à un problème qui n'existe pas, même après l'avoir corrigé."
                }
              </Translate>
            </p>
          </>
        ),
      },
      {
        heading: (
          <Translate id="learn.server-raidable.s3.h" description="h">
            Comment corriger « this server is raidable »
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.server-raidable.s3.intro" description="p">
                Deux solutions, selon que vous vouliez garder ou non les
                applications externes.
              </Translate>
            </p>
            <ul>
              <li>
                <strong>
                  <Translate id="learn.server-raidable.s3.i1.t" description="li title">
                    Désactiver les applications externes.
                  </Translate>
                </strong>{' '}
                <Translate id="learn.server-raidable.s3.i1.b" description="li body">
                  Dans les permissions du rôle @everyone (ou par salon), retirez
                  « Utiliser les applications externes » (Use External Apps). Les
                  membres ne pourront plus déclencher d'applications utilisateur.
                  Pensez à tester avec un compte non-administrateur : un admin
                  contourne la permission et verra toujours « raidable ».
                </Translate>
              </li>
              <li>
                <strong>
                  <Translate id="learn.server-raidable.s3.i2.t" description="li title">
                    Ajouter RaidProtect.
                  </Translate>
                </strong>{' '}
                <Translate
                  id="learn.server-raidable.s3.i2.b"
                  description="li body with link"
                  values={{
                    link: (
                      <Link to="/docs/features/anti-spam">
                        <Translate id="learn.server-raidable.s3.i2.link" description="link">
                          anti-spam
                        </Translate>
                      </Link>
                    ),
                  }}>
                  {
                    "Si vous préférez garder les applications externes (elles ont des usages légitimes), l'{link} de RaidProtect détecte le spam par messages de suivi, remonte jusqu'au membre qui l'a déclenché et le sanctionne automatiquement. Ceux qui tentent de vous « raid » de cette façon se font immédiatement dégager."
                  }
                </Translate>
              </li>
            </ul>
          </>
        ),
      },
    ],
    faq: [
      {
        question: translate({
          id: 'learn.server-raidable.faq.q1',
          message: 'Que signifie « this server is raidable » ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.server-raidable.faq.a1',
          message:
            "Que vos membres peuvent utiliser des applications externes, ce qui pourrait servir à spammer un salon via des messages de suivi. Ce n'est pas une faille en soi.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.server-raidable.faq.q2',
          message: 'Le test « raidable » de Jalapeno est-il fiable ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.server-raidable.faq.a2',
          message:
            "Il se contente de vérifier une permission. Et si vous testez avec un compte administrateur, il affichera toujours « raidable », car les admins contournent les permissions. À prendre avec beaucoup de recul.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.server-raidable.faq.q3',
          message: 'Comment enlever le message « this server is raidable » ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.server-raidable.faq.a3',
          message:
            "Désactivez « Utiliser les applications externes » pour les membres (en testant avec un compte non-admin), ou ajoutez RaidProtect dont l'anti-spam repère et sanctionne ces tentatives.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.server-raidable.faq.q4',
          message: 'Faut-il vraiment désactiver les applications externes ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.server-raidable.faq.a4',
          message:
            "Pas forcément : elles ont des usages légitimes. Avec un anti-spam comme celui de RaidProtect, vous pouvez les garder tout en restant protégé contre le spam par messages de suivi.",
          description: 'faq a',
        }),
      },
    ],
    related: [
      {
        label: (
          <Translate id="learn.server-raidable.rel1" description="related">
            L'anti-spam de RaidProtect
          </Translate>
        ),
        to: '/docs/features/anti-spam',
      },
      {
        label: (
          <Translate id="learn.server-raidable.rel2" description="related">
            Qu'est-ce que le spam Discord ?
          </Translate>
        ),
        to: '/learn/spam-discord',
      },
      {
        label: (
          <Translate id="learn.server-raidable.rel3" description="related">
            Qu'est-ce qu'un raid Discord ?
          </Translate>
        ),
        to: '/learn/discord-raid',
      },
      {
        label: (
          <Translate id="learn.server-raidable.rel4" description="related">
            Qu'est-ce qu'un self-bot ?
          </Translate>
        ),
        to: '/learn/self-bot',
      },
    ],
  };

  return <LearnArticle content={content} />;
}
