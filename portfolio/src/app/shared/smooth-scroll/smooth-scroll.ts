import { DestroyRef, DOCUMENT, inject, Injectable } from '@angular/core';
import Lenis from 'lenis';

/** Ease-in-out quart: a gentle start, a long glide, and a soft landing. */
const easeInOutQuart = (t: number) => (t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2);

/** Glide length in seconds for a programmatic scroll covering `distance` pixels. */
const glideDuration = (distance: number) => Math.min(1.6, Math.max(0.7, 0.5 + distance / 2500));

/**
 * Inertial, eased scrolling for the whole page (wheel and trackpad), built on Lenis.
 * Touch keeps the device's native momentum, and `prefers-reduced-motion` turns the
 * smoothing off (Lenis checks it itself).
 *
 * Call `start()` once the page is rendered in the browser.
 */
@Injectable({ providedIn: 'root' })
export class SmoothScroll {
	private readonly document = inject(DOCUMENT);
	private lenis?: Lenis;
	private paused = false;

	constructor() {
		inject(DestroyRef).onDestroy(() => this.lenis?.destroy());
	}

	start(): void {
		if (this.lenis || !this.document.defaultView) return;
		this.lenis = new Lenis({
			// Each frame closes this fraction of the gap to the target. 0.15 answers a wheel notch in
			// under 0.3 s; lower values glide longer but feel laggy and end with a slow 1 px creep
			// (0.08 took 0.5 s and crept for 0.7 s). Try 0.12 for a little more glide.
			lerp: 0.15,
			wheelMultiplier: 0.9,
			autoRaf: true,
			// While paused, wheel and touch input is left to the browser.
			virtualScroll: () => !this.paused,
		});
	}

	/** Hands scrolling back to the browser, e.g. while a dialog is open. */
	pause(): void {
		this.paused = true;
	}

	resume(): void {
		this.paused = false;
	}

	/**
	 * Glides to a section (or the top, for `null`) and calls `onComplete` when it lands.
	 * Without Lenis it falls back to native smooth scrolling and calls `onComplete` at once.
	 */
	scrollTo(target: HTMLElement | null, onComplete: () => void): void {
		const lenis = this.lenis;
		if (!lenis) {
			if (target) target.scrollIntoView({ block: 'start' });
			else this.document.defaultView?.scrollTo({ top: 0 });
			onComplete();
			return;
		}

		const top = target ? target.getBoundingClientRect().top : -lenis.scroll;
		lenis.scrollTo(target ?? 0, {
			duration: glideDuration(Math.abs(top)),
			easing: easeInOutQuart,
			onComplete,
		});
	}

	/** Calls `callback` whenever the user wheels, swipes or drags. Returns an unsubscribe function. */
	onUserScroll(callback: () => void): () => void {
		return this.lenis?.on('virtual-scroll', callback) ?? (() => {});
	}
}
