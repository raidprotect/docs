import React, {type ComponentType, type ReactNode} from 'react';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';
import AntiSpamMockup from '@site/src/components/DiscordMessage/mockups/anti-spam';
import AntiScamMockup from '@site/src/components/DiscordMessage/mockups/anti-scam';
import RaidModeMockup from '@site/src/components/DiscordMessage/mockups/raid-mode';
import CaptchaMockup from '@site/src/components/DiscordMessage/mockups/captcha';
import ModerationMockup from '@site/src/components/DiscordMessage/mockups/moderation';
import DmLockMockup from '@site/src/components/DiscordMessage/mockups/dm-lock';
import AuthenticationManagerMockup from '@site/src/components/DiscordMessage/mockups/authentication-manager';
import TagRoleConceptMockup from '@site/src/components/DiscordMessage/mockups/tag-role-concept';
import frame from './frame.module.css';
import styles from './embed.module.css';

/* Page « frame » dédiée à l'embarquement d'un mockup isolé sur un site externe.
 * Sans navbar ni footer (pas de <Layout>), noindex, fond sombre comme les
 * autres /frame. On choisit le mockup via ?m=<slug> ; ?theme=light bascule le
 * rendu clair. Sans slug valide, on affiche la galerie des liens disponibles. */

const MOCKUPS: Record<string, ComponentType> = {
  'anti-spam': AntiSpamMockup,
  'anti-scam': AntiScamMockup,
  'raid-mode': RaidModeMockup,
  captcha: CaptchaMockup,
  'authentication-manager': AuthenticationManagerMockup,
  // Statique, comme sur la landing : hors d'un vrai salon, le parcours clic
  // droit ne montrerait que du vide.
  moderation: () => <ModerationMockup animate={false} />,
  'tag-role': TagRoleConceptMockup,
  'dm-lock': DmLockMockup,
};

const SLUGS = Object.keys(MOCKUPS);

function EmbedContent(): ReactNode {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('m') ?? '';
  const theme = params.get('theme') === 'light' ? 'light' : 'dark';

  // Le thème est porté par <html data-theme> (piloté par Docusaurus) ; on le
  // force pour l'embed afin que le site hôte n'impose pas son propre choix.
  document.documentElement.dataset.theme = theme;

  const Mockup = MOCKUPS[slug];

  if (!Mockup) {
    return (
      <div className={styles.gallery}>
        <p className={styles.galleryHint}>
          Ajoutez <code>?m=&lt;mockup&gt;</code> à l'URL. Mockups disponibles :
        </p>
        <ul className={styles.galleryList}>
          {SLUGS.map((s) => (
            <li key={s}>
              <a href={`?m=${s}`}>{s}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.stage}>
      <Mockup />
    </div>
  );
}

export default function FrameEmbed(): ReactNode {
  return (
    <>
      <Head>
        <title>Mockup embed</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="designed for iframe" />
      </Head>
      <main className={`${frame.frame} ${styles.frameEmbed}`}>
        <BrowserOnly>{() => <EmbedContent />}</BrowserOnly>
      </main>
    </>
  );
}
