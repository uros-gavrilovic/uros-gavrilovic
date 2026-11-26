import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { SOCIAL_LINKS } from '../../data/social';

@Component({
	selector: 'app-hero',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [Icon],
	templateUrl: './hero.html',
	styleUrl: './hero.scss',
})
export class Hero {
	protected readonly socials = SOCIAL_LINKS;
}
