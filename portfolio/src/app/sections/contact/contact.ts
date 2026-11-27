import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WavesBackground } from '../../shared/waves-background/waves-background';
import { Icon } from '../../shared/icon/icon';
import { LinkedinPost } from './linkedin-post/linkedin-post';
import { LINKEDIN_POSTS, MAILTO, PROFILE } from '../../data/social';

@Component({
	selector: 'app-contact',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [WavesBackground, Icon, LinkedinPost],
	templateUrl: './contact.html',
	styleUrl: './contact.scss',
})
export class Contact {
	protected readonly profile = PROFILE;
	protected readonly mailto = MAILTO;
	protected readonly linkedinPosts = LINKEDIN_POSTS;
}
