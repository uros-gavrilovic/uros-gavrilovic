import { TestBed } from '@angular/core/testing';
import { Project } from '../../../model/model';
import { ProjectDialog } from './project-dialog';

describe('ProjectDialog', () => {
	const project: Project = {
		name: 'Test project',
		shortDescription: 'Short.',
		longDescription: ['Long.'],
		tech: ['Angular'],
		icon: 'compass',
	};

	afterEach(() => document.querySelector('[role="dialog"]')?.remove());

	/** Opens the dialog for the project and returns it; it is attached to <body>. */
	async function open(p: Project): Promise<Element> {
		const fixture = TestBed.createComponent(ProjectDialog);
		fixture.componentRef.setInput('project', p);
		fixture.componentRef.setInput('visible', true);
		await fixture.whenStable();
		const dialog = document.querySelector('[role="dialog"]');
		expect(dialog, 'dialog should be open').toBeTruthy();
		return dialog!;
	}

	it('should link to the repository when the project has one', async () => {
		const href = 'https://github.com/example/test-project';
		const dialog = await open({ ...project, href });

		expect(dialog.querySelector<HTMLAnchorElement>('.p-dialog-footer a.btn')!.href).toBe(href);
	});

	it('should leave out the footer when the project has no repository link', async () => {
		const dialog = await open(project);

		expect(dialog.querySelector('.p-dialog-footer')).toBeNull();
		expect(dialog.textContent).not.toContain('View on GitHub');
	});
});
