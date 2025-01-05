import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
	sidebar: [
		{
			type: 'doc',
			id: 'home',
		},
		{
			type: 'doc',
			id: 'quick-guide',
		},
		// {
		// 	type: 'doc',
		// 	id: 'changelog'
		// },
		{
			type: 'doc',
			id: 'malfunctions',
		},
		{
			type: 'category',
			label: 'features',
			items: [
				{
					type: 'doc',
					id: 'features/antispam',
				},
				{
					type: 'doc',
					id: 'features/captcha',
				},
				{
					type: 'doc',
					id: 'features/raidmode',
				},
				{
					type: 'doc',
					id: 'features/others',
				},
			],
		},
		{
			type: 'category',
			label: 'guides',
			items: [
				{
					type: 'doc',
					id: 'guides/report-violation-to-discord',
				},
			],
		},
		{
			type: 'category',
			label: 'useful-links',
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
