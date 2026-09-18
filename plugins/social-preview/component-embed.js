/* Passe 2 du plugin social-preview : component embeds Discord (`discord:component-embed`) : quand un lien du site
 * est collé dans Discord, la carte Open Graph standard est remplacée par une
 * mise en page Components V2 aux couleurs du site. Display-only : les boutons
 * ouvrent une URL, rien n'envoie d'interaction, aucun bot n'est requis.
 * Les balises OG restent en place et servent de repli.
 *
 * Passe exécutée après la génération des images OG, sur le HTML déjà écrit :
 * l'image de la carte est donc celle que le HTML final déclare en og:image.
 * Spec : https://discord.com/developers/docs/link-previews/component-embeds */

const fs = require('fs');
const path = require('path');

const ACCENT_COLOR = 0xd35f5f; // --ifm-color-primary
const SUPPORT_URL = 'https://raidprotect.bot/discord';
const MAX_COMPONENTS = 40;

const T = {
  fr: {
    docs: 'Documentation',
    support: 'Support',
    invite: 'Ajouter RaidProtect',
    changelog: (v, url) =>
      `Découvrez la liste complète des nouveautés dans le [changelog ${v}](${url}).`,
    threats: (url) =>
      `ScamLens tourne par défaut sur tous les serveurs protégés : [comment ça marche](${url}).`,
  },
  en: {
    docs: 'Documentation',
    support: 'Support',
    invite: 'Add RaidProtect',
    changelog: (v, url) => `See the full list of changes in the [${v} changelog](${url}).`,
    threats: (url) =>
      `ScamLens runs by default on every protected server: [how it works](${url}).`,
  },
  de: {
    docs: 'Dokumentation',
    support: 'Support',
    invite: 'RaidProtect hinzufügen',
    changelog: (v, url) =>
      `Die vollständige Liste der Neuerungen steht im [Changelog ${v}](${url}).`,
    threats: (url) =>
      `ScamLens läuft standardmäßig auf jedem geschützten Server: [so funktioniert es](${url}).`,
  },
  es: {
    docs: 'Documentación',
    support: 'Soporte',
    invite: 'Añadir RaidProtect',
    changelog: (v, url) =>
      `Consulta la lista completa de novedades en el [changelog ${v}](${url}).`,
    threats: (url) =>
      `ScamLens funciona por defecto en todos los servidores protegidos: [cómo funciona](${url}).`,
  },
  pt: {
    docs: 'Documentação',
    support: 'Suporte',
    invite: 'Adicionar o RaidProtect',
    changelog: (v, url) => `Veja a lista completa das novidades no [changelog ${v}](${url}).`,
    threats: (url) =>
      `O ScamLens funciona por padrão em todos os servidores protegidos: [como funciona](${url}).`,
  },
};

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'");

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else if (e.name.endsWith('.html')) out.push(full);
  }
  return out;
}

function meta(html) {
  const title = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  const desc = html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i);
  const image = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]*)"/i);
  return {
    title: title ? decode(title[1]).replace(/\s*\|\s*RaidProtect\s*$/, '').trim() : null,
    description: desc ? decode(desc[1]).trim() : null,
    image: image ? decode(image[1]).trim() : null,
  };
}

// La carte Discord est étroite : on coupe sur une frontière de phrase.
function trim(text, max) {
  if (!text) return null;
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const stop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf(', '), cut.lastIndexOf(' '));
  return `${cut.slice(0, stop > max / 3 ? stop : max).trim()}…`;
}

const escapeMd = (s) => s.replace(/([[\]])/g, '\\$1');

/* Un titre court (« Blog », « HoneyPot ») ne dit pas de quel site il vient :
 * on lui remet le suffixe retiré du <title>, sauf s'il se nomme déjà. */
const withBrand = (title) =>
  title.length < 24 && !/raidprotect/i.test(title) ? `${title} | RaidProtect` : title;

/* Métadonnées des articles de blog, lues une fois dans les sources FR : le
 * slug et la date pilotent « derniers articles », les tags et le dossier de
 * version pilotent la ligne contextuelle de chaque article. */
