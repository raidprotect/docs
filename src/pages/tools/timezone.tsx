import React, {useEffect, useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import shared from '@site/src/components/landing/styles/shared.module.css';
import styles from './timezone.module.css';

const LOCALE_TO_BCP47: Record<string, string> = {
  fr: 'fr-FR',
  en: 'en-US',
  de: 'de-DE',
  es: 'es-ES',
  pt: 'pt-PT',
};

/* Outil non référencé (noindex/nofollow, hors nav et sitemap) : aide les
 * utilisateurs à trouver l'identifiant de fuseau horaire à saisir dans le bot.
 * Tout est côté client (Intl), rien n'est envoyé nulle part. */

const FALLBACK_ZONES = [
  'Europe/Paris',
  'Europe/London',
  'Europe/Brussels',
  'Europe/Madrid',
  'Europe/Berlin',
  'Europe/Lisbon',
  'Europe/Zurich',
  'America/Montreal',
  'America/New_York',
  'America/Los_Angeles',
  'Africa/Casablanca',
  'Africa/Abidjan',
  'Indian/Reunion',
  'Pacific/Noumea',
  'UTC',
];

function allZones(): string[] {
  const anyIntl = Intl as unknown as {supportedValuesOf?: (k: string) => string[]};
  if (typeof anyIntl.supportedValuesOf === 'function') {
    try {
      return anyIntl.supportedValuesOf('timeZone');
    } catch {
      /* pas supporté, on retombe sur la liste courte */
    }
  }
  return FALLBACK_ZONES;
}

function offsetLabel(tz: string, now: Date): string {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      timeZoneName: 'shortOffset',
    }).formatToParts(now);
    return parts.find((p) => p.type === 'timeZoneName')?.value ?? '';
  } catch {
    return '';
  }
}

