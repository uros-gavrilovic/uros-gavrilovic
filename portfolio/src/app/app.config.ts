import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import { MatchaPreset } from './primeng-preset';
import { environment } from './environment/environment';

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		providePrimeNG({
			license: environment.primeUiLicense,
			theme: {
				preset: MatchaPreset,
				options: { darkModeSelector: '.app-dark' }, // The site is light-only, so tie PrimeNG's dark mode to a class that's never set.
			},
		}),
	],
};
