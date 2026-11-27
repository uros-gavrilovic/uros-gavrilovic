import { definePreset } from '@primeuix/themes';
import base from '@primeuix/themes/aura/base';
import dialog from '@primeuix/themes/aura/dialog';
import skeleton from '@primeuix/themes/aura/skeleton';

/** Space around the dialog's edges, and between its content and the footer. */
const dialogPadding = 'clamp(1.25rem, 3vw, 1.75rem)';

/**
 * PrimeNG's Aura theme in the site's milky matcha colours, from the variables in styles.scss.
 *
 * It only carries the tokens of the components the site uses, which keeps the full Aura theme
 * (about 110 kB) out of the bundle. When you use another PrimeNG component, add its tokens from
 * `@primeuix/themes/aura/<component>` to `components`, or it will render unstyled.
 */
export const MatchaPreset = definePreset(
	{ ...base, components: { dialog, skeleton } },
	{
		semantic: {
			mask: {
				// A tint only, no backdrop blur: re-blurring the whole page on every frame made the
				// dialog's opening and its gallery stutter.
				background: 'rgb(35 38 29 / 0.6)',
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
					padding: dialogPadding,
					gap: '1rem',
				},
				// The content pads its own bottom so the dialog still ends with a margin when a project
				// has no footer (no repository link); the footer then needs no top padding of its own.
				content: {
					padding: `0 ${dialogPadding} ${dialogPadding}`,
				},
				footer: {
					padding: `0 ${dialogPadding} ${dialogPadding}`,
					gap: '0.75rem',
				},
			},
			skeleton: {
				root: {
					background: 'var(--sage-100)',
					animationBackground: 'rgb(255 255 255 / 0.6)',
				},
			},
		},
	},
);
