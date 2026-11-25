import { booleanAttribute, ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Palette colours a wave can blend between (see the variables in styles.scss). */
export type Tone = 'milk' | 'sage-100' | 'sage-200' | 'sage-300' | 'forest';

/**
 * Soft wavy edge between two sections: drawn on the colour of the section above (`from`)
 * and filled with the colour of the section below (`to`).
 */
@Component({
	selector: 'app-wave',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'aria-hidden': 'true',
		'[style.--from]': '"var(--" + from() + ")"',
		'[style.--to]': '"var(--" + to() + ")"',
		'[class.flip]': 'flip()',
	},
	templateUrl: './wave.html',
	styleUrl: './wave.scss',
})
export class Wave {
	readonly from = input.required<Tone>();
	readonly to = input.required<Tone>();
	readonly flip = input(false, { transform: booleanAttribute });
}
