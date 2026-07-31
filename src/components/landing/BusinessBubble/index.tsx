import React, {useEffect, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

/* Bulle flottante bas-droite orientant les entreprises vers /business.
 * Discrète : elle n'apparaît qu'après un peu de scroll, et se ferme
 * définitivement (mémorisé dans localStorage) pour ne pas insister. */

const STORAGE_KEY = 'rp-business-bubble-dismissed';

export default function BusinessBubble(): ReactNode {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setMounted(true);
    let alreadyDismissed = false;
    try {
      alreadyDismissed = window.localStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      /* localStorage indisponible (Safari privé, etc.) */
    }
    if (alreadyDismissed) {
      setDismissed(true);
      return undefined;
    }
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!mounted || dismissed) {
    return null;
  }

  const close = () => {
    setDismissed(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
  };

  return (
    <div className={clsx(styles.wrap, visible && styles.visible)} aria-hidden={!visible}>
      <Link to="/business" className={styles.bubble}>
        <span className={styles.icon} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
            <rect x="4" y="3" width="9" height="18" rx="1" />
            <path d="M13 8h6a1 1 0 011 1v12h-7" strokeLinejoin="round" />
            <path
              d="M7 7h1M10 7h0.5M7 11h1M10 11h0.5M7 15h1M10 15h0.5M16 12h1M16 16h1"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className={styles.text}>
          <strong className={styles.title}>
            <Translate id="landing.businessBubble.title">Vous êtes une entreprise ?</Translate>
          </strong>
          <span className={styles.sub}>
            <Translate id="landing.businessBubble.sub">Découvrir l’offre Business</Translate>
          </span>
        </span>
      </Link>
      <button
        type="button"
        className={styles.close}
        onClick={close}
        aria-label={translate({
          id: 'landing.businessBubble.close',
          message: 'Fermer',
          description: 'Aria-label for closing the business bubble',
        })}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
          <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
