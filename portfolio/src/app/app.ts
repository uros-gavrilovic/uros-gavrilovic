import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Stack } from './sections/stack/stack';
import { Wave } from './shared/wave/wave';

@Component({
	selector: 'app-root',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [Header, Hero, About, Stack, Projects, Contact, Footer, Wave],
	templateUrl: './app.html',
})
export class App {}
