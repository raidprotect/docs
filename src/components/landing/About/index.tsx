import React, {type ReactNode, useEffect, useState} from 'react';
import clsx from 'clsx';
import shared from '../styles/shared.module.css';
import styles from './styles.module.css';

type Counts = {
  servers: number;
  users: number;
  captcha: number;
  antispam: number;
};

type FormattedValue = {
  value: string;
  unit: string;
};

function formatValue(value: number): FormattedValue {
  if (value >= 1_000_000) {
    return {value: (value / 1_000_000).toFixed(1), unit: 'M'};
  }
  return {value: (value / 1_000).toFixed(1), unit: 'k'};
}

function StatCounter({
  rawValue,
  label,
  fallback,
}: {
  rawValue?: number;
  label: string;
  fallback: string;
}) {
  if (rawValue == null) {
    return (
      <div className={styles.counterItem}>
        <div className={styles.counterTitle}>
          <span>{fallback}</span>
        </div>
        <div className={styles.counterLabel}>{label}</div>
      </div>
    );
  }
  const formatted = formatValue(rawValue);
  return (
    <div className={styles.counterItem}>
      <div className={styles.counterTitle}>
        <span>{formatted.value}</span>
        <span>{formatted.unit}</span>
      </div>
      <div className={styles.counterLabel}>{label}</div>
    </div>
  );
}

export default function About(): ReactNode {
  const [counts, setCounts] = useState<Counts | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('https://docs.raidprotect.bot/counts.json')
      .then((res) => {
        if (!res.ok) throw new Error('Erreur lors de la récupération des données');
        return res.json();
      })
      .then((data: Counts) => {
        if (!cancelled) setCounts(data);
      })
      .catch((err) => {
        // Stats are best-effort; failure is non-blocking
        // eslint-disable-next-line no-console
        console.error('Erreur de mise à jour des statistiques :', err);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className={clsx(shared.landing, shared.sectionSpacing, styles.section)}>
      <div className={shared.container}>
        <div className={styles.titleGrid}>
          <h2 className={styles.title}>
            Nos résultats ont un{' '}
            <span className={shared.textGradient}>impact</span>
          </h2>
        </div>
        <div className={styles.counterGrid}>
          <div className={styles.imageWrap}>
            <svg
              className={styles.curve}
              viewBox="0 0 900 280"
              role="img"
              aria-label="Croissance du nombre de serveurs">
              <defs>
                <linearGradient id="rpStroke" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#a561a3" />
                  <stop offset="45%" stopColor="#726cb3" />
                  <stop offset="100%" stopColor="#d35f5f" />
                </linearGradient>
                <linearGradient id="rpFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#726cb3" stopOpacity="0.35" />
                  <stop offset="70%" stopColor="#d35f5f" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#d35f5f" stopOpacity="0" />
                </linearGradient>
                <filter id="rpGlow" x="-40%" y="-60%" width="180%" height="220%">
                  <feGaussianBlur stdDeviation="10" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <pattern id="rpGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path
                    d="M80 0H0V80"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect x="0" y="0" width="900" height="280" fill="url(#rpGrid)" opacity="0.5" />
              <path
                d="M 40 230 C 160 225, 220 215, 300 200 S 420 150, 520 140 S 640 110, 720 70 S 820 20, 860 28 L 860 260 L 40 260 Z"
                fill="url(#rpFill)"
              />
              <path
                className={styles.curveLine}
                d="M 40 230 C 160 225, 220 215, 300 200 S 420 150, 520 140 S 640 110, 720 70 S 820 30, 860 28"
                fill="none"
                stroke="url(#rpStroke)"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#rpGlow)"
              />
              <circle cx="860" cy="28" r="7" fill="#d35f5f" />
              <circle
                className={styles.curvePulse}
                cx="860"
                cy="28"
                r="7"
                fill="none"
                stroke="#726cb3"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className={styles.stats}>
            <StatCounter
              rawValue={counts?.servers}
              label="Serveurs sécurisés"
              fallback="350k"
            />
            <StatCounter
              rawValue={counts?.captcha}
              label="Captchas résolus"
              fallback="—"
            />
            <StatCounter
              rawValue={counts?.antispam}
              label="Spams bloqués"
              fallback="—"
            />
            <StatCounter
              rawValue={counts?.users}
              label="Utilisateurs protégés"
              fallback="—"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
