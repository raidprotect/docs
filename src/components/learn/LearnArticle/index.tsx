import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {localizedRedirectUrl} from '@site/src/utils/links';
import shared from '@site/src/components/landing/styles/shared.module.css';
import styles from './styles.module.css';

/* Template d'article de glossaire (« Learn ») : contenu pédagogique sur les
 * menaces et notions de sécurité Discord. Chaque page fournit un objet de
 * contenu ; le template ajoute la mise en forme, le maillage interne, le CTA
 * d'invitation et les données structurées (DefinedTerm + FAQPage +
 * BreadcrumbList) pour le référencement. */

export type LearnSection = {
  heading: ReactNode;
  /** Corps de section (JSX riche : paragraphes, listes, liens…). */
  body: ReactNode;
};

export type LearnFaq = {
  /** Texte brut (repris tel quel dans le rendu et dans le schema FAQPage). */
  question: string;
  answer: string;
};

export type LearnRelated = {
  label: ReactNode;
  to: string;
};

export type LearnContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  /** Terme défini (sujet de la page), ex. « Raid Discord ». */
  term: string;
  /** Titre H1 (peut différer du terme, ex. une question). */
  title: ReactNode;
  /** Définition courte visible (encadré TL;DR). */
  definition: ReactNode;
  /** Version texte brut de la définition, pour le schema DefinedTerm. */
  definitionText: string;
  sections: LearnSection[];
  faq: LearnFaq[];
  related: LearnRelated[];
};

const HUB_PATH = '/learn';

export default function LearnArticle({
  content,
}: {
  content: LearnContent;
}): ReactNode {
  const {
    siteConfig: {url: siteUrl},
    i18n: {currentLocale, defaultLocale},
  } = useDocusaurusContext();

  const prefix = currentLocale === defaultLocale ? '' : `/${currentLocale}`;
  const pageUrl = `${siteUrl}${prefix}${HUB_PATH}/${content.slug}`;
  const hubUrl = `${siteUrl}${prefix}${HUB_PATH}`;
  const inviteUrl = localizedRedirectUrl(
    siteUrl,
    currentLocale,
    defaultLocale,
    '/invite',
  );

  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'RaidProtect', item: `${siteUrl}${prefix}/`},
          {'@type': 'ListItem', position: 2, name: 'Learn', item: hubUrl},
          {'@type': 'ListItem', position: 3, name: content.term, item: pageUrl},
        ],
      },
      {
        '@type': 'DefinedTerm',
        name: content.term,
        description: content.definitionText,
        inDefinedTermSet: {
          '@type': 'DefinedTermSet',
          name: 'Glossaire de la sécurité Discord — RaidProtect',
          url: hubUrl,
        },
        url: pageUrl,
      },
      ...(content.faq.length
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: content.faq.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: {'@type': 'Answer', text: f.answer},
              })),
            },
          ]
        : []),
    ],
  };
  const ldJson = JSON.stringify(ld).replace(/</g, '\\u003c');

  return (
    <Layout title={content.metaTitle} description={content.metaDescription}>
      <Head>
        <script type="application/ld+json">{ldJson}</script>
      </Head>

      <main className={clsx(shared.landing, styles.page)}>
        <div className={shared.container}>
          <article className={styles.article}>
            <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
              <Link to={HUB_PATH} className={styles.crumb}>
                <Translate id="learn.breadcrumb.hub" description="Learn breadcrumb: hub label">
                  Learn
                </Translate>
              </Link>
              <span className={styles.crumbSep} aria-hidden="true">
                /
              </span>
              <span className={styles.crumbCurrent}>{content.term}</span>
            </nav>

            <header className={styles.header}>
              <span className={styles.eyebrow}>
                <Translate id="learn.eyebrow" description="Learn section eyebrow">
                  Glossaire sécurité Discord
                </Translate>
              </span>
              <h1 className={styles.title}>{content.title}</h1>
              <div className={styles.definition}>
                <span className={styles.definitionLabel}>
                  <Translate id="learn.definition.label" description="Definition box label">
                    En bref
                  </Translate>
                </span>
                <p className={styles.definitionText}>{content.definition}</p>
              </div>
            </header>

            <div className={styles.body}>
              {content.sections.map((section, i) => (
                <section key={i} className={styles.section}>
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  <div className={styles.sectionBody}>{section.body}</div>
                </section>
              ))}
            </div>

            {content.faq.length > 0 && (
              <section className={styles.faq}>
                <h2 className={styles.sectionHeading}>
                  <Translate id="learn.faq.title" description="FAQ section title">
                    Questions fréquentes
                  </Translate>
                </h2>
                <div className={styles.faqList}>
                  {content.faq.map((f, i) => (
                    <details key={i} className={styles.faqItem}>
                      <summary className={styles.faqQuestion}>{f.question}</summary>
                      <p className={styles.faqAnswer}>{f.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* CTA produit, tie-in naturel */}
            <aside className={styles.cta}>
              <div className={styles.ctaGlow} aria-hidden="true" />
              <h2 className={styles.ctaTitle}>
                <Translate id="learn.cta.title" description="Learn CTA title">
                  Protégez votre serveur en quelques secondes
                </Translate>
              </h2>
              <p className={styles.ctaText}>
                <Translate id="learn.cta.text" description="Learn CTA text">
                  RaidProtect bloque les raids, filtre les bots et arrête le spam
                  automatiquement, sur plus de 380 000 serveurs Discord.
                </Translate>
              </p>
              <a
                href={inviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={shared.btnPrimary}>
                <Translate id="learn.cta.button" description="Learn CTA button">
                  Ajouter RaidProtect
                </Translate>
              </a>
            </aside>

            {content.related.length > 0 && (
              <section className={styles.related}>
                <h2 className={styles.relatedTitle}>
                  <Translate id="learn.related.title" description="Related links title">
                    À lire aussi
                  </Translate>
                </h2>
                <ul className={styles.relatedList}>
                  {content.related.map((r, i) => (
                    <li key={i}>
                      <Link to={r.to} className={styles.relatedLink}>
                        {r.label}
                        <span aria-hidden="true"> →</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </article>
        </div>
      </main>
    </Layout>
  );
}
