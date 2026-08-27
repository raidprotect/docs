import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import LearnArticle, {
  type LearnContent,
} from '@site/src/components/learn/LearnArticle';

/* Article de glossaire : « Qu'est-ce qu'un nuke Discord ? ». */

export default function DiscordNukePage(): ReactNode {
  const content: LearnContent = {
    slug: 'discord-nuke',
    metaTitle: translate({
      id: 'learn.discord-nuke.metaTitle',
      message: "Nuke Discord : c'est quoi et comment protéger son serveur ?",
      description: 'Learn article meta title: Discord nuke',
    }),
    metaDescription: translate({
      id: 'learn.discord-nuke.metaDescription',
      message:
        "Un nuke Discord, c'est la destruction d'un serveur de l'intérieur par abus de permissions : salons supprimés, bannissements de masse. Définition, différence avec un raid, et prévention.",
      description: 'Learn article meta description: Discord nuke',
    }),
    term: 'Nuke Discord',
    title: (
      <Translate id="learn.discord-nuke.title" description="H1">
        Qu'est-ce qu'un nuke Discord ?
      </Translate>
    ),
    definition: (
      <Translate id="learn.discord-nuke.definition" description="definition">
        Un nuke Discord est la destruction d'un serveur depuis l'intérieur, par un
        membre ou un bot disposant de permissions élevées : suppression massive de
        salons et de rôles, bannissements en chaîne, spam via webhooks.
      </Translate>
    ),
    definitionText:
      "Un nuke Discord est la destruction d'un serveur depuis l'intérieur, par un membre ou un bot disposant de permissions élevées : suppression massive de salons et de rôles, bannissements en chaîne, spam via webhooks.",
    sections: [
      {
        heading: (
          <Translate id="learn.discord-nuke.s1.h" description="h">
            Comment survient un nuke ?
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.discord-nuke.s1.p1" description="p">
                Contrairement à un raid, un nuke ne vient pas d'une vague de
                comptes extérieurs : il part d'un compte déjà présent sur le
                serveur et disposant de droits élevés.
              </Translate>
            </p>
            <p>
              <Translate
                id="learn.discord-nuke.s1.p2"
                description="p with link"
                values={{
                  token: (
                    <Link to="/learn/token-grabber">
                      <Translate id="learn.discord-nuke.s1.p2.token" description="link">
                        token volé
                      </Translate>
                    </Link>
                  ),
                }}>
                {
                  "Trois cas reviennent le plus souvent : un membre du staff dont le compte est compromis ({token}, phishing), un bot malveillant ajouté avec trop de permissions, ou un modérateur mal intentionné."
                }
              </Translate>
            </p>
            <p>
              <Translate id="learn.discord-nuke.s1.p3" description="p">
                En quelques secondes, un script supprime les salons, en recrée des
                centaines pour spammer, bannit les membres et efface les rôles. La
                rapidité est ce qui rend le nuke si destructeur.
              </Translate>
            </p>
          </>
        ),
      },
      {
        heading: (
          <Translate id="learn.discord-nuke.s2.h" description="h">
            Nuke ou raid : quelle différence ?
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.discord-nuke.s2.intro" description="p">
                On confond souvent les deux, mais l'angle d'attaque est opposé, et
                la protection aussi.
              </Translate>
            </p>
            <table>
              <thead>
                <tr>
                  <th />
                  <th>Raid</th>
                  <th>Nuke</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>
                      <Translate id="learn.discord-nuke.s2.r1" description="row label">
                        Origine
                      </Translate>
                    </strong>
                  </td>
                  <td>
                    <Translate id="learn.discord-nuke.s2.raid.origin" description="cell">
                      De l'extérieur
                    </Translate>
                  </td>
                  <td>
                    <Translate id="learn.discord-nuke.s2.nuke.origin" description="cell">
                      De l'intérieur
                    </Translate>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      <Translate id="learn.discord-nuke.s2.r2" description="row label">
                        Vecteur
                      </Translate>
                    </strong>
                  </td>
                  <td>
                    <Translate id="learn.discord-nuke.s2.raid.vec" description="cell">
                      Le nombre : une vague de comptes
                    </Translate>
                  </td>
                  <td>
                    <Translate id="learn.discord-nuke.s2.nuke.vec" description="cell">
                      Les permissions : un compte privilégié
                    </Translate>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      <Translate id="learn.discord-nuke.s2.r3" description="row label">
                        Protection clé
                      </Translate>
                    </strong>
                  </td>
                  <td>
                    <Translate id="learn.discord-nuke.s2.raid.prot" description="cell">
                      Vérification à l'entrée, anti-raid
                    </Translate>
                  </td>
                  <td>
                    <Translate id="learn.discord-nuke.s2.nuke.prot" description="cell">
                      Moindre privilège, 2FA, contrôle des bots
                    </Translate>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              <Translate
                id="learn.discord-nuke.s2.summary"
                description="summary with link"
                values={{
                  link: (
                    <Link to="/learn/discord-raid">
                      <Translate id="learn.discord-nuke.s2.link" description="link label">
                        raid Discord
                      </Translate>
                    </Link>
                  ),
                }}>
                {
                  'À retenir : on ne se protège pas d’un nuke comme d’un {link}. Bloquer les arrivées ne sert à rien si la menace a déjà les clés du serveur.'
                }
              </Translate>
            </p>
          </>
        ),
      },
      {
        heading: (
          <Translate id="learn.discord-nuke.s3.h" description="h">
            Pourquoi c'est particulièrement dangereux
          </Translate>
        ),
        body: (
          <ul>
            <li>
              <Translate id="learn.discord-nuke.s3.i1" description="li">
                C'est quasi instantané et souvent irréversible : salons, messages
                et rôles supprimés ne se récupèrent pas nativement.
              </Translate>
            </li>
            <li>
              <Translate id="learn.discord-nuke.s3.i2" description="li">
                Une fois lancé, c'est difficile à arrêter, car l'auteur possède
                déjà les droits nécessaires.
              </Translate>
            </li>
            <li>
              <Translate id="learn.discord-nuke.s3.i3" description="li">
                Les membres bannis et la communauté dispersée sont longs à
                reconstruire, même après restauration.
              </Translate>
            </li>
          </ul>
        ),
      },
      {
        heading: (
          <Translate id="learn.discord-nuke.s4.h" description="h">
            Comment protéger son serveur d'un nuke ?
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.discord-nuke.s4.intro" description="p">
                La meilleure défense se joue en amont : un nuke vient presque
                toujours d'un compte privilégié, donc tout se joue sur la confiance
                que vous accordez avant de distribuer des permissions.
              </Translate>
            </p>
            <ul>
              <li>
                <strong>
                  <Translate id="learn.discord-nuke.s4.i1.t" description="li title">
                    Le moindre privilège, la vraie solution.
                  </Translate>
                </strong>{' '}
                <Translate
                  id="learn.discord-nuke.s4.i1.b2"
                  description="li body with link"
                  values={{
                    link: (
                      <Link to="/learn/least-privilege">
                        <Translate id="learn.discord-nuke.s4.i1.link" description="link label">
                          moindre privilège
                        </Translate>
                      </Link>
                    ),
                  }}>
                  {
                    "C'est de loin la protection la plus efficace. N'accordez « Administrateur », « Gérer les salons » ou « Gérer les rôles » qu'aux personnes en qui vous avez vraiment confiance, et donnez à chacun le strict minimum : c'est le principe du {link}."
                  }
                </Translate>
              </li>
              <li>
                <strong>
                  <Translate id="learn.discord-nuke.s4.i2.t" description="li title">
                    2FA obligatoire.
                  </Translate>
                </strong>{' '}
                <Translate id="learn.discord-nuke.s4.i2.b" description="li body">
                  Activez l'authentification à deux facteurs requise pour la
                  modération : un compte staff piraté devient bien plus difficile
                  à exploiter.
                </Translate>
              </li>
              <li>
                <strong>
                  <Translate id="learn.discord-nuke.s4.i3.t" description="li title">
                    Contrôlez vos bots.
                  </Translate>
                </strong>{' '}
                <Translate id="learn.discord-nuke.s4.i3.b" description="li body">
                  N'ajoutez que des bots de confiance et retirez l'admin à ceux
                  qui n'en ont pas besoin : un bot compromis peut nuke à lui seul.
                </Translate>
              </li>
              <li>
                <strong>
                  <Translate id="learn.discord-nuke.s4.i4b.t" description="li title">
                    Verrouillez les rôles sensibles.
                  </Translate>
                </strong>{' '}
                <Translate
                  id="learn.discord-nuke.s4.i4b.b"
                  description="li body with link"
                  values={{
                    link: (
                      <Link to="/docs/features/authentication-manager">
                        <Translate id="learn.discord-nuke.s4.i4b.link" description="link label">
                          Authentication Manager
                        </Translate>
                      </Link>
                    ),
                  }}>
                  {
                    "L'{link} de RaidProtect protège l'accès aux rôles sensibles par une vérification d'identité (passkey, PIN, OTP) et des sessions temporaires : même le compte d'une personne de confiance, s'il est piraté, ne garde pas un accès admin permanent."
                  }
                </Translate>
              </li>
              <li>
                <strong>
                  <Translate id="learn.discord-nuke.s4.i5.t" description="li title">
                    Auditez votre configuration.
                  </Translate>
                </strong>{' '}
                <Translate
                  id="learn.discord-nuke.s4.i5.b"
                  description="li body with link"
                  values={{
                    link: (
                      <Link to="/docs/features/audit">
                        <Translate id="learn.discord-nuke.s4.i5.link" description="link label">
                          audit de sécurité
                        </Translate>
                      </Link>
                    ),
                  }}>
                  {
                    "L'{link} de RaidProtect passe en revue les permissions et les réglages à risque de votre serveur, et vous montre quoi corriger."
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
          id: 'learn.discord-nuke.faq.q1',
          message: 'Un nuke et un raid, est-ce la même chose ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.discord-nuke.faq.a1',
          message:
            "Non. Un raid vient de l'extérieur (une vague de comptes qui débarque), tandis qu'un nuke vient de l'intérieur (un compte ou un bot avec des permissions qui détruit le serveur).",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.discord-nuke.faq.q2',
          message: 'Peut-on récupérer un serveur après un nuke ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.discord-nuke.faq.a2',
          message:
            "Les salons, messages et rôles supprimés ne se récupèrent pas nativement : d'où l'importance de la prévention. Les bannissements, eux, peuvent être levés tant que le serveur existe encore.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.discord-nuke.faq.q3',
          message: 'Un bot peut-il nuke mon serveur ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.discord-nuke.faq.a3',
          message:
            "Oui, s'il dispose de permissions élevées. N'accordez l'administrateur qu'aux bots de confiance et vérifiez les droits de chaque bot que vous ajoutez.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.discord-nuke.faq.q4',
          message: "D'où vient un compte staff compromis ?",
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.discord-nuke.faq.a4',
          message:
            "Le plus souvent d'un token volé par un token grabber ou d'une tentative de phishing. C'est pourquoi la 2FA et la prudence sur les fichiers et liens sont essentielles.",
          description: 'faq a',
        }),
      },
    ],
    related: [
      {
        label: (
          <Translate id="learn.discord-nuke.rel1" description="related">
            Qu'est-ce qu'un raid Discord ?
          </Translate>
        ),
        to: '/learn/discord-raid',
      },
      {
        label: (
          <Translate id="learn.discord-nuke.rel2" description="related">
            Le principe du moindre privilège
          </Translate>
        ),
        to: '/learn/least-privilege',
      },
      {
        label: (
          <Translate id="learn.discord-nuke.rel3b" description="related">
            Qu'est-ce qu'un token grabber ?
          </Translate>
        ),
        to: '/learn/token-grabber',
      },
      {
        label: (
          <Translate id="learn.discord-nuke.rel4b" description="related">
            L'Authentication Manager
          </Translate>
        ),
        to: '/docs/features/authentication-manager',
      },
    ],
  };

  return <LearnArticle content={content} />;
}
