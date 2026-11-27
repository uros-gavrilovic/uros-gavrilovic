import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-waves-background',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { 'aria-hidden': 'true' },
	templateUrl: './waves-background.html',
	styleUrl: './waves-background.scss',
})
export class WavesBackground {}
