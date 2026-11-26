import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { Icon } from '../../shared/icon/icon';

@Component({
	selector: 'app-projects',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [Icon],
	templateUrl: './projects.html',
	styleUrl: './projects.scss',
})
export class Projects {
	protected readonly projects = PROJECTS;
}