function readBlogPosts(siteDir) {
  const dir = path.join(siteDir, 'blog');
  const posts = [];
  if (!fs.existsSync(dir)) return posts;
  for (const folder of fs.readdirSync(dir, {withFileTypes: true})) {
    if (!folder.isDirectory()) continue;
    for (const file of fs.readdirSync(path.join(dir, folder.name))) {
      if (!/\.mdx?$/.test(file)) continue;
      const head = fs.readFileSync(path.join(dir, folder.name, file), 'utf8').slice(0, 1200);
      const get = (k) => {
        const m = head.match(new RegExp(`^${k}:\\s*(.+)$`, 'm'));
        return m ? m[1].trim().replace(/^['"]|['"]$/g, '') : null;
      };
      const slug = get('slug');
      if (!slug) continue;
      const tags = (get('tags') || '').replace(/[[\]]/g, '').split(',').map((s) => s.trim());
      posts.push({
        slug,
        date: get('date') || '',
        tags,
        version: /^\d+\.\d+/.test(folder.name) ? folder.name : null,
      });
    }
  }
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

const textDisplay = (content) => ({type: 10, content});
const separator = () => ({type: 14, spacing: 1});
const gallery = (url, description) => ({type: 12, items: [{media: {url}, description}]});

function footerRow(t, base) {
  return {
    type: 1,
    components: [
      {type: 2, style: 5, url: `${base}/docs`, label: t.docs},
      {type: 2, style: 5, url: SUPPORT_URL, label: t.support},
      {type: 2, style: 5, url: `${base}/invite`, label: t.invite},
    ],
  };
}

function countComponents(node) {
  let n = 1;
  for (const child of node.components || []) n += countComponents(child);
  for (const item of node.items || []) n += 1;
  if (node.accessory) n += 1;
  return n;
}

function scriptTag(components) {
  const payload = {component: {type: 17, accent_color: ACCENT_COLOR, components}};
  const json = JSON.stringify(payload).replace(/</g, '\\u003c');
  return `<script id="discord:component-embed" type="application/json">${json}</script>`;
}

module.exports = function injectComponentEmbeds({siteDir, outDir, base, locale, marketing}) {
  const t = T[locale] || T.fr;
  const posts = readBlogPosts(siteDir);
  const LOCALES = ['en', 'de', 'es', 'pt'];

  const read = (rel) => {
    const file = path.join(outDir, rel);
    if (!fs.existsSync(file)) return null;
    return {file, html: fs.readFileSync(file, 'utf8')};
  };
  const metaOf = (rel) => {
    const r = read(rel);
    return r ? meta(r.html) : null;
  };
  const urlOf = (rel) =>
    rel === 'index.html' ? `${base}/` : `${base}/${rel.replace(/\.html$/, '')}`;

  // Pages à traiter, avec leur type.
  const pages = [];
  const addIfExists = (rel, kind) => {
    if (fs.existsSync(path.join(outDir, rel))) pages.push({rel, kind});
  };
  for (const file of walk(path.join(outDir, 'docs'))) {
    const rel = path.relative(outDir, file).split(path.sep).join('/');
    if (LOCALES.includes(rel.split('/')[0])) continue;
    if (/(^|\/)edit\.html$/.test(rel) || /\/tags\//.test(rel) || /(^|\/)404/.test(rel)) continue;
    pages.push({rel, kind: 'docs'}); // bêta incluse : non indexée, mais partageable
  }
  for (const file of walk(path.join(outDir, 'learn'))) {
    const rel = path.relative(outDir, file).split(path.sep).join('/');
    if (LOCALES.includes(rel.split('/')[0]) || /\/tags\//.test(rel)) continue;
    pages.push({rel, kind: 'learn'});
  }
  for (const file of walk(path.join(outDir, 'blog'))) {
    const rel = path.relative(outDir, file).split(path.sep).join('/');
    if (LOCALES.includes(rel.split('/')[0])) continue;
    if (/\/(tags|page|archive)\b/.test(rel) || /^blog\/authors/.test(rel)) continue;
    pages.push({rel, kind: 'blog-post'});
  }
  addIfExists('index.html', 'home');
  for (const rel of marketing) addIfExists(rel, 'marketing');

  let count = 0;
  for (const p of pages) {
    const r = read(p.rel);
    if (!r) continue;
    const m = meta(r.html);
    if (!m.title) continue;

    // Les pages bêta n'ont pas d'image générée : on reprend celle de la page
    // stable équivalente, sinon l'image par défaut du site.
    let image = m.image;
    const betaTwin = p.rel.match(/^docs\/beta\/(.+)$/);
    if (betaTwin) {
      const stable = metaOf(`docs/${betaTwin[1]}`);
      if (stable && stable.image) image = stable.image;
    }

    const pageUrl = urlOf(p.rel);
    const head = `# [${escapeMd(withBrand(m.title))}](${pageUrl})`;
    const components = [];
    if (image) components.push(gallery(image, m.title));
    components.push(textDisplay(`${head}\n${trim(m.description, 220) || ''}`.trim()));

    if (p.kind === 'blog-post') {
      const post = posts.find((x) => x.slug === p.rel.replace(/^blog\//, '').replace(/\.html$/, ''));
      if (post && post.tags.includes('release') && post.version) {
        const anchor = post.version.replace(/\./g, '-');
        components.push(
          textDisplay(t.changelog(post.version, `${base}/docs/changelog#${anchor}`)),
        );
      } else if (post && post.tags.includes('threats')) {
        components.push(textDisplay(t.threats(`${base}/docs/features/scam-images`)));
      }
    }

    components.push(separator(), footerRow(t, base));

    const tag = scriptTag(components);
    if (countComponents({components}) > MAX_COMPONENTS) {
      console.warn(`[social-preview] ${p.rel} : trop de composants, ignoré.`);
      continue;
    }
    const html = r.html
      .replace(/<script id="discord:component-embed"[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace('</head>', `${tag}</head>`);
    fs.writeFileSync(r.file, html);
    count++;
  }
  return count;
};
