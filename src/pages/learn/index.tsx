import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import {LEARN_ARTICLES} from '@site/src/components/learn/registry';
import shared from '@site/src/components/landing/styles/shared.module.css';
import styles from './learn.module.css';

/* Hub du glossaire « Learn » : point d'entrée listant les articles pédagogiques
 * sur la sécurité Discord. Relie les articles au reste du site (évite les pages
 * orphelines) et sert de page de catégorie pour le référencement. */

export default function LearnHub(): ReactNode {
  return (
    <Layout
      title={translate({
        id: 'learn.hub.metaTitle',
        message: 'Learn : le glossaire de la sécurité Discord',
        description: 'Learn hub meta title',
      })}
      description={translate({
        id: 'learn.hub.metaDescription',
        message:
          "Comprendre les menaces Discord (raid, nuke, self-bot, phishing…) et comment protéger votre serveur. Le glossaire clair et sans jargon de RaidProtect.",
        description: 'Learn hub meta description',
      })}>
      <main className={clsx(shared.landing, styles.page)}>
        <div className={shared.container}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>
              <Translate id="learn.eyebrow" description="Learn section eyebrow">
                Glossaire sécurité Discord
              </Translate>
            </span>
            <h1 className={styles.title}>
              <Translate id="learn.hub.title" description="Learn hub title">
                Comprendre la sécurité de votre serveur Discord
              </Translate>
            </h1>
            <p className={styles.intro}>
              <Translate id="learn.hub.intro" description="Learn hub intro">
                Raid, nuke, self-bot, phishing… Ces mots reviennent souvent et
                sont facilement confondus. On les explique simplement, avec les
                bons réflexes pour protéger votre communauté.
              </Translate>
            </p>
          </header>

          <ul className={styles.grid}>
            {LEARN_ARTICLES.map((entry) => (
              <li key={entry.slug}>
                <Link to={`/learn/${entry.slug}`} className={styles.card}>
                  <span className={styles.cardTerm}>{entry.term}</span>
                  <span className={styles.cardTeaser}>{entry.teaser}</span>
                  <span className={styles.cardArrow} aria-hidden="true">
                    <Translate id="learn.hub.readMore" description="Learn hub card read link">
                      Lire
                    </Translate>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
}
