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
		cover: 'images/project/faculty-flow/cover.webp',
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
			'WajFinder is a small utility app that finds routes between cities. It uses practice-proven popular pathfinding algorithm called Djikstra’s algorithm to find the shortest path between nodes.',
			'It’s written in Clojure, a Java based functional programming language. It stores the nodes in a Neo4j graph database which is accessed and queried with Cypher.',
			'Started out as an idea on finding a way how to quickly traverse my favourite game’s (DayZ) map. Since I was learning Clojure at the time and always found graph databases fascinating (although never had the actual good use-case for them until now), I figured "why not?" and decided attempt building an app that does just that!',
			'The project could be further enhanced with algorithms (such as A*) and smarter route planning that considers available resources (proximity to water wells) and safety risk weights (bandit attacks based on the road taken).',
		],
		tech: ['Clojure', 'Neo4j', 'Cypher', 'Docker'],
		icon: 'compass',
		cover: 'images/project/wajfinder/cover.webp',
		href: 'https://github.com/uros-gavrilovic/wajfinder',
		gallery: [
			{ src: 'images/project/wajfinder/graph.png', alt: 'Graph' },
			{ src: 'images/project/wajfinder/postman.png', alt: 'Postman request' },
			{ src: 'images/project/wajfinder/shortest-path.png', alt: 'Shortest path queried' },
		],
	},
	{
		name: 'Templatron',
		shortDescription:
			'Lightweight micro-service that generates dynamic PDF documents from templates on demand, later adopted internally for business use.',
		longDescription: [
			'Templatron is a lightweight microservice that turns templates into dynamic PDF documents on demand.',
			'Templates are written in Thymeleaf and rendered to PDF with wkhtmltopdf, behind a small Spring service.',
			'While working on documentation for my faculty projects, I found myself repeatedly copying and editing almost identical Word documents. Most of them differed only in a few labels or paragraphs, so I thought: why not automate this? That idea led me to build a template generator that takes a template name and a data model and produces a ready-to-use PDF’s.',
			'Eventually, I shared the idea with my colleagues at work. As a company developing a document management system, we immediately saw how useful it could be beyond my original use case, and the idea evolved into an internal tool for our DMS.',
		],
		tech: ['Spring', 'Thymeleaf', 'wkhtmltopdf', 'Postman'],
		icon: 'file-text',
		cover: 'images/project/templatron/cover.webp',
		gallery: [
			{ src: 'images/project/templatron/showcase.gif', alt: 'Showcase of template generation' }
		]
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
		// href: 'https://github.com/uros-gavrilovic/hevi',
		// gallery: PLACEHOLDER_GALLERY,
	},
];
