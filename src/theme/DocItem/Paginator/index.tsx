import React, {type ReactNode} from 'react';
import Paginator from '@theme-original/DocItem/Paginator';
import type PaginatorType from '@theme/DocItem/Paginator';
import type {WrapperProps} from '@docusaurus/types';
import SupportCta from '@site/src/components/docs/SupportCta';

type Props = WrapperProps<typeof PaginatorType>;

/* On garde le pager précédent/suivant d'origine et on ajoute l'encart de
 * support en toute fin de page, sous les boutons de navigation. */
export default function PaginatorWrapper(props: Props): ReactNode {
  return (
    <>
      <Paginator {...props} />
      <SupportCta />
    </>
  );
}
