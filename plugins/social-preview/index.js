/* Plugin Docusaurus « social-preview » : gère l'aperçu des liens du site
 * quand ils sont partagés ailleurs.
 *
 * Génère au build une image Open Graph (1200x630) par page
 * de doc, de glossaire, d'article de blog et pour les pages marketing, à partir
 * du titre + l'icône de la fonctionnalité (et un chiffre clé sur l'accueil),
 * puis injecte og:image / twitter:image / og:type / og:image:alt dans le HTML.
 * Rendu via Satori (HTML/CSS -> SVG) + resvg (SVG -> PNG) + sharp (compression).
 * Tourne par locale (titres localisés). Cache persistant pour des rebuilds rapides.
 *
 * Build-time only : les polices TTF/OTF vivent dans ce dossier (non servies). */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const TEMPLATE_VERSION = '3'; // bump pour invalider le cache
const LOCALES = ['en', 'de', 'es', 'pt'];

const FEATURE_ICON = {
  'raid-mode': 'iconAntiraidWhite.svg',
  'anti-spam': 'iconAntispamWhite.svg',
  captcha: 'iconCaptchaWhite.svg',
  'authentication-manager': 'iconAuthManagerWhite.svg',
  honeypot: 'iconHoneyPotWhite.svg',
  reports: 'iconReportWhite.svg',
  'scam-images': 'iconScamLens.svg',
  display: 'iconDisplayWhite.svg',
  'dm-lock': 'iconDmlockWhite.svg',
  'tag-role': 'iconTagWhite.svg',
  moderation: 'iconModView.svg',
  sanctions: 'iconSanctions.svg',
};

const CATEGORY = {
  fr: {docs: 'Documentation', learn: 'Glossaire', blog: 'Blog'},
  en: {docs: 'Documentation', learn: 'Glossary', blog: 'Blog'},
  de: {docs: 'Dokumentation', learn: 'Glossar', blog: 'Blog'},
  es: {docs: 'Documentación', learn: 'Glosario', blog: 'Blog'},
  pt: {docs: 'Documentação', learn: 'Glossário', blog: 'Blog'},
};

const TAGLINE = {
  fr: 'Bot Discord de modération et de protection',
  en: 'Discord moderation & protection bot',
  de: 'Discord-Bot für Moderation und Schutz',
  es: 'Bot de moderación y protección para Discord',
  pt: 'Bot de moderação e proteção para Discord',
};

// Chiffre clé de l'accueil (aligné sur le count par défaut du site).
const STAT = {
  fr: '400 000+ serveurs · 55M+ membres protégés',
  en: '400,000+ servers · 55M+ protected members',
  de: '400.000+ Server · 55M+ geschützte Mitglieder',
  es: '400 000+ servidores · 55M+ miembros protegidos',
  pt: '400.000+ servidores · 55M+ membros protegidos',
};

// Pages marketing (chemins relatifs à l'outDir de la locale).
const MARKETING = [
  'premium.html',
  'business.html',
  'communities/games.html',
  'communities/creators.html',
];

