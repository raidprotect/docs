import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import versions from './versions.json';

const lastStableVersion = versions.find((version) => version !== 'beta')

const defaultLocale = 'fr'

export default async function createConfigAsync() {
	return {
		title: 'RaidProtect',
		tagline: 'Sécurisez votre serveur Discord',
		favicon: 'img/favicon.ico',
		url: 'https:/docs-beta.raidprotect.bot',
		baseUrl: '/',
		organizationName: 'rapidprotect',
		projectName: 'raidprotect',
		onBrokenLinks: 'throw',
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
		customFields: {
			urls: {
				main: {
					fr: 'https://beta.raidprotect.bot',
					en: 'https://beta.raidprotect.bot/en'
				},
				legal: {
					fr: 'https://beta.raidprotect.bot/legal',
					en: 'https://beta.raidprotect.bot/en/legal'
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
						onlyIncludeVersions: ['current', lastStableVersion],
						versions: {
							current: {
								label: 'Bêta 🚧',
								path: 'beta'
							},
							[lastStableVersion]: {
								label: 'Stable',
							}
						},
						admonitions: {
							keywords: ['note', 'tip', 'info', 'warning', 'danger'],
							extendDefaults: true
						},
						breadcrumbs: true,	
						sidebarCollapsible: false,
						sidebarCollapsed: false,
						editCurrentVersion: false,
						editLocalizedFiles: true,
						showLastUpdateAuthor: true,
						showLastUpdateTime: true,
					},
					blog: false,
					pages: false,
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
		themeConfig: {
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
					height: '32px'
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
						to: 'https://suggestions.raidprotect.bot',
						position: 'left',
						label: 'Suggestions',
						target: '_self',
						className: 'suggestion-button'
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
					height: '36px'
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
				copyright: `Copyright © ${new Date().getFullYear()} - RaidProtect - RP - Tous droits réservés.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		} satisfies Preset.ThemeConfig,
		stylesheets: []
	} satisfies Config
}