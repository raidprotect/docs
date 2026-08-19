import React, {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
  type ReactNode,
} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from '@site/src/components/landing/Features/styles.module.css';

/* Les boutons de ligne (.addBot / .cta) réutilisent le CSS de l'accueil, qui
 * les colore avec le rosé de marque. On redéfinit localement les variables
 * qu'ils consomment pour qu'ils prennent l'accent de la verticale. */
const ACCENT_BUTTONS: CSSProperties = {
  '--color-darker-primary': 'var(--cv-accent)',
  '--color-primary-rp': 'var(--cv-accent)',
} as CSSProperties;

/* Lignes de fonctionnalités alternées à mockup animé, calquées sur la section
 * « Nos fonctionnalités » de l'accueil : on réutilise volontairement le même
 * CSS module (mêmes classes, donc rendu identique) pour une cohérence totale.
 * Les mockups ne sont montés que lorsque la ligne approche de l'écran (et
 * démontés sinon), la hauteur du cadre étant réservée pour éviter tout décalage. */

export type CommunityFeatureRowData = {
  /** Composant mockup animé (monté à l'approche de l'écran). */
  Mockup: ComponentType;
  /** Hauteur réservée pour le mockup (évite le décalage avant montage). */
  slotHeight: number;
  title: ReactNode;
  description: ReactNode;
  /** Lien du CTA secondaire (doc de la fonctionnalité). */
  to: string;
  cta: ReactNode;
};

function useInView<T extends HTMLElement>(): [React.RefObject<T>, boolean, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
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
  addBotLabel,
}: {
  row: CommunityFeatureRowData;
  reversed: boolean;
  inviteUrl: string;
  addBotLabel: ReactNode;
}): ReactNode {
  const [ref, inView, mounted] = useInView<HTMLDivElement>();
  const {Mockup} = row;

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
        <h3 className={styles.title}>{row.title}</h3>
        <p className={styles.description}>{row.description}</p>
        <div className={styles.actions}>
          <a
            href={inviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.addBot}
            style={{color: 'var(--cv-on-accent)'}}>
            {addBotLabel}
          </a>
          <Link to={row.to} className={styles.cta}>
            {row.cta}
            <Arrow />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function FeatureRows({
  rows,
  inviteUrl,
  addBotLabel,
}: {
  rows: CommunityFeatureRowData[];
  inviteUrl: string;
  addBotLabel: ReactNode;
}): ReactNode {
  return (
    <div className={styles.rows} style={ACCENT_BUTTONS}>
      {rows.map((row, i) => (
        <Row
          key={i}
          row={row}
          reversed={i % 2 === 1}
          inviteUrl={inviteUrl}
          addBotLabel={addBotLabel}
        />
      ))}
    </div>
  );
}