// Pages commerciales : titre + points mis en avant (au lieu du simple titre).
const HIGHLIGHTS = {
  'premium.html': {
    pill: 'Premium',
    title: {
      fr: 'Poussez RaidProtect plus loin',
      en: 'Push RaidProtect further',
      de: 'Holen Sie mehr aus RaidProtect',
      es: 'Lleva RaidProtect más lejos',
      pt: 'Leve o RaidProtect além',
    },
    points: {
      fr: ['Sanctions à votre vocabulaire', 'Anti-raid en mode expulsion', 'Limites étendues sur vos modules', 'Accès anticipé aux nouveautés'],
      en: ['Sanctions in your own words', 'Kick-mode anti-raid', 'Higher limits on your modules', 'Early access to new features'],
      de: ['Sanktionen in Ihren Worten', 'Anti-Raid im Kick-Modus', 'Höhere Limits für Ihre Module', 'Früher Zugang zu Neuheiten'],
      es: ['Sanciones a tu medida', 'Anti-raid en modo expulsión', 'Límites ampliados en tus módulos', 'Acceso anticipado a novedades'],
      pt: ['Sanções no seu vocabulário', 'Anti-raid em modo expulsão', 'Limites ampliados nos seus módulos', 'Acesso antecipado às novidades'],
    },
  },
  'business.html': {
    pill: 'Business',
    title: {
      fr: 'RaidProtect pour les entreprises',
      en: 'RaidProtect for companies',
      de: 'RaidProtect für Unternehmen',
      es: 'RaidProtect para empresas',
      pt: 'RaidProtect para empresas',
    },
    points: {
      fr: ['Modérateurs professionnels', 'Instance dédiée et isolée', 'Conformité RGPD assumée', 'Audit et suivi humain'],
      en: ['Professional moderators', 'Dedicated, isolated instance', 'GDPR compliant', 'Expert audit & human follow-up'],
      de: ['Professionelle Moderatoren', 'Dedizierte, isolierte Instanz', 'DSGVO-konform', 'Experten-Audit & menschliche Betreuung'],
      es: ['Moderadores profesionales', 'Instancia dedicada y aislada', 'Cumplimiento del RGPD', 'Auditoría y seguimiento humano'],
      pt: ['Moderadores profissionais', 'Instância dedicada e isolada', 'Conformidade com o RGPD', 'Auditoria e acompanhamento humano'],
    },
  },
};

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

const isVersionSegment = (seg) => seg === 'beta' || /^\d+\.\d+/.test(seg);

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'");

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  if (!m) return null;
  return decode(m[1]).replace(/\s*\|\s*RaidProtect\s*$/, '').trim();
}

const el = (type, style, children) => ({type, props: {style, ...(children !== undefined ? {children} : {})}});

