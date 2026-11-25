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
	template: `
		<svg viewBox="0 0 1440 120" preserveAspectRatio="none" focusable="false">
			<path class="back" d="M0 58C170 98 350 22 560 40s340 74 540 54c160-16 250-56 340-46v74H0Z" />
			<path class="front" d="M0 92c200-34 380 24 620 4s380-46 580-22c120 14 190 26 240 22v26H0Z" />
		</svg>
	`,
	styles: `
		:host {
			display: block;
			position: relative;
			z-index: 1;
			margin-bottom: -1px;
			background: var(--from);
			line-height: 0;
		}

		:host(.flip) svg {
			transform: scaleX(-1);
		}

		svg {
			width: 100%;
			height: clamp(3rem, 7vw, 6.5rem);
			overflow: visible;
		}

		.back {
			fill: var(--to);
			opacity: 0.45;
		}

		.front {
			fill: var(--to);
		}
	`,
})
export class Wave {
	readonly from = input.required<Tone>();
	readonly to = input.required<Tone>();
	readonly flip = input(false, { transform: booleanAttribute });
}
