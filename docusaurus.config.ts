import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {PluginOptions as SearchOptions} from 'docusaurus-plugin-enhanced-local-search';

import versions from './versions.json';

const lastStableVersion = versions.find((version) => version !== 'beta')

const defaultLocale = 'fr'

const quickLinks = {fr: 'Liens rapides', en: 'Quick links', de: 'Schnellzugriff', es: 'Accesos rápidos', pt: 'Acesso rápido'}

const urlPriorities = {
    'features/captcha': 0.8,
    'features/anti-spam': 0.7,
    'features/raid-mode': 0.7,
    'features/others': 0.7,
    'category/guides': 0.6,
    'malfunctions': 0.4,
    'guides/report-violation-to-discord': 0.4
}

export default async function createConfigAsync() {
    return {
        title: 'RaidProtect',
        tagline: 'Sécurisez votre serveur Discord',
        favicon: 'img/favicon.ico',
        url: 'https://raidprotect.bot',
        baseUrl: '/',
        organizationName: 'rapidprotect',
        projectName: 'raidprotect',
        onBrokenLinks: 'warn',
        markdown: {
            hooks: {
                onBrokenMarkdownLinks: 'warn'
            }
        },
        i18n: {
            defaultLocale: defaultLocale,
            locales: ['fr', 'en', 'de', 'es', 'pt'],
            localeConfigs: {
                    fr: {
                        label: 'Français',
                        path: 'fr'
                    },
                    en: {
                        label: 'English',
                        path: 'en'
                    },
                    de: {
                        label: 'Deutsch',
                        path: 'de'
                    },
                    es: {
                        label: 'Español',
                        path: 'es'
                    },
                    pt: {
                        label: 'Português',
                        path: 'pt'
                    }
            }
        },
        trailingSlash: false,
        customFields: {
            urls: {
                main: {
                    fr: '/',
                    en: '/en/',
                    de: '/de/',
                    es: '/es/',
                    pt: '/pt/'
                },
                invite: {
                    // URLs absolues (redirections du domaine) : localisées par
                    // langue et non vérifiées par le broken-links checker.
                    fr: 'https://raidprotect.bot/invite',
                    en: 'https://raidprotect.bot/en/invite',
                    de: 'https://raidprotect.bot/de/invite',
                    es: 'https://raidprotect.bot/es/invite',
                    pt: 'https://raidprotect.bot/pt/invite'
                },
                geranium: {
                    fr: 'https://i.dfr.gg/geranium.webm',
                    en: 'https://i.dfr.gg/en-geranium.webm',
                    de: 'https://i.dfr.gg/en-geranium.webm',
                    es: 'https://i.dfr.gg/en-geranium.webm',
                    pt: 'https://i.dfr.gg/en-geranium.webm'
                }
            },
            texts: {
                footer: {
                    fr: 'RaidProtect est un bot Discord qui protège votre serveur des utilisateurs malintentionnés grâce à son anti-spam et son captcha. <strong>Et juste là, un petit géranium.&nbsp;</strong>',
                    en: 'RaidProtect is a Discord bot that protects your server from malicious users with its anti-spam and captcha features. <strong>And right there, a little geranium.&nbsp;</strong>',
                    de: 'RaidProtect ist ein Discord-Bot, der Ihren Server vor böswilligen Nutzern schützt – dank integriertem Anti-Spam und Captcha-System. <strong>Und genau dort, ein kleines Geranium.&nbsp;</strong>',
                    es: 'RaidProtect es un bot de Discord que protege tu servidor de usuarios malintencionados gracias a su anti-spam y captcha. <strong>Y justo allí, un pequeño geranio.&nbsp;</strong>',
                    pt: 'RaidProtect é um bot do Discord que protege seu servidor de usuários maliciosos graças ao seu anti-spam e captcha. <strong>E justo lá, um pequeno gerânio.&nbsp;</strong>'
                },
                announcementBar: {
                    fr: '<strong>La mise à jour <a href="https://raidprotect.bot/blog/3.4.0-antispam-update">Antispam Update</a> est disponible !</strong>',
                    en: '<strong>The <a href="https://raidprotect.bot/en/blog/3.4.0-antispam-update">Antispam Update</a> is now live!</strong>',
                    de: '<strong>Das <a href="https://raidprotect.bot/de/blog/3.4.0-antispam-update">Antispam Update</a> ist jetzt verfügbar!</strong>',
                    es: '<strong>¡La actualización <a href="https://raidprotect.bot/es/blog/3.4.0-antispam-update">Antispam Update</a> ya está disponible!</strong>',
                    pt: '<strong>A atualização <a href="https://raidprotect.bot/pt/blog/3.4.0-antispam-update">Antispam Update</a> já está disponível!</strong>'
                }
            },
            excludedCanonical: []
        },
        plugins: [
            require.resolve('./plugins/llms-txt'),
            require.resolve('./plugins/social-preview'),
            [
                'docusaurus-plugin-enhanced-local-search',
                {
                    // Seulement la documentation, le glossaire et le blog : les pages
                    // marketing et légales ne sont pas indexées.
                    ignorePatterns: ['^/(?!(docs|learn|blog)(/|$))'],
                    categories: [
                        {match: '^/docs(/|$)', label: {fr: 'Documentation', en: 'Documentation', de: 'Dokumentation', es: 'Documentación', pt: 'Documentação'}},
                        {match: '^/learn(/|$)', label: {fr: 'Glossaire', en: 'Glossary', de: 'Glossar', es: 'Glosario', pt: 'Glossário'}},
                        // Le blog passe toujours après la documentation et le glossaire.
                        {match: '^/blog(/|$)', label: 'Blog', priority: -1},
                    ],
                    // Une seule liste pour toutes les langues : un terme absent d'une
                    // langue n'y a simplement aucun effet.
                    synonyms: [
                        ['mp', 'dm', 'message privé', 'messages privés', 'direct message', 'private message'],
                        ['ban', 'bannissement', 'bannir', 'bann', 'baneo', 'banimento'],
                        ['kick', 'expulsion', 'expulser', 'expulsar', 'rauswurf'],
                        ['membre', 'utilisateur'],
                        ['member', 'user'],
                        ['mitglied', 'benutzer', 'nutzer'],
                        ['miembro', 'usuario'],
                        ['membro', 'usuário'],
                        ['raid', 'raidmode'],
                    ],
                    // Raccourcis mis en avant quand on tape « ajouter », « premium »…
                    customEntries: [
                        {
                            title: {fr: 'Ajouter le bot', en: 'Add the bot', de: 'Bot hinzufügen', es: 'Añadir el bot', pt: 'Adicionar o bot'},
                            url: {
                                fr: 'https://raidprotect.bot/invite',
                                en: 'https://raidprotect.bot/en/invite',
                                de: 'https://raidprotect.bot/de/invite',
                                es: 'https://raidprotect.bot/es/invite',
                                pt: 'https://raidprotect.bot/pt/invite',
                            },
                            description: {
                                fr: 'Invitez RaidProtect sur votre serveur Discord.',
                                en: 'Invite RaidProtect to your Discord server.',
                                de: 'Laden Sie RaidProtect auf Ihren Discord-Server ein.',
                                es: 'Invita a RaidProtect a tu servidor de Discord.',
                                pt: 'Convide o RaidProtect para o seu servidor do Discord.',
                            },
                            keywords: {
                                fr: ['inviter', 'invitation', 'installer', 'rajouter'],
                                en: ['invite', 'install'],
                                de: ['einladen', 'installieren', 'hinzufügen'],
                                es: ['invitar', 'instalar', 'agregar'],
                                pt: ['convidar', 'instalar'],
                            },
                            category: quickLinks,
                            priority: 2,
                        },
                        {
                            title: 'Premium',
                            url: '/premium',
                            keywords: {
                                fr: ['abonnement', 'payant', 'prix', 'tarif'],
                                en: ['subscription', 'paid', 'price', 'pricing'],
                                de: ['abonnement', 'abo', 'preis'],
                                es: ['suscripción', 'pago', 'precio'],
                                pt: ['assinatura', 'pago', 'preço'],
                            },
                            category: quickLinks,
                        },
                        {
                            title: {fr: 'Serveur de support', en: 'Support server', de: 'Support-Server', es: 'Servidor de soporte', pt: 'Servidor de suporte'},
                            url: 'https://discord.com/invite/raidprotect',
                            keywords: {
                                fr: ['aide', 'contact', 'discord'],
                                en: ['help', 'contact', 'discord'],
                                de: ['hilfe', 'kontakt', 'discord'],
                                es: ['ayuda', 'contacto', 'discord'],
                                pt: ['ajuda', 'contato', 'discord'],
                            },
                            category: quickLinks,
                        },
                    ],
                    // Affichées quand le champ est vide (fenêtre ⌘K et page /search).
                    suggestions: [
                        {label: {fr: 'Installation', en: 'Installation', de: 'Installation', es: 'Instalación', pt: 'Instalação'}, href: '/docs/setup'},
                        {label: 'Captcha', href: '/docs/features/captcha'},
                        {label: {fr: 'Anti-spam', en: 'Anti-spam', de: 'Anti-Spam', es: 'Anti-spam', pt: 'Anti-spam'}, href: '/docs/features/anti-spam'},
                        {label: {fr: 'Mode raid', en: 'Raid mode', de: 'Raid-Modus', es: 'Modo raid', pt: 'Modo raid'}, href: '/docs/features/raid-mode'},
                        {label: {fr: 'Liste des commandes', en: 'Command list', de: 'Befehlsliste', es: 'Lista de comandos', pt: 'Lista de comandos'}, href: '/docs/commands'},
                    ],
                    searchPagePath: 'search',
                } satisfies Partial<SearchOptions>,
            ],
            [
                'docusaurus-plugin-github-editor',
                {
                    githubClientId: 'Ov23liMLIK4wQFUf5NKP',
                    oauthWorkerUrl: 'https://rp-docs-github-oauth.raidprotect.workers.dev',
                    repoOwner: 'raidprotect',
                    repoName: 'docs',
                    baseBranch: 'master',
                    defaultLocale: 'fr',
                    editPageTitle: 'Modifier la documentation',
                    logoSrc: '/img/icons/extend_logo.svg',
                    enableEditThisPage: true,
                    editUrlBranch: 'master',
                    storageKeyPrefix: 'rp-docs-editor',
                    prTitlePrefix: 'docs: ',
                    prBodyTemplate: '## Modification de la documentation\n\n**Fichier modifié :** `{{filePath}}`\n\n{{commitMessage}}\n\n---\n*Proposé via l\'éditeur de documentation intégré.*',
                },
            ],
        ],
        presets: [
            [
                'classic',
                {
                    docs: {
                        routeBasePath: '/docs',
                        sidebarPath: './sidebars.ts',
                        editUrl: 'https://github.com/raidprotect/docs/tree/master/',
                        lastVersion: lastStableVersion,
                        onlyIncludeVersions: ['current', lastStableVersion],
                        versions: {
                            current: {
                                label: 'Bêta 🚧',
                                path: 'beta'
                            },
                            [lastStableVersion]: {
                                label: `Stable - ${lastStableVersion}`,
                            }
                        },
                        admonitions: {
                            keywords: ['note', 'tip', 'info', 'warning', 'danger'],
                            extendDefaults: true
                        },
                        breadcrumbs: true,    
                        sidebarCollapsible: true,
                        sidebarCollapsed: false,
                        editCurrentVersion: false,
                        editLocalizedFiles: true,
                        showLastUpdateAuthor: false,
                        showLastUpdateTime: true,
                    },
                    blog: {
                        blogTitle: 'Blog',
                        blogSidebarCount: 10,
                        blogSidebarTitle: 'Blog',
                        routeBasePath: '/blog'
                    },
                    pages: {
                        path: 'src/pages',
                        routeBasePath: '/',
                        include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
                    },
                    sitemap: {
                        lastmod: 'date',
                        ignorePatterns: ['**/beta/**', '/tools/**', '**/tools/**'],
                        filename: 'sitemap.xml',
                        changefreq: null,
                        async createSitemapItems(params) {
                            const items = await params.defaultCreateSitemapItems(params)
                            const isHome = (url: string) => /^https:\/\/raidprotect\.bot\/(en|de|es|pt)?\/?$/.test(url)
                            return items.map(i => ({
                                ...i,
                                priority: isHome(i.url)
                                    ? 1.0
                                    : urlPriorities[i.url.replace(new RegExp('https://raidprotect.bot/(en/|de/|es/|pt/)?docs/'), '')] ?? 0.5
                            }))
                        },
                    },
                    theme: {
                        customCss: './src/css/custom.css',
                    },
                } satisfies Preset.Options,
            ],
        ],
        headTags: [
            {
                tagName: 'script',
                attributes: {
                    type: 'application/ld+json'
                },
                innerHTML: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Organization",
                            "@id": "https://raidprotect.bot/#organization",
                            "name": "RaidProtect",
                            "url": "https://raidprotect.bot/",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://raidprotect.bot/img/logo.png",
                                "contentUrl": "https://raidprotect.bot/img/logo.png"
                            },
                            "description": "RaidProtect develops a Discord protection bot featuring captcha verification, anti-spam, raid mode and centralized moderation.",
                            "sameAs": [
                                "https://discord.com/invite/raidprotect",
                                "https://x.com/raidprotect",
                                "https://www.youtube.com/@RaidProtect",
                                "https://github.com/raidprotect"
                            ]
                        },
                        {
                            "@type": "WebSite",
                            "@id": "https://raidprotect.bot/#website",
                            "url": "https://raidprotect.bot/",
                            "name": "RaidProtect",
                            "description": "Official site of RaidProtect, the Discord protection bot.",
                            "publisher": { "@id": "https://raidprotect.bot/#organization" },
                            "inLanguage": ["fr", "en", "de", "es", "pt"]
                        }
                    ]
                })
            }
        ],
        themeConfig: {
            metadata: [
                { name: 'theme-color', content: '#D35F5F' },
                { property: 'og:site_name', content: 'RaidProtect' },
                { property: 'og:type', content: 'website' },
                { name: 'twitter:site', content: '@raidprotect' },
                { name: 'twitter:creator', content: '@raidprotect' },
            ],
            docs: {
                versionPersistence: 'localStorage',
                sidebar: {
                    hideable: true,
                },
            },
            announcementBar: {
                id: '3.4.0',
                content: '<strong>The <a href="https://raidprotect.bot/en/blog/3.4.0-antispam-update">Antispam Update</a> is now live!</strong>',
                backgroundColor: '#BD5454',
                textColor: '#FFFFFF',
                isCloseable: false
            },
            colorMode: {
                defaultMode: 'dark',
                respectPrefersColorScheme: false,
                disableSwitch: true
            },
            navbar: {
                title: null,
                logo: {
                    alt: 'RaidProtect',
                    src: 'img/icons/extend_logo.svg',
                    href: 'main',
                    target: '_self',
                    height: '32px',
                    width: '250.81px'
                },
                items: [
                    {
                        to: 'main',
                        position: 'left',
                        label: 'Accueil',
                        target: '_self'
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'sidebar',
                        position: 'left',
                        label: 'Documentation',
                    },
                    {
                        to: 'blog',
                        position: 'left',
                        label: 'Blog',
                    },
                    {
                        href: 'https://discord.com/invite/raidprotect',
                        label: 'Support',
                        className: 'navbar-no-ext',
                        position: 'left',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                    },
                    {
                        type: 'search',
                        position: 'right',
                    },
                    {
                        type: 'localeDropdown',
                        position: 'right',
                    },
                    {
                        // Redirection du domaine vers le flux d'ajout OAuth.
                        // `to: 'invite'` est résolu par locale via customFields.urls
                        // (URLs absolues localisées : /invite, /en/invite, …) dans
                        // les swizzles Navbar/Content et MobileSidebar/PrimaryMenu.
                        to: 'invite',
                        label: 'Ajouter le bot',
                        className: 'navbar-addbot navbar-no-ext',
                        position: 'right',
                    },
                    {
                        to: '/premium',
                        label: 'Premium',
                        className: 'navbar-premium',
                        position: 'right',
                    }
                ],
            },
            footer: {
                style: 'light',
                logo: {
                    alt: 'RaidProtect',
                    src: 'img/icons/extend_logo.svg',
                    href: 'main',
                    target: '_self',
                    height: '36px',
                    width: '282.16px'
                },
                links: [
                    {
                        title: 'Navigation',
                        items: [
                            {
                                label: 'Accueil',
                                to: 'main',
                                target: '_self'
                            },
                            {
                                label: 'Documentation',
                                to: '/docs',
                                target: '_self'
                            },
                            {
                                label: 'Blog',
                                to: '/blog',
                                target: '_self'
                            },
                            {
                                label: 'Learn',
                                to: '/learn',
                                target: '_self'
                            },
                            {
                                label: 'Business',
                                to: '/business',
                                target: '_self'
                            },
                            {
                                label: 'Suggestions',
                                to: 'https://suggestions.raidprotect.bot',
                                target: '_self'
                            }
                        ],
                    },
                    {
                        title: 'Information',
                        items: [
                            {
                                label: 'Mentions légales',
                                to: '/legal',
                                target: '_self'
                            },
                            {
                                label: 'Conditions d\'utilisation',
                                to: '/terms',
                                target: '_self'
                            },
                            {
                                label: 'Politique de confidentialité',
                                to: '/privacy',
                                target: '_self'
                            },
                            {
                                label: 'Politique des cookies',
                                to: '/cookies',
                                target: '_self'
                            }
                        ],
                    },
                ],
                copyright: `© ${new Date().getFullYear()} SAS French Community Agency, RaidProtect. Tous droits réservés.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        } satisfies Preset.ThemeConfig,
        stylesheets: []
    } satisfies Config
}