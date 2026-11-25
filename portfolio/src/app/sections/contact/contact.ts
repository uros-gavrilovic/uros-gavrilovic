import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio';
import { Icon } from '../../shared/icon/icon';

@Component({
	selector: 'app-contact',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [Icon],
	templateUrl: './contact.html',
	styleUrl: './contact.scss',
})
export class Contact {
	protected readonly profile = PROFILE;
}
