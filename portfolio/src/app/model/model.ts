import type { IconName } from '../shared/icon/icon';

export interface GalleryImage {
	src: string;
	alt: string;
}

export interface Project {
	name: string;
	shortDescription: string;
	longDescription: readonly string[];
	tech: readonly string[];
	icon: IconName;
	href: string;
	gallery?: readonly GalleryImage[];
}

export interface SocialLink {
	label: string;
	href: string;
	icon: IconName;
}
