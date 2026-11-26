import { ComponentFixture, DeferBlockState, TestBed } from '@angular/core/testing';
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

	/** Renders the page with its @defer blocks loaded, which includes the project dialog. */
	async function renderWithDialog(): Promise<ComponentFixture<App>> {
		const fixture = TestBed.createComponent(App);
		await fixture.whenStable();
		for (const block of await fixture.getDeferBlocks()) {
			await block.render(DeferBlockState.Complete);
		}
		return fixture;
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
		expect(page.querySelectorAll('#project .card').length).toBe(PROJECTS.length);
		expect(page.querySelectorAll('.hero__social a').length).toBe(SOCIAL_LINKS.length);
	});

	it("should open a project's details from its card", async () => {
		const fixture = await renderWithDialog();
		const project = PROJECTS[1];

		const cards = fixture.nativeElement.querySelectorAll('.card__open');
		(cards[1] as HTMLButtonElement).click();
		await fixture.whenStable();

		// The dialog is attached to <body>, outside the app's element.
		const dialog = document.querySelector('[role="dialog"]');
		expect(dialog, 'dialog should be open').toBeTruthy();
		expect(dialog!.querySelector('h2')!.textContent).toContain(project.name);
		expect(dialog!.textContent).toContain(project.longDescription[0]);
		expect(dialog!.querySelectorAll('.slide').length).toBe(project.gallery!.length);
		expect(dialog!.querySelector<HTMLAnchorElement>('a.btn')!.href).toBe(project.href);
	});

	it('should close the details on Esc and give focus back to the card', async () => {
		const fixture = await renderWithDialog();
		const card = fixture.nativeElement.querySelectorAll('.card__open')[2] as HTMLButtonElement;
		card.focus();
		card.click();
		await fixture.whenStable();

		// Once the dialog has opened, focus starts on its close button.
		await vi.waitFor(() =>
			expect(document.activeElement?.getAttribute('aria-label')).toBe('Close'),
		);

		document.activeElement!.dispatchEvent(
			new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }),
		);
		await fixture.whenStable();

		await vi.waitFor(() => expect(document.querySelector('[role="dialog"]')).toBeNull());
		expect(document.activeElement).toBe(card);
	});
});
