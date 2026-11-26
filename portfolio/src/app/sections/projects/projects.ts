import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { Icon } from '../../shared/icon/icon';
import { ProjectDialog } from './project-dialog/project-dialog';

@Component({
	selector: 'app-project',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [Icon, ProjectDialog],
	templateUrl: './projects.html',
	styleUrl: './projects.scss',
})
export class Projects {
	protected readonly projects = PROJECTS;
	protected readonly selected = signal(0);
	protected readonly detailsOpen = signal(false);

	protected open(index: number): void {
		this.selected.set(index);
		this.detailsOpen.set(true);
	}
}
