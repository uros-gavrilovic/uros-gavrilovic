import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-header',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './header.html',
	styleUrl: './header.scss',
})
export class Header {}
