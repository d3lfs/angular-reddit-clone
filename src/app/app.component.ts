import { Component, OnInit } from '@angular/core';
import { Article } from './article/article.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	articles!: Array<Article>;

	constructor() {
		this.articles = new Array();
	}

	addArticle(newTitle: HTMLInputElement, newLink: HTMLInputElement) {
		this.articles.push(new Article(newTitle.value, newLink.value, 0));
		newTitle.value = '';
		newLink.value = '';
		return false;
	}

	sortedArticles(): Array<Article> {
		return this.articles.sort(
			(a: Article, b: Article) => b.votes - a.votes
		);
	}

	title = 'angular-reddit';
}
