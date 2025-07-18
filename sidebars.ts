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
				type: 'doc',
				id: 'features/index'
			},
			items: [
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
					id: 'features/anti-spam',
				},
				{
					type: 'doc',
					id: 'features/dm-lock',
				},
				{
					type: 'doc',
					id: 'features/channel-lock',
				},
				{
					type: 'doc',
					id: 'features/reports',
				},
				{
					type: 'doc',
					id: 'features/moderation',
				},
				{
					type: 'doc',
					id: 'features/tag-role',
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
				type: 'doc',
				id: 'guides/index'
			},
			items: [
				{
					type: 'doc',
					id: 'guides/prefix',
				},
				{
					type: 'doc',
					id: 'guides/community',
				},
				{
					type: 'doc',
					id: 'guides/onboarding',
				},
				{
					type: 'doc',
					id: 'guides/malfunctions',
				},
				{
					type: 'doc',
					id: 'guides/id',
				},
				{
					type: 'link',
					href: 'https://discord.com/safety/360044103651-reporting-abusive-behavior-to-discord',
					label: 'report',
				},
			],
		},
		{
			type: 'category',
			label: 'useful-links',
			link: {
				type: 'doc',
				id: 'useful-links/index'
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
