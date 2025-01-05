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
		url: 'https:/docs.raidprotect.bot',
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
					path: 'fr',
				},
				en: {
					label: 'English',
					path: 'en'
				},
			},
		},
		presets: [
			[
				'classic',
				{
					docs: {
						routeBasePath: '/',
						sidebarPath: './sidebars.ts',
						editUrl: 'https://github.com/raidprotect/docs/tree/main/',
						lastVersion: lastStableVersion,
						onlyIncludeVersions: (() => {
							return ['current', lastStableVersion];
						})(),
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
						showLastUpdateAuthor: false,
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
		themeConfig: {
			docs: {
				versionPersistence: 'localStorage',
			},
			colorMode: {
				defaultMode: 'dark',
				respectPrefersColorScheme: true
			},
			image: 'img/docusaurus-social-card.jpg',
			navbar: {
				title: 'RaidProtect',
				logo: {
					alt: 'RaidProtect',
					src: 'img/logo.svg',
					href: 'https://raidprotect.bot',
					target: '_self'
				},
				items: [
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
						target: '_self'
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
				],
			},
			footer: {
				style: 'light',
				links: [],
				logo: {
					alt: 'RaidProtect',
					src: 'img/logo.svg',
					href: 'https://raidprotect.bot',
					target: '_self',
					width: '75px'
				},
				copyright: `Copyright © ${new Date().getFullYear()} RaidProtect`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		} satisfies Preset.ThemeConfig,
	} satisfies Config
}