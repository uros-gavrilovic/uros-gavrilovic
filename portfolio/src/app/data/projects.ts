import { GalleryImage, Project } from '../model/model';

const PLACEHOLDER_GALLERY: readonly GalleryImage[] = [
	{ src: 'images/project/placeholder/placeholder-1.svg', alt: 'Placeholder images' },
	{ src: 'images/project/placeholder/placeholder-2.svg', alt: 'Placeholder images' },
	{ src: 'images/project/placeholder/placeholder-3.svg', alt: 'Placeholder images' },
];

export const PROJECTS: readonly Project[] = [
	{
		name: 'Faculty Flow',
		shortDescription:
			'Microservice-based scheduling and reservation system with async inter-service messaging and a JWT-secured API gateway.',
		longDescription: [
			'Faculty Flow is a scheduling and reservation system built as a set of Spring Boot microservices.',
			'The services talk to each other asynchronously through Kafka, and every request comes in through a Spring Cloud Gateway that checks its JWT before passing it on. Everything is containerized with Docker.',
		],
		tech: ['Spring Boot', 'Spring Cloud Gateway', 'Kafka', 'Docker'],
		icon: 'calendar',
		href: 'https://github.com/uros-gavrilovic/faculty-flow',
		gallery: [
			{ src: 'images/project/faculty-flow/calendar.png', alt: 'Scheduler' },
			{ src: 'images/project/faculty-flow/reservation.png', alt: 'Reservation request' },
			{ src: 'images/project/faculty-flow/login.png', alt: 'Login page' },
		],
	},
	{
		name: 'WajFinder',
		shortDescription:
			'Dijkstra-based route finder between cities, weighing distance against danger and resource cost, with a graph database behind it.',
		longDescription: [
			'WajFinder finds routes between cities with Dijkstra’s algorithm. Instead of looking at distance alone, it weighs each route against how dangerous it is and how many resources it costs.',
			'It’s written in Clojure, with the map stored as a graph in Neo4j and queried with Cypher.',
		],
		tech: ['Clojure', 'Neo4j', 'Cypher', 'Docker'],
		icon: 'compass',
		href: 'https://github.com/uros-gavrilovic/wajfinder',
		gallery: PLACEHOLDER_GALLERY,
	},
	{
		name: 'Templatron',
		shortDescription:
			'Lightweight microservice that generates dynamic PDF documents from templates on demand, later adopted internally for business use.',
		longDescription: [
			'Templatron is a lightweight microservice that turns templates into dynamic PDF documents on demand.',
			'Templates are written in Thymeleaf and rendered to PDF with wkhtmltopdf, behind a small Spring service. It started as a side project and was later adopted internally for business use.',
		],
		tech: ['Spring', 'Thymeleaf', 'wkhtmltopdf'],
		icon: 'file-text',
		href: 'https://github.com/uros-gavrilovic/templatron',
		gallery: PLACEHOLDER_GALLERY,
	},
	{
		name: 'Hevi',
		shortDescription:
			'Fitness center management platform with an Angular web app, a React Native mobile app and a tested Spring back end on Azure.',
		longDescription: [
			'Hevi is a platform for running a fitness center: an Angular web app, a React Native mobile app, and a Spring back end hosted on Azure.',
			'The back end keeps its data in PostgreSQL, queried with jOOQ and migrated with Flyway, and is covered by tests.',
		],
		tech: ['Spring', 'Angular', 'React Native', 'PostgreSQL', 'jOOQ', 'Flyway'],
		icon: 'dumbbell',
		href: 'https://github.com/uros-gavrilovic/hevi',
		// gallery: PLACEHOLDER_GALLERY,
	},
];
