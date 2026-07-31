import {useEffect, useRef, useState, type ComponentType, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {localizedRedirectUrl} from '@site/src/utils/links';
import shared from '@site/src/components/landing/styles/shared.module.css';
import AntiSpamMockup from '@site/src/components/DiscordMessage/mockups/anti-spam';
import RaidModeMockup from '@site/src/components/DiscordMessage/mockups/raid-mode';
import CaptchaMockup from '@site/src/components/DiscordMessage/mockups/captcha';
import ModerationMockup from '@site/src/components/DiscordMessage/mockups/moderation';
import DmLockMockup from '@site/src/components/DiscordMessage/mockups/dm-lock';
import AuthenticationManagerMockup from '@site/src/components/DiscordMessage/mockups/authentication-manager';
import TagRoleConceptMockup from '@site/src/components/DiscordMessage/mockups/tag-role-concept';
import styles from './styles.module.css';

/* Les mockups sont animés en continu : on ne les monte que lorsque la ligne
 * approche de l'écran, et on les démonte dès qu'elle s'en éloigne, pour ne pas
 * laisser cinq boucles tourner en même temps. La hauteur du cadre est réservée
 * en CSS pour que le montage ne décale jamais la page. */
function useInView<T extends HTMLElement>(): [React.RefObject<T>, boolean, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  // Rendu serveur et navigation sans JS : les lignes restent visibles. Le
  // masquage initial n'est appliqué qu'une fois le composant monté.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      {rootMargin: '200px 0px'},
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView, mounted];
}

type FeatureRow = {
  slug: string;
  to: string;
  Mockup: ComponentType;
  /* Hauteur propre au mockup, réservée tant qu'il n'est pas monté pour que
     l'arrivée à l'écran ne décale jamais la page. */
  slotHeight: number;
  defaultTitle: string;
  defaultDescription: string;
  /* Accroche du bouton principal (mène à l'invitation du bot), formulée selon
     le bénéfice de la fonctionnalité plutôt qu'un « Ajouter le bot » répété. */
  defaultAddBot: string;
  defaultCta: string;
};

const ROWS: FeatureRow[] = [
  {
    slug: 'anti-spam',
    to: '/docs/features/anti-spam',
    Mockup: AntiSpamMockup,
    slotHeight: 380,
    defaultTitle: 'Protection anti-spam',
    defaultDescription:
      'Sanctionnez instantanément les tentatives de spam, sans aucune intervention de votre part.',
    defaultAddBot: 'Protéger mon serveur',
    defaultCta: 'Configurer l’anti-spam',
  },
  {
    slug: 'raid',
    to: '/docs/features/raid-mode',
    Mockup: RaidModeMockup,
    slotHeight: 362,
    defaultTitle: 'Blocage des raids',
    defaultDescription:
      "Vous craignez un raid ? Notre bot est capable de le détecter et de le bloquer avant même qu'il impacte votre serveur.",
    defaultAddBot: 'Bloquer les raids',
    defaultCta: 'Découvrir le mode raid',
  },
  {
    slug: 'captcha',
    to: '/docs/features/captcha',
    Mockup: CaptchaMockup,
    slotHeight: 330,
    defaultTitle: 'Protection contre les robots',
    defaultDescription:
      "Grâce au captcha, vos membres doivent prouver qu'ils sont humains. Dites adieu aux comptes automatisés.",
    defaultAddBot: 'Filtrer les robots',
    defaultCta: 'Activer le captcha',
  },
  {
    slug: 'auth',
    to: '/docs/features/authentication-manager',
    Mockup: AuthenticationManagerMockup,
    slotHeight: 350,
    defaultTitle: 'Authentication Manager',
    defaultDescription:
      "Protégez l'accès à vos rôles sensibles par une vraie vérification d'identité : passkeys, code PIN ou OTP.",
    defaultAddBot: 'Verrouiller mes rôles',
    defaultCta: "Sécuriser mes rôles",
  },
  {
    slug: 'mod',
    to: '/docs/features/moderation',
    // Statique sur la landing : la ModView s'affiche ouverte, sans le parcours
    // clic droit qui, hors du contexte d'un salon, ne ferait que du vide.
    Mockup: () => <ModerationMockup animate={false} />,
    slotHeight: 520,
    defaultTitle: 'Modération & administration',
    defaultDescription:
      "Gérez votre serveur comme un pro avec nos diverses fonctionalités de modération et d'administration.",
    defaultAddBot: 'Équiper mes modérateurs',
    defaultCta: 'Voir les outils de modération',
  },
  {
    slug: 'tag',
    to: '/docs/features/tag-role',
    Mockup: TagRoleConceptMockup,
    slotHeight: 260,
    defaultTitle: 'Rôle de Tag',
    defaultDescription:
      'Attribuez automatiquement un rôle aux membres qui arborent le tag de votre serveur, et récompensez leur engagement.',
    defaultAddBot: 'Récompenser mes membres',
    defaultCta: 'Mettre en place le Rôle de Tag',
  },
  {
    slug: 'dm',
    to: '/docs/features/dm-lock',
    Mockup: DmLockMockup,
    // Le mockup (liste des 5 cibles) mesure ~226 px de haut, constants une fois
    // l'animation lancée ; on cale le slot au plus près pour éviter le grand
    // vide sous le mockup qui le désalignait du texte centré.
    slotHeight: 236,
    defaultTitle: 'Fermeture des MP',
    defaultDescription:
      'Un bouclier inédit contre le spam, le scam et les arnaques par message privé.',
    defaultAddBot: 'Fermer les MP au scam',
    defaultCta: 'Protéger les MP',
  },
];

