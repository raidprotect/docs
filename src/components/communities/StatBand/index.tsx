import React, {useEffect, useRef, useState, type ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

/* Bandeau de preuve chiffrée des pages communautés. Chiffres réels (réseau
 * RaidProtect), animés en count-up à l'entrée à l'écran, avec séparateurs et
 * halo d'accent. Le dégradé du nombre reprend --cv-gradient de la verticale. */

export type CommunityStat = {
  /** Valeur cible (entier). */
  value: number;
  /** Ajoute un « + » après le nombre. */
  plus?: boolean;
  label: ReactNode;
};

const BCP47: Record<string, string> = {
  fr: 'fr-FR',
  en: 'en-US',
  de: 'de-DE',
  es: 'es-ES',
  pt: 'pt-PT',
};

const COUNT_MS = 1600;

function StatItem({stat, locale}: {stat: CommunityStat; locale: string}): ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      setN(stat.value);
      return;
    }
    let raf = 0;
    let settle = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !done.current) {
            done.current = true;
            observer.disconnect();
            let start: number | null = null;
            const tick = (t: number) => {
              if (start === null) start = t;
              const p = Math.min((t - start) / COUNT_MS, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(stat.value * eased));
              if (p < 1) raf = window.requestAnimationFrame(tick);
            };
            raf = window.requestAnimationFrame(tick);
            // Filet : si rAF est gelé (onglet en arrière-plan), on garantit
            // quand même l'affichage de la valeur finale.
            settle = window.setTimeout(() => setN(stat.value), COUNT_MS + 300);
          }
        }
      },
      {threshold: 0.35},
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (raf) window.cancelAnimationFrame(raf);
      if (settle) window.clearTimeout(settle);
    };
  }, [stat.value]);

  const formatted = n.toLocaleString(BCP47[locale] ?? locale);

  return (
    <div ref={ref} className={styles.item}>
      <div className={styles.value}>
        {formatted}
        {stat.plus && <span className={styles.plus}>+</span>}
      </div>
      <div className={styles.label}>{stat.label}</div>
    </div>
  );
}

export default function StatBand({stats}: {stats: CommunityStat[]}): ReactNode {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  return (
    <div className={styles.band}>
      {stats.map((stat, i) => (
        <StatItem key={i} stat={stat} locale={currentLocale} />
      ))}
      <div className={styles.glow} aria-hidden="true" />
    </div>
  );
}
