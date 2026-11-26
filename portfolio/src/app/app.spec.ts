import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { PROJECTS } from './data/projects';

import { SOCIAL_LINKS } from './data/social';

describe('App', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [App],
		}).compileComponents();
	});

	async function render(): Promise<HTMLElement> {
		const fixture = TestBed.createComponent(App);
		await fixture.whenStable();
		return fixture.nativeElement as HTMLElement;
	}

	it('should create the app', () => {
		const fixture = TestBed.createComponent(App);
		expect(fixture.componentInstance).toBeTruthy();
	});

	it('should render the name as the only h1', async () => {
		const page = await render();
		const headings = page.querySelectorAll('h1');
		expect(headings.length).toBe(1);
		expect(headings[0].textContent).toContain('Uroš');
		expect(headings[0].textContent).toContain('Gavrilović');
	});

	it('should point every nav link at a section on the page', async () => {
		const page = await render();
		const hrefs = Array.from(page.querySelectorAll('nav a')).map((a) => a.getAttribute('href'));
		expect(hrefs.length).toBeGreaterThan(0);
		for (const href of hrefs) {
			expect(href).toMatch(/^#/);
			expect(page.querySelector(href!), `missing target for ${href}`).toBeTruthy();
		}
	});

	it('should render every project and social link from the data file', async () => {
		const page = await render();
		expect(page.querySelectorAll('#projects .card').length).toBe(PROJECTS.length);
		expect(page.querySelectorAll('.hero__social a').length).toBe(SOCIAL_LINKS.length);
	});
});
