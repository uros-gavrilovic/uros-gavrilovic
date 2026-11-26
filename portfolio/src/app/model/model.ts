import type { IconName } from '../shared/icon/icon';

export interface Project {
	name: string;
	description: string;
	tech: readonly string[];
	icon: IconName;
	href: string;
}

export interface SocialLink {
	label: string;
	href: string;
	icon: IconName;
}
