import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE, SOCIAL_LINKS } from '../../data/portfolio';
import { Icon } from '../../shared/icon/icon';

@Component({
	selector: 'app-hero',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [Icon],
	templateUrl: './hero.html',
	styleUrl: './hero.scss',
})
export class Hero {
	protected readonly profile = PROFILE;
	protected readonly socials = SOCIAL_LINKS;
}
