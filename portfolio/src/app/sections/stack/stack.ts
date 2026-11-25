import { ChangeDetectionStrategy, Component } from '@angular/core';
import { STACK } from '../../data/portfolio';

@Component({
	selector: 'app-stack',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './stack.html',
	styleUrl: './stack.scss',
})
export class Stack {
	protected readonly groups = STACK;
}
