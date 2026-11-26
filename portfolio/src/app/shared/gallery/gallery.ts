import { ChangeDetectionStrategy, Component, ElementRef, input, signal, viewChild } from '@angular/core';
import { Icon } from '../icon/icon';
import { GalleryImage } from '../../model/model';

/** A row of images you scroll or swipe through sideways, one at a time. */
@Component({
	selector: 'app-gallery',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [Icon],
	templateUrl: './gallery.html',
	styleUrl: './gallery.scss',
})
export class Gallery {
	readonly images = input.required<readonly GalleryImage[]>();
	readonly label = input('Gallery');

	protected readonly index = signal(0);
	private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');

	protected show(index: number): void {
		const track = this.track().nativeElement;
		const last = this.images().length - 1;
		track.scrollTo({ left: Math.min(Math.max(index, 0), last) * this.slideWidth(track) });
	}

	protected onScroll(): void {
		const track = this.track().nativeElement;
		this.index.set(Math.round(track.scrollLeft / this.slideWidth(track)));
	}

	/** Distance from one slide to the next, gap included. */
	private slideWidth(track: HTMLElement): number {
		const [first, second] = Array.from(track.children) as HTMLElement[];
		return second ? second.offsetLeft - first.offsetLeft : track.clientWidth;
	}
}
