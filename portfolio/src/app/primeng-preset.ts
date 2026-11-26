import { definePreset } from '@primeuix/themes';
import base from '@primeuix/themes/aura/base';
import dialog from '@primeuix/themes/aura/dialog';

/**
 * PrimeNG's Aura theme in the site's milky matcha colours, from the variables in styles.scss.
 *
 * It only carries the tokens of the components the site uses, which keeps the full Aura theme
 * (about 110 kB) out of the bundle. When you use another PrimeNG component, add its tokens from
 * `@primeuix/themes/aura/<component>` to `components`, or it will render unstyled.
 */
export const MatchaPreset = definePreset(
	{ ...base, components: { dialog } },
	{
		semantic: {
			mask: {
				// A tint only, no backdrop blur: re-blurring the whole page on every frame made the
				// dialog's opening and its gallery stutter.
				background: 'rgb(35 38 29 / 0.45)',
			},
		},
		components: {
			dialog: {
				root: {
					background: 'var(--milk)',
					borderColor: 'rgb(255 255 255 / 0.6)',
					color: 'var(--ink)',
					borderRadius: '1.5rem',
					shadow: 'var(--shadow-lg)',
				},
				header: {
					padding: 'clamp(1.25rem, 3vw, 1.75rem)',
					gap: '1rem',
				},
				content: {
					padding: '0 clamp(1.25rem, 3vw, 1.75rem)',
				},
				footer: {
					padding: 'clamp(1.25rem, 3vw, 1.75rem)',
					gap: '0.75rem',
				},
			},
		},
	},
);
