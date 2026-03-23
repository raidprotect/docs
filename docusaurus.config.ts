import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import versions from './versions.json';

const lastStableVersion = versions.find((version) => version !== 'beta')

const defaultLocale = 'fr'

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
        url: 'https://docs.raidprotect.bot',
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
                    fr: 'https://raidprotect.bot',
                    en: 'https://raidprotect.bot/en',
                    de: 'https://raidprotect.bot/de',
                    es: 'https://raidprotect.bot/es',
                    pt: 'https://raidprotect.bot/pt'
                },
                legal: {
                    fr: 'https://raidprotect.bot/legal',
                    en: 'https://raidprotect.bot/en/legal',
                    de: 'https://raidprotect.bot/de/legal',
                    es: 'https://raidprotect.bot/es/legal',
                    pt: 'https://raidprotect.bot/pt/legal'
                },
                terms: {
                    fr: 'https://raidprotect.bot/terms',
                    en: 'https://raidprotect.bot/en/terms',
                    de: 'https://raidprotect.bot/de/terms',
                    es: 'https://raidprotect.bot/es/terms',
                    pt: 'https://raidprotect.bot/pt/terms'
                },
                privacy: {
                    fr: 'https://raidprotect.bot/privacy',
                    en: 'https://raidprotect.bot/en/privacy',
                    de: 'https://raidprotect.bot/de/privacy',
                    es: 'https://raidprotect.bot/es/privacy',
                    pt: 'https://raidprotect.bot/pt/privacy'
                },
                cookies: {
                    fr: 'https://raidprotect.bot/cookies',
                    en: 'https://raidprotect.bot/en/cookies',
                    de: 'https://raidprotect.bot/de/cookies',
                    es: 'https://raidprotect.bot/es/cookies',
                    pt: 'https://raidprotect.bot/pt/cookies'
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
                    fr: '<strong>La mise à jour <a href="https://docs.raidprotect.bot/blog/3.3.2-authentication-manager">Authentication Manager (3.3.2)</a> est disponible !</strong>',
                    en: '<strong>The <a href="https://docs.raidprotect.bot/en/blog/3.3.2-authentication-manager">Authentication Manager (3.3.2)</a> update is now live!</strong>',
                    de: '<strong>Das Update <a href="https://docs.raidprotect.bot/de/blog/3.3.2-authentication-manager">Authentication Manager (3.3.2)</a> ist jetzt verfügbar!</strong>',
                    es: '<strong>¡La actualización <a href="https://docs.raidprotect.bot/es/blog/3.3.2-authentication-manager">Authentication Manager (3.3.2)</a> ya está disponible!</strong>',
                    pt: '<strong>A atualização <a href="https://docs.raidprotect.bot/pt/blog/3.3.2-authentication-manager">Authentication Manager (3.3.2)</a> já está disponível!</strong>'
                }
            },
            excludedCanonical: []
        },
        plugins: [
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
                    logoSrc: '/img/extend_logo.svg',
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
                        routeBasePath: '/',
                        sidebarPath: './sidebars.ts',
                        editUrl: 'https://github.com/raidprotect/docs/tree/master/',
                        lastVersion: lastStableVersion,
                        onlyIncludeVersions: ['current', lastStableVersion, '3.3.1'],
                        versions: {
                            current: {
                                label: 'Bêta 🚧',
                                path: 'beta'
                            },
                            [lastStableVersion]: {
                                label: 'Stable',
                            },
                            '3.3.1': {
                                label: 'Ancienne'
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
                    pages: false,
                    sitemap: {
                        lastmod: 'date',
                        ignorePatterns: ['**/beta/**'],
                        filename: 'sitemap.xml',
                        changefreq: null,
                        async createSitemapItems(params) {
                            const items = await params.defaultCreateSitemapItems(params)
                            return items.map(i => ({
                                ...i,
                                priority: urlPriorities[i.url.replace(new RegExp('https://docs.raidprotect.bot/(en/)?'), '')] ?? 0.5
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
                        { "@type": "Organization", "@id": "https://raidprotect.bot/#organization" },
                        {
                            "@type": "WebSite",
                            "@id": "https://docs.raidprotect.bot/#website",
                            "url": "https://docs.raidprotect.bot/",
                            "name": "RaidProtect Docs",
                            "publisher": { "@id": "https://raidprotect.bot/#organization" },
                            "inLanguage": ["fr", "en", "de", "es", "pt"]
                        }
                    ]
                })
            }
        ],
        themeConfig: {
            image: 'https://cdn.prod.website-files.com/677fbd67c3c9318f7fb56659/678fefffd131bc2bbafd4468_RP-embed.webp',
            metadata: [
                { name: 'theme-color', content: '#D35F5F' }
            ],
            docs: {
                versionPersistence: 'localStorage',
                sidebar: {
                    hideable: true,
                },
            },
            announcementBar: {
                id: '3.3.2',
                content: '<strong>The <a href="https://docs.raidprotect.bot/en/blog/3.3.2-authentication-manager">Authentication Manager (3.3.2)</a> update is now live!</strong>',
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
                    src: 'img/extend_logo.svg',
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
                        type: 'docsVersionDropdown',
                        position: 'right',
                        dropdownActiveClassDisabled: true,
                        // dropdownItemsAfter: [
                        //     {
                        //         type: 'html',
                        //         value: '<hr class="dropdown-separator">',
                        //     },
                        //     {
                        //         to: '/versions',
                        //         label: 'All versions',
                        //     },
                        // ],
                    },
                    {
                        type: 'localeDropdown',
                        position: 'right',
                        // dropdownItemsAfter: [
                        //     {
                        //         type: 'html',
                        //         value: '<hr style="margin: 0.3rem 0;">',
                        //     },
                        //     {
                        //         href: 'https://github.com/facebook/docusaurus/issues/3526',
                        //         label: 'Help Us Translate',
                        //     },
                        // ],
                    },
                    {
                        href: 'https://discord.com/invite/raidprotect',
                        className: 'navbar-social navbar-discord',
                        position: 'right',
                        'aria-label': 'Discord server',
                    },
                    {
                        href: 'https://x.com/raidprotect',
                        className: 'navbar-social navbar-x',
                        position: 'right',
                        'aria-label': 'Twitter',
                    },
                    {
                        href: 'https://www.youtube.com/@RaidProtect',
                        className: 'navbar-social navbar-youtube',
                        position: 'right',
                        'aria-label': 'YouTube',
                    },
                    {
                        href: 'https://github.com/raidprotect',
                        className: 'navbar-social navbar-github',
                        position: 'right',
                        'aria-label': 'GitHub repository',
                    }
                ],
            },
            footer: {
                style: 'light',
                logo: {
                    alt: 'RaidProtect',
                    src: 'img/extend_logo.svg',
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
                                to: '/',
                                target: '_self'
                            },
                            {
                                label: 'Blog',
                                to: '/blog',
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
                                to: 'legal',
                                target: '_self'
                            },
                            {
                                label: 'Conditions d\'utilisation',
                                to: 'terms',
                                target: '_self'
                            },
                            {
                                label: 'Politique de confidentialité',
                                to: 'privacy',
                                target: '_self'
                            },
                            {
                                label: 'Politique des cookies',
                                to: 'cookies',
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