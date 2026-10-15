import React, {type ReactNode} from 'react';
import TOCItems from '@theme-original/TOCItems';
import type TOCItemsType from '@theme/TOCItems';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof TOCItemsType>;

// Les questions de la FAQ restent des titres (ancres, SEO) mais seul « Questions fréquentes » figure au sommaire.
function withoutFaqQuestions(toc: Props['toc']): Props['toc'] {
  let faqLevel: number | null = null;
  return toc.filter((item) => {
    if (faqLevel !== null && item.level > faqLevel) return false;
    faqLevel = item.id === 'faq' ? item.level : null;
    return true;
  });
}

export default function TOCItemsWrapper(props: Props): ReactNode {
  return <TOCItems {...props} toc={withoutFaqQuestions(props.toc)} />;
}
