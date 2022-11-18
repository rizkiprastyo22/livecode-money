import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ArticlesModule } from './articles/articles.module';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
    AboutModule,
    ArticlesModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
