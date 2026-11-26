import { afterNextRender, DestroyRef, DOCUMENT, inject } from '@angular/core';
import { SmoothScroll } from '../smooth-scroll/smooth-scroll';

/**
 * Keeps the URL hash in sync with the section being read, so a reload lands on the
 * same section, and makes moving between sections glide:
 * - Scrolling updates the hash with `history.replaceState`, so the back button isn't
 *   flooded with entries and the page doesn't jump.
 * - Clicking an in-page link (`#about`, `#top`, ...) scrolls smoothly and sets the hash
 *   once the scroll finishes, instead of flickering through the sections in between.
 * - Loading the page with a section hash starts at the top and glides down to it.
 *
 * It also starts the page-wide smooth scrolling (see `SmoothScroll`), which respects
 * `prefers-reduced-motion`.
 *
 * Must be called in an injection context (e.g. a component constructor).
 */
export function syncSectionWithUrl(selector = 'main section[id]'): void {
	const document = inject(DOCUMENT);
	const destroyRef = inject(DestroyRef);
	const smoothScroll = inject(SmoothScroll);

	afterNextRender(() => {
		const window = document.defaultView;
		if (!window) return;

		const sections = Array.from(document.querySelectorAll<HTMLElement>(selector));
		if (!sections.length) return;

		// We scroll to the hash ourselves on load; don't let the browser restore a position first.
		window.history.scrollRestoration = 'manual';

		let frame = 0;
		// While we're running a programmatic scroll, this is the hash to set when it ends.
		let pendingHash: string | null = null;

		const setHash = (hash: string) => {
			if (window.location.hash === hash) return;
			const { pathname, search } = window.location;
			window.history.replaceState(window.history.state, '', pathname + search + hash);
		};

		const currentSectionHash = (): string => {
			// A section counts as "current" once its top passes a line a third of the way down
			// the viewport, which matches where the eye is when a heading scrolls under the header.
			const line = window.innerHeight / 3;
			let current: HTMLElement | undefined;
			for (const section of sections) {
				if (section.getBoundingClientRect().top <= line) current = section;
				else break;
			}

			// At the very bottom, the last section may never reach the line; treat it as current.
			const atBottom =
				window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
			if (atBottom) current = sections[sections.length - 1];

			return current ? `#${current.id}` : '';
		};

		/** Smoothly scrolls to a section (or the top, for `null`), then sets `hash`. */
		const glideTo = (target: HTMLElement | null, hash: string) => {
			pendingHash = hash;
			smoothScroll.scrollTo(target, () => {
				if (pendingHash === hash) setHash(hash);
				pendingHash = null;
			});
		};

		const onScroll = () => {
			if (pendingHash !== null) return;
			if (!frame) {
				frame = window.requestAnimationFrame(() => {
					frame = 0;
					setHash(currentSectionHash());
				});
			}
		};

		const onClick = (event: MouseEvent) => {
			if (event.defaultPrevented || event.button !== 0) return;
			if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

			const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
			if (!link) return;

			const id = link.getAttribute('href')!.slice(1);
			if (id === 'top') {
				event.preventDefault();
				glideTo(null, '');
				return;
			}

			// Leave other in-page links (like the skip link) to the browser.
			const section = sections.find((s) => s.id === id);
			if (!section) return;

			event.preventDefault();
			glideTo(section, `#${id}`);
		};

		// Arriving with a section hash (e.g. after a reload): start at the top, then glide down.
		const initialId = window.location.hash.slice(1);
		const initialSection = sections.find((s) => s.id === initialId);
		if (initialSection) window.scrollTo({ top: 0, behavior: 'instant' });

		smoothScroll.start();
		// If the user takes over mid-glide, the glide is cancelled: go back to following them.
		const stopFollowingUser = smoothScroll.onUserScroll(() => (pendingHash = null));

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll, { passive: true });
		document.addEventListener('click', onClick);

		if (initialSection) {
			pendingHash = `#${initialId}`;
			// Wait for fonts so the layout (and the section's position) is final before scrolling.
			document.fonts.ready.then(() => {
				// Skip the glide if the user already started scrolling on their own.
				window.requestAnimationFrame(() => {
					if (pendingHash !== null) glideTo(initialSection, pendingHash);
				});
			});
		}

		destroyRef.onDestroy(() => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			document.removeEventListener('click', onClick);
			stopFollowingUser();
			if (frame) window.cancelAnimationFrame(frame);
		});
	});
}
