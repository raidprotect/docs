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
		url: 'https:/docs.raidprotect.bot',
		baseUrl: '/',
		organizationName: 'rapidprotect',
		projectName: 'raidprotect',
		onBrokenLinks: 'warn',
		onBrokenMarkdownLinks: 'warn',
		i18n: {
			defaultLocale: defaultLocale,
			locales: ['fr', 'en'],
			localeConfigs: {
				fr: {
					label: 'Français',
					path: 'fr'
				},
				en: {
					label: 'English',
					path: 'en'
				}
			}
		},
		trailingSlash: false,
		customFields: {
			urls: {
				main: {
					fr: 'https://raidprotect.bot?r=0',
					en: 'https://raidprotect.bot/en'
				},
				legal: {
					fr: 'https://raidprotect.bot/legal?r=0',
					en: 'https://raidprotect.bot/en/legal'
				}
			}
		},
		presets: [
			[
				'classic',
				{
					docs: {
						routeBasePath: '/',
						sidebarPath: './sidebars.ts',
						editUrl: 'https://github.com/raidprotect/docs/tree/master/',
						lastVersion: lastStableVersion,
						onlyIncludeVersions: ['current', lastStableVersion, '3.0.0'],
						versions: {
							current: {
								label: 'Bêta 🚧',
								path: 'beta'
							},
							[lastStableVersion]: {
								label: 'Stable',
							},
							'3.0.0': {
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
		scripts: [
			{
				src: "https://cdn.nolt.io/widgets.js",
				async: true,
			},
			{
				src: "/js/nolt.js",
				defer: true
			}
		],
		headTags: [
			{
				tagName: 'script',
				attributes: {
					type: 'application/ld+json'
				},
				innerHTML: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "WebSite",
					"url": "https://docs.raidprotect.bot",
					"name": "RaidProtect Documentation",
					"publisher": {
						"@type": "Organization",
						"name": "RaidProtect",
						"url": "https://raidprotect.bot",
						"logo": "https://cdn.prod.website-files.com/677fbd67c3c9318f7fb56659/678ff5223c75df94332bb485_OrganizationLogo.svg",
						"contactPoint": {
							"@type": "ContactPoint",
							"email": "contact@raidprotect.bot",
							"contactType": "support",
							"availableLanguage": ["Fr", "En"]
						},
						"sameAs": [
							"https://x.com/raidprotect",
							"https://www.linkedin.com/company/raidprotect",
							"https://github.com/raidprotect"
						]
					},
					"inLanguage": ["Fr", "En"]
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
						// 	{
						// 		type: 'html',
						// 		value: '<hr class="dropdown-separator">',
						// 	},
						// 	{
						// 		to: '/versions',
						// 		label: 'All versions',
						// 	},
						// ],
					},
					{
						type: 'localeDropdown',
						position: 'right',
						// dropdownItemsAfter: [
						// 	{
						// 		type: 'html',
						// 		value: '<hr style="margin: 0.3rem 0;">',
						// 	},
						// 	{
						// 		href: 'https://github.com/facebook/docusaurus/issues/3526',
						// 		label: 'Help Us Translate',
						// 	},
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
								label: 'Suggestions',
								to: 'https://suggestions.raidprotect.bot',
								target: '_self',
								className: 'suggestion-button'
							},
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
								label: 'Statuts des services',
								to: 'https://status.raidprotect.bot',
								target: '_self'
							},
							{
								label: 'contact@raidprotect.bot',
								to: 'mailto:contact@raidprotect.bot'
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