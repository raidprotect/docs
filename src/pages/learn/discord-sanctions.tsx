import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import LearnArticle, {
  type LearnContent,
} from '@site/src/components/learn/LearnArticle';

/* Entrée de glossaire transverse : les sept sanctions Discord (natives et
 * apportées par les bots), leurs différences réelles, et l'échelle d'usage.
 * Sert de cible de lien depuis anti-spam, honeypot, moderation et sanctions. */

export default function DiscordSanctionsPage(): ReactNode {
  const content: LearnContent = {
    slug: 'discord-sanctions',
    metaTitle: translate({
      id: 'learn.discord-sanctions.metaTitle',
      message: 'Ban, kick, timeout, mute : les sanctions Discord expliquées',
      description: 'Learn term meta title: discord sanctions',
    }),
    metaDescription: translate({
      id: 'learn.discord-sanctions.metaDescription',
      message:
        "Ban, softban, kick, timeout, mute, jail, avertissement : ce que fait vraiment chaque sanction Discord, laquelle choisir selon la situation, et les erreurs les plus fréquentes.",
      description: 'Learn term meta description: discord sanctions',
    }),
    term: translate({
      id: 'learn.discord-sanctions.term',
      message: 'Les sanctions Discord',
      description: 'Learn glossary term name (breadcrumb + schema)',
    }),
    title: (
      <Translate id="learn.discord-sanctions.title" description="H1">
        Ban, kick, timeout, mute : les sanctions Discord expliquées
      </Translate>
    ),
    definition: (
      <Translate id="learn.discord-sanctions.definition" description="TL;DR">
        {
          "Sur Discord, trois actions de modération sont natives : l'exclusion temporaire (timeout), l'expulsion (kick) et le bannissement (ban). RaidProtect les pilote pour vous et en ajoute quatre autres (avertissement, mute, jail, softban) : c'est cet ensemble qu'on appelle les sanctions. Elles ne se valent pas : certaines suppriment les messages, d'autres laissent revenir le membre, d'autres encore dépendent entièrement de vos permissions de salon."
        }
      </Translate>
    ),
    definitionText: translate({
      id: 'learn.discord-sanctions.definitionText',
      message:
        "Sur Discord, trois actions de modération sont natives : l'exclusion temporaire (timeout), l'expulsion (kick) et le bannissement (ban). RaidProtect les pilote pour vous et en ajoute quatre autres (avertissement, mute, jail, softban) : c'est cet ensemble qu'on appelle les sanctions. Elles ne se valent pas : certaines suppriment les messages, d'autres laissent revenir le membre, d'autres encore dépendent entièrement de vos permissions de salon.",
      description: 'Learn definition plain text for schema.org',
    }),
    sections: [
      {
        heading: (
          <Translate id="learn.discord-sanctions.s0.h" description="h">
            Action de modération ou sanction ?
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate
                id="learn.discord-sanctions.s0.p1"
                description="p with emphasis"
                values={{
                  actions: (
                    <strong>
                      <Translate id="learn.discord-sanctions.s0.actions" description="bold term">
                        actions de modération
                      </Translate>
                    </strong>
                  ),
                }}>
                {
                  "Discord fournit un socle d'{actions} natives : ce que votre serveur sait faire tout seul, sans bot, et ce que vous retrouvez dans son journal d'audit. Elles sont trois."
                }
              </Translate>
            </p>
            <p>
              <Translate
                id="learn.discord-sanctions.s0.p2"
                description="p with emphasis and link"
                values={{
                  sanctions: (
                    <strong>
                      <Translate id="learn.discord-sanctions.s0.sanctions" description="bold term">
                        sanctions
                      </Translate>
                    </strong>
                  ),
                  history: (
                    <Link to="/docs/features/sanctions">
                      <Translate id="learn.discord-sanctions.s0.history" description="link">
                        historique
                      </Translate>
                    </Link>
                  ),
                }}>
                {
                  "RaidProtect, lui, parle de {sanctions}. Le mot englobe ces actions natives, qu'il déclenche à votre place, et celles qu'il ajoute par-dessus. Quand vous choisissez une sanction dans les paramètres du bot, vous piochez indifféremment dans les deux familles, et tout atterrit dans le même {history}."
                }
              </Translate>
            </p>
          </>
        ),
      },
      {
        heading: (
          <Translate id="learn.discord-sanctions.s1.h" description="h">
            Les trois actions de modération de Discord
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.discord-sanctions.s1.intro" description="p">
                Ces trois-là existent sans aucun bot. RaidProtect ne fait que les
                déclencher pour vous, plus vite et en gardant la trace.
              </Translate>
            </p>
            <ul>
              <li>
                <strong>
                  <Translate id="learn.discord-sanctions.s1.timeout.t" description="li title">
                    Timeout (exclusion temporaire).
                  </Translate>
                </strong>{' '}
                <Translate id="learn.discord-sanctions.s1.timeout.b" description="li body">
                  Le membre reste sur le serveur mais ne peut plus écrire, réagir
                  ni parler en vocal, pendant 28 jours maximum.
                </Translate>
              </li>
              <li>
                <strong>
                  <Translate id="learn.discord-sanctions.s1.kick.t" description="li title">
                    Expulsion (kick).
                  </Translate>
                </strong>{' '}
                <Translate id="learn.discord-sanctions.s1.kick.b" description="li body">
                  Le membre quitte le serveur, ses messages restent, et il peut
                  revenir avec une nouvelle invitation.
                </Translate>
              </li>
              <li>
                <strong>
                  <Translate id="learn.discord-sanctions.s1.ban.t" description="li title">
                    Bannissement (ban).
                  </Translate>
                </strong>{' '}
                <Translate id="learn.discord-sanctions.s1.ban.b" description="li body">
                  Le membre est exclu durablement et ne peut pas revenir tant que
                  le ban tient. Discord peut supprimer ses messages récents au
                  passage.
                </Translate>
              </li>
            </ul>
          </>
        ),
      },
      {
        heading: (
          <Translate id="learn.discord-sanctions.s1b.h" description="h">
            Les quatre sanctions ajoutées par RaidProtect
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.discord-sanctions.s1b.intro" description="p">
                Celles-ci n'existent pas dans Discord : c'est le bot qui les
                fabrique, à partir de rôles ou d'enchaînements d'actions natives.
              </Translate>
            </p>
            <ul>
              <li>
                <strong>
                  <Translate id="learn.discord-sanctions.s1.warn.t" description="li title">
                    Avertissement (warn).
                  </Translate>
                </strong>{' '}
                <Translate id="learn.discord-sanctions.s1.warn.b" description="li body">
                  Aucun effet technique : le membre est prévenu, et la trace reste
                  dans son historique. Utile pour documenter avant d'aller plus
                  loin.
                </Translate>
              </li>
              <li>
                <strong>
                  <Translate id="learn.discord-sanctions.s1.mute.t" description="li title">
                    Mute.
                  </Translate>
                </strong>{' '}
                <Translate id="learn.discord-sanctions.s1.mute.b" description="li body">
                  Un rôle qui retire la permission d'écrire. Il dépend entièrement
                  de vos permissions de salon.
                </Translate>
              </li>
              <li>
                <strong>
                  <Translate id="learn.discord-sanctions.s1.jail.t" description="li title">
                    Jail (prison).
                  </Translate>
                </strong>{' '}
                <Translate id="learn.discord-sanctions.s1.jail.b" description="li body">
                  Un rôle qui coupe l'accès à tout le serveur sauf un salon, le
                  temps de discuter avec le membre. Combiné à la Fermeture des
                  MP, il prive des mêmes droits qu'un bannissement.
                </Translate>
              </li>
              <li>
                <strong>
                  <Translate id="learn.discord-sanctions.s1.softban.t" description="li title">
                    Softban.
                  </Translate>
                </strong>{' '}
                <Translate id="learn.discord-sanctions.s1.softban.b" description="li body">
                  Un bannissement suivi d'un débannissement immédiat, enchaîné par
                  le bot : les messages récents disparaissent, et le membre peut
                  revenir.
                </Translate>
              </li>
            </ul>
          </>
        ),
      },
      {
        heading: (
          <Translate id="learn.discord-sanctions.s2.h" description="h">
            Timeout ou mute : la confusion la plus fréquente
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.discord-sanctions.s2.p1" description="p">
                Les deux empêchent de parler, mais pas de la même façon. Le timeout
                est une fonction native de Discord : il s'applique partout sur le
                serveur, en écrit comme en vocal, il survit à un changement de rôle
                et le membre voit un compte à rebours. Sa limite, c'est sa durée :
                28 jours maximum.
              </Translate>
            </p>
            <p>
              <Translate
                id="learn.discord-sanctions.s2.p2"
                description="p with link"
                values={{
                  role: (
                    <Link to="/docs/features/sanctions#mute">
                      <Translate id="learn.discord-sanctions.s2.role" description="link">
                        rôle Mute
                      </Translate>
                    </Link>
                  ),
                }}>
                {
                  "Le mute, lui, repose sur un {role} que le bot attribue. Il ne vaut que ce que valent vos permissions : si un salon oublie de refuser la parole à ce rôle, ou si un nouveau salon est créé sans reprendre ces permissions, le membre continue d'écrire. En contrepartie, un mute peut durer indéfiniment et se règle salon par salon."
                }
              </Translate>
            </p>
            <p>
              <Translate id="learn.discord-sanctions.s2.p3" description="p">
                En résumé : le timeout pour une mise au calme rapide et fiable, le
                mute pour une restriction longue ou sur mesure.
              </Translate>
            </p>
          </>
        ),
      },
      {
        heading: (
          <Translate id="learn.discord-sanctions.s3.h" description="h">
            Kick, softban, ban : ce qui change vraiment
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.discord-sanctions.s3.intro" description="p">
                Ces trois sanctions sortent le membre du serveur, mais leurs
                conséquences n'ont rien à voir.
              </Translate>
            </p>
            <ul>
              <li>
                <strong>
                  <Translate id="learn.discord-sanctions.s3.kick.t" description="li title">
                    L'expulsion
                  </Translate>
                </strong>{' '}
                <Translate id="learn.discord-sanctions.s3.kick.b" description="li body">
                  ne supprime aucun message et ne bloque pas le retour. Elle sert à
                  interrompre quelqu'un, pas à l'écarter.
                </Translate>
              </li>
              <li>
                <strong>
                  <Translate id="learn.discord-sanctions.s3.softban.t" description="li title">
                    Le softban
                  </Translate>
                </strong>{' '}
                <Translate
                  id="learn.discord-sanctions.s3.softban.b"
                  description="li body with link"
                  values={{
                    hacked: (
                      <Link to="/learn/token-grabber">
                        <Translate id="learn.discord-sanctions.s3.hacked" description="link">
                          compte piraté
                        </Translate>
                      </Link>
                    ),
                  }}>
                  {
                    "nettoie les messages récents, ce que le kick ne fait pas, tout en laissant la porte ouverte. C'est la bonne réponse à un {hacked} qui spamme : le propriétaire légitime reviendra une fois son compte récupéré."
                  }
                </Translate>
              </li>
              <li>
                <strong>
                  <Translate id="learn.discord-sanctions.s3.ban.t" description="li title">
                    Le bannissement
                  </Translate>
                </strong>{' '}
                <Translate
                  id="learn.discord-sanctions.s3.ban.b"
                  description="li body with link"
                  values={{
                    raid: (
                      <Link to="/learn/discord-raid">
                        <Translate id="learn.discord-sanctions.s3.raid" description="link">
                          raids
                        </Translate>
                      </Link>
                    ),
                  }}>
                  {
                    "est la seule mesure qui empêche vraiment le retour. À réserver aux comptes créés pour nuire, aux récidivistes et aux {raid}."
                  }
                </Translate>
              </li>
            </ul>
          </>
        ),
      },
      {
        heading: (
          <Translate id="learn.discord-sanctions.sjail.h" description="h">
            Jail + Fermeture des MP : un ban, sans les dégâts collatéraux
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.discord-sanctions.sjail.p1" description="p">
                Un bannissement fait deux choses en même temps :
              </Translate>
            </p>
            <ul>
              <li>
                <Translate id="learn.discord-sanctions.sjail.b1" description="li">
                  il coupe l'accès au serveur ;
                </Translate>
              </li>
              <li>
                <Translate id="learn.discord-sanctions.sjail.b2" description="li">
                  il coupe l'accès à vos membres, puisque Discord réserve les
                  messages privés aux personnes qui partagent un serveur ou qui
                  sont amies.
                </Translate>
              </li>
            </ul>
            <p>
              <Translate id="learn.discord-sanctions.sjail.p2" description="p">
                C'est ce cumul qui le rend radical. On le reproduit sans exclure
                personne :
              </Translate>
            </p>
            <ul>
              <li>
                <Translate
                  id="learn.discord-sanctions.sjail.b3"
                  description="li with link"
                  values={{
                    jail: (
                      <Link to="/docs/features/sanctions#jail">
                        <Translate id="learn.discord-sanctions.sjail.jail" description="link">
                          jail
                        </Translate>
                      </Link>
                    ),
                  }}>
                  {
                    "le {jail} enferme le membre dans un salon et lui retire tout le reste du serveur ;"
                  }
                </Translate>
              </li>
              <li>
                <Translate
                  id="learn.discord-sanctions.sjail.b4"
                  description="li with link"
                  values={{
                    dmlock: (
                      <Link to="/docs/features/dm-lock">
                        <Translate id="learn.discord-sanctions.sjail.dmlock" description="link">
                          Fermeture des MP
                        </Translate>
                      </Link>
                    ),
                  }}>
                  {"la {dmlock} l'empêche d'écrire en privé aux autres membres."}
                </Translate>
              </li>
            </ul>
            <p>
              <Translate id="learn.discord-sanctions.sjail.p3" description="p">
                Mêmes exceptions que pour un ban : les amis, les bots, le staff.
                Du point de vue de ce que la personne peut encore faire, jail +
                Fermeture des MP = un bannissement.
              </Translate>
            </p>
            <p>
              <Translate id="learn.discord-sanctions.sjail.p4" description="p">
                Sauf qu'un ban ne s'arrête pas au compte visé : Discord y ajoute
                un blocage au niveau de l'adresse IP, pour empêcher le retour
                avec un autre compte.
              </Translate>
            </p>
            <p>
              <Translate id="learn.discord-sanctions.sjail.p5" description="p">
                Or une IPv4 publique est partagée par énormément de monde (box
                familiale, résidence étudiante, réseau associatif, opérateur
                mobile en CGNAT), et ces adresses sont réattribuées
                régulièrement. Des comptes qui n'ont rien fait se retrouvent
                bloqués à l'entrée de votre serveur, parfois des mois plus tard.
              </Translate>
            </p>
            <p>
              <Translate id="learn.discord-sanctions.sjail.p6" description="p">
                D'où notre recommandation : le jail en réflexe par défaut, le
                bannissement pour les comptes jetables créés uniquement pour vous
                attaquer. Les mêmes droits retirés, aucun dégât collatéral, et
                c'est réversible.
              </Translate>
            </p>
          </>
        ),
      },
      {
        heading: (
          <Translate id="learn.discord-sanctions.s4.h" description="h">
            Quelle sanction pour quelle situation
          </Translate>
        ),
        body: (
          <>
            <p>
              <Translate id="learn.discord-sanctions.s4.intro" description="p">
                Il n'existe pas de barème universel, mais cette échelle couvre la
                grande majorité des cas.
              </Translate>
            </p>
            <ul>
              <li>
                <Translate id="learn.discord-sanctions.s4.i1" description="li">
                  Un débordement isolé : un avertissement, puis un timeout court
                  s'il recommence.
                </Translate>
              </li>
              <li>
                <Translate id="learn.discord-sanctions.s4.i2" description="li">
                  Une dispute qui s'envenime : un timeout de quelques heures, le
                  temps que ça retombe.
                </Translate>
              </li>
              <li>
                <Translate id="learn.discord-sanctions.s4.i3" description="li">
                  Un membre à recadrer en privé : le jail, qui l'isole dans un
                  salon dédié sans l'exclure.
                </Translate>
              </li>
              <li>
                <Translate id="learn.discord-sanctions.s4.i4" description="li">
                  Un compte piraté qui spamme : un softban, qui nettoie sans punir
                  la victime.
                </Translate>
              </li>
              <li>
                <Translate
                  id="learn.discord-sanctions.s4.i5"
                  description="li with link"
                  values={{
                    selfbot: (
                      <Link to="/learn/self-bot">
                        <Translate id="learn.discord-sanctions.s4.selfbot" description="link">
                          self-bot
                        </Translate>
                      </Link>
                    ),
                  }}>
                  {
                    "Un {selfbot} ou un compte de raid : un bannissement, sans hésiter."
                  }
                </Translate>
              </li>
            </ul>
            <p>
              <Translate
                id="learn.discord-sanctions.s4.outro"
                description="p with link"
                values={{
                  antispam: (
                    <Link to="/docs/features/anti-spam">
                      <Translate id="learn.discord-sanctions.s4.antispam" description="link">
                        anti-spam
                      </Translate>
                    </Link>
                  ),
                }}>
                {
                  "L'{antispam} de RaidProtect applique ce type de barème tout seul : vous choisissez la sanction pour chaque type de spam, et le bot s'en occupe."
                }
              </Translate>
            </p>
          </>
        ),
      },
      {
        heading: (
          <Translate id="learn.discord-sanctions.s5.h" description="h">
            Les erreurs qui reviennent le plus
          </Translate>
        ),
        body: (
          <ul>
            <li>
              <strong>
                <Translate id="learn.discord-sanctions.s5.i1.t" description="li title">
                  Bannir un compte piraté.
                </Translate>
              </strong>{' '}
              <Translate id="learn.discord-sanctions.s5.i1.b" description="li body">
                Le propriétaire est une victime, pas un attaquant. Le softban
                nettoie les dégâts et lui laisse une porte de sortie.
              </Translate>
            </li>
            <li>
              <strong>
                <Translate id="learn.discord-sanctions.s5.i2.t" description="li title">
                  Compter sur un mute mal configuré.
                </Translate>
              </strong>{' '}
              <Translate id="learn.discord-sanctions.s5.i2.b" description="li body">
                Un rôle Mute qui n'est pas refusé dans tous les salons ne sert à
                rien. Vérifiez-le après chaque création de salon, ou préférez le
                timeout.
              </Translate>
            </li>
            <li>
              <strong>
                <Translate id="learn.discord-sanctions.s5.i3.t" description="li title">
                  Oublier la hiérarchie des rôles.
                </Translate>
              </strong>{' '}
              <Translate id="learn.discord-sanctions.s5.i3.b" description="li body">
                Un bot ne peut sanctionner que les membres situés en dessous de lui
                dans la liste des rôles. C'est la première chose à vérifier quand
                une sanction ne passe pas.
              </Translate>
            </li>
            <li>
              <strong>
                <Translate id="learn.discord-sanctions.s5.i4.t" description="li title">
                  Ne rien garder.
                </Translate>
              </strong>{' '}
              <Translate
                id="learn.discord-sanctions.s5.i4.b"
                description="li body with link"
                values={{
                  history: (
                    <Link to="/docs/features/sanctions">
                      <Translate id="learn.discord-sanctions.s5.history" description="link">
                        historique consultable
                      </Translate>
                    </Link>
                  ),
                }}>
                {
                  "Une sanction sans trace, c'est une décision qu'on ne peut ni expliquer ni réviser. RaidProtect conserve chaque action dans un {history}."
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
          id: 'learn.discord-sanctions.faq.q1',
          message: 'Quelle est la différence entre un timeout et un mute sur Discord ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.discord-sanctions.faq.a1',
          message:
            "Le timeout est natif : il s'applique partout, en écrit comme en vocal, et dure 28 jours au maximum. Le mute est un rôle attribué par un bot : il peut durer indéfiniment, mais il ne fonctionne que si les permissions de tous vos salons refusent bien la parole à ce rôle.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.discord-sanctions.faq.q2',
          message: "Qu'est-ce qu'un softban ?",
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.discord-sanctions.faq.a2',
          message:
            "Un bannissement suivi d'un débannissement immédiat. Il supprime les messages récents du membre, comme un ban, mais le laisse revenir. C'est la réponse idéale à un compte piraté qui spamme.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.discord-sanctions.faq.q3',
          message: 'Combien de temps peut durer un timeout Discord ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.discord-sanctions.faq.a3',
          message:
            "28 jours au maximum, c'est une limite fixée par Discord. Au-delà, il faut passer par un mute, un jail ou un bannissement temporaire.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.discord-sanctions.faq.q4',
          message: 'Un membre expulsé peut-il revenir ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.discord-sanctions.faq.a4',
          message:
            "Oui. L'expulsion ne fait que sortir le membre du serveur : il peut revenir avec n'importe quelle invitation valide. Seul le bannissement empêche le retour.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.discord-sanctions.faq.q6',
          message: 'Pourquoi privilégier un jail plutôt qu\'un bannissement ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.discord-sanctions.faq.a6',
          message:
            "Parce qu'un jail combiné à la Fermeture des MP prive des mêmes droits qu'un ban, sans son effet de bord : le bannissement s'accompagne d'un blocage par adresse IP, et comme une IPv4 est souvent partagée entre plusieurs foyers et réattribuée régulièrement, il peut bloquer des comptes qui n'ont rien fait. Le jail est en plus réversible.",
          description: 'faq a',
        }),
      },
      {
        question: translate({
          id: 'learn.discord-sanctions.faq.q5',
          message: 'Quelle sanction appliquer à un compte piraté qui spamme ?',
          description: 'faq q',
        }),
        answer: translate({
          id: 'learn.discord-sanctions.faq.a5',
          message:
            "Le softban : il supprime les messages d'arnaque et expulse le compte, tout en laissant revenir le propriétaire légitime une fois son compte sécurisé.",
          description: 'faq a',
        }),
      },
    ],
    related: [
      {
        label: (
          <Translate id="learn.discord-sanctions.rel1" description="related">
            L'historique de sanctions de RaidProtect
          </Translate>
        ),
        to: '/docs/features/sanctions',
      },
      {
        label: (
          <Translate id="learn.discord-sanctions.rel2" description="related">
            Les commandes de modération
          </Translate>
        ),
        to: '/docs/features/moderation',
      },
      {
        label: (
          <Translate id="learn.discord-sanctions.rel3" description="related">
            Qu'est-ce que le spam Discord ?
          </Translate>
        ),
        to: '/learn/spam-discord',
      },
      {
        label: (
          <Translate id="learn.discord-sanctions.rel4" description="related">
            Qu'est-ce qu'un token grabber ?
          </Translate>
        ),
        to: '/learn/token-grabber',
      },
    ],
  };

  return <LearnArticle content={content} />;
}
