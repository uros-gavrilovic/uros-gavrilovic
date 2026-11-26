import {
	ChangeDetectionStrategy,
	Component,
	DOCUMENT,
	effect,
	ElementRef,
	inject,
	input,
	model,
	viewChild,
} from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { Project } from '../../../model/model';
import { Gallery } from '../../../shared/gallery/gallery';
import { Icon } from '../../../shared/icon/icon';
import { SmoothScroll } from '../../../shared/smooth-scroll/smooth-scroll';

@Component({
	selector: 'app-project-dialog',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [Dialog, Gallery, Icon],
	templateUrl: './project-dialog.html',
	styleUrl: './project-dialog.scss',
	// PrimeNG only handles Esc and backdrop clicks when it draws its own close button.
	host: { '(document:keydown.escape)': 'close()' },
})
export class ProjectDialog {
	readonly project = input.required<Project>();
	/** Colour of the icon badge, matching the project's card. */
	readonly tone = input(0);
	readonly visible = model(false);

	/** Closes the dialog on a press on the backdrop, but not on one inside the dialog. */
	protected readonly closeOnBackdrop = {
		mask: {
			onmousedown: (event: MouseEvent) => {
				if (event.target === event.currentTarget) this.close();
			},
		},
	};

	private readonly closeButton = viewChild<ElementRef<HTMLButtonElement>>('closeButton');
	/** What had focus before the dialog opened: the card that opened it. */
	private opener: HTMLElement | null = null;

	constructor() {
		const document = inject(DOCUMENT);
		const smoothScroll = inject(SmoothScroll);
		effect(() => {
			if (this.visible()) {
				// While the dialog is open, the browser scrolls it natively and PrimeNG locks the page.
				smoothScroll.pause();
				this.opener = document.activeElement as HTMLElement | null;
			} else {
				smoothScroll.resume();
				// Keyboard users carry on from the card they opened.
				this.opener?.focus({ preventScroll: true });
				this.opener = null;
			}
		});
	}

	protected close(): void {
		this.visible.set(false);
	}

	/** PrimeNG would focus the gallery first; the close button comes first in reading order. */
	protected focusCloseButton(): void {
		this.closeButton()?.nativeElement.focus();
	}
}
