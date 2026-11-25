import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio';
import { Icon } from '../../shared/icon/icon';

@Component({
	selector: 'app-footer',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [Icon],
	template: `
		<footer class="footer">
			<div class="container footer__inner">
				<p>© {{ year }} {{ profile.firstName }} {{ profile.lastName }}</p>
				<p>Built with Angular · Hosted on GitHub Pages</p>
				<a class="footer__top" href="#top">
					Back to top
					<app-icon name="arrow-up" />
				</a>
			</div>
		</footer>
	`,
	styles: `
		:host {
			display: block;
		}

		.footer {
			border-top: 1px solid rgb(243 240 234 / 0.06);
			background: var(--deep);
			color: var(--sage-300);
			font-size: 0.875rem;
		}

		.footer__inner {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
			gap: 0.75rem 2rem;
			padding-block: 1.75rem;
		}

		.footer__top {
			display: inline-flex;
			align-items: center;
			gap: 0.4rem;
			color: var(--sage-200);
			font-weight: 600;
			text-decoration: none;
			transition: color 0.2s;

			&:hover {
				color: var(--milk);
			}
		}
	`,
})
export class Footer {
	protected readonly profile = PROFILE;
	protected readonly year = new Date().getFullYear();
}
