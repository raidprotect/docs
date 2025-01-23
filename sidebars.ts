import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
	sidebar: [
		{
			type: 'doc',
			id: 'readme',
		},
		{
			type: 'doc',
			id: 'setup',
		},
		{
		 	type: 'doc',
		 	id: 'changelog'
		},
		{
			type: 'doc',
			id: 'language',
		},
		{
			type: 'category',
			label: 'features',
			link: {
				type: 'generated-index',
				title: 'Fonctionnalités'
			},
			items: [
				{
					type: 'doc',
					id: 'features/anti-spam',
				},
				{
					type: 'doc',
					id: 'features/captcha',
				},
				{
					type: 'doc',
					id: 'features/raid-mode',
				},
				{
					type: 'doc',
					id: 'features/reports',
				},
				{
					type: 'doc',
					id: 'features/channel-lock',
				},
				{
					type: 'doc',
					id: 'features/moderation',
				},
				{
					type: 'doc',
					id: 'features/utilities',
				},
			],
		},
		{
			type: 'category',
			label: 'guides',
			link: {
				type: 'generated-index',
				title: 'Guides',
			},
			items: [
				{
					type: 'doc',
					id: 'guides/malfunctions',
				},
				{
					type: 'doc',
					id: 'guides/report-violation-to-discord',
				}
			],
		},
		{
			type: 'category',
			label: 'useful-links',
			link: {
				type: 'generated-index',
				title: 'Liens utiles'
			},
			items: [
				{ 
					type: 'link',
					href: 'https://raidprotect.bot/invite',
					label: 'invite'
				},
				{
					type: 'link',
					href: 'https://raidprotect.bot/discord',
					label: 'discord',
				},
				{
					type: 'link',
					href: 'https://suggestions.raidprotect.bot',
					label: 'suggest',
				},
			],
		},
	]
};

export default sidebars;