function Arrow() {
  return (
    <svg
      className={styles.ctaArrow}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Row({
  row,
  reversed,
  inviteUrl,
}: {
  row: FeatureRow;
  reversed: boolean;
  inviteUrl: string;
}): ReactNode {
  const [ref, inView, mounted] = useInView<HTMLDivElement>();
  const {Mockup} = row;

  const title = translate({
    id: `landing.features.${row.slug}.title`,
    message: row.defaultTitle,
    description: `Feature card title: ${row.slug}`,
  });
  const description = translate({
    id: `landing.features.${row.slug}.description`,
    message: row.defaultDescription,
    description: `Feature card description: ${row.slug}`,
  });
  const addBot = translate({
    id: `landing.features.${row.slug}.addBot`,
    message: row.defaultAddBot,
    description: `Feature row primary button (invite the bot): ${row.slug}`,
  });
  const cta = translate({
    id: `landing.features.${row.slug}.cta`,
    message: row.defaultCta,
    description: `Feature row call to action: ${row.slug}`,
  });

  return (
    <div
      ref={ref}
      className={clsx(
        styles.row,
        reversed && styles.rowReversed,
        mounted && !inView && styles.rowHidden,
      )}>
      <div className={styles.visual} style={{minHeight: row.slotHeight}}>
        {inView && <Mockup />}
      </div>

      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <a
            href={inviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.addBot}>
            {addBot}
          </a>
          <Link to={row.to} className={styles.cta}>
            {cta}
            <Arrow />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Features(): ReactNode {
  const {
    i18n: {currentLocale, defaultLocale},
    siteConfig: {url: siteUrl},
  } = useDocusaurusContext();
  const inviteUrl = localizedRedirectUrl(siteUrl, currentLocale, defaultLocale, '/invite');
  const appointmentUrl = localizedRedirectUrl(siteUrl, currentLocale, defaultLocale, '/appointment');

  return (
    <section
      id="features"
      className={clsx(shared.landing, shared.sectionSpacing, styles.section)}>
      <div className={shared.container}>
        <div className={styles.titleWrap}>
          <h2 className={styles.sectionTitle}>
            <Translate
              id="landing.features.title"
              description="Features section title; {highlight} renders the gradient-highlighted word"
              values={{
                highlight: (
                  <span className={shared.textGradient}>
                    <Translate
                      id="landing.features.title.highlight"
                      description="Highlighted word inside the features section title">
                      fonctionnalités
                    </Translate>
                  </span>
                ),
              }}>
              {'Nos {highlight}'}
            </Translate>
          </h2>
          <p className={styles.sectionSubtitle}>
            <Translate
              id="landing.features.subtitle"
              description="Features section subtitle/description">
              Découvrez ce qui fait de nous l'un des meilleurs bots pour protéger
              votre serveur Discord des utilisateurs malintentionnés.
            </Translate>
          </p>
        </div>

        <div className={styles.rows}>
          {ROWS.map((row, i) => (
            <Row key={row.slug} row={row} reversed={i % 2 === 1} inviteUrl={inviteUrl} />
          ))}
        </div>

        <div className={styles.goFurther}>
          <p className={styles.goFurtherEyebrow}>
            <Translate id="landing.features.further.eyebrow" description="Eyebrow above the two paid offers at the end of the features section">
              Envie d'aller plus loin ?
            </Translate>
          </p>
          <div className={styles.offerCards}>
            <div className={clsx(styles.offerCard, styles.offerCardFounder)}>
              <h3 className={clsx(styles.offerName, styles.offerNameFounder)}>
                <Translate id="landing.features.further.founder.name" description="Founder offer card name (plan name)">Founder</Translate>
              </h3>
              <div className={styles.offerPrice}>
                <Translate id="landing.features.further.founder.price" description="Founder offer card price">2,99 $/mois</Translate>
              </div>
              <p className={styles.offerDesc}>
                <Translate id="landing.features.further.founder.desc" description="Founder offer card description">
                  Personnalisez le bot à votre image, étendez les limites de chaque module et recevez les nouveautés en avant-première.
                </Translate>
              </p>
              <div className={styles.offerActions}>
                <a
                  href="https://raidprotect.bot/founder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(styles.offerBtn, styles.offerBtnFounder)}>
                  <Translate id="landing.features.further.founder.subscribe" description="Subscribe CTA on the Founder card">S'abonner via Discord</Translate>
                </a>
                <Link to="/premium" className={clsx(styles.offerBtn, styles.offerBtnOutline)}>
                  <Translate id="landing.features.further.discover" description="Discover CTA on offer cards">Découvrir</Translate>
                </Link>
              </div>
            </div>

            <div className={clsx(styles.offerCard, styles.offerCardBusiness)}>
              <h3 className={clsx(styles.offerName, styles.offerNameBusiness)}>
                <Translate id="landing.features.further.business.name" description="Business offer card name">Business</Translate>
              </h3>
              <div className={styles.offerPrice}>
                <Translate id="landing.features.further.business.price" description="Business offer card price">Sur demande</Translate>
              </div>
              <p className={styles.offerDesc}>
                <Translate id="landing.features.further.business.desc" description="Business offer card description">
                  Instance dédiée et isolée, audit de sécurité et accompagnement humain pour les projets aux exigences élevées.
                </Translate>
              </p>
              <div className={styles.offerActions}>
                <a
                  href={appointmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(styles.offerBtn, styles.offerBtnBusiness)}>
                  <Translate id="landing.features.further.business.call" description="Book a call CTA on the Business card">Réserver un appel</Translate>
                </a>
                <Link to="/business" className={clsx(styles.offerBtn, styles.offerBtnOutline)}>
                  <Translate id="landing.features.further.discover" description="Discover CTA on offer cards">Découvrir</Translate>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
