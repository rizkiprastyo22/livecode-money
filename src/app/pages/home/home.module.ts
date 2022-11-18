import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeBannerComponent } from './banner/home-banner.component';
import { HomeServiceComponent } from './service/home-service.component';
import { HomeProductComponent } from './product/home-product.component';
import { HomeAdvantagesComponent } from './advantages/home-advantages.component';
import { HomeCoursesComponent } from './courses/home-courses.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeServiceComponent,
    HomeProductComponent,
    HomeAdvantagesComponent,
    HomeCoursesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
