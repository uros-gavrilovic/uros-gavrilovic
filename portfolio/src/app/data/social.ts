import { SocialLink } from '../model/model';

export const PROFILE = {
	email: 'urosgavrilovic77@gmail.com',
	github: 'https://github.com/uros-gavrilovic',
	linkedin: 'https://www.linkedin.com/in/gavrilovic-uros',
} as const;

export const MAILTO = `mailto:${PROFILE.email}`;

export const SOCIAL_LINKS: readonly SocialLink[] = [
	{ label: 'GitHub', href: PROFILE.github, icon: 'github' },
	{ label: 'LinkedIn', href: PROFILE.linkedin, icon: 'linkedin' },
	{ label: 'Email', href: MAILTO, icon: 'mail' },
];

export const LINKEDIN_POSTS: readonly string[] = [
	'urn:li:ugcPost:7529559744806612994',
	'urn:li:share:7510361816695201792',
	'urn:li:ugcPost:7394447917786238976',
];
