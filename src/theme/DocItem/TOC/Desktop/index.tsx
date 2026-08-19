import React, {type ReactNode} from 'react';
import TOCDesktop from '@theme-original/DocItem/TOC/Desktop';
import type TOCDesktopType from '@theme/DocItem/TOC/Desktop';
import type {WrapperProps} from '@docusaurus/types';
import TocSupportCard from '@site/src/components/docs/SupportCta/TocSupportCard';
import styles from '@site/src/components/docs/SupportCta/tocCard.module.css';

type Props = WrapperProps<typeof TOCDesktopType>;

/* Sommaire de droite (rendu desktop uniquement) suivi d'une petite carte
 * support. On enveloppe le tout dans un conteneur sticky : la liste du sommaire
 * défile à l'intérieur si besoin, la carte reste toujours visible au scroll.
 * Le TOC desktop n'étant pas monté sur mobile, la carte n'y apparaît pas
 * (doublé d'une media query de sécurité côté CSS). */
export default function TOCDesktopWrapper(props: Props): ReactNode {
  return (
    <div className={styles.stickyCol}>
      <div className={styles.tocScroll}>
        <TOCDesktop {...props} />
      </div>
      <TocSupportCard />
    </div>
  );
}