module.exports = function socialPreviewPlugin(context) {
  const {currentLocale, defaultLocale} = context.i18n;
  const localePrefix = currentLocale === defaultLocale ? '' : `/${currentLocale}`;
  const cat = CATEGORY[currentLocale] || CATEGORY[defaultLocale] || CATEGORY.fr;
  const tagline = TAGLINE[currentLocale] || TAGLINE[defaultLocale] || TAGLINE.fr;
  const stat = STAT[currentLocale] || STAT[defaultLocale] || STAT.fr;
  const iconsDir = path.join(context.siteDir, 'static/img/icons');
  const cacheDir = path.join(context.siteDir, 'node_modules/.cache/social-preview');

  return {
    name: 'social-preview',
    async postBuild({siteConfig, outDir}) {
      const satori = (await import('satori')).default;
      const {Resvg} = require('@resvg/resvg-js');
      const sharp = require('sharp');

      const fonts = [
        {name: 'Nohemi', data: fs.readFileSync(path.join(__dirname, 'fonts/nohemi-700.ttf')), weight: 700, style: 'normal'},
        {name: 'Objectivity', data: fs.readFileSync(path.join(__dirname, 'fonts/objectivity-regular.otf')), weight: 400, style: 'normal'},
      ];

      const iconCache = {};
      const iconDataUri = (file) => {
        if (!file) return null;
        if (file in iconCache) return iconCache[file];
        try {
          const svg = fs.readFileSync(path.join(iconsDir, file), 'utf8');
          const png = new Resvg(svg, {fitTo: {mode: 'width', value: 180}}).render().asPng();
          iconCache[file] = `data:image/png;base64,${Buffer.from(png).toString('base64')}`;
        } catch {
          iconCache[file] = null;
        }
        return iconCache[file];
      };

      let logoUri = null;
      try {
        const logoSvg = fs.readFileSync(path.join(iconsDir, 'extend_logo.svg'), 'utf8');
        const logoPng = new Resvg(logoSvg, {fitTo: {mode: 'width', value: 660}}).render().asPng();
        logoUri = `data:image/png;base64,${Buffer.from(logoPng).toString('base64')}`;
      } catch {
        logoUri = null;
      }

      // Coche rouge pour les points mis en avant (premium/business).
      const checkSvg =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d35f5f" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg>';
      const checkUri = `data:image/png;base64,${Buffer.from(
        new Resvg(checkSvg, {fitTo: {mode: 'width', value: 56}}).render().asPng(),
      ).toString('base64')}`;

      // Collecte des pages + leur type.
      const pages = [];
      const add = (file, kind) => {
        const rel = path.relative(outDir, file).split(path.sep).join('/');
        pages.push({file, rel, kind});
      };
      for (const file of walk(path.join(outDir, 'docs'))) {
        const rel = path.relative(outDir, file).split(path.sep).join('/');
        const segs = rel.split('/');
        if (LOCALES.includes(segs[0])) continue;
        if (isVersionSegment((segs[1] || '').replace(/\.html$/, ''))) continue;
        if (/^docs\/edit(\.html)?$/.test(rel) || /\/tags\//.test(rel) || /(^|\/)404/.test(rel)) continue;
        add(file, 'docs');
      }
      for (const file of walk(path.join(outDir, 'learn'))) {
        const rel = path.relative(outDir, file).split(path.sep).join('/');
        if (LOCALES.includes(rel.split('/')[0])) continue;
        if (/\/tags\//.test(rel)) continue;
        add(file, 'learn');
      }
      // Le blog est volontairement exclu : chaque article a sa propre image
      // (frontmatter `image:`), qu'on ne doit pas écraser.
      add(path.join(outDir, 'index.html'), 'home');
      for (const rel of MARKETING) {
        const file = path.join(outDir, rel);
        if (fs.existsSync(file)) add(file, 'marketing');
      }

      const ogDir = path.join(outDir, 'img', 'og');
      fs.mkdirSync(ogDir, {recursive: true});
      fs.mkdirSync(cacheDir, {recursive: true});
      const base = (siteConfig.url || 'https://raidprotect.bot').replace(/\/$/, '') + localePrefix;
      let count = 0;

      for (const p of pages) {
        if (!fs.existsSync(p.file)) continue;
        const html = fs.readFileSync(p.file, 'utf8');
        let title = extractTitle(html);
        if (!title) continue;

        let category = null;
        let iconFile = null;
        let footer = 'raidprotect.bot';
        let ogType = 'website';
        if (p.kind === 'docs') {
          category = cat.docs;
          ogType = 'article';
          const fm = p.rel.match(/^docs\/features\/([a-z-]+)\.html$/);
          if (fm) iconFile = FEATURE_ICON[fm[1]] || null;
        } else if (p.kind === 'learn') {
          category = cat.learn;
          ogType = 'article';
        } else if (p.kind === 'blog') {
          category = cat.blog;
          ogType = 'article';
        } else if (p.kind === 'home') {
          title = title.replace(/^RaidProtect\s*[•·—-]\s*/, '');
          footer = stat;
        }

        // Pages commerciales : titre + points mis en avant.
        const hl = p.kind === 'marketing' ? HIGHLIGHTS[p.rel] : null;
        const hlTitle = hl ? hl.title[currentLocale] || hl.title[defaultLocale] : null;
        const hlPoints = hl ? hl.points[currentLocale] || hl.points[defaultLocale] : null;
        if (hl) category = hl.pill;

        // Cache : clé sur les entrées qui influent le rendu.
        const key = crypto
          .createHash('sha1')
          .update(
            [TEMPLATE_VERSION, currentLocale, p.kind, title, iconFile || '', category || '', footer, hlTitle || '', hlPoints ? hlPoints.join('¦') : ''].join('|'),
          )
          .digest('hex');
        const cachePath = path.join(cacheDir, `${key}.png`);

        let png;
        if (fs.existsSync(cachePath)) {
          png = fs.readFileSync(cachePath);
        } else {
          const icon = iconFile ? iconDataUri(iconFile) : null;
          const svg = await satori(
            el('div', {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '100%',
              height: '100%',
              padding: 72,
              backgroundColor: '#111019',
              backgroundImage: 'radial-gradient(1200px 630px at 100% 0%, rgba(211,95,95,0.28), rgba(17,16,25,0) 60%)',
              color: '#ffffff',
              fontFamily: 'Objectivity',
            }, [
              el('div', {display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between'}, [
                el('div', {display: 'flex', flexDirection: 'column'}, [
                  logoUri
                    ? {type: 'img', props: {src: logoUri, width: 330, height: 42, style: {width: 330, height: 42}}}
                    : el('div', {display: 'flex', fontFamily: 'Nohemi', fontSize: 34, fontWeight: 700}, 'RaidProtect'),
                  el('div', {display: 'flex', fontSize: 23, color: '#8f8ea0', marginTop: 16}, tagline),
                ]),
                ...(category
                  ? [el('div', {
                      display: 'flex',
                      fontSize: 22,
                      padding: '8px 20px',
                      borderRadius: 999,
                      color: '#cbcad6',
                      border: '1px solid rgba(255,255,255,0.22)',
                    }, category)]
                  : []),
              ]),
              el(
                'div',
                {display: 'flex', flexDirection: 'column'},
                hlTitle
                  ? [
                      el('div', {
                        display: 'flex',
                        fontFamily: 'Nohemi',
                        fontSize: 50,
                        fontWeight: 700,
                        lineHeight: 1.1,
                        marginBottom: 30,
                        maxWidth: 1000,
                      }, hlTitle),
                      el('div', {display: 'flex', flexDirection: 'column'},
                        hlPoints.map((pt) =>
                          el('div', {display: 'flex', alignItems: 'center', marginTop: 16, fontSize: 29, color: '#e1e0e9'}, [
                            {type: 'img', props: {src: checkUri, width: 30, height: 30, style: {width: 30, height: 30, marginRight: 18}}},
                            pt,
                          ]),
                        ),
                      ),
                    ]
                  : [
                      ...(icon
                        ? [el('div', {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 116,
                            height: 116,
                            borderRadius: 26,
                            backgroundColor: 'rgba(255,255,255,0.08)',
                            marginBottom: 30,
                          }, [{type: 'img', props: {src: icon, width: 68, height: 68, style: {width: 68, height: 68}}}])]
                        : []),
                      el('div', {
                        display: 'flex',
                        fontFamily: 'Nohemi',
                        fontSize: title.length > 48 ? 56 : 68,
                        fontWeight: 700,
                        lineHeight: 1.1,
                        maxWidth: 1000,
                      }, title),
                    ],
              ),
              el('div', {display: 'flex', fontSize: 26, color: '#8f8ea0'}, footer),
            ]),
            {width: 1200, height: 630, fonts},
          );
          const raw = new Resvg(svg).render().asPng();
          png = await sharp(raw).png({palette: true, compressionLevel: 9, effort: 8}).toBuffer();
          fs.writeFileSync(cachePath, png);
        }

        const name = (p.rel === 'index.html' ? 'home' : p.rel.replace(/\.html$/, '').replace(/\//g, '-')) + '.png';
        fs.writeFileSync(path.join(ogDir, name), png);

        const url = `${base}/img/og/${name}`;
        const alt = title.replace(/"/g, '&quot;');
        let head = html
          .replace(/<meta[^>]+property="og:image(:width|:height|:alt)?"[^>]*>/gi, '')
          .replace(/<meta[^>]+name="twitter:image"[^>]*>/gi, '')
          .replace(/<meta[^>]+name="twitter:card"[^>]*>/gi, '')
          .replace(/<meta[^>]+property="og:type"[^>]*>/gi, '');
        const tags =
          `<meta property="og:image" content="${url}"/>` +
          `<meta property="og:image:width" content="1200"/>` +
          `<meta property="og:image:height" content="630"/>` +
          `<meta property="og:image:alt" content="${alt}"/>` +
          `<meta name="twitter:image" content="${url}"/>` +
          `<meta name="twitter:card" content="summary_large_image"/>` +
          `<meta property="og:type" content="${ogType}"/>`;
        head = head.replace('</head>', `${tags}</head>`);
        fs.writeFileSync(p.file, head);
        count++;
      }

      console.log(`[social-preview] (${currentLocale}) ${count} images OG (docs, learn, marketing, accueil).`);
    },
  };
};
