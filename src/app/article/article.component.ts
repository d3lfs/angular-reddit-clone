import { Component, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
	@HostBinding('attr.class') cssClass = 'row';
	@Input() article!: Article;

	constructor() {}

	voteUp(): boolean {
		this.article.voteUp();
		return false;
	}

	voteDown(): boolean {
		this.article.voteDown();
		return false;
	}
}
