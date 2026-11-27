import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Skeleton } from 'primeng/skeleton';

@Component({
	selector: 'app-linkedin-post',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [Skeleton],
	host: { '[class.loaded]': 'loaded()' },
	templateUrl: './linkedin-post.html',
	styleUrl: './linkedin-post.scss',
})
export class LinkedinPost {

	private readonly sanitizer = inject(DomSanitizer);

	readonly urn = input.required<string>();

	protected readonly src = computed(() =>
		this.sanitizer.bypassSecurityTrustResourceUrl(
			`https://www.linkedin.com/embed/feed/update/${this.urn()}?collapsed=1`,
		),
	);
	protected readonly loaded = signal(false);
}
