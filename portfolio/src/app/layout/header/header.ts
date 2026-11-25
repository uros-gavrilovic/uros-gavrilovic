import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio';

@Component({
	selector: 'app-header',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './header.html',
	styleUrl: './header.scss',
})
export class Header {
	protected readonly profile = PROFILE;
	protected readonly initials = PROFILE.firstName.charAt(0) + PROFILE.lastName.charAt(0);
	protected readonly links = [
		{ label: 'About', href: '#about' },
		{ label: 'Stack', href: '#stack' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Contact', href: '#contact' },
	] as const;
}
