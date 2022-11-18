import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { RouterModule } from '@angular/router';
import { ArticlesBannerComponent } from './banner/articles-banner.component';
import { ArticlesBlogComponent } from './blog/articles-blog.component';


@NgModule({
  declarations: [
    ArticlesComponent,
    ArticlesBannerComponent,
    ArticlesBlogComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ArticlesModule { }
