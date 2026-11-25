import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio';
import { Icon } from '../../shared/icon/icon';

@Component({
	selector: 'app-about',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [Icon],
	templateUrl: './about.html',
	styleUrl: './about.scss',
})
export class About {
	protected readonly profile = PROFILE;
}
