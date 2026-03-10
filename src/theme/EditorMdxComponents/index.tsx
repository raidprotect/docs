import Admonition from '@theme/Admonition';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Details from '@theme/Details';
import CodeBlock from '@theme/CodeBlock';
import SeparatedBox from '@site/src/components/SeparatedBox';
import SuggestionLink from '@site/src/components/SuggestionLink';

function DocCardPreview({item}: {item?: {type?: string; label?: string; href?: string; description?: string}}) {
  if (!item) return null;
  return (
    <a
      href={item.href || '#'}
      style={{
        display: 'block',
        border: '1px solid var(--ghe-border-color, #252332)',
        borderRadius: '8px',
        padding: '1rem 1.25rem',
        margin: '0.5rem 0',
        textDecoration: 'none',
        background: 'var(--ghe-bg-secondary, #0d0a25)',
        transition: 'border-color 0.2s',
      }}
      onClick={(e) => e.preventDefault()}>
      <div style={{color: 'var(--ghe-text-primary, #fff)', fontWeight: 600, fontSize: '0.95rem'}}>
        {item.type === 'category' ? '\ud83d\uddc2\ufe0f ' : '\ud83d\udcc4 '}{item.label || 'Lien'}
      </div>
      {item.description && (
        <div style={{color: 'var(--ghe-text-secondary, #a0a0b0)', fontSize: '0.85rem', marginTop: '0.3rem'}}>{item.description}</div>
      )}
    </a>
  );
}

function DocCardListPreview() {
  return (
    <div style={{
      border: '1px solid var(--ghe-border-color, #252332)',
      borderRadius: '8px',
      padding: '1rem',
      margin: '0.5rem 0',
      background: 'var(--ghe-bg-secondary, #0d0a25)',
      color: 'var(--ghe-text-secondary, #a0a0b0)',
      fontSize: '0.85rem',
      fontStyle: 'italic',
    }}>
      Liste de sous-pages (DocCardList)
    </div>
  );
}

export function useEditorMdxComponents(extra: Record<string, any> = {}): Record<string, any> {
  return {
    Admonition,
    admonition: Admonition,
    DocCard: DocCardPreview,
    DocCardList: DocCardListPreview,
    Tabs,
    TabItem,
    Details,
    CodeBlock,
    SeparatedBox,
    SuggestionLink,
    ...extra,
  };
}