function timeLabel(tz: string, now: Date, locale: string): string {
  try {
    return new Intl.DateTimeFormat(locale, {
      timeZone: tz,
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(now);
  } catch {
    return '';
  }
}

export default function TimezoneTool(): React.ReactNode {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const bcp47 = LOCALE_TO_BCP47[currentLocale] ?? currentLocale;
  const [detected, setDetected] = useState('');
  const [selected, setSelected] = useState('');
  const [query, setQuery] = useState('');
  const [now, setNow] = useState<Date | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let tz = '';
    try {
      tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch {
      /* ignore */
    }
    setDetected(tz);
    setSelected(tz);
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const zones = useMemo(() => allZones(), []);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return zones;
    return zones.filter((z) => z.toLowerCase().includes(q));
  }, [zones, query]);

  const copy = () => {
    if (!selected) return;
    try {
      void navigator.clipboard.writeText(selected);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard indisponible (http, permissions) : l'utilisateur copie à la main */
    }
  };

  const ready = now !== null && selected !== '';

  const metaTitle = translate({
    id: 'tools.timezone.meta.title',
    message: 'Trouver votre fuseau horaire',
    description: 'Timezone tool: page/tab title',
  });
  const copyLabel = copied
    ? translate({
        id: 'tools.timezone.copied',
        message: 'Copié !',
        description: 'Timezone tool: copy button, after copying',
      })
    : translate({
        id: 'tools.timezone.copy',
        message: 'Copier',
        description: 'Timezone tool: copy button label',
      });
  const searchPlaceholder = translate({
    id: 'tools.timezone.searchPlaceholder',
    message: 'Rechercher (ex. Paris, New York, Reunion…)',
    description: 'Timezone tool: search input placeholder',
  });
  const searchAria = translate({
    id: 'tools.timezone.searchAria',
    message: 'Rechercher un fuseau horaire',
    description: 'Timezone tool: search input aria-label',
  });
  const listAria = translate({
    id: 'tools.timezone.listAria',
    message: 'Liste des fuseaux horaires',
    description: 'Timezone tool: timezone list aria-label',
  });

  return (
    <Layout title={metaTitle} noFooter={false}>
      <Head>
        <meta name="robots" content="noindex, nofollow, noarchive" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Head>

      <main className={shared.landing}>
        <div className={shared.container}>
          <div className={styles.wrap}>
            <div className={styles.glow} aria-hidden="true" />

            <h1 className={styles.title}>
              <Translate
                id="tools.timezone.title"
                description="Timezone tool: main heading">
                Votre fuseau horaire
              </Translate>
            </h1>
            <p className={styles.intro}>
              <Translate
                id="tools.timezone.intro"
                description="Timezone tool: intro paragraph">
                Certains réglages de RaidProtect demandent un fuseau horaire.
                Voici celui de votre appareil, prêt à coller. Tout se passe dans
                votre navigateur, rien n'est envoyé.
              </Translate>
            </p>

            <div className={styles.card}>
              <div className={styles.cardLabel}>
                <Translate
                  id="tools.timezone.cardLabel"
                  description="Timezone tool: label above the value to paste">
                  À indiquer dans RaidProtect
                </Translate>
              </div>
              <div className={styles.valueRow}>
                <code className={styles.value}>{ready ? selected : '…'}</code>
                <button
                  type="button"
                  className={styles.copyBtn}
                  onClick={copy}
                  disabled={!ready}>
                  {copyLabel}
                </button>
              </div>

              {ready && (
                <div className={styles.meta}>
                  <span className={styles.offset}>{offsetLabel(selected, now!)}</span>
                  <span className={styles.clock}>
                    {timeLabel(selected, now!, bcp47)}
                  </span>
                </div>
              )}

              {ready && detected && (
                <div className={styles.detected}>
                  {selected === detected ? (
                    <Translate
                      id="tools.timezone.detectedAuto"
                      description="Timezone tool: shown when the selected zone is the detected one">
                      Détecté automatiquement sur cet appareil.
                    </Translate>
                  ) : (
                    <>
                      <Translate
                        id="tools.timezone.detectedOn"
                        description="Timezone tool: prefix before a button restoring the detected zone">
                        Détecté sur cet appareil :
                      </Translate>{' '}
                      <button
                        type="button"
                        className={styles.linkBtn}
                        onClick={() => setSelected(detected)}>
                        {detected}
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className={styles.changeBlock}>
              <h2 className={styles.changeTitle}>
                <Translate
                  id="tools.timezone.changeTitle"
                  description="Timezone tool: heading of the change section">
                  Ce n'est pas le bon ?
                </Translate>
              </h2>
              <p className={styles.changeHint}>
                <Translate
                  id="tools.timezone.changeHint"
                  description="Timezone tool: hint under the change heading">
                  Cherchez votre ville ou votre région, puis choisissez le
                  fuseau dans la liste.
                </Translate>
              </p>
              <input
                type="text"
                className={styles.search}
                placeholder={searchPlaceholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label={searchAria}
              />
              <select
                className={styles.select}
                value={filtered.includes(selected) ? selected : ''}
                onChange={(e) => setSelected(e.target.value)}
                size={8}
                aria-label={listAria}>
                {filtered.map((z) => (
                  <option key={z} value={z}>
                    {z}
                  </option>
                ))}
                {filtered.length === 0 && (
                  <option value="" disabled>
                    {translate({
                      id: 'tools.timezone.noResult',
                      message: 'Aucun résultat',
                      description: 'Timezone tool: empty search result',
                    })}
                  </option>
                )}
              </select>
            </div>

            <p className={styles.help}>
              <Translate
                id="tools.timezone.help"
                description="Timezone tool: closing help paragraph; {code} renders an example zone in a <code> tag"
                values={{code: <code>Europe/Paris</code>}}>
                {'Copiez la valeur ci-dessus et collez-la dans RaidProtect quand un fuseau horaire vous est demandé (elle est au format standard « Continent/Ville », par exemple {code}).'}
              </Translate>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
