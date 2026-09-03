/* Plugin Docusaurus local : génère /llms.txt et /llms-full.txt au build.
 *
 * - llms.txt : index façon « table des matières » lisible par les IA (spec
 *   llmstxt.org), listant les pages canoniques (doc, glossaire Learn, pages
 *   clés) avec leur description.
 * - llms-full.txt : même index + le contenu texte de chaque page de doc et de
 *   glossaire, pour ingestion directe par un LLM.
 *
 * Généré à partir du HTML déjà buildé (URLs exactes), locale par défaut (fr) et
 * version courante uniquement : on saute les sous-dossiers de version
 * (beta, 3.x) et de locale (en/de/es/pt). */

const fs = require('fs');
const path = require('path');

const LOCALES = ['en', 'de', 'es', 'pt'];

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile() && entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

function isVersionSegment(seg) {
  return seg === 'beta' || /^\d+\.\d+/.test(seg);
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&#x2F;/g, '/')
    .replace(/&nbsp;/g, ' ')
    .replace(/&hellip;/g, '…');
}

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  if (!m) return null;
  return decodeEntities(m[1]).replace(/\s*\|\s*RaidProtect\s*$/, '').trim();
}

function extractDescription(html) {
  const m = html.match(
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i,
  );
  return m ? decodeEntities(m[1]).trim() : '';
}

/** Texte lisible du corps d'article (pour llms-full.txt). */
function extractArticleText(html) {
  const start = html.indexOf('<article');
  const end = html.lastIndexOf('</article>');
  if (start === -1 || end === -1 || end <= start) return '';
  let body = html.slice(start, end);
  body = body
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<nav[\s\S]*?<\/nav>/gi, '');
  // Titres et blocs -> sauts de ligne
  body = body
    .replace(/<h([1-6])[^>]*>/gi, '\n\n')
    .replace(/<\/h[1-6]>/gi, '\n')
    .replace(/<\/(p|li|div|section|tr|pre|blockquote)>/gi, '\n')
    .replace(/<li[^>]*>/gi, '- ')
    .replace(/<br\s*\/?>/gi, '\n');
  body = body.replace(/<[^>]+>/g, '');
  body = decodeEntities(body);
  return body
    .split('\n')
    .map((l) => l.trim())
    .filter((l, i, arr) => !(l === '' && arr[i - 1] === ''))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function toUrl(base, outDir, file) {
  let rel = path.relative(outDir, file).split(path.sep).join('/');
  rel = rel.replace(/index\.html$/, '').replace(/\.html$/, '');
  return rel ? `${base}/${rel}` : `${base}/`;
}

/* Libellés localisés des sections (le corps des pages vient déjà du HTML
 * traduit ; on ne localise ici que l'ossature du fichier). */
const LABELS = {
  fr: {docs: 'Documentation', learn: 'Learn — Glossaire de la sécurité Discord', source: 'Source :'},
  en: {docs: 'Documentation', learn: 'Learn — Discord security glossary', source: 'Source:'},
  de: {docs: 'Dokumentation', learn: 'Learn — Glossar zur Discord-Sicherheit', source: 'Quelle:'},
  es: {docs: 'Documentación', learn: 'Learn — Glosario de seguridad de Discord', source: 'Fuente:'},
  pt: {docs: 'Documentação', learn: 'Learn — Glossário de segurança do Discord', source: 'Fonte:'},
};

/** Collecte les pages canoniques (locale par défaut, version stable) d'un
 *  sous-dossier. On saute les locales, les versions de doc (beta, 3.x) et la
 *  page technique de l'éditeur. */
function collect(base, outDir, sub, {skipVersions = false} = {}) {
  const root = path.join(outDir, sub);
  const pages = [];
  for (const file of walk(root)) {
    const rel = path.relative(outDir, file).split(path.sep).join('/');
    const segs = rel.split('/');
    if (LOCALES.includes(segs[0])) continue; // sous-dossier d'une autre locale
    const seg1 = (segs[1] || '').replace(/\.html$/, '');
    if (skipVersions && segs[0] === 'docs' && isVersionSegment(seg1)) continue;
    if (/^docs\/edit(\.html)?$/.test(rel)) continue; // page éditeur GitHub
    if (/(^|\/)404(\.html)?$/.test(rel)) continue;
    if (/\/tags\//.test(rel)) continue;
    const html = fs.readFileSync(file, 'utf8');
    const title = extractTitle(html);
    if (!title) continue;
    pages.push({
      url: toUrl(base, outDir, file),
      title,
      description: extractDescription(html),
      text: extractArticleText(html),
      rel,
    });
  }
  // tri stable par URL
  pages.sort((a, b) => a.url.localeCompare(b.url));
  return pages;
}

module.exports = function llmsTxtPlugin(context) {
  const i18n = (context && context.i18n) || {};
  const currentLocale = i18n.currentLocale || 'fr';
  const defaultLocale = i18n.defaultLocale || 'fr';
  // Chaque build de locale écrit son propre fichier dans son outDir, avec des
  // URLs préfixées de la locale (sauf la locale par défaut, servie à la racine).
  const localePrefix = currentLocale === defaultLocale ? '' : `/${currentLocale}`;
  const L = LABELS[currentLocale] || LABELS[defaultLocale] || LABELS.fr;

  return {
    name: 'llms-txt',
    async postBuild({siteConfig, outDir}) {
      const siteUrl = (siteConfig.url || 'https://raidprotect.bot').replace(
        /\/$/,
        '',
      );
      const base = siteUrl + localePrefix;

      // Résumé localisé : on reprend la meta description de la home traduite.
      let summary = siteConfig.tagline || '';
      try {
        const home = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
        const d = extractDescription(home);
        if (d) summary = d;
      } catch (e) {
        /* home absente : on garde la tagline */
      }

      const docs = collect(base, outDir, 'docs', {skipVersions: true});
      const learn = collect(base, outDir, 'learn', {skipVersions: false});

      const line = (p) =>
        `- [${p.title}](${p.url})${p.description ? `: ${p.description}` : ''}`;

      const header = `# RaidProtect\n\n> ${summary}\n`;

      // ---- llms.txt (index) ----
      const indexParts = [header];
      if (docs.length)
        indexParts.push(`## ${L.docs}\n\n${docs.map(line).join('\n')}\n`);
      if (learn.length)
        indexParts.push(`## ${L.learn}\n\n${learn.map(line).join('\n')}\n`);
      fs.writeFileSync(
        path.join(outDir, 'llms.txt'),
        indexParts.join('\n') + '\n',
        'utf8',
      );

      // ---- llms-full.txt (index + contenu) ----
      const fullParts = [header];
      const withText = [...docs, ...learn].filter((p) => p.text);
      for (const p of withText)
        fullParts.push(
          `\n\n---\n\n# ${p.title}\n${L.source} ${p.url}\n\n${p.text}`,
        );
      fs.writeFileSync(
        path.join(outDir, 'llms-full.txt'),
        fullParts.join('\n') + '\n',
        'utf8',
      );

      console.log(
        `[llms-txt] (${currentLocale}) llms.txt (${docs.length} docs + ` +
          `${learn.length} learn) et llms-full.txt (${withText.length} pages).`,
      );
    },
  };
};
