import { Project } from '../model/model';

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
			'Lightweight microservice that generates dynamic PDF documents from templates on demand, later adopted internally for business use.',
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
