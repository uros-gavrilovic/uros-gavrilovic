import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type IconName =
	| 'arrow-right'
	| 'arrow-up'
	| 'arrow-up-right'
	| 'book-open'
	| 'calendar'
	| 'code'
	| 'compass'
	| 'dumbbell'
	| 'file-text'
	| 'github'
	| 'graduation-cap'
	| 'linkedin'
	| 'mail'
	| 'users';

const BRAND_ICONS: ReadonlySet<IconName> = new Set<IconName>(['github', 'linkedin']);

@Component({
	selector: 'app-icon',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './icon.html',
	styleUrl: './icon.scss',
})
export class Icon {
	readonly name = input.required<IconName>();

	protected readonly isBrand = computed(() => BRAND_ICONS.has(this.name()));
}
