import React, {type ReactNode} from 'react';
import Translate from '@docusaurus/Translate';
import SearchHero from '@theme/SearchHero';
import styles from './styles.module.css';

/* Relance de fin de page : « Vous n'avez pas trouvé ? », suivie de la grande
 * barre de recherche. Le titre est un h2 que l'on pose nous-mêmes : celui de
 * SearchHero est un h1, qui doublerait le titre de la page. */
export default function DocSearchCta(): ReactNode {
  return (
    <section className={styles.wrap} aria-labelledby="docs-search-title" data-search-ignore>
      <h2 id="docs-search-title" className={styles.title}>
        <Translate id="docs.search.title" description="Heading of the end-of-doc search block">
          Vous n'avez pas trouvé ce que vous cherchiez ?
        </Translate>
      </h2>
      <p className={styles.subtitle}>
        <Translate id="docs.search.subtitle" description="Text under the heading of the end-of-doc search block">
          Cherchez dans toute la documentation, le glossaire et le blog.
        </Translate>
      </p>
      <SearchHero />
    </section>
  );
}
