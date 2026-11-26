import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-stack',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './stack.html',
	styleUrl: './stack.scss',
})
export class Stack {}
