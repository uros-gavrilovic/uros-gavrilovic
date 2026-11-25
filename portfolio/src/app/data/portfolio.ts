import type { IconName } from '../shared/icon/icon';

/*
 * All of the site's content lives in this file. Edit it to update the portfolio:
 * the components only read from here.
 */

export interface Profile {
	firstName: string;
	lastName: string;
	role: string;
	intro: string;
	about: readonly string[];
	facts: readonly Fact[];
	email: string;
	github: string;
	linkedin: string;
}

export interface Fact {
	icon: IconName;
	label: string;
	value: string;
	href?: string;
}

export interface SkillGroup {
	title: string;
	skills: readonly string[];
}

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

export const PROFILE: Profile = {
	firstName: 'Uroš',
	lastName: 'Gavrilović',
	role: 'Full-Stack Software Developer',
	intro:
		'I build applications that solve real-world problems and improve user experiences — with Java & Spring on the back end and Angular & React on the front.',
	about: [
		'I’m an Information Systems Engineering graduate from the Faculty of Organizational Sciences (FON), University of Belgrade, currently completing a Master’s degree in Software Engineering & AI.',
		'Ambitious, detail-oriented and highly organized, I’m passionate about software development and technology. My focus is Java & Spring, Angular & React, microservices and document management systems.',
		'Outside of work I turn ideas into side projects I love tinkering with, and I help run the BelgradeJS meetup as a co-organizer and event coordinator.',
	],
	facts: [
		{
			icon: 'graduation-cap',
			label: 'Education',
			value: 'B.Sc. Information Technology & Systems, FON, University of Belgrade',
		},
		{
			icon: 'book-open',
			label: 'Currently',
			value: 'M.Sc. Software Engineering & AI (in progress)',
		},
		{
			icon: 'users',
			label: 'Community',
			value: 'Co-organizer & event coordinator at BelgradeJS',
			href: 'https://www.meetup.com/belgrade-js/',
		},
		{
			icon: 'code',
			label: 'Focus',
			value: 'Java & Spring, Angular & React, microservices',
		},
	],
	email: 'urosgavrilovic77@gmail.com',
	github: 'https://github.com/uros-gavrilovic',
	linkedin: 'https://www.linkedin.com/in/gavrilovic-uros',
};

export const SOCIAL_LINKS: readonly SocialLink[] = [
	{ label: 'GitHub', href: PROFILE.github, icon: 'github' },
	{ label: 'LinkedIn', href: PROFILE.linkedin, icon: 'linkedin' },
	{ label: 'Email', href: `mailto:${PROFILE.email}`, icon: 'mail' },
];

export const STACK: readonly SkillGroup[] = [
	{ title: 'Languages', skills: ['Java', 'TypeScript', 'JavaScript', 'Clojure', 'PHP'] },
	{ title: 'Frontend', skills: ['Angular', 'React', 'React Native', 'Redux', 'PWA'] },
	{
		title: 'Backend',
		skills: [
			'Spring Boot',
			'Spring Cloud Gateway',
			'Hibernate',
			'jOOQ',
			'Alfresco',
			'Thymeleaf',
			'WordPress',
		],
	},
	{ title: 'Architecture', skills: ['Microservices', 'Apache Kafka', 'JWT', 'REST APIs'] },
	{ title: 'Databases', skills: ['PostgreSQL', 'SQLite', 'Neo4j', 'Flyway'] },
	{ title: 'Testing', skills: ['JUnit', 'Mockito'] },
	{ title: 'DevOps', skills: ['Git', 'Docker', 'Azure', 'Linux', 'Jira'] },
];

// TODO: the profile README notes these repository URLs still need checking.
export const PROJECTS: readonly Project[] = [
	{
		name: 'Faculty Flow',
		description:
			'Microservice-based scheduling and reservation system with async inter-service messaging and a JWT-secured API gateway.',
		tech: ['Spring Boot', 'Spring Cloud Gateway', 'Kafka', 'Docker'],
		icon: 'calendar',
		href: 'https://github.com/uros-gavrilovic/faculty-flow',
	},
	{
		name: 'WajFinder',
		description:
			'Dijkstra-based route finder between cities, weighing distance against danger and resource cost, with a graph database behind it.',
		tech: ['Clojure', 'Neo4j', 'Cypher', 'Docker'],
		icon: 'compass',
		href: 'https://github.com/uros-gavrilovic/wajfinder',
	},
	{
		name: 'Templatron',
		description:
			'Lightweight microservice that generates PDF documents from templates on demand, later adopted internally for business use.',
		tech: ['Spring', 'Thymeleaf', 'wkhtmltopdf'],
		icon: 'file-text',
		href: 'https://github.com/uros-gavrilovic/templatron',
	},
	{
		name: 'Hevi',
		description:
			'Fitness center management platform with an Angular web app, a React Native mobile app and a tested Spring back end on Azure.',
		tech: ['Spring', 'Angular', 'React Native', 'PostgreSQL', 'jOOQ', 'Flyway'],
		icon: 'dumbbell',
		href: 'https://github.com/uros-gavrilovic/hevi',
	},
];
