import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../shared/icon/icon';

@Component({
	selector: 'app-footer',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [Icon],
	templateUrl: './footer.html',
	styleUrl: './footer.scss',
})
export class Footer {
	protected readonly year = new Date().getFullYear();
}
