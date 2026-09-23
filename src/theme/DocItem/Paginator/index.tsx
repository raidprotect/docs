import React, {type ReactNode} from 'react';
import Paginator from '@theme-original/DocItem/Paginator';
import type PaginatorType from '@theme/DocItem/Paginator';
import type {WrapperProps} from '@docusaurus/types';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import SupportCta from '@site/src/components/docs/SupportCta';
import DocSearchCta from '@site/src/components/docs/DocSearchCta';

type Props = WrapperProps<typeof PaginatorType>;

/* On garde le pager précédent/suivant d'origine, puis la relance de recherche
 * (sauf sur le Lisez-moi, qui l'a déjà en haut) et l'encart de support. */
export default function PaginatorWrapper(props: Props): ReactNode {
  const {metadata} = useDoc();
  return (
    <>
      <Paginator {...props} />
      {metadata.slug !== '/' && <DocSearchCta />}
      <SupportCta />
    </>
  );
}
